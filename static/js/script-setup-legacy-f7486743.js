System.register(["./index-legacy-aad94bd1.js","./index-legacy-96a09d0f.js","./index-legacy-509baf44.js","./plugin-vue_export-helper-legacy-c6aa7c23.js","./index-legacy-8010c605.js","./use-route-legacy-6177f8c7.js","./use-id-legacy-19958034.js"],(function(e,t){"use strict";var n,a,u,l,r,o,c,i,s,p,d,f,v,g,m,y,x,h,j,V,_,k,b,C,w,S;return{setters:[function(e){n=e.d,a=e.U,u=e.r,l=e.c,r=e.a,o=e.V,c=e.W,i=e.t,s=e.k,p=e.p,d=e.u,f=e.J,v=e.x,g=e.y,m=e.q,y=e.s,x=e.X,h=e.Y,j=e.f,V=e.I,_=e.Z,k=e._,b=e.Q},null,function(e){C=e.F},function(e){w=e._},function(e){S=e.B},null,null],execute:function(){var t=document.createElement("style");t.textContent='@charset "UTF-8";[data-v-688e2a0a]:export{themeColor:var(--van-blue)}.script-setup-wrapper[data-v-688e2a0a]{background:#f4f4f4}.script-setup-wrapper p[data-v-688e2a0a]{color:var(--a6658c3e)}\n',document.head.appendChild(t);var U={class:"script-setup-wrapper"},F=n({name:"ScriptSetupDemo"});e("default",w(Object.assign(F,{props:{modelValue:{type:String,default:"输入框内容"},title:{type:String,default:"标题"}},emits:["updateName"],setup:function(e,t){var n=t.emit,w=e;_((function(e){return{a6658c3e:d(E).color}}));var F=a(),I=F.x,T=F.y;k();var B=b(),E=u({name:"张三",age:18,sex:1,inputVal:l((function(){return w.modelValue})),color:"red"}),J=function(){n("updateName","Tom"),console.log("router",B)},M=r(!1),N=r(null),O=function(){M.value=!M.value};o(N,(function(e){console.log(e,"点击的是目标元素的外部"),M.value=!1}));var q=r(0),z=c(q,{duration:1e3,transition:x.easeOutExpo});q.value=5e3;var D=h();console.log("vue实例",D);var Q=i(E),R=Q.name,W=Q.age,X=Q.inputVal;return function(t,n){var a=C,u=S;return j(),s("div",U,[p(a,{modelValue:d(X),"onUpdate:modelValue":n[0]||(n[0]=function(e){return f(X)?X.value=e:null})},null,8,["modelValue"]),v("h2",null,g(e.title),1),v("p",null,"我是"+g(d(R))+",今年"+g(d(W)),1),p(u,{type:"success",onClick:J},{default:m((function(){return[V("子传父")]})),_:1}),v("h3",null,"鼠标坐标Mouse: "+g(d(I))+" x "+g(d(T)),1),d(M)?(j(),s("div",{key:0,ref_key:"popupBoxRef",ref:N,class:"popup-box zy-border-1",style:{width:"80vw",height:"50vh","background-color":"#07c160",color:"#f4f4f4"}}," 弹窗内容 ",512)):y("",!0),p(u,{onClick:O},{default:m((function(){return[V("显示弹窗")]})),_:1}),v("h4",null,"数字改变动画："+g(Math.round(+d(z))),1)])}}}),[["__scopeId","data-v-688e2a0a"]]))}}}));
