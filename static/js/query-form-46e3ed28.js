import{P as x}from"./index-fdc89af6.js";import{d as h,a as d,n as C,_,b as p,e as c,j as g,f as o,w as a,g as m,c as k,v as F,B as w,m as V}from"./index-95d00287.js";import"./question-filled-00b6e9f5.js";const $=h({components:{ProForm:x},setup(l,{attrs:e,emit:u}){const n=d(),i=d({}),b=d(!1),t=C(()=>e.formItems.length>e.colCount);return{proFormApi:n,formValues:i,onSearch:()=>{},onReset:()=>{var r;(r=n.value)==null||r.resetFields()},expand:b,showCollapse:t}}});function S(l,e,u,n,i,b){const t=p("el-button"),v=p("el-col"),f=p("el-row"),r=p("ProForm");return c(),g("div",null,[o(r,V({modelValue:l.formValues,"onUpdate:modelValue":e[3]||(e[3]=s=>l.formValues=s),api:l.proFormApi,"onUpdate:api":e[4]||(e[4]=s=>l.proFormApi=s)},l.$attrs,{expand:l.expand}),{actions:a(s=>[o(f,{type:"flex",justify:"end"},{default:a(()=>[o(v,{span:24,style:{"text-align":"right"}},{default:a(()=>[o(t,{type:"primary",onClick:e[0]||(e[0]=y=>l.onSearch())},{default:a(()=>[m(" 查 询 ")]),_:1}),o(t,{onClick:e[1]||(e[1]=y=>l.onReset())},{default:a(()=>[m(" 重 置 ")]),_:1}),l.showCollapse?(c(),k(t,{key:0,type:"primary",text:"",onClick:e[2]||(e[2]=y=>l.expand=!l.expand)},{default:a(()=>[m(F(l.expand?"收起":"展开"),1)]),_:1})):w("",!0)]),_:1})]),_:1})]),_:1},16,["modelValue","api","expand"])])}const T=_($,[["render",S]]),j=h({name:"QueryForm",__name:"query-form",setup(l){const e={labelPosition:"right",labelWidth:"80px",labelSuffix:":"},u=[{type:"el-input",prop:"name",label:"姓名",value:"",attrs:{},col:{xs:24,sm:24,md:12,lg:8,xl:6}},{type:"el-select",prop:"select",label:"城市",value:"",attrs:{class:"w-full",filterable:!0},options:[{optionsType:"el-option",label:"上海",value:"Shanghai"},{optionsType:"el-option",label:"北京",value:"Beijing"},{optionsType:"el-option",label:"广州",value:"Guangzhou",disabled:!0},{optionsType:"el-option",label:"深圳",value:"Shenzhen"}],col:{xs:24,sm:24,md:12,lg:8,xl:6}},{type:"el-cascader",prop:"cascader",label:"地区",value:[],attrs:{filterable:!0,options:[{value:1,label:"东南",children:[{value:2,label:"上海",children:[{value:3,label:"普陀"},{value:4,label:"黄埔"},{value:5,label:"徐汇"}]},{value:7,label:"江苏",children:[{value:8,label:"南京"},{value:9,label:"苏州"},{value:10,label:"无锡"}]},{value:12,label:"浙江",children:[{value:13,label:"杭州"},{value:14,label:"宁波"},{value:15,label:"嘉兴"}]}]},{value:17,label:"西北",children:[{value:18,label:"陕西",children:[{value:19,label:"西安"},{value:20,label:"延安"}]},{value:21,label:"新疆维吾尔族自治区",children:[{value:22,label:"乌鲁木齐"},{value:23,label:"克拉玛依"}]}]}],"collapse-tags":!0,props:{expandTrigger:"click",multiple:!0},style:{width:"100%"}},col:{xs:24,sm:24,md:12,lg:8,xl:6},on:{}},{type:"el-tree-select",prop:"level",label:"等级",attrs:{style:{width:"100%"},"node-key":"id",filterable:!0,"check-strictly":!0,"render-after-expand":!1,data:[{id:"1",label:"一级 1",children:[{id:"1-1",label:"二级 1-1",children:[{id:"1-1-1",label:"三级 1-1-1"}]}]}]},col:{xs:24,sm:24,md:12,lg:8,xl:6}},{type:"el-date-picker",prop:"createTime",label:"创建时间",attrs:{type:"datetime",style:{width:"100%"}},col:{xs:24,sm:24,md:12,lg:8,xl:6}}];return(n,i)=>(c(),g("div",null,[o(T,{formItems:u,formOptions:e,colCount:"4",isQuery:""})]))}});export{j as default};
