import{_ as e}from"./index-014fd06b.js";import{d as t}from"./vant-be38094f.js";import{_ as i}from"./Image-139a812c.js";import"./index-ddfd11f6.js";import{u as o}from"./vue-router-1cbad9b8.js";import{d as a}from"./vuedraggable-93e7e4ab.js";import{I as s}from"./intro.js-10a0758d.js";import{_ as n}from"./plugin-vue_export-helper-893979e1.js";import{m as l,b as r,a as c,_ as m,ak as d,aj as p,al as u,v as b,ai as j,b7 as f,u as g,l as v,f as h,aI as k,t as C,a5 as L,a2 as x,C as N}from"./@vue-0da0c2e3.js";import"./@vant-b0725c78.js";import"./index-5dd0f1ed.js";/* empty css                      */import"./amfe-flexible-385c80ea.js";import"./js-cookie-aaf6027b.js";import"./vuex-fdaeb4c6.js";import"./lodash-es-0ddda1ab.js";import"./axios-0cd4f164.js";import"./qs-efaa5365.js";import"./side-channel-ebdfdc6e.js";import"./get-intrinsic-8aab7bd3.js";import"./has-symbols-1f359e75.js";import"./function-bind-c930bb92.js";import"./has-03e8e28c.js";import"./call-bind-b7e23f7e.js";import"./object-inspect-af06f273.js";import"./@antv-74afab59.js";import"./tslib-546db90a.js";import"./fecha-2b185e5a.js";import"./nprogress-4e4fc296.js";import"./vue3-hash-calendar-e234247e.js";import"./hammerjs-ed6f6a9e.js";import"./sortablejs-349d26f5.js";const y={class:"about-wrapper st-bg"},_={class:"st-padding-top-10 st-margin-bottom-10"},w={class:"st-tip"},q=l({name:"About"});var S=n(Object.assign(q,{setup(n){r((()=>{}));const l=o(),q=c({user:{name:"斯达乐starlet",avatar:"https://xxx.png",occupation:"前端",company:"不知名企业"},dataList:[{title:"引导演示",value:"",iconName:"guide",iconColor:"red",isLink:!1,to:""},{title:"消息中心",value:"",iconName:"message",iconColor:"blue",isLink:!1,to:""},{title:"创作者中心",value:"",iconName:"write",iconColor:"green",isLink:!1,to:""},{title:"签到赢好礼",value:"",iconName:"sign",iconColor:"blue",isLink:!1,to:""},{title:"我赞过的",value:"1024篇",iconName:"like",iconColor:"green",isLink:!1,to:""},{title:"收藏集",value:"8个",iconName:"star",iconColor:"yellow",isLink:!1,to:""},{title:"已购",value:"0本",iconName:"shop",iconColor:"yellow",isLink:!1,to:""},{title:"阅读过的文章",value:"2099篇",iconName:"read",iconColor:"orange",isLink:!1,to:""},{title:"标签管理",value:"12个",iconName:"label",iconColor:"yellow",isLink:!1,to:""},{title:"意见反馈",value:"",iconName:"opinion",iconColor:"text",isLink:!1,to:""},{title:"设置",value:"",iconName:"setting",iconColor:"blue",isLink:!0,to:"/setting"}]}),{user:S,dataList:I}=m(q),O=e=>{const{iconName:t}=e;"guide"===t&&s().setOptions({hints:[{hint:"First hint",element:document.querySelector("#setting"),hintPosition:"middle-middle"}],prevLabel:"上一步",nextLabel:"下一步",skipLabel:"跳过",doneLabel:"我已了解",showBullets:!1,disableInteraction:!0,exitOnOverlayClick:!1,steps:[{element:document.querySelector(".mine"),title:"个人信息",intro:"您可以点击查看个人信息",position:"left"},{element:document.querySelector("#draggable"),title:"拖拽容器",intro:"您可以拖拽单元格移动位置",position:"top"},{element:document.querySelector("#setting"),title:"设置",intro:"您可以点击设置应用",position:"right"},{element:document.querySelector("#tabbar-item-Demo"),title:"案例",intro:"您可以点击查看部分功能示例",position:"bottom"}]}).start()},V=e=>{},A=()=>{l.push({path:"/mine-center"})};return(o,s)=>{const n=i,l=t,r=e,c=N("waves");return k(),d("div",y,[p("",!0),u("div",_,[u("div",{onClick:A},[b((k(),j(l,{label:`${g(S).occupation} @ ${g(S).company}`,title:g(S).name,center:"",class:"mine st-padding-20","is-link":"","label-class":"st-tip","title-class":"st-title st-padding-left-20"},{icon:f((()=>[v(n,C({src:"https://s4.ax1x.com/2022/03/02/b3NS0A.jpg"},{width:44,height:44,radius:44,enablePreview:!1},{round:""}),null,16)])),_:1},8,["label","title"])),[[c]])])]),v(g(a),{id:"draggable",modelValue:g(I),"onUpdate:modelValue":s[0]||(s[0]=e=>h(I)?I.value=e:null),"item-key":"title","chosen-class":"drag-active","force-fallback":"true",animation:"300",onChange:V},{item:f((({element:e,index:t})=>[b((k(),j(l,{id:e.iconName,class:x([{"st-margin-bottom-10":[2,5,7].includes(t)},{"st-border-0":[2,5,7].includes(t)}]),"is-link":e.isLink,to:e.to,title:e.title,center:"","title-class":"st-font-14 st-padding-left-15",onClick:t=>O(e)},{icon:f((()=>[v(r,{"class-name":"st-color-"+e.iconColor,name:e.iconName},null,8,["class-name","name"])])),value:f((()=>[u("span",w,L(e.value),1)])),_:2},1032,["id","class","is-link","to","title","onClick"])),[[c]])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-0a84e664"]]);export{S as default};
