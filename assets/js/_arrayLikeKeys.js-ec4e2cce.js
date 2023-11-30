import{b as r}from"./_baseTimes.js-7e0124aa.js";import{i as s}from"./isArguments.js-18475d90.js";import{i as t}from"./isArray.js-5708991a.js";import{i as e}from"./isBuffer.js-bb7d5f4f.js";import{i}from"./_isIndex.js-988a1996.js";import{i as o}from"./isTypedArray.js-a4816e72.js";var a=Object.prototype.hasOwnProperty;function f(f,m){var j=t(f),n=!j&&s(f),p=!j&&!n&&e(f),y=!j&&!n&&!p&&o(f),b=j||n||p||y,g=b?r(f.length,String):[],h=g.length;for(var u in f)!m&&!a.call(f,u)||b&&(// Safari 9 has enumerable `arguments.length` in strict mode.
"length"==u||// Node.js 0.10 has enumerable non-index properties on buffers.
p&&("offset"==u||"parent"==u)||// PhantomJS 2 has enumerable non-index properties on typed arrays.
y&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||// Skip index properties.
i(u,h))||g.push(u);return g}export{f as a};
