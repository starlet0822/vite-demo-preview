import{ab as p,d as x,a as r,c as y,ai as P,cP as w,c0 as v,cz as B,c_ as S,o as I,be as C,bh as z,w as N,p as s,aa as _,m as j,aB as A,af as i,an as O,cR as R,c7 as q,B as D,c$ as E,am as L}from"./index-2d318566.js";const[M,u]=p("back-top"),U={right:i,bottom:i,zIndex:i,target:[String,Object],offset:O(200),immediate:Boolean,teleport:{type:[String,Object],default:"body"}};var V=x({name:M,inheritAttrs:!1,props:U,emits:["click"],setup(e,{emit:g,slots:d,attrs:b}){let c=!1;const a=r(!1),n=r(),o=r(),h=y(()=>P(w(e.zIndex),{right:v(e.right),bottom:v(e.bottom)})),k=t=>{var l;g("click",t),(l=o.value)==null||l.scrollTo({top:0,behavior:e.immediate?"auto":"smooth"})},f=()=>{a.value=o.value?R(o.value)>=+e.offset:!1},T=()=>{const{target:t}=e;if(typeof t=="string"){const l=document.querySelector(t);if(l)return l}else return t},m=()=>{q&&D(()=>{o.value=e.target?T():E(n.value),f()})};return B("scroll",S(f,100),{target:o}),I(m),C(()=>{c&&(a.value=!0,c=!1)}),z(()=>{a.value&&e.teleport&&(a.value=!1,c=!0)}),N(()=>e.target,m),()=>{const t=s("div",j({ref:e.teleport?void 0:n,class:u({active:a.value}),style:h.value,onClick:k},b),[d.default?d.default():s(_,{name:"back-top",class:u("icon")},null)]);return e.teleport?[s("div",{ref:n,class:u("placeholder")},null),s(A,{to:e.teleport},{default:()=>[t]})]:t}}});const $=L(V);export{$ as B};
