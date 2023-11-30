import{a as e,i as a,b as t,c as l,d as n,e as r,D as s,f as o,g as i,h as u,j as c,r as _,k as m,l as f,m as g,s as v,n as p,o as b,p as d,u as L,q as E,N as I,t as T,v as k,w as F,x as N,y as O,C as h,z as R,A as P,B as y,E as M,F as W,G as A,H as D,I as C,J as U,M as w,K as H,L as S,O as $,P as V,Q as x,R as Y,S as j,T as G}from"./@intlify-490a3a79.js";import{E as B,aa as X,ag as J,y as z,f as q,I as Q,B as K,r as Z,t as ee,C as ae,w as te,P as le,e as ne,z as re,O as se,a3 as oe}from"./@vue-557ff3e0.js";
/*!
  * vue-i18n v9.6.5
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const ie="9.6.5";const ue=j.__EXTEND_POINT__,ce=R(ue);ce(),ce(),ce(),ce(),ce(),ce(),ce(),ce();const _e=h.__EXTEND_POINT__,me=R(_e),fe={
// composer module errors
UNEXPECTED_RETURN_TYPE:_e,
// legacy module errors
INVALID_ARGUMENT:me(),
// i18n module errors
MUST_BE_CALL_SETUP_TOP:me(),NOT_INSTALLED:me(),NOT_AVAILABLE_IN_LEGACY_MODE:me(),
// directive module errors
REQUIRED_VALUE:me(),INVALID_VALUE:me(),
// vue-devtools errors
CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:me(),NOT_INSTALLED_WITH_PROVIDE:me(),
// unexpected error
UNEXPECTED_ERROR:me(),
// not compatible legacy vue-i18n constructor
NOT_COMPATIBLE_LEGACY_VUE_I18N:me(),
// bridge support vue 2.x only
BRIDGE_SUPPORT_VUE_2_ONLY:me(),
// need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:me(),
// Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
NOT_AVAILABLE_COMPOSITION_IN_LEGACY:me(),
// for enhancement
__EXTEND_POINT__:me()};function ge(e,...a){return p(e,null,void 0)}const ve=b("__translateVNode"),pe=b("__datetimeParts"),be=b("__numberParts"),de=b("__setPluralRules"),Le=b("__injectWithOption"),Ee=b("__dispose");function Ie(e){if(!l(e))return e;for(const a in e)if(d(e,a))if(a.includes(".")){const t=a.split("."),n=t.length-1;let r=e,s=!1;for(let e=0;e<n;e++){if(t[e]in r||(r[t[e]]={}),!l(r[t[e]])){s=!0;break}r=r[t[e]]}s||(r[t[n]]=e[a],delete e[a]),l(r[t[n]])&&Ie(r[t[n]])}else l(e[a])&&Ie(e[a]);return e}function Te(e,a){const{messages:l,__i18n:n,messageResolver:r,flatJson:s}=a,u=i(l)?l:o(n)?{}:{[e]:{}};if(o(n)&&n.forEach((e=>{if("locale"in e&&"resource"in e){const{locale:a,resource:t}=e;a?(u[a]=u[a]||{},Fe(t,u[a])):Fe(t,u)}else t(e)&&Fe(JSON.parse(e),u)})),null==r&&s)for(const t in u)d(u,t)&&Ie(u[t]);return u}const ke=e=>!l(e)||o(e);function Fe(e,a){if(ke(e)||ke(a))throw ge(fe.INVALID_VALUE);for(const t in e)d(e,t)&&(ke(e[t])||ke(a[t])?a[t]=e[t]:Fe(e[t],a[t]))}function Ne(e){return e.type}function Oe(e,a,t){let n=l(a.messages)?a.messages:{};"__i18nGlobal"in t&&(n=Te(e.locale.value,{messages:n,__i18n:t.__i18nGlobal}));const r=Object.keys(n);if(r.length&&r.forEach((a=>{e.mergeLocaleMessage(a,n[a])})),l(a.datetimeFormats)){const t=Object.keys(a.datetimeFormats);t.length&&t.forEach((t=>{e.mergeDateTimeFormat(t,a.datetimeFormats[t])}))}if(l(a.numberFormats)){const t=Object.keys(a.numberFormats);t.length&&t.forEach((t=>{e.mergeNumberFormat(t,a.numberFormats[t])}))}}function he(e){return se(oe,null,e,0)}const Re="__INTLIFY_META__",Pe=()=>[],ye=()=>!1;let Me=0;function We(e){return(a,t,l,n)=>e(t,l,ne()||void 0,n)}const Ae=/* @__NO_SIDE_EFFECTS__ */()=>{const e=ne();let a=null;return e&&(a=Ne(e)[Re])?{[Re]:a}:null};function De(r={},_){const{__root:m,__injectWithOption:f}=r,g=void 0===m,v=r.flatJson;let p=!n(r.inheritLocale)||r.inheritLocale;const b=Z(
// prettier-ignore
m&&p?m.locale.value:t(r.locale)?r.locale:s),I=Z(
// prettier-ignore
m&&p?m.fallbackLocale.value:t(r.fallbackLocale)||o(r.fallbackLocale)||i(r.fallbackLocale)||!1===r.fallbackLocale?r.fallbackLocale:b.value),T=Z(Te(b.value,r)),k=Z(i(r.datetimeFormats)?r.datetimeFormats:{[b.value]:{}}),F=Z(i(r.numberFormats)?r.numberFormats:{[b.value]:{}});let N=m?m.missingWarn:!n(r.missingWarn)&&!u(r.missingWarn)||r.missingWarn,h=m?m.fallbackWarn:!n(r.fallbackWarn)&&!u(r.fallbackWarn)||r.fallbackWarn,R=m?m.fallbackRoot:!n(r.fallbackRoot)||r.fallbackRoot,j=!!r.fallbackFormat,B=c(r.missing)?r.missing:null,X=c(r.missing)?We(r.missing):null,J=c(r.postTranslation)?r.postTranslation:null,z=m?m.warnHtmlMessage:!n(r.warnHtmlMessage)||r.warnHtmlMessage,q=!!r.escapeParameter;const Q=m?m.modifiers:i(r.modifiers)?r.modifiers:{};let K,ae=r.pluralRules||m&&m.pluralRules;K=(()=>{g&&G(null);const e={version:ie,locale:b.value,fallbackLocale:I.value,messages:T.value,modifiers:Q,pluralRules:ae,missing:null===X?void 0:X,missingWarn:N,fallbackWarn:h,fallbackFormat:j,unresolving:!0,postTranslation:null===J?void 0:J,warnHtmlMessage:z,escapeParameter:q,messageResolver:r.messageResolver,messageCompiler:r.messageCompiler,__meta:{framework:"vue"}};e.datetimeFormats=k.value,e.numberFormats=F.value,e.__datetimeFormatters=i(K)?K.__datetimeFormatters:void 0,e.__numberFormatters=i(K)?K.__numberFormatters:void 0;const a=P(e);return g&&G(a),a})(),L(K,b.value,I.value);const le=ee({get:()=>b.value,set:e=>{b.value=e,K.locale=b.value}}),ne=ee({get:()=>I.value,set:e=>{I.value=e,K.fallbackLocale=I.value,L(K,b.value,e)}}),re=ee((()=>T.value)),se=ee((()=>k.value)),oe=ee((()=>F.value));const ue=(e,t,l,n,r,s)=>{let o;b.value,I.value,T.value,k.value,F.value;try{__INTLIFY_PROD_DEVTOOLS__&&W(Ae()),g||(K.fallbackContext=m?A():void 0),o=e(K)}finally{__INTLIFY_PROD_DEVTOOLS__,g||(K.fallbackContext=void 0)}if("translate exists"!==l&&// for not `te` (e.g `t`)
a(o)&&o===D||"translate exists"===l&&!o){const[e,a]=t();return m&&R?n(m):r(e)}if(s(o))return o;throw ge(fe.UNEXPECTED_RETURN_TYPE)};function ce(...e){return ue((a=>Reflect.apply(U,null,[a,...e])),(()=>C(...e)),"translate",(a=>Reflect.apply(a.t,a,[...e])),(e=>e),(e=>t(e)))}const _e={normalize:function(e){return e.map((e=>t(e)||a(e)||n(e)?he(String(e)):e))},interpolate:e=>e,type:"vnode"};function me(e){return T.value[e]||{}}Me++,m&&E&&(te(m.locale,(e=>{p&&(b.value=e,K.locale=e,L(K,b.value,I.value))})),te(m.fallbackLocale,(e=>{p&&(I.value=e,K.fallbackLocale=e,L(K,b.value,I.value))})));const Ee={id:Me,locale:le,fallbackLocale:ne,get inheritLocale(){return p},set inheritLocale(e){p=e,e&&m&&(b.value=m.locale.value,I.value=m.fallbackLocale.value,L(K,b.value,I.value))},get availableLocales(){return Object.keys(T.value).sort()},messages:re,get modifiers(){return Q},get pluralRules(){return ae||{}},get isGlobal(){return g},get missingWarn(){return N},set missingWarn(e){N=e,K.missingWarn=N},get fallbackWarn(){return h},set fallbackWarn(e){h=e,K.fallbackWarn=h},get fallbackRoot(){return R},set fallbackRoot(e){R=e},get fallbackFormat(){return j},set fallbackFormat(e){j=e,K.fallbackFormat=j},get warnHtmlMessage(){return z},set warnHtmlMessage(e){z=e,K.warnHtmlMessage=e},get escapeParameter(){return q},set escapeParameter(e){q=e,K.escapeParameter=e},t:ce,getLocaleMessage:me,setLocaleMessage:function(e,a){if(v){const t={[e]:a};for(const e in t)d(t,e)&&Ie(t[e]);a=t[e]}T.value[e]=a,K.messages=T.value},mergeLocaleMessage:function(e,a){T.value[e]=T.value[e]||{};const t={[e]:a};for(const l in t)d(t,l)&&Ie(t[l]);Fe(a=t[e],T.value[e]),K.messages=T.value},getPostTranslationHandler:function(){return c(J)?J:null},setPostTranslationHandler:function(e){J=e,K.postTranslation=e},getMissingHandler:function(){return B},setMissingHandler:function(e){null!==e&&(X=We(e)),B=e,K.missing=X},[de]:function(e){ae=e,K.pluralRules=ae}};return Ee.datetimeFormats=se,Ee.numberFormats=oe,Ee.rt=function(...a){const[t,n,r]=a;if(r&&!l(r))throw ge(fe.INVALID_ARGUMENT);return ce(t,n,e({resolvedMessage:!0},r||{}))},Ee.te=function(e,a){return ue((()=>{if(!e)return!1;const l=me(t(a)?a:b.value),n=K.messageResolver(l,e);return x(n)||Y(n)||t(n)}),(()=>[e]),"translate exists",(t=>Reflect.apply(t.te,t,[e,a])),ye,(e=>n(e)))},Ee.tm=function(e){const a=function(e){let a=null;const t=O(K,I.value,b.value);for(let l=0;l<t.length;l++){const n=T.value[t[l]]||{},r=K.messageResolver(n,e);if(null!=r){a=r;break}}return a}(e);return null!=a?a:m&&m.tm(e)||{}},Ee.d=function(...e){return ue((a=>Reflect.apply(S,null,[a,...e])),(()=>H(...e)),"datetime format",(a=>Reflect.apply(a.d,a,[...e])),(()=>w),(e=>t(e)))},Ee.n=function(...e){return ue((a=>Reflect.apply(V,null,[a,...e])),(()=>$(...e)),"number format",(a=>Reflect.apply(a.n,a,[...e])),(()=>w),(e=>t(e)))},Ee.getDateTimeFormat=function(e){return k.value[e]||{}},Ee.setDateTimeFormat=function(e,a){k.value[e]=a,K.datetimeFormats=k.value,y(K,e,a)},Ee.mergeDateTimeFormat=function(a,t){k.value[a]=e(k.value[a]||{},t),K.datetimeFormats=k.value,y(K,a,t)},Ee.getNumberFormat=function(e){return F.value[e]||{}},Ee.setNumberFormat=function(e,a){F.value[e]=a,K.numberFormats=F.value,M(K,e,a)},Ee.mergeNumberFormat=function(a,t){F.value[a]=e(F.value[a]||{},t),K.numberFormats=F.value,M(K,a,t)},Ee[Le]=f,Ee[ve]=function(...e){return ue((a=>{let t;const l=a;try{l.processor=_e,t=Reflect.apply(U,null,[l,...e])}finally{l.processor=null}return t}),(()=>C(...e)),"translate",(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
a=>a[ve](...e)),(e=>[he(e)]),(e=>o(e)))},Ee[pe]=function(...e){return ue((a=>Reflect.apply(S,null,[a,...e])),(()=>H(...e)),"datetime format",(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
a=>a[pe](...e)),Pe,(e=>t(e)||o(e)))},Ee[be]=function(...e){return ue((a=>Reflect.apply(V,null,[a,...e])),(()=>$(...e)),"number format",(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
a=>a[be](...e)),Pe,(e=>t(e)||o(e)))},Ee}function Ce(l={},r){{const r=De(function(a){const l=t(a.locale)?a.locale:s,r=t(a.fallbackLocale)||o(a.fallbackLocale)||i(a.fallbackLocale)||!1===a.fallbackLocale?a.fallbackLocale:l,_=c(a.missing)?a.missing:void 0,m=!n(a.silentTranslationWarn)&&!u(a.silentTranslationWarn)||!a.silentTranslationWarn,f=!n(a.silentFallbackWarn)&&!u(a.silentFallbackWarn)||!a.silentFallbackWarn,g=!n(a.fallbackRoot)||a.fallbackRoot,v=!!a.formatFallbackMessages,p=i(a.modifiers)?a.modifiers:{},b=a.pluralizationRules,d=c(a.postTranslation)?a.postTranslation:void 0,L=!t(a.warnHtmlInMessage)||"off"!==a.warnHtmlInMessage,E=!!a.escapeParameterHtml,I=!n(a.sync)||a.sync;let T=a.messages;if(i(a.sharedMessages)){const t=a.sharedMessages;T=Object.keys(t).reduce(((a,l)=>{const n=a[l]||(a[l]={});return e(n,t[l]),a}),T||{})}const{__i18n:k,__root:F,__injectWithOption:N}=a,O=a.datetimeFormats,h=a.numberFormats;return{locale:l,fallbackLocale:r,messages:T,flatJson:a.flatJson,datetimeFormats:O,numberFormats:h,missing:_,missingWarn:m,fallbackWarn:f,fallbackRoot:g,fallbackFormat:v,modifiers:p,pluralRules:b,postTranslation:d,warnHtmlMessage:L,escapeParameter:E,messageResolver:a.messageResolver,inheritLocale:I,__i18n:k,__root:F,__injectWithOption:N}}(l)),{__extender:_}=l,m={
// id
id:r.id,
// locale
get locale(){return r.locale.value},set locale(e){r.locale.value=e},
// fallbackLocale
get fallbackLocale(){return r.fallbackLocale.value},set fallbackLocale(e){r.fallbackLocale.value=e},
// messages
get messages(){return r.messages.value},
// datetimeFormats
get datetimeFormats(){return r.datetimeFormats.value},
// numberFormats
get numberFormats(){return r.numberFormats.value},
// availableLocales
get availableLocales(){return r.availableLocales},
// formatter
get formatter(){return{interpolate:()=>[]}},set formatter(e){},
// missing
get missing(){return r.getMissingHandler()},set missing(e){r.setMissingHandler(e)},
// silentTranslationWarn
get silentTranslationWarn(){return n(r.missingWarn)?!r.missingWarn:r.missingWarn},set silentTranslationWarn(e){r.missingWarn=n(e)?!e:e},
// silentFallbackWarn
get silentFallbackWarn(){return n(r.fallbackWarn)?!r.fallbackWarn:r.fallbackWarn},set silentFallbackWarn(e){r.fallbackWarn=n(e)?!e:e},
// modifiers
get modifiers(){return r.modifiers},
// formatFallbackMessages
get formatFallbackMessages(){return r.fallbackFormat},set formatFallbackMessages(e){r.fallbackFormat=e},
// postTranslation
get postTranslation(){return r.getPostTranslationHandler()},set postTranslation(e){r.setPostTranslationHandler(e)},
// sync
get sync(){return r.inheritLocale},set sync(e){r.inheritLocale=e},
// warnInHtmlMessage
get warnHtmlInMessage(){return r.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(e){r.warnHtmlMessage="off"!==e},
// escapeParameterHtml
get escapeParameterHtml(){return r.escapeParameter},set escapeParameterHtml(e){r.escapeParameter=e},
// preserveDirectiveContent
get preserveDirectiveContent(){return!0},set preserveDirectiveContent(e){},
// pluralizationRules
get pluralizationRules(){return r.pluralRules||{}},
// for internal
__composer:r,
// t
t(...e){const[a,l,n]=e,s={};let u=null,c=null;if(!t(a))throw ge(fe.INVALID_ARGUMENT);const _=a;return t(l)?s.locale=l:o(l)?u=l:i(l)&&(c=l),o(n)?u=n:i(n)&&(c=n),Reflect.apply(r.t,r,[_,u||c||{},s])},rt:(...e)=>Reflect.apply(r.rt,r,[...e]),
// tc
tc(...e){const[l,n,s]=e,u={plural:1};let c=null,_=null;if(!t(l))throw ge(fe.INVALID_ARGUMENT);const m=l;return t(n)?u.locale=n:a(n)?u.plural=n:o(n)?c=n:i(n)&&(_=n),t(s)?u.locale=s:o(s)?c=s:i(s)&&(_=s),Reflect.apply(r.t,r,[m,c||_||{},u])},
// te
te:(e,a)=>r.te(e,a),
// tm
tm:e=>r.tm(e),
// getLocaleMessage
getLocaleMessage:e=>r.getLocaleMessage(e),
// setLocaleMessage
setLocaleMessage(e,a){r.setLocaleMessage(e,a)},
// mergeLocaleMessage
mergeLocaleMessage(e,a){r.mergeLocaleMessage(e,a)},
// d
d:(...e)=>Reflect.apply(r.d,r,[...e]),
// getDateTimeFormat
getDateTimeFormat:e=>r.getDateTimeFormat(e),
// setDateTimeFormat
setDateTimeFormat(e,a){r.setDateTimeFormat(e,a)},
// mergeDateTimeFormat
mergeDateTimeFormat(e,a){r.mergeDateTimeFormat(e,a)},
// n
n:(...e)=>Reflect.apply(r.n,r,[...e]),
// getNumberFormat
getNumberFormat:e=>r.getNumberFormat(e),
// setNumberFormat
setNumberFormat(e,a){r.setNumberFormat(e,a)},
// mergeNumberFormat
mergeNumberFormat(e,a){r.mergeNumberFormat(e,a)},
// getChoiceIndex
// eslint-disable-next-line @typescript-eslint/no-unused-vars
getChoiceIndex:(e,a)=>-1};return m.__extender=_,m}}const Ue={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,
// NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
validator:e=>"parent"===e||"global"===e,default:"parent"
/* ComponentI18nScope */},i18n:{type:Object}};function we(e){return le}const He=B({
/* eslint-disable */
name:"i18n-t",props:e({keypath:{type:String,required:!0},plural:{type:[Number,String],
// eslint-disable-next-line @typescript-eslint/no-explicit-any
validator:e=>a(e)||!isNaN(e)}},Ue),
/* eslint-enable */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
setup(a,n){const{slots:r,attrs:s}=n,o=a.i18n||Je({useScope:a.scope,__useComponent:!0});return()=>{const i=Object.keys(r).filter((e=>"_"!==e)),u={};a.locale&&(u.locale=a.locale),void 0!==a.plural&&(u.plural=t(a.plural)?+a.plural:a.plural);const c=function({slots:e},a){if(1===a.length&&"default"===a[0])return(e.default?e.default():[]).reduce(((e,a)=>[...e,
// prettier-ignore
...a.type===le?a.children:[a]]),[]);return a.reduce(((a,t)=>{const l=e[t];return l&&(a[t]=l()),a}),{})}(n,i),_=o[ve](a.keypath,c,u),m=e({},s),f=t(a.tag)||l(a.tag)?a.tag:we();return X(f,m,_)}}});function Se(a,n,r,s){const{slots:i,attrs:u}=n;return()=>{const n={part:!0};let c={};a.locale&&(n.locale=a.locale),t(a.format)?n.key=a.format:l(a.format)&&(t(a.format.key)&&(n.key=a.format.key),c=Object.keys(a.format).reduce(((t,l)=>r.includes(l)?e({},t,{[l]:a.format[l]}):t),{}));const _=s(a.value,n,c);let m=[n.key];o(_)?m=_.map(((e,a)=>{const l=i[e.type],n=l?l({[e.type]:e.value,index:a,parts:_}):[e.value];var r;return o(r=n)&&!t(r[0])&&(n[0].key=`${e.type}-${a}`),n})):t(_)&&(m=[_]);const f=e({},u),g=t(a.tag)||l(a.tag)?a.tag:we();return X(g,f,m)}}const $e=B({
/* eslint-disable */
name:"i18n-n",props:e({value:{type:Number,required:!0},format:{type:[String,Object]}},Ue),
/* eslint-enable */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
setup(e,a){const t=e.i18n||Je({useScope:"parent",__useComponent:!0});return Se(e,a,I,((...e)=>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
t[be](...e)))}}),Ve=B({
/* eslint-disable */
name:"i18n-d",props:e({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Ue),
/* eslint-enable */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
setup(e,a){const t=e.i18n||Je({useScope:"parent",__useComponent:!0});return Se(e,a,T,((...e)=>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
t[pe](...e)))}});function xe(e){if(t(e))return{path:e};if(i(e)){if(!("path"in e))throw ge(fe.REQUIRED_VALUE);return e}throw ge(fe.INVALID_VALUE)}function Ye(e){const{path:l,locale:n,args:r,choice:s,plural:o}=e,i={},u=r||{};return t(n)&&(i.locale=n),a(s)&&(i.plural=s),a(o)&&(i.plural=o),[l,u,i]}function je(e,a,...t){const l=i(t[0])?t[0]:{},r=!!l.useI18nComponentName;(!n(l.globalInstall)||l.globalInstall)&&([r?"i18n":He.name,"I18nT"].forEach((a=>e.component(a,He))),[$e.name,"I18nN"].forEach((a=>e.component(a,$e))),[Ve.name,"I18nD"].forEach((a=>e.component(a,Ve)))),e.directive("t",function(e){const a=a=>{const{instance:t,modifiers:l,value:n}=a;if(!t||!t.$)throw ge(fe.UNEXPECTED_ERROR);const r=function(e,a){const t=e;if("composition"===e.mode)return t.__getInstance(a)||e.global;{const l=t.__getInstance(a);return null!=l?l.__composer:e.global.__composer}}(e,t.$),s=xe(n);return[Reflect.apply(r.t,r,[...Ye(s)]),r]};return{created:(t,l)=>{const[n,r]=a(l);E&&e.global===r&&(t.__i18nWatcher=te(r.locale,(()=>{l.instance&&l.instance.$forceUpdate()}))),t.__composer=r,t.textContent=n},unmounted:e=>{E&&e.__i18nWatcher&&(e.__i18nWatcher(),e.__i18nWatcher=void 0,delete e.__i18nWatcher),e.__composer&&(e.__composer=void 0,delete e.__composer)},beforeUpdate:(e,{value:a})=>{if(e.__composer){const t=e.__composer,l=xe(a);e.textContent=Reflect.apply(t.t,t,[...Ye(l)])}},getSSRProps:e=>{const[t]=a(e);return{textContent:t}}}}(a))}function Ge(e,a){e.locale=a.locale||e.locale,e.fallbackLocale=a.fallbackLocale||e.fallbackLocale,e.missing=a.missing||e.missing,e.silentTranslationWarn=a.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=a.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=a.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=a.postTranslation||e.postTranslation,e.warnHtmlInMessage=a.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=a.escapeParameterHtml||e.escapeParameterHtml,e.sync=a.sync||e.sync,e.__composer[de](a.pluralizationRules||e.pluralizationRules);const t=Te(e.locale,{messages:a.messages,__i18n:a.__i18n});return Object.keys(t).forEach((a=>e.mergeLocaleMessage(a,t[a]))),a.datetimeFormats&&Object.keys(a.datetimeFormats).forEach((t=>e.mergeDateTimeFormat(t,a.datetimeFormats[t]))),a.numberFormats&&Object.keys(a.numberFormats).forEach((t=>e.mergeNumberFormat(t,a.numberFormats[t]))),e}const Be=b("global-vue-i18n");function Xe(e={},a){const t=__VUE_I18N_LEGACY_API__&&n(e.legacy)?e.legacy:__VUE_I18N_LEGACY_API__,l=!n(e.globalInjection)||e.globalInjection,r=!__VUE_I18N_LEGACY_API__||!t||!!e.allowComposition,s=new Map,[o,u]=function(e,a,t){const l=J();{const t=__VUE_I18N_LEGACY_API__&&a?l.run((()=>Ce(e))):l.run((()=>De(e)));if(null==t)throw ge(fe.UNEXPECTED_ERROR);return[l,t]}}(e,t),c=b("");{const e={
// mode
get mode(){return __VUE_I18N_LEGACY_API__&&t?"legacy":"composition"},
// allowComposition
get allowComposition(){return r},
// install plugin
async install(a,...n){if(a.__VUE_I18N_SYMBOL__=c,a.provide(a.__VUE_I18N_SYMBOL__,e),i(n[0])){const a=n[0];e.__composerExtend=a.__composerExtend,e.__vueI18nExtend=a.__vueI18nExtend}let r=null;!t&&l&&(r=function(e,a){const t=Object.create(null);ze.forEach((e=>{const l=Object.getOwnPropertyDescriptor(a,e);if(!l)throw ge(fe.UNEXPECTED_ERROR);const n=re(l.value)?{get:()=>l.value.value,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
set(e){l.value.value=e}}:{get:()=>l.get&&l.get()};Object.defineProperty(t,e,n)})),e.config.globalProperties.$i18n=t,qe.forEach((t=>{const l=Object.getOwnPropertyDescriptor(a,t);if(!l||!l.value)throw ge(fe.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${t}`,l)}));const l=()=>{delete e.config.globalProperties.$i18n,qe.forEach((a=>{delete e.config.globalProperties[`$${a}`]}))};return l}(a,e.global)),__VUE_I18N_FULL_INSTALL__&&je(a,e,...n),__VUE_I18N_LEGACY_API__&&t&&a.mixin(function(e,a,t){return{beforeCreate(){const l=ne();if(!l)throw ge(fe.UNEXPECTED_ERROR);const n=this.$options;if(n.i18n){const l=n.i18n;if(n.__i18n&&(l.__i18n=n.__i18n),l.__root=a,this===this.$root)this.$i18n=Ge(e,l);else{l.__injectWithOption=!0,l.__extender=t.__vueI18nExtend,this.$i18n=Ce(l);const e=this.$i18n;e.__extender&&(e.__disposer=e.__extender(this.$i18n))}}else if(n.__i18n)if(this===this.$root)this.$i18n=Ge(e,n);else{this.$i18n=Ce({__i18n:n.__i18n,__injectWithOption:!0,__extender:t.__vueI18nExtend,__root:a});const e=this.$i18n;e.__extender&&(e.__disposer=e.__extender(this.$i18n))}else this.$i18n=e;n.__i18nGlobal&&Oe(a,n,n),this.$t=(...e)=>this.$i18n.t(...e),this.$rt=(...e)=>this.$i18n.rt(...e),this.$tc=(...e)=>this.$i18n.tc(...e),this.$te=(e,a)=>this.$i18n.te(e,a),this.$d=(...e)=>this.$i18n.d(...e),this.$n=(...e)=>this.$i18n.n(...e),this.$tm=e=>this.$i18n.tm(e),t.__setInstance(l,this.$i18n)},mounted(){},unmounted(){const e=ne();if(!e)throw ge(fe.UNEXPECTED_ERROR);const a=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,a.__disposer&&(a.__disposer(),delete a.__disposer,delete a.__extender),t.__deleteInstance(e),delete this.$i18n}}}(u,u.__composer,e));const s=a.unmount;a.unmount=()=>{r&&r(),e.dispose(),s()}},
// global accessor
get global(){return u},dispose(){o.stop()},
// @internal
__instances:s,
// @internal
__getInstance:function(e){return s.get(e)||null},
// @internal
__setInstance:function(e,a){s.set(e,a)},
// @internal
__deleteInstance:function(e){s.delete(e)}};return e}}function Je(a={}){const l=ne();if(null==l)throw ge(fe.MUST_BE_CALL_SETUP_TOP);if(!l.isCE&&null!=l.appContext.app&&!l.appContext.app.__VUE_I18N_SYMBOL__)throw ge(fe.NOT_INSTALLED);const _=function(e){{const a=z(e.isCE?Be:e.appContext.app.__VUE_I18N_SYMBOL__);if(!a)throw ge(e.isCE?fe.NOT_INSTALLED_WITH_PROVIDE:fe.UNEXPECTED_ERROR);return a}}(l),m=function(e){return"composition"===e.mode?e.global:e.global.__composer}(_),f=Ne(l),g=function(e,a){return r(e)?"__i18n"in a?"local":"global":e.useScope?e.useScope:"local"}(a,f);if(__VUE_I18N_LEGACY_API__&&"legacy"===_.mode&&!a.__useComponent){if(!_.allowComposition)throw ge(fe.NOT_AVAILABLE_IN_LEGACY_MODE);return function(e,a,l,r={}){const _="local"===a,m=K(null);if(_&&e.proxy&&!e.proxy.$options.i18n&&!e.proxy.$options.__i18n)throw ge(fe.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const f=n(r.inheritLocale)?r.inheritLocale:!t(r.locale),g=Z(
// prettier-ignore
!_||f?l.locale.value:t(r.locale)?r.locale:s),v=Z(
// prettier-ignore
!_||f?l.fallbackLocale.value:t(r.fallbackLocale)||o(r.fallbackLocale)||i(r.fallbackLocale)||!1===r.fallbackLocale?r.fallbackLocale:g.value),p=Z(Te(g.value,r)),b=Z(i(r.datetimeFormats)?r.datetimeFormats:{[g.value]:{}}),d=Z(i(r.numberFormats)?r.numberFormats:{[g.value]:{}}),L=_?l.missingWarn:!n(r.missingWarn)&&!u(r.missingWarn)||r.missingWarn,E=_?l.fallbackWarn:!n(r.fallbackWarn)&&!u(r.fallbackWarn)||r.fallbackWarn,I=_?l.fallbackRoot:!n(r.fallbackRoot)||r.fallbackRoot,T=!!r.fallbackFormat,k=c(r.missing)?r.missing:null,F=c(r.postTranslation)?r.postTranslation:null,N=_?l.warnHtmlMessage:!n(r.warnHtmlMessage)||r.warnHtmlMessage,O=!!r.escapeParameter,h=_?l.modifiers:i(r.modifiers)?r.modifiers:{},R=r.pluralRules||_&&l.pluralRules;function P(){return[g.value,v.value,p.value,b.value,d.value]}const y=ee({get:()=>m.value?m.value.locale.value:g.value,set:e=>{m.value&&(m.value.locale.value=e),g.value=e}}),M=ee({get:()=>m.value?m.value.fallbackLocale.value:v.value,set:e=>{m.value&&(m.value.fallbackLocale.value=e),v.value=e}}),W=ee((()=>m.value?m.value.messages.value:p.value)),A=ee((()=>b.value)),D=ee((()=>d.value));function C(){return m.value?m.value.getPostTranslationHandler():F}function U(e){m.value&&m.value.setPostTranslationHandler(e)}function w(){return m.value?m.value.getMissingHandler():k}function H(e){m.value&&m.value.setMissingHandler(e)}function S(e){return P(),e()}function $(...e){return m.value?S((()=>Reflect.apply(m.value.t,null,[...e]))):S((()=>""))}function V(...e){return m.value?Reflect.apply(m.value.rt,null,[...e]):""}function x(...e){return m.value?S((()=>Reflect.apply(m.value.d,null,[...e]))):S((()=>""))}function Y(...e){return m.value?S((()=>Reflect.apply(m.value.n,null,[...e]))):S((()=>""))}function j(e){return m.value?m.value.tm(e):{}}function G(e,a){return!!m.value&&m.value.te(e,a)}function B(e){return m.value?m.value.getLocaleMessage(e):{}}function X(e,a){m.value&&(m.value.setLocaleMessage(e,a),p.value[e]=a)}function J(e,a){m.value&&m.value.mergeLocaleMessage(e,a)}function z(e){return m.value?m.value.getDateTimeFormat(e):{}}function q(e,a){m.value&&(m.value.setDateTimeFormat(e,a),b.value[e]=a)}function Q(e,a){m.value&&m.value.mergeDateTimeFormat(e,a)}function te(e){return m.value?m.value.getNumberFormat(e):{}}function le(e,a){m.value&&(m.value.setNumberFormat(e,a),d.value[e]=a)}function ne(e,a){m.value&&m.value.mergeNumberFormat(e,a)}const re={get id(){return m.value?m.value.id:-1},locale:y,fallbackLocale:M,messages:W,datetimeFormats:A,numberFormats:D,get inheritLocale(){return m.value?m.value.inheritLocale:f},set inheritLocale(e){m.value&&(m.value.inheritLocale=e)},get availableLocales(){return m.value?m.value.availableLocales:Object.keys(p.value)},get modifiers(){return m.value?m.value.modifiers:h},get pluralRules(){return m.value?m.value.pluralRules:R},get isGlobal(){return!!m.value&&m.value.isGlobal},get missingWarn(){return m.value?m.value.missingWarn:L},set missingWarn(e){m.value&&(m.value.missingWarn=e)},get fallbackWarn(){return m.value?m.value.fallbackWarn:E},set fallbackWarn(e){m.value&&(m.value.missingWarn=e)},get fallbackRoot(){return m.value?m.value.fallbackRoot:I},set fallbackRoot(e){m.value&&(m.value.fallbackRoot=e)},get fallbackFormat(){return m.value?m.value.fallbackFormat:T},set fallbackFormat(e){m.value&&(m.value.fallbackFormat=e)},get warnHtmlMessage(){return m.value?m.value.warnHtmlMessage:N},set warnHtmlMessage(e){m.value&&(m.value.warnHtmlMessage=e)},get escapeParameter(){return m.value?m.value.escapeParameter:O},set escapeParameter(e){m.value&&(m.value.escapeParameter=e)},t:$,getPostTranslationHandler:C,setPostTranslationHandler:U,getMissingHandler:w,setMissingHandler:H,rt:V,d:x,n:Y,tm:j,te:G,getLocaleMessage:B,setLocaleMessage:X,mergeLocaleMessage:J,getDateTimeFormat:z,setDateTimeFormat:q,mergeDateTimeFormat:Q,getNumberFormat:te,setNumberFormat:le,mergeNumberFormat:ne};function se(e){e.locale.value=g.value,e.fallbackLocale.value=v.value,Object.keys(p.value).forEach((a=>{e.mergeLocaleMessage(a,p.value[a])})),Object.keys(b.value).forEach((a=>{e.mergeDateTimeFormat(a,b.value[a])})),Object.keys(d.value).forEach((a=>{e.mergeNumberFormat(a,d.value[a])})),e.escapeParameter=O,e.fallbackFormat=T,e.fallbackRoot=I,e.fallbackWarn=E,e.missingWarn=L,e.warnHtmlMessage=N}return ae((()=>{if(null==e.proxy||null==e.proxy.$i18n)throw ge(fe.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const t=m.value=e.proxy.$i18n.__composer;"global"===a?(g.value=t.locale.value,v.value=t.fallbackLocale.value,p.value=t.messages.value,b.value=t.datetimeFormats.value,d.value=t.numberFormats.value):_&&se(t)})),re}(l,g,m,a)}if("global"===g)return Oe(m,a,f),m;if("parent"===g){let e=function(e,a,t=!1){let l=null;const n=a.root;let r=function(e,a=!1){if(null==e)return null;return a&&e.vnode.ctx||e.parent}(a,t);for(;null!=r;){const a=e;if("composition"===e.mode)l=a.__getInstance(r);else if(__VUE_I18N_LEGACY_API__){const e=a.__getInstance(r);null!=e&&(l=e.__composer,t&&l&&!l[Le]&&(l=null))}if(null!=l)break;if(n===r)break;r=r.parent}return l}(_,l,a.__useComponent);return null==e&&(e=m),e}const v=_;let p=v.__getInstance(l);if(null==p){const t=e({},a);"__i18n"in f&&(t.__i18n=f.__i18n),m&&(t.__root=m),p=De(t),v.__composerExtend&&(p[Ee]=v.__composerExtend(p)),function(e,a,t){q((()=>{}),a),Q((()=>{const l=t;e.__deleteInstance(a);const n=l[Ee];n&&(n(),delete l[Ee])}),a)}(v,l,p),v.__setInstance(l,p)}return p}const ze=["locale","fallbackLocale","availableLocales"],qe=["t","rt","d","n","tm","te"];if("boolean"!=typeof __VUE_I18N_FULL_INSTALL__&&(g().__VUE_I18N_FULL_INSTALL__=!0),"boolean"!=typeof __VUE_I18N_LEGACY_API__&&(g().__VUE_I18N_LEGACY_API__=!0),"boolean"!=typeof __INTLIFY_JIT_COMPILATION__&&(g().__INTLIFY_JIT_COMPILATION__=!1),"boolean"!=typeof __INTLIFY_DROP_MESSAGE_COMPILER__&&(g().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),"boolean"!=typeof __INTLIFY_PROD_DEVTOOLS__&&(g().__INTLIFY_PROD_DEVTOOLS__=!1),__INTLIFY_JIT_COMPILATION__?_(k):_(F),m(N),f(O),__INTLIFY_PROD_DEVTOOLS__){const e=g();e.__INTLIFY__=!0,v(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}export{Xe as c};
