function e(e,t=Date.now()){for(var o=e.split(","),n=o[0].match(/:(.*?);/)[1],i=n.split("/")[1],a=window.atob(o[1]),r=a.length,c=new Uint8Array(r);r--;)c[r]=a.charCodeAt(r);return new File([c],`${t}.${i}`,{type:n})}function t(e,t){const o=function(e){for(var t=e.split(","),o=t[0].match(/:(.*?);/)[1],n=window.atob(t[1]),i=n.length,a=new Uint8Array(i);i--;)a[i]=n.charCodeAt(i);return new Blob([a],{type:o})}(e);if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(o,t);else{const e=function(e){let t="";if(void 0!==window.createObjectURL)t=window.createObjectURL(e);else if(void 0!==window.webkitURL)try{t=window.webkitURL.createObjectURL(e)}catch(o){}else if(void 0!==window.URL)try{t=window.URL.createObjectURL(e)}catch(o){}return t}(o),n=document.createElement("a");n.style.display="none",n.href=e,n.setAttribute("download",t),document.body.appendChild(n),n.click(),URL.revokeObjectURL(n.href),document.body.removeChild(n)}}export{e as a,t as d};