import{a1 as o,d as c,p as r,F as d,av as u,m,cj as f,a7 as v}from"./index-f8e6da5a.js";const[p,i]=o("cell-group"),g={title:String,inset:Boolean,border:u};var O=c({name:p,inheritAttrs:!1,props:g,setup(e,{slots:t,attrs:l}){const n=()=>{var a;return r("div",m({class:[i({inset:e.inset}),{[f]:e.border&&!e.inset}]},l),[(a=t.default)==null?void 0:a.call(t)])},s=()=>r("div",{class:i("title",{inset:e.inset})},[t.title?t.title():e.title]);return()=>e.title||t.title?r(d,null,[s(),n()]):n()}});const T=v(O);export{T as C};