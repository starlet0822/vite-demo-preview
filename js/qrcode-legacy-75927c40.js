!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var n={},r=Object.prototype,o=r.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(C){f=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),c=new k(r||[]);return a(i,"_invoke",{value:O(t,n,c)}),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(C){return{type:"throw",arg:C}}}n.wrap=s;var p={};function g(){}function y(){}function v(){}var h={};f(h,c,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(S([])));b&&b!==r&&o.call(b,c)&&(h=b);var w=v.prototype=g.prototype=Object.create(h);function x(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function j(e,n){function r(a,i,c,u){var l=d(e[a],e,i);if("throw"!==l.type){var f=l.arg,s=f.value;return s&&"object"==t(s)&&o.call(s,"__await")?n.resolve(s.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):n.resolve(s).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,u)}))}u(l.arg)}var i;a(this,"_invoke",{value:function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}})}function O(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return P()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=_(i,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=d(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function _(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var o=d(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:P}}function P(){return{value:void 0,done:!0}}return y.prototype=v,a(w,"constructor",{value:v,configurable:!0}),a(v,"constructor",{value:y,configurable:!0}),y.displayName=f(v,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,f(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},n.awrap=function(t){return{__await:t}},x(j.prototype),f(j.prototype,u,(function(){return this})),n.AsyncIterator=j,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new j(s(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(w),f(w,l,"Generator"),f(w,c,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=S,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},n}function n(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(l){return void n(l)}c.done?e(u):Promise.resolve(u).then(r,o)}function r(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(e,n,r){return(n=function(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,n||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===t(n)?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var c=document.createElement("style");c.innerHTML='@charset "UTF-8";[data-v-386832c4]:export{themeColor:var(--van-blue)}[data-v-0ac05cf7]:export{themeColor:var(--van-blue)}.layout__page .qrcode-box .qrcode-item[data-v-0ac05cf7]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.layout__page .qrcode-box .desc[data-v-0ac05cf7]{font-size:var(--van-font-size-sm);text-align:center}\n',document.head.appendChild(c),System.register(["./vant-legacy-3da83ae3.js","./jsbarcode-legacy-0e53fd3a.js","./@vue-legacy-39326993.js","./qrcode-legacy-cf5d7933.js","./plugin-vue_export-helper-legacy-37b3dbd0.js","./lodash-es-legacy-72b1cdbe.js","./index-legacy-d5bdb900.js","./@zxing-legacy-76893139.js","./html5-qrcode-legacy-1cfcaf68.js","./index-legacy-c2fbeeb7.js","./js-cookie-legacy-5f5cb1eb.js","./@vant-legacy-fcf8e23d.js","./encode-utf8-legacy-09932b5e.js","./dijkstrajs-legacy-3d013e92.js","./vue-router-legacy-cae879a2.js","./ts-custom-error-legacy-f2e2fe8b.js","./@antv-legacy-a9dadf71.js","./tslib-legacy-238f19fa.js","./fecha-legacy-893f5c8d.js","./normalize.css-legacy-9b0443a6.js","./amfe-flexible-legacy-e3938076.js","./vuex-legacy-125cfe16.js","./@vueuse-legacy-6ef09dea.js","./axios-legacy-10210e28.js","./qs-legacy-5895894e.js","./side-channel-legacy-2b88a05f.js","./get-intrinsic-legacy-39a148af.js","./has-symbols-legacy-d03493bf.js","./function-bind-legacy-aa6d88e2.js","./has-legacy-275d3594.js","./call-bind-legacy-628f04b5.js","./object-inspect-legacy-7c542a43.js","./nprogress-legacy-f6e28caf.js","./vue3-hash-calendar-legacy-8dbb168e.js","./hammerjs-legacy-fd9fbe53.js"],(function(t){"use strict";var n,o,i,c,u,l,f,s,d,p,g,y,v,h,m,b,w,x,j,O,_,L,E,k,S,P,C,T,D,N,q,R,F,I,U,z,G,A,V,H,Q;return{setters:[function(t){n=t.n,o=t.R,i=t.x,c=t.U,u=t.y,l=t.B,f=t.h,s=t.r,d=t.c,p=t.s},function(t){g=t.J},function(t){y=t.m,v=t.r,h=t.b,m=t.aI,b=t.ai,w=t.aQ,x=t.c,j=t.w,O=t.ak,_=t.aj,L=t.a4,E=t.u,k=t.n,S=t.l,P=t.al,C=t.b7,T=t.f,D=t.v,N=t.F,q=t.aN,R=t.aK,F=t.aJ,I=t.C},function(t){U=t.b},function(t){z=t._},function(t){G=t.d,A=t.i},function(t){V=t._},function(){},function(t){H=t.H},function(t){Q=t.t},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){function Y(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now(),n=t.split(","),r=n[0].match(/:(.*?);/)[1],o=r.split("/")[1],a=window.atob(n[1]),i=a.length,c=new Uint8Array(i);i--;)c[i]=a.charCodeAt(i);return new File([c],"".concat(e,".").concat(o),{type:r})}var B=y({name:"BarcodeCreate"}),M=Object.assign(B,{props:{tag:{type:String,default:"canvas"},text:{type:String,default:null},options:{type:Object,default:function(){return{}}},type:{type:String,default:"CODE128"}},setup:function(t){var e=t,n=v(null);return h((function(){var t=a(a({},e.options),{},{format:e.type});g(n.value,e.text,t)})),function(e,r){return m(),b(w(t.tag),{ref_key:"wrapEl",ref:n},null,512)}}}),J=y({name:"QRCodeCreate"}),K=Object.assign(J,{props:{tag:{type:String,default:"canvas"},text:{type:[String,Array],default:null},options:{type:Object,default:function(){return{}}},width:{type:[Number,String],default:100},logo:{type:[String,Object],default:function(){return""}}},emits:["done","click","disabled-click"],setup:function(t,n){var o=n.emit,i=t,c=U,u=c.toCanvas,l=c.toDataURL,f=v(!0),s=v(null),d=x((function(){return String(i.text)})),p=x((function(){return{width:i.width+"px",height:i.width+"px"}})),g=function(){var t=r(e().mark((function t(){var n,r,c,p,g;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,k();case 3:if(n=G(i.options||{}),"canvas"!==i.tag){t.next=25;break}return n.errorCorrectionLevel=n.errorCorrectionLevel||w(E(d)),t.next=8,b(E(d),n);case 8:return r=t.sent,n.scale=0===i.width?void 0:i.width/r*4,t.next=12,u(E(s),E(d),n);case 12:if(c=t.sent,!i.logo){t.next=21;break}return t.next=16,y(c);case 16:p=t.sent,o("done",p),f.value=!1,t.next=23;break;case 21:o("done",c.toDataURL()),f.value=!1;case 23:t.next=31;break;case 25:return t.next=27,l(d.value,a({errorCorrectionLevel:"H",width:i.width},n));case 27:g=t.sent,E(s).src=g,o("done",g),f.value=!1;case 31:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();j((function(){return d.value}),(function(t){t&&g()}),{deep:!0,immediate:!0});var y=function(t){var e=t.width,n=Object.assign({logoSize:.15,bgColor:"#ffffff",borderSize:.05,crossOrigin:"anonymous",borderRadius:8,logoRadius:0},A(i.logo)?{}:i.logo),r=n.logoSize,o=void 0===r?.15:r,a=n.bgColor,c=void 0===a?"#ffffff":a,u=n.borderSize,l=void 0===u?.05:u,f=n.crossOrigin,s=void 0===f?"anonymous":f,d=n.borderRadius,p=void 0===d?8:d,g=n.logoRadius,y=void 0===g?0:g,v=A(i.logo)?i.logo:i.logo.src,m=e*o,b=e*(1-o)/2,w=e*(o+l),x=e*(1-o-l)/2,j=t.getContext("2d");if(j){h(j)(x,x,w,w,p),j.fillStyle=c,j.fill();var O=new Image;(s||y)&&O.setAttribute("crossOrigin",s),O.src=v;return new Promise((function(e){O.onload=function(){y?function(t){var e=document.createElement("canvas");e.width=b+m,e.height=b+m;var n=e.getContext("2d");if(n&&j&&(n.drawImage(t,b,b,m,m),h(j)(b,b,m,m,y),j)){var r=j.createPattern(e,"no-repeat");r&&(j.fillStyle=r,j.fill())}}(O):function(t){j.drawImage(t,b,b,m,m)}(O),e(t.toDataURL())}}))}},h=function(t){return function(e,n,r,o,a){var i=Math.min(r,o);return a>i/2&&(a=i/2),t.beginPath(),t.moveTo(e+a,n),t.arcTo(e+r,n,e+r,n+o,a),t.arcTo(e+r,n+o,e,n+o,a),t.arcTo(e,n+o,e,n,a),t.arcTo(e,n,e+r,n,a),t.closePath(),t}},b=function(){var t=r(e().mark((function t(n,r){var o;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=document.createElement("canvas"),t.next=3,u(o,n,r);case 3:return t.abrupt("return",o.width);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),w=function(t){return t.length>36?"M":t.length>16?"Q":"H"};return function(e,n){return m(),O("div",{class:"qrcode",style:L(E(p))},["canvas"===t.tag?(m(),O("canvas",{key:0,ref_key:"wrapRef",ref:s},null,512)):_("",!0),"img"===t.tag?(m(),O("img",{key:1,ref_key:"wrapRef",ref:s},null,512)):_("",!0)],4)}}}),$=z(K,[["__scopeId","data-v-386832c4"]]),W=function(t){return R("data-v-0ac05cf7"),t=t(),F(),t},X={class:"layout__page"},Z={class:"layout__body"},tt=W((function(){return P("div",{class:"desc"},"canvas生成",-1)})),et=W((function(){return P("div",{class:"desc"},"自定义样式生成",-1)})),nt=W((function(){return P("div",{class:"desc"},"img生成",-1)})),rt=W((function(){return P("div",{id:"reader"},null,-1)})),ot=y({name:"QrcodeAndBarcode"});t("default",z(Object.assign(ot,{setup:function(t){var e=v(["1","2","3"]),r=v([]),a=".png,.jpg,.jpeg",g=function(t){return!!/image\/(png|jpg|jpeg)$/.test(t.type)||(f("请上传 ".concat(a," 格式图片")),!1)},y=Q,h=function(t){j(t.file)},w=[{tag:"canvas",text:"CODE128 TYPE",type:"CODE128",options:{}},{tag:"img",text:"CODE39 TYPE",type:"CODE39",options:{lineColor:y}}],x=function(t){var e=t.target;j(e)},j=function(t){s({message:"识别中..."});var e=new H("reader"),n=null;t instanceof File?n=t:("canvas"===t.tagName.toLocaleLowerCase()&&(n=Y(t.toDataURL())),"img"===t.tagName.toLocaleLowerCase()&&(n=Y(t.src))),e.scanFile(n,!1).then((function(t){d(),p({type:"success",message:"识别结果为："+t,position:"bottom"})})).catch((function(t){d(),p({type:"danger",message:"识别失败",position:"bottom"})}))};return function(t,f){var s=V,d=$,p=n,v=o,j=i,_=M,L=c,k=u,R=l,F=I("press");return m(),O("div",X,[S(s),P("div",Z,[S(k,{modelValue:E(e),"onUpdate:modelValue":f[1]||(f[1]=function(t){return T(e)?e.value=t:null})},{default:C((function(){return[S(j,{title:"二维码（长按可以识别哦~）",name:"1"},{default:C((function(){return[S(v,{type:"flex",gutter:10,class:"qrcode-box"},{default:C((function(){return[S(p,{class:"qrcode-item"},{default:C((function(){return[D(S(d,{text:"我是canvas生成的二维码"},null,512),[[F,x]]),tt]})),_:1}),(m(),b(p,{key:0,class:"qrcode-item"},{default:C((function(){return[D(S(d,{id:"img-qrcode",text:"我是有样式的二维码",tag:"img",options:{color:{dark:E(y)}}},null,8,["options"]),[[F,x]]),et]})),_:1})),S(p,{class:"qrcode-item"},{default:C((function(){return[D(S(d,{tag:"img",text:"我是img生成的二维码"},null,512),[[F,x]]),nt]})),_:1})]})),_:1})]})),_:1}),S(j,{title:"条形码（长按可以识别哦~）",name:"2"},{default:C((function(){return[S(v,{type:"flex",gutter:10},{default:C((function(){return[(m(),O(N,null,q(w,(function(t,e){return S(p,{key:e,span:24},{default:C((function(){return[D(S(_,{tag:t.tag,text:t.text,type:t.type,options:t.options},null,8,["tag","text","type","options"]),[[F,x]])]})),_:2},1024)})),64))]})),_:1})]})),_:1}),S(j,{title:"上传(二维码/条形码)图片识别",name:"3"},{default:C((function(){return[S(L,{modelValue:E(r),"onUpdate:modelValue":f[0]||(f[0]=function(t){return T(r)?r.value=t:null}),"max-count":"1",accept:a,"before-read":g,"after-read":h},null,8,["modelValue"])]})),_:1})]})),_:1},8,["modelValue"]),rt]),S(R)])}}}),[["__scopeId","data-v-0ac05cf7"]]))}}}))}();