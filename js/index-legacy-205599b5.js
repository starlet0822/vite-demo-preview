!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";[data-v-0ffc2918]:export{themeColor:var(--van-blue)}\n',document.head.appendChild(e),System.register(["./vant-legacy-938866a3.js","./vue-router-legacy-afaed188.js","./index-legacy-c6bf7e32.js","./@vue-legacy-703c3bcb.js"],(function(e){"use strict";var t,a,n,r,i,l,o,c,f,u,s,d,v,p,y,b;return{setters:[function(e){t=e.N},function(e){a=e.u,n=e.a},function(e){r=e._},function(e){i=e.l,l=e.a,o=e.c,c=e.t,f=e.s,u=e.v,s=e.ay,d=e.N,v=e.E,p=e.A,y=e.y,b=e.u}],execute:function(){var m=i({name:"NavBar"}),x=Object.assign(m,{props:{title:{type:String,default:""},titleClass:{type:String,default:""},fixed:{type:Boolean,default:!0},leftArrow:{type:Boolean,default:!0},appBack:Boolean,disableBack:Boolean},emits:["back"],setup:function(e,r){var i=r.emit,m=e,x=a(),g=n(),B=l({navTitle:o((function(){var e=g.meta.title;return""!==m.title?m.title:e}))}),k=c(B).navTitle,h=function(){i("back"),m.disableBack||x.back()};return function(a,n){var r=t;return f(),u(r,y({title:b(k),"left-text":"",fixed:e.fixed,"safe-area-inset-top":e.fixed,placeholder:e.fixed,"left-arrow":e.leftArrow},a.$attrs,{onClickLeft:h}),s({_:2},[d(a.$slots,(function(e,t){return{name:t,fn:v((function(){return[p(a.$slots,t,{},void 0,!0)]}))}}))]),1040,["title","fixed","safe-area-inset-top","placeholder","left-arrow"])}}});e("_",r(x,[["__scopeId","data-v-0ffc2918"]]))}}}))}();
