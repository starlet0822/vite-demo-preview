!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(P){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),c=new L(n||[]);return a(i,"_invoke",{value:_(t,r,c)}),i}function v(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}r.wrap=f;var b={};function d(){}function m(){}function p(){}var h={};s(h,c,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(E([])));g&&g!==n&&o.call(g,c)&&(h=g);var x=p.prototype=d.prototype=Object.create(h);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(e,r){function n(a,i,c,l){var u=v(e[a],e,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==t(f)&&o.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,l)}),(function(t){n("throw",t,c,l)})):r.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,l)}))}l(u.arg)}var i;a(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}})}function _(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===b)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=v(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===b)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function S(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),b;var o=v(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,b;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,b):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,b)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function E(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:O}}function O(){return{value:void 0,done:!0}}return m.prototype=p,a(x,"constructor",{value:p,configurable:!0}),a(p,"constructor",{value:m,configurable:!0}),m.displayName=s(p,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},r.awrap=function(t){return{__await:t}},w(k.prototype),s(k.prototype,l,(function(){return this})),r.AsyncIterator=k,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new k(f(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(x),s(x,u,"Generator"),s(x,c,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(z),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,b):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),z(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;z(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),b}},r}function r(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(u){return void r(u)}c.done?e(l):Promise.resolve(l).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,l,"next",t)}function l(t){r(i,o,a,c,l,"throw",t)}c(void 0)}))}}function o(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,r,n){return(r=function(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,r||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===t(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(s){u=!0,o=s}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(t,e)||c(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){if(t){if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy-52ef6c76.js","./index-legacy-c1ab3888.js","./plugin-vue_export-helper-legacy-c6aa7c23.js","./use-placeholder-legacy-889b45a7.js","./use-route-legacy-73bd4e19.js"],(function(t,r){"use strict";var c,l,u,s,f,v,b,d,m,p,h,y,g,x,w,k,_,S,j,z,L,E,O,P,I,A,C,N,T,B,G,F,$,V,q,R,U,J,H,Q,Y,M,Z,D,K,W,X,tt,et,rt,nt,ot,at,it,ct;return{setters:[function(t){c=t.a1,l=t.d,u=t.a,s=t.c,f=t.a2,v=t.cP,b=t.cg,d=t.cd,m=t.cQ,p=t.o,h=t.bl,y=t.bo,g=t.w,x=t.p,w=t.P,k=t.m,_=t.aJ,S=t.a3,j=t.av,z=t.cR,L=t.ca,E=t.B,O=t.cS,P=t.a7,I=t.c5,A=t.ax,C=t.ck,N=t.cu,T=t.ak,B=t.a5,G=t.a6,F=t.cT,$=t.U,V=t.aa,q=t.Z,R=t.cU,U=t.cO,J=t.f,H=t.k,Q=t.x,Y=t.g,M=t.u,Z=t.j,D=t.q,K=t.F,W=t.G,X=t.y,tt=t.J,et=t.s,rt=t.z},function(t){nt=t.N},function(t){ot=t._},function(t){at=t.u},function(t){it=t.r,ct=t.u}],execute:function(){var r=document.createElement("style");r.textContent='@charset "UTF-8";:root{--van-back-top-size: 1.06667rem;--van-back-top-right: .8rem;--van-back-top-bottom: 1.06667rem;--van-back-top-z-index: 100;--van-back-top-icon-size: .53333rem;--van-back-top-text-color: #fff;--van-back-top-background: var(--van-blue)}.van-back-top{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:var(--van-back-top-size);height:var(--van-back-top-size);right:var(--van-back-top-right);bottom:var(--van-back-top-bottom);z-index:var(--van-back-top-z-index);cursor:pointer;color:var(--van-back-top-text-color);border-radius:var(--van-radius-max);-webkit-box-shadow:0 .05333rem .21333rem rgba(0,0,0,.12);box-shadow:0 .05333rem .21333rem rgba(0,0,0,.12);-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transition:var(--van-duration-base) cubic-bezier(.25,.8,.5,1);-o-transition:var(--van-duration-base) cubic-bezier(.25,.8,.5,1);transition:var(--van-duration-base) cubic-bezier(.25,.8,.5,1);background-color:var(--van-back-top-background)}.van-back-top:active{opacity:var(--van-active-opacity)}.van-back-top__placeholder{display:none}.van-back-top--active{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.van-back-top__icon{font-size:var(--van-back-top-icon-size);font-weight:var(--van-font-bold)}:root{--van-tabbar-height: 1.33333rem;--van-tabbar-z-index: 1;--van-tabbar-background: var(--van-background-2)}.van-tabbar{z-index:var(--van-tabbar-z-index);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-sizing:content-box;box-sizing:content-box;width:100%;height:var(--van-tabbar-height);background:var(--van-tabbar-background)}.van-tabbar--fixed{position:fixed;bottom:0;left:0}:root{--van-tabbar-item-font-size: var(--van-font-size-sm);--van-tabbar-item-text-color: var(--van-text-color);--van-tabbar-item-active-color: var(--van-primary-color);--van-tabbar-item-active-background: var(--van-background-2);--van-tabbar-item-line-height: 1;--van-tabbar-item-icon-size: .58667rem;--van-tabbar-item-icon-margin-bottom: var(--van-padding-base)}.van-tabbar-item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:var(--van-tabbar-item-text-color);font-size:var(--van-tabbar-item-font-size);line-height:var(--van-tabbar-item-line-height);cursor:pointer}.van-tabbar-item__icon{margin-bottom:var(--van-tabbar-item-icon-margin-bottom);font-size:var(--van-tabbar-item-icon-size)}.van-tabbar-item__icon .van-icon{display:block}.van-tabbar-item__icon .van-badge{margin-top:var(--van-padding-base)}.van-tabbar-item__icon img{display:block;height:.53333rem}.van-tabbar-item--active{color:var(--van-tabbar-item-active-color);background-color:var(--van-tabbar-item-active-background)}[data-v-78c92115]:export{themeColor:var(--van-blue)}.layout-container[data-v-78c92115]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;height:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.layout__body--show-tabbar[data-v-78c92115]{padding-bottom:1.33333rem}.layout-tabbar[data-v-78c92115] .van-tabbar-item--active{color:var(--van-primary-color)}.layout-tabbar[data-v-78c92115] .van-tabbar-item--active .van-icon{-webkit-animation:scale-icon-78c92115 .3s ease-in-out;animation:scale-icon-78c92115 .3s ease-in-out}@-webkit-keyframes scale-icon-78c92115{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(.6);transform:scale(.6)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes scale-icon-78c92115{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(.6);transform:scale(.6)}to{-webkit-transform:scale(1);transform:scale(1)}}\n',document.head.appendChild(r);var lt=i(c("back-top"),2),ut=lt[0],st=lt[1],ft={right:S,bottom:S,zIndex:S,target:[String,Object],offset:j(200),immediate:Boolean,teleport:{type:[String,Object],default:"body"}},vt=l({name:ut,inheritAttrs:!1,props:ft,emits:["click"],setup:function(t,e){var r=e.emit,n=e.slots,o=e.attrs,a=!1,i=u(!1),c=u(),l=u(),S=s((function(){return f(v(t.zIndex),{right:b(t.right),bottom:b(t.bottom)})})),j=function(e){var n;r("click",e),null==(n=l.value)||n.scrollTo({top:0,behavior:t.immediate?"auto":"smooth"})},P=function(){i.value=!!l.value&&z(l.value)>=+t.offset},I=function(){L&&E((function(){var e;l.value=t.target?"string"!=typeof(e=t.target)?e:document.querySelector(e)||void 0:O(c.value),P()}))};return d("scroll",m(P,100),{target:l}),p(I),h((function(){a&&(i.value=!0,a=!1)})),y((function(){i.value&&t.teleport&&(i.value=!1,a=!0)})),g((function(){return t.target}),I),function(){var e=x("div",k({ref:t.teleport?void 0:c,class:st({active:i.value}),style:S.value,onClick:j},o),[n.default?n.default():x(w,{name:"back-top",class:st("icon")},null)]);return t.teleport?[x("div",{ref:c,class:st("placeholder")},null),x(_,{to:t.teleport},{default:function(){return[e]}})]:e}}}),bt=P(vt),dt=i(c("tabbar"),2),mt=dt[0],pt=dt[1],ht={route:Boolean,fixed:A,border:A,zIndex:S,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:j(0),safeAreaInsetBottom:{type:Boolean,default:null}},yt=Symbol(mt),gt=l({name:mt,props:ht,emits:["change","update:modelValue"],setup:function(t,e){var r=e.emit,n=e.slots,o=u(),i=I(yt).linkChildren,c=at(o,pt),l=function(){var e;return null!=(e=t.safeAreaInsetBottom)?e:t.fixed},s=function(){var e,r,i=t.fixed,c=t.zIndex,u=t.border;return x("div",{ref:o,role:"tablist",style:v(c),class:[pt({fixed:i}),(e={},a(e,C,u),a(e,"van-safe-area-bottom",l()),e)]},[null==(r=n.default)?void 0:r.call(n)])};return i({props:t,setActive:function(e,n){N(t.beforeChange,{args:[e],done:function(){r("update:modelValue",e),r("change",e),n()}})}}),function(){return t.fixed&&t.placeholder?c(s):s()}}}),xt=P(gt),wt=i(c("tabbar-item"),2),kt=wt[0],_t=wt[1],St=f({},it,{dot:Boolean,icon:String,name:S,badge:S,badgeProps:Object,iconPrefix:String}),jt=l({name:kt,props:St,emits:["click"],setup:function(t,e){var r=e.emit,n=e.slots,o=ct(),a=T().proxy,i=B(yt),c=i.parent,l=i.index;if(c){var u=s((function(){var e,r=c.props,n=r.route,o=r.modelValue;if(n&&"$route"in a){var i=a.$route,u=t.to,s=F(u)?u:{path:u};return!!i.matched.find((function(t){var e="path"in s&&s.path===t.path,r="name"in s&&s.name===t.name;return e||r}))}return(null!=(e=t.name)?e:l.value)===o})),f=function(e){var n;u.value||c.setActive(null!=(n=t.name)?n:l.value,o),r("click",e)},v=function(){return n.icon?n.icon({active:u.value}):t.icon?x(w,{name:t.icon,classPrefix:t.iconPrefix},null):void 0};return function(){var e,r=t.dot,o=t.badge,a=c.props,i=a.activeColor,l=a.inactiveColor,s=u.value?i:l;return x("div",{role:"tab",class:_t({active:u.value}),style:{color:s},tabindex:0,"aria-selected":u.value,onClick:f},[x(G,k({dot:r,class:_t("icon"),content:o},t.badgeProps),{default:v}),x("div",{class:_t("text")},[null==(e=n.default)?void 0:e.call(n,{active:u.value})])])}}}}),zt=P(jt),Lt={class:"layout__container"},Et={class:"layout__header"},Ot=l({name:"Layout"}),Pt=Object.assign(Ot,{props:{withHeader:{type:Boolean,default:!0},title:{type:String,default:""}},emits:["change","body-scroll"],setup:function(t,r){var a=r.emit,i=localStorage.getItem("tabbar_sort")&&[{title:"首页",to:{name:"Home"},icon:"home-o"}].concat(o(JSON.parse(localStorage.getItem("tabbar_sort")))),c=$(),l=V(),f=u(!1),v=s((function(){var t;return(null===(t=c.currentRoute.value.meta)||void 0===t?void 0:t.level)>1})),b=u(!1),d=function(){c.back()};p(n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return q.on("update-tabbar",(function(t){var e,r,n;y.value=[{title:"首页",to:{name:"Home"},icon:"home-o"}].concat(o(t)),e=M(l),r=e.fullPath,n=e.query,c.replace({path:"/redirect"+r,query:n})})),t.next=3,E();case 3:r=document.querySelector(".layout__container .layout__body"),R(r,"scroll",(function(t){a("body-scroll",t)}));case 5:case"end":return t.stop()}}),t)}))));var m=u(!0),h=u("Name"),y=u(i||U);g((function(){return c}),(function(){var t=y.value.some((function(t){return t.to.name===c.currentRoute.value.name}));h.value=y.value.findIndex((function(t){return t.to.name===c.currentRoute.value.name})),m.value=t}),{deep:!0,immediate:!0});var w=function(t){a("change",t)};return function(e,r){var n,o=nt,a=zt,i=xt,c=bt;return J(),H("div",Lt,[Q("div",Et,[e.$slots.header?Z(e.$slots,"header",{key:1},void 0,!0):(J(),Y(o,{key:0,fixed:M(f),placeholder:M(f),"safe-area-inset-top":"","left-arrow":M(v),title:t.title||(null===(n=e.$route.meta)||void 0===n?void 0:n.title),onClickLeft:d},null,8,["fixed","placeholder","left-arrow","title"]))]),Q("div",{class:rt(["layout__body",{"layout__body--show-navbar":M(b)},{"layout__body--show-tabbar":M(m)}])},[Z(e.$slots,"default",{},void 0,!0),M(m)?(J(),Y(i,k({key:0,modelValue:M(h),"onUpdate:modelValue":r[0]||(r[0]=function(t){return tt(h)?h.value=t:null}),class:"layout-tabbar",fixed:!0,border:"","z-index":9,route:""},e.$attrs,{onChange:w}),{default:D((function(){return[(J(!0),H(K,null,W(M(y),(function(t,e){var r;return J(),Y(a,{id:"tabbar-item-"+(null===(r=t.to)||void 0===r?void 0:r.name),key:t.to+e,to:t.to,icon:t.icon,replace:""},{default:D((function(){return[Q("span",null,X(t.title),1)]})),_:2},1032,["id","to","icon"])})),128))]})),_:1},16,["modelValue"])):et("",!0),x(c,{right:"5vw",bottom:"10vh"})],2)])}}});t("_",ot(Pt,[["__scopeId","data-v-78c92115"]]))}}}))}();
