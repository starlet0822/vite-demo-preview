!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(t,n,r){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,n||"default");if("object"!==e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}var a=document.createElement("style");a.innerHTML='@charset "UTF-8";[data-v-2f912126]:export{themeColor:var(--van-blue)}.signature .signature__penSize[data-v-2f912126]{padding:0 .42667rem .53333rem}.signature .signature__penSize .size-text[data-v-2f912126]{font-size:var(--van-font-size-md);padding:.26667rem 0}.signature .signature__penSize .slider-button[data-v-2f912126]{color:var(--49fe0a0f);-webkit-box-shadow:0 0 0 .10667rem #e5e7ea;box-shadow:0 0 0 .10667rem #e5e7ea;font-size:var(--van-font-size-sm);width:.53333rem;height:.53333rem;line-height:.53333rem;text-align:center;background-color:#fff;border-radius:50%}.signature .signature-wrapper[data-v-2f912126]{position:relative;background-color:#fff}.signature .signature-wrapper .tip-text[data-v-2f912126]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:#eee}.signature .signature__control[data-v-2f912126]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:.42667rem}.signature .signature__control .ctrl-color .active-color[data-v-2f912126]{-webkit-box-shadow:0 0 0 .10667rem #c5c5c5;box-shadow:0 0 0 .10667rem #c5c5c5}.signature .signature__control .ctrl-color .color-btn[data-v-2f912126]{float:left;width:.53333rem;height:.53333rem;margin-right:.53333rem;cursor:pointer;border-radius:50%}.signature .signature__control .ctrl-color .color-btn-black[data-v-2f912126]{background-color:#001330}[data-v-0939647c]:export{themeColor:var(--van-blue)}.layout__page .preview[data-v-0939647c]{margin-top:.26667rem;background:#fff}.layout__page .preview img[data-v-0939647c]{width:100%;height:auto}\n',document.head.appendChild(a),System.register(["./vant-legacy-b2181f9b.js","./index-legacy-dbd704a5.js","./@vue-legacy-c040f40e.js","./signature_pad-legacy-de9cfdf6.js","./intro.js-legacy-66104404.js","./plugin-vue_export-helper-legacy-37b3dbd0.js","./@vant-legacy-105072c1.js","./vue-router-legacy-78aaaf21.js"],(function(e){"use strict";var t,r,a,i,o,l,c,u,s,f,d,v,p,b,g,m,y,h,_,k,w,j,x,O,S,C,z,P,E,D,L;return{setters:[function(e){e.p,t=e.j,r=e.q,a=e.d,i=e.B},function(e){o=e._},function(e){l=e.D,c=e.bl,u=e.u,s=e.g,f=e.j,d=e.k,v=e.l,p=e.E,b=e.x,g=e.o,m=e.c,y=e.ap,h=e.a,_=e.F,k=e.b,w=e.n,j=e.f,x=e.e,O=e.b8,S=e.L,C=e.at,z=e.aN,P=e.aM},function(e){E=e.S},function(e){D=e.I},function(e){L=e._},function(){},function(){}],execute:function(){var q={class:"signature"},I={class:"signature-wrapper"},R={key:0,class:"tip-text st-font-24"},T={class:"signature__control van-hairline--top st-bg-white"},W={class:"ctrl-color"},B=["onClick"],F={class:"ctrl-btn"},H=l({name:"Signature"}),M=L(Object.assign(H,{props:{options:{type:Object,default:function(){return{}}}},emits:["save"],setup:function(e,r){var a=r.expose,i=r.emit,o=e;c((function(e){return{"49fe0a0f":u(P)}}));s((function(){D().exit()}));var l=f(null),C=f(null),z=f(!0),P=f("#000"),L=d(["#000","#2489f3","#ed521f"]),H=f(.5);v((function(){M()})),p((function(){C.value=null})),b((function(){return C.value}),(function(e,t){z.value=e._isEmpty}),{deep:!0});var M=function(){var e={minWidth:H.value,maxWidth:5,penColor:P.value,backgroundColor:"rgb(255, 255, 255)"};C.value=new E(l.value,n(n({},e),o.options)),z.value=C.value.isEmpty(),l.value.width=document.body.clientWidth,l.value.height=document.body.clientHeight/2,C.value.addEventListener("beginStroke",(function(){z.value=!1}),{once:!1})},N=function(){var e=C.value.toData();e&&(e.pop(),C.value.fromData(e))},U=function(){C.value.clear(),A()},A=function(){if(C.value.isEmpty())i("save",null);else{var e=C.value.toDataURL();i("save",e)}};return a({guide:function(){D().setOptions({prevLabel:"上一步",nextLabel:"下一步",skipLabel:"跳过",doneLabel:"知道了",showBullets:!1,disableInteraction:!0,exitOnOverlayClick:!1,steps:[{element:document.querySelector("canvas"),title:"签名区域",intro:"您可以在此处手写签名",position:"top"},{element:document.querySelector(".ctrl-color"),title:"手写笔颜色",intro:"您可以切换手写笔颜色",position:"top"},{element:document.querySelector(".ctrl-btn"),title:"操作",intro:"您可以撤销、清空、保存签名",position:"bottom"}]}).start()}}),function(e,n){var r=t;return g(),m("div",q,[y("",!0),h("main",I,[u(z)?(g(),m("h2",R,"请在此处签名")):y("",!0),h("canvas",{ref_key:"canvasRef",ref:l},"您的浏览器不支持canvas技术,请升级浏览器!",512)]),h("footer",T,[h("div",W,[(g(!0),m(_,null,k(u(L),(function(e){return g(),m("div",{key:e,style:w({"background-color":e}),class:j(["color-btn",{"active-color":e===u(P)}]),onClick:function(t){return function(e){C.value.penColor=P.value=e}(e)}},null,14,B)})),128))]),h("div",F,[x(r,{icon:"revoke",size:"small",disabled:u(z),onClick:N},{default:O((function(){return[S("撤销")]})),_:1},8,["disabled"]),x(r,{icon:"cross",size:"small",style:{"margin-left":"12px"},type:"danger",disabled:u(z),onClick:U},{default:O((function(){return[S(" 清空 ")]})),_:1},8,["disabled"]),x(r,{icon:"success",size:"small",type:"primary",disabled:u(z),style:{"margin-left":"12px"},onClick:A},{default:O((function(){return[S(" 保存 ")]})),_:1},8,["disabled"])])])])}}}),[["__scopeId","data-v-2f912126"]]),N={class:"layout__page"},U=function(e){return z("data-v-0939647c"),e=e(),P(),e}((function(){return h("span",{class:"st-margin-right-10"},"签名教程",-1)})),A={class:""},G={key:0,class:"preview"},J=["src"],K=l({name:"Signature"});e("default",L(Object.assign(K,{setup:function(e){var t=f(null),n=f(null),l=function(){n.value.guide()},c=function(){},s=function(e){if(t.value=e,!t.value)return!1};return function(e,f){var d=r,v=o,p=a,b=i;return g(),m("div",N,[x(v,null,{right:O((function(){return[h("div",{class:"guide-icon st-font-12 st-flex-ai",onClick:l},[U,x(d,{name:"info",size:"14"})])]})),_:1}),h("div",A,[x(p,{title:"手写签名区域",border:!1}),x(M,{ref_key:"signaturePadRef",ref:n,onSave:s},null,512),(g(),m("div",G,[x(p,{title:"预览签名区域",center:""},C({_:2},[void 0]),1024),u(t)?(g(),m("img",{key:0,class:"sign-img",src:u(t),onClick:c},null,8,J)):y("",!0)]))]),x(b)])}}}),[["__scopeId","data-v-0939647c"]]))}}}))}();
