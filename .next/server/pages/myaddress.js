module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/5dK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "0x1U":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("O8Ta");


/***/ }),

/***/ "3Drx":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "3Vz7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("pn+c");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mHv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("jZpq");

var _interopRequireDefault = __webpack_require__("TGUN");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("RdM9"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("TipQ"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "5dMZ":
/***/ (function(module, exports) {

module.exports = require("next-translate/useTranslation");

/***/ }),

/***/ "6RWT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bWzE");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elements_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("CN7M");
/* harmony import */ var _data_linkArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("LSsa");




 // elements

 // data



const Sidebar = ({
  t,
  router,
  setPath
}) => {
  const pathName = router.pathname;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "col-12 col-lg-3 mt-4",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "sidebar card px-0",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "row px-3",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "col-3 d-flex  justify-content-center align-items-center",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_elements_icon__WEBPACK_IMPORTED_MODULE_4__[/* AccountCircle2 */ "b"], {})
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "col-9",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            className: "mb-0 name",
            children: "Jhon Doe"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
            className: "mb-0 desc",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_elements_icon__WEBPACK_IMPORTED_MODULE_4__[/* Edit */ "m"], {}), " ", t("navbar:Edit Profile")]
          })]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "row mx-0 mt-4 menu-container",
        children: [_data_linkArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].map((dataLink, index) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: `col-12 menu d-flex justify-content-between ${dataLink.url === pathName ? 'active' : ''}`,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: dataLink.url,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              children: t(`navbar:${dataLink.title}`)
            })
          }), index === 1 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: "notif",
            children: "1"
          }) : null]
        }, index)), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "col-12 menu",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: t(`navbar:Log Out`)
          })
        })]
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Sidebar));

/***/ }),

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "8Mf/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "9pXF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("yLnK"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "AE8H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/elements/heading.jsx
var heading = __webpack_require__("cryj");

// EXTERNAL MODULE: ./components/elements/form.jsx
var elements_form = __webpack_require__("rS3p");

// CONCATENATED MODULE: ./components/partials/cart/module/formOverseas.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // elements



const OverSeas = ({
  t
}) => {
  const {
    0: form,
    1: setForm
  } = Object(external_react_["useState"])({});
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])({});

  const handleChange = e => {
    const {
      value,
      id
    } = e.target;
    setForm(_objectSpread(_objectSpread({}, form), {}, {
      [id]: value
    }));
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: " d-flex justify-content-center",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "col-12 col-lg-8",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(elements_form["a" /* Input */], {
        id: "email",
        type: "email",
        error: error.email,
        label: t("common:Email"),
        onChange: handleChange
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-12 col-md-6",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(elements_form["a" /* Input */], {
            id: "name",
            type: "text",
            error: error.name,
            label: t("common:Name"),
            onChange: handleChange
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-12 col-md-6",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(elements_form["a" /* Input */], {
            id: "telephone",
            type: "text",
            error: error.telephone,
            label: t("common:Telephone"),
            onChange: handleChange
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(elements_form["f" /* TextAreaNoLimit */], {
        id: "address",
        type: "text",
        value: form.address,
        error: error.address,
        label: t("common:Address"),
        onChange: handleChange
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(elements_form["d" /* Select */], {
        options: [{
          "name": "Indonesia",
          "value": "1"
        }, {
          "name": "Inggris",
          "value": "2"
        }],
        id: "countries",
        placeholder: t("common:Select Country"),
        value: form.countries,
        error: error.countries,
        label: t("common:Country"),
        onChange: handleChange
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-12 col-md-6",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(elements_form["d" /* Select */], {
            options: [{
              "name": "Indonesia",
              "value": "1"
            }, {
              "name": "Inggris",
              "value": "2"
            }],
            id: "city",
            placeholder: t("common:Select City"),
            value: form.city,
            error: error.city,
            label: t("common:City"),
            onChange: handleChange
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-12 col-md-6",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(elements_form["d" /* Select */], {
            options: [{
              "name": "Indonesia",
              "value": "1"
            }, {
              "name": "Inggris",
              "value": "2"
            }],
            id: "zip",
            placeholder: t("common:Select Zip Code"),
            value: form.zip,
            error: error.zip,
            label: t("common:Zip"),
            onChange: handleChange
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(elements_form["f" /* TextAreaNoLimit */], {
        id: "detail",
        type: "text",
        value: form.detail,
        error: error.detail,
        label: t("common:Detail"),
        onChange: handleChange
      })]
    })
  });
};

/* harmony default export */ var formOverseas = (OverSeas);
// CONCATENATED MODULE: ./components/partials/cart/module/formDomestic.jsx



function formDomestic_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function formDomestic_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { formDomestic_ownKeys(Object(source), true).forEach(function (key) { formDomestic_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { formDomestic_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function formDomestic_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // elements



const Domestic = ({
  t
}) => {
  const {
    0: form,
    1: setForm
  } = Object(external_react_["useState"])({});
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])({});

  const handleChange = e => {
    const {
      value,
      id
    } = e.target;
    setForm(formDomestic_objectSpread(formDomestic_objectSpread({}, form), {}, {
      [id]: value
    }));
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: " d-flex justify-content-center",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "col-12 col-lg-8",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(elements_form["a" /* Input */], {
        id: "email",
        type: "email",
        error: error.email,
        label: t("common:Email"),
        onChange: handleChange
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-12 col-md-6",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(elements_form["a" /* Input */], {
            id: "name",
            type: "text",
            error: error.name,
            label: t("common:Name"),
            onChange: handleChange
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-12 col-md-6",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(elements_form["a" /* Input */], {
            id: "telephone",
            type: "text",
            error: error.telephone,
            label: t("common:Telephone"),
            onChange: handleChange
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(elements_form["f" /* TextAreaNoLimit */], {
        id: "address",
        type: "text",
        value: form.address,
        error: error.address,
        label: t("common:Address"),
        onChange: handleChange
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-12 col-md-6",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(elements_form["d" /* Select */], {
            options: [{
              "name": "Indonesia",
              "value": "1"
            }, {
              "name": "Inggris",
              "value": "2"
            }],
            id: "province",
            placeholder: t("common:Select Province"),
            value: form.province,
            error: error.province,
            label: t("common:Province"),
            onChange: handleChange
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-12 col-md-6",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(elements_form["d" /* Select */], {
            options: [{
              "name": "Indonesia",
              "value": "1"
            }, {
              "name": "Inggris",
              "value": "2"
            }],
            id: "city",
            placeholder: t("common:Select City"),
            value: form.city,
            error: error.city,
            label: t("common:City"),
            onChange: handleChange
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-12 col-md-6",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(elements_form["d" /* Select */], {
            options: [{
              "name": "Indonesia",
              "value": "1"
            }, {
              "name": "Inggris",
              "value": "2"
            }],
            id: "district",
            placeholder: t("common:Select District"),
            value: form.district,
            error: error.district,
            label: t("common:District"),
            onChange: handleChange
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-12 col-md-6",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(elements_form["d" /* Select */], {
            options: [{
              "name": "Indonesia",
              "value": "1"
            }, {
              "name": "Inggris",
              "value": "2"
            }],
            id: "zip",
            placeholder: t("common:Select Zip Code"),
            value: form.zip,
            error: error.zip,
            label: t("common:Zip"),
            onChange: handleChange
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(elements_form["f" /* TextAreaNoLimit */], {
        id: "detail",
        type: "text",
        value: form.detail,
        error: error.detail,
        label: t("common:Detail"),
        onChange: handleChange
      })]
    })
  });
};

/* harmony default export */ var formDomestic = (Domestic);
// CONCATENATED MODULE: ./components/partials/cart/module/modalAddress.jsx







const ModalAddress = ({
  t
}) => {
  const {
    0: tab,
    1: setTab
  } = Object(external_react_["useState"])(1);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "modal fade",
    id: "modalAddress",
    tabindex: "-1",
    "aria-labelledby": "exampleModalLabel",
    "aria-hidden": "true",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "modal-dialog modal-lg",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("form", {
        action: "",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "modal-content",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "modal-body px-0",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(heading["a" /* default */], {
              title: t('common:Add New Address')
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "text-center desc",
              children: t("common:To make an order, please add a shipping address")
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "mt-4 d-flex flex-row text-center",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                onClick: () => setTab(1),
                className: `col-6 tab ${tab === 1 ? 'active' : ''}`,
                children: t("common:Overseas")
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                onClick: () => setTab(2),
                className: `col-6 tab ${tab === 2 ? 'active' : ''}`,
                children: t("common:Domestic")
              })]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "px-3",
            children: tab === 1 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(formOverseas, {
              t: t
            }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(formDomestic, {
              t: t
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              type: "button",
              className: "btn btn-light",
              "data-bs-dismiss": "modal",
              children: t("common:Close")
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              type: "button",
              className: "btn btn-primary",
              children: t("common:Add")
            })]
          })]
        })
      })
    })
  });
};

