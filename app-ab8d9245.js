/*! For license information please see app-ab8d9245.js.LICENSE.txt */
(()=>{var e={6502:(e,t,r)=>{"use strict";var n=r(7061);Object.defineProperty(t,"__esModule",{value:!0}),t.codeFrameColumns=a,t.default=function(e,t,r,i={}){if(!s){s=!0;const e="Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";if(n.emitWarning)n.emitWarning(e,"DeprecationWarning");else{new Error(e).name="DeprecationWarning",console.warn(new Error(e))}}r=Math.max(r,0);return a(e,{start:{column:r,line:t}},i)};var i=r(5389);let s=!1;const o=/\r\n|[\n\r\u2028\u2029]/;function a(e,t,r={}){const n=(r.highlightCode||r.forceColor)&&(0,i.shouldHighlight)(r),s=(0,i.getChalk)(r),a=function(e){return{gutter:e.grey,marker:e.red.bold,message:e.red.bold}}(s),l=(e,t)=>n?e(t):t,u=e.split(o),{start:c,end:p,markerLines:f}=function(e,t,r){const n=Object.assign({column:0,line:-1},e.start),i=Object.assign({},n,e.end),{linesAbove:s=2,linesBelow:o=3}=r||{},a=n.line,l=n.column,u=i.line,c=i.column;let p=Math.max(a-(s+1),0),f=Math.min(t.length,u+o);-1===a&&(p=0),-1===u&&(f=t.length);const d=u-a,h={};if(d)for(let e=0;e<=d;e++){const r=e+a;if(l)if(0===e){const e=t[r-1].length;h[r]=[l,e-l+1]}else if(e===d)h[r]=[0,c];else{const n=t[r-e].length;h[r]=[0,n]}else h[r]=!0}else h[a]=l===c?!l||[l,0]:[l,c-l];return{start:p,end:f,markerLines:h}}(t,u,r),d=t.start&&"number"==typeof t.start.column,h=String(p).length;let m=(n?(0,i.default)(e,r):e).split(o,p).slice(c,p).map(((e,t)=>{const n=c+1+t,i=` ${` ${n}`.slice(-h)} |`,s=f[n],o=!f[n+1];if(s){let t="";if(Array.isArray(s)){const n=e.slice(0,Math.max(s[0]-1,0)).replace(/[^\t]/g," "),u=s[1]||1;t=["\n ",l(a.gutter,i.replace(/\d/g," "))," ",n,l(a.marker,"^").repeat(u)].join(""),o&&r.message&&(t+=" "+l(a.message,r.message))}return[l(a.marker,">"),l(a.gutter,i),e.length>0?` ${e}`:"",t].join("")}return` ${l(a.gutter,i)}${e.length>0?` ${e}`:""}`})).join("\n");return r.message&&!d&&(m=`${" ".repeat(h+1)}${r.message}\n${m}`),n?s.reset(m):m}},9898:e=>{"use strict";e.exports=JSON.parse('{"es6.module":{"chrome":"61","and_chr":"61","edge":"16","firefox":"60","and_ff":"60","node":"13.2.0","opera":"48","op_mob":"48","safari":"10.1","ios":"10.3","samsung":"8.2","android":"61","electron":"2.0","ios_saf":"10.3"}}')},5561:e=>{"use strict";e.exports=JSON.parse('{"proposal-class-static-block":{"chrome":"94","firefox":"93"},"proposal-private-property-in-object":{"chrome":"91","firefox":"90","safari":"15","ios":"15","electron":"13.0"},"proposal-class-properties":{"chrome":"74","opera":"62","edge":"79","firefox":"90","safari":"14.1","node":"12","ios":"15","samsung":"11","electron":"6.0"},"proposal-private-methods":{"chrome":"84","opera":"70","edge":"84","firefox":"90","safari":"15","node":"14.6","ios":"15","samsung":"14","electron":"10.0"},"proposal-numeric-separator":{"chrome":"75","opera":"62","edge":"79","firefox":"70","safari":"13","node":"12.5","ios":"13","samsung":"11","electron":"6.0"},"proposal-logical-assignment-operators":{"chrome":"85","opera":"71","edge":"85","firefox":"79","safari":"14","node":"15","ios":"14","samsung":"14","electron":"10.0"},"proposal-nullish-coalescing-operator":{"chrome":"80","opera":"67","edge":"80","firefox":"72","safari":"13.1","node":"14","ios":"13.4","samsung":"13","electron":"8.0"},"proposal-optional-chaining":{"chrome":"91","firefox":"74","safari":"13.1","ios":"13.4","electron":"13.0"},"proposal-json-strings":{"chrome":"66","opera":"53","edge":"79","firefox":"62","safari":"12","node":"10","ios":"12","samsung":"9","electron":"3.0"},"proposal-optional-catch-binding":{"chrome":"66","opera":"53","edge":"79","firefox":"58","safari":"11.1","node":"10","ios":"11.3","samsung":"9","electron":"3.0"},"transform-parameters":{"chrome":"49","opera":"36","edge":"18","firefox":"53","node":"6","samsung":"5","electron":"0.37"},"proposal-async-generator-functions":{"chrome":"63","opera":"50","edge":"79","firefox":"57","safari":"12","node":"10","ios":"12","samsung":"8","electron":"3.0"},"proposal-object-rest-spread":{"chrome":"60","opera":"47","edge":"79","firefox":"55","safari":"11.1","node":"8.3","ios":"11.3","samsung":"8","electron":"2.0"},"transform-dotall-regex":{"chrome":"62","opera":"49","edge":"79","firefox":"78","safari":"11.1","node":"8.10","ios":"11.3","samsung":"8","electron":"3.0"},"proposal-unicode-property-regex":{"chrome":"64","opera":"51","edge":"79","firefox":"78","safari":"11.1","node":"10","ios":"11.3","samsung":"9","electron":"3.0"},"transform-named-capturing-groups-regex":{"chrome":"64","opera":"51","edge":"79","firefox":"78","safari":"11.1","node":"10","ios":"11.3","samsung":"9","electron":"3.0"},"transform-async-to-generator":{"chrome":"55","opera":"42","edge":"15","firefox":"52","safari":"11","node":"7.6","ios":"11","samsung":"6","electron":"1.6"},"transform-exponentiation-operator":{"chrome":"52","opera":"39","edge":"14","firefox":"52","safari":"10.1","node":"7","ios":"10.3","samsung":"6","electron":"1.3"},"transform-template-literals":{"chrome":"41","opera":"28","edge":"13","firefox":"34","safari":"13","node":"4","ios":"13","samsung":"3.4","electron":"0.21"},"transform-literals":{"chrome":"44","opera":"31","edge":"12","firefox":"53","safari":"9","node":"4","ios":"9","samsung":"4","electron":"0.30"},"transform-function-name":{"chrome":"51","opera":"38","edge":"79","firefox":"53","safari":"10","node":"6.5","ios":"10","samsung":"5","electron":"1.2"},"transform-arrow-functions":{"chrome":"47","opera":"34","edge":"13","firefox":"43","safari":"10","node":"6","ios":"10","samsung":"5","rhino":"1.7.13","electron":"0.36"},"transform-block-scoped-functions":{"chrome":"41","opera":"28","edge":"12","firefox":"46","safari":"10","node":"4","ie":"11","ios":"10","samsung":"3.4","electron":"0.21"},"transform-classes":{"chrome":"46","opera":"33","edge":"13","firefox":"45","safari":"10","node":"5","ios":"10","samsung":"5","electron":"0.36"},"transform-object-super":{"chrome":"46","opera":"33","edge":"13","firefox":"45","safari":"10","node":"5","ios":"10","samsung":"5","electron":"0.36"},"transform-shorthand-properties":{"chrome":"43","opera":"30","edge":"12","firefox":"33","safari":"9","node":"4","ios":"9","samsung":"4","electron":"0.27"},"transform-duplicate-keys":{"chrome":"42","opera":"29","edge":"12","firefox":"34","safari":"9","node":"4","ios":"9","samsung":"3.4","electron":"0.25"},"transform-computed-properties":{"chrome":"44","opera":"31","edge":"12","firefox":"34","safari":"7.1","node":"4","ios":"8","samsung":"4","electron":"0.30"},"transform-for-of":{"chrome":"51","opera":"38","edge":"15","firefox":"53","safari":"10","node":"6.5","ios":"10","samsung":"5","electron":"1.2"},"transform-sticky-regex":{"chrome":"49","opera":"36","edge":"13","firefox":"3","safari":"10","node":"6","ios":"10","samsung":"5","electron":"0.37"},"transform-unicode-escapes":{"chrome":"44","opera":"31","edge":"12","firefox":"53","safari":"9","node":"4","ios":"9","samsung":"4","electron":"0.30"},"transform-unicode-regex":{"chrome":"50","opera":"37","edge":"13","firefox":"46","safari":"12","node":"6","ios":"12","samsung":"5","electron":"1.1"},"transform-spread":{"chrome":"46","opera":"33","edge":"13","firefox":"45","safari":"10","node":"5","ios":"10","samsung":"5","electron":"0.36"},"transform-destructuring":{"chrome":"51","opera":"38","edge":"15","firefox":"53","safari":"10","node":"6.5","ios":"10","samsung":"5","electron":"1.2"},"transform-block-scoping":{"chrome":"49","opera":"36","edge":"14","firefox":"51","safari":"11","node":"6","ios":"11","samsung":"5","electron":"0.37"},"transform-typeof-symbol":{"chrome":"38","opera":"25","edge":"12","firefox":"36","safari":"9","node":"0.12","ios":"9","samsung":"3","rhino":"1.7.13","electron":"0.20"},"transform-new-target":{"chrome":"46","opera":"33","edge":"14","firefox":"41","safari":"10","node":"5","ios":"10","samsung":"5","electron":"0.36"},"transform-regenerator":{"chrome":"50","opera":"37","edge":"13","firefox":"53","safari":"10","node":"6","ios":"10","samsung":"5","electron":"1.1"},"transform-member-expression-literals":{"chrome":"7","opera":"12","edge":"12","firefox":"2","safari":"5.1","node":"0.10","ie":"9","android":"4","ios":"6","phantom":"2","samsung":"1","rhino":"1.7.13","electron":"0.20"},"transform-property-literals":{"chrome":"7","opera":"12","edge":"12","firefox":"2","safari":"5.1","node":"0.10","ie":"9","android":"4","ios":"6","phantom":"2","samsung":"1","rhino":"1.7.13","electron":"0.20"},"transform-reserved-words":{"chrome":"13","opera":"10.50","edge":"12","firefox":"2","safari":"3.1","node":"0.10","ie":"9","android":"4.4","ios":"6","phantom":"2","samsung":"1","rhino":"1.7.13","electron":"0.20"},"proposal-export-namespace-from":{"chrome":"72","and_chr":"72","edge":"79","firefox":"80","and_ff":"80","node":"13.2","opera":"60","op_mob":"51","samsung":"11.0","android":"72","electron":"5.0"}}')},3397:(e,t,r)=>{e.exports=r(9898)},9327:(e,t,r)=>{e.exports=r(5561)},5566:()=>{},1258:(e,t,r)=>{"use strict";function n(){const e=r(3291);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.assertSimpleType=h,t.makeStrongCache=u,t.makeStrongCacheSync=function(e){return o(u(e))},t.makeWeakCache=l,t.makeWeakCacheSync=function(e){return o(l(e))};var i=r(3245),s=r(8358);const o=e=>n()(e).sync;function*a(){return!0}function l(e){return c(WeakMap,e)}function u(e){return c(Map,e)}function c(e,t){const r=new e,n=new e,o=new e;return function*(e,a){const l=yield*(0,i.isAsync)(),u=l?n:r,c=yield*function*(e,t,r,n,s){const o=yield*p(t,n,s);if(o.valid)return o;if(e){const e=yield*p(r,n,s);if(e.valid){return{valid:!0,value:yield*(0,i.waitFor)(e.value.promise)}}}return{valid:!1,value:null}}(l,u,o,e,a);if(c.valid)return c.value;const h=new d(a),y=t(e,h);let g,b;if((0,s.isIterableIterator)(y)){const t=y;b=yield*(0,i.onFirstPause)(t,(()=>{g=function(e,t,r){const n=new m;return f(t,e,r,n),n}(h,o,e)}))}else b=y;return f(u,h,e,b),g&&(o.delete(e),g.release(b)),b}}function*p(e,t,r){const n=e.get(t);if(n)for(const{value:e,valid:t}of n)if(yield*t(r))return{valid:!0,value:e};return{valid:!1,value:null}}function f(e,t,r,n){t.configured()||t.forever();let i=e.get(r);switch(t.deactivate(),t.mode()){case"forever":i=[{value:n,valid:a}],e.set(r,i);break;case"invalidate":i=[{value:n,valid:t.validator()}],e.set(r,i);break;case"valid":i?i.push({value:n,valid:t.validator()}):(i=[{value:n,valid:t.validator()}],e.set(r,i))}}class d{constructor(e){this._active=!0,this._never=!1,this._forever=!1,this._invalidate=!1,this._configured=!1,this._pairs=[],this._data=void 0,this._data=e}simple(){return function(e){function t(t){if("boolean"!=typeof t)return e.using((()=>h(t())));t?e.forever():e.never()}return t.forever=()=>e.forever(),t.never=()=>e.never(),t.using=t=>e.using((()=>h(t()))),t.invalidate=t=>e.invalidate((()=>h(t()))),t}(this)}mode(){return this._never?"never":this._forever?"forever":this._invalidate?"invalidate":"valid"}forever(){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._never)throw new Error("Caching has already been configured with .never()");this._forever=!0,this._configured=!0}never(){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._forever)throw new Error("Caching has already been configured with .forever()");this._never=!0,this._configured=!0}using(e){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._never||this._forever)throw new Error("Caching has already been configured with .never or .forever()");this._configured=!0;const t=e(this._data),r=(0,i.maybeAsync)(e,"You appear to be using an async cache handler, but Babel has been called synchronously");return(0,i.isThenable)(t)?t.then((e=>(this._pairs.push([e,r]),e))):(this._pairs.push([t,r]),t)}invalidate(e){return this._invalidate=!0,this.using(e)}validator(){const e=this._pairs;return function*(t){for(const[r,n]of e)if(r!==(yield*n(t)))return!1;return!0}}deactivate(){this._active=!1}configured(){return this._configured}}function h(e){if((0,i.isThenable)(e))throw new Error("You appear to be using an async cache handler, which your current version of Babel does not support. We may add support for this in the future, but if you're on the most recent version of @babel/core and still seeing this error, then you'll need to synchronously handle your caching logic.");if(null!=e&&"string"!=typeof e&&"boolean"!=typeof e&&"number"!=typeof e)throw new Error("Cache keys must be either string, boolean, number, null, or undefined.");return e}class m{constructor(){this.released=!1,this.promise=void 0,this._resolve=void 0,this.promise=new Promise((e=>{this._resolve=e}))}release(e){this.released=!0,this._resolve(e)}}},8188:(e,t,r)=>{"use strict";function n(){const e=r(7425);return n=function(){return e},e}function i(){const e=r(5130);return i=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.buildPresetChain=function*(e,t){const r=yield*f(e,t);return r?{plugins:M(r.plugins),presets:M(r.presets),options:r.options.map((e=>L(e))),files:new Set}:null},t.buildPresetChainWalker=void 0,t.buildRootChain=function*(e,t){let r,i;const s=new a.ConfigPrinter,u=yield*E({options:e,dirname:t.cwd},t,void 0,s);if(!u)return null;const c=yield*s.output();let p;"string"==typeof e.configFile?p=yield*(0,l.loadConfig)(e.configFile,t.cwd,t.envName,t.caller):!1!==e.configFile&&(p=yield*(0,l.findRootConfig)(t.root,t.envName,t.caller));let{babelrc:f,babelrcRoots:d}=e,h=t.cwd;const m=B(),y=new a.ConfigPrinter;if(p){const e=g(p),n=yield*S(e,t,void 0,y);if(!n)return null;r=yield*y.output(),void 0===f&&(f=e.options.babelrc),void 0===d&&(h=e.dirname,d=e.options.babelrcRoots),F(m,n)}let v,T,x=!1;const A=B();if((!0===f||void 0===f)&&"string"==typeof t.filename){const e=yield*(0,l.findPackageData)(t.filename);if(e&&function(e,t,r,i){if("boolean"==typeof r)return r;const s=e.root;if(void 0===r)return-1!==t.directories.indexOf(s);let a=r;Array.isArray(a)||(a=[a]);if(a=a.map((e=>"string"==typeof e?n().resolve(i,e):e)),1===a.length&&a[0]===s)return-1!==t.directories.indexOf(s);return a.some((r=>("string"==typeof r&&(r=(0,o.default)(r,i)),t.directories.some((t=>z(r,i,t,e))))))}(t,e,d,h)){if(({ignore:v,config:T}=yield*(0,l.findRelativeConfig)(e,t.envName,t.caller)),v&&A.files.add(v.filepath),v&&V(t,v.ignore,null,v.dirname)&&(x=!0),T&&!x){const e=b(T),r=new a.ConfigPrinter,n=yield*S(e,t,void 0,r);n?(i=yield*r.output(),F(A,n)):x=!0}T&&x&&A.files.add(T.filepath)}}t.showConfig&&console.log(`Babel configs on "${t.filename}" (ascending priority):\n`+[r,i,c].filter((e=>!!e)).join("\n\n")+"\n-----End Babel configs-----");const w=F(F(F(B(),m),A),u);return{plugins:x?[]:M(w.plugins),presets:x?[]:M(w.presets),options:x?[]:w.options.map((e=>L(e))),fileHandling:x?"ignored":"transpile",ignore:v||void 0,babelrc:T||void 0,config:p||void 0,files:w.files}};var s=r(6171),o=r(4885),a=r(2093),l=r(3773),u=r(1258),c=r(5481);const p=i()("babel:config:config-chain");const f=N({root:e=>d(e),env:(e,t)=>h(e)(t),overrides:(e,t)=>m(e)(t),overridesEnv:(e,t,r)=>y(e)(t)(r),createLogger:()=>()=>{}});t.buildPresetChainWalker=f;const d=(0,u.makeWeakCacheSync)((e=>C(e,e.alias,c.createUncachedDescriptors))),h=(0,u.makeWeakCacheSync)((e=>(0,u.makeStrongCacheSync)((t=>D(e,e.alias,c.createUncachedDescriptors,t))))),m=(0,u.makeWeakCacheSync)((e=>(0,u.makeStrongCacheSync)((t=>O(e,e.alias,c.createUncachedDescriptors,t))))),y=(0,u.makeWeakCacheSync)((e=>(0,u.makeStrongCacheSync)((t=>(0,u.makeStrongCacheSync)((r=>k(e,e.alias,c.createUncachedDescriptors,t,r)))))));const g=(0,u.makeWeakCacheSync)((e=>({filepath:e.filepath,dirname:e.dirname,options:(0,s.validate)("configfile",e.options)}))),b=(0,u.makeWeakCacheSync)((e=>({filepath:e.filepath,dirname:e.dirname,options:(0,s.validate)("babelrcfile",e.options)}))),v=(0,u.makeWeakCacheSync)((e=>({filepath:e.filepath,dirname:e.dirname,options:(0,s.validate)("extendsfile",e.options)}))),E=N({root:e=>C(e,"base",c.createCachedDescriptors),env:(e,t)=>D(e,"base",c.createCachedDescriptors,t),overrides:(e,t)=>O(e,"base",c.createCachedDescriptors,t),overridesEnv:(e,t,r)=>k(e,"base",c.createCachedDescriptors,t,r),createLogger:(e,t,r)=>function(e,t,r){var n;if(!r)return()=>{};return r.configure(t.showConfig,a.ChainFormatter.Programmatic,{callerName:null==(n=t.caller)?void 0:n.name})}(0,t,r)}),T=N({root:e=>x(e),env:(e,t)=>A(e)(t),overrides:(e,t)=>w(e)(t),overridesEnv:(e,t,r)=>P(e)(t)(r),createLogger:(e,t,r)=>function(e,t,r){if(!r)return()=>{};return r.configure(t.showConfig,a.ChainFormatter.Config,{filepath:e})}(e.filepath,t,r)});function*S(e,t,r,n){const i=yield*T(e,t,r,n);return i&&i.files.add(e.filepath),i}const x=(0,u.makeWeakCacheSync)((e=>C(e,e.filepath,c.createUncachedDescriptors))),A=(0,u.makeWeakCacheSync)((e=>(0,u.makeStrongCacheSync)((t=>D(e,e.filepath,c.createUncachedDescriptors,t))))),w=(0,u.makeWeakCacheSync)((e=>(0,u.makeStrongCacheSync)((t=>O(e,e.filepath,c.createUncachedDescriptors,t))))),P=(0,u.makeWeakCacheSync)((e=>(0,u.makeStrongCacheSync)((t=>(0,u.makeStrongCacheSync)((r=>k(e,e.filepath,c.createUncachedDescriptors,t,r)))))));function C({dirname:e,options:t},r,n){return n(e,t,r)}function D({dirname:e,options:t},r,n,i){const s=t.env&&t.env[i];return s?n(e,s,`${r}.env["${i}"]`):null}function O({dirname:e,options:t},r,n,i){const s=t.overrides&&t.overrides[i];if(!s)throw new Error("Assertion failure - missing override");return n(e,s,`${r}.overrides[${i}]`)}function k({dirname:e,options:t},r,n,i,s){const o=t.overrides&&t.overrides[i];if(!o)throw new Error("Assertion failure - missing override");const a=o.env&&o.env[s];return a?n(e,a,`${r}.overrides[${i}].env["${s}"]`):null}function N({root:e,env:t,overrides:r,overridesEnv:n,createLogger:i}){return function*(s,o,a=new Set,l){const{dirname:u}=s,c=[],p=e(s);if(j(p,u,o)){c.push({config:p,envName:void 0,index:void 0});const e=t(s,o.envName);e&&j(e,u,o)&&c.push({config:e,envName:o.envName,index:void 0}),(p.options.overrides||[]).forEach(((e,t)=>{const i=r(s,t);if(j(i,u,o)){c.push({config:i,index:t,envName:void 0});const e=n(s,t,o.envName);e&&j(e,u,o)&&c.push({config:e,index:t,envName:o.envName})}}))}if(c.some((({config:{options:{ignore:e,only:t}}})=>V(o,e,t,u))))return null;const f=B(),d=i(s,o,l);for(const{config:e,index:t,envName:r}of c){if(!(yield*I(f,e.options,u,o,a,l)))return null;d(e,t,r),yield*_(f,e)}return f}}function*I(e,t,r,n,i,s){if(void 0===t.extends)return!0;const o=yield*(0,l.loadConfig)(t.extends,r,n.envName,n.caller);if(i.has(o))throw new Error(`Configuration cycle detected loading ${o.filepath}.\nFile already loaded following the config chain:\n`+Array.from(i,(e=>` - ${e.filepath}`)).join("\n"));i.add(o);const a=yield*S(v(o),n,i,s);return i.delete(o),!!a&&(F(e,a),!0)}function F(e,t){e.options.push(...t.options),e.plugins.push(...t.plugins),e.presets.push(...t.presets);for(const r of t.files)e.files.add(r);return e}function*_(e,{options:t,plugins:r,presets:n}){return e.options.push(t),e.plugins.push(...yield*r()),e.presets.push(...yield*n()),e}function B(){return{options:[],presets:[],plugins:[],files:new Set}}function L(e){const t=Object.assign({},e);return delete t.extends,delete t.env,delete t.overrides,delete t.plugins,delete t.presets,delete t.passPerPreset,delete t.ignore,delete t.only,delete t.test,delete t.include,delete t.exclude,Object.prototype.hasOwnProperty.call(t,"sourceMap")&&(t.sourceMaps=t.sourceMap,delete t.sourceMap),t}function M(e){const t=new Map,r=[];for(const n of e)if("function"==typeof n.value){const e=n.value;let i=t.get(e);i||(i=new Map,t.set(e,i));let s=i.get(n.name);s?s.value=n:(s={value:n},r.push(s),n.ownPass||i.set(n.name,s))}else r.push({value:n});return r.reduce(((e,t)=>(e.push(t.value),e)),[])}function j({options:e},t,r){return(void 0===e.test||R(r,e.test,t))&&(void 0===e.include||R(r,e.include,t))&&(void 0===e.exclude||!R(r,e.exclude,t))}function R(e,t,r){return W(e,Array.isArray(t)?t:[t],r)}function U(e,t){return t instanceof RegExp?String(t):t}function V(e,t,r,n){if(t&&W(e,t,n)){var i;const r=`No config is applied to "${null!=(i=e.filename)?i:"(unknown)"}" because it matches one of \`ignore: ${JSON.stringify(t,U)}\` from "${n}"`;return p(r),e.showConfig&&console.log(r),!0}if(r&&!W(e,r,n)){var s;const t=`No config is applied to "${null!=(s=e.filename)?s:"(unknown)"}" because it fails to match one of \`only: ${JSON.stringify(r,U)}\` from "${n}"`;return p(t),e.showConfig&&console.log(t),!0}return!1}function W(e,t,r){return t.some((t=>z(t,r,e.filename,e)))}function z(e,t,r,n){if("function"==typeof e)return!!e(r,{dirname:t,envName:n.envName,caller:n.caller});if("string"!=typeof r)throw new Error("Configuration contains string/RegExp pattern, but no filename was passed to Babel");return"string"==typeof e&&(e=(0,o.default)(e,t)),e.test(r)}},5481:(e,t,r)=>{"use strict";function n(){const e=r(3291);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.createCachedDescriptors=function(e,t,r){const{plugins:n,presets:i,passPerPreset:s}=t;return{options:u(t,e),plugins:n?()=>d(n,e)(r):()=>l([]),presets:i?()=>p(i,e)(r)(!!s):()=>l([])}},t.createDescriptor=v,t.createUncachedDescriptors=function(e,t,r){let n,i;return{options:u(t,e),*plugins(){return n||(n=yield*g(t.plugins||[],e,r)),n},*presets(){return i||(i=yield*y(t.presets||[],e,r,!!t.passPerPreset)),i}}};var i=r(3773),s=r(5610),o=r(1258),a=r(1238);function*l(e){return e}function u(e,t){return"string"==typeof e.browserslistConfigFile&&(e.browserslistConfigFile=(0,a.resolveBrowserslistConfigFile)(e.browserslistConfigFile,t)),e}const c=new WeakMap,p=(0,o.makeWeakCacheSync)(((e,t)=>{const r=t.using((e=>e));return(0,o.makeStrongCacheSync)((t=>(0,o.makeStrongCache)((function*(n){return(yield*y(e,r,t,n)).map((e=>m(c,e)))}))))})),f=new WeakMap,d=(0,o.makeWeakCacheSync)(((e,t)=>{const r=t.using((e=>e));return(0,o.makeStrongCache)((function*(t){return(yield*g(e,r,t)).map((e=>m(f,e)))}))})),h={};function m(e,t){const{value:r,options:n=h}=t;if(!1===n)return t;let i=e.get(r);i||(i=new WeakMap,e.set(r,i));let s=i.get(n);if(s||(s=[],i.set(n,s)),-1===s.indexOf(t)){const e=s.filter((e=>{return n=t,(r=e).name===n.name&&r.value===n.value&&r.options===n.options&&r.dirname===n.dirname&&r.alias===n.alias&&r.ownPass===n.ownPass&&(r.file&&r.file.request)===(n.file&&n.file.request)&&(r.file&&r.file.resolved)===(n.file&&n.file.resolved);var r,n}));if(e.length>0)return e[0];s.push(t)}return t}function*y(e,t,r,n){return yield*b("preset",e,t,r,n)}function*g(e,t,r){return yield*b("plugin",e,t,r)}function*b(e,t,r,i,s){const o=yield*n().all(t.map(((t,n)=>v(t,r,{type:e,alias:`${i}$${n}`,ownPass:!!s}))));return function(e){const t=new Map;for(const r of e){if("function"!=typeof r.value)continue;let n=t.get(r.value);if(n||(n=new Set,t.set(r.value,n)),n.has(r.name)){const t=e.filter((e=>e.value===r.value));throw new Error(["Duplicate plugin/preset detected.","If you'd like to use two separate instances of a plugin,","they need separate names, e.g.","","  plugins: [","    ['some-plugin', {}],","    ['some-plugin', {}, 'some unique name'],","  ]","","Duplicates detected are:",`${JSON.stringify(t,null,2)}`].join("\n"))}n.add(r.name)}}(o),o}function*v(e,t,{type:r,alias:n,ownPass:o}){const a=(0,s.getItemDescriptor)(e);if(a)return a;let l,u,c,p=e;Array.isArray(p)&&(3===p.length?[p,u,l]=p:[p,u]=p);let f=null;if("string"==typeof p){if("string"!=typeof r)throw new Error("To resolve a string-based item, the type of item must be given");const e="plugin"===r?i.loadPlugin:i.loadPreset,n=p;({filepath:f,value:p}=yield*e(p,t)),c={request:n,resolved:f}}if(!p)throw new Error(`Unexpected falsy value: ${String(p)}`);if("object"==typeof p&&p.__esModule){if(!p.default)throw new Error("Must export a default export when using ES6 modules.");p=p.default}if("object"!=typeof p&&"function"!=typeof p)throw new Error(`Unsupported format: ${typeof p}. Expected an object or a function.`);if(null!==f&&"object"==typeof p&&p)throw new Error(`Plugin/Preset files are not allowed to export objects, only functions. In ${f}`);return{name:l,alias:f||n,value:p,options:u,dirname:t,ownPass:o,file:c}}},3773:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ROOT_CONFIG_FILENAMES=void 0,t.findConfigUpwards=function(e){return null},t.findPackageData=function*(e){return{filepath:e,directories:[],pkg:null,isPackage:!1}},t.findRelativeConfig=function*(e,t,r){return{config:null,ignore:null}},t.findRootConfig=function*(e,t,r){return null},t.loadConfig=function*(e,t,r,n){throw new Error(`Cannot load ${e} relative to ${t} in a browser`)},t.loadPlugin=function(e,t){throw new Error(`Cannot load plugin ${e} relative to ${t} in a browser`)},t.loadPreset=function(e,t){throw new Error(`Cannot load preset ${e} relative to ${t} in a browser`)},t.resolvePlugin=function(e,t){return null},t.resolvePreset=function(e,t){return null},t.resolveShowConfigPath=function*(e){return null};t.ROOT_CONFIG_FILENAMES=[]},3140:(e,t,r)=>{"use strict";function n(){const e=r(3291);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(3245),s=r(8358),o=r(1091),a=r(2591),l=r(5610),u=r(8188);function c(){const e=r(1785);return c=function(){return e},e}var p=r(1258),f=r(6171),d=r(6031),h=r(6619),m=r(3541),y=(r(5566),n()((function*(e){var t;const r=yield*(0,m.default)(e);if(!r)return null;const{options:n,context:i,fileHandling:o}=r;if("ignored"===o)return null;const a={},{plugins:u,presets:c}=n;if(!u||!c)throw new Error("Assertion failure - plugins and presets exist");const p=Object.assign({},i,{targets:n.targets}),d=e=>{const t=(0,l.getItemDescriptor)(e);if(!t)throw new Error("Assertion failure - must be config item");return t},h=c.map(d),y=u.map(d),b=[[]],v=[],E=yield*g(i,(function*e(t,r){const n=[];for(let e=0;e<t.length;e++){const i=t[e];if(!1!==i.options)try{i.ownPass?n.push({preset:yield*A(i,p),pass:[]}):n.unshift({preset:yield*A(i,p),pass:r})}catch(r){throw"BABEL_UNKNOWN_OPTION"===r.code&&(0,f.checkNoUnwrappedItemOptionPairs)(t,e,"preset",r),r}}if(n.length>0){b.splice(1,0,...n.map((e=>e.pass)).filter((e=>e!==r)));for(const{preset:t,pass:r}of n){if(!t)return!0;r.push(...t.plugins);if(yield*e(t.presets,r))return!0;t.options.forEach((e=>{(0,s.mergeOptions)(a,e)}))}}}))(h,b[0]);if(E)return null;const S=a;(0,s.mergeOptions)(S,n);const x=Object.assign({},p,{assumptions:null!=(t=S.assumptions)?t:{}});return yield*g(i,(function*(){b[0].unshift(...y);for(const e of b){const t=[];v.push(t);for(let r=0;r<e.length;r++){const n=e[r];if(!1!==n.options)try{t.push(yield*T(n,x))}catch(t){throw"BABEL_UNKNOWN_PLUGIN_PROPERTY"===t.code&&(0,f.checkNoUnwrappedItemOptionPairs)(e,r,"plugin",t),t}}}}))(),S.plugins=v[0],S.presets=v.slice(1).filter((e=>e.length>0)).map((e=>({plugins:e}))),S.passPerPreset=S.presets.length>0,{options:S,passes:v}})));function g(e,t){return function*(r,n){try{return yield*t(r,n)}catch(t){throw/^\[BABEL\]/.test(t.message)||(t.message=`[BABEL] ${e.filename||"unknown"}: ${t.message}`),t}}}t.default=y;const b=e=>(0,p.makeWeakCache)((function*({value:t,options:r,dirname:n,alias:s},a){if(!1===r)throw new Error("Assertion failure");r=r||{};let l=t;if("function"==typeof t){const u=(0,i.maybeAsync)(t,"You appear to be using an async plugin/preset, but Babel has been called synchronously"),c=Object.assign({},o,e(a));try{l=yield*u(c,r,n)}catch(e){throw s&&(e.message+=` (While processing: ${JSON.stringify(s)})`),e}}if(!l||"object"!=typeof l)throw new Error("Plugin/Preset did not return an object.");if((0,i.isThenable)(l))throw yield*[],new Error(`You appear to be using a promise as a plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version. As an alternative, you can prefix the promise with "await". (While processing: ${JSON.stringify(s)})`);return{value:l,options:r,dirname:n,alias:s}})),v=b(h.makePluginAPI),E=b(h.makePresetAPI);function*T(e,t){if(e.value instanceof a.default){if(e.options)throw new Error("Passed options to an existing Plugin instance will not work.");return e.value}return yield*S(yield*v(e,t),t)}const S=(0,p.makeWeakCache)((function*({value:e,options:t,dirname:r,alias:n},s){const o=(0,d.validatePluginObject)(e),l=Object.assign({},o);if(l.visitor&&(l.visitor=c().default.explode(Object.assign({},l.visitor))),l.inherits){const e={name:void 0,alias:`${n}$inherits`,value:l.inherits,options:t,dirname:r},o=yield*(0,i.forwardAsync)(T,(t=>s.invalidate((r=>t(e,r)))));l.pre=P(o.pre,l.pre),l.post=P(o.post,l.post),l.manipulateOptions=P(o.manipulateOptions,l.manipulateOptions),l.visitor=c().default.visitors.merge([o.visitor||{},l.visitor||{}])}return new a.default(l,t,n)})),x=(e,t)=>{if(e.test||e.include||e.exclude){const e=t.name?`"${t.name}"`:"/* your preset */";throw new Error([`Preset ${e} requires a filename to be set when babel is called directly,`,"```",`babel.transform(code, { filename: 'file.ts', presets: [${e}] });`,"```","See https://babeljs.io/docs/en/options#filename for more information."].join("\n"))}};function*A(e,t){const r=w(yield*E(e,t));return((e,t,r)=>{if(!t.filename){const{options:t}=e;x(t,r),t.overrides&&t.overrides.forEach((e=>x(e,r)))}})(r,t,e),yield*(0,u.buildPresetChain)(r,t)}const w=(0,p.makeWeakCacheSync)((({value:e,dirname:t,alias:r})=>({options:(0,f.validate)("preset",e),alias:r,dirname:t})));function P(e,t){const r=[e,t].filter(Boolean);return r.length<=1?r[0]:function(...e){for(const t of r)t.apply(this,e)}}},6619:(e,t,r)=>{"use strict";function n(){const e=r(326);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.makeConfigAPI=o,t.makePluginAPI=function(e){return Object.assign({},a(e),{assumption:t=>e.using((e=>e.assumptions[t]))})},t.makePresetAPI=a;var i=r(1091),s=r(1258);r(5566);function o(e){return{version:i.version,cache:e.simple(),env:t=>e.using((e=>void 0===t?e.envName:"function"==typeof t?(0,s.assertSimpleType)(t(e.envName)):(Array.isArray(t)||(t=[t]),t.some((t=>{if("string"!=typeof t)throw new Error("Unexpected non-string value");return t===e.envName}))))),async:()=>!1,caller:t=>e.using((e=>(0,s.assertSimpleType)(t(e.caller)))),assertVersion:l}}function a(e){return Object.assign({},o(e),{targets:()=>JSON.parse(e.using((e=>JSON.stringify(e.targets))))})}function l(e){if("number"==typeof e){if(!Number.isInteger(e))throw new Error("Expected string or integer value.");e=`^${e}.0.0-0`}if("string"!=typeof e)throw new Error("Expected string or integer value.");if(n().satisfies(i.version,e))return;const t=Error.stackTraceLimit;"number"==typeof t&&t<25&&(Error.stackTraceLimit=25);const r=new Error(`Requires Babel "${e}", but was loaded with "${i.version}". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel.`);throw"number"==typeof t&&(Error.stackTraceLimit=t),Object.assign(r,{code:"BABEL_VERSION_UNSUPPORTED",version:i.version,range:e})}},6652:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getEnv=function(e="development"){return"production"}},1152:(e,t,r)=>{"use strict";function n(){const e=r(3291);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.createConfigItem=function(e,t,r){return void 0!==r?l.errback(e,t,r):"function"==typeof t?l.errback(e,void 0,r):l.sync(e,t)},t.createConfigItemSync=t.createConfigItemAsync=void 0,Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}}),t.loadPartialConfigSync=t.loadPartialConfigAsync=t.loadPartialConfig=t.loadOptionsSync=t.loadOptionsAsync=t.loadOptions=void 0;var i=r(3140),s=r(3541),o=r(5610);const a=n()((function*(e){var t;const r=yield*(0,i.default)(e);return null!=(t=null==r?void 0:r.options)?t:null})),l=n()(o.createConfigItem),u=e=>(t,r)=>(void 0===r&&"function"==typeof t&&(r=t,t=void 0),r?e.errback(t,r):e.sync(t)),c=u(s.loadPartialConfig);t.loadPartialConfig=c;const p=s.loadPartialConfig.sync;t.loadPartialConfigSync=p;const f=s.loadPartialConfig.async;t.loadPartialConfigAsync=f;const d=u(a);t.loadOptions=d;const h=a.sync;t.loadOptionsSync=h;const m=a.async;t.loadOptionsAsync=m;const y=l.sync;t.createConfigItemSync=y;const g=l.async;t.createConfigItemAsync=g},5610:(e,t,r)=>{"use strict";function n(){const e=r(7425);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.createConfigItem=function*(e,{dirname:t=".",type:r}={}){return s(yield*(0,i.createDescriptor)(e,n().resolve(t),{type:r,alias:"programmatic item"}))},t.createItemFromDescriptor=s,t.getItemDescriptor=function(e){if(null!=e&&e[o])return e._descriptor;return};var i=r(5481);function s(e){return new a(e)}const o=Symbol.for("@babel/core@7 - ConfigItem");class a{constructor(e){this._descriptor=void 0,this[o]=!0,this.value=void 0,this.options=void 0,this.dirname=void 0,this.name=void 0,this.file=void 0,this._descriptor=e,Object.defineProperty(this,"_descriptor",{enumerable:!1}),Object.defineProperty(this,o,{enumerable:!1}),this.value=this._descriptor.value,this.options=this._descriptor.options,this.dirname=this._descriptor.dirname,this.name=this._descriptor.name,this.file=this._descriptor.file?{request:this._descriptor.file.request,resolved:this._descriptor.file.resolved}:void 0,Object.freeze(this)}}Object.freeze(a.prototype)},3541:(e,t,r)=>{"use strict";function n(){const e=r(7425);return n=function(){return e},e}function i(){const e=r(3291);return i=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=h,t.loadPartialConfig=void 0;var s=r(2591),o=r(8358),a=r(5610),l=r(8188),u=r(6652),c=r(6171),p=r(3773),f=r(1238);const d=["showIgnoredFiles"];function*h(e){if(null!=e&&("object"!=typeof e||Array.isArray(e)))throw new Error("Babel options must be an object, null, or undefined");const t=e?(0,c.validate)("arguments",e):{},{envName:r=(0,u.getEnv)(),cwd:i=".",root:s=".",rootMode:d="root",caller:h,cloneInputAst:m=!0}=t,y=n().resolve(i),g=function(e,t){switch(t){case"root":return e;case"upward-optional":{const t=(0,p.findConfigUpwards)(e);return null===t?e:t}case"upward":{const t=(0,p.findConfigUpwards)(e);if(null!==t)return t;throw Object.assign(new Error(`Babel was run with rootMode:"upward" but a root could not be found when searching upward from "${e}".\nOne of the following config files must be in the directory tree: "${p.ROOT_CONFIG_FILENAMES.join(", ")}".`),{code:"BABEL_ROOT_NOT_FOUND",dirname:e})}default:throw new Error("Assertion failure - unknown rootMode value.")}}(n().resolve(y,s),d),b="string"==typeof t.filename?n().resolve(i,t.filename):void 0,v={filename:b,cwd:y,root:g,envName:r,caller:h,showConfig:(yield*(0,p.resolveShowConfigPath)(y))===b},E=yield*(0,l.buildRootChain)(t,v);if(!E)return null;const T={assumptions:{}};E.options.forEach((e=>{(0,o.mergeOptions)(T,e)}));return{options:Object.assign({},T,{targets:(0,f.resolveTargets)(T,g),cloneInputAst:m,babelrc:!1,configFile:!1,browserslistConfigFile:!1,passPerPreset:!1,envName:v.envName,cwd:v.cwd,root:v.root,rootMode:"root",filename:"string"==typeof v.filename?v.filename:void 0,plugins:E.plugins.map((e=>(0,a.createItemFromDescriptor)(e))),presets:E.presets.map((e=>(0,a.createItemFromDescriptor)(e)))}),context:v,fileHandling:E.fileHandling,ignore:E.ignore,babelrc:E.babelrc,config:E.config,files:E.files}}const m=i()((function*(e){let t=!1;if("object"==typeof e&&null!==e&&!Array.isArray(e)){var r=e;({showIgnoredFiles:t}=r),e=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(r,d)}const n=yield*h(e);if(!n)return null;const{options:i,babelrc:o,ignore:a,config:l,fileHandling:u,files:c}=n;return"ignored"!==u||t?((i.plugins||[]).forEach((e=>{if(e.value instanceof s.default)throw new Error("Passing cached plugin instances is not supported in babel.loadPartialConfig()")})),new y(i,o?o.filepath:void 0,a?a.filepath:void 0,l?l.filepath:void 0,u,c)):null}));t.loadPartialConfig=m;class y{constructor(e,t,r,n,i,s){this.options=void 0,this.babelrc=void 0,this.babelignore=void 0,this.config=void 0,this.fileHandling=void 0,this.files=void 0,this.options=e,this.babelignore=r,this.babelrc=t,this.config=n,this.fileHandling=i,this.files=s,Object.freeze(this)}hasFilesystemConfig(){return void 0!==this.babelrc||void 0!==this.config}}Object.freeze(y.prototype)},4885:(e,t,r)=>{"use strict";function n(){const e=r(7425);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const r=n().resolve(t,e).split(n().sep);return new RegExp(["^",...r.map(((e,t)=>{const n=t===r.length-1;return"**"===e?n?c:u:"*"===e?n?l:a:0===e.indexOf("*.")?o+p(e.slice(1))+(n?s:i):p(e)+(n?s:i)}))].join(""))};const i=`\\${n().sep}`,s=`(?:${i}|$)`,o=`[^${i}]+`,a=`(?:${o}${i})`,l=`(?:${o}${s})`,u=`${a}*?`,c=`${a}*?${l}?`;function p(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")}},2591:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class{constructor(e,t,r){this.key=void 0,this.manipulateOptions=void 0,this.post=void 0,this.pre=void 0,this.visitor=void 0,this.parserOverride=void 0,this.generatorOverride=void 0,this.options=void 0,this.key=e.name||r,this.manipulateOptions=e.manipulateOptions,this.post=e.post,this.pre=e.pre,this.visitor=e.visitor||{},this.parserOverride=e.parserOverride,this.generatorOverride=e.generatorOverride,this.options=t}}},2093:(e,t,r)=>{"use strict";function n(){const e=r(3291);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.ConfigPrinter=t.ChainFormatter=void 0;const i={Programmatic:0,Config:1};t.ChainFormatter=i;const s={title(e,t,r){let n="";return e===i.Programmatic?(n="programmatic options",t&&(n+=" from "+t)):n="config "+r,n},loc(e,t){let r="";return null!=e&&(r+=`.overrides[${e}]`),null!=t&&(r+=`.env["${t}"]`),r},*optionsAndDescriptors(e){const t=Object.assign({},e.options);delete t.overrides,delete t.env;const r=[...yield*e.plugins()];r.length&&(t.plugins=r.map((e=>o(e))));const n=[...yield*e.presets()];return n.length&&(t.presets=[...n].map((e=>o(e)))),JSON.stringify(t,void 0,2)}};function o(e){var t;let r=null==(t=e.file)?void 0:t.request;return null==r&&("object"==typeof e.value?r=e.value:"function"==typeof e.value&&(r=`[Function: ${e.value.toString().substr(0,50)} ... ]`)),null==r&&(r="[Unknown]"),void 0===e.options?r:null==e.name?[r,e.options]:[r,e.options,e.name]}class a{constructor(){this._stack=[]}configure(e,t,{callerName:r,filepath:n}){return e?(e,i,s)=>{this._stack.push({type:t,callerName:r,filepath:n,content:e,index:i,envName:s})}:()=>{}}static*format(e){let t=s.title(e.type,e.callerName,e.filepath);const r=s.loc(e.index,e.envName);r&&(t+=` ${r}`);return`${t}\n${yield*s.optionsAndDescriptors(e.content)}`}*output(){if(0===this._stack.length)return"";return(yield*n().all(this._stack.map((e=>a.format(e))))).join("\n\n")}}t.ConfigPrinter=a},1238:(e,t,r)=>{"use strict";function n(){const e=r(1781);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.resolveBrowserslistConfigFile=function(e,t){return},t.resolveTargets=function(e,t){let r=e.targets;("string"==typeof r||Array.isArray(r))&&(r={browsers:r});r&&r.esmodules&&(r=Object.assign({},r,{esmodules:"intersect"}));return(0,n().default)(r,{ignoreBrowserslistConfig:!0,browserslistEnv:e.browserslistEnv})}},8358:(e,t)=>{"use strict";function r(e,t){for(const r of Object.keys(t)){const n=t[r];void 0!==n&&(e[r]=n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.isIterableIterator=function(e){return!!e&&"function"==typeof e.next&&"function"==typeof e[Symbol.iterator]},t.mergeOptions=function(e,t){for(const n of Object.keys(t))if("parserOpts"!==n&&"generatorOpts"!==n&&"assumptions"!==n||!t[n]){const r=t[n];void 0!==r&&(e[n]=r)}else{const i=t[n];r(e[n]||(e[n]={}),i)}}},8860:(e,t,r)=>{"use strict";function n(){const e=r(1781);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.access=o,t.assertArray=u,t.assertAssumptions=function(e,t){if(void 0===t)return;if("object"!=typeof t||null===t)throw new Error(`${s(e)} must be an object or undefined.`);let r=e;do{r=r.parent}while("root"!==r.type);const n="preset"===r.source;for(const r of Object.keys(t)){const a=o(e,r);if(!i.assumptionsNames.has(r))throw new Error(`${s(a)} is not a supported assumption.`);if("boolean"!=typeof t[r])throw new Error(`${s(a)} must be a boolean.`);if(n&&!1===t[r])throw new Error(`${s(a)} cannot be set to 'false' inside presets.`)}return t},t.assertBabelrcSearch=function(e,t){if(void 0===t||"boolean"==typeof t)return t;if(Array.isArray(t))t.forEach(((t,r)=>{if(!c(t))throw new Error(`${s(o(e,r))} must be a string/Function/RegExp.`)}));else if(!c(t))throw new Error(`${s(e)} must be a undefined, a boolean, a string/Function/RegExp or an array of those, got ${JSON.stringify(t)}`);return t},t.assertBoolean=a,t.assertCallerMetadata=function(e,t){const r=l(e,t);if(r){if("string"!=typeof r.name)throw new Error(`${s(e)} set but does not contain "name" property string`);for(const t of Object.keys(r)){const n=o(e,t),i=r[t];if(null!=i&&"boolean"!=typeof i&&"string"!=typeof i&&"number"!=typeof i)throw new Error(`${s(n)} must be null, undefined, a boolean, a string, or a number.`)}}return t},t.assertCompact=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&"auto"!==t)throw new Error(`${s(e)} must be a boolean, "auto", or undefined`);return t},t.assertConfigApplicableTest=function(e,t){if(void 0===t)return t;if(Array.isArray(t))t.forEach(((t,r)=>{if(!c(t))throw new Error(`${s(o(e,r))} must be a string/Function/RegExp.`)}));else if(!c(t))throw new Error(`${s(e)} must be a string/Function/RegExp, or an array of those`);return t},t.assertConfigFileSearch=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&"string"!=typeof t)throw new Error(`${s(e)} must be a undefined, a boolean, a string, got ${JSON.stringify(t)}`);return t},t.assertFunction=function(e,t){if(void 0!==t&&"function"!=typeof t)throw new Error(`${s(e)} must be a function, or undefined`);return t},t.assertIgnoreList=function(e,t){const r=u(e,t);r&&r.forEach(((t,r)=>function(e,t){if("string"!=typeof t&&"function"!=typeof t&&!(t instanceof RegExp))throw new Error(`${s(e)} must be an array of string/Function/RegExp values, or undefined`);return t}(o(e,r),t)));return r},t.assertInputSourceMap=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&("object"!=typeof t||!t))throw new Error(`${s(e)} must be a boolean, object, or undefined`);return t},t.assertObject=l,t.assertPluginList=function(e,t){const r=u(e,t);r&&r.forEach(((t,r)=>function(e,t){if(Array.isArray(t)){if(0===t.length)throw new Error(`${s(e)} must include an object`);if(t.length>3)throw new Error(`${s(e)} may only be a two-tuple or three-tuple`);if(p(o(e,0),t[0]),t.length>1){const r=t[1];if(void 0!==r&&!1!==r&&("object"!=typeof r||Array.isArray(r)||null===r))throw new Error(`${s(o(e,1))} must be an object, false, or undefined`)}if(3===t.length){const r=t[2];if(void 0!==r&&"string"!=typeof r)throw new Error(`${s(o(e,2))} must be a string, or undefined`)}}else p(e,t);return t}(o(e,r),t)));return r},t.assertRootMode=function(e,t){if(void 0!==t&&"root"!==t&&"upward"!==t&&"upward-optional"!==t)throw new Error(`${s(e)} must be a "root", "upward", "upward-optional" or undefined`);return t},t.assertSourceMaps=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&"inline"!==t&&"both"!==t)throw new Error(`${s(e)} must be a boolean, "inline", "both", or undefined`);return t},t.assertSourceType=function(e,t){if(void 0!==t&&"module"!==t&&"script"!==t&&"unambiguous"!==t)throw new Error(`${s(e)} must be "module", "script", "unambiguous", or undefined`);return t},t.assertString=function(e,t){if(void 0!==t&&"string"!=typeof t)throw new Error(`${s(e)} must be a string, or undefined`);return t},t.assertTargets=function(e,t){if((0,n().isBrowsersQueryValid)(t))return t;if("object"!=typeof t||!t||Array.isArray(t))throw new Error(`${s(e)} must be a string, an array of strings or an object`);const r=o(e,"browsers"),i=o(e,"esmodules");f(r,t.browsers),a(i,t.esmodules);for(const r of Object.keys(t)){const i=t[r],l=o(e,r);if("esmodules"===r)a(l,i);else if("browsers"===r)f(l,i);else{if(!Object.hasOwnProperty.call(n().TargetNames,r)){const e=Object.keys(n().TargetNames).join(", ");throw new Error(`${s(l)} is not a valid target. Supported targets are ${e}`)}d(l,i)}}return t},t.msg=s;var i=r(6171);function s(e){switch(e.type){case"root":return"";case"env":return`${s(e.parent)}.env["${e.name}"]`;case"overrides":return`${s(e.parent)}.overrides[${e.index}]`;case"option":return`${s(e.parent)}.${e.name}`;case"access":return`${s(e.parent)}[${JSON.stringify(e.name)}]`;default:throw new Error(`Assertion failure: Unknown type ${e.type}`)}}function o(e,t){return{type:"access",name:t,parent:e}}function a(e,t){if(void 0!==t&&"boolean"!=typeof t)throw new Error(`${s(e)} must be a boolean, or undefined`);return t}function l(e,t){if(void 0!==t&&("object"!=typeof t||Array.isArray(t)||!t))throw new Error(`${s(e)} must be an object, or undefined`);return t}function u(e,t){if(null!=t&&!Array.isArray(t))throw new Error(`${s(e)} must be an array, or undefined`);return t}function c(e){return"string"==typeof e||"function"==typeof e||e instanceof RegExp}function p(e,t){if(("object"!=typeof t||!t)&&"string"!=typeof t&&"function"!=typeof t)throw new Error(`${s(e)} must be a string, object, function`);return t}function f(e,t){if(void 0!==t&&!(0,n().isBrowsersQueryValid)(t))throw new Error(`${s(e)} must be undefined, a string or an array of strings`)}function d(e,t){if(("number"!=typeof t||Math.round(t)!==t)&&"string"!=typeof t)throw new Error(`${s(e)} must be a string or an integer number`)}},6171:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assumptionsNames=void 0,t.checkNoUnwrappedItemOptionPairs=function(e,t,r,n){if(0===t)return;const i=e[t-1],s=e[t];i.file&&void 0===i.options&&"object"==typeof s.value&&(n.message+=`\n- Maybe you meant to use\n"${r}s": [\n  ["${i.file.request}", ${JSON.stringify(s.value,void 0,2)}]\n]\nTo be a valid ${r}, its name and options should be wrapped in a pair of brackets`)},t.validate=function(e,t){return p({type:"root",source:e},t)};r(2591);var n=r(3932),i=r(8860);const s={cwd:i.assertString,root:i.assertString,rootMode:i.assertRootMode,configFile:i.assertConfigFileSearch,caller:i.assertCallerMetadata,filename:i.assertString,filenameRelative:i.assertString,code:i.assertBoolean,ast:i.assertBoolean,cloneInputAst:i.assertBoolean,envName:i.assertString},o={babelrc:i.assertBoolean,babelrcRoots:i.assertBabelrcSearch},a={extends:i.assertString,ignore:i.assertIgnoreList,only:i.assertIgnoreList,targets:i.assertTargets,browserslistConfigFile:i.assertConfigFileSearch,browserslistEnv:i.assertString},l={inputSourceMap:i.assertInputSourceMap,presets:i.assertPluginList,plugins:i.assertPluginList,passPerPreset:i.assertBoolean,assumptions:i.assertAssumptions,env:function(e,t){if("env"===e.parent.type)throw new Error(`${(0,i.msg)(e)} is not allowed inside of another .env block`);const r=e.parent,n=(0,i.assertObject)(e,t);if(n)for(const t of Object.keys(n)){const s=(0,i.assertObject)((0,i.access)(e,t),n[t]);if(!s)continue;p({type:"env",name:t,parent:r},s)}return n},overrides:function(e,t){if("env"===e.parent.type)throw new Error(`${(0,i.msg)(e)} is not allowed inside an .env block`);if("overrides"===e.parent.type)throw new Error(`${(0,i.msg)(e)} is not allowed inside an .overrides block`);const r=e.parent,n=(0,i.assertArray)(e,t);if(n)for(const[t,s]of n.entries()){const n=(0,i.access)(e,t),o=(0,i.assertObject)(n,s);if(!o)throw new Error(`${(0,i.msg)(n)} must be an object`);p({type:"overrides",index:t,parent:r},o)}return n},test:i.assertConfigApplicableTest,include:i.assertConfigApplicableTest,exclude:i.assertConfigApplicableTest,retainLines:i.assertBoolean,comments:i.assertBoolean,shouldPrintComment:i.assertFunction,compact:i.assertCompact,minified:i.assertBoolean,auxiliaryCommentBefore:i.assertString,auxiliaryCommentAfter:i.assertString,sourceType:i.assertSourceType,wrapPluginVisitorMethod:i.assertFunction,highlightCode:i.assertBoolean,sourceMaps:i.assertSourceMaps,sourceMap:i.assertSourceMaps,sourceFileName:i.assertString,sourceRoot:i.assertString,parserOpts:i.assertObject,generatorOpts:i.assertObject};Object.assign(l,{getModuleId:i.assertFunction,moduleRoot:i.assertString,moduleIds:i.assertBoolean,moduleId:i.assertString});const u=new Set(["arrayLikeIsIterable","constantReexports","constantSuper","enumerableModuleMeta","ignoreFunctionLength","ignoreToPrimitiveHint","iterableIsArray","mutableTemplateObject","noClassCalls","noDocumentAll","noIncompleteNsImportDetection","noNewArrows","objectRestNoSymbols","privateFieldsAsProperties","pureGetters","setClassMethods","setComputedProperties","setPublicClassFields","setSpreadProperties","skipForOfIteratorClosing","superIsCallableConstructor"]);function c(e){return"root"===e.type?e.source:c(e.parent)}function p(e,t){const r=c(e);return function(e){if(d(e,"sourceMap")&&d(e,"sourceMaps"))throw new Error(".sourceMap is an alias for .sourceMaps, cannot use both")}(t),Object.keys(t).forEach((n=>{const u={type:"option",name:n,parent:e};if("preset"===r&&a[n])throw new Error(`${(0,i.msg)(u)} is not allowed in preset options`);if("arguments"!==r&&s[n])throw new Error(`${(0,i.msg)(u)} is only allowed in root programmatic options`);if("arguments"!==r&&"configfile"!==r&&o[n]){if("babelrcfile"===r||"extendsfile"===r)throw new Error(`${(0,i.msg)(u)} is not allowed in .babelrc or "extends"ed files, only in root programmatic options, or babel.config.js/config file options`);throw new Error(`${(0,i.msg)(u)} is only allowed in root programmatic options, or babel.config.js/config file options`)}(l[n]||a[n]||o[n]||s[n]||f)(u,t[n])})),t}function f(e){const t=e.name;if(n.default[t]){const{message:r,version:s=5}=n.default[t];throw new Error(`Using removed Babel ${s} option: ${(0,i.msg)(e)} - ${r}`)}{const t=new Error(`Unknown option: ${(0,i.msg)(e)}. Check out https://babeljs.io/docs/en/babel-core/#options for more information about options.`);throw t.code="BABEL_UNKNOWN_OPTION",t}}function d(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.assumptionsNames=u},6031:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validatePluginObject=function(e){const t={type:"root",source:"plugin"};return Object.keys(e).forEach((r=>{const n=i[r];if(!n){const e=new Error(`.${r} is not a valid Plugin property`);throw e.code="BABEL_UNKNOWN_PLUGIN_PROPERTY",e}n({type:"option",name:r,parent:t},e[r])})),e};var n=r(8860);const i={name:n.assertString,manipulateOptions:n.assertFunction,pre:n.assertFunction,post:n.assertFunction,inherits:n.assertFunction,visitor:function(e,t){const r=(0,n.assertObject)(e,t);if(r&&(Object.keys(r).forEach((e=>function(e,t){if(t&&"object"==typeof t)Object.keys(t).forEach((t=>{if("enter"!==t&&"exit"!==t)throw new Error(`.visitor["${e}"] may only have .enter and/or .exit handlers.`)}));else if("function"!=typeof t)throw new Error(`.visitor["${e}"] must be a function`);return t}(e,r[e]))),r.enter||r.exit))throw new Error(`${(0,n.msg)(e)} cannot contain catch-all "enter" or "exit" handlers. Please target individual nodes.`);return r},parserOverride:n.assertFunction,generatorOverride:n.assertFunction}},3932:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={auxiliaryComment:{message:"Use `auxiliaryCommentBefore` or `auxiliaryCommentAfter`"},blacklist:{message:"Put the specific transforms you want in the `plugins` option"},breakConfig:{message:"This is not a necessary option in Babel 6"},experimental:{message:"Put the specific transforms you want in the `plugins` option"},externalHelpers:{message:"Use the `external-helpers` plugin instead. Check out http://babeljs.io/docs/plugins/external-helpers/"},extra:{message:""},jsxPragma:{message:"use the `pragma` option in the `react-jsx` plugin. Check out http://babeljs.io/docs/plugins/transform-react-jsx/"},loose:{message:"Specify the `loose` option for the relevant plugin you are using or use a preset that sets the option."},metadataUsedHelpers:{message:"Not required anymore as this is enabled by default"},modules:{message:"Use the corresponding module transform plugin in the `plugins` option. Check out http://babeljs.io/docs/plugins/#modules"},nonStandard:{message:"Use the `react-jsx` and `flow-strip-types` plugins to support JSX and Flow. Also check out the react preset http://babeljs.io/docs/plugins/preset-react/"},optional:{message:"Put the specific transforms you want in the `plugins` option"},sourceMapName:{message:"The `sourceMapName` option has been removed because it makes more sense for the tooling that calls Babel to assign `map.file` themselves."},stage:{message:"Check out the corresponding stage-x presets http://babeljs.io/docs/plugins/#presets"},whitelist:{message:"Put the specific transforms you want in the `plugins` option"},resolveModuleSource:{version:6,message:"Use `babel-plugin-module-resolver@3`'s 'resolvePath' options"},metadata:{version:6,message:"Generated plugin metadata is always included in the output result"},sourceMapTarget:{version:6,message:"The `sourceMapTarget` option has been removed because it makes more sense for the tooling that calls Babel to assign `map.file` themselves."}}},3245:(e,t,r)=>{"use strict";function n(){const e=r(3291);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.forwardAsync=function(e,t){const r=n()(e);return a((e=>{const n=r[e];return t(n)}))},t.isAsync=void 0,t.isThenable=c,t.maybeAsync=function(e,t){return n()({sync(...r){const n=e.apply(this,r);if(c(n))throw new Error(t);return n},async(...t){return Promise.resolve(e.apply(this,t))}})},t.waitFor=t.onFirstPause=void 0;const i=e=>e,s=n()((function*(e){return yield*e})),o=n()({sync:()=>!1,errback:e=>e(null,!0)});t.isAsync=o;const a=n()({sync:e=>e("sync"),async:e=>e("async")});const l=n()({name:"onFirstPause",arity:2,sync:function(e){return s.sync(e)},errback:function(e,t,r){let n=!1;s.errback(e,((e,t)=>{n=!0,r(e,t)})),n||t()}});t.onFirstPause=l;const u=n()({sync:i,async:i});function c(e){return!(!e||"object"!=typeof e&&"function"!=typeof e||!e.then||"function"!=typeof e.then)}t.waitFor=u},1091:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_EXTENSIONS=void 0,Object.defineProperty(t,"File",{enumerable:!0,get:function(){return n.default}}),t.OptionManager=void 0,t.Plugin=function(e){throw new Error(`The (${e}) Babel 5 plugin is being run with an unsupported Babel version.`)},Object.defineProperty(t,"buildExternalHelpers",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"createConfigItem",{enumerable:!0,get:function(){return p.createConfigItem}}),Object.defineProperty(t,"createConfigItemAsync",{enumerable:!0,get:function(){return p.createConfigItemAsync}}),Object.defineProperty(t,"createConfigItemSync",{enumerable:!0,get:function(){return p.createConfigItemSync}}),Object.defineProperty(t,"getEnv",{enumerable:!0,get:function(){return o.getEnv}}),Object.defineProperty(t,"loadOptions",{enumerable:!0,get:function(){return p.loadOptions}}),Object.defineProperty(t,"loadOptionsAsync",{enumerable:!0,get:function(){return p.loadOptionsAsync}}),Object.defineProperty(t,"loadOptionsSync",{enumerable:!0,get:function(){return p.loadOptionsSync}}),Object.defineProperty(t,"loadPartialConfig",{enumerable:!0,get:function(){return p.loadPartialConfig}}),Object.defineProperty(t,"loadPartialConfigAsync",{enumerable:!0,get:function(){return p.loadPartialConfigAsync}}),Object.defineProperty(t,"loadPartialConfigSync",{enumerable:!0,get:function(){return p.loadPartialConfigSync}}),Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return m.parse}}),Object.defineProperty(t,"parseAsync",{enumerable:!0,get:function(){return m.parseAsync}}),Object.defineProperty(t,"parseSync",{enumerable:!0,get:function(){return m.parseSync}}),Object.defineProperty(t,"resolvePlugin",{enumerable:!0,get:function(){return s.resolvePlugin}}),Object.defineProperty(t,"resolvePreset",{enumerable:!0,get:function(){return s.resolvePreset}}),Object.defineProperty(t,"template",{enumerable:!0,get:function(){return c().default}}),Object.defineProperty(t,"tokTypes",{enumerable:!0,get:function(){return l().tokTypes}}),Object.defineProperty(t,"transform",{enumerable:!0,get:function(){return f.transform}}),Object.defineProperty(t,"transformAsync",{enumerable:!0,get:function(){return f.transformAsync}}),Object.defineProperty(t,"transformFile",{enumerable:!0,get:function(){return d.transformFile}}),Object.defineProperty(t,"transformFileAsync",{enumerable:!0,get:function(){return d.transformFileAsync}}),Object.defineProperty(t,"transformFileSync",{enumerable:!0,get:function(){return d.transformFileSync}}),Object.defineProperty(t,"transformFromAst",{enumerable:!0,get:function(){return h.transformFromAst}}),Object.defineProperty(t,"transformFromAstAsync",{enumerable:!0,get:function(){return h.transformFromAstAsync}}),Object.defineProperty(t,"transformFromAstSync",{enumerable:!0,get:function(){return h.transformFromAstSync}}),Object.defineProperty(t,"transformSync",{enumerable:!0,get:function(){return f.transformSync}}),Object.defineProperty(t,"traverse",{enumerable:!0,get:function(){return u().default}}),t.version=t.types=void 0;var n=r(371),i=r(3426),s=r(3773),o=r(6652);function a(){const e=r(666);return a=function(){return e},e}function l(){const e=r(893);return l=function(){return e},e}function u(){const e=r(1785);return u=function(){return e},e}function c(){const e=r(3198);return c=function(){return e},e}Object.defineProperty(t,"types",{enumerable:!0,get:function(){return a()}});var p=r(1152),f=r(6105),d=r(7677),h=r(4091),m=r(7612);t.version="7.16.0";const y=Object.freeze([".js",".jsx",".es6",".es",".mjs",".cjs"]);t.DEFAULT_EXTENSIONS=y;t.OptionManager=class{init(e){return(0,p.loadOptions)(e)}}},7612:(e,t,r)=>{"use strict";function n(){const e=r(3291);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.parseSync=t.parseAsync=t.parse=void 0;var i=r(1152),s=r(3106),o=r(5401);const a=n()((function*(e,t){const r=yield*(0,i.default)(t);return null===r?null:yield*(0,s.default)(r.passes,(0,o.default)(r),e)}));t.parse=function(e,t,r){if("function"==typeof t&&(r=t,t=void 0),void 0===r)return a.sync(e,t);a.errback(e,t,r)};const l=a.sync;t.parseSync=l;const u=a.async;t.parseAsync=u},3106:(e,t,r)=>{"use strict";function n(){const e=r(893);return n=function(){return e},e}function i(){const e=r(6502);return i=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function*(e,{parserOpts:t,highlightCode:r=!0,filename:o="unknown"},a){try{const r=[];for(const i of e)for(const e of i){const{parserOverride:i}=e;if(i){const e=i(a,t,n().parse);void 0!==e&&r.push(e)}}if(0===r.length)return(0,n().parse)(a,t);if(1===r.length){if(yield*[],"function"==typeof r[0].then)throw new Error("You appear to be using an async parser plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");return r[0]}throw new Error("More than one plugin attempted to override parsing.")}catch(e){"BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"===e.code&&(e.message+="\nConsider renaming the file to '.mjs', or setting sourceType:module or sourceType:unambiguous in your Babel config for this file.");const{loc:t,missingPlugin:n}=e;if(t){const l=(0,i().codeFrameColumns)(a,{start:{line:t.line,column:t.column+1}},{highlightCode:r});e.message=n?`${o}: `+(0,s.default)(n[0],t,l):`${o}: ${e.message}\n\n`+l,e.code="BABEL_PARSE_ERROR"}throw e}};var s=r(1751)},1751:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,i){let s=`Support for the experimental syntax '${e}' isn't currently enabled (${t.line}:${t.column+1}):\n\n`+i;const o=r[e];if(o){const{syntax:e,transform:t}=o;if(e){const r=n(e);if(t){const e=n(t),i=t.name.startsWith("@babel/plugin")?"plugins":"presets";s+=`\n\nAdd ${e} to the '${i}' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add ${r} to the 'plugins' section to enable parsing.`}else s+=`\n\nAdd ${r} to the 'plugins' section of your Babel config to enable parsing.`}}return s};const r={asyncDoExpressions:{syntax:{name:"@babel/plugin-syntax-async-do-expressions",url:"https://git.io/JYer8"}},classProperties:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://git.io/vb4yQ"},transform:{name:"@babel/plugin-proposal-class-properties",url:"https://git.io/vb4SL"}},classPrivateProperties:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://git.io/vb4yQ"},transform:{name:"@babel/plugin-proposal-class-properties",url:"https://git.io/vb4SL"}},classPrivateMethods:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://git.io/vb4yQ"},transform:{name:"@babel/plugin-proposal-private-methods",url:"https://git.io/JvpRG"}},classStaticBlock:{syntax:{name:"@babel/plugin-syntax-class-static-block",url:"https://git.io/JTLB6"},transform:{name:"@babel/plugin-proposal-class-static-block",url:"https://git.io/JTLBP"}},decimal:{syntax:{name:"@babel/plugin-syntax-decimal",url:"https://git.io/JfKOH"}},decorators:{syntax:{name:"@babel/plugin-syntax-decorators",url:"https://git.io/vb4y9"},transform:{name:"@babel/plugin-proposal-decorators",url:"https://git.io/vb4ST"}},doExpressions:{syntax:{name:"@babel/plugin-syntax-do-expressions",url:"https://git.io/vb4yh"},transform:{name:"@babel/plugin-proposal-do-expressions",url:"https://git.io/vb4S3"}},dynamicImport:{syntax:{name:"@babel/plugin-syntax-dynamic-import",url:"https://git.io/vb4Sv"}},exportDefaultFrom:{syntax:{name:"@babel/plugin-syntax-export-default-from",url:"https://git.io/vb4SO"},transform:{name:"@babel/plugin-proposal-export-default-from",url:"https://git.io/vb4yH"}},exportNamespaceFrom:{syntax:{name:"@babel/plugin-syntax-export-namespace-from",url:"https://git.io/vb4Sf"},transform:{name:"@babel/plugin-proposal-export-namespace-from",url:"https://git.io/vb4SG"}},flow:{syntax:{name:"@babel/plugin-syntax-flow",url:"https://git.io/vb4yb"},transform:{name:"@babel/preset-flow",url:"https://git.io/JfeDn"}},functionBind:{syntax:{name:"@babel/plugin-syntax-function-bind",url:"https://git.io/vb4y7"},transform:{name:"@babel/plugin-proposal-function-bind",url:"https://git.io/vb4St"}},functionSent:{syntax:{name:"@babel/plugin-syntax-function-sent",url:"https://git.io/vb4yN"},transform:{name:"@babel/plugin-proposal-function-sent",url:"https://git.io/vb4SZ"}},importMeta:{syntax:{name:"@babel/plugin-syntax-import-meta",url:"https://git.io/vbKK6"}},jsx:{syntax:{name:"@babel/plugin-syntax-jsx",url:"https://git.io/vb4yA"},transform:{name:"@babel/preset-react",url:"https://git.io/JfeDR"}},importAssertions:{syntax:{name:"@babel/plugin-syntax-import-assertions",url:"https://git.io/JUbkv"}},moduleStringNames:{syntax:{name:"@babel/plugin-syntax-module-string-names",url:"https://git.io/JTL8G"}},numericSeparator:{syntax:{name:"@babel/plugin-syntax-numeric-separator",url:"https://git.io/vb4Sq"},transform:{name:"@babel/plugin-proposal-numeric-separator",url:"https://git.io/vb4yS"}},optionalChaining:{syntax:{name:"@babel/plugin-syntax-optional-chaining",url:"https://git.io/vb4Sc"},transform:{name:"@babel/plugin-proposal-optional-chaining",url:"https://git.io/vb4Sk"}},pipelineOperator:{syntax:{name:"@babel/plugin-syntax-pipeline-operator",url:"https://git.io/vb4yj"},transform:{name:"@babel/plugin-proposal-pipeline-operator",url:"https://git.io/vb4SU"}},privateIn:{syntax:{name:"@babel/plugin-syntax-private-property-in-object",url:"https://git.io/JfK3q"},transform:{name:"@babel/plugin-proposal-private-property-in-object",url:"https://git.io/JfK3O"}},recordAndTuple:{syntax:{name:"@babel/plugin-syntax-record-and-tuple",url:"https://git.io/JvKp3"}},throwExpressions:{syntax:{name:"@babel/plugin-syntax-throw-expressions",url:"https://git.io/vb4SJ"},transform:{name:"@babel/plugin-proposal-throw-expressions",url:"https://git.io/vb4yF"}},typescript:{syntax:{name:"@babel/plugin-syntax-typescript",url:"https://git.io/vb4SC"},transform:{name:"@babel/preset-typescript",url:"https://git.io/JfeDz"}},asyncGenerators:{syntax:{name:"@babel/plugin-syntax-async-generators",url:"https://git.io/vb4SY"},transform:{name:"@babel/plugin-proposal-async-generator-functions",url:"https://git.io/vb4yp"}},logicalAssignment:{syntax:{name:"@babel/plugin-syntax-logical-assignment-operators",url:"https://git.io/vAlBp"},transform:{name:"@babel/plugin-proposal-logical-assignment-operators",url:"https://git.io/vAlRe"}},nullishCoalescingOperator:{syntax:{name:"@babel/plugin-syntax-nullish-coalescing-operator",url:"https://git.io/vb4yx"},transform:{name:"@babel/plugin-proposal-nullish-coalescing-operator",url:"https://git.io/vb4Se"}},objectRestSpread:{syntax:{name:"@babel/plugin-syntax-object-rest-spread",url:"https://git.io/vb4y5"},transform:{name:"@babel/plugin-proposal-object-rest-spread",url:"https://git.io/vb4Ss"}},optionalCatchBinding:{syntax:{name:"@babel/plugin-syntax-optional-catch-binding",url:"https://git.io/vb4Sn"},transform:{name:"@babel/plugin-proposal-optional-catch-binding",url:"https://git.io/vb4SI"}}};r.privateIn.syntax=r.privateIn.transform;const n=({name:e,url:t})=>`${e} (${t})`},3426:(e,t,r)=>{"use strict";function n(){const e=r(3667);return n=function(){return e},e}function i(){const e=r(7160);return i=function(){return e},e}function s(){const e=r(3198);return s=function(){return e},e}function o(){const e=r(666);return o=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t="global"){let r;const n={global:C,module:D,umd:O,var:k}[t];if(!n)throw new Error(`Unsupported output type ${t}`);r=n(e);return(0,i().default)(r).code};var a=r(371);const{arrayExpression:l,assignmentExpression:u,binaryExpression:c,blockStatement:p,callExpression:f,cloneNode:d,conditionalExpression:h,exportNamedDeclaration:m,exportSpecifier:y,expressionStatement:g,functionExpression:b,identifier:v,memberExpression:E,objectExpression:T,program:S,stringLiteral:x,unaryExpression:A,variableDeclaration:w,variableDeclarator:P}=o();function C(e){const t=v("babelHelpers"),r=[],n=b(null,[v("global")],p(r)),i=S([g(f(n,[h(c("===",A("typeof",v("global")),x("undefined")),v("self"),v("global"))]))]);return r.push(w("var",[P(t,u("=",E(v("global"),t),T([])))])),N(r,t,e),i}function D(e){const t=[],r=N(t,null,e);return t.unshift(m(null,Object.keys(r).map((e=>y(d(r[e]),v(e)))))),S(t,[],"module")}function O(e){const t=v("babelHelpers"),r=[];return r.push(w("var",[P(t,v("global"))])),N(r,t,e),S([(n={FACTORY_PARAMETERS:v("global"),BROWSER_ARGUMENTS:u("=",E(v("root"),t),T([])),COMMON_ARGUMENTS:v("exports"),AMD_ARGUMENTS:l([x("exports")]),FACTORY_BODY:r,UMD_ROOT:v("this")},s().default.statement`
    (function (root, factory) {
      if (typeof define === "function" && define.amd) {
        define(AMD_ARGUMENTS, factory);
      } else if (typeof exports === "object") {
        factory(COMMON_ARGUMENTS);
      } else {
        factory(BROWSER_ARGUMENTS);
      }
    })(UMD_ROOT, function (FACTORY_PARAMETERS) {
      FACTORY_BODY
    });
  `(n))]);var n}function k(e){const t=v("babelHelpers"),r=[];r.push(w("var",[P(t,T([]))]));const n=S(r);return N(r,t,e),r.push(g(t)),n}function N(e,t,r){const i=e=>t?E(t,v(e)):v(`_${e}`),s={};return n().list.forEach((function(t){if(r&&r.indexOf(t)<0)return;const o=s[t]=i(t);n().ensure(t,a.default);const{nodes:l}=n().get(t,i,o);e.push(...l)})),s}},4091:(e,t,r)=>{"use strict";function n(){const e=r(3291);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.transformFromAstSync=t.transformFromAstAsync=t.transformFromAst=void 0;var i=r(1152),s=r(2502);const o=n()((function*(e,t,r){const n=yield*(0,i.default)(r);if(null===n)return null;if(!e)throw new Error("No AST given");return yield*(0,s.run)(n,t,e)}));t.transformFromAst=function(e,t,r,n){if("function"==typeof r&&(n=r,r=void 0),void 0===n)return o.sync(e,t,r);o.errback(e,t,r,n)};const a=o.sync;t.transformFromAstSync=a;const l=o.async;t.transformFromAstAsync=l},7677:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.transformFile=void 0,t.transformFileAsync=function(){return Promise.reject(new Error("Transforming files is not supported in browsers"))},t.transformFileSync=function(){throw new Error("Transforming files is not supported in browsers")};t.transformFile=function(e,t,r){"function"==typeof t&&(r=t),r(new Error("Transforming files is not supported in browsers"),null)}},6105:(e,t,r)=>{"use strict";function n(){const e=r(3291);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.transformSync=t.transformAsync=t.transform=void 0;var i=r(1152),s=r(2502);const o=n()((function*(e,t){const r=yield*(0,i.default)(t);return null===r?null:yield*(0,s.run)(r,e)}));t.transform=function(e,t,r){if("function"==typeof t&&(r=t,t=void 0),void 0===r)return o.sync(e,t);o.errback(e,t,r)};const a=o.sync;t.transformSync=a;const l=o.async;t.transformAsync=l},4274:(e,t,r)=>{"use strict";function n(){const e=r(1785);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){s||(s=new i.default(Object.assign({},a,{visitor:n().default.explode(a.visitor)}),{}));return s};var i=r(2591);let s;function o(e){const t=null==e?void 0:e._blockHoist;return null==t?1:!0===t?2:t}const a={name:"internal.blockHoist",visitor:{Block:{exit({node:e}){const{body:t}=e;let r=Math.pow(2,30)-1,n=!1;for(let e=0;e<t.length;e++){const i=o(t[e]);if(i>r){n=!0;break}r=i}n&&(e.body=function(e){const t=Object.create(null);for(let r=0;r<e.length;r++){const n=e[r],i=o(n);(t[i]||(t[i]=[])).push(n)}const r=Object.keys(t).map((e=>+e)).sort(((e,t)=>t-e));let n=0;for(const i of r){const r=t[i];for(const t of r)e[n++]=t}return e}(t.slice()))}}}}},371:(e,t,r)=>{"use strict";function n(){const e=r(3667);return n=function(){return e},e}function i(){const e=r(1785);return i=function(){return e},e}function s(){const e=r(6502);return s=function(){return e},e}function o(){const e=r(666);return o=function(){return e},e}function a(){const e=r(18);return a=function(){return e},e}function l(){const e=r(326);return l=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const{cloneNode:u,interpreterDirective:c}=o(),p={enter(e,t){const r=e.node.loc;r&&(t.loc=r,e.stop())}};class f{constructor(e,{code:t,ast:r,inputMap:n}){this._map=new Map,this.opts=void 0,this.declarations={},this.path=null,this.ast={},this.scope=void 0,this.metadata={},this.code="",this.inputMap=null,this.hub={file:this,getCode:()=>this.code,getScope:()=>this.scope,addHelper:this.addHelper.bind(this),buildError:this.buildCodeFrameError.bind(this)},this.opts=e,this.code=t,this.ast=r,this.inputMap=n,this.path=i().NodePath.get({hub:this.hub,parentPath:null,parent:this.ast,container:this.ast,key:"program"}).setContext(),this.scope=this.path.scope}get shebang(){const{interpreter:e}=this.path.node;return e?e.value:""}set shebang(e){e?this.path.get("interpreter").replaceWith(c(e)):this.path.get("interpreter").remove()}set(e,t){if("helpersNamespace"===e)throw new Error("Babel 7.0.0-beta.56 has dropped support for the 'helpersNamespace' utility.If you are using @babel/plugin-external-helpers you will need to use a newer version than the one you currently have installed. If you have your own implementation, you'll want to explore using 'helperGenerator' alongside 'file.availableHelper()'.");this._map.set(e,t)}get(e){return this._map.get(e)}has(e){return this._map.has(e)}getModuleName(){return(0,a().getModuleName)(this.opts,this.opts)}addImport(){throw new Error("This API has been removed. If you're looking for this functionality in Babel 7, you should import the '@babel/helper-module-imports' module and use the functions exposed  from that module, such as 'addNamed' or 'addDefault'.")}availableHelper(e,t){let r;try{r=n().minVersion(e)}catch(e){if("BABEL_HELPER_UNKNOWN"!==e.code)throw e;return!1}return"string"!=typeof t||(l().valid(t)&&(t=`^${t}`),!l().intersects(`<${r}`,t)&&!l().intersects(">=8.0.0",t))}addHelper(e){const t=this.declarations[e];if(t)return u(t);const r=this.get("helperGenerator");if(r){const t=r(e);if(t)return t}n().ensure(e,f);const i=this.declarations[e]=this.scope.generateUidIdentifier(e),s={};for(const t of n().getDependencies(e))s[t]=this.addHelper(t);const{nodes:o,globals:a}=n().get(e,(e=>s[e]),i,Object.keys(this.scope.getAllBindings()));return a.forEach((e=>{this.path.scope.hasBinding(e,!0)&&this.path.scope.rename(e)})),o.forEach((e=>{e._compact=!0})),this.path.unshiftContainer("body",o),this.path.get("body").forEach((e=>{-1!==o.indexOf(e.node)&&e.isVariableDeclaration()&&this.scope.registerDeclaration(e)})),i}addTemplateObject(){throw new Error("This function has been moved into the template literal transform itself.")}buildCodeFrameError(e,t,r=SyntaxError){let n=e&&(e.loc||e._loc);if(!n&&e){const r={loc:null};(0,i().default)(e,p,this.scope,r),n=r.loc;let s="This is an error on an internal node. Probably an internal error.";n&&(s+=" Location has been estimated."),t+=` (${s})`}if(n){const{highlightCode:e=!0}=this.opts;t+="\n"+(0,s().codeFrameColumns)(this.code,{start:{line:n.start.line,column:n.start.column+1},end:n.end&&n.start.line===n.end.line?{line:n.end.line,column:n.end.column+1}:void 0},{highlightCode:e})}return new r(t)}}t.default=f},4467:(e,t,r)=>{"use strict";function n(){const e=r(7143);return n=function(){return e},e}function i(){const e=r(7160);return i=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{opts:r,ast:o,code:a,inputMap:l}=t,u=[];for(const t of e)for(const e of t){const{generatorOverride:t}=e;if(t){const e=t(o,r.generatorOpts,a,i().default);void 0!==e&&u.push(e)}}let c;if(0===u.length)c=(0,i().default)(o,r.generatorOpts,a);else{if(1!==u.length)throw new Error("More than one plugin attempted to override codegen.");if(c=u[0],"function"==typeof c.then)throw new Error("You appear to be using an async codegen plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}let{code:p,map:f}=c;f&&l&&(f=(0,s.default)(l.toObject(),f));"inline"!==r.sourceMaps&&"both"!==r.sourceMaps||(p+="\n"+n().fromObject(f).toComment());"inline"===r.sourceMaps&&(f=null);return{outputCode:p,outputMap:f}};var s=r(2175)},2175:(e,t,r)=>{"use strict";function n(){const e=r(6466);return n=function(){return e},e}function i(e){return`${e.line}/${e.columnStart}`}function s(e){const t=new(n().SourceMapConsumer)(Object.assign({},e,{sourceRoot:null})),r=new Map,i=new Map;let s=null;return t.computeColumnSpans(),t.eachMapping((e=>{if(null===e.originalLine)return;let n=r.get(e.source);n||(n={path:e.source,content:t.sourceContentFor(e.source,!0)},r.set(e.source,n));let o=i.get(n);o||(o={source:n,mappings:[]},i.set(n,o));const a={line:e.originalLine,columnStart:e.originalColumn,columnEnd:1/0,name:e.name};s&&s.source===n&&s.mapping.line===e.originalLine&&(s.mapping.columnEnd=e.originalColumn),s={source:n,mapping:a},o.mappings.push({original:a,generated:t.allGeneratedPositionsFor({source:e.source,line:e.originalLine,column:e.originalColumn}).map((e=>({line:e.line,columnStart:e.column,columnEnd:e.lastColumn+1})))})}),null,n().SourceMapConsumer.ORIGINAL_ORDER),{file:e.file,sourceRoot:e.sourceRoot,sources:Array.from(i.values())}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const r=s(e),o=s(t),a=new(n().SourceMapGenerator);for(const{source:e}of r.sources)"string"==typeof e.content&&a.setSourceContent(e.path,e.content);if(1===o.sources.length){const e=o.sources[0],t=new Map;!function(e,t){for(const{source:r,mappings:n}of e.sources)for(const{original:e,generated:i}of n)for(const n of i)t(n,e,r)}(r,((r,n,s)=>{!function(e,t,r){const n=function({mappings:e},{line:t,columnStart:r,columnEnd:n}){return function(e,t){const r=function(e,t){let r=0,n=e.length;for(;r<n;){const i=Math.floor((r+n)/2),s=t(e[i]);if(0===s){r=i;break}s>=0?n=i:r=i+1}let i=r;if(i<e.length){for(;i>=0&&t(e[i])>=0;)i--;return i+1}return i}(e,t),n=[];for(let i=r;i<e.length&&0===t(e[i]);i++)n.push(e[i]);return n}(e,(({original:e})=>t>e.line?-1:t<e.line?1:r>=e.columnEnd?-1:n<=e.columnStart?1:0))}(e,t);for(const{generated:e}of n)for(const t of e)r(t)}(e,r,(e=>{const r=i(e);t.has(r)||(t.set(r,e),a.addMapping({source:s.path,original:{line:n.line,column:n.columnStart},generated:{line:e.line,column:e.columnStart},name:n.name}))}))}));for(const e of t.values()){if(e.columnEnd===1/0)continue;const r={line:e.line,columnStart:e.columnEnd},n=i(r);t.has(n)||a.addMapping({generated:{line:r.line,column:r.columnStart}})}}const l=a.toJSON();"string"==typeof r.sourceRoot&&(l.sourceRoot=r.sourceRoot);return l}},2502:(e,t,r)=>{"use strict";function n(){const e=r(1785);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.run=function*(e,t,r){const c=yield*(0,a.default)(e.passes,(0,o.default)(e),t,r),p=c.opts;try{yield*function*(e,t){for(const r of t){const t=[],o=[],a=[];for(const n of r.concat([(0,s.default)()])){const r=new i.default(e,n.key,n.options);t.push([n,r]),o.push(r),a.push(n.visitor)}for(const[r,n]of t){const t=r.pre;if(t){const r=t.call(n,e);if(yield*[],u(r))throw new Error("You appear to be using an plugin with an async .pre, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}}const l=n().default.visitors.merge(a,o,e.opts.wrapPluginVisitorMethod);(0,n().default)(e.ast,l,e.scope);for(const[r,n]of t){const t=r.post;if(t){const r=t.call(n,e);if(yield*[],u(r))throw new Error("You appear to be using an plugin with an async .post, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}}}}(c,e.passes)}catch(e){var f;throw e.message=`${null!=(f=p.filename)?f:"unknown"}: ${e.message}`,e.code||(e.code="BABEL_TRANSFORM_ERROR"),e}let d,h;try{!1!==p.code&&({outputCode:d,outputMap:h}=(0,l.default)(e.passes,c))}catch(e){var m;throw e.message=`${null!=(m=p.filename)?m:"unknown"}: ${e.message}`,e.code||(e.code="BABEL_GENERATE_ERROR"),e}return{metadata:c.metadata,options:p,ast:!0===p.ast?c.ast:null,code:void 0===d?null:d,map:void 0===h?null:h,sourceType:c.ast.program.sourceType}};var i=r(9562),s=r(4274),o=r(5401),a=r(8384),l=r(4467);function u(e){return!(!e||"object"!=typeof e&&"function"!=typeof e||!e.then||"function"!=typeof e.then)}},8384:(e,t,r)=>{"use strict";function n(){const e=r(574);return n=function(){return e},e}function i(){const e=r(7425);return i=function(){return e},e}function s(){const e=r(5130);return s=function(){return e},e}function o(){const e=r(666);return o=function(){return e},e}function a(){const e=r(7143);return a=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function*(e,t,r,s){if(r=`${r||""}`,s){if("Program"===s.type)s=p(s,[],[]);else if("File"!==s.type)throw new Error("AST root must be a Program or File node");t.cloneInputAst&&(s=(0,c.default)(s))}else s=yield*(0,u.default)(e,t,r);let o=null;if(!1!==t.inputSourceMap){if("object"==typeof t.inputSourceMap&&(o=a().fromObject(t.inputSourceMap)),!o){const e=g(h,s);if(e)try{o=a().fromComment(e)}catch(e){d("discarding unknown inline input sourcemap",e)}}if(!o){const e=g(m,s);if("string"==typeof t.filename&&e)try{const r=m.exec(e),s=n().readFileSync(i().resolve(i().dirname(t.filename),r[1]));s.length>1e6?d("skip merging input map > 1 MB"):o=a().fromJSON(s)}catch(e){d("discarding unknown file input sourcemap",e)}else e&&d("discarding un-loadable file input sourcemap")}}return new l.default(t,{code:r,ast:s,inputMap:o})};var l=r(371),u=r(3106),c=r(6299);const{file:p,traverseFast:f}=o(),d=s()("babel:transform:file");const h=/^[@#]\s+sourceMappingURL=data:(?:application|text)\/json;(?:charset[:=]\S+?;)?base64,(?:.*)$/,m=/^[@#][ \t]+sourceMappingURL=([^\s'"`]+)[ \t]*$/;function y(e,t,r){return t&&(t=t.filter((({value:t})=>!e.test(t)||(r=t,!1)))),[t,r]}function g(e,t){let r=null;return f(t,(t=>{[t.leadingComments,r]=y(e,t.leadingComments,r),[t.innerComments,r]=y(e,t.innerComments,r),[t.trailingComments,r]=y(e,t.trailingComments,r)})),r}},5401:(e,t,r)=>{"use strict";function n(){const e=r(7425);return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const{filename:t,cwd:r,filenameRelative:i=("string"==typeof t?n().relative(r,t):"unknown"),sourceType:s="module",inputSourceMap:o,sourceMaps:a=!!o,sourceRoot:l=e.options.moduleRoot,sourceFileName:u=n().basename(i),comments:c=!0,compact:p="auto"}=e.options,f=e.options,d=Object.assign({},f,{parserOpts:Object.assign({sourceType:".mjs"===n().extname(i)?"module":s,sourceFileName:t,plugins:[]},f.parserOpts),generatorOpts:Object.assign({filename:t,auxiliaryCommentBefore:f.auxiliaryCommentBefore,auxiliaryCommentAfter:f.auxiliaryCommentAfter,retainLines:f.retainLines,comments:c,shouldPrintComment:f.shouldPrintComment,compact:p,minified:f.minified,sourceMaps:a,sourceRoot:l,sourceFileName:u},f.generatorOpts)});for(const t of e.passes)for(const e of t)e.manipulateOptions&&e.manipulateOptions(d,d.parserOpts);return d}},9562:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class r{constructor(e,t,r){this._map=new Map,this.key=void 0,this.file=void 0,this.opts=void 0,this.cwd=void 0,this.filename=void 0,this.key=t,this.file=e,this.opts=r||{},this.cwd=e.opts.cwd,this.filename=e.opts.filename}set(e,t){this._map.set(e,t)}get(e){return this._map.get(e)}availableHelper(e,t){return this.file.availableHelper(e,t)}addHelper(e){return this.file.addHelper(e)}addImport(){return this.file.addImport()}buildCodeFrameError(e,t,r){return this.file.buildCodeFrameError(e,t,r)}}t.default=r,r.prototype.getModuleName=function(){return this.file.getModuleName()}},6299:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return JSON.parse(JSON.stringify(e,n),i)};const r="$$ babel internal serialized type"+Math.random();function n(e,t){return"bigint"!=typeof t?t:{[r]:"BigInt",value:t.toString()}}function i(e,t){return t&&"object"==typeof t?"BigInt"!==t[r]?t:BigInt(t.value):t}},326:(e,t,r)=>{var n,i=r(7061);t=e.exports=d,"object"==typeof i&&i.env,n=function(){},t.SEMVER_SPEC_VERSION="2.0.0";var s=Number.MAX_SAFE_INTEGER||9007199254740991,o=t.re=[],a=t.src=[],l=t.tokens={},u=0;function c(e){l[e]=u++}c("NUMERICIDENTIFIER"),a[l.NUMERICIDENTIFIER]="0|[1-9]\\d*",c("NUMERICIDENTIFIERLOOSE"),a[l.NUMERICIDENTIFIERLOOSE]="[0-9]+",c("NONNUMERICIDENTIFIER"),a[l.NONNUMERICIDENTIFIER]="\\d*[a-zA-Z-][a-zA-Z0-9-]*",c("MAINVERSION"),a[l.MAINVERSION]="("+a[l.NUMERICIDENTIFIER]+")\\.("+a[l.NUMERICIDENTIFIER]+")\\.("+a[l.NUMERICIDENTIFIER]+")",c("MAINVERSIONLOOSE"),a[l.MAINVERSIONLOOSE]="("+a[l.NUMERICIDENTIFIERLOOSE]+")\\.("+a[l.NUMERICIDENTIFIERLOOSE]+")\\.("+a[l.NUMERICIDENTIFIERLOOSE]+")",c("PRERELEASEIDENTIFIER"),a[l.PRERELEASEIDENTIFIER]="(?:"+a[l.NUMERICIDENTIFIER]+"|"+a[l.NONNUMERICIDENTIFIER]+")",c("PRERELEASEIDENTIFIERLOOSE"),a[l.PRERELEASEIDENTIFIERLOOSE]="(?:"+a[l.NUMERICIDENTIFIERLOOSE]+"|"+a[l.NONNUMERICIDENTIFIER]+")",c("PRERELEASE"),a[l.PRERELEASE]="(?:-("+a[l.PRERELEASEIDENTIFIER]+"(?:\\."+a[l.PRERELEASEIDENTIFIER]+")*))",c("PRERELEASELOOSE"),a[l.PRERELEASELOOSE]="(?:-?("+a[l.PRERELEASEIDENTIFIERLOOSE]+"(?:\\."+a[l.PRERELEASEIDENTIFIERLOOSE]+")*))",c("BUILDIDENTIFIER"),a[l.BUILDIDENTIFIER]="[0-9A-Za-z-]+",c("BUILD"),a[l.BUILD]="(?:\\+("+a[l.BUILDIDENTIFIER]+"(?:\\."+a[l.BUILDIDENTIFIER]+")*))",c("FULL"),c("FULLPLAIN"),a[l.FULLPLAIN]="v?"+a[l.MAINVERSION]+a[l.PRERELEASE]+"?"+a[l.BUILD]+"?",a[l.FULL]="^"+a[l.FULLPLAIN]+"$",c("LOOSEPLAIN"),a[l.LOOSEPLAIN]="[v=\\s]*"+a[l.MAINVERSIONLOOSE]+a[l.PRERELEASELOOSE]+"?"+a[l.BUILD]+"?",c("LOOSE"),a[l.LOOSE]="^"+a[l.LOOSEPLAIN]+"$",c("GTLT"),a[l.GTLT]="((?:<|>)?=?)",c("XRANGEIDENTIFIERLOOSE"),a[l.XRANGEIDENTIFIERLOOSE]=a[l.NUMERICIDENTIFIERLOOSE]+"|x|X|\\*",c("XRANGEIDENTIFIER"),a[l.XRANGEIDENTIFIER]=a[l.NUMERICIDENTIFIER]+"|x|X|\\*",c("XRANGEPLAIN"),a[l.XRANGEPLAIN]="[v=\\s]*("+a[l.XRANGEIDENTIFIER]+")(?:\\.("+a[l.XRANGEIDENTIFIER]+")(?:\\.("+a[l.XRANGEIDENTIFIER]+")(?:"+a[l.PRERELEASE]+")?"+a[l.BUILD]+"?)?)?",c("XRANGEPLAINLOOSE"),a[l.XRANGEPLAINLOOSE]="[v=\\s]*("+a[l.XRANGEIDENTIFIERLOOSE]+")(?:\\.("+a[l.XRANGEIDENTIFIERLOOSE]+")(?:\\.("+a[l.XRANGEIDENTIFIERLOOSE]+")(?:"+a[l.PRERELEASELOOSE]+")?"+a[l.BUILD]+"?)?)?",c("XRANGE"),a[l.XRANGE]="^"+a[l.GTLT]+"\\s*"+a[l.XRANGEPLAIN]+"$",c("XRANGELOOSE"),a[l.XRANGELOOSE]="^"+a[l.GTLT]+"\\s*"+a[l.XRANGEPLAINLOOSE]+"$",c("COERCE"),a[l.COERCE]="(^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])",c("COERCERTL"),o[l.COERCERTL]=new RegExp(a[l.COERCE],"g"),c("LONETILDE"),a[l.LONETILDE]="(?:~>?)",c("TILDETRIM"),a[l.TILDETRIM]="(\\s*)"+a[l.LONETILDE]+"\\s+",o[l.TILDETRIM]=new RegExp(a[l.TILDETRIM],"g");c("TILDE"),a[l.TILDE]="^"+a[l.LONETILDE]+a[l.XRANGEPLAIN]+"$",c("TILDELOOSE"),a[l.TILDELOOSE]="^"+a[l.LONETILDE]+a[l.XRANGEPLAINLOOSE]+"$",c("LONECARET"),a[l.LONECARET]="(?:\\^)",c("CARETTRIM"),a[l.CARETTRIM]="(\\s*)"+a[l.LONECARET]+"\\s+",o[l.CARETTRIM]=new RegExp(a[l.CARETTRIM],"g");c("CARET"),a[l.CARET]="^"+a[l.LONECARET]+a[l.XRANGEPLAIN]+"$",c("CARETLOOSE"),a[l.CARETLOOSE]="^"+a[l.LONECARET]+a[l.XRANGEPLAINLOOSE]+"$",c("COMPARATORLOOSE"),a[l.COMPARATORLOOSE]="^"+a[l.GTLT]+"\\s*("+a[l.LOOSEPLAIN]+")$|^$",c("COMPARATOR"),a[l.COMPARATOR]="^"+a[l.GTLT]+"\\s*("+a[l.FULLPLAIN]+")$|^$",c("COMPARATORTRIM"),a[l.COMPARATORTRIM]="(\\s*)"+a[l.GTLT]+"\\s*("+a[l.LOOSEPLAIN]+"|"+a[l.XRANGEPLAIN]+")",o[l.COMPARATORTRIM]=new RegExp(a[l.COMPARATORTRIM],"g");c("HYPHENRANGE"),a[l.HYPHENRANGE]="^\\s*("+a[l.XRANGEPLAIN]+")\\s+-\\s+("+a[l.XRANGEPLAIN]+")\\s*$",c("HYPHENRANGELOOSE"),a[l.HYPHENRANGELOOSE]="^\\s*("+a[l.XRANGEPLAINLOOSE]+")\\s+-\\s+("+a[l.XRANGEPLAINLOOSE]+")\\s*$",c("STAR"),a[l.STAR]="(<|>)?=?\\s*\\*";for(var p=0;p<u;p++)n(p,a[p]),o[p]||(o[p]=new RegExp(a[p]));function f(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof d)return e;if("string"!=typeof e)return null;if(e.length>256)return null;if(!(t.loose?o[l.LOOSE]:o[l.FULL]).test(e))return null;try{return new d(e,t)}catch(e){return null}}function d(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof d){if(e.loose===t.loose)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(e.length>256)throw new TypeError("version is longer than 256 characters");if(!(this instanceof d))return new d(e,t);n("SemVer",e,t),this.options=t,this.loose=!!t.loose;var r=e.trim().match(t.loose?o[l.LOOSE]:o[l.FULL]);if(!r)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>s||this.major<0)throw new TypeError("Invalid major version");if(this.minor>s||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>s||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map((function(e){if(/^[0-9]+$/.test(e)){var t=+e;if(t>=0&&t<s)return t}return e})):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}t.parse=f,t.valid=function(e,t){var r=f(e,t);return r?r.version:null},t.clean=function(e,t){var r=f(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null},t.SemVer=d,d.prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version},d.prototype.toString=function(){return this.version},d.prototype.compare=function(e){return n("SemVer.compare",this.version,this.options,e),e instanceof d||(e=new d(e,this.options)),this.compareMain(e)||this.comparePre(e)},d.prototype.compareMain=function(e){return e instanceof d||(e=new d(e,this.options)),m(this.major,e.major)||m(this.minor,e.minor)||m(this.patch,e.patch)},d.prototype.comparePre=function(e){if(e instanceof d||(e=new d(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;var t=0;do{var r=this.prerelease[t],i=e.prerelease[t];if(n("prerelease compare",t,r,i),void 0===r&&void 0===i)return 0;if(void 0===i)return 1;if(void 0===r)return-1;if(r!==i)return m(r,i)}while(++t)},d.prototype.compareBuild=function(e){e instanceof d||(e=new d(e,this.options));var t=0;do{var r=this.build[t],i=e.build[t];if(n("prerelease compare",t,r,i),void 0===r&&void 0===i)return 0;if(void 0===i)return 1;if(void 0===r)return-1;if(r!==i)return m(r,i)}while(++t)},d.prototype.inc=function(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t),this.inc("pre",t);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{for(var r=this.prerelease.length;--r>=0;)"number"==typeof this.prerelease[r]&&(this.prerelease[r]++,r=-2);-1===r&&this.prerelease.push(0)}t&&(this.prerelease[0]===t?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this},t.inc=function(e,t,r,n){"string"==typeof r&&(n=r,r=void 0);try{return new d(e,r).inc(t,n).version}catch(e){return null}},t.diff=function(e,t){if(v(e,t))return null;var r=f(e),n=f(t),i="";if(r.prerelease.length||n.prerelease.length){i="pre";var s="prerelease"}for(var o in r)if(("major"===o||"minor"===o||"patch"===o)&&r[o]!==n[o])return i+o;return s},t.compareIdentifiers=m;var h=/^[0-9]+$/;function m(e,t){var r=h.test(e),n=h.test(t);return r&&n&&(e=+e,t=+t),e===t?0:r&&!n?-1:n&&!r?1:e<t?-1:1}function y(e,t,r){return new d(e,r).compare(new d(t,r))}function g(e,t,r){return y(e,t,r)>0}function b(e,t,r){return y(e,t,r)<0}function v(e,t,r){return 0===y(e,t,r)}function E(e,t,r){return 0!==y(e,t,r)}function T(e,t,r){return y(e,t,r)>=0}function S(e,t,r){return y(e,t,r)<=0}function x(e,t,r,n){switch(t){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e===r;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e!==r;case"":case"=":case"==":return v(e,r,n);case"!=":return E(e,r,n);case">":return g(e,r,n);case">=":return T(e,r,n);case"<":return b(e,r,n);case"<=":return S(e,r,n);default:throw new TypeError("Invalid operator: "+t)}}function A(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof A){if(e.loose===!!t.loose)return e;e=e.value}if(!(this instanceof A))return new A(e,t);n("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===w?this.value="":this.value=this.operator+this.semver.version,n("comp",this)}t.rcompareIdentifiers=function(e,t){return m(t,e)},t.major=function(e,t){return new d(e,t).major},t.minor=function(e,t){return new d(e,t).minor},t.patch=function(e,t){return new d(e,t).patch},t.compare=y,t.compareLoose=function(e,t){return y(e,t,!0)},t.compareBuild=function(e,t,r){var n=new d(e,r),i=new d(t,r);return n.compare(i)||n.compareBuild(i)},t.rcompare=function(e,t,r){return y(t,e,r)},t.sort=function(e,r){return e.sort((function(e,n){return t.compareBuild(e,n,r)}))},t.rsort=function(e,r){return e.sort((function(e,n){return t.compareBuild(n,e,r)}))},t.gt=g,t.lt=b,t.eq=v,t.neq=E,t.gte=T,t.lte=S,t.cmp=x,t.Comparator=A;var w={};function P(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof P)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new P(e.raw,t);if(e instanceof A)return new P(e.value,t);if(!(this instanceof P))return new P(e,t);if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map((function(e){return this.parseRange(e.trim())}),this).filter((function(e){return e.length})),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}function C(e,t){for(var r=!0,n=e.slice(),i=n.pop();r&&n.length;)r=n.every((function(e){return i.intersects(e,t)})),i=n.pop();return r}function D(e){return!e||"x"===e.toLowerCase()||"*"===e}function O(e,t,r,n,i,s,o,a,l,u,c,p,f){return((t=D(r)?"":D(n)?">="+r+".0.0":D(i)?">="+r+"."+n+".0":">="+t)+" "+(a=D(l)?"":D(u)?"<"+(+l+1)+".0.0":D(c)?"<"+l+"."+(+u+1)+".0":p?"<="+l+"."+u+"."+c+"-"+p:"<="+a)).trim()}function k(e,t,r){for(var i=0;i<e.length;i++)if(!e[i].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(i=0;i<e.length;i++)if(n(e[i].semver),e[i].semver!==w&&e[i].semver.prerelease.length>0){var s=e[i].semver;if(s.major===t.major&&s.minor===t.minor&&s.patch===t.patch)return!0}return!1}return!0}function N(e,t,r){try{t=new P(t,r)}catch(e){return!1}return t.test(e)}function I(e,t,r,n){var i,s,o,a,l;switch(e=new d(e,n),t=new P(t,n),r){case">":i=g,s=S,o=b,a=">",l=">=";break;case"<":i=b,s=T,o=g,a="<",l="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(N(e,t,n))return!1;for(var u=0;u<t.set.length;++u){var c=t.set[u],p=null,f=null;if(c.forEach((function(e){e.semver===w&&(e=new A(">=0.0.0")),p=p||e,f=f||e,i(e.semver,p.semver,n)?p=e:o(e.semver,f.semver,n)&&(f=e)})),p.operator===a||p.operator===l)return!1;if((!f.operator||f.operator===a)&&s(e,f.semver))return!1;if(f.operator===l&&o(e,f.semver))return!1}return!0}A.prototype.parse=function(e){var t=this.options.loose?o[l.COMPARATORLOOSE]:o[l.COMPARATOR],r=e.match(t);if(!r)throw new TypeError("Invalid comparator: "+e);this.operator=void 0!==r[1]?r[1]:"","="===this.operator&&(this.operator=""),r[2]?this.semver=new d(r[2],this.options.loose):this.semver=w},A.prototype.toString=function(){return this.value},A.prototype.test=function(e){if(n("Comparator.test",e,this.options.loose),this.semver===w||e===w)return!0;if("string"==typeof e)try{e=new d(e,this.options)}catch(e){return!1}return x(e,this.operator,this.semver,this.options)},A.prototype.intersects=function(e,t){if(!(e instanceof A))throw new TypeError("a Comparator is required");var r;if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),""===this.operator)return""===this.value||(r=new P(e.value,t),N(this.value,r,t));if(""===e.operator)return""===e.value||(r=new P(this.value,t),N(e.semver,r,t));var n=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),i=!("<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),s=this.semver.version===e.semver.version,o=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),a=x(this.semver,"<",e.semver,t)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),l=x(this.semver,">",e.semver,t)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return n||i||s&&o||a||l},t.Range=P,P.prototype.format=function(){return this.range=this.set.map((function(e){return e.join(" ").trim()})).join("||").trim(),this.range},P.prototype.toString=function(){return this.range},P.prototype.parseRange=function(e){var t=this.options.loose;e=e.trim();var r=t?o[l.HYPHENRANGELOOSE]:o[l.HYPHENRANGE];e=e.replace(r,O),n("hyphen replace",e),e=e.replace(o[l.COMPARATORTRIM],"$1$2$3"),n("comparator trim",e,o[l.COMPARATORTRIM]),e=(e=(e=e.replace(o[l.TILDETRIM],"$1~")).replace(o[l.CARETTRIM],"$1^")).split(/\s+/).join(" ");var i=t?o[l.COMPARATORLOOSE]:o[l.COMPARATOR],s=e.split(" ").map((function(e){return function(e,t){return n("comp",e,t),e=function(e,t){return e.trim().split(/\s+/).map((function(e){return function(e,t){n("caret",e,t);var r=t.loose?o[l.CARETLOOSE]:o[l.CARET];return e.replace(r,(function(t,r,i,s,o){var a;return n("caret",e,t,r,i,s,o),D(r)?a="":D(i)?a=">="+r+".0.0 <"+(+r+1)+".0.0":D(s)?a="0"===r?">="+r+"."+i+".0 <"+r+"."+(+i+1)+".0":">="+r+"."+i+".0 <"+(+r+1)+".0.0":o?(n("replaceCaret pr",o),a="0"===r?"0"===i?">="+r+"."+i+"."+s+"-"+o+" <"+r+"."+i+"."+(+s+1):">="+r+"."+i+"."+s+"-"+o+" <"+r+"."+(+i+1)+".0":">="+r+"."+i+"."+s+"-"+o+" <"+(+r+1)+".0.0"):(n("no pr"),a="0"===r?"0"===i?">="+r+"."+i+"."+s+" <"+r+"."+i+"."+(+s+1):">="+r+"."+i+"."+s+" <"+r+"."+(+i+1)+".0":">="+r+"."+i+"."+s+" <"+(+r+1)+".0.0"),n("caret return",a),a}))}(e,t)})).join(" ")}(e,t),n("caret",e),e=function(e,t){return e.trim().split(/\s+/).map((function(e){return function(e,t){var r=t.loose?o[l.TILDELOOSE]:o[l.TILDE];return e.replace(r,(function(t,r,i,s,o){var a;return n("tilde",e,t,r,i,s,o),D(r)?a="":D(i)?a=">="+r+".0.0 <"+(+r+1)+".0.0":D(s)?a=">="+r+"."+i+".0 <"+r+"."+(+i+1)+".0":o?(n("replaceTilde pr",o),a=">="+r+"."+i+"."+s+"-"+o+" <"+r+"."+(+i+1)+".0"):a=">="+r+"."+i+"."+s+" <"+r+"."+(+i+1)+".0",n("tilde return",a),a}))}(e,t)})).join(" ")}(e,t),n("tildes",e),e=function(e,t){return n("replaceXRanges",e,t),e.split(/\s+/).map((function(e){return function(e,t){e=e.trim();var r=t.loose?o[l.XRANGELOOSE]:o[l.XRANGE];return e.replace(r,(function(r,i,s,o,a,l){n("xRange",e,r,i,s,o,a,l);var u=D(s),c=u||D(o),p=c||D(a),f=p;return"="===i&&f&&(i=""),l=t.includePrerelease?"-0":"",u?r=">"===i||"<"===i?"<0.0.0-0":"*":i&&f?(c&&(o=0),a=0,">"===i?(i=">=",c?(s=+s+1,o=0,a=0):(o=+o+1,a=0)):"<="===i&&(i="<",c?s=+s+1:o=+o+1),r=i+s+"."+o+"."+a+l):c?r=">="+s+".0.0"+l+" <"+(+s+1)+".0.0"+l:p&&(r=">="+s+"."+o+".0"+l+" <"+s+"."+(+o+1)+".0"+l),n("xRange return",r),r}))}(e,t)})).join(" ")}(e,t),n("xrange",e),e=function(e,t){return n("replaceStars",e,t),e.trim().replace(o[l.STAR],"")}(e,t),n("stars",e),e}(e,this.options)}),this).join(" ").split(/\s+/);return this.options.loose&&(s=s.filter((function(e){return!!e.match(i)}))),s=s.map((function(e){return new A(e,this.options)}),this)},P.prototype.intersects=function(e,t){if(!(e instanceof P))throw new TypeError("a Range is required");return this.set.some((function(r){return C(r,t)&&e.set.some((function(e){return C(e,t)&&r.every((function(r){return e.every((function(e){return r.intersects(e,t)}))}))}))}))},t.toComparators=function(e,t){return new P(e,t).set.map((function(e){return e.map((function(e){return e.value})).join(" ").trim().split(" ")}))},P.prototype.test=function(e){if(!e)return!1;if("string"==typeof e)try{e=new d(e,this.options)}catch(e){return!1}for(var t=0;t<this.set.length;t++)if(k(this.set[t],e,this.options))return!0;return!1},t.satisfies=N,t.maxSatisfying=function(e,t,r){var n=null,i=null;try{var s=new P(t,r)}catch(e){return null}return e.forEach((function(e){s.test(e)&&(n&&-1!==i.compare(e)||(i=new d(n=e,r)))})),n},t.minSatisfying=function(e,t,r){var n=null,i=null;try{var s=new P(t,r)}catch(e){return null}return e.forEach((function(e){s.test(e)&&(n&&1!==i.compare(e)||(i=new d(n=e,r)))})),n},t.minVersion=function(e,t){e=new P(e,t);var r=new d("0.0.0");if(e.test(r))return r;if(r=new d("0.0.0-0"),e.test(r))return r;r=null;for(var n=0;n<e.set.length;++n){e.set[n].forEach((function(e){var t=new d(e.semver.version);switch(e.operator){case">":0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();case"":case">=":r&&!g(r,t)||(r=t);break;case"<":case"<=":break;default:throw new Error("Unexpected operation: "+e.operator)}}))}if(r&&e.test(r))return r;return null},t.validRange=function(e,t){try{return new P(e,t).range||"*"}catch(e){return null}},t.ltr=function(e,t,r){return I(e,t,"<",r)},t.gtr=function(e,t,r){return I(e,t,">",r)},t.outside=I,t.prerelease=function(e,t){var r=f(e,t);return r&&r.prerelease.length?r.prerelease:null},t.intersects=function(e,t,r){return e=new P(e,r),t=new P(t,r),e.intersects(t)},t.coerce=function(e,t){if(e instanceof d)return e;"number"==typeof e&&(e=String(e));if("string"!=typeof e)return null;var r=null;if((t=t||{}).rtl){for(var n;(n=o[l.COERCERTL].exec(e))&&(!r||r.index+r[0].length!==e.length);)r&&n.index+n[0].length===r.index+r[0].length||(r=n),o[l.COERCERTL].lastIndex=n.index+n[1].length+n[2].length;o[l.COERCERTL].lastIndex=-1}else r=e.match(o[l.COERCE]);if(null===r)return null;return f(r[2]+"."+(r[3]||"0")+"."+(r[4]||"0"),t)}},7586:(e,t,r)=>{var n=r(3626),i=Object.prototype.hasOwnProperty,s="undefined"!=typeof Map;function o(){this._array=[],this._set=s?new Map:Object.create(null)}o.fromArray=function(e,t){for(var r=new o,n=0,i=e.length;n<i;n++)r.add(e[n],t);return r},o.prototype.size=function(){return s?this._set.size:Object.getOwnPropertyNames(this._set).length},o.prototype.add=function(e,t){var r=s?e:n.toSetString(e),o=s?this.has(e):i.call(this._set,r),a=this._array.length;o&&!t||this._array.push(e),o||(s?this._set.set(e,a):this._set[r]=a)},o.prototype.has=function(e){if(s)return this._set.has(e);var t=n.toSetString(e);return i.call(this._set,t)},o.prototype.indexOf=function(e){if(s){var t=this._set.get(e);if(t>=0)return t}else{var r=n.toSetString(e);if(i.call(this._set,r))return this._set[r]}throw new Error('"'+e+'" is not in the set.')},o.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)},o.prototype.toArray=function(){return this._array.slice()},t.I=o},8006:(e,t,r)=>{var n=r(6130);t.encode=function(e){var t,r="",i=function(e){return e<0?1+(-e<<1):0+(e<<1)}(e);do{t=31&i,(i>>>=5)>0&&(t|=32),r+=n.encode(t)}while(i>0);return r},t.decode=function(e,t,r){var i,s,o,a,l=e.length,u=0,c=0;do{if(t>=l)throw new Error("Expected more digits in base 64 VLQ value.");if(-1===(s=n.decode(e.charCodeAt(t++))))throw new Error("Invalid base64 digit: "+e.charAt(t-1));i=!!(32&s),u+=(s&=31)<<c,c+=5}while(i);r.value=(a=(o=u)>>1,1==(1&o)?-a:a),r.rest=t}},6130:(e,t)=>{var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");t.encode=function(e){if(0<=e&&e<r.length)return r[e];throw new TypeError("Must be between 0 and 63: "+e)},t.decode=function(e){return 65<=e&&e<=90?e-65:97<=e&&e<=122?e-97+26:48<=e&&e<=57?e-48+52:43==e?62:47==e?63:-1}},1346:(e,t)=>{function r(e,n,i,s,o,a){var l=Math.floor((n-e)/2)+e,u=o(i,s[l],!0);return 0===u?l:u>0?n-l>1?r(l,n,i,s,o,a):a==t.LEAST_UPPER_BOUND?n<s.length?n:-1:l:l-e>1?r(e,l,i,s,o,a):a==t.LEAST_UPPER_BOUND?l:e<0?-1:e}t.GREATEST_LOWER_BOUND=1,t.LEAST_UPPER_BOUND=2,t.search=function(e,n,i,s){if(0===n.length)return-1;var o=r(-1,n.length,e,n,i,s||t.GREATEST_LOWER_BOUND);if(o<0)return-1;for(;o-1>=0&&0===i(n[o],n[o-1],!0);)--o;return o}},3196:(e,t,r)=>{var n=r(3626);function i(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}i.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t)},i.prototype.add=function(e){var t,r,i,s,o,a;t=this._last,r=e,i=t.generatedLine,s=r.generatedLine,o=t.generatedColumn,a=r.generatedColumn,s>i||s==i&&a>=o||n.compareByGeneratedPositionsInflated(t,r)<=0?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e))},i.prototype.toArray=function(){return this._sorted||(this._array.sort(n.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},t.H=i},5670:(e,t)=>{function r(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function n(e,t,i,s){if(i<s){var o=i-1;r(e,(c=i,p=s,Math.round(c+Math.random()*(p-c))),s);for(var a=e[s],l=i;l<s;l++)t(e[l],a)<=0&&r(e,o+=1,l);r(e,o+1,l);var u=o+1;n(e,t,i,u-1),n(e,t,u+1,s)}var c,p}t.U=function(e,t){n(e,t,0,e.length-1)}},9593:(e,t,r)=>{var n=r(3626),i=r(1346),s=r(7586).I,o=r(8006),a=r(5670).U;function l(e){var t=e;return"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,""))),null!=t.sections?new p(t):new u(t)}function u(e){var t=e;"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var r=n.getArg(t,"version"),i=n.getArg(t,"sources"),o=n.getArg(t,"names",[]),a=n.getArg(t,"sourceRoot",null),l=n.getArg(t,"sourcesContent",null),u=n.getArg(t,"mappings"),c=n.getArg(t,"file",null);if(r!=this._version)throw new Error("Unsupported version: "+r);i=i.map(String).map(n.normalize).map((function(e){return a&&n.isAbsolute(a)&&n.isAbsolute(e)?n.relative(a,e):e})),this._names=s.fromArray(o.map(String),!0),this._sources=s.fromArray(i,!0),this.sourceRoot=a,this.sourcesContent=l,this._mappings=u,this.file=c}function c(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}function p(e){var t=e;"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var r=n.getArg(t,"version"),i=n.getArg(t,"sections");if(r!=this._version)throw new Error("Unsupported version: "+r);this._sources=new s,this._names=new s;var o={line:-1,column:0};this._sections=i.map((function(e){if(e.url)throw new Error("Support for url field in sections not implemented.");var t=n.getArg(e,"offset"),r=n.getArg(t,"line"),i=n.getArg(t,"column");if(r<o.line||r===o.line&&i<o.column)throw new Error("Section offsets must be ordered and non-overlapping.");return o=t,{generatedOffset:{generatedLine:r+1,generatedColumn:i+1},consumer:new l(n.getArg(e,"map"))}}))}l.fromSourceMap=function(e){return u.fromSourceMap(e)},l.prototype._version=3,l.prototype.__generatedMappings=null,Object.defineProperty(l.prototype,"_generatedMappings",{get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),l.prototype.__originalMappings=null,Object.defineProperty(l.prototype,"_originalMappings",{get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),l.prototype._charIsMappingSeparator=function(e,t){var r=e.charAt(t);return";"===r||","===r},l.prototype._parseMappings=function(e,t){throw new Error("Subclasses must implement _parseMappings")},l.GENERATED_ORDER=1,l.ORIGINAL_ORDER=2,l.GREATEST_LOWER_BOUND=1,l.LEAST_UPPER_BOUND=2,l.prototype.eachMapping=function(e,t,r){var i,s=t||null;switch(r||l.GENERATED_ORDER){case l.GENERATED_ORDER:i=this._generatedMappings;break;case l.ORIGINAL_ORDER:i=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var o=this.sourceRoot;i.map((function(e){var t=null===e.source?null:this._sources.at(e.source);return null!=t&&null!=o&&(t=n.join(o,t)),{source:t,generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:null===e.name?null:this._names.at(e.name)}}),this).forEach(e,s)},l.prototype.allGeneratedPositionsFor=function(e){var t=n.getArg(e,"line"),r={source:n.getArg(e,"source"),originalLine:t,originalColumn:n.getArg(e,"column",0)};if(null!=this.sourceRoot&&(r.source=n.relative(this.sourceRoot,r.source)),!this._sources.has(r.source))return[];r.source=this._sources.indexOf(r.source);var s=[],o=this._findMapping(r,this._originalMappings,"originalLine","originalColumn",n.compareByOriginalPositions,i.LEAST_UPPER_BOUND);if(o>=0){var a=this._originalMappings[o];if(void 0===e.column)for(var l=a.originalLine;a&&a.originalLine===l;)s.push({line:n.getArg(a,"generatedLine",null),column:n.getArg(a,"generatedColumn",null),lastColumn:n.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++o];else for(var u=a.originalColumn;a&&a.originalLine===t&&a.originalColumn==u;)s.push({line:n.getArg(a,"generatedLine",null),column:n.getArg(a,"generatedColumn",null),lastColumn:n.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++o]}return s},t.SourceMapConsumer=l,u.prototype=Object.create(l.prototype),u.prototype.consumer=l,u.fromSourceMap=function(e){var t=Object.create(u.prototype),r=t._names=s.fromArray(e._names.toArray(),!0),i=t._sources=s.fromArray(e._sources.toArray(),!0);t.sourceRoot=e._sourceRoot,t.sourcesContent=e._generateSourcesContent(t._sources.toArray(),t.sourceRoot),t.file=e._file;for(var o=e._mappings.toArray().slice(),l=t.__generatedMappings=[],p=t.__originalMappings=[],f=0,d=o.length;f<d;f++){var h=o[f],m=new c;m.generatedLine=h.generatedLine,m.generatedColumn=h.generatedColumn,h.source&&(m.source=i.indexOf(h.source),m.originalLine=h.originalLine,m.originalColumn=h.originalColumn,h.name&&(m.name=r.indexOf(h.name)),p.push(m)),l.push(m)}return a(t.__originalMappings,n.compareByOriginalPositions),t},u.prototype._version=3,Object.defineProperty(u.prototype,"sources",{get:function(){return this._sources.toArray().map((function(e){return null!=this.sourceRoot?n.join(this.sourceRoot,e):e}),this)}}),u.prototype._parseMappings=function(e,t){for(var r,i,s,l,u,p=1,f=0,d=0,h=0,m=0,y=0,g=e.length,b=0,v={},E={},T=[],S=[];b<g;)if(";"===e.charAt(b))p++,b++,f=0;else if(","===e.charAt(b))b++;else{for((r=new c).generatedLine=p,l=b;l<g&&!this._charIsMappingSeparator(e,l);l++);if(s=v[i=e.slice(b,l)])b+=i.length;else{for(s=[];b<l;)o.decode(e,b,E),u=E.value,b=E.rest,s.push(u);if(2===s.length)throw new Error("Found a source, but no line and column");if(3===s.length)throw new Error("Found a source and line, but no column");v[i]=s}r.generatedColumn=f+s[0],f=r.generatedColumn,s.length>1&&(r.source=m+s[1],m+=s[1],r.originalLine=d+s[2],d=r.originalLine,r.originalLine+=1,r.originalColumn=h+s[3],h=r.originalColumn,s.length>4&&(r.name=y+s[4],y+=s[4])),S.push(r),"number"==typeof r.originalLine&&T.push(r)}a(S,n.compareByGeneratedPositionsDeflated),this.__generatedMappings=S,a(T,n.compareByOriginalPositions),this.__originalMappings=T},u.prototype._findMapping=function(e,t,r,n,s,o){if(e[r]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[r]);if(e[n]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[n]);return i.search(e,t,s,o)},u.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var t=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var r=this._generatedMappings[e+1];if(t.generatedLine===r.generatedLine){t.lastGeneratedColumn=r.generatedColumn-1;continue}}t.lastGeneratedColumn=1/0}},u.prototype.originalPositionFor=function(e){var t={generatedLine:n.getArg(e,"line"),generatedColumn:n.getArg(e,"column")},r=this._findMapping(t,this._generatedMappings,"generatedLine","generatedColumn",n.compareByGeneratedPositionsDeflated,n.getArg(e,"bias",l.GREATEST_LOWER_BOUND));if(r>=0){var i=this._generatedMappings[r];if(i.generatedLine===t.generatedLine){var s=n.getArg(i,"source",null);null!==s&&(s=this._sources.at(s),null!=this.sourceRoot&&(s=n.join(this.sourceRoot,s)));var o=n.getArg(i,"name",null);return null!==o&&(o=this._names.at(o)),{source:s,line:n.getArg(i,"originalLine",null),column:n.getArg(i,"originalColumn",null),name:o}}}return{source:null,line:null,column:null,name:null}},u.prototype.hasContentsOfAllSources=function(){return!!this.sourcesContent&&(this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some((function(e){return null==e})))},u.prototype.sourceContentFor=function(e,t){if(!this.sourcesContent)return null;if(null!=this.sourceRoot&&(e=n.relative(this.sourceRoot,e)),this._sources.has(e))return this.sourcesContent[this._sources.indexOf(e)];var r;if(null!=this.sourceRoot&&(r=n.urlParse(this.sourceRoot))){var i=e.replace(/^file:\/\//,"");if("file"==r.scheme&&this._sources.has(i))return this.sourcesContent[this._sources.indexOf(i)];if((!r.path||"/"==r.path)&&this._sources.has("/"+e))return this.sourcesContent[this._sources.indexOf("/"+e)]}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},u.prototype.generatedPositionFor=function(e){var t=n.getArg(e,"source");if(null!=this.sourceRoot&&(t=n.relative(this.sourceRoot,t)),!this._sources.has(t))return{line:null,column:null,lastColumn:null};var r={source:t=this._sources.indexOf(t),originalLine:n.getArg(e,"line"),originalColumn:n.getArg(e,"column")},i=this._findMapping(r,this._originalMappings,"originalLine","originalColumn",n.compareByOriginalPositions,n.getArg(e,"bias",l.GREATEST_LOWER_BOUND));if(i>=0){var s=this._originalMappings[i];if(s.source===r.source)return{line:n.getArg(s,"generatedLine",null),column:n.getArg(s,"generatedColumn",null),lastColumn:n.getArg(s,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},p.prototype=Object.create(l.prototype),p.prototype.constructor=l,p.prototype._version=3,Object.defineProperty(p.prototype,"sources",{get:function(){for(var e=[],t=0;t<this._sections.length;t++)for(var r=0;r<this._sections[t].consumer.sources.length;r++)e.push(this._sections[t].consumer.sources[r]);return e}}),p.prototype.originalPositionFor=function(e){var t={generatedLine:n.getArg(e,"line"),generatedColumn:n.getArg(e,"column")},r=i.search(t,this._sections,(function(e,t){var r=e.generatedLine-t.generatedOffset.generatedLine;return r||e.generatedColumn-t.generatedOffset.generatedColumn})),s=this._sections[r];return s?s.consumer.originalPositionFor({line:t.generatedLine-(s.generatedOffset.generatedLine-1),column:t.generatedColumn-(s.generatedOffset.generatedLine===t.generatedLine?s.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}},p.prototype.hasContentsOfAllSources=function(){return this._sections.every((function(e){return e.consumer.hasContentsOfAllSources()}))},p.prototype.sourceContentFor=function(e,t){for(var r=0;r<this._sections.length;r++){var n=this._sections[r].consumer.sourceContentFor(e,!0);if(n)return n}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},p.prototype.generatedPositionFor=function(e){for(var t=0;t<this._sections.length;t++){var r=this._sections[t];if(-1!==r.consumer.sources.indexOf(n.getArg(e,"source"))){var i=r.consumer.generatedPositionFor(e);if(i)return{line:i.line+(r.generatedOffset.generatedLine-1),column:i.column+(r.generatedOffset.generatedLine===i.line?r.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}},p.prototype._parseMappings=function(e,t){this.__generatedMappings=[],this.__originalMappings=[];for(var r=0;r<this._sections.length;r++)for(var i=this._sections[r],s=i.consumer._generatedMappings,o=0;o<s.length;o++){var l=s[o],u=i.consumer._sources.at(l.source);null!==i.consumer.sourceRoot&&(u=n.join(i.consumer.sourceRoot,u)),this._sources.add(u),u=this._sources.indexOf(u);var c=i.consumer._names.at(l.name);this._names.add(c),c=this._names.indexOf(c);var p={source:u,generatedLine:l.generatedLine+(i.generatedOffset.generatedLine-1),generatedColumn:l.generatedColumn+(i.generatedOffset.generatedLine===l.generatedLine?i.generatedOffset.generatedColumn-1:0),originalLine:l.originalLine,originalColumn:l.originalColumn,name:c};this.__generatedMappings.push(p),"number"==typeof p.originalLine&&this.__originalMappings.push(p)}a(this.__generatedMappings,n.compareByGeneratedPositionsDeflated),a(this.__originalMappings,n.compareByOriginalPositions)}},6376:(e,t,r)=>{var n=r(8006),i=r(3626),s=r(7586).I,o=r(3196).H;function a(e){e||(e={}),this._file=i.getArg(e,"file",null),this._sourceRoot=i.getArg(e,"sourceRoot",null),this._skipValidation=i.getArg(e,"skipValidation",!1),this._sources=new s,this._names=new s,this._mappings=new o,this._sourcesContents=null}a.prototype._version=3,a.fromSourceMap=function(e){var t=e.sourceRoot,r=new a({file:e.file,sourceRoot:t});return e.eachMapping((function(e){var n={generated:{line:e.generatedLine,column:e.generatedColumn}};null!=e.source&&(n.source=e.source,null!=t&&(n.source=i.relative(t,n.source)),n.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(n.name=e.name)),r.addMapping(n)})),e.sources.forEach((function(t){var n=e.sourceContentFor(t);null!=n&&r.setSourceContent(t,n)})),r},a.prototype.addMapping=function(e){var t=i.getArg(e,"generated"),r=i.getArg(e,"original",null),n=i.getArg(e,"source",null),s=i.getArg(e,"name",null);this._skipValidation||this._validateMapping(t,r,n,s),null!=n&&(n=String(n),this._sources.has(n)||this._sources.add(n)),null!=s&&(s=String(s),this._names.has(s)||this._names.add(s)),this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:null!=r&&r.line,originalColumn:null!=r&&r.column,source:n,name:s})},a.prototype.setSourceContent=function(e,t){var r=e;null!=this._sourceRoot&&(r=i.relative(this._sourceRoot,r)),null!=t?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[i.toSetString(r)]=t):this._sourcesContents&&(delete this._sourcesContents[i.toSetString(r)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},a.prototype.applySourceMap=function(e,t,r){var n=t;if(null==t){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');n=e.file}var o=this._sourceRoot;null!=o&&(n=i.relative(o,n));var a=new s,l=new s;this._mappings.unsortedForEach((function(t){if(t.source===n&&null!=t.originalLine){var s=e.originalPositionFor({line:t.originalLine,column:t.originalColumn});null!=s.source&&(t.source=s.source,null!=r&&(t.source=i.join(r,t.source)),null!=o&&(t.source=i.relative(o,t.source)),t.originalLine=s.line,t.originalColumn=s.column,null!=s.name&&(t.name=s.name))}var u=t.source;null==u||a.has(u)||a.add(u);var c=t.name;null==c||l.has(c)||l.add(c)}),this),this._sources=a,this._names=l,e.sources.forEach((function(t){var n=e.sourceContentFor(t);null!=n&&(null!=r&&(t=i.join(r,t)),null!=o&&(t=i.relative(o,t)),this.setSourceContent(t,n))}),this)},a.prototype._validateMapping=function(e,t,r,n){if(t&&"number"!=typeof t.line&&"number"!=typeof t.column)throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||t||r||n)&&!(e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&r))throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:r,original:t,name:n}))},a.prototype._serializeMappings=function(){for(var e,t,r,s,o=0,a=1,l=0,u=0,c=0,p=0,f="",d=this._mappings.toArray(),h=0,m=d.length;h<m;h++){if(e="",(t=d[h]).generatedLine!==a)for(o=0;t.generatedLine!==a;)e+=";",a++;else if(h>0){if(!i.compareByGeneratedPositionsInflated(t,d[h-1]))continue;e+=","}e+=n.encode(t.generatedColumn-o),o=t.generatedColumn,null!=t.source&&(s=this._sources.indexOf(t.source),e+=n.encode(s-p),p=s,e+=n.encode(t.originalLine-1-u),u=t.originalLine-1,e+=n.encode(t.originalColumn-l),l=t.originalColumn,null!=t.name&&(r=this._names.indexOf(t.name),e+=n.encode(r-c),c=r)),f+=e}return f},a.prototype._generateSourcesContent=function(e,t){return e.map((function(e){if(!this._sourcesContents)return null;null!=t&&(e=i.relative(t,e));var r=i.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,r)?this._sourcesContents[r]:null}),this)},a.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},a.prototype.toString=function(){return JSON.stringify(this.toJSON())},t.SourceMapGenerator=a},5557:(e,t,r)=>{var n=r(6376).SourceMapGenerator,i=r(3626),s=/(\r?\n)/,o="$$$isSourceNode$$$";function a(e,t,r,n,i){this.children=[],this.sourceContents={},this.line=null==e?null:e,this.column=null==t?null:t,this.source=null==r?null:r,this.name=null==i?null:i,this[o]=!0,null!=n&&this.add(n)}a.fromStringWithSourceMap=function(e,t,r){var n=new a,o=e.split(s),l=0,u=function(){return e()+(e()||"");function e(){return l<o.length?o[l++]:void 0}},c=1,p=0,f=null;return t.eachMapping((function(e){if(null!==f){if(!(c<e.generatedLine)){var t=(r=o[l]).substr(0,e.generatedColumn-p);return o[l]=r.substr(e.generatedColumn-p),p=e.generatedColumn,d(f,t),void(f=e)}d(f,u()),c++,p=0}for(;c<e.generatedLine;)n.add(u()),c++;if(p<e.generatedColumn){var r=o[l];n.add(r.substr(0,e.generatedColumn)),o[l]=r.substr(e.generatedColumn),p=e.generatedColumn}f=e}),this),l<o.length&&(f&&d(f,u()),n.add(o.splice(l).join(""))),t.sources.forEach((function(e){var s=t.sourceContentFor(e);null!=s&&(null!=r&&(e=i.join(r,e)),n.setSourceContent(e,s))})),n;function d(e,t){if(null===e||void 0===e.source)n.add(t);else{var s=r?i.join(r,e.source):e.source;n.add(new a(e.originalLine,e.originalColumn,s,t,e.name))}}},a.prototype.add=function(e){if(Array.isArray(e))e.forEach((function(e){this.add(e)}),this);else{if(!e[o]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);e&&this.children.push(e)}return this},a.prototype.prepend=function(e){if(Array.isArray(e))for(var t=e.length-1;t>=0;t--)this.prepend(e[t]);else{if(!e[o]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);this.children.unshift(e)}return this},a.prototype.walk=function(e){for(var t,r=0,n=this.children.length;r<n;r++)(t=this.children[r])[o]?t.walk(e):""!==t&&e(t,{source:this.source,line:this.line,column:this.column,name:this.name})},a.prototype.join=function(e){var t,r,n=this.children.length;if(n>0){for(t=[],r=0;r<n-1;r++)t.push(this.children[r]),t.push(e);t.push(this.children[r]),this.children=t}return this},a.prototype.replaceRight=function(e,t){var r=this.children[this.children.length-1];return r[o]?r.replaceRight(e,t):"string"==typeof r?this.children[this.children.length-1]=r.replace(e,t):this.children.push("".replace(e,t)),this},a.prototype.setSourceContent=function(e,t){this.sourceContents[i.toSetString(e)]=t},a.prototype.walkSourceContents=function(e){for(var t=0,r=this.children.length;t<r;t++)this.children[t][o]&&this.children[t].walkSourceContents(e);var n=Object.keys(this.sourceContents);for(t=0,r=n.length;t<r;t++)e(i.fromSetString(n[t]),this.sourceContents[n[t]])},a.prototype.toString=function(){var e="";return this.walk((function(t){e+=t})),e},a.prototype.toStringWithSourceMap=function(e){var t={code:"",line:1,column:0},r=new n(e),i=!1,s=null,o=null,a=null,l=null;return this.walk((function(e,n){t.code+=e,null!==n.source&&null!==n.line&&null!==n.column?(s===n.source&&o===n.line&&a===n.column&&l===n.name||r.addMapping({source:n.source,original:{line:n.line,column:n.column},generated:{line:t.line,column:t.column},name:n.name}),s=n.source,o=n.line,a=n.column,l=n.name,i=!0):i&&(r.addMapping({generated:{line:t.line,column:t.column}}),s=null,i=!1);for(var u=0,c=e.length;u<c;u++)10===e.charCodeAt(u)?(t.line++,t.column=0,u+1===c?(s=null,i=!1):i&&r.addMapping({source:n.source,original:{line:n.line,column:n.column},generated:{line:t.line,column:t.column},name:n.name})):t.column++})),this.walkSourceContents((function(e,t){r.setSourceContent(e,t)})),{code:t.code,map:r}},t.SourceNode=a},3626:(e,t)=>{t.getArg=function(e,t,r){if(t in e)return e[t];if(3===arguments.length)return r;throw new Error('"'+t+'" is a required argument.')};var r=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,n=/^data:.+\,.+$/;function i(e){var t=e.match(r);return t?{scheme:t[1],auth:t[2],host:t[3],port:t[4],path:t[5]}:null}function s(e){var t="";return e.scheme&&(t+=e.scheme+":"),t+="//",e.auth&&(t+=e.auth+"@"),e.host&&(t+=e.host),e.port&&(t+=":"+e.port),e.path&&(t+=e.path),t}function o(e){var r=e,n=i(e);if(n){if(!n.path)return e;r=n.path}for(var o,a=t.isAbsolute(r),l=r.split(/\/+/),u=0,c=l.length-1;c>=0;c--)"."===(o=l[c])?l.splice(c,1):".."===o?u++:u>0&&(""===o?(l.splice(c+1,u),u=0):(l.splice(c,2),u--));return""===(r=l.join("/"))&&(r=a?"/":"."),n?(n.path=r,s(n)):r}t.urlParse=i,t.urlGenerate=s,t.normalize=o,t.join=function(e,t){""===e&&(e="."),""===t&&(t=".");var r=i(t),a=i(e);if(a&&(e=a.path||"/"),r&&!r.scheme)return a&&(r.scheme=a.scheme),s(r);if(r||t.match(n))return t;if(a&&!a.host&&!a.path)return a.host=t,s(a);var l="/"===t.charAt(0)?t:o(e.replace(/\/+$/,"")+"/"+t);return a?(a.path=l,s(a)):l},t.isAbsolute=function(e){return"/"===e.charAt(0)||!!e.match(r)},t.relative=function(e,t){""===e&&(e="."),e=e.replace(/\/$/,"");for(var r=0;0!==t.indexOf(e+"/");){var n=e.lastIndexOf("/");if(n<0)return t;if((e=e.slice(0,n)).match(/^([^\/]+:\/)?\/*$/))return t;++r}return Array(r+1).join("../")+t.substr(e.length+1)};var a=!("__proto__"in Object.create(null));function l(e){return e}function u(e){if(!e)return!1;var t=e.length;if(t<9)return!1;if(95!==e.charCodeAt(t-1)||95!==e.charCodeAt(t-2)||111!==e.charCodeAt(t-3)||116!==e.charCodeAt(t-4)||111!==e.charCodeAt(t-5)||114!==e.charCodeAt(t-6)||112!==e.charCodeAt(t-7)||95!==e.charCodeAt(t-8)||95!==e.charCodeAt(t-9))return!1;for(var r=t-10;r>=0;r--)if(36!==e.charCodeAt(r))return!1;return!0}function c(e,t){return e===t?0:e>t?1:-1}t.toSetString=a?l:function(e){return u(e)?"$"+e:e},t.fromSetString=a?l:function(e){return u(e)?e.slice(1):e},t.compareByOriginalPositions=function(e,t,r){var n=e.source-t.source;return 0!==n||0!==(n=e.originalLine-t.originalLine)||0!==(n=e.originalColumn-t.originalColumn)||r||0!==(n=e.generatedColumn-t.generatedColumn)||0!==(n=e.generatedLine-t.generatedLine)?n:e.name-t.name},t.compareByGeneratedPositionsDeflated=function(e,t,r){var n=e.generatedLine-t.generatedLine;return 0!==n||0!==(n=e.generatedColumn-t.generatedColumn)||r||0!==(n=e.source-t.source)||0!==(n=e.originalLine-t.originalLine)||0!==(n=e.originalColumn-t.originalColumn)?n:e.name-t.name},t.compareByGeneratedPositionsInflated=function(e,t){var r=e.generatedLine-t.generatedLine;return 0!==r||0!==(r=e.generatedColumn-t.generatedColumn)||0!==(r=c(e.source,t.source))||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)?r:c(e.name,t.name)}},6466:(e,t,r)=>{t.SourceMapGenerator=r(6376).SourceMapGenerator,t.SourceMapConsumer=r(9593).SourceMapConsumer,t.SourceNode=r(5557).SourceNode},4483:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const r=/^[ \t]+$/;t.default=class{constructor(e){this._map=null,this._buf="",this._last=0,this._queue=[],this._position={line:1,column:0},this._sourcePosition={identifierName:null,line:null,column:null,filename:null},this._disallowedPop=null,this._map=e}get(){this._flush();const e=this._map,t={code:this._buf.trimRight(),map:null,rawMappings:null==e?void 0:e.getRawMappings()};return e&&Object.defineProperty(t,"map",{configurable:!0,enumerable:!0,get(){return this.map=e.get()},set(e){Object.defineProperty(this,"map",{value:e,writable:!0})}}),t}append(e){this._flush();const{line:t,column:r,filename:n,identifierName:i,force:s}=this._sourcePosition;this._append(e,t,r,i,n,s)}queue(e){if("\n"===e)for(;this._queue.length>0&&r.test(this._queue[0][0]);)this._queue.shift();const{line:t,column:n,filename:i,identifierName:s,force:o}=this._sourcePosition;this._queue.unshift([e,t,n,s,i,o])}_flush(){let e;for(;e=this._queue.pop();)this._append(...e)}_append(e,t,r,n,i,s){this._buf+=e,this._last=e.charCodeAt(e.length-1);let o=e.indexOf("\n"),a=0;for(0!==o&&this._mark(t,r,n,i,s);-1!==o;)this._position.line++,this._position.column=0,a=o+1,a<e.length&&this._mark(++t,0,n,i,s),o=e.indexOf("\n",a);this._position.column+=e.length-a}_mark(e,t,r,n,i){var s;null==(s=this._map)||s.mark(this._position.line,this._position.column,e,t,r,n,i)}removeTrailingNewline(){this._queue.length>0&&"\n"===this._queue[0][0]&&this._queue.shift()}removeLastSemicolon(){this._queue.length>0&&";"===this._queue[0][0]&&this._queue.shift()}getLastChar(){let e;if(this._queue.length>0){e=this._queue[0][0].charCodeAt(0)}else e=this._last;return e}endsWithCharAndNewline(){const e=this._queue;if(e.length>0){if(10!==e[0][0].charCodeAt(0))return;if(e.length>1){return e[1][0].charCodeAt(0)}return this._last}}hasContent(){return this._queue.length>0||!!this._last}exactSource(e,t){this.source("start",e,!0),t(),this.source("end",e),this._disallowPop("start",e)}source(e,t,r){e&&!t||this._normalizePosition(e,t,this._sourcePosition,r)}withSource(e,t,r){if(!this._map)return r();const n=this._sourcePosition.line,i=this._sourcePosition.column,s=this._sourcePosition.filename,o=this._sourcePosition.identifierName;this.source(e,t),r(),this._sourcePosition.force&&this._sourcePosition.line===n&&this._sourcePosition.column===i&&this._sourcePosition.filename===s||this._disallowedPop&&this._disallowedPop.line===n&&this._disallowedPop.column===i&&this._disallowedPop.filename===s||(this._sourcePosition.line=n,this._sourcePosition.column=i,this._sourcePosition.filename=s,this._sourcePosition.identifierName=o,this._sourcePosition.force=!1,this._disallowedPop=null)}_disallowPop(e,t){e&&!t||(this._disallowedPop=this._normalizePosition(e,t))}_normalizePosition(e,t,r,n){const i=t?t[e]:null;void 0===r&&(r={identifierName:null,line:null,column:null,filename:null,force:!1});const s=r.line,o=r.column,a=r.filename;return r.identifierName="start"===e&&(null==t?void 0:t.identifierName)||null,r.line=null==i?void 0:i.line,r.column=null==i?void 0:i.column,r.filename=null==t?void 0:t.filename,(n||r.line!==s||r.column!==o||r.filename!==a)&&(r.force=n),r}getCurrentColumn(){const e=this._queue.reduce(((e,t)=>t[0]+e),""),t=e.lastIndexOf("\n");return-1===t?this._position.column+e.length:e.length-1-t}getCurrentLine(){const e=this._queue.reduce(((e,t)=>t[0]+e),"");let t=0;for(let r=0;r<e.length;r++)"\n"===e[r]&&t++;return this._position.line+t}}},4020:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BlockStatement=function(e){var t;this.token("{"),this.printInnerComments(e);const r=null==(t=e.directives)?void 0:t.length;e.body.length||r?(this.newline(),this.printSequence(e.directives,e,{indent:!0}),r&&this.newline(),this.printSequence(e.body,e,{indent:!0}),this.removeTrailingNewline(),this.source("end",e.loc),this.endsWith(10)||this.newline(),this.rightBrace()):(this.source("end",e.loc),this.token("}"))},t.Directive=function(e){this.print(e.value,e),this.semicolon()},t.DirectiveLiteral=function(e){const t=this.getPossibleRaw(e);if(null!=t)return void this.token(t);const{value:i}=e;if(n.test(i)){if(r.test(i))throw new Error("Malformed AST: it is not possible to print a directive containing both unescaped single and double quotes.");this.token(`'${i}'`)}else this.token(`"${i}"`)},t.File=function(e){e.program&&this.print(e.program.interpreter,e);this.print(e.program,e)},t.InterpreterDirective=function(e){this.token(`#!${e.value}\n`)},t.Placeholder=function(e){this.token("%%"),this.print(e.name),this.token("%%"),"Statement"===e.expectedNode&&this.semicolon()},t.Program=function(e){this.printInnerComments(e,!1),this.printSequence(e.directives,e),e.directives&&e.directives.length&&this.newline();this.printSequence(e.body,e)};const r=/(?:^|[^\\])(?:\\\\)*'/,n=/(?:^|[^\\])(?:\\\\)*"/},53:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClassBody=function(e){this.token("{"),this.printInnerComments(e),0===e.body.length?this.token("}"):(this.newline(),this.indent(),this.printSequence(e.body,e),this.dedent(),this.endsWith(10)||this.newline(),this.rightBrace())},t.ClassExpression=t.ClassDeclaration=function(e,t){this.format.decoratorsBeforeExport&&(i(t)||s(t))||this.printJoin(e.decorators,e);e.declare&&(this.word("declare"),this.space());e.abstract&&(this.word("abstract"),this.space());this.word("class"),this.printInnerComments(e),e.id&&(this.space(),this.print(e.id,e));this.print(e.typeParameters,e),e.superClass&&(this.space(),this.word("extends"),this.space(),this.print(e.superClass,e),this.print(e.superTypeParameters,e));e.implements&&(this.space(),this.word("implements"),this.space(),this.printList(e.implements,e));this.space(),this.print(e.body,e)},t.ClassMethod=function(e){this._classMethodHead(e),this.space(),this.print(e.body,e)},t.ClassPrivateMethod=function(e){this._classMethodHead(e),this.space(),this.print(e.body,e)},t.ClassPrivateProperty=function(e){this.printJoin(e.decorators,e),e.static&&(this.word("static"),this.space());this.print(e.key,e),this.print(e.typeAnnotation,e),e.value&&(this.space(),this.token("="),this.space(),this.print(e.value,e));this.semicolon()},t.ClassProperty=function(e){this.printJoin(e.decorators,e),this.source("end",e.key.loc),this.tsPrintClassMemberModifiers(e,!0),e.computed?(this.token("["),this.print(e.key,e),this.token("]")):(this._variance(e),this.print(e.key,e));e.optional&&this.token("?");e.definite&&this.token("!");this.print(e.typeAnnotation,e),e.value&&(this.space(),this.token("="),this.space(),this.print(e.value,e));this.semicolon()},t.StaticBlock=function(e){this.word("static"),this.space(),this.token("{"),0===e.body.length?this.token("}"):(this.newline(),this.printSequence(e.body,e,{indent:!0}),this.rightBrace())},t._classMethodHead=function(e){this.printJoin(e.decorators,e),this.source("end",e.key.loc),this.tsPrintClassMemberModifiers(e,!1),this._methodHead(e)};var n=r(666);const{isExportDefaultDeclaration:i,isExportNamedDeclaration:s}=n},9533:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LogicalExpression=t.BinaryExpression=t.AssignmentExpression=function(e,t){const r=this.inForStatementInitCounter&&"in"===e.operator&&!i.needsParens(e,t);r&&this.token("(");this.print(e.left,e),this.space(),"in"===e.operator||"instanceof"===e.operator?this.word(e.operator):this.token(e.operator);this.space(),this.print(e.right,e),r&&this.token(")")},t.AssignmentPattern=function(e){this.print(e.left,e),e.left.optional&&this.token("?");this.print(e.left.typeAnnotation,e),this.space(),this.token("="),this.space(),this.print(e.right,e)},t.AwaitExpression=void 0,t.BindExpression=function(e){this.print(e.object,e),this.token("::"),this.print(e.callee,e)},t.CallExpression=function(e){this.print(e.callee,e),this.print(e.typeArguments,e),this.print(e.typeParameters,e),this.token("("),this.printList(e.arguments,e),this.token(")")},t.ConditionalExpression=function(e){this.print(e.test,e),this.space(),this.token("?"),this.space(),this.print(e.consequent,e),this.space(),this.token(":"),this.space(),this.print(e.alternate,e)},t.Decorator=function(e){this.token("@"),this.print(e.expression,e),this.newline()},t.DoExpression=function(e){e.async&&(this.word("async"),this.space());this.word("do"),this.space(),this.print(e.body,e)},t.EmptyStatement=function(){this.semicolon(!0)},t.ExpressionStatement=function(e){this.print(e.expression,e),this.semicolon()},t.Import=function(){this.word("import")},t.MemberExpression=function(e){if(this.print(e.object,e),!e.computed&&a(e.property))throw new TypeError("Got a MemberExpression for MemberExpression property");let t=e.computed;o(e.property)&&"number"==typeof e.property.value&&(t=!0);t?(this.token("["),this.print(e.property,e),this.token("]")):(this.token("."),this.print(e.property,e))},t.MetaProperty=function(e){this.print(e.meta,e),this.token("."),this.print(e.property,e)},t.ModuleExpression=function(e){this.word("module"),this.space(),this.token("{"),0===e.body.body.length?this.token("}"):(this.newline(),this.printSequence(e.body.body,e,{indent:!0}),this.rightBrace())},t.NewExpression=function(e,t){if(this.word("new"),this.space(),this.print(e.callee,e),this.format.minified&&0===e.arguments.length&&!e.optional&&!s(t,{callee:e})&&!a(t)&&!l(t))return;this.print(e.typeArguments,e),this.print(e.typeParameters,e),e.optional&&this.token("?.");this.token("("),this.printList(e.arguments,e),this.token(")")},t.OptionalCallExpression=function(e){this.print(e.callee,e),this.print(e.typeArguments,e),this.print(e.typeParameters,e),e.optional&&this.token("?.");this.token("("),this.printList(e.arguments,e),this.token(")")},t.OptionalMemberExpression=function(e){if(this.print(e.object,e),!e.computed&&a(e.property))throw new TypeError("Got a MemberExpression for MemberExpression property");let t=e.computed;o(e.property)&&"number"==typeof e.property.value&&(t=!0);e.optional&&this.token("?.");t?(this.token("["),this.print(e.property,e),this.token("]")):(e.optional||this.token("."),this.print(e.property,e))},t.ParenthesizedExpression=function(e){this.token("("),this.print(e.expression,e),this.token(")")},t.PrivateName=function(e){this.token("#"),this.print(e.id,e)},t.SequenceExpression=function(e){this.printList(e.expressions,e)},t.Super=function(){this.word("super")},t.ThisExpression=function(){this.word("this")},t.UnaryExpression=function(e){"void"===e.operator||"delete"===e.operator||"typeof"===e.operator||"throw"===e.operator?(this.word(e.operator),this.space()):this.token(e.operator);this.print(e.argument,e)},t.UpdateExpression=function(e){e.prefix?(this.token(e.operator),this.print(e.argument,e)):(this.startTerminatorless(!0),this.print(e.argument,e),this.endTerminatorless(),this.token(e.operator))},t.V8IntrinsicIdentifier=function(e){this.token("%"),this.word(e.name)},t.YieldExpression=void 0;var n=r(666),i=r(2756);const{isCallExpression:s,isLiteral:o,isMemberExpression:a,isNewExpression:l}=n;function u(e){return function(t){if(this.word(e),t.delegate&&this.token("*"),t.argument){this.space();const e=this.startTerminatorless();this.print(t.argument,t),this.endTerminatorless(e)}}}const c=u("yield");t.YieldExpression=c;const p=u("await");t.AwaitExpression=p},3446:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnyTypeAnnotation=function(){this.word("any")},t.ArrayTypeAnnotation=function(e){this.print(e.elementType,e),this.token("["),this.token("]")},t.BooleanLiteralTypeAnnotation=function(e){this.word(e.value?"true":"false")},t.BooleanTypeAnnotation=function(){this.word("boolean")},t.DeclareClass=function(e,t){o(t)||(this.word("declare"),this.space());this.word("class"),this.space(),this._interfaceish(e)},t.DeclareExportAllDeclaration=function(){this.word("declare"),this.space(),i.ExportAllDeclaration.apply(this,arguments)},t.DeclareExportDeclaration=function(e){this.word("declare"),this.space(),this.word("export"),this.space(),e.default&&(this.word("default"),this.space());p.apply(this,arguments)},t.DeclareFunction=function(e,t){o(t)||(this.word("declare"),this.space());this.word("function"),this.space(),this.print(e.id,e),this.print(e.id.typeAnnotation.typeAnnotation,e),e.predicate&&(this.space(),this.print(e.predicate,e));this.semicolon()},t.DeclareInterface=function(e){this.word("declare"),this.space(),this.InterfaceDeclaration(e)},t.DeclareModule=function(e){this.word("declare"),this.space(),this.word("module"),this.space(),this.print(e.id,e),this.space(),this.print(e.body,e)},t.DeclareModuleExports=function(e){this.word("declare"),this.space(),this.word("module"),this.token("."),this.word("exports"),this.print(e.typeAnnotation,e)},t.DeclareOpaqueType=function(e,t){o(t)||(this.word("declare"),this.space());this.OpaqueType(e)},t.DeclareTypeAlias=function(e){this.word("declare"),this.space(),this.TypeAlias(e)},t.DeclareVariable=function(e,t){o(t)||(this.word("declare"),this.space());this.word("var"),this.space(),this.print(e.id,e),this.print(e.id.typeAnnotation,e),this.semicolon()},t.DeclaredPredicate=function(e){this.token("%"),this.word("checks"),this.token("("),this.print(e.value,e),this.token(")")},t.EmptyTypeAnnotation=function(){this.word("empty")},t.EnumBooleanBody=function(e){const{explicitType:t}=e;l(this,"boolean",t),u(this,e)},t.EnumBooleanMember=function(e){c(this,e)},t.EnumDeclaration=function(e){const{id:t,body:r}=e;this.word("enum"),this.space(),this.print(t,e),this.print(r,e)},t.EnumDefaultedMember=function(e){const{id:t}=e;this.print(t,e),this.token(",")},t.EnumNumberBody=function(e){const{explicitType:t}=e;l(this,"number",t),u(this,e)},t.EnumNumberMember=function(e){c(this,e)},t.EnumStringBody=function(e){const{explicitType:t}=e;l(this,"string",t),u(this,e)},t.EnumStringMember=function(e){c(this,e)},t.EnumSymbolBody=function(e){l(this,"symbol",!0),u(this,e)},t.ExistsTypeAnnotation=function(){this.token("*")},t.FunctionTypeAnnotation=function(e,t){this.print(e.typeParameters,e),this.token("("),e.this&&(this.word("this"),this.token(":"),this.space(),this.print(e.this.typeAnnotation,e),(e.params.length||e.rest)&&(this.token(","),this.space()));this.printList(e.params,e),e.rest&&(e.params.length&&(this.token(","),this.space()),this.token("..."),this.print(e.rest,e));this.token(")"),"ObjectTypeCallProperty"===t.type||"DeclareFunction"===t.type||"ObjectTypeProperty"===t.type&&t.method?this.token(":"):(this.space(),this.token("=>"));this.space(),this.print(e.returnType,e)},t.FunctionTypeParam=function(e){this.print(e.name,e),e.optional&&this.token("?");e.name&&(this.token(":"),this.space());this.print(e.typeAnnotation,e)},t.IndexedAccessType=function(e){this.print(e.objectType,e),this.token("["),this.print(e.indexType,e),this.token("]")},t.InferredPredicate=function(){this.token("%"),this.word("checks")},t.InterfaceDeclaration=function(e){this.word("interface"),this.space(),this._interfaceish(e)},t.GenericTypeAnnotation=t.ClassImplements=t.InterfaceExtends=function(e){this.print(e.id,e),this.print(e.typeParameters,e)},t.InterfaceTypeAnnotation=function(e){this.word("interface"),e.extends&&e.extends.length&&(this.space(),this.word("extends"),this.space(),this.printList(e.extends,e));this.space(),this.print(e.body,e)},t.IntersectionTypeAnnotation=function(e){this.printJoin(e.types,e,{separator:f})},t.MixedTypeAnnotation=function(){this.word("mixed")},t.NullLiteralTypeAnnotation=function(){this.word("null")},t.NullableTypeAnnotation=function(e){this.token("?"),this.print(e.typeAnnotation,e)},Object.defineProperty(t,"NumberLiteralTypeAnnotation",{enumerable:!0,get:function(){return s.NumericLiteral}}),t.NumberTypeAnnotation=function(){this.word("number")},t.ObjectTypeAnnotation=function(e){e.exact?this.token("{|"):this.token("{");const t=[...e.properties,...e.callProperties||[],...e.indexers||[],...e.internalSlots||[]];t.length&&(this.space(),this.printJoin(t,e,{addNewlines(e){if(e&&!t[0])return 1},indent:!0,statement:!0,iterator:()=>{(1!==t.length||e.inexact)&&(this.token(","),this.space())}}),this.space());e.inexact&&(this.indent(),this.token("..."),t.length&&this.newline(),this.dedent());e.exact?this.token("|}"):this.token("}")},t.ObjectTypeCallProperty=function(e){e.static&&(this.word("static"),this.space());this.print(e.value,e)},t.ObjectTypeIndexer=function(e){e.static&&(this.word("static"),this.space());this._variance(e),this.token("["),e.id&&(this.print(e.id,e),this.token(":"),this.space());this.print(e.key,e),this.token("]"),this.token(":"),this.space(),this.print(e.value,e)},t.ObjectTypeInternalSlot=function(e){e.static&&(this.word("static"),this.space());this.token("["),this.token("["),this.print(e.id,e),this.token("]"),this.token("]"),e.optional&&this.token("?");e.method||(this.token(":"),this.space());this.print(e.value,e)},t.ObjectTypeProperty=function(e){e.proto&&(this.word("proto"),this.space());e.static&&(this.word("static"),this.space());"get"!==e.kind&&"set"!==e.kind||(this.word(e.kind),this.space());this._variance(e),this.print(e.key,e),e.optional&&this.token("?");e.method||(this.token(":"),this.space());this.print(e.value,e)},t.ObjectTypeSpreadProperty=function(e){this.token("..."),this.print(e.argument,e)},t.OpaqueType=function(e){this.word("opaque"),this.space(),this.word("type"),this.space(),this.print(e.id,e),this.print(e.typeParameters,e),e.supertype&&(this.token(":"),this.space(),this.print(e.supertype,e));e.impltype&&(this.space(),this.token("="),this.space(),this.print(e.impltype,e));this.semicolon()},t.OptionalIndexedAccessType=function(e){this.print(e.objectType,e),e.optional&&this.token("?.");this.token("["),this.print(e.indexType,e),this.token("]")},t.QualifiedTypeIdentifier=function(e){this.print(e.qualification,e),this.token("."),this.print(e.id,e)},Object.defineProperty(t,"StringLiteralTypeAnnotation",{enumerable:!0,get:function(){return s.StringLiteral}}),t.StringTypeAnnotation=function(){this.word("string")},t.SymbolTypeAnnotation=function(){this.word("symbol")},t.ThisTypeAnnotation=function(){this.word("this")},t.TupleTypeAnnotation=function(e){this.token("["),this.printList(e.types,e),this.token("]")},t.TypeAlias=function(e){this.word("type"),this.space(),this.print(e.id,e),this.print(e.typeParameters,e),this.space(),this.token("="),this.space(),this.print(e.right,e),this.semicolon()},t.TypeAnnotation=function(e){this.token(":"),this.space(),e.optional&&this.token("?");this.print(e.typeAnnotation,e)},t.TypeCastExpression=function(e){this.token("("),this.print(e.expression,e),this.print(e.typeAnnotation,e),this.token(")")},t.TypeParameter=function(e){this._variance(e),this.word(e.name),e.bound&&this.print(e.bound,e);e.default&&(this.space(),this.token("="),this.space(),this.print(e.default,e))},t.TypeParameterDeclaration=t.TypeParameterInstantiation=function(e){this.token("<"),this.printList(e.params,e,{}),this.token(">")},t.TypeofTypeAnnotation=function(e){this.word("typeof"),this.space(),this.print(e.argument,e)},t.UnionTypeAnnotation=function(e){this.printJoin(e.types,e,{separator:d})},t.Variance=function(e){"plus"===e.kind?this.token("+"):this.token("-")},t.VoidTypeAnnotation=function(){this.word("void")},t._interfaceish=function(e){var t;this.print(e.id,e),this.print(e.typeParameters,e),null!=(t=e.extends)&&t.length&&(this.space(),this.word("extends"),this.space(),this.printList(e.extends,e));e.mixins&&e.mixins.length&&(this.space(),this.word("mixins"),this.space(),this.printList(e.mixins,e));e.implements&&e.implements.length&&(this.space(),this.word("implements"),this.space(),this.printList(e.implements,e));this.space(),this.print(e.body,e)},t._variance=function(e){e.variance&&("plus"===e.variance.kind?this.token("+"):"minus"===e.variance.kind&&this.token("-"))};var n=r(666),i=r(2014),s=r(1338);const{isDeclareExportDeclaration:o,isStatement:a}=n;function l(e,t,r){r&&(e.space(),e.word("of"),e.space(),e.word(t)),e.space()}function u(e,t){const{members:r}=t;e.token("{"),e.indent(),e.newline();for(const n of r)e.print(n,t),e.newline();t.hasUnknownMembers&&(e.token("..."),e.newline()),e.dedent(),e.token("}")}function c(e,t){const{id:r,init:n}=t;e.print(r,t),e.space(),e.token("="),e.space(),e.print(n,t),e.token(",")}function p(e){if(e.declaration){const t=e.declaration;this.print(t,e),a(t)||this.semicolon()}else this.token("{"),e.specifiers.length&&(this.space(),this.printList(e.specifiers,e),this.space()),this.token("}"),e.source&&(this.space(),this.word("from"),this.space(),this.print(e.source,e)),this.semicolon()}function f(){this.space(),this.token("&"),this.space()}function d(){this.space(),this.token("|"),this.space()}},9030:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2394);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===n[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}}))}));var i=r(9533);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}}))}));var s=r(3259);Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===s[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}}))}));var o=r(53);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))}));var a=r(5295);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===a[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}}))}));var l=r(2014);Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===l[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}}))}));var u=r(1338);Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===u[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}}))}));var c=r(3446);Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===c[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}}))}));var p=r(4020);Object.keys(p).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===p[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return p[e]}}))}));var f=r(5433);Object.keys(f).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===f[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return f[e]}}))}));var d=r(4124);Object.keys(d).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===d[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return d[e]}}))}))},5433:(e,t)=>{"use strict";function r(){this.space()}Object.defineProperty(t,"__esModule",{value:!0}),t.JSXAttribute=function(e){this.print(e.name,e),e.value&&(this.token("="),this.print(e.value,e))},t.JSXClosingElement=function(e){this.token("</"),this.print(e.name,e),this.token(">")},t.JSXClosingFragment=function(){this.token("</"),this.token(">")},t.JSXElement=function(e){const t=e.openingElement;if(this.print(t,e),t.selfClosing)return;this.indent();for(const t of e.children)this.print(t,e);this.dedent(),this.print(e.closingElement,e)},t.JSXEmptyExpression=function(e){this.printInnerComments(e)},t.JSXExpressionContainer=function(e){this.token("{"),this.print(e.expression,e),this.token("}")},t.JSXFragment=function(e){this.print(e.openingFragment,e),this.indent();for(const t of e.children)this.print(t,e);this.dedent(),this.print(e.closingFragment,e)},t.JSXIdentifier=function(e){this.word(e.name)},t.JSXMemberExpression=function(e){this.print(e.object,e),this.token("."),this.print(e.property,e)},t.JSXNamespacedName=function(e){this.print(e.namespace,e),this.token(":"),this.print(e.name,e)},t.JSXOpeningElement=function(e){this.token("<"),this.print(e.name,e),this.print(e.typeParameters,e),e.attributes.length>0&&(this.space(),this.printJoin(e.attributes,e,{separator:r}));e.selfClosing?(this.space(),this.token("/>")):this.token(">")},t.JSXOpeningFragment=function(){this.token("<"),this.token(">")},t.JSXSpreadAttribute=function(e){this.token("{"),this.token("..."),this.print(e.argument,e),this.token("}")},t.JSXSpreadChild=function(e){this.token("{"),this.token("..."),this.print(e.expression,e),this.token("}")},t.JSXText=function(e){const t=this.getPossibleRaw(e);null!=t?this.token(t):this.token(e.value)}},5295:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ArrowFunctionExpression=function(e){e.async&&(this.word("async"),this.space());const t=e.params[0];this.format.retainLines||this.format.auxiliaryCommentBefore||this.format.auxiliaryCommentAfter||1!==e.params.length||!i(t)||function(e,t){var r,n;return!!(e.typeParameters||e.returnType||e.predicate||t.typeAnnotation||t.optional||null!=(r=t.leadingComments)&&r.length||null!=(n=t.trailingComments)&&n.length)}(e,t)?this._params(e):this.print(t,e);this._predicate(e),this.space(),this.token("=>"),this.space(),this.print(e.body,e)},t.FunctionDeclaration=t.FunctionExpression=function(e){this._functionHead(e),this.space(),this.print(e.body,e)},t._functionHead=function(e){e.async&&(this.word("async"),this.space());this.word("function"),e.generator&&this.token("*");this.printInnerComments(e),this.space(),e.id&&this.print(e.id,e);this._params(e),this._predicate(e)},t._methodHead=function(e){const t=e.kind,r=e.key;"get"!==t&&"set"!==t||(this.word(t),this.space());e.async&&(this._catchUp("start",r.loc),this.word("async"),this.space());"method"!==t&&"init"!==t||e.generator&&this.token("*");e.computed?(this.token("["),this.print(r,e),this.token("]")):this.print(r,e);e.optional&&this.token("?");this._params(e)},t._param=function(e,t){this.printJoin(e.decorators,e),this.print(e,t),e.optional&&this.token("?");this.print(e.typeAnnotation,e)},t._parameters=function(e,t){for(let r=0;r<e.length;r++)this._param(e[r],t),r<e.length-1&&(this.token(","),this.space())},t._params=function(e){this.print(e.typeParameters,e),this.token("("),this._parameters(e.params,e),this.token(")"),this.print(e.returnType,e)},t._predicate=function(e){e.predicate&&(e.returnType||this.token(":"),this.space(),this.print(e.predicate,e))};var n=r(666);const{isIdentifier:i}=n},2014:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ExportAllDeclaration=function(e){this.word("export"),this.space(),"type"===e.exportKind&&(this.word("type"),this.space());this.token("*"),this.space(),this.word("from"),this.space(),this.print(e.source,e),this.printAssertions(e),this.semicolon()},t.ExportDefaultDeclaration=function(e){this.format.decoratorsBeforeExport&&i(e.declaration)&&this.printJoin(e.declaration.decorators,e);this.word("export"),this.space(),this.word("default"),this.space(),c.apply(this,arguments)},t.ExportDefaultSpecifier=function(e){this.print(e.exported,e)},t.ExportNamedDeclaration=function(e){this.format.decoratorsBeforeExport&&i(e.declaration)&&this.printJoin(e.declaration.decorators,e);this.word("export"),this.space(),c.apply(this,arguments)},t.ExportNamespaceSpecifier=function(e){this.token("*"),this.space(),this.word("as"),this.space(),this.print(e.exported,e)},t.ExportSpecifier=function(e){"type"===e.exportKind&&(this.word("type"),this.space());this.print(e.local,e),e.exported&&e.local.name!==e.exported.name&&(this.space(),this.word("as"),this.space(),this.print(e.exported,e))},t.ImportAttribute=function(e){this.print(e.key),this.token(":"),this.space(),this.print(e.value)},t.ImportDeclaration=function(e){this.word("import"),this.space(),("type"===e.importKind||"typeof"===e.importKind)&&(this.word(e.importKind),this.space());const t=e.specifiers.slice(0);if(null!=t&&t.length){for(;;){const r=t[0];if(!a(r)&&!l(r))break;this.print(t.shift(),e),t.length&&(this.token(","),this.space())}t.length&&(this.token("{"),this.space(),this.printList(t,e),this.space(),this.token("}")),this.space(),this.word("from"),this.space()}var r;this.print(e.source,e),this.printAssertions(e),null!=(r=e.attributes)&&r.length&&(this.space(),this.word("with"),this.space(),this.printList(e.attributes,e));this.semicolon()},t.ImportDefaultSpecifier=function(e){this.print(e.local,e)},t.ImportNamespaceSpecifier=function(e){this.token("*"),this.space(),this.word("as"),this.space(),this.print(e.local,e)},t.ImportSpecifier=function(e){"type"!==e.importKind&&"typeof"!==e.importKind||(this.word(e.importKind),this.space());this.print(e.imported,e),e.local&&e.local.name!==e.imported.name&&(this.space(),this.word("as"),this.space(),this.print(e.local,e))};var n=r(666);const{isClassDeclaration:i,isExportDefaultSpecifier:s,isExportNamespaceSpecifier:o,isImportDefaultSpecifier:a,isImportNamespaceSpecifier:l,isStatement:u}=n;function c(e){if(e.declaration){const t=e.declaration;this.print(t,e),u(t)||this.semicolon()}else{"type"===e.exportKind&&(this.word("type"),this.space());const t=e.specifiers.slice(0);let r=!1;for(;;){const n=t[0];if(!s(n)&&!o(n))break;r=!0,this.print(t.shift(),e),t.length&&(this.token(","),this.space())}(t.length||!t.length&&!r)&&(this.token("{"),t.length&&(this.space(),this.printList(t,e),this.space()),this.token("}")),e.source&&(this.space(),this.word("from"),this.space(),this.print(e.source,e),this.printAssertions(e)),this.semicolon()}}},3259:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BreakStatement=void 0,t.CatchClause=function(e){this.word("catch"),this.space(),e.param&&(this.token("("),this.print(e.param,e),this.print(e.param.typeAnnotation,e),this.token(")"),this.space());this.print(e.body,e)},t.ContinueStatement=void 0,t.DebuggerStatement=function(){this.word("debugger"),this.semicolon()},t.DoWhileStatement=function(e){this.word("do"),this.space(),this.print(e.body,e),this.space(),this.word("while"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.semicolon()},t.ForOfStatement=t.ForInStatement=void 0,t.ForStatement=function(e){this.word("for"),this.space(),this.token("("),this.inForStatementInitCounter++,this.print(e.init,e),this.inForStatementInitCounter--,this.token(";"),e.test&&(this.space(),this.print(e.test,e));this.token(";"),e.update&&(this.space(),this.print(e.update,e));this.token(")"),this.printBlock(e)},t.IfStatement=function(e){this.word("if"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.space();const t=e.alternate&&o(l(e.consequent));t&&(this.token("{"),this.newline(),this.indent());this.printAndIndentOnComments(e.consequent,e),t&&(this.dedent(),this.newline(),this.token("}"));e.alternate&&(this.endsWith(125)&&this.space(),this.word("else"),this.space(),this.printAndIndentOnComments(e.alternate,e))},t.LabeledStatement=function(e){this.print(e.label,e),this.token(":"),this.space(),this.print(e.body,e)},t.ReturnStatement=void 0,t.SwitchCase=function(e){e.test?(this.word("case"),this.space(),this.print(e.test,e),this.token(":")):(this.word("default"),this.token(":"));e.consequent.length&&(this.newline(),this.printSequence(e.consequent,e,{indent:!0}))},t.SwitchStatement=function(e){this.word("switch"),this.space(),this.token("("),this.print(e.discriminant,e),this.token(")"),this.space(),this.token("{"),this.printSequence(e.cases,e,{indent:!0,addNewlines(t,r){if(!t&&e.cases[e.cases.length-1]===r)return-1}}),this.token("}")},t.ThrowStatement=void 0,t.TryStatement=function(e){this.word("try"),this.space(),this.print(e.block,e),this.space(),e.handlers?this.print(e.handlers[0],e):this.print(e.handler,e);e.finalizer&&(this.space(),this.word("finally"),this.space(),this.print(e.finalizer,e))},t.VariableDeclaration=function(e,t){e.declare&&(this.word("declare"),this.space());this.word(e.kind),this.space();let r,n=!1;if(!i(t))for(const t of e.declarations)t.init&&(n=!0);n&&(r="const"===e.kind?b:g);if(this.printList(e.declarations,e,{separator:r}),i(t))if(s(t)){if(t.init===e)return}else if(t.left===e)return;this.semicolon()},t.VariableDeclarator=function(e){this.print(e.id,e),e.definite&&this.token("!");this.print(e.id.typeAnnotation,e),e.init&&(this.space(),this.token("="),this.space(),this.print(e.init,e))},t.WhileStatement=function(e){this.word("while"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.printBlock(e)},t.WithStatement=function(e){this.word("with"),this.space(),this.token("("),this.print(e.object,e),this.token(")"),this.printBlock(e)};var n=r(666);const{isFor:i,isForStatement:s,isIfStatement:o,isStatement:a}=n;function l(e){return a(e.body)?l(e.body):e}const u=function(e){return function(t){this.word("for"),this.space(),"of"===e&&t.await&&(this.word("await"),this.space()),this.token("("),this.print(t.left,t),this.space(),this.word(e),this.space(),this.print(t.right,t),this.token(")"),this.printBlock(t)}},c=u("in");t.ForInStatement=c;const p=u("of");function f(e,t="label"){return function(r){this.word(e);const n=r[t];if(n){this.space();const e="label"==t,i=this.startTerminatorless(e);this.print(n,r),this.endTerminatorless(i)}this.semicolon()}}t.ForOfStatement=p;const d=f("continue");t.ContinueStatement=d;const h=f("return","argument");t.ReturnStatement=h;const m=f("break");t.BreakStatement=m;const y=f("throw","argument");function g(){if(this.token(","),this.newline(),this.endsWith(10))for(let e=0;e<4;e++)this.space(!0)}function b(){if(this.token(","),this.newline(),this.endsWith(10))for(let e=0;e<6;e++)this.space(!0)}t.ThrowStatement=y},2394:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TaggedTemplateExpression=function(e){this.print(e.tag,e),this.print(e.typeParameters,e),this.print(e.quasi,e)},t.TemplateElement=function(e,t){const r=t.quasis[0]===e,n=t.quasis[t.quasis.length-1]===e,i=(r?"`":"}")+e.value.raw+(n?"`":"${");this.token(i)},t.TemplateLiteral=function(e){const t=e.quasis;for(let r=0;r<t.length;r++)this.print(t[r],e),r+1<t.length&&this.print(e.expressions[r],e)}},1338:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ArgumentPlaceholder=function(){this.token("?")},t.ArrayPattern=t.ArrayExpression=function(e){const t=e.elements,r=t.length;this.token("["),this.printInnerComments(e);for(let n=0;n<t.length;n++){const i=t[n];i?(n>0&&this.space(),this.print(i,e),n<r-1&&this.token(",")):this.token(",")}this.token("]")},t.BigIntLiteral=function(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&null!=t)return void this.word(t);this.word(e.value+"n")},t.BooleanLiteral=function(e){this.word(e.value?"true":"false")},t.DecimalLiteral=function(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&null!=t)return void this.word(t);this.word(e.value+"m")},t.Identifier=function(e){this.exactSource(e.loc,(()=>{this.word(e.name)}))},t.NullLiteral=function(){this.word("null")},t.NumericLiteral=function(e){const t=this.getPossibleRaw(e),r=this.format.jsescOption,n=e.value+"";r.numbers?this.number(i(e.value,r)):null==t?this.number(n):this.format.minified?this.number(t.length<n.length?t:n):this.number(t)},t.ObjectPattern=t.ObjectExpression=function(e){const t=e.properties;this.token("{"),this.printInnerComments(e),t.length&&(this.space(),this.printList(t,e,{indent:!0,statement:!0}),this.space());this.token("}")},t.ObjectMethod=function(e){this.printJoin(e.decorators,e),this._methodHead(e),this.space(),this.print(e.body,e)},t.ObjectProperty=function(e){if(this.printJoin(e.decorators,e),e.computed)this.token("["),this.print(e.key,e),this.token("]");else{if(s(e.value)&&o(e.key)&&e.key.name===e.value.left.name)return void this.print(e.value,e);if(this.print(e.key,e),e.shorthand&&o(e.key)&&o(e.value)&&e.key.name===e.value.name)return}this.token(":"),this.space(),this.print(e.value,e)},t.PipelineBareFunction=function(e){this.print(e.callee,e)},t.PipelinePrimaryTopicReference=function(){this.token("#")},t.PipelineTopicExpression=function(e){this.print(e.expression,e)},t.RecordExpression=function(e){const t=e.properties;let r,n;if("bar"===this.format.recordAndTupleSyntaxType)r="{|",n="|}";else{if("hash"!==this.format.recordAndTupleSyntaxType)throw new Error(`The "recordAndTupleSyntaxType" generator option must be "bar" or "hash" (${JSON.stringify(this.format.recordAndTupleSyntaxType)} received).`);r="#{",n="}"}this.token(r),this.printInnerComments(e),t.length&&(this.space(),this.printList(t,e,{indent:!0,statement:!0}),this.space());this.token(n)},t.RegExpLiteral=function(e){this.word(`/${e.pattern}/${e.flags}`)},t.SpreadElement=t.RestElement=function(e){this.token("..."),this.print(e.argument,e)},t.StringLiteral=function(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&null!=t)return void this.token(t);const r=i(e.value,Object.assign(this.format.jsescOption,this.format.jsonCompatibleStrings&&{json:!0}));return this.token(r)},t.TopicReference=function(){const{topicToken:e}=this.format;if(!a.has(e)){const t=JSON.stringify(e),r=Array.from(a,(e=>JSON.stringify(e)));throw new Error(`The "topicToken" generator option must be one of ${r.join(", ")} (${t} received instead).`)}this.token(e)},t.TupleExpression=function(e){const t=e.elements,r=t.length;let n,i;if("bar"===this.format.recordAndTupleSyntaxType)n="[|",i="|]";else{if("hash"!==this.format.recordAndTupleSyntaxType)throw new Error(`${this.format.recordAndTupleSyntaxType} is not a valid recordAndTuple syntax type`);n="#[",i="]"}this.token(n),this.printInnerComments(e);for(let n=0;n<t.length;n++){const i=t[n];i&&(n>0&&this.space(),this.print(i,e),n<r-1&&this.token(","))}this.token(i)};var n=r(666),i=r(4669);const{isAssignmentPattern:s,isIdentifier:o}=n;const a=new Set(["^","%","#"])},4124:(e,t)=>{"use strict";function r(e,t){!0!==t&&e.token(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.TSAnyKeyword=function(){this.word("any")},t.TSArrayType=function(e){this.print(e.elementType,e),this.token("[]")},t.TSAsExpression=function(e){const{expression:t,typeAnnotation:r}=e;this.print(t,e),this.space(),this.word("as"),this.space(),this.print(r,e)},t.TSBigIntKeyword=function(){this.word("bigint")},t.TSBooleanKeyword=function(){this.word("boolean")},t.TSCallSignatureDeclaration=function(e){this.tsPrintSignatureDeclarationBase(e),this.token(";")},t.TSConditionalType=function(e){this.print(e.checkType),this.space(),this.word("extends"),this.space(),this.print(e.extendsType),this.space(),this.token("?"),this.space(),this.print(e.trueType),this.space(),this.token(":"),this.space(),this.print(e.falseType)},t.TSConstructSignatureDeclaration=function(e){this.word("new"),this.space(),this.tsPrintSignatureDeclarationBase(e),this.token(";")},t.TSConstructorType=function(e){e.abstract&&(this.word("abstract"),this.space());this.word("new"),this.space(),this.tsPrintFunctionOrConstructorType(e)},t.TSDeclareFunction=function(e){e.declare&&(this.word("declare"),this.space());this._functionHead(e),this.token(";")},t.TSDeclareMethod=function(e){this._classMethodHead(e),this.token(";")},t.TSEnumDeclaration=function(e){const{declare:t,const:r,id:n,members:i}=e;t&&(this.word("declare"),this.space());r&&(this.word("const"),this.space());this.word("enum"),this.space(),this.print(n,e),this.space(),this.tsPrintBraced(i,e)},t.TSEnumMember=function(e){const{id:t,initializer:r}=e;this.print(t,e),r&&(this.space(),this.token("="),this.space(),this.print(r,e));this.token(",")},t.TSExportAssignment=function(e){this.word("export"),this.space(),this.token("="),this.space(),this.print(e.expression,e),this.token(";")},t.TSExpressionWithTypeArguments=function(e){this.print(e.expression,e),this.print(e.typeParameters,e)},t.TSExternalModuleReference=function(e){this.token("require("),this.print(e.expression,e),this.token(")")},t.TSFunctionType=function(e){this.tsPrintFunctionOrConstructorType(e)},t.TSImportEqualsDeclaration=function(e){const{isExport:t,id:r,moduleReference:n}=e;t&&(this.word("export"),this.space());this.word("import"),this.space(),this.print(r,e),this.space(),this.token("="),this.space(),this.print(n,e),this.token(";")},t.TSImportType=function(e){const{argument:t,qualifier:r,typeParameters:n}=e;this.word("import"),this.token("("),this.print(t,e),this.token(")"),r&&(this.token("."),this.print(r,e));n&&this.print(n,e)},t.TSIndexSignature=function(e){const{readonly:t,static:r}=e;r&&(this.word("static"),this.space());t&&(this.word("readonly"),this.space());this.token("["),this._parameters(e.parameters,e),this.token("]"),this.print(e.typeAnnotation,e),this.token(";")},t.TSIndexedAccessType=function(e){this.print(e.objectType,e),this.token("["),this.print(e.indexType,e),this.token("]")},t.TSInferType=function(e){this.token("infer"),this.space(),this.print(e.typeParameter)},t.TSInterfaceBody=function(e){this.tsPrintTypeLiteralOrInterfaceBody(e.body,e)},t.TSInterfaceDeclaration=function(e){const{declare:t,id:r,typeParameters:n,extends:i,body:s}=e;t&&(this.word("declare"),this.space());this.word("interface"),this.space(),this.print(r,e),this.print(n,e),null!=i&&i.length&&(this.space(),this.word("extends"),this.space(),this.printList(i,e));this.space(),this.print(s,e)},t.TSIntersectionType=function(e){this.tsPrintUnionOrIntersectionType(e,"&")},t.TSIntrinsicKeyword=function(){this.word("intrinsic")},t.TSLiteralType=function(e){this.print(e.literal,e)},t.TSMappedType=function(e){const{nameType:t,optional:n,readonly:i,typeParameter:s}=e;this.token("{"),this.space(),i&&(r(this,i),this.word("readonly"),this.space());this.token("["),this.word(s.name),this.space(),this.word("in"),this.space(),this.print(s.constraint,s),t&&(this.space(),this.word("as"),this.space(),this.print(t,e));this.token("]"),n&&(r(this,n),this.token("?"));this.token(":"),this.space(),this.print(e.typeAnnotation,e),this.space(),this.token("}")},t.TSMethodSignature=function(e){const{kind:t}=e;"set"!==t&&"get"!==t||(this.word(t),this.space());this.tsPrintPropertyOrMethodName(e),this.tsPrintSignatureDeclarationBase(e),this.token(";")},t.TSModuleBlock=function(e){this.tsPrintBraced(e.body,e)},t.TSModuleDeclaration=function(e){const{declare:t,id:r}=e;t&&(this.word("declare"),this.space());e.global||(this.word("Identifier"===r.type?"namespace":"module"),this.space());if(this.print(r,e),!e.body)return void this.token(";");let n=e.body;for(;"TSModuleDeclaration"===n.type;)this.token("."),this.print(n.id,n),n=n.body;this.space(),this.print(n,e)},t.TSNamedTupleMember=function(e){this.print(e.label,e),e.optional&&this.token("?");this.token(":"),this.space(),this.print(e.elementType,e)},t.TSNamespaceExportDeclaration=function(e){this.word("export"),this.space(),this.word("as"),this.space(),this.word("namespace"),this.space(),this.print(e.id,e)},t.TSNeverKeyword=function(){this.word("never")},t.TSNonNullExpression=function(e){this.print(e.expression,e),this.token("!")},t.TSNullKeyword=function(){this.word("null")},t.TSNumberKeyword=function(){this.word("number")},t.TSObjectKeyword=function(){this.word("object")},t.TSOptionalType=function(e){this.print(e.typeAnnotation,e),this.token("?")},t.TSParameterProperty=function(e){e.accessibility&&(this.word(e.accessibility),this.space());e.readonly&&(this.word("readonly"),this.space());this._param(e.parameter)},t.TSParenthesizedType=function(e){this.token("("),this.print(e.typeAnnotation,e),this.token(")")},t.TSPropertySignature=function(e){const{readonly:t,initializer:r}=e;t&&(this.word("readonly"),this.space());this.tsPrintPropertyOrMethodName(e),this.print(e.typeAnnotation,e),r&&(this.space(),this.token("="),this.space(),this.print(r,e));this.token(";")},t.TSQualifiedName=function(e){this.print(e.left,e),this.token("."),this.print(e.right,e)},t.TSRestType=function(e){this.token("..."),this.print(e.typeAnnotation,e)},t.TSStringKeyword=function(){this.word("string")},t.TSSymbolKeyword=function(){this.word("symbol")},t.TSThisType=function(){this.word("this")},t.TSTupleType=function(e){this.token("["),this.printList(e.elementTypes,e),this.token("]")},t.TSTypeAliasDeclaration=function(e){const{declare:t,id:r,typeParameters:n,typeAnnotation:i}=e;t&&(this.word("declare"),this.space());this.word("type"),this.space(),this.print(r,e),this.print(n,e),this.space(),this.token("="),this.space(),this.print(i,e),this.token(";")},t.TSTypeAnnotation=function(e){this.token(":"),this.space(),e.optional&&this.token("?");this.print(e.typeAnnotation,e)},t.TSTypeAssertion=function(e){const{typeAnnotation:t,expression:r}=e;this.token("<"),this.print(t,e),this.token(">"),this.space(),this.print(r,e)},t.TSTypeLiteral=function(e){this.tsPrintTypeLiteralOrInterfaceBody(e.members,e)},t.TSTypeOperator=function(e){this.word(e.operator),this.space(),this.print(e.typeAnnotation,e)},t.TSTypeParameter=function(e){this.word(e.name),e.constraint&&(this.space(),this.word("extends"),this.space(),this.print(e.constraint,e));e.default&&(this.space(),this.token("="),this.space(),this.print(e.default,e))},t.TSTypeParameterDeclaration=t.TSTypeParameterInstantiation=function(e){this.token("<"),this.printList(e.params,e,{}),this.token(">")},t.TSTypePredicate=function(e){e.asserts&&(this.word("asserts"),this.space());this.print(e.parameterName),e.typeAnnotation&&(this.space(),this.word("is"),this.space(),this.print(e.typeAnnotation.typeAnnotation))},t.TSTypeQuery=function(e){this.word("typeof"),this.space(),this.print(e.exprName)},t.TSTypeReference=function(e){this.print(e.typeName,e),this.print(e.typeParameters,e)},t.TSUndefinedKeyword=function(){this.word("undefined")},t.TSUnionType=function(e){this.tsPrintUnionOrIntersectionType(e,"|")},t.TSUnknownKeyword=function(){this.word("unknown")},t.TSVoidKeyword=function(){this.word("void")},t.tsPrintBraced=function(e,t){if(this.token("{"),e.length){this.indent(),this.newline();for(const r of e)this.print(r,t),this.newline();this.dedent(),this.rightBrace()}else this.token("}")},t.tsPrintClassMemberModifiers=function(e,t){t&&e.declare&&(this.word("declare"),this.space());e.accessibility&&(this.word(e.accessibility),this.space());e.static&&(this.word("static"),this.space());e.override&&(this.word("override"),this.space());e.abstract&&(this.word("abstract"),this.space());t&&e.readonly&&(this.word("readonly"),this.space())},t.tsPrintFunctionOrConstructorType=function(e){const{typeParameters:t,parameters:r}=e;this.print(t,e),this.token("("),this._parameters(r,e),this.token(")"),this.space(),this.token("=>"),this.space(),this.print(e.typeAnnotation.typeAnnotation,e)},t.tsPrintPropertyOrMethodName=function(e){e.computed&&this.token("[");this.print(e.key,e),e.computed&&this.token("]");e.optional&&this.token("?")},t.tsPrintSignatureDeclarationBase=function(e){const{typeParameters:t,parameters:r}=e;this.print(t,e),this.token("("),this._parameters(r,e),this.token(")"),this.print(e.typeAnnotation,e)},t.tsPrintTypeLiteralOrInterfaceBody=function(e,t){this.tsPrintBraced(e,t)},t.tsPrintUnionOrIntersectionType=function(e,t){this.printJoin(e.types,e,{separator(){this.space(),this.token(t),this.space()}})}},7160:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CodeGenerator=void 0,t.default=function(e,t,r){return new s(e,t,r).generate()};var n=r(5768),i=r(7354);class s extends i.default{constructor(e,t={},r){const i=function(e,t){const r={auxiliaryCommentBefore:t.auxiliaryCommentBefore,auxiliaryCommentAfter:t.auxiliaryCommentAfter,shouldPrintComment:t.shouldPrintComment,retainLines:t.retainLines,retainFunctionParens:t.retainFunctionParens,comments:null==t.comments||t.comments,compact:t.compact,minified:t.minified,concise:t.concise,indent:{adjustMultilineComment:!0,style:"  ",base:0},decoratorsBeforeExport:!!t.decoratorsBeforeExport,jsescOption:Object.assign({quotes:"double",wrap:!0,minimal:!1},t.jsescOption),recordAndTupleSyntaxType:t.recordAndTupleSyntaxType,topicToken:t.topicToken};r.jsonCompatibleStrings=t.jsonCompatibleStrings,r.minified?(r.compact=!0,r.shouldPrintComment=r.shouldPrintComment||(()=>r.comments)):r.shouldPrintComment=r.shouldPrintComment||(e=>r.comments||e.indexOf("@license")>=0||e.indexOf("@preserve")>=0);"auto"===r.compact&&(r.compact=e.length>5e5,r.compact&&console.error(`[BABEL] Note: The code generator has deoptimised the styling of ${t.filename} as it exceeds the max of 500KB.`));r.compact&&(r.indent.adjustMultilineComment=!1);return r}(r,t);super(i,t.sourceMaps?new n.default(t,r):null),this.ast=void 0,this.ast=e}generate(){return super.generate(this.ast)}}t.CodeGenerator=class{constructor(e,t,r){this._generator=void 0,this._generator=new s(e,t,r)}generate(){return this._generator.generate()}}},2756:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.needsParens=function(e,t,r){if(!t)return!1;if(c(t)&&t.callee===e&&y(e))return!0;return m(f,e,t,r)},t.needsWhitespace=g,t.needsWhitespaceAfter=function(e,t){return g(e,t,"after")},t.needsWhitespaceBefore=function(e,t){return g(e,t,"before")};var n=r(8797),i=r(1031),s=r(666);const{FLIPPED_ALIAS_KEYS:o,isCallExpression:a,isExpressionStatement:l,isMemberExpression:u,isNewExpression:c}=s;function p(e){const t={};function r(e,r){const n=t[e];t[e]=n?function(e,t,i){const s=n(e,t,i);return null==s?r(e,t,i):s}:r}for(const t of Object.keys(e)){const n=o[t];if(n)for(const i of n)r(i,e[t]);else r(t,e[t])}return t}const f=p(i),d=p(n.nodes),h=p(n.list);function m(e,t,r,n){const i=e[t.type];return i?i(t,r,n):null}function y(e){return!!a(e)||u(e)&&y(e.object)}function g(e,t,r){if(!e)return 0;l(e)&&(e=e.expression);let n=m(d,e,t);if(!n){const i=m(h,e,t);if(i)for(let t=0;t<i.length&&(n=g(i[t],e,r),!n);t++);}return"object"==typeof n&&null!==n&&n[r]||0}},1031:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ArrowFunctionExpression=function(e,t){return m(t)||te(e,t)},t.AssignmentExpression=function(e,t){return!!O(e.left)||te(e,t)},t.Binary=function(e,t){if("**"===e.operator&&u(t,{operator:"**"}))return t.left===e;if(Q(e,t))return!0;if(Z(e,t)||H(t)||a(t))return!0;if(l(t)){const r=t.operator,n=J[r],i=e.operator,s=J[i];if(n===s&&t.right===e&&!w(t)||n>s)return!0}},t.BinaryExpression=function(e,t){return"in"===e.operator&&(q(t)||b(t))},t.ClassExpression=function(e,t,r){return re(r,{expressionStatement:!0,exportDefault:!0})},t.ConditionalExpression=te,t.DoExpression=function(e,t,r){return!e.async&&re(r,{expressionStatement:!0})},t.FunctionExpression=function(e,t,r){return re(r,{expressionStatement:!0,exportDefault:!0})},t.FunctionTypeAnnotation=function(e,t,r){return G(t)||A(t)||i(t)||K(t)&&s(r[r.length-3])},t.Identifier=function(e,t,r){if("let"===e.name){const n=P(t,{object:e,computed:!0})||N(t,{object:e,computed:!0,optional:!1});return re(r,{expressionStatement:n,forHead:n,forInHead:n,forOfHead:!0})}return"async"===e.name&&E(t)&&e===t.left},t.LogicalExpression=function(e,t){switch(e.operator){case"||":return!!w(t)&&("??"===t.operator||"&&"===t.operator);case"&&":return w(t,{operator:"??"});case"??":return w(t)&&"??"!==t.operator}},t.NullableTypeAnnotation=function(e,t){return i(t)},t.ObjectExpression=function(e,t,r){return re(r,{expressionStatement:!0,arrowBody:!0})},t.OptionalIndexedAccessType=function(e,t){return x(t,{objectType:e})},t.OptionalCallExpression=t.OptionalMemberExpression=function(e,t){return c(t,{callee:e})||P(t,{object:e})},t.SequenceExpression=function(e,t){if(T(t)||$(t)||I(t)||S(t)&&t.test===e||X(t)&&t.test===e||v(t)&&t.right===e||_(t)&&t.discriminant===e||g(t)&&t.expression===e)return!1;return!0},t.TSAsExpression=function(){return!0},t.TSInferType=function(e,t){return B(t)||R(t)},t.TSTypeAssertion=function(){return!0},t.TSIntersectionType=t.TSUnionType=function(e,t){return B(t)||R(t)||M(t)||W(t)||U(t)},t.UnaryLike=ee,t.IntersectionTypeAnnotation=t.UnionTypeAnnotation=function(e,t){return i(t)||D(t)||A(t)||G(t)},t.UpdateExpression=function(e,t){return Z(e,t)||Q(e,t)},t.AwaitExpression=t.YieldExpression=function(e,t){return l(t)||H(t)||Z(e,t)||a(t)&&Y(e)||h(t)&&e===t.test||Q(e,t)};var n=r(666);const{isArrayTypeAnnotation:i,isArrowFunctionExpression:s,isAssignmentExpression:o,isAwaitExpression:a,isBinary:l,isBinaryExpression:u,isCallExpression:c,isClassDeclaration:p,isClassExpression:f,isConditional:d,isConditionalExpression:h,isExportDeclaration:m,isExportDefaultDeclaration:y,isExpressionStatement:g,isFor:b,isForInStatement:v,isForOfStatement:E,isForStatement:T,isIfStatement:S,isIndexedAccessType:x,isIntersectionTypeAnnotation:A,isLogicalExpression:w,isMemberExpression:P,isNewExpression:C,isNullableTypeAnnotation:D,isObjectPattern:O,isOptionalCallExpression:k,isOptionalMemberExpression:N,isReturnStatement:I,isSequenceExpression:F,isSwitchStatement:_,isTSArrayType:B,isTSAsExpression:L,isTSIntersectionType:M,isTSNonNullExpression:j,isTSOptionalType:R,isTSRestType:U,isTSTypeAssertion:V,isTSUnionType:W,isTaggedTemplateExpression:z,isThrowStatement:$,isTypeAnnotation:K,isUnaryLike:H,isUnionTypeAnnotation:G,isVariableDeclarator:q,isWhileStatement:X,isYieldExpression:Y}=n,J={"||":0,"??":0,"&&":1,"|":2,"^":3,"&":4,"==":5,"===":5,"!=":5,"!==":5,"<":6,">":6,"<=":6,">=":6,in:6,instanceof:6,">>":7,"<<":7,">>>":7,"+":8,"-":8,"*":9,"/":9,"%":9,"**":10},Q=(e,t)=>(p(t)||f(t))&&t.superClass===e,Z=(e,t)=>(P(t)||N(t))&&t.object===e||(c(t)||k(t)||C(t))&&t.callee===e||z(t)&&t.tag===e||j(t);function ee(e,t){return Z(e,t)||u(t,{operator:"**",left:e})||Q(e,t)}function te(e,t){return!!(H(t)||l(t)||h(t,{test:e})||a(t)||V(t)||L(t))||ee(e,t)}function re(e,{expressionStatement:t=!1,arrowBody:r=!1,exportDefault:n=!1,forHead:i=!1,forInHead:a=!1,forOfHead:u=!1}){let c=e.length-1,p=e[c];c--;let f=e[c];for(;c>=0;){if(t&&g(f,{expression:p})||n&&y(f,{declaration:p})||r&&s(f,{body:p})||i&&T(f,{init:p})||a&&v(f,{left:p})||u&&E(f,{left:p}))return!0;if(!(Z(p,f)&&!C(f)||F(f)&&f.expressions[0]===p||d(f,{test:p})||l(f,{left:p})||o(f,{left:p})))return!1;p=f,c--,f=e[c]}return!1}},8797:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.nodes=t.list=void 0;var n=r(666);const{FLIPPED_ALIAS_KEYS:i,isArrayExpression:s,isAssignmentExpression:o,isBinary:a,isBlockStatement:l,isCallExpression:u,isFunction:c,isIdentifier:p,isLiteral:f,isMemberExpression:d,isObjectExpression:h,isOptionalCallExpression:m,isOptionalMemberExpression:y,isStringLiteral:g}=n;function b(e,t={}){return d(e)||y(e)?(b(e.object,t),e.computed&&b(e.property,t)):a(e)||o(e)?(b(e.left,t),b(e.right,t)):u(e)||m(e)?(t.hasCall=!0,b(e.callee,t)):c(e)?t.hasFunction=!0:p(e)&&(t.hasHelper=t.hasHelper||v(e.callee)),t}function v(e){return d(e)?v(e.object)||v(e.property):p(e)?"require"===e.name||"_"===e.name[0]:u(e)?v(e.callee):!(!a(e)&&!o(e))&&(p(e.left)&&v(e.left)||v(e.right))}function E(e){return f(e)||h(e)||s(e)||p(e)||d(e)}const T={AssignmentExpression(e){const t=b(e.right);if(t.hasCall&&t.hasHelper||t.hasFunction)return{before:t.hasFunction,after:!0}},SwitchCase:(e,t)=>({before:!!e.consequent.length||t.cases[0]===e,after:!e.consequent.length&&t.cases[t.cases.length-1]===e}),LogicalExpression(e){if(c(e.left)||c(e.right))return{after:!0}},Literal(e){if(g(e)&&"use strict"===e.value)return{after:!0}},CallExpression(e){if(c(e.callee)||v(e))return{before:!0,after:!0}},OptionalCallExpression(e){if(c(e.callee))return{before:!0,after:!0}},VariableDeclaration(e){for(let t=0;t<e.declarations.length;t++){const r=e.declarations[t];let n=v(r.id)&&!E(r.init);if(!n){const e=b(r.init);n=v(r.init)&&e.hasCall||e.hasFunction}if(n)return{before:!0,after:!0}}},IfStatement(e){if(l(e.consequent))return{before:!0,after:!0}}};t.nodes=T,T.ObjectProperty=T.ObjectTypeProperty=T.ObjectMethod=function(e,t){if(t.properties[0]===e)return{before:!0}},T.ObjectTypeCallProperty=function(e,t){var r;if(t.callProperties[0]===e&&(null==(r=t.properties)||!r.length))return{before:!0}},T.ObjectTypeIndexer=function(e,t){var r,n;if(!(t.indexers[0]!==e||null!=(r=t.properties)&&r.length||null!=(n=t.callProperties)&&n.length))return{before:!0}},T.ObjectTypeInternalSlot=function(e,t){var r,n,i;if(!(t.internalSlots[0]!==e||null!=(r=t.properties)&&r.length||null!=(n=t.callProperties)&&n.length||null!=(i=t.indexers)&&i.length))return{before:!0}};const S={VariableDeclaration:e=>e.declarations.map((e=>e.init)),ArrayExpression:e=>e.elements,ObjectExpression:e=>e.properties};t.list=S,[["Function",!0],["Class",!0],["Loop",!0],["LabeledStatement",!0],["SwitchStatement",!0],["TryStatement",!0]].forEach((function([e,t]){"boolean"==typeof t&&(t={after:t,before:t}),[e].concat(i[e]||[]).forEach((function(e){T[e]=function(){return t}}))}))},7354:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(4483),i=r(2756),s=r(666),o=r(9030);const{isProgram:a,isFile:l,isEmptyStatement:u}=s,c=/e/i,p=/\.0+$/,f=/^0[box]/,d=/^\s*[@#]__PURE__\s*$/,{needsParens:h,needsWhitespaceAfter:m,needsWhitespaceBefore:y}=i;class g{constructor(e,t){this.inForStatementInitCounter=0,this._printStack=[],this._indent=0,this._insideAux=!1,this._parenPushNewlineState=null,this._noLineTerminator=!1,this._printAuxAfterOnNextUserNode=!1,this._printedComments=new WeakSet,this._endsWithInteger=!1,this._endsWithWord=!1,this.format=e,this._buf=new n.default(t)}generate(e){return this.print(e),this._maybeAddAuxComment(),this._buf.get()}indent(){this.format.compact||this.format.concise||this._indent++}dedent(){this.format.compact||this.format.concise||this._indent--}semicolon(e=!1){this._maybeAddAuxComment(),this._append(";",!e)}rightBrace(){this.format.minified&&this._buf.removeLastSemicolon(),this.token("}")}space(e=!1){if(!this.format.compact)if(e)this._space();else if(this._buf.hasContent()){const e=this.getLastChar();32!==e&&10!==e&&this._space()}}word(e){(this._endsWithWord||this.endsWith(47)&&47===e.charCodeAt(0))&&this._space(),this._maybeAddAuxComment(),this._append(e),this._endsWithWord=!0}number(e){this.word(e),this._endsWithInteger=Number.isInteger(+e)&&!f.test(e)&&!c.test(e)&&!p.test(e)&&46!==e.charCodeAt(e.length-1)}token(e){const t=this.getLastChar(),r=e.charCodeAt(0);("--"===e&&33===t||43===r&&43===t||45===r&&45===t||46===r&&this._endsWithInteger)&&this._space(),this._maybeAddAuxComment(),this._append(e)}newline(e=1){if(this.format.retainLines||this.format.compact)return;if(this.format.concise)return void this.space();const t=this.endsWithCharAndNewline();if(10!==t&&(123!==t&&58!==t||e--,!(e<=0)))for(let t=0;t<e;t++)this._newline()}endsWith(e){return this.getLastChar()===e}getLastChar(){return this._buf.getLastChar()}endsWithCharAndNewline(){return this._buf.endsWithCharAndNewline()}removeTrailingNewline(){this._buf.removeTrailingNewline()}exactSource(e,t){this._catchUp("start",e),this._buf.exactSource(e,t)}source(e,t){this._catchUp(e,t),this._buf.source(e,t)}withSource(e,t,r){this._catchUp(e,t),this._buf.withSource(e,t,r)}_space(){this._append(" ",!0)}_newline(){this._append("\n",!0)}_append(e,t=!1){this._maybeAddParen(e),this._maybeIndent(e),t?this._buf.queue(e):this._buf.append(e),this._endsWithWord=!1,this._endsWithInteger=!1}_maybeIndent(e){this._indent&&this.endsWith(10)&&10!==e.charCodeAt(0)&&this._buf.queue(this._getIndent())}_maybeAddParen(e){const t=this._parenPushNewlineState;if(!t)return;let r;for(r=0;r<e.length&&" "===e[r];r++)continue;if(r===e.length)return;const n=e[r];if("\n"!==n){if("/"!==n||r+1===e.length)return void(this._parenPushNewlineState=null);const t=e[r+1];if("*"===t){if(d.test(e.slice(r+2,e.length-2)))return}else if("/"!==t)return void(this._parenPushNewlineState=null)}this.token("("),this.indent(),t.printed=!0}_catchUp(e,t){if(!this.format.retainLines)return;const r=t?t[e]:null;if(null!=(null==r?void 0:r.line)){const e=r.line-this._buf.getCurrentLine();for(let t=0;t<e;t++)this._newline()}}_getIndent(){return this.format.indent.style.repeat(this._indent)}startTerminatorless(e=!1){return e?(this._noLineTerminator=!0,null):this._parenPushNewlineState={printed:!1}}endTerminatorless(e){this._noLineTerminator=!1,null!=e&&e.printed&&(this.dedent(),this.newline(),this.token(")"))}print(e,t){if(!e)return;const r=this.format.concise;e._compact&&(this.format.concise=!0);const n=this[e.type];if(!n)throw new ReferenceError(`unknown node of type ${JSON.stringify(e.type)} with constructor ${JSON.stringify(null==e?void 0:e.constructor.name)}`);this._printStack.push(e);const i=this._insideAux;this._insideAux=!e.loc,this._maybeAddAuxComment(this._insideAux&&!i);let s=h(e,t,this._printStack);this.format.retainFunctionParens&&"FunctionExpression"===e.type&&e.extra&&e.extra.parenthesized&&(s=!0),s&&this.token("("),this._printLeadingComments(e);const o=a(e)||l(e)?null:e.loc;this.withSource("start",o,(()=>{n.call(this,e,t)})),this._printTrailingComments(e),s&&this.token(")"),this._printStack.pop(),this.format.concise=r,this._insideAux=i}_maybeAddAuxComment(e){e&&this._printAuxBeforeComment(),this._insideAux||this._printAuxAfterComment()}_printAuxBeforeComment(){if(this._printAuxAfterOnNextUserNode)return;this._printAuxAfterOnNextUserNode=!0;const e=this.format.auxiliaryCommentBefore;e&&this._printComment({type:"CommentBlock",value:e})}_printAuxAfterComment(){if(!this._printAuxAfterOnNextUserNode)return;this._printAuxAfterOnNextUserNode=!1;const e=this.format.auxiliaryCommentAfter;e&&this._printComment({type:"CommentBlock",value:e})}getPossibleRaw(e){const t=e.extra;if(t&&null!=t.raw&&null!=t.rawValue&&e.value===t.rawValue)return t.raw}printJoin(e,t,r={}){if(null==e||!e.length)return;r.indent&&this.indent();const n={addNewlines:r.addNewlines};for(let i=0;i<e.length;i++){const s=e[i];s&&(r.statement&&this._printNewline(!0,s,t,n),this.print(s,t),r.iterator&&r.iterator(s,i),r.separator&&i<e.length-1&&r.separator.call(this),r.statement&&this._printNewline(!1,s,t,n))}r.indent&&this.dedent()}printAndIndentOnComments(e,t){const r=e.leadingComments&&e.leadingComments.length>0;r&&this.indent(),this.print(e,t),r&&this.dedent()}printBlock(e){const t=e.body;u(t)||this.space(),this.print(t,e)}_printTrailingComments(e){this._printComments(this._getComments(!1,e))}_printLeadingComments(e){this._printComments(this._getComments(!0,e),!0)}printInnerComments(e,t=!0){var r;null!=(r=e.innerComments)&&r.length&&(t&&this.indent(),this._printComments(e.innerComments),t&&this.dedent())}printSequence(e,t,r={}){return r.statement=!0,this.printJoin(e,t,r)}printList(e,t,r={}){return null==r.separator&&(r.separator=v),this.printJoin(e,t,r)}_printNewline(e,t,r,n){if(this.format.retainLines||this.format.compact)return;if(this.format.concise)return void this.space();let i=0;if(this._buf.hasContent()){e||i++,n.addNewlines&&(i+=n.addNewlines(e,t)||0);(e?y:m)(t,r)&&i++}this.newline(Math.min(2,i))}_getComments(e,t){return t&&(e?t.leadingComments:t.trailingComments)||[]}_printComment(e,t){if(!this.format.shouldPrintComment(e.value))return;if(e.ignore)return;if(this._printedComments.has(e))return;this._printedComments.add(e);const r="CommentBlock"===e.type,n=r&&!t&&!this._noLineTerminator;n&&this._buf.hasContent()&&this.newline(1);const i=this.getLastChar();91!==i&&123!==i&&this.space();let s=r||this._noLineTerminator?`/*${e.value}*/`:`//${e.value}\n`;if(r&&this.format.indent.adjustMultilineComment){var o;const t=null==(o=e.loc)?void 0:o.start.column;if(t){const e=new RegExp("\\n\\s{1,"+t+"}","g");s=s.replace(e,"\n")}const r=Math.max(this._getIndent().length,this.format.retainLines?0:this._buf.getCurrentColumn());s=s.replace(/\n(?!$)/g,`\n${" ".repeat(r)}`)}this.endsWith(47)&&this._space(),this.withSource("start",e.loc,(()=>{this._append(s)})),n&&this.newline(1)}_printComments(e,t){if(null!=e&&e.length)if(t&&1===e.length&&d.test(e[0].value))this._printComment(e[0],this._buf.hasContent()&&!this.endsWith(10));else for(const t of e)this._printComment(t)}printAssertions(e){var t;null!=(t=e.assertions)&&t.length&&(this.space(),this.word("assert"),this.space(),this.token("{"),this.space(),this.printList(e.assertions,e),this.space(),this.token("}"))}}Object.assign(g.prototype,o),g.prototype.Noop=function(){};var b=g;function v(){this.token(","),this.space()}t.default=b},5768:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(4982);t.default=class{constructor(e,t){this._cachedMap=void 0,this._code=void 0,this._opts=void 0,this._rawMappings=void 0,this._lastGenLine=void 0,this._lastSourceLine=void 0,this._lastSourceColumn=void 0,this._cachedMap=null,this._code=t,this._opts=e,this._rawMappings=[]}get(){if(!this._cachedMap){const e=this._cachedMap=new n.SourceMapGenerator({sourceRoot:this._opts.sourceRoot}),t=this._code;"string"==typeof t?e.setSourceContent(this._opts.sourceFileName.replace(/\\/g,"/"),t):"object"==typeof t&&Object.keys(t).forEach((r=>{e.setSourceContent(r.replace(/\\/g,"/"),t[r])})),this._rawMappings.forEach((t=>e.addMapping(t)),e)}return this._cachedMap.toJSON()}getRawMappings(){return this._rawMappings.slice()}mark(e,t,r,n,i,s,o){this._lastGenLine!==e&&null===r||(o||this._lastGenLine!==e||this._lastSourceLine!==r||this._lastSourceColumn!==n)&&(this._cachedMap=null,this._lastGenLine=e,this._lastSourceLine=r,this._lastSourceColumn=n,this._rawMappings.push({name:i||void 0,generated:{line:e,column:t},source:null==r?void 0:(s||this._opts.sourceFileName).replace(/\\/g,"/"),original:null==r?void 0:{line:r,column:n}}))}}},4249:(e,t,r)=>{var n=r(1559),i=Object.prototype.hasOwnProperty,s="undefined"!=typeof Map;function o(){this._array=[],this._set=s?new Map:Object.create(null)}o.fromArray=function(e,t){for(var r=new o,n=0,i=e.length;n<i;n++)r.add(e[n],t);return r},o.prototype.size=function(){return s?this._set.size:Object.getOwnPropertyNames(this._set).length},o.prototype.add=function(e,t){var r=s?e:n.toSetString(e),o=s?this.has(e):i.call(this._set,r),a=this._array.length;o&&!t||this._array.push(e),o||(s?this._set.set(e,a):this._set[r]=a)},o.prototype.has=function(e){if(s)return this._set.has(e);var t=n.toSetString(e);return i.call(this._set,t)},o.prototype.indexOf=function(e){if(s){var t=this._set.get(e);if(t>=0)return t}else{var r=n.toSetString(e);if(i.call(this._set,r))return this._set[r]}throw new Error('"'+e+'" is not in the set.')},o.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)},o.prototype.toArray=function(){return this._array.slice()},t.I=o},975:(e,t,r)=>{var n=r(5676);t.encode=function(e){var t,r="",i=function(e){return e<0?1+(-e<<1):0+(e<<1)}(e);do{t=31&i,(i>>>=5)>0&&(t|=32),r+=n.encode(t)}while(i>0);return r},t.decode=function(e,t,r){var i,s,o,a,l=e.length,u=0,c=0;do{if(t>=l)throw new Error("Expected more digits in base 64 VLQ value.");if(-1===(s=n.decode(e.charCodeAt(t++))))throw new Error("Invalid base64 digit: "+e.charAt(t-1));i=!!(32&s),u+=(s&=31)<<c,c+=5}while(i);r.value=(a=(o=u)>>1,1==(1&o)?-a:a),r.rest=t}},5676:(e,t)=>{var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");t.encode=function(e){if(0<=e&&e<r.length)return r[e];throw new TypeError("Must be between 0 and 63: "+e)},t.decode=function(e){return 65<=e&&e<=90?e-65:97<=e&&e<=122?e-97+26:48<=e&&e<=57?e-48+52:43==e?62:47==e?63:-1}},4694:(e,t)=>{function r(e,n,i,s,o,a){var l=Math.floor((n-e)/2)+e,u=o(i,s[l],!0);return 0===u?l:u>0?n-l>1?r(l,n,i,s,o,a):a==t.LEAST_UPPER_BOUND?n<s.length?n:-1:l:l-e>1?r(e,l,i,s,o,a):a==t.LEAST_UPPER_BOUND?l:e<0?-1:e}t.GREATEST_LOWER_BOUND=1,t.LEAST_UPPER_BOUND=2,t.search=function(e,n,i,s){if(0===n.length)return-1;var o=r(-1,n.length,e,n,i,s||t.GREATEST_LOWER_BOUND);if(o<0)return-1;for(;o-1>=0&&0===i(n[o],n[o-1],!0);)--o;return o}},8247:(e,t,r)=>{var n=r(1559);function i(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}i.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t)},i.prototype.add=function(e){var t,r,i,s,o,a;t=this._last,r=e,i=t.generatedLine,s=r.generatedLine,o=t.generatedColumn,a=r.generatedColumn,s>i||s==i&&a>=o||n.compareByGeneratedPositionsInflated(t,r)<=0?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e))},i.prototype.toArray=function(){return this._sorted||(this._array.sort(n.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},t.H=i},8012:(e,t)=>{function r(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function n(e,t,i,s){if(i<s){var o=i-1;r(e,(c=i,p=s,Math.round(c+Math.random()*(p-c))),s);for(var a=e[s],l=i;l<s;l++)t(e[l],a)<=0&&r(e,o+=1,l);r(e,o+1,l);var u=o+1;n(e,t,i,u-1),n(e,t,u+1,s)}var c,p}t.U=function(e,t){n(e,t,0,e.length-1)}},1077:(e,t,r)=>{var n=r(1559),i=r(4694),s=r(4249).I,o=r(975),a=r(8012).U;function l(e){var t=e;return"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,""))),null!=t.sections?new p(t):new u(t)}function u(e){var t=e;"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var r=n.getArg(t,"version"),i=n.getArg(t,"sources"),o=n.getArg(t,"names",[]),a=n.getArg(t,"sourceRoot",null),l=n.getArg(t,"sourcesContent",null),u=n.getArg(t,"mappings"),c=n.getArg(t,"file",null);if(r!=this._version)throw new Error("Unsupported version: "+r);i=i.map(String).map(n.normalize).map((function(e){return a&&n.isAbsolute(a)&&n.isAbsolute(e)?n.relative(a,e):e})),this._names=s.fromArray(o.map(String),!0),this._sources=s.fromArray(i,!0),this.sourceRoot=a,this.sourcesContent=l,this._mappings=u,this.file=c}function c(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}function p(e){var t=e;"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var r=n.getArg(t,"version"),i=n.getArg(t,"sections");if(r!=this._version)throw new Error("Unsupported version: "+r);this._sources=new s,this._names=new s;var o={line:-1,column:0};this._sections=i.map((function(e){if(e.url)throw new Error("Support for url field in sections not implemented.");var t=n.getArg(e,"offset"),r=n.getArg(t,"line"),i=n.getArg(t,"column");if(r<o.line||r===o.line&&i<o.column)throw new Error("Section offsets must be ordered and non-overlapping.");return o=t,{generatedOffset:{generatedLine:r+1,generatedColumn:i+1},consumer:new l(n.getArg(e,"map"))}}))}l.fromSourceMap=function(e){return u.fromSourceMap(e)},l.prototype._version=3,l.prototype.__generatedMappings=null,Object.defineProperty(l.prototype,"_generatedMappings",{get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),l.prototype.__originalMappings=null,Object.defineProperty(l.prototype,"_originalMappings",{get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),l.prototype._charIsMappingSeparator=function(e,t){var r=e.charAt(t);return";"===r||","===r},l.prototype._parseMappings=function(e,t){throw new Error("Subclasses must implement _parseMappings")},l.GENERATED_ORDER=1,l.ORIGINAL_ORDER=2,l.GREATEST_LOWER_BOUND=1,l.LEAST_UPPER_BOUND=2,l.prototype.eachMapping=function(e,t,r){var i,s=t||null;switch(r||l.GENERATED_ORDER){case l.GENERATED_ORDER:i=this._generatedMappings;break;case l.ORIGINAL_ORDER:i=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var o=this.sourceRoot;i.map((function(e){var t=null===e.source?null:this._sources.at(e.source);return null!=t&&null!=o&&(t=n.join(o,t)),{source:t,generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:null===e.name?null:this._names.at(e.name)}}),this).forEach(e,s)},l.prototype.allGeneratedPositionsFor=function(e){var t=n.getArg(e,"line"),r={source:n.getArg(e,"source"),originalLine:t,originalColumn:n.getArg(e,"column",0)};if(null!=this.sourceRoot&&(r.source=n.relative(this.sourceRoot,r.source)),!this._sources.has(r.source))return[];r.source=this._sources.indexOf(r.source);var s=[],o=this._findMapping(r,this._originalMappings,"originalLine","originalColumn",n.compareByOriginalPositions,i.LEAST_UPPER_BOUND);if(o>=0){var a=this._originalMappings[o];if(void 0===e.column)for(var l=a.originalLine;a&&a.originalLine===l;)s.push({line:n.getArg(a,"generatedLine",null),column:n.getArg(a,"generatedColumn",null),lastColumn:n.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++o];else for(var u=a.originalColumn;a&&a.originalLine===t&&a.originalColumn==u;)s.push({line:n.getArg(a,"generatedLine",null),column:n.getArg(a,"generatedColumn",null),lastColumn:n.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++o]}return s},t.SourceMapConsumer=l,u.prototype=Object.create(l.prototype),u.prototype.consumer=l,u.fromSourceMap=function(e){var t=Object.create(u.prototype),r=t._names=s.fromArray(e._names.toArray(),!0),i=t._sources=s.fromArray(e._sources.toArray(),!0);t.sourceRoot=e._sourceRoot,t.sourcesContent=e._generateSourcesContent(t._sources.toArray(),t.sourceRoot),t.file=e._file;for(var o=e._mappings.toArray().slice(),l=t.__generatedMappings=[],p=t.__originalMappings=[],f=0,d=o.length;f<d;f++){var h=o[f],m=new c;m.generatedLine=h.generatedLine,m.generatedColumn=h.generatedColumn,h.source&&(m.source=i.indexOf(h.source),m.originalLine=h.originalLine,m.originalColumn=h.originalColumn,h.name&&(m.name=r.indexOf(h.name)),p.push(m)),l.push(m)}return a(t.__originalMappings,n.compareByOriginalPositions),t},u.prototype._version=3,Object.defineProperty(u.prototype,"sources",{get:function(){return this._sources.toArray().map((function(e){return null!=this.sourceRoot?n.join(this.sourceRoot,e):e}),this)}}),u.prototype._parseMappings=function(e,t){for(var r,i,s,l,u,p=1,f=0,d=0,h=0,m=0,y=0,g=e.length,b=0,v={},E={},T=[],S=[];b<g;)if(";"===e.charAt(b))p++,b++,f=0;else if(","===e.charAt(b))b++;else{for((r=new c).generatedLine=p,l=b;l<g&&!this._charIsMappingSeparator(e,l);l++);if(s=v[i=e.slice(b,l)])b+=i.length;else{for(s=[];b<l;)o.decode(e,b,E),u=E.value,b=E.rest,s.push(u);if(2===s.length)throw new Error("Found a source, but no line and column");if(3===s.length)throw new Error("Found a source and line, but no column");v[i]=s}r.generatedColumn=f+s[0],f=r.generatedColumn,s.length>1&&(r.source=m+s[1],m+=s[1],r.originalLine=d+s[2],d=r.originalLine,r.originalLine+=1,r.originalColumn=h+s[3],h=r.originalColumn,s.length>4&&(r.name=y+s[4],y+=s[4])),S.push(r),"number"==typeof r.originalLine&&T.push(r)}a(S,n.compareByGeneratedPositionsDeflated),this.__generatedMappings=S,a(T,n.compareByOriginalPositions),this.__originalMappings=T},u.prototype._findMapping=function(e,t,r,n,s,o){if(e[r]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[r]);if(e[n]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[n]);return i.search(e,t,s,o)},u.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var t=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var r=this._generatedMappings[e+1];if(t.generatedLine===r.generatedLine){t.lastGeneratedColumn=r.generatedColumn-1;continue}}t.lastGeneratedColumn=1/0}},u.prototype.originalPositionFor=function(e){var t={generatedLine:n.getArg(e,"line"),generatedColumn:n.getArg(e,"column")},r=this._findMapping(t,this._generatedMappings,"generatedLine","generatedColumn",n.compareByGeneratedPositionsDeflated,n.getArg(e,"bias",l.GREATEST_LOWER_BOUND));if(r>=0){var i=this._generatedMappings[r];if(i.generatedLine===t.generatedLine){var s=n.getArg(i,"source",null);null!==s&&(s=this._sources.at(s),null!=this.sourceRoot&&(s=n.join(this.sourceRoot,s)));var o=n.getArg(i,"name",null);return null!==o&&(o=this._names.at(o)),{source:s,line:n.getArg(i,"originalLine",null),column:n.getArg(i,"originalColumn",null),name:o}}}return{source:null,line:null,column:null,name:null}},u.prototype.hasContentsOfAllSources=function(){return!!this.sourcesContent&&(this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some((function(e){return null==e})))},u.prototype.sourceContentFor=function(e,t){if(!this.sourcesContent)return null;if(null!=this.sourceRoot&&(e=n.relative(this.sourceRoot,e)),this._sources.has(e))return this.sourcesContent[this._sources.indexOf(e)];var r;if(null!=this.sourceRoot&&(r=n.urlParse(this.sourceRoot))){var i=e.replace(/^file:\/\//,"");if("file"==r.scheme&&this._sources.has(i))return this.sourcesContent[this._sources.indexOf(i)];if((!r.path||"/"==r.path)&&this._sources.has("/"+e))return this.sourcesContent[this._sources.indexOf("/"+e)]}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},u.prototype.generatedPositionFor=function(e){var t=n.getArg(e,"source");if(null!=this.sourceRoot&&(t=n.relative(this.sourceRoot,t)),!this._sources.has(t))return{line:null,column:null,lastColumn:null};var r={source:t=this._sources.indexOf(t),originalLine:n.getArg(e,"line"),originalColumn:n.getArg(e,"column")},i=this._findMapping(r,this._originalMappings,"originalLine","originalColumn",n.compareByOriginalPositions,n.getArg(e,"bias",l.GREATEST_LOWER_BOUND));if(i>=0){var s=this._originalMappings[i];if(s.source===r.source)return{line:n.getArg(s,"generatedLine",null),column:n.getArg(s,"generatedColumn",null),lastColumn:n.getArg(s,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},p.prototype=Object.create(l.prototype),p.prototype.constructor=l,p.prototype._version=3,Object.defineProperty(p.prototype,"sources",{get:function(){for(var e=[],t=0;t<this._sections.length;t++)for(var r=0;r<this._sections[t].consumer.sources.length;r++)e.push(this._sections[t].consumer.sources[r]);return e}}),p.prototype.originalPositionFor=function(e){var t={generatedLine:n.getArg(e,"line"),generatedColumn:n.getArg(e,"column")},r=i.search(t,this._sections,(function(e,t){var r=e.generatedLine-t.generatedOffset.generatedLine;return r||e.generatedColumn-t.generatedOffset.generatedColumn})),s=this._sections[r];return s?s.consumer.originalPositionFor({line:t.generatedLine-(s.generatedOffset.generatedLine-1),column:t.generatedColumn-(s.generatedOffset.generatedLine===t.generatedLine?s.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}},p.prototype.hasContentsOfAllSources=function(){return this._sections.every((function(e){return e.consumer.hasContentsOfAllSources()}))},p.prototype.sourceContentFor=function(e,t){for(var r=0;r<this._sections.length;r++){var n=this._sections[r].consumer.sourceContentFor(e,!0);if(n)return n}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},p.prototype.generatedPositionFor=function(e){for(var t=0;t<this._sections.length;t++){var r=this._sections[t];if(-1!==r.consumer.sources.indexOf(n.getArg(e,"source"))){var i=r.consumer.generatedPositionFor(e);if(i)return{line:i.line+(r.generatedOffset.generatedLine-1),column:i.column+(r.generatedOffset.generatedLine===i.line?r.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}},p.prototype._parseMappings=function(e,t){this.__generatedMappings=[],this.__originalMappings=[];for(var r=0;r<this._sections.length;r++)for(var i=this._sections[r],s=i.consumer._generatedMappings,o=0;o<s.length;o++){var l=s[o],u=i.consumer._sources.at(l.source);null!==i.consumer.sourceRoot&&(u=n.join(i.consumer.sourceRoot,u)),this._sources.add(u),u=this._sources.indexOf(u);var c=i.consumer._names.at(l.name);this._names.add(c),c=this._names.indexOf(c);var p={source:u,generatedLine:l.generatedLine+(i.generatedOffset.generatedLine-1),generatedColumn:l.generatedColumn+(i.generatedOffset.generatedLine===l.generatedLine?i.generatedOffset.generatedColumn-1:0),originalLine:l.originalLine,originalColumn:l.originalColumn,name:c};this.__generatedMappings.push(p),"number"==typeof p.originalLine&&this.__originalMappings.push(p)}a(this.__generatedMappings,n.compareByGeneratedPositionsDeflated),a(this.__originalMappings,n.compareByOriginalPositions)}},8456:(e,t,r)=>{var n=r(975),i=r(1559),s=r(4249).I,o=r(8247).H;function a(e){e||(e={}),this._file=i.getArg(e,"file",null),this._sourceRoot=i.getArg(e,"sourceRoot",null),this._skipValidation=i.getArg(e,"skipValidation",!1),this._sources=new s,this._names=new s,this._mappings=new o,this._sourcesContents=null}a.prototype._version=3,a.fromSourceMap=function(e){var t=e.sourceRoot,r=new a({file:e.file,sourceRoot:t});return e.eachMapping((function(e){var n={generated:{line:e.generatedLine,column:e.generatedColumn}};null!=e.source&&(n.source=e.source,null!=t&&(n.source=i.relative(t,n.source)),n.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(n.name=e.name)),r.addMapping(n)})),e.sources.forEach((function(t){var n=e.sourceContentFor(t);null!=n&&r.setSourceContent(t,n)})),r},a.prototype.addMapping=function(e){var t=i.getArg(e,"generated"),r=i.getArg(e,"original",null),n=i.getArg(e,"source",null),s=i.getArg(e,"name",null);this._skipValidation||this._validateMapping(t,r,n,s),null!=n&&(n=String(n),this._sources.has(n)||this._sources.add(n)),null!=s&&(s=String(s),this._names.has(s)||this._names.add(s)),this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:null!=r&&r.line,originalColumn:null!=r&&r.column,source:n,name:s})},a.prototype.setSourceContent=function(e,t){var r=e;null!=this._sourceRoot&&(r=i.relative(this._sourceRoot,r)),null!=t?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[i.toSetString(r)]=t):this._sourcesContents&&(delete this._sourcesContents[i.toSetString(r)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},a.prototype.applySourceMap=function(e,t,r){var n=t;if(null==t){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');n=e.file}var o=this._sourceRoot;null!=o&&(n=i.relative(o,n));var a=new s,l=new s;this._mappings.unsortedForEach((function(t){if(t.source===n&&null!=t.originalLine){var s=e.originalPositionFor({line:t.originalLine,column:t.originalColumn});null!=s.source&&(t.source=s.source,null!=r&&(t.source=i.join(r,t.source)),null!=o&&(t.source=i.relative(o,t.source)),t.originalLine=s.line,t.originalColumn=s.column,null!=s.name&&(t.name=s.name))}var u=t.source;null==u||a.has(u)||a.add(u);var c=t.name;null==c||l.has(c)||l.add(c)}),this),this._sources=a,this._names=l,e.sources.forEach((function(t){var n=e.sourceContentFor(t);null!=n&&(null!=r&&(t=i.join(r,t)),null!=o&&(t=i.relative(o,t)),this.setSourceContent(t,n))}),this)},a.prototype._validateMapping=function(e,t,r,n){if(t&&"number"!=typeof t.line&&"number"!=typeof t.column)throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||t||r||n)&&!(e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&r))throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:r,original:t,name:n}))},a.prototype._serializeMappings=function(){for(var e,t,r,s,o=0,a=1,l=0,u=0,c=0,p=0,f="",d=this._mappings.toArray(),h=0,m=d.length;h<m;h++){if(e="",(t=d[h]).generatedLine!==a)for(o=0;t.generatedLine!==a;)e+=";",a++;else if(h>0){if(!i.compareByGeneratedPositionsInflated(t,d[h-1]))continue;e+=","}e+=n.encode(t.generatedColumn-o),o=t.generatedColumn,null!=t.source&&(s=this._sources.indexOf(t.source),e+=n.encode(s-p),p=s,e+=n.encode(t.originalLine-1-u),u=t.originalLine-1,e+=n.encode(t.originalColumn-l),l=t.originalColumn,null!=t.name&&(r=this._names.indexOf(t.name),e+=n.encode(r-c),c=r)),f+=e}return f},a.prototype._generateSourcesContent=function(e,t){return e.map((function(e){if(!this._sourcesContents)return null;null!=t&&(e=i.relative(t,e));var r=i.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,r)?this._sourcesContents[r]:null}),this)},a.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},a.prototype.toString=function(){return JSON.stringify(this.toJSON())},t.SourceMapGenerator=a},1871:(e,t,r)=>{var n=r(8456).SourceMapGenerator,i=r(1559),s=/(\r?\n)/,o="$$$isSourceNode$$$";function a(e,t,r,n,i){this.children=[],this.sourceContents={},this.line=null==e?null:e,this.column=null==t?null:t,this.source=null==r?null:r,this.name=null==i?null:i,this[o]=!0,null!=n&&this.add(n)}a.fromStringWithSourceMap=function(e,t,r){var n=new a,o=e.split(s),l=0,u=function(){return e()+(e()||"");function e(){return l<o.length?o[l++]:void 0}},c=1,p=0,f=null;return t.eachMapping((function(e){if(null!==f){if(!(c<e.generatedLine)){var t=(r=o[l]).substr(0,e.generatedColumn-p);return o[l]=r.substr(e.generatedColumn-p),p=e.generatedColumn,d(f,t),void(f=e)}d(f,u()),c++,p=0}for(;c<e.generatedLine;)n.add(u()),c++;if(p<e.generatedColumn){var r=o[l];n.add(r.substr(0,e.generatedColumn)),o[l]=r.substr(e.generatedColumn),p=e.generatedColumn}f=e}),this),l<o.length&&(f&&d(f,u()),n.add(o.splice(l).join(""))),t.sources.forEach((function(e){var s=t.sourceContentFor(e);null!=s&&(null!=r&&(e=i.join(r,e)),n.setSourceContent(e,s))})),n;function d(e,t){if(null===e||void 0===e.source)n.add(t);else{var s=r?i.join(r,e.source):e.source;n.add(new a(e.originalLine,e.originalColumn,s,t,e.name))}}},a.prototype.add=function(e){if(Array.isArray(e))e.forEach((function(e){this.add(e)}),this);else{if(!e[o]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);e&&this.children.push(e)}return this},a.prototype.prepend=function(e){if(Array.isArray(e))for(var t=e.length-1;t>=0;t--)this.prepend(e[t]);else{if(!e[o]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);this.children.unshift(e)}return this},a.prototype.walk=function(e){for(var t,r=0,n=this.children.length;r<n;r++)(t=this.children[r])[o]?t.walk(e):""!==t&&e(t,{source:this.source,line:this.line,column:this.column,name:this.name})},a.prototype.join=function(e){var t,r,n=this.children.length;if(n>0){for(t=[],r=0;r<n-1;r++)t.push(this.children[r]),t.push(e);t.push(this.children[r]),this.children=t}return this},a.prototype.replaceRight=function(e,t){var r=this.children[this.children.length-1];return r[o]?r.replaceRight(e,t):"string"==typeof r?this.children[this.children.length-1]=r.replace(e,t):this.children.push("".replace(e,t)),this},a.prototype.setSourceContent=function(e,t){this.sourceContents[i.toSetString(e)]=t},a.prototype.walkSourceContents=function(e){for(var t=0,r=this.children.length;t<r;t++)this.children[t][o]&&this.children[t].walkSourceContents(e);var n=Object.keys(this.sourceContents);for(t=0,r=n.length;t<r;t++)e(i.fromSetString(n[t]),this.sourceContents[n[t]])},a.prototype.toString=function(){var e="";return this.walk((function(t){e+=t})),e},a.prototype.toStringWithSourceMap=function(e){var t={code:"",line:1,column:0},r=new n(e),i=!1,s=null,o=null,a=null,l=null;return this.walk((function(e,n){t.code+=e,null!==n.source&&null!==n.line&&null!==n.column?(s===n.source&&o===n.line&&a===n.column&&l===n.name||r.addMapping({source:n.source,original:{line:n.line,column:n.column},generated:{line:t.line,column:t.column},name:n.name}),s=n.source,o=n.line,a=n.column,l=n.name,i=!0):i&&(r.addMapping({generated:{line:t.line,column:t.column}}),s=null,i=!1);for(var u=0,c=e.length;u<c;u++)10===e.charCodeAt(u)?(t.line++,t.column=0,u+1===c?(s=null,i=!1):i&&r.addMapping({source:n.source,original:{line:n.line,column:n.column},generated:{line:t.line,column:t.column},name:n.name})):t.column++})),this.walkSourceContents((function(e,t){r.setSourceContent(e,t)})),{code:t.code,map:r}},t.SourceNode=a},1559:(e,t)=>{t.getArg=function(e,t,r){if(t in e)return e[t];if(3===arguments.length)return r;throw new Error('"'+t+'" is a required argument.')};var r=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,n=/^data:.+\,.+$/;function i(e){var t=e.match(r);return t?{scheme:t[1],auth:t[2],host:t[3],port:t[4],path:t[5]}:null}function s(e){var t="";return e.scheme&&(t+=e.scheme+":"),t+="//",e.auth&&(t+=e.auth+"@"),e.host&&(t+=e.host),e.port&&(t+=":"+e.port),e.path&&(t+=e.path),t}function o(e){var r=e,n=i(e);if(n){if(!n.path)return e;r=n.path}for(var o,a=t.isAbsolute(r),l=r.split(/\/+/),u=0,c=l.length-1;c>=0;c--)"."===(o=l[c])?l.splice(c,1):".."===o?u++:u>0&&(""===o?(l.splice(c+1,u),u=0):(l.splice(c,2),u--));return""===(r=l.join("/"))&&(r=a?"/":"."),n?(n.path=r,s(n)):r}t.urlParse=i,t.urlGenerate=s,t.normalize=o,t.join=function(e,t){""===e&&(e="."),""===t&&(t=".");var r=i(t),a=i(e);if(a&&(e=a.path||"/"),r&&!r.scheme)return a&&(r.scheme=a.scheme),s(r);if(r||t.match(n))return t;if(a&&!a.host&&!a.path)return a.host=t,s(a);var l="/"===t.charAt(0)?t:o(e.replace(/\/+$/,"")+"/"+t);return a?(a.path=l,s(a)):l},t.isAbsolute=function(e){return"/"===e.charAt(0)||!!e.match(r)},t.relative=function(e,t){""===e&&(e="."),e=e.replace(/\/$/,"");for(var r=0;0!==t.indexOf(e+"/");){var n=e.lastIndexOf("/");if(n<0)return t;if((e=e.slice(0,n)).match(/^([^\/]+:\/)?\/*$/))return t;++r}return Array(r+1).join("../")+t.substr(e.length+1)};var a=!("__proto__"in Object.create(null));function l(e){return e}function u(e){if(!e)return!1;var t=e.length;if(t<9)return!1;if(95!==e.charCodeAt(t-1)||95!==e.charCodeAt(t-2)||111!==e.charCodeAt(t-3)||116!==e.charCodeAt(t-4)||111!==e.charCodeAt(t-5)||114!==e.charCodeAt(t-6)||112!==e.charCodeAt(t-7)||95!==e.charCodeAt(t-8)||95!==e.charCodeAt(t-9))return!1;for(var r=t-10;r>=0;r--)if(36!==e.charCodeAt(r))return!1;return!0}function c(e,t){return e===t?0:e>t?1:-1}t.toSetString=a?l:function(e){return u(e)?"$"+e:e},t.fromSetString=a?l:function(e){return u(e)?e.slice(1):e},t.compareByOriginalPositions=function(e,t,r){var n=e.source-t.source;return 0!==n||0!==(n=e.originalLine-t.originalLine)||0!==(n=e.originalColumn-t.originalColumn)||r||0!==(n=e.generatedColumn-t.generatedColumn)||0!==(n=e.generatedLine-t.generatedLine)?n:e.name-t.name},t.compareByGeneratedPositionsDeflated=function(e,t,r){var n=e.generatedLine-t.generatedLine;return 0!==n||0!==(n=e.generatedColumn-t.generatedColumn)||r||0!==(n=e.source-t.source)||0!==(n=e.originalLine-t.originalLine)||0!==(n=e.originalColumn-t.originalColumn)?n:e.name-t.name},t.compareByGeneratedPositionsInflated=function(e,t){var r=e.generatedLine-t.generatedLine;return 0!==r||0!==(r=e.generatedColumn-t.generatedColumn)||0!==(r=c(e.source,t.source))||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)?r:c(e.name,t.name)}},4982:(e,t,r)=>{t.SourceMapGenerator=r(8456).SourceMapGenerator,t.SourceMapConsumer=r(1077).SourceMapConsumer,t.SourceNode=r(1871).SourceNode},5825:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getInclusionReasons=function(e,t,r){const o=r[e]||{};return Object.keys(t).reduce(((e,r)=>{const a=(0,s.getLowestImplementedVersion)(o,r),l=t[r];if(a){const t=(0,s.isUnreleasedVersion)(a,r);(0,s.isUnreleasedVersion)(l,r)||!t&&!n.lt(l.toString(),(0,s.semverify)(a))||(e[r]=(0,i.prettifyVersion)(l))}else e[r]=(0,i.prettifyVersion)(l);return e}),{})};var n=r(266),i=r(4501),s=r(6404)},7768:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,n,i,s,o){const l=new Set,u={compatData:e,includes:t,excludes:r};for(const t in e)if(a(t,n,u))l.add(t);else if(o){const e=o.get(t);e&&l.add(e)}i&&i.forEach((e=>!r.has(e)&&l.add(e)));s&&s.forEach((e=>!t.has(e)&&l.delete(e)));return l},t.isRequired=a,t.targetsSupported=o;var n=r(266),i=r(9327),s=r(6404);function o(e,t){const r=Object.keys(e);if(0===r.length)return!1;return 0===r.filter((r=>{const i=(0,s.getLowestImplementedVersion)(t,r);if(!i)return!0;const o=e[r];if((0,s.isUnreleasedVersion)(o,r))return!1;if((0,s.isUnreleasedVersion)(i,r))return!0;if(!n.valid(o.toString()))throw new Error(`Invalid version passed for target "${r}": "${o}". Versions must be in semver format (major.minor.patch)`);return n.gt((0,s.semverify)(i),o.toString())})).length}function a(e,t,{compatData:r=i,includes:n,excludes:s}={}){return(null==s||!s.has(e))&&(!(null==n||!n.has(e))||!o(t,r[e]))}},1781:(e,t,r)=>{"use strict";var n=r(7061);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"TargetNames",{enumerable:!0,get:function(){return u.TargetNames}}),t.default=function(e={},t={}){var r;let{browsers:n,esmodules:o}=e;const{configPath:c="."}=t;!function(e){h.invariant(void 0===e||m(e),`'${String(e)}' is not a valid browserslist query`)}(n);let p=function(e){const t=Object.keys(u.TargetNames);for(const r of Object.keys(e))if(!(r in u.TargetNames))throw new Error(h.formatMessage(`'${r}' is not a valid target\n- Did you mean '${(0,s.findSuggestion)(r,t)}'?`));return e}(function(e){const t=Object.assign({},e);return delete t.esmodules,delete t.browsers,t}(e));const f=!!n||Object.keys(p).length>0,y=!t.ignoreBrowserslistConfig&&!f;!n&&y&&(n=i.loadConfig({config:t.configFile,path:c,env:t.browserslistEnv}),null==n&&(n=[]));!o||"intersect"===o&&null!=(r=n)&&r.length||(n=Object.keys(d).map((e=>`${e} >= ${d[e]}`)).join(", "),o=!1);if(n){const e=(b=n,v=t.browserslistEnv,function(e){return e.reduce(((e,t)=>{const[r,n]=t.split(" "),i=l.browserNameMap[r];if(!i)return e;try{const t=n.split("-")[0].toLowerCase(),s=(0,a.isUnreleasedVersion)(t,r);if(!e[i])return e[i]=s?t:(0,a.semverify)(t),e;const o=e[i],l=(0,a.isUnreleasedVersion)(o,r);if(l&&s)e[i]=(0,a.getLowestUnreleased)(o,t,r);else if(l)e[i]=(0,a.semverify)(t);else if(!l&&!s){const r=(0,a.semverify)(t);e[i]=(0,a.semverMin)(o,r)}}catch(e){}return e}),{})}(i(b,{mobileToDesktop:!0,env:v})));if("intersect"===o)for(const t of Object.keys(e)){const r=e[t];d[t]?e[t]=(0,a.getHighestUnreleased)(r,(0,a.semverify)(d[t]),t):delete e[t]}p=Object.assign(e,p)}var b,v;const E={},T=[];for(const e of Object.keys(p).sort()){var S;const t=p[e];"number"==typeof t&&t%1!=0&&T.push({target:e,value:t});const r=null!=(S=g[e])?S:g.__default,[n,i]=r(e,t);i&&(E[n]=i)}return function(e){if(!e.length)return;console.warn("Warning, the following targets are using a decimal version:\n"),e.forEach((({target:e,value:t})=>console.warn(`  ${e}: ${t}`))),console.warn("\nWe recommend using a string for minor/patch versions to avoid numbers like 6.10\ngetting parsed as 6.1, which can lead to unexpected behavior.\n")}(T),E},Object.defineProperty(t,"filterItems",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"getInclusionReasons",{enumerable:!0,get:function(){return p.getInclusionReasons}}),t.isBrowsersQueryValid=m,Object.defineProperty(t,"isRequired",{enumerable:!0,get:function(){return f.isRequired}}),Object.defineProperty(t,"prettifyTargets",{enumerable:!0,get:function(){return c.prettifyTargets}}),Object.defineProperty(t,"unreleasedLabels",{enumerable:!0,get:function(){return l.unreleasedLabels}});var i=r(7539),s=r(4393),o=r(3397),a=r(6404),l=r(4155),u=r(5539),c=r(4501),p=r(5825),f=r(7768);const d=o["es6.module"],h=new s.OptionValidator("@babel/helper-compilation-targets");function m(e){return"string"==typeof e||Array.isArray(e)&&e.every((e=>"string"==typeof e))}function y(e,t){try{return(0,a.semverify)(t)}catch(r){throw new Error(h.formatMessage(`'${t}' is not a valid value for 'targets.${e}'.`))}}const g={__default:(e,t)=>[e,(0,a.isUnreleasedVersion)(t,e)?t.toLowerCase():y(e,t)],node:(e,t)=>[e,!0===t||"current"===t?n.versions.node:y(e,t)]}},5539:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TargetNames=void 0;t.TargetNames={node:"node",chrome:"chrome",opera:"opera",edge:"edge",firefox:"firefox",safari:"safari",ie:"ie",ios:"ios",android:"android",electron:"electron",samsung:"samsung",rhino:"rhino"}},4501:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.prettifyTargets=function(e){return Object.keys(e).reduce(((t,r)=>{let n=e[r];const o=i.unreleasedLabels[r];return"string"==typeof n&&o!==n&&(n=s(n)),t[r]=n,t}),{})},t.prettifyVersion=s;var n=r(266),i=r(4155);function s(e){if("string"!=typeof e)return e;const t=[n.major(e)],r=n.minor(e),i=n.patch(e);return(r||i)&&t.push(r),i&&t.push(i),t.join(".")}},4155:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unreleasedLabels=t.browserNameMap=void 0;t.unreleasedLabels={safari:"tp"};t.browserNameMap={and_chr:"chrome",and_ff:"firefox",android:"android",chrome:"chrome",edge:"edge",firefox:"firefox",ie:"ie",ie_mob:"ie",ios_saf:"ios",node:"node",op_mob:"opera",opera:"opera",safari:"safari",samsung:"samsung"}},6404:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getHighestUnreleased=function(e,t,r){return u(e,t,r)===e?t:e},t.getLowestImplementedVersion=function(e,t){const r=e[t];if(!r&&"android"===t)return e.chrome;return r},t.getLowestUnreleased=u,t.isUnreleasedVersion=function(e,t){const r=s.unreleasedLabels[t];return!!r&&r===e.toString().toLowerCase()},t.semverMin=l,t.semverify=function(e){if("string"==typeof e&&n.valid(e))return e;a.invariant("number"==typeof e||"string"==typeof e&&o.test(e),`'${e}' is not a valid version`);const t=e.toString().split(".");for(;t.length<3;)t.push("0");return t.join(".")};var n=r(266),i=r(4393),s=r(4155);const o=/^(\d+|\d+.\d+)$/,a=new i.OptionValidator("@babel/helper-compilation-targets");function l(e,t){return e&&n.lt(e,t)?e:t}function u(e,t,r){const n=s.unreleasedLabels[r],i=[e,t].some((e=>e===n));return i?e===i?t:e||t:l(e,t)}},266:(e,t,r)=>{var n,i=r(7061);t=e.exports=d,"object"==typeof i&&i.env,n=function(){},t.SEMVER_SPEC_VERSION="2.0.0";var s=Number.MAX_SAFE_INTEGER||9007199254740991,o=t.re=[],a=t.src=[],l=t.tokens={},u=0;function c(e){l[e]=u++}c("NUMERICIDENTIFIER"),a[l.NUMERICIDENTIFIER]="0|[1-9]\\d*",c("NUMERICIDENTIFIERLOOSE"),a[l.NUMERICIDENTIFIERLOOSE]="[0-9]+",c("NONNUMERICIDENTIFIER"),a[l.NONNUMERICIDENTIFIER]="\\d*[a-zA-Z-][a-zA-Z0-9-]*",c("MAINVERSION"),a[l.MAINVERSION]="("+a[l.NUMERICIDENTIFIER]+")\\.("+a[l.NUMERICIDENTIFIER]+")\\.("+a[l.NUMERICIDENTIFIER]+")",c("MAINVERSIONLOOSE"),a[l.MAINVERSIONLOOSE]="("+a[l.NUMERICIDENTIFIERLOOSE]+")\\.("+a[l.NUMERICIDENTIFIERLOOSE]+")\\.("+a[l.NUMERICIDENTIFIERLOOSE]+")",c("PRERELEASEIDENTIFIER"),a[l.PRERELEASEIDENTIFIER]="(?:"+a[l.NUMERICIDENTIFIER]+"|"+a[l.NONNUMERICIDENTIFIER]+")",c("PRERELEASEIDENTIFIERLOOSE"),a[l.PRERELEASEIDENTIFIERLOOSE]="(?:"+a[l.NUMERICIDENTIFIERLOOSE]+"|"+a[l.NONNUMERICIDENTIFIER]+")",c("PRERELEASE"),a[l.PRERELEASE]="(?:-("+a[l.PRERELEASEIDENTIFIER]+"(?:\\."+a[l.PRERELEASEIDENTIFIER]+")*))",c("PRERELEASELOOSE"),a[l.PRERELEASELOOSE]="(?:-?("+a[l.PRERELEASEIDENTIFIERLOOSE]+"(?:\\."+a[l.PRERELEASEIDENTIFIERLOOSE]+")*))",c("BUILDIDENTIFIER"),a[l.BUILDIDENTIFIER]="[0-9A-Za-z-]+",c("BUILD"),a[l.BUILD]="(?:\\+("+a[l.BUILDIDENTIFIER]+"(?:\\."+a[l.BUILDIDENTIFIER]+")*))",c("FULL"),c("FULLPLAIN"),a[l.FULLPLAIN]="v?"+a[l.MAINVERSION]+a[l.PRERELEASE]+"?"+a[l.BUILD]+"?",a[l.FULL]="^"+a[l.FULLPLAIN]+"$",c("LOOSEPLAIN"),a[l.LOOSEPLAIN]="[v=\\s]*"+a[l.MAINVERSIONLOOSE]+a[l.PRERELEASELOOSE]+"?"+a[l.BUILD]+"?",c("LOOSE"),a[l.LOOSE]="^"+a[l.LOOSEPLAIN]+"$",c("GTLT"),a[l.GTLT]="((?:<|>)?=?)",c("XRANGEIDENTIFIERLOOSE"),a[l.XRANGEIDENTIFIERLOOSE]=a[l.NUMERICIDENTIFIERLOOSE]+"|x|X|\\*",c("XRANGEIDENTIFIER"),a[l.XRANGEIDENTIFIER]=a[l.NUMERICIDENTIFIER]+"|x|X|\\*",c("XRANGEPLAIN"),a[l.XRANGEPLAIN]="[v=\\s]*("+a[l.XRANGEIDENTIFIER]+")(?:\\.("+a[l.XRANGEIDENTIFIER]+")(?:\\.("+a[l.XRANGEIDENTIFIER]+")(?:"+a[l.PRERELEASE]+")?"+a[l.BUILD]+"?)?)?",c("XRANGEPLAINLOOSE"),a[l.XRANGEPLAINLOOSE]="[v=\\s]*("+a[l.XRANGEIDENTIFIERLOOSE]+")(?:\\.("+a[l.XRANGEIDENTIFIERLOOSE]+")(?:\\.("+a[l.XRANGEIDENTIFIERLOOSE]+")(?:"+a[l.PRERELEASELOOSE]+")?"+a[l.BUILD]+"?)?)?",c("XRANGE"),a[l.XRANGE]="^"+a[l.GTLT]+"\\s*"+a[l.XRANGEPLAIN]+"$",c("XRANGELOOSE"),a[l.XRANGELOOSE]="^"+a[l.GTLT]+"\\s*"+a[l.XRANGEPLAINLOOSE]+"$",c("COERCE"),a[l.COERCE]="(^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])",c("COERCERTL"),o[l.COERCERTL]=new RegExp(a[l.COERCE],"g"),c("LONETILDE"),a[l.LONETILDE]="(?:~>?)",c("TILDETRIM"),a[l.TILDETRIM]="(\\s*)"+a[l.LONETILDE]+"\\s+",o[l.TILDETRIM]=new RegExp(a[l.TILDETRIM],"g");c("TILDE"),a[l.TILDE]="^"+a[l.LONETILDE]+a[l.XRANGEPLAIN]+"$",c("TILDELOOSE"),a[l.TILDELOOSE]="^"+a[l.LONETILDE]+a[l.XRANGEPLAINLOOSE]+"$",c("LONECARET"),a[l.LONECARET]="(?:\\^)",c("CARETTRIM"),a[l.CARETTRIM]="(\\s*)"+a[l.LONECARET]+"\\s+",o[l.CARETTRIM]=new RegExp(a[l.CARETTRIM],"g");c("CARET"),a[l.CARET]="^"+a[l.LONECARET]+a[l.XRANGEPLAIN]+"$",c("CARETLOOSE"),a[l.CARETLOOSE]="^"+a[l.LONECARET]+a[l.XRANGEPLAINLOOSE]+"$",c("COMPARATORLOOSE"),a[l.COMPARATORLOOSE]="^"+a[l.GTLT]+"\\s*("+a[l.LOOSEPLAIN]+")$|^$",c("COMPARATOR"),a[l.COMPARATOR]="^"+a[l.GTLT]+"\\s*("+a[l.FULLPLAIN]+")$|^$",c("COMPARATORTRIM"),a[l.COMPARATORTRIM]="(\\s*)"+a[l.GTLT]+"\\s*("+a[l.LOOSEPLAIN]+"|"+a[l.XRANGEPLAIN]+")",o[l.COMPARATORTRIM]=new RegExp(a[l.COMPARATORTRIM],"g");c("HYPHENRANGE"),a[l.HYPHENRANGE]="^\\s*("+a[l.XRANGEPLAIN]+")\\s+-\\s+("+a[l.XRANGEPLAIN]+")\\s*$",c("HYPHENRANGELOOSE"),a[l.HYPHENRANGELOOSE]="^\\s*("+a[l.XRANGEPLAINLOOSE]+")\\s+-\\s+("+a[l.XRANGEPLAINLOOSE]+")\\s*$",c("STAR"),a[l.STAR]="(<|>)?=?\\s*\\*";for(var p=0;p<u;p++)n(p,a[p]),o[p]||(o[p]=new RegExp(a[p]));function f(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof d)return e;if("string"!=typeof e)return null;if(e.length>256)return null;if(!(t.loose?o[l.LOOSE]:o[l.FULL]).test(e))return null;try{return new d(e,t)}catch(e){return null}}function d(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof d){if(e.loose===t.loose)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(e.length>256)throw new TypeError("version is longer than 256 characters");if(!(this instanceof d))return new d(e,t);n("SemVer",e,t),this.options=t,this.loose=!!t.loose;var r=e.trim().match(t.loose?o[l.LOOSE]:o[l.FULL]);if(!r)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>s||this.major<0)throw new TypeError("Invalid major version");if(this.minor>s||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>s||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map((function(e){if(/^[0-9]+$/.test(e)){var t=+e;if(t>=0&&t<s)return t}return e})):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}t.parse=f,t.valid=function(e,t){var r=f(e,t);return r?r.version:null},t.clean=function(e,t){var r=f(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null},t.SemVer=d,d.prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version},d.prototype.toString=function(){return this.version},d.prototype.compare=function(e){return n("SemVer.compare",this.version,this.options,e),e instanceof d||(e=new d(e,this.options)),this.compareMain(e)||this.comparePre(e)},d.prototype.compareMain=function(e){return e instanceof d||(e=new d(e,this.options)),m(this.major,e.major)||m(this.minor,e.minor)||m(this.patch,e.patch)},d.prototype.comparePre=function(e){if(e instanceof d||(e=new d(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;var t=0;do{var r=this.prerelease[t],i=e.prerelease[t];if(n("prerelease compare",t,r,i),void 0===r&&void 0===i)return 0;if(void 0===i)return 1;if(void 0===r)return-1;if(r!==i)return m(r,i)}while(++t)},d.prototype.compareBuild=function(e){e instanceof d||(e=new d(e,this.options));var t=0;do{var r=this.build[t],i=e.build[t];if(n("prerelease compare",t,r,i),void 0===r&&void 0===i)return 0;if(void 0===i)return 1;if(void 0===r)return-1;if(r!==i)return m(r,i)}while(++t)},d.prototype.inc=function(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t),this.inc("pre",t);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{for(var r=this.prerelease.length;--r>=0;)"number"==typeof this.prerelease[r]&&(this.prerelease[r]++,r=-2);-1===r&&this.prerelease.push(0)}t&&(this.prerelease[0]===t?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this},t.inc=function(e,t,r,n){"string"==typeof r&&(n=r,r=void 0);try{return new d(e,r).inc(t,n).version}catch(e){return null}},t.diff=function(e,t){if(v(e,t))return null;var r=f(e),n=f(t),i="";if(r.prerelease.length||n.prerelease.length){i="pre";var s="prerelease"}for(var o in r)if(("major"===o||"minor"===o||"patch"===o)&&r[o]!==n[o])return i+o;return s},t.compareIdentifiers=m;var h=/^[0-9]+$/;function m(e,t){var r=h.test(e),n=h.test(t);return r&&n&&(e=+e,t=+t),e===t?0:r&&!n?-1:n&&!r?1:e<t?-1:1}function y(e,t,r){return new d(e,r).compare(new d(t,r))}function g(e,t,r){return y(e,t,r)>0}function b(e,t,r){return y(e,t,r)<0}function v(e,t,r){return 0===y(e,t,r)}function E(e,t,r){return 0!==y(e,t,r)}function T(e,t,r){return y(e,t,r)>=0}function S(e,t,r){return y(e,t,r)<=0}function x(e,t,r,n){switch(t){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e===r;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e!==r;case"":case"=":case"==":return v(e,r,n);case"!=":return E(e,r,n);case">":return g(e,r,n);case">=":return T(e,r,n);case"<":return b(e,r,n);case"<=":return S(e,r,n);default:throw new TypeError("Invalid operator: "+t)}}function A(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof A){if(e.loose===!!t.loose)return e;e=e.value}if(!(this instanceof A))return new A(e,t);n("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===w?this.value="":this.value=this.operator+this.semver.version,n("comp",this)}t.rcompareIdentifiers=function(e,t){return m(t,e)},t.major=function(e,t){return new d(e,t).major},t.minor=function(e,t){return new d(e,t).minor},t.patch=function(e,t){return new d(e,t).patch},t.compare=y,t.compareLoose=function(e,t){return y(e,t,!0)},t.compareBuild=function(e,t,r){var n=new d(e,r),i=new d(t,r);return n.compare(i)||n.compareBuild(i)},t.rcompare=function(e,t,r){return y(t,e,r)},t.sort=function(e,r){return e.sort((function(e,n){return t.compareBuild(e,n,r)}))},t.rsort=function(e,r){return e.sort((function(e,n){return t.compareBuild(n,e,r)}))},t.gt=g,t.lt=b,t.eq=v,t.neq=E,t.gte=T,t.lte=S,t.cmp=x,t.Comparator=A;var w={};function P(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof P)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new P(e.raw,t);if(e instanceof A)return new P(e.value,t);if(!(this instanceof P))return new P(e,t);if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map((function(e){return this.parseRange(e.trim())}),this).filter((function(e){return e.length})),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}function C(e,t){for(var r=!0,n=e.slice(),i=n.pop();r&&n.length;)r=n.every((function(e){return i.intersects(e,t)})),i=n.pop();return r}function D(e){return!e||"x"===e.toLowerCase()||"*"===e}function O(e,t,r,n,i,s,o,a,l,u,c,p,f){return((t=D(r)?"":D(n)?">="+r+".0.0":D(i)?">="+r+"."+n+".0":">="+t)+" "+(a=D(l)?"":D(u)?"<"+(+l+1)+".0.0":D(c)?"<"+l+"."+(+u+1)+".0":p?"<="+l+"."+u+"."+c+"-"+p:"<="+a)).trim()}function k(e,t,r){for(var i=0;i<e.length;i++)if(!e[i].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(i=0;i<e.length;i++)if(n(e[i].semver),e[i].semver!==w&&e[i].semver.prerelease.length>0){var s=e[i].semver;if(s.major===t.major&&s.minor===t.minor&&s.patch===t.patch)return!0}return!1}return!0}function N(e,t,r){try{t=new P(t,r)}catch(e){return!1}return t.test(e)}function I(e,t,r,n){var i,s,o,a,l;switch(e=new d(e,n),t=new P(t,n),r){case">":i=g,s=S,o=b,a=">",l=">=";break;case"<":i=b,s=T,o=g,a="<",l="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(N(e,t,n))return!1;for(var u=0;u<t.set.length;++u){var c=t.set[u],p=null,f=null;if(c.forEach((function(e){e.semver===w&&(e=new A(">=0.0.0")),p=p||e,f=f||e,i(e.semver,p.semver,n)?p=e:o(e.semver,f.semver,n)&&(f=e)})),p.operator===a||p.operator===l)return!1;if((!f.operator||f.operator===a)&&s(e,f.semver))return!1;if(f.operator===l&&o(e,f.semver))return!1}return!0}A.prototype.parse=function(e){var t=this.options.loose?o[l.COMPARATORLOOSE]:o[l.COMPARATOR],r=e.match(t);if(!r)throw new TypeError("Invalid comparator: "+e);this.operator=void 0!==r[1]?r[1]:"","="===this.operator&&(this.operator=""),r[2]?this.semver=new d(r[2],this.options.loose):this.semver=w},A.prototype.toString=function(){return this.value},A.prototype.test=function(e){if(n("Comparator.test",e,this.options.loose),this.semver===w||e===w)return!0;if("string"==typeof e)try{e=new d(e,this.options)}catch(e){return!1}return x(e,this.operator,this.semver,this.options)},A.prototype.intersects=function(e,t){if(!(e instanceof A))throw new TypeError("a Comparator is required");var r;if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),""===this.operator)return""===this.value||(r=new P(e.value,t),N(this.value,r,t));if(""===e.operator)return""===e.value||(r=new P(this.value,t),N(e.semver,r,t));var n=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),i=!("<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),s=this.semver.version===e.semver.version,o=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),a=x(this.semver,"<",e.semver,t)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),l=x(this.semver,">",e.semver,t)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return n||i||s&&o||a||l},t.Range=P,P.prototype.format=function(){return this.range=this.set.map((function(e){return e.join(" ").trim()})).join("||").trim(),this.range},P.prototype.toString=function(){return this.range},P.prototype.parseRange=function(e){var t=this.options.loose;e=e.trim();var r=t?o[l.HYPHENRANGELOOSE]:o[l.HYPHENRANGE];e=e.replace(r,O),n("hyphen replace",e),e=e.replace(o[l.COMPARATORTRIM],"$1$2$3"),n("comparator trim",e,o[l.COMPARATORTRIM]),e=(e=(e=e.replace(o[l.TILDETRIM],"$1~")).replace(o[l.CARETTRIM],"$1^")).split(/\s+/).join(" ");var i=t?o[l.COMPARATORLOOSE]:o[l.COMPARATOR],s=e.split(" ").map((function(e){return function(e,t){return n("comp",e,t),e=function(e,t){return e.trim().split(/\s+/).map((function(e){return function(e,t){n("caret",e,t);var r=t.loose?o[l.CARETLOOSE]:o[l.CARET];return e.replace(r,(function(t,r,i,s,o){var a;return n("caret",e,t,r,i,s,o),D(r)?a="":D(i)?a=">="+r+".0.0 <"+(+r+1)+".0.0":D(s)?a="0"===r?">="+r+"."+i+".0 <"+r+"."+(+i+1)+".0":">="+r+"."+i+".0 <"+(+r+1)+".0.0":o?(n("replaceCaret pr",o),a="0"===r?"0"===i?">="+r+"."+i+"."+s+"-"+o+" <"+r+"."+i+"."+(+s+1):">="+r+"."+i+"."+s+"-"+o+" <"+r+"."+(+i+1)+".0":">="+r+"."+i+"."+s+"-"+o+" <"+(+r+1)+".0.0"):(n("no pr"),a="0"===r?"0"===i?">="+r+"."+i+"."+s+" <"+r+"."+i+"."+(+s+1):">="+r+"."+i+"."+s+" <"+r+"."+(+i+1)+".0":">="+r+"."+i+"."+s+" <"+(+r+1)+".0.0"),n("caret return",a),a}))}(e,t)})).join(" ")}(e,t),n("caret",e),e=function(e,t){return e.trim().split(/\s+/).map((function(e){return function(e,t){var r=t.loose?o[l.TILDELOOSE]:o[l.TILDE];return e.replace(r,(function(t,r,i,s,o){var a;return n("tilde",e,t,r,i,s,o),D(r)?a="":D(i)?a=">="+r+".0.0 <"+(+r+1)+".0.0":D(s)?a=">="+r+"."+i+".0 <"+r+"."+(+i+1)+".0":o?(n("replaceTilde pr",o),a=">="+r+"."+i+"."+s+"-"+o+" <"+r+"."+(+i+1)+".0"):a=">="+r+"."+i+"."+s+" <"+r+"."+(+i+1)+".0",n("tilde return",a),a}))}(e,t)})).join(" ")}(e,t),n("tildes",e),e=function(e,t){return n("replaceXRanges",e,t),e.split(/\s+/).map((function(e){return function(e,t){e=e.trim();var r=t.loose?o[l.XRANGELOOSE]:o[l.XRANGE];return e.replace(r,(function(r,i,s,o,a,l){n("xRange",e,r,i,s,o,a,l);var u=D(s),c=u||D(o),p=c||D(a),f=p;return"="===i&&f&&(i=""),l=t.includePrerelease?"-0":"",u?r=">"===i||"<"===i?"<0.0.0-0":"*":i&&f?(c&&(o=0),a=0,">"===i?(i=">=",c?(s=+s+1,o=0,a=0):(o=+o+1,a=0)):"<="===i&&(i="<",c?s=+s+1:o=+o+1),r=i+s+"."+o+"."+a+l):c?r=">="+s+".0.0"+l+" <"+(+s+1)+".0.0"+l:p&&(r=">="+s+"."+o+".0"+l+" <"+s+"."+(+o+1)+".0"+l),n("xRange return",r),r}))}(e,t)})).join(" ")}(e,t),n("xrange",e),e=function(e,t){return n("replaceStars",e,t),e.trim().replace(o[l.STAR],"")}(e,t),n("stars",e),e}(e,this.options)}),this).join(" ").split(/\s+/);return this.options.loose&&(s=s.filter((function(e){return!!e.match(i)}))),s=s.map((function(e){return new A(e,this.options)}),this)},P.prototype.intersects=function(e,t){if(!(e instanceof P))throw new TypeError("a Range is required");return this.set.some((function(r){return C(r,t)&&e.set.some((function(e){return C(e,t)&&r.every((function(r){return e.every((function(e){return r.intersects(e,t)}))}))}))}))},t.toComparators=function(e,t){return new P(e,t).set.map((function(e){return e.map((function(e){return e.value})).join(" ").trim().split(" ")}))},P.prototype.test=function(e){if(!e)return!1;if("string"==typeof e)try{e=new d(e,this.options)}catch(e){return!1}for(var t=0;t<this.set.length;t++)if(k(this.set[t],e,this.options))return!0;return!1},t.satisfies=N,t.maxSatisfying=function(e,t,r){var n=null,i=null;try{var s=new P(t,r)}catch(e){return null}return e.forEach((function(e){s.test(e)&&(n&&-1!==i.compare(e)||(i=new d(n=e,r)))})),n},t.minSatisfying=function(e,t,r){var n=null,i=null;try{var s=new P(t,r)}catch(e){return null}return e.forEach((function(e){s.test(e)&&(n&&1!==i.compare(e)||(i=new d(n=e,r)))})),n},t.minVersion=function(e,t){e=new P(e,t);var r=new d("0.0.0");if(e.test(r))return r;if(r=new d("0.0.0-0"),e.test(r))return r;r=null;for(var n=0;n<e.set.length;++n){e.set[n].forEach((function(e){var t=new d(e.semver.version);switch(e.operator){case">":0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();case"":case">=":r&&!g(r,t)||(r=t);break;case"<":case"<=":break;default:throw new Error("Unexpected operation: "+e.operator)}}))}if(r&&e.test(r))return r;return null},t.validRange=function(e,t){try{return new P(e,t).range||"*"}catch(e){return null}},t.ltr=function(e,t,r){return I(e,t,"<",r)},t.gtr=function(e,t,r){return I(e,t,">",r)},t.outside=I,t.prerelease=function(e,t){var r=f(e,t);return r&&r.prerelease.length?r.prerelease:null},t.intersects=function(e,t,r){return e=new P(e,r),t=new P(t,r),e.intersects(t)},t.coerce=function(e,t){if(e instanceof d)return e;"number"==typeof e&&(e=String(e));if("string"!=typeof e)return null;var r=null;if((t=t||{}).rtl){for(var n;(n=o[l.COERCERTL].exec(e))&&(!r||r.index+r[0].length!==e.length);)r&&n.index+n[0].length===r.index+r[0].length||(r=n),o[l.COERCERTL].lastIndex=n.index+n[1].length+n[2].length;o[l.COERCERTL].lastIndex=-1}else r=e.match(o[l.COERCE]);if(null===r)return null;return f(r[2]+"."+(r[3]||"0")+"."+(r[4]||"0"),t)}},149:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({node:e,parent:t,scope:r,id:i},s=!1){if(e.id)return;if(!m(t)&&!h(t,{kind:"method"})||t.computed&&!f(t.key)){if(b(t)){if(i=t.id,p(i)&&!s){const t=r.parent.getBinding(i.name);if(t&&t.constant&&r.getBinding(i.name)===t)return e.id=a(i),void(e.id[o]=!0)}}else if(u(t,{operator:"="}))i=t.left;else if(!i)return}else i=t.key;let x;i&&f(i)?x=function(e){if(d(e))return"null";if(y(e))return`_${e.pattern}_${e.flags}`;if(g(e))return e.quasis.map((e=>e.value.raw)).join("");if(void 0!==e.value)return e.value+"";return""}(i):i&&p(i)&&(x=i.name);if(void 0===x)return;x=v(x),(i=l(x))[o]=!0;return function(e,t,r,i){if(e.selfReference){if(!i.hasBinding(r.name)||i.hasGlobal(r.name)){if(!c(t))return;let e=E;t.generator&&(e=T);const s=e({FUNCTION:t,FUNCTION_ID:r,FUNCTION_KEY:i.generateUidIdentifier(r.name)}).expression,o=s.callee.body.body[0].params;for(let e=0,r=(0,n.default)(t);e<r;e++)o.push(i.generateUidIdentifier("x"));return s}i.rename(r.name)}t.id=r,i.getProgramParent().references[r.name]=!0}(function(e,t,r){const n={selfAssignment:!1,selfReference:!1,outerDeclar:r.getBindingIdentifier(t),references:[],name:t},i=r.getOwnBinding(t);i?"param"===i.kind&&(n.selfReference=!0):(n.outerDeclar||r.hasGlobal(t))&&r.traverse(e,S,n);return n}(e,x,r),e,i,r)||e};var n=r(5555),i=r(3198),s=r(666);const{NOT_LOCAL_BINDING:o,cloneNode:a,identifier:l,isAssignmentExpression:u,isFunction:c,isIdentifier:p,isLiteral:f,isNullLiteral:d,isObjectMethod:h,isObjectProperty:m,isRegExpLiteral:y,isTemplateLiteral:g,isVariableDeclarator:b,toBindingIdentifierName:v}=s,E=(0,i.default)("\n  (function (FUNCTION_KEY) {\n    function FUNCTION_ID() {\n      return FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    }\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n"),T=(0,i.default)("\n  (function (FUNCTION_KEY) {\n    function* FUNCTION_ID() {\n      return yield* FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    };\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n"),S={"ReferencedIdentifier|BindingIdentifier"(e,t){if(e.node.name!==t.name)return;e.scope.getBindingIdentifier(t.name)===t.outerDeclar&&(t.selfReference=!0,e.stop())}}},5555:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t=e.params;for(let e=0;e<t.length;e++){const r=t[e];if(i(r)||s(r))return e}return t.length};var n=r(666);const{isAssignmentPattern:i,isRestElement:s}=n},7631:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r="var"){e.traverse(a,{kind:r,emit:t})};var n=r(666);const{assignmentExpression:i,expressionStatement:s,identifier:o}=n,a={Scope(e,t){"let"===t.kind&&e.skip()},FunctionParent(e){e.skip()},VariableDeclaration(e,t){if(t.kind&&e.node.kind!==t.kind)return;const r=[],n=e.get("declarations");let a;for(const e of n){a=e.node.id,e.node.init&&r.push(s(i("=",e.node.id,e.node.init)));for(const r of Object.keys(e.getBindingIdentifiers()))t.emit(o(r),r,null!==e.node.init)}e.parentPath.isFor({left:e.node})?e.replaceWith(a):e.replaceWithMultiple(r)}}},2349:(e,t,r)=>{"use strict";function n(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(666));function s(e){const t=e,{node:r,parentPath:n}=t;if(n.isLogicalExpression()){const{operator:e,right:t}=n.node;if("&&"===e||"||"===e||"??"===e&&r===t)return s(n)}if(n.isSequenceExpression()){const{expressions:e}=n.node;return e[e.length-1]!==r||s(n)}return n.isConditional({test:r})||n.isUnaryExpression({operator:"!"})||n.isLoop({test:r})}const{LOGICAL_OPERATORS:o,arrowFunctionExpression:a,assignmentExpression:l,binaryExpression:u,booleanLiteral:c,callExpression:p,cloneNode:f,conditionalExpression:d,identifier:h,isMemberExpression:m,isOptionalCallExpression:y,isOptionalMemberExpression:g,isUpdateExpression:b,logicalExpression:v,memberExpression:E,nullLiteral:T,numericLiteral:S,optionalCallExpression:x,optionalMemberExpression:A,sequenceExpression:w,unaryExpression:P}=i;class C{constructor(){this._map=void 0,this._map=new WeakMap}has(e){return this._map.has(e)}get(e){if(!this.has(e))return;const t=this._map.get(e),{value:r}=t;return t.count--,0===t.count?l("=",r,e):r}set(e,t,r){return this._map.set(e,{count:r,value:t})}}function D(e,t){const{node:r}=e;if(g(r))return E(t,r.property,r.computed);if(e.isOptionalCallExpression()){const r=e.get("callee");if(e.node.optional&&r.isOptionalMemberExpression()){const{object:n}=r.node,i=e.scope.maybeGenerateMemoised(n)||n;return r.get("object").replaceWith(l("=",i,n)),p(E(t,h("call")),[i,...e.node.arguments])}return p(t,e.node.arguments)}return e.node}const O={memoise(){},handle(e,t){const{node:r,parent:n,parentPath:i,scope:E}=e;if(e.isOptionalMemberExpression()){if(function(e){for(;e&&!e.isProgram();){const{parentPath:t,container:r,listKey:n}=e,i=t.node;if(n){if(r!==i[n])return!0}else if(r!==i)return!0;e=t}return!1}(e))return;const o=e.find((({node:t,parent:r})=>g(r)?r.optional||r.object!==t:!y(r)||(t!==e.node&&r.optional||r.callee!==t)));if(E.path.isPattern())return void o.replaceWith(p(a([],o.node),[]));const b=s(o),S=o.parentPath;if(S.isUpdateExpression({argument:r})||S.isAssignmentExpression({left:r}))throw e.buildCodeFrameError("can't handle assignment");const w=S.isUnaryExpression({operator:"delete"});if(w&&o.isOptionalMemberExpression()&&o.get("property").isPrivateName())throw e.buildCodeFrameError("can't delete a private class element");let P=e;for(;;)if(P.isOptionalMemberExpression()){if(P.node.optional)break;P=P.get("object")}else{if(!P.isOptionalCallExpression())throw new Error(`Internal error: unexpected ${P.node.type}`);if(P.node.optional)break;P=P.get("callee")}const C=P.isOptionalMemberExpression()?"object":"callee",O=P.node[C],k=E.maybeGenerateMemoised(O),N=null!=k?k:O,I=i.isOptionalCallExpression({callee:r}),F=e=>I,_=i.isCallExpression({callee:r});P.replaceWith(D(P,N)),F()?n.optional?i.replaceWith(this.optionalCall(e,n.arguments)):i.replaceWith(this.call(e,n.arguments)):_?e.replaceWith(this.boundGet(e)):e.replaceWith(this.get(e));let B,L=e.node;for(let t=e;t!==o;){const e=t.parentPath;if(e===o&&F()&&n.optional){L=e.node;break}L=D(e,L),t=e}const M=o.parentPath;if(m(L)&&M.isOptionalCallExpression({callee:o.node,optional:!0})){const{object:t}=L;B=e.scope.maybeGenerateMemoised(t),B&&(L.object=l("=",B,t))}let j=o;w&&(j=M,L=M.node);const R=k?l("=",f(N),f(O)):f(N);if(b){let e;e=t?u("!=",R,T()):v("&&",u("!==",R,T()),u("!==",f(N),E.buildUndefinedNode())),j.replaceWith(v("&&",e,L))}else{let e;e=t?u("==",R,T()):v("||",u("===",R,T()),u("===",f(N),E.buildUndefinedNode())),j.replaceWith(d(e,w?c(!0):E.buildUndefinedNode(),L))}if(B){const e=M.node;M.replaceWith(x(A(e.callee,h("call"),!1,!0),[f(B),...e.arguments],!1))}}else if(b(n,{argument:r})){if(this.simpleSet)return void e.replaceWith(this.simpleSet(e));const{operator:t,prefix:s}=n;this.memoise(e,2);const o=u(t[0],P("+",this.get(e)),S(1));if(s)i.replaceWith(this.set(e,o));else{const{scope:t}=e,n=t.generateUidIdentifierBasedOnNode(r);t.push({id:n}),o.left=l("=",f(n),o.left),i.replaceWith(w([this.set(e,o),f(n)]))}}else if(i.isAssignmentExpression({left:r})){if(this.simpleSet)return void e.replaceWith(this.simpleSet(e));const{operator:t,right:r}=i.node;if("="===t)i.replaceWith(this.set(e,r));else{const n=t.slice(0,-1);o.includes(n)?(this.memoise(e,1),i.replaceWith(v(n,this.get(e),this.set(e,r)))):(this.memoise(e,2),i.replaceWith(this.set(e,u(n,this.get(e),r))))}}else{if(!i.isCallExpression({callee:r}))return i.isOptionalCallExpression({callee:r})?E.path.isPattern()?void i.replaceWith(p(a([],i.node),[])):void i.replaceWith(this.optionalCall(e,i.node.arguments)):void(i.isForXStatement({left:r})||i.isObjectProperty({value:r})&&i.parentPath.isObjectPattern()||i.isAssignmentPattern({left:r})&&i.parentPath.isObjectProperty({value:n})&&i.parentPath.parentPath.isObjectPattern()||i.isArrayPattern()||i.isAssignmentPattern({left:r})&&i.parentPath.isArrayPattern()||i.isRestElement()?e.replaceWith(this.destructureSet(e)):i.isTaggedTemplateExpression()?e.replaceWith(this.boundGet(e)):e.replaceWith(this.get(e)));i.replaceWith(this.call(e,i.node.arguments))}}};t.default=function(e,t,r){e.traverse(t,Object.assign({},O,r,{memoiser:new C}))}},4495:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(9619),i=r(666);const{callExpression:s,cloneNode:o,expressionStatement:a,identifier:l,importDeclaration:u,importDefaultSpecifier:c,importNamespaceSpecifier:p,importSpecifier:f,memberExpression:d,stringLiteral:h,variableDeclaration:m,variableDeclarator:y}=i;t.default=class{constructor(e,t,r){this._statements=[],this._resultName=null,this._scope=null,this._hub=null,this._importedSource=void 0,this._scope=t,this._hub=r,this._importedSource=e}done(){return{statements:this._statements,resultName:this._resultName}}import(){return this._statements.push(u([],h(this._importedSource))),this}require(){return this._statements.push(a(s(l("require"),[h(this._importedSource)]))),this}namespace(e="namespace"){const t=this._scope.generateUidIdentifier(e),r=this._statements[this._statements.length-1];return n("ImportDeclaration"===r.type),n(0===r.specifiers.length),r.specifiers=[p(t)],this._resultName=o(t),this}default(e){e=this._scope.generateUidIdentifier(e);const t=this._statements[this._statements.length-1];return n("ImportDeclaration"===t.type),n(0===t.specifiers.length),t.specifiers=[c(e)],this._resultName=o(e),this}named(e,t){if("default"===t)return this.default(e);e=this._scope.generateUidIdentifier(e);const r=this._statements[this._statements.length-1];return n("ImportDeclaration"===r.type),n(0===r.specifiers.length),r.specifiers=[f(e,l(t))],this._resultName=o(e),this}var(e){e=this._scope.generateUidIdentifier(e);let t=this._statements[this._statements.length-1];return"ExpressionStatement"!==t.type&&(n(this._resultName),t=a(this._resultName),this._statements.push(t)),this._statements[this._statements.length-1]=m("var",[y(e,t.expression)]),this._resultName=o(e),this}defaultInterop(){return this._interop(this._hub.addHelper("interopRequireDefault"))}wildcardInterop(){return this._interop(this._hub.addHelper("interopRequireWildcard"))}_interop(e){const t=this._statements[this._statements.length-1];return"ExpressionStatement"===t.type?t.expression=s(e,[t.expression]):"VariableDeclaration"===t.type?(n(1===t.declarations.length),t.declarations[0].init=s(e,[t.declarations[0].init])):n.fail("Unexpected type."),this}prop(e){const t=this._statements[this._statements.length-1];return"ExpressionStatement"===t.type?t.expression=d(t.expression,l(e)):"VariableDeclaration"===t.type?(n(1===t.declarations.length),t.declarations[0].init=d(t.declarations[0].init,l(e))):n.fail("Unexpected type:"+t.type),this}read(e){this._resultName=d(this._resultName,l(e))}}},1310:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(9619),i=r(666),s=r(4495),o=r(9171);const{numericLiteral:a,sequenceExpression:l}=i;t.default=class{constructor(e,t,r){this._defaultOpts={importedSource:null,importedType:"commonjs",importedInterop:"babel",importingInterop:"babel",ensureLiveReference:!1,ensureNoContext:!1,importPosition:"before"};const n=e.find((e=>e.isProgram()));this._programPath=n,this._programScope=n.scope,this._hub=n.hub,this._defaultOpts=this._applyDefaults(t,r,!0)}addDefault(e,t){return this.addNamed("default",e,t)}addNamed(e,t,r){return n("string"==typeof e),this._generateImport(this._applyDefaults(t,r),e)}addNamespace(e,t){return this._generateImport(this._applyDefaults(e,t),null)}addSideEffect(e,t){return this._generateImport(this._applyDefaults(e,t),!1)}_applyDefaults(e,t,r=!1){const i=[];"string"==typeof e?(i.push({importedSource:e}),i.push(t)):(n(!t,"Unexpected secondary arguments."),i.push(e));const s=Object.assign({},this._defaultOpts);for(const e of i)e&&(Object.keys(s).forEach((t=>{void 0!==e[t]&&(s[t]=e[t])})),r||(void 0!==e.nameHint&&(s.nameHint=e.nameHint),void 0!==e.blockHoist&&(s.blockHoist=e.blockHoist)));return s}_generateImport(e,t){const r="default"===t,n=!!t&&!r,i=null===t,{importedSource:u,importedType:c,importedInterop:p,importingInterop:f,ensureLiveReference:d,ensureNoContext:h,nameHint:m,importPosition:y,blockHoist:g}=e;let b=m||t;const v=(0,o.default)(this._programPath),E=v&&"node"===f,T=v&&"babel"===f;if("after"===y&&!v)throw new Error('"importPosition": "after" is only supported in modules');const S=new s.default(u,this._programScope,this._hub);if("es6"===c){if(!E&&!T)throw new Error("Cannot import an ES6 module from CommonJS");S.import(),i?S.namespace(m||u):(r||n)&&S.named(b,t)}else{if("commonjs"!==c)throw new Error(`Unexpected interopType "${c}"`);if("babel"===p)if(E){b="default"!==b?b:u;const e=`${u}$es6Default`;S.import(),i?S.default(e).var(b||u).wildcardInterop():r?d?S.default(e).var(b||u).defaultInterop().read("default"):S.default(e).var(b).defaultInterop().prop(t):n&&S.default(e).read(t)}else T?(S.import(),i?S.namespace(b||u):(r||n)&&S.named(b,t)):(S.require(),i?S.var(b||u).wildcardInterop():(r||n)&&d?r?(b="default"!==b?b:u,S.var(b).read(t),S.defaultInterop()):S.var(u).read(t):r?S.var(b).defaultInterop().prop(t):n&&S.var(b).prop(t));else if("compiled"===p)E?(S.import(),i?S.default(b||u):(r||n)&&S.default(u).read(b)):T?(S.import(),i?S.namespace(b||u):(r||n)&&S.named(b,t)):(S.require(),i?S.var(b||u):(r||n)&&(d?S.var(u).read(b):S.prop(t).var(b)));else{if("uncompiled"!==p)throw new Error(`Unknown importedInterop "${p}".`);if(r&&d)throw new Error("No live reference for commonjs default");E?(S.import(),i?S.default(b||u):r?S.default(b):n&&S.default(u).read(b)):T?(S.import(),i?S.default(b||u):r?S.default(b):n&&S.named(b,t)):(S.require(),i?S.var(b||u):r?S.var(b):n&&(d?S.var(u).read(b):S.var(b).prop(t)))}}const{statements:x,resultName:A}=S.done();return this._insertStatements(x,y,g),(r||n)&&h&&"Identifier"!==A.type?l([a(0),A]):A}_insertStatements(e,t="before",r=3){const n=this._programPath.get("body");if("after"===t){for(let t=n.length-1;t>=0;t--)if(n[t].isImportDeclaration())return void n[t].insertAfter(e)}else{e.forEach((e=>{e._blockHoist=r}));const t=n.find((e=>{const t=e.node._blockHoist;return Number.isFinite(t)&&t<4}));if(t)return void t.insertBefore(e)}this._programPath.unshiftContainer("body",e)}}},6065:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImportInjector",{enumerable:!0,get:function(){return n.default}}),t.addDefault=function(e,t,r){return new n.default(e).addDefault(t,r)},t.addNamed=function(e,t,r,i){return new n.default(e).addNamed(t,r,i)},t.addNamespace=function(e,t,r){return new n.default(e).addNamespace(t,r)},t.addSideEffect=function(e,t,r){return new n.default(e).addSideEffect(t,r)},Object.defineProperty(t,"isModule",{enumerable:!0,get:function(){return i.default}});var n=r(1310),i=r(9171)},9171:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const{sourceType:t}=e.node;if("module"!==t&&"script"!==t)throw e.buildCodeFrameError(`Unknown sourceType "${t}", cannot transform.`);return"module"===e.node.sourceType}},1078:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;{const e=r;t.default=r=function(t,r){var n,i,s,o;return e(t,{moduleId:null!=(n=r.moduleId)?n:t.moduleId,moduleIds:null!=(i=r.moduleIds)?i:t.moduleIds,getModuleId:null!=(s=r.getModuleId)?s:t.getModuleId,moduleRoot:null!=(o=r.moduleRoot)?o:t.moduleRoot})}}function r(e,t){const{filename:r,filenameRelative:n=r,sourceRoot:i=t.moduleRoot}=e,{moduleId:s,moduleIds:o=!!s,getModuleId:a,moduleRoot:l=i}=t;if(!o)return null;if(null!=s&&!a)return s;let u=null!=l?l+"/":"";if(n){const e=null!=i?new RegExp("^"+i+"/?"):"";u+=n.replace(e,"").replace(/\.(\w*?)$/,"")}return u=u.replace(/\\/g,"/"),a&&a(u)||u}},18:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildNamespaceInitStatements=function(e,t,r=!1){const n=[];let i=g(t.name);t.lazy&&(i=f(i,[]));for(const e of t.importsNamespace)e!==t.name&&n.push(s.default.statement`var NAME = SOURCE;`({NAME:e,SOURCE:d(i)}));r&&n.push(...w(e,t,!0));for(const r of t.reexportNamespace)n.push((t.lazy?s.default.statement`
            Object.defineProperty(EXPORTS, "NAME", {
              enumerable: true,
              get: function() {
                return NAMESPACE;
              }
            });
          `:s.default.statement`EXPORTS.NAME = NAMESPACE;`)({EXPORTS:e.exportName,NAME:r,NAMESPACE:d(i)}));if(t.reexportAll){const o=function(e,t,r){return(r?s.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;
          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;

          EXPORTS[key] = NAMESPACE[key];
        });
      `:s.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;
          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;

          Object.defineProperty(EXPORTS, key, {
            enumerable: true,
            get: function() {
              return NAMESPACE[key];
            },
          });
        });
    `)({NAMESPACE:t,EXPORTS:e.exportName,VERIFY_NAME_LIST:e.exportNameListName?s.default`
            if (Object.prototype.hasOwnProperty.call(EXPORTS_LIST, key)) return;
          `({EXPORTS_LIST:e.exportNameListName}):null})}(e,d(i),r);o.loc=t.reexportAll.loc,n.push(o)}return n},t.ensureStatementsHoisted=function(e){e.forEach((e=>{e._blockHoist=3}))},Object.defineProperty(t,"getModuleName",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"hasExports",{enumerable:!0,get:function(){return u.hasExports}}),Object.defineProperty(t,"isModule",{enumerable:!0,get:function(){return o.isModule}}),Object.defineProperty(t,"isSideEffectImport",{enumerable:!0,get:function(){return u.isSideEffectImport}}),t.rewriteModuleStatementsAndPrepareHeader=function(e,{loose:t,exportName:r,strict:i,allowTopLevelThis:c,strictMode:p,noInterop:f,importInterop:d=(f?"none":"babel"),lazy:y,esNamespaceOnly:b,constantReexports:v=t,enumerableModuleMeta:E=t,noIncompleteNsImportDetection:A}){(0,u.validateImportInteropOption)(d),n((0,o.isModule)(e),"Cannot process module statements in a script"),e.node.sourceType="script";const P=(0,u.default)(e,r,{importInterop:d,initializeReexports:v,lazy:y,esNamespaceOnly:b});c||(0,a.default)(e);if((0,l.default)(e,P),!1!==p){const t=e.node.directives.some((e=>"use strict"===e.value.value));t||e.unshiftContainer("directives",h(m("use strict")))}const D=[];(0,u.hasExports)(P)&&!i&&D.push(function(e,t=!1){return(t?s.default.statement`
        EXPORTS.__esModule = true;
      `:s.default.statement`
        Object.defineProperty(EXPORTS, "__esModule", {
          value: true,
        });
      `)({EXPORTS:e.exportName})}(P,E));const O=function(e,t){const r=Object.create(null);for(const e of t.local.values())for(const t of e.names)r[t]=!0;let n=!1;for(const e of t.source.values()){for(const t of e.reexports.keys())r[t]=!0;for(const t of e.reexportNamespace)r[t]=!0;n=n||!!e.reexportAll}if(!n||0===Object.keys(r).length)return null;const i=e.scope.generateUidIdentifier("exportNames");return delete r.default,{name:i.name,statement:S("var",[x(i,T(r))])}}(e,P);O&&(P.exportNameListName=O.name,D.push(O.statement));return D.push(...function(e,t,r=!1,n=!1){const i=[];for(const[e,r]of t.local)if("import"===r.kind);else if("hoisted"===r.kind)i.push([r.names[0],C(t,r.names,g(e))]);else if(!n)for(const e of r.names)i.push([e,null]);for(const e of t.source.values()){if(!r){const r=w(t,e,!1),n=[...e.reexports.keys()];for(let e=0;e<r.length;e++)i.push([n[e],r[e]])}if(!n)for(const t of e.reexportNamespace)i.push([t,null])}i.sort(((e,t)=>e[0]>t[0]?1:-1));const s=[];if(n)for(const[,e]of i)s.push(e);else{const r=100;for(let n=0,o=[];n<i.length;n+=r){for(let a=0;a<r&&n+a<i.length;a++){const[r,l]=i[n+a];null!==l?(o.length>0&&(s.push(C(t,o,e.scope.buildUndefinedNode())),o=[]),s.push(l)):o.push(r)}o.length>0&&s.push(C(t,o,e.scope.buildUndefinedNode()))}}return s}(e,P,v,A)),{meta:P,headers:D}},Object.defineProperty(t,"rewriteThis",{enumerable:!0,get:function(){return a.default}}),t.wrapInterop=function(e,t,r){if("none"===r)return null;if("node-namespace"===r)return f(e.hub.addHelper("interopRequireWildcard"),[t,p(!0)]);if("node-default"===r)return null;let n;if("default"===r)n="interopRequireDefault";else{if("namespace"!==r)throw new Error(`Unknown interop: ${r}`);n="interopRequireWildcard"}return f(e.hub.addHelper(n),[t])};var n=r(9619),i=r(666),s=r(3198),o=r(6065),a=r(4275),l=r(8215),u=r(1209),c=r(1078);const{booleanLiteral:p,callExpression:f,cloneNode:d,directive:h,directiveLiteral:m,expressionStatement:y,identifier:g,isIdentifier:b,memberExpression:v,stringLiteral:E,valueToNode:T,variableDeclaration:S,variableDeclarator:x}=i;const A={constant:s.default.statement`EXPORTS.EXPORT_NAME = NAMESPACE_IMPORT;`,constantComputed:s.default.statement`EXPORTS["EXPORT_NAME"] = NAMESPACE_IMPORT;`,spec:s.default.statement`
    Object.defineProperty(EXPORTS, "EXPORT_NAME", {
      enumerable: true,
      get: function() {
        return NAMESPACE_IMPORT;
      },
    });
    `},w=(e,t,r)=>{const n=t.lazy?f(g(t.name),[]):g(t.name),{stringSpecifiers:i}=e;return Array.from(t.reexports,(([s,o])=>{let a=d(n);"default"===o&&"node-default"===t.interop||(a=i.has(o)?v(a,E(o),!0):v(a,g(o)));const l={EXPORTS:e.exportName,EXPORT_NAME:s,NAMESPACE_IMPORT:a};return r||b(a)?i.has(s)?A.constantComputed(l):A.constant(l):A.spec(l)}))};const P={computed:s.default.expression`EXPORTS["NAME"] = VALUE`,default:s.default.expression`EXPORTS.NAME = VALUE`};function C(e,t,r){const{stringSpecifiers:n,exportName:i}=e;return y(t.reduce(((e,t)=>{const r={EXPORTS:i,NAME:t,VALUE:e};return n.has(t)?P.computed(r):P.default(r)}),r))}},1209:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,{importInterop:r,initializeReexports:i=!1,lazy:a=!1,esNamespaceOnly:p=!1}){t||(t=e.scope.generateUidIdentifier("exports").name);const f=new Set;!function(e){e.get("body").forEach((e=>{e.isExportDefaultDeclaration()&&(0,s.default)(e)}))}(e);const{local:d,source:h,hasExports:m}=function(e,{lazy:t,initializeReexports:r},i){const s=function(e,t,r){const n=new Map;e.get("body").forEach((e=>{let r;if(e.isImportDeclaration())r="import";else{if(e.isExportDefaultDeclaration()&&(e=e.get("declaration")),e.isExportNamedDeclaration())if(e.node.declaration)e=e.get("declaration");else if(t&&e.node.source&&e.get("source").isStringLiteral())return void e.get("specifiers").forEach((e=>{c(e),n.set(e.get("local").node.name,"block")}));if(e.isFunctionDeclaration())r="hoisted";else if(e.isClassDeclaration())r="block";else if(e.isVariableDeclaration({kind:"var"}))r="var";else{if(!e.isVariableDeclaration())return;r="block"}}Object.keys(e.getOuterBindingIdentifiers()).forEach((e=>{n.set(e,r)}))}));const i=new Map,s=e=>{const t=e.node.name;let r=i.get(t);if(!r){const s=n.get(t);if(void 0===s)throw e.buildCodeFrameError(`Exporting local "${t}", which is not declared.`);r={names:[],kind:s},i.set(t,r)}return r};return e.get("body").forEach((e=>{if(!e.isExportNamedDeclaration()||!t&&e.node.source){if(e.isExportDefaultDeclaration()){const t=e.get("declaration");if(!t.isFunctionDeclaration()&&!t.isClassDeclaration())throw t.buildCodeFrameError("Unexpected default expression export.");s(t.get("id")).names.push("default")}}else if(e.node.declaration){const t=e.get("declaration"),r=t.getOuterBindingIdentifierPaths();Object.keys(r).forEach((e=>{if("__esModule"===e)throw t.buildCodeFrameError('Illegal export "__esModule".');s(r[e]).names.push(e)}))}else e.get("specifiers").forEach((e=>{const t=e.get("local"),n=e.get("exported"),i=s(t),o=u(n,r);if("__esModule"===o)throw n.buildCodeFrameError('Illegal export "__esModule".');i.names.push(o)}))})),i}(e,r,i),a=new Map,l=t=>{const r=t.value;let i=a.get(r);return i||(i={name:e.scope.generateUidIdentifier((0,n.basename)(r,(0,n.extname)(r))).name,interop:"none",loc:null,imports:new Map,importsNamespace:new Set,reexports:new Map,reexportNamespace:new Set,reexportAll:null,lazy:!1,source:r},a.set(r,i)),i};let p=!1;e.get("body").forEach((e=>{if(e.isImportDeclaration()){const t=l(e.node.source);t.loc||(t.loc=e.node.loc),e.get("specifiers").forEach((e=>{if(e.isImportDefaultSpecifier()){const r=e.get("local").node.name;t.imports.set(r,"default");const n=s.get(r);n&&(s.delete(r),n.names.forEach((e=>{t.reexports.set(e,"default")})))}else if(e.isImportNamespaceSpecifier()){const r=e.get("local").node.name;t.importsNamespace.add(r);const n=s.get(r);n&&(s.delete(r),n.names.forEach((e=>{t.reexportNamespace.add(e)})))}else if(e.isImportSpecifier()){const r=u(e.get("imported"),i),n=e.get("local").node.name;t.imports.set(n,r);const o=s.get(n);o&&(s.delete(n),o.names.forEach((e=>{t.reexports.set(e,r)})))}}))}else if(e.isExportAllDeclaration()){p=!0;const t=l(e.node.source);t.loc||(t.loc=e.node.loc),t.reexportAll={loc:e.node.loc}}else if(e.isExportNamedDeclaration()&&e.node.source){p=!0;const t=l(e.node.source);t.loc||(t.loc=e.node.loc),e.get("specifiers").forEach((e=>{c(e);const r=u(e.get("local"),i),n=u(e.get("exported"),i);if(t.reexports.set(n,r),"__esModule"===n)throw e.get("exported").buildCodeFrameError('Illegal export "__esModule".')}))}else(e.isExportNamedDeclaration()||e.isExportDefaultDeclaration())&&(p=!0)}));for(const e of a.values()){let t=!1,r=!1;e.importsNamespace.size>0&&(t=!0,r=!0),e.reexportAll&&(r=!0);for(const n of e.imports.values())"default"===n?t=!0:r=!0;for(const n of e.reexports.values())"default"===n?t=!0:r=!0;t&&r?e.interop="namespace":t&&(e.interop="default")}for(const[e,r]of a)if(!1!==t&&!o(r)&&!r.reexportAll)if(!0===t)r.lazy=!/\./.test(e);else if(Array.isArray(t))r.lazy=-1!==t.indexOf(e);else{if("function"!=typeof t)throw new Error(".lazy must be a boolean, string array, or function");r.lazy=t(e)}return{hasExports:p,local:s,source:a}}(e,{initializeReexports:i,lazy:a},f);!function(e){e.get("body").forEach((e=>{if(e.isImportDeclaration())e.remove();else if(e.isExportNamedDeclaration())e.node.declaration?(e.node.declaration._blockHoist=e.node._blockHoist,e.replaceWith(e.node.declaration)):e.remove();else if(e.isExportDefaultDeclaration()){const t=e.get("declaration");if(!t.isFunctionDeclaration()&&!t.isClassDeclaration())throw t.buildCodeFrameError("Unexpected default expression export.");t._blockHoist=e.node._blockHoist,e.replaceWith(t)}else e.isExportAllDeclaration()&&e.remove()}))}(e);for(const[,e]of h){e.importsNamespace.size>0&&(e.name=e.importsNamespace.values().next().value);const t=l(r,e.source);"none"===t?e.interop="none":"node"===t&&"namespace"===e.interop?e.interop="node-namespace":"node"===t&&"default"===e.interop?e.interop="node-default":p&&"namespace"===e.interop&&(e.interop="default")}return{exportName:t,exportNameListName:null,hasExports:m,local:d,source:h,stringSpecifiers:f}},t.hasExports=function(e){return e.hasExports},t.isSideEffectImport=o,t.validateImportInteropOption=a;var n=r(7425),i=r(9762),s=r(9860);function o(e){return 0===e.imports.size&&0===e.importsNamespace.size&&0===e.reexports.size&&0===e.reexportNamespace.size&&!e.reexportAll}function a(e){if("function"!=typeof e&&"none"!==e&&"babel"!==e&&"node"!==e)throw new Error(`.importInterop must be one of "none", "babel", "node", or a function returning one of those values (received ${e}).`);return e}function l(e,t){return"function"==typeof e?a(e(t)):e}function u(e,t){if(e.isIdentifier())return e.node.name;if(e.isStringLiteral()){const r=e.node.value;return(0,i.isIdentifierName)(r)||t.add(r),r}throw new Error(`Expected export specifier to be either Identifier or StringLiteral, got ${e.node.type}`)}function c(e){if(!e.isExportSpecifier())throw e.isExportNamespaceSpecifier()?e.buildCodeFrameError("Export namespace should be first transformed by `@babel/plugin-proposal-export-namespace-from`."):e.buildCodeFrameError("Unexpected export specifier type")}},8215:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const r=new Map,n=new Map,i=t=>{e.requeue(t)};for(const[e,n]of t.source){for(const[t,i]of n.imports)r.set(t,[e,i,null]);for(const t of n.importsNamespace)r.set(t,[e,null,t])}for(const[e,r]of t.local){let t=n.get(e);t||(t=[],n.set(e,t)),t.push(...r.names)}const s={metadata:t,requeueInParent:i,scope:e.scope,exported:n};e.traverse(x,s),(0,o.default)(e,new Set([...Array.from(r.keys()),...Array.from(n.keys())]));const a={seen:new WeakSet,metadata:t,requeueInParent:i,scope:e.scope,imported:r,exported:n,buildImportReference:([e,r,n],i)=>{const s=t.source.get(e);if(n)return s.lazy&&(i=l(i,[])),i;let o=f(s.name);if(s.lazy&&(o=l(o,[])),"default"===r&&"node-default"===s.interop)return o;const a=t.stringSpecifiers.has(r);return g(o,a?E(r):f(r),a)}};e.traverse(P,a)};var n=r(9619),i=r(666),s=r(3198),o=r(1234);const{assignmentExpression:a,callExpression:l,cloneNode:u,expressionStatement:c,getOuterBindingIdentifiers:p,identifier:f,isMemberExpression:d,isVariableDeclaration:h,jsxIdentifier:m,jsxMemberExpression:y,memberExpression:g,numericLiteral:b,sequenceExpression:v,stringLiteral:E,variableDeclaration:T,variableDeclarator:S}=i;const x={Scope(e){e.skip()},ClassDeclaration(e){const{requeueInParent:t,exported:r,metadata:n}=this,{id:i}=e.node;if(!i)throw new Error("Expected class to have a name");const s=i.name,o=r.get(s)||[];if(o.length>0){const r=c(A(n,o,f(s)));r._blockHoist=e.node._blockHoist,t(e.insertAfter(r)[0])}},VariableDeclaration(e){const{requeueInParent:t,exported:r,metadata:n}=this;Object.keys(e.getOuterBindingIdentifiers()).forEach((i=>{const s=r.get(i)||[];if(s.length>0){const r=c(A(n,s,f(i)));r._blockHoist=e.node._blockHoist,t(e.insertAfter(r)[0])}}))}},A=(e,t,r)=>(t||[]).reduce(((t,r)=>{const{stringSpecifiers:n}=e,i=n.has(r);return a("=",g(f(e.exportName),i?E(r):f(r),i),t)}),r),w=e=>s.default.expression.ast`
    (function() {
      throw new Error('"' + '${e}' + '" is read-only.');
    })()
  `,P={ReferencedIdentifier(e){const{seen:t,buildImportReference:r,scope:n,imported:i,requeueInParent:s}=this;if(t.has(e.node))return;t.add(e.node);const o=e.node.name,a=i.get(o);if(a){if(function(e){do{switch(e.parent.type){case"TSTypeAnnotation":case"TSTypeAliasDeclaration":case"TSTypeReference":case"TypeAnnotation":case"TypeAlias":return!0;case"ExportSpecifier":return"type"===e.parentPath.parent.exportKind;default:if(e.parentPath.isStatement()||e.parentPath.isExpression())return!1}}while(e=e.parentPath)}(e))throw e.buildCodeFrameError(`Cannot transform the imported binding "${o}" since it's also used in a type annotation. Please strip type annotations using @babel/preset-typescript or @babel/preset-flow.`);const t=e.scope.getBinding(o);if(n.getBinding(o)!==t)return;const i=r(a,e.node);if(i.loc=e.node.loc,(e.parentPath.isCallExpression({callee:e.node})||e.parentPath.isOptionalCallExpression({callee:e.node})||e.parentPath.isTaggedTemplateExpression({tag:e.node}))&&d(i))e.replaceWith(v([b(0),i]));else if(e.isJSXIdentifier()&&d(i)){const{object:t,property:r}=i;e.replaceWith(y(m(t.name),m(r.name)))}else e.replaceWith(i);s(e),e.skip()}},AssignmentExpression:{exit(e){const{scope:t,seen:r,imported:i,exported:s,requeueInParent:o,buildImportReference:a}=this;if(r.has(e.node))return;r.add(e.node);const l=e.get("left");if(!l.isMemberExpression())if(l.isIdentifier()){const r=l.node.name;if(t.getBinding(r)!==e.scope.getBinding(r))return;const u=s.get(r),c=i.get(r);if((null==u?void 0:u.length)>0||c){n("="===e.node.operator,"Path was not simplified");const t=e.node;c&&(t.left=a(c,t.left),t.right=v([t.right,w(r)])),e.replaceWith(A(this.metadata,u,t)),o(e)}}else{const r=l.getOuterBindingIdentifiers(),n=Object.keys(r).filter((r=>t.getBinding(r)===e.scope.getBinding(r))),a=n.find((e=>i.has(e)));a&&(e.node.right=v([e.node.right,w(a)]));const u=[];if(n.forEach((e=>{const t=s.get(e)||[];t.length>0&&u.push(A(this.metadata,t,f(e)))})),u.length>0){let t=v(u);e.parentPath.isExpressionStatement()&&(t=c(t),t._blockHoist=e.parentPath.node._blockHoist);o(e.insertAfter(t)[0])}}}},"ForOfStatement|ForInStatement"(e){const{scope:t,node:r}=e,{left:n}=r,{exported:i,imported:s,scope:o}=this;if(!h(n)){let r,l=!1;const f=e.get("body").scope;for(const e of Object.keys(p(n)))o.getBinding(e)===t.getBinding(e)&&(i.has(e)&&(l=!0,f.hasOwnBinding(e)&&f.rename(e)),s.has(e)&&!r&&(r=e));if(!l&&!r)return;e.ensureBlock();const d=e.get("body"),h=t.generateUidIdentifierBasedOnNode(n);e.get("left").replaceWith(T("let",[S(u(h))])),t.registerDeclaration(e.get("left")),l&&d.unshiftContainer("body",c(a("=",n,h))),r&&d.unshiftContainer("body",c(w(r)))}}}},4275:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,i.default)(e.node,Object.assign({},l,{noScope:!0}))};var n=r(4734),i=r(1785),s=r(666);const{numericLiteral:o,unaryExpression:a}=s;const l=i.default.visitors.merge([n.environmentVisitor,{ThisExpression(e){e.replaceWith(a("void",o(0),!0))}}])},152:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,n){return 1===r.length&&a(r[0])&&o(r[0].argument,{name:"arguments"})?n?u(c(e,s("apply"),!1,!0),[t,r[0].argument],!1):i(l(e,s("apply")),[t,r[0].argument]):n?u(c(e,s("call"),!1,!0),[t,...r],!1):i(l(e,s("call")),[t,...r])};var n=r(666);const{callExpression:i,identifier:s,isIdentifier:o,isSpreadElement:a,memberExpression:l,optionalCallExpression:u,optionalMemberExpression:c}=n},4734:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.environmentVisitor=t.default=void 0,t.skipAllButComputedKey=v;var n=r(1785),i=r(2349),s=r(152),o=r(666);const{VISITOR_KEYS:a,assignmentExpression:l,booleanLiteral:u,callExpression:c,cloneNode:p,identifier:f,memberExpression:d,sequenceExpression:h,staticBlock:m,stringLiteral:y,thisExpression:g}=o;function b(e,t,r,n){e=p(e);const i=t||n?e:d(e,f("prototype"));return c(r.addHelper("getPrototypeOf"),[i])}function v(e){if(!e.node.computed)return void e.skip();const t=a[e.type];for(const r of t)"key"!==r&&e.skipKey(r)}const E={[(m?"StaticBlock|":"")+"ClassPrivateProperty|TypeAnnotation"](e){e.skip()},Function(e){e.isMethod()||e.isArrowFunctionExpression()||e.skip()},"Method|ClassProperty"(e){v(e)}};t.environmentVisitor=E;const T=n.default.visitors.merge([E,{Super(e,t){const{node:r,parentPath:n}=e;n.isMemberExpression({object:r})&&t.handle(n)}}]),S=n.default.visitors.merge([E,{Scopable(e,{refName:t}){const r=e.scope.getOwnBinding(t);r&&r.identifier.name===t&&e.scope.rename(t)}}]),x={memoise(e,t){const{scope:r,node:n}=e,{computed:i,property:s}=n;if(!i)return;const o=r.maybeGenerateMemoised(s);o&&this.memoiser.set(s,o,t)},prop(e){const{computed:t,property:r}=e.node;return this.memoiser.has(r)?p(this.memoiser.get(r)):t?p(r):y(r.name)},get(e){return this._get(e,this._getThisRefs())},_get(e,t){const r=b(this.getObjectRef(),this.isStatic,this.file,this.isPrivateMethod);return c(this.file.addHelper("get"),[t.memo?h([t.memo,r]):r,this.prop(e),t.this])},_getThisRefs(){if(!this.isDerivedConstructor)return{this:g()};const e=this.scope.generateDeclaredUidIdentifier("thisSuper");return{memo:l("=",e,g()),this:p(e)}},set(e,t){const r=this._getThisRefs(),n=b(this.getObjectRef(),this.isStatic,this.file,this.isPrivateMethod);return c(this.file.addHelper("set"),[r.memo?h([r.memo,n]):n,this.prop(e),t,r.this,u(e.isInStrictMode())])},destructureSet(e){throw e.buildCodeFrameError("Destructuring to a super field is not supported yet.")},call(e,t){const r=this._getThisRefs();return(0,s.default)(this._get(e,r),p(r.this),t,!1)},optionalCall(e,t){const r=this._getThisRefs();return(0,s.default)(this._get(e,r),p(r.this),t,!0)}},A=Object.assign({},x,{prop(e){const{property:t}=e.node;return this.memoiser.has(t)?p(this.memoiser.get(t)):p(t)},get(e){const{isStatic:t,getSuperRef:r}=this,{computed:n}=e.node,i=this.prop(e);let s;var o,a;t?s=null!=(o=r())?o:d(f("Function"),f("prototype")):s=d(null!=(a=r())?a:f("Object"),f("prototype"));return d(s,i,n)},set(e,t){const{computed:r}=e.node,n=this.prop(e);return l("=",d(g(),n,r),t)},destructureSet(e){const{computed:t}=e.node,r=this.prop(e);return d(g(),r,t)},call(e,t){return(0,s.default)(this.get(e),g(),t,!1)},optionalCall(e,t){return(0,s.default)(this.get(e),g(),t,!0)}});t.default=class{constructor(e){var t;const r=e.methodPath;this.methodPath=r,this.isDerivedConstructor=r.isClassMethod({kind:"constructor"})&&!!e.superRef,this.isStatic=r.isObjectMethod()||r.node.static||(null==r.isStaticBlock?void 0:r.isStaticBlock()),this.isPrivateMethod=r.isPrivate()&&r.isMethod(),this.file=e.file,this.constantSuper=null!=(t=e.constantSuper)?t:e.isLoose,this.opts=e}getObjectRef(){return p(this.opts.objectRef||this.opts.getObjectRef())}getSuperRef(){return this.opts.superRef?p(this.opts.superRef):this.opts.getSuperRef?p(this.opts.getSuperRef()):void 0}replace(){this.opts.refToPreserve&&this.methodPath.traverse(S,{refName:this.opts.refToPreserve.name});const e=this.constantSuper?A:x;(0,i.default)(this.methodPath,T,Object.assign({file:this.file,scope:this.methodPath.scope,isDerivedConstructor:this.isDerivedConstructor,isStatic:this.isStatic,isPrivateMethod:this.isPrivateMethod,getObjectRef:this.getObjectRef.bind(this),getSuperRef:this.getSuperRef.bind(this),boundGet:e.get},e))}}},1234:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){e.traverse(d,{scope:e.scope,bindingNames:t,seen:new WeakSet})};var n=r(666);const{LOGICAL_OPERATORS:i,assignmentExpression:s,binaryExpression:o,cloneNode:a,identifier:l,logicalExpression:u,numericLiteral:c,sequenceExpression:p,unaryExpression:f}=n;const d={UpdateExpression:{exit(e){const{scope:t,bindingNames:r}=this,n=e.get("argument");if(!n.isIdentifier())return;const i=n.node.name;if(r.has(i)&&t.getBinding(i)===e.scope.getBinding(i))if(e.parentPath.isExpressionStatement()&&!e.isCompletionRecord()){const t="++"==e.node.operator?"+=":"-=";e.replaceWith(s(t,n.node,c(1)))}else if(e.node.prefix)e.replaceWith(s("=",l(i),o(e.node.operator[0],f("+",n.node),c(1))));else{const t=e.scope.generateUidIdentifierBasedOnNode(n.node,"old"),r=t.name;e.scope.push({id:t});const i=o(e.node.operator[0],l(r),c(1));e.replaceWith(p([s("=",l(r),f("+",n.node)),s("=",a(n.node),i),l(r)]))}}},AssignmentExpression:{exit(e){const{scope:t,seen:r,bindingNames:n}=this;if("="===e.node.operator)return;if(r.has(e.node))return;r.add(e.node);const l=e.get("left");if(!l.isIdentifier())return;const c=l.node.name;if(!n.has(c))return;if(t.getBinding(c)!==e.scope.getBinding(c))return;const p=e.node.operator.slice(0,-1);i.includes(p)?e.replaceWith(u(p,e.node.left,s("=",a(e.node.left),e.node.right))):(e.node.right=o(p,a(e.node.left),e.node.right),e.node.operator="=")}}}},9860:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e.isExportDeclaration())throw new Error("Only export declarations can be split.");const t=e.isExportDefaultDeclaration(),r=e.get("declaration"),n=r.isClassDeclaration();if(t){const t=r.isFunctionDeclaration()||n,c=r.isScope()?r.scope.parent:r.scope;let p=r.node.id,f=!1;p||(f=!0,p=c.generateUidIdentifier("default"),(t||r.isFunctionExpression()||r.isClassExpression())&&(r.node.id=i(p)));const d=t?r:l("var",[u(i(p),r.node)]),h=s(null,[o(i(p),a("default"))]);return e.insertAfter(h),e.replaceWith(d),f&&c.registerDeclaration(e),e}if(e.get("specifiers").length>0)throw new Error("It doesn't make sense to split exported specifiers.");const c=r.getOuterBindingIdentifiers(),p=Object.keys(c).map((e=>o(a(e),a(e)))),f=s(null,p);return e.insertAfter(f),e.replaceWith(r.node),e};var n=r(666);const{cloneNode:i,exportNamedDeclaration:s,exportSpecifier:o,identifier:a,variableDeclaration:l,variableDeclarator:u}=n},1950:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isIdentifierStart=u,t.isIdentifierChar=c,t.isIdentifierName=function(e){let t=!0;for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);if(55296==(64512&n)&&r+1<e.length){const t=e.charCodeAt(++r);56320==(64512&t)&&(n=65536+((1023&n)<<10)+(1023&t))}if(t){if(t=!1,!u(n))return!1}else if(!c(n))return!1}return!t};let r="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",n="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿";const i=new RegExp("["+r+"]"),s=new RegExp("["+r+n+"]");r=n=null;const o=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,13,10,2,14,2,6,2,1,2,10,2,14,2,6,2,1,68,310,10,21,11,7,25,5,2,41,2,8,70,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,349,41,7,1,79,28,11,0,9,21,43,17,47,20,28,22,13,52,58,1,3,0,14,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,38,6,186,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,19,72,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,190,0,80,921,103,110,18,195,2637,96,16,1070,4050,582,8634,568,8,30,18,78,18,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,43,8,8936,3,2,6,2,1,2,290,46,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,1845,30,482,44,11,6,17,0,322,29,19,43,1269,6,2,3,2,1,2,14,2,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42719,33,4152,8,221,3,5761,15,7472,3104,541,1507,4938],a=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,370,1,154,10,50,3,123,2,54,14,32,10,3,1,11,3,46,10,8,0,46,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,87,9,39,4,60,6,26,9,1014,0,2,54,8,3,82,0,12,1,19628,1,4706,45,3,22,543,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,357,0,62,13,1495,6,110,6,6,9,4759,9,787719,239];function l(e,t){let r=65536;for(let n=0,i=t.length;n<i;n+=2){if(r+=t[n],r>e)return!1;if(r+=t[n+1],r>=e)return!0}return!1}function u(e){return e<65?36===e:e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&i.test(String.fromCharCode(e)):l(e,o)))}function c(e){return e<48?36===e:e<58||!(e<65)&&(e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&s.test(String.fromCharCode(e)):l(e,o)||l(e,a))))}},9762:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isIdentifierName",{enumerable:!0,get:function(){return n.isIdentifierName}}),Object.defineProperty(t,"isIdentifierChar",{enumerable:!0,get:function(){return n.isIdentifierChar}}),Object.defineProperty(t,"isIdentifierStart",{enumerable:!0,get:function(){return n.isIdentifierStart}}),Object.defineProperty(t,"isReservedWord",{enumerable:!0,get:function(){return i.isReservedWord}}),Object.defineProperty(t,"isStrictBindOnlyReservedWord",{enumerable:!0,get:function(){return i.isStrictBindOnlyReservedWord}}),Object.defineProperty(t,"isStrictBindReservedWord",{enumerable:!0,get:function(){return i.isStrictBindReservedWord}}),Object.defineProperty(t,"isStrictReservedWord",{enumerable:!0,get:function(){return i.isStrictReservedWord}}),Object.defineProperty(t,"isKeyword",{enumerable:!0,get:function(){return i.isKeyword}});var n=r(1950),i=r(750)},750:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isReservedWord=a,t.isStrictReservedWord=l,t.isStrictBindOnlyReservedWord=u,t.isStrictBindReservedWord=function(e,t){return l(e,t)||u(e)},t.isKeyword=function(e){return i.has(e)};const r=["implements","interface","let","package","private","protected","public","static","yield"],n=["eval","arguments"],i=new Set(["break","case","catch","continue","debugger","default","do","else","finally","for","function","if","return","switch","throw","try","var","const","while","with","new","this","super","class","extends","export","import","null","true","false","in","instanceof","typeof","void","delete"]),s=new Set(r),o=new Set(n);function a(e,t){return t&&"await"===e||"enum"===e}function l(e,t){return a(e,t)||s.has(e)}function u(e){return o.has(e)}},1714:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.findSuggestion=function(e,t){const n=t.map((t=>function(e,t){let n,i,s=[],o=[];const a=e.length,l=t.length;if(!a)return l;if(!l)return a;for(i=0;i<=l;i++)s[i]=i;for(n=1;n<=a;n++){for(o=[n],i=1;i<=l;i++)o[i]=e[n-1]===t[i-1]?s[i-1]:r(s[i-1],s[i],o[i-1])+1;s=o}return o[l]}(t,e)));return t[n.indexOf(r(...n))]};const{min:r}=Math},4393:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"OptionValidator",{enumerable:!0,get:function(){return n.OptionValidator}}),Object.defineProperty(t,"findSuggestion",{enumerable:!0,get:function(){return i.findSuggestion}});var n=r(4924),i=r(1714)},4924:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OptionValidator=void 0;var n=r(1714);t.OptionValidator=class{constructor(e){this.descriptor=e}validateTopLevelOptions(e,t){const r=Object.keys(t);for(const t of Object.keys(e))if(!r.includes(t))throw new Error(this.formatMessage(`'${t}' is not a valid top-level option.\n- Did you mean '${(0,n.findSuggestion)(t,r)}'?`))}validateBooleanOption(e,t,r){return void 0===t?r:(this.invariant("boolean"==typeof t,`'${e}' option must be a boolean.`),t)}validateStringOption(e,t,r){return void 0===t?r:(this.invariant("string"==typeof t,`'${e}' option must be a string.`),t)}invariant(e,t){if(!e)throw new Error(this.formatMessage(t))}formatMessage(e){return`${this.descriptor}: ${e}`}}},7919:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.wrapRegExp=t.typeof=t.objectSpread2=t.jsx=t.asyncIterator=void 0;var n=r(3198);const i={minVersion:"7.15.9",ast:()=>n.default.program.ast('\nexport default function _asyncIterator(iterable) {\n  var method,\n    async,\n    sync,\n    retry = 2;\n  if (typeof Symbol !== "undefined") {\n    async = Symbol.asyncIterator;\n    sync = Symbol.iterator;\n  }\n  while (retry--) {\n    if (async && (method = iterable[async]) != null) {\n      return method.call(iterable);\n    }\n    if (sync && (method = iterable[sync]) != null) {\n      return new AsyncFromSyncIterator(method.call(iterable));\n    }\n    async = "@@asyncIterator";\n    sync = "@@iterator";\n  }\n  throw new TypeError("Object is not async iterable");\n}\nfunction AsyncFromSyncIterator(s) {\n  AsyncFromSyncIterator = function (s) {\n    this.s = s;\n    this.n = s.next;\n  };\n  AsyncFromSyncIterator.prototype = {\n     s: null,\n     n: null,\n    next: function () {\n      return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));\n    },\n    return: function (value) {\n      var ret = this.s.return;\n      if (ret === undefined) {\n        return Promise.resolve({ value: value, done: true });\n      }\n      return AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments));\n    },\n    throw: function (value) {\n      var thr = this.s.return;\n      if (thr === undefined) return Promise.reject(value);\n      return AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments));\n    },\n  };\n  function AsyncFromSyncIteratorContinuation(r) {\n    \n    if (Object(r) !== r) {\n      return Promise.reject(new TypeError(r + " is not an object."));\n    }\n    var done = r.done;\n    return Promise.resolve(r.value).then(function (value) {\n      return { value: value, done: done };\n    });\n  }\n  return new AsyncFromSyncIterator(s);\n}\n')};t.asyncIterator=i;const s={minVersion:"7.0.0-beta.0",ast:()=>n.default.program.ast('\nvar REACT_ELEMENT_TYPE;\nexport default function _createRawReactElement(type, props, key, children) {\n  if (!REACT_ELEMENT_TYPE) {\n    REACT_ELEMENT_TYPE =\n      (typeof Symbol === "function" &&\n        \n        Symbol["for"] &&\n        Symbol["for"]("react.element")) ||\n      0xeac7;\n  }\n  var defaultProps = type && type.defaultProps;\n  var childrenLength = arguments.length - 3;\n  if (!props && childrenLength !== 0) {\n    \n    \n    props = { children: void 0 };\n  }\n  if (childrenLength === 1) {\n    props.children = children;\n  } else if (childrenLength > 1) {\n    var childArray = new Array(childrenLength);\n    for (var i = 0; i < childrenLength; i++) {\n      childArray[i] = arguments[i + 3];\n    }\n    props.children = childArray;\n  }\n  if (props && defaultProps) {\n    for (var propName in defaultProps) {\n      if (props[propName] === void 0) {\n        props[propName] = defaultProps[propName];\n      }\n    }\n  } else if (!props) {\n    props = defaultProps || {};\n  }\n  return {\n    $$typeof: REACT_ELEMENT_TYPE,\n    type: type,\n    key: key === undefined ? null : "" + key,\n    ref: null,\n    props: props,\n    _owner: null,\n  };\n}\n')};t.jsx=s;const o={minVersion:"7.5.0",ast:()=>n.default.program.ast('\nimport defineProperty from "defineProperty";\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n  if (Object.getOwnPropertySymbols) {\n    var symbols = Object.getOwnPropertySymbols(object);\n    if (enumerableOnly) {\n      symbols = symbols.filter(function (sym) {\n        return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n      });\n    }\n    keys.push.apply(keys, symbols);\n  }\n  return keys;\n}\nexport default function _objectSpread2(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n    if (i % 2) {\n      ownKeys(Object(source), true).forEach(function (key) {\n        defineProperty(target, key, source[key]);\n      });\n    } else if (Object.getOwnPropertyDescriptors) {\n      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n      ownKeys(Object(source)).forEach(function (key) {\n        Object.defineProperty(\n          target,\n          key,\n          Object.getOwnPropertyDescriptor(source, key)\n        );\n      });\n    }\n  }\n  return target;\n}\n')};t.objectSpread2=o;const a={minVersion:"7.0.0-beta.0",ast:()=>n.default.program.ast('\nexport default function _typeof(obj) {\n  "@babel/helpers - typeof";\n  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {\n    _typeof = function (obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function (obj) {\n      return obj &&\n        typeof Symbol === "function" &&\n        obj.constructor === Symbol &&\n        obj !== Symbol.prototype\n        ? "symbol"\n        : typeof obj;\n    };\n  }\n  return _typeof(obj);\n}\n')};t.typeof=a;const l={minVersion:"7.2.6",ast:()=>n.default.program.ast('\nimport setPrototypeOf from "setPrototypeOf";\nimport inherits from "inherits";\nexport default function _wrapRegExp() {\n  _wrapRegExp = function (re, groups) {\n    return new BabelRegExp(re, undefined, groups);\n  };\n  var _super = RegExp.prototype;\n  var _groups = new WeakMap();\n  function BabelRegExp(re, flags, groups) {\n    var _this = new RegExp(re, flags);\n    \n    _groups.set(_this, groups || _groups.get(re));\n    return setPrototypeOf(_this, BabelRegExp.prototype);\n  }\n  inherits(BabelRegExp, RegExp);\n  BabelRegExp.prototype.exec = function (str) {\n    var result = _super.exec.call(this, str);\n    if (result) result.groups = buildGroups(result, this);\n    return result;\n  };\n  BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {\n    if (typeof substitution === "string") {\n      var groups = _groups.get(this);\n      return _super[Symbol.replace].call(\n        this,\n        str,\n        substitution.replace(/\\$<([^>]+)>/g, function (_, name) {\n          return "$" + groups[name];\n        })\n      );\n    } else if (typeof substitution === "function") {\n      var _this = this;\n      return _super[Symbol.replace].call(this, str, function () {\n        var args = arguments;\n        \n        if (typeof args[args.length - 1] !== "object") {\n          args = [].slice.call(args);\n          args.push(buildGroups(args, _this));\n        }\n        return substitution.apply(this, args);\n      });\n    } else {\n      return _super[Symbol.replace].call(this, str, substitution);\n    }\n  };\n  function buildGroups(result, re) {\n    \n    \n    var g = _groups.get(re);\n    return Object.keys(g).reduce(function (groups, name) {\n      groups[name] = result[g[name]];\n      return groups;\n    }, Object.create(null));\n  }\n  return _wrapRegExp.apply(this, arguments);\n}\n')};t.wrapRegExp=l},2944:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(3198),i=r(7919);const s=Object.assign({__proto__:null},i);var o=s;t.default=o;const a=e=>t=>({minVersion:e,ast:()=>n.default.program.ast(t)});s.AwaitValue=a("7.0.0-beta.0")`
  export default function _AwaitValue(value) {
    this.wrapped = value;
  }
`,s.AsyncGenerator=a("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null,
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg)
        var value = result.value;
        var wrappedAwait = value instanceof AwaitValue;

        Promise.resolve(wrappedAwait ? value.wrapped : value).then(
          function (arg) {
            if (wrappedAwait) {
              resume(key === "return" ? "return" : "next", arg);
              return
            }

            settle(result.done ? "return" : "normal", arg);
          },
          function (err) { resume("throw", err); });
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({ value: value, done: true });
          break;
        case "throw":
          front.reject(value);
          break;
        default:
          front.resolve({ value: value, done: false });
          break;
      }

      front = front.next;
      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    // Hide "return" method if generator return is not supported
    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  AsyncGenerator.prototype[typeof Symbol === "function" && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; };

  AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };
  AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };
  AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };
`,s.wrapAsyncGenerator=a("7.0.0-beta.0")`
  import AsyncGenerator from "AsyncGenerator";

  export default function _wrapAsyncGenerator(fn) {
    return function () {
      return new AsyncGenerator(fn.apply(this, arguments));
    };
  }
`,s.awaitAsyncGenerator=a("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function _awaitAsyncGenerator(value) {
    return new AwaitValue(value);
  }
`,s.asyncGeneratorDelegate=a("7.0.0-beta.0")`
  export default function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {}, waiting = false;

    function pump(key, value) {
      waiting = true;
      value = new Promise(function (resolve) { resolve(inner[key](value)); });
      return { done: false, value: awaitWrap(value) };
    };

    iter[typeof Symbol !== "undefined" && Symbol.iterator || "@@iterator"] = function () { return this; };

    iter.next = function (value) {
      if (waiting) {
        waiting = false;
        return value;
      }
      return pump("next", value);
    };

    if (typeof inner.throw === "function") {
      iter.throw = function (value) {
        if (waiting) {
          waiting = false;
          throw value;
        }
        return pump("throw", value);
      };
    }

    if (typeof inner.return === "function") {
      iter.return = function (value) {
        if (waiting) {
          waiting = false;
          return value;
        }
        return pump("return", value);
      };
    }

    return iter;
  }
`,s.asyncToGenerator=a("7.0.0-beta.0")`
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  export default function _asyncToGenerator(fn) {
    return function () {
      var self = this, args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }
`,s.classCallCheck=a("7.0.0-beta.0")`
  export default function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
`,s.createClass=a("7.0.0-beta.0")`
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i ++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  export default function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
`,s.defineEnumerableProperties=a("7.0.0-beta.0")`
  export default function _defineEnumerableProperties(obj, descs) {
    for (var key in descs) {
      var desc = descs[key];
      desc.configurable = desc.enumerable = true;
      if ("value" in desc) desc.writable = true;
      Object.defineProperty(obj, key, desc);
    }

    // Symbols are not enumerated over by for-in loops. If native
    // Symbols are available, fetch all of the descs object's own
    // symbol properties and define them on our target object too.
    if (Object.getOwnPropertySymbols) {
      var objectSymbols = Object.getOwnPropertySymbols(descs);
      for (var i = 0; i < objectSymbols.length; i++) {
        var sym = objectSymbols[i];
        var desc = descs[sym];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, sym, desc);
      }
    }
    return obj;
  }
`,s.defaults=a("7.0.0-beta.0")`
  export default function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = Object.getOwnPropertyDescriptor(defaults, key);
      if (value && value.configurable && obj[key] === undefined) {
        Object.defineProperty(obj, key, value);
      }
    }
    return obj;
  }
`,s.defineProperty=a("7.0.0-beta.0")`
  export default function _defineProperty(obj, key, value) {
    // Shortcircuit the slow defineProperty path when possible.
    // We are trying to avoid issues where setters defined on the
    // prototype cause side effects under the fast path of simple
    // assignment. By checking for existence of the property with
    // the in operator, we can optimize most of this overhead away.
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
`,s.extends=a("7.0.0-beta.0")`
  export default function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };

    return _extends.apply(this, arguments);
  }
`,s.objectSpread=a("7.0.0-beta.0")`
  import defineProperty from "defineProperty";

  export default function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = (arguments[i] != null) ? Object(arguments[i]) : {};
      var ownKeys = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      ownKeys.forEach(function(key) {
        defineProperty(target, key, source[key]);
      });
    }
    return target;
  }
`,s.inherits=a("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";

  export default function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }
`,s.inheritsLoose=a("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";

  export default function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    setPrototypeOf(subClass, superClass);
  }
`,s.getPrototypeOf=a("7.0.0-beta.0")`
  export default function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
  }
`,s.setPrototypeOf=a("7.0.0-beta.0")`
  export default function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
`,s.isNativeReflectConstruct=a("7.9.0")`
  export default function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;

    // core-js@3
    if (Reflect.construct.sham) return false;

    // Proxy can't be polyfilled. Every browser implemented
    // proxies before or at the same time as Reflect.construct,
    // so if they support Proxy they also support Reflect.construct.
    if (typeof Proxy === "function") return true;

    // Since Reflect.construct can't be properly polyfilled, some
    // implementations (e.g. core-js@2) don't set the correct internal slots.
    // Those polyfills don't allow us to subclass built-ins, so we need to
    // use our fallback implementation.
    try {
      // If the internal slots aren't set, this throws an error similar to
      //   TypeError: this is not a Boolean object.

      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
      return true;
    } catch (e) {
      return false;
    }
  }
`,s.construct=a("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";

  export default function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      // NOTE: If Parent !== Class, the correct __proto__ is set *after*
      //       calling the constructor.
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    // Avoid issues with Class being present but undefined when it wasn't
    // present in the original call.
    return _construct.apply(null, arguments);
  }
`,s.isNativeFunction=a("7.0.0-beta.0")`
  export default function _isNativeFunction(fn) {
    // Note: This function returns "true" for core-js functions.
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
`,s.wrapNativeSuper=a("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";
  import setPrototypeOf from "setPrototypeOf";
  import isNativeFunction from "isNativeFunction";
  import construct from "construct";

  export default function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return construct(Class, arguments, getPrototypeOf(this).constructor)
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true,
        }
      });

      return setPrototypeOf(Wrapper, Class);
    }

    return _wrapNativeSuper(Class)
  }
`,s.instanceof=a("7.0.0-beta.0")`
  export default function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
      return !!right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  }
`,s.interopRequireDefault=a("7.0.0-beta.0")`
  export default function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
`,s.interopRequireWildcard=a("7.14.0")`
  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;

    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function (nodeInterop) {
      return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }

  export default function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
      return { default: obj }
    }

    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor
          ? Object.getOwnPropertyDescriptor(obj, key)
          : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
`,s.newArrowCheck=a("7.0.0-beta.0")`
  export default function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  }
`,s.objectDestructuringEmpty=a("7.0.0-beta.0")`
  export default function _objectDestructuringEmpty(obj) {
    if (obj == null) throw new TypeError("Cannot destructure undefined");
  }
`,s.objectWithoutPropertiesLoose=a("7.0.0-beta.0")`
  export default function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};

    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }
`,s.objectWithoutProperties=a("7.0.0-beta.0")`
  import objectWithoutPropertiesLoose from "objectWithoutPropertiesLoose";

  export default function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }
`,s.assertThisInitialized=a("7.0.0-beta.0")`
  export default function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
`,s.possibleConstructorReturn=a("7.0.0-beta.0")`
  import assertThisInitialized from "assertThisInitialized";

  export default function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return assertThisInitialized(self);
  }
`,s.createSuper=a("7.9.0")`
  import getPrototypeOf from "getPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";
  import possibleConstructorReturn from "possibleConstructorReturn";

  export default function _createSuper(Derived) {
    var hasNativeReflectConstruct = isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        // NOTE: This doesn't work if this.__proto__.constructor has been modified.
        var NewTarget = getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return possibleConstructorReturn(this, result);
    }
  }
 `,s.superPropBase=a("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";

  export default function _superPropBase(object, property) {
    // Yes, this throws if object is null to being with, that's on purpose.
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
`,s.get=a("7.0.0-beta.0")`
  import superPropBase from "superPropBase";

  export default function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = superPropBase(target, property);

        if (!base) return;

        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }
    return _get(target, property, receiver || target);
  }
`,s.set=a("7.0.0-beta.0")`
  import superPropBase from "superPropBase";
  import defineProperty from "defineProperty";

  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = superPropBase(target, property);
        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);
          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            // Both getter and non-writable fall into this.
            return false;
          }
        }

        // Without a super that defines the property, spec boils down to
        // "define on receiver" for some reason.
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
          if (!desc.writable) {
            // Setter, getter, and non-writable fall into this.
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          // Avoid setters that may be defined on Sub's prototype, but not on
          // the instance.
          defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set(target, property, value, receiver);
  }

  export default function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }
`,s.taggedTemplateLiteral=a("7.0.0-beta.0")`
  export default function _taggedTemplateLiteral(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    return Object.freeze(Object.defineProperties(strings, {
        raw: { value: Object.freeze(raw) }
    }));
  }
`,s.taggedTemplateLiteralLoose=a("7.0.0-beta.0")`
  export default function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    strings.raw = raw;
    return strings;
  }
`,s.readOnlyError=a("7.0.0-beta.0")`
  export default function _readOnlyError(name) {
    throw new TypeError("\\"" + name + "\\" is read-only");
  }
`,s.writeOnlyError=a("7.12.13")`
  export default function _writeOnlyError(name) {
    throw new TypeError("\\"" + name + "\\" is write-only");
  }
`,s.classNameTDZError=a("7.0.0-beta.0")`
  export default function _classNameTDZError(name) {
    throw new Error("Class \\"" + name + "\\" cannot be referenced in computed property keys.");
  }
`,s.temporalUndefined=a("7.0.0-beta.0")`
  // This function isn't mean to be called, but to be used as a reference.
  // We can't use a normal object because it isn't hoisted.
  export default function _temporalUndefined() {}
`,s.tdz=a("7.5.5")`
  export default function _tdzError(name) {
    throw new ReferenceError(name + " is not defined - temporal dead zone");
  }
`,s.temporalRef=a("7.0.0-beta.0")`
  import undef from "temporalUndefined";
  import err from "tdz";

  export default function _temporalRef(val, name) {
    return val === undef ? err(name) : val;
  }
`,s.slicedToArray=a("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimit from "iterableToArrayLimit";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArray(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimit(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`,s.slicedToArrayLoose=a("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimitLoose from "iterableToArrayLimitLoose";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArrayLoose(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimitLoose(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`,s.toArray=a("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _toArray(arr) {
    return (
      arrayWithHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableRest()
    );
  }
`,s.toConsumableArray=a("7.0.0-beta.0")`
  import arrayWithoutHoles from "arrayWithoutHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableSpread from "nonIterableSpread";

  export default function _toConsumableArray(arr) {
    return (
      arrayWithoutHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableSpread()
    );
  }
`,s.arrayWithoutHoles=a("7.0.0-beta.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray(arr);
  }
`,s.arrayWithHoles=a("7.0.0-beta.0")`
  export default function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
`,s.maybeArrayLike=a("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _maybeArrayLike(next, arr, i) {
    if (arr && !Array.isArray(arr) && typeof arr.length === "number") {
      var len = arr.length;
      return arrayLikeToArray(arr, i !== void 0 && i < len ? i : len);
    }
    return next(arr, i);
  }
`,s.iterableToArray=a("7.0.0-beta.0")`
  export default function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
`,s.iterableToArrayLimit=a("7.0.0-beta.0")`
  export default function _iterableToArrayLimit(arr, i) {
    // this is an expanded form of \`for...of\` that properly supports abrupt completions of
    // iterators etc. variable names have been minimised to reduce the size of this massive
    // helper. sometimes spec compliance is annoying :(
    //
    // _n = _iteratorNormalCompletion
    // _d = _didIteratorError
    // _e = _iteratorError
    // _i = _iterator
    // _s = _step

    var _i = arr == null ? null : (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;

    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
`,s.iterableToArrayLimitLoose=a("7.0.0-beta.0")`
  export default function _iterableToArrayLimitLoose(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;

    var _arr = [];
    for (_i = _i.call(arr), _step; !(_step = _i.next()).done;) {
      _arr.push(_step.value);
      if (i && _arr.length === i) break;
    }
    return _arr;
  }
`,s.unsupportedIterableToArray=a("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return arrayLikeToArray(o, minLen);
  }
`,s.arrayLikeToArray=a("7.9.0")`
  export default function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
`,s.nonIterableSpread=a("7.0.0-beta.0")`
  export default function _nonIterableSpread() {
    throw new TypeError(
      "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`,s.nonIterableRest=a("7.0.0-beta.0")`
  export default function _nonIterableRest() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`,s.createForOfIteratorHelper=a("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  // s: start (create the iterator)
  // n: next
  // e: error (called whenever something throws)
  // f: finish (always called at the end)

  export default function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      // Fallback for engines without symbol support
      if (
        Array.isArray(o) ||
        (it = unsupportedIterableToArray(o)) ||
        (allowArrayLike && o && typeof o.length === "number")
      ) {
        if (it) o = it;
        var i = 0;
        var F = function(){};
        return {
          s: F,
          n: function() {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          },
          e: function(e) { throw e; },
          f: F,
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true, didErr = false, err;

    return {
      s: function() {
        it = it.call(o);
      },
      n: function() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function(e) {
        didErr = true;
        err = e;
      },
      f: function() {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
`,s.createForOfIteratorHelperLoose=a("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  export default function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (it) return (it = it.call(o)).next.bind(it);

    // Fallback for engines without symbol support
    if (
      Array.isArray(o) ||
      (it = unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === "number")
    ) {
      if (it) o = it;
      var i = 0;
      return function() {
        if (i >= o.length) return { done: true };
        return { done: false, value: o[i++] };
      }
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
`,s.skipFirstGeneratorNext=a("7.0.0-beta.0")`
  export default function _skipFirstGeneratorNext(fn) {
    return function () {
      var it = fn.apply(this, arguments);
      it.next();
      return it;
    }
  }
`,s.toPrimitive=a("7.1.5")`
  export default function _toPrimitive(
    input,
    hint /*: "default" | "string" | "number" | void */
  ) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
`,s.toPropertyKey=a("7.1.5")`
  import toPrimitive from "toPrimitive";

  export default function _toPropertyKey(arg) {
    var key = toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
`,s.initializerWarningHelper=a("7.0.0-beta.0")`
    export default function _initializerWarningHelper(descriptor, context){
        throw new Error(
          'Decorating class property failed. Please ensure that ' +
          'proposal-class-properties is enabled and runs after the decorators transform.'
        );
    }
`,s.initializerDefineProperty=a("7.0.0-beta.0")`
    export default function _initializerDefineProperty(target, property, descriptor, context){
        if (!descriptor) return;

        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0,
        });
    }
`,s.applyDecoratedDescriptor=a("7.0.0-beta.0")`
    export default function _applyDecoratedDescriptor(target, property, decorators, descriptor, context){
        var desc = {};
        Object.keys(descriptor).forEach(function(key){
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer){
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator){
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0){
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0){
            Object.defineProperty(target, property, desc);
            desc = null;
        }

        return desc;
    }
`,s.classPrivateFieldLooseKey=a("7.0.0-beta.0")`
  var id = 0;
  export default function _classPrivateFieldKey(name) {
    return "__private_" + (id++) + "_" + name;
  }
`,s.classPrivateFieldLooseBase=a("7.0.0-beta.0")`
  export default function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
      throw new TypeError("attempted to use private field on non-instance");
    }
    return receiver;
  }
`,s.classPrivateFieldGet=a("7.0.0-beta.0")`
  import classApplyDescriptorGet from "classApplyDescriptorGet";
  import classExtractFieldDescriptor from "classExtractFieldDescriptor";
  export default function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "get");
    return classApplyDescriptorGet(receiver, descriptor);
  }
`,s.classPrivateFieldSet=a("7.0.0-beta.0")`
  import classApplyDescriptorSet from "classApplyDescriptorSet";
  import classExtractFieldDescriptor from "classExtractFieldDescriptor";
  export default function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
    classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
`,s.classPrivateFieldDestructureSet=a("7.4.4")`
  import classApplyDescriptorDestructureSet from "classApplyDescriptorDestructureSet";
  import classExtractFieldDescriptor from "classExtractFieldDescriptor";
  export default function _classPrivateFieldDestructureSet(receiver, privateMap) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
    return classApplyDescriptorDestructureSet(receiver, descriptor);
  }
`,s.classExtractFieldDescriptor=a("7.13.10")`
  export default function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
  }
`,s.classStaticPrivateFieldSpecGet=a("7.0.2")`
  import classApplyDescriptorGet from "classApplyDescriptorGet";
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  import classCheckPrivateStaticFieldDescriptor from "classCheckPrivateStaticFieldDescriptor";
  export default function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    classCheckPrivateStaticFieldDescriptor(descriptor, "get");
    return classApplyDescriptorGet(receiver, descriptor);
  }
`,s.classStaticPrivateFieldSpecSet=a("7.0.2")`
  import classApplyDescriptorSet from "classApplyDescriptorSet";
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  import classCheckPrivateStaticFieldDescriptor from "classCheckPrivateStaticFieldDescriptor";
  export default function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    classCheckPrivateStaticFieldDescriptor(descriptor, "set");
    classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
`,s.classStaticPrivateMethodGet=a("7.3.2")`
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  export default function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    return method;
  }
`,s.classStaticPrivateMethodSet=a("7.3.2")`
  export default function _classStaticPrivateMethodSet() {
    throw new TypeError("attempted to set read only static private field");
  }
`,s.classApplyDescriptorGet=a("7.13.10")`
  export default function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
`,s.classApplyDescriptorSet=a("7.13.10")`
  export default function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }
      descriptor.value = value;
    }
  }
`,s.classApplyDescriptorDestructureSet=a("7.13.10")`
  export default function _classApplyDescriptorDestructureSet(receiver, descriptor) {
    if (descriptor.set) {
      if (!("__destrObj" in descriptor)) {
        descriptor.__destrObj = {
          set value(v) {
            descriptor.set.call(receiver, v)
          },
        };
      }
      return descriptor.__destrObj;
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }

      return descriptor;
    }
  }
`,s.classStaticPrivateFieldDestructureSet=a("7.13.10")`
  import classApplyDescriptorDestructureSet from "classApplyDescriptorDestructureSet";
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  import classCheckPrivateStaticFieldDescriptor from "classCheckPrivateStaticFieldDescriptor";
  export default function _classStaticPrivateFieldDestructureSet(receiver, classConstructor, descriptor) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    classCheckPrivateStaticFieldDescriptor(descriptor, "set");
    return classApplyDescriptorDestructureSet(receiver, descriptor);
  }
`,s.classCheckPrivateStaticAccess=a("7.13.10")`
  export default function _classCheckPrivateStaticAccess(receiver, classConstructor) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
  }
`,s.classCheckPrivateStaticFieldDescriptor=a("7.13.10")`
  export default function _classCheckPrivateStaticFieldDescriptor(descriptor, action) {
    if (descriptor === undefined) {
      throw new TypeError("attempted to " + action + " private static field before its declaration");
    }
  }
`,s.decorate=a("7.1.5")`
  import toArray from "toArray";
  import toPropertyKey from "toPropertyKey";

  // These comments are stripped by @babel/template
  /*::
  type PropertyDescriptor =
    | {
        value: any,
        writable: boolean,
        configurable: boolean,
        enumerable: boolean,
      }
    | {
        get?: () => any,
        set?: (v: any) => void,
        configurable: boolean,
        enumerable: boolean,
      };

  type FieldDescriptor ={
    writable: boolean,
    configurable: boolean,
    enumerable: boolean,
  };

  type Placement = "static" | "prototype" | "own";
  type Key = string | symbol; // PrivateName is not supported yet.

  type ElementDescriptor =
    | {
        kind: "method",
        key: Key,
        placement: Placement,
        descriptor: PropertyDescriptor
      }
    | {
        kind: "field",
        key: Key,
        placement: Placement,
        descriptor: FieldDescriptor,
        initializer?: () => any,
      };

  // This is exposed to the user code
  type ElementObjectInput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
  };

  // This is exposed to the user code
  type ElementObjectOutput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
    extras?: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  // This is exposed to the user code
  type ClassObject = {
    [@@toStringTag]?: "Descriptor",
    kind: "class",
    elements: ElementDescriptor[],
  };

  type ElementDecorator = (descriptor: ElementObjectInput) => ?ElementObjectOutput;
  type ClassDecorator = (descriptor: ClassObject) => ?ClassObject;
  type ClassFinisher = <A, B>(cl: Class<A>) => Class<B>;

  // Only used by Babel in the transform output, not part of the spec.
  type ElementDefinition =
    | {
        kind: "method",
        value: any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
      }
    | {
        kind: "field",
        value: () => any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
    };

  declare function ClassFactory<C>(initialize: (instance: C) => void): {
    F: Class<C>,
    d: ElementDefinition[]
  }

  */

  /*::
  // Various combinations with/without extras and with one or many finishers

  type ElementFinisherExtras = {
    element: ElementDescriptor,
    finisher?: ClassFinisher,
    extras?: ElementDescriptor[],
  };

  type ElementFinishersExtras = {
    element: ElementDescriptor,
    finishers: ClassFinisher[],
    extras: ElementDescriptor[],
  };

  type ElementsFinisher = {
    elements: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  type ElementsFinishers = {
    elements: ElementDescriptor[],
    finishers: ClassFinisher[],
  };

  */

  /*::

  type Placements = {
    static: Key[],
    prototype: Key[],
    own: Key[],
  };

  */

  // ClassDefinitionEvaluation (Steps 26-*)
  export default function _decorate(
    decorators /*: ClassDecorator[] */,
    factory /*: ClassFactory */,
    superClass /*: ?Class<*> */,
    mixins /*: ?Array<Function> */,
  ) /*: Class<*> */ {
    var api = _getDecoratorsApi();
    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        api = mixins[i](api);
      }
    }

    var r = factory(function initialize(O) {
      api.initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = api.decorateClass(
      _coalesceClassElements(r.d.map(_createElementDescriptor)),
      decorators,
    );

    api.initializeClassElements(r.F, decorated.elements);

    return api.runClassFinishers(r.F, decorated.finishers);
  }

  function _getDecoratorsApi() {
    _getDecoratorsApi = function() {
      return api;
    };

    var api = {
      elementsDefinitionOrder: [["method"], ["field"]],

      // InitializeInstanceElements
      initializeInstanceElements: function(
        /*::<C>*/ O /*: C */,
        elements /*: ElementDescriptor[] */,
      ) {
        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            if (element.kind === kind && element.placement === "own") {
              this.defineClassElement(O, element);
            }
          }, this);
        }, this);
      },

      // InitializeClassElements
      initializeClassElements: function(
        /*::<C>*/ F /*: Class<C> */,
        elements /*: ElementDescriptor[] */,
      ) {
        var proto = F.prototype;

        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            var placement = element.placement;
            if (
              element.kind === kind &&
              (placement === "static" || placement === "prototype")
            ) {
              var receiver = placement === "static" ? F : proto;
              this.defineClassElement(receiver, element);
            }
          }, this);
        }, this);
      },

      // DefineClassElement
      defineClassElement: function(
        /*::<C>*/ receiver /*: C | Class<C> */,
        element /*: ElementDescriptor */,
      ) {
        var descriptor /*: PropertyDescriptor */ = element.descriptor;
        if (element.kind === "field") {
          var initializer = element.initializer;
          descriptor = {
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            value: initializer === void 0 ? void 0 : initializer.call(receiver),
          };
        }
        Object.defineProperty(receiver, element.key, descriptor);
      },

      // DecorateClass
      decorateClass: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var newElements /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];
        var placements /*: Placements */ = {
          static: [],
          prototype: [],
          own: [],
        };

        elements.forEach(function(element /*: ElementDescriptor */) {
          this.addElementPlacement(element, placements);
        }, this);

        elements.forEach(function(element /*: ElementDescriptor */) {
          if (!_hasDecorators(element)) return newElements.push(element);

          var elementFinishersExtras /*: ElementFinishersExtras */ = this.decorateElement(
            element,
            placements,
          );
          newElements.push(elementFinishersExtras.element);
          newElements.push.apply(newElements, elementFinishersExtras.extras);
          finishers.push.apply(finishers, elementFinishersExtras.finishers);
        }, this);

        if (!decorators) {
          return { elements: newElements, finishers: finishers };
        }

        var result /*: ElementsFinishers */ = this.decorateConstructor(
          newElements,
          decorators,
        );
        finishers.push.apply(finishers, result.finishers);
        result.finishers = finishers;

        return result;
      },

      // AddElementPlacement
      addElementPlacement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
        silent /*: boolean */,
      ) {
        var keys = placements[element.placement];
        if (!silent && keys.indexOf(element.key) !== -1) {
          throw new TypeError("Duplicated element (" + element.key + ")");
        }
        keys.push(element.key);
      },

      // DecorateElement
      decorateElement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
      ) /*: ElementFinishersExtras */ {
        var extras /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];

        for (
          var decorators = element.decorators, i = decorators.length - 1;
          i >= 0;
          i--
        ) {
          // (inlined) RemoveElementPlacement
          var keys = placements[element.placement];
          keys.splice(keys.indexOf(element.key), 1);

          var elementObject /*: ElementObjectInput */ = this.fromElementDescriptor(
            element,
          );
          var elementFinisherExtras /*: ElementFinisherExtras */ = this.toElementFinisherExtras(
            (0, decorators[i])(elementObject) /*: ElementObjectOutput */ ||
              elementObject,
          );

          element = elementFinisherExtras.element;
          this.addElementPlacement(element, placements);

          if (elementFinisherExtras.finisher) {
            finishers.push(elementFinisherExtras.finisher);
          }

          var newExtras /*: ElementDescriptor[] | void */ =
            elementFinisherExtras.extras;
          if (newExtras) {
            for (var j = 0; j < newExtras.length; j++) {
              this.addElementPlacement(newExtras[j], placements);
            }
            extras.push.apply(extras, newExtras);
          }
        }

        return { element: element, finishers: finishers, extras: extras };
      },

      // DecorateConstructor
      decorateConstructor: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var finishers /*: ClassFinisher[] */ = [];

        for (var i = decorators.length - 1; i >= 0; i--) {
          var obj /*: ClassObject */ = this.fromClassDescriptor(elements);
          var elementsAndFinisher /*: ElementsFinisher */ = this.toClassDescriptor(
            (0, decorators[i])(obj) /*: ClassObject */ || obj,
          );

          if (elementsAndFinisher.finisher !== undefined) {
            finishers.push(elementsAndFinisher.finisher);
          }

          if (elementsAndFinisher.elements !== undefined) {
            elements = elementsAndFinisher.elements;

            for (var j = 0; j < elements.length - 1; j++) {
              for (var k = j + 1; k < elements.length; k++) {
                if (
                  elements[j].key === elements[k].key &&
                  elements[j].placement === elements[k].placement
                ) {
                  throw new TypeError(
                    "Duplicated element (" + elements[j].key + ")",
                  );
                }
              }
            }
          }
        }

        return { elements: elements, finishers: finishers };
      },

      // FromElementDescriptor
      fromElementDescriptor: function(
        element /*: ElementDescriptor */,
      ) /*: ElementObject */ {
        var obj /*: ElementObject */ = {
          kind: element.kind,
          key: element.key,
          placement: element.placement,
          descriptor: element.descriptor,
        };

        var desc = {
          value: "Descriptor",
          configurable: true,
        };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        if (element.kind === "field") obj.initializer = element.initializer;

        return obj;
      },

      // ToElementDescriptors
      toElementDescriptors: function(
        elementObjects /*: ElementObject[] */,
      ) /*: ElementDescriptor[] */ {
        if (elementObjects === undefined) return;
        return toArray(elementObjects).map(function(elementObject) {
          var element = this.toElementDescriptor(elementObject);
          this.disallowProperty(elementObject, "finisher", "An element descriptor");
          this.disallowProperty(elementObject, "extras", "An element descriptor");
          return element;
        }, this);
      },

      // ToElementDescriptor
      toElementDescriptor: function(
        elementObject /*: ElementObject */,
      ) /*: ElementDescriptor */ {
        var kind = String(elementObject.kind);
        if (kind !== "method" && kind !== "field") {
          throw new TypeError(
            'An element descriptor\\'s .kind property must be either "method" or' +
              ' "field", but a decorator created an element descriptor with' +
              ' .kind "' +
              kind +
              '"',
          );
        }

        var key = toPropertyKey(elementObject.key);

        var placement = String(elementObject.placement);
        if (
          placement !== "static" &&
          placement !== "prototype" &&
          placement !== "own"
        ) {
          throw new TypeError(
            'An element descriptor\\'s .placement property must be one of "static",' +
              ' "prototype" or "own", but a decorator created an element descriptor' +
              ' with .placement "' +
              placement +
              '"',
          );
        }

        var descriptor /*: PropertyDescriptor */ = elementObject.descriptor;

        this.disallowProperty(elementObject, "elements", "An element descriptor");

        var element /*: ElementDescriptor */ = {
          kind: kind,
          key: key,
          placement: placement,
          descriptor: Object.assign({}, descriptor),
        };

        if (kind !== "field") {
          this.disallowProperty(elementObject, "initializer", "A method descriptor");
        } else {
          this.disallowProperty(
            descriptor,
            "get",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "set",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "value",
            "The property descriptor of a field descriptor",
          );

          element.initializer = elementObject.initializer;
        }

        return element;
      },

      toElementFinisherExtras: function(
        elementObject /*: ElementObject */,
      ) /*: ElementFinisherExtras */ {
        var element /*: ElementDescriptor */ = this.toElementDescriptor(
          elementObject,
        );
        var finisher /*: ClassFinisher */ = _optionalCallableProperty(
          elementObject,
          "finisher",
        );
        var extras /*: ElementDescriptors[] */ = this.toElementDescriptors(
          elementObject.extras,
        );

        return { element: element, finisher: finisher, extras: extras };
      },

      // FromClassDescriptor
      fromClassDescriptor: function(
        elements /*: ElementDescriptor[] */,
      ) /*: ClassObject */ {
        var obj = {
          kind: "class",
          elements: elements.map(this.fromElementDescriptor, this),
        };

        var desc = { value: "Descriptor", configurable: true };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        return obj;
      },

      // ToClassDescriptor
      toClassDescriptor: function(
        obj /*: ClassObject */,
      ) /*: ElementsFinisher */ {
        var kind = String(obj.kind);
        if (kind !== "class") {
          throw new TypeError(
            'A class descriptor\\'s .kind property must be "class", but a decorator' +
              ' created a class descriptor with .kind "' +
              kind +
              '"',
          );
        }

        this.disallowProperty(obj, "key", "A class descriptor");
        this.disallowProperty(obj, "placement", "A class descriptor");
        this.disallowProperty(obj, "descriptor", "A class descriptor");
        this.disallowProperty(obj, "initializer", "A class descriptor");
        this.disallowProperty(obj, "extras", "A class descriptor");

        var finisher = _optionalCallableProperty(obj, "finisher");
        var elements = this.toElementDescriptors(obj.elements);

        return { elements: elements, finisher: finisher };
      },

      // RunClassFinishers
      runClassFinishers: function(
        constructor /*: Class<*> */,
        finishers /*: ClassFinisher[] */,
      ) /*: Class<*> */ {
        for (var i = 0; i < finishers.length; i++) {
          var newConstructor /*: ?Class<*> */ = (0, finishers[i])(constructor);
          if (newConstructor !== undefined) {
            // NOTE: This should check if IsConstructor(newConstructor) is false.
            if (typeof newConstructor !== "function") {
              throw new TypeError("Finishers must return a constructor.");
            }
            constructor = newConstructor;
          }
        }
        return constructor;
      },

      disallowProperty: function(obj, name, objectType) {
        if (obj[name] !== undefined) {
          throw new TypeError(objectType + " can't have a ." + name + " property.");
        }
      }
    };

    return api;
  }

  // ClassElementEvaluation
  function _createElementDescriptor(
    def /*: ElementDefinition */,
  ) /*: ElementDescriptor */ {
    var key = toPropertyKey(def.key);

    var descriptor /*: PropertyDescriptor */;
    if (def.kind === "method") {
      descriptor = {
        value: def.value,
        writable: true,
        configurable: true,
        enumerable: false,
      };
    } else if (def.kind === "get") {
      descriptor = { get: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "set") {
      descriptor = { set: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "field") {
      descriptor = { configurable: true, writable: true, enumerable: true };
    }

    var element /*: ElementDescriptor */ = {
      kind: def.kind === "field" ? "field" : "method",
      key: key,
      placement: def.static
        ? "static"
        : def.kind === "field"
        ? "own"
        : "prototype",
      descriptor: descriptor,
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;

    return element;
  }

  // CoalesceGetterSetter
  function _coalesceGetterSetter(
    element /*: ElementDescriptor */,
    other /*: ElementDescriptor */,
  ) {
    if (element.descriptor.get !== undefined) {
      other.descriptor.get = element.descriptor.get;
    } else {
      other.descriptor.set = element.descriptor.set;
    }
  }

  // CoalesceClassElements
  function _coalesceClassElements(
    elements /*: ElementDescriptor[] */,
  ) /*: ElementDescriptor[] */ {
    var newElements /*: ElementDescriptor[] */ = [];

    var isSameElement = function(
      other /*: ElementDescriptor */,
    ) /*: boolean */ {
      return (
        other.kind === "method" &&
        other.key === element.key &&
        other.placement === element.placement
      );
    };

    for (var i = 0; i < elements.length; i++) {
      var element /*: ElementDescriptor */ = elements[i];
      var other /*: ElementDescriptor */;

      if (
        element.kind === "method" &&
        (other = newElements.find(isSameElement))
      ) {
        if (
          _isDataDescriptor(element.descriptor) ||
          _isDataDescriptor(other.descriptor)
        ) {
          if (_hasDecorators(element) || _hasDecorators(other)) {
            throw new ReferenceError(
              "Duplicated methods (" + element.key + ") can't be decorated.",
            );
          }
          other.descriptor = element.descriptor;
        } else {
          if (_hasDecorators(element)) {
            if (_hasDecorators(other)) {
              throw new ReferenceError(
                "Decorators can't be placed on different accessors with for " +
                  "the same property (" +
                  element.key +
                  ").",
              );
            }
            other.decorators = element.decorators;
          }
          _coalesceGetterSetter(element, other);
        }
      } else {
        newElements.push(element);
      }
    }

    return newElements;
  }

  function _hasDecorators(element /*: ElementDescriptor */) /*: boolean */ {
    return element.decorators && element.decorators.length;
  }

  function _isDataDescriptor(desc /*: PropertyDescriptor */) /*: boolean */ {
    return (
      desc !== undefined &&
      !(desc.value === undefined && desc.writable === undefined)
    );
  }

  function _optionalCallableProperty /*::<T>*/(
    obj /*: T */,
    name /*: $Keys<T> */,
  ) /*: ?Function */ {
    var value = obj[name];
    if (value !== undefined && typeof value !== "function") {
      throw new TypeError("Expected '" + name + "' to be a function");
    }
    return value;
  }

`,s.classPrivateMethodGet=a("7.1.6")`
  export default function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
  }
`,s.checkPrivateRedeclaration=a("7.14.1")`
  export default function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
  }
`,s.classPrivateFieldInitSpec=a("7.14.1")`
  import checkPrivateRedeclaration from "checkPrivateRedeclaration";

  export default function _classPrivateFieldInitSpec(obj, privateMap, value) {
    checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
  }
`,s.classPrivateMethodInitSpec=a("7.14.1")`
  import checkPrivateRedeclaration from "checkPrivateRedeclaration";

  export default function _classPrivateMethodInitSpec(obj, privateSet) {
    checkPrivateRedeclaration(obj, privateSet);
    privateSet.add(obj);
  }
`,s.classPrivateMethodSet=a("7.1.6")`
    export default function _classPrivateMethodSet() {
      throw new TypeError("attempted to reassign private method");
    }