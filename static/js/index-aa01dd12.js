import{a1 as I,d as _,a as C,c3 as Z,cW as W,c as M,cs as J,ci as z,c8 as Q,cd as L,p as i,av as $,a3 as U,at as D,as as Y,cx as B,cB as ee,cC as te,r as F,a5 as ne,aH as oe,c9 as ae,a4 as N,cN as se,v as le,bW as ie,$ as re,m as ce,P as ue,a7 as V,w as A,bs as de,o as fe,B as K,cY as he,aq as j,cv as ve,cw as ge,cP as me}from"./index-4a1a9842.js";import{C as pe}from"./index-59b7ecd9.js";import{u as xe}from"./use-id-c0fc632f.js";import{u as Te}from"./index-cb74dae9.js";const[q,E]=I("dropdown-menu"),we={overlay:$,zIndex:U,duration:D(.2),direction:Y("down"),activeColor:String,closeOnClickOutside:$,closeOnClickOverlay:$},G=Symbol(q);var Pe=_({name:q,props:we,setup(e,{slots:h}){const l=xe(),c=C(),a=C(),d=C(0),{children:g,linkChildren:o}=Z(G),f=W(c),w=M(()=>g.some(n=>n.state.showWrapper)),P=M(()=>{if(w.value&&J(e.zIndex))return{zIndex:+e.zIndex+1}}),b=()=>{g.forEach(n=>{n.toggle(!1)})},m=()=>{e.closeOnClickOutside&&b()},r=()=>{if(a.value){const n=B(a);e.direction==="down"?d.value=n.bottom:d.value=ee.value-n.top}},x=()=>{w.value&&r()},p=n=>{g.forEach((u,v)=>{v===n?u.toggle():u.state.showPopup&&u.toggle(!1,{immediate:!0})})},T=(n,u)=>{const{showPopup:v}=n.state,{disabled:t,titleClass:s}=n;return i("div",{id:`${l}-${u}`,role:"button",tabindex:t?void 0:0,class:[E("item",{disabled:t}),{[te]:!t}],onClick:()=>{t||p(u)}},[i("span",{class:[E("title",{down:v===(e.direction==="down"),active:v}),s],style:{color:v?e.activeColor:""}},[i("div",{class:"van-ellipsis"},[n.renderTitle()])])])};return z({close:b}),o({id:l,props:e,offset:d,updateOffset:r}),Q(c,m),L("scroll",x,{target:f,passive:!0}),()=>{var n;return i("div",{ref:c,class:E()},[i("div",{ref:a,style:P.value,class:E("bar",{opened:w.value})},[g.map(T)]),(n=h.default)==null?void 0:n.call(h)])}}});const[be,H]=I("dropdown-item"),Ce={title:String,options:ae(),disabled:Boolean,teleport:[String,Object],lazyRender:$,modelValue:N,titleClass:N};var Se=_({name:be,inheritAttrs:!1,props:Ce,emits:["open","opened","close","closed","change","update:modelValue"],setup(e,{emit:h,slots:l,attrs:c}){const a=F({showPopup:!1,transition:!0,showWrapper:!1}),{parent:d,index:g}=ne(G);if(!d)return;const o=n=>()=>h(n),f=o("open"),w=o("close"),P=o("opened"),b=()=>{a.showWrapper=!1,h("closed")},m=n=>{e.teleport&&n.stopPropagation()},r=(n=!a.showPopup,u={})=>{n!==a.showPopup&&(a.showPopup=n,a.transition=!u.immediate,n&&(d.updateOffset(),a.showWrapper=!0))},x=()=>{if(l.title)return l.title();if(e.title)return e.title;const n=e.options.find(u=>u.value===e.modelValue);return n?n.text:""},p=n=>{const{activeColor:u}=d.props,v=n.value===e.modelValue,t=()=>{a.showPopup=!1,n.value!==e.modelValue&&(h("update:modelValue",n.value),h("change",n.value))},s=()=>{if(v)return i(ue,{class:H("icon"),color:u,name:"success"},null)};return i(pe,{role:"menuitem",key:n.value,icon:n.icon,title:n.text,class:H("option",{active:v}),style:{color:v?u:""},tabindex:v?0:-1,clickable:!0,onClick:t},{value:s})},T=()=>{const{offset:n}=d,{zIndex:u,overlay:v,duration:t,direction:s,closeOnClickOverlay:S}=d.props,R=se(u);return s==="down"?R.top=`${n.value}px`:R.bottom=`${n.value}px`,le(i("div",ce({style:R,class:H([s]),onClick:m},c),[i(re,{show:a.showPopup,"onUpdate:show":O=>a.showPopup=O,role:"menu",class:H("content"),overlay:v,position:s==="down"?"top":"bottom",duration:a.transition?t:0,lazyRender:e.lazyRender,overlayStyle:{position:"absolute"},"aria-labelledby":`${d.id}-${g.value}`,closeOnClickOverlay:S,onOpen:f,onClose:w,onOpened:P,onClosed:b},{default:()=>{var O;return[e.options.map(p),(O=l.default)==null?void 0:O.call(l)]}})]),[[ie,a.showWrapper]])};return z({state:a,toggle:r,renderTitle:x}),()=>e.teleport?i(oe,{to:e.teleport},{default:()=>[T()]}):T()}});const We=V(Se),ze=V(Pe),[ke,k,ye]=I("list"),$e={error:Boolean,offset:D(300),loading:Boolean,disabled:Boolean,finished:Boolean,errorText:String,direction:Y("down"),loadingText:String,finishedText:String,immediateCheck:$};var De=_({name:ke,props:$e,emits:["load","update:error","update:loading"],setup(e,{emit:h,slots:l}){const c=C(e.loading),a=C(),d=C(),g=Te(),o=W(a),f=()=>{K(()=>{if(c.value||e.finished||e.disabled||e.error||(g==null?void 0:g.value)===!1)return;const{direction:r}=e,x=+e.offset,p=B(o);if(!p.height||he(a))return;let T=!1;const n=B(d);r==="up"?T=p.top-n.top<=x:T=n.bottom-p.bottom<=x,T&&(c.value=!0,h("update:loading",!0),h("load"))})},w=()=>{if(e.finished){const r=l.finished?l.finished():e.finishedText;if(r)return i("div",{class:k("finished-text")},[r])}},P=()=>{h("update:error",!1),f()},b=()=>{if(e.error){const r=l.error?l.error():e.errorText;if(r)return i("div",{role:"button",class:k("error-text"),tabindex:0,onClick:P},[r])}},m=()=>{if(c.value&&!e.finished&&!e.disabled)return i("div",{class:k("loading")},[l.loading?l.loading():i(j,{class:k("loading-icon")},{default:()=>[e.loadingText||ye("loading")]})])};return A(()=>[e.loading,e.finished,e.error],f),g&&A(g,r=>{r&&f()}),de(()=>{c.value=e.loading}),fe(()=>{e.immediateCheck&&f()}),z({check:f}),L("scroll",f,{target:o,passive:!0}),()=>{var r;const x=(r=l.default)==null?void 0:r.call(l),p=i("div",{ref:d,class:k("placeholder")},null);return i("div",{ref:a,role:"feed",class:k(),"aria-busy":c.value},[e.direction==="down"?x:p,m(),w(),b(),e.direction==="up"?x:p])}}});const Le=V(De),[Oe,y,Ee]=I("pull-refresh"),X=50,He=["pulling","loosing","success"],Ie={disabled:Boolean,modelValue:Boolean,headHeight:D(X),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:U,successDuration:D(500),animationDuration:D(300)};var _e=_({name:Oe,props:Ie,emits:["change","refresh","update:modelValue"],setup(e,{emit:h,slots:l}){let c;const a=C(),d=C(),g=W(a),o=F({status:"normal",distance:0,duration:0}),f=ve(),w=()=>{if(e.headHeight!==X)return{height:`${e.headHeight}px`}},P=()=>o.status!=="loading"&&o.status!=="success"&&!e.disabled,b=t=>{const s=+(e.pullDistance||e.headHeight);return t>s&&(t<s*2?t=s+(t-s)/2:t=s*1.5+(t-s*2)/4),Math.round(t)},m=(t,s)=>{const S=+(e.pullDistance||e.headHeight);o.distance=t,s?o.status="loading":t===0?o.status="normal":t<S?o.status="pulling":o.status="loosing",h("change",{status:o.status,distance:t})},r=()=>{const{status:t}=o;return t==="normal"?"":e[`${t}Text`]||Ee(t)},x=()=>{const{status:t,distance:s}=o;if(l[t])return l[t]({distance:s});const S=[];return He.includes(t)&&S.push(i("div",{class:y("text")},[r()])),t==="loading"&&S.push(i(j,{class:y("loading")},{default:r})),S},p=()=>{o.status="success",setTimeout(()=>{m(0)},+e.successDuration)},T=t=>{c=me(g.value)===0,c&&(o.duration=0,f.start(t))},n=t=>{P()&&T(t)},u=t=>{if(P()){c||T(t);const{deltaY:s}=f;f.move(t),c&&s.value>=0&&f.isVertical()&&(ge(t),m(b(s.value)))}},v=()=>{c&&f.deltaY.value&&P()&&(o.duration=+e.animationDuration,o.status==="loosing"?(m(+e.headHeight,!0),h("update:modelValue",!0),K(()=>h("refresh"))):m(0))};return A(()=>e.modelValue,t=>{o.duration=+e.animationDuration,t?m(+e.headHeight,!0):l.success||e.successText?p():m(0,!1)}),L("touchmove",u,{target:d}),()=>{var t;const s={transitionDuration:`${o.duration}ms`,transform:o.distance?`translate3d(0,${o.distance}px, 0)`:""};return i("div",{ref:a,class:y()},[i("div",{ref:d,class:y("track"),style:s,onTouchstartPassive:n,onTouchend:v,onTouchcancel:v},[i("div",{class:y("head"),style:w()},[x()]),(t=l.default)==null?void 0:t.call(l)])])}}});const Me=V(_e);export{We as D,Le as L,Me as P,ze as a};
