!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(t,n,r){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}System.register(["./plugin-vue_export-helper-legacy-c6aa7c23.js","./index-legacy-2ba5397d.js","./index-legacy-3c7b6cf8.js","./index-legacy-686f7fa8.js","./index-legacy-7b41d9a1.js","./index-legacy-e16bb2a1.js","./use-route-legacy-2aa8ff6e.js","./use-id-legacy-b0f2ddc5.js","./index-legacy-023a71ff.js"],(function(e,t){"use strict";var r,o,a,i,u,c,l,s,f,p,b,d,y,v,m,g,h,j,C,O,w,S;return{setters:[function(e){r=e._},function(e){o=e.d,a=e.f,i=e.k,u=e.j,c=e.ag,l=e.A,s=e.r,f=e.ah,p=e.t,b=e.p,d=e.q,y=e.F,v=e.G,m=e.g,g=e.m,h=e.s,j=e.I},function(e){C=e.C},null,function(e){O=e.T,w=e.a},function(e){S=e.B},null,null,null],execute:function(){var t=document.createElement("style");t.textContent='@charset "UTF-8";[data-v-ee3221f8]:export{themeColor:var(--van-blue)}[data-v-53455446]:export{themeColor:var(--van-blue)}\n',document.head.appendChild(t);var k=o({name:"ZyFooter",props:{bottom:{type:[Number,String],default:0}},setup:function(){return{}}}),x={class:"footer-wrapper st-footer"};var T=r(k,[["render",function(e,t,n,r,o,c){return a(),i("footer",x,[u(e.$slots,"default")])}]]),A=o({name:"ZyMain",props:{top:{type:[Number,String],default:0},bottom:{type:[Number,String],default:50}},setup:function(){return{RootValue:c}}});var _=r(A,[["render",function(e,t,n,r,o,c){return a(),i("main",{style:l({top:+e.top/e.RootValue+"rem",bottom:+e.bottom/e.RootValue+"rem"}),class:"main-wrapper st-main"},[u(e.$slots,"default")],4)}]]),P=o({name:"ZyHeader",props:{top:{type:[Number,String],default:0}},setup:function(){return{RootValue:c}}});var N=r(P,[["render",function(e,t,n,r,o,c){return a(),i("header",{style:l({top:+e.top/e.RootValue+"rem"}),class:"header-wrapper st-header"},[u(e.$slots,"default")],4)}]]),E=o({name:"MoveTab",props:{active:{type:[Number,String],default:0},tabs:{type:Array,default:function(){return["主页","列表页"]}}},emits:["update:active","change"],setup:function(e,t){var r=t.emit,o=s({tabActive:e.active,currentComponent:"",keyword:"",themeColor:f});console.log(e.active,o.tabActive);return n(n({},p(o)),{},{onClickTab:function(e){},onTabsChange:function(e,t){console.log("onTabsChange",e,t),r("update:active",e),r("change",e)}})}}),R={class:"tabs-wrapper"};var V=r(E,[["render",function(e,t,n,r,o,c){var l=O,s=w;return a(),i("div",R,[b(s,g(e.$attrs,{active:e.tabActive,"onUpdate:active":t[0]||(t[0]=function(t){return e.tabActive=t}),color:e.themeColor,ellipsis:!1,sticky:!0,animated:"",border:"",swipeable:"","title-active-color":e.themeColor,"title-inactive-color":"#8c8c8c",onChange:e.onTabsChange,onClickTab:e.onClickTab}),{default:d((function(){return[(a(!0),i(y,null,v(e.tabs,(function(t,n){return a(),m(l,{key:t+n,name:n,title:t},{default:d((function(){return[u(e.$slots,"default",{},void 0,!0)]})),_:2},1032,["name","title"])})),128))]})),_:3},16,["active","color","title-active-color","onChange","onClickTab"])])}],["__scopeId","data-v-ee3221f8"]]),$=o({name:"Fixed",components:{},setup:function(){var e=s({tabActive:1,tabs:["栏目1","栏目2","栏目3"]});return n(n({},p(e)),{},{handleTabChange:function(){}})}}),D={class:"fixed-wrapper"};e("default",r($,[["render",function(e,t,n,r,o,u){var c=V,l=N,s=C,f=_,p=S,m=T;return a(),i("div",D,[b(l,null,{default:d((function(){return[b(c,{active:e.tabActive,"onUpdate:active":t[0]||(t[0]=function(t){return e.tabActive=t}),tabs:e.tabs,onChange:e.handleTabChange},null,8,["active","tabs","onChange"])]})),_:1}),b(f,null,{default:d((function(){return[0==e.tabActive?(a(),i(y,{key:0},v(5,(function(e){return b(s,{class:"zy-margin-top-10",title:"内容..."})})),64)):h("",!0),1==e.tabActive?(a(),i(y,{key:1},v(10,(function(e){return b(s,{class:"zy-margin-top-10",title:"内容..."})})),64)):h("",!0),2==e.tabActive?(a(),i(y,{key:2},v(20,(function(e){return b(s,{class:"zy-margin-top-10",title:"内容..."})})),64)):h("",!0)]})),_:1}),b(m,null,{default:d((function(){return[b(p,{block:"",type:"primary"},{default:d((function(){return[j("提交")]})),_:1})]})),_:1})])}],["__scopeId","data-v-53455446"]]))}}}))}();