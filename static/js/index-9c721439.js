import{cT as ue,cm as G,cP as fe,cU as je,a as C,bl as De,ca as He,bm as Ze,ar as Me,cV as ve,a1 as D,d as H,cW as he,r as be,c as k,cX as me,a2 as ge,cN as Fe,w as $,cd as ye,cY as J,B as P,cx as O,cA as we,cB as Ue,p as m,a3 as z,as as Se,at as N,a7 as ee,cq as Y,o as Ve,ci as te,c3 as Ke,bj as Xe,cZ as Ye,av as X,cf as le,cs as Q,cj as qe,c_ as Ge,c$ as re,ct as Je,E as Qe,a6 as et,a4 as tt,a5 as nt,e as at,cl as it,D as ot,v as lt,bW as rt,m as st,c5 as se,aj as ct}from"./index-f8e6da5a.js";import{u as xe}from"./use-id-012713fb.js";import{a as dt,r as ut}from"./use-route-8952b405.js";import{a as ft,S as vt}from"./index-15f02ff5.js";const Te=Array.isArray,j=e=>typeof e=="string",Ce=e=>e!==null&&typeof e=="object",ht=e=>{const a=Object.create(null);return n=>a[n]||(a[n]=e(n))},bt=/\B([A-Z])/g,mt=ht(e=>e.replace(bt,"-$1").toLowerCase());function Re(e){if(Te(e)){const a={};for(let n=0;n<e.length;n++){const i=e[n],l=j(i)?St(i):Re(i);if(l)for(const t in l)a[t]=l[t]}return a}else{if(j(e))return e;if(Ce(e))return e}}const gt=/;(?![^(]*\))/g,yt=/:([^]+)/,wt=/\/\*[^]*?\*\//g;function St(e){const a={};return e.replace(wt,"").split(gt).forEach(n=>{if(n){const i=n.split(yt);i.length>1&&(a[i[0].trim()]=i[1].trim())}}),a}function xt(e){let a="";if(!e||j(e))return a;for(const n in e){const i=e[n],l=n.startsWith("--")?n:mt(n);(j(i)||typeof i=="number")&&(a+=`${l}:${i};`)}return a}function ke(e){let a="";if(j(e))a=e;else if(Te(e))for(let n=0;n<e.length;n++){const i=ke(e[n]);i&&(a+=i+" ")}else if(Ce(e))for(const n in e)e[n]&&(a+=n+" ");return a.trim()}function Tt(e,a,n){let i,l=0;const t=e.scrollLeft,s=n===0?1:Math.round(n*1e3/16);function c(){ue(i)}function v(){e.scrollLeft+=(a-t)/s,++l<s&&(i=G(v))}return v(),c}function Ct(e,a,n,i){let l,t=fe(e);const s=t<a,c=n===0?1:Math.round(n*1e3/16),v=(a-t)/c;function g(){ue(l)}function w(){t+=v,(s&&t>a||!s&&t<a)&&(t=a),je(e,t),s&&t<a||!s&&t>a?l=G(w):i&&(l=G(i))}return w(),g}function Rt(){const e=C([]),a=[];return De(()=>{e.value=[]}),[e,i=>(a[i]||(a[i]=l=>{e.value[i]=l}),a[i])]}function Ie(e,a){if(!He||!window.IntersectionObserver)return;const n=new IntersectionObserver(t=>{a(t[0].intersectionRatio>0)},{root:document.body}),i=()=>{e.value&&n.observe(e.value)},l=()=>{e.value&&n.unobserve(e.value)};Ze(l),Me(l),ve(i)}const[kt,It]=D("sticky"),Bt={zIndex:z,position:Se("top"),container:Object,offsetTop:N(0),offsetBottom:N(0)};var $t=H({name:kt,props:Bt,emits:["scroll","change"],setup(e,{emit:a,slots:n}){const i=C(),l=he(i),t=be({fixed:!1,width:0,height:0,transform:0}),s=C(!1),c=k(()=>me(e.position==="top"?e.offsetTop:e.offsetBottom)),v=k(()=>{if(s.value)return;const{fixed:f,height:T,width:u}=t;if(f)return{width:`${u}px`,height:`${T}px`}}),g=k(()=>{if(!t.fixed||s.value)return;const f=ge(Fe(e.zIndex),{width:`${t.width}px`,height:`${t.height}px`,[e.position]:`${c.value}px`});return t.transform&&(f.transform=`translate3d(0, ${t.transform}px, 0)`),f}),w=f=>a("scroll",{scrollTop:f,isFixed:t.fixed}),I=()=>{if(!i.value||J(i))return;const{container:f,position:T}=e,u=O(i),x=fe(window);if(t.width=u.width,t.height=u.height,T==="top")if(f){const d=O(f),B=d.bottom-c.value-t.height;t.fixed=c.value>u.top&&d.bottom>0,t.transform=B<0?B:0}else t.fixed=c.value>u.top;else{const{clientHeight:d}=document.documentElement;if(f){const B=O(f),b=d-B.top-c.value-t.height;t.fixed=d-c.value<u.bottom&&d>B.top,t.transform=b<0?-b:0}else t.fixed=d-c.value<u.bottom}w(x)};return $(()=>t.fixed,f=>a("change",f)),ye("scroll",I,{target:l,passive:!0}),Ie(i,I),$([we,Ue],()=>{!i.value||J(i)||!t.fixed||(s.value=!0,P(()=>{const f=O(i);t.width=f.width,t.height=f.height,s.value=!1}))}),()=>{var f;return m("div",{ref:i,style:v.value},[m("div",{class:It({fixed:t.fixed&&!s.value}),style:g.value},[(f=n.default)==null?void 0:f.call(n)])])}}});const _t=ee($t),[At,ce]=D("tabs");var Pt=H({name:At,props:{count:Y(Number),inited:Boolean,animated:Boolean,duration:Y(z),swipeable:Boolean,lazyRender:Boolean,currentIndex:Y(Number)},emits:["change"],setup(e,{emit:a,slots:n}){const i=C(),l=c=>a("change",c),t=()=>{var c;const v=(c=n.default)==null?void 0:c.call(n);return e.animated||e.swipeable?m(ft,{ref:i,loop:!1,class:ce("track"),duration:+e.duration*1e3,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:l},{default:()=>[v]}):v},s=c=>{const v=i.value;v&&v.state.active!==c&&v.swipeTo(c,{immediate:!e.inited})};return $(()=>e.currentIndex,s),Ve(()=>{s(e.currentIndex)}),te({swipeRef:i}),()=>m("div",{class:ce("content",{animated:e.animated||e.swipeable})},[t()])}});const[Be,K]=D("tabs"),zt={type:Se("line"),color:String,border:Boolean,sticky:Boolean,shrink:Boolean,active:N(0),duration:N(.3),animated:Boolean,ellipsis:X,swipeable:Boolean,scrollspy:Boolean,offsetTop:N(0),background:String,lazyRender:X,lineWidth:z,lineHeight:z,beforeChange:Function,swipeThreshold:N(5),titleActiveColor:String,titleInactiveColor:String},$e=Symbol(Be);var Et=H({name:Be,props:zt,emits:["change","scroll","rendered","clickTab","update:active"],setup(e,{emit:a,slots:n}){let i,l,t,s,c;const v=C(),g=C(),w=C(),I=C(),f=xe(),T=he(v),[u,x]=Rt(),{children:d,linkChildren:B}=Ke($e),b=be({inited:!1,position:"",lineStyle:{},currentIndex:-1}),p=k(()=>d.length>+e.swipeThreshold||!e.ellipsis||e.shrink),Z=k(()=>({borderColor:e.color,background:e.background})),L=(o,r)=>{var h;return(h=o.name)!=null?h:r},M=k(()=>{const o=d[b.currentIndex];if(o)return L(o,b.currentIndex)}),E=k(()=>me(e.offsetTop)),ne=k(()=>e.sticky?E.value+i:0),W=o=>{const r=g.value,h=u.value;if(!p.value||!r||!h||!h[b.currentIndex])return;const S=h[b.currentIndex].$el,y=S.offsetLeft-(r.offsetWidth-S.offsetWidth)/2;s&&s(),s=Tt(r,y,o?0:+e.duration)},_=()=>{const o=b.inited;P(()=>{const r=u.value;if(!r||!r[b.currentIndex]||e.type!=="line"||J(v.value))return;const h=r[b.currentIndex].$el,{lineWidth:S,lineHeight:y}=e,R=h.offsetLeft+h.offsetWidth/2,A={width:le(S),backgroundColor:e.color,transform:`translateX(${R}px) translateX(-50%)`};if(o&&(A.transitionDuration=`${e.duration}s`),Q(y)){const V=le(y);A.height=V,A.borderRadius=V}b.lineStyle=A})},Ae=o=>{const r=o<b.currentIndex?-1:1;for(;o>=0&&o<d.length;){if(!d[o].disabled)return o;o+=r}},F=(o,r)=>{const h=Ae(o);if(!Q(h))return;const S=d[h],y=L(S,h),R=b.currentIndex!==null;b.currentIndex!==h&&(b.currentIndex=h,r||W(),_()),y!==e.active&&(a("update:active",y),R&&a("change",y,S.title)),t&&!e.scrollspy&&Ge(Math.ceil(re(v.value)-E.value))},U=(o,r)=>{const h=d.find((y,R)=>L(y,R)===o),S=h?d.indexOf(h):0;F(S,r)},ae=(o=!1)=>{if(e.scrollspy){const r=d[b.currentIndex].$el;if(r&&T.value){const h=re(r,T.value)-ne.value;l=!0,c&&c(),c=Ct(T.value,h,o?0:+e.duration,()=>{l=!1})}}},Pe=(o,r,h)=>{const{title:S,disabled:y}=d[r],R=L(d[r],r);y||(Je(e.beforeChange,{args:[R],done:()=>{F(r),ae()}}),dt(o)),a("clickTab",{name:R,title:S,event:h,disabled:y})},ze=o=>{t=o.isFixed,a("scroll",o)},Ee=o=>{P(()=>{U(o),ae(!0)})},Oe=()=>{for(let o=0;o<d.length;o++){const{top:r}=O(d[o].$el);if(r>ne.value)return o===0?0:o-1}return d.length-1},Ne=()=>{if(e.scrollspy&&!l){const o=Oe();F(o)}},pe=()=>{if(e.type==="line"&&d.length)return m("div",{class:K("line"),style:b.lineStyle},null)},ie=()=>{var o,r,h;const{type:S,border:y,sticky:R}=e,A=[m("div",{ref:R?void 0:w,class:[K("wrap"),{[qe]:S==="line"&&y}]},[m("div",{ref:g,role:"tablist",class:K("nav",[S,{shrink:e.shrink,complete:p.value}]),style:Z.value,"aria-orientation":"horizontal"},[(o=n["nav-left"])==null?void 0:o.call(n),d.map(V=>V.renderTitle(Pe)),pe(),(r=n["nav-right"])==null?void 0:r.call(n)])]),(h=n["nav-bottom"])==null?void 0:h.call(n)];return R?m("div",{ref:w},[A]):A},oe=()=>{_(),P(()=>{var o,r;W(!0),(r=(o=I.value)==null?void 0:o.swipeRef.value)==null||r.resize()})};$(()=>[e.color,e.duration,e.lineWidth,e.lineHeight],_),$(we,oe),$(()=>e.active,o=>{o!==M.value&&U(o)}),$(()=>d.length,()=>{b.inited&&(U(e.active),_(),P(()=>{W(!0)}))});const Le=()=>{U(e.active,!0),P(()=>{b.inited=!0,w.value&&(i=O(w.value).height),W(!0)})},We=(o,r)=>a("rendered",o,r);return te({resize:oe,scrollTo:Ee}),Xe(_),Ye(_),ve(Le),Ie(v,_),ye("scroll",Ne,{target:T,passive:!0}),B({id:f,props:e,setLine:_,scrollable:p,onRendered:We,currentName:M,setTitleRefs:x,scrollIntoView:W}),()=>m("div",{ref:v,class:K([e.type])},[e.sticky?m(_t,{container:v.value,offsetTop:E.value,onScroll:ze},{default:()=>[ie()]}):ie(),m(Pt,{ref:I,count:d.length,inited:b.inited,animated:e.animated,duration:e.duration,swipeable:e.swipeable,lazyRender:e.lazyRender,currentIndex:b.currentIndex,onChange:F},{default:()=>{var o;return[(o=n.default)==null?void 0:o.call(n)]}})])}});const _e=Symbol(),Mt=()=>Qe(_e,null),[Ot,de]=D("tab"),Nt=H({name:Ot,props:{id:String,dot:Boolean,type:String,color:String,title:String,badge:z,shrink:Boolean,isActive:Boolean,disabled:Boolean,controls:String,scrollable:Boolean,activeColor:String,inactiveColor:String,showZeroBadge:X},setup(e,{slots:a}){const n=k(()=>{const l={},{type:t,color:s,disabled:c,isActive:v,activeColor:g,inactiveColor:w}=e;s&&t==="card"&&(l.borderColor=s,c||(v?l.backgroundColor=s:l.color=s));const f=v?g:w;return f&&(l.color=f),l}),i=()=>{const l=m("span",{class:de("text",{ellipsis:!e.scrollable})},[a.title?a.title():e.title]);return e.dot||Q(e.badge)&&e.badge!==""?m(et,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},{default:()=>[l]}):l};return()=>m("div",{id:e.id,role:"tab",class:[de([e.type,{grow:e.scrollable&&!e.shrink,shrink:e.shrink,active:e.isActive,disabled:e.disabled}])],style:n.value,tabindex:e.disabled?void 0:e.isActive?0:-1,"aria-selected":e.isActive,"aria-disabled":e.disabled||void 0,"aria-controls":e.controls},[i()])}}),[pt,q]=D("tab"),Lt=ge({},ut,{dot:Boolean,name:z,badge:z,title:String,disabled:Boolean,titleClass:tt,titleStyle:[String,Object],showZeroBadge:X});var Wt=H({name:pt,props:Lt,setup(e,{slots:a}){const n=xe(),i=C(!1),l=ct(),{parent:t,index:s}=nt($e);if(!t)return;const c=()=>{var u;return(u=e.name)!=null?u:s.value},v=()=>{i.value=!0,t.props.lazyRender&&P(()=>{t.onRendered(c(),e.title)})},g=k(()=>{const u=c()===t.currentName.value;return u&&!i.value&&v(),u}),w=C(""),I=C("");at(()=>{const{titleClass:u,titleStyle:x}=e;w.value=u?ke(u):"",I.value=x&&typeof x!="string"?xt(Re(x)):x});const f=u=>m(Nt,st({key:n,id:`${t.id}-${s.value}`,ref:t.setTitleRefs(s.value),style:I.value,class:w.value,isActive:g.value,controls:n,scrollable:t.scrollable.value,activeColor:t.props.titleActiveColor,inactiveColor:t.props.titleInactiveColor,onClick:x=>u(l.proxy,s.value,x)},se(t.props,["type","color","shrink"]),se(e,["dot","badge","title","disabled","showZeroBadge"])),{title:a.title}),T=C(!g.value);return $(g,u=>{u?T.value=!1:it(()=>{T.value=!0})}),$(()=>e.title,()=>{t.setLine(),t.scrollIntoView()}),ot(_e,g),te({id:n,renderTitle:f}),()=>{var u;const x=`${t.id}-${s.value}`,{animated:d,swipeable:B,scrollspy:b,lazyRender:p}=t.props;if(!a.default&&!d)return;const Z=b||g.value;if(d||B)return m(vt,{id:n,role:"tabpanel",class:q("panel-wrapper",{inactive:T.value}),tabindex:g.value?0:-1,"aria-hidden":!g.value,"aria-labelledby":x},{default:()=>{var E;return[m("div",{class:q("panel")},[(E=a.default)==null?void 0:E.call(a)])]}});const M=i.value||b||!p?(u=a.default)==null?void 0:u.call(a):null;return lt(m("div",{id:n,role:"tabpanel",class:q("panel"),tabindex:Z?0:-1,"aria-labelledby":x},[M]),[[rt,Z]])}}});const Ft=ee(Wt),Ut=ee(Et);export{_t as S,Ft as T,Ut as a,Rt as b,Mt as u};