/* harmony default export */ var modalAddress = __webpack_exports__["a"] = (ModalAddress);

/***/ }),

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "BU7w":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("jZpq");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("RdM9");

var _router2 = __webpack_require__("4mHv");

var _useIntersection = __webpack_require__("3Vz7");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "BX6A":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KdJJ")


/***/ }),

/***/ "Buri":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "CJ43":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "CN7M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return Language; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AccountCircle2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return ShoppingBag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return RemovedRedEye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return Close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return Stock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ChevronLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ChevronRight; });
/* unused harmony export ChevronDown */
/* unused harmony export Favorite */
/* unused harmony export FavoriteBorder */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ArrowRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ArrowLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return StarRate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return StarRateHalf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return StarRateEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return Phone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return Email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LocationOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return ZoomIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return Share; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AddShoppingCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return Edit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return Trash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return MinButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return PlusButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return MeasuringTape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ClipBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CheckCircleOutline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ArrowBackIos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ChatBubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return ShoppingCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return Menu; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const Language = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 20;
  let heightValue = height ? height : 20;
  let colorValue = color ? color : '#131920';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    width: widthValue,
    height: heightValue,
    fill: colorValue,
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M10.0891 0C4.52298 0 0.015625 4.48 0.015625 10C0.015625 15.52 4.52298 20 10.0891 20C15.6653 20 20.1828 15.52 20.1828 10C20.1828 4.48 15.6653 0 10.0891 0ZM17.077 6H14.1024C13.7797 4.75 13.3159 3.55 12.7108 2.44C14.5662 3.07 16.109 4.35 17.077 6ZM10.0992 2.04C10.9361 3.24 11.5916 4.57 12.0252 6H8.17323C8.60682 4.57 9.26226 3.24 10.0992 2.04ZM2.29451 12C2.13317 11.36 2.03234 10.69 2.03234 10C2.03234 9.31 2.13317 8.64 2.29451 8H5.70276C5.62209 8.66 5.56159 9.32 5.56159 10C5.56159 10.68 5.62209 11.34 5.70276 12H2.29451ZM3.12136 14H6.09602C6.41869 15.25 6.88253 16.45 7.48755 17.56C5.63217 16.93 4.08939 15.66 3.12136 14ZM6.09602 6H3.12136C4.08939 4.34 5.63217 3.07 7.48755 2.44C6.88253 3.55 6.41869 4.75 6.09602 6ZM10.0992 17.96C9.26226 16.76 8.60682 15.43 8.17323 14H12.0252C11.5916 15.43 10.9361 16.76 10.0992 17.96ZM12.4587 12H7.73964C7.64888 11.34 7.5783 10.68 7.5783 10C7.5783 9.32 7.64888 8.65 7.73964 8H12.4587C12.5495 8.65 12.6201 9.32 12.6201 10C12.6201 10.68 12.5495 11.34 12.4587 12ZM12.7108 17.56C13.3159 16.45 13.7797 15.25 14.1024 14H17.077C16.109 15.65 14.5662 16.93 12.7108 17.56ZM14.4956 12C14.5763 11.34 14.6368 10.68 14.6368 10C14.6368 9.32 14.5763 8.66 14.4956 8H17.9039C18.0652 8.64 18.166 9.31 18.166 10C18.166 10.69 18.0652 11.36 17.9039 12H14.4956Z",
      fill: color
    })
  });
};
const AccountCircle = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 20;
  let heightValue = height ? height : 20;
  let colorValue = color ? color : '#131920';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    width: widthValue,
    height: heightValue,
    fill: colorValue,
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M10.2984 0C4.73228 0 0.214844 4.48 0.214844 10C0.214844 15.52 4.73228 20 10.2984 20C15.8645 20 20.382 15.52 20.382 10C20.382 4.48 15.8645 0 10.2984 0ZM10.2984 3C11.9723 3 13.3235 4.34 13.3235 6C13.3235 7.66 11.9723 9 10.2984 9C8.62454 9 7.27334 7.66 7.27334 6C7.27334 4.34 8.62454 3 10.2984 3ZM10.2984 17.2C7.77752 17.2 5.54905 15.92 4.24827 13.98C4.27852 11.99 8.2817 10.9 10.2984 10.9C12.305 10.9 16.3183 11.99 16.3486 13.98C15.0478 15.92 12.8193 17.2 10.2984 17.2Z",
      fill: colorValue
    })
  });
};
const AccountCircle2 = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 48;
  let heightValue = height ? height : 48;
  let colorValue = color ? color : '#131920';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: colorValue,
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 10C27.32 10 30 12.68 30 16C30 19.32 27.32 22 24 22C20.68 22 18 19.32 18 16C18 12.68 20.68 10 24 10ZM24 38.4C19 38.4 14.58 35.84 12 31.96C12.06 27.98 20 25.8 24 25.8C27.98 25.8 35.94 27.98 36 31.96C33.42 35.84 29 38.4 24 38.4Z",
      fill: colorValue
    })
  });
};
const ShoppingBag = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 20;
  let heightValue = height ? height : 20;
  let colorValue = color ? color : '#131920';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    width: widthValue,
    height: heightValue,
    fill: colorValue,
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M14.5545 4H12.5378C12.5378 1.79 10.7328 0 8.50435 0C6.27588 0 4.47093 1.79 4.47093 4H2.45421C1.34502 4 0.4375 4.9 0.4375 6V18C0.4375 19.1 1.34502 20 2.45421 20H14.5545C15.6637 20 16.5712 19.1 16.5712 18V6C16.5712 4.9 15.6637 4 14.5545 4ZM6.48764 8C6.48764 8.55 6.03388 9 5.47928 9C4.92469 9 4.47093 8.55 4.47093 8V6H6.48764V8ZM8.50435 2C9.61354 2 10.5211 2.9 10.5211 4H6.48764C6.48764 2.9 7.39516 2 8.50435 2ZM12.5378 8C12.5378 8.55 12.084 9 11.5294 9C10.9748 9 10.5211 8.55 10.5211 8V6H12.5378V8Z",
      fill: color
    })
  });
};
const RemovedRedEye = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 26;
  let heightValue = height ? height : 25;
  let colorValue = color ? color : '#131920';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: colorValue,
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M12.9005 5.1875C7.85873 5.1875 3.55305 8.2975 1.80859 12.6875C3.55305 17.0775 7.85873 20.1875 12.9005 20.1875C17.9423 20.1875 22.248 17.0775 23.9924 12.6875C22.248 8.2975 17.9423 5.1875 12.9005 5.1875ZM12.9005 17.6875C10.1175 17.6875 7.85873 15.4475 7.85873 12.6875C7.85873 9.9275 10.1175 7.6875 12.9005 7.6875C15.6836 7.6875 17.9423 9.9275 17.9423 12.6875C17.9423 15.4475 15.6836 17.6875 12.9005 17.6875ZM12.9005 9.6875C11.2266 9.6875 9.87545 11.0275 9.87545 12.6875C9.87545 14.3475 11.2266 15.6875 12.9005 15.6875C14.5744 15.6875 15.9256 14.3475 15.9256 12.6875C15.9256 11.0275 14.5744 9.6875 12.9005 9.6875Z"
    })
  });
};
const Close = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 42;
  let heightValue = height ? height : 42;
  let colorValue = color ? color : '#F5F5F5';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: colorValue,
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M33.25 11.2175L30.7825 8.75L21 18.5325L11.2175 8.75L8.75 11.2175L18.5325 21L8.75 30.7825L11.2175 33.25L21 23.4675L30.7825 33.25L33.25 30.7825L23.4675 21L33.25 11.2175Z"
    })
  });
};
const Stock = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 42;
  let heightValue = height ? height : 42;
  let colorValue = color ? color : '#FFFFFF';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: colorValue,
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M18 9V0H6V9H0V19.5H24V9H18ZM10.5 18H1.5V10.5H4.5V12H7.5V10.5H10.5V18ZM7.5 9V1.5H10.5V3H13.5V1.5H16.5V9H7.5ZM22.5 18H13.5V10.5H16.5V12H19.5V10.5H22.5V18Z",
      fill: colorValue
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M0 24H4.5V22.5H19.5V24H24V21H0V24Z",
      fill: colorValue
    })]
  });
};
const ChevronLeft = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 24;
  let heightValue = height ? height : 24;
  let colorValue = color ? color : '#1E1E22';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: colorValue,
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M15.5388 7.41L14.117 6L8.06689 12L14.117 18L15.5388 16.59L10.9205 12L15.5388 7.41Z",
      fill: colorValue
    })
  });
};
const ChevronRight = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 24;
  let heightValue = height ? height : 24;
  let colorValue = color ? color : '#1E1E22';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: colorValue,
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M10.0836 6L8.6618 7.41L13.2801 12L8.6618 16.59L10.0836 18L16.1337 12L10.0836 6Z",
      fill: colorValue
    })
  });
};
const ChevronDown = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 24;
  let heightValue = height ? height : 24;
  let colorValue = color ? color : '#1E1E22';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: colorValue,
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
      "clip-path": "url(#clip0)",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        d: "M6 10.8827L7.41 9.46094L12 14.0792L16.59 9.46094L18 10.8827L12 16.9329L6 10.8827Z",
        fill: colorValue
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("defs", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("clipPath", {
        id: "clip0",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
          width: "24.2006",
          height: "24",
          fill: "white",
          transform: "matrix(0 1 1 0 0 0.800781)"
        })
      })
    })]
  });
};
const Favorite = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 24;
  let heightValue = height ? height : 24;
  let colorValue = color ? color : '#323232';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: colorValue,
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z",
      fill: colorValue
    })
  });
};
const FavoriteBorder = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 24;
  let heightValue = height ? height : 24;
  let colorValue = color ? color : '#323232';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: colorValue,
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z",
      fill: colorValue
    })
  });
};
const ArrowRight = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 24;
  let heightValue = height ? height : 24;
  let colorValue = color ? color : '#131920';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: colorValue,
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M22.1095 11.5932C22.1055 11.5822 22.1055 11.5712 22.1005 11.5602C22.1005 11.5582 22.1005 11.5572 22.0995 11.5552C22.0395 11.4132 21.9515 11.2932 21.8495 11.1852C21.8385 11.1732 21.8345 11.1582 21.8235 11.1462L14.1755 3.56822C13.9265 3.32222 13.6005 3.19922 13.2745 3.19922C12.9485 3.19922 12.6235 3.32222 12.3745 3.56822C11.8765 4.06122 11.8765 4.85922 12.3745 5.35222L17.8485 10.7772H3.08355C2.37955 10.7772 1.81055 11.3412 1.81055 12.0392C1.81055 12.7352 2.37955 13.3002 3.08355 13.3002H17.8475L12.3735 18.7522C11.8755 19.2442 11.8755 20.0432 12.3735 20.5352C12.8705 21.0282 13.6775 21.0282 14.1755 20.5352L21.8235 12.9312C21.9335 12.8222 22.0125 12.6932 22.0745 12.5572C22.0945 12.5152 22.1055 12.4742 22.1195 12.4322C22.1535 12.3302 22.1745 12.2282 22.1815 12.1202C22.1845 12.0762 22.1905 12.0352 22.1885 11.9912C22.1835 11.8552 22.1595 11.7232 22.1095 11.5932Z",
      fill: colorValue
    })
  });
};
const ArrowLeft = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 24;
  let heightValue = height ? height : 24;
  let colorValue = color ? color : '#131920';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: colorValue,
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M20.7509 10.804H5.98691L11.4609 5.35197C11.9589 4.85997 11.9589 4.06097 11.4609 3.56897C10.9639 3.07597 10.1569 3.07597 9.65891 3.56897L2.01091 11.173C1.90091 11.282 1.82191 11.411 1.75991 11.547C1.73991 11.589 1.72891 11.63 1.71491 11.672C1.68091 11.774 1.65991 11.876 1.65291 11.984C1.64991 12.028 1.64391 12.069 1.64591 12.113C1.65091 12.248 1.67391 12.381 1.72391 12.51C1.72791 12.521 1.72791 12.532 1.73291 12.543C1.73291 12.545 1.73291 12.546 1.73391 12.548C1.79391 12.69 1.88191 12.81 1.98391 12.918C1.99491 12.93 1.99891 12.945 2.00991 12.957L9.65791 20.535C9.90691 20.781 10.2329 20.904 10.5589 20.904C10.8849 20.904 11.2099 20.781 11.4589 20.535C11.9569 20.042 11.9569 19.244 11.4589 18.751L5.98491 13.326H20.7489C21.4529 13.326 22.0219 12.762 22.0219 12.064C22.0239 11.369 21.4549 10.804 20.7509 10.804Z",
      fill: colorValue
    })
  });
};
const StarRate = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 24;
  let heightValue = height ? height : 24;
  let colorValue = color ? color : '#1E1E22';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: colorValue,
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M14.5506 10L12.1003 2L9.64998 10H2.01672L8.24836 14.41L5.87872 22L12.1003 17.31L18.3319 22L15.9623 14.41L22.1838 10H14.5506Z",
      fill: colorValue
    })
  });
};
const StarRateHalf = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 24;
  let heightValue = height ? height : 24;
  let colorValue = color ? color : '#1E1E22';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M14.2727 10.1464L14.381 10.5H14.7508H20.814L15.8733 14.0021L15.5769 14.2122L15.6852 14.559L17.5921 20.6667L12.6011 16.9105L12.3002 16.684L11.9995 16.9107L7.01959 20.6647L8.92583 14.559L9.03419 14.2119L8.73738 14.0019L3.789 10.5H9.85016H10.2199L10.3282 10.1464L12.3005 3.7073L14.2727 10.1464Z",
      stroke: colorValue
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M9 14L4.5 10.5H10L12.5 3.5V17L7 21L9 14Z",
      fill: colorValue
    })]
  });
};
const StarRateEmpty = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 24;
  let heightValue = height ? height : 24;
  let colorValue = color ? color : '#1E1E22';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M14.2727 10.1464L14.381 10.5H14.7508H20.814L15.8733 14.0021L15.5769 14.2122L15.6852 14.559L17.5921 20.6667L12.6012 16.9105L12.3002 16.684L11.9995 16.9107L7.0196 20.6647L8.92584 14.559L9.03421 14.2119L8.73739 14.0019L3.78901 10.5H9.85018H10.22L10.3283 10.1464L12.3005 3.7073L14.2727 10.1464Z",
      stroke: colorValue
    })
  });
};
const Phone = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 24;
  let heightValue = height ? height : 24;
  let colorValue = color ? color : '#1E1E22';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M6.67532 10.79C8.12735 13.62 10.4667 15.93 13.3204 17.38L15.5388 15.18C15.811 14.91 16.2144 14.82 16.5673 14.94C17.6967 15.31 18.9168 15.51 20.1671 15.51C20.7217 15.51 21.1755 15.96 21.1755 16.51V20C21.1755 20.55 20.7217 21 20.1671 21C10.6987 21 3.02507 13.39 3.02507 4C3.02507 3.45 3.47883 3 4.03343 3H7.56267C8.11727 3 8.57103 3.45 8.57103 4C8.57103 5.25 8.7727 6.45 9.14579 7.57C9.25671 7.92 9.17604 8.31 8.8937 8.59L6.67532 10.79Z",
      fill: colorValue
    })
  });
};
const Email = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 24;
  let heightValue = height ? height : 24;
  let colorValue = color ? color : '#1E1E22';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M20.1671 4H4.03343C2.92423 4 2.0268 4.9 2.0268 6L2.01671 18C2.01671 19.1 2.92423 20 4.03343 20H20.1671C21.2763 20 22.1838 19.1 22.1838 18V6C22.1838 4.9 21.2763 4 20.1671 4ZM20.1671 8L12.1003 13L4.03343 8V6L12.1003 11L20.1671 6V8Z",
      fill: colorValue
    })
  });
};
const LocationOn = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 24;
  let heightValue = height ? height : 24;
  let colorValue = color ? color : '#1E1E22';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M12.1003 2C8.19794 2 5.04178 5.13 5.04178 9C5.04178 14.25 12.1003 22 12.1003 22C12.1003 22 19.1588 14.25 19.1588 9C19.1588 5.13 16.0026 2 12.1003 2ZM12.1003 11.5C10.7087 11.5 9.57939 10.38 9.57939 9C9.57939 7.62 10.7087 6.5 12.1003 6.5C13.4918 6.5 14.6212 7.62 14.6212 9C14.6212 10.38 13.4918 11.5 12.1003 11.5Z",
      fill: colorValue
    })
  });
};
const ZoomIn = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 24;
  let heightValue = height ? height : 24;
  let colorValue = color ? color : '#424242';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M15.6298 14H14.8332L14.5509 13.73C15.5391 12.59 16.134 11.11 16.134 9.5C16.134 5.91 13.1997 3 9.57971 3C5.95971 3 3.02539 5.91 3.02539 9.5C3.02539 13.09 5.95971 16 9.57971 16C11.2032 16 12.6955 15.41 13.8451 14.43L14.1173 14.71V15.5L19.1591 20.49L20.6615 19L15.6298 14ZM9.57971 14C7.0689 14 5.0421 11.99 5.0421 9.5C5.0421 7.01 7.0689 5 9.57971 5C12.0905 5 14.1173 7.01 14.1173 9.5C14.1173 11.99 12.0905 14 9.57971 14Z",
      fill: colorValue
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M12.1004 10H10.0837V12H9.07531V10H7.05859V9H9.07531V7H10.0837V9H12.1004V10Z",
      fill: colorValue
    })]
  });
};
const Share = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 24;
  let heightValue = height ? height : 24;
  let colorValue = color ? color : '#424242';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M18.1507 16.08C17.3844 16.08 16.6987 16.38 16.1744 16.85L8.98478 12.7C9.0352 12.47 9.07553 12.24 9.07553 12C9.07553 11.76 9.0352 11.53 8.98478 11.3L16.0937 7.19C16.6382 7.69 17.3541 8 18.1507 8C19.8246 8 21.1758 6.66 21.1758 5C21.1758 3.34 19.8246 2 18.1507 2C16.4769 2 15.1257 3.34 15.1257 5C15.1257 5.24 15.166 5.47 15.2164 5.7L8.10751 9.81C7.56299 9.31 6.84706 9 6.05046 9C4.37659 9 3.02539 10.34 3.02539 12C3.02539 13.66 4.37659 15 6.05046 15C6.84706 15 7.56299 14.69 8.10751 14.19L15.287 18.35C15.2366 18.56 15.2063 18.78 15.2063 19C15.2063 20.61 16.5273 21.92 18.1507 21.92C19.7742 21.92 21.0951 20.61 21.0951 19C21.0951 17.39 19.7742 16.08 18.1507 16.08Z",
      fill: colorValue
    })
  });
};
const AddShoppingCart = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 24;
  let heightValue = height ? height : 24;
  let colorValue = color ? color : '#FFFFFF';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M11 9H13V6H16V4H13V1H11V4H8V6H11V9ZM7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18ZM7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L21.16 4.96L19.42 4H19.41L18.31 6L15.55 11H8.53L8.4 10.73L6.16 6L5.21 4L4.27 2H1V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.29 15 7.17 14.89 7.17 14.75Z",
      fill: colorValue
    })
  });
};
const Edit = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 24;
  let heightValue = height ? height : 24;
  let colorValue = color ? color : '#1E1E22';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M3 17.2486V20.9986H6.75L17.81 9.93859L14.06 6.18859L3 17.2486ZM20.71 7.03859C21.1 6.64859 21.1 6.01859 20.71 5.62859L18.37 3.28859C17.98 2.89859 17.35 2.89859 16.96 3.28859L15.13 5.11859L18.88 8.86859L20.71 7.03859Z",
      fill: colorValue
    })
  });
};
const Trash = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 24;
  let heightValue = height ? height : 24;
  let colorValue = color ? color : '#757575';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z",
      fill: colorValue
    })
  });
};
const MinButton = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 24;
  let heightValue = height ? height : 24;
  let colorValue = color ? color : '#1E1E22';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
      width: widthValue,
      height: heightValue,
      fill: "white"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M7 11V13H17V11H7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z",
      fill: colorValue
    })]
  });
};
const PlusButton = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 24;
  let heightValue = height ? height : 24;
  let colorValue = color ? color : '#1E1E22';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
      width: widthValue,
      height: heightValue,
      transform: "translate(24) rotate(90)",
      fill: "white"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M17 13V11H13V7H11V11L7 11V13L11 13L11 17H13L13 13H17ZM22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12ZM4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12Z",
      fill: colorValue
    })]
  });
};
const MeasuringTape = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 24;
  let heightValue = height ? height : 24;
  let colorValue = color ? color : '#1E1E22';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M15.302 12.6361C13.0767 12.6361 11.2659 11.0706 11.2597 9.14439L11.2508 8.88619C11.1064 6.7216 9.0872 5 6.62555 5C4.29462 5 2.36041 6.54361 2.03892 8.54525C2.01064 8.72134 2.00025 8.90012 2 9.07879V14.8653C1.99995 17.1452 4.07054 19 6.6258 19C8.6079 19 10.3032 17.8835 10.9637 16.3183C11.6243 17.8835 13.3196 19 15.302 19H22V12.6361H15.302ZM6.6255 5.63284C8.85465 5.63284 10.6682 7.20367 10.6682 9.13448C10.6682 10.1109 10.2038 10.9949 9.45701 11.6306V8.89579C9.45859 8.71285 9.44469 8.38451 9.38143 8.13089C9.18002 7.32333 8.60411 6.62815 7.80146 6.22366C7.06395 5.85154 6.24539 5.71417 5.4558 5.78288C5.82631 5.68569 6.21883 5.63284 6.6255 5.63284ZM2.74574 8.15041C2.769 8.08179 2.85167 7.9152 2.86399 7.89627C3.80075 6.45881 5.90253 5.96535 7.54945 6.79617C8.19429 7.12114 8.65377 7.66712 8.81015 8.29417C8.94515 8.83551 8.84548 9.4007 8.52937 9.88577C8.2441 10.3239 7.76141 10.6338 7.20166 10.7492V8.06819C7.20166 7.94568 7.13559 7.83419 7.03207 7.78193C6.16725 7.34569 5.09599 7.60895 4.59334 8.38108C4.39557 8.68447 4.29235 9.02489 4.28876 9.37058C4.28822 9.37828 4.28767 9.38598 4.28767 9.39384V11.9885C3.25706 11.3533 2.58286 10.3111 2.58286 9.13448C2.58286 8.7929 2.63986 8.46271 2.74574 8.15041ZM5.4117 11.1249C5.81261 11.327 6.25869 11.4317 6.7134 11.4317C6.78371 11.4317 6.85421 11.4292 6.92481 11.4241C6.92511 11.4241 6.92546 11.4241 6.92575 11.4241C7.70406 11.3685 8.41107 11.009 8.86583 10.4496V12.0475C8.2241 12.419 7.45362 12.6361 6.62555 12.6361C6.00037 12.6361 5.40791 12.5124 4.87895 12.2921V10.747C5.03243 10.8959 5.21157 11.024 5.4117 11.1249ZM5.07835 8.74306C5.3004 8.40196 5.72368 8.20952 6.15676 8.20952C6.30959 8.20952 6.46365 8.23352 6.61043 8.28336V10.7966C6.2786 10.7825 5.95564 10.6996 5.66362 10.5524C5.27927 10.3587 5.00612 10.0359 4.91418 9.66697C4.83604 9.35344 4.89428 9.02542 5.07835 8.74306ZM10.668 14.8653C10.668 16.7962 8.85469 18.3672 6.6258 18.3672C4.39656 18.3672 2.58295 16.7962 2.58295 14.8653V11.1534C2.69568 11.3323 2.82285 11.5032 2.96312 11.6644V12.5932C2.96312 12.7679 3.0955 12.9096 3.25873 12.9096C3.42196 12.9096 3.55435 12.7679 3.55435 12.5932V12.2276C3.74014 12.3746 3.93914 12.5086 4.14967 12.6278V13.4721C4.14967 13.6468 4.28206 13.7885 4.44529 13.7885C4.60852 13.7885 4.7409 13.6468 4.7409 13.4721V12.9112C5.00149 13.0151 5.27474 13.0981 5.55794 13.158V13.8589C5.55794 14.0336 5.69032 14.1753 5.85355 14.1753C6.01678 14.1753 6.14917 14.0336 6.14917 13.8589V13.2472C6.30579 13.2615 6.46464 13.2689 6.62545 13.2689C6.78627 13.2689 6.94511 13.2615 7.10174 13.2472V13.8589C7.10174 14.0336 7.23413 14.1753 7.39736 14.1753C7.56059 14.1753 7.69297 14.0336 7.69297 13.8589V13.158C7.97617 13.0982 8.24942 13.0151 8.51001 12.9112V13.4721C8.51001 13.6468 8.64239 13.7885 8.80562 13.7885C8.96885 13.7885 9.10124 13.6468 9.10124 13.4721V12.6278C9.3939 12.455 9.58467 12.3161 9.69656 12.2276V12.5932C9.69656 12.7679 9.82895 12.9096 9.99218 12.9096C10.1554 12.9096 10.2878 12.7679 10.2878 12.5932V11.6644C10.4283 11.503 10.5555 11.3319 10.6683 11.1527L10.668 14.8653ZM19.4163 18.3672H15.302C13.0799 18.3672 11.2712 16.8061 11.2599 14.8836V11.1541C11.3283 11.2627 11.4022 11.3682 11.4809 11.4704V12.4702C11.4809 12.6449 11.6133 12.7866 11.7766 12.7866C11.9398 12.7866 12.0722 12.6449 12.0722 12.4702V12.0961C12.1719 12.1828 12.2761 12.2654 12.3842 12.3438V13.3316C12.3842 13.5063 12.5166 13.648 12.6798 13.648C12.843 13.648 12.9754 13.5063 12.9754 13.3316V12.7089C13.1942 12.8227 13.4242 12.9209 13.6637 13.0019V13.9905C13.6637 14.1652 13.7961 14.3069 13.9593 14.3069C14.1226 14.3069 14.255 14.1652 14.255 13.9905V13.1625C14.5724 13.2282 14.9024 13.2644 15.2408 13.2683V14.1624C15.2408 14.3371 15.3732 14.4789 15.5365 14.4789C15.6997 14.4789 15.8321 14.3371 15.8321 14.1624V13.269H16.8179V14.1624C16.8179 14.3371 16.9503 14.4789 17.1136 14.4789C17.2768 14.4789 17.4092 14.3371 17.4092 14.1624V13.269H18.3951V14.1624C18.3951 14.3371 18.5274 14.4789 18.6907 14.4789C18.8539 14.4789 18.9863 14.3371 18.9863 14.1624V13.269H19.4162V18.3672H19.4163ZM21.4088 18.3672H20.0075V13.269H21.4088V18.3672Z",
      fill: "white"
    })
  });
};
const ClipBoard = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 24;
  let heightValue = height ? height : 24;
  let colorValue = color ? color : '#1E1E22';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
      "clip-path": "url(#clip0)",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        d: "M19.248 0H9.16502C7.70039 0 6.50877 1.19162 6.50877 2.65625V2.98225H4.75195C3.28732 2.98225 2.0957 4.17387 2.0957 5.6385V21.3439C2.0957 22.8085 3.28732 24.0001 4.75195 24.0001H14.8349C16.2996 24.0001 17.4911 22.8085 17.4911 21.3439V21.0179H19.2479C20.7125 21.0179 21.9041 19.8262 21.9041 18.3616V2.65625C21.9042 1.19162 20.7126 0 19.248 0ZM15.7778 21.3439C15.7778 21.8637 15.3548 22.2867 14.835 22.2867H4.75195C4.2321 22.2867 3.80912 21.8637 3.80912 21.3439V5.63838C3.80912 5.11853 4.2321 4.69555 4.75195 4.69555H14.8349C15.3548 4.69555 15.7776 5.11853 15.7776 5.63838V21.3439H15.7778ZM20.1908 18.3616C20.1908 18.8815 19.7678 19.3044 19.248 19.3044H17.4912V5.63838C17.4912 4.17376 16.2996 2.98214 14.835 2.98214H8.22218V2.65613C8.22218 2.13628 8.64517 1.7133 9.16502 1.7133H19.248C19.7678 1.7133 20.1908 2.13628 20.1908 2.65613V18.3616Z",
        fill: colorValue
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("defs", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("clipPath", {
        id: "clip0",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("rect", {
          width: widthValue,
          height: heightValue,
          fill: "white"
        })
      })
    })]
  });
};
const CheckCircleOutline = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 84;
  let heightValue = height ? height : 84;
  let colorValue = color ? color : '#1E1E22';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M58.065 26.53L35 49.595L22.435 37.065L17.5 42L35 59.5L63 31.5L58.065 26.53ZM42 7C22.68 7 7 22.68 7 42C7 61.32 22.68 77 42 77C61.32 77 77 61.32 77 42C77 22.68 61.32 7 42 7ZM42 70C26.53 70 14 57.47 14 42C14 26.53 26.53 14 42 14C57.47 14 70 26.53 70 42C70 57.47 57.47 70 42 70Z",
      fill: colorValue
    })
  });
};
const ArrowBackIos = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 24;
  let heightValue = height ? height : 24;
  let colorValue = color ? color : '#757575';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M11.67 3.87156L9.9 2.10156L0 12.0016L9.9 21.9016L11.67 20.1316L3.54 12.0016L11.67 3.87156Z",
      fill: colorValue
    })
  });
};
const ChatBubble = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 24;
  let heightValue = height ? height : 24;
  let colorValue = color ? color : 'white';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z",
      fill: colorValue
    })
  });
};
const ShoppingCart = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 24;
  let heightValue = height ? height : 24;
  let colorValue = color ? color : '#1E1E22';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z",
      fill: colorValue
    })
  });
};
const Menu = ({
  width,
  height,
  color
}) => {
  let widthValue = width ? width : 24;
  let heightValue = height ? height : 24;
  let colorValue = color ? color : '#1E1E22';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    width: widthValue,
    height: heightValue,
    viewBox: `0 0 ${widthValue} ${heightValue}`,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z",
      fill: colorValue
    })
  });
};

