import{F as e,l as a}from"./vant-7136ba84.js";import{l as s,a as t,c as o,r,t as i,B as l,D as p,u as m,f as u,H as n,I as c,E as d,F as j,g as f,s as b,P as v,bl as h}from"./@vue-52de1c01.js";import{a as x,u as g}from"./vue-router-a4543dac.js";import{a as y,o as V,b as k,T as _}from"./@vueuse-feee2333.js";import{_ as S}from"./index-3157abda.js";import"./@vant-0004063d.js";/* empty css                      */import"./amfe-flexible-385c80ea.js";import"./js-cookie-aaf6027b.js";import"./vuex-c830e64e.js";import"./lodash-es-c547d601.js";import"./axios-0cd4f164.js";import"./qs-6446231f.js";import"./side-channel-b2edb420.js";import"./get-intrinsic-8aab7bd3.js";import"./has-symbols-1f359e75.js";import"./function-bind-c930bb92.js";import"./has-03e8e28c.js";import"./call-bind-b7e23f7e.js";import"./object-inspect-8ed24658.js";import"./@antv-8a75d63c.js";import"./tslib-546db90a.js";import"./fecha-2b185e5a.js";import"./nprogress-319be66c.js";import"./vue3-hash-calendar-68956731.js";import"./hammerjs-ed6f6a9e.js";const w={class:"script-setup-wrapper"},z=s({name:"ScriptSetupDemo"});var B=S(Object.assign(z,{props:{modelValue:{type:String,default:"输入框内容"},title:{type:String,default:"标题"}},emits:["updateName"],setup(s,{emit:S}){const z=s;h((e=>({a6658c3e:m(D).color})));const{x:B,y:C}=y();x();g();const D=t({name:"张三",age:18,sex:1,inputVal:o((()=>z.modelValue)),color:"red"}),E=()=>{S("updateName","Tom")},F=r(!1),I=r(null),M=()=>{F.value=!F.value};V(I,(e=>{F.value=!1}));const N=r(0),O=k(N,{duration:1e3,transition:_.easeOutExpo});N.value=5e3;f();const{name:T,age:q,inputVal:H}=i(D);return(t,o)=>{const r=e,i=a;return b(),l("div",w,[p(r,{modelValue:m(H),"onUpdate:modelValue":o[0]||(o[0]=e=>u(H)?H.value=e:null)},null,8,["modelValue"]),n("h2",null,c(s.title),1),n("p",null,"我是"+c(m(T))+",今年"+c(m(q)),1),p(i,{type:"success",onClick:E},{default:d((()=>[v("子传父")])),_:1}),n("h3",null,"鼠标坐标Mouse: "+c(m(B))+" x "+c(m(C)),1),m(F)?(b(),l("div",{key:0,ref_key:"popupBoxRef",ref:I,class:"popup-box zy-border-1",style:{width:"80vw",height:"50vh","background-color":"#07c160",color:"#f4f4f4"}}," 弹窗内容 ",512)):j("",!0),p(i,{onClick:M},{default:d((()=>[v("显示弹窗")])),_:1}),n("h4",null,"数字改变动画："+c(Math.round(+m(O))),1)])}}}),[["__scopeId","data-v-688e2a0a"]]);export{B as default};
