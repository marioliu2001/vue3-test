import{i as t}from"./isObject.js-d40e3a1b.js";import{n as i}from"./now.js-127ba656.js";import{t as n}from"./toNumber.js-a48b1122.js";var r=Math.max,o=Math.min;function e(e,u,a){var f,c,m,s,v,d,p=0,l=!1,j=!1,T=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var i=f,n=c;return f=c=void 0,p=t,s=e.apply(n,i)}function x(t){var i=t-d;return void 0===d||i>=u||i<0||j&&t-p>=m}function g(){var t=i();if(x(t))return w(t);v=setTimeout(g,function(t){var i=u-(t-d);return j?o(i,m-(t-p)):i}(t))}function w(t){return v=void 0,T&&f?h(t):(f=c=void 0,s)}function y(){var t=i(),n=x(t);if(f=arguments,c=this,d=t,n){if(void 0===v)return function(t){return p=t,v=setTimeout(g,u),l?h(t):s}(d);if(j)return clearTimeout(v),v=setTimeout(g,u),h(d)}return void 0===v&&(v=setTimeout(g,u)),s}return u=n(u)||0,t(a)&&(l=!!a.leading,m=(j="maxWait"in a)?r(n(a.maxWait)||0,u):m,T="trailing"in a?!!a.trailing:T),y.cancel=function(){void 0!==v&&clearTimeout(v),p=0,f=d=c=v=void 0},y.flush=function(){return void 0===v?s:w(i())},y}export{e as d};
