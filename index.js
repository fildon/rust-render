!function(e){function n(n){for(var t,o,i=n[0],u=n[1],c=0,_=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&_.push(r[o][0]),r[o]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);for(f&&f(n);_.length;)_.shift()()}var t={},r={0:0};var o={};var i={8:function(){return{"./index_bg.js":{__wbg_log_a5767b1129283730:function(e,n){return t[2].exports.h(e,n)},__wbg_getRandomValues_37fa2ca9e4e07fab:function(e,n){return t[2].exports.e(e,n)},__wbindgen_object_drop_ref:function(e){return t[2].exports.D(e)},__wbg_randomFillSync_dc1e9a60c158336d:function(e,n){return t[2].exports.p(e,n)},__wbg_crypto_c48a774b022d20ac:function(e){return t[2].exports.d(e)},__wbindgen_is_object:function(e){return t[2].exports.y(e)},__wbg_process_298734cf255a885d:function(e){return t[2].exports.o(e)},__wbg_versions_e2e78e134e3e5d01:function(e){return t[2].exports.v(e)},__wbg_node_1cd7a5d853dbea79:function(e){return t[2].exports.n(e)},__wbindgen_is_string:function(e){return t[2].exports.z(e)},__wbg_msCrypto_bcb970640f50a1e8:function(e){return t[2].exports.i(e)},__wbg_require_8f08ceecec0f4fee:function(){return t[2].exports.q()},__wbindgen_is_function:function(e){return t[2].exports.x(e)},__wbindgen_string_new:function(e,n){return t[2].exports.E(e,n)},__wbg_newnoargs_581967eacc0e2604:function(e,n){return t[2].exports.k(e,n)},__wbg_call_cb65541d95d71282:function(e,n){return t[2].exports.c(e,n)},__wbindgen_object_clone_ref:function(e){return t[2].exports.C(e)},__wbg_self_1ff1d729e9aae938:function(){return t[2].exports.r()},__wbg_window_5f4faef6c12b79ec:function(){return t[2].exports.w()},__wbg_globalThis_1d39714405582d3c:function(){return t[2].exports.f()},__wbg_global_651f05c6a0944d1c:function(){return t[2].exports.g()},__wbindgen_is_undefined:function(e){return t[2].exports.A(e)},__wbg_call_01734de55d61e11d:function(e,n,r){return t[2].exports.b(e,n,r)},__wbg_buffer_085ec1f694018c4f:function(e){return t[2].exports.a(e)},__wbg_newwithbyteoffsetandlength_6da8e527659b86aa:function(e,n,r){return t[2].exports.l(e,n,r)},__wbg_new_8125e318e6245eed:function(e){return t[2].exports.j(e)},__wbg_set_5cf90238115182c3:function(e,n,r){return t[2].exports.s(e,n,r)},__wbg_newwithlength_e5d69174d6984cd7:function(e){return t[2].exports.m(e)},__wbg_subarray_13db269f57aa838d:function(e,n,r){return t[2].exports.u(e,n,r)},__wbindgen_throw:function(e,n){return t[2].exports.F(e,n)},__wbindgen_memory:function(){return t[2].exports.B()}}}}};function u(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var c=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=c);var _,a=document.createElement("script");a.charset="utf-8",a.timeout=120,u.nc&&a.setAttribute("nonce",u.nc),a.src=function(e){return u.p+""+e+".index.js"}(e);var f=new Error;_=function(n){a.onerror=a.onload=null,clearTimeout(s);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",f.name="ChunkLoadError",f.type=o,f.request=i,t[1](f)}r[e]=void 0}};var s=setTimeout((function(){_({type:"timeout",target:a})}),12e4);a.onerror=a.onload=_,document.head.appendChild(a)}return({2:[8]}[e]||[]).forEach((function(e){var t=o[e];if(t)n.push(t);else{var r,c=i[e](),_=fetch(u.p+""+{8:"c7d4243a4d33fc1de610"}[e]+".module.wasm");if(c instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(_),c]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"==typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(_,c);else{r=_.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,c)}))}n.push(o[e]=r.then((function(n){return u.w[e]=(n.instance||n).exports})))}})),Promise.all(n)},u.m=e,u.c=t,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="",u.oe=function(e){throw console.error(e),e},u.w={};var c=window.webpackJsonp=window.webpackJsonp||[],_=c.push.bind(c);c.push=n,c=c.slice();for(var a=0;a<c.length;a++)n(c[a]);var f=_;u(u.s=0)}([function(e,n,t){Promise.all([t.e(1),t.e(2)]).then(t.bind(null,1)).then(({render:e})=>{const n=document.querySelector("canvas").getContext("2d"),t=o=>{n.clearRect(0,0,150,150),n.fillStyle=r[e(o)],n.fillRect(0,0,150*Math.random(),150*Math.random()),requestAnimationFrame(t)};requestAnimationFrame(t)});const r=["red","green","blue","pink","black","grey"]}]);