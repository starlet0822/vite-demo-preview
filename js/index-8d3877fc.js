import{s as e,F as s,V as a,n as o,o as r,l as t,_ as l,$ as n}from"./vant-e0b5fbdf.js";import{_ as m}from"./index-eb7feec2.js";import{_ as i}from"./index-62ae0006.js";import{l as d}from"./index-e3aa1ad9.js";import{_ as c}from"./plugin-vue_export-helper-893979e1.js";import{r as u,a as p,S as f,s as v,v as b,E as j,D as w,u as h,H as g,J as _,I as y,G as P,P as V,aR as k,aQ as x,l as C,B as $,F as I}from"./@vue-52de1c01.js";import{u as S}from"./vue-router-35312974.js";import"./@vant-0004063d.js";/* empty css                      */import"./amfe-flexible-385c80ea.js";import"./js-cookie-aaf6027b.js";import"./vuex-c830e64e.js";import"./@vueuse-feee2333.js";import"./lodash-es-133975bb.js";import"./axios-0cd4f164.js";import"./qs-6446231f.js";import"./side-channel-b2edb420.js";import"./get-intrinsic-8aab7bd3.js";import"./has-symbols-1f359e75.js";import"./function-bind-c930bb92.js";import"./has-03e8e28c.js";import"./call-bind-b7e23f7e.js";import"./object-inspect-8ed24658.js";import"./@antv-8a75d63c.js";import"./tslib-546db90a.js";import"./fecha-2b185e5a.js";import"./nprogress-319be66c.js";import"./vue3-hash-calendar-68956731.js";import"./hammerjs-ed6f6a9e.js";const q={class:"submit-btn"};var z=c({__name:"Step1",emits:["change-step"],setup(t,{emit:l}){const n=u(!0),m=u(null),c=u(0),k=p({phone:"",verifyCode:""}),x=p({phone:[{required:!0,message:"手机号码不能为空"},{pattern:/^(?:(?:\+|00)86)?1[3-9]\d{9}$/,message:"手机号码格式不正确"}],verifyCode:[{required:!0,message:"验证码不能为空"},{pattern:/^\d{6}$/,message:"验证码不正确"}]});function C(){m.value||(c.value=60,n.value=!1,m.value=setInterval((()=>{c.value>0&&c.value<=60?c.value--:(n.value=!0,clearInterval(m.value),m.value=null)}),1e3))}const $=s=>{e({type:"success",message:"手机验证成功"}),l("change-step",1)},I=s=>{const{errors:[a]}=s;e(a.message)};return(e,t)=>{const l=i,m=s,u=a,p=o,S=r,z=f("waves");return v(),b(S,{class:"form-wrapper","validate-first":"","show-error":!1,"show-error-message":!1,"submit-on-enter":!1,onSubmit:$,onFailed:I},{default:j((()=>[w(u,{inset:""},{default:j((()=>[w(m,{modelValue:h(k).phone,"onUpdate:modelValue":t[0]||(t[0]=e=>h(k).phone=e),modelModifiers:{trim:!0},name:"phone",center:"",clearable:"",placeholder:"手机号码",autocomplete:"off",rules:h(x).phone},{"left-icon":j((()=>[w(l,{name:"EpIphone","class-name":"mr-12"})])),_:1},8,["modelValue","rules"]),w(m,{modelValue:h(k).verifyCode,"onUpdate:modelValue":t[1]||(t[1]=e=>h(k).verifyCode=e),modelModifiers:{trim:!0},name:"verifyCode",center:"",autocomplete:"off",placeholder:"6位数短信验证码",rules:h(x).verifyCode},{"left-icon":j((()=>[w(l,{name:"EpMessage","class-name":"mr-12"})])),button:j((()=>[g("div",{class:_(h(n)?"active-color":""),onClick:C},y(h(n)?"获取验证码":`${h(c)} 秒后可重新获取`),3)])),_:1},8,["modelValue","rules"])])),_:1}),g("div",q,[P((v(),b(p,{color:h(d),round:!1,block:"","native-type":"submit"},{default:j((()=>[V(" 下一步 ")])),_:1},8,["color"])),[[z]])])])),_:1})}}},[["__scopeId","data-v-c478faa0"]]);const A=(e=>(k("data-v-15123f4f"),e=e(),x(),e))((()=>g("p",{class:"tips"},"密码格式应为 6-20 位数字、字母、符号的任意两种组合）",-1))),F={class:"submit-btn"};var M=c({__name:"Step2",setup(a){const l=S(),n=u(!1),m=u(!1),c=p({newPassword:"",confirmPassword:""}),_=p({newPassword:[{required:!0,message:"新密码不能为空"},{pattern:/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)(?!^.*[\u4E00-\u9FA5].*$)([^(0-9a-zA-Z)]|[()]|[a-z]|[A-Z]|[0-9]){6,20}$/,message:"新密码格式不正确"}],confirmPassword:[{required:!0,message:"请再次输入新的登录密码"},{validator:e=>e&&e===c.newPassword,message:"两次输入的密码不一致"}]}),y=s=>{e({type:"success",message:"密码修改成功"}),l.replace("/login")},k=s=>{const{errors:[a]}=s;e(a.message)};return(e,a)=>{const l=i,u=t,p=s,x=o,C=r,$=f("waves");return v(),b(C,{class:"form-wrapper","validate-first":"","show-error":!1,"show-error-message":!1,"submit-on-enter":!1,onSubmit:y,onFailed:k},{default:j((()=>[w(p,{modelValue:h(c).newPassword,"onUpdate:modelValue":a[0]||(a[0]=e=>h(c).newPassword=e),modelModifiers:{trim:!0},name:"newPassword",center:"",clearable:"",border:!1,autocomplete:"off",type:h(n)?"text":"password",placeholder:"请设置6-20位新的登录密码",rules:h(_).newPassword,onClickRightIcon:a[1]||(a[1]=e=>n.value=!h(n))},{"left-icon":j((()=>[w(l,{name:"lock","class-name":"mr-12"})])),"right-icon":j((()=>[w(u,{name:h(n)?"eye-o":"closed-eye"},null,8,["name"])])),_:1},8,["modelValue","type","rules"]),A,w(p,{modelValue:h(c).confirmPassword,"onUpdate:modelValue":a[2]||(a[2]=e=>h(c).confirmPassword=e),modelModifiers:{trim:!0},name:"confirmPassword",center:"",clearable:"",border:!1,autocomplete:"off",type:h(m)?"text":"password",placeholder:"请再次输入新的登录密码",rules:h(_).confirmPassword,onClickRightIcon:a[3]||(a[3]=e=>m.value=!h(m))},{"left-icon":j((()=>[w(l,{name:"lock","class-name":"mr-12"})])),"right-icon":j((()=>[h(m)?(v(),b(u,{key:0,name:"eye-o"})):(v(),b(u,{key:1,name:"closed-eye"}))])),_:1},8,["modelValue","type","rules"]),g("div",F,[P((v(),b(x,{color:h(d),round:!1,block:"","native-type":"submit"},{default:j((()=>[V(" 保 存 ")])),_:1},8,["color"])),[[$]])])])),_:1})}}},[["__scopeId","data-v-15123f4f"]]);const E={class:"step-wrapper"},U=C({name:"reset-password"});var Z=c(Object.assign(U,{setup(e){const s=u(0),a=e=>{s.value=e};return(e,o)=>{const r=m,t=l,i=n;return v(),$("div",null,[w(r),g("div",E,[w(i,{active:h(s)},{default:j((()=>[w(t,null,{default:j((()=>[V("1.验证手机号码")])),_:1}),w(t,null,{default:j((()=>[V("2.设置新密码")])),_:1})])),_:1},8,["active"])]),0===h(s)?(v(),b(z,{key:0,onChangeStep:a})):I("",!0),1===h(s)?(v(),b(M,{key:1})):I("",!0)])}}}),[["__scopeId","data-v-02ec571a"]]);export{Z as default};
