var e;import{c as t,i as s,a,d as n,r as o,o as r,b as i,e as c,w as l,u as d,z as m,E as u,f as p,g,h,j as f,N as _,k as b,l as v,m as k,n as y,p as E}from"./vendor-b3ef81b6.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const L=t();L.use(s);let w=navigator.language.replace(/-[A-Za-z]*/,"");const A=sessionStorage.getItem("locales");null!==A&&(w=null==(e=JSON.parse(A))?void 0:e.locale);const I=a({locale:w,legacy:!1,
// 防止组件引入i18n，vite脚手架报错
globalInjection:!0,
// 全局注册 $t
messages:{zh:{common:{home:"首页",about:"关于",signIn:"登录",signUp:"注册",main:"主要内容区域"},route:{dashboard:"仪表盘",workbench:"工作台"}},en:{common:{home:"home",about:"about",signIn:"sign in",signUp:"sign up",main:"common.main"},route:{dashboard:"dashboard",workbench:"Workbench"}}}}),P=[{key:"zh",title:"中文"},{key:"en",title:"English"}],O=n("locales",{state:()=>({locale:I.global.locale}),actions:{
// 设置当前的语言环境
setLocale(e){this.locale=e,I.global.locale=e}},persist:{enabled:!0,strategies:[{storage:sessionStorage}]}}),T=(e,t)=>{const s=e.__vccOpts||e;for(const[a,n]of t)s[a]=n;return s},j={class:"app"},S=T(Object.assign({name:"App"},{__name:"App",setup(e){const t=O(),s={zh:m,en:u};return(e,a)=>{const n=o("router-view"),m=p;return r(),i("div",j,[c(m,{locale:s[d(t).locale]},{default:l((()=>[c(n)])),_:1},8,["locale"])])}}}),[["__scopeId","data-v-56a74ab1"]]),N={},x=function(e,t,s){if(!t||0===t.length)return e();const a=document.getElementsByTagName("link");return Promise.all(t.map((e=>{if((e=function(e){return"/vue3-test/"+e}(e))in N)return;N[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(!!s)for(let s=a.length-1;s>=0;s--){const n=a[s];if(n.href===e&&(!t||"stylesheet"===n.rel))return}else if(document.querySelector(`link[href="${e}"]${n}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((t,s)=>{o.addEventListener("load",t),o.addEventListener("error",(()=>s(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e())).catch((e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}))},z=g.create({
// baseURL: 'http://codercba.com:1888/api/',
// baseURL: ({}).VITE_BASE_URL,
timeout:5e3});z.interceptors.request.use((function(e){const t=V(),{token:s}=t;return s&&(e.headers={
// 'Content-Type':'application/x-www-form-urlencoded',   // 传参方式表单
// 'Content-Type': 'application/json;charset=UTF-8', // 传参方式json
satoken:`Bearer ${s}`}),e}),(function(e){return h.error(e.message),Promise.reject(e)})),z.interceptors.response.use((function(e){return e.data&&200===e.data.code?e:Promise.reject(e)}),(function(e){if(e&&e.response){switch(e.response.status){case 400:e.message="请求错误";break;case 401:e.message="权限不足, 请重新登录";break;case 403:e.message="拒绝访问";break;case 404:e.message="请求地址出错";break;case 408:e.message="请求超时";break;case 500:e.message="服务器内部错误";break;case 501:e.message="服务未实现";break;case 502:e.message="网关错误";break;case 503:e.message="服务不可用";break;case 504:e.message="网关超时";break;case 505:e.message="HTTP 版本不受支持";break;default:e.message=`连接错误${e.response.status}`}}else JSON.stringify(e).includes("timeout")?e.message="服务器响应超时，请刷新当前页":e.message="连接服务器失败";return Promise.reject(e)}));const R=async(e,t,s,a={})=>{try{const n=await z({method:e,url:t,["get"===e?"params":"data"]:s,...a});return n.data.message&&h.success(n.data.message),n.data}catch(n){if(n.data){if(401===n.data.code){h.error(n.data.message||"未知错误，请重新登录");V().$reset(),C.push("/login")}}else h.error(n.message||"未知错误，请重新登录")}},D=async(e,t={},s={})=>await R("get",e,t,s),U=()=>(async(e,t={},s={})=>await R("post",e,t,s))("/api/user/logout",{}),V=n("login",{
// 定义全局共享状态的一个初始化状态
state:()=>({token:"",userInfo:{nickName:"",email:"",phone:"",gender:"",age:"",avatarUrl:"",introduction:"",createdTime:"",updatedTime:"",isActive:"",isAdmin:""}})
// actions类似于methods，可以有同步和异步方法，修改state中的状态
,actions:{
// 登录
async doLogin(e){await C.push("/")},
// 获取登录用户信息
async doInfo(){const e=await D("/api/user/getLoginUserInfo",{});if(e&&200===e.code){const{nickName:t,email:s,phone:a,gender:n,age:o,avatarUrl:r,introduction:i,createdTime:c,updatedTime:l,isActive:d,isAdmin:m}=e.data;this.userInfo={nickName:t,email:s,phone:a,gender:n,age:o,avatarUrl:r,introduction:i,createdTime:c,updatedTime:l,isActive:d,isAdmin:m},f({title:"欢迎回来~",message:`亲爱的${this.userInfo.nickName}`,position:"top-left",type:"success"})}},
// 退出登录
async doLogout(){await U()}},
// 开启持久化
persist:{enabled:!0,strategies:[{storage:localStorage}]}});_.configure({easing:"ease",
// 动画方式
speed:1e3,
// 递增进度条的速度
showSpinner:!1,
// 进度环显示隐藏
trickleSpeed:200,
// 自动递增间隔
minimum:.3,
// 更改启动时使用的最小百分比
parent:"body"});const $=()=>{_.done()},q=[{path:"/login",name:"login",component:()=>x((()=>import("./index-ba52f3e0.js")),["assets/js/index-ba52f3e0.js","assets/js/vendor-b3ef81b6.js","assets/css/vendor-76b95013.css","assets/js/theme-7e68e9b6.js","assets/css/index-1df1fae6.css"]),meta:{title:"登录"}}],M=[
// 控制台
{path:"/dashboard",name:"dashboard",component:()=>x((()=>import("./index-0e64fd40.js")),["assets/js/index-0e64fd40.js","assets/js/vendor-b3ef81b6.js","assets/css/vendor-76b95013.css","assets/js/useInstance-8c9b1313.js"]),meta:{title:"控制台",icon:"Monitor",keepAlive:!0}},
// 系统管理
{path:"/system",name:"system",redirect:"/system/user",meta:{title:"系统管理",icon:"UserFilled"},children:[{path:"user",name:"user",component:()=>x((()=>import("./index-e96e8eeb.js")),["assets/js/index-e96e8eeb.js","assets/js/vendor-b3ef81b6.js","assets/css/vendor-76b95013.css","assets/js/user-625d9968.js"]),meta:{title:"用户管理",icon:"Monitor",keepAlive:!1}},{path:"role",name:"role",component:()=>x((()=>import("./index-572e3a3b.js")),["assets/js/index-572e3a3b.js","assets/js/vendor-b3ef81b6.js","assets/css/vendor-76b95013.css","assets/js/user-625d9968.js","assets/js/useInstance-8c9b1313.js"]),meta:{title:"角色管理",icon:"Monitor",keepAlive:!0}}]},
// 系统报表
{path:"/reports",name:"reports",component:()=>x((()=>import("./index-6b137c8e.js")),["assets/js/index-6b137c8e.js","assets/js/vendor-b3ef81b6.js","assets/css/vendor-76b95013.css"]),meta:{title:"报表数据",icon:"Odometer",keepAlive:!0}},
// 系统设置
{path:"/settings",name:"settings",component:()=>x((()=>import("./index-8b41ab83.js")),["assets/js/index-8b41ab83.js","assets/js/vendor-b3ef81b6.js","assets/css/vendor-76b95013.css"]),meta:{title:"系统设置",icon:"Setting",keepAlive:!0}}],C=b({
// base: ,
// 创建一个 Hash 路由实例
history:v("/vue3-test/"),
// 路由配置
routes:[...q,
// 公有路由直接展示
{path:"/",name:"layout",component:()=>x((()=>import("./index-da5f6611.js")),["assets/js/index-da5f6611.js","assets/js/vendor-b3ef81b6.js","assets/css/vendor-76b95013.css","assets/js/theme-7e68e9b6.js","assets/css/index-b6d21b3d.css"]),redirect:"/dashboard",children:[...M,
// 私有路由放在layout下展示
{path:"/404",name:"404",component:()=>x((()=>import("./404-c2f67cbe.js")),["assets/js/404-c2f67cbe.js","assets/js/vendor-b3ef81b6.js","assets/css/vendor-76b95013.css"]),meta:{title:"404页面"}},{path:"/:pathMatch(.*)*",name:"error",redirect:"/404"}]}]});C.beforeEach(((e,t,s)=>{_.start(),s()})),C.afterEach((()=>{$()})),C.onError((e=>{$()}));const F={mounted:(e,t)=>{e.resizeListener=()=>{B(e,t)},B(e,t),window.addEventListener("resize",e.resizeListener)},unmounted(e){window.removeEventListener("resize",e.resizeListener)},updated(e,t){B(e,t)}};function B(e,t){var s;const a=e.offsetTop,n=(null==(s=null==t?void 0:t.value)?void 0:s.bottom)||64,o=window.innerHeight;e.style.height=o-a-n+"px",e.style.overflowY="auto"}let H,J=0;function W(e,t){H=y.service({lock:!0,text:t||"努力加载中...",background:"rgba(255,255,255,.4)",target:document.querySelector(e)})}function K(){H&&H.close()}function Y(e,t){0===J&&W(e,t),J++}function Z(){J<=0||(J--,0===J&&K())}const G=E(S);G.use(L),G.use(I),G.use(C),G.use((function(e){for(const[t,s]of Object.entries(k))e.component(t,s)})),function(e){e.config.globalProperties.$myLoading={startLoading:W,endLoading:K,showFullScreenLoading:Y,hideFullScreenLoading:Z,needLoadingRequestCount:J}}(G),G.directive("auto-height",F),G.mount("#app");export{T as _,V as a,D as g,P as l,M as p,C as r,O as u};
