var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,n=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&i(e,a,t[a]);if(o)for(var a of o(t))s.call(t,a)&&i(e,a,t[a]);return e},c=(e,o)=>t(e,a(o));import{_ as l,R as p,t as m}from"./index-3157abda.js";import{l as b,s as u,B as d,A as f,K as v,a as j,t as y,D as h,E as g,M as C,N as k,v as w,y as A,F as _,P as O}from"./@vue-52de1c01.js";import{g as T,h as x,e as N,l as P}from"./vant-7136ba84.js";/* empty css                      */import"./amfe-flexible-385c80ea.js";import"./js-cookie-aaf6027b.js";import"./vue-router-a4543dac.js";import"./vuex-c830e64e.js";import"./@vueuse-feee2333.js";import"./lodash-es-c547d601.js";import"./axios-0cd4f164.js";import"./qs-6446231f.js";import"./side-channel-b2edb420.js";import"./get-intrinsic-8aab7bd3.js";import"./has-symbols-1f359e75.js";import"./function-bind-c930bb92.js";import"./has-03e8e28c.js";import"./call-bind-b7e23f7e.js";import"./object-inspect-8ed24658.js";import"./@antv-8a75d63c.js";import"./tslib-546db90a.js";import"./fecha-2b185e5a.js";import"./nprogress-319be66c.js";import"./vue3-hash-calendar-68956731.js";import"./hammerjs-ed6f6a9e.js";import"./@vant-0004063d.js";const R=b({name:"ZyFooter",props:{bottom:{type:[Number,String],default:0}},setup:()=>({})}),S={class:"footer-wrapper st-footer"};var V=l(R,[["render",function(e,t,a,o,r,s){return u(),d("footer",S,[f(e.$slots,"default")])}]]);var $=l(b({name:"ZyMain",props:{top:{type:[Number,String],default:0},bottom:{type:[Number,String],default:50}},setup:()=>({RootValue:p})}),[["render",function(e,t,a,o,r,s){return u(),d("main",{style:v({top:+e.top/e.RootValue+"rem",bottom:+e.bottom/e.RootValue+"rem"}),class:"main-wrapper st-main"},[f(e.$slots,"default")],4)}]]);var z=l(b({name:"ZyHeader",props:{top:{type:[Number,String],default:0}},setup:()=>({RootValue:p})}),[["render",function(e,t,a,o,r,s){return u(),d("header",{style:v({top:+e.top/e.RootValue+"rem"}),class:"header-wrapper st-header"},[f(e.$slots,"default")],4)}]]);const F=b({name:"MoveTab",props:{active:{type:[Number,String],default:0},tabs:{type:Array,default:()=>["主页","列表页"]}},emits:["update:active","change"],setup(e,{emit:t}){const a=j({tabActive:e.active,currentComponent:"",keyword:"",themeColor:m});return c(n({},y(a)),{onClickTab:e=>{},onTabsChange:(e,a)=>{t("update:active",e),t("change",e)}})}}),I={class:"tabs-wrapper"};var M=l(F,[["render",function(e,t,a,o,r,s){const i=T,n=x;return u(),d("div",I,[h(n,A(e.$attrs,{active:e.tabActive,"onUpdate:active":t[0]||(t[0]=t=>e.tabActive=t),color:e.themeColor,ellipsis:!1,sticky:!0,animated:"",border:"",swipeable:"","title-active-color":e.themeColor,"title-inactive-color":"#8c8c8c",onChange:e.onTabsChange,onClickTab:e.onClickTab}),{default:g((()=>[(u(!0),d(C,null,k(e.tabs,((t,a)=>(u(),w(i,{key:t+a,name:a,title:t},{default:g((()=>[f(e.$slots,"default",{},void 0,!0)])),_:2},1032,["name","title"])))),128))])),_:3},16,["active","color","title-active-color","onChange","onClickTab"])])}],["__scopeId","data-v-ee3221f8"]]);const Z=b({name:"Fixed",components:{},setup(){const e=j({tabActive:1,tabs:["栏目1","栏目2","栏目3"]});return c(n({},y(e)),{handleTabChange:()=>{}})}}),D={class:"fixed-wrapper"};var E=l(Z,[["render",function(e,t,a,o,r,s){const i=M,n=z,c=N,l=$,p=P,m=V;return u(),d("div",D,[h(n,null,{default:g((()=>[h(i,{active:e.tabActive,"onUpdate:active":t[0]||(t[0]=t=>e.tabActive=t),tabs:e.tabs,onChange:e.handleTabChange},null,8,["active","tabs","onChange"])])),_:1}),h(l,null,{default:g((()=>[0==e.tabActive?(u(),d(C,{key:0},k(5,(e=>h(c,{class:"zy-margin-top-10",title:"内容..."}))),64)):_("",!0),1==e.tabActive?(u(),d(C,{key:1},k(10,(e=>h(c,{class:"zy-margin-top-10",title:"内容..."}))),64)):_("",!0),2==e.tabActive?(u(),d(C,{key:2},k(20,(e=>h(c,{class:"zy-margin-top-10",title:"内容..."}))),64)):_("",!0)])),_:1}),h(m,null,{default:g((()=>[h(p,{block:"",type:"primary"},{default:g((()=>[O("提交")])),_:1})])),_:1})])}],["__scopeId","data-v-53455446"]]);export{E as default};
