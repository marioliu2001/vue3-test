import{c as s}from"./_castPath.js-e468e549.js";import{i as r}from"./isArguments.js-18475d90.js";import{i as t}from"./isArray.js-5708991a.js";import{i}from"./_isIndex.js-988a1996.js";import{i as o}from"./isLength.js-3d9e20ff.js";import{t as a}from"./_toKey.js-ceab1899.js";function m(m,j,n){for(var e=-1,f=(j=s(j,m)).length,p=!1;++e<f;){var l=a(j[e]);if(!(p=null!=m&&n(m,l)))break;m=m[l]}return p||++e!=f?p:!!(f=null==m?0:m.length)&&o(f)&&i(l,f)&&(t(m)||r(m))}export{m as h};
