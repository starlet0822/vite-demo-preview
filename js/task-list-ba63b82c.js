import{g as t,h as e,l as a,P as s}from"./vant-e0b5fbdf.js";import{g as l,_ as i}from"./dict-ab9c54d8.js";import{_ as o}from"./index-eb7feec2.js";import{d as r}from"./dayjs-f8677b81.js";import{_ as m}from"./plugin-vue_export-helper-893979e1.js";import{r as n,B as p,D as c,E as v,u as d,f as u,H as f,M as h,N as b,s as Y,P as j,G as g,J as y,I as _,S as M}from"./@vue-52de1c01.js";import"./@vant-0004063d.js";import"./lodash-es-133975bb.js";import"./vue-router-35312974.js";import"./@antv-8a75d63c.js";import"./tslib-546db90a.js";import"./fecha-2b185e5a.js";const D={class:"task-list"},k={class:"st-color-tip"},w={class:"st-text st-margin-bottom-10"},H={class:"st-tip"},C={class:"st-tip"},x={class:"status st-tip"};var F=m({__name:"task-list",setup(m){const F=new Map([["-1","全部"],["0","我发起的"],["1","我负责的"],["2","我参与的"],["3","下属负责的"]]),I=new Map([["-1","全部"],["0","普通"],["1","重要"],["2","紧急"],["3","特急"]]),U=n(!1),P=n([{type:"InputField",title:"关键词查询",value:"",name:"keyword",attrs:{placeholder:"输入搜索关键词"}},{type:"radioField",title:"任务分类",value:"0",name:"taskType",attrs:{options:l(F)}},{type:"radioField",title:"紧急程度（多选）",value:"-1",name:"level",attrs:{options:l(I)}},{type:"DateField",title:"提交时间",value:"",name:"createTime",attrs:{placeholder:"选择时间"}}]),T=n(0),B=n(0),E=[{title:"全部",name:-1},{title:"进行中",name:0},{title:"未开始",name:1},{title:"已完成",name:2},{title:"未完成",name:3}],G=n("#2e6cf3"),J={0:"未开始",1:"进行中",2:"已完成",3:"未完成"},N=[{title:"与客户沟通报价事宜",activeColor:"red",status:"0",level:"0",time:r().format("YYYY-MM-DD HH:mm")},{title:"与客户沟通报价事宜",activeColor:"orange",status:"1",level:"1",time:r().format("YYYY-MM-DD HH:mm")},{title:"与客户沟通报价事宜",activeColor:"blue",status:"2",level:"2",time:r().format("YYYY-MM-DD HH:mm")},{title:"与客户沟通报价事宜",activeColor:"gray",status:"3",level:"3",time:r().format("YYYY-MM-DD HH:mm")}],S=t=>{U.value=!1};return(l,r)=>{const m=t,n=e,F=a,q=o,z=i,A=s,K=M("waves");return Y(),p("div",null,[c(q,{"right-text":"按钮",border:""},{title:v((()=>[c(n,{active:d(T),"onUpdate:active":r[0]||(r[0]=t=>u(T)?T.value=t:null),type:"card",shrink:""},{default:v((()=>[c(m,{title:"普通任务"}),c(m,{title:"跟进任务"})])),_:1},8,["active"])])),right:v((()=>[f("span",{class:"st-color-blue st-font-12",onClick:r[1]||(r[1]=t=>U.value=!0)},[c(F,{name:"filter-o",class:"st-font-16"}),j(" 筛选 ")])])),_:1}),c(n,{active:d(B),"onUpdate:active":r[2]||(r[2]=t=>u(B)?B.value=t:null),"title-active-color":d(G),"line-height":0},{default:v((()=>[(Y(),p(h,null,b(E,(t=>c(m,{key:t.name,title:t.title,name:t.name},null,8,["title","name"]))),64))])),_:1},8,["active","title-active-color"]),f("div",D,[(Y(),p(h,null,b(N,((t,e)=>g(f("div",{key:t.title+e,class:y(["task-item",[t.activeColor]])},[f("div",k,[f("p",w,_(t.title),1),f("p",H,_(t.time),1),f("p",C,"紧急程度："+_(d(I).get(t.level)),1)]),f("div",x,_(J[t.status]),1)],2),[[K]]))),64))]),c(A,{show:d(U),"onUpdate:show":r[3]||(r[3]=t=>u(U)?U.value=t:null),position:"right",closeable:!1,"close-on-popstate":"",style:{width:"85%",height:"100%"}},{default:v((()=>[c(z,{"show-header":"","form-items":d(P),onConfirm:S},null,8,["form-items"])])),_:1},8,["show"])])}}},[["__scopeId","data-v-607b98d0"]]);export{F as default};
