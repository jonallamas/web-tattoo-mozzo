parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Aao6":[function(require,module,exports) {
var define;
var t;function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(i,s){"use strict";"function"==typeof t&&t.amd?t([],s):"object"===("undefined"==typeof exports?"undefined":e(exports))?module.exports=s():i.luxy=s()}(this,function(){"use strict";var t={wrapper:"#luxy",targets:".luxy-el",wrapperSpeed:.08,targetSpeed:.02,targetPercentage:.1},e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.requestAnimationFrame=e;var i=window.cancelAnimationFrame||window.mozCancelAnimationFrame,s=function(){this.Targets=[],this.TargetsLength=0,this.wrapper="",this.windowHeight=0,this.wapperOffset=0};return s.prototype={isAnimate:!1,isResize:!1,scrollId:"",resizeId:"",init:function(e){if(this.settings=function(){for(var t={},e=0,i=arguments.length,s=function(e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};e<i;e++)s(arguments[e]);return t}(t,e||{}),this.wrapper=document.querySelector(this.settings.wrapper),"undefined"===this.wrapper)return!1;this.targets=document.querySelectorAll(this.settings.targets),document.body.style.height=this.wrapper.clientHeight+"px",this.windowHeight=window.clientHeight,this.attachEvent(),this.apply(this.targets,this.wrapper),this.animate(),this.resize()},apply:function(t,e){this.wrapperInit(),this.targetsLength=t.length;for(var i=0;i<this.targetsLength;i++){var s={offset:t[i].getAttribute("data-offset"),speedX:t[i].getAttribute("data-speed-x"),speedY:t[i].getAttribute("data-speed-Y"),percentage:t[i].getAttribute("data-percentage"),horizontal:t[i].getAttribute("data-horizontal")};this.targetsInit(t[i],s)}},wrapperInit:function(){this.wrapper.style.width="100%",this.wrapper.style.position="fixed"},targetsInit:function(t,e){this.Targets.push({elm:t,offset:e.offset?e.offset:0,horizontal:e.horizontal?e.horizontal:0,top:0,left:0,speedX:e.speedX?e.speedX:1,speedY:e.speedY?e.speedY:1,percentage:e.percentage?e.percentage:0})},scroll:function(){document.documentElement.scrollTop||document.body.scrollTop;this.scrollTop=document.documentElement.scrollTop||document.body.scrollTop;this.scrollTop,this.windowHeight;this.wrapperUpdate(this.scrollTop);for(var t=0;t<this.Targets.length;t++)this.targetsUpdate(this.Targets[t])},animate:function(){this.scroll(),this.scrollId=e(this.animate.bind(this))},wrapperUpdate:function(){this.wapperOffset+=(this.scrollTop-this.wapperOffset)*this.settings.wrapperSpeed,this.wrapper.style.transform="translate3d(0,"+Math.round(100*-this.wapperOffset)/100+"px ,0)"},targetsUpdate:function(t){t.top+=(this.scrollTop*Number(this.settings.targetSpeed)*Number(t.speedY)-t.top)*this.settings.targetPercentage,t.left+=(this.scrollTop*Number(this.settings.targetSpeed)*Number(t.speedX)-t.left)*this.settings.targetPercentage;var e=parseInt(t.percentage)-t.top-parseInt(t.offset),i=Math.round(-100*e)/100,s=0;if(t.horizontal){var r=parseInt(t.percentage)-t.left-parseInt(t.offset);s=Math.round(-100*r)/100}t.elm.style.transform="translate3d("+s+"px ,"+i+"px ,0)"},resize:function(){this.windowHeight=window.innerHeight||document.documentElement.clientHeight||0,parseInt(this.wrapper.clientHeight)!=parseInt(document.body.style.height)&&(document.body.style.height=this.wrapper.clientHeight+"px"),this.resizeId=e(this.resize.bind(this))},attachEvent:function(){var t=this;window.addEventListener("resize",function(){t.isResize||(i(t.resizeId),i(t.scrollId),t.isResize=!0,setTimeout(function(){t.isResize=!1,t.resizeId=e(t.resize.bind(t)),t.scrollId=e(t.animate.bind(t))},200))})}},new s});
},{}],"mlLf":[function(require,module,exports) {
var define;
var t;function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(e,r){"object"==("undefined"==typeof exports?"undefined":n(exports))&&"object"==("undefined"==typeof module?"undefined":n(module))?module.exports=r():"function"==typeof t&&t.amd?t([],r):"object"==("undefined"==typeof exports?"undefined":n(exports))?exports.CircleType=r():e.CircleType=r()}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==n(t)&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(o,i,function(n){return t[n]}.bind(null,i));return o},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=28)}([function(t,n,e){var r=e(13)("wks"),o=e(12),i=e(1).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(4),o=e(11);t.exports=e(6)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(5),o=e(33),i=e(34),u=Object.defineProperty;n.f=e(6)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){t.exports=!e(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=function(t){return"object"==n(t)?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(2),o=e(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(16)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports={}},function(t,n,e){var r=e(13)("keys"),o=e(12);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n){t.exports=!1},function(t,n,e){var r=e(1),o=e(2),i=e(3),u=e(20),c=e(21),f=function t(n,e,f){var a,s,l,p,h=n&t.F,v=n&t.G,d=n&t.P,y=n&t.B,m=v?r:n&t.S?r[e]||(r[e]={}):(r[e]||{}).prototype,g=v?o:o[e]||(o[e]={}),_=g.prototype||(g.prototype={});for(a in v&&(f=e),f)l=((s=!h&&m&&void 0!==m[a])?m:f)[a],p=y&&s?c(l,r):d&&"function"==typeof l?c(Function.call,l):l,m&&u(m,a,l,n&t.U),g[a]!=l&&i(g,a,p),d&&_[a]!=l&&(_[a]=l)};r.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(10),o=e(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(1),o=e(3),i=e(7),u=e(12)("src"),c=e(35),f=(""+c).split("toString");e(2).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,e,c){var a="function"==typeof e;a&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(a&&(i(e,u)||o(e,u,t[n]?""+t[n]:f.join(String(n)))),t===r?t[n]=e:c?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||c.call(this)})},function(t,n,e){var r=e(36);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(42),o=e(9);t.exports=function(t){return r(o(t))}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(8),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(4).f,o=e(7),i=e(0)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(9);t.exports=function(t){return Object(r(t))}},function(t,n,e){e(29);var r=e(54).default;t.exports=r},function(t,n,e){e(30),e(47),t.exports=e(2).Array.from},function(t,n,e){"use strict";var r=e(31)(!0);e(32)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){var r=e(8),o=e(9);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),f=r(e),a=c.length;return f<0||f>=a?t?"":void 0:(i=c.charCodeAt(f))<55296||i>56319||f+1===a||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):u-56320+(i-55296<<10)+65536}}},function(t,n,e){"use strict";var r=e(16),o=e(17),i=e(20),u=e(3),c=e(14),f=e(37),a=e(26),s=e(46),l=e(0)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,n,e,v,d,y,m){f(e,n,v);var g,_,b,x=function(t){if(!p&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},w=n+" Iterator",O="values"==d,S=!1,j=t.prototype,M=j[l]||j["@@iterator"]||d&&j[d],T=M||x(d),P=d?O?x("entries"):T:void 0,A="Array"==n&&j.entries||M;if(A&&(b=s(A.call(new t)))!==Object.prototype&&b.next&&(a(b,w,!0),r||"function"==typeof b[l]||u(b,l,h)),O&&M&&"values"!==M.name&&(S=!0,T=function(){return M.call(this)}),r&&!m||!p&&!S&&j[l]||u(j,l,T),c[n]=T,c[w]=h,d)if(g={values:O?T:x("values"),keys:y?T:x("keys"),entries:P},m)for(_ in g)_ in j||i(j,_,g[_]);else o(o.P+o.F*(p||S),n,g);return g}},function(t,n,e){t.exports=!e(6)&&!e(18)(function(){return 7!=Object.defineProperty(e(19)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(10);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){t.exports=e(13)("native-function-to-string",Function.toString)},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){"use strict";var r=e(38),o=e(11),i=e(26),u={};e(3)(u,e(0)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(5),o=e(39),i=e(25),u=e(15)("IE_PROTO"),c=function(){},f=function(){var t,n=e(19)("iframe"),r=i.length;for(n.style.display="none",e(45).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;r--;)delete f.prototype[i[r]];return f()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=f(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(4),o=e(5),i=e(40);t.exports=e(6)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,f=0;c>f;)r.f(t,e=u[f++],n[e]);return t}},function(t,n,e){var r=e(41),o=e(25);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(7),o=e(22),i=e(43)(!1),u=e(15)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)e!=u&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(23);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(22),o=e(24),i=e(44);t.exports=function(t){return function(n,e,u){var c,f=r(n),a=o(f.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}}},function(t,n,e){var r=e(8),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(1).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(7),o=e(27),i=e(15)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){"use strict";var r=e(21),o=e(17),i=e(27),u=e(48),c=e(49),f=e(24),a=e(50),s=e(51);o(o.S+o.F*!e(53)(function(t){Array.from(t)}),"Array",{from:function(t){var n,e,o,l,p=i(t),h="function"==typeof this?this:Array,v=arguments.length,d=v>1?arguments[1]:void 0,y=void 0!==d,m=0,g=s(p);if(y&&(d=r(d,v>2?arguments[2]:void 0,2)),null==g||h==Array&&c(g))for(e=new h(n=f(p.length));n>m;m++)a(e,m,y?d(p[m],m):p[m]);else for(l=g.call(p),e=new h;!(o=l.next()).done;m++)a(e,m,y?u(l,d,[o.value,m],!0):o.value);return e.length=m,e}})},function(t,n,e){var r=e(5);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(14),o=e(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){"use strict";var r=e(4),o=e(11);t.exports=function(t,n,e){n in t?r.f(t,n,o(0,e)):t[n]=e}},function(t,n,e){var r=e(52),o=e(0)("iterator"),i=e(14);t.exports=e(2).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){var r=e(23),o=e(0)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n,e){var r=e(0)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:e=!0}},i[r]=function(){return u},t(i)}catch(t){}return e}},function(t,n,e){"use strict";e.r(n);var r=function(t){var n=t.getBoundingClientRect();return{height:n.height,left:n.left+window.pageXOffset,top:n.top+window.pageYOffset,width:n.width}};var o=Math.PI/180,i=function(t){return t*o},u=function(t,n){return t*(1-Math.cos(i(n/2)))},c=180/Math.PI,f=function(t,n){return t.reduce(function(t,e){var r=e.width/n*c;return{"θ":t.θ+r,rotations:t.rotations.concat([t.θ+r/2])}},{"θ":0,rotations:[]})};function a(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=Math.PI,l=Math.max,p=Math.min,h=function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=n,this.originalHTML=this.element.innerHTML;var o=document.createElement("div"),i=document.createDocumentFragment();o.setAttribute("aria-label",n.innerText),o.style.position="relative",this.container=o,this._letters=function(t,n){var e=document.createElement("span");e.style.display="inline-block";var r=t.innerText.trim();return(n?n(r):function(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(r)).map(function(t){var n=e.cloneNode();return n.insertAdjacentHTML("afterbegin"," "===t?"&nbsp;":t),n})}(n,e),this._letters.forEach(function(t){return i.appendChild(t)}),o.appendChild(i),this.element.innerHTML="",this.element.appendChild(o);var u=window.getComputedStyle(this.element),c=u.fontSize,f=u.lineHeight;this._fontSize=parseFloat(c),this._lineHeight=parseFloat(f)||this._fontSize,this._metrics=this._letters.map(r);var a=this._metrics.reduce(function(t,n){return t+n.width},0);this._minRadius=a/s/2+this._lineHeight,this._dir=1,this._forceWidth=!1,this._forceHeight=!0,this._radius=this._minRadius,this._invalidate()}var n,e;return n=t,(e=[{key:"radius",value:function(t){return void 0!==t?(this._radius=l(this._minRadius,t),this._invalidate(),this):this._radius}},{key:"dir",value:function(t){return void 0!==t?(this._dir=t,this._invalidate(),this):this._dir}},{key:"forceWidth",value:function(t){return void 0!==t?(this._forceWidth=t,this._invalidate(),this):this._forceWidth}},{key:"forceHeight",value:function(t){return void 0!==t?(this._forceHeight=t,this._invalidate(),this):this._forceHeight}},{key:"refresh",value:function(){return this._invalidate()}},{key:"destroy",value:function(){return this.element.innerHTML=this.originalHTML,this}},{key:"_invalidate",value:function(){var t=this;return cancelAnimationFrame(this._raf),this._raf=requestAnimationFrame(function(){t._layout()}),this}},{key:"_layout",value:function(){var t=this,n=this._radius,e=this._dir,r=-1===e?-n+this._lineHeight:n,o="center ".concat(r/this._fontSize,"em"),c=n-this._lineHeight,a=f(this._metrics,c),s=a.rotations,l=a.θ;if(this._letters.forEach(function(n,r){var i=n.style,u=(-.5*l+s[r])*e,c=-.5*t._metrics[r].width/t._fontSize,f="translateX(".concat(c,"em) rotate(").concat(u,"deg)");i.position="absolute",i.bottom=-1===e?0:"auto",i.left="50%",i.transform=f,i.transformOrigin=o,i.webkitTransform=f,i.webkitTransformOrigin=o}),this._forceHeight){var h=l>180?u(n,l):u(c,l)+this._lineHeight;this.container.style.height="".concat(h/this._fontSize,"em")}if(this._forceWidth){var v=function(t,n){return 2*t*Math.sin(i(n/2))}(n,p(180,l));this.container.style.width="".concat(v/this._fontSize,"em")}return this}}])&&a(n.prototype,e),t}();n.default=h}])});
},{}],"L4bL":[function(require,module,exports) {
var e=require("./luxy.js"),t=require("./circletype.min.js"),o=$(".cursor"),a=$(".cursorFollower"),r=0,i=0,n=-40,c=-40;$(document).mousemove(function(e){n=e.pageX,c=e.pageY});var s=gsap.timeline(),m=gsap.timeline(),l=gsap.timeline({scrollTrigger:{trigger:"#about-me",start:"top center",end:"bottom center"}}),u=gsap.timeline({scrollTrigger:{trigger:"#portfolio",start:"top center",end:"bottom center"}}),d=gsap.timeline({scrollTrigger:{trigger:"#contact-us",start:"-200px center",end:"bottom center"}});s.from(".logo",{y:100,duration:.7,opacity:0}).from(".social-media a",{x:-100,duration:.8,opacity:0}),m.from(".head img",{y:50,duration:.5,opacity:0,delay:.5}).from(".head h1",{y:60,duration:.7,opacity:0}).from(".head h2",{y:70,duration:.9,opacity:0}),l.from(".img-about-me",{y:150,duration:.7,opacity:0}).from(".title-about-me",{y:125,duration:.9,opacity:0}).from(".context-about-me p",{y:100,duration:1.1,opacity:0}),u.from(".col-first",{y:125,duration:1.1,opacity:0,delay:.5}).from(".col-second",{y:125,duration:1.3,opacity:0}).from(".col-third",{y:125,duration:1.5,opacity:0}),d.from("#circle-text",{y:100,duration:1.3,opacity:0}).from(".text-contact-us h4",{y:50,duration:.5,opacity:0}).from(".text-contact-us h5",{y:75,duration:.7,opacity:0}),TweenMax.to({},.016,{repeat:-1,onRepeat:function(){r+=(n-r)/9,i+=(c-i)/9,TweenMax.set(o,{css:{left:n,top:c}}),TweenMax.set(a,{css:{left:r-11,top:i-11}})}}),$(".hover").on("mouseenter",function(){o.addClass("active"),a.addClass("active")}),$(".hover").on("mouseleave",function(){o.removeClass("active"),a.removeClass("active")}),$(".hover-img").on("mouseenter",function(){o.addClass("active-img"),a.addClass("active-img")}),$(".hover-img").on("mouseleave",function(){o.removeClass("active-img"),a.removeClass("active-img")}),new t(document.getElementById("circle-text"));var p=document.body,y=document.getElementsByClassName("smooth-scroll-wrapper")[0],g=y.getBoundingClientRect().height-1,f=.04,v=0;function h(){var e="translateY(-"+(v+=(window.pageYOffset-v)*f)+"px) translateZ(0)";y.style.transform=e,callScroll=requestAnimationFrame(h)}p.style.height=Math.floor(g)+"px",h();
},{"./luxy.js":"Aao6","./circletype.min.js":"mlLf"}]},{},["L4bL"], null)
//# sourceMappingURL=/script.75eb69ac.js.map