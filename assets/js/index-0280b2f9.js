import{e,f as a,g as s,h as t,i as n,j as l,k as i,l as o,m as r,n as u,b as c,o as d,p as m,q as p,r as _,s as g,t as f}from"./element-plus-7e112574.js";import{o as v,c as h,a as j,u as b,O as k,R as y,X as C,a1 as x,ah as w,P as I,S as O,T as M,W as B,t as S,r as L,w as z,Y as E,a0 as A,ab as F,f as U,V as N,au as V}from"./@vue-557ff3e0.js";import{d as D,s as T}from"./pinia-d932e60b.js";/* empty css                    */import{_ as q,p as P,u as R,l as W,a as $,r as H}from"./index-d993cf3c.js";import{u as J,b as X}from"./vue-router-e94cc7dd.js";import{k as Y,x as G,y as K,A as Q,e as Z,B as ee,C as ae}from"./@element-plus-10a58ae2.js";import{u as se}from"./theme-da25fa3b.js";import"./lodash-es-0f17fca1.js";import"./async-validator-cf877c1f.js";import"./@ctrl-08719ea3.js";import"./@popperjs-b78c3215.js";import"./escape-html-203c476a.js";import"./dayjs-02d3be64.js";import"./normalize-wheel-es-3222b0a2.js";import"./pinia-plugin-persist-70d140bd.js";import"./vue-i18n-4d80fa7d.js";import"./@intlify-490a3a79.js";import"./axios-87267c27.js";import"./nprogress-f8a163bf.js";const te=e=>new URL(Object.assign({"../assets/images/login-bg-dark.webp":"/vue3-test/assets/webp/login-bg-dark-e973c911.webp","../assets/images/login-bg.jpg":"/vue3-test/assets/jpg/login-bg-08fd3d88.jpg","../assets/images/logo.png":"/vue3-test/assets/png/logo-daf79db1.png"})[`../assets/images/${e}`],self.location).href,ne=D("layout",{state:()=>({isCollapse:!1}),actions:{
// 切换isCollapse的状态
changeIsCollapse(){this.isCollapse=!this.isCollapse}},persist:{enabled:!0,strategies:[{storage:sessionStorage}]}}),le={class:"logo"},ie=["src"],oe={key:0,class:"logo-text"},re=q(Object.assign({name:"Logo"},{__name:"Logo",setup(e){const a=ne(),{isCollapse:s}=T(a);return(e,a)=>(v(),h("div",le,[j("img",{class:"logo-image",src:b(te)("logo.png"),alt:"logo.png"},null,8,ie),k(x,{"enter-active-class":"animate__animated animate__fadeInDown",mode:"out-in"},{default:y((()=>[b(s)?C("",!0):(v(),h("h1",oe,"JiAdmin"))])),_:1})]))}}),[["__scopeId","data-v-53b89689"]]),ue=q(Object.assign({name:"SideBarItem"},{__name:"SideBarItem",setup:t=>(t,n)=>{const l=e,i=a,o=s;return v(!0),h(I,null,w(b(P),(e=>{var a;return v(),h(I,null,[(null==(a=e.children)?void 0:a.length)?(v(),O(o,{key:e.path,index:e.path},{title:y((()=>[k(l,null,{default:y((()=>[(v(),O(M(e.meta.icon)))])),_:2},1024),j("span",null,B(e.meta.title),1)])),default:y((()=>[(v(!0),h(I,null,w(e.children,(a=>(v(),O(i,{key:a.path,index:e.path+"/"+a.path},{default:y((()=>[j("span",null,B(a.meta.title),1)])),_:2},1032,["index"])))),128))])),_:2},1032,["index"])):(v(),O(i,{key:e.path,index:e.path},{default:y((()=>[k(l,null,{default:y((()=>[(v(),O(M(e.meta.icon)))])),_:2},1024),j("span",null,B(e.meta.title),1)])),_:2},1032,["index"]))],64)})),256)}}),[["__scopeId","data-v-1e42966a"]]),ce={class:"sidebar"},de=q(Object.assign({name:"SideBar"},{__name:"index",setup(e){const a=J(),s=S((()=>{const{path:e}=a;return e})),n=ne(),{isCollapse:l}=T(n);return(e,a)=>{const n=t;return v(),h("div",ce,[k(re),k(n,{"background-color":"#001428","text-color":"#BBB","active-text-color":"#fff",collapse:b(l),"collapse-transition":!1,"default-active":s.value,router:""},{default:y((()=>[k(ue)])),_:1},8,["collapse","default-active"])])}}}),[["__scopeId","data-v-d8051fa4"]]),me={class:"breadcrumb"},pe={key:0,class:"no-redirect"},_e=["onClick"],ge=q(Object.assign({name:"Breadcrumb"},{__name:"Breadcrumb",setup(e){const a=J(),s=X(),t=L([]);z(a,(()=>{t.value=a.matched.filter((e=>e.meta&&e.meta.title))}),{immediate:!0});return(e,a)=>{const i=n,o=l;return v(),h("div",me,[k(o,{"separator-icon":b(Y)},{default:y((()=>[k(E,{name:"breadcrumb"},{default:y((()=>[(v(!0),h(I,null,w(t.value,((e,a)=>(v(),O(i,{key:e.path},{default:y((()=>[a===t.value.length-1?(v(),h("span",pe,B(e.meta.title),1)):(v(),h("a",{key:1,class:"redirect",onClick:A((a=>(e=>{s.push(e.path)})(e)),["prevent"])},B(e.meta.title),9,_e))])),_:2},1024)))),128))])),_:1})])),_:1},8,["separator-icon"])])}}}),[["__scopeId","data-v-c0ca521e"]]),fe={class:"search"},ve=Object.assign({name:"MySearch"},{__name:"Search",setup:a=>(a,s)=>{const t=F("Search",!0),n=e;return v(),h("div",fe,[k(n,{size:22},{default:y((()=>[k(t)])),_:1})])}}),he=Object.assign({name:"DarkMode"},{__name:"DarkMode",setup(e){const a=se(),s=L(!!a.htmlModeClass);U((()=>{document.documentElement.className=a.htmlModeClass}));const t=()=>{s.value?a.htmlModeClass="dark":a.htmlModeClass="",document.documentElement.classList.toggle("dark")};return(e,a)=>{const n=i;return v(),O(n,{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=e=>s.value=e),style:{"--el-switch-on-color":"#0960bd","--el-switch-off-color":"#f60"},"inline-prompt":"","active-icon":b(G),"inactive-icon":b(K),onChange:t,size:"large"},null,8,["modelValue","active-icon","inactive-icon"])}}}),je={class:"el-dropdown-link"},be=Object.assign({name:"MyLanguage"},{__name:"Language",setup(e){var a;const s=R(),{locale:t}=T(s),n=L((null==(a=W.find((e=>e.key===t.value)))?void 0:a.title)??""),l=e=>{s.setLocale(e.key),n.value=e.title};return(e,a)=>{const s=o,t=r,i=u;return v(),O(i,{trigger:"click",onCommand:l},{dropdown:y((()=>[k(t,null,{default:y((()=>[(v(!0),h(I,null,w(b(W),(e=>(v(),O(s,{key:e.key,command:e},{default:y((()=>[N(B(e.title),1)])),_:2},1032,["command"])))),128))])),_:1})])),default:y((()=>[j("span",je,B(n.value),1)])),_:1})}}}),ke=Object.assign({name:"MyMessage"},{__name:"Message",setup:a=>(a,s)=>{const t=F("Message",!0),n=e;return v(),O(n,{size:22},{default:y((()=>[k(t)])),_:1})}});function ye(e,a=document.documentElement){return a.addEventListener("fullscreenchange",(function(){e.value=!!document.fullscreenElement})),function(){document.fullscreenEnabled?e.value?document.fullscreenElement&&document.exitFullscreen():a.requestFullscreen():c.warning("浏览器不支持全屏API")}}const Ce=Object.assign({name:"MyFullScreen"},{__name:"FullScreen",setup(a){const s=L(!1),t=ye(s);return(a,n)=>{const l=F("FullScreen",!0),i=e;return v(),h("div",{class:"toggle-screen flex",onClick:n[0]||(n[0]=(...e)=>b(t)&&b(t)(...e))},[b(s)?(v(),O(i,{key:1,size:22},{default:y((()=>[k(b(Q))])),_:1})):(v(),O(i,{key:0,size:22},{default:y((()=>[k(l)])),_:1}))])}}}),xe={class:"el-dropdown-link"},we={class:"username"},Ie=q(Object.assign({name:"UserAvatar"},{__name:"UserAvatar",setup(a){const s=$(),t=()=>{d.confirm("您是否确认退出登录?","温馨  提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{await s.doLogout(),s.$reset(),await H.push("/login")}))},n=L(),l=L();return U((()=>{n.value=s.userInfo.nickName,l.value=s.userInfo.avatarUrl})),(a,s)=>{const i=m,c=e,d=o,p=r,_=u;return v(),O(_,{trigger:"click"},{dropdown:y((()=>[k(p,null,{default:y((()=>[k(d,null,{default:y((()=>[N("仓库地址")])),_:1}),k(d,null,{default:y((()=>[N("个人中心")])),_:1}),k(d,{divided:"",onClick:t},{default:y((()=>[N("退出登录")])),_:1})])),_:1})])),default:y((()=>[j("span",xe,[k(i,{size:27,src:l.value},null,8,["src"]),j("span",we,B(n.value),1),k(c,null,{default:y((()=>[k(b(Z))])),_:1})])])),_:1})}}}),[["__scopeId","data-v-c305f532"]]),Oe={class:"nav"},Me={class:"nav-left"},Be={class:"nav-right"},Se={class:"nav-right__item"},Le={class:"nav-right__item"},ze={class:"nav-right__item"},Ee={class:"nav-right__item"},Ae={class:"nav-right__item"},Fe={class:"nav-right__item nav-right__user"},Ue=q(Object.assign({name:"NavBar"},{__name:"Nav",setup(a){const s=ne(),{changeIsCollapse:t}=s,{isCollapse:n}=T(s);return U((()=>{document.body.clientWidth<1200&&!n.value&&s.changeIsCollapse()})),(a,s)=>{const l=e;return v(),h("div",Oe,[j("div",Me,[k(l,{size:25,onClick:b(t)},{default:y((()=>[b(n)?(v(),O(b(ae),{key:1})):(v(),O(b(ee),{key:0}))])),_:1},8,["onClick"]),k(ge)]),j("ul",Be,[j("li",Se,[k(ve)]),j("li",Le,[k(he)]),j("li",ze,[k(be)]),j("li",Ee,[k(ke)]),j("li",Ae,[k(Ce)]),j("li",Fe,[k(Ie)])])])}}}),[["__scopeId","data-v-ff9fe1e6"]]),Ne={class:"header"},Ve=Object.assign({name:"HeaderContainer"},{__name:"index",setup:e=>(e,a)=>(v(),h("div",Ne,[k(Ue)]))}),De={class:"layout"},Te=q({__name:"index",setup(e){const a=ne(),{isCollapse:s}=T(a);return(e,a)=>{const t=_,n=g,l=F("router-view"),i=f,o=p;return v(),h("div",De,[k(o,null,{default:y((()=>[k(t,{width:b(s)?"65px":"200px"},{default:y((()=>[k(de)])),_:1},8,["width"]),k(o,null,{default:y((()=>[k(n,null,{default:y((()=>[k(Ve)])),_:1}),k(i,null,{default:y((()=>[k(l,null,{default:y((({Component:e})=>[k(x,{name:"fade",mode:"out-in"},{default:y((()=>[(v(),O(V,null,[(v(),O(M(e)))],1024))])),_:2},1024)])),_:1})])),_:1})])),_:1})])),_:1})])}}},[["__scopeId","data-v-58539532"]]);export{Te as default};
