import{ab as B,d as $,a as u,_ as j,c as _,c0 as f,c4 as D,w as C,c7 as M,a8 as N,o as R,B as P,p as n,af as d,aj as b,ag as z,v as U,M as F,m as S,aa as O,am as T}from"./index-2d318566.js";const[V,t]=B("image"),q={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:d,height:d,radius:d,lazyLoad:Boolean,iconSize:d,showError:b,errorIcon:z("photo-fail"),iconPrefix:String,showLoading:b,loadingIcon:z("photo")};var A=$({name:V,props:q,emits:["load","error"],setup(a,{emit:v,slots:c}){const i=u(!1),o=u(!0),r=u(),{$Lazyload:l}=j().proxy,E=_(()=>{const e={width:f(a.width),height:f(a.height)};return D(a.radius)&&(e.overflow="hidden",e.borderRadius=f(a.radius)),e});C(()=>a.src,()=>{i.value=!1,o.value=!0});const g=e=>{o.value&&(o.value=!1,v("load",e))},m=()=>{const e=new Event("load");Object.defineProperty(e,"target",{value:r.value,enumerable:!0}),g(e)},h=e=>{i.value=!0,o.value=!1,v("error",e)},w=(e,s,I)=>I?I():n(O,{name:e,size:a.iconSize,class:s,classPrefix:a.iconPrefix},null),k=()=>{if(o.value&&a.showLoading)return n("div",{class:t("loading")},[w(a.loadingIcon,t("loading-icon"),c.loading)]);if(i.value&&a.showError)return n("div",{class:t("error")},[w(a.errorIcon,t("error-icon"),c.error)])},x=()=>{if(i.value||!a.src)return;const e={alt:a.alt,class:t("img"),style:{objectFit:a.fit,objectPosition:a.position}};return a.lazyLoad?U(n("img",S({ref:r},e),null),[[F("lazy"),a.src]]):n("img",S({ref:r,src:a.src,onLoad:g,onError:h},e),null)},y=({el:e})=>{const s=()=>{e===r.value&&o.value&&m()};r.value?s():P(s)},L=({el:e})=>{e===r.value&&!i.value&&h()};return l&&M&&(l.$on("loaded",y),l.$on("error",L),N(()=>{l.$off("loaded",y),l.$off("error",L)})),R(()=>{P(()=>{var e;(e=r.value)!=null&&e.complete&&!a.lazyLoad&&m()})}),()=>{var e;return n("div",{class:t({round:a.round,block:a.block}),style:E.value},[x(),k(),(e=c.default)==null?void 0:e.call(c)])}}});const H=T(A);export{H as I};
