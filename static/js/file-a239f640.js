function s(o,t=Date.now()){const n=o.split(","),r=n[0].match(/:(.*?);/)[1],e=r.split("/")[1],c=window.atob(n[1]);let i=c.length;const a=new Uint8Array(i);for(;i--;)a[i]=c.charCodeAt(i);return new File([a],`${t}.${e}`,{type:r})}function d(o){const t=o.split(","),n=t[0].match(/:(.*?);/)[1],r=window.atob(t[1]);let e=r.length;const c=new Uint8Array(e);for(;e--;)c[e]=r.charCodeAt(e);return new Blob([c],{type:n})}function l(o){let t="";if(window.createObjectURL!==void 0)t=window.createObjectURL(o);else if(window.webkitURL!==void 0)try{t=window.webkitURL.createObjectURL(o)}catch(n){console.log(n)}else if(window.URL!==void 0)try{t=window.URL.createObjectURL(o)}catch(n){console.log(n)}return t}function w(o,t){const n=d(o);if(typeof window.navigator.msSaveBlob<"u")window.navigator.msSaveBlob(n,t);else{const r=l(n),e=document.createElement("a");e.style.display="none",e.href=r,e.setAttribute("download",t),document.body.appendChild(e),e.click(),URL.revokeObjectURL(e.href),document.body.removeChild(e)}}export{s as a,w as d};
