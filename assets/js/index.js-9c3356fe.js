import{g as e}from"./dayjs.min.js-02d3be64.js";
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var a=/["'&<>]/;const r=e((function(e){var r,s=""+e,t=a.exec(s);if(!t)return s;var n="",c=0,i=0;for(c=t.index;c<s.length;c++){switch(s.charCodeAt(c)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#39;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}i!==c&&(n+=s.substring(i,c)),i=c+1,n+=r}return i!==c?n+s.substring(i,c):n}));export{r as e};
