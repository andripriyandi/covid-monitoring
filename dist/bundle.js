!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function s(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new k(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return E()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var s=b(i,n);if(s){if(s===l)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var d=c(t,e,n);if("normal"===d.type){if(r=n.done?"completed":"suspendedYield",d.arg===l)continue;return{value:d.arg,done:n.done}}"throw"===d.type&&(r="completed",n.method="throw",n.arg=d.arg)}}}(t,n,i),a}function c(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l={};function d(){}function u(){}function h(){}var f={};f[o]=function(){return this};var p=Object.getPrototypeOf,v=p&&p(p(L([])));v&&v!==e&&n.call(v,o)&&(f=v);var m=h.prototype=d.prototype=Object.create(f);function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t,e){var r;this._invoke=function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,s){var l=c(t[o],t,a);if("throw"!==l.type){var d=l.arg,u=d.value;return u&&"object"==typeof u&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(u).then((function(t){d.value=t,i(d)}),(function(t){return r("throw",t,i,s)}))}s(l.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=c(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:E}}function E(){return{value:void 0,done:!0}}return u.prototype=m.constructor=h,h.constructor=u,h[i]=u.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===u||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},y(g.prototype),g.prototype[a]=function(){return this},t.AsyncIterator=g,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new g(s(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(m),m[i]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){var r=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);t.exports=o.locals||{}},function(t,e,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function s(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},r=[],o=0;o<t.length;o++){var a=t[o],c=e.base?a[0]+e.base:a[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=s(d),h={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(h)):i.push({identifier:d,updater:m(h,e),references:1}),r.push(d)}return r}function l(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var i=a(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function h(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=u(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function f(t,e,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var p=null,v=0;function m(t,e){var n,r,o;if(e.singleton){var a=v++;n=p||(p=l(e)),r=h.bind(null,n,a,!1),o=h.bind(null,n,a,!0)}else n=l(e),r=f.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=s(n[r]);i[o].references--}for(var a=c(t,e),l=0;l<n.length;l++){var d=s(n[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=a}}}},function(t,e,n){(e=n(4)(!1)).push([t.i,"html{\r\n    scroll-behavior: smooth;\r\n}\r\n.angka{\r\n    font-size: 70px;\r\n    line-height: 70px;\r\n    display: block;\r\n}\r\n",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(i=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),a=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(a).concat([o]).join("\n")}var i,s,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},function(t,e){class n extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML='\n        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">\n        <nav class="navbar navbar-expand-md navbar-dark bg-dark">\n          <div class="container">\n            <a class="navbar-brand" href="#">Covid-19</a>\n            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">\n              <span class="navbar-toggler-icon"></span>\n            </button>\n            <div class="collapse navbar-collapse" id="navbarResponsive">\n              <ul class="navbar-nav ml-auto">\n                <li class="nav-item active">\n                  <a class="nav-link" href="#">Beranda</a>\n                </li>\n                <li class="nav-item">\n                  <a class="nav-link" href="#tentang">Tentang</a>\n                </li>\n                <li class="nav-item">\n                  <a class="nav-link" href="#sebaran">Sebaran</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </nav>\n        '}}customElements.define("app-bar",n)},function(t,e){class n extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML='\n        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">\n        <section class="py-4" id="tentang">\n            <div class="container">\n                <h1 class="display-6 mb-4">Tentang Corona</h1>\n            <div class="row">\n                <div class="col-md-6">\n                    <div class="card text-white bg-primary mb-3">\n                        <a href="https://www.unicef.org/indonesia/id/coronavirus" style="text-decoration: none; color: aliceblue;">\n                            <div class="card-body">\n                                <h6 class="card-title mb-4">Novel coronavirus (COVID-19): Hal-hal yang perlu diketahui</h6>\n                                <small class="card-text">unicef indonesia</small>\n                            </div>\n                        </a>\n                    </div>\n                </div>\n                <div class="col-md-6">\n                    <div class="card text-white bg-warning mb-3">\n                        <a href="https://www.kompas.com/tren/read/2020/03/03/183500265/infografik-daftar-100-rumah-sakit-rujukan-penanganan-virus-corona" style="text-decoration: none; color: aliceblue;">\n                            <div class="card-body">\n                                <h6 class="card-title mb-4">Daftar 100 Rumah Sakit Rujukan Penanganan Virus Corona</h6>\n                                <small class="card-text">unicef indonesia</small>\n                            </div>\n                        </a>\n                    </div>\n                </div>\n                <div class="col-md-6">\n                    <div class="card text-white bg-danger mb-3">\n                        <a href="https://infeksiemerging.kemkes.go.id/" style="text-decoration: none; color: aliceblue;">\n                            <div class="card-body">\n                                <h6 class="card-title mb-4">Media Informasi Resmi Penyakit Infeksi</h6>\n                                <small class="card-text">Kementrian Kesehatan</small>\n                            </div>\n                        </a>\n                    </div>\n                </div>\n                <div class="col-md-6">\n                    <div class="card text-white bg-success mb-3">\n                        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" style="text-decoration: none; color: aliceblue;">\n                            <div class="card-body">\n                                <h6 class="card-title mb-4">Coronavirus disease (COVID-19) advice for the public</h6>\n                                <small class="card-text">WHO</small>\n                            </div>\n                        </a>\n                    </div>\n                </div>\n            </div>\n            </div>\n            </div>\n        </section>\n        '}}customElements.define("tentang-corona",n)},function(t,e){class n extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML='\n        <style>\n            .teks{\n                 font-size: 20px;\n                 line-height: 50px;\n                 color: #f1f2f3;font-weight: 600;\n                 margin: 0;\n                 margin-left: 20px\n            }\n        </style>\n        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">\n        <section class="py-1">\n            <div class="container">\n                <h3 class="display-6 mb-3"> Ikuti saya di</h3>\n                <div class="row mb-5">\n                    <div class="col-md-4 mb-3">\n                        <a href="https://www.instagram.com/andripriyandi" target="_blank" style="text-decoration: none;">\n                            <div class="card" style="background: #ff1493; border-radius: 8px;">\n                                <h3 class="teks"> Instagram</h3>\n                            </div>\n                        </a>\n                    </div>\n                    <div class="col-md-4 mb-3">\n                        <a href="https://twitter.com/andripriyandi" target="_blank" style="text-decoration: none;">\n                            <div class="card" style="background: #00acee; border-radius: 8px;">\n                                <h3 class="teks"> Twitter</h3>\n                            </div>\n                        </a>\n                    </div>\n                    <div class="col-md-4 mb-3">\n                        <a href="https://web.facebook.com/andri.priandi.3" target="_blank" style="text-decoration: none;">\n                            <div class="card" style="background: #3b5596; border-radius: 8px;">\n                                <h3 class="teks"> Facebook</h3>\n                            </div>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </section>\n        '}}customElements.define("contact-me",n)},function(t,e){class n extends HTMLElement{constructor(){super(),this.shadowDOM=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowDOM.innerHTML="\n        <style>\n           * {\n              margin: 0;\n              padding: 0;\n              box-sizing: border-box;\n           }\n           :host {\n              display: block;\n              width: 100%;\n              background-color: #343a40;\n              color: white;\n              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n           }\n           h5 {\n               padding: 16px;\n               color: #6c757d;\n               text-align: center;\n           }\n       </style>\n       <h5>Copyright &copy; Andri Priyandi</h5>\n        "}}customElements.define("foot-app",n)},function(t,e,n){"use strict";n.r(e);n(0),n(1),n(5),n(6),n(7),n(8);(function(){const t="https://covid19.mathdro.id/api";(()=>{const e=new XMLHttpRequest;e.open("GET",t+"/countries/indonesia/confirmed",!0),e.onreadystatechange=function(){if(4===this.readyState&&200===this.status){let t=JSON.parse(this.responseText);for(let e=0;e<t.length;e++)document.getElementById("deaths").innerHTML+=""+t[e].deaths}},e.send()})(),(()=>{const e=new XMLHttpRequest;e.open("GET",t+"/countries/indonesia/confirmed",!0),e.onreadystatechange=function(){if(4===this.readyState&&200===this.status){let t=JSON.parse(this.responseText);for(let e=0;e<t.length;e++)document.getElementById("recovered").innerHTML+=""+t[e].recovered}},e.send()})(),(()=>{const e=new XMLHttpRequest;e.open("GET",t+"/countries/indonesia/confirmed",!0),e.onreadystatechange=function(){if(4===this.readyState&&200===this.status){let t=JSON.parse(this.responseText);for(let e=0;e<t.length;e++)document.getElementById("active").innerHTML+=""+t[e].active}},e.send()})(),(()=>{const e=new XMLHttpRequest;e.open("GET",t+"/countries/indonesia/confirmed",!0),e.onreadystatechange=function(){if(4===this.readyState&&200===this.status){let t=JSON.parse(this.responseText);for(let e=0;e<t.length;e++)document.getElementById("confirmed").innerHTML+=""+t[e].confirmed}},e.send()})(),(()=>{const t=new XMLHttpRequest;t.open("GET","https://coronavirus-19-api.herokuapp.com/countries",!0),t.onreadystatechange=function(){if(4===this.readyState&&200===this.status){let t=JSON.parse(this.responseText);for(let e=0;e<t.length;e++)document.getElementById("tblGlobal").innerHTML+=` \n                    <tr>\n                        <td>${e+1}</td>\n                        <td>${t[e].country}</td>\n                        <td>${t[e].cases}</td>\n                        <td>${t[e].recovered}</td>\n                        <td>${t[e].deaths}</td>\n                    </tr>`}},t.send()})()})()}]);