import{e,B as t}from"./vant-e0b5fbdf.js";import"./aplayer-28664f22.js";import{l as a,a as r,t as o,b as s,s as i,B as d,H as p,D as l,F as n}from"./@vue-52de1c01.js";import{P as c}from"./xgplayer-1c10c248.js";import{_ as u}from"./plugin-vue_export-helper-893979e1.js";import{_ as f}from"./index-eb7feec2.js";import"./@vant-0004063d.js";import"./@antv-8a75d63c.js";import"./tslib-546db90a.js";import"./fecha-2b185e5a.js";import"./vue-router-35312974.js";a({name:"AudioPlayer"});const m={class:"video-player-wrapper st-bg-white"},v=a({name:"VideoPlayer"});var y=u(Object.assign(v,{props:{width:{type:[Number,String],default:375},height:{type:[Number,String],default:220},url:{type:String,default:"//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4"},poster:{type:String,default:"//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg"}},setup(e){const t=e,a=r({videoRef:null}),{videoRef:l}=o(a);return s((()=>{new c({id:"video-container",url:t.url,poster:t.poster,width:t.width,height:t.height,playsinline:!0,fluid:!0,download:!0,rotateFullscreen:!0,enableVideoDbltouch:!0,playbackRate:[.5,.75,1,1.5,2],defaultPlaybackRate:1,"x5-video-player-type":"h5","x5-video-player-fullscreen":!0})})),(e,t)=>(i(),d("div",m,[p("div",{id:"video-container",ref_key:"videoRef",ref:l},null,512)]))}}),[["__scopeId","data-v-47948b2f"]]);const b={class:"layout__page"},g={class:"layout__body"};var h=u({},[["render",function(a,r){const o=f,s=e,c=y,u=t;return i(),d("div",b,[l(o),p("div",g,[l(s,{title:"视频播放",border:!1}),l(c,{class:"st-padding-10"}),n("",!0)]),l(u)])}],["__scopeId","data-v-84875c90"]]);export{h as default};
