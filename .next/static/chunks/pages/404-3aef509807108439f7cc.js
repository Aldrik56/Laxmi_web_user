_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"3Vz7":function(e,t,n){"use strict";var r=n("IYc2");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,u=(0,o.useRef)(),s=(0,o.useState)(!1),f=r(s,2),l=f[0],p=f[1],d=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||l||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,c=r.observer,a=r.elements;return a.set(e,t),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,l]);return(0,o.useEffect)((function(){if(!a&&!l){var e=(0,c.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[l]),[d,l]};var o=n("1QO0"),c=n("pn+c"),a="undefined"!==typeof IntersectionObserver;var i=new Map},BU7w:function(e,t,n){"use strict";var r=n("IYc2"),o=n("jZpq");t.__esModule=!0,t.default=void 0;var c=o(n("1QO0")),a=n("RdM9"),i=n("4mHv"),u=n("3Vz7"),s={};function f(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.pathname||"/",l=c.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),c=n[0],i=n[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):i||c}}),[o,e.href,e.as]),p=l.href,d=l.as,v=e.children,y=e.replace,h=e.shallow,b=e.scroll,O=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var m=c.Children.only(v),j=m&&"object"===typeof m&&m.ref,_=(0,u.useIntersection)({rootMargin:"200px"}),w=r(_,2),g=w[0],E=w[1],x=c.default.useCallback((function(e){g(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,g]);(0,c.useEffect)((function(){var e=E&&t&&(0,a.isLocalURL)(p),r="undefined"!==typeof O?O:n&&n.locale,o=s[p+"%"+d+(r?"%"+r:"")];e&&!o&&f(n,p,d,{locale:r})}),[d,p,E,O,t,n]);var N={ref:x,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,i,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:c,locale:u,scroll:i}))}(e,n,p,d,y,h,b,O)},onMouseEnter:function(e){(0,a.isLocalURL)(p)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),f(n,p,d,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var k="undefined"!==typeof O?O:n&&n.locale,L=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(d,k,n&&n.locales,n&&n.domainLocales);N.href=L||(0,a.addBasePath)((0,a.addLocale)(d,k,n&&n.defaultLocale))}return c.default.cloneElement(m,N)};t.default=l},G3km:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("1QO0"),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function c(e,t){if("string"!==typeof t)return e;return function(n,r,c){return e(n,r,o({ns:t},c))}}var a=n("ysIl"),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function u(e){var t=Object(r.useContext)(a.a);return Object(r.useMemo)((function(){return i(i({},t),{t:c(t.t,e)})}),[t,e])}},RAk0:function(e,t,n){"use strict";n("8UMa");var r=n("1QO0"),o=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),t.Fragment=c("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,c={},s=null,f=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(f=t.ref),t)i.call(t,r)&&!u.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:f,props:c,_owner:a.current}}t.jsx=s,t.jsxs=s},U7aO:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n("uNx/")}])},bWzE:function(e,t,n){e.exports=n("BU7w")},t12N:function(e,t,n){"use strict";e.exports=n("RAk0")},"uNx/":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var r=n("t12N"),o=n("bWzE"),c=n.n(o),a=n("G3km");function i(){var e=Object(a.a)("notFound").t;return Object(r.jsx)("div",{className:"d-flex justify-content-center",children:Object(r.jsxs)("div",{className:"notFound",children:[Object(r.jsx)("h1",{children:"404"}),Object(r.jsxs)("p",{children:[e("Sorry, Something went wrong"),". ",e("Either it was removed"),", ",e("or you mistyped the link"),"."]}),Object(r.jsxs)("div",{className:"d-flex flex-row justify-content-center mt-5",children:[Object(r.jsx)(c.a,{href:"/",children:Object(r.jsx)("a",{className:"btn btn-primary py-2 ",children:e("Go to homepage")})}),Object(r.jsx)(c.a,{href:"/contactus",children:Object(r.jsx)("a",{className:"btn btn-light py-2 ms-4",children:e("Contact us")})})]})]})})}},ysIl:function(e,t,n){"use strict";var r=n("1QO0");t.a=Object(r.createContext)({t:function(e){return Array.isArray(e)?e[0]:e},lang:""})}},[["U7aO",0,1]]]);