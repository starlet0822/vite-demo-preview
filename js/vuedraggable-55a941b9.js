var t=Object.defineProperty,e=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,n,r)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,a=(t,e)=>{for(var n in e||(e={}))o.call(e,n)&&s(t,n,e[n]);if(r)for(var n of r(e))i.call(e,n)&&s(t,n,e[n]);return t},l=(t,r)=>e(t,n(r));import{S as d}from"./sortablejs-349d26f5.js";import{O as c,bc as u,l as m,m as h,n as p}from"./@vue-52de1c01.js";function g(t){null!==t.parentElement&&t.parentElement.removeChild(t)}function f(t,e,n){const r=0===n?t.children[0]:t.children[n-1].nextSibling;t.insertBefore(e,r)}const b="undefined"!=typeof window?window.console:global.console;const x=/-(\w)/g,y=function(t){const e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}((t=>t.replace(x,((t,e)=>e.toUpperCase())))),v=["Start","Add","Remove","Update","End"],_=["Choose","Unchoose","Sort","Filter","Clone"],I=["Move"],w=[I,v,_].flatMap((t=>t)).map((t=>`on${t}`)),C={manage:I,manageAndEmit:v,emit:_};const D=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];function L(t){return["id","class","role","style"].includes(t)||t.startsWith("data-")||t.startsWith("aria-")||t.startsWith("on")}function $(t){return t.reduce(((t,[e,n])=>(t[e]=n,t)),{})}function E(t){return Object.entries(t).filter((([t,e])=>!L(t))).map((([t,e])=>[y(t),e])).filter((([t,e])=>{return n=t,!(-1!==w.indexOf(n));var n}))}const O=({el:t})=>t,V=t=>t.__draggable_context;class j{constructor({nodes:{header:t,default:e,footer:n},root:r,realList:o}){this.defaultNodes=e,this.children=[...t,...e,...n],this.externalComponent=r.externalComponent,this.rootTransition=r.transition,this.tag=r.tag,this.realList=o}get _isRootComponent(){return this.externalComponent||this.rootTransition}render(t,e){const{tag:n,children:r,_isRootComponent:o}=this;return t(n,e,o?{default:()=>r}:r)}updated(){const{defaultNodes:t,realList:e}=this;t.forEach(((t,n)=>{var r,o;r=O(t),o={element:e[n],index:n},r.__draggable_context=o}))}getUnderlyingVm(t){return V(t)}getVmIndexFromDomIndex(t,e){const{defaultNodes:n}=this,{length:r}=n,o=e.children,i=o.item(t);if(null===i)return r;const s=V(i);if(s)return s.index;if(0===r)return 0;const a=O(n[0]);return t<[...o].findIndex((t=>t===a))?0:r}}function F(t){const e=["transition-group","TransitionGroup"].includes(t);const n=!function(t){return D.includes(t)}(t)&&!e;return{transition:e,externalComponent:n,tag:n?c(t):e?u:t}}function S({$slots:t,tag:e,realList:n,getKey:r}){const o=function({$slots:t,realList:e,getKey:n}){const r=e||[],[o,i]=["header","footer"].map((e=>function(t,e){const n=t[e];return n?n():[]}(t,e))),{item:s}=t;if(!s)throw new Error("draggable element must have an item slot");const d=r.flatMap(((t,e)=>s({element:t,index:e}).map((e=>(e.key=n(t),e.props=l(a({},e.props||{}),{"data-draggable":!0}),e)))));if(d.length!==r.length)throw new Error("Item slot must have only one child");return{header:o,footer:i,default:d}}({$slots:t,realList:n,getKey:r}),i=F(e);return new j({nodes:o,root:i,realList:n})}function U(t,e){p((()=>this.$emit(t.toLowerCase(),e)))}function P(t){return(e,n)=>{if(null!==this.realList)return this[`onDrag${t}`](e,n)}}function k(t){const e=P.call(this,t);return(n,r)=>{e.call(this,n,r),U.call(this,t,n)}}let A=null;const K=m({name:"draggable",inheritAttrs:!1,props:{list:{type:Array,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},itemKey:{type:[String,Function],required:!0},clone:{type:Function,default:t=>t},tag:{type:String,default:"div"},move:{type:Function,default:null},componentData:{type:Object,required:!1,default:null}},emits:["update:modelValue","change",...[...C.manageAndEmit,...C.emit].map((t=>t.toLowerCase()))],data:()=>({error:!1}),render(){try{this.error=!1;const{$slots:t,$attrs:e,tag:n,componentData:r,realList:o,getKey:i}=this,s=S({$slots:t,tag:n,realList:o,getKey:i});this.componentStructure=s;const l=function({$attrs:t,componentData:e={}}){const n=$(Object.entries(t).filter((([t,e])=>L(t))));return a(a({},n),e)}({$attrs:e,componentData:r});return s.render(h,l)}catch(t){return this.error=!0,h("pre",{style:{color:"red"}},t.stack)}},created(){null!==this.list&&null!==this.modelValue&&b.error("modelValue and list props are mutually exclusive! Please set one or another.")},mounted(){if(this.error)return;const{$attrs:t,$el:e,componentStructure:n}=this;n.updated();const r=function({$attrs:t,callBackBuilder:e}){const n=$(E(t));Object.entries(e).forEach((([t,e])=>{C[t].forEach((t=>{n[`on${t}`]=e(t)}))}));const r=`[data-draggable]${n.draggable||""}`;return l(a({},n),{draggable:r})}({$attrs:t,callBackBuilder:{manageAndEmit:t=>k.call(this,t),emit:t=>U.bind(this,t),manage:t=>P.call(this,t)}}),o=1===e.nodeType?e:e.parentElement;this._sortable=new d(o,r),this.targetDomElement=o,o.__draggable_component__=this},updated(){this.componentStructure.updated()},beforeUnmount(){void 0!==this._sortable&&this._sortable.destroy()},computed:{realList(){const{list:t}=this;return t||this.modelValue},getKey(){const{itemKey:t}=this;return"function"==typeof t?t:e=>e[t]}},watch:{$attrs:{handler(t){const{_sortable:e}=this;e&&E(t).forEach((([t,n])=>{e.option(t,n)}))},deep:!0}},methods:{getUnderlyingVm(t){return this.componentStructure.getUnderlyingVm(t)||null},getUnderlyingPotencialDraggableComponent:t=>t.__draggable_component__,emitChanges(t){p((()=>this.$emit("change",t)))},alterList(t){if(this.list)return void t(this.list);const e=[...this.modelValue];t(e),this.$emit("update:modelValue",e)},spliceList(){this.alterList((t=>t.splice(...arguments)))},updatePosition(t,e){this.alterList((n=>n.splice(e,0,n.splice(t,1)[0])))},getRelatedContextFromMoveEvent({to:t,related:e}){const n=this.getUnderlyingPotencialDraggableComponent(t);if(!n)return{component:n};const r=n.realList,o={list:r,component:n};if(t!==e&&r){const t=n.getUnderlyingVm(e)||{};return a(a({},t),o)}return o},getVmIndexFromDomIndex(t){return this.componentStructure.getVmIndexFromDomIndex(t,this.targetDomElement)},onDragStart(t){this.context=this.getUnderlyingVm(t.item),t.item._underlying_vm_=this.clone(this.context.element),A=t.item},onDragAdd(t){const e=t.item._underlying_vm_;if(void 0===e)return;g(t.item);const n=this.getVmIndexFromDomIndex(t.newIndex);this.spliceList(n,0,e);const r={element:e,newIndex:n};this.emitChanges({added:r})},onDragRemove(t){if(f(this.$el,t.item,t.oldIndex),"clone"===t.pullMode)return void g(t.clone);const{index:e,element:n}=this.context;this.spliceList(e,1);const r={element:n,oldIndex:e};this.emitChanges({removed:r})},onDragUpdate(t){g(t.item),f(t.from,t.item,t.oldIndex);const e=this.context.index,n=this.getVmIndexFromDomIndex(t.newIndex);this.updatePosition(e,n);const r={element:this.context.element,oldIndex:e,newIndex:n};this.emitChanges({moved:r})},computeFutureIndex(t,e){if(!t.element)return 0;const n=[...e.to.children].filter((t=>"none"!==t.style.display)),r=n.indexOf(e.related),o=t.component.getVmIndexFromDomIndex(r);return-1!==n.indexOf(A)||!e.willInsertAfter?o:o+1},onDragMove(t,e){const{move:n,realList:r}=this;if(!n||!r)return!0;const o=this.getRelatedContextFromMoveEvent(t),i=this.computeFutureIndex(o,t),s=l(a({},this.context),{futureIndex:i});return n(l(a({},t),{relatedContext:o,draggedContext:s}),e)},onDragEnd(){A=null}}});export{K as d};
