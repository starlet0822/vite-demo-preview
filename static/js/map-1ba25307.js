import{_ as d}from"./index-fe03fbb2.js";import{a as n,d as p,o as f,B as v,u as h,f as i,k as w,A as g,g as y,q as M,x,p as c}from"./index-bf5293ec.js";import{C as A}from"./index-dd8bc5ba.js";import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import"./index-190fcdfb.js";import"./use-route-27ae2cd1.js";function k(a){const o=n(!1),s=n(!1),t=n(!1);let e;const r=new Promise((_,u)=>{e=document.createElement("script"),e.type="text/javascript",e.onload=function(){o.value=!1,t.value=!0,s.value=!1,_("")},e.onerror=function(m){o.value=!1,t.value=!1,s.value=!0,u(m)},e.src=a.src,document.head.appendChild(e)});return{script:e,isLoading:o,error:s,success:t,toPromise:()=>r,removeScript:()=>{e&&e.remove()}}}const C="https://webapi.amap.com/maps?v=2.0&key=431cda275c880659aa68b495895c81d8",S=p({name:"AMap",props:{width:{type:String,default:"100%"},height:{type:String,default:200/37.5+"rem"}},setup(){const a=n(null),{toPromise:o}=k({src:C});async function s(){await o(),await v();const t=h(a);if(!t)return;const e=window.AMap;new e.Map(t,{zoom:11,zooms:[2,22],viewMode:"3D"})}return f(()=>{s()}),{wrapRef:a}}});function b(a,o,s,t,e,r){return i(),w("div",{ref:"wrapRef",style:g({height:a.height,width:a.width})},null,4)}const B=l(S,[["render",b]]);const $={class:"layout__body st-margin-top-10"},P=p({name:"Map"}),z=Object.assign(P,{setup(a){return(o,s)=>{const t=A,e=d;return i(),y(e,{class:"page-wrapper"},{default:M(()=>[x("div",$,[c(t,{title:"高德地图",border:!1}),c(B)])]),_:1})}}}),D=l(z,[["__scopeId","data-v-570d9e94"]]);export{D as default};
