import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{d as f,c as t,u as s,f as o,k as c,m as r,x as k}from"./index-2d318566.js";function g(n){return/^(https?:|mailto:|tel:)/.test(n)}const v=["xlink:href"],y=f({name:"SvgIcon"}),x=Object.assign(y,{props:{name:{type:String,required:!0},className:{type:String,default:""},fill:{type:String,default:"currentColor"}},emits:["click"],setup(n,{emit:l}){const e=n,i=t(()=>g(e.name)),u=t(()=>`#icon-${e.name}`),m=t(()=>e.className?"svg-icon "+e.className:"svg-icon"),_=t(()=>({mask:`url(${e.name}) no-repeat 50% 50%`,"-webkit-mask":`url(${e.name}) no-repeat 50% 50%`})),p=()=>{l("click",e.name)};return(a,h)=>s(i)?(o(),c("div",r({key:0},a.$attrs,{style:s(_),class:"svg-external-icon svg-icon"}),null,16)):(o(),c("svg",r({key:1},a.$attrs,{class:s(m),style:{fill:n.fill},"aria-hidden":"true",onClick:p}),[k("use",{"xlink:href":s(u)},null,8,v)],16))}}),$=d(x,[["__scopeId","data-v-8ceb0b8e"]]);export{$ as _};