/***/ }),

/***/ "EFMk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.detectDomainLocale = detectDomainLocale;

function detectDomainLocale(domainItems, hostname, detectedLocale) {
  let domainItem;

  if (domainItems) {
    if (detectedLocale) {
      detectedLocale = detectedLocale.toLowerCase();
    }

    for (const item of domainItems) {
      var _item$domain, _item$locales; // remove port if present


      const domainHostname = (_item$domain = item.domain) == null ? void 0 : _item$domain.split(':')[0].toLowerCase();

      if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || (_item$locales = item.locales) != null && _item$locales.some(locale => locale.toLowerCase() === detectedLocale)) {
        domainItem = item;
        break;
      }
    }
  }

  return domainItem;
}

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "Jly6":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "KdJJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TGUN");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("3Drx"));

var _extends2 = _interopRequireDefault(__webpack_require__("0x1U"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("3Vz7");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (false) {}

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "LQV7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TGUN");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("pn+c"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "LSsa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  title: "Account Detail",
  url: "/accountdetail"
}, {
  title: "Notification",
  url: "/notification"
}, {
  title: "My Orders",
  url: "/myorder"
}, {
  title: "My Addresses",
  url: "/myaddress"
}]);

/***/ }),

/***/ "Lgjz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("Rw81");

