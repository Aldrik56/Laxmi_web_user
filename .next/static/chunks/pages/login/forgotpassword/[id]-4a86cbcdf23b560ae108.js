_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{"/YhX":function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"e",(function(){return a})),n.d(e,"a",(function(){return s}));var r="LOGIN_REQUEST",o="LOGIN_SUCCESS",c="LOGIN_FAILURE",a="LOGOUT",s="ENTER_PAGE"},"486k":function(t,e,n){"use strict";var r=n("St7B");n("keS/");e.a=r.create({baseURL:"http://34.101.70.83:3421/api/web_user/v1",timeout:1e4,headers:{"X-API-KEY":"L@xm1_4p1_k3y2",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjcyOTY3Njg2MDRkZWUwNDNjODU5OTUiLCJlbWFpbCI6InRlc3Rpbmd1c2VyQGdtYWlsLmNvbSIsIm5hbWUiOiJpcmZhbm1ATWFpbC5jb20iLCJyb2xlIjoidXNlciIsInBob25lX251bWJlciI6InVuZGVmaW5lZCIsImhlaWdodCI6MTUwLCJ3ZWlnaHQiOjcwLCJhZ2UiOjI1LCJpYXQiOjE3MjM2NjgyOTQsImV4cCI6MTc1NTIwNDI5NH0.BuzFgEd7FSTvwR1f3lz9Nidup95-UJ5SxfRplchNLes"}})},Fu3s:function(t,e,n){"use strict";n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return u})),n.d(e,"a",(function(){return f})),n.d(e,"h",(function(){return d})),n.d(e,"c",(function(){return p})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return b})),n.d(e,"b",(function(){return O}));var r=n("/YhX"),o=n("486k"),c=function(t,e){return function(n){n(a()),o.a.post("/auth/login",t).then((function(t){console.log(t);var r=t.data,o=r.status,c=r.message;o?(n(s(t.data.data)),e.push("/")):n(i(c))})).catch((function(t){n(i(t.message))}))}},a=function(){return{type:r.c}},s=function(t){return{type:r.d,payload:t}},i=function(t){return{type:r.b,payload:t}},u=function(){return{type:r.e}},f=function(){return{type:r.a}},d=function(t){return o.a.post("/api/auth/signup",t).then((function(t){return t.data})).catch((function(t){return{status:!1,message:t.message}}))},p=function(t){return o.a.post("/api/auth/forgot_p1",t).then((function(t){return t.data})).catch((function(t){return{status:!1,message:t.message}}))},l=function(t){return o.a.post("/api/auth/forgot_p2",t).then((function(t){return t.data})).catch((function(t){return{status:!1,message:t.message}}))},b=function(t){return o.a.post("/api/auth/forgot_p3",t).then((function(t){return t.data})).catch((function(t){return{status:!1,message:t.message}}))},m=n("St7B"),j=n.n(m),h=n("Tmf+"),O=function(t,e){var n="";return Object.keys(e).map((function(t,r){e[t]&&(n+="&".concat([t],"=").concat(e[t]))})),console.log("".concat(t,"?").concat(n)),console.log("".concat(e.category)),function(e){e(g()),j.a.get("/api".concat(t,"?").concat(n)).then((function(t){var n=t.data,r=n.status,o=n.message;n.data;e(r?w(t.data):y(o))})).catch((function(t){e(y(t.message))}))}},g=function(){return{type:h.b}},w=function(t){return{type:h.c,payload:t}},y=function(t){return{type:h.a,payload:t}}},Rujo:function(t,e,n){"use strict";n.r(e);var r=n("t12N"),o=(n("bWzE"),n("G3km")),c=n("ZXe9"),a=n("mG8T"),s=n("1QO0"),i=n("o2DG"),u=n("Fu3s"),f=n("rS3p"),d=n("PX2k"),p=n.n(d),l=n("qT4n");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var j=function(){var t=Object(i.useRouter)(),e=t.query.id,n=Object(s.useState)({}),c=n[0],d=n[1],b=Object(s.useState)({}),j=b[0],h=b[1],O=Object(s.useState)(!1),g=O[0],w=O[1],y=Object(o.a)("login").t;Object(s.useEffect)((function(){h({});var n={token:e};Object(u.d)(n).then((function(e){e.status||t.push("/")}))}),[]);var v=function(t){var e=t.target,n=e.value,r=e.id;d(m(m({},c),{},Object(a.a)({},r,n)))};return Object(r.jsxs)("form",{onSubmit:function(n){n.preventDefault(),function(){var t=!0,e=m({},j);return c.password?Object(l.a)(c.password)?e.password=null:(e.password="Password ".concat(y("common:is not valid")),t=!1):(e.password="Password ".concat(y("common:cannot be empty")),t=!1),c.passwordConfirm?Object(l.a)(c.passwordConfirm)?c.password!==c.passwordConfirm?(e.passwordConfirm="Confirm Password ".concat(y("common:doesn't match with")," Password"),t=!1):e.passwordConfirm=null:(e.passwordConfirm="Confirm Password ".concat(y("common:is not valid")),t=!1):(e.passwordConfirm="Confirm Password ".concat(y("common:cannot be empty")),t=!1),h(e),t}()&&(w(!0),p()({title:"".concat(y("Confirm Change Password")),text:"".concat(y("Are you sure you want to change password")," ?"),icon:"warning",buttons:!0,dangerMode:!0}).then((function(n){if(n){var r={password:c.password,token:e};Object(u.e)(r).then((function(e){console.log(e),e.status?(p()("".concat(y("Password Changed Successfully")),"".concat(y("Please log in again")),"success").then((function(e){t.push("/login")})),h({}),w(!1)):(h({password:response.message}),w(!1))})).catch((function(t){h({password:"".concat(y("common:Something Wrong"))})}))}else w(!1)})))},children:[Object(r.jsx)(f.a,{id:"password",type:"password",error:j.password,label:y("New Password"),onChange:v}),Object(r.jsx)(f.a,{id:"passwordConfirm",type:"password",error:j.passwordConfirm,label:y("Confirm Password"),onChange:v}),Object(r.jsx)("button",{disabled:g,type:"submit",className:"btn btn-primary py-3 w-100",children:g?"Loading":y("Change")})]})},h=n("xHGu");e.default=Object(h.a)((function(){var t=Object(o.a)("login").t,e=[{path:"/login",name:"".concat(t("Title"))},{path:"/forgotpassword",name:"".concat(t("Forgot Password"))}];return Object(r.jsxs)("div",{className:"container-fluid px-5",children:[Object(r.jsx)(c.a,{path:e}),Object(r.jsx)("section",{className:"forgot-password d-flex justify-content-center",children:Object(r.jsxs)("div",{className:"col-12 col-md-6 col-lg-5 col-xxl-4",children:[Object(r.jsxs)("div",{className:"text-center",children:[Object(r.jsxs)("h2",{className:"heading",children:[t("Change Password")," ?"]}),Object(r.jsx)("p",{className:"desc",children:t("Please enter your email to receive a link to create new password")})]}),Object(r.jsx)("div",{className:"d-flex justify-content-center",children:Object(r.jsx)("div",{className:"col-9",children:Object(r.jsx)(j,{})})})]})})]})}),"auth")},"Tmf+":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return c}));var r="FETCH_REQUEST",o="FETCH_SUCCESS",c="FETCH_FAILURE"},ZXe9:function(t,e,n){"use strict";var r=n("t12N"),o=n("bWzE"),c=n.n(o),a=n("G3km");e.a=function(t){var e=t.path,n=Object(a.a)("common").t;return Object(r.jsx)("div",{className:"breadcrumb",children:Object(r.jsxs)("p",{children:[Object(r.jsx)(c.a,{href:"/",children:Object(r.jsx)("a",{className:"link",children:n("Home")})}),e.map((function(t,n){return Object(r.jsxs)("span",{className:"link-container",children:[Object(r.jsx)("span",{className:"mx-3 link-splitter",children:"/"},n),Object(r.jsx)(c.a,{href:t.path,children:Object(r.jsx)("a",{className:"link ".concat(e.length-1===n?"active":""),children:t.name})})]},n)}))]})})}},brZz:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login/forgotpassword/[id]",function(){return n("Rujo")}])},"keS/":function(t,e,n){var r,o;!function(c){if(void 0===(o="function"===typeof(r=c)?r.call(e,n,e,t):r)||(t.exports=o),!0,t.exports=c(),!!0){var a=window.Cookies,s=window.Cookies=c();s.noConflict=function(){return window.Cookies=a,s}}}((function(){function t(){for(var t=0,e={};t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}function e(t){return t.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function c(e,n,c){if("undefined"!==typeof document){"number"===typeof(c=t({path:"/"},o.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(u){}n=r.write?r.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var s="";for(var i in c)c[i]&&(s+="; "+i,!0!==c[i]&&(s+="="+c[i].split(";")[0]));return document.cookie=e+"="+n+s}}function a(t,n){if("undefined"!==typeof document){for(var o={},c=document.cookie?document.cookie.split("; "):[],a=0;a<c.length;a++){var s=c[a].split("="),i=s.slice(1).join("=");n||'"'!==i.charAt(0)||(i=i.slice(1,-1));try{var u=e(s[0]);if(i=(r.read||r)(i,u)||e(i),n)try{i=JSON.parse(i)}catch(f){}if(o[u]=i,t===u)break}catch(f){}}return t?o[t]:o}}return o.set=c,o.get=function(t){return a(t,!1)},o.getJSON=function(t){return a(t,!0)},o.remove=function(e,n){c(e,"",t(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},qT4n:function(t,e,n){"use strict";function r(t){return!!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(t)}n.d(e,"a",(function(){return r}))},xHGu:function(t,e,n){"use strict";var r=n("mG8T"),o=n("t12N"),c=n("o2DG"),a=n("keS/"),s=n.n(a);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a=function(t,e){return function(n){var r=Object(c.useRouter)(),a=(s.a.get("laxmi-auth"),localStorage.getItem("persist:laxmi")),i=JSON.parse(a,(function(t,e){return"birth"==t?new Date(e):e})),f=JSON.parse((null===i||void 0===i?void 0:i.auth)||null,(function(t,e){return"birth"==t?new Date(e):e}));return"auth"===e?null!==f&&void 0!==f&&f.isLogin?(r.replace("/"),null):Object(o.jsx)(t,u({},n)):f.isLogin?Object(o.jsx)(t,u({},n)):(r.replace("/login"),null)}}}},[["brZz",0,1,2,4,8]]]);