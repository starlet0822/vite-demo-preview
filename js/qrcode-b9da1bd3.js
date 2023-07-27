var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,n=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&i(e,a,t[a]);if(o)for(var a of o(t))r.call(t,a)&&i(e,a,t[a]);return e},l=(e,t,a)=>new Promise(((o,s)=>{var r=e=>{try{n(a.next(e))}catch(t){s(t)}},i=e=>{try{n(a.throw(e))}catch(t){s(t)}},n=e=>e.done?o(e.value):Promise.resolve(e.value).then(r,i);n((a=a.apply(e,t)).next())}));import{f as c,R as d,w as p,U as m,x as u,B as f,s as g,q as b,c as j,a as v}from"./vant-e0b5fbdf.js";import{J as y}from"./jsbarcode-552f7d17.js";import{l as h,r as w,b as x,s as O,v as _,z as C,c as S,w as k,B as P,F as R,K as D,u as E,n as L,D as q,H as U,E as z,f as T,G as I,M as V,N as A,aR as B,aQ as F,S as H}from"./@vue-52de1c01.js";import{b as N}from"./qrcode-a2a635fd.js";import{_ as Q}from"./plugin-vue_export-helper-893979e1.js";import{d as $,e as M}from"./lodash-es-133975bb.js";import{_ as Y}from"./index-eb7feec2.js";import"./@zxing-5197659b.js";import{H as G}from"./html5-qrcode-ee28ca69.js";import{t as J}from"./index-2eb2a530.js";import"./js-cookie-aaf6027b.js";import"./@vant-0004063d.js";import"./encode-utf8-5218539d.js";import"./dijkstrajs-6deee4e3.js";import"./vue-router-35312974.js";import"./ts-custom-error-0a9e0592.js";import"./@antv-8a75d63c.js";import"./tslib-546db90a.js";import"./fecha-2b185e5a.js";/* empty css                      */import"./amfe-flexible-385c80ea.js";import"./vuex-c830e64e.js";import"./@vueuse-feee2333.js";import"./axios-0cd4f164.js";import"./qs-6446231f.js";import"./side-channel-b2edb420.js";import"./get-intrinsic-8aab7bd3.js";import"./has-symbols-1f359e75.js";import"./function-bind-c930bb92.js";import"./has-03e8e28c.js";import"./call-bind-b7e23f7e.js";import"./object-inspect-8ed24658.js";import"./nprogress-319be66c.js";import"./vue3-hash-calendar-68956731.js";import"./hammerjs-ed6f6a9e.js";import"./mockjs-0ec5bfd5.js";import"./dayjs-f8677b81.js";import"./vite-plugin-mock-fc11b28e.js";import"./path-to-regexp-9b852198.js";function K(e,t=Date.now()){const a=e.split(","),o=a[0].match(/:(.*?);/)[1],s=o.split("/")[1],r=window.atob(a[1]);let i=r.length;const n=new Uint8Array(i);for(;i--;)n[i]=r.charCodeAt(i);return new File([n],`${t}.${s}`,{type:o})}const W=h({name:"BarcodeCreate"}),X=Object.assign(W,{props:{tag:{type:String,default:"canvas"},text:{type:String,default:null},options:{type:Object,default:()=>({})},type:{type:String,default:"CODE128"}},setup(e){const o=e,s=w(null);return x((()=>{const e=(r=n({},o.options),i={format:o.type},t(r,a(i)));var r,i;y(s.value,o.text,e)})),(t,a)=>(O(),_(C(e.tag),{ref_key:"wrapEl",ref:s},null,512))}});const Z=h({name:"QRCodeCreate"});var ee=Q(Object.assign(Z,{props:{tag:{type:String,default:"canvas"},text:{type:[String,Array],default:null},options:{type:Object,default:()=>({})},width:{type:[Number,String],default:100},logo:{type:[String,Object],default:()=>""}},emits:["done","click","disabled-click"],setup(e,{emit:t}){const a=e,{toCanvas:o,toDataURL:s}=N,r=w(!0),i=w(null),c=S((()=>String(a.text))),d=S((()=>({width:a.width+"px",height:a.width+"px"}))),p=()=>l(this,null,(function*(){yield L();const e=$(a.options||{});if("canvas"===a.tag){e.errorCorrectionLevel=e.errorCorrectionLevel||g(E(c));const s=yield f(E(c),e);e.scale=0===a.width?void 0:a.width/s*4;const n=yield o(E(i),E(c),e);if(a.logo){const e=yield m(n);t("done",e),r.value=!1}else t("done",n.toDataURL()),r.value=!1}else{const o=yield s(c.value,n({errorCorrectionLevel:"H",width:a.width},e));E(i).src=o,t("done",o),r.value=!1}}));k((()=>c.value),(e=>{e&&p()}),{deep:!0,immediate:!0});const m=e=>{const t=e.width,o=Object.assign({logoSize:.15,bgColor:"#ffffff",borderSize:.05,crossOrigin:"anonymous",borderRadius:8,logoRadius:0},M(a.logo)?{}:a.logo),{logoSize:s=.15,bgColor:r="#ffffff",borderSize:i=.05,crossOrigin:n="anonymous",borderRadius:l=8,logoRadius:c=0}=o,d=M(a.logo)?a.logo:a.logo.src,p=t*s,m=t*(1-s)/2,f=t*(s+i),g=t*(1-s-i)/2,b=e.getContext("2d");if(!b)return;u(b)(g,g,f,f,l),b.fillStyle=r,b.fill();const j=new Image;(n||c)&&j.setAttribute("crossOrigin",n),j.src=d;return new Promise((t=>{j.onload=()=>{var a;c?(e=>{const t=document.createElement("canvas");t.width=m+p,t.height=m+p;const a=t.getContext("2d");if(!a||!b)return;if(a.drawImage(e,m,m,p,p),u(b)(m,m,p,p,c),!b)return;const o=b.createPattern(t,"no-repeat");o&&(b.fillStyle=o,b.fill())})(j):(a=j,b.drawImage(a,m,m,p,p)),t(e.toDataURL())}}))},u=e=>(t,a,o,s,r)=>{const i=Math.min(o,s);return r>i/2&&(r=i/2),e.beginPath(),e.moveTo(t+r,a),e.arcTo(t+o,a,t+o,a+s,r),e.arcTo(t+o,a+s,t,a+s,r),e.arcTo(t,a+s,t,a,r),e.arcTo(t,a,t+o,a,r),e.closePath(),e},f=(e,t)=>l(this,null,(function*(){const a=document.createElement("canvas");return yield o(a,e,t),a.width})),g=e=>e.length>36?"M":e.length>16?"Q":"H";return(t,a)=>(O(),P("div",{class:"qrcode",style:D(E(d))},["canvas"===e.tag?(O(),P("canvas",{key:0,ref_key:"wrapRef",ref:i},null,512)):R("",!0),"img"===e.tag?(O(),P("img",{key:1,ref_key:"wrapRef",ref:i},null,512)):R("",!0)],4))}}),[["__scopeId","data-v-386832c4"]]);const te=e=>(B("data-v-0ac05cf7"),e=e(),F(),e),ae={class:"layout__page"},oe={class:"layout__body"},se=te((()=>U("div",{class:"desc"},"canvas生成",-1))),re=te((()=>U("div",{class:"desc"},"自定义样式生成",-1))),ie=te((()=>U("div",{class:"desc"},"img生成",-1))),ne=te((()=>U("div",{id:"reader"},null,-1))),le=h({name:"QrcodeAndBarcode"});var ce=Q(Object.assign(le,{setup(e){const t=w(["1","2","3"]),a=w([]),o=".png,.jpg,.jpeg",s=e=>!!/image\/(png|jpg|jpeg)$/.test(e.type)||(g(`请上传 ${o} 格式图片`),!1),r=J,i=e=>{y(e.file)},n=[{tag:"canvas",text:"CODE128 TYPE",type:"CODE128",options:{}},{tag:"img",text:"CODE39 TYPE",type:"CODE39",options:{lineColor:r}}],l=e=>{const t=e.target;y(t)},y=e=>{b({message:"识别中..."});const t=new G("reader");let a=null,o=null;e instanceof File?o=e:("canvas"===e.tagName.toLocaleLowerCase()&&(a=e.toDataURL(),o=K(a)),"img"===e.tagName.toLocaleLowerCase()&&(a=e.src,o=K(a))),t.scanFile(o,!1).then((e=>{j(),v({type:"success",message:"识别结果为："+e,position:"bottom"})})).catch((e=>{j(),v({type:"danger",message:"识别失败",position:"bottom"})}))};return(e,g)=>{const b=Y,j=ee,v=c,y=d,h=p,w=X,x=m,C=u,S=f,k=H("press");return O(),P("div",ae,[q(b),U("div",oe,[q(C,{modelValue:E(t),"onUpdate:modelValue":g[1]||(g[1]=e=>T(t)?t.value=e:null)},{default:z((()=>[q(h,{title:"二维码（长按可以识别哦~）",name:"1"},{default:z((()=>[q(y,{type:"flex",gutter:10,class:"qrcode-box"},{default:z((()=>[q(v,{class:"qrcode-item"},{default:z((()=>[I(q(j,{text:"我是canvas生成的二维码"},null,512),[[k,l]]),se])),_:1}),(O(),_(v,{key:0,class:"qrcode-item"},{default:z((()=>[I(q(j,{id:"img-qrcode",text:"我是有样式的二维码",tag:"img",options:{color:{dark:E(r)}}},null,8,["options"]),[[k,l]]),re])),_:1})),q(v,{class:"qrcode-item"},{default:z((()=>[I(q(j,{tag:"img",text:"我是img生成的二维码"},null,512),[[k,l]]),ie])),_:1})])),_:1})])),_:1}),q(h,{title:"条形码（长按可以识别哦~）",name:"2"},{default:z((()=>[q(y,{type:"flex",gutter:10},{default:z((()=>[(O(),P(V,null,A(n,((e,t)=>q(v,{key:t,span:24},{default:z((()=>[I(q(w,{tag:e.tag,text:e.text,type:e.type,options:e.options},null,8,["tag","text","type","options"]),[[k,l]])])),_:2},1024))),64))])),_:1})])),_:1}),q(h,{title:"上传(二维码/条形码)图片识别",name:"3"},{default:z((()=>[q(x,{modelValue:E(a),"onUpdate:modelValue":g[0]||(g[0]=e=>T(a)?a.value=e:null),"max-count":"1",accept:o,"before-read":s,"after-read":i},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),ne]),q(S)])}}}),[["__scopeId","data-v-0ac05cf7"]]);export{ce as default};
