import{_ as Y}from"./index-93d2dcb6.js";import{ap as Z,a as J,o as tt,B as et,g as nt,q as _,f as T,x as g,p as f,K as ot,u as V,y as K,k as at,G as it,v as rt,F as st,aq as ct,M as Q,Q as ut,R as lt}from"./index-f8e6da5a.js";import{C as dt,R as pt}from"./index-039fa471.js";import{G as mt,a as ht}from"./index-502a8f8c.js";import{C as ft}from"./index-66727303.js";import{_ as gt}from"./plugin-vue_export-helper-c27b6911.js";import{s as _t}from"./function-call-06fbde7d.js";import{I as wt}from"./index-4d82378c.js";import"./index-e297168d.js";import"./use-placeholder-c66ff167.js";import"./use-route-8952b405.js";import"./index-15f02ff5.js";var $={exports:{}};(function(j,B){(function(I,d){j.exports=d()})(Z,function(){return function(I){var d={};function s(i){if(d[i])return d[i].exports;var u=d[i]={i,l:!1,exports:{}};return I[i].call(u.exports,u,u.exports,s),u.l=!0,u.exports}return s.m=I,s.c=d,s.d=function(i,u,w){s.o(i,u)||Object.defineProperty(i,u,{enumerable:!0,get:w})},s.r=function(i){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},s.t=function(i,u){if(1&u&&(i=s(i)),8&u||4&u&&typeof i=="object"&&i&&i.__esModule)return i;var w=Object.create(null);if(s.r(w),Object.defineProperty(w,"default",{enumerable:!0,value:i}),2&u&&typeof i!="string")for(var v in i)s.d(w,v,(function(b){return i[b]}).bind(null,v));return w},s.n=function(i){var u=i&&i.__esModule?function(){return i.default}:function(){return i};return s.d(u,"a",u),u},s.o=function(i,u){return Object.prototype.hasOwnProperty.call(i,u)},s.p="",s(s.s=0)}([function(I,d,s){var i;function u(o){return["image/png","image/jpeg","image/gif"].some(e=>e===o)}s.r(d),s.d(d,"canvastoDataURL",function(){return v}),s.d(d,"canvastoFile",function(){return b}),s.d(d,"dataURLtoFile",function(){return x}),s.d(d,"dataURLtoImage",function(){return z}),s.d(d,"downloadFile",function(){return C}),s.d(d,"filetoDataURL",function(){return k}),s.d(d,"imagetoCanvas",function(){return E}),s.d(d,"urltoBlob",function(){return L}),s.d(d,"urltoImage",function(){return R}),s.d(d,"compress",function(){return H}),s.d(d,"compressAccurately",function(){return W}),s.d(d,"EImageType",function(){return i}),function(o){o.PNG="image/png",o.JPEG="image/jpeg",o.GIF="image/gif"}(i||(i={}));var w=function(o,e,n,t){return new(n||(n=Promise))(function(r,l){function m(c){try{h(t.next(c))}catch(a){l(a)}}function p(c){try{h(t.throw(c))}catch(a){l(a)}}function h(c){var a;c.done?r(c.value):(a=c.value,a instanceof n?a:new n(function(y){y(a)})).then(m,p)}h((t=t.apply(o,e||[])).next())})};function v(o,e=.92,n=i.JPEG){return w(this,void 0,void 0,function*(){return u(n)||(n=i.JPEG),o.toDataURL(n,e)})}function b(o,e=.92,n=i.JPEG){return new Promise(t=>o.toBlob(r=>t(r),n,e))}var P=function(o,e,n,t){return new(n||(n=Promise))(function(r,l){function m(c){try{h(t.next(c))}catch(a){l(a)}}function p(c){try{h(t.throw(c))}catch(a){l(a)}}function h(c){var a;c.done?r(c.value):(a=c.value,a instanceof n?a:new n(function(y){y(a)})).then(m,p)}h((t=t.apply(o,e||[])).next())})};function x(o,e){return P(this,void 0,void 0,function*(){const n=o.split(",");let t=n[0].match(/:(.*?);/)[1];const r=atob(n[1]);let l=r.length;const m=new Uint8Array(l);for(;l--;)m[l]=r.charCodeAt(l);return u(e)&&(t=e),new Blob([m],{type:t})})}function z(o){return new Promise((e,n)=>{const t=new Image;t.onload=()=>e(t),t.onerror=()=>n(new Error("dataURLtoImage(): dataURL is illegal")),t.src=o})}function C(o,e){const n=document.createElement("a");n.href=window.URL.createObjectURL(o),n.download=e||Date.now().toString(36),document.body.appendChild(n);const t=document.createEvent("MouseEvents");t.initEvent("click",!1,!1),n.dispatchEvent(t),document.body.removeChild(n)}function k(o){return new Promise(e=>{const n=new FileReader;n.onloadend=t=>e(t.target.result),n.readAsDataURL(o)})}var G=function(o,e,n,t){return new(n||(n=Promise))(function(r,l){function m(c){try{h(t.next(c))}catch(a){l(a)}}function p(c){try{h(t.throw(c))}catch(a){l(a)}}function h(c){var a;c.done?r(c.value):(a=c.value,a instanceof n?a:new n(function(y){y(a)})).then(m,p)}h((t=t.apply(o,e||[])).next())})};function E(o,e={}){return G(this,void 0,void 0,function*(){const n=Object.assign({},e),t=document.createElement("canvas"),r=t.getContext("2d");let l,m;for(const p in n)Object.prototype.hasOwnProperty.call(n,p)&&(n[p]=Number(n[p]));if(n.scale){const p=n.scale>0&&n.scale<10?n.scale:1;m=o.width*p,l=o.height*p}else m=n.width||n.height*o.width/o.height||o.width,l=n.height||n.width*o.height/o.width||o.height;switch([5,6,7,8].some(p=>p===n.orientation)?(t.height=m,t.width=l):(t.height=l,t.width=m),n.orientation){case 3:r.rotate(180*Math.PI/180),r.drawImage(o,-t.width,-t.height,t.width,t.height);break;case 6:r.rotate(90*Math.PI/180),r.drawImage(o,0,-t.width,t.height,t.width);break;case 8:r.rotate(270*Math.PI/180),r.drawImage(o,-t.height,0,t.height,t.width);break;case 2:r.translate(t.width,0),r.scale(-1,1),r.drawImage(o,0,0,t.width,t.height);break;case 4:r.translate(t.width,0),r.scale(-1,1),r.rotate(180*Math.PI/180),r.drawImage(o,-t.width,-t.height,t.width,t.height);break;case 5:r.translate(t.width,0),r.scale(-1,1),r.rotate(90*Math.PI/180),r.drawImage(o,0,-t.width,t.height,t.width);break;case 7:r.translate(t.width,0),r.scale(-1,1),r.rotate(270*Math.PI/180),r.drawImage(o,-t.height,0,t.height,t.width);break;default:r.drawImage(o,0,0,t.width,t.height)}return t})}function L(o){return fetch(o).then(e=>e.blob())}function R(o){return new Promise((e,n)=>{const t=new Image;t.onload=()=>e(t),t.onerror=()=>n(new Error("urltoImage(): Image failed to load, please check the image URL")),t.src=o})}var O=function(o,e,n,t){return new(n||(n=Promise))(function(r,l){function m(c){try{h(t.next(c))}catch(a){l(a)}}function p(c){try{h(t.throw(c))}catch(a){l(a)}}function h(c){var a;c.done?r(c.value):(a=c.value,a instanceof n?a:new n(function(y){y(a)})).then(m,p)}h((t=t.apply(o,e||[])).next())})};function H(o,e={}){return O(this,void 0,void 0,function*(){if(!(o instanceof Blob))throw new Error("compress(): First arg must be a Blob object or a File object.");if(typeof e!="object"&&(e=Object.assign({quality:e})),e.quality=Number(e.quality),Number.isNaN(e.quality))return o;const n=yield k(o);let t=n.split(",")[0].match(/:(.*?);/)[1],r=i.JPEG;u(e.type)&&(r=e.type,t=e.type);const l=yield z(n),m=yield E(l,Object.assign({},e)),p=yield v(m,e.quality,r),h=yield x(p,t);return h.size>o.size?o:h})}function W(o,e={}){return O(this,void 0,void 0,function*(){if(!(o instanceof Blob))throw new Error("compressAccurately(): First arg must be a Blob object or a File object.");if(typeof e!="object"&&(e=Object.assign({size:e})),e.size=Number(e.size),Number.isNaN(e.size)||1024*e.size>o.size)return o;e.accuracy=Number(e.accuracy),(!e.accuracy||e.accuracy<.8||e.accuracy>.99)&&(e.accuracy=.95);const n=e.size*(2-e.accuracy)*1024,t=1024*e.size,r=e.size*e.accuracy*1024,l=yield k(o);let m=l.split(",")[0].match(/:(.*?);/)[1],p=i.JPEG;u(e.type)&&(p=e.type,m=e.type);const h=yield z(l),c=yield E(h,Object.assign({},e));let a,y=.5;const N=[null,null];for(let M=1;M<=7;M++){a=yield v(c,y,p);const U=.75*a.length;if(M===7){(n<U||r>U)&&(a=[a,...N].filter(F=>F).sort((F,X)=>Math.abs(.75*F.length-t)-Math.abs(.75*X.length-t))[0]);break}if(n<U)N[1]=a,y-=Math.pow(.5,M+1);else{if(!(r>U))break;N[0]=a,y+=Math.pow(.5,M+1)}}const A=yield x(a,m);return A.size>o.size?o:A})}}])})})($);var yt=$.exports,S=yt;const D="/vite-vue3-preview/static/jpg/compress-7baea395.jpg";const q=j=>(ut("data-v-312d58ca"),j=j(),lt(),j),vt={class:"st-margin-top-10"},bt={class:"img-type"},xt=q(()=>g("span",{class:"desc-text st-line-1"},"img 标签",-1)),It={class:"img-box"},jt=q(()=>g("span",{class:"desc-text st-line-1"},"van-image 组件",-1)),Pt=q(()=>g("p",{class:"desc-text st-line-1"},"van-image 预览",-1)),zt={class:"img-compress st-margin-top-10"},kt={class:"img-box"},Et={class:"desc-text"},Rt={class:"img-box"},Mt={class:"desc-text"},Ot={class:"img-lazyloading st-margin-top-10"},Ut=["src"],Bt={__name:"image",setup(j){const B="https://img.yzcdn.cn/vant/cat.jpeg",I=J(D),d=J(),s=["https://img.yzcdn.cn/vant/cat.jpeg","https://images.pexels.com/photos/9443229/pexels-photo-9443229.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200","https://s4.ax1x.com/2022/03/02/b3NS0A.jpg","https://s4.ax1x.com/2022/03/02/b3Gyo6.jpg","https://images.pexels.com/photos/10865058/pexels-photo-10865058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300"],i=()=>{_t({images:s,startPosition:0,closeable:!0})};return tt(async()=>{await et();const u=await S.urltoBlob(D),w=await S.compress(u,{quality:.6});I.value=await S.filetoDataURL(w)}),(u,w)=>{const v=ft,b=mt,P=ct,x=wt,z=ht,C=dt,k=pt,G=Y,E=Q("lazy"),L=Q("gradual");return T(),nt(G,{class:"page-wrapper"},{default:_(()=>[g("div",vt,[g("div",bt,[f(v,{title:"图片显示",border:!1}),f(z,{border:!0,"column-num":3,center:""},{default:_(()=>[f(b,null,{default:_(()=>[g("div",{class:"img-box"},[g("img",{src:B}),xt])]),_:1}),f(b,null,{default:_(()=>[g("div",It,[f(x,{src:B,round:""},{loading:_(()=>[f(P,{type:"spinner",size:"20"})]),_:1}),jt])]),_:1}),f(b,null,{default:_(()=>[f(x,{src:s[0],onClick:ot(i,["stop"])},{loading:_(()=>[f(P,{type:"spinner",size:"20"})]),_:1},8,["src","onClick"]),Pt]),_:1})]),_:1})]),g("div",zt,[f(v,{title:"图片压缩",border:!1}),f(z,{border:!0,"column-num":2,center:""},{default:_(()=>[f(b,null,{default:_(()=>[g("div",kt,[f(x,{ref_key:"compressImgRef",ref:d,src:V(D)},{loading:_(()=>[f(P,{type:"spinner",size:"20"})]),_:1},8,["src"]),g("span",Et,"压缩前"+K(),1)])]),_:1}),f(b,null,{default:_(()=>[g("div",Rt,[f(x,{src:V(I)},{loading:_(()=>[f(P,{type:"spinner",size:"20"})]),_:1},8,["src"]),g("span",Mt,"压缩后"+K(),1)])]),_:1})]),_:1})]),g("div",Ot,[f(v,{title:"懒加载",border:!1}),f(k,null,{default:_(()=>[(T(),at(st,null,it(s,(R,O)=>f(C,{key:R+O,span:"24",class:"img-lazy"},{default:_(()=>[rt(g("img",{src:R},null,8,Ut),[[E,R],[L]])]),_:2},1024)),64))]),_:1})])])]),_:1})}}},Kt=gt(Bt,[["__scopeId","data-v-312d58ca"]]);export{Kt as default};