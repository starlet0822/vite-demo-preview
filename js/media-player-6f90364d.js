import"./aplayer-28664f22.js";import{m as e,a,_ as t,b as r,aI as o,ak as s,al as i,l as d,aj as p}from"./@vue-0da0c2e3.js";import{P as l}from"./xgplayer-326f523b.js";import{_ as n}from"./plugin-vue_export-helper-893979e1.js";import{C as c}from"./vant-78dd0152.js";import{_ as f}from"./index-89ae9d3a.js";import"./@antv-74afab59.js";import"./tslib-546db90a.js";import"./fecha-2b185e5a.js";import"./@vant-b0725c78.js";import"./vue-router-1cbad9b8.js";e({name:"AudioPlayer"});const m={class:"video-player-wrapper st-bg-white"},u=e({name:"VideoPlayer"});var v=n(Object.assign(u,{props:{width:{type:[Number,String],default:375},height:{type:[Number,String],default:220},url:{type:String,default:"//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4"},poster:{type:String,default:"//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg"}},setup(e){const d=e,p=a({videoRef:null}),{videoRef:n}=t(p);return r((()=>{new l({id:"video-container",url:d.url,poster:d.poster,width:d.width,height:d.height,playsinline:!0,fluid:!0,download:!0,rotateFullscreen:!0,enableVideoDbltouch:!0,playbackRate:[.5,.75,1,1.5,2],defaultPlaybackRate:1,"x5-video-player-type":"h5","x5-video-player-fullscreen":!0})})),(e,a)=>(o(),s("div",m,[i("div",{id:"video-container",ref_key:"videoRef",ref:n},null,512)]))}}),[["__scopeId","data-v-47948b2f"]]);const b={class:"media-player-wrapper st-bg"};var y=n({},[["render",function(e,a){const t=f,r=c,i=v;return o(),s("div",b,[d(t),d(r,{title:"视频播放"}),d(i,{class:"st-padding-10"}),p("",!0)])}],["__scopeId","data-v-0a8fec96"]]);export{y as default};