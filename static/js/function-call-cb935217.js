import{a1 as J,d as Q,cq as H,a3 as F,r as ee,cv as ce,a as R,c as p,w as X,cd as re,p as r,cw as k,aw as y,cm as me,aq as ve,cx as oe,cy as j,cz as ue,ci as ge,o as de,cA as fe,cB as he,B as we,m as te,c5 as Pe,$ as xe,av as M,c9 as Se,at as E,a4 as U,as as G,cC as ye,P as Ie,ct as Ce,ca as Te,a2 as be,cD as Ye,cE as Xe}from"./index-4a1a9842.js";import{S as Ze,a as Re}from"./index-2264b9e7.js";import{I as ze}from"./index-b5bc300a.js";const K=o=>Math.sqrt((o[0].clientX-o[1].clientX)**2+(o[0].clientY-o[1].clientY)**2),De=o=>({x:(o[0].clientX+o[1].clientX)/2,y:(o[0].clientY+o[1].clientY)/2}),B=J("image-preview")[1],V=2.6;var He=Q({props:{src:String,show:Boolean,active:Number,minZoom:H(F),maxZoom:H(F),rootWidth:H(Number),rootHeight:H(Number),disableZoom:Boolean},emits:["scale","close","longPress"],setup(o,{emit:c,slots:m}){const e=ee({scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,initializing:!1,imageRatio:0}),s=ce(),I=R(),z=R(),w=R(!1),g=R(!1);let P=0;const $=p(()=>{const{scale:t,moveX:a,moveY:i,moving:l,zooming:u,initializing:b}=e,D={transitionDuration:u||l||b?"0s":".3s"};return(t!==1||g.value)&&(D.transform=`matrix(${t}, 0, 0, ${t}, ${a}, ${i})`),D}),v=p(()=>{if(e.imageRatio){const{rootWidth:t,rootHeight:a}=o,i=w.value?a/e.imageRatio:t;return Math.max(0,(e.scale*i-t)/2)}return 0}),f=p(()=>{if(e.imageRatio){const{rootWidth:t,rootHeight:a}=o,i=w.value?a:t*e.imageRatio;return Math.max(0,(e.scale*i-a)/2)}return 0}),C=(t,a)=>{var i;if(t=y(t,+o.minZoom,+o.maxZoom+1),t!==e.scale){const l=t/e.scale;if(e.scale=t,a){const u=oe((i=I.value)==null?void 0:i.$el),b={x:u.width*.5,y:u.height*.5},D=e.moveX-(a.x-u.left-b.x)*(l-1),le=e.moveY-(a.y-u.top-b.y)*(l-1);e.moveX=y(D,-v.value,v.value),e.moveY=y(le,-f.value,f.value)}else e.moveX=0,e.moveY=g.value?P:0;c("scale",{scale:t,index:o.active})}},T=()=>{C(1)},N=()=>{const t=e.scale>1?1:2;C(t,t===2||g.value?{x:s.startX.value,y:s.startY.value}:void 0)};let x,S,n,d,h,_,Z,L,A=!1;const ae=t=>{const{touches:a}=t;if(x=a.length,x===2&&o.disableZoom)return;const{offsetX:i}=s;s.start(t),S=e.moveX,n=e.moveY,L=Date.now(),A=!1,e.moving=x===1&&(e.scale!==1||g.value),e.zooming=x===2&&!i.value,e.zooming&&(d=e.scale,h=K(a))},se=t=>{const{touches:a}=t;if(s.move(t),e.moving){const{deltaX:i,deltaY:l}=s,u=i.value+S,b=l.value+n;if((u>v.value||u<-v.value)&&!A&&s.isHorizontal()){e.moving=!1;return}A=!0,k(t,!0),e.moveX=y(u,-v.value,v.value),e.moveY=y(b,-f.value,f.value)}if(e.zooming&&(k(t,!0),a.length===2)){const i=K(a),l=d*i/h;_=De(a),C(l,_)}},ie=()=>{if(x>1)return;const{offsetX:t,offsetY:a}=s,i=Date.now()-L,l=250;t.value<j&&a.value<j&&(i<l?Z?(clearTimeout(Z),Z=null,N()):Z=setTimeout(()=>{c("close"),Z=null},l):i>ue&&c("longPress"))},O=t=>{let a=!1;if((e.moving||e.zooming)&&(a=!0,e.moving&&S===e.moveX&&n===e.moveY&&(a=!1),!t.touches.length)){e.zooming&&(e.moveX=y(e.moveX,-v.value,v.value),e.moveY=y(e.moveY,-f.value,f.value),e.zooming=!1),e.moving=!1,S=0,n=0,d=1,e.scale<1&&T();const i=+o.maxZoom;e.scale>i&&C(i,_)}k(t,a),ie(),s.reset()},q=()=>{const{rootWidth:t,rootHeight:a}=o,i=a/t,{imageRatio:l}=e;w.value=e.imageRatio>i&&l<V,g.value=e.imageRatio>i&&l>=V,g.value&&(P=(l*t-a)/2,e.moveY=P,e.initializing=!0,me(()=>{e.initializing=!1})),T()},ne=t=>{const{naturalWidth:a,naturalHeight:i}=t.target;e.imageRatio=i/a,q()};return X(()=>o.active,T),X(()=>o.show,t=>{t||T()}),X(()=>[o.rootWidth,o.rootHeight],q),re("touchmove",se,{target:p(()=>{var t;return(t=z.value)==null?void 0:t.$el})}),()=>{const t={loading:()=>r(ve,{type:"spinner"},null)};return r(Ze,{ref:z,class:B("swipe-item"),onTouchstartPassive:ae,onTouchend:O,onTouchcancel:O},{default:()=>[m.image?r("div",{class:B("image-wrap")},[m.image({src:o.src})]):r(ze,{ref:I,src:o.src,fit:"contain",class:B("image",{vertical:w.value}),style:$.value,onLoad:ne},t)]})}}});const[pe,Y]=J("image-preview"),Me=["show","teleport","transition","overlayStyle","closeOnPopstate"],Ee={show:Boolean,loop:M,images:Se(),minZoom:E(1/3),maxZoom:E(3),overlay:M,closeable:Boolean,showIndex:M,className:U,closeIcon:G("clear"),transition:String,beforeClose:Function,overlayClass:U,overlayStyle:Object,swipeDuration:E(300),startPosition:E(0),showIndicators:Boolean,closeOnPopstate:M,closeIconPosition:G("top-right"),teleport:[String,Object]};var We=Q({name:pe,props:Ee,emits:["scale","close","closed","change","longPress","update:show"],setup(o,{emit:c,slots:m}){const e=R(),s=ee({active:0,rootWidth:0,rootHeight:0,disableZoom:!1}),I=()=>{if(e.value){const n=oe(e.value.$el);s.rootWidth=n.width,s.rootHeight=n.height,e.value.resize()}},z=n=>c("scale",n),w=n=>c("update:show",n),g=()=>{Ce(o.beforeClose,{args:[s.active],done:()=>w(!1)})},P=n=>{n!==s.active&&(s.active=n,c("change",n))},$=()=>{if(o.showIndex)return r("div",{class:Y("index")},[m.index?m.index({index:s.active}):`${s.active+1} / ${o.images.length}`])},v=()=>{if(m.cover)return r("div",{class:Y("cover")},[m.cover()])},f=()=>{s.disableZoom=!0},C=()=>{s.disableZoom=!1},T=()=>r(Re,{ref:e,lazyRender:!0,loop:o.loop,class:Y("swipe"),duration:o.swipeDuration,initialSwipe:o.startPosition,showIndicators:o.showIndicators,indicatorColor:"white",onChange:P,onDragEnd:C,onDragStart:f},{default:()=>[o.images.map((n,d)=>r(He,{src:n,show:o.show,active:s.active,maxZoom:o.maxZoom,minZoom:o.minZoom,rootWidth:s.rootWidth,rootHeight:s.rootHeight,disableZoom:s.disableZoom,onScale:z,onClose:g,onLongPress:()=>c("longPress",{index:d})},{image:m.image}))]}),N=()=>{if(o.closeable)return r(Ie,{role:"button",name:o.closeIcon,class:[Y("close-icon",o.closeIconPosition),ye],onClick:g},null)},x=()=>c("closed"),S=(n,d)=>{var h;return(h=e.value)==null?void 0:h.swipeTo(n,d)};return ge({swipeTo:S}),de(I),X([fe,he],I),X(()=>o.startPosition,n=>P(+n)),X(()=>o.show,n=>{const{images:d,startPosition:h}=o;n?(P(+h),we(()=>{I(),S(+h,{immediate:!0})})):c("close",{index:s.active,url:d[s.active]})}),()=>r(xe,te({class:[Y(),o.className],overlayClass:[Y("overlay"),o.overlayClass],onClosed:x,"onUpdate:show":w},Pe(o,Me)),{default:()=>[N(),T(),$(),v()]})}});let W;const $e={loop:!0,images:[],maxZoom:3,minZoom:1/3,onScale:void 0,onClose:void 0,onChange:void 0,teleport:"body",className:"",showIndex:!0,closeable:!1,closeIcon:"clear",transition:void 0,beforeClose:void 0,overlayStyle:void 0,overlayClass:void 0,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeIconPosition:"top-right"};function Ne(){({instance:W}=Ye({setup(){const{state:o,toggle:c}=Xe(),m=()=>{o.images=[]};return()=>r(We,te(o,{onClosed:m,"onUpdate:show":c}),null)}}))}const Be=(o,c=0)=>{if(Te)return W||Ne(),o=Array.isArray(o)?{images:o,startPosition:c}:o,W.open(be({},$e,o)),W};export{Be as s};
