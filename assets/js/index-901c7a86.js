import{x as e,D as a,F as t,G as r,H as l,B as s,I as i,C as n,J as o}from"./element-plus-7e112574.js";import{g as p}from"./user-a7125ce4.js";import{r as d,f as c,ak as u,o as m,c as g,O as f,R as v,a as w,V as h,_ as y,S as j,W as _}from"./@vue-557ff3e0.js";import"./lodash-es-0f17fca1.js";import"./async-validator-cf877c1f.js";import"./@element-plus-10a58ae2.js";import"./@ctrl-08719ea3.js";import"./@popperjs-b78c3215.js";import"./escape-html-203c476a.js";import"./dayjs-02d3be64.js";import"./normalize-wheel-es-3222b0a2.js";import"./index-d993cf3c.js";import"./pinia-d932e60b.js";import"./pinia-plugin-persist-70d140bd.js";import"./vue-i18n-4d80fa7d.js";import"./@intlify-490a3a79.js";import"./vue-router-e94cc7dd.js";import"./axios-87267c27.js";import"./nprogress-f8a163bf.js";const b={class:"user"},x={class:"card-header"},k={style:{color:"#218868"}},z={style:{display:"flex","align-items":"center"}},C={__name:"index",setup(C){const A=d([]),U=d(1),N=d(10),S=d(0),F=d(!1),B=async()=>{F.value=!0;const e=await p(U.value,N.value);S.value=e.data.total,A.value=e.data.records,F.value=!1};c((async()=>{await B()}));const D=()=>{B()},G=()=>{B()};return(p,d)=>{const c=e,C=a,B=t,H=r,I=l,J=s,O=i,P=n,R=u("auto-height"),T=o;return m(),g("div",b,[f(O,{class:"box-car"},{header:v((()=>[w("div",x,[f(c,{type:"primary",icon:"FolderAdd",round:""},{default:v((()=>[h("新增")])),_:1})])])),default:v((()=>[y((m(),j(J,{data:A.value,style:{width:"100%"},border:""},{default:v((()=>[f(C,{label:"序号",width:"80",align:"center",type:"index"}),f(C,{prop:"nickName",label:"用户昵称",width:"120",align:"center"},{default:v((e=>[w("span",k,_(e.row.nickName),1)])),_:1}),f(C,{prop:"avatarUrl",label:"头像",width:"180",align:"center"},{default:v((e=>[w("div",z,[f(H,{placement:"right",title:"",width:500,trigger:"hover"},{reference:v((()=>[f(B,{loading:"lazy",fit:"cover",src:e.row.avatarUrl},null,8,["src"])])),default:v((()=>[f(B,{style:{width:"100%",height:"100%"},loading:"lazy",fit:"cover",src:e.row.avatarUrl},null,8,["src"])])),_:2},1024)])])),_:1}),f(C,{prop:"email",label:"邮箱",align:"center"}),f(C,{prop:"phoneNumber",label:"手机号",align:"center"}),f(C,{prop:"gender",label:"性别",width:"80",align:"center"},{default:v((e=>[f(I,{type:1===e.row.gender?"success":"warning",class:"mx-1",effect:"dark"},{default:v((()=>[h(_(1===e.row.gender?"男":"女"),1)])),_:2},1032,["type"])])),_:1}),f(C,{prop:"age",label:"年龄",width:"70",align:"center"}),f(C,{prop:"createdTime",label:"创建时间"}),f(C,{prop:"isActive",label:"状态",width:"80",align:"center"},{default:v((e=>[f(I,{type:1===e.row.isActive?"success":"warning",class:"mx-1",effect:"light"},{default:v((()=>[h(_(1===e.row.isActive?"激活":"未激活"),1)])),_:2},1032,["type"])])),_:1}),f(C,{prop:"isAdmin",label:"管理员",width:"80",align:"center"},{default:v((e=>[f(I,{type:1===e.row.isAdmin?"success":"warning",class:"mx-1",effect:"plain"},{default:v((()=>[h(_(1===e.row.isAdmin?"是":"否"),1)])),_:2},1032,["type"])])),_:1}),f(C,{label:"操作",width:"130",align:"center"},{default:v((e=>[f(c,{link:"",type:"warning",size:"default",onClick:a=>(e.row,void alert("修改"))},{default:v((()=>[h("修改")])),_:2},1032,["onClick"]),f(c,{link:"",type:"danger",size:"default",onClick:a=>(e.row,void alert("删除"))},{default:v((()=>[h("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[R,{bottom:80}],[T,F.value]])])),_:1}),f(P,{class:"mt-[6px]","current-page":U.value,"onUpdate:currentPage":d[0]||(d[0]=e=>U.value=e),"page-size":N.value,"onUpdate:pageSize":d[1]||(d[1]=e=>N.value=e),"page-sizes":[10,20,30,40],background:!0,layout:"prev, pager, next, jumper, ->, total, sizes",total:S.value,onSizeChange:G,onCurrentChange:D},null,8,["current-page","page-size","total"])])}}};export{C as default};
