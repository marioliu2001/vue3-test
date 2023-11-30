import{x as e,D as a,F as t,G as r,H as l,B as i,I as s,C as n}from"./element-plus-7e112574.js";import{g as o}from"./user-a7125ce4.js";import{u as d}from"./useInstance-bc2545f6.js";import{r as p,f as c,ak as u,o as g,c as m,O as f,R as h,a as w,V as v,_ as y,S as j,W as b}from"./@vue-557ff3e0.js";import"./lodash-es-0f17fca1.js";import"./async-validator-cf877c1f.js";import"./@element-plus-10a58ae2.js";import"./@ctrl-08719ea3.js";import"./@popperjs-b78c3215.js";import"./escape-html-203c476a.js";import"./dayjs-02d3be64.js";import"./normalize-wheel-es-3222b0a2.js";import"./index-d993cf3c.js";import"./pinia-d932e60b.js";import"./pinia-plugin-persist-70d140bd.js";import"./vue-i18n-4d80fa7d.js";import"./@intlify-490a3a79.js";import"./vue-router-e94cc7dd.js";import"./axios-87267c27.js";import"./nprogress-f8a163bf.js";const _={class:"user"},x={class:"card-header"},k={style:{color:"#218868"}},z={style:{display:"flex","align-items":"center"}},C={__name:"index",setup(C){const{global:A}=d(),L=p([]),S=p(1),U=p(10),F=p(0),N=async()=>{A.$myLoading.showFullScreenLoading(".needLoading","正在载入数据"),await o(S.value,U.value).then((e=>{e&&e.data&&(F.value=e.data.total,L.value=e.data.records)})).catch((e=>{})).finally((()=>{A.$myLoading.hideFullScreenLoading()}))};c((async()=>{await N()}));const I=()=>{N()},$=()=>{N()};return(o,d)=>{const p=e,c=a,C=t,A=r,N=l,B=i,D=s,G=n,H=u("auto-height");return g(),m("div",_,[f(D,{class:"box-car"},{header:h((()=>[w("div",x,[f(p,{type:"primary",icon:"FolderAdd",round:""},{default:h((()=>[v("新增")])),_:1})])])),default:h((()=>[y((g(),j(B,{class:"needLoading",data:L.value,style:{width:"100%"},border:""},{default:h((()=>[f(c,{label:"序号",width:"80",align:"center",type:"index"}),f(c,{prop:"nickName",label:"用户昵称",width:"120",align:"center"},{default:h((e=>[w("span",k,b(e.row.nickName),1)])),_:1}),f(c,{prop:"avatarUrl",label:"头像",width:"180",align:"center"},{default:h((e=>[w("div",z,[f(A,{placement:"right",title:"",width:500,trigger:"hover"},{reference:h((()=>[f(C,{loading:"lazy",fit:"cover",src:e.row.avatarUrl},null,8,["src"])])),default:h((()=>[f(C,{style:{width:"100%",height:"100%"},loading:"lazy",fit:"cover",src:e.row.avatarUrl},null,8,["src"])])),_:2},1024)])])),_:1}),f(c,{prop:"email",label:"邮箱",align:"center"}),f(c,{prop:"phoneNumber",label:"手机号",align:"center"}),f(c,{prop:"gender",label:"性别",width:"80",align:"center"},{default:h((e=>[f(N,{type:1===e.row.gender?"success":"warning",class:"mx-1",effect:"dark"},{default:h((()=>[v(b(1===e.row.gender?"男":"女"),1)])),_:2},1032,["type"])])),_:1}),f(c,{prop:"age",label:"年龄",width:"70",align:"center"}),f(c,{prop:"createdTime",label:"创建时间"}),f(c,{prop:"isActive",label:"状态",width:"80",align:"center"},{default:h((e=>[f(N,{type:1===e.row.isActive?"success":"warning",class:"mx-1",effect:"light"},{default:h((()=>[v(b(1===e.row.isActive?"激活":"未激活"),1)])),_:2},1032,["type"])])),_:1}),f(c,{prop:"isAdmin",label:"管理员",width:"80",align:"center"},{default:h((e=>[f(N,{type:1===e.row.isAdmin?"success":"warning",class:"mx-1",effect:"plain"},{default:h((()=>[v(b(1===e.row.isAdmin?"是":"否"),1)])),_:2},1032,["type"])])),_:1}),f(c,{label:"操作",width:"130",align:"center"},{default:h((e=>[f(p,{link:"",type:"warning",size:"default",onClick:a=>(e.row,void alert("修改"))},{default:h((()=>[v("修改")])),_:2},1032,["onClick"]),f(p,{link:"",type:"danger",size:"default",onClick:a=>(e.row,void alert("删除"))},{default:h((()=>[v("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[H,{bottom:80}]])])),_:1}),f(G,{class:"mt-[6px]","current-page":S.value,"onUpdate:currentPage":d[0]||(d[0]=e=>S.value=e),"page-size":U.value,"onUpdate:pageSize":d[1]||(d[1]=e=>U.value=e),"page-sizes":[10,20,30,40],background:!0,layout:"prev, pager, next, jumper, ->, total, sizes",total:F.value,onSizeChange:$,onCurrentChange:I},null,8,["current-page","page-size","total"])])}}};export{C as default};