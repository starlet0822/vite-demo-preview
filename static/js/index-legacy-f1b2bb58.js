!function(){function t(t,a){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var n,i,r,u,o=[],l=!0,c=!1;try{if(r=(a=a.call(t)).next,0===e){if(Object(a)!==a)return;l=!1}else for(;!(l=(n=r.call(a)).done)&&(o.push(n.value),o.length!==e);l=!0);}catch(v){c=!0,i=v}finally{try{if(!l&&null!=a.return&&(u=a.return(),Object(u)!==u))return}finally{if(c)throw i}}return o}}(t,a)||function(t,a){if(!t)return;if("string"==typeof t)return e(t,a);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,a)}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}System.register(["./index-legacy-b2c7c465.js"],(function(e,a){"use strict";var n,i,r,u,o,l,c,v,f,s,h,d,p,g,w,m,y,b,S,x,C,A,M,O,j,z,I,T,Y;return{setters:[function(t){n=t.a1,i=t.d,r=t.a,u=t.r,o=t.cv,l=t.c3,c=t.c,v=t.ci,f=t.w,s=t.cA,h=t.cB,d=t.d0,p=t.o,g=t.bj,w=t.cZ,m=t.bm,y=t.ar,b=t.cd,S=t.p,x=t.av,C=t.a3,A=t.at,M=t.cl,O=t.cY,j=t.B,z=t.cw,I=t.aw,T=t.a7,Y=t.a5}],execute:function(){var a=t(n("swipe"),2),B=a[0],E=a[1],X={loop:x,width:C,height:C,vertical:Boolean,autoplay:A(0),duration:A(500),touchable:x,lazyRender:Boolean,initialSwipe:A(0),indicatorColor:String,showIndicators:x,stopPropagation:x},k=Symbol(B),D=i({name:B,props:X,emits:["change","dragStart","dragEnd"],setup:function(t,e){var a,n,i=e.emit,x=e.slots,C=r(),A=r(),T=u({rect:null,width:0,height:0,offset:0,active:0,swiping:!1}),Y=!1,B=o(),X=l(k),D=X.children,P=X.linkChildren,R=c((function(){return D.length})),H=c((function(){return T[t.vertical?"height":"width"]})),U=c((function(){return t.vertical?B.deltaY.value:B.deltaX.value})),W=c((function(){return T.rect?(t.vertical?T.rect.height:T.rect.width)-H.value*R.value:0})),Z=c((function(){return H.value?Math.ceil(Math.abs(W.value)/H.value):R.value})),$=c((function(){return R.value*H.value})),q=c((function(){return(T.active+R.value)%R.value})),F=c((function(){var e=t.vertical?"vertical":"horizontal";return B.direction.value===e})),G=c((function(){var e={transitionDuration:"".concat(T.swiping?0:t.duration,"ms"),transform:"translate".concat(t.vertical?"Y":"X","(").concat(T.offset,"px)")};if(H.value){var a=t.vertical?"height":"width",n=t.vertical?"width":"height";e[a]="".concat($.value,"px"),e[n]=t[n]?"".concat(t[n],"px"):""}return e})),J=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e*H.value;t.loop||(n=Math.min(n,-W.value));var i=a-n;return t.loop||(i=I(i,W.value,0)),i},K=function(e){var a=e.pace,n=void 0===a?0:a,r=e.offset,u=void 0===r?0:r,o=e.emitChange;if(!(R.value<=1)){var l=T.active,c=function(e){var a=T.active;return e?t.loop?I(a+e,-1,R.value):I(a+e,0,Z.value):a}(n),v=J(c,u);if(t.loop){if(D[0]&&v!==W.value){var f=v<W.value;D[0].setOffset(f?$.value:0)}if(D[R.value-1]&&0!==v){var s=v>0;D[R.value-1].setOffset(s?-$.value:0)}}T.active=c,T.offset=v,o&&c!==l&&i("change",q.value)}},L=function(){T.swiping=!0,T.active<=-1?K({pace:R.value}):T.active>=R.value&&K({pace:-R.value})},N=function(){L(),B.reset(),M((function(){T.swiping=!1,K({pace:1,emitChange:!0})}))},Q=function(){return clearTimeout(a)},V=function e(){Q(),+t.autoplay>0&&R.value>1&&(a=setTimeout((function(){N(),e()}),+t.autoplay))},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:+t.initialSwipe;if(C.value){var a=function(){var a,n;if(!O(C)){var i={width:C.value.offsetWidth,height:C.value.offsetHeight};T.rect=i,T.width=+(null!=(a=t.width)?a:i.width),T.height=+(null!=(n=t.height)?n:i.height)}R.value&&-1===(e=Math.min(R.value-1,e))&&(e=R.value-1),T.active=e,T.swiping=!0,T.offset=J(e),D.forEach((function(t){t.setOffset(0)})),V()};O(C)?j().then(a):a()}},tt=function(){return _(T.active)},et=function(e){!t.touchable||e.touches.length>1||(B.start(e),Y=!1,n=Date.now(),Q(),L())},at=function(){if(t.touchable&&T.swiping){var e=Date.now()-n,a=U.value/e;if((Math.abs(a)>.25||Math.abs(U.value)>H.value/2)&&F.value){var r=t.vertical?B.offsetY.value:B.offsetX.value,u=0;u=t.loop?r>0?U.value>0?-1:1:0:-Math[U.value>0?"ceil":"floor"](U.value/H.value),K({pace:u,emitChange:!0})}else U.value&&K({pace:0});Y=!1,T.swiping=!1,i("dragEnd",{index:q.value}),V()}},nt=function(e,a){var n=a===q.value,i=n?{backgroundColor:t.indicatorColor}:void 0;return S("i",{style:i,class:E("indicator",{active:n})},null)};return v({prev:function(){L(),B.reset(),M((function(){T.swiping=!1,K({pace:-1,emitChange:!0})}))},next:N,state:T,resize:tt,swipeTo:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};L(),B.reset(),M((function(){var n;n=t.loop&&e===R.value?0===T.active?0:e:e%R.value,a.immediate?M((function(){T.swiping=!1})):T.swiping=!1,K({pace:n-T.active,emitChange:!0})}))}}),P({size:H,props:t,count:R,activeIndicator:q}),f((function(){return t.initialSwipe}),(function(t){return _(+t)})),f(R,(function(){return _(T.active)})),f((function(){return t.autoplay}),V),f([s,h,function(){return t.width},function(){return t.height}],tt),f(d(),(function(t){"visible"===t?V():Q()})),p(_),g((function(){return _(T.active)})),w((function(){return _(T.active)})),m(Q),y(Q),b("touchmove",(function(e){t.touchable&&T.swiping&&(B.move(e),F.value&&(!t.loop&&(0===T.active&&U.value>0||T.active===R.value-1&&U.value<0)||(z(e,t.stopPropagation),K({offset:U.value}),Y||(i("dragStart",{index:q.value}),Y=!0))))}),{target:A}),function(){var e;return S("div",{ref:C,class:E()},[S("div",{ref:A,style:G.value,class:E("track",{vertical:t.vertical}),onTouchstartPassive:et,onTouchend:at,onTouchcancel:at},[null==(e=x.default)?void 0:e.call(x)]),x.indicator?x.indicator({active:q.value,total:R.value}):t.showIndicators&&R.value>1?S("div",{class:E("indicators",{vertical:t.vertical})},[Array(R.value).fill("").map(nt)]):void 0])}}}),P=(e("a",T(D)),t(n("swipe-item"),2)),R=P[0],H=P[1],U=i({name:R,setup:function(t,e){var a,n=e.slots,i=u({offset:0,inited:!1,mounted:!1}),r=Y(k),o=r.parent,l=r.index;if(o){var f=c((function(){var t={},e=o.props.vertical;return o.size.value&&(t[e?"height":"width"]="".concat(o.size.value,"px")),i.offset&&(t.transform="translate".concat(e?"Y":"X","(").concat(i.offset,"px)")),t})),s=c((function(){var t=o.props,e=t.loop;if(!t.lazyRender||a)return!0;if(!i.mounted)return!1;var n=o.activeIndicator.value,r=o.count.value-1,u=0===n&&e?r:n-1,c=n===r&&e?0:n+1;return a=l.value===n||l.value===u||l.value===c}));return p((function(){j((function(){i.mounted=!0}))})),v({setOffset:function(t){i.offset=t}}),function(){var t;return S("div",{class:H(),style:f.value},[s.value?null==(t=n.default)?void 0:t.call(n):null])}}}});e("S",T(U))}}}))}();
