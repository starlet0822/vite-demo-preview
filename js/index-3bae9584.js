import{n as e,q as t,R as o,P as a,d as s,Q as l,G as i,e as n,x as r,y as c,V as d,F as p,W as u,j as m,k as h,X as f,B as v,Y as b,h as x}from"./vant-f142fa12.js";import{_ as g}from"./Image-f4693518.js";import{_ as j}from"./index-7153c68f.js";import{_ as w}from"./index-bdd23c33.js";import{u as y}from"./vue-router-2cd4af54.js";import{d as k}from"./dayjs-ffcc1c50.js";import{u as _}from"./index-ac9d2ddd.js";import{p as C,h as V}from"./index-d5a2837b.js";import{_ as I}from"./plugin-vue_export-helper-893979e1.js";import{D as T,k as q,h as S,a7 as z,j as D,E as F,l as E,c as L,e as N,b8 as R,f as U,u as B,a as H,H as P,L as Q,t as G,F as O,b as M,s as W,o as X,ao as Y,w as J,ap as Z,i as A,N as K,aN as $,aM as ee}from"./@vue-563ebafd.js";import"./@vant-3579f7e1.js";import"./@antv-74afab59.js";import"./tslib-546db90a.js";import"./fecha-2b185e5a.js";/* empty css                      */import"./amfe-flexible-385c80ea.js";import"./js-cookie-aaf6027b.js";import"./vuex-423acd4f.js";import"./@vueuse-3d373d70.js";import"./lodash-es-12d03b41.js";import"./axios-0cd4f164.js";import"./qs-efaa5365.js";import"./side-channel-ebdfdc6e.js";import"./get-intrinsic-8aab7bd3.js";import"./has-symbols-1f359e75.js";import"./function-bind-c930bb92.js";import"./has-03e8e28c.js";import"./call-bind-b7e23f7e.js";import"./object-inspect-af06f273.js";import"./nprogress-4e4fc296.js";import"./vue3-hash-calendar-edea4f58.js";import"./hammerjs-ed6f6a9e.js";function te(e){if("ios"===_()){const t=document.createElement("a");t.href="tel:"+e,t.style.visibility="hidden",document.body.appendChild(t),t.click()}else window.location.href="tel:"+e}const oe=e=>($("data-v-7cb2cde6"),e=e(),ee(),e),ae={class:"mine"},se={class:"st-padding-left-15"},le={class:"mine-content"},ie={class:"bg"},ne={class:"user-box"},re={class:"headImg st-flex-jc-ai"},ce={class:"base-info"},de={class:"st-title name"},pe={class:"st-font-14"},ue={class:"st-margin-right-10"},me={class:"content"},he={class:"tag-box st-font-14"},fe={class:"st-flex-ai st-padding-bottom-10"},ve=oe((()=>H("span",{class:"custom-title"},"个人标签",-1))),be=oe((()=>H("div",{class:"st-padding-5 st-tip"},G("长按标签可删除"),-1))),xe={class:"add-tag"},ge={style:{margin:"16px"}},je=T({name:"Mine"});var we=I(Object.assign(je,{setup(_){A("themeColor");const I=y(),T=q({title:I.currentRoute.value.meta.title,user:{name:"吴小星",avatar:"https://xxx.png",occupation:"web前端",birthDate:"1996.04",yearLength:"3",tel:18889352620,company:"未知企业",tags:[{icon:"workstate",value:"离职-随时到岗"},{icon:"education",value:"本科"},{icon:"birthday",value:k().diff("1996-04-05","year")+"岁"}],pressIndex:null,tagsText:["添加标签","html","css","javaScript","vue2/vue3","react","uniapp","微信小程序","sass/less","nodeJs","webpack","vite","细节控","追求技术","实践选手","善于思考"],introduction:"本人计算机专业，3年以上的前端工作经验，具备比较扎实的计算机基础知识和前端技术。既可以使用jQuery开发项目，也可以基于Vue等新技术快速开发，主要擅长Vue。 可以独立完成前端开发工作，遇到难点即可查阅相关官方文档解决；善于运用工具提高开发效率。对于工作，积极认真，较强的适应能力和自学能力；性格温和善良，责任心强，虚心好学，热衷前端开发；注重团队协作精神，富有强烈的上进心。"},activeNames:["1","2","3","4"],tools:[{title:"开发工具",name:"1",list:[{text:"VSCode",icon:"photo-o",to:""},{text:"Webstorm",icon:"photo-o",to:""},{text:"Sourcetree",icon:"photo-o",to:""},{text:"Postman",icon:"photo-o",to:""},{text:"Charles",icon:"photo-o",to:""},{text:"Fiddler",icon:"photo-o",to:""},{text:"微信开发者工具",icon:"photo-o",to:""},{text:"HBuilderX",icon:"photo-o",to:""},{text:"Git Bash",icon:"photo-o",to:""},{text:"Chrome",icon:"photo-o",to:""},{text:"Firefox",icon:"photo-o",to:""},{text:"Notepad++",icon:"photo-o",to:""},{text:"Typora",icon:"photo-o",to:""}]},{title:"效率工具",name:"3",list:[{text:"uTools",icon:"photo-o",to:""},{text:"Snipaste",icon:"photo-o",to:""}]},{title:"Chrome插件",name:"4",list:[{text:"FeHelper",icon:"photo-o",to:""},{text:"Vue Devtools",icon:"photo-o",to:""},{text:"Redux Devtools",icon:"photo-o",to:""},{text:"React Developer Tools",icon:"photo-o",to:""},{text:"Console Importer",icon:"photo-o",to:""},{text:"OctoTree",icon:"photo-o",to:""},{text:"GitZip for gitHub",icon:"photo-o",to:""},{text:"IE Tab",icon:"photo-o",to:""},{text:"Block Site",icon:"photo-o",to:""},{text:"沙拉查词",icon:"photo-o",to:""},{text:"下载+",icon:"photo-o",to:""}]}]}),$=S((()=>V(T.user.tel))),{title:ee,user:oe,tools:je,activeNames:we}=z(T),ye=D(null),ke=D(!1),_e=D(!1),Ce=D(""),Ve=D(!1);D(!1),D(4),D(null);const Ie=[[{name:"微信",icon:"wechat"},{name:"朋友圈",icon:"wechat-moments"},{name:"微博",icon:"weibo"},{name:"QQ",icon:"qq"}],[{name:"复制链接",icon:"link"},{name:"分享海报",icon:"poster"},{name:"二维码",icon:"qrcode"},{name:"小程序码",icon:"weapp-qrcode"}]],Te=D(50),qe=D(!1);F((()=>{window.removeEventListener("scroll",Se,!0)})),E((()=>{window.addEventListener("scroll",Se)}));const Se=()=>{qe.value=window.pageYOffset>Te.value},ze=e=>({cb(){T.user.pressIndex=e}}),De=e=>{T.user.tagsText.splice(T.user.pressIndex,1),T.user.pressIndex=null},Fe=e=>{T.user.tagsText.splice(1,0,e.tagValue),_e.value=!1,Le()},Ee=e=>{const[t]=e.errors;x({message:t.message})},Le=()=>{ye.value.resetValidation(["tagValue"]),Ce.value=""},Ne=e=>{b(e.name),_e.value=!1},Re=e=>{return t=this,o=null,a=function*(){switch(e){case"chart":I.push({name:"Charts",params:{}});break;case"link":Ve.value=!0}},new Promise(((e,s)=>{var l=e=>{try{n(a.next(e))}catch(t){s(t)}},i=e=>{try{n(a.throw(e))}catch(t){s(t)}},n=t=>t.done?e(t.value):Promise.resolve(t.value).then(l,i);n((a=a.apply(t,o)).next())}));var t,o,a},Ue=()=>{I.push({path:"/edit-baseinfo"})};return(b,y)=>{const k=w,_=j,V=g,I=e,T=t,q=o,S=a,z=s,D=l,F=i,E=n,A=r,ee=c,Te=d,Se=p,Be=u,He=m,Pe=h,Qe=f,Ge=v,Oe=K("press"),Me=K("waves");return X(),L("div",ae,[N(_,{border:!1,"z-index":999,class:U(["mine-nav-bar",{"nav-bar-bg":B(qe)}])},{right:R((()=>[N(k,{"class-name":"st-color-blue",name:"chart",onClick:Re}),H("div",se,[N(k,{"class-name":"st-color-blue",name:"link",onClick:Re})])])),_:1},8,["class"]),H("div",le,[H("div",ie,[H("div",ne,[H("div",re,[N(V,P({width:60,height:60,radius:60},{round:""}),null,16),H("div",{class:"edit-btn st-font-12",onClick:Ue},"编辑个人信息")]),H("div",ce,[H("p",de,[Q(G(B(oe).name)+" ",1),H("span",pe,"("+G(B(oe).birthDate)+")",1)]),N(q,{type:"flex",align:"center"},{default:R((()=>[N(I,{span:"10",class:"st-font-12"},{default:R((()=>[H("div",null,G(B(oe).occupation)+"・"+G(B(oe).yearLength+" 年以上"),1)])),_:1}),N(I,{span:"14"},{default:R((()=>[H("div",{class:"st-align-right st-font-14",onClick:y[0]||(y[0]=e=>B(te)(B(oe).tel))},[H("span",ue,G(B($)),1),N(T,{name:"phone-o",color:"#fff",size:B(C)(14)},null,8,["size"])])])),_:1})])),_:1})])])]),H("div",me,[H("div",he,[H("div",fe,[(X(!0),L(O,null,M(B(oe).tags,((e,t)=>(X(),L("div",{key:t,class:"tag-item st-padding-right-10"},[N(k,{name:e.icon},null,8,["name"]),Q("   "),H("span",null,G(e.value),1)])))),128))]),H("div",null,G(B(oe).introduction),1)]),N(z,{center:"",border:!1},{title:R((()=>[ve,N(S,{show:B(ke),"onUpdate:show":y[1]||(y[1]=e=>W(ke)?ke.value=e:null),placement:"top",theme:"light"},{reference:R((()=>[N(T,{class:"st-padding-left-5",name:"info-o"})])),default:R((()=>[be])),_:1},8,["show"])])),_:1}),N(q,{type:"flex",class:"tag-list st-padding-box tag-list"},{default:R((()=>[(X(!0),L(O,null,M(B(oe).tagsText,((e,t)=>(X(),Y(I,{key:e+t,class:"st-margin-right-10 st-margin-bottom-8"},{default:R((()=>[J((X(),Y(D,{closeable:B(oe).pressIndex===t&&0!==t,plain:0===t,type:0===t?"primary":"default",size:"medium",onClick:e=>(e=>{0===e&&(_e.value=!0)})(t),onClose:De},{default:R((()=>[0===t?(X(),Y(T,{key:0,name:"plus",class:"st-margin-right-5"})):Z("",!0),Q(" "+G(e),1)])),_:2},1032,["closeable","plain","type","onClick"])),[[Oe,ze(t)]])])),_:2},1024)))),128))])),_:1}),N(ee,{modelValue:B(we),"onUpdate:modelValue":y[2]||(y[2]=e=>W(we)?we.value=e:null),class:"collapse"},{default:R((()=>[(X(!0),L(O,null,M(B(je),((e,t)=>(X(),Y(A,{key:e.title+t,title:e.title,name:e.name,border:!1},{default:R((()=>[N(E,{gutter:0},{default:R((()=>[(X(!0),L(O,null,M(e.list,(e=>(X(),Y(F,{key:e.text,icon:e.icon,text:e.text,border:!1,onClick:t=>(e=>{x(e.text)})(e)},null,8,["icon","text","onClick"])))),128))])),_:2},1024)])),_:2},1032,["title","name"])))),128))])),_:1},8,["modelValue"])])]),N(Te,{show:B(Ve),"onUpdate:show":y[3]||(y[3]=e=>W(Ve)?Ve.value=e:null),options:Ie,title:"立即分享给好友",onSelect:Ne},null,8,["show"]),N(Qe,{show:B(_e),"onUpdate:show":y[5]||(y[5]=e=>W(_e)?_e.value=e:null),title:"添加标签",onClose:Le},{default:R((()=>[H("div",xe,[N(Pe,{ref_key:"formRef",ref:ye,"show-error-message":!1,"show-error":!1,onSubmit:Fe,onFailed:Ee},{default:R((()=>[N(Be,{inset:""},{default:R((()=>[N(Se,{modelValue:B(Ce),"onUpdate:modelValue":y[4]||(y[4]=e=>W(Ce)?Ce.value=e:null),rules:[{required:!0,message:"请填写标签名称"}],class:"st-required",clearable:"",label:"标签名称",name:"tagValue",placeholder:"请填写"},null,8,["modelValue"])])),_:1}),H("div",ge,[J((X(),Y(He,{size:"small",block:"","native-type":"submit",round:"",type:"primary"},{default:R((()=>[Q(" 提交 ")])),_:1})),[[Me]])])])),_:1},512)])])),_:1},8,["show"]),N(Ge,{bottom:B(C)(60)},null,8,["bottom"])])}}}),[["__scopeId","data-v-7cb2cde6"]]);export{we as default};
