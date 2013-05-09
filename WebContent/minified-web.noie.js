var j=!0,t=null,u=!1;if(/^u/.test(typeof define)){var H={};this.define=function(p,k){H[p]=k()};this.require=function(p){return H[p]}}define("minified",function(){function p(a){return"string"==typeof a}function k(a){return"function"==typeof a}function A(a){return a&&a.nodeType}function x(a){return a&&a.length!=t&&!p(a)&&!A(a)&&!k(a)}function v(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c]);return a}function f(a,b){for(var c=0;a&&c<a.length;c++)b(a[c],c);return a}function F(a,b){var c=[];f(a,function(a,e){b(a,e)&&c.push(a)});return c}function y(a,b,c){var d=[];(c||f)(a,function(a,c){x(a=b(a,c))?f(a,function(a){d.push(a)}):a!=t&&d.push(a)});return d}function m(a,b,c){return(a!=t?""+a:"").replace(b,c||"")}function z(a){return parseFloat(m(a,/^[^\d-]/))}function I(a){var b={m:"absolute",g:"hidden",d:"block",f:t},c=a.get(b);a.set(b);b=a[0].offsetHeight;a.set(c);return b}function J(a){a()}function K(a){D?D.push(a):r.setTimeout(a,0)}function G(){function a(a,e){b==t&&(b=a,c=e,r.setTimeout(function(){f(d,J)},0))}var b,c=[],d=[],e=a.then=function(a,e){function g(){try{var d=b?a:e;if(k(d)){var g=d.apply(t,c);g&&k(g.then)?g.then(function(a){l(j,[a])},function(a){l(u,[a])}):l(j,[g])}else l(b,c)}catch(f){l(u,[f])}}var l=G();b!=t?r.setTimeout(g,0):d.push(g);return l};a.always=function(a){return e(a,a)};a.error=function(a){return e(0,a)};return a}function s(a,b,c){return k(a)?K(a):new B(E(a,b,c))}function E(a,b,c){function d(a){a=function g(a){return x(a)?y(a,g):a}(a);return e?F(a,function(a){for(;a=a.parentNode;){if(a===e)return j;if(c)return u}}):a}var e;if(b&&1!=(b=E(b)).length)return y(b,function(b){return E(a,b)});e=b&&b[0];if(!p(a))return d(x(a)?a:[a]);b=(e||w).querySelectorAll(a);return e?d(b):b}function B(a){for(var b=this.length=a.length,c=0;c<b;c++)this[c]=a[c]}var r=this,w=document,D=[],C=[],M=y(["msR","webkitR","mozR","r"],function(a){return r[a+"equestAnimationFrame"]})[0]||function(a){r.setTimeout(a,33)};v({each:function(a){return f(this,a)},filter:function(a){return new B(F(this,a))},collect:function(a){return new B(y(this,a))},sub:function(a,b){var c=this.length,d=0>a?c+a:a,e=b==t?c:0<=b?b:c+b;return new B(F(this,function(a,b){return b>=d&&b<e}))},find:function(a){for(var b=k(a)?a:function(b,c){if(a===b)return c},c,d=0;d<this.length;d++)if((c=b(this[d],d))!=t)return c},hasClass:function(a){var b=RegExp("\\b"+a+"\\b");return this.find(function(a){return b.test(a.className)?a:t})},remove:function(){f(this,function(a){a.parentNode.removeChild(a)})},get:function(a,b){var c=this,d=c[0];if(d){if(p(a)){var e=m(a,/^[$@]/),n,h=/^\$\$/.test(a)&&("hidden"==c.get("$visibility")||"none"==c.get("$display"));n="$"==a?d.className:"$$"==a?d.getAttribute("style"):"$$fade"==a?isNaN(n=h?0:z(c.get("$opacity")))?1:n:"$$slide"==a?(h?0:d.offsetHeight)+"px":/^\$/.test(a)?r.getComputedStyle(d,t).getPropertyValue(m(e,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):/^@/.test(a)?d.getAttribute(e):d[e];return b?z(n):n}var g={};(x(a)?f:v)(a,function(a){g[a]=c.get(a,b)});return g}},set:function(a,b){var c=this,d;void 0!==b?"$$fade"==a||"$$slide"==a?c.set({g:0<(d=z(b))?"visible":"hidden",d:"block"}).set("$$fade"==a?{k:d}:{f:/px$/.test(b)?b:function(a,b,c){return d*(d&&I($(c)))+"px"},l:"hidden"}):f(c,function(c,d){var h=m(a,/^[@$]/),g=c.className||"",l=/^\$/.test(a)?c.style:c,q=k(b)?b(s(c).get(a),d,c):b;"$"==a?q!=t&&(f(q.split(/\s+/),function(a){var b=m(a,/^[+-]/),c=g;g=m(g,RegExp("\\b"+b+"\\b"));if(/^\+/.test(a)||b==a&&c==g)g+=" "+b}),c.className=m(g,/^\s+|\s+(?=\s|$)/g)):"$$"==a?q!=t?c.setAttribute("style",q):c.removeAttribute("style"):/^@/.test(a)?q!=t?l.setAttribute(h,q):l.removeAttribute(h):l[h]=q}):p(a)||k(a)?c.set("$",a):v(a,function(a,b){c.set(a,b)});return c},add:function(a,b){return f(this,function(c,d){var e;(function h(a){x(a)?f(a,h):k(a)?h(a(c,d)):a!=t&&(a=A(a)?a:w.createTextNode(a),e?e.parentNode.insertBefore(a,e.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),e=a)})(A(a)&&d?t:a)})},fill:function(a){return f(this,function(a){s(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c)})},addAfter:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c.nextSibling)})},addFront:function(a){return this.add(a,function(a,c){c.insertBefore(a,c.firstChild)})},replace:function(a){return this.add(a,function(a,c,d){d.replaceChild(a,c)})},clone:function(){return new B(y(this,function(a){var b=A(a);if(1==b){var c={};f(a.attributes,function(a){var b=a.name;a=a.value;"id"!=b&&(c["@"+b]=a)});return s.EE(a.tagName,c,s(a.childNodes).clone())}return 5>b?a.data:t}))},animate:function(a,b,c,d){var e=this,n=[],h=/-?[\d.]+/,g,l=G(),q=k(c)?c:function(a,b,d){return a+d*(b-a)*(c+(1-c)*d*(3-2*d))};d=d||{};d.time=0;d.stop=function(){g();l(u)};b=b||500;c=c||0;f(e,function(b){var c={b:s(b),a:{},c:{}};v(c.a=c.b.get(a),function(b,d){var e=a[b];"$$slide"==b&&(e=e*I(c.b)+"px");c.c[b]=/^[+-]=/.test(e)?m(e.substr(2),h,z(d)+z(m(e,/\+?=/))):e});n.push(c)});g=s.loop(function(a){function c(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(m(a,/[^\d,]+/g).split(",")[b])}d.time=a;a>=b||0>a?(f(n,function(a){a.b.set(a.c)}),g(),d.time=t,l(j,[e])):f(n,function(d){v(d.a,function(e,g){var f="rgb(",n=d.c[e],l=a/b;if(/^#|rgb\(/.test(n))for(var k=0;3>k;k++)f+=Math.round(q(c(g,k),c(n,k),l))+(2>k?",":")");else f=m(n,h,q(z(g),z(n),l));d.b.set(e,f)})})});return l},toggle:function(a,b,c,d){var e={},f=u,h=/\b(?=\w)/g,g=this;return!b?g.toggle(m(a,h,"-"),m(a,h,"+")):g.set(a)&&function(h){h!==f&&(f="boolean"==typeof h?h:!f,c?g.o(f?b:a,e.stop?e.stop()||e.time:c,d,e):g.set(f?b:a))}},on:function(a,b,c,d){return f(this,function(e,f){function h(a){a=a||r.event;if(!b.apply(d?c:a.target,d||c||[a,f])||d)a.preventDefault(),a.stopPropagation()}(b.M=b.M||[]).push({e:e,h:h,n:a});e.addEventListener(a,h,j)})},offset:function(){for(var a=this[0],b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b}},function(a,b){B.prototype[a]=b});v({$$:function(a){return E(a)[0]},EE:function(a,b,c,d){return function(){var e=w.documentElement.namespaceURI,e=s(e?w.createElementNS(e,a):w.createElement(a));x(b)||"object"!=typeof b?e.add(b):e.set(b).add(c);d&&d(e);return e}},request:function(a,b,c,d,e,f){var h,g=c,l=0,k=G();try{return h=new XMLHttpRequest,c!=t&&(d=d||{},!p(c)&&!A(c)&&(g=y(c,function L(a,b){return x(b)?y(b,function(b){return L(a,b)}):encodeURIComponent(a)+(b!=t?"="+encodeURIComponent(b):"")},v).join("&")),/post/i.test(a)?!A(c)&&!p(c)&&!d["Content-Type"]&&(d["Content-Type"]="application/x-www-form-urlencoded"):(b+="?"+g,g=t)),h.open(a,b,j,e,f),v(d,function(a,b){h.setRequestHeader(a,b)}),h.onreadystatechange=function(){4==h.readyState&&!l++&&(200==h.status?k(j,[h.responseText,h.responseXML]):k(u,[h.status,h.statusText,h.responseText]))},h.send(g),k}catch(m){l||k(u,[0,t,m!=t?""+m:""])}},toJSON:r.JSON&&JSON.stringify,parseJSON:r.JSON&&JSON.parse,ready:K,setCookie:function(a,b,c,d,e,f){w.cookie=a+"="+(f?b:escape(b))+(c?"; expires="+("object"==typeof c?c:new Date((new Date).getTime()+864e5*c)).toUTCString():"")+"; path="+(d?escapeURI(d):"/")+(e?"; domain="+escape(e):"")},getCookie:function(a,b){var c,d=(c=RegExp("(^|;)\\s*"+a+"=([^;]*)").exec(w.cookie))&&c[2];return b?d:d&&unescape(d)},loop:function(a){var b={i:a,j:(new Date).getTime(),a:function(){for(var a=0;a<C.length;a++)C[a]===b&&C.splice(a--,1)}};2>C.push(b)&&function d(){f(C,function(a){a.i(Math.max(0,(new Date).getTime()-a.j),a.a)}).length&&M(d)}();return b.a},off:function(a){f(a.M,function(a){a.e.removeEventListener(a.n,a.h,j)});a.M=t}},function(a,b){s[a]=b});w.addEventListener("DOMContentLoaded",function(){f(D,J);D=t},u);return{$:s}});