import{aa as a,o as n,b as e,q as o,A as d,e as s,w as i,X as t,am as l,an as r,ae as c}from"./vendor-b3ef81b6.js";import{a as m}from"./index-0b0c78ac.js";import{u}from"./useInstance-8c9b1313.js";const p={class:"dashboard"},f={class:"text-3xl font-bold dark:text-7xl"},g=o("div",{class:"needLoading",style:{width:"100px",height:"100px","background-color":"pink"}},null,-1),b={__name:"index",setup(b){const x=m(),y=()=>{},k=()=>{},L=a({username:"admin",password:"admin"}),{global:_}=u(),h=()=>{x.doLogin(L)},v=()=>{_.$myLoading.hideFullScreenLoading(".needLoading")};return(a,m)=>{const u=l,b=r,x=c;return n(),e("div",p,[o("span",f,d(a.$t("common.main"))+" 国际化方法",1),s(u,{"mb-1":"",data:[]}),s(b,{total:100}),s(x,{type:"primary",onClick:y,disabled:""},{default:i((()=>[t("用户登录接口1")])),_:1}),s(x,{type:"success",onClick:k,disabled:""},{default:i((()=>[t("用户登录接口2")])),_:1}),s(x,{type:"info",onClick:h,disabled:""},{default:i((()=>[t("用户登录接口3")])),_:1}),s(x,{type:"info",onClick:m[0]||(m[0]=a=>{return n="123",void _.$myLoading.showFullScreenLoading(".needLoading",n);var n})},{default:i((()=>[t("局部加载loading(含参数)")])),_:1}),s(x,{type:"info",onClick:v},{default:i((()=>[t("取消loading")])),_:1}),g])}}};export{b as default};
