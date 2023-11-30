var r=Date.now;function n(n){var e=0,t=0;return function(){var a=r(),i=16-(a-t);if(t=a,i>0){if(++e>=800)return arguments[0]}else e=0;return n.apply(void 0,arguments)}}export{n as s};
