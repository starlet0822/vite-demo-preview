import{a1 as x,d as k,a as w,a2 as ee,w as A,p as f,c9 as te,av as H,as as oe,a3 as le,B as q,P as z,cC as se,a7 as ne,f as v,k as y,x as $,F as R,G as U,A as j,z as D,K as P,y as B,c as E,s as M,m as T,q as G,$ as L,d1 as ae,g as re,i as ie,Q as ue,R as ce}from"./index-4a1a9842.js";import{_ as C}from"./plugin-vue_export-helper-c27b6911.js";import"./index-59b7ecd9.js";import{F as K}from"./index-13b99f4f.js";/* empty css              */import"./index-72d2bc0a.js";import{D as de}from"./index-9f5c4f57.js";import{b as pe,a as me,T as _e}from"./index-cb74dae9.js";const[fe,g,ve]=x("cascader"),he={title:String,options:te(),closeable:H,swipeable:H,closeIcon:oe("cross"),showHeader:H,modelValue:le,fieldNames:Object,placeholder:String,activeColor:String};var ye=k({name:fe,props:he,emits:["close","change","finish","clickTab","update:modelValue"],setup(e,{slots:t,emit:u}){const a=w([]),i=w(0),[m,o]=pe(),{text:d,value:s,children:l}=ee({text:"text",value:"value",children:"children"},e.fieldNames),h=(n,r)=>{for(const p of n){if(p[s]===r)return[p];if(p[l]){const c=h(p[l],r);if(c)return[p,...c]}}},V=()=>{const{options:n,modelValue:r}=e;if(r!==void 0){const p=h(n,r);if(p){let c=n;a.value=p.map(_=>{const N={options:c,selected:_},b=c.find(O=>O[s]===_[s]);return b&&(c=b[l]),N}),c&&a.value.push({options:c,selected:null}),q(()=>{i.value=a.value.length-1});return}}a.value=[{options:n,selected:null}]},F=(n,r)=>{if(n.disabled)return;if(a.value[r].selected=n,a.value.length>r+1&&(a.value=a.value.slice(0,r+1)),n[l]){const _={options:n[l],selected:null};a.value[r+1]?a.value[r+1]=_:a.value.push(_),q(()=>{i.value++})}const p=a.value.map(_=>_.selected).filter(Boolean);u("update:modelValue",n[s]);const c={value:n[s],tabIndex:r,selectedOptions:p};u("change",c),n[l]||u("finish",c)},S=()=>u("close"),I=({name:n,title:r})=>u("clickTab",n,r),Q=()=>e.showHeader?f("div",{class:g("header")},[f("h2",{class:g("title")},[t.title?t.title():e.title]),e.closeable?f(z,{name:e.closeIcon,class:[g("close-icon"),se],onClick:S},null):null]):null,J=(n,r,p)=>{const{disabled:c}=n,_=!!(r&&n[s]===r[s]),N=n.color||(_?e.activeColor:void 0),b=t.option?t.option({option:n,selected:_}):f("span",null,[n[d]]);return f("li",{ref:_?o(p):void 0,role:"menuitemradio",class:[g("option",{selected:_,disabled:c}),n.className],style:{color:N},tabindex:c?void 0:_?0:-1,"aria-checked":_,"aria-disabled":c||void 0,onClick:()=>F(n,p)},[b,_?f(z,{name:"success",class:g("selected-icon")},null):null])},W=(n,r,p)=>f("ul",{role:"menu",class:g("options")},[n.map(c=>J(c,r,p))]),X=(n,r)=>{const{options:p,selected:c}=n,_=e.placeholder||ve("select"),N=c?c[d]:_;return f(_e,{title:N,titleClass:g("tab",{unselected:!c})},{default:()=>{var b,O;return[(b=t["options-top"])==null?void 0:b.call(t,{tabIndex:r}),W(p,c,r),(O=t["options-bottom"])==null?void 0:O.call(t,{tabIndex:r})]}})},Y=()=>f(me,{active:i.value,"onUpdate:active":n=>i.value=n,shrink:!0,animated:!0,class:g("tabs"),color:e.activeColor,swipeable:e.swipeable,onClickTab:I},{default:()=>[a.value.map(X)]}),Z=n=>{const r=n.parentElement;r&&(r.scrollTop=n.offsetTop-(r.offsetHeight-n.offsetHeight)/2)};return V(),A(i,n=>{const r=m.value[n];r&&Z(r)}),A(()=>e.options,V,{deep:!0}),A(()=>e.modelValue,n=>{n!==void 0&&a.value.map(p=>{var c;return(c=p.selected)==null?void 0:c[s]}).includes(n)||V()}),()=>f("div",{class:g()},[Q(),Y()])}});const Ve=ne(ye);const $e=k({props:{modelValue:{type:[Array,String,Number,Boolean,Object],default:""},title:{type:String,default:""},name:{type:String,default:""},options:{type:Array,default:()=>[]},columnNum:{type:[Number,String],default:3},gutter:{type:[Number,String],default:10}},emits:["update:modelValue"],setup(e,{emit:t}){const u={flexBasis:`${1/e.columnNum*100}%`,paddingRight:`${e.gutter}px`},a=s=>t("update:modelValue",s),i=({value:s,checked:l})=>{a(l?s:null)},m=s=>{d(s)},o=s=>e.modelValue===s.value,d=s=>{s.checked=!o(s),i(s)};return{itemStyle:u,isChecked:o,onClick:m}}}),ge={class:"custom-radio"},ke={class:"radio-group"},be=["onClick"],Ce={class:"radio-item__text"};function Se(e,t,u,a,i,m){return v(),y("div",ge,[$("ul",ke,[(v(!0),y(R,null,U(e.options,(o,d)=>(v(),y("li",{key:o.value,class:"radio-item",style:j({...e.itemStyle,marginTop:d>=+e.columnNum?10/37.5+"rem":0})},[$("div",{class:D(["radio-item__content","st-line-1",{"is-selected":e.isChecked(o)}]),onClick:P(s=>e.onClick(o),["stop"])},[$("div",Ce,B(o.label),1)],10,be)],4))),128))])])}const we=C($e,[["render",Se],["__scopeId","data-v-0cfda189"]]);const Fe=k({name:"CheckboxField",props:{modelValue:{type:[Array,String,Number,Boolean,Object],default:""},name:{type:String,default:""},title:{type:String,default:""},shape:{type:String,default:"square"},disabled:Boolean,checked:Boolean,checkAll:Boolean,options:{type:Array,default:()=>[]},columnNum:{type:[Number,String],default:3},gutter:{type:[Number,String],default:10}},emits:["update:modelValue"],setup(e,{emit:t}){const u={flexBasis:`${1/e.columnNum*100}%`,paddingRight:`${e.gutter}px`},a=E(()=>{const{checkAll:l,options:h}=e;let V=h;return l&&(V=[{label:"全部",value:"-1"},...V]),V}),i=l=>t("update:modelValue",l),m=l=>{d(l)},o=l=>e.modelValue.indexOf(l.value)!==-1,d=l=>{l.checked=!o(l),s(l)},s=({value:l,checked:h,disabled:V})=>{const{modelValue:F}=e,S=[...F.slice()];if(h)S.push(l);else{const I=S.indexOf(l);I!==-1&&S.splice(I,1)}i(S)};return A(()=>e.modelValue,l=>i(l)),{checkboxs:a,itemStyle:u,isChecked:o,onClick:m}}}),Ne={class:"custom-checkbox"},Pe={class:"checkbox-group"},Te=["onClick"],Be={class:"checkbox-item__text"};function Ie(e,t,u,a,i,m){return v(),y("div",Ne,[$("ul",Pe,[(v(!0),y(R,null,U(e.checkboxs,(o,d)=>(v(),y("li",{key:o.value,class:"checkbox-item",style:j({...e.itemStyle,marginTop:d>=+e.columnNum?10/37.5+"rem":0})},[$("div",{class:D(["checkbox-item__content","st-line-1",{"is-selected":e.isChecked(o)}]),onClick:P(s=>e.onClick(o),["stop"])},[$("div",Be,B(o.label),1)],10,Te)],4))),128))])])}const Oe=C(Fe,[["render",Ie],["__scopeId","data-v-8c12a14e"]]);const Ae=k({props:{modelValue:{type:[Array,String,Number,Boolean,Object],default:""},name:{type:String,default:""},options:{type:Array,default:()=>[]},columnNum:{type:[Number,String],default:1},gutter:{type:[Number,String],default:10}},emits:["update:modelValue"],setup(e,{emit:t}){return{itemStyle:{flexBasis:`${1/e.columnNum*100}%`},onChange:i=>{t("update:modelValue",i.value)}}}}),Re={class:"custom-cell"},Ue={class:"cell-group"},Ee=["onClick"],He={class:"cell-item__text"};function je(e,t,u,a,i,m){return v(),y("div",Re,[$("ul",Ue,[(v(!0),y(R,null,U(e.options,(o,d)=>(v(),y("li",{key:o.value,class:"cell-item",style:j({...e.itemStyle,marginTop:d>=+e.columnNum?10/37.5+"rem":0})},[$("div",{class:D(["cell-item__content",{"is-selected":e.modelValue==o.value}]),onClick:P(s=>e.onChange(o),["stop"])},[$("div",He,B(o.label),1),M("",!0)],10,Ee)],4))),128))])])}const De=C(Ae,[["render",je],["__scopeId","data-v-762b58d8"]]);const Ke=k({props:["modelValue"],emits:["update:modelValue"],setup(e,{emit:t}){return{inputValue:E({get:()=>e.modelValue,set:a=>{t("update:modelValue",a)}})}}}),qe={class:"custom-input"};function ze(e,t,u,a,i,m){const o=K;return v(),y("div",qe,[f(o,T({modelValue:e.inputValue,"onUpdate:modelValue":t[0]||(t[0]=d=>e.inputValue=d),modelModifiers:{trim:!0},autocomplete:"off",clearable:""},e.$attrs),null,16,["modelValue"])])}const Me=C(Ke,[["render",ze],["__scopeId","data-v-585ff044"]]);const Ge=k({props:["modelValue"],emits:["update:modelValue"],setup(e,{emit:t}){const u=E({get:()=>e.modelValue,set:o=>{t("update:modelValue",o)}}),a=w(!1),i=document.querySelector(".form-wrapper");return{inputValue:u,showPicker:a,teleport:i,onConfirm:({selectedValues:o})=>{const d=o.join("-");t("update:modelValue",d),a.value=!1}}}}),Le={class:"custom-date-picker"};function Qe(e,t,u,a,i,m){const o=K,d=de,s=L;return v(),y("div",Le,[f(o,T({modelValue:e.inputValue,"onUpdate:modelValue":t[0]||(t[0]=l=>e.inputValue=l),readonly:!0,clearable:""},e.$attrs,{onClick:t[1]||(t[1]=l=>e.showPicker=!0)}),null,16,["modelValue"]),f(s,{show:e.showPicker,"onUpdate:show":t[3]||(t[3]=l=>e.showPicker=l),position:"bottom",teleport:e.teleport,overlay:!0},{default:G(()=>[f(d,{title:"选择时间",onConfirm:e.onConfirm,onCancel:t[2]||(t[2]=l=>e.showPicker=!1)},null,8,["onConfirm"])]),_:1},8,["show","teleport"])])}const Je=C(Ge,[["render",Qe],["__scopeId","data-v-6e6dd16e"]]);const We=k({props:["modelValue"],emits:["update:modelValue"],setup(e,{emit:t,attrs:u}){const a=E({get:()=>e.modelValue,set:s=>{t("update:modelValue",s)}}),i=w(!1),m=w(""),o=document.querySelector(".form-wrapper");return{inputValue:a,cascaderValue:m,showPicker:i,teleport:o,onFinish:({selectedOptions:s})=>{const{text:l,value:h}=u.fieldNames||{text:"label",value:"value",children:"children"},V=s.map(F=>F[l]).join("/");t("update:modelValue",V),i.value=!1}}}}),Xe={class:"custom-cascader"};function Ye(e,t,u,a,i,m){const o=K,d=Ve,s=L;return v(),y("div",Xe,[f(o,T({modelValue:e.inputValue,"onUpdate:modelValue":t[0]||(t[0]=l=>e.inputValue=l),readonly:!0},e.$attrs,{onClick:t[1]||(t[1]=l=>e.showPicker=!0)}),null,16,["modelValue"]),f(s,{show:e.showPicker,"onUpdate:show":t[4]||(t[4]=l=>e.showPicker=l),position:"bottom",teleport:e.teleport,overlay:!0},{default:G(()=>[f(d,T({modelValue:e.cascaderValue,"onUpdate:modelValue":t[2]||(t[2]=l=>e.cascaderValue=l),title:"请选择所在地区"},e.$attrs,{onClose:t[3]||(t[3]=l=>e.showPicker=!1),onFinish:e.onFinish}),null,16,["modelValue","onFinish"])]),_:1},8,["show","teleport"])])}const Ze=C(We,[["render",Ye],["__scopeId","data-v-727503ca"]]);const xe=k({name:"FilterSearch",components:{InputField:Me,RadioField:we,CheckboxField:Oe,DateField:Je,CellField:De,CascaderField:Ze},props:{showHeader:Boolean,formOptions:{type:Object,default:()=>({"label-align":"top","label-width":"6.2em","input-align":"left"})},formItems:{type:Array,default:()=>[]}},emits:["confirm","reset"],setup(e,{emit:t}){const u=d=>{const s={},l=h=>{let V="";return ae(h.value)?[].includes(h.type)?V=[]:V="":V=h.value,V};return e.formItems.forEach(h=>{h.name&&(s[h.name]=l(h))}),{...s}},a={"label-align":"top","label-width":"6.2em","input-align":"left",...e.formOptions},i=w(u()),m=async()=>{i.value=u(),t("reset",i.value),o()},o=()=>{console.log("onConfirm",i.value),t("confirm",i.value)};return{formProps:a,formValues:i,onReset:m,onConfirm:o}}}),et=e=>(ue("data-v-8d5eeac2"),e=e(),ce(),e),tt={class:"form form-wrapper"},ot={key:0,class:"form__header"},lt=et(()=>$("div",{class:"form__header-title"},B("数据筛选"),-1)),st=[lt],nt={class:"form__body"},at={class:"filter__item-title"},rt={class:"form__footer van-safe-area-bottom"};function it(e,t,u,a,i,m){return v(),y("div",tt,[e.showHeader?(v(),y("div",ot,st)):M("",!0),$("div",nt,[(v(!0),y(R,null,U(e.formItems,(o,d)=>(v(),y("div",{key:o.name+d,class:"filter__item"},[$("div",at,B(o.title),1),(v(),re(ie(o.type),T({modelValue:e.formValues[o.name],"onUpdate:modelValue":s=>e.formValues[o.name]=s,title:o.title},o.attrs),null,16,["modelValue","onUpdate:modelValue","title"]))]))),128))]),$("div",rt,[$("div",{class:"filter__reset",onClick:t[0]||(t[0]=P((...o)=>e.onReset&&e.onReset(...o),["stop"]))},"重置"),$("div",{class:"filter__confirm",onClick:t[1]||(t[1]=P((...o)=>e.onConfirm&&e.onConfirm(...o),["stop"]))},"确定")])])}const ht=C(xe,[["render",it],["__scopeId","data-v-8d5eeac2"]]);export{ht as _};
