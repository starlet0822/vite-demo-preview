import{Z as o,d as c,p as r,F as d,at as u,m,cj as f,a3 as p}from"./index-5560da19.js";const[v,i]=o("cell-group"),g={title:String,inset:Boolean,border:u};var O=c({name:v,inheritAttrs:!1,props:g,setup(e,{slots:t,attrs:l}){const n=()=>{var a;return r("div",m({class:[i({inset:e.inset}),{[f]:e.border&&!e.inset}]},l),[(a=t.default)==null?void 0:a.call(t)])},s=()=>r("div",{class:i("title",{inset:e.inset})},[t.title?t.title():e.title]);return()=>e.title||t.title?r(d,null,[s(),n()]):n()}});const T=p(O);export{T as C};