var _querystring = __webpack_require__("yLnK");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "O8Ta":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__("5dMZ");
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);

// EXTERNAL MODULE: ./components/elements/breadcrumb.jsx
var breadcrumb = __webpack_require__("ZXe9");

// EXTERNAL MODULE: ./components/elements/heading.jsx
var heading = __webpack_require__("cryj");

// EXTERNAL MODULE: ./components/shared/sidebar/sidebarDefault.jsx
var sidebarDefault = __webpack_require__("6RWT");

// EXTERNAL MODULE: ./node_modules/.pnpm/next@10.2.0_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/next/image.js
var next_image = __webpack_require__("BX6A");
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);

// EXTERNAL MODULE: ./components/elements/icon/index.js
var icon = __webpack_require__("CN7M");

// EXTERNAL MODULE: ./components/partials/cart/module/modalAddress.jsx + 2 modules
var modalAddress = __webpack_require__("AE8H");

// CONCATENATED MODULE: ./components/partials/myAddress/myAddressContainer.jsx



 // elements




const MyAddressContainer = ({
  t
}) => {
  const notifData = [{
    title: "Home",
    noTelp: "(+1) 50858122",
    desc: "2020 Massachusetts Ave, NW Washington, DC 20036, United States Of America"
  }, {
    title: "Office",
    noTelp: "(+1) 50858122",
    desc: "2020 Massachusetts Ave, NW Washington, DC 20036, United States Of America"
  }, {
    title: "Home 2",
    noTelp: "(+1) 50858122",
    desc: "2020 Massachusetts Ave, NW Washington, DC 20036, United States Of America"
  }, {
    title: "Home",
    noTelp: "(+1) 50858122",
    desc: "2020 Massachusetts Ave, NW Washington, DC 20036, United States Of America"
  }, {
    title: "Home",
    noTelp: "(+1) 50858122",
    desc: "2020 Massachusetts Ave, NW Washington, DC 20036, United States Of America"
  }, {
    title: "Home",
    noTelp: "(+1) 50858122",
    desc: "2020 Massachusetts Ave, NW Washington, DC 20036, United States Of America"
  }];
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "col-12 col-lg-9 mt-4",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-12 d-flex justify-content-end",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
          "data-bs-toggle": "modal",
          "data-bs-target": "#modalAddress",
          className: "btn btn-primary py-3 px-5 mb-4",
          children: ["+ ", t("New Address")]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "content",
        children: notifData.length ? notifData.map((data, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "card d-flex flex-row align-items-end justify-content-between",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "title",
              children: data.title
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "desc",
              children: data.noTelp
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "desc mt-0",
              children: data.desc
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
            className: "text-pointer",
            "data-bs-toggle": "modal",
            "data-bs-target": "#modalAddress",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(icon["m" /* Edit */], {}), " ", t("Edit")]
          })]
        }, index)) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "not-found d-flex justify-content-center",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
              width: 207,
              height: 202,
              src: "/img/notification/notfound.svg",
              alt: "laxmi"
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
              className: "mt-4 text-center fw-bold",
              children: [t("No"), " ", t("Notification")]
            })]
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(modalAddress["a" /* default */], {
        t: t
      })]
    })
  });
};

