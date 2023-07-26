import{e,B as a}from"./vant-e0b5fbdf.js";import{F as t,C as s}from"./@antv-8a75d63c.js";import{_ as r}from"./plugin-vue_export-helper-893979e1.js";import{l as i,b as o,s as d,B as n,aR as l,aQ as u,H as p,D as v,u as c}from"./@vue-52de1c01.js";import{_ as m}from"./index-eb7feec2.js";import{p as b}from"./index-764e346b.js";import"./@vant-0004063d.js";import"./tslib-546db90a.js";import"./fecha-2b185e5a.js";import"./vue-router-35312974.js";import"./index-e3aa1ad9.js";/* empty css                      */import"./amfe-flexible-385c80ea.js";import"./js-cookie-aaf6027b.js";import"./vuex-c830e64e.js";import"./@vueuse-feee2333.js";import"./lodash-es-133975bb.js";import"./axios-0cd4f164.js";import"./qs-6446231f.js";import"./side-channel-b2edb420.js";import"./get-intrinsic-8aab7bd3.js";import"./has-symbols-1f359e75.js";import"./function-bind-c930bb92.js";import"./has-03e8e28c.js";import"./call-bind-b7e23f7e.js";import"./object-inspect-8ed24658.js";import"./nprogress-319be66c.js";import"./vue3-hash-calendar-68956731.js";import"./hammerjs-ed6f6a9e.js";const h={className:"line-chart-wrapper st-bg-white"},j=[(e=>(l("data-v-c8ed93e4"),e=e(),u(),e))((()=>p("canvas",{id:"lineChart"},null,-1)))],g=i({name:"LineChart"});var f=r(Object.assign(g,{props:{height:{type:[Number,String],default:260}},setup(e){const a=[{date:"2017-06-05",value:116},{date:"2017-06-06",value:129},{date:"2017-06-07",value:135},{date:"2017-06-08",value:86},{date:"2017-06-09",value:73},{date:"2017-06-10",value:85},{date:"2017-06-11",value:73},{date:"2017-06-12",value:68},{date:"2017-06-13",value:92},{date:"2017-06-14",value:130},{date:"2017-06-15",value:245},{date:"2017-06-16",value:139},{date:"2017-06-17",value:115},{date:"2017-06-18",value:111},{date:"2017-06-19",value:309},{date:"2017-06-20",value:206},{date:"2017-06-21",value:137},{date:"2017-06-22",value:128},{date:"2017-06-23",value:85},{date:"2017-06-24",value:94},{date:"2017-06-25",value:71},{date:"2017-06-26",value:106},{date:"2017-06-27",value:84},{date:"2017-06-28",value:93},{date:"2017-06-29",value:85},{date:"2017-06-30",value:73},{date:"2017-07-01",value:83},{date:"2017-07-02",value:125},{date:"2017-07-03",value:107},{date:"2017-07-04",value:82},{date:"2017-07-05",value:44},{date:"2017-07-06",value:72},{date:"2017-07-07",value:106},{date:"2017-07-08",value:107},{date:"2017-07-09",value:66},{date:"2017-07-10",value:91},{date:"2017-07-11",value:92},{date:"2017-07-12",value:113},{date:"2017-07-13",value:107},{date:"2017-07-14",value:131},{date:"2017-07-15",value:111},{date:"2017-07-16",value:64},{date:"2017-07-17",value:69},{date:"2017-07-18",value:88},{date:"2017-07-19",value:77},{date:"2017-07-20",value:83},{date:"2017-07-21",value:111},{date:"2017-07-22",value:57},{date:"2017-07-23",value:55},{date:"2017-07-24",value:60}];return o((()=>{const e=new t.Chart({id:"lineChart",pixelRatio:window.devicePixelRatio});e.source(a,{value:{tickCount:5,min:0},date:{type:"timeCat",range:[0,1],tickCount:3}}),e.tooltip({custom:!0,showXTip:!0,showYTip:!0,snap:!0,crosshairsType:"xy",crosshairsStyle:{lineDash:[2]}}),e.axis("date",{label:function(e,a,t){const s={};return 0===a?s.textAlign="left":a===t-1&&(s.textAlign="right"),s}}),e.line().position("date*value"),e.render()})),(e,a)=>(d(),n("div",h,j))}}),[["__scopeId","data-v-c8ed93e4"]]);const C={class:"pie-chart-wrapper st-bg-white"},x=[(e=>(l("data-v-60c4a6d3"),e=e(),u(),e))((()=>p("canvas",{id:"pieChart"},null,-1)))],w=i({name:"PieChart"});var _=r(Object.assign(w,{setup(e){const a={"芳华":"40%","妖猫传":"20%","机器之血":"18%","心理罪":"15%","寻梦环游记":"5%","其他":"2%"},t=[{name:"芳华",percent:.4,a:"1"},{name:"妖猫传",percent:.2,a:"1"},{name:"机器之血",percent:.18,a:"1"},{name:"心理罪",percent:.15,a:"1"},{name:"寻梦环游记",percent:.05,a:"1"},{name:"其他",percent:.02,a:"1"}];return o((()=>{const e=new s({id:"pieChart",pixelRatio:window.devicePixelRatio});e.source(t,{percent:{formatter:function(e){return 100*e+"%"}}}),e.legend({position:"right",itemFormatter:function(e){return e+"  "+a[e]}}),e.tooltip(!1),e.coord("polar",{transposed:!0,radius:.85}),e.axis(!1),e.interval().position("a*percent").color("name",["#1890FF","#13C2C2","#2FC25B","#FACC14","#F04864","#8543E0"]).adjust("stack").style({lineWidth:1,stroke:"#fff",lineJoin:"round",lineCap:"round"}).animate({appear:{duration:1200,easing:"bounceOut"}}),e.render()})),(e,a)=>(d(),n("div",C,x))}}),[["__scopeId","data-v-60c4a6d3"]]);const y={class:"bar-chart-wrapper st-bg-white"},F=[(e=>(l("data-v-6bb71744"),e=e(),u(),e))((()=>p("canvas",{id:"myChart"},null,-1)))],R=i({name:"BarChart"});var O=r(Object.assign(R,{props:{height:{type:[Number,String],default:260}},setup(e){const a=[{genre:"Sports",sold:275},{genre:"Strategy",sold:115},{genre:"Action",sold:120},{genre:"Shooter",sold:350},{genre:"Other",sold:150}];return o((()=>{const e=new t.Chart({id:"myChart",pixelRatio:window.devicePixelRatio});e.source(a),e.interval().position("genre*sold").color("genre"),e.render()})),(e,a)=>(d(),n("div",y,F))}}),[["__scopeId","data-v-6bb71744"]]);const S={class:"layout__page"},k={class:"st-margin-top-10"},A={class:""},B={class:"st-margin-top-10"},I={class:"st-margin-top-10"},P=i({name:"Charts"});var N=r(Object.assign(P,{setup:t=>(t,s)=>{const r=m,i=e,o=O,l=_,u=f,h=a;return d(),n("div",S,[v(r),p("div",k,[p("div",A,[v(i,{title:"柱状图",border:!1}),v(o)]),p("div",B,[v(i,{title:"饼图",border:!1}),v(l)]),p("div",I,[v(i,{title:"折线图",border:!1}),v(u)])]),v(h,{bottom:c(b)(60)},null,8,["bottom"])])}}),[["__scopeId","data-v-4f73a8e8"]]);export{N as default};
