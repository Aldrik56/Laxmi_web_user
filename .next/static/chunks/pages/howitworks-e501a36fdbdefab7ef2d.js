_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"3Vz7":function(e,t,n){"use strict";var r=n("IYc2");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=(0,c.useRef)(),l=(0,c.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,c.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),o.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,c.useEffect)((function(){if(!a&&!f){var e=(0,i.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[p,f]};var c=n("1QO0"),i=n("pn+c"),a="undefined"!==typeof IntersectionObserver;var o=new Map},"486k":function(e,t,n){"use strict";var r=n("St7B");n("keS/");t.a=r.create({baseURL:"http://34.101.70.83:3421/api/web_user/v1",timeout:1e4,headers:{"X-API-KEY":"L@xm1_4p1_k3y2",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjcyOTY3Njg2MDRkZWUwNDNjODU5OTUiLCJlbWFpbCI6InRlc3Rpbmd1c2VyQGdtYWlsLmNvbSIsIm5hbWUiOiJpcmZhbm1ATWFpbC5jb20iLCJyb2xlIjoidXNlciIsInBob25lX251bWJlciI6InVuZGVmaW5lZCIsImhlaWdodCI6MTUwLCJ3ZWlnaHQiOjcwLCJhZ2UiOjI1LCJpYXQiOjE3MjM2NjgyOTQsImV4cCI6MTc1NTIwNDI5NH0.BuzFgEd7FSTvwR1f3lz9Nidup95-UJ5SxfRplchNLes"}})},BU7w:function(e,t,n){"use strict";var r=n("IYc2"),c=n("jZpq");t.__esModule=!0,t.default=void 0;var i=c(n("1QO0")),a=n("RdM9"),o=n("4mHv"),s=n("3Vz7"),l={};function u(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(c?"%"+c:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,o.useRouter)(),c=n&&n.pathname||"/",f=i.default.useMemo((function(){var t=(0,a.resolveHref)(c,e.href,!0),n=r(t,2),i=n[0],o=n[1];return{href:i,as:e.as?(0,a.resolveHref)(c,e.as):o||i}}),[c,e.href,e.as]),d=f.href,p=f.as,j=e.children,h=e.replace,m=e.shallow,b=e.scroll,v=e.locale;"string"===typeof j&&(j=i.default.createElement("a",null,j));var x=i.Children.only(j),O=x&&"object"===typeof x&&x.ref,y=(0,s.useIntersection)({rootMargin:"200px"}),w=r(y,2),g=w[0],N=w[1],I=i.default.useCallback((function(e){g(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,g]);(0,i.useEffect)((function(){var e=N&&t&&(0,a.isLocalURL)(d),r="undefined"!==typeof v?v:n&&n.locale,c=l[d+"%"+p+(r?"%"+r:"")];e&&!c&&u(n,d,p,{locale:r})}),[p,d,N,v,t,n]);var k={ref:I,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,i,o,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:i,locale:s,scroll:o}))}(e,n,d,p,h,m,b,v)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),u(n,d,p,{priority:!0}))}};if(e.passHref||"a"===x.type&&!("href"in x.props)){var _="undefined"!==typeof v?v:n&&n.locale,C=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(p,_,n&&n.locales,n&&n.domainLocales);k.href=C||(0,a.addBasePath)((0,a.addLocale)(p,_,n&&n.defaultLocale))}return i.default.cloneElement(x,k)};t.default=f},D1XH:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/howitworks",function(){return n("HX5s")}])},G3km:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("1QO0"),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)};function i(e,t){if("string"!==typeof t)return e;return function(n,r,i){return e(n,r,c({ns:t},i))}}var a=n("ysIl"),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)};function s(e){var t=Object(r.useContext)(a.a);return Object(r.useMemo)((function(){return o(o({},t),{t:i(t.t,e)})}),[t,e])}},HX5s:function(e,t,n){"use strict";n.r(t);var r=n("t12N"),c=n("G3km"),i=n("ZXe9"),a=n("cryj"),o=n("1QO0"),s=n("486k"),l=n("BX6A"),u=n.n(l),f=function(e){var t=e.data,n=e.index;return Object(r.jsxs)("div",{className:"row oddItem container-fluid px-5",children:[Object(r.jsx)("div",{className:"col-12 col-lg-3 d-flex justify-content-center ",children:Object(r.jsx)(u.a,{width:238,height:181,src:t.image,alt:"laxmi"})}),Object(r.jsxs)("div",{className:"col-12 col-lg-8 content",children:[Object(r.jsx)("span",{className:"index",children:n+1}),Object(r.jsx)("h1",{className:"title",children:t.title}),Object(r.jsx)("p",{className:"desc",children:t.description})]})]})},d=function(e){var t=e.data,n=e.index;return Object(r.jsxs)("div",{className:"row evenItem mx-0",children:[Object(r.jsxs)("div",{className:"col-12 col-lg-8 content container-fluid px-5 order-1 order-lg-0",children:[Object(r.jsx)("span",{className:"index",children:n+1}),Object(r.jsx)("h1",{className:"title",children:t.title}),Object(r.jsx)("p",{className:"desc",children:t.description})]}),Object(r.jsx)("div",{className:"col-12 col-lg-3 d-flex justify-content-center order-0 order-lg-1",children:Object(r.jsx)(u.a,{width:238,height:181,src:t.image,alt:"laxmi"})})]})},p=function(e){var t=e.t,n=Object(o.useState)(null),c=n[0],i=n[1];return Object(o.useEffect)((function(){s.a.get("/web_info/how_it_work").then((function(e){var t=e.data,n=t.data,r=t.status;i(r?n:[])})).catch((function(e){return i([]),{status:!1,message:e.message}}))}),[]),Object(r.jsx)(r.Fragment,{children:c?c.length?Object(r.jsx)("div",{className:"d-flex flex-column w-100",children:c.map((function(e,t){return Object(r.jsx)(r.Fragment,{children:(t+1)%2==0?Object(r.jsx)(d,{index:t,data:e}):Object(r.jsx)(f,{index:t,data:e})})}))}):Object(r.jsx)("p",{className:"text-center py-5",children:t("common:There are no data yet")}):Object(r.jsx)("p",{className:"text-center",children:"Loading"})})};t.default=function(){var e=Object(c.a)("common").t,t=[{path:"/howitworks",name:"".concat(e("How It Works"))}];return Object(r.jsxs)("div",{className:"",children:[Object(r.jsxs)("div",{className:"container-fluid px-5",children:[Object(r.jsx)(i.a,{path:t}),Object(r.jsx)(a.a,{title:e("How It Works")})]}),Object(r.jsx)("section",{className:"howitworks d-flex justify-content-center",children:Object(r.jsx)(p,{t:e})}),Object(r.jsx)("h1",{className:"text-center fw-bold",children:e("Your satisfaction is guaranteed")})]})}},RAk0:function(e,t,n){"use strict";n("8UMa");var r=n("1QO0"),c=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var i=Symbol.for;c=i("react.element"),t.Fragment=i("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:c,type:e,key:l,ref:u,props:i,_owner:a.current}}t.jsx=l,t.jsxs=l},ZXe9:function(e,t,n){"use strict";var r=n("t12N"),c=n("bWzE"),i=n.n(c),a=n("G3km");t.a=function(e){var t=e.path,n=Object(a.a)("common").t;return Object(r.jsx)("div",{className:"breadcrumb",children:Object(r.jsxs)("p",{children:[Object(r.jsx)(i.a,{href:"/",children:Object(r.jsx)("a",{className:"link",children:n("Home")})}),t.map((function(e,n){return Object(r.jsxs)("span",{className:"link-container",children:[Object(r.jsx)("span",{className:"mx-3 link-splitter",children:"/"},n),Object(r.jsx)(i.a,{href:e.path,children:Object(r.jsx)("a",{className:"link ".concat(t.length-1===n?"active":""),children:e.name})})]},n)}))]})})}},bWzE:function(e,t,n){e.exports=n("BU7w")},cryj:function(e,t,n){"use strict";var r=n("t12N"),c=n("tIlk");t.a=function(e){var t=e.title;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(c.BrowserView,{children:[Object(r.jsx)("h1",{className:"head text-center mb-0 text-capitalize",children:t}),Object(r.jsx)("div",{className:"d-flex justify-content-center text-capitalize",children:Object(r.jsx)("hr",{})})]}),Object(r.jsxs)(c.MobileView,{children:[Object(r.jsx)("h1",{className:"head-mobile text-center mb-0 text-capitalize",children:t}),Object(r.jsx)("div",{className:"d-flex justify-content-center text-capitalize",children:Object(r.jsx)("hr",{})})]})]})}},"keS/":function(e,t,n){var r,c;!function(i){if(void 0===(c="function"===typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=c),!0,e.exports=i(),!!0){var a=window.Cookies,o=window.Cookies=i();o.noConflict=function(){return window.Cookies=a,o}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function c(){}function i(t,n,i){if("undefined"!==typeof document){"number"===typeof(i=e({path:"/"},c.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(l){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var o="";for(var s in i)i[s]&&(o+="; "+s,!0!==i[s]&&(o+="="+i[s].split(";")[0]));return document.cookie=t+"="+n+o}}function a(e,n){if("undefined"!==typeof document){for(var c={},i=document.cookie?document.cookie.split("; "):[],a=0;a<i.length;a++){var o=i[a].split("="),s=o.slice(1).join("=");n||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var l=t(o[0]);if(s=(r.read||r)(s,l)||t(s),n)try{s=JSON.parse(s)}catch(u){}if(c[l]=s,e===l)break}catch(u){}}return e?c[e]:c}}return c.set=i,c.get=function(e){return a(e,!1)},c.getJSON=function(e){return a(e,!0)},c.remove=function(t,n){i(t,"",e(n,{expires:-1}))},c.defaults={},c.withConverter=n,c}((function(){}))}))},t12N:function(e,t,n){"use strict";e.exports=n("RAk0")},ysIl:function(e,t,n){"use strict";var r=n("1QO0");t.a=Object(r.createContext)({t:function(e){return Array.isArray(e)?e[0]:e},lang:""})}},[["D1XH",0,1,3,4,5]]]);