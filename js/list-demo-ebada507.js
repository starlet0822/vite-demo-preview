import{S as e,E as a,H as s,J as t,K as i,h as o}from"./vant-be38094f.js";import{m as l,r,b as n,n as m,a as d,ak as p,l as u,b7 as c,u as f,f as j,aj as v,ai as b,aI as h,F as g,aN as x}from"./@vue-0da0c2e3.js";import{_ as y}from"./index-584e168e.js";import{_}from"./index-ddfd11f6.js";import{_ as k}from"./plugin-vue_export-helper-893979e1.js";import"./@vant-b0725c78.js";import"./index-5dd0f1ed.js";/* empty css                      */import"./amfe-flexible-385c80ea.js";import"./js-cookie-aaf6027b.js";import"./vue-router-1cbad9b8.js";import"./vuex-fdaeb4c6.js";import"./lodash-es-0ddda1ab.js";import"./axios-0cd4f164.js";import"./qs-efaa5365.js";import"./side-channel-ebdfdc6e.js";import"./get-intrinsic-8aab7bd3.js";import"./has-symbols-1f359e75.js";import"./function-bind-c930bb92.js";import"./has-03e8e28c.js";import"./call-bind-b7e23f7e.js";import"./object-inspect-af06f273.js";import"./@antv-74afab59.js";import"./tslib-546db90a.js";import"./fecha-2b185e5a.js";import"./nprogress-4e4fc296.js";import"./vue3-hash-calendar-e234247e.js";import"./hammerjs-ed6f6a9e.js";l({name:"ListTotal"});const w={class:"list-demo-wrapper"},L=l({name:"ListDemo"});var R=k(Object.assign(L,{setup(l){const k=r(null);n((()=>{return e=this,a=null,s=function*(){yield m()},new Promise(((t,i)=>{var o=e=>{try{r(s.next(e))}catch(a){i(a)}},l=e=>{try{r(s.throw(e))}catch(a){i(a)}},r=e=>e.done?t(e.value):Promise.resolve(e.value).then(o,l);r((s=s.apply(e,a)).next())}));var e,a,s})),r(0);const L=r([]),R=r([]);d({status:"-1"});const S=r(!1),T=r(!1),V=r(!1),E=()=>{setTimeout((()=>{V.value&&(R.value=L.value=[],V.value=!1);for(let e=1;e<=10;e++){const a={title:"商品"+e,tag:e%2==0?"上架":"下架",status:e%2==0?"0":"1",price:(2*e).toFixed(2),desc:e%2==0?"我是上架的宝贝":"我是下架的宝贝",thumb:"https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"};R.value.push(a),L.value.push(a)}S.value=!1,L.value.length>=50&&(T.value=!0)}),1e3)};E();const F=()=>{T.value=!1,S.value=!0,E()},I=e=>{if(""!==e.trim()){const a=new RegExp(e,"gi"),s=R.value.filter((e=>a.test(e.title)));L.value=s}else L.value=R.value},J=e=>{o({message:`筛选参数：${JSON.stringify(e)}`})};return(o,l)=>{const r=_,n=y,m=e,d=a,R=s,N=t,O=i;return h(),p("div",w,[u(r),u(m,{"offset-top":46},{default:c((()=>[u(n,{placeholder:"搜索商品",onSearch:I,onConfirm:J})])),_:1}),u(N,{modelValue:f(V),"onUpdate:modelValue":l[1]||(l[1]=e=>j(V)?V.value=e:null),onRefresh:F},{default:c((()=>[u(R,{loading:f(S),"onUpdate:loading":l[0]||(l[0]=e=>j(S)?S.value=e:null),finished:f(T),"finished-text":"没有更多了",onLoad:E},{default:c((()=>[(h(!0),p(g,null,x(f(L),((e,a)=>(h(),b(d,{key:e.title+a,tag:e.tag,price:e.price,desc:e.desc,title:e.title,thumb:e.thumb},null,8,["tag","price","desc","title","thumb"])))),128))])),_:1},8,["loading","finished"])])),_:1},8,["modelValue"]),v("",!0),(h(),b(O,{key:1,ref_key:"backTopRef",ref:k},null,512))])}}}),[["__scopeId","data-v-6bc73210"]]);export{R as default};