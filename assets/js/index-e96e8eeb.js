import{K as e,S as a,ao as t,o as l,b as r,e as s,w as i,q as n,X as d,ap as o,x as c,A as u,ae as p,aq as g,ar as f,as as v,at as w,am as m,au as h,an as y,av as b}from"./vendor-b3ef81b6.js";import{g as _}from"./user-625d9968.js";import"./index-0b0c78ac.js";const x={class:"user"},k={class:"card-header"},z={style:{color:"#218868"}},A={style:{display:"flex","align-items":"center"}},C={__name:"index",setup(C){const U=e([]),j=e(1),N=e(10),S=e(0),q=e(!1),F=async()=>{q.value=!0;const e=await _(j.value,N.value);S.value=e.data.total,U.value=e.data.records,q.value=!1};a((async()=>{await F()}));const K=()=>{F()},P=()=>{F()};return(e,a)=>{const _=p,C=g,F=f,T=v,X=w,B=m,D=h,E=y,G=t("auto-height"),H=b;return l(),r("div",x,[s(D,{class:"box-car"},{header:i((()=>[n("div",k,[s(_,{type:"primary",icon:"FolderAdd",round:""},{default:i((()=>[d("新增")])),_:1})])])),default:i((()=>[o((l(),c(B,{data:U.value,style:{width:"100%"},border:""},{default:i((()=>[s(C,{label:"序号",width:"80",align:"center",type:"index"}),s(C,{prop:"nickName",label:"用户昵称",width:"120",align:"center"},{default:i((e=>[n("span",z,u(e.row.nickName),1)])),_:1}),s(C,{prop:"avatarUrl",label:"头像",width:"180",align:"center"},{default:i((e=>[n("div",A,[s(T,{placement:"right",title:"",width:500,trigger:"hover"},{reference:i((()=>[s(F,{loading:"lazy",fit:"cover",src:e.row.avatarUrl},null,8,["src"])])),default:i((()=>[s(F,{style:{width:"100%",height:"100%"},loading:"lazy",fit:"cover",src:e.row.avatarUrl},null,8,["src"])])),_:2},1024)])])),_:1}),s(C,{prop:"email",label:"邮箱",align:"center"}),s(C,{prop:"phoneNumber",label:"手机号",align:"center"}),s(C,{prop:"gender",label:"性别",width:"80",align:"center"},{default:i((e=>[s(X,{type:1===e.row.gender?"success":"warning",class:"mx-1",effect:"dark"},{default:i((()=>[d(u(1===e.row.gender?"男":"女"),1)])),_:2},1032,["type"])])),_:1}),s(C,{prop:"age",label:"年龄",width:"70",align:"center"}),s(C,{prop:"createdTime",label:"创建时间"}),s(C,{prop:"isActive",label:"状态",width:"80",align:"center"},{default:i((e=>[s(X,{type:1===e.row.isActive?"success":"warning",class:"mx-1",effect:"light"},{default:i((()=>[d(u(1===e.row.isActive?"激活":"未激活"),1)])),_:2},1032,["type"])])),_:1}),s(C,{prop:"isAdmin",label:"管理员",width:"80",align:"center"},{default:i((e=>[s(X,{type:1===e.row.isAdmin?"success":"warning",class:"mx-1",effect:"plain"},{default:i((()=>[d(u(1===e.row.isAdmin?"是":"否"),1)])),_:2},1032,["type"])])),_:1}),s(C,{label:"操作",width:"130",align:"center"},{default:i((e=>[s(_,{link:"",type:"warning",size:"default",onClick:a=>(e.row,void alert("修改"))},{default:i((()=>[d("修改")])),_:2},1032,["onClick"]),s(_,{link:"",type:"danger",size:"default",onClick:a=>(e.row,void alert("删除"))},{default:i((()=>[d("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[G,{bottom:80}],[H,q.value]])])),_:1}),s(E,{class:"mt-[6px]","current-page":j.value,"onUpdate:currentPage":a[0]||(a[0]=e=>j.value=e),"page-size":N.value,"onUpdate:pageSize":a[1]||(a[1]=e=>N.value=e),"page-sizes":[10,20,30,40],background:!0,layout:"prev, pager, next, jumper, ->, total, sizes",total:S.value,onSizeChange:P,onCurrentChange:K},null,8,["current-page","page-size","total"])])}}};export{C as default};