/* harmony default export */ var myAddressContainer = (MyAddressContainer);
// EXTERNAL MODULE: ./components/layouts/withAuth.jsx
var withAuth = __webpack_require__("xHGu");

// CONCATENATED MODULE: ./pages/myaddress/index.jsx



 // elements


 // shared

 // partials

 // layout



const MyAddress = () => {
  const {
    0: path,
    1: setPath
  } = Object(external_react_["useState"])(1);
  const {
    t
  } = useTranslation_default()("accountDetail");
  const pathBreadCumb = [{
    'path': '/myaddress',
    'name': `${t("My Address")}`
  }];
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "notification",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "container-fluid px-5",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(breadcrumb["a" /* default */], {
        path: pathBreadCumb
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(heading["a" /* default */], {
        title: t(`My Address`)
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
      className: "row d-flex justify-content-between container-fluid px-5",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(sidebarDefault["a" /* default */], {
        t: t
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(myAddressContainer, {
        t: t
      })]
    })]
  });
};

/* harmony default export */ var myaddress = __webpack_exports__["default"] = (Object(withAuth["a" /* default */])(MyAddress));

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RdM9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("Buri");

var _routeLoader = __webpack_require__("LQV7");

var _denormalizePagePath = __webpack_require__("CJ43");

var _normalizeLocalePath = __webpack_require__("8Mf/");

