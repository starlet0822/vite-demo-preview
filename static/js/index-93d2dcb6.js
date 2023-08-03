import{a1 as $,d as C,a as g,c as I,a2 as D,cN as M,cf as j,cd as Y,cO as Z,o as q,bj as W,bm as X,w as F,p as i,P as H,m as T,aH as ee,a3 as y,at as U,cP as te,ca as ae,B as G,cQ as oe,a7 as R,c3 as ne,av as N,cj as re,ct as se,aj as le,a5 as ce,a6 as ue,cR as ie,U as de,aa as me,cS as fe,f as B,k as O,x as P,g as V,u as p,j as z,q as E,F as ve,G as be,y as _e,J as he,s as ge,z as pe}from"./index-f8e6da5a.js";import{N as ye}from"./index-e297168d.js";import{_ as xe}from"./plugin-vue_export-helper-c27b6911.js";import{u as ke}from"./use-placeholder-c66ff167.js";import{r as Be,u as Ce}from"./use-route-8952b405.js";const[Pe,w]=$("back-top"),we={right:y,bottom:y,zIndex:y,target:[String,Object],offset:U(200),immediate:Boolean,teleport:{type:[String,Object],default:"body"}};var Se=C({name:Pe,inheritAttrs:!1,props:we,emits:["click"],setup(e,{emit:f,slots:r,attrs:v}){let d=!1;const l=g(!1),m=g(),a=g(),b=I(()=>D(M(e.zIndex),{right:j(e.right),bottom:j(e.bottom)})),o=c=>{var u;f("click",c),(u=a.value)==null||u.scrollTo({top:0,behavior:e.immediate?"auto":"smooth"})},s=()=>{l.value=a.value?te(a.value)>=+e.offset:!1},t=()=>{const{target:c}=e;if(typeof c=="string"){const u=document.querySelector(c);if(u)return u}else return c},n=()=>{ae&&G(()=>{a.value=e.target?t():oe(m.value),s()})};return Y("scroll",Z(s,100),{target:a}),q(n),W(()=>{d&&(l.value=!0,d=!1)}),X(()=>{l.value&&e.teleport&&(l.value=!1,d=!0)}),F(()=>e.target,n),()=>{const c=i("div",T({ref:e.teleport?void 0:m,class:w({active:l.value}),style:b.value,onClick:o},v),[r.default?r.default():i(H,{name:"back-top",class:w("icon")},null)]);return e.teleport?[i("div",{ref:m,class:w("placeholder")},null),i(ee,{to:e.teleport},{default:()=>[c]})]:c}}});const $e=R(Se),[J,L]=$("tabbar"),Ie={route:Boolean,fixed:N,border:N,zIndex:y,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:U(0),safeAreaInsetBottom:{type:Boolean,default:null}},K=Symbol(J);var Te=C({name:J,props:Ie,emits:["change","update:modelValue"],setup(e,{emit:f,slots:r}){const v=g(),{linkChildren:d}=ne(K),l=ke(v,L),m=()=>{var o;return(o=e.safeAreaInsetBottom)!=null?o:e.fixed},a=()=>{var o;const{fixed:s,zIndex:t,border:n}=e;return i("div",{ref:v,role:"tablist",style:M(t),class:[L({fixed:s}),{[re]:n,"van-safe-area-bottom":m()}]},[(o=r.default)==null?void 0:o.call(r)])};return d({props:e,setActive:(o,s)=>{se(e.beforeChange,{args:[o],done(){f("update:modelValue",o),f("change",o),s()}})}}),()=>e.fixed&&e.placeholder?l(a):a()}});const Re=R(Te),[Ae,S]=$("tabbar-item"),je=D({},Be,{dot:Boolean,icon:String,name:y,badge:y,badgeProps:Object,iconPrefix:String});var Ne=C({name:Ae,props:je,emits:["click"],setup(e,{emit:f,slots:r}){const v=Ce(),d=le().proxy,{parent:l,index:m}=ce(K);if(!l)return;const a=I(()=>{var s;const{route:t,modelValue:n}=l.props;if(t&&"$route"in d){const{$route:c}=d,{to:u}=e,h=ie(u)?u:{path:u};return!!c.matched.find(x=>{const k="path"in h&&h.path===x.path,_="name"in h&&h.name===x.name;return k||_})}return((s=e.name)!=null?s:m.value)===n}),b=s=>{var t;a.value||l.setActive((t=e.name)!=null?t:m.value,v),f("click",s)},o=()=>{if(r.icon)return r.icon({active:a.value});if(e.icon)return i(H,{name:e.icon,classPrefix:e.iconPrefix},null)};return()=>{var s;const{dot:t,badge:n}=e,{activeColor:c,inactiveColor:u}=l.props,h=a.value?c:u;return i("div",{role:"tab",class:S({active:a.value}),style:{color:h},tabindex:0,"aria-selected":a.value,onClick:b},[i(ue,T({dot:t,class:S("icon"),content:n},e.badgeProps),{default:o}),i("div",{class:S("text")},[(s=r.default)==null?void 0:s.call(r,{active:a.value})])])}}});const Oe=R(Ne);const Ve={class:"layout__container"},ze={class:"layout__header"},Ee=C({name:"Layout"}),Le=Object.assign(Ee,{props:{withHeader:{type:Boolean,default:!0},title:{type:String,default:""}},emits:["change","body-scroll"],setup(e,{emit:f}){const r=de();me();const v=g(!1),d=I(()=>{var t;return((t=r.currentRoute.value.meta)==null?void 0:t.level)>1}),l=g(!1),m=()=>{r.back()};q(async()=>{await G();const t=document.querySelector(".layout__container .layout__body");fe(t,"scroll",n=>{f("body-scroll",n)})});const a=g(!0),b=g("Name"),o=[{title:"首页",to:{name:"Home"},icon:"home-o"},{title:"案例",to:{name:"Demo"},icon:"apps-o"},{title:"我的",to:{name:"About"},icon:"user-o"}];F(()=>r,()=>{const t=o.some(n=>n.to.name===r.currentRoute.value.name);b.value=o.findIndex(n=>n.to.name===r.currentRoute.value.name),a.value=t},{deep:!0,immediate:!0});const s=t=>{f("change",t)};return(t,n)=>{var k;const c=ye,u=Oe,h=Re,x=$e;return B(),O("div",Ve,[P("div",ze,[t.$slots.header?z(t.$slots,"header",{key:1},void 0,!0):(B(),V(c,{key:0,fixed:p(v),placeholder:p(v),"safe-area-inset-top":"","left-arrow":p(d),title:e.title||((k=t.$route.meta)==null?void 0:k.title),onClickLeft:m},null,8,["fixed","placeholder","left-arrow","title"]))]),P("div",{class:pe(["layout__body",{"layout__body--show-navbar":p(l)},{"layout__body--show-tabbar":p(a)}])},[z(t.$slots,"default",{},void 0,!0),p(a)?(B(),V(h,T({key:0,modelValue:p(b),"onUpdate:modelValue":n[0]||(n[0]=_=>he(b)?b.value=_:null),class:"layout-tabbar",fixed:!0,border:"","z-index":9,route:""},t.$attrs,{onChange:s}),{default:E(()=>[(B(),O(ve,null,be(o,(_,Q)=>{var A;return i(u,{id:"tabbar-item-"+((A=_.to)==null?void 0:A.name),key:_.to+Q,to:_.to,icon:_.icon,replace:""},{default:E(()=>[P("span",null,_e(_.title),1)]),_:2},1032,["id","to","icon"])}),64))]),_:1},16,["modelValue"])):ge("",!0),i(x,{right:"5vw",bottom:"10vh"})],2)])}}}),Ue=xe(Le,[["__scopeId","data-v-9486822a"]]);export{Ue as _};