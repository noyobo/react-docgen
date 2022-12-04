import { shallowIgnoreVisitors } from '../utils/traverse.js';
import resolve from 'resolve';
import { dirname, extname } from 'path';
import fs from 'fs';
import type { NodePath } from '@babel/traverse';
import { visitors } from '@babel/traverse';
import type { ExportSpecifier, Identifier, ObjectProperty } from '@babel/types';
import type { Importer, ImportPath } from './index.js';
import type FileState from '../FileState.js';
import { resolveObjectPatternPropertyToValue } from '../utils/index.js';

const RESOLVE_EXTENSIONS = [
  '.js',
  '.jsx',
  '.cjs',
  '.mjs',
  '.ts',
  '.tsx',
  '.mts',
  '.cts',
];

function defaultLookupModule(filename: string, basedir: string): string {
  try {
    return resolve.sync(filename, {
      basedir,
      extensions: RESOLVE_EXTENSIONS,
    });
  } catch (error) {
    const ext = extname(filename);
    let newFilename: string;

    // if we try to import a JavaScript file it might be that we are actually pointing to
    // a TypeScript file. This can happen in ES modules as TypeScript requires to import other
    // TypeScript files with JavaScript extensions
    // https://www.typescriptlang.org/docs/handbook/esm-node.html#type-in-packagejson-and-new-extensions
    switch (ext) {
      case '.js':
      case '.mjs':
      case '.cjs':
        newFilename = `${filename.slice(0, -2)}ts`;
        break;

      case '.jsx':
        newFilename = `${filename.slice(0, -3)}tsx`;
        break;
      default:
        throw error;
    }

    return resolve.sync(newFilename, {
      basedir,
      extensions: RESOLVE_EXTENSIONS,
    });
  }
}

interface TraverseState {
  readonly name: string;
  readonly file: FileState;
  readonly seen: Set<string>;
  resultPath?: NodePath | null;
}

// Factory for the resolveImports importer
export default function makeFsImporter(
  lookupModule: (
    filename: string,
    basedir: string,
  ) => string = defaultLookupModule,
  cache: Map<string, FileState> = new Map(),
): Importer {
  function resolveImportedValue(
    path: ImportPath,
    name: string,
    file: FileState,
    seen: Set<string> = new Set(),
  ): NodePath | null {
    // Bail if no filename was provided for the current source file.
    // Also never traverse into react itself.
    const source = path.node.source?.value;
    const { filename } = file.opts;

    if (!source || !filename || source === 'react') {
      return null;
    }

    // Resolve the imported module using the Node resolver
    const basedir = dirname(filename);
    let resolvedSource: string | undefined;

    try {
      resolvedSource = lookupModule(source, basedir);
    } catch (error) {
      const { code } = error as NodeJS.ErrnoException;

      if (code === 'MODULE_NOT_FOUND' || code === 'INVALID_PACKAGE_MAIN') {
        return null;
      }

      throw error;
    }

    // Prevent recursive imports
    if (seen.has(resolvedSource)) {
      return null;
    }

    seen.add(resolvedSource);

    let nextFile = cache.get(resolvedSource);

    if (!nextFile) {
      // Read and parse the code
      const src = fs.readFileSync(resolvedSource, 'utf8');

      nextFile = file.parse(src, resolvedSource);

      cache.set(resolvedSource, nextFile);
    }

    return findExportedValue(nextFile, name, seen);
  }

  const explodedVisitors = visitors.explode<TraverseState>({
    ...shallowIgnoreVisitors,
    ExportNamedDeclaration: {
      enter: function (path, state) {
        const { file, name, seen } = state;
        const declaration = path.get('declaration');

        // export const/var ...
        if (declaration.hasNode() && declaration.isVariableDeclaration()) {
          for (const declPath of declaration.get('declarations')) {
            const id = declPath.get('id');
            const init = declPath.get('init');

            if (id.isIdentifier() && id.node.name === name && init.hasNode()) {
              // export const/var a = <init>

              state.resultPath = init;

              break;
            } else if (id.isObjectPattern()) {
              // export const/var { a } = <init>

              state.resultPath = id.get('properties').find(prop => {
                if (prop.isObjectProperty()) {
                  const value = prop.get('value');

                  return value.isIdentifier() && value.node.name === name;
                }
                // We don't handle RestElement here yet as complicated

                return false;
              });

              if (state.resultPath) {
                state.resultPath = resolveObjectPatternPropertyToValue(
                  state.resultPath as NodePath<ObjectProperty>,
                );

                break;
              }
            }
            // ArrayPattern not handled yet
          }
        } else if (
          declaration.hasNode() &&
          declaration.has('id') &&
          (declaration.get('id') as NodePath).isIdentifier() &&
          (declaration.get('id') as NodePath<Identifier>).node.name === name
        ) {
          // export function/class/type/interface/enum ...

          state.resultPath = declaration;
        } else if (path.has('specifiers')) {
          // export { ... } or export x from ... or export * as x from ...

          for (const specifierPath of path.get('specifiers')) {
            if (specifierPath.isExportNamespaceSpecifier()) {
              continue;
            }
            const exported = specifierPath.get('exported');

            if (exported.isIdentifier() && exported.node.name === name) {
              // export ... from ''
              if (path.has('source')) {
                const local = specifierPath.isExportSpecifier()
                  ? specifierPath.node.local.name
                  : 'default';

                state.resultPath = resolveImportedValue(
                  path,
                  local,
                  file,
                  seen,
                );
                if (state.resultPath) {
                  break;
                }
              } else {
                state.resultPath = (
                  specifierPath as NodePath<ExportSpecifier>
                ).get('local');

                break;
              }
            }
          }
        }

        state.resultPath ? path.stop() : path.skip();
      },
    },
    ExportDefaultDeclaration: {
      enter: function (path, state) {
        const { name } = state;

        if (name === 'default') {
          state.resultPath = path.get('declaration');

          return path.stop();
        }

        path.skip();
      },
    },
    ExportAllDeclaration: {
      enter: function (path, state) {
        const { name, file, seen } = state;
        const resolvedPath = resolveImportedValue(path, name, file, seen);

        if (resolvedPath) {
          state.resultPath = resolvedPath;

          return path.stop();
        }

        path.skip();
      },
    },
  });

  // Traverses the program looking for an export that matches the requested name
  function findExportedValue(
    file: FileState,
    name: string,
    seen: Set<string>,
  ): NodePath | null {
    const state: TraverseState = {
      file,
      name,
      seen,
    };

    file.traverse(explodedVisitors, state);

    return state.resultPath || null;
  }

  return resolveImportedValue;
}