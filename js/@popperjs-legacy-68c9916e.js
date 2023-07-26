System.register([],(function(e){"use strict";return{execute:function(){var t="top",n="bottom",r="right",o="left",i="auto",a=[t,n,r,o],s="start",f="end",c="viewport",p="popper",u=a.reduce((function(e,t){return e.concat([t+"-"+s,t+"-"+f])}),[]),l=[].concat(a,[i]).reduce((function(e,t){return e.concat([t,t+"-"+s,t+"-"+f])}),[]),d=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function h(e){return e?(e.nodeName||"").toLowerCase():null}function m(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function v(e){return e instanceof m(e).Element||e instanceof Element}function g(e){return e instanceof m(e).HTMLElement||e instanceof HTMLElement}function y(e){return"undefined"!=typeof ShadowRoot&&(e instanceof m(e).ShadowRoot||e instanceof ShadowRoot)}var b={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];g(o)&&h(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});g(r)&&h(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};function x(e){return e.split("-")[0]}var w=Math.max,O=Math.min,j=Math.round;function E(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function D(){return!/^((?!chrome|android).)*safari/i.test(E())}function A(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&g(e)&&(o=e.offsetWidth>0&&j(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&j(r.height)/e.offsetHeight||1);var a=(v(e)?m(e):window).visualViewport,s=!D()&&n,f=(r.left+(s&&a?a.offsetLeft:0))/o,c=(r.top+(s&&a?a.offsetTop:0))/i,p=r.width/o,u=r.height/i;return{width:p,height:u,top:c,right:f+p,bottom:c+u,left:f,x:f,y:c}}function L(e){var t=A(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function k(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&y(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function W(e){return m(e).getComputedStyle(e)}function M(e){return["table","td","th"].indexOf(h(e))>=0}function P(e){return((v(e)?e.ownerDocument:e.document)||window.document).documentElement}function B(e){return"html"===h(e)?e:e.assignedSlot||e.parentNode||(y(e)?e.host:null)||P(e)}function H(e){return g(e)&&"fixed"!==W(e).position?e.offsetParent:null}function R(e){for(var t=m(e),n=H(e);n&&M(n)&&"static"===W(n).position;)n=H(n);return n&&("html"===h(n)||"body"===h(n)&&"static"===W(n).position)?t:n||function(e){var t=/firefox/i.test(E());if(/Trident/i.test(E())&&g(e)&&"fixed"===W(e).position)return null;var n=B(e);for(y(n)&&(n=n.host);g(n)&&["html","body"].indexOf(h(n))<0;){var r=W(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function T(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function S(e,t,n){return w(e,O(t,n))}function V(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function q(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var C={name:"arrow",enabled:!0,phase:"main",fn:function(e){var i,s=e.state,f=e.name,c=e.options,p=s.elements.arrow,u=s.modifiersData.popperOffsets,l=x(s.placement),d=T(l),h=[o,r].indexOf(l)>=0?"height":"width";if(p&&u){var m=function(e,t){return V("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:q(e,a))}(c.padding,s),v=L(p),g="y"===d?t:o,y="y"===d?n:r,b=s.rects.reference[h]+s.rects.reference[d]-u[d]-s.rects.popper[h],w=u[d]-s.rects.reference[d],O=R(p),j=O?"y"===d?O.clientHeight||0:O.clientWidth||0:0,E=b/2-w/2,D=m[g],A=j-v[h]-m[y],k=j/2-v[h]/2+E,W=S(D,k,A),M=d;s.modifiersData[f]=((i={})[M]=W,i.centerOffset=W-k,i)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&k(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function N(e){return e.split("-")[1]}var I={top:"auto",right:"auto",bottom:"auto",left:"auto"};function F(e){var i,a=e.popper,s=e.popperRect,c=e.placement,p=e.variation,u=e.offsets,l=e.position,d=e.gpuAcceleration,h=e.adaptive,v=e.roundOffsets,g=e.isFixed,y=u.x,b=void 0===y?0:y,x=u.y,w=void 0===x?0:x,O="function"==typeof v?v({x:b,y:w}):{x:b,y:w};b=O.x,w=O.y;var E=u.hasOwnProperty("x"),D=u.hasOwnProperty("y"),A=o,L=t,k=window;if(h){var M=R(a),B="clientHeight",H="clientWidth";M===m(a)&&"static"!==W(M=P(a)).position&&"absolute"===l&&(B="scrollHeight",H="scrollWidth"),(c===t||(c===o||c===r)&&p===f)&&(L=n,w-=(g&&M===k&&k.visualViewport?k.visualViewport.height:M[B])-s.height,w*=d?1:-1),c!==o&&(c!==t&&c!==n||p!==f)||(A=r,b-=(g&&M===k&&k.visualViewport?k.visualViewport.width:M[H])-s.width,b*=d?1:-1)}var T,S=Object.assign({position:l},h&&I),V=!0===v?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:j(n*o)/o||0,y:j(r*o)/o||0}}({x:b,y:w},m(a)):{x:b,y:w};return b=V.x,w=V.y,d?Object.assign({},S,((T={})[L]=D?"0":"",T[A]=E?"0":"",T.transform=(k.devicePixelRatio||1)<=1?"translate("+b+"px, "+w+"px)":"translate3d("+b+"px, "+w+"px, 0)",T)):Object.assign({},S,((i={})[L]=D?w+"px":"",i[A]=E?b+"px":"",i.transform="",i))}var U={passive:!0},z={left:"right",right:"left",bottom:"top",top:"bottom"};function _(e){return e.replace(/left|right|bottom|top/g,(function(e){return z[e]}))}var X={start:"end",end:"start"};function Y(e){return e.replace(/start|end/g,(function(e){return X[e]}))}function G(e){var t=m(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function J(e){return A(P(e)).left+G(e).scrollLeft}function K(e){var t=W(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function Q(e){return["html","body","#document"].indexOf(h(e))>=0?e.ownerDocument.body:g(e)&&K(e)?e:Q(B(e))}function Z(e,t){var n;void 0===t&&(t=[]);var r=Q(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=m(r),a=o?[i].concat(i.visualViewport||[],K(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(Z(B(a)))}function $(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ee(e,t,n){return t===c?$(function(e,t){var n=m(e),r=P(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,f=0;if(o){i=o.width,a=o.height;var c=D();(c||!c&&"fixed"===t)&&(s=o.offsetLeft,f=o.offsetTop)}return{width:i,height:a,x:s+J(e),y:f}}(e,n)):v(t)?function(e,t){var n=A(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):$(function(e){var t,n=P(e),r=G(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=w(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=w(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+J(e),f=-r.scrollTop;return"rtl"===W(o||n).direction&&(s+=w(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(P(e)))}function te(e,t,n,r){var o="clippingParents"===t?function(e){var t=Z(B(e)),n=["absolute","fixed"].indexOf(W(e).position)>=0&&g(e)?R(e):e;return v(n)?t.filter((function(e){return v(e)&&k(e,n)&&"body"!==h(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=ee(e,n,r);return t.top=w(o.top,t.top),t.right=O(o.right,t.right),t.bottom=O(o.bottom,t.bottom),t.left=w(o.left,t.left),t}),ee(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ne(e){var i,a=e.reference,c=e.element,p=e.placement,u=p?x(p):null,l=p?N(p):null,d=a.x+a.width/2-c.width/2,h=a.y+a.height/2-c.height/2;switch(u){case t:i={x:d,y:a.y-c.height};break;case n:i={x:d,y:a.y+a.height};break;case r:i={x:a.x+a.width,y:h};break;case o:i={x:a.x-c.width,y:h};break;default:i={x:a.x,y:a.y}}var m=u?T(u):null;if(null!=m){var v="y"===m?"height":"width";switch(l){case s:i[m]=i[m]-(a[v]/2-c[v]/2);break;case f:i[m]=i[m]+(a[v]/2-c[v]/2)}}return i}function re(e,o){void 0===o&&(o={});var i=o,s=i.placement,f=void 0===s?e.placement:s,u=i.strategy,l=void 0===u?e.strategy:u,d=i.boundary,h=void 0===d?"clippingParents":d,m=i.rootBoundary,g=void 0===m?c:m,y=i.elementContext,b=void 0===y?p:y,x=i.altBoundary,w=void 0!==x&&x,O=i.padding,j=void 0===O?0:O,E=V("number"!=typeof j?j:q(j,a)),D=b===p?"reference":p,L=e.rects.popper,k=e.elements[w?D:b],W=te(v(k)?k:k.contextElement||P(e.elements.popper),h,g,l),M=A(e.elements.reference),B=ne({reference:M,element:L,strategy:"absolute",placement:f}),H=$(Object.assign({},L,B)),R=b===p?H:M,T={top:W.top-R.top+E.top,bottom:R.bottom-W.bottom+E.bottom,left:W.left-R.left+E.left,right:R.right-W.right+E.right},S=e.modifiersData.offset;if(b===p&&S){var C=S[f];Object.keys(T).forEach((function(e){var o=[r,n].indexOf(e)>=0?1:-1,i=[t,n].indexOf(e)>=0?"y":"x";T[e]+=C[i]*o}))}return T}function oe(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,s=n.padding,f=n.flipVariations,c=n.allowedAutoPlacements,p=void 0===c?l:c,d=N(r),h=d?f?u:u.filter((function(e){return N(e)===d})):a,m=h.filter((function(e){return p.indexOf(e)>=0}));0===m.length&&(m=h);var v=m.reduce((function(t,n){return t[n]=re(e,{placement:n,boundary:o,rootBoundary:i,padding:s})[x(n)],t}),{});return Object.keys(v).sort((function(e,t){return v[e]-v[t]}))}var ie={name:"flip",enabled:!0,phase:"main",fn:function(e){var a=e.state,f=e.options,c=e.name;if(!a.modifiersData[c]._skip){for(var p=f.mainAxis,u=void 0===p||p,l=f.altAxis,d=void 0===l||l,h=f.fallbackPlacements,m=f.padding,v=f.boundary,g=f.rootBoundary,y=f.altBoundary,b=f.flipVariations,w=void 0===b||b,O=f.allowedAutoPlacements,j=a.options.placement,E=x(j),D=h||(E!==j&&w?function(e){if(x(e)===i)return[];var t=_(e);return[Y(e),t,Y(t)]}(j):[_(j)]),A=[j].concat(D).reduce((function(e,t){return e.concat(x(t)===i?oe(a,{placement:t,boundary:v,rootBoundary:g,padding:m,flipVariations:w,allowedAutoPlacements:O}):t)}),[]),L=a.rects.reference,k=a.rects.popper,W=new Map,M=!0,P=A[0],B=0;B<A.length;B++){var H=A[B],R=x(H),T=N(H)===s,S=[t,n].indexOf(R)>=0,V=S?"width":"height",q=re(a,{placement:H,boundary:v,rootBoundary:g,altBoundary:y,padding:m}),C=S?T?r:o:T?n:t;L[V]>k[V]&&(C=_(C));var I=_(C),F=[];if(u&&F.push(q[R]<=0),d&&F.push(q[C]<=0,q[I]<=0),F.every((function(e){return e}))){P=H,M=!1;break}W.set(H,F)}if(M)for(var U=function(e){var t=A.find((function(t){var n=W.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return P=t,"break"},z=w?3:1;z>0&&"break"!==U(z);z--);a.placement!==P&&(a.modifiersData[c]._skip=!0,a.placement=P,a.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function ae(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function se(e){return[t,r,n,o].some((function(t){return e[t]>=0}))}var fe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var n=e.state,i=e.options,a=e.name,s=i.offset,f=void 0===s?[0,0]:s,c=l.reduce((function(e,i){return e[i]=function(e,n,i){var a=x(e),s=[o,t].indexOf(a)>=0?-1:1,f="function"==typeof i?i(Object.assign({},n,{placement:e})):i,c=f[0],p=f[1];return c=c||0,p=(p||0)*s,[o,r].indexOf(a)>=0?{x:p,y:c}:{x:c,y:p}}(i,n.rects,f),e}),{}),p=c[n.placement],u=p.x,d=p.y;null!=n.modifiersData.popperOffsets&&(n.modifiersData.popperOffsets.x+=u,n.modifiersData.popperOffsets.y+=d),n.modifiersData[a]=c}},ce={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var i=e.state,a=e.options,f=e.name,c=a.mainAxis,p=void 0===c||c,u=a.altAxis,l=void 0!==u&&u,d=a.boundary,h=a.rootBoundary,m=a.altBoundary,v=a.padding,g=a.tether,y=void 0===g||g,b=a.tetherOffset,j=void 0===b?0:b,E=re(i,{boundary:d,rootBoundary:h,padding:v,altBoundary:m}),D=x(i.placement),A=N(i.placement),k=!A,W=T(D),M="x"===W?"y":"x",P=i.modifiersData.popperOffsets,B=i.rects.reference,H=i.rects.popper,V="function"==typeof j?j(Object.assign({},i.rects,{placement:i.placement})):j,q="number"==typeof V?{mainAxis:V,altAxis:V}:Object.assign({mainAxis:0,altAxis:0},V),C=i.modifiersData.offset?i.modifiersData.offset[i.placement]:null,I={x:0,y:0};if(P){if(p){var F,U="y"===W?t:o,z="y"===W?n:r,_="y"===W?"height":"width",X=P[W],Y=X+E[U],G=X-E[z],J=y?-H[_]/2:0,K=A===s?B[_]:H[_],Q=A===s?-H[_]:-B[_],Z=i.elements.arrow,$=y&&Z?L(Z):{width:0,height:0},ee=i.modifiersData["arrow#persistent"]?i.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[U],ne=ee[z],oe=S(0,B[_],$[_]),ie=k?B[_]/2-J-oe-te-q.mainAxis:K-oe-te-q.mainAxis,ae=k?-B[_]/2+J+oe+ne+q.mainAxis:Q+oe+ne+q.mainAxis,se=i.elements.arrow&&R(i.elements.arrow),fe=se?"y"===W?se.clientTop||0:se.clientLeft||0:0,ce=null!=(F=null==C?void 0:C[W])?F:0,pe=X+ae-ce,ue=S(y?O(Y,X+ie-ce-fe):Y,X,y?w(G,pe):G);P[W]=ue,I[W]=ue-X}if(l){var le,de="x"===W?t:o,he="x"===W?n:r,me=P[M],ve="y"===M?"height":"width",ge=me+E[de],ye=me-E[he],be=-1!==[t,o].indexOf(D),xe=null!=(le=null==C?void 0:C[M])?le:0,we=be?ge:me-B[ve]-H[ve]-xe+q.altAxis,Oe=be?me+B[ve]+H[ve]-xe-q.altAxis:ye,je=y&&be?function(e,t,n){var r=S(e,t,n);return r>n?n:r}(we,me,Oe):S(y?we:ge,me,y?Oe:ye);P[M]=je,I[M]=je-me}i.modifiersData[f]=I}},requiresIfExists:["offset"]};function pe(e,t,n){void 0===n&&(n=!1);var r,o,i=g(t),a=g(t)&&function(e){var t=e.getBoundingClientRect(),n=j(t.width)/e.offsetWidth||1,r=j(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),s=P(t),f=A(e,a,n),c={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(i||!i&&!n)&&(("body"!==h(t)||K(s))&&(c=(r=t)!==m(r)&&g(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:G(r)),g(t)?((p=A(t,!0)).x+=t.clientLeft,p.y+=t.clientTop):s&&(p.x=J(s))),{x:f.left+c.scrollLeft-p.x,y:f.top+c.scrollTop-p.y,width:f.width,height:f.height}}function ue(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var le={placement:"bottom",modifiers:[],strategy:"absolute"};function de(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function he(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?le:o;return function(e,t,n){void 0===n&&(n=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},le,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],c=!1,p={state:s,setOptions:function(n){var o="function"==typeof n?n(s.options):n;u(),s.options=Object.assign({},i,s.options,o),s.scrollParents={reference:v(e)?Z(e):e.contextElement?Z(e.contextElement):[],popper:Z(t)};var a,c,l=function(e){var t=ue(e);return d.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((a=[].concat(r,s.options.modifiers),c=a.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(c).map((function(e){return c[e]}))));return s.orderedModifiers=l.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:p,options:r}),a=function(){};f.push(i||a)}})),p.update()},forceUpdate:function(){if(!c){var e=s.elements,t=e.reference,n=e.popper;if(de(t,n)){s.rects={reference:pe(t,R(n),"fixed"===s.options.strategy),popper:L(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var o=s.orderedModifiers[r],i=o.fn,a=o.options,f=void 0===a?{}:a,u=o.name;"function"==typeof i&&(s=i({state:s,options:f,name:u,instance:p})||s)}else s.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){p.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){u(),c=!0}};if(!de(e,t))return p;function u(){f.forEach((function(e){return e()})),f=[]}return p.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),p}}e("c",he({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=m(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,U)})),s&&f.addEventListener("resize",n.update,U),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,U)})),s&&f.removeEventListener("resize",n.update,U)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ne({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:x(t.placement),variation:N(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,F(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,F(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},b,fe,ie,ce,C,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=re(t,{elementContext:"reference"}),s=re(t,{altBoundary:!0}),f=ae(a,r),c=ae(s,o,i),p=se(f),u=se(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}}]}))}}}));
