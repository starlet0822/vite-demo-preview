import{a1 as J,co as N,cp as K,d as E,a3 as Q,cq as Y,p as r,P as F,aq as Z,cr as M,cs as ee,ct as ae,a2 as x,a as L,ar as le,ci as te,c4 as ne,at as j,as as k,av as U,c9 as re,v as D,bW as O,cu as ie,c5 as R,m as oe,r as se,a7 as ce}from"./index-4a1a9842.js";import{s as ue}from"./function-call-cb935217.js";import{I as de}from"./index-b5bc300a.js";const[fe,i,ve]=J("uploader");function B(e,t){return new Promise(o=>{if(t==="file"){o();return}const c=new FileReader;c.onload=v=>{o(v.target.result)},t==="dataUrl"?c.readAsDataURL(e):t==="text"&&c.readAsText(e)})}function T(e,t){return N(e).some(o=>o.file?K(t)?t(o.file):o.file.size>+t:!1)}function me(e,t){const o=[],c=[];return e.forEach(v=>{T(v,t)?c.push(v):o.push(v)}),{valid:o,invalid:c}}const ge=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|avif)/i,we=e=>ge.test(e);function q(e){return e.isImage?!0:e.file&&e.file.type?e.file.type.indexOf("image")===0:e.url?we(e.url):typeof e.content=="string"?e.content.indexOf("data:image")===0:!1}var pe=E({props:{name:Q,item:Y(Object),index:Number,imageFit:String,lazyLoad:Boolean,deletable:Boolean,reupload:Boolean,previewSize:[Number,String,Array],beforeDelete:Function},emits:["delete","preview","reupload"],setup(e,{emit:t,slots:o}){const c=()=>{const{status:n,message:u}=e.item;if(n==="uploading"||n==="failed"){const p=n==="failed"?r(F,{name:"close",class:i("mask-icon")},null):r(Z,{class:i("loading")},null),f=ee(u)&&u!=="";return r("div",{class:i("mask")},[p,f&&r("div",{class:i("mask-message")},[u])])}},v=n=>{const{name:u,item:p,index:f,beforeDelete:I}=e;n.stopPropagation(),ae(I,{args:[p,{name:u,index:f}],done:()=>t("delete")})},w=()=>t("preview"),m=()=>t("reupload"),h=()=>{if(e.deletable&&e.item.status!=="uploading"){const n=o["preview-delete"];return r("div",{role:"button",class:i("preview-delete",{shadow:!n}),tabindex:0,"aria-label":ve("delete"),onClick:v},[n?n():r(F,{name:"cross",class:i("preview-delete-icon")},null)])}},y=()=>{if(o["preview-cover"]){const{index:n,item:u}=e;return r("div",{class:i("preview-cover")},[o["preview-cover"](x({index:n},u))])}},P=()=>{const{item:n,lazyLoad:u,imageFit:p,previewSize:f,reupload:I}=e;return q(n)?r(de,{fit:p,src:n.objectUrl||n.content||n.url,class:i("preview-image"),width:Array.isArray(f)?f[0]:f,height:Array.isArray(f)?f[1]:f,lazyLoad:u,onClick:I?m:w},{default:y}):r("div",{class:i("file"),style:M(e.previewSize)},[r(F,{class:i("file-icon"),name:"description"},null),r("div",{class:[i("file-name"),"van-ellipsis"]},[n.file?n.file.name:n.url]),y()])};return()=>r("div",{class:i("preview")},[P(),c(),h()])}});const be={name:j(""),accept:k("image/*"),capture:String,multiple:Boolean,disabled:Boolean,readonly:Boolean,lazyLoad:Boolean,maxCount:j(1/0),imageFit:k("cover"),resultType:k("dataUrl"),uploadIcon:k("photograph"),uploadText:String,deletable:U,reupload:Boolean,afterRead:Function,showUpload:U,modelValue:re(),beforeRead:Function,beforeDelete:Function,previewSize:[Number,String,Array],previewImage:U,previewOptions:Object,previewFullImage:U,maxSize:{type:[Number,String,Function],default:1/0}};var he=E({name:fe,props:be,emits:["delete","oversize","clickUpload","closePreview","clickPreview","clickReupload","update:modelValue"],setup(e,{emit:t,slots:o}){const c=L(),v=[],w=L(-1),m=(a=e.modelValue.length)=>({name:e.name,index:a}),h=()=>{c.value&&(c.value.value="")},y=a=>{if(h(),T(a,e.maxSize))if(Array.isArray(a)){const l=me(a,e.maxSize);if(a=l.valid,t("oversize",l.invalid,m()),!a.length)return}else{t("oversize",a,m());return}if(a=se(a),w.value>-1){const l=[...e.modelValue];l.splice(w.value,1,a),t("update:modelValue",l),w.value=-1}else t("update:modelValue",[...e.modelValue,...N(a)]);e.afterRead&&e.afterRead(a,m())},P=a=>{const{maxCount:l,modelValue:d,resultType:s}=e;if(Array.isArray(a)){const g=+l-d.length;a.length>g&&(a=a.slice(0,g)),Promise.all(a.map(b=>B(b,s))).then(b=>{const H=a.map((S,V)=>{const A={file:S,status:"",message:"",objectUrl:URL.createObjectURL(S)};return b[V]&&(A.content=b[V]),A});y(H)})}else B(a,s).then(g=>{const b={file:a,status:"",message:"",objectUrl:URL.createObjectURL(a)};g&&(b.content=g),y(b)})},n=a=>{const{files:l}=a.target;if(e.disabled||!l||!l.length)return;const d=l.length===1?l[0]:[].slice.call(l);if(e.beforeRead){const s=e.beforeRead(d,m());if(!s){h();return}if(ie(s)){s.then(g=>{P(g||d)}).catch(h);return}}P(d)};let u;const p=()=>t("closePreview"),f=a=>{if(e.previewFullImage){const l=e.modelValue.filter(q),d=l.map(s=>(s.objectUrl&&!s.url&&s.status!=="failed"&&(s.url=s.objectUrl,v.push(s.url)),s.url)).filter(Boolean);u=ue(x({images:d,startPosition:l.indexOf(a),onClose:p},e.previewOptions))}},I=()=>{u&&u.close()},_=(a,l)=>{const d=e.modelValue.slice(0);d.splice(l,1),t("update:modelValue",d),t("delete",a,m(l))},G=a=>{z(),w.value=a},W=(a,l)=>{const d=["imageFit","deletable","reupload","previewSize","beforeDelete"],s=x(R(e,d),R(a,d,!0));return r(pe,oe({item:a,index:l,onClick:()=>t(e.reupload?"clickReupload":"clickPreview",a,m(l)),onDelete:()=>_(a,l),onPreview:()=>f(a),onReupload:()=>G(l)},R(e,["name","lazyLoad"]),s),R(o,["preview-cover","preview-delete"]))},X=()=>{if(e.previewImage)return e.modelValue.map(W)},C=a=>t("clickUpload",a),$=()=>{if(e.modelValue.length>=+e.maxCount&&!e.reupload)return;const a=e.modelValue.length>=+e.maxCount&&e.reupload,l=e.readonly?null:r("input",{ref:c,type:"file",class:i("input"),accept:e.accept,capture:e.capture,multiple:e.multiple&&w.value===-1,disabled:e.disabled,onChange:n},null);return o.default?D(r("div",{class:i("input-wrapper"),onClick:C},[o.default(),l]),[[O,!a]]):D(r("div",{class:i("upload",{readonly:e.readonly}),style:M(e.previewSize),onClick:C},[r(F,{name:e.uploadIcon,class:i("upload-icon")},null),e.uploadText&&r("span",{class:i("upload-text")},[e.uploadText]),l]),[[O,e.showUpload&&!a]])},z=()=>{c.value&&!e.disabled&&c.value.click()};return le(()=>{v.forEach(a=>URL.revokeObjectURL(a))}),te({chooseFile:z,closeImagePreview:I}),ne(()=>e.modelValue),()=>r("div",{class:i()},[r("div",{class:i("wrapper",{disabled:e.disabled})},[X(),$()])])}});const ke=ce(he);export{ke as U};
