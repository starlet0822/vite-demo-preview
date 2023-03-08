var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{_ as n}from"./index-014fd06b.js";import{m as l,a as c,_ as p,b,aD as v,aI as m,ai as d,b7 as u,v as f,al as g,a4 as w,l as y,x as O,u as j,T as h}from"./@vue-0da0c2e3.js";import{R as k}from"./index-c813899e.js";import{_ as T}from"./plugin-vue_export-helper-893979e1.js";const P=l({name:"BackToTop"});var _=T(Object.assign(P,{props:{visibilityHeight:{type:Number,default:150},backPosition:{type:Number,default:0},customStyle:{type:Object,default:function(){return{right:15/k+"rem",bottom:60/k+"rem",width:40/k+"rem",height:40/k+"rem","border-radius":40/k+"rem","line-height":45/k+"rem",background:"rgba(210,210,210,.5)"}}},transitionName:{type:String,default:"fade"}},setup(e,{expose:l}){const k=e,T=c({visible:!1,interval:null,isMoving:!1}),{visible:P,interval:_,isMoving:x}=p(T);b((()=>{window.addEventListener("scroll",I)})),v((()=>{window.removeEventListener("scroll",I),T.interval&&clearInterval(T.interval)}));const I=()=>{T.visible=window.pageYOffset>k.visibilityHeight},M=()=>{if(T.isMoving)return;const e=window.pageYOffset;let t=0;T.isMoving=!0,T.interval=setInterval((()=>{const a=Math.floor(N(10*t,e,-e,500));a<=k.backPosition?(window.scrollTo(0,k.backPosition),clearInterval(T.interval),T.isMoving=!1):window.scrollTo(0,a),t++}),16.7)},N=(e,t,a,r)=>(e/=r/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t;var S;return l((S=((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&s(e,a,t[a]);if(r)for(var a of r(t))i.call(t,a)&&s(e,a,t[a]);return e})({},p(T)),t(S,a({backToTop:M})))),(t,a)=>{const r=n;return m(),d(h,{name:e.transitionName},{default:u((()=>[f(g("div",{style:w(e.customStyle),class:"back-to-top",onClick:M},[y(r,{"class-name":"st-color-blue",name:"backToTop"})],4),[[O,j(P)]])])),_:1},8,["name"])}}}),[["__scopeId","data-v-a435adee"]]);export{_};
