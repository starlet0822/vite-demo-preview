import{_ as e}from"./index-89ae9d3a.js";import{B as s,g as a}from"./vant-78dd0152.js";import{_ as t}from"./plugin-vue_export-helper-893979e1.js";import{r as l,ak as r,l as i,b7 as o,al as p,v as u,ai as n,F as c,aN as m,aj as d,aI as f,A as v,a5 as g,C as b}from"./@vue-0da0c2e3.js";import"./vue-router-1cbad9b8.js";import"./@vant-b0725c78.js";const _={class:"multi-touch st-bg"},h={class:"btn-list"},y={class:"list"},w={class:"list-item"};var j=t({__name:"multi-touch",setup(t){l(null);const j=()=>{return e=this,s=null,t=function*(){if(0===window.pageYOffset)return a({message:"已在顶部位置"}),!1;scrollTo({top:0,behavior:"smooth"})},new Promise(((a,l)=>{var r=e=>{try{o(t.next(e))}catch(s){l(s)}},i=e=>{try{o(t.throw(e))}catch(s){l(s)}},o=e=>e.done?a(e.value):Promise.resolve(e.value).then(r,i);o((t=t.apply(e,s)).next())}));var e,s,t},k=()=>{a({message:"触摸手势触发"})},x=()=>{a({message:"双击手势触发"})},I=()=>{a({message:"长按手势触发"})},P=e=>{a({message:"向左滑动手势触发"})},z=e=>{a({message:"向右滑动手势触发"})};return(a,t)=>{const l=s,A=e,B=b("doubletap"),C=b("waves"),F=b("tap"),N=b("press"),O=b("swipeleft"),T=b("swiperight");return f(),r("div",_,[i(A,null,{right:o((()=>[u((f(),n(l,{plain:"",size:"mini",type:"primary"},{default:o((()=>[v(" 双击返回顶部 ")])),_:1})),[[B,j],[C]])])),_:1}),p("div",h,[u((f(),n(l,{type:"primary",block:""},{default:o((()=>[v("触摸(tap)")])),_:1})),[[F,k],[C]]),u((f(),n(l,{type:"default",block:""},{default:o((()=>[v(" 双击(doubletap) ")])),_:1})),[[B,x],[C]]),u((f(),n(l,{type:"success",block:""},{default:o((()=>[v("长按(press)")])),_:1})),[[N,I],[C]]),u((f(),n(l,{type:"warning",block:""},{default:o((()=>[v(" 向左滑动(swipeleft) ")])),_:1})),[[O,P],[C]]),u((f(),n(l,{type:"danger",block:""},{default:o((()=>[v(" 向右滑动(swiperight) ")])),_:1})),[[T,z],[C]]),p("ul",y,[(f(),r(c,null,m(50,(e=>p("li",{key:e},[p("div",w,"我是第"+g(e)+"项数据...",1)]))),64))]),d("",!0)])])}}},[["__scopeId","data-v-80e58412"]]);export{j as default};