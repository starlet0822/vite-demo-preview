!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var n={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(G){l=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),c=new z(r||[]);return i(a,"_invoke",{value:_(t,n,c)}),a}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(G){return{type:"throw",arg:G}}}n.wrap=f;var d={};function h(){}function g(){}function y(){}var v={};l(v,c,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(O([])));b&&b!==r&&o.call(b,c)&&(v=b);var x=y.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(e,n){function r(i,a,c,s){var u=p(e[i],e,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==t(f)&&o.call(f,"__await")?n.resolve(f.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):n.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)}var a;i(this,"_invoke",{value:function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return a=a?a.then(o,o):o()}})}function _(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return S()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=p(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=p(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function O(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:S}}function S(){return{value:void 0,done:!0}}return g.prototype=y,i(x,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:g,configurable:!0}),g.displayName=l(y,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},n.awrap=function(t){return{__await:t}},w(j.prototype),l(j.prototype,s,(function(){return this})),n.AsyncIterator=j,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new j(f(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),l(x,u,"Generator"),l(x,c,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=O,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},n}function n(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,o)}function r(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}var o=document.createElement("style");o.innerHTML='@charset "UTF-8";[data-v-502c11a4]:export{themeColor:var(--van-blue)}.page-wrapper[data-v-502c11a4] .img-type img{width:5em;height:5em;-o-object-fit:cover;object-fit:cover}.page-wrapper .img-box[data-v-502c11a4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.page-wrapper .desc-text[data-v-502c11a4]{display:inline-block;width:100%;font-size:var(--van-font-size-sm);text-align:center;margin-top:.13333rem}.page-wrapper[data-v-502c11a4] .img-compress img{width:100%;height:auto;-o-object-fit:cover;object-fit:cover}.page-wrapper .img-lazyloading .img-lazy[data-v-502c11a4]{padding:.42667rem;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;border-bottom:.02667rem dashed var(--van-border-color)}.page-wrapper .img-lazyloading .img-lazy img[data-v-502c11a4]{width:100%;height:5rem;-o-object-fit:cover;object-fit:cover}\n',document.head.appendChild(o),System.register(["./vant-legacy-938866a3.js","./@vue-legacy-703c3bcb.js","./image-conversion-legacy-f237712d.js","./index-legacy-c6bf7e32.js","./@vant-legacy-bfdd957e.js","./@antv-legacy-95b7be67.js","./tslib-legacy-238f19fa.js","./fecha-legacy-893f5c8d.js","./normalize.css-legacy-9b0443a6.js","./amfe-flexible-legacy-e3938076.js","./js-cookie-legacy-5f5cb1eb.js","./vue-router-legacy-afaed188.js","./vuex-legacy-6788dee4.js","./@vueuse-legacy-9900b9d8.js","./lodash-es-legacy-f3f88486.js","./axios-legacy-10210e28.js","./qs-legacy-5eca16a7.js","./side-channel-legacy-10f964a0.js","./get-intrinsic-legacy-39a148af.js","./has-symbols-legacy-d03493bf.js","./function-bind-legacy-aa6d88e2.js","./has-legacy-275d3594.js","./call-bind-legacy-628f04b5.js","./object-inspect-legacy-ad2e9a9f.js","./nprogress-legacy-dfce9313.js","./vue3-hash-calendar-legacy-eca9e526.js","./hammerjs-legacy-fd9fbe53.js"],(function(t){"use strict";var n,o,i,a,c,s,u,l,f,p,d,h,g,y,v,m,b,x,w,j,_,L,k,E,z;return{setters:[function(t){n=t.e,o=t.G,i=t.k,a=t.I,c=t.i,s=t.f,u=t.R,l=t.j},function(t){f=t.r,p=t.b,d=t.n,h=t.B,g=t.H,y=t.D,v=t.E,m=t.s,b=t.Q,x=t.u,w=t.I,j=t.M,_=t.N,L=t.aR,k=t.aQ},function(t){E=t.i},function(t){z=t._},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var O="/vite-vue3-preview/assets/compress.7baea395.jpg",S=function(t){return L("data-v-502c11a4"),t=t(),k(),t},G={class:"page-wrapper"},N={class:"st-margin-top-10"},P={class:"img-type"},I=S((function(){return g("span",{class:"desc-text"},"img 标签",-1)})),T={class:"img-box"},F=S((function(){return g("span",{class:"desc-text"},"van-image 组件",-1)})),C=S((function(){return g("span",{class:"desc-text"},"van-image 预览",-1)})),R={class:"img-compress st-margin-top-10"},A={class:"img-box"},q={class:"desc-text"},B={class:"img-box"},D={class:"desc-text"},H={class:"img-lazyloading st-margin-top-10"};t("default",z({__name:"image",setup:function(t){var L="https://img.yzcdn.cn/vant/cat.jpeg",k=f(O),z=f(),S=["https://img.yzcdn.cn/vant/cat.jpeg","https://images.pexels.com/photos/9443229/pexels-photo-9443229.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200","https://s4.ax1x.com/2022/03/02/b3NS0A.jpg","https://s4.ax1x.com/2022/03/02/b3Gyo6.jpg","https://images.pexels.com/photos/10865058/pexels-photo-10865058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300"],M=function(){l({images:S,startPosition:0,closeable:!0})};return p(r(e().mark((function t(){var n,r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d();case 2:return t.next=4,E.urltoBlob(O);case 4:return n=t.sent,t.next=7,E.compress(n,{quality:.6});case 7:return r=t.sent,t.next=10,E.filetoDataURL(r);case 10:k.value=t.sent;case 11:case"end":return t.stop()}}),t)})))),function(t,e){var r=n,l=o,f=i,p=a,d=c,E=s,Q=u;return m(),h("div",G,[g("div",N,[g("div",P,[y(r,{title:"图片加载",border:!1}),y(d,{border:!0,"column-num":3,center:""},{default:v((function(){return[y(l,null,{default:v((function(){return[g("div",{class:"img-box"},[g("img",{src:L}),I])]})),_:1}),y(l,null,{default:v((function(){return[g("div",T,[y(p,{src:L,round:""},{loading:v((function(){return[y(f,{type:"spinner",size:"20"})]})),_:1}),F])]})),_:1}),y(l,null,{default:v((function(){return[y(p,{src:S[0],onClick:b(M,["stop"])},{loading:v((function(){return[y(f,{type:"spinner",size:"20"})]})),_:1},8,["src","onClick"]),C]})),_:1})]})),_:1})]),g("div",R,[y(r,{title:"图片压缩",border:!1}),y(d,{border:!0,"column-num":2,center:""},{default:v((function(){return[y(l,null,{default:v((function(){return[g("div",A,[y(p,{ref_key:"compressImgRef",ref:z,src:x(O)},{loading:v((function(){return[y(f,{type:"spinner",size:"20"})]})),_:1},8,["src"]),g("span",q,"压缩前"+w(),1)])]})),_:1}),y(l,null,{default:v((function(){return[g("div",B,[y(p,{src:x(k)},{loading:v((function(){return[y(f,{type:"spinner",size:"20"})]})),_:1},8,["src"]),g("span",D,"压缩后"+w(),1)])]})),_:1})]})),_:1})]),g("div",H,[y(r,{title:"懒加载",border:!1}),y(Q,null,{default:v((function(){return[(m(),h(j,null,_(S,(function(t,e){return y(E,{key:t+e,span:"24",class:"img-lazy"},{default:v((function(){return[y(p,{src:t,"lazy-load":""},{loading:v((function(){return[y(f,{type:"spinner",size:"20"})]})),_:2},1032,["src"])]})),_:2},1024)})),64))]})),_:1})])])])}}},[["__scopeId","data-v-502c11a4"]]))}}}))}();
