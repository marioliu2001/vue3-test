function t(t,r){(function(t){return"string"==typeof t&&-1!==t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");var e=function(t){return"string"==typeof t&&-1!==t.indexOf("%")}(t);return t=360===r?t:Math.min(r,Math.max(0,parseFloat(t))),e&&(t=parseInt(String(t*r),10)/100),Math.abs(t-r)<1e-6?1:t=360===r?(t<0?t%r+r:t%r)/parseFloat(String(r)):t%r/parseFloat(String(r))}function r(t){return Math.min(1,Math.max(0,t))}function e(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function n(t){return t<=1?"".concat(100*Number(t),"%"):t}function a(t){return 1===t.length?"0"+t:String(t)}function o(r,e,n){r=t(r,255),e=t(e,255),n=t(n,255);var a=Math.max(r,e,n),o=Math.min(r,e,n),i=0,h=0,s=(a+o)/2;if(a===o)h=0,i=0;else{var f=a-o;switch(h=s>.5?f/(2-a-o):f/(a+o),a){case r:i=(e-n)/f+(e<n?6:0);break;case e:i=(n-r)/f+2;break;case n:i=(r-e)/f+4}i/=6}return{h:i,s:h,l:s}}function i(t,r,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?t+6*e*(r-t):e<.5?r:e<2/3?t+(r-t)*(2/3-e)*6:t}function h(r,e,n){r=t(r,255),e=t(e,255),n=t(n,255);var a=Math.max(r,e,n),o=Math.min(r,e,n),i=0,h=a,s=a-o,f=0===a?0:s/a;if(a===o)i=0;else{switch(a){case r:i=(e-n)/s+(e<n?6:0);break;case e:i=(n-r)/s+2;break;case n:i=(r-e)/s+4}i/=6}return{h:i,s:f,v:h}}function s(t,r,e,n){var o=[a(Math.round(t).toString(16)),a(Math.round(r).toString(16)),a(Math.round(e).toString(16))];return n&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function f(t){return c(t)/255}function c(t){return parseInt(t,16)}var u={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function g(r){var a,o,h,s={r:0,g:0,b:0},g=1,d=null,l=null,b=null,m=!1,y=!1;return"string"==typeof r&&(r=function(t){if(t=t.trim().toLowerCase(),0===t.length)return!1;var r=!1;if(u[t])t=u[t],r=!0;else if("transparent"===t)return{r:0,g:0,b:0,a:0,format:"name"};var e=p.rgb.exec(t);if(e)return{r:e[1],g:e[2],b:e[3]};if(e=p.rgba.exec(t),e)return{r:e[1],g:e[2],b:e[3],a:e[4]};if(e=p.hsl.exec(t),e)return{h:e[1],s:e[2],l:e[3]};if(e=p.hsla.exec(t),e)return{h:e[1],s:e[2],l:e[3],a:e[4]};if(e=p.hsv.exec(t),e)return{h:e[1],s:e[2],v:e[3]};if(e=p.hsva.exec(t),e)return{h:e[1],s:e[2],v:e[3],a:e[4]};if(e=p.hex8.exec(t),e)return{r:c(e[1]),g:c(e[2]),b:c(e[3]),a:f(e[4]),format:r?"name":"hex8"};if(e=p.hex6.exec(t),e)return{r:c(e[1]),g:c(e[2]),b:c(e[3]),format:r?"name":"hex"};if(e=p.hex4.exec(t),e)return{r:c(e[1]+e[1]),g:c(e[2]+e[2]),b:c(e[3]+e[3]),a:f(e[4]+e[4]),format:r?"name":"hex8"};if(e=p.hex3.exec(t),e)return{r:c(e[1]+e[1]),g:c(e[2]+e[2]),b:c(e[3]+e[3]),format:r?"name":"hex"};return!1}(r)),"object"==typeof r&&(v(r.r)&&v(r.g)&&v(r.b)?(a=r.r,o=r.g,h=r.b,s={r:255*t(a,255),g:255*t(o,255),b:255*t(h,255)},m=!0,y="%"===String(r.r).substr(-1)?"prgb":"rgb"):v(r.h)&&v(r.s)&&v(r.v)?(d=n(r.s),l=n(r.v),s=function(r,e,n){r=6*t(r,360),e=t(e,100),n=t(n,100);var a=Math.floor(r),o=r-a,i=n*(1-e),h=n*(1-o*e),s=n*(1-(1-o)*e),f=a%6;return{r:255*[n,h,i,i,s,n][f],g:255*[s,n,n,h,i,i][f],b:255*[i,i,s,n,n,h][f]}}(r.h,d,l),m=!0,y="hsv"):v(r.h)&&v(r.s)&&v(r.l)&&(d=n(r.s),b=n(r.l),s=function(r,e,n){var a,o,h;if(r=t(r,360),e=t(e,100),n=t(n,100),0===e)o=n,h=n,a=n;else{var s=n<.5?n*(1+e):n+e-n*e,f=2*n-s;a=i(f,s,r+1/3),o=i(f,s,r),h=i(f,s,r-1/3)}return{r:255*a,g:255*o,b:255*h}}(r.h,d,b),m=!0,y="hsl"),Object.prototype.hasOwnProperty.call(r,"a")&&(g=r.a)),g=e(g),{ok:m,format:r.format||y,r:Math.min(255,Math.max(s.r,0)),g:Math.min(255,Math.max(s.g,0)),b:Math.min(255,Math.max(s.b,0)),a:g}}var d="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),l="[\\s|\\(]+(".concat(d,")[,|\\s]+(").concat(d,")[,|\\s]+(").concat(d,")\\s*\\)?"),b="[\\s|\\(]+(".concat(d,")[,|\\s]+(").concat(d,")[,|\\s]+(").concat(d,")[,|\\s]+(").concat(d,")\\s*\\)?"),p={CSS_UNIT:new RegExp(d),rgb:new RegExp("rgb"+l),rgba:new RegExp("rgba"+b),hsl:new RegExp("hsl"+l),hsla:new RegExp("hsla"+b),hsv:new RegExp("hsv"+l),hsva:new RegExp("hsva"+b),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function v(t){return Boolean(p.CSS_UNIT.exec(String(t)))}var m=
/** @class */function(){function n(t,r){var e;if(void 0===t&&(t=""),void 0===r&&(r={}),t instanceof n)return t;"number"==typeof t&&(t=function(t){return{r:t>>16,g:(65280&t)>>8,b:255&t}}(t)),this.originalInput=t;var a=g(t);this.originalInput=t,this.r=a.r,this.g=a.g,this.b=a.b,this.a=a.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(e=r.format)&&void 0!==e?e:a.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=a.ok}return n.prototype.isDark=function(){return this.getBrightness()<128},n.prototype.isLight=function(){return!this.isDark()},n.prototype.getBrightness=function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},n.prototype.getLuminance=function(){var t=this.toRgb(),r=t.r/255,e=t.g/255,n=t.b/255;return.2126*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.7152*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},n.prototype.getAlpha=function(){return this.a},n.prototype.setAlpha=function(t){return this.a=e(t),this.roundA=Math.round(100*this.a)/100,this},n.prototype.isMonochrome=function(){return 0===this.toHsl().s},n.prototype.toHsv=function(){var t=h(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}},n.prototype.toHsvString=function(){var t=h(this.r,this.g,this.b),r=Math.round(360*t.h),e=Math.round(100*t.s),n=Math.round(100*t.v);return 1===this.a?"hsv(".concat(r,", ").concat(e,"%, ").concat(n,"%)"):"hsva(".concat(r,", ").concat(e,"%, ").concat(n,"%, ").concat(this.roundA,")")},n.prototype.toHsl=function(){var t=o(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}},n.prototype.toHslString=function(){var t=o(this.r,this.g,this.b),r=Math.round(360*t.h),e=Math.round(100*t.s),n=Math.round(100*t.l);return 1===this.a?"hsl(".concat(r,", ").concat(e,"%, ").concat(n,"%)"):"hsla(".concat(r,", ").concat(e,"%, ").concat(n,"%, ").concat(this.roundA,")")},n.prototype.toHex=function(t){return void 0===t&&(t=!1),s(this.r,this.g,this.b,t)},n.prototype.toHexString=function(t){return void 0===t&&(t=!1),"#"+this.toHex(t)},n.prototype.toHex8=function(t){return void 0===t&&(t=!1),function(t,r,e,n,o){var i,h=[a(Math.round(t).toString(16)),a(Math.round(r).toString(16)),a(Math.round(e).toString(16)),a((i=n,Math.round(255*parseFloat(i)).toString(16)))];return o&&h[0].startsWith(h[0].charAt(1))&&h[1].startsWith(h[1].charAt(1))&&h[2].startsWith(h[2].charAt(1))&&h[3].startsWith(h[3].charAt(1))?h[0].charAt(0)+h[1].charAt(0)+h[2].charAt(0)+h[3].charAt(0):h.join("")}(this.r,this.g,this.b,this.a,t)},n.prototype.toHex8String=function(t){return void 0===t&&(t=!1),"#"+this.toHex8(t)},n.prototype.toHexShortString=function(t){return void 0===t&&(t=!1),1===this.a?this.toHexString(t):this.toHex8String(t)},n.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},n.prototype.toRgbString=function(){var t=Math.round(this.r),r=Math.round(this.g),e=Math.round(this.b);return 1===this.a?"rgb(".concat(t,", ").concat(r,", ").concat(e,")"):"rgba(".concat(t,", ").concat(r,", ").concat(e,", ").concat(this.roundA,")")},n.prototype.toPercentageRgb=function(){var r=function(r){return"".concat(Math.round(100*t(r,255)),"%")};return{r:r(this.r),g:r(this.g),b:r(this.b),a:this.a}},n.prototype.toPercentageRgbString=function(){var r=function(r){return Math.round(100*t(r,255))};return 1===this.a?"rgb(".concat(r(this.r),"%, ").concat(r(this.g),"%, ").concat(r(this.b),"%)"):"rgba(".concat(r(this.r),"%, ").concat(r(this.g),"%, ").concat(r(this.b),"%, ").concat(this.roundA,")")},n.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var t="#"+s(this.r,this.g,this.b,!1),r=0,e=Object.entries(u);r<e.length;r++){var n=e[r],a=n[0];if(t===n[1])return a}return!1},n.prototype.toString=function(t){var r=Boolean(t);t=null!=t?t:this.format;var e=!1,n=this.a<1&&this.a>=0;return r||!n||!t.startsWith("hex")&&"name"!==t?("rgb"===t&&(e=this.toRgbString()),"prgb"===t&&(e=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(e=this.toHexString()),"hex3"===t&&(e=this.toHexString(!0)),"hex4"===t&&(e=this.toHex8String(!0)),"hex8"===t&&(e=this.toHex8String()),"name"===t&&(e=this.toName()),"hsl"===t&&(e=this.toHslString()),"hsv"===t&&(e=this.toHsvString()),e||this.toHexString()):"name"===t&&0===this.a?this.toName():this.toRgbString()},n.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},n.prototype.clone=function(){return new n(this.toString())},n.prototype.lighten=function(t){void 0===t&&(t=10);var e=this.toHsl();return e.l+=t/100,e.l=r(e.l),new n(e)},n.prototype.brighten=function(t){void 0===t&&(t=10);var r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-t/100*255))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-t/100*255))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-t/100*255))),new n(r)},n.prototype.darken=function(t){void 0===t&&(t=10);var e=this.toHsl();return e.l-=t/100,e.l=r(e.l),new n(e)},n.prototype.tint=function(t){return void 0===t&&(t=10),this.mix("white",t)},n.prototype.shade=function(t){return void 0===t&&(t=10),this.mix("black",t)},n.prototype.desaturate=function(t){void 0===t&&(t=10);var e=this.toHsl();return e.s-=t/100,e.s=r(e.s),new n(e)},n.prototype.saturate=function(t){void 0===t&&(t=10);var e=this.toHsl();return e.s+=t/100,e.s=r(e.s),new n(e)},n.prototype.greyscale=function(){return this.desaturate(100)},n.prototype.spin=function(t){var r=this.toHsl(),e=(r.h+t)%360;return r.h=e<0?360+e:e,new n(r)},n.prototype.mix=function(t,r){void 0===r&&(r=50);var e=this.toRgb(),a=new n(t).toRgb(),o=r/100;return new n({r:(a.r-e.r)*o+e.r,g:(a.g-e.g)*o+e.g,b:(a.b-e.b)*o+e.b,a:(a.a-e.a)*o+e.a})},n.prototype.analogous=function(t,r){void 0===t&&(t=6),void 0===r&&(r=30);var e=this.toHsl(),a=360/r,o=[this];for(e.h=(e.h-(a*t>>1)+720)%360;--t;)e.h=(e.h+a)%360,o.push(new n(e));return o},n.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new n(t)},n.prototype.monochromatic=function(t){void 0===t&&(t=6);for(var r=this.toHsv(),e=r.h,a=r.s,o=r.v,i=[],h=1/t;t--;)i.push(new n({h:e,s:a,v:o})),o=(o+h)%1;return i},n.prototype.splitcomplement=function(){var t=this.toHsl(),r=t.h;return[this,new n({h:(r+72)%360,s:t.s,l:t.l}),new n({h:(r+216)%360,s:t.s,l:t.l})]},n.prototype.onBackground=function(t){var r=this.toRgb(),e=new n(t).toRgb(),a=r.a+e.a*(1-r.a);return new n({r:(r.r*r.a+e.r*e.a*(1-r.a))/a,g:(r.g*r.a+e.g*e.a*(1-r.a))/a,b:(r.b*r.a+e.b*e.a*(1-r.a))/a,a:a})},n.prototype.triad=function(){return this.polyad(3)},n.prototype.tetrad=function(){return this.polyad(4)},n.prototype.polyad=function(t){for(var r=this.toHsl(),e=r.h,a=[this],o=360/t,i=1;i<t;i++)a.push(new n({h:(e+i*o)%360,s:r.s,l:r.l}));return a},n.prototype.equals=function(t){return this.toRgbString()===new n(t).toRgbString()},n}();export{m as T};
