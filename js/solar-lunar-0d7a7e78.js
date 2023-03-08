import{B as a,F as e,C as t,l,R as s,K as u,m as o,D as v}from"./vant-78dd0152.js";import{_ as n}from"./index-89ae9d3a.js";import{f as r,c as d}from"./datetime-1e01657d.js";import{d as x}from"./dayjs-ffcc1c50.js";import{_ as i}from"./plugin-vue_export-helper-893979e1.js";import{m,r as c,ak as p,l as f,v as b,ai as _,b7 as j,u as h,f as Y,aj as y,F as C,al as D,aI as g,A as w,a5 as $,C as V}from"./@vue-0da0c2e3.js";import"./@vant-b0725c78.js";import"./vue-router-1cbad9b8.js";import"./@antv-74afab59.js";import"./tslib-546db90a.js";import"./fecha-2b185e5a.js";const M={class:"solar-lunar st-bg"},k={class:"result"},z=m({name:"SolarLunar"});var I=i(Object.assign(z,{setup(i){const m=[((a=2013,e=2033)=>{const t=[];for(let l=a;l++,l<=e;)t.push({text:l+"年",value:l});return t})(),[{text:"正月",value:"1"},{text:"二月",value:"2"},{text:"三月",value:"3"},{text:"四月",value:"4"},{text:"五月",value:"5"},{text:"六月",value:"6"},{text:"七月",value:"7"},{text:"八月",value:"8"},{text:"九月",value:"9"},{text:"十月",value:"10"},{text:"冬月",value:"11"},{text:"腊月",value:"12"}],[{text:"初一",value:"1"},{text:"初二",value:"2"},{text:"初三",value:"3"},{text:"初四",value:"4"},{text:"初五",value:"5"},{text:"初六",value:"6"},{text:"初七",value:"7"},{text:"初八",value:"8"},{text:"初九",value:"9"},{text:"初十",value:"10"},{text:"十一",value:"11"},{text:"十二",value:"12"},{text:"十三",value:"13"},{text:"十四",value:"14"},{text:"十五",value:"15"},{text:"十六",value:"16"},{text:"十七",value:"17"},{text:"十八",value:"18"},{text:"十九",value:"19"},{text:"二十",value:"20"},{text:"廿一",value:"21"},{text:"廿二",value:"22"},{text:"廿三",value:"23"},{text:"廿四",value:"24"},{text:"廿五",value:"25"},{text:"廿六",value:"26"},{text:"廿七",value:"27"},{text:"廿八",value:"28"},{text:"廿九",value:"29"},{text:"三十",value:"30"}]],z=c(),I=c(),U=c(),F=c({}),A=c("solar"),O=c(r(new Date,"YYYY-MM-DD").split("-")),B=["year","month","day"],K=(a,e)=>("year"===a&&(e.text+="年"),"month"===a&&(e.text+="月"),"day"===a&&(e.text+="日"),e),L=c(!1),R=c(!1),S=({selectedOptions:a})=>{L.value=!1,U.value=a.map((a=>a.text)).join(""),I.value=a.map((a=>a.value)).join("/")},W=({selectedValues:a})=>{"solar"===A.value&&(z.value=a.join("/")),"lunar"===A.value&&(I.value=a.join("/")),R.value=!1},q=()=>{A.value="solar",O.value=z.value?z.value.split("/"):O.value,R.value=!0},E=()=>{const[a,e,t]=z.value.split("/"),l=d.solar2lunar(a,e,t),{date:s,ncWeek:u,lunarDate:o,IMonthCn:v,IDayCn:n,gzYear:r,gzMonth:i,gzDay:m}=l;l.solar=`${x(s).format("YYYY年MM月DD日")} ${u}`,l.lunar=`${x(o).format("YYYY年")} ${v} ${n} (${r}年 ${i}月 ${m}日)`,F.value=l};return(r,d)=>{const x=n,i=a,c=e,I=t,U=l,A=s,G=u,H=o,J=v,N=V("waves");return g(),p("div",M,[f(x),b((g(),_(c,{modelValue:h(z),"onUpdate:modelValue":d[0]||(d[0]=a=>Y(z)?z.value=a:null),class:"st-margin-top-10",label:"公历时间",placeholder:"点击选择",readonly:"",center:"",onFocus:q},{button:j((()=>[f(i,{size:"small",type:"primary",icon:"exchange",disabled:!h(z),onClick:E},{default:j((()=>[w($("公历转农历"))])),_:1},8,["disabled"])])),_:1},8,["modelValue"])),[[N]]),y("",!0),(g(),p(C,{key:1},[f(I,{title:"转换结果",border:!1}),D("div",k,[f(A,{class:""},{default:j((()=>[f(U,{class:"label",span:"4"},{default:j((()=>[w("公历")])),_:1}),f(U,{class:"value",span:"20"},{default:j((()=>[w($(h(F).solar),1)])),_:1})])),_:1}),f(A,{class:""},{default:j((()=>[f(U,{class:"label",span:"4"},{default:j((()=>[w("农历")])),_:1}),f(U,{class:"value",span:"20"},{default:j((()=>[w($(h(F).lunar),1)])),_:1})])),_:1}),y("",!0),f(A,{class:""},{default:j((()=>[f(U,{class:"label",span:"4"},{default:j((()=>[w("生肖")])),_:1}),f(U,{class:"value",span:"20"},{default:j((()=>[w($(h(F).Animal),1)])),_:1})])),_:1}),f(A,{class:""},{default:j((()=>[f(U,{class:"label",span:"4"},{default:j((()=>[w("星座")])),_:1}),f(U,{class:"value",span:"20"},{default:j((()=>[w($(h(F).astro),1)])),_:1})])),_:1})])],64)),f(H,{show:h(L),"onUpdate:show":d[3]||(d[3]=a=>Y(L)?L.value=a:null),position:"bottom"},{default:j((()=>[f(G,{title:"选择农历",columns:m,onCancel:d[2]||(d[2]=a=>L.value=!1),onConfirm:S})])),_:1},8,["show"]),f(H,{show:h(R),"onUpdate:show":d[6]||(d[6]=a=>Y(R)?R.value=a:null),position:"bottom"},{default:j((()=>[f(J,{modelValue:h(O),"onUpdate:modelValue":d[4]||(d[4]=a=>Y(O)?O.value=a:null),title:"选择公历",formatter:K,"columns-type":B,onConfirm:W,onCancel:d[5]||(d[5]=a=>R.value=!1)},null,8,["modelValue"])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-2ee2aed6"]]);export{I as default};