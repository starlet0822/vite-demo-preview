!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r,n){return(r=function(t){var r=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,r||"default");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===e(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o,a,c=[],l=!0,d=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(s){d=!0,i=s}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(d)throw i}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./index-legacy-55ac2691.js","./use-route-legacy-783b418a.js"],(function(e,n){"use strict";var i,o,a,c,l,d,s,u,v,b,g,m,f,p,x,y,w,_,k;return{setters:[function(e){i=e.ab,o=e.d,a=e.ac,c=e.p,l=e.c0,d=e.cf,s=e.aj,u=e.af,v=e.an,b=e.am,g=e.ai,m=e.ak,f=e.c,p=e.cg,x=e.m,y=e.ch,w=e.aa},function(e){_=e.r,k=e.u}],execute:function(){var n=document.createElement("style");n.textContent=".van-grid{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}:root{--van-grid-item-content-padding: var(--van-padding-md) var(--van-padding-xs);--van-grid-item-content-background: var(--van-background-2);--van-grid-item-content-active-color: var(--van-active-color);--van-grid-item-icon-size: .74667rem;--van-grid-item-text-color: var(--van-text-color);--van-grid-item-text-font-size: var(--van-font-size-sm)}.van-grid-item{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}.van-grid-item--square{height:0}.van-grid-item__icon{font-size:var(--van-grid-item-icon-size)}.van-grid-item__text{color:var(--van-grid-item-text-color);font-size:var(--van-grid-item-text-font-size);line-height:1.5;word-break:break-all}.van-grid-item__icon+.van-grid-item__text{margin-top:var(--van-padding-xs)}.van-grid-item__content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;padding:var(--van-grid-item-content-padding);background:var(--van-grid-item-content-background)}.van-grid-item__content:after{z-index:1;border-width:0 var(--van-border-width) var(--van-border-width) 0}.van-grid-item__content--square{position:absolute;top:0;right:0;left:0}.van-grid-item__content--center{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.van-grid-item__content--horizontal{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.van-grid-item__content--horizontal .van-grid-item__text{margin:0 0 0 var(--van-padding-xs)}.van-grid-item__content--reverse{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.van-grid-item__content--reverse .van-grid-item__text{margin:0 0 var(--van-padding-xs)}.van-grid-item__content--horizontal.van-grid-item__content--reverse{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.van-grid-item__content--horizontal.van-grid-item__content--reverse .van-grid-item__text{margin:0 var(--van-padding-xs) 0 0}.van-grid-item__content--surround:after{border-width:var(--van-border-width)}.van-grid-item__content--clickable{cursor:pointer}.van-grid-item__content--clickable:active{background-color:var(--van-grid-item-content-active-color)}\n",document.head.appendChild(n);var h=r(i("grid"),2),S=h[0],z=h[1],j={square:Boolean,center:s,border:s,gutter:u,reverse:Boolean,iconSize:u,direction:String,clickable:Boolean,columnNum:v(4)},P=Symbol(S),q=o({name:S,props:j,setup:function(e,r){var n=r.slots;return(0,a(P).linkChildren)({props:e}),function(){var r;return c("div",{style:{paddingLeft:l(e.gutter)},class:[z(),t({},d,e.border&&!e.gutter)]},[null==(r=n.default)?void 0:r.call(n)])}}}),C=(e("a",b(q)),r(i("grid-item"),2)),A=C[0],O=C[1],B=g({},_,{dot:Boolean,text:String,icon:String,badge:u,iconColor:String,iconPrefix:String,badgeProps:Object}),T=o({name:A,props:B,setup:function(e,r){var n=r.slots,i=m(P),o=i.parent,a=i.index,d=k();if(o){var s=f((function(){var e=o.props,t=e.square,r=e.gutter,n=e.columnNum,i="".concat(100/+n,"%"),c={flexBasis:i};if(t)c.paddingTop=i;else if(r){var d=l(r);c.paddingRight=d,a.value>=+n&&(c.marginTop=d)}return c})),u=f((function(){var e=o.props,t=e.square,r=e.gutter;if(t&&r){var n=l(r);return{right:n,bottom:n,height:"auto"}}}));return function(){var r=o.props,i=r.center,a=r.border,l=r.square,v=r.gutter,b=r.reverse,g=r.direction,m=r.clickable,f=[O("content",[g,{center:i,square:l,reverse:b,clickable:m,surround:a&&v}]),t({},p,a)];return c("div",{class:[O({square:l})],style:s.value},[c("div",{role:m?"button":void 0,class:f,style:u.value,tabindex:m?0:void 0,onClick:d},[n.default?n.default():[n.icon?c(y,x({dot:e.dot,content:e.badge},e.badgeProps),{default:n.icon}):e.icon?c(w,{dot:e.dot,name:e.icon,size:o.props.iconSize,badge:e.badge,class:O("icon"),color:e.iconColor,badgeProps:e.badgeProps,classPrefix:e.iconPrefix},null):void 0,n.text?n.text():e.text?c("span",{class:O("text")},[e.text]):void 0]])])}}}});e("G",b(T))}}}))}();
