import{_ as T}from"./index-c5cdc445.js";import{_ as y}from"./index-e44080f4.js";import{a as x,g as e,q as t,f as o,s as B,x as C,v as n,I as _,M as s,B as F,W as i}from"./index-3418e78b.js";import{_ as N}from"./plugin-vue_export-helper-c27b6911.js";import{B as V}from"./index-a15ed520.js";import"./index-972ab8e3.js";import"./use-placeholder-c7d2abea.js";import"./use-route-029d125b.js";const D={class:"btn-list"},R={__name:"multi-touch",setup(I){const r=x(null),q=async()=>{await F(),console.log("backToTopRef.value",r.value)},l=()=>{i({message:"触摸手势触发"})},u=()=>{i({message:"双击手势触发"})},m=()=>{i({message:"长按手势触发"})},d=p=>{console.log(p),i({message:"向左滑动手势触发"})},v=p=>{console.log(p),i({message:"向右滑动手势触发"})};return(p,z)=>{const a=V,L=y,f=T,b=s("doubletap"),c=s("waves"),w=s("tap"),g=s("press"),k=s("swipeleft"),h=s("swiperight");return o(),e(f,{class:"page-wrapper"},{default:t(()=>[B("",!0),C("div",D,[n((o(),e(a,{type:"primary",block:""},{default:t(()=>[_("触摸(tap)")]),_:1})),[[w,l],[c]]),n((o(),e(a,{type:"default",block:""},{default:t(()=>[_(" 双击(doubletap) ")]),_:1})),[[b,u],[c]]),n((o(),e(a,{type:"success",block:""},{default:t(()=>[_("长按(press)")]),_:1})),[[g,m],[c]]),n((o(),e(a,{type:"warning",block:""},{default:t(()=>[_(" 向左滑动(swipeleft) ")]),_:1})),[[k,d],[c]]),n((o(),e(a,{type:"danger",block:""},{default:t(()=>[_(" 向右滑动(swiperight) ")]),_:1})),[[h,v],[c]])])]),_:1})}}},J=N(R,[["__scopeId","data-v-7b1b69bc"]]);export{J as default};