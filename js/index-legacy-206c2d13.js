!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";[data-v-d9280090]:export{themeColor:var(--van-blue)}.about .layout__body[data-v-d9280090]{overflow-x:hidden}.about .mine[data-v-d9280090]{padding:.64rem .48rem}.about #draggable[data-v-d9280090]{overflow:hidden}\n',document.head.appendChild(e),System.register(["./index-legacy-9c5b5dfd.js","./vant-legacy-b2181f9b.js","./Image-legacy-6cd1a27b.js","./index-legacy-dbd704a5.js","./vue-router-legacy-78aaaf21.js","./vuedraggable-legacy-f3406321.js","./intro.js-legacy-66104404.js","./plugin-vue_export-helper-legacy-37b3dbd0.js","./@vue-legacy-c040f40e.js","./@vant-legacy-105072c1.js","./index-legacy-846edde3.js","./normalize.css-legacy-9b0443a6.js","./amfe-flexible-legacy-e3938076.js","./js-cookie-legacy-5f5cb1eb.js","./vuex-legacy-982ac0a4.js","./@vueuse-legacy-6dda9fb0.js","./lodash-es-legacy-72b1cdbe.js","./axios-legacy-10210e28.js","./qs-legacy-5895894e.js","./side-channel-legacy-2b88a05f.js","./get-intrinsic-legacy-39a148af.js","./has-symbols-legacy-d03493bf.js","./function-bind-legacy-aa6d88e2.js","./has-legacy-275d3594.js","./call-bind-legacy-628f04b5.js","./object-inspect-legacy-7c542a43.js","./@antv-legacy-a9dadf71.js","./tslib-legacy-238f19fa.js","./fecha-legacy-893f5c8d.js","./nprogress-legacy-f6e28caf.js","./vue3-hash-calendar-legacy-e5bed7be.js","./hammerjs-legacy-fd9fbe53.js","./sortablejs-legacy-81289f6a.js"],(function(e){"use strict";var t,n,i,a,o,c,l,s,u,r,d,f,g,m,b,y,v,p,j,h,k,x,C,L,N;return{setters:[function(e){t=e._},function(e){n=e.d},function(e){i=e._},function(){},function(e){a=e.u},function(e){o=e.d},function(e){c=e.I},function(e){l=e._},function(e){s=e.D,u=e.l,r=e.k,d=e.a7,f=e.c,g=e.ap,m=e.a,b=e.w,y=e.ao,v=e.b8,p=e.u,j=e.e,h=e.s,k=e.o,x=e.H,C=e.t,L=e.f,N=e.N},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var w={class:"about"},_={class:"about-content"},S={class:"st-padding-top-10 st-margin-bottom-10"},q={class:"st-tip"},I=s({name:"About"}),O=Object.assign(I,{setup:function(e){u((function(){}));var l=a(),s=r({user:{name:"斯达乐starlet",avatar:"https://xxx.png",occupation:"前端",company:"不知名企业"},dataList:[{title:"消息中心",value:"",iconName:"message",iconColor:"blue",isLink:!1,to:""},{title:"创作者中心",value:"",iconName:"write",iconColor:"green",isLink:!1,to:""},{title:"签到赢好礼",value:"",iconName:"sign",iconColor:"blue",isLink:!1,to:""},{title:"我赞过的",value:"1024篇",iconName:"like",iconColor:"green",isLink:!1,to:""},{title:"收藏集",value:"8个",iconName:"star",iconColor:"yellow",isLink:!1,to:""},{title:"已购",value:"0本",iconName:"shop",iconColor:"yellow",isLink:!1,to:""},{title:"阅读过的文章",value:"2099篇",iconName:"read",iconColor:"orange",isLink:!1,to:""},{title:"标签管理",value:"12个",iconName:"label",iconColor:"yellow",isLink:!1,to:""},{title:"意见反馈",value:"",iconName:"opinion",iconColor:"text",isLink:!1,to:""}]}),I=d(s),O=I.user,V=I.dataList,A=function(e){var t=e.iconName;"guide"===t&&c().setOptions({hints:[{hint:"First hint",element:document.querySelector("#setting"),hintPosition:"middle-middle"}],prevLabel:"上一步",nextLabel:"下一步",skipLabel:"跳过",doneLabel:"我已了解",showBullets:!1,disableInteraction:!0,exitOnOverlayClick:!1,steps:[{element:document.querySelector(".mine"),title:"个人信息",intro:"您可以点击查看个人信息",position:"left"},{element:document.querySelector("#draggable"),title:"拖拽容器",intro:"您可以拖拽单元格移动位置",position:"top"},{element:document.querySelector("#setting"),title:"设置",intro:"您可以点击设置应用",position:"right"},{element:document.querySelector("#tabbar-item-Demo"),title:"案例",intro:"您可以点击查看部分功能示例",position:"bottom"}]}).start(),"setting"===t&&l.push({path:"/setting"})},D=function(e){},F=function(){l.push({path:"/mine-center"})};return function(e,a){var c=i,l=n,s=t,u=N("waves");return k(),f("div",w,[g("",!0),m("div",_,[m("div",S,[m("div",{onClick:F},[b((k(),y(l,{label:"".concat(p(O).occupation," @ ").concat(p(O).company),title:p(O).name,center:"",class:"mine st-padding-20","is-link":"","label-class":"st-tip","title-class":"st-title st-padding-left-20"},{icon:v((function(){return[j(c,x({src:"https://s4.ax1x.com/2022/03/02/b3NS0A.jpg"},{width:44,height:44,radius:44,enablePreview:!1},{round:""}),null,16)]})),_:1},8,["label","title"])),[[u]])])]),j(p(o),{id:"draggable",modelValue:p(V),"onUpdate:modelValue":a[0]||(a[0]=function(e){return h(V)?V.value=e:null}),"item-key":"title","chosen-class":"drag-active","force-fallback":"true",animation:"300",onChange:D},{item:v((function(e){var t=e.element,n=e.index;return[b((k(),y(l,{id:t.iconName,class:L([{"st-margin-bottom-10":[2,5,7].includes(n)},{"st-border-0":[2,5,7].includes(n)}]),"is-link":t.isLink,title:t.title,center:"","title-class":"st-font-14 st-padding-left-15",onClick:function(e){return A(t)}},{icon:v((function(){return[j(s,{"class-name":"st-color-"+t.iconColor,name:t.iconName},null,8,["class-name","name"])]})),value:v((function(){return[m("span",q,C(t.value),1)]})),_:2},1032,["id","class","is-link","title","onClick"])),[[u]])]})),_:1},8,["modelValue"])])])}}});e("default",l(O,[["__scopeId","data-v-d9280090"]]))}}}))}();
