import"./aplayer-28664f22.js";import{l as e,a as t,t as s,b as a,s as r,B as i,H as o,D as p,F as d}from"./@vue-52de1c01.js";import{P as l}from"./xgplayer-1c10c248.js";import{_ as n}from"./index-3157abda.js";import{e as c}from"./vant-7136ba84.js";import"./@antv-8a75d63c.js";import"./tslib-546db90a.js";import"./fecha-2b185e5a.js";/* empty css                      */import"./amfe-flexible-385c80ea.js";import"./js-cookie-aaf6027b.js";import"./vue-router-a4543dac.js";import"./vuex-c830e64e.js";import"./@vueuse-feee2333.js";import"./lodash-es-c547d601.js";import"./axios-0cd4f164.js";import"./qs-6446231f.js";import"./side-channel-b2edb420.js";import"./get-intrinsic-8aab7bd3.js";import"./has-symbols-1f359e75.js";import"./function-bind-c930bb92.js";import"./has-03e8e28c.js";import"./call-bind-b7e23f7e.js";import"./object-inspect-8ed24658.js";import"./nprogress-319be66c.js";import"./vue3-hash-calendar-68956731.js";import"./hammerjs-ed6f6a9e.js";import"./@vant-0004063d.js";e({name:"AudioPlayer"});const m={class:"video-player-wrapper st-bg-white"},b=e({name:"VideoPlayer"});var f=n(Object.assign(b,{props:{width:{type:[Number,String],default:375},height:{type:[Number,String],default:220},url:{type:String,default:"//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4"},poster:{type:String,default:"//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg"}},setup(e){const p=e,d=t({videoRef:null}),{videoRef:n}=s(d);return a((()=>{new l({id:"video-container",url:p.url,poster:p.poster,width:p.width,height:p.height,playsinline:!0,fluid:!0,download:!0,rotateFullscreen:!0,enableVideoDbltouch:!0,playbackRate:[.5,.75,1,1.5,2],defaultPlaybackRate:1,"x5-video-player-type":"h5","x5-video-player-fullscreen":!0})})),(e,t)=>(r(),i("div",m,[o("div",{id:"video-container",ref_key:"videoRef",ref:n},null,512)]))}}),[["__scopeId","data-v-47948b2f"]]);const j={class:"page-wrapper"};var u=n({},[["render",function(e,t){const s=c,a=f;return r(),i("div",j,[p(s,{title:"视频播放",border:!1}),p(a,{class:"st-padding-10"}),d("",!0)])}]]);export{u as default};