var _mitt = _interopRequireDefault(__webpack_require__("lDnl"));

var _utils = __webpack_require__("Rw81");

var _isDynamic = __webpack_require__("o/eh");

var _parseRelativeUrl = __webpack_require__("Lgjz");

var _querystring = __webpack_require__("yLnK");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("jRYi"));

var _routeMatcher = __webpack_require__("bhl2");

var _routeRegex = __webpack_require__("/5dK");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (true) {
  detectDomainLocale = __webpack_require__("EFMk").detectDomainLocale;
}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (true) {
    locale = locale || (0, _normalizeLocalePath.normalizeLocalePath)(path, locales).detectedLocale;
    const detectedDomain = detectDomainLocale(domainLocales, undefined, locale);

    if (detectedDomain) {
      return `http${detectedDomain.http ? '' : 's'}://${detectedDomain.domain}${basePath || ''}${locale === detectedDomain.defaultLocale ? '' : `/${locale}`}${path}`;
    }

    return false;
  }

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (true) {
    const pathname = pathNoQueryHash(path);
    const pathLower = pathname.toLowerCase();
    const localeLower = locale && locale.toLowerCase();
    return locale && locale !== defaultLocale && !pathLower.startsWith('/' + localeLower + '/') && pathLower !== '/' + localeLower ? addPathPrefix(path, '/' + locale) : path;
  }

  return path;
}

