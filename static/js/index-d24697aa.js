import{s as w,f as T,p as E,P as I,g as m,a as N}from"./index-c31337e6.js";import{ab as S,ai as b,d7 as g,d as A,a as h,c as B,w as y,cF as u,p as K,m as R,al as U,am as _}from"./index-2d318566.js";const x=new Date().getFullYear(),[j]=S("date-picker"),q=b({},w,{columnsType:{type:Array,default:()=>["year","month","day"]},minDate:{type:Date,default:()=>new Date(x-10,0,1),validator:g},maxDate:{type:Date,default:()=>new Date(x+10,11,31),validator:g}});var z=A({name:j,props:q,emits:["confirm","cancel","change","update:modelValue"],setup(a,{emit:c,slots:v}){const n=h(a.modelValue),l=h(!1),M=()=>{const e=a.minDate.getFullYear(),t=a.maxDate.getFullYear();return m(e,t,"year",a.formatter,a.filter)},i=e=>e===a.minDate.getFullYear(),d=e=>e===a.maxDate.getFullYear(),Y=e=>e===a.minDate.getMonth()+1,V=e=>e===a.maxDate.getMonth()+1,s=e=>{const{minDate:t,columnsType:o}=a,r=o.indexOf(e),f=l.value?a.modelValue[r]:n.value[r];if(f)return+f;switch(e){case"year":return t.getFullYear();case"month":return t.getMonth()+1;case"day":return t.getDate()}},C=()=>{const e=s("year"),t=i(e)?a.minDate.getMonth()+1:1,o=d(e)?a.maxDate.getMonth()+1:12;return m(t,o,"month",a.formatter,a.filter)},F=()=>{const e=s("year"),t=s("month"),o=i(e)&&Y(t)?a.minDate.getDate():1,r=d(e)&&V(t)?a.maxDate.getDate():N(e,t);return m(o,r,"day",a.formatter,a.filter)},D=B(()=>a.columnsType.map(e=>{switch(e){case"year":return M();case"month":return C();case"day":return F();default:return[]}}));y(n,e=>{u(e,a.modelValue)||c("update:modelValue",e)}),y(()=>a.modelValue,(e,t)=>{l.value=u(t,n.value),e=T(e,D.value),u(e,n.value)||(n.value=e),l.value=!1},{immediate:!0});const P=(...e)=>c("change",...e),k=(...e)=>c("cancel",...e),O=(...e)=>c("confirm",...e);return()=>K(I,R({modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,columns:D.value,onChange:P,onCancel:k,onConfirm:O},U(a,E)),v)}});const J=_(z);export{J as D};
