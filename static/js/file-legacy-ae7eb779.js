System.register([],(function(e,t){"use strict";return{execute:function(){e({a:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now(),o=e.split(","),n=o[0].match(/:(.*?);/)[1],i=n.split("/")[1],r=window.atob(o[1]),c=r.length,a=new Uint8Array(c);c--;)a[c]=r.charCodeAt(c);return new File([a],"".concat(t,".").concat(i),{type:n})},d:function(e,t){var o=function(e){for(var t=e.split(","),o=t[0].match(/:(.*?);/)[1],n=window.atob(t[1]),i=n.length,r=new Uint8Array(i);i--;)r[i]=n.charCodeAt(i);return new Blob([r],{type:o})}(e);if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(o,t);else{var n=function(e){var t="";if(void 0!==window.createObjectURL)t=window.createObjectURL(e);else if(void 0!==window.webkitURL)try{t=window.webkitURL.createObjectURL(e)}catch(o){console.log(o)}else if(void 0!==window.URL)try{t=window.URL.createObjectURL(e)}catch(o){console.log(o)}return t}(o),i=document.createElement("a");i.style.display="none",i.href=n,i.setAttribute("download",t),document.body.appendChild(i),i.click(),URL.revokeObjectURL(i.href),document.body.removeChild(i)}}})}}}));