import{_ as w}from"./index-4a8a8591.js";import{d as S,o as q,r as I,t as V,a as B,g as c,q as t,f as m,p as o,x as a,v as f,u as i,m as D,z as O,y as M,J as P,S as R,H as $,M as j}from"./index-2d318566.js";import{C as z}from"./index-434b4cca.js";import{_ as A}from"./Image-47f7f89c.js";import{_ as F}from"./index-aad031b4.js";import{_ as H}from"./index-2c77931f.js";import{d as J}from"./vuedraggable-e15104d3.js";import{I as U}from"./intro.module-83cad421.js";import{_ as E}from"./plugin-vue_export-helper-c27b6911.js";import"./index-649ab5be.js";import"./index-f93f27f2.js";import"./use-route-e384b3a3.js";import"./function-call-061d7f50.js";import"./index-5561415e.js";import"./index-2b5f5f87.js";const G={class:"about-content"},K={class:"st-padding-top-10 st-margin-bottom-10"},Q={class:"st-tip"},T=S({name:"About"}),W=Object.assign(T,{setup(X){q(()=>{});const v=()=>{U().setOptions({hints:[{hint:"First hint",element:document.querySelector("#setting"),hintPosition:"middle-middle"}],prevLabel:"上一步",nextLabel:"下一步",skipLabel:"跳过",doneLabel:"我已了解",showBullets:!1,disableInteraction:!0,exitOnOverlayClick:!1,steps:[{element:document.querySelector(".mine"),title:"个人信息",intro:"您可以点击查看个人信息",position:"left"},{element:document.querySelector("#draggable"),title:"拖拽容器",intro:"您可以拖拽单元格移动位置",position:"top"},{element:document.querySelector("#setting"),title:"设置",intro:"您可以点击设置应用",position:"right"},{element:document.querySelector("#tabbar-item-Demo"),title:"案例",intro:"您可以点击查看部分功能示例",position:"bottom"}]}).start()},p=R(),b=I({user:{name:"斯达乐starlet",avatar:"https://xxx.png",occupation:"前端",company:"不知名企业"},dataList:[{title:"消息中心",value:"",iconName:"message",iconColor:"blue",isLink:!1,to:""},{title:"创作者中心",value:"",iconName:"write",iconColor:"green",isLink:!1,to:""},{title:"签到赢好礼",value:"",iconName:"sign",iconColor:"blue",isLink:!1,to:""},{title:"我赞过的",value:"1024篇",iconName:"like",iconColor:"green",isLink:!1,to:""},{title:"收藏集",value:"8个",iconName:"star",iconColor:"yellow",isLink:!1,to:""},{title:"已购",value:"0本",iconName:"shop",iconColor:"yellow",isLink:!1,to:""},{title:"阅读过的文章",value:"2099篇",iconName:"read",iconColor:"orange",isLink:!1,to:""},{title:"标签管理",value:"12个",iconName:"label",iconColor:"yellow",isLink:!1,to:""},{title:"意见反馈",value:"",iconName:"opinion",iconColor:"text",isLink:!1,to:""}]}),{user:l,dataList:r}=V(b),h=s=>{const{iconName:n}=s;n==="guide"&&v(),n==="setting"&&p.push({path:"/about/setting"})},k=s=>{console.log("evt: ",s)},C=()=>{p.push({path:"/mine-center"})};return B(0),(s,n)=>{const u=H,y=$("router-link"),L=F,x=A,_=z,N=w,d=j("waves");return m(),c(N,{class:"page-wrapper",title:"关于我"},{header:t(()=>[o(L,{"left-arrow":!1,title:"关于我"},{right:t(()=>[o(y,{to:"/setting"},{default:t(()=>[o(u,{name:"setting",class:"st-color-blue"})]),_:1})]),_:1})]),default:t(()=>[a("div",G,[a("div",K,[a("div",{onClick:C},[f((m(),c(_,{label:`${i(l).occupation} @ ${i(l).company}`,title:i(l).name,center:"",class:"mine st-padding-20","is-link":"","label-class":"st-tip","title-class":"st-title st-padding-left-20"},{icon:t(()=>[o(x,D({src:"https://s4.ax1x.com/2022/03/02/b3NS0A.jpg"},{width:44,height:44,radius:44,enablePreview:!1},{round:""}),null,16)]),_:1},8,["label","title"])),[[d]])])]),o(i(J),{id:"draggable",modelValue:i(r),"onUpdate:modelValue":n[0]||(n[0]=e=>P(r)?r.value=e:null),"item-key":"title","chosen-class":"drag-active","force-fallback":"true",animation:"300",onChange:k},{item:t(({element:e,index:g})=>[f((m(),c(_,{id:e.iconName,class:O([{"st-margin-bottom-10":[2,5,7].includes(g)},{"st-border-0":[2,5,7].includes(g)}]),"is-link":e.isLink,title:e.title,center:"","title-class":"st-font-14 st-padding-left-15",onClick:Y=>h(e)},{icon:t(()=>[o(u,{"class-name":"st-color-"+e.iconColor,name:e.iconName},null,8,["class-name","name"])]),value:t(()=>[a("span",Q,M(e.value),1)]),_:2},1032,["id","class","is-link","title","onClick"])),[[d]])]),_:1},8,["modelValue"])])]),_:1})}}}),de=E(W,[["__scopeId","data-v-013af0c6"]]);export{de as default};
