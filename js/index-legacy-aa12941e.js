!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?t(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(t,r,n){return(r=function(t){var r=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===e(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}var o=document.createElement("style");o.innerHTML='@charset "UTF-8";[data-v-ee3221f8]:export{themeColor:#1c71fb}\n',document.head.appendChild(o),System.register(["./vant-legacy-39daf5e8.js","./index-legacy-09a90743.js","./plugin-vue_export-helper-legacy-37b3dbd0.js","./@vue-legacy-39326993.js"],(function(e){"use strict";var t,n,o,i,c,a,u,l,f,b,s,p,y,v,m,d;return{setters:[function(e){t=e.j,n=e.k},function(e){o=e.t},function(e){i=e._},function(e){c=e.m,a=e.a,u=e._,l=e.aI,f=e.ak,b=e.l,s=e.b7,p=e.F,y=e.aN,v=e.ai,m=e.aO,d=e.t}],execute:function(){var g=c({name:"MoveTab",props:{active:{type:[Number,String],default:0},tabs:{type:Array,default:function(){return["主页","列表页"]}}},emits:["update:active","change"],setup:function(e,t){var n=t.emit,i=a({tabActive:e.active,currentComponent:"",keyword:"",themeColor:o});return r(r({},u(i)),{},{onClickTab:function(e){},onTabsChange:function(e,t){n("update:active",e),n("change",e)}})}}),h={class:"tabs-wrapper"};e("_",i(g,[["render",function(e,r,o,i,c,a){var u=t,g=n;return l(),f("div",h,[b(g,d(e.$attrs,{active:e.tabActive,"onUpdate:active":r[0]||(r[0]=function(t){return e.tabActive=t}),color:e.themeColor,ellipsis:!1,sticky:!0,animated:"",border:"",swipeable:"","title-active-color":e.themeColor,"title-inactive-color":"#8c8c8c",onChange:e.onTabsChange,onClickTab:e.onClickTab}),{default:s((function(){return[(l(!0),f(p,null,y(e.tabs,(function(t,r){return l(),v(u,{key:t+r,name:r,title:t},{default:s((function(){return[m(e.$slots,"default",{},void 0,!0)]})),_:2},1032,["name","title"])})),128))]})),_:3},16,["active","color","title-active-color","onChange","onClickTab"])])}],["__scopeId","data-v-ee3221f8"]]))}}}))}();