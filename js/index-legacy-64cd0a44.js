!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function n(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(t,n,o){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var i=o.call(t,n||"default");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}var i=document.createElement("style");i.innerHTML='@charset "UTF-8";[data-v-40d37ece]:export{themeColor:var(--van-blue)}.sign-drag[data-v-40d37ece]{margin-top:.21333rem}.sign-drag[data-v-40d37ece] .vue-pdf-embed>div{margin-bottom:.21333rem}.sign-drag .contract-document[data-v-40d37ece]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.sign-drag .contract-document .contract-wrapper[data-v-40d37ece]{overflow:hidden;position:relative}.sign-drag .control-tools[data-v-40d37ece]{position:fixed;left:0;bottom:0;width:100%;background-color:#fff;-webkit-box-shadow:0 .05333rem .21333rem .10667rem rgba(0,0,0,.1);box-shadow:0 .05333rem .21333rem .10667rem rgba(0,0,0,.1)}.sign-drag .control-tools .tools-box[data-v-40d37ece]{width:100%;padding:.26667rem .42667rem}.sign-drag .pdf-box[data-v-40d37ece]{width:100%;height:100%;overflow:auto}\n',document.head.appendChild(i),System.register(["./vant-legacy-938866a3.js","./@vue-legacy-703c3bcb.js","./vue-drag-resize-legacy-d7612a86.js","./pdfjs-dist-legacy-440c2aec.js","./index-legacy-c6bf7e32.js","./@vant-legacy-bfdd957e.js","./@antv-legacy-95b7be67.js","./tslib-legacy-238f19fa.js","./fecha-legacy-893f5c8d.js","./vue-legacy-ecdfe711.js","./dommatrix-legacy-e0463043.js","./web-streams-polyfill-legacy-c90a7183.js","./object-inspect-legacy-ad2e9a9f.js","./normalize.css-legacy-9b0443a6.js","./amfe-flexible-legacy-e3938076.js","./js-cookie-legacy-5f5cb1eb.js","./vue-router-legacy-afaed188.js","./vuex-legacy-6788dee4.js","./@vueuse-legacy-9900b9d8.js","./lodash-es-legacy-f3f88486.js","./axios-legacy-10210e28.js","./qs-legacy-5eca16a7.js","./side-channel-legacy-10f964a0.js","./get-intrinsic-legacy-39a148af.js","./has-symbols-legacy-d03493bf.js","./function-bind-legacy-aa6d88e2.js","./has-legacy-275d3594.js","./call-bind-legacy-628f04b5.js","./nprogress-legacy-dfce9313.js","./vue3-hash-calendar-legacy-eca9e526.js","./hammerjs-legacy-fd9fbe53.js"],(function(e){"use strict";var t,o,i,a,r,c,l,u,f,s,d,g,p,y,b,m,v,h,j,w,x,P,O,S,k,D,_,R,z;return{setters:[function(e){t=e.f,o=e.R,i=e.l},function(e){a=e.a,r=e.t,c=e.n,l=e.af,u=e.l,f=e.r,s=e.b,d=e.B,g=e.H,p=e.M,y=e.N,b=e.u,m=e.D,v=e.E,h=e.s,j=e.K,w=e.Q,x=e.v,P=e.F,O=e.P,S=e.aR,k=e.aQ},function(e){D=e.V},function(e){_=e.p,R=e.a},function(e){z=e._},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){_.exports.GlobalWorkerOptions.workerSrc=R;var B=function(e){return S("data-v-40d37ece"),e=e(),k(),e},E={class:"sign-drag st-bg"},H={class:"contract-document"},C=["id"],F=B((function(){return g("h3",null,"Hello World!",-1)})),W={class:"control-tools"},I=B((function(){return g("div",null,"印章",-1)})),T=B((function(){return g("div",null,"签名",-1)})),L=B((function(){return g("div",null,"日期",-1)})),N=u({name:"SignDrag"});e("default",z(Object.assign(N,{setup:function(e,u){var S,k,R=u.expose,z=(S=a({pdfDoc:"",pdfPages:0,pdfScale:1,pdfWidth:1e3,pdfHeight:1143,canvas_id:"pdf-canvas-"}),k=function e(t){l(S.pdfDoc).getPage(t).then((function(n){var o=S.canvas_id+t,i=document.getElementById(o),a=i.getContext("2d"),r=(window.devicePixelRatio||1)/(a.webkitBackingStorePixelRatio||a.mozBackingStorePixelRatio||a.msBackingStorePixelRatio||a.oBackingStorePixelRatio||a.backingStorePixelRatio||1),c=n.getViewport({scale:S.pdfScale});i.width=c.width*r,i.height=c.height*r,i.style.width="375px",i.style.height="400px",S.pdfWidth=375,S.pdfHeight=400,a.setTransform(r,0,0,r,0,0);var l={canvasContext:a,viewport:c};n.render(l),t<S.pdfPages&&e(t+1)}))},n(n({},r(S)),{},{loadFile:function(e){_.exports.getDocument(e).promise.then((function(e){S.pdfDoc=e,S.pdfPages=S.pdfDoc.numPages,c((function(){k(1)}))}))}})),B=z.loadFile,N=z.pdfPages,M=z.pdfWidth,Q=z.pdfHeight,V=f(null);f(1),f(0);var q=a({signList:[{signImg:"http://tva1.sinaimg.cn/large/006nwNl2ly1h71g369jdlj308c03c3yk.jpg",name:"模拟签名1",left:0,top:0,width:137,height:73,type:"sign"}],dropData:[],width:0,height:0,top:0,left:0}),A=r(q),G=A.dropData,K=A.signList,U=A.top,J=A.left,X=function(){G.value.push(K.value[0])},Y=function(e,t){q.width=e.width,q.height=e.height,q.top=e.top,q.left=e.left};return R({onPrint:function(){V.value.print()}}),s((function(){B("http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf")})),function(e,n){var a=t,r=o,c=i;return h(),d("div",E,[g("ul",H,[(h(!0),d(p,null,y(b(N),(function(t){return h(),d("li",{key:t,class:"contract-wrapper",style:j({width:b(M)+"px",height:b(Q)+"px"}),onDragover:n[2]||(n[2]=w((function(){}),["prevent"]))},[(h(),d("canvas",{id:"pdf-canvas-"+t,key:t,draggable:"false",style:{zoom:1}},null,8,C)),1==t?(h(),x(b(D),{key:0,"is-active":!0,"parent-limitation":!0,w:80,h:40,x:b(J),y:b(U),z:9999,onResizing:n[0]||(n[0]=function(t){return Y(t,e.item)}),onDragging:n[1]||(n[1]=function(t){return Y(t,e.item)})},{default:v((function(){return[F]})),_:1},8,["x","y"])):P("",!0)],36)})),128))]),g("div",W,[m(r,{class:"tools-box",type:"flex",align:"center"},{default:v((function(){return[m(a,{span:"12"},{default:v((function(){return[m(r,{type:"flex",align:"center",gutter:"20"},{default:v((function(){return[m(a,null,{default:v((function(){return[I]})),_:1}),m(a,{onClick:X},{default:v((function(){return[T]})),_:1}),m(a,null,{default:v((function(){return[L]})),_:1})]})),_:1})]})),_:1}),m(a,{span:"12"},{default:v((function(){return[m(c,{size:"small",type:"primary",block:""},{default:v((function(){return[O("提交签署")]})),_:1})]})),_:1})]})),_:1})])])}}}),[["__scopeId","data-v-40d37ece"]]))}}}))}();
