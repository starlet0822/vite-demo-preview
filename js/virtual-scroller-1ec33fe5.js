import{r as e,t as s,e as t}from"./vant-7136ba84.js";import{s as a}from"./vue-virtual-scroller-7c1dd962.js";import{_ as i}from"./index-3157abda.js";import{r,s as o,B as l,F as m,H as c,D as d,E as n,P as p,u,f as j,M as f,N as v,v as b,n as h}from"./@vue-52de1c01.js";import"./@vant-0004063d.js";import"./vue-resize-4dcffb51.js";import"./vue-observe-visibility-0fa6eef5.js";/* empty css                      */import"./amfe-flexible-385c80ea.js";import"./js-cookie-aaf6027b.js";import"./vue-router-a4543dac.js";import"./vuex-c830e64e.js";import"./@vueuse-feee2333.js";import"./lodash-es-c547d601.js";import"./axios-0cd4f164.js";import"./qs-6446231f.js";import"./side-channel-b2edb420.js";import"./get-intrinsic-8aab7bd3.js";import"./has-symbols-1f359e75.js";import"./function-bind-c930bb92.js";import"./has-03e8e28c.js";import"./call-bind-b7e23f7e.js";import"./object-inspect-8ed24658.js";import"./@antv-8a75d63c.js";import"./tslib-546db90a.js";import"./fecha-2b185e5a.js";import"./nprogress-319be66c.js";import"./vue3-hash-calendar-68956731.js";import"./hammerjs-ed6f6a9e.js";const _={class:"layout__body"},y={class:"mode-toggle st-bg-white"},g={key:1,class:"default-scoller"};var x=i({__name:"VirtualVertical",setup(i){const x=r("1"),k=r([]);r(""),r(null);for(let e=0;e<1e3;e++)k.value.push({id:e});const V=e=>{return s=this,t=null,a=function*(){yield h()},new Promise(((e,i)=>{var r=e=>{try{l(a.next(e))}catch(s){i(s)}},o=e=>{try{l(a.throw(e))}catch(s){i(s)}},l=s=>s.done?e(s.value):Promise.resolve(s.value).then(r,o);l((a=a.apply(s,t)).next())}));var s,t,a};return(i,r)=>{const h=t,w=e,z=s;return o(),l("div",_,[m("",!0),c("div",y,[d(z,{modelValue:u(x),"onUpdate:modelValue":r[0]||(r[0]=e=>j(x)?x.value=e:null),direction:"horizontal",onChange:V},{default:n((()=>[d(w,{name:"1"},{default:n((()=>[p("默认滚动")])),_:1}),d(w,{name:"2"},{default:n((()=>[p("虚拟滚动")])),_:1})])),_:1},8,["modelValue"])]),1==u(x)?(o(),l("div",g,[(o(!0),l(f,null,v(u(k),(e=>(o(),b(h,{key:e.id,class:"list-item",title:`我是第${e.id+1}项数据`},null,8,["title"])))),128))])):(o(),b(u(a),{key:2,class:"scroller",items:u(k),"item-size":44,"key-field":"id"},{default:n((({item:e})=>[d(h,{class:"list-item",title:`我是第${e.id+1}项数据`},null,8,["title"])])),_:1},8,["items"]))])}}},[["__scopeId","data-v-f499057a"]]);const k={class:"page-wrapper"},V={__name:"virtual-scroller",setup:e=>(e,s)=>(o(),l("div",k,[d(x)]))};export{V as default};
