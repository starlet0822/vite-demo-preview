!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,a){if(!e)return;if("string"==typeof e)return t(e,a);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,a)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}System.register(["./index-legacy-2ba5397d.js","./index-legacy-3c7b6cf8.js","./index-legacy-59245fe0.js","./index-legacy-815c8cb6.js","./index-legacy-4ad0f22e.js","./plugin-vue_export-helper-legacy-c6aa7c23.js","./function-call-legacy-85cf7e13.js","./use-route-legacy-2aa8ff6e.js","./use-id-legacy-b0f2ddc5.js","./index-legacy-e16bb2a1.js","./use-placeholder-legacy-9c02026a.js"],(function(t,a){"use strict";var r,i,n,s,l,o,c,d,u,f,h,p,m,y,v,g,w,b,x,_,k;return{setters:[function(e){r=e.d,i=e.c,n=e.u,s=e.f,l=e.k,o=e.x,c=e.p,d=e.F,u=e.G,f=e.y,h=e.g,p=e.X,m=e.al,y=e.am,v=e.a,g=e.J,w=e.Q},null,null,function(e){b=e.S},function(e){x=e._},function(e){_=e._},function(e){k=e.a},null,null,null,null],execute:function(){var a=document.createElement("style");a.textContent='@charset "UTF-8";[data-v-1dec3700]:export{themeColor:var(--van-blue)}.ellipsis[data-v-1dec3700]{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.history-words[data-v-1dec3700]{padding:.26667rem .42667rem}.history-words .history-header[data-v-1dec3700]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.history-words .history-header .title[data-v-1dec3700]{font-size:.42667rem;font-weight:700}.history-words .history-header[data-v-1dec3700] .actions .delete-icon{font-szie:.42667rem}.history-words .word-list[data-v-1dec3700]{margin-top:.26667rem;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.history-words .word-list .word-item[data-v-1dec3700]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:.37333rem;padding:.10667rem .21333rem;border-radius:.10667rem;overflow:hidden;background:#f8f8f8;cursor:pointer;text-align:center;max-width:2.66667rem;margin-right:.21333rem;margin-bottom:.21333rem}[data-v-37890d98]:export{themeColor:var(--van-blue)}.search-page[data-v-37890d98]{background:#fff;min-height:100vh}.search-page .search__header[data-v-37890d98]{height:1.44rem}.search-page .search__header .search__wrap[data-v-37890d98]{position:fixed;left:0;top:0;z-index:9;background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%;height:1.44rem}.search-page .search__header .search__wrap .search__left[data-v-37890d98],.search-page .search__header .search__wrap .search__right[data-v-37890d98]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 var(--van-padding-md);font-size:var(--van-font-size-md);cursor:pointer;height:100%;color:var(--van-primary-color)}.search-page .search__header .search__wrap .search__input[data-v-37890d98]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.search-page .search__header .search__wrap .search__input .van-search[data-v-37890d98]{padding:0}.search-page .search__content[data-v-37890d98]{overflow-y:scroll;-webkit-overflow-scrolling:touch}\n',document.head.appendChild(a);var j={key:0,class:"history-words"},S={class:"history-header"},C=function(e){return m("data-v-1dec3700"),e=e(),y(),e}((function(){return o("div",{class:"title"},"搜索历史",-1)})),I={class:"actions"},A={class:"word-list"},O=["onClick"],z={class:"ellipsis"},J=r({name:"HistoryWord"}),E=_(Object.assign(J,{props:{historys:{type:Array,default:function(){return[]}}},emits:["select","remove"],setup:function(e,t){var a=t.emit,r=e,m=i((function(){return r.historys})),y=function(){k({title:"温馨提示",message:"确定删除全部历史记录吗？"}).then((function(){a("remove")})).catch((function(){}))};return function(e,t){var r=p,i=x;return n(m)&&n(m).length?(s(),l("section",j,[o("div",S,[C,o("div",I,[c(r,{class:"delete-icon",name:"delete-o",onClick:y})])]),o("ul",A,[(s(!0),l(d,null,u(n(m),(function(e){return s(),l("li",{key:e,class:"word-item",onClick:function(t){return function(e){a("select",e)}(e)}},[o("div",z,f(e),1)],8,O)})),128))])])):(s(),h(i,{key:1,description:"暂无搜索历史"}))}}}),[["__scopeId","data-v-1dec3700"]]),M={class:"search-page"},N={class:"search__header"},U={class:"search__wrap van-hairline--bottom"},V={class:"search__input"},F={class:"search__content"},H=r({name:"search"});t("default",_(Object.assign(H,{setup:function(t){var a=w(),r=JSON.parse(localStorage.getItem("search_history_list"))||[],i=v(r),d=v(""),u=function(){i.value=[],localStorage.removeItem("search_history_list")},f=function(t){d.value=t;var a=[],r=localStorage.getItem("search_history_list");if(console.log("history:",r),r){var n=(a=e(JSON.parse(r))).includes(t);a.unshift(t),n&&(a=e(new Set(a)))}else a=[t];i.value=a.filter(Boolean),localStorage.setItem("search_history_list",JSON.stringify(i.value))};return function(e,t){var r=p,h=b;return s(),l("div",M,[o("div",N,[o("div",U,[o("div",{class:"search__left",onClick:t[0]||(t[0]=function(e){a.back()})},[c(r,{class:"back-icon",name:"arrow-left",color:"#1989fa"})]),o("div",V,[c(h,{modelValue:n(d),"onUpdate:modelValue":t[1]||(t[1]=function(e){return g(d)?d.value=e:null}),modelModifiers:{trim:!0},autofocus:"",shape:"round",placeholder:"请输入搜索关键词"},null,8,["modelValue"])]),o("div",{class:"search__right",onClick:t[2]||(t[2]=function(e){return t=n(d),void f(t);var t})},"搜索")])]),o("div",F,[c(E,{historys:n(i),onSelect:f,onRemove:u},null,8,["historys"])])])}}}),[["__scopeId","data-v-37890d98"]]))}}}))}();