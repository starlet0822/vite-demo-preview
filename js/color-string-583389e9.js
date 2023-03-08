import{c as r}from"./color-name-1ee9b2d5.js";import{s as t}from"./simple-swizzle-76a3913f.js";var a={exports:{}},e=r,s=t.exports,n=Object.hasOwnProperty,o=Object.create(null);for(var l in e)n.call(e,l)&&(o[e[l]]=l);var u=a.exports={to:{},get:{}};function d(r,t,a){return Math.min(Math.max(t,r),a)}function h(r){var t=Math.round(r).toString(16).toUpperCase();return t.length<2?"0"+t:t}u.get=function(r){var t,a;switch(r.substring(0,3).toLowerCase()){case"hsl":t=u.get.hsl(r),a="hsl";break;case"hwb":t=u.get.hwb(r),a="hwb";break;default:t=u.get.rgb(r),a="rgb"}return t?{model:a,value:t}:null},u.get.rgb=function(r){if(!r)return null;var t,a,s,o=[0,0,0,1];if(t=r.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(s=t[2],t=t[1],a=0;a<3;a++){var l=2*a;o[a]=parseInt(t.slice(l,l+2),16)}s&&(o[3]=parseInt(s,16)/255)}else if(t=r.match(/^#([a-f0-9]{3,4})$/i)){for(s=(t=t[1])[3],a=0;a<3;a++)o[a]=parseInt(t[a]+t[a],16);s&&(o[3]=parseInt(s+s,16)/255)}else if(t=r.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)){for(a=0;a<3;a++)o[a]=parseInt(t[a+1],0);t[4]&&(t[5]?o[3]=.01*parseFloat(t[4]):o[3]=parseFloat(t[4]))}else{if(!(t=r.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)))return(t=r.match(/^(\w+)$/))?"transparent"===t[1]?[0,0,0,0]:n.call(e,t[1])?((o=e[t[1]])[3]=1,o):null:null;for(a=0;a<3;a++)o[a]=Math.round(2.55*parseFloat(t[a+1]));t[4]&&(t[5]?o[3]=.01*parseFloat(t[4]):o[3]=parseFloat(t[4]))}for(a=0;a<3;a++)o[a]=d(o[a],0,255);return o[3]=d(o[3],0,1),o},u.get.hsl=function(r){if(!r)return null;var t=r.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(t){var a=parseFloat(t[4]);return[(parseFloat(t[1])%360+360)%360,d(parseFloat(t[2]),0,100),d(parseFloat(t[3]),0,100),d(isNaN(a)?1:a,0,1)]}return null},u.get.hwb=function(r){if(!r)return null;var t=r.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(t){var a=parseFloat(t[4]);return[(parseFloat(t[1])%360+360)%360,d(parseFloat(t[2]),0,100),d(parseFloat(t[3]),0,100),d(isNaN(a)?1:a,0,1)]}return null},u.to.hex=function(){var r=s(arguments);return"#"+h(r[0])+h(r[1])+h(r[2])+(r[3]<1?h(Math.round(255*r[3])):"")},u.to.rgb=function(){var r=s(arguments);return r.length<4||1===r[3]?"rgb("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+")":"rgba("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+", "+r[3]+")"},u.to.rgb.percent=function(){var r=s(arguments),t=Math.round(r[0]/255*100),a=Math.round(r[1]/255*100),e=Math.round(r[2]/255*100);return r.length<4||1===r[3]?"rgb("+t+"%, "+a+"%, "+e+"%)":"rgba("+t+"%, "+a+"%, "+e+"%, "+r[3]+")"},u.to.hsl=function(){var r=s(arguments);return r.length<4||1===r[3]?"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)":"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+r[3]+")"},u.to.hwb=function(){var r=s(arguments),t="";return r.length>=4&&1!==r[3]&&(t=", "+r[3]),"hwb("+r[0]+", "+r[1]+"%, "+r[2]+"%"+t+")"},u.to.keyword=function(r){return o[r.slice(0,3)]};export{a as c};
