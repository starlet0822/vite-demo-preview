!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";h3[data-v-466e614e]{margin:1.06667rem 0 0}ul[data-v-466e614e]{list-style-type:none;padding:0}li[data-v-466e614e]{display:inline-block;margin:0 .26667rem}a[data-v-466e614e]{color:#42b983}:export{themeColor:#1c71fb}.app-container{width:100vw;min-height:100vh}.app-container .layout-content{width:100%}\n',document.head.appendChild(e),System.register(["./vant-legacy-978d1eff.js","./plugin-vue_export-helper-legacy-37b3dbd0.js","./@vue-legacy-39326993.js","./vue-router-legacy-cae879a2.js","./vuex-legacy-125cfe16.js","./@vant-legacy-fcf8e23d.js"],(function(e){"use strict";var t,n,a,u,o,i,r,c,l,d,f,s,v,m,p,y,g,b,h,x,j,_;return{setters:[function(e){t=e.T,n=e.b},function(e){a=e._},function(e){u=e.m,o=e.c,i=e.aI,r=e.ai,c=e.b7,l=e.ak,d=e.F,f=e.aN,s=e.A,v=e.a5,m=e.u,p=e.f,y=e.a,g=e._,b=e.l,h=e.aP,x=e.aQ},function(e){j=e.u},function(e){_=e.u},function(){}],execute:function(){var A=u({name:"TabBar"}),C=Object.assign(A,{props:{defaultActive:{type:Number,default:0},fixed:{type:Boolean,default:!0},data:{type:Array,default:function(){return[]}}},emits:["change"],setup:function(e,a){var u=a.emit,y=e,g=o((function(){return y.defaultActive})),b=function(e){u("change",e)};return function(a,u){var o=t,y=n;return i(),r(y,{modelValue:m(g),"onUpdate:modelValue":u[0]||(u[0]=function(e){return p(g)?g.value=e:null}),fixed:e.fixed,route:"",onChange:b},{default:c((function(){return[(i(!0),l(d,null,f(e.data,(function(e,t){var n;return i(),r(o,{id:"tabbar-item-"+(null===(n=e.to)||void 0===n?void 0:n.name),key:t,class:"st-border-top-1",icon:e.icon,to:e.to},{default:c((function(){return[s(v(e.title)+" ",1)]})),_:2},1032,["id","icon","to"])})),128))]})),_:1},8,["modelValue","fixed"])}}}),k=a(C,[["__scopeId","data-v-466e614e"]]),w={class:"app-container"},T=u({name:"Layout"});e("default",Object.assign(T,{setup:function(e){j();var t=_(),n=y({transitionName:"van-fade",include:o((function(){return t.getters.include})),exclude:o((function(){return t.getters.exclude})),tabbars:[{title:"首页",to:{name:"Home"},icon:"home-o"},{title:"案例",to:{name:"Demo"},icon:"apps-o"},{title:"关于我",to:{name:"About"},icon:"user-o"}]}),a=function(e){},u=g(n),d=u.tabbars;u.include,u.exclude;return function(e,t){var n=h("router-view"),u=k;return i(),l("div",w,[b(n,{class:"layout-content"},{default:c((function(e){var t=e.Component,n=e.route;return[(i(),r(x(t),{key:n.meta.usePathKey?n.path:void 0}))]})),_:1}),b(u,{data:m(d),fixed:"",placeholder:"",onChange:a},null,8,["data"])])}}}))}}}))}();