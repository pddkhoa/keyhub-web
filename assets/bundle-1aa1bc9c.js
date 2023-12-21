import{al as E}from"./index-5568676a.js";function P(_,j){for(var v=0;v<j.length;v++){const p=j[v];if(typeof p!="string"&&!Array.isArray(p)){for(const c in p)if(c!=="default"&&!(c in _)){const o=Object.getOwnPropertyDescriptor(p,c);o&&Object.defineProperty(_,c,o.get?o:{enumerable:!0,get:()=>p[c]})}}}return Object.freeze(Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}))}var T={exports:{}};(function(_,j){(function(v,p){_.exports=p()})(window,function(){return function(v){var p={};function c(o){if(p[o])return p[o].exports;var l=p[o]={i:o,l:!1,exports:{}};return v[o].call(l.exports,l,l.exports,c),l.l=!0,l.exports}return c.m=v,c.c=p,c.d=function(o,l,d){c.o(o,l)||Object.defineProperty(o,l,{enumerable:!0,get:d})},c.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},c.t=function(o,l){if(1&l&&(o=c(o)),8&l||4&l&&typeof o=="object"&&o&&o.__esModule)return o;var d=Object.create(null);if(c.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:o}),2&l&&typeof o!="string")for(var f in o)c.d(d,f,(function(b){return o[b]}).bind(null,f));return d},c.n=function(o){var l=o&&o.__esModule?function(){return o.default}:function(){return o};return c.d(l,"a",l),l},c.o=function(o,l){return Object.prototype.hasOwnProperty.call(o,l)},c.p="/",c(c.s=4)}([function(v,p,c){var o=c(1),l=c(2);typeof(l=l.__esModule?l.default:l)=="string"&&(l=[[v.i,l,""]]);var d={insert:"head",singleton:!1};o(l,d),v.exports=l.locals||{}},function(v,p,c){var o,l=function(){return o===void 0&&(o=!!(window&&document&&document.all&&!window.atob)),o},d=function(){var r={};return function(i){if(r[i]===void 0){var s=document.querySelector(i);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch{s=null}r[i]=s}return r[i]}}(),f=[];function b(r){for(var i=-1,s=0;s<f.length;s++)if(f[s].identifier===r){i=s;break}return i}function S(r,i){for(var s={},u=[],m=0;m<r.length;m++){var g=r[m],y=i.base?g[0]+i.base:g[0],C=s[y]||0,O="".concat(y," ").concat(C);s[y]=C+1;var L=b(O),M={css:g[1],media:g[2],sourceMap:g[3]};L!==-1?(f[L].references++,f[L].updater(M)):f.push({identifier:O,updater:h(M,i),references:1}),u.push(O)}return u}function k(r){var i=document.createElement("style"),s=r.attributes||{};if(s.nonce===void 0){var u=c.nc;u&&(s.nonce=u)}if(Object.keys(s).forEach(function(g){i.setAttribute(g,s[g])}),typeof r.insert=="function")r.insert(i);else{var m=d(r.insert||"head");if(!m)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");m.appendChild(i)}return i}var w,x=(w=[],function(r,i){return w[r]=i,w.filter(Boolean).join(`
`)});function a(r,i,s,u){var m=s?"":u.media?"@media ".concat(u.media," {").concat(u.css,"}"):u.css;if(r.styleSheet)r.styleSheet.cssText=x(i,m);else{var g=document.createTextNode(m),y=r.childNodes;y[i]&&r.removeChild(y[i]),y.length?r.insertBefore(g,y[i]):r.appendChild(g)}}function e(r,i,s){var u=s.css,m=s.media,g=s.sourceMap;if(m?r.setAttribute("media",m):r.removeAttribute("media"),g&&btoa&&(u+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(g))))," */")),r.styleSheet)r.styleSheet.cssText=u;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(u))}}var t=null,n=0;function h(r,i){var s,u,m;if(i.singleton){var g=n++;s=t||(t=k(i)),u=a.bind(null,s,g,!1),m=a.bind(null,s,g,!0)}else s=k(i),u=e.bind(null,s,i),m=function(){(function(y){if(y.parentNode===null)return!1;y.parentNode.removeChild(y)})(s)};return u(r),function(y){if(y){if(y.css===r.css&&y.media===r.media&&y.sourceMap===r.sourceMap)return;u(r=y)}else m()}}v.exports=function(r,i){(i=i||{}).singleton||typeof i.singleton=="boolean"||(i.singleton=l());var s=S(r=r||[],i);return function(u){if(u=u||[],Object.prototype.toString.call(u)==="[object Array]"){for(var m=0;m<s.length;m++){var g=b(s[m]);f[g].references--}for(var y=S(u,i),C=0;C<s.length;C++){var O=b(s[C]);f[O].references===0&&(f[O].updater(),f.splice(O,1))}s=y}}}},function(v,p,c){(p=c(3)(!1)).push([v.i,`.cdx-list {
    margin: 0;
    padding-left: 40px;
    outline: none;
}

    .cdx-list__item {
        padding: 5.5px 0 5.5px 3px;
        line-height: 1.6em;
    }

    .cdx-list--unordered {
        list-style: disc;
    }

    .cdx-list--ordered {
        list-style: decimal;
    }

    .cdx-list-settings {
        display: flex;
    }

    .cdx-list-settings .cdx-settings-button {
            width: 50%;
        }
`,""]),v.exports=p},function(v,p,c){v.exports=function(o){var l=[];return l.toString=function(){return this.map(function(d){var f=function(b,S){var k=b[1]||"",w=b[3];if(!w)return k;if(S&&typeof btoa=="function"){var x=(e=w,t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),"/*# ".concat(n," */")),a=w.sources.map(function(h){return"/*# sourceURL=".concat(w.sourceRoot||"").concat(h," */")});return[k].concat(a).concat([x]).join(`
`)}var e,t,n;return[k].join(`
`)}(d,o);return d[2]?"@media ".concat(d[2]," {").concat(f,"}"):f}).join("")},l.i=function(d,f,b){typeof d=="string"&&(d=[[null,d,""]]);var S={};if(b)for(var k=0;k<this.length;k++){var w=this[k][0];w!=null&&(S[w]=!0)}for(var x=0;x<d.length;x++){var a=[].concat(d[x]);b&&S[a[0]]||(f&&(a[2]?a[2]="".concat(f," and ").concat(a[2]):a[2]=f),l.push(a))}},l}},function(v,p,c){c.r(p),c.d(p,"default",function(){return x}),c(0);const o='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>';function l(a){return function(e){if(Array.isArray(e))return d(e)}(a)||function(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}(a)||function(e,t){if(e){if(typeof e=="string")return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}}(a)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function d(a,e){(e==null||e>a.length)&&(e=a.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=a[t];return n}function f(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter(function(h){return Object.getOwnPropertyDescriptor(a,h).enumerable})),t.push.apply(t,n)}return t}function b(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?f(Object(t),!0).forEach(function(n){S(a,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach(function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(t,n))})}return a}function S(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function k(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function w(a,e,t){return e&&k(a.prototype,e),t&&k(a,t),a}var x=function(){function a(e){var t=e.data,n=e.config,h=e.api,r=e.readOnly;(function(i,s){if(!(i instanceof s))throw new TypeError("Cannot call a class as a function")})(this,a),this._elements={wrapper:null},this.api=h,this.readOnly=r,this.settings=[{name:"unordered",label:this.api.i18n.t("Unordered"),icon:o,default:n.defaultStyle==="unordered"||!1},{name:"ordered",label:this.api.i18n.t("Ordered"),icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>',default:n.defaultStyle==="ordered"||!0}],this._data={style:this.settings.find(function(i){return i.default===!0}).name,items:[]},this.data=t}return w(a,null,[{key:"isReadOnlySupported",get:function(){return!0}},{key:"enableLineBreaks",get:function(){return!0}},{key:"toolbox",get:function(){return{icon:o,title:"List"}}}]),w(a,[{key:"render",value:function(){var e=this;return this._elements.wrapper=this.makeMainTag(this._data.style),this._data.items.length?this._data.items.forEach(function(t){e._elements.wrapper.appendChild(e._make("li",e.CSS.item,{innerHTML:t}))}):this._elements.wrapper.appendChild(this._make("li",this.CSS.item)),this.readOnly||this._elements.wrapper.addEventListener("keydown",function(t){switch(t.keyCode){case 13:e.getOutofList(t);break;case 8:e.backspace(t)}},!1),this._elements.wrapper}},{key:"save",value:function(){return this.data}},{key:"renderSettings",value:function(){var e=this;return this.settings.map(function(t){return b(b({},t),{},{isActive:e._data.style===t.name,closeOnActivate:!0,onActivate:function(){return e.toggleTune(t.name)}})})}},{key:"onPaste",value:function(e){var t=e.detail.data;this.data=this.pasteHandler(t)}},{key:"makeMainTag",value:function(e){var t=e==="ordered"?this.CSS.wrapperOrdered:this.CSS.wrapperUnordered,n=e==="ordered"?"ol":"ul";return this._make(n,[this.CSS.baseBlock,this.CSS.wrapper,t],{contentEditable:!this.readOnly})}},{key:"toggleTune",value:function(e){for(var t=this.makeMainTag(e);this._elements.wrapper.hasChildNodes();)t.appendChild(this._elements.wrapper.firstChild);this._elements.wrapper.replaceWith(t),this._elements.wrapper=t,this._data.style=e}},{key:"_make",value:function(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=document.createElement(e);Array.isArray(n)?(t=r.classList).add.apply(t,l(n)):n&&r.classList.add(n);for(var i in h)r[i]=h[i];return r}},{key:"getOutofList",value:function(e){var t=this._elements.wrapper.querySelectorAll("."+this.CSS.item);if(!(t.length<2)){var n=t[t.length-1],h=this.currentItem;h!==n||n.textContent.trim().length||(h.parentElement.removeChild(h),this.api.blocks.insert(),this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex()),e.preventDefault(),e.stopPropagation())}}},{key:"backspace",value:function(e){var t=this._elements.wrapper.querySelectorAll("."+this.CSS.item),n=t[0];n&&t.length<2&&!n.innerHTML.replace("<br>"," ").trim()&&e.preventDefault()}},{key:"selectItem",value:function(e){e.preventDefault();var t=window.getSelection(),n=t.anchorNode.parentNode.closest("."+this.CSS.item),h=new Range;h.selectNodeContents(n),t.removeAllRanges(),t.addRange(h)}},{key:"pasteHandler",value:function(e){var t,n=e.tagName;switch(n){case"OL":t="ordered";break;case"UL":case"LI":t="unordered"}var h={style:t,items:[]};if(n==="LI")h.items=[e.innerHTML];else{var r=Array.from(e.querySelectorAll("LI"));h.items=r.map(function(i){return i.innerHTML}).filter(function(i){return!!i.trim()})}return h}},{key:"CSS",get:function(){return{baseBlock:this.api.styles.block,wrapper:"cdx-list",wrapperOrdered:"cdx-list--ordered",wrapperUnordered:"cdx-list--unordered",item:"cdx-list__item"}}},{key:"data",set:function(e){e||(e={}),this._data.style=e.style||this.settings.find(function(n){return n.default===!0}).name,this._data.items=e.items||[];var t=this._elements.wrapper;t&&t.parentNode.replaceChild(this.render(),t)},get:function(){this._data.items=[];for(var e=this._elements.wrapper.querySelectorAll(".".concat(this.CSS.item)),t=0;t<e.length;t++)e[t].innerHTML.replace("<br>"," ").trim()&&this._data.items.push(e[t].innerHTML);return this._data}},{key:"currentItem",get:function(){var e=window.getSelection().anchorNode;return e.nodeType!==Node.ELEMENT_NODE&&(e=e.parentNode),e.closest(".".concat(this.CSS.item))}}],[{key:"conversionConfig",get:function(){return{export:function(e){return e.items.join(". ")},import:function(e){return{items:[e],style:"unordered"}}}}},{key:"sanitize",get:function(){return{style:{},items:{br:!0}}}},{key:"pasteConfig",get:function(){return{tags:["OL","UL","LI"]}}}]),a}()}]).default})})(T);var A=T.exports;const N=E(A),H=P({__proto__:null,default:N},[A]);export{H as b};
