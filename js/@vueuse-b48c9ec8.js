var e=(e,n,t)=>new Promise(((l,u)=>{var a=e=>{try{r(t.next(e))}catch(n){u(n)}},o=e=>{try{r(t.throw(e))}catch(n){u(n)}},r=e=>e.done?l(e.value):Promise.resolve(e.value).then(a,o);r((t=t.apply(e,n)).next())}));import{r as n,j as t,k as l,u,c as a,w as o}from"./@vue-0da0c2e3.js";function r(e){return!!t()&&(l(e),!0)}const i="undefined"!=typeof window,s=e=>"number"==typeof e,c=()=>{};function v(e){return e}function d(e){var n;const t=u(e);return null!=(n=null==t?void 0:t.$el)?n:t}const f=i?window:void 0,m=i?window.document:void 0;function p(...e){let n,t,l,a;if("string"==typeof e[0]?([t,l,a]=e,n=f):[n,t,l,a]=e,!n)return c;let i=c;const s=o((()=>u(n)),(e=>{i(),e&&(e.addEventListener(t,l,a),i=()=>{e.removeEventListener(t,l,a),i=c})}),{immediate:!0,flush:"post"}),v=()=>{s(),i()};return r(v),v}function w(e,t,l={}){const{window:u=f,ignore:a}=l;if(!u)return;const o=n(!0),r=[p(u,"click",(n=>{const l=d(e),u=n.composedPath();l&&l!==n.target&&!u.includes(l)&&o.value&&(a&&a.length>0&&a.some((e=>{const t=d(e);return t&&(n.target===t||u.includes(t))}))||t(n))}),{passive:!0,capture:!0}),p(u,"pointerdown",(n=>{const t=d(e);o.value=!!t&&!n.composedPath().includes(t)}),{passive:!0})];return()=>r.forEach((e=>e()))}i&&window.navigator,i&&window.location;const h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},b="__vueuse_ssr_handlers__";function g(e,t,{window:l=f}={}){const r=n(""),i=a((()=>{var e;return d(t)||(null==(e=null==l?void 0:l.document)?void 0:e.documentElement)}));return o([i,()=>u(e)],(([e,n])=>{e&&l&&(r.value=l.getComputedStyle(e).getPropertyValue(n))}),{immediate:!0}),o(r,(n=>{var t;(null==(t=i.value)?void 0:t.style)&&i.value.style.setProperty(u(e),n)})),r}h[b]=h[b]||{},h[b];const y=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function F(t,l={}){const{document:u=m,autoExit:a=!1}=l,o=t||(null==u?void 0:u.querySelector("html")),i=n(!1);let s=!1,c=y[0];if(u){for(const e of y)if(e[1]in u){c=e,s=!0;break}}else s=!1;const[v,f,w,,h]=c;function b(){return e(this,null,(function*(){s&&((null==u?void 0:u[w])&&(yield u[f]()),i.value=!1)}))}function g(){return e(this,null,(function*(){if(!s)return;yield b();const e=d(o);e&&(yield e[v](),i.value=!0)}))}return u&&p(u,h,(()=>{i.value=!!(null==u?void 0:u[w])}),!1),a&&r(b),{isSupported:s,isFullscreen:i,enter:g,exit:b,toggle:function(){return e(this,null,(function*(){i.value?yield b():yield g()}))}}}function O(e={}){const{type:t="page",touch:l=!0,resetOnTouchEnds:u=!1,initialValue:a={x:0,y:0},window:o=f,eventFilter:r}=e,i=n(a.x),s=n(a.y),c=n(null),v=e=>{"page"===t?(i.value=e.pageX,s.value=e.pageY):"client"===t&&(i.value=e.clientX,s.value=e.clientY),c.value="mouse"},d=()=>{i.value=a.x,s.value=a.y},m=e=>{if(e.touches.length>0){const n=e.touches[0];"page"===t?(i.value=n.pageX,s.value=n.pageY):"client"===t&&(i.value=n.clientX,s.value=n.clientY),c.value="touch"}},w=e=>void 0===r?v(e):r((()=>v(e)),{}),h=e=>void 0===r?m(e):r((()=>m(e)),{});return o&&(p(o,"mousemove",w,{passive:!0}),p(o,"dragover",w,{passive:!0}),l&&(p(o,"touchstart",h,{passive:!0}),p(o,"touchmove",h,{passive:!0}),u&&p(o,"touchend",d,{passive:!0}))),{x:i,y:s,sourceType:c}}var E,k;i&&(null==window?void 0:window.navigator)&&(null==(E=null==window?void 0:window.navigator)?void 0:E.platform)&&/iP(ad|hone|od)/.test(null==(k=null==window?void 0:window.navigator)?void 0:k.platform);var S=Object.defineProperty,x=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,P=(e,n,t)=>n in e?S(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;((e,n)=>{for(var t in n||(n={}))I.call(n,t)&&P(e,t,n[t]);if(x)for(var t of x(n))C.call(n,t)&&P(e,t,n[t])})({text:""},{top:0,left:0,bottom:0,right:0,height:0,width:0});const Q={linear:v,easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};function q([e,n,t,l]){const u=(e,n)=>1-3*n+3*e,a=(e,n)=>3*n-6*e,o=e=>3*e,r=(e,n,t)=>((u(n,t)*e+a(n,t))*e+o(n))*e;return i=>e===n&&t===l?i:r((n=>{let l=n;for(let v=0;v<4;++v){const v=(i=l,3*u(s=e,c=t)*i*i+2*a(s,c)*i+o(s));if(0===v)return l;l-=(r(l,e,t)-n)/v}var i,s,c;return l})(i),n,l)}function T(e,t={}){const{delay:l=0,disabled:d=!1,duration:m=1e3,onFinished:p=c,onStarted:w=c,transition:h=v}=t,b=a((()=>{const e=u(h);return"function"==typeof e?e:q(e)})),g=a((()=>{const n=u(e);return s(n)?n:n.map(u)})),y=a((()=>s(g.value)?[g.value]:g.value)),F=n(y.value.slice(0));let O,E,k,S,x;const{resume:I,pause:C}=function(e,t={}){const{immediate:l=!0,window:u=f}=t,a=n(!1);function o(){a.value&&u&&(e(),u.requestAnimationFrame(o))}function i(){!a.value&&u&&(a.value=!0,o())}function s(){a.value=!1}return l&&i(),r(s),{isActive:a,pause:s,resume:i}}((()=>{const e=Date.now(),n=(t=1-(k-e)/O,l=0,u=1,Math.min(u,Math.max(l,t)));var t,l,u;F.value=x.map(((e,t)=>{var l;return e+(null!=(l=E[t])?l:0)*b.value(n)})),n>=1&&(C(),p())}),{immediate:!1}),P=()=>{C(),O=u(m),E=F.value.map(((e,n)=>{var t,l;return(null!=(t=y.value[n])?t:0)-(null!=(l=F.value[n])?l:0)})),x=F.value.slice(0),S=Date.now(),k=S+O,I(),w()},Q=function(e,t,l={}){const{immediate:a=!0}=l,o=n(!1);let s=null;function c(){s&&(clearTimeout(s),s=null)}function v(){o.value=!1,c()}function d(...n){c(),o.value=!0,s=setTimeout((()=>{o.value=!1,s=null,e(...n)}),u(t))}return a&&(o.value=!0,i&&d()),r(v),{isPending:o,start:d,stop:v}}(P,l,{immediate:!1});return o(y,(()=>{u(d)?F.value=y.value.slice(0):u(l)<=0?P():Q.start()}),{deep:!0}),a((()=>{const e=u(d)?y:F;return s(g.value)?e.value[0]:e.value}))}export{Q as T,F as a,O as b,T as c,w as o,g as u};
