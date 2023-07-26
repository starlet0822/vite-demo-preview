import{l as e,r as t,w as l,c as a,b as n,D as r}from"./@vue-52de1c01.js";let o=!1;var u=e({name:"Angle",props:{angle:{type:Number,default:0},size:{type:Number,default:16,validator:e=>e>=16},borderWidth:{type:Number,default:1,validator:e=>e>=1},borderColor:{type:String,default:"#666"}},emits:["update:angle","change"],setup(e,{emit:u}){const s=t(null),d=t(e.angle);l((()=>e.angle),(e=>{d.value=e}));const c=a((()=>({width:e.size+"px",height:e.size+"px",borderWidth:e.borderWidth+"px",borderColor:e.borderColor,transform:`rotate(${d.value}deg)`}))),i=t=>{s.value&&(d.value=((e,t)=>{const l=e.getBoundingClientRect(),a=l.left+l.width/2,n=l.top+l.height/2,r=Math.abs(a-t.clientX),o=Math.abs(n-t.clientY),u=o/Math.sqrt(Math.pow(r,2)+Math.pow(o,2)),s=Math.acos(u);let d=Math.floor(180/(Math.PI/s));return t.clientX>a&&t.clientY>n&&(d=180-d),t.clientX==a&&t.clientY>n&&(d=180),t.clientX>a&&t.clientY==n&&(d=90),t.clientX<a&&t.clientY>n&&(d=180+d),t.clientX<a&&t.clientY==n&&(d=270),t.clientX<a&&t.clientY<n&&(d=360-d),d})(s.value,t)%360,(()=>{let t=Number(d.value);isNaN(t)||(t=t>360||t<0?e.angle:t,d.value=360===t?0:t,u("update:angle",d.value),u("change",d.value))})())};return n((()=>{const e={drag:e=>{i(e)},end:e=>{i(e)}};s.value&&((e,t)=>{const l=function(e){var l;null==(l=t.drag)||l.call(t,e)},a=function(e){var n;document.removeEventListener("mousemove",l,!1),document.removeEventListener("mouseup",a,!1),document.onselectstart=null,document.ondragstart=null,o=!1,null==(n=t.end)||n.call(t,e)};e&&e.addEventListener("mousedown",(e=>{var n;o||(document.onselectstart=()=>!1,document.ondragstart=()=>!1,document.addEventListener("mousemove",l,!1),document.addEventListener("mouseup",a,!1),o=!0,null==(n=t.start)||n.call(t,e))}))})(s.value,e)})),()=>r("div",{class:"bee-angle"},[r("div",{class:"bee-angle__round",ref:s,style:c.value},null)])}});export{u as A};
