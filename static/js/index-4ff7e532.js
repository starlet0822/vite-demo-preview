import{Z as B,d as $,a as u,ad as j,c as D,c5 as f,cs as _,w as C,c9 as M,an as N,o as R,B as P,p as n,$ as d,at as z,ar as b,v as U,M as F,m as S,X as O,a3 as T}from"./index-5560da19.js";const[V,t]=B("image"),X={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:d,height:d,radius:d,lazyLoad:Boolean,iconSize:d,showError:z,errorIcon:b("photo-fail"),iconPrefix:String,showLoading:z,loadingIcon:b("photo")};var Z=$({name:V,props:X,emits:["load","error"],setup(a,{emit:v,slots:c}){const i=u(!1),o=u(!0),r=u(),{$Lazyload:l}=j().proxy,E=D(()=>{const e={width:f(a.width),height:f(a.height)};return _(a.radius)&&(e.overflow="hidden",e.borderRadius=f(a.radius)),e});C(()=>a.src,()=>{i.value=!1,o.value=!0});const g=e=>{o.value&&(o.value=!1,v("load",e))},m=()=>{const e=new Event("load");Object.defineProperty(e,"target",{value:r.value,enumerable:!0}),g(e)},h=e=>{i.value=!0,o.value=!1,v("error",e)},w=(e,s,I)=>I?I():n(O,{name:e,size:a.iconSize,class:s,classPrefix:a.iconPrefix},null),k=()=>{if(o.value&&a.showLoading)return n("div",{class:t("loading")},[w(a.loadingIcon,t("loading-icon"),c.loading)]);if(i.value&&a.showError)return n("div",{class:t("error")},[w(a.errorIcon,t("error-icon"),c.error)])},x=()=>{if(i.value||!a.src)return;const e={alt:a.alt,class:t("img"),style:{objectFit:a.fit,objectPosition:a.position}};return a.lazyLoad?U(n("img",S({ref:r},e),null),[[F("lazy"),a.src]]):n("img",S({ref:r,src:a.src,onLoad:g,onError:h},e),null)},y=({el:e})=>{const s=()=>{e===r.value&&o.value&&m()};r.value?s():P(s)},L=({el:e})=>{e===r.value&&!i.value&&h()};return l&&M&&(l.$on("loaded",y),l.$on("error",L),N(()=>{l.$off("loaded",y),l.$off("error",L)})),R(()=>{P(()=>{var e;(e=r.value)!=null&&e.complete&&!a.lazyLoad&&m()})}),()=>{var e;return n("div",{class:t({round:a.round,block:a.block}),style:E.value},[x(),k(),(e=c.default)==null?void 0:e.call(c)])}}});const A=T(Z);export{A as I};