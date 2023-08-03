import{_ as ue}from"./index-f907a4ea.js";import{a1 as de,d as X,a as b,cy as me,c as Y,ci as _e,c6 as fe,cf as ge,p as c,av as j,a3 as Z,cI as G,cA as ee,cz as he,cJ as ve,cK as be,cu as pe,ay as ke,a7 as ye,r as ae,cL as A,cM as se,cN as le,t as ie,E,f as O,k as Se,x as p,y as te,u as m,q as P,J as N,z as we,ao as Ce,g as oe,U as Ve,s as T,as as xe,v as ze,I as Be,al as Te,aa as Pe,Y as Ne,Z as ne,$ as Ae,M as $e,W as Ie,Q as ct,R as ut}from"./index-9fff26e3.js";import{A as Ee}from"./index-0ead5e09.js";import{C as Me}from"./index-93da6f84.js";import{F as Fe}from"./index-55a0202f.js";import{o as Re,S as Ue}from"./style-834940d5.js";import{_ as re}from"./plugin-vue_export-helper-c27b6911.js";import{B as Le}from"./index-82106995.js";import"./index-1a1cf474.js";import"./use-placeholder-81088ea7.js";import"./use-route-2e3571bb.js";import"./use-id-80a9ab92.js";import"./popper-f3391c26.js";const[De,$]=de("slider"),Ye={min:j(0),max:j(100),step:j(1),range:Boolean,reverse:Boolean,disabled:Boolean,readonly:Boolean,vertical:Boolean,barHeight:Z,buttonSize:Z,activeColor:String,inactiveColor:String,modelValue:{type:[Number,Array],default:0}};var je=X({name:De,props:Ye,emits:["change","dragEnd","dragStart","update:modelValue"],setup(t,{emit:k,slots:v}){let l,u,_;const y=b(),f=[b(),b()],d=b(),C=me(),g=Y(()=>Number(t.max)-Number(t.min)),M=Y(()=>{const e=t.vertical?"width":"height";return{background:t.inactiveColor,[e]:_e(t.barHeight)}}),S=e=>t.range&&Array.isArray(e),H=()=>{const{modelValue:e,min:o}=t;return S(e)?`${(e[1]-e[0])*100/g.value}%`:`${(e-Number(o))*100/g.value}%`},J=()=>{const{modelValue:e,min:o}=t;return S(e)?`${(e[0]-Number(o))*100/g.value}%`:"0%"},x=Y(()=>{const o={[t.vertical?"height":"width"]:H(),background:t.activeColor};d.value&&(o.transition="none");const a=()=>t.vertical?t.reverse?"bottom":"top":t.reverse?"right":"left";return o[a()]=J(),o}),z=e=>{const o=+t.min,a=+t.max,i=+t.step;e=ke(e,o,a);const s=Math.round((e-o)/i)*i;return be(o,s)},F=()=>{const e=t.modelValue;S(e)?_=e.map(z):_=z(e)},K=e=>{var o,a;const i=(o=e[0])!=null?o:Number(t.min),s=(a=e[1])!=null?a:Number(t.max);return i>s?[s,i]:[i,s]},w=(e,o)=>{S(e)?e=K(e).map(z):e=z(e),G(e,t.modelValue)||k("update:modelValue",e),o&&!G(e,_)&&k("change",e)},q=e=>{if(e.stopPropagation(),t.disabled||t.readonly)return;F();const{min:o,reverse:a,vertical:i,modelValue:s}=t,h=ee(y),L=()=>i?a?h.bottom-e.clientY:e.clientY-h.top:a?h.right-e.clientX:e.clientX-h.left,D=i?h.height:h.width,B=Number(o)+L()/D*g.value;if(S(s)){const[r,W]=s,ce=(r+W)/2;B<=ce?w([B,W],!0):w([r,B],!0)}else w(B,!0)},Q=e=>{t.disabled||t.readonly||(C.start(e),u=t.modelValue,F(),d.value="start")},V=e=>{if(t.disabled||t.readonly)return;d.value==="start"&&k("dragStart",e),he(e,!0),C.move(e),d.value="dragging";const o=ee(y),a=t.vertical?C.deltaY.value:C.deltaX.value,i=t.vertical?o.height:o.width;let s=a/i*g.value;if(t.reverse&&(s=-s),S(_)){const h=t.reverse?1-l:l;u[h]=_[h]+s}else u=_+s;w(u)},I=e=>{t.disabled||t.readonly||(d.value==="dragging"&&(w(u,!0),k("dragEnd",e)),d.value="")},R=e=>typeof e=="number"?$("button-wrapper",["left","right"][e]):$("button-wrapper",t.reverse?"left":"right"),U=(e,o)=>{const a=d.value==="dragging";if(typeof o=="number"){const i=v[o===0?"left-button":"right-button"];let s;if(a&&Array.isArray(u)&&(s=u[0]>u[1]?l^1:l),i)return i({value:e,dragging:a,dragIndex:s})}return v.button?v.button({value:e,dragging:a}):c("div",{class:$("button"),style:pe(t.buttonSize)},null)},n=e=>{const o=typeof e=="number"?t.modelValue[e]:t.modelValue;return c("div",{ref:f[e??0],role:"slider",class:R(e),tabindex:t.disabled?void 0:0,"aria-valuemin":t.min,"aria-valuenow":o,"aria-valuemax":t.max,"aria-disabled":t.disabled||void 0,"aria-readonly":t.readonly||void 0,"aria-orientation":t.vertical?"vertical":"horizontal",onTouchstartPassive:a=>{typeof e=="number"&&(l=e),Q(a)},onTouchend:I,onTouchcancel:I,onClick:ve},[U(o,e)])};return w(t.modelValue),fe(()=>t.modelValue),f.forEach(e=>{ge("touchmove",V,{target:e})}),()=>c("div",{ref:y,style:M.value,class:$({vertical:t.vertical,disabled:t.disabled}),onClick:q},[c("div",{class:$("bar"),style:x.value},[t.range?[n(0),n(1)]:n()])])}});const Oe=ye(je);const Xe={class:"picker-fontSize-wrapper"},He={class:"setting-box st-bg-white"},Je={class:we(["st-flex-center"])},Ke={class:"slider"},qe={class:"custom-button"},Qe=X({name:"PickerFontSize"}),We=Object.assign(Qe,{emits:["change"],setup(t,{emit:k}){const v=ae({fontSize:+A.get("fontSize")||se,fontTypes:le}),{fontSize:l,fontTypes:u}=ie(v),_=E("setSize"),y=f=>{console.log(f),A.set("fontSize",f),localStorage.setItem("fontSize",f),_(f+"px"),k("change",f)};return(f,d)=>{const C=Oe;return O(),Se("div",Xe,[p("div",He,[p("div",Je,te(m(u).get(+m(l))),1),p("div",Ke,[c(C,{modelValue:m(l),"onUpdate:modelValue":d[0]||(d[0]=g=>N(l)?l.value=g:null),max:16,min:12,step:2,onChange:y},{button:P(()=>[p("div",qe,te(m(l)),1)]),_:1},8,["modelValue"])])])])}}}),Ze=re(We,[["__scopeId","data-v-7c9c5aae"]]);const Ge={class:"content"},et={class:"st-margin-top-10"};const tt={class:"st-margin-top-10"},ot={class:"st-margin-top-10"},nt={class:"st-flex-center st-margin-top-15"},at={class:"color-wrapper"},st=X({name:"Setting"}),lt=Object.assign(st,{setup(t){Te(n=>({"78cd8b0b":m(l)}));const k=E("setThemeColor");E("themeColor");const v=b(!1),l=b(A.get("themeColor")||Ce),u=n=>{console.log("主题色",n),k(n)};Pe();const _=Ve(),y=Ne(),f=E("setTheme"),d=b(A.get("darkMode")==="dark"),C=n=>{f(n?"dark":"light"),d.value=n,A.set("darkMode",n?"dark":"light")},g=b(localStorage.getItem("showEruda")==="true"),M=async n=>{console.log("flag:",n),localStorage.setItem("showEruda",n?"true":"false"),ne.emit("showEruda",n)},S=ae({title:_.currentRoute.value.meta.title,screenLock:!1,showFontSize:!1,fontSize:A.get("fontSize")||se,fontTypes:le}),{title:H,screenLock:J,showFontSize:x,fontSize:z,fontTypes:F}=ie(S);b(!1);const K=()=>{x.value=!0},w=n=>{z.value=n},q=()=>{Ie({message:"敬请期待~"})},Q=()=>{v.value=!0},V=b(!1),I=[{name:"退出登录",color:"#ee0a24"}],R=async n=>{console.log("item:",n),V.value=!1,await U()},U=async()=>{await y.dispatch("logout"),await y.dispatch("cacheViews/clearView"),await _.replace("/login"),ne.emit("resetPageStack")};return(n,e)=>{const o=Me,a=Ae,i=Ue,s=Fe,h=Le,L=Ee,D=ue,B=$e("waves");return O(),oe(D,{class:"page-wrapper",title:"我的设置"},{default:P(()=>[p("div",Ge,[p("div",et,[c(o,{center:"","is-link":"",title:"个人资料",to:"/edit-baseinfo"}),T("",!0),c(a,{show:m(x),"onUpdate:show":e[0]||(e[0]=r=>N(x)?x.value=r:null),position:"bottom","z-index":9999,closeable:!1},{default:P(()=>[c(Ze,{onChange:w})]),_:1},8,["show"]),T("",!0),T("",!0),T("",!0),c(s,{name:"eruda",label:"eruda调试","input-align":"right",center:""},{input:P(()=>[c(i,{modelValue:m(g),"onUpdate:modelValue":e[2]||(e[2]=r=>N(g)?g.value=r:null),size:m(xe)(18),onChange:M},null,8,["modelValue","size"])]),_:1})]),p("div",tt,[c(o,{center:"",title:"导航栏设置","is-link":"",to:"/setting-tabbar"}),T("",!0)]),p("div",ot,[T("",!0)]),p("div",nt,[ze((O(),oe(h,{block:"",style:{width:"80%"},type:"primary",onClick:e[3]||(e[3]=r=>V.value=!0)},{default:P(()=>[Be(" 退出登录 ")]),_:1})),[[B]])])]),c(L,{show:m(V),"onUpdate:show":e[4]||(e[4]=r=>N(V)?V.value=r:null),actions:I,"cancel-text":"取消",description:"确定要退出当前账号？","close-on-click-overlay":!1,onSelect:R},null,8,["show"]),c(a,{show:m(v),"onUpdate:show":e[6]||(e[6]=r=>N(v)?v.value=r:null)},{default:P(()=>[p("div",at,[c(m(Re),{pureColor:m(l),"onUpdate:pureColor":e[5]||(e[5]=r=>N(l)?l.value=r:null),"is-widget":!0,"disable-alpha":"",format:"hex","picker-type":"chrome","use-type":"pure",onPureColorChange:u},null,8,["pureColor"])])]),_:1},8,["show"])]),_:1})}}}),St=re(lt,[["__scopeId","data-v-8cffb11a"]]);export{St as default};