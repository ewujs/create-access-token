(()=>{var t={926:t=>{function e(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}t.exports=function(t){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=t.apply(r,n);function c(t){e(i,o,a,c,s,"next",t)}function s(t){e(i,o,a,c,s,"throw",t)}c(void 0)}))}}},713:t=>{t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},8:t=>{function e(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(r)}t.exports=e},757:(t,e,r)=>{t.exports=r(666)},666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new T(n||[]);return a._invoke=function(t,e,r){var n=h;return function(o,a){if(n===l)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=l;var s=f(t,e,r);if("normal"===s.type){if(n=r.done?d:p,s.arg===y)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h="suspendedStart",p="suspendedYield",l="executing",d="completed",y={};function v(){}function w(){}function m(){}var g={};g[a]=function(){return this};var x=Object.getPrototypeOf,b=x&&x(x(_([])));b&&b!==r&&n.call(b,a)&&(g=b);var k=m.prototype=v.prototype=Object.create(g);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function r(o,a,i,c){var s=f(t[o],t,a);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function _(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:S}}function S(){return{value:e,done:!0}}return w.prototype=k.constructor=m,m.constructor=w,w.displayName=s(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},E(P.prototype),P.prototype[i]=function(){return this},t.AsyncIterator=P,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new P(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(k),s(k,c,"Generator"),k[a]=function(){return this},k.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:_(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=r(757),e=r.n(t),n=r(926),o=r.n(n),a=r(713),i=r.n(a),c=r(8),s=r.n(c),u=function(t){var e={};switch(s()(t)){case"string":e.url=t;break;case"object":e=t}"data"in e||(e.data={}),"method"in e||(e.method="POST");var r={resolve:null,reject:null},n=new XMLHttpRequest,o=function(t,r){switch(s()(t)){case"string":e.data=Object.assign(i()({},t,r),e.data);break;case"object":e.data=Object.assign(t,e.data)}},a=function(t){return o(t),new Promise((function(t,o){switch(r.resolve=t,r.reject=o,n.open(e.method,e.url),a=n,(i=(i=e.headers)||{}).hasOwnProperty("Content-Type")||(i["Content-Type"]="application/x-www-form-urlencoded"),Object.keys(i).forEach((function(t){i[t]&&a.setRequestHeader(t,i[t])})),e.headers["Content-Type"]){case"application/x-www-form-urlencoded":n.send(Object.keys(e.data).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e.data[t])})).join("&"));break;case"application/json":n.send(JSON.stringify(e.data))}var a,i;n.onreadystatechange=function(){4===n.readyState&&(n.status<200||n.status>299?r.reject(n):r.resolve(n.responseText))}}))};return{url:function(t){return e.url=t},headers:function(t){return e.headers=t},method:function(t){return e.method=t},data:function(t,e){return o(t,e)},send:a,post:function(t){return e.method="POST",a(t)},get:function(t){return e.method="GET",a(t)}}};!function(t){var r,n=t.location.hostname.split(".")[0],a=["cte","pte","lte"].find((function(t){return-1!==n.indexOf(t)}));r=void 0===a?-1!==n.indexOf("sys")?"dispatch-test.digitalriver.com":"api.digitalriver.com":"dispatch-".concat(a,".digitalriverws.net");var i=function(){var r=o()(e().mark((function r(n){var o;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"==typeof n){e.next=2;break}throw new Error("Please pass the site ID.");case 2:return e.prev=2,e.next=5,u({url:"https://".concat(t.location.hostname,"/store/").concat(n,"/SessionToken"),method:"GET",headers:{Accept:"application/json"}}).send().then((function(t){return t})).catch((function(t){throw Error(t)}));case 5:return o=e.sent,e.abrupt("return",JSON.parse(o).session_token);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),r,null,[[2,9]])})));return function(t){return r.apply(this,arguments)}}(),c=function(){var n=o()(e().mark((function n(o){var a,c,s,f,h,p;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=(a=o||{}).key,s=a.secret,f=a.siteId,"string"==typeof c){e.next=3;break}throw new Error("Please pass a API Key.");case 3:if("string"==typeof s){e.next=5;break}throw new Error("Please pass a API secret.");case 5:if("string"==typeof f){e.next=7;break}throw new Error("Please pass the site ID.");case 7:return e.prev=7,e.next=10,i(f);case 10:return h=e.sent,e.next=13,u({url:"https://".concat(r,"/oauth20/token"),method:"POST",headers:{Authorization:"Basic ".concat(t.btoa(c+":"+s))},data:{grant_type:"password",dr_session_token:h}}).send().then((function(t){return t})).catch((function(t){throw Error(t)}));case 13:return p=e.sent,sessionStorage.setItem("drAccessToken",p),e.abrupt("return",p);case 18:e.prev=18,e.t0=e.catch(7),console.error(e.t0);case 21:case"end":return e.stop()}}),n,null,[[7,18]])})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=o()(e().mark((function n(o){var a,c,s,f,h,p,l,d;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=(a=o||{}).key,s=a.secret,f=a.siteId,h=a.username,p=a.password,"string"==typeof c){e.next=3;break}throw new Error("Please pass a API Key.");case 3:if("string"==typeof s){e.next=5;break}throw new Error("Please pass a API secret.");case 5:if("string"==typeof f){e.next=7;break}throw new Error("Please pass the site ID.");case 7:return e.prev=7,e.next=10,i(f);case 10:return l=e.sent,e.next=13,u({url:"https://".concat(r,"/oauth20/token"),method:"POST",headers:{Authorization:"Basic ".concat(t.btoa(c+":"+s))},data:{grant_type:"password",username:h,password:t.btoa(p),dr_session_token:l}}).send().then((function(t){return t})).catch((function(t){throw Error(t)}));case 13:return d=e.sent,sessionStorage.setItem("drAccessToken",d),e.abrupt("return",d);case 18:e.prev=18,e.t0=e.catch(7),console.error(e.t0);case 21:case"end":return e.stop()}}),n,null,[[7,18]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var r=o()(e().mark((function r(n,o){var a;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"==typeof n){e.next=2;break}throw new Error("Please pass the site ID.");case 2:if("string"==typeof o){e.next=4;break}throw new Error("Please pass a public API Key.");case 4:return e.prev=4,e.next=7,u({url:"https://".concat(t.location.hostname,"/store/").concat(n,"/SessionToken?apiKey=").concat(o),method:"GET",headers:{Accept:"application/json"}}).send().then((function(t){return t})).catch((function(t){throw Error(t)}));case 7:return a=e.sent,e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(4),console.error(e.t0);case 14:case"end":return e.stop()}}),r,null,[[4,11]])})));return function(t,e){return r.apply(this,arguments)}}(),h=function(){var t=o()(e().mark((function t(n){var o;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("string"==typeof n){t.next=2;break}throw new Error("Please pass the token.");case 2:return t.prev=2,t.next=5,u({url:"https://".concat(r,"/oauth20/access-tokens?token=").concat(n),method:"GET"}).send().then((function(t){return t})).catch((function(t){throw Error(t)}));case 5:return o=t.sent,t.abrupt("return",o);case 9:t.prev=9,t.t0=t.catch(2),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}();t.DRAccessToken={createLimitedAccessToken:c,createFullAccessToken:s,createLimitedAccessTokenByPk:f,getTokenInfo:h}}(window)})()})();