!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(N){f=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),u=new B(n||[]);return i(a,"_invoke",{value:A(t,r,u)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}r.wrap=l;var d={};function g(){}function v(){}function p(){}var y={};f(y,u,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(T([])));w&&w!==n&&o.call(w,u)&&(y=w);var E=p.prototype=g.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function C(e,r){function n(i,a,u,s){var c=h(e[i],e,a);if("throw"!==c.type){var f=c.arg,l=f.value;return l&&"object"==t(l)&&o.call(l,"__await")?r.resolve(l.__await).then((function(t){n("next",t,u,s)}),(function(t){n("throw",t,u,s)})):r.resolve(l).then((function(t){f.value=t,u(f)}),(function(t){return n("throw",t,u,s)}))}s(c.arg)}var a;i(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return a=a?a.then(o,o):o()}})}function A(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return I()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=P(a,r);if(u){if(u===d)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=h(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function P(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,P(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function B(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function T(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:I}}function I(){return{value:void 0,done:!0}}return v.prototype=p,i(E,"constructor",{value:p,configurable:!0}),i(p,"constructor",{value:v,configurable:!0}),v.displayName=f(p,c,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,f(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},b(C.prototype),f(C.prototype,s,(function(){return this})),r.AsyncIterator=C,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new C(l(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(E),f(E,c,"Generator"),f(E,u,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=T,B.prototype={constructor:B,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},r}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(e,r,n){return(r=function(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,r||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===t(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(t,e,r,n,o,i,a){try{var u=t[i](a),s=u.value}catch(c){return void r(c)}u.done?e(s):Promise.resolve(s).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function u(t){i(a,n,o,u,s,"next",t)}function s(t){i(a,n,o,u,s,"throw",t)}u(void 0)}))}}System.register(["./plugin-vue_export-helper-legacy-c6aa7c23.js","./index-legacy-e7f3c7cc.js"],(function(t,r){"use strict";var o,i,u,s,c,f,l,h,d,g,v,p,y;return{setters:[function(t){o=t._},function(t){i=t.d,u=t.a,s=t.c,c=t.w,f=t.f,l=t.k,h=t.s,d=t.A,g=t.u,v=t.B,p=t.de,y=t.df}],execute:function(){var r=document.createElement("style");r.textContent='@charset "UTF-8";[data-v-386832c4]:export{themeColor:var(--van-blue)}\n',document.head.appendChild(r);var m,w={},E={},b={},C=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];b.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},b.getSymbolTotalCodewords=function(t){return C[t]},b.getBCHDigit=function(t){for(var e=0;0!==t;)e++,t>>>=1;return e},b.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');m=t},b.isKanjiModeEnabled=function(){return void 0!==m},b.toSJIS=function(t){return m(t)};var A={};function P(){this.buffer=[],this.length=0}!function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+e)}}(e)}catch(n){return r}}}(A),P.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var x=P;function L(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}L.prototype.set=function(t,e,r,n){var o=t*this.size+e;this.data[o]=r,n&&(this.reservedBit[o]=!0)},L.prototype.get=function(t,e){return this.data[t*this.size+e]},L.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r},L.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var B=L,T={};!function(t){var e=b.getSymbolSize;t.getRowColCoords=function(t){if(1===t)return[];for(var r=Math.floor(t/7)+2,n=e(t),o=145===n?26:2*Math.ceil((n-13)/(2*r-2)),i=[n-7],a=1;a<r-1;a++)i[a]=i[a-1]-o;return i.push(6),i.reverse()},t.getPositions=function(e){for(var r=[],n=t.getRowColCoords(e),o=n.length,i=0;i<o;i++)for(var a=0;a<o;a++)0===i&&0===a||0===i&&a===o-1||i===o-1&&0===a||r.push([n[i],n[a]]);return r}}(T);var I={},N=b.getSymbolSize;I.getPositions=function(t){var e=N(t);return[[0,0],[e-7,0],[0,e-7]]};var M={};!function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var e=3,r=3,n=40,o=10;function i(e,r,n){switch(e){case t.Patterns.PATTERN000:return(r+n)%2==0;case t.Patterns.PATTERN001:return r%2==0;case t.Patterns.PATTERN010:return n%3==0;case t.Patterns.PATTERN011:return(r+n)%3==0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2==0;case t.Patterns.PATTERN101:return r*n%2+r*n%3==0;case t.Patterns.PATTERN110:return(r*n%2+r*n%3)%2==0;case t.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}}t.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(t){for(var r=t.size,n=0,o=0,i=0,a=null,u=null,s=0;s<r;s++){o=i=0,a=u=null;for(var c=0;c<r;c++){var f=t.get(s,c);f===a?o++:(o>=5&&(n+=e+(o-5)),a=f,o=1),(f=t.get(c,s))===u?i++:(i>=5&&(n+=e+(i-5)),u=f,i=1)}o>=5&&(n+=e+(o-5)),i>=5&&(n+=e+(i-5))}return n},t.getPenaltyN2=function(t){for(var e=t.size,n=0,o=0;o<e-1;o++)for(var i=0;i<e-1;i++){var a=t.get(o,i)+t.get(o,i+1)+t.get(o+1,i)+t.get(o+1,i+1);4!==a&&0!==a||n++}return n*r},t.getPenaltyN3=function(t){for(var e=t.size,r=0,o=0,i=0,a=0;a<e;a++){o=i=0;for(var u=0;u<e;u++)o=o<<1&2047|t.get(a,u),u>=10&&(1488===o||93===o)&&r++,i=i<<1&2047|t.get(u,a),u>=10&&(1488===i||93===i)&&r++}return r*n},t.getPenaltyN4=function(t){for(var e=0,r=t.data.length,n=0;n<r;n++)e+=t.data[n];return Math.abs(Math.ceil(100*e/r/5)-10)*o},t.applyMask=function(t,e){for(var r=e.size,n=0;n<r;n++)for(var o=0;o<r;o++)e.isReserved(o,n)||e.xor(o,n,i(t,o,n))},t.getBestMask=function(e,r){for(var n=Object.keys(t.Patterns).length,o=0,i=1/0,a=0;a<n;a++){r(a),t.applyMask(a,e);var u=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(a,e),u<i&&(i=u,o=a)}return o}}(M);var R={},S=A,O=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],k=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];R.getBlocksCount=function(t,e){switch(e){case S.L:return O[4*(t-1)+0];case S.M:return O[4*(t-1)+1];case S.Q:return O[4*(t-1)+2];case S.H:return O[4*(t-1)+3];default:return}},R.getTotalCodewordsCount=function(t,e){switch(e){case S.L:return k[4*(t-1)+0];case S.M:return k[4*(t-1)+1];case S.Q:return k[4*(t-1)+2];case S.H:return k[4*(t-1)+3];default:return}};var U={},j={},_=new Uint8Array(512),D=new Uint8Array(256);!function(){for(var t=1,e=0;e<255;e++)_[e]=t,D[t]=e,256&(t<<=1)&&(t^=285);for(var r=255;r<512;r++)_[r]=_[r-255]}(),j.log=function(t){if(t<1)throw new Error("log("+t+")");return D[t]},j.exp=function(t){return _[t]},j.mul=function(t,e){return 0===t||0===e?0:_[D[t]+D[e]]},function(t){var e=j;t.mul=function(t,r){for(var n=new Uint8Array(t.length+r.length-1),o=0;o<t.length;o++)for(var i=0;i<r.length;i++)n[o+i]^=e.mul(t[o],r[i]);return n},t.mod=function(t,r){for(var n=new Uint8Array(t);n.length-r.length>=0;){for(var o=n[0],i=0;i<r.length;i++)n[i]^=e.mul(r[i],o);for(var a=0;a<n.length&&0===n[a];)a++;n=n.slice(a)}return n},t.generateECPolynomial=function(r){for(var n=new Uint8Array([1]),o=0;o<r;o++)n=t.mul(n,new Uint8Array([1,e.exp(o)]));return n}}(U);var F=U;function z(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}z.prototype.initialize=function(t){this.degree=t,this.genPoly=F.generateECPolynomial(this.degree)},z.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");var e=new Uint8Array(t.length+this.degree);e.set(t);var r=F.mod(e,this.genPoly),n=this.degree-r.length;if(n>0){var o=new Uint8Array(this.degree);return o.set(r,n),o}return r};var H=z,Y={},J={},K={isValid:function(t){return!isNaN(t)&&t>=1&&t<=40}},V={},Q="[0-9]+",q="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",G="(?:(?![A-Z0-9 $%*+\\-./:]|"+(q=q.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";V.KANJI=new RegExp(q,"g"),V.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),V.BYTE=new RegExp(G,"g"),V.NUMERIC=new RegExp(Q,"g"),V.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");var $=new RegExp("^"+q+"$"),Z=new RegExp("^"+Q+"$"),X=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");V.testKanji=function(t){return $.test(t)},V.testNumeric=function(t){return Z.test(t)},V.testAlphanumeric=function(t){return X.test(t)},function(t){var e=K,r=V;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(t,r){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!e.isValid(r))throw new Error("Invalid version: "+r);return r>=1&&r<10?t.ccBits[0]:r<27?t.ccBits[1]:t.ccBits[2]},t.getBestModeForData=function(e){return r.testNumeric(e)?t.NUMERIC:r.testAlphanumeric(e)?t.ALPHANUMERIC:r.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},t.isValid=function(t){return t&&t.bit&&t.ccBits},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+e)}}(e)}catch(n){return r}}}(J),function(t){var e=b,r=R,n=A,o=J,i=K,a=e.getBCHDigit(7973);function u(t,e){return o.getCharCountIndicator(t,e)+4}function s(t,e){var r=0;return t.forEach((function(t){var n=u(t.mode,e);r+=n+t.getBitsLength()})),r}t.from=function(t,e){return i.isValid(t)?parseInt(t,10):e},t.getCapacity=function(t,n,a){if(!i.isValid(t))throw new Error("Invalid QR Code version");void 0===a&&(a=o.BYTE);var s=8*(e.getSymbolTotalCodewords(t)-r.getTotalCodewordsCount(t,n));if(a===o.MIXED)return s;var c=s-u(a,t);switch(a){case o.NUMERIC:return Math.floor(c/10*3);case o.ALPHANUMERIC:return Math.floor(c/11*2);case o.KANJI:return Math.floor(c/13);case o.BYTE:default:return Math.floor(c/8)}},t.getBestVersionForData=function(e,r){var i,a=n.from(r,n.M);if(Array.isArray(e)){if(e.length>1)return function(e,r){for(var n=1;n<=40;n++)if(s(e,n)<=t.getCapacity(n,r,o.MIXED))return n}(e,a);if(0===e.length)return 1;i=e[0]}else i=e;return function(e,r,n){for(var o=1;o<=40;o++)if(r<=t.getCapacity(o,n,e))return o}(i.mode,i.getLength(),a)},t.getEncodedBits=function(t){if(!i.isValid(t)||t<7)throw new Error("Invalid QR Code version");for(var r=t<<12;e.getBCHDigit(r)-a>=0;)r^=7973<<e.getBCHDigit(r)-a;return t<<12|r}}(Y);var W={},tt=b,et=tt.getBCHDigit(1335);W.getEncodedBits=function(t,e){for(var r=t.bit<<3|e,n=r<<10;tt.getBCHDigit(n)-et>=0;)n^=1335<<tt.getBCHDigit(n)-et;return 21522^(r<<10|n)};var rt={},nt=J;function ot(t){this.mode=nt.NUMERIC,this.data=t.toString()}ot.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},ot.prototype.getLength=function(){return this.data.length},ot.prototype.getBitsLength=function(){return ot.getBitsLength(this.data.length)},ot.prototype.write=function(t){var e,r,n;for(e=0;e+3<=this.data.length;e+=3)r=this.data.substr(e,3),n=parseInt(r,10),t.put(n,10);var o=this.data.length-e;o>0&&(r=this.data.substr(e),n=parseInt(r,10),t.put(n,3*o+1))};var it=ot,at=J,ut=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function st(t){this.mode=at.ALPHANUMERIC,this.data=t}st.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},st.prototype.getLength=function(){return this.data.length},st.prototype.getBitsLength=function(){return st.getBitsLength(this.data.length)},st.prototype.write=function(t){var e;for(e=0;e+2<=this.data.length;e+=2){var r=45*ut.indexOf(this.data[e]);r+=ut.indexOf(this.data[e+1]),t.put(r,11)}this.data.length%2&&t.put(ut.indexOf(this.data[e]),6)};var ct=st,ft=function(t){for(var e=[],r=t.length,n=0;n<r;n++){var o=t.charCodeAt(n);if(o>=55296&&o<=56319&&r>n+1){var i=t.charCodeAt(n+1);i>=56320&&i<=57343&&(o=1024*(o-55296)+i-56320+65536,n+=1)}o<128?e.push(o):o<2048?(e.push(o>>6|192),e.push(63&o|128)):o<55296||o>=57344&&o<65536?(e.push(o>>12|224),e.push(o>>6&63|128),e.push(63&o|128)):o>=65536&&o<=1114111?(e.push(o>>18|240),e.push(o>>12&63|128),e.push(o>>6&63|128),e.push(63&o|128)):e.push(239,191,189)}return new Uint8Array(e).buffer},lt=J;function ht(t){this.mode=lt.BYTE,"string"==typeof t&&(t=ft(t)),this.data=new Uint8Array(t)}ht.getBitsLength=function(t){return 8*t},ht.prototype.getLength=function(){return this.data.length},ht.prototype.getBitsLength=function(){return ht.getBitsLength(this.data.length)},ht.prototype.write=function(t){for(var e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)};var dt=ht,gt=J,vt=b;function pt(t){this.mode=gt.KANJI,this.data=t}pt.getBitsLength=function(t){return 13*t},pt.prototype.getLength=function(){return this.data.length},pt.prototype.getBitsLength=function(){return pt.getBitsLength(this.data.length)},pt.prototype.write=function(t){var e;for(e=0;e<this.data.length;e++){var r=vt.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else{if(!(r>=57408&&r<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");r-=49472}r=192*(r>>>8&255)+(255&r),t.put(r,13)}};var yt=pt,mt={exports:{}};!function(t){var e={single_source_shortest_paths:function(t,r,n){var o={},i={};i[r]=0;var a,u,s,c,f,l,h,d=e.PriorityQueue.make();for(d.push(r,0);!d.empty();)for(s in u=(a=d.pop()).value,c=a.cost,f=t[u]||{})f.hasOwnProperty(s)&&(l=c+f[s],h=i[s],(void 0===i[s]||h>l)&&(i[s]=l,d.push(s,l),o[s]=u));if(void 0!==n&&void 0===i[n]){var g=["Could not find a path from ",r," to ",n,"."].join("");throw new Error(g)}return o},extract_shortest_path_from_predecessor_list:function(t,e){for(var r=[],n=e;n;)r.push(n),t[n],n=t[n];return r.reverse(),r},find_path:function(t,r,n){var o=e.single_source_shortest_paths(t,r,n);return e.extract_shortest_path_from_predecessor_list(o,n)},PriorityQueue:{make:function(t){var r,n=e.PriorityQueue,o={};for(r in t=t||{},n)n.hasOwnProperty(r)&&(o[r]=n[r]);return o.queue=[],o.sorter=t.sorter||n.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var r={value:t,cost:e};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e}(mt);var wt=mt.exports;!function(t){var e=J,r=it,n=ct,o=dt,i=yt,a=V,u=b,s=wt;function c(t){return unescape(encodeURIComponent(t)).length}function f(t,e,r){for(var n,o=[];null!==(n=t.exec(r));)o.push({data:n[0],index:n.index,mode:e,length:n[0].length});return o}function l(t){var r,n,o=f(a.NUMERIC,e.NUMERIC,t),i=f(a.ALPHANUMERIC,e.ALPHANUMERIC,t);return u.isKanjiModeEnabled()?(r=f(a.BYTE,e.BYTE,t),n=f(a.KANJI,e.KANJI,t)):(r=f(a.BYTE_KANJI,e.BYTE,t),n=[]),o.concat(i,r,n).sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function h(t,a){switch(a){case e.NUMERIC:return r.getBitsLength(t);case e.ALPHANUMERIC:return n.getBitsLength(t);case e.KANJI:return i.getBitsLength(t);case e.BYTE:return o.getBitsLength(t)}}function d(t,a){var s,c=e.getBestModeForData(t);if((s=e.from(a,c))!==e.BYTE&&s.bit<c.bit)throw new Error('"'+t+'" cannot be encoded with mode '+e.toString(s)+".\n Suggested mode is: "+e.toString(c));switch(s!==e.KANJI||u.isKanjiModeEnabled()||(s=e.BYTE),s){case e.NUMERIC:return new r(t);case e.ALPHANUMERIC:return new n(t);case e.KANJI:return new i(t);case e.BYTE:return new o(t)}}t.fromArray=function(t){return t.reduce((function(t,e){return"string"==typeof e?t.push(d(e,null)):e.data&&t.push(d(e.data,e.mode)),t}),[])},t.fromString=function(r,n){for(var o=function(t){for(var r=[],n=0;n<t.length;n++){var o=t[n];switch(o.mode){case e.NUMERIC:r.push([o,{data:o.data,mode:e.ALPHANUMERIC,length:o.length},{data:o.data,mode:e.BYTE,length:o.length}]);break;case e.ALPHANUMERIC:r.push([o,{data:o.data,mode:e.BYTE,length:o.length}]);break;case e.KANJI:r.push([o,{data:o.data,mode:e.BYTE,length:c(o.data)}]);break;case e.BYTE:r.push([{data:o.data,mode:e.BYTE,length:c(o.data)}])}}return r}(l(r,u.isKanjiModeEnabled())),i=function(t,r){for(var n={},o={start:{}},i=["start"],a=0;a<t.length;a++){for(var u=t[a],s=[],c=0;c<u.length;c++){var f=u[c],l=""+a+c;s.push(l),n[l]={node:f,lastCount:0},o[l]={};for(var d=0;d<i.length;d++){var g=i[d];n[g]&&n[g].node.mode===f.mode?(o[g][l]=h(n[g].lastCount+f.length,f.mode)-h(n[g].lastCount,f.mode),n[g].lastCount+=f.length):(n[g]&&(n[g].lastCount=f.length),o[g][l]=h(f.length,f.mode)+4+e.getCharCountIndicator(f.mode,r))}}i=s}for(var v=0;v<i.length;v++)o[i[v]].end=0;return{map:o,table:n}}(o,n),a=s.find_path(i.map,"start","end"),f=[],d=1;d<a.length-1;d++)f.push(i.table[a[d]].node);return t.fromArray(function(t){return t.reduce((function(t,e){var r=t.length-1>=0?t[t.length-1]:null;return r&&r.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}(f))},t.rawSplit=function(e){return t.fromArray(l(e,u.isKanjiModeEnabled()))}}(rt);var Et=b,bt=A,Ct=x,At=B,Pt=T,xt=I,Lt=M,Bt=R,Tt=H,It=Y,Nt=W,Mt=J,Rt=rt;function St(t,e,r){var n,o,i=t.size,a=Nt.getEncodedBits(e,r);for(n=0;n<15;n++)o=1==(a>>n&1),n<6?t.set(n,8,o,!0):n<8?t.set(n+1,8,o,!0):t.set(i-15+n,8,o,!0),n<8?t.set(8,i-n-1,o,!0):n<9?t.set(8,15-n-1+1,o,!0):t.set(8,15-n-1,o,!0);t.set(i-8,8,1,!0)}function Ot(t,e,r){var n=new Ct;r.forEach((function(e){n.put(e.mode.bit,4),n.put(e.getLength(),Mt.getCharCountIndicator(e.mode,t)),e.write(n)}));var o=8*(Et.getSymbolTotalCodewords(t)-Bt.getTotalCodewordsCount(t,e));for(n.getLengthInBits()+4<=o&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);for(var i=(o-n.getLengthInBits())/8,a=0;a<i;a++)n.put(a%2?17:236,8);return function(t,e,r){for(var n=Et.getSymbolTotalCodewords(e),o=Bt.getTotalCodewordsCount(e,r),i=n-o,a=Bt.getBlocksCount(e,r),u=a-n%a,s=Math.floor(n/a),c=Math.floor(i/a),f=c+1,l=s-c,h=new Tt(l),d=0,g=new Array(a),v=new Array(a),p=0,y=new Uint8Array(t.buffer),m=0;m<a;m++){var w=m<u?c:f;g[m]=y.slice(d,d+w),v[m]=h.encode(g[m]),d+=w,p=Math.max(p,w)}var E,b,C=new Uint8Array(n),A=0;for(E=0;E<p;E++)for(b=0;b<a;b++)E<g[b].length&&(C[A++]=g[b][E]);for(E=0;E<l;E++)for(b=0;b<a;b++)C[A++]=v[b][E];return C}(n,t,e)}function kt(t,e,r,n){var o;if(Array.isArray(t))o=Rt.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");var i=e;if(!i){var a=Rt.rawSplit(t);i=It.getBestVersionForData(a,r)}o=Rt.fromString(t,i||40)}var u=It.getBestVersionForData(o,r);if(!u)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<u)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+u+".\n")}else e=u;var s=Ot(e,r,o),c=Et.getSymbolSize(e),f=new At(c);return function(t,e){for(var r=t.size,n=xt.getPositions(e),o=0;o<n.length;o++)for(var i=n[o][0],a=n[o][1],u=-1;u<=7;u++)if(!(i+u<=-1||r<=i+u))for(var s=-1;s<=7;s++)a+s<=-1||r<=a+s||(u>=0&&u<=6&&(0===s||6===s)||s>=0&&s<=6&&(0===u||6===u)||u>=2&&u<=4&&s>=2&&s<=4?t.set(i+u,a+s,!0,!0):t.set(i+u,a+s,!1,!0))}(f,e),function(t){for(var e=t.size,r=8;r<e-8;r++){var n=r%2==0;t.set(r,6,n,!0),t.set(6,r,n,!0)}}(f),function(t,e){for(var r=Pt.getPositions(e),n=0;n<r.length;n++)for(var o=r[n][0],i=r[n][1],a=-2;a<=2;a++)for(var u=-2;u<=2;u++)-2===a||2===a||-2===u||2===u||0===a&&0===u?t.set(o+a,i+u,!0,!0):t.set(o+a,i+u,!1,!0)}(f,e),St(f,r,0),e>=7&&function(t,e){for(var r,n,o,i=t.size,a=It.getEncodedBits(e),u=0;u<18;u++)r=Math.floor(u/3),n=u%3+i-8-3,o=1==(a>>u&1),t.set(r,n,o,!0),t.set(n,r,o,!0)}(f,e),function(t,e){for(var r=t.size,n=-1,o=r-1,i=7,a=0,u=r-1;u>0;u-=2)for(6===u&&u--;;){for(var s=0;s<2;s++)if(!t.isReserved(o,u-s)){var c=!1;a<e.length&&(c=1==(e[a]>>>i&1)),t.set(o,u-s,c),-1==--i&&(a++,i=7)}if((o+=n)<0||r<=o){o-=n,n=-n;break}}}(f,s),isNaN(n)&&(n=Lt.getBestMask(f,St.bind(null,f,r))),Lt.applyMask(n,f),St(f,r,n),{modules:f,version:e,errorCorrectionLevel:r,maskPattern:n,segments:o}}E.create=function(t,e){if(void 0===t||""===t)throw new Error("No input text");var r,n,o=bt.M;return void 0!==e&&(o=bt.from(e.errorCorrectionLevel,bt.M),r=It.from(e.version),n=Lt.from(e.maskPattern),e.toSJISFunc&&Et.setToSJISFunction(e.toSJISFunc)),kt(t,r,o,n)};var Ut={},jt={};!function(t){function e(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");var e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");var r=parseInt(e.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+e.slice(0,6).join("")}}t.getOptions=function(t){t||(t={}),t.color||(t.color={});var r=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,n=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:n,scale:n?4:o,margin:r,color:{dark:e(t.color.dark||"#000000ff"),light:e(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},t.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},t.getImageWidth=function(e,r){var n=t.getScale(e,r);return Math.floor((e+2*r.margin)*n)},t.qrToImageData=function(e,r,n){for(var o=r.modules.size,i=r.modules.data,a=t.getScale(o,n),u=Math.floor((o+2*n.margin)*a),s=n.margin*a,c=[n.color.light,n.color.dark],f=0;f<u;f++)for(var l=0;l<u;l++){var h=4*(f*u+l),d=n.color.light;if(f>=s&&l>=s&&f<u-s&&l<u-s)d=c[i[Math.floor((f-s)/a)*o+Math.floor((l-s)/a)]?1:0];e[h++]=d.r,e[h++]=d.g,e[h++]=d.b,e[h]=d.a}}}(jt),function(t){var e=jt;t.render=function(t,r,n){var o=n,i=r;void 0!==o||r&&r.getContext||(o=r,r=void 0),r||(i=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),o=e.getOptions(o);var a=e.getImageWidth(t.modules.size,o),u=i.getContext("2d"),s=u.createImageData(a,a);return e.qrToImageData(s.data,t,o),function(t,e,r){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=r,e.width=r,e.style.height=r+"px",e.style.width=r+"px"}(u,i,a),u.putImageData(s,0,0),i},t.renderToDataURL=function(e,r,n){var o=n;void 0!==o||r&&r.getContext||(o=r,r=void 0),o||(o={});var i=t.render(e,r,o),a=o.type||"image/png",u=o.rendererOpts||{};return i.toDataURL(a,u.quality)}}(Ut);var _t={},Dt=jt;function Ft(t,e){var r=t.a/255,n=e+'="'+t.hex+'"';return r<1?n+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function zt(t,e,r){var n=t+e;return void 0!==r&&(n+=" "+r),n}_t.render=function(t,e,r){var n=Dt.getOptions(e),o=t.modules.size,i=t.modules.data,a=o+2*n.margin,u=n.color.light.a?"<path "+Ft(n.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",s="<path "+Ft(n.color.dark,"stroke")+' d="'+function(t,e,r){for(var n="",o=0,i=!1,a=0,u=0;u<t.length;u++){var s=Math.floor(u%e),c=Math.floor(u/e);s||i||(i=!0),t[u]?(a++,u>0&&s>0&&t[u-1]||(n+=i?zt("M",s+r,.5+c+r):zt("m",o,0),o=0,i=!1),s+1<e&&t[u+1]||(n+=zt("h",a),a=0)):o++}return n}(i,o,n.margin)+'"/>',c='viewBox="0 0 '+a+" "+a+'"',f='<svg xmlns="http://www.w3.org/2000/svg" '+(n.width?'width="'+n.width+'" height="'+n.width+'" ':"")+c+' shape-rendering="crispEdges">'+u+s+"</svg>\n";return"function"==typeof r&&r(null,f),f};var Ht=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then},Yt=E,Jt=Ut,Kt=_t;function Vt(t,e,r,n,o){var i=[].slice.call(arguments,1),a=i.length,u="function"==typeof i[a-1];if(!u&&!Ht())throw new Error("Callback required as last argument");if(!u){if(a<1)throw new Error("Too few arguments provided");return 1===a?(r=e,e=n=void 0):2!==a||e.getContext||(n=r,r=e,e=void 0),new Promise((function(o,i){try{var a=Yt.create(r,n);o(t(a,e,n))}catch(u){i(u)}}))}if(a<2)throw new Error("Too few arguments provided");2===a?(o=r,r=e,e=n=void 0):3===a&&(e.getContext&&void 0===o?(o=n,n=void 0):(o=n,n=r,r=e,e=void 0));try{var s=Yt.create(r,n);o(null,t(s,e,n))}catch(c){o(c)}}w.create=Yt.create,w.toCanvas=Vt.bind(null,Jt.render),w.toDataURL=Vt.bind(null,Jt.renderToDataURL),w.toString=Vt.bind(null,(function(t,e,r){return Kt.render(t,r)}));var Qt=i({name:"QRCodeCreate"}),qt=Object.assign(Qt,{props:{tag:{type:String,default:"canvas"},text:{type:[String,Array],default:null},options:{type:Object,default:function(){return{}}},width:{type:[Number,String],default:100},logo:{type:[String,Object],default:function(){return""}}},emits:["done","click","disabled-click"],setup:function(t,r){var o=r.emit,i=t,m=w.toCanvas,E=w.toDataURL,b=u(!0),C=u(null),A=s((function(){return String(i.text)})),P=s((function(){return{width:i.width+"px",height:i.width+"px"}})),x=function(){var t=a(e().mark((function t(){var r,a,u,s,c;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("options",i.options),t.next=3,v();case 3:if(r=p(i.options||{}),"canvas"!==i.tag){t.next=25;break}return r.errorCorrectionLevel=r.errorCorrectionLevel||I(g(A)),t.next=8,T(g(A),r);case 8:return a=t.sent,r.scale=0===i.width?void 0:i.width/a*4,t.next=12,m(g(C),g(A),r);case 12:if(u=t.sent,!i.logo){t.next=21;break}return t.next=16,L(u);case 16:s=t.sent,o("done",s),b.value=!1,t.next=23;break;case 21:o("done",u.toDataURL()),b.value=!1;case 23:t.next=31;break;case 25:return t.next=27,E(A.value,n({errorCorrectionLevel:"H",width:i.width},r));case 27:c=t.sent,g(C).src=c,o("done",c),b.value=!1;case 31:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();c((function(){return A.value}),(function(t){t&&x()}),{deep:!0,immediate:!0});var L=function(t){var e=t.width,r=Object.assign({logoSize:.15,bgColor:"#ffffff",borderSize:.05,crossOrigin:"anonymous",borderRadius:8,logoRadius:0},y(i.logo)?{}:i.logo),n=r.logoSize,o=void 0===n?.15:n,a=r.bgColor,u=void 0===a?"#ffffff":a,s=r.borderSize,c=void 0===s?.05:s,f=r.crossOrigin,l=void 0===f?"anonymous":f,h=r.borderRadius,d=void 0===h?8:h,g=r.logoRadius,v=void 0===g?0:g,p=y(i.logo)?i.logo:i.logo.src,m=e*o,w=e*(1-o)/2,E=e*(o+c),b=e*(1-o-c)/2,C=t.getContext("2d");if(C){B(C)(b,b,E,E,d),C.fillStyle=u,C.fill();var A=new Image;(l||v)&&A.setAttribute("crossOrigin",l),A.src=p;return new Promise((function(e){A.onload=function(){v?function(t){var e=document.createElement("canvas");e.width=w+m,e.height=w+m;var r=e.getContext("2d");if(r&&C&&(r.drawImage(t,w,w,m,m),B(C)(w,w,m,m,v),C)){var n=C.createPattern(e,"no-repeat");n&&(C.fillStyle=n,C.fill())}}(A):function(t){C.drawImage(t,w,w,m,m)}(A),e(t.toDataURL())}}))}},B=function(t){return function(e,r,n,o,i){var a=Math.min(n,o);return i>a/2&&(i=a/2),t.beginPath(),t.moveTo(e+i,r),t.arcTo(e+n,r,e+n,r+o,i),t.arcTo(e+n,r+o,e,r+o,i),t.arcTo(e,r+o,e,r,i),t.arcTo(e,r,e+n,r,i),t.closePath(),t}},T=function(){var t=a(e().mark((function t(r,n){var o;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=document.createElement("canvas"),t.next=3,m(o,r,n);case 3:return t.abrupt("return",o.width);case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),I=function(t){return t.length>36?"M":t.length>16?"Q":"H"};return function(e,r){return f(),l("div",{class:"qrcode",style:d(g(P))},["canvas"===t.tag?(f(),l("canvas",{key:0,ref_key:"wrapRef",ref:C},null,512)):h("",!0),"img"===t.tag?(f(),l("img",{key:1,ref_key:"wrapRef",ref:C},null,512)):h("",!0)],4)}}});t("_",o(qt,[["__scopeId","data-v-386832c4"]]))}}}))}();