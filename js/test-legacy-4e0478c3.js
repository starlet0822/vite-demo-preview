!function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,c)}return t}function t(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(n){c(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(n,t,c){return(t=function(n){var t=function(n,t){if("object"!==e(n)||null===n)return n;var c=n[Symbol.toPrimitive];if(void 0!==c){var a=c.call(n,t||"default");if("object"!==e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(n,"string");return"symbol"===e(t)?t:String(t)}(t))in n?Object.defineProperty(n,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[t]=c,n}System.register(["./index-legacy-aa12941e.js","./index-legacy-814f6fce.js","./vue-router-legacy-cae879a2.js","./plugin-vue_export-helper-legacy-37b3dbd0.js","./@vue-legacy-39326993.js","./vant-legacy-39daf5e8.js","./@vant-legacy-fcf8e23d.js","./index-legacy-09a90743.js","./normalize.css-legacy-9b0443a6.js","./amfe-flexible-legacy-e3938076.js","./js-cookie-legacy-5f5cb1eb.js","./vuex-legacy-125cfe16.js","./lodash-es-legacy-5e39d6c3.js","./axios-legacy-10210e28.js","./qs-legacy-5895894e.js","./side-channel-legacy-2b88a05f.js","./get-intrinsic-legacy-39a148af.js","./has-symbols-legacy-d03493bf.js","./function-bind-legacy-aa6d88e2.js","./has-legacy-275d3594.js","./call-bind-legacy-628f04b5.js","./object-inspect-legacy-7c542a43.js","./@antv-legacy-a9dadf71.js","./tslib-legacy-238f19fa.js","./fecha-legacy-893f5c8d.js","./nprogress-legacy-f6e28caf.js","./vue3-hash-calendar-legacy-8dbb168e.js","./hammerjs-legacy-fd9fbe53.js"],(function(e){"use strict";var n,c,a,r,o,i,u,f,s,l,b,y,g,j;return{setters:[function(e){n=e._},function(e){c=e._},function(e){a=e.u},function(e){r=e._},function(e){o=e.m,i=e.a,u=e._,f=e.ak,s=e.l,l=e.b7,b=e.aI,y=e.ai,g=e.aP,j=e.aQ},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var p=o({name:"Test",components:{},setup:function(){var e=a(),n=i({tabActive:0,tabs:["列表页1","列表页2","列表页3","列表页4"]});switch(n.tabActive){case 0:case 1:e.replace({name:"ListDemo"});break;case 2:e.replace({name:"Upload"});break;case 3:e.replace({name:"Fixed"})}return t(t({},u(n)),{},{handleTabChange:function(t){switch(n.tabActive=t,n.tabActive){case 0:e.replace({name:"ListDemo"});break;case 1:e.replace({name:"Upload"})}}})}}),d={class:"test-wrapper st-bg"};e("default",r(p,[["render",function(e,t,a,r,o,i){var u=c,p=g("router-view"),v=n;return b(),f("div",d,[s(u),s(v,{active:e.tabActive,"onUpdate:active":t[0]||(t[0]=function(n){return e.tabActive=n}),tabs:e.tabs,onChange:e.handleTabChange},{default:l((function(){return[s(p,null,{default:l((function(e){var n=e.Component;return[(b(),y(j(n)))]})),_:1})]})),_:1},8,["active","tabs","onChange"])])}]]))}}}))}();
