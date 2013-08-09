var j=!0,t=null,u=!1;if(/^u/.test(typeof define)){var P={};this.define=function(w,q){P[w]=q()};this.require=function(w){return P[w]}}define("minified",function(){function w(a){return a!=t?""+a:""}function q(a){return"string"==typeof a}function v(a){return a&&a.nodeType}function E(a){return a&&a.length!=t&&!q(a)&&!v(a)&&!p(a)}function Q(a){return a}function y(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function J(a,b){var c=[];f(a,function(a,e){b(a,e)&&c.push(a)});return c}function r(a,b,c){var d=[];a(b,function(a,b){f(c(a,b),function(a){d.push(a)})});return d}function m(a,b,c){return w(a).replace(b,c||"")}function f(a,b){if(E(a))for(var c=0;c<a.length;c++)b(a[c],c);else a!=t&&b(a,0);return a}function p(a){return"function"==typeof a&&!a.item}function R(){return 1}function K(a,b){var c=RegExp("\\b"+a+"\\b","i");return a?function(a){return c.test(a[b])}:R}function L(a,b){for(var c=0;a&&c<a.length;c++)a[c]===b&&a.splice(c--,1)}function B(a){return parseFloat(m(a,/^[^\d-]+/))}function H(a){return a.minified=a.minified||++Z}function M(a,b){var c=[],d={},e;f(a,function(a){f(b(a),function(a){if(v(a)&&!d[e=H(a)])c.push(a),d[e]=j})});return c}function S(a){var b={$position:"absolute",$visibility:"hidden",$display:"block",$height:t},c=a.get(b);a.set(b);b=a.get("$height",j);a.set(c);return b}function T(a){a()}function U(a,b){f(b,function(a){a.e.detachEvent("on"+a.n,a.h)})}function V(){f(G,T);G=t}function W(a){G?G.push(a):s.setTimeout(a,0)}function X(a,b,c,d){return function(){var e=l(z.createElement(a));E(b)||b!=t&&"object"!=typeof b?e.add(b):e.set(b).add(c);d&&d(e);return e}}function Y(a){return $[a]||"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function l(a,b,c){return p(a)?W(a):new F(C(a,b,c))}function C(a,b,c){function d(a){a=r(f,a,function aa(a){return E(a)?r(f,a,aa):a});return e?J(a,function(a){for(;a=a.parentNode;){if(a===e)return j;if(c)return u}}):a}var e,k,h,g;if(b&&1!=(b=C(b)).length)return M(b,function(b){return C(a,b,c)});e=b&&b[0];if(!q(a))return d(a);if(1<(b=a.split(/\s*,\s*/)).length)return M(b,function(a){return C(a,e,c)});if(b=/(\S+)\s+(.+)$/.exec(a))return C(b[2],C(b[1],e),c);if(a!=(b=m(a,/^#/)))return d(z.getElementById(b));e=e||z;k=(b=/([\w-]*)\.?([\w-]*)/.exec(a))[1];g=b[2];b=(h=e.getElementsByClassName&&g)?e.getElementsByClassName(g):e.getElementsByTagName(k||"*");if(k=h?k:g)b=J(b,K(k,h?"nodeName":"className"));return e?d(b):b}function I(a,b){var c,d={};if(p(a))return a;if(!a||q(a)&&("*"==a||(c=/^([\w-]*)\.([\w-]+)$/.exec(a))||(c=/^([\w-]+)$/.exec(a)))){var e=K(c&&c[1],"nodeName"),k=K(c&&c[2],"className");return function(a){return 1==v(a)&&e(a)&&k(a)}}if(b)return function(c){return l(a,b).find(c)!=t};l(a).each(function(a){d[H(a)]=j});return function(a){return d[H(a)]}}function N(){function a(a,e){b==t&&(b=a,c=e,s.setTimeout(function(){f(d,T)},0))}var b,c=[],d=[],e=a.then=function(a,e){function g(){try{var d=b?a:e;if(p(d)){var g=d.apply(t,c);g&&p(g.then)?g.then(function(a){n(j,[a])},function(a){n(u,[a])}):n(j,[g])}else n(b,c)}catch(f){n(u,[f])}}var n=N();b!=t?s.setTimeout(g,0):d.push(g);return n};a.error=function(a){return e(0,a)};return a}function F(a){for(var b=this.length=a.length,c=0;c<b;c++)this[c]=a[c]}var s=this,z=document,Z=1,D={},G=[],O=[],ba=s.requestAnimationFrame||function(a){s.setTimeout(a,33)},A=!!z.all&&!G.map,$={"	":"\\t","\r":"\\r","\n":"\\n",'"':'\\"',"\\":"\\\\"};y({each:function(a){return f(this,a)},filter:function(a){return new F(J(this,a))},collect:function(a){return new F(r(f,this,a))},sub:function(a,b){var c=0>a?this.length+a:a,d=0<=b?b:this.length+(b||0);return this.filter(function(a,b){return b>=c&&b<d})},find:function(a,b){for(var c,d=p(a)?a:function(b,c){if(a===b)return c},e=b;e<this.length;e++)if((c=d(this[e],e))!=t)return c},remove:function(){f(this,function(a){A&&1==v(a)&&(f(C("*",a),function(a){U(0,D[a.minified]);delete D[a.minified]}),removeEvents(a));a.parentNode.removeChild(a)})},text:function(){function a(b){var c=v(b);return 1==c?r(f,b.childNodes,a):5>c?b.data:t}return r(f,this,a).join("")},trav:function(a,b,c){var d=I("number"==typeof b?t:b),e="number"==typeof b?b:c||1e9;return new F(M(this,function(b){for(var c=[];(b=b[a])&&c.length<e;)d(b)&&c.push(b);return c}))},select:function(a,b){return l(a,this,b)},is:function(a){var b=I(a);return!this.find(function(a){if(!b(a))return j})},only:function(a){return this.filter(I(a))},get:function(a,b){var c=this,d=c[0];if(d){if(q(a)){var e=m(m(a,/^%/,"data-"),/^[$@]/),k;k="$"==a?d.className:"$$"==a?A?d.style.cssText:d.getAttribute("style"):/\$\$/.test(a)&&("hidden"==d.style.visibility||"none"==d.style.display)?0:"$$fade"==a?isNaN(k=A?B(d.style.filter)/100:B(d.style.opacity))?1:k:"$$slide"==a?c.get("$height"):/^\$/.test(a)?s.getComputedStyle?s.getComputedStyle(d,t).getPropertyValue(m(e,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):(d.currentStyle||d.style)[e]:/^[@%]/.test(a)?d.getAttribute(e):d[e];return b?B(k):k}var h={};(E(a)?f:y)(a,function(a){h[a]=c.get(a,b)});return h}},set:function(a,b){var c=this,d;void 0!==b?"$$fade"==a||"$$slide"==a?c.set({$visibility:0<(d=B(b))?"visible":"hidden",$display:"block"}).set("$$fade"==a?A?{$filter:"alpha(opacity = "+100*d+")",$zoom:1}:{$opacity:d}:{$height:/px/.test(b)?b:function(a,b,c){return d*(d&&S(l(c)))+"px"},$overflow:"hidden"}):f(c,function(c,d){var h=m(m(a,/^%/,"data-"),/^[@$]/),g=c.className||"",n=/^\$/.test(a)?c.style:c,x=p(b)?b(l(c).get(a),d,c):b;"$"==a?x!=t&&(f(x.split(/\s+/),function(a){var b=m(a,/^[+-]/),c=g;g=m(g,RegExp("\\b"+b+"\\b","i"));if(/^\+/.test(a)||b==a&&c==g)g+=" "+b}),c.className=m(g,/^\s+|\s+(?=\s|$)/g)):"$$"==a?A?n.cssText=x:x!=t?c.setAttribute("style",x):c.removeAttribute("style"):/^[@%]/.test(a)?x!=t?n.setAttribute(h,x):n.removeAttribute(h):n[h]=x}):q(a)||p(a)?c.set("$",a):y(a,function(a,b){c.set(a,b)});return c},add:function(a,b){return this.each(function(c,d){var e;(function h(a){E(a)?f(a,h):p(a)?h(a(c,d)):a!=t&&(a=v(a)?a:z.createTextNode(a),e?e.parentNode.insertBefore(a,e.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),e=a)})(v(a)&&d?t:a)})},fill:function(a){return this.each(function(a){l(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c)})},addAfter:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c.nextSibling)})},addFront:function(a){return this.add(a,function(a,c){c.insertBefore(a,c.firstChild)})},replace:function(a){return this.add(a,function(a,c,d){d.replaceChild(a,c)})},clone:function(a){return this.collect(function(b){var c=v(b);if(1==c){var d={$:b.className||t,$$:A?b.style.cssText:b.getAttribute("style")};f(b.attributes,function(a){var c=a.name;"id"!=c&&"style"!=c&&"class"!=c&&b.getAttribute(c)&&(d["@"+c]=a.value)});return X(b.tagName,d,l(b.childNodes).clone(),a)}return 5>c?b.data:t})},animate:function(a,b,c,d){var e=this,k=[],h=/-?[\d.]+/,g,n=N(),x=p(c)?c:function(a,b,d){return a+d*(b-a)*(c+(1-c)*d*(3-2*d))};d=d||{};d.time=0;d.stop=function(){g();n(u)};b=b||500;c=c||0;f(e,function(b){var c={a:l(b),c:{}};y(c.b=c.a.get(a),function(b,d){var e=a[b];"$$slide"==b&&(e=e*S(c.a)+"px");c.c[b]=/^[+-]=/.test(e)?m(e.substr(2),h,B(d)+B(m(e,/\+?=/))):e});k.push(c)});g=l.loop(function(a){function c(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(m(a,/[^\d,]+/g).split(",")[b])}d.time=a;a>=b||0>a?(f(k,function(a){a.a.set(a.c)}),g(),d.time=t,n(j,[e])):f(k,function(d){y(d.b,function(e,k){var g="rgb(",f=d.c[e],n=a/b;if(/^#|rgb\(/.test(f))for(var l=0;3>l;l++)g+=Math.round(x(c(k,l),c(f,l),n))+(2>l?",":")");else g=m(f,h,w(x(B(k),B(f),n)));d.a.set(e,g)})})});return n},toggle:function(a,b,c,d){var e=this,k={},h=u,g=/\b(?=\w)/g,f;return b?e.set(a)&&function(g){if(g!==h)return f=(h=g===j||g===u?g:!h)?b:a,p(f)?f(e,c,d):c?e.animate(f,k.stop?k.stop()||k.time:c,d,k):e.set(f)&&void 0}:e.toggle(m(a,g,"-"),m(a,g,"+"))},values:function(a){var b=a||{};this.each(function(a){var d=a.name,e=w(a.value);if(/form/i.test(a.tagName))l(r(f,a.elements,Q)).values(b);else if(d&&(!/kbox|dio/i.test(a.type)||a.checked))b[d]=r(f,[b[d],e],Q)});return b},offset:function(){for(var a=this[0],b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b},on:function(a,b,c,d){return this.each(function(e,k){f(a.split(/\s/),function(a){var g=m(a,/\|/),f=p(b)||t,l=f?b:c,r=f&&d&&c,q=f&&(d||c),v=g==a,w=f?R:I(b,e),f=function(a,b){var c=a||s.event,d,e=b||c.target;if(w(e)&&(d=(!l.apply(r||e,q||[c,k])||q)&&v)&&!b)c.stopPropagation&&(c.preventDefault(),c.stopPropagation()),c.returnValue=u,c.cancelBubble=j;return d};a={e:e,h:f,n:g};(l.M=l.M||[]).push(a);A?(e.attachEvent("on"+g,f),g=H(e),(D[g]=D[g]||[]).push(a)):(e.addEventListener(g,f,u),(e.minified2=e.minified2||[]).push(a))})})},onOver:function(a){var b=this,c=[];return b.on("|mouseover |mouseout",function(d,e){var f="mouseout"!=d.type,h=d.relatedTarget||d.toElement;if(c[e]!==f&&(f||!h||h!=b[e]&&!l(h).trav("parentNode",b[e]).length))c[e]=f,a.call(this,f,e)})},trigger:function(a,b){return this.each(function(c){for(var d,e=c;e&&!d;)f(A?D[e.minified]:e.minified2,function(e){e.n==a&&(d=d||e.h(b,c))}),e=e.parentNode})}},function(a,b){F.prototype[a]=b});y({request:function(a,b,c,d,e,k){var h,g=c,l=0,m=N();try{h=s.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP.3.0"),c!=t&&(d=d||{},!q(c)&&!v(c)&&(g=r(y,c,function(a,b){return r(f,b,function(b){return encodeURIComponent(a)+(b!=t?"="+encodeURIComponent(b):"")})}).join("&")),/post/i.test(a)?!v(c)&&!q(c)&&!d["Content-Type"]&&(d["Content-Type"]="application/x-www-form-urlencoded"):(b+="?"+g,g=t)),h.open(a,b,j,e,k),y(d,function(a,b){h.setRequestHeader(a,b)}),h.onreadystatechange=function(){4==h.readyState&&!l++&&(200==h.status?m(j,[h.responseText,h.responseXML]):m(u,[h.status,h.statusText,h.responseText]))},h.send(g)}catch(p){l||m(u,[0,t,w(p)])}return m},toJSON:function b(c){return c==t?""+c:q(c=c.valueOf())?'"'+m(c,/[\\\"\x00-\x1f\x22\x5c]/g,Y)+'"':E(c)?"["+r(f,c,b).join()+"]":"object"==typeof c?"{"+r(y,c,function(c,e){return b(c)+":"+b(e)}).join()+"}":w(c)},parseJSON:s.JSON?s.JSON.parse:function(b){b=m(b,/[\x00\xad\u0600-\uffff]/g,Y);if(/^[[\],:{}\s]*$/.test(m(m(b,/\\["\\\/bfnrtu]/g),/"[^"\\\n\r]*"|true|false|null|[\d.eE+-]+/g)))return eval("("+b+")")},ready:W,setCookie:function(b,c,d,e,f,h){z.cookie=b+"="+(h?c:escape(c))+(d?"; expires="+("object"==typeof d?d:new Date((new Date).getTime()+864e5*d)).toUTCString():"")+"; path="+(e?escapeURI(e):"/")+(f?"; domain="+escape(f):"")},getCookie:function(b,c){var d,e=(d=RegExp("(^|;)\\s*"+b+"=([^;]*)").exec(z.cookie))&&d[2];return c?e:e&&unescape(e)},loop:function(b){var c={d:b,f:(new Date).getTime(),b:function(){L(O,c)}};2>O.push(c)&&function e(){f(O,function(b){b.d(Math.max(0,(new Date).getTime()-b.f),b.b)}).length&&ba(e)}();return c.b},off:function(b){f(b.M,function(b){A?(b.e.detachEvent("on"+b.n,b.h),L(D[b.e.minified],b)):(b.e.removeEventListener(b.n,b.h,u),L(b.e.minified2,b))});b.M=t}},function(b,c){l[b]=c});s.onload=V;z.addEventListener&&z.addEventListener("DOMContentLoaded",V,u);s.g=function(){f(D,U)};return{$:l,$$:function(b){return C(b)[0]},EE:X,M:F}});