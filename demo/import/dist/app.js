!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){
/*! v1.0.0 */
window,t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=0)}([function(t,e){var n={init:function(t){this._setConfig(t)&&(this.config.auto?this.config.hasAuthorit&&this.add():this.add())},add:function(){if(this._isValidConfig()){var t=document.querySelector(".__maywm"),e=t||document.createElement("div"),n=this._getBg(),i="              position:absolute;              top:0;              left:0;              width:100%;              height:100%;              z-index:"+this.config.zIndex+";              pointer-events:none;              background-repeat:repeat;              background-image:url('"+n+"')";this.styleStr=i,e.setAttribute("style",i),e.classList.add("__maywm"),t||(this.config.container.style.position="relative",this.config.container.insertBefore(e,this.config.container.firstChild)),this._observer()}},addForImg:function(t){if(this._isValidConfig(t)&&t.url){var e=this,n=new Image;n.src=t.url,n.crossOrigin="anonymous",n.onload=function(){const i=document.createElement("canvas");i.width=n.width,i.height=n.height;const o=i.getContext("2d");o.drawImage(n,0,0),o.textAlign=t.textAlign||e.config.textAlign,o.textBaseline=t.textBaseline||e.config.textBaseline,o.font=t.font||e.config.font,o.fillStyle=t.fillStyle||e.config.color,o.fillText(t.name,n.width-(t.textX||100),n.height-(t.textY||30));const r=i.toDataURL();t.cb&&t.cb(r)}}},_setConfig:function(t){if(!this._isValidConfig(t))return!1;for(var e in this.config={apiDomain:"",name:"may_watermark",color:"rgba(230, 230, 230, 0.8)",auto:!1,hasAuthority:!0,container:document.body,width:"200px",height:"150px",font:"20px 黑体",textAlign:"center",textBaseline:"middle",rotate:"10",zIndex:9999},t)this.config.hasOwnProperty(e)&&(this.config[e]=t[e]);return!0},_isValidConfig:function(t){var e=void 0!==t?t:this.config;return void 0===e||"[object Object]"===Object.prototype.toString.call(e)||(console.warn("水印参数格式错误"),!1)},_getBg:function(){var t=window.devicePixelRatio,e=this.config.width,n=this.config.height,i=document.createElement("canvas");i.style.width=e,i.style.height=n,i.setAttribute("width",e*t),i.setAttribute("height",n*t);var o=i.getContext("2d");return o.scale(t,t),null===o?this._getBgBySvg():(o.clearRect(0,0,e,n),o.font=this.config.font,o.textAlign=this.config.textAlign,o.textBaseline=this.config.textBaseline,o.translate(parseFloat(e)/2,parseFloat(n)/2),o.rotate(-this.config.rotate*Math.PI/180),o.translate(-parseFloat(e)/2,-parseFloat(n)/2),o.fillStyle=this.config.color,o.fillText(this.config.name,parseFloat(e)/2,parseFloat(n)/2),o.rotate(this.config.rotate*Math.PI/180),i.toDataURL())},_getBgBySvg:function(){var t='<svg xmlns="http://www.w3.org/2000/svg" width="'+this.config.width+'" height="'+this.config.height+'">                   <text x="50%" y="50%" dy="12px"                   text-anchor="middle"                   stroke="'+this.config.color+'"                   stroke-width="0.1"                   stroke-opacity="0.8"                   fill="${this.config.color}"                   transform="rotate(-'+this.config.rotate+' 0 0)"                   style="font-size: '+this.config.font+';">'+this.config.name+"</text>                   </svg>";return"data:image/svg+xml;base64,"+window.btoa(unescape(encodeURIComponent(t)))},_observer:function(){var t=this,e=window.MutationObserver||window.WebKitMutationObserver;if(e){var n=new e((function(){var e=document.querySelector(".__maywm");(e&&e.getAttribute("style")!==t.styleStr||!e)&&(n.disconnect(),n=null,t.add())}));n.observe(t.config.container,{attributes:!0,subtree:!0,childList:!0})}}};t.exports=n}])},function(t,e,n){"use strict";n.r(e);var i=n(0);n.n(i).a.init({name:"may-watermark",container:document.querySelector(".test")})}]);