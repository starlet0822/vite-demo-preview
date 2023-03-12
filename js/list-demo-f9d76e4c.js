var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,i=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&r(e,t,a[t]);if(l)for(var t of l(a))o.call(a,t)&&r(e,t,a[t]);return e},n=(e,l)=>a(e,t(l));import{z as c,x as d,y as u,A as f,E as p,H as h,J as m,K as v,M as b,B as y,h as j}from"./vant-182c6d73.js";import{m as w,r as k,a as g,w as x,_,C,aI as F,ak as O,al as S,F as V,aN as A,l as E,b7 as L,a2 as P,a5 as R,ai as I,v as B,A as K,aK as U,aJ as M,aj as q,b as z,n as J,u as D,f as N}from"./@vue-0da0c2e3.js";import{t as T}from"./index-212b076c.js";import{_ as H}from"./plugin-vue_export-helper-893979e1.js";import{d as $}from"./lodash-es-0ddda1ab.js";import{_ as G}from"./index-06373c59.js";import"./@vant-b0725c78.js";/* empty css                      */import"./amfe-flexible-385c80ea.js";import"./js-cookie-aaf6027b.js";import"./vue-router-1cbad9b8.js";import"./vuex-fdaeb4c6.js";import"./@vueuse-b48c9ec8.js";import"./axios-0cd4f164.js";import"./qs-efaa5365.js";import"./side-channel-ebdfdc6e.js";import"./get-intrinsic-8aab7bd3.js";import"./has-symbols-1f359e75.js";import"./function-bind-c930bb92.js";import"./has-03e8e28c.js";import"./call-bind-b7e23f7e.js";import"./object-inspect-af06f273.js";import"./@antv-74afab59.js";import"./tslib-546db90a.js";import"./fecha-2b185e5a.js";import"./nprogress-4e4fc296.js";import"./vue3-hash-calendar-e234247e.js";import"./hammerjs-ed6f6a9e.js";w({name:"ListTotal"});const Q=w({name:"FilterMenus",components:{},props:{activeColor:{type:String,default:T},filterMenu:{type:Array,default:()=>[{field:"status",label:"状态",value:"",multiple:!1,data:[{label:"不限",value:"-1"},{label:"上架",value:"0"},{label:"下架",value:"1"}]}],validator:e=>$(e)}},emits:["close","confirm"],setup(e,{emit:a}){const t=k(null),l=k([0,1]),s=g({list:[]});x((()=>e.filterMenu),((e,a)=>{e!==a&&(s.list=e,s.list.forEach((e=>{if(e.data&&e.data.length){e.data.forEach((e=>{e.checked=!1}));if(e.hasOwnProperty("canAll")&&e.canAll){const a={label:"全选",value:"all",checked:!1};e.data.unshift(a)}}})))}),{deep:!0,immediate:!0});return n(i({},_(s)),{container:t,activeArr:l,onFinish:({value:e,selectedOptions:a,tabIndex:t},l)=>{const s=l.showAllLevels;l.value=s?a.map((e=>e.value)).join("/"):e},handleClickBtn:()=>{},filterLabelSelect:(e,a,t,l)=>{if("all"===e.value&&(e.checked=!e.checked,e.label=e.checked?"反选":"全选",t.data.forEach((a=>a.checked=e.checked))),"all"!==e.value){e.checked=!e.checked;const a=t.data.filter((e=>"all"!==e.value&&e.checked)).length;t.hasOwnProperty("canAll")&&!0===t.canAll&&(t.data[0].checked=a===t.data.length-1,t.data[0].label=a===t.data.length-1?"反选":"全选")}t.hasOwnProperty("multiple")&&!t.multiple&&("all"!==e.value&&s.list[l].data.forEach((e=>e.checked=!1)),e.checked=!e.checked)},filterReset:()=>{s.list.forEach((e=>{e.type&&"tree"===e.type&&(e.valueShow="",e.value=""),e.data&&e.data.length&&e.data.forEach((e=>{e.checked=!1,"all"===e.value&&(e.label="全选")}))}))},filterConfirm:()=>{const e={};s.list.forEach((a=>{if(a.data&&a.data.length){const t=a.data.reduce(((e,a)=>("all"!==a.value&&a.checked&&e.push(a.value),e)),[]);"tree"===a.type&&""!==a.value&&(e[a.field]=a.value),""!==t.join(",")&&(e[a.field]=t.join(","))}}));const t=0!==Object.keys(e).length;a("confirm",e,t)}})}}),W={ref:"container",class:"filter-menus-wrapper st-bg-white"},X={class:"filter-list"},Y={key:0,class:"st-flex-wrap st-padding-box"},Z=["onClick"],ee=(e=>(U("data-v-10473434"),e=e(),M(),e))((()=>S("div",null,null,-1))),ae={class:"filter-button-box st-flex-ai"};var te=H(Q,[["render",function(e,a,t,l,s,o){const r=c,i=d,n=u,f=C("waves");return F(),O("div",W,[S("div",X,[(F(!0),O(V,null,A(e.list,((t,l)=>(F(),O("div",{key:l,class:"filter-item"},[E(n,{modelValue:e.activeArr,"onUpdate:modelValue":a[1]||(a[1]=a=>e.activeArr=a),border:!1},{default:L((()=>[E(i,{name:l,title:t.label,value:""+(e.activeArr.includes(l)?"收起":"展开")},{default:L((()=>["tree"!==t.type?(F(),O("div",Y,[(F(!0),O(V,null,A(t.data,((a,s)=>(F(),O("div",{key:s,class:P([{checked:a.checked},"filter-item-label st-line-16 van-ellipsis"]),onClick:o=>e.filterLabelSelect(a,s,t,l)},R(a.label),11,Z)))),128))])):(F(),I(r,{key:l,ref_for:!0,ref:"cascaderRef",modelValue:t.value,"onUpdate:modelValue":e=>t.value=e,"field-names":{text:"label",value:"value",children:"children"},options:t.data,"active-color":e.activeColor,class:"cascader-tree",placeholder:"请选择",onClose:a[0]||(a[0]=a=>e.show=!1),onFinish:a=>e.onFinish(a,t,l)},{title:L((()=>[ee])),_:2},1032,["modelValue","onUpdate:modelValue","options","active-color","onFinish"]))])),_:2},1032,["name","title","value"])])),_:2},1032,["modelValue"])])))),128))]),S("div",ae,[B((F(),O("div",{class:"filter-button-reset st-flex-center st-flex-1",onClick:a[2]||(a[2]=(...a)=>e.filterReset&&e.filterReset(...a))},[K(" 清空 ")])),[[f]]),B((F(),O("div",{class:"filter-button-confirm st-flex-center st-flex-1 st-color-white",onClick:a[3]||(a[3]=(...a)=>e.filterConfirm&&e.filterConfirm(...a))},[K(" 确定 ")])),[[f]])])],512)}],["__scopeId","data-v-10473434"]]);const le=w({name:"SearchFilter",props:{placeholder:{type:String,default:"搜索关键词"},filter:{type:Boolean,default:!1},shape:{type:String,default:"square",validator:e=>["square","round"].includes(e)}},emits:["search","confirm"],setup(e,{emit:a}){const t=g({keyword:"",showFilter:!0,isChecked:!1,dropdownItemRef:null,keywordListRef:null,showKeywordList:!1});x((()=>t.keyword),((e,a)=>{}));return n(i({},_(t)),{onFocus:()=>{t.showKeywordList=!0,t.showFilter=!1},onBlur:()=>{t.showKeywordList=!1,t.showFilter=!0},onSearch:()=>{a("search",t.keyword)},searchConfirm:()=>{},handleFilterConfirm:(e,l)=>{t.dropdownItemRef.toggle(),t.isChecked=l,a("confirm",e)},handleKeywordSearch:e=>{t.keyword=e}})}}),se={class:"search-filter-wrapper st-flex-ai st-bg-white van-hairline--bottom"},oe=(e=>(U("data-v-7f600c48"),e=e(),M(),e))((()=>S("div",{class:P("")},"筛选",-1)));var re=H(le,[["render",function(e,a,t,l,s,o){const r=te,i=f,n=p,c=h;return F(),O("div",se,[E(c,{modelValue:e.keyword,"onUpdate:modelValue":a[0]||(a[0]=a=>e.keyword=a),modelModifiers:{trim:!0},shape:e.shape,"show-action":!0,class:"search-box st-flex-1",autocomplete:"off",placeholder:e.placeholder,"action-text":"",onBlur:e.onBlur,onFocus:e.onFocus,onSearch:e.onSearch},{action:L((()=>[(F(),I(n,{key:0,"active-color":"#333333","z-index":"999"},{default:L((()=>[E(i,{ref:"dropdownItemRef"},{title:L((()=>[oe])),default:L((()=>[E(r,{onConfirm:e.handleFilterConfirm},null,8,["onConfirm"])])),_:1},512)])),_:1}))])),_:1},8,["modelValue","shape","placeholder","onBlur","onFocus","onSearch"])])}],["__scopeId","data-v-7f600c48"]]);const ie={class:"layout__page"},ne={class:"layout__header"},ce={class:"layout__body"},de=w({name:"ListDemo"});var ue=H(Object.assign(de,{setup(e){k(null);z((()=>{return e=this,a=null,t=function*(){yield J()},new Promise(((l,s)=>{var o=e=>{try{i(t.next(e))}catch(a){s(a)}},r=e=>{try{i(t.throw(e))}catch(a){s(a)}},i=e=>e.done?l(e.value):Promise.resolve(e.value).then(o,r);i((t=t.apply(e,a)).next())}));var e,a,t})),k(0);const a=k([]),t=k([]);g({status:"-1"});const l=k(!1),s=k(!1),o=k(!1),r=()=>{setTimeout((()=>{o.value&&(t.value=a.value=[],o.value=!1);for(let e=1;e<=10;e++){const l={title:"商品"+e,tag:e%2==0?"上架":"下架",status:e%2==0?"0":"1",price:(2*e).toFixed(2),desc:e%2==0?"我是上架的宝贝":"我是下架的宝贝",thumb:"https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"};t.value.push(l),a.value.push(l)}l.value=!1,a.value.length>=50&&(s.value=!0)}),1e3)};r();const i=()=>{s.value=!1,l.value=!0,r()},n=e=>{if(""!==e.trim()){const l=new RegExp(e,"gi"),s=t.value.filter((e=>l.test(e.title)));a.value=s}else a.value=t.value},c=e=>{j({message:`筛选参数：${JSON.stringify(e)}`})};return(e,t)=>{const d=G,u=re,f=m,p=v,h=b,j=y;return F(),O("div",ie,[S("div",ne,[E(d),E(u,{placeholder:"搜索商品",onSearch:n,onConfirm:c})]),S("div",ce,[E(h,{modelValue:D(o),"onUpdate:modelValue":t[1]||(t[1]=e=>N(o)?o.value=e:null),onRefresh:i},{default:L((()=>[E(p,{loading:D(l),"onUpdate:loading":t[0]||(t[0]=e=>N(l)?l.value=e:null),finished:D(s),"finished-text":"没有更多了",onLoad:r},{default:L((()=>[(F(!0),O(V,null,A(D(a),((e,a)=>(F(),I(f,{key:e.title+a,tag:e.tag,price:e.price,desc:e.desc,title:e.title,thumb:e.thumb,class:"st-bg-white"},null,8,["tag","price","desc","title","thumb"])))),128))])),_:1},8,["loading","finished"])])),_:1},8,["modelValue"]),q("",!0),E(j,{target:".layout__body"})])])}}}),[["__scopeId","data-v-96107c02"]]);export{ue as default};