function delLocale(path, locale) {
  if (true) {
    const pathname = pathNoQueryHash(path);
    const pathLower = pathname.toLowerCase();
    const localeLower = locale && locale.toLowerCase();
    return locale && (pathLower.startsWith('/' + localeLower + '/') || pathLower === '/' + localeLower) ? (pathname.length === locale.length + 1 ? '/' : '') + path.substr(locale.length + 1) : path;
  }

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (true) {
      this.locale = locale;
      this.locales = locales;
      this.defaultLocale = defaultLocale;
      this.domainLocales = domainLocales;
      this.isLocaleDomain = !!detectDomainLocale(domainLocales, self.location.hostname);
    }

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (true) {
      this.locale = options.locale === false ? this.defaultLocale : options.locale || this.locale;

      if (typeof options.locale === 'undefined') {
        options.locale = this.locale;
      }

      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(hasBasePath(as) ? delBasePath(as) : as);
      const localePathResult = (0, _normalizeLocalePath.normalizeLocalePath)(parsedAs.pathname, this.locales);

      if (localePathResult.detectedLocale) {
        this.locale = localePathResult.detectedLocale;
        parsedAs.pathname = addBasePath(parsedAs.pathname);
        as = (0, _utils.formatWithValidation)(parsedAs);
        url = addBasePath((0, _normalizeLocalePath.normalizeLocalePath)(hasBasePath(url) ? delBasePath(url) : url, this.locales).pathname);
      }

      let didNavigate = false; // we need to wrap this in the env check again since regenerator runtime
      // moves this on its own due to the return

      if (true) {
        var _this$locales; // if the locale isn't configured hard navigate to show 404 page


        if (!((_this$locales = this.locales) != null && _this$locales.includes(this.locale))) {
          parsedAs.pathname = addLocale(parsedAs.pathname, this.locale);
          window.location.href = (0, _utils.formatWithValidation)(parsedAs); // this was previously a return but was removed in favor
          // of better dead code elimination with regenerator runtime

          didNavigate = true;
        }
      }

      const detectedDomain = detectDomainLocale(this.domainLocales, undefined, this.locale); // we need to wrap this in the env check again since regenerator runtime
      // moves this on its own due to the return

      if (true) {
        // if we are navigating to a domain locale ensure we redirect to the
        // correct domain
        if (!didNavigate && detectedDomain && this.isLocaleDomain && self.location.hostname !== detectedDomain.domain) {
          const asNoBasePath = delBasePath(as);
          window.location.href = `http${detectedDomain.http ? '' : 's'}://${detectedDomain.domain}${addBasePath(`${this.locale === detectedDomain.defaultLocale ? '' : `/${this.locale}`}${asNoBasePath === '/' ? '' : asNoBasePath}` || '/')}`; // this was previously a return but was removed in favor
          // of better dead code elimination with regenerator runtime

          didNavigate = true;
        }
      }

      if (didNavigate) {
        return new Promise(() => {});
      }
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (true) {
        if (this.locale) {
          document.documentElement.lang = this.locale;
        }
      }

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (true) {
      if (options.locale === false) {
        pathname = (0, _normalizeLocalePath.normalizeLocalePath)(pathname, this.locales).pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
        let parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(asPath);
        const localePathResult = (0, _normalizeLocalePath.normalizeLocalePath)(parsedAs.pathname, this.locales);
        parsedAs.pathname = localePathResult.pathname;
        options.locale = localePathResult.detectedLocale || this.defaultLocale;
        asPath = (0, _utils.formatWithValidation)(parsedAs);
      }
    }

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "Rw81":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("9pXF");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "TGUN":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "TipQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TGUN");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("4mHv");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "ZXe9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bWzE");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5dMZ");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__);





