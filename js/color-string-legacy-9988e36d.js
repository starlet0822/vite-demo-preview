System.register(["./color-name-legacy-414fe402.js","./simple-swizzle-legacy-90ba07a6.js"],(function(r){"use strict";var t,e;return{setters:[function(r){t=r.c},function(r){e=r.s}],execute:function(){var a=r("c",{exports:{}}),n=t,s=e.exports,o=Object.hasOwnProperty,l=Object.create(null);for(var u in n)o.call(n,u)&&(l[n[u]]=u);var h=a.exports={to:{},get:{}};function d(r,t,e){return Math.min(Math.max(t,r),e)}function c(r){var t=Math.round(r).toString(16).toUpperCase();return t.length<2?"0"+t:t}h.get=function(r){var t,e;switch(r.substring(0,3).toLowerCase()){case"hsl":t=h.get.hsl(r),e="hsl";break;case"hwb":t=h.get.hwb(r),e="hwb";break;default:t=h.get.rgb(r),e="rgb"}return t?{model:e,value:t}:null},h.get.rgb=function(r){if(!r)return null;var t,e,a,s=[0,0,0,1];if(t=r.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(a=t[2],t=t[1],e=0;e<3;e++){var l=2*e;s[e]=parseInt(t.slice(l,l+2),16)}a&&(s[3]=parseInt(a,16)/255)}else if(t=r.match(/^#([a-f0-9]{3,4})$/i)){for(a=(t=t[1])[3],e=0;e<3;e++)s[e]=parseInt(t[e]+t[e],16);a&&(s[3]=parseInt(a+a,16)/255)}else if(t=r.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)){for(e=0;e<3;e++)s[e]=parseInt(t[e+1],0);t[4]&&(t[5]?s[3]=.01*parseFloat(t[4]):s[3]=parseFloat(t[4]))}else{if(!(t=r.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)))return(t=r.match(/^(\w+)$/))?"transparent"===t[1]?[0,0,0,0]:o.call(n,t[1])?((s=n[t[1]])[3]=1,s):null:null;for(e=0;e<3;e++)s[e]=Math.round(2.55*parseFloat(t[e+1]));t[4]&&(t[5]?s[3]=.01*parseFloat(t[4]):s[3]=parseFloat(t[4]))}for(e=0;e<3;e++)s[e]=d(s[e],0,255);return s[3]=d(s[3],0,1),s},h.get.hsl=function(r){if(!r)return null;var t=r.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(t){var e=parseFloat(t[4]);return[(parseFloat(t[1])%360+360)%360,d(parseFloat(t[2]),0,100),d(parseFloat(t[3]),0,100),d(isNaN(e)?1:e,0,1)]}return null},h.get.hwb=function(r){if(!r)return null;var t=r.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(t){var e=parseFloat(t[4]);return[(parseFloat(t[1])%360+360)%360,d(parseFloat(t[2]),0,100),d(parseFloat(t[3]),0,100),d(isNaN(e)?1:e,0,1)]}return null},h.to.hex=function(){var r=s(arguments);return"#"+c(r[0])+c(r[1])+c(r[2])+(r[3]<1?c(Math.round(255*r[3])):"")},h.to.rgb=function(){var r=s(arguments);return r.length<4||1===r[3]?"rgb("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+")":"rgba("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+", "+r[3]+")"},h.to.rgb.percent=function(){var r=s(arguments),t=Math.round(r[0]/255*100),e=Math.round(r[1]/255*100),a=Math.round(r[2]/255*100);return r.length<4||1===r[3]?"rgb("+t+"%, "+e+"%, "+a+"%)":"rgba("+t+"%, "+e+"%, "+a+"%, "+r[3]+")"},h.to.hsl=function(){var r=s(arguments);return r.length<4||1===r[3]?"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)":"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+r[3]+")"},h.to.hwb=function(){var r=s(arguments),t="";return r.length>=4&&1!==r[3]&&(t=", "+r[3]),"hwb("+r[0]+", "+r[1]+"%, "+r[2]+"%"+t+")"},h.to.keyword=function(r){return l[r.slice(0,3)]}}}}));