const BreadCrumb = ({
  path
}) => {
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default()("common");
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "breadcrumb",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: '/',
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
          className: "link",
          children: t("Home")
        })
      }), path.map((data, index) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
        className: "link-container",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          className: "mx-3 link-splitter",
          children: "/"
        }, index), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: data.path,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            className: `link ${path.length - 1 === index ? 'active' : ''}`,
            children: data.name
          })
        })]
      }, index))]
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (BreadCrumb);

/***/ }),

/***/ "bWzE":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("BU7w")


/***/ }),

/***/ "bhl2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cryj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xXj+");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_1__);





const Heading = ({
  title
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_device_detect__WEBPACK_IMPORTED_MODULE_1__["BrowserView"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
        className: "head text-center mb-0 text-capitalize",
        children: title
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "d-flex justify-content-center text-capitalize",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("hr", {})
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_device_detect__WEBPACK_IMPORTED_MODULE_1__["MobileView"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
        className: "head-mobile text-center mb-0 text-capitalize",
        children: title
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "d-flex justify-content-center text-capitalize",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("hr", {})
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Heading);

/***/ }),

/***/ "jRYi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "jZpq":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("Jly6");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "lDnl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "o/eh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "pn+c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "rS3p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TextArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TextAreaNoLimit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InputChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Unit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Select; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elements_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("CN7M");





const Input = ({
  id,
  value,
  placeholder,
  label,
  onChange,
  type,
  error
}) => {
  const {
    0: isShowPassword,
    1: setIsShowPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: type === "password" ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "form-group",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
        htmlFor: id,
        className: `${error ? 'text-danger' : ''}`,
        children: label
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "position-relative",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
          onChange: onChange,
          type: `${isShowPassword ? 'text' : 'password'}`,
          className: `form-control mt-2 ${error ? 'form-control-danger' : ''}`,
          id: id,
          value: value,
          placeholder: label
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          className: "icon-toggle",
          onClick: () => setIsShowPassword(!isShowPassword),
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_elements_icon__WEBPACK_IMPORTED_MODULE_2__[/* RemovedRedEye */ "v"], {})
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          className: "text-danger",
          children: error
        })]
      })]
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "form-group",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
        htmlFor: id,
        className: `${error ? 'text-danger' : ''}`,
        children: label
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
        onChange: onChange,
        type: type,
        className: `form-control mt-2 ${error ? 'form-control-danger' : ''}`,
        id: id,
        value: value,
        placeholder: label
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
        className: "text-danger",
        children: error
      })]
    })
  });
};
const Search = ({
  id,
  placeholder,
  label,
  onChange,
  type,
  error
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "form-group",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "position-relative",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
        onChange: onChange,
        type: "search",
        className: `form-control mt-2 `,
        id: id,
        placeholder: label
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
        className: "text-danger",
        children: error
      })]
    })
  });
};
const TextArea = ({
  id,
  placeholder,
  label,
  onChange,
  type,
  value,
  error
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "form-group",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
      htmlFor: id,
      className: `${error ? 'text-danger' : ''}`,
      children: label
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("textarea", {
      rows: "4",
      onChange: onChange,
      type: "search",
      className: `form-control text-area mt-2 `,
      id: id,
      placeholder: label
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "d-flex flex-column",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
        className: "text-danger",
        children: error
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
        children: [value ? value.length : 0, "/500"]
      })]
    })]
  });
};
const TextAreaNoLimit = ({
  id,
  placeholder,
  label,
  onChange,
  type,
  value,
  error
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "form-group",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
      htmlFor: id,
      className: `${error ? 'text-danger' : ''}`,
      children: label
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("textarea", {
      rows: "2",
      onChange: onChange,
      type: "search",
      className: `form-control text-area mt-2 `,
      id: id,
      placeholder: label
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "d-flex flex-column",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
        className: "text-danger",
        children: error
      })
    })]
  });
};
const InputChat = ({
  id,
  placeholder,
  label,
  onChange,
  onKeyUp,
  type,
  value,
  error
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "form-group",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("textarea", {
      rows: "2",
      onKeyUp: onKeyUp,
      onChange: onChange,
      type: "text",
      className: `form-control text-area-chat mt-2 `,
      id: id,
      placeholder: label
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "d-flex flex-column",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
        className: "text-danger",
        children: error
      })
    })]
  });
};
const Unit = ({
  id,
  unit,
  placeholder,
  label,
  onChange,
  type,
  error
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "form-group",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
      htmlFor: id,
      className: `${error ? 'text-danger' : ''}`,
      children: label
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "position-relative",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
        onChange: onChange,
        type: "text",
        className: `form-control mt-2 `,
        id: id,
        placeholder: label
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
        className: "unit",
        children: unit
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
        className: "text-danger",
        children: error
      })]
    })]
  });
};
const Select = ({
  id,
  options,
  placeholder,
  label,
  onChange,
  error
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "form-group",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
      htmlFor: id,
      className: `${error ? 'text-danger' : ''}`,
      children: label
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("select", {
      className: "form-select",
      "aria-label": "Default select example",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
        selected: true,
        children: placeholder
      }), options.map((data, index) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
        value: data.value,
        children: data.name
      }, index))]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
      className: "text-danger",
      children: error
    })]
  });
};

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "xHGu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // redux

const withAuth = (WrappedComponent, type) => {
  return props => {
    const Router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
    const isLogin = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('laxmi-auth');
    const PersistString = localStorage.getItem("persist:laxmi");
    const parseObject1 = JSON.parse(PersistString, function (key, value) {
      if (key == "birth") {
        return new Date(value);
      } else {
        return value;
      }
    });
    const auth = JSON.parse((parseObject1 === null || parseObject1 === void 0 ? void 0 : parseObject1.auth) || null, function (key, value) {
      if (key == "birth") {
        return new Date(value);
      } else {
        return value;
      }
    });

    if (type === 'auth') {
      if (auth !== null && auth !== void 0 && auth.isLogin || false) {
        Router.replace("/");
        return null;
      }

      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(WrappedComponent, _objectSpread({}, props));
    } else {
      if (!auth.isLogin) {
        Router.replace("/login");
        return null;
      }

      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(WrappedComponent, _objectSpread({}, props));
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (withAuth);

/***/ }),

/***/ "xXj+":
/***/ (function(module, exports) {

module.exports = require("react-device-detect");

/***/ }),

/***/ "yLnK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ })

/******/ });