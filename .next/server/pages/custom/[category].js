module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
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

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5kfB");


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

/***/ "5kfB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__("5dMZ");
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/elements/breadcrumb.jsx
var breadcrumb = __webpack_require__("ZXe9");

// EXTERNAL MODULE: ./components/elements/heading.jsx
var heading = __webpack_require__("cryj");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./node_modules/.pnpm/next@10.2.0_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/next/link.js
var next_link = __webpack_require__("bWzE");

// EXTERNAL MODULE: ./node_modules/.pnpm/next@10.2.0_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/next/image.js
var next_image = __webpack_require__("BX6A");
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);

// EXTERNAL MODULE: external "react-reveal/Slide"
var Slide_ = __webpack_require__("8qPd");
var Slide_default = /*#__PURE__*/__webpack_require__.n(Slide_);

// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __webpack_require__("NUC6");
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// EXTERNAL MODULE: ./components/elements/icon/index.js
var elements_icon = __webpack_require__("CN7M");

// CONCATENATED MODULE: ./components/partials/custom/sidebar/fabricContainer.jsx





const FabricContainer = props => {
  Object(external_react_["useEffect"])(() => {
    console.log(props.listSelected);

    if (!props.listSelected) {
      props.onClick(props.list[0]);
    }
  }, [props.listSelected]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "fabric-container",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      className: "title mb-0",
      children: [props.t("Select"), " ", props.t("Fabrics")]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      className: "total mb-0",
      children: ["Total ", props.t("Fabrics"), " : ", props.list.length]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "fabric-list mt-2",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "row ",
        children: props.list.map((data, index) => {
          var _props$listSelected, _data$price;

          return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            onClick: () => props.onClick(data),
            style: ((_props$listSelected = props.listSelected) === null || _props$listSelected === void 0 ? void 0 : _props$listSelected._id) === data._id ? {
              border: "2px solid grey",
              borderRadius: "8px",
              marginLeft: "4px"
            } : {},
            className: "mx-0 col-xl-4 col-lg-6 col-12 fabric-item text-pointer",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "img-container",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
                layout: "fill",
                objectFit: "cover",
                src: data.image,
                alt: "laxmi"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "price d-flex align-items-center w-100",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h1", {
                  children: [" $ ", (_data$price = data.price) !== null && _data$price !== void 0 ? _data$price : 0, ".0"]
                })
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
              className: "title mb-0",
              children: data.fabric_name
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "category mb-0",
              children: data.material
            })]
          }, index);
        })
      })
    })]
  });
};

/* harmony default export */ var fabricContainer = (FabricContainer);
// CONCATENATED MODULE: ./components/partials/custom/sidebar/dataFabric.js
const FabricList = [{
  isNew: false,
  title: "C-Blue",
  image: '/img/custom/fabric/C-Blue.png',
  category: 'Cotton',
  price: 30
}, {
  isNew: false,
  title: "P-Blue",
  image: '/img/custom/fabric/P-Blue.png',
  category: 'Cotton',
  price: 30
}, {
  isNew: false,
  title: "S-Blue",
  image: '/img/custom/fabric/S-Blue.png',
  category: 'Cotton',
  price: 30
} // {
//     isNew: true,
//     title: "Saffron",
//     image: '/img/custom/fabric/Safron.png',
//     category: 'Cotton'
// },
// {
//     isNew: true,
//     title: "Sandstone",
//     image: '/img/custom/fabric/Sandstone.png',
//     category: 'Cotton'
// },
// {
//     isNew: false,
//     title: "Diorite",
//     image: '/img/custom/fabric/Diorite.png',
//     category: 'Cotton'
// },
// {
//     isNew : false,
//     title : "Ferguson",
//     image : '/img/custom/fabric/Ferguson.png',
//     category : 'Cotton'
// },
// {
//     isNew : false,
//     title : "Sandstone",
//     image : '/img/custom/fabric/Sandstone.png',
//     category : 'Cotton'
// },
// {
//     isNew : false,
//     title : "Sandstone",
//     image : '/img/custom/fabric/Sandstone.png',
//     category : 'Cotton'
// },
// {
//     isNew : true,
//     title : "Diorite",
//     image : '/img/custom/fabric/Diorite.png',
//     category : 'Cotton'
// },
// {
//     isNew : false,
//     title : "Johnston",
//     image : '/img/custom/fabric/Johnston.png',
//     category : 'Cotton'
// },
// {
//     isNew : false,
//     title : "Ferguson",
//     image : '/img/custom/fabric/Ferguson.png',
//     category : 'Cotton'
// },
// {
//     isNew : false,
//     title : "Sandstone",
//     image : '/img/custom/fabric/Sandstone.png',
//     category : 'Cotton'
// },
// {
//     isNew : false,
//     title : "Diorite",
//     image : '/img/custom/fabric/Diorite.png',
//     category : 'Cotton'
// },
// {
//     isNew : false,
//     title : "Johnston",
//     image : '/img/custom/fabric/Johnston.png',
//     category : 'Cotton'
// },
// {
//     isNew : true,
//     title : "Ferguson",
//     image : '/img/custom/fabric/Ferguson.png',
//     category : 'Cotton'
// },
// {
//     isNew : true,
//     title : "Sandstone",
//     image : '/img/custom/fabric/Sandstone.png',
//     category : 'Cotton'
// },
// {
//     isNew : false,
//     title : "Diorite",
//     image : '/img/custom/fabric/Diorite.png',
//     category : 'Cotton'
// },
// {
//     isNew : false,
//     title : "Johnston",
//     image : '/img/custom/fabric/Johnston.png',
//     category : 'Cotton'
// },
// {
//     isNew : true,
//     title : "Ferguson",
//     image : '/img/custom/fabric/Ferguson.png',
//     category : 'Cotton'
// },
// {
//     isNew : true,
//     title : "Sandstone",
//     image : '/img/custom/fabric/Sandstone.png',
//     category : 'Cotton'
// }
];
// CONCATENATED MODULE: ./components/elements/icon/custom.js



const CustomIcon = props => {
  const {
    icon,
    category,
    width,
    height,
    color
  } = props;

  if (category === "shirts") {
    switch (icon) {
      case 'Bottom':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            width: width,
            height: height,
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M75.8736 14.5664C76.0322 17.8012 76.25 21.1061 76.6395 24.3816C77.6531 32.9046 77.0353 39.089 76.0149 49.3047L76.0149 49.3049C75.8559 50.8962 75.6872 52.5853 75.5134 54.3963C72.9415 52.8829 70.9807 52.9474 67.5619 53.838C67.0927 56.3331 66.6943 57.9034 66.0947 59.9015C67.4926 51.6623 66.4997 46.0697 64.9864 37.5454L64.9863 37.5452L64.9861 37.544C64.86 36.8337 64.7303 36.103 64.598 35.3487L64.5793 34.7079V34.7079V34.7078C64.4859 31.5057 64.4051 28.7377 64.2716 26.1479C65.4563 25.8175 66.4059 25.2827 67.279 24.7164C69.8345 23.5424 71.0562 22.6435 73.1785 20.9734C72.7212 21.26 72.3059 21.5265 71.9144 21.7776C70.2994 22.8139 69.0884 23.5908 66.9961 24.4544C66.8372 24.4588 66.6873 24.4622 66.5444 24.4654C65.6549 24.4856 65.0359 24.4996 64.1906 24.7107C63.981 21.3014 63.6534 18.1283 63.0479 14.5664H75.8736ZM60.9381 14.5664C58.7285 24.0636 58.5091 30.9009 59.143 42.1235C54.6172 43.1716 47.5493 43.4772 39.2625 43.5084C38.6391 43.5459 38.0087 43.5705 37.3495 43.5807C38.5376 34.8154 38.0946 26.8168 37.6037 17.9543L37.5471 16.9298C37.5041 16.1496 37.4612 15.3622 37.4194 14.5664H60.9381ZM36.6683 14.5664C36.7108 15.3765 36.7545 16.1777 36.7982 16.9711L36.8535 17.9718C37.3473 26.8885 37.7882 34.8519 36.5919 43.5861C32.787 43.5812 27.8429 43.1113 18.0484 41.899C18.3826 37.9932 19.089 34.7959 19.7456 31.8237C20.9611 26.3217 22.0062 21.5911 20.2045 14.5664H36.6683ZM18.3796 14.5664C18.1365 15.5775 17.8807 16.5593 17.6166 17.5732L17.6166 17.5732C16.9045 20.307 16.1317 23.2739 15.3814 27.6755C15.1467 35.6952 14.3278 39.5499 13.339 44.2047L13.3389 44.2049L13.3388 44.2054L13.3387 44.2058C12.7954 46.7634 12.2007 49.5628 11.6235 53.4274C11.6839 53.7366 11.7463 54.0355 11.8107 54.3263C9.12954 53.0775 7.20422 53.3011 4.20264 55.0346L4.61176 62.5796C4.35727 62.7651 4.15749 62.9705 4.02701 63.1967L3.09763 54.7001C1.65516 43.9373 2.78873 34.2165 4.31114 21.1613L4.35027 20.8258C4.89062 19.0044 5.32504 16.8718 5.70737 14.5664H18.3796ZM64.302 24.7154L64.1909 24.7163C64.2191 25.1753 64.2452 25.6385 64.2695 26.1076L64.6121 25.8768L65.0566 25.5773L65.6627 24.9036C65.215 24.7072 64.8186 24.7107 64.302 24.7154ZM13.8724 61.1659C13.9302 61.3406 13.9888 61.5183 14.0481 61.6995C14.0171 61.6739 13.9813 61.6492 13.9409 61.6254C13.9169 61.4689 13.894 61.316 13.8724 61.1659ZM74.979 62.6004C73.3092 61.4699 68.5021 60.679 65.7777 61.611C65.7618 61.6902 65.7458 61.7696 65.7295 61.8492C69.4263 60.994 71.4699 60.9207 74.9424 63.1967L74.979 62.6004ZM11.6971 48.7498C11.4385 49.169 7.73712 52.4244 6.52489 52.4554L4.18125 53.1291L7.57549 52.4554L10.8889 51.8191L8.58569 52.0437L10.3636 50.3967L11.4546 49.461L11.6971 48.7498ZM73.7224 43.808C72.7043 44.2598 70.8129 45.5917 70.6918 45.9415C72.0578 45.0608 72.6997 44.7289 73.4395 44.6689C74.1691 44.8856 75.0993 45.8065 75.3003 46.0688L75.2569 45.9888C75.0219 45.5549 74.3317 44.2806 73.7224 43.808ZM75.3387 46.1287C75.3452 46.1487 75.3313 46.1253 75.3003 46.0688C75.3218 46.0969 75.335 46.1174 75.3387 46.1287ZM74.8538 29.0606C74.6027 28.9288 73.6824 28.2886 73.7224 28.2372C73.8323 28.0957 69.2685 29.2308 67.1763 29.8092C69.7049 28.7243 71.1917 28.2814 73.9244 27.7131C74.4888 27.691 74.6367 27.9238 74.8942 28.3495C74.6837 28.1634 74.5657 28.0607 74.3285 28.2372C74.3243 28.5647 74.4873 28.7166 74.714 28.9279L74.7141 28.9279C74.7585 28.9693 74.8053 29.0129 74.8538 29.0606ZM9.05154 24.2672C10.2503 25.49 12.7367 28.0552 13.0923 28.5343C13.2651 28.8544 13.5652 29.4408 13.7351 29.8597C13.5832 29.2745 13.3294 28.2207 13.1731 27.5611L9.77888 24.0052L14.5874 22.8075L7.07156 23.7807L9.05154 24.2672ZM13.86 30.2561C13.8715 30.3625 13.8188 30.1822 13.7351 29.8597C13.8035 30.0285 13.8508 30.1701 13.86 30.2561Z",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M76.6395 24.3816L76.143 24.4407L76.6395 24.3816ZM75.8736 14.5664V14.0664H76.3497L76.373 14.5419L75.8736 14.5664ZM76.0149 49.3047L75.5173 49.2559L75.5174 49.255L76.0149 49.3047ZM76.0149 49.3049L76.5125 49.3537L76.5124 49.3546L76.0149 49.3049ZM75.5134 54.3963L76.0111 54.444L75.9361 55.2251L75.2598 54.8272L75.5134 54.3963ZM67.5619 53.838L67.0705 53.7456L67.1291 53.434L67.4358 53.3541L67.5619 53.838ZM66.0947 59.9015L66.5736 60.0452L65.6017 59.8178L66.0947 59.9015ZM64.9864 37.5454L65.4784 37.4565L65.4787 37.458L64.9864 37.5454ZM64.9863 37.5452L64.4943 37.634L64.494 37.6327L64.9863 37.5452ZM64.9861 37.544L64.4938 37.6316L64.4938 37.6314L64.9861 37.544ZM64.598 35.3487L64.1056 35.435L64.0993 35.3994L64.0983 35.3633L64.598 35.3487ZM64.5793 34.7079L64.0795 34.7225L64.0793 34.7152V34.7079H64.5793ZM64.5793 34.7078L65.0791 34.6933L65.0793 34.7005V34.7078H64.5793ZM64.2716 26.1479L63.7722 26.1737L63.7516 25.7739L64.1372 25.6663L64.2716 26.1479ZM67.279 24.7164L67.0069 24.2969L67.0373 24.2772L67.0703 24.2621L67.279 24.7164ZM73.1785 20.9734L72.913 20.5498L73.4877 21.3664L73.1785 20.9734ZM71.9144 21.7776L72.1844 22.1985L71.9144 21.7776ZM66.9961 24.4544L67.1869 24.9166L67.1019 24.9517L67.01 24.9542L66.9961 24.4544ZM66.5444 24.4654L66.5557 24.9653L66.5444 24.4654ZM64.1906 24.7107L64.3117 25.1958L63.7284 25.3415L63.6915 24.7414L64.1906 24.7107ZM63.0479 14.5664L62.555 14.6502L62.4558 14.0664H63.0479V14.5664ZM59.143 42.1235L59.6422 42.0953L59.666 42.5157L59.2558 42.6106L59.143 42.1235ZM60.9381 14.5664V14.0664H61.5677L61.425 14.6797L60.9381 14.5664ZM39.2625 43.5084L39.2325 43.0093L39.2465 43.0085L39.2606 43.0085L39.2625 43.5084ZM37.3495 43.5807L37.3573 44.0807L36.776 44.0897L36.8541 43.5136L37.3495 43.5807ZM37.6037 17.9543L37.1045 17.982L37.1045 17.9819L37.6037 17.9543ZM37.5471 16.9298L37.0478 16.9575L37.0478 16.9574L37.5471 16.9298ZM37.4194 14.5664L36.9201 14.5926L36.8924 14.0664H37.4194V14.5664ZM36.6683 14.5664V14.0664H37.1428L37.1676 14.5402L36.6683 14.5664ZM36.7982 16.9711L36.299 16.9987L36.299 16.9986L36.7982 16.9711ZM36.8535 17.9718L36.3543 17.9994V17.9994L36.8535 17.9718ZM36.5919 43.5861L37.0872 43.6539L37.028 44.0866L36.5912 44.0861L36.5919 43.5861ZM18.0484 41.899L17.987 42.3952L17.5092 42.336L17.5503 41.8563L18.0484 41.899ZM19.7456 31.8237L20.2338 31.9315L19.7456 31.8237ZM20.2045 14.5664L19.7201 14.6906L19.56 14.0664H20.2045V14.5664ZM18.3796 14.5664V14.0664H19.0141L18.8658 14.6833L18.3796 14.5664ZM17.6166 17.5732L18.1005 17.6992L18.0963 17.7154L18.091 17.7313L17.6166 17.5732ZM17.6166 17.5732L17.1328 17.4472L17.137 17.431L17.1423 17.4151L17.6166 17.5732ZM15.3814 27.6755L14.8816 27.6609L14.8826 27.6259L14.8885 27.5915L15.3814 27.6755ZM13.339 44.2047L13.8282 44.3087L13.8252 44.3214L13.339 44.2047ZM13.3389 44.2049L12.8502 44.0986L12.8527 44.0882L13.3389 44.2049ZM13.3388 44.2054L13.8274 44.3116L13.8273 44.3122L13.3388 44.2054ZM13.3387 44.2058L12.8496 44.1019L12.8503 44.0989L13.3387 44.2058ZM11.6235 53.4274L11.1328 53.5233L11.1163 53.4388L11.129 53.3536L11.6235 53.4274ZM11.8107 54.3263L12.2989 54.2182L12.5178 55.2072L11.5996 54.7795L11.8107 54.3263ZM4.20264 55.0346L3.70337 55.0616L3.68675 54.7551L3.95258 54.6016L4.20264 55.0346ZM4.61176 62.5796L5.11103 62.5525L5.12573 62.8236L4.90632 62.9836L4.61176 62.5796ZM4.02701 63.1967L4.4601 63.4466L3.69618 64.7706L3.52998 63.2511L4.02701 63.1967ZM3.09763 54.7001L3.59335 54.6336L3.59467 54.6457L3.09763 54.7001ZM4.31114 21.1613L4.80778 21.2192L4.31114 21.1613ZM4.35027 20.8258L3.85363 20.7679L3.85863 20.725L3.87092 20.6836L4.35027 20.8258ZM5.70737 14.5664L5.21411 14.4846L5.28347 14.0664H5.70737V14.5664ZM64.1909 24.7163L63.6918 24.7469L63.6595 24.2207L64.1867 24.2163L64.1909 24.7163ZM64.302 24.7154L64.3065 25.2153L64.3062 25.2153L64.302 24.7154ZM64.2695 26.1076L64.5488 26.5223L63.8159 27.016L63.7701 26.1335L64.2695 26.1076ZM64.6121 25.8768L64.8915 26.2915H64.8915L64.6121 25.8768ZM65.0566 25.5773L65.4283 25.9117L65.3871 25.9576L65.3359 25.992L65.0566 25.5773ZM65.6627 24.9036L65.8636 24.4457L66.4971 24.7237L66.0344 25.238L65.6627 24.9036ZM14.0481 61.6995L14.5233 61.544L15.0603 63.1855L13.7294 62.0848L14.0481 61.6995ZM13.8724 61.1659L13.3775 61.2373L14.347 61.0087L13.8724 61.1659ZM13.9409 61.6254L13.6873 62.0563L13.4828 61.936L13.4467 61.7014L13.9409 61.6254ZM65.7777 61.611L65.2875 61.5127L65.344 61.2309L65.6159 61.1379L65.7777 61.611ZM74.979 62.6004L75.2593 62.1864L75.4955 62.3463L75.4781 62.631L74.979 62.6004ZM65.7295 61.8492L65.8421 62.3364L65.0835 62.5118L65.2396 61.749L65.7295 61.8492ZM74.9424 63.1967L75.4414 63.2273L75.3887 64.087L74.6683 63.6149L74.9424 63.1967ZM6.52489 52.4554L6.38675 51.9749L6.44819 51.9572L6.51209 51.9556L6.52489 52.4554ZM11.6971 48.7498L11.2715 48.4873L12.1703 48.9111L11.6971 48.7498ZM4.18125 53.1291L4.2786 53.6196L4.04311 52.6486L4.18125 53.1291ZM7.57549 52.4554L7.47814 51.965L7.48119 51.9644L7.57549 52.4554ZM10.8889 51.8191L10.8404 51.3214L10.9832 52.3101L10.8889 51.8191ZM8.58569 52.0437L8.63421 52.5413L7.15722 52.6853L8.2459 51.6769L8.58569 52.0437ZM10.3636 50.3967L10.0238 50.0299L10.0308 50.0234L10.0381 50.0172L10.3636 50.3967ZM11.4546 49.461L11.9279 49.6223L11.8838 49.7516L11.7801 49.8405L11.4546 49.461ZM70.6918 45.9415L70.9628 46.3618L69.7456 47.1465L70.2193 45.778L70.6918 45.9415ZM73.7224 43.808L73.5196 43.351L73.7927 43.2298L74.0288 43.4129L73.7224 43.808ZM73.4395 44.6689L73.3991 44.1706L73.4923 44.163L73.5819 44.1896L73.4395 44.6689ZM75.2569 45.9888L74.8175 46.2275L74.8172 46.2269L75.2569 45.9888ZM75.3387 46.1287L74.8631 46.2831L74.8631 46.2831L75.3387 46.1287ZM73.7224 28.2372L73.3276 27.9304L73.3276 27.9304L73.7224 28.2372ZM74.8538 29.0606L75.2043 28.7041L74.6214 29.5033L74.8538 29.0606ZM67.1763 29.8092L67.3096 30.2912L66.9792 29.3497L67.1763 29.8092ZM73.9244 27.7131L73.8226 27.2236L73.8633 27.2152L73.9048 27.2135L73.9244 27.7131ZM74.8942 28.3495L75.322 28.0907L74.563 28.7241L74.8942 28.3495ZM74.3285 28.2372L73.8285 28.2307L73.8317 27.9836L74.03 27.836L74.3285 28.2372ZM74.714 28.9279L75.0549 28.5621L75.0567 28.5638L74.714 28.9279ZM74.7141 28.9279L74.3732 29.2937L74.3714 29.292L74.7141 28.9279ZM13.0923 28.5343L13.4938 28.2363L13.5152 28.2652L13.5323 28.2968L13.0923 28.5343ZM9.05154 24.2672L9.17087 23.7817L9.30899 23.8156L9.40857 23.9172L9.05154 24.2672ZM13.1731 27.5611L13.5348 27.2159L13.6284 27.3139L13.6596 27.4458L13.1731 27.5611ZM9.77888 24.0052L9.4172 24.3505L8.82306 23.728L9.65802 23.5201L9.77888 24.0052ZM14.5874 22.8075L14.5232 22.3116L14.7082 23.2926L14.5874 22.8075ZM7.07156 23.7807L6.95223 24.2662L7.00735 23.2848L7.07156 23.7807ZM13.86 30.2561L14.3572 30.2024V30.2024L13.86 30.2561ZM76.143 24.4407C75.7515 21.1486 75.5331 17.8306 75.3742 14.5909L76.373 14.5419C76.5314 17.7718 76.7484 21.0637 77.136 24.3226L76.143 24.4407ZM75.5174 49.255C76.5382 39.0352 77.1493 32.9021 76.143 24.4407L77.136 24.3226C78.1569 32.907 77.5324 39.1429 76.5124 49.3544L75.5174 49.255ZM75.5173 49.2562L75.5173 49.2559L76.5125 49.3535L76.5125 49.3537L75.5173 49.2562ZM75.0157 54.3485C75.1896 52.5364 75.3584 50.8464 75.5174 49.2552L76.5124 49.3546C76.3534 50.946 76.1848 52.6342 76.0111 54.444L75.0157 54.3485ZM67.4358 53.3541C69.1573 52.9057 70.5625 52.6506 71.8801 52.7162C73.2133 52.7826 74.4242 53.1752 75.7669 53.9653L75.2598 54.8272C74.0307 54.1039 72.9751 53.772 71.8303 53.715C70.6698 53.6572 69.3852 53.8797 67.6879 54.3218L67.4358 53.3541ZM65.6158 59.7578C66.2105 57.7759 66.6047 56.2228 67.0705 53.7456L68.0533 53.9304C67.5807 56.4435 67.178 58.0309 66.5736 60.0452L65.6158 59.7578ZM65.4787 37.458C66.9919 45.9817 68.0015 51.6516 66.5876 59.9851L65.6017 59.8178C66.9836 51.6731 66.0075 46.1577 64.4941 37.6328L65.4787 37.458ZM65.4784 37.4563L65.4784 37.4565L64.4943 37.6342L64.4943 37.634L65.4784 37.4563ZM65.4784 37.4565L65.4786 37.4576L64.494 37.6327L64.4938 37.6316L65.4784 37.4565ZM65.0905 35.2623C65.2227 36.016 65.3523 36.7462 65.4784 37.4566L64.4938 37.6314C64.3677 36.9212 64.2379 36.1899 64.1056 35.435L65.0905 35.2623ZM65.0791 34.6933L65.0978 35.3341L64.0983 35.3633L64.0795 34.7225L65.0791 34.6933ZM65.0793 34.7079V34.7079H64.0793V34.7079H65.0793ZM65.0793 34.7078V34.7079H64.0793V34.7078H65.0793ZM64.7709 26.1222C64.9048 28.7186 64.9857 31.4925 65.0791 34.6933L64.0795 34.7224C63.9861 31.5189 63.9055 28.7568 63.7722 26.1737L64.7709 26.1222ZM67.5511 25.136C66.6593 25.7143 65.6608 26.2795 64.4059 26.6295L64.1372 25.6663C65.2518 25.3554 66.1525 24.851 67.0069 24.2969L67.5511 25.136ZM73.4877 21.3664C71.3516 23.0473 70.0945 23.9732 67.4877 25.1708L67.0703 24.2621C69.5745 23.1116 70.7608 22.2397 72.8693 20.5805L73.4877 21.3664ZM71.6444 21.3568C72.0357 21.1057 72.4531 20.838 72.913 20.5498L73.444 21.3971C72.9893 21.6821 72.5761 21.9472 72.1844 22.1985L71.6444 21.3568ZM66.8054 23.9923C68.8537 23.1468 70.0331 22.3906 71.6444 21.3568L72.1844 22.1985C70.5656 23.2371 69.3231 24.0349 67.1869 24.9166L66.8054 23.9923ZM66.5331 23.9656C66.6761 23.9623 66.8248 23.959 66.9823 23.9546L67.01 24.9542C66.8496 24.9587 66.6985 24.9621 66.5557 24.9653L66.5331 23.9656ZM64.0694 24.2256C64.9747 23.9995 65.6444 23.9857 66.5331 23.9656L66.5557 24.9653C65.6654 24.9855 65.0971 24.9997 64.3117 25.1958L64.0694 24.2256ZM63.5409 14.4826C64.1498 18.0652 64.4791 21.2564 64.6896 24.68L63.6915 24.7414C63.4828 21.3464 63.1569 18.1914 62.555 14.6502L63.5409 14.4826ZM63.0479 14.0664H75.8736V15.0664H63.0479V14.0664ZM58.6438 42.1517C58.0084 30.9019 58.227 24.013 60.4511 14.4531L61.425 14.6797C59.2301 24.1142 59.0098 30.8999 59.6422 42.0953L58.6438 42.1517ZM39.2606 43.0085C47.554 42.9772 54.5672 42.6699 59.0302 41.6364L59.2558 42.6106C54.6672 43.6732 47.5445 43.9773 39.2643 44.0084L39.2606 43.0085ZM37.3418 43.0808C37.9933 43.0707 38.6163 43.0464 39.2325 43.0093L39.2924 44.0075C38.6619 44.0454 38.0241 44.0703 37.3573 44.0807L37.3418 43.0808ZM38.103 17.9267C38.5935 26.7834 39.0405 34.8283 37.845 43.6479L36.8541 43.5136C38.0348 34.8026 37.5957 26.8503 37.1045 17.982L38.103 17.9267ZM38.0463 16.9022L38.103 17.9267L37.1045 17.9819L37.0478 16.9575L38.0463 16.9022ZM37.9187 14.5402C37.9604 15.3354 38.0033 16.1223 38.0463 16.9023L37.0478 16.9574C37.0048 16.177 36.9619 15.389 36.9201 14.5926L37.9187 14.5402ZM37.4194 14.0664H60.9381V15.0664H37.4194V14.0664ZM37.1676 14.5402C37.2101 15.3497 37.2537 16.1504 37.2975 16.9436L36.299 16.9986C36.2552 16.205 36.2115 15.4033 36.169 14.5926L37.1676 14.5402ZM37.2975 16.9435L37.3528 17.9442L36.3543 17.9994L36.299 16.9987L37.2975 16.9435ZM37.3528 17.9442C37.8462 26.8549 38.2911 34.865 37.0872 43.6539L36.0965 43.5182C37.2853 34.8388 36.8484 26.9221 36.3543 17.9994L37.3528 17.9442ZM36.5912 44.0861C32.7511 44.0812 27.7775 43.607 17.987 42.3952L18.1099 41.4027C27.9083 42.6156 32.8228 43.0813 36.5925 43.0861L36.5912 44.0861ZM17.5503 41.8563C17.8876 37.9141 18.6008 34.6876 19.2574 31.7158L20.2338 31.9315C19.5771 34.9041 18.8777 38.0724 18.5466 41.9416L17.5503 41.8563ZM19.2574 31.7158C20.4708 26.2233 21.4905 21.593 19.7201 14.6906L20.6888 14.4422C22.5219 21.5892 21.4514 26.42 20.2338 31.9315L19.2574 31.7158ZM20.2045 14.0664H36.6683V15.0664H20.2045V14.0664ZM18.8658 14.6833C18.6213 15.6997 18.3644 16.686 18.1005 17.6992L17.1328 17.4471C17.3971 16.4325 17.6516 15.4552 17.8935 14.4495L18.8658 14.6833ZM18.091 17.7313L18.091 17.7313L17.1423 17.4151L17.1423 17.4151L18.091 17.7313ZM18.1005 17.6992C17.3891 20.43 16.6208 23.3799 15.8743 27.7595L14.8885 27.5915C15.6425 23.1679 16.4199 20.184 17.1328 17.4472L18.1005 17.6992ZM15.8812 27.6901C15.6453 35.7519 14.82 39.6391 13.8281 44.3086L12.8499 44.1008C13.8356 39.4607 14.6482 35.6386 14.8816 27.6609L15.8812 27.6901ZM13.8252 44.3214L13.8251 44.3216L12.8527 44.0882L12.8528 44.088L13.8252 44.3214ZM13.8275 44.3111L13.8274 44.3116L12.8502 44.0992L12.8503 44.0987L13.8275 44.3111ZM13.8273 44.3122L13.8272 44.3126L12.8503 44.0989L12.8504 44.0985L13.8273 44.3122ZM13.8278 44.3097C13.2848 46.8659 12.6929 49.6527 12.118 53.5013L11.129 53.3536C11.7086 49.4729 12.306 46.661 12.8497 44.1019L13.8278 44.3097ZM12.1142 53.3315C12.1738 53.6366 12.2354 53.9315 12.2989 54.2182L11.3225 54.4343C11.2572 54.1395 11.194 53.8365 11.1328 53.5233L12.1142 53.3315ZM11.5996 54.7795C10.3141 54.1808 9.25338 53.9543 8.17547 54.0597C7.08633 54.1662 5.92684 54.6162 4.45269 55.4675L3.95258 54.6016C5.48002 53.7195 6.78398 53.191 8.07818 53.0645C9.38361 52.9369 10.6262 53.223 12.0218 53.873L11.5996 54.7795ZM4.7019 55.0075L5.11103 62.5525L4.1125 62.6066L3.70337 55.0616L4.7019 55.0075ZM4.90632 62.9836C4.6908 63.1407 4.54629 63.2972 4.4601 63.4466L3.59392 62.9468C3.7687 62.6439 4.02374 62.3895 4.31721 62.1755L4.90632 62.9836ZM3.52998 63.2511L2.6006 54.7544L3.59467 54.6457L4.52404 63.1423L3.52998 63.2511ZM2.60207 54.7665C1.14986 43.9312 2.29338 34.1476 3.81451 21.1034L4.80778 21.2192C3.28407 34.2855 2.16045 43.9434 3.5932 54.6336L2.60207 54.7665ZM3.81451 21.1034L3.85363 20.7679L4.8469 20.8837L4.80778 21.2192L3.81451 21.1034ZM3.87092 20.6836C4.40274 18.8909 4.83318 16.7815 5.21411 14.4846L6.20064 14.6482C5.8169 16.9621 5.37851 19.1178 4.82961 20.968L3.87092 20.6836ZM5.70737 14.0664H18.3796V15.0664H5.70737V14.0664ZM64.1867 24.2163L64.2979 24.2154L64.3062 25.2153L64.1951 25.2163L64.1867 24.2163ZM63.7701 26.1335C63.7459 25.6659 63.7199 25.2042 63.6918 24.7469L64.69 24.6856C64.7183 25.1463 64.7444 25.6112 64.7688 26.0817L63.7701 26.1335ZM64.8915 26.2915L64.5488 26.5223L63.9901 25.6929L64.3327 25.4621L64.8915 26.2915ZM65.3359 25.992L64.8915 26.2915L64.3327 25.4621L64.7772 25.1627L65.3359 25.992ZM66.0344 25.238L65.4283 25.9117L64.6849 25.2429L65.291 24.5692L66.0344 25.238ZM64.2975 24.2154C64.8033 24.2109 65.3042 24.2003 65.8636 24.4457L65.4618 25.3615C65.1258 25.214 64.8339 25.2106 64.3065 25.2153L64.2975 24.2154ZM13.5729 61.855C13.5138 61.6744 13.4555 61.4973 13.3978 61.3232L14.347 61.0087C14.405 61.1838 14.4638 61.3621 14.5233 61.544L13.5729 61.855ZM14.1945 61.1945C14.2536 61.2293 14.3119 61.2688 14.3668 61.3142L13.7294 62.0848C13.7224 62.079 13.7091 62.0691 13.6873 62.0563L14.1945 61.1945ZM14.3673 61.0946C14.3887 61.243 14.4113 61.3944 14.4351 61.5494L13.4467 61.7014C13.4224 61.5435 13.3994 61.3891 13.3775 61.2373L14.3673 61.0946ZM65.6159 61.1379C67.0821 60.6363 69.0526 60.6095 70.8368 60.8363C72.612 61.0618 74.3259 61.5544 75.2593 62.1864L74.6987 63.0144C73.9623 62.5159 72.4377 62.0477 70.7108 61.8283C68.9929 61.61 67.1976 61.6537 65.9396 62.0841L65.6159 61.1379ZM65.2396 61.749C65.2558 61.6699 65.2717 61.5912 65.2875 61.5127L66.268 61.7094C66.2519 61.7891 66.2357 61.8692 66.2193 61.9495L65.2396 61.749ZM74.6683 63.6149C72.9729 62.5037 71.6684 61.9933 70.3638 61.8456C69.0472 61.6966 67.6832 61.9105 65.8421 62.3364L65.6168 61.3621C67.4726 60.9328 68.9788 60.6824 70.4763 60.852C71.9859 61.0228 73.4394 61.6137 75.2165 62.7785L74.6683 63.6149ZM75.4781 62.631L75.4414 63.2273L74.4433 63.1661L74.4799 62.5698L75.4781 62.631ZM6.51209 51.9556C6.56973 51.9541 6.69133 51.9285 6.88852 51.8445C7.0769 51.7642 7.29988 51.6456 7.54892 51.4947C8.04653 51.1931 8.61342 50.7835 9.15998 50.3548C9.70503 49.9272 10.2208 49.4877 10.6145 49.1308C10.8116 48.9522 10.9753 48.7968 11.0956 48.6758C11.2316 48.5388 11.2747 48.4822 11.2715 48.4873L12.1226 49.0123C12.0548 49.1222 11.9256 49.2591 11.805 49.3805C11.6686 49.5178 11.4913 49.6858 11.2861 49.8718C10.8752 50.2442 10.3413 50.699 9.77719 51.1416C9.21457 51.5829 8.61267 52.0193 8.06726 52.3498C7.79478 52.515 7.5277 52.6591 7.28062 52.7644C7.04236 52.866 6.78312 52.9489 6.5377 52.9552L6.51209 51.9556ZM4.04311 52.6486L6.38675 51.9749L6.66304 52.9359L4.3194 53.6097L4.04311 52.6486ZM7.67284 52.9458L4.2786 53.6196L4.0839 52.6387L7.47814 51.965L7.67284 52.9458ZM10.9832 52.3101L7.66979 52.9464L7.48119 51.9644L10.7946 51.3281L10.9832 52.3101ZM8.53716 51.546L10.8404 51.3214L10.9374 52.3167L8.63421 52.5413L8.53716 51.546ZM10.7034 50.7635L8.92547 52.4105L8.2459 51.6769L10.0238 50.0299L10.7034 50.7635ZM11.7801 49.8405L10.6891 50.7763L10.0381 50.0172L11.1291 49.0815L11.7801 49.8405ZM12.1703 48.9111L11.9279 49.6223L10.9814 49.2996L11.2238 48.5885L12.1703 48.9111ZM70.2193 45.778C70.2715 45.6273 70.3799 45.5023 70.4475 45.4289C70.5307 45.3387 70.6342 45.2424 70.7469 45.1453C70.9736 44.95 71.2673 44.7264 71.5829 44.5042C72.2088 44.0635 72.9669 43.5963 73.5196 43.351L73.9252 44.265C73.4598 44.4716 72.7631 44.8962 72.1586 45.3219C71.8589 45.5328 71.5934 45.736 71.3996 45.903C71.3021 45.987 71.2299 46.0556 71.1825 46.107C71.1196 46.1752 71.1424 46.1683 71.1643 46.1051L70.2193 45.778ZM73.4799 45.1673C72.883 45.2157 72.3413 45.4729 70.9628 46.3618L70.4209 45.5213C71.7743 44.6486 72.5165 44.2421 73.3991 44.1706L73.4799 45.1673ZM74.9035 46.3729C74.8334 46.2815 74.5805 46.0123 74.2484 45.7362C73.9098 45.4546 73.5598 45.2262 73.2972 45.1482L73.5819 44.1896C74.0488 44.3283 74.5287 44.6687 74.8878 44.9673C75.2535 45.2714 75.5663 45.5938 75.6972 45.7646L74.9035 46.3729ZM75.6962 45.7501L75.7397 45.8301L74.861 46.3075L74.8175 46.2275L75.6962 45.7501ZM74.0288 43.4129C74.407 43.7063 74.771 44.2084 75.0504 44.6422C75.3397 45.0916 75.5789 45.5335 75.6965 45.7507L74.8172 46.2269C74.6998 46.0102 74.4764 45.598 74.2096 45.1836C73.9328 44.7537 73.647 44.3823 73.416 44.2031L74.0288 43.4129ZM75.8143 45.9743C75.8158 45.9792 75.8274 46.0137 75.8342 46.0574C75.8351 46.0627 75.852 46.1515 75.8249 46.2584C75.8103 46.3158 75.7637 46.4548 75.6162 46.5525C75.4525 46.661 75.2848 46.6416 75.1947 46.6142C75.1125 46.5893 75.0573 46.5492 75.0358 46.5328C75.0093 46.5125 74.9902 46.4937 74.9796 46.4827C74.9584 46.4608 74.9437 46.4416 74.9376 46.4334C74.924 46.4153 74.914 46.3995 74.9099 46.393C74.894 46.3676 74.8753 46.3337 74.8618 46.3089L75.7389 45.8286C75.7563 45.8604 75.76 45.8664 75.7572 45.8618C75.7564 45.8606 75.7491 45.8488 75.7376 45.8335C75.7325 45.8266 75.7187 45.8085 75.6982 45.7874C75.688 45.7768 75.6692 45.7583 75.643 45.7383C75.6218 45.722 75.5668 45.6821 75.4849 45.6573C75.395 45.63 75.2275 45.6105 75.0639 45.7189C74.9165 45.8165 74.8701 45.9553 74.8556 46.0125C74.8286 46.1188 74.8455 46.2069 74.8461 46.211C74.85 46.236 74.855 46.255 74.857 46.2626C74.8596 46.272 74.8619 46.2792 74.8631 46.2831L75.8143 45.9743ZM75.6972 45.7646C75.7129 45.7851 75.7306 45.8094 75.7473 45.8354C75.7581 45.8523 75.7917 45.9048 75.8143 45.9743L74.8631 46.2831C74.8743 46.3176 74.8868 46.3421 74.892 46.3519C74.8982 46.3637 74.9032 46.3716 74.9051 46.3747C74.9089 46.3806 74.9093 46.3805 74.9035 46.3729L75.6972 45.7646ZM74.1172 28.544C74.2384 28.388 74.2276 28.2208 74.2106 28.1403C74.1944 28.0636 74.1636 28.0111 74.1526 27.9931C74.1384 27.9699 74.1259 27.9543 74.1206 27.9478C74.1145 27.9404 74.1103 27.9361 74.1095 27.9353C74.1083 27.934 74.1118 27.9377 74.1226 27.9473C74.1328 27.9563 74.1464 27.968 74.1639 27.9823C74.2358 28.0412 74.3446 28.1228 74.4693 28.2117C74.7264 28.3952 74.9943 28.5697 75.0862 28.6179L74.6214 29.5033C74.4622 29.4198 74.1443 29.2083 73.8885 29.0258C73.7568 28.9318 73.6273 28.8354 73.53 28.7557C73.4838 28.7179 73.4317 28.6731 73.3889 28.6286C73.3707 28.6097 73.3324 28.5687 73.2989 28.5138C73.2832 28.4882 73.2495 28.4292 73.2322 28.347C73.214 28.2611 73.2038 28.0896 73.3276 27.9304L74.1172 28.544ZM67.0431 29.3273C68.0955 29.0364 69.7647 28.6067 71.1568 28.2674C71.8525 28.0979 72.4833 27.9499 72.9352 27.8529C73.1593 27.8048 73.348 27.7673 73.4807 27.7464C73.5416 27.7369 73.6142 27.7268 73.6777 27.7253C73.689 27.725 73.7858 27.7199 73.8896 27.7575C73.9324 27.773 74.1223 27.8469 74.198 28.072C74.2795 28.3141 74.1542 28.4963 74.1172 28.544L73.3276 27.9304C73.2939 27.9736 73.1698 28.152 73.2502 28.3909C73.3249 28.6128 73.5115 28.6841 73.5488 28.6976C73.6068 28.7187 73.6536 28.7227 73.6665 28.7238C73.6853 28.7253 73.6984 28.7251 73.7022 28.725C73.7099 28.7248 73.6937 28.7252 73.6362 28.7343C73.5323 28.7506 73.3661 28.7832 73.1451 28.8306C72.7068 28.9247 72.0865 29.0701 71.3935 29.239C70.0082 29.5766 68.3494 30.0037 67.3096 30.2912L67.0431 29.3273ZM74.0262 28.2027C71.3221 28.765 69.8677 29.1986 67.3735 30.2687L66.9792 29.3497C69.5421 28.2501 71.0613 27.7978 73.8226 27.2236L74.0262 28.2027ZM74.4664 28.6083C74.3246 28.3739 74.2699 28.2988 74.2175 28.2581C74.1997 28.2443 74.1509 28.2047 73.944 28.2128L73.9048 27.2135C74.2623 27.1995 74.5697 27.2652 74.8313 27.4687C75.0583 27.6452 75.2062 27.8993 75.322 28.0907L74.4664 28.6083ZM74.03 27.836C74.2224 27.6929 74.4776 27.588 74.7713 27.6804C74.89 27.7177 74.9836 27.7789 75.049 27.8275C75.1134 27.8756 75.1768 27.9319 75.2253 27.9748L74.563 28.7241C74.5361 28.7003 74.5148 28.6815 74.4952 28.6648C74.4759 28.6484 74.462 28.6373 74.4517 28.6296C74.4284 28.6122 74.4381 28.6239 74.4714 28.6343C74.49 28.6402 74.5138 28.645 74.5411 28.6458C74.5685 28.6467 74.5927 28.6433 74.612 28.6383C74.6477 28.6291 74.6546 28.6177 74.627 28.6383L74.03 27.836ZM74.3732 29.2937C74.2713 29.1987 74.1241 29.0654 74.0156 28.8989C73.8919 28.7089 73.8252 28.4915 73.8285 28.2307L74.8284 28.2436C74.8279 28.2826 74.8325 28.3044 74.8357 28.3157C74.8388 28.3265 74.8435 28.3377 74.8537 28.3533C74.8824 28.3975 74.9301 28.4458 75.0549 28.5621L74.3732 29.2937ZM74.3714 29.292L74.3714 29.292L75.0567 28.5638L75.0567 28.5638L74.3714 29.292ZM74.5032 29.4172C74.4602 29.3749 74.4181 29.3356 74.3732 29.2937L75.0549 28.5621C75.0988 28.603 75.1504 28.651 75.2043 28.7041L74.5032 29.4172ZM12.6908 28.8323C12.5368 28.6247 11.8564 27.8936 11.0266 27.025C10.2126 26.173 9.29289 25.2276 8.6945 24.6173L9.40857 23.9172C10.0089 24.5296 10.9318 25.4782 11.7496 26.3342C12.5516 27.1737 13.2923 27.9648 13.4938 28.2363L12.6908 28.8323ZM13.2717 30.0476C13.1125 29.655 12.8231 29.0882 12.6523 28.7718L13.5323 28.2968C13.7071 28.6207 14.0179 29.2267 14.1984 29.6718L13.2717 30.0476ZM13.6596 27.4458C13.816 28.1056 14.0686 29.1546 14.219 29.7341L13.2511 29.9853C13.0977 29.3943 12.8428 28.3358 12.6866 27.6764L13.6596 27.4458ZM10.1406 23.66L13.5348 27.2159L12.8114 27.9063L9.4172 24.3505L10.1406 23.66ZM14.7082 23.2926L9.89973 24.4904L9.65802 23.5201L14.4665 22.3223L14.7082 23.2926ZM7.00735 23.2848L14.5232 22.3116L14.6516 23.3033L7.13577 24.2765L7.00735 23.2848ZM8.93221 24.7528L6.95223 24.2662L7.1909 23.2951L9.17087 23.7817L8.93221 24.7528ZM14.3572 30.2024C14.3579 30.2095 14.3657 30.2707 14.3584 30.3374C14.3564 30.356 14.3503 30.4055 14.3278 30.4642C14.3137 30.5011 14.2412 30.6835 14.0241 30.7589C13.7794 30.844 13.5951 30.7159 13.5452 30.6757C13.4858 30.6279 13.4519 30.5779 13.4408 30.5613C13.4 30.4999 13.3785 30.4356 13.3776 30.433C13.3696 30.4109 13.362 30.3875 13.3554 30.366C13.3295 30.2818 13.2928 30.146 13.2511 29.9853L14.219 29.7341C14.261 29.896 14.2926 30.0115 14.311 30.0714C14.3131 30.0782 14.3148 30.0834 14.316 30.0871C14.3173 30.0911 14.3178 30.0925 14.3176 30.0919C14.3175 30.0916 14.317 30.0902 14.3162 30.0881C14.3154 30.086 14.3139 30.0823 14.3118 30.0774C14.3104 30.0742 14.2976 30.0438 14.2734 30.0074C14.2636 29.9926 14.2307 29.9438 14.1722 29.8968C14.1233 29.8573 13.9398 29.7295 13.6958 29.8143C13.4794 29.8896 13.4075 30.0712 13.3939 30.1068C13.3719 30.1642 13.3662 30.2119 13.3644 30.2282C13.3581 30.2857 13.365 30.3292 13.3629 30.3097L14.3572 30.2024ZM14.1984 29.6718C14.2645 29.8349 14.3394 30.0375 14.3572 30.2024L13.3629 30.3097C13.3637 30.3172 13.3618 30.2983 13.3436 30.2414C13.3271 30.1902 13.3031 30.1251 13.2717 30.0476L14.1984 29.6718Z",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M67.4996 54.0054C71.2043 52.9631 73.1429 53.0015 76.1172 55.2201C75.843 58.0806 75.2664 63.9885 75.2554 63.9193C75.008 62.3605 68.6356 60.902 65.5411 62.2343C66.4489 59.1015 66.9182 57.3445 67.4996 54.0054Z",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M12.5239 54.6588C8.65959 53.5717 6.6375 53.6118 3.53516 55.9259C3.82116 58.9096 4.42257 65.072 4.43403 64.9997C4.69207 63.3739 11.339 61.8525 14.5668 63.2422C13.6199 59.9745 13.1303 58.1418 12.5239 54.6588Z",
            fill: "white",
            stroke: color
          })]
        });

      case 'ChestPocket':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            width: width,
            height: height,
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M62.602 9.73047H58.3686H9.95312H8.45312V11.2305V22.4033V53.2615V54.0513L9.10436 54.4983L14.132 57.9486L16.2964 55.7954L11.4531 52.4717V24.5816L37.6273 34.5754L41.0021 31.2181L39.1944 31.9625L11.4531 21.3704V12.7305H58.3686H59.5863L62.602 9.73047ZM59.0223 23.798L64.8492 21.3987V18.0015L67.8492 15.0171V22.4033V54.3256V55.1749L67.1209 55.6118L66.3492 54.3256C67.1209 55.6118 67.1209 55.6119 67.1207 55.6119L67.12 55.6123L67.1174 55.6139L67.1068 55.6203L67.0647 55.6456L66.8995 55.7447L66.2636 56.1262L63.9204 57.5321L56.1476 62.1958L37.8588 73.1691L37.0327 73.6648L36.2383 73.1196L20.3818 62.2377L22.5462 60.0846L37.1415 70.1009L54.6042 59.6233L62.3769 54.9597L64.7202 53.5537L64.8492 53.4763V24.6431L53.4577 29.3337L59.0223 23.798Z",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "70.7793",
            y: "5.4375",
            width: "3.19223",
            height: "89.3824",
            transform: "rotate(45.915 70.7793 5.4375)",
            fill: color
          })]
        });

      case 'Collar':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            width: width,
            height: height,
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M10.8828 21.8277C19.7652 10.554 63.152 12.2624 68.6181 21.8277L50.5118 40.2757H34.7968L10.8828 21.8277Z",
            fill: "white",
            stroke: color,
            "stroke-width": "2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M51.1943 50.1842C42.3072 52.3584 37.4634 52.2379 28.9884 50.1842L25.2305 49.1593C26.8247 44.832 30.2663 35.9188 30.3549 36.1774C30.7561 37.3485 42.9195 37.5911 48.8029 36.1774L51.1943 50.1842Z",
            fill: "white",
            stroke: color,
            "stroke-width": "2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M18.7398 65.8983L37.5294 36.8598C26.1925 31.9747 20.2698 28.7667 10.8824 21.8281C6.96313 28.6599 5.06915 33.4529 2 43.0091C7.05562 55.9555 10.965 60.3099 18.7398 65.8983Z",
            fill: "white",
            stroke: color,
            "stroke-width": "2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M60.7602 65.8983L41.9706 36.8598C53.3075 31.9747 60.4186 29.6856 68.6176 21.8281C72.5369 28.6599 74.4309 33.4529 77.5 43.0091C72.4444 55.9555 68.535 60.3099 60.7602 65.8983Z",
            fill: "white",
            stroke: color,
            "stroke-width": "2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "40.1186",
            cy: "45.7251",
            r: "1.21336",
            fill: color,
            stroke: color,
            "stroke-width": "2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M30.5273 33.4939C38.1142 31.7316 42.3218 31.8041 49.7098 33.4939",
            stroke: color,
            "stroke-width": "2"
          })]
        });

      case 'Cuffs':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            width: width,
            height: height,
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M6 49.8331L24.0567 31.7765C32.5834 31.2749 40.1071 36.2906 45.3736 46.0713",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M23.8057 31.7748C23.8057 31.5742 36.8466 14.8049 43.3671 6.44531",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M29.5742 32.0244C31.434 28.9334 32.6539 27.5276 35.0915 25.5039",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M44.8721 44.5645C51.4197 37.2566 56.0296 34.4119 63.1795 27.7617C56.7555 35.5372 53.097 39.8142 45.6244 46.0692",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M47.3799 50.3329C49.8279 48.5236 51.1539 47.4702 52.8972 45.0664",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M47.3799 56.8529C49.773 56.6586 66.9308 40.396 74.4649 31.5234",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M29.5741 62.122L31.3296 60.3665C34.3493 66.1425 34.8408 69.3951 31.3297 73.6585C20.0444 76.9187 2.99059 56.1027 6.50171 49.5822C10.5145 45.5698 19.3695 48.7335 29.5741 62.122Z",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M45.3732 46.3203L31.3291 60.3644C33.2361 64.1299 33.6643 66.6441 33.5862 71.6498L47.6303 56.8534C48.1153 51.9148 47.6029 49.599 45.3732 46.3203Z",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M32.1321 51.2073C31.8284 51.9447 30.8264 52.389 29.786 51.9605C28.7457 51.532 28.3473 50.5108 28.651 49.7734C28.9547 49.0361 29.9567 48.5917 30.9971 49.0202C32.0374 49.4487 32.4358 50.4699 32.1321 51.2073Z",
            fill: color,
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "27.2994",
            y: "47.9844",
            width: "0.250787",
            height: "8.36908",
            transform: "rotate(-45 27.2994 47.9844)",
            fill: color,
            stroke: color,
            "stroke-width": "0.250787"
          })]
        });

      case 'Fit':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            width: width,
            height: height,
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M18.8386 12.5443C23.6713 10.2672 26.966 8.91774 33.1142 6.10938L39.6429 9.51428L47.7022 6.2968L62.0716 11.4823C69.1311 15.0121 67.007 30.1624 68.6002 44.6254C69.5259 53.0284 68.6915 58.7076 67.6631 70.4277L67.2882 77.0189C64.6038 75.1195 63.024 75.1806 60.1661 75.8943C61.7591 67.4914 60.7149 62.5426 59.2914 53.7781C59.0583 45.1746 58.9565 40.3342 57.3859 32.5052C54.8236 42.655 54.5072 48.5925 55.0743 59.4321C51.5756 60.3067 46.1116 60.5618 39.7054 60.5879C36.3608 60.8047 32.7502 60.5067 23.3056 59.2447C24.1177 48.9987 27.7725 44.5942 24.1401 33.5048C23.3605 38.0991 22.2746 40.8457 21.2438 47.3743C20.9627 57.7453 19.5972 59.7702 18.3387 68.8659C18.8075 71.4559 19.4308 73.1879 20.2131 75.7694C19.3383 74.9884 13.4344 75.2071 12.4661 77.0189L11.7476 69.9279C10.6325 60.9458 11.5088 52.8332 12.6858 41.9378L12.716 41.6578C14.9651 33.4736 14.8402 17.761 18.8386 12.5443Z",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            opacity: "0.5",
            d: "M65.8373 68.0535C64.9002 68.0276 62.0388 65.3108 61.8389 64.9609L62.0263 65.5545L62.8697 66.3354L64.2442 67.7099L62.4636 67.5224L65.0251 68.0535L67.6491 68.6157L65.8373 68.0535Z",
            fill: "black",
            "fill-opacity": "0.45",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            opacity: "0.5",
            d: "M13.8884 60.8359C14.6755 61.213 16.1376 62.3245 16.2312 62.6165C15.1752 61.8814 14.679 61.6044 14.1071 61.5544C13.5431 61.7352 12.824 62.5038 12.6686 62.7227C12.6446 62.7698 12.6339 62.7894 12.6389 62.7727C12.6417 62.7632 12.6519 62.7461 12.6686 62.7227C12.8067 62.4504 13.3835 61.2587 13.8884 60.8359Z",
            fill: "black",
            "fill-opacity": "0.45",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            opacity: "0.5",
            d: "M13.8883 47.8409C13.9192 47.8838 13.2078 48.4181 13.0137 48.5281C13.2426 48.2851 13.4236 48.1677 13.4197 47.8409C13.2364 47.6936 13.1452 47.7793 12.9824 47.9346C13.1815 47.5793 13.2958 47.3851 13.7321 47.4035C15.8447 47.8778 16.9941 48.2474 18.9488 49.1529C17.3314 48.6701 13.8033 47.7228 13.8883 47.8409Z",
            fill: "black",
            "fill-opacity": "0.45",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M38.6436 7.57715L40.0805 8.20191L40.4554 8.608L38.6123 10.6072L33.7393 8.63923L34.1141 5.10938L38.6436 7.57715Z",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M39.0492 7.63855C36.4461 5.82119 34.0512 3.64013 34.2386 2.39062C33.6771 4.19779 33.3965 5.2289 32.6143 6.92009C32.9537 8.36942 33.3831 9.39948 34.4885 11.5433C36.0248 9.32565 37.0075 8.4326 39.0492 7.63855Z",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M38.6124 10.701C38.3088 9.34445 38.6851 8.6554 40.9864 7.63974L47.4214 5.39062L46.2656 8.20202C43.3498 9.97275 41.553 10.7731 38.6124 10.701Z",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M45.6095 11.5119C43.112 8.66211 41.9264 7.50239 40.9238 7.70092C43.7665 5.48304 47.0464 4.32725 46.4529 2.10938C47.1364 3.88545 47.4802 4.94581 47.9523 7.07617C47.3619 8.82465 46.7345 9.79016 45.6095 11.5119Z",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M38.737 60.6794C37.7687 45.373 39.518 33.0029 38.5183 10.543",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M18.6516 69.2071C15.6972 68.3763 14.1512 68.4069 11.7793 70.1755C11.998 72.4558 12.4578 77.1654 12.4665 77.1102C12.6638 75.8676 17.7457 74.7049 20.2135 75.767C19.4895 73.2696 19.1152 71.869 18.6516 69.2071Z",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M60.4159 70.3961C63.2574 68.5514 64.8442 68.4708 67.6318 70.2087L67.2882 77.0497C64.8508 75.3697 63.298 74.9731 60.0723 75.9252C60.3572 73.9808 60.4395 72.7243 60.4159 70.3961Z",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            opacity: "0.75",
            cx: "39.8924",
            cy: "9.4803",
            r: "0.437327",
            fill: "black",
            "fill-opacity": "0.6",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            opacity: "0.75",
            cx: "40.2987",
            cy: "15.6678",
            r: "0.437327",
            fill: "black",
            "fill-opacity": "0.6",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            opacity: "0.75",
            cx: "40.3612",
            cy: "23.4139",
            r: "0.437327",
            fill: "black",
            "fill-opacity": "0.6",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            opacity: "0.75",
            cx: "40.5487",
            cy: "32.66",
            r: "0.437327",
            fill: "black",
            "fill-opacity": "0.6",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            opacity: "0.75",
            cx: "40.7987",
            cy: "41.8436",
            r: "0.437327",
            fill: "black",
            "fill-opacity": "0.6",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            opacity: "0.75",
            cx: "40.5487",
            cy: "51.2147",
            r: "0.437327",
            fill: "black",
            "fill-opacity": "0.6",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            opacity: "0.5",
            d: "M63.8831 44.5308C62.9564 45.5512 61.0342 47.692 60.7593 48.0919C60.6257 48.3591 60.3937 48.8484 60.2624 49.198C60.1977 49.4672 60.1569 49.6176 60.1658 49.5288C60.173 49.457 60.2095 49.3389 60.2624 49.198C60.3798 48.7096 60.576 47.8302 60.6968 47.2797L63.3208 44.3121L59.6035 43.3125L65.4137 44.1247L63.8831 44.5308Z",
            fill: "black",
            "fill-opacity": "0.3",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            opacity: "0.5",
            d: "M59.4161 27.1013C59.2991 28.282 58.2957 31.7747 58.0417 32.5991C58.3469 30.2757 58.4393 29.0192 58.0417 27.1013C57.601 26.2368 57.4351 25.7299 57.2607 24.7897L57.2713 24.7992C57.6725 25.1602 57.9008 25.3655 58.6664 25.352C60.2829 22.007 60.8056 20.0365 61.6965 16.5117C61.0064 19.9691 60.639 21.9081 59.4161 25.352C60.5864 24.565 61.2382 23.9894 62.3837 22.5718C61.3006 24.5216 60.6388 25.4859 59.4161 27.1013Z",
            fill: "black",
            "fill-opacity": "0.3",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            opacity: "0.5",
            d: "M18.8703 44.905C19.5648 45.3913 20.3221 45.8498 21.2756 46.1233L20.932 45.8734L20.5883 45.6235L20.1198 45.0612C20.4953 44.8834 20.8241 44.902 21.2756 44.905C20.5074 44.6955 19.9835 44.713 19.0889 44.6864C17.0794 43.7909 16.1215 43.0071 14.3096 41.7812C15.9503 43.175 16.8947 43.9252 18.8703 44.905Z",
            fill: "black",
            "fill-opacity": "0.3",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            opacity: "0.5",
            d: "M23.6181 29.5991C23.9438 30.3347 24.325 32.4819 24.2116 32.9727L24.3053 33.2539C24.4258 31.8266 24.3822 31.0265 24.2116 29.5991L23.9929 29.1305L23.3994 27.4749C22.9211 26.0213 22.6726 25.0654 22.2436 23.2578C22.4519 24.3095 22.7434 25.9755 22.8684 26.4753C22.9769 26.9092 23.212 27.756 23.5869 28.9743C22.5392 27.8108 21.9156 27.2586 20.9629 25.913C21.5617 26.9646 21.9282 27.5817 23.6181 29.5991Z",
            fill: "black",
            "fill-opacity": "0.3",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M23.0866 32.8066L22.7331 32.453L22.3795 32.8066L21.5688 33.6173L21.2155 33.9706L21.5685 34.3241L23.9252 36.6851H18.1331H17.6331V37.1851V38.3351V38.8351H18.1331H23.9222L21.5633 41.1897L21.2092 41.5432L21.563 41.8971L22.3795 42.7136L22.7331 43.0671L23.0866 42.7136L27.6866 38.1136L28.0401 37.7601L27.6866 37.4065L23.0866 32.8066Z",
            fill: color,
            stroke: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M55.7288 42.711L56.0824 43.0645L56.4359 42.711L57.2466 41.9002L57.5999 41.547L57.247 41.1934L54.8902 38.8325H60.6823H61.1823V38.3325V37.1825V36.6825H60.6823H54.8933L57.2521 34.3279L57.6063 33.9744L57.2524 33.6205L56.4359 32.804L56.0824 32.4504L55.7288 32.804L51.1289 37.4039L50.7753 37.7575L51.1289 38.111L55.7288 42.711Z",
            fill: color,
            stroke: "white"
          })]
        });

      case 'Placket':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "38.6367",
            y: "21.2734",
            width: "2.72727",
            height: "36.8182",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "10",
            y: "9",
            width: "2.72727",
            height: "61.3636",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "67.2725",
            y: "9",
            width: "2.72727",
            height: "61.3636",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "39.6527",
            cy: "39.347",
            r: "12.6204",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
            cx: "39.4648",
            cy: "35.1371",
            rx: "1.46282",
            ry: "1.82852",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
            cx: "35.4447",
            cy: "39.162",
            rx: "1.82852",
            ry: "1.46282",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "39.4648",
            cy: "43.5488",
            r: "1.46282",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "43.8544",
            cy: "39.162",
            r: "1.46282",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M39.6527 51.9676C32.6937 51.9676 27.0322 46.306 27.0322 39.347C27.0322 32.388 32.6937 26.7266 39.6527 26.7266C46.6117 26.7266 52.2731 32.388 52.2731 39.347C52.2731 46.306 46.6115 51.9676 39.6527 51.9676ZM39.6527 27.3592C33.0425 27.3592 27.6647 32.737 27.6647 39.347C27.6647 45.9572 33.0424 51.3349 39.6525 51.3349C46.2627 51.3349 51.6404 45.9572 51.6404 39.347C51.6405 32.737 46.2627 27.3592 39.6527 27.3592ZM39.6527 48.7809C34.4509 48.7809 30.2189 44.5489 30.2189 39.347C30.2189 34.1454 34.4509 29.9133 39.6527 29.9133C44.8545 29.9133 49.0864 34.1452 49.0864 39.347C49.0864 44.5488 44.8543 48.7809 39.6527 48.7809ZM39.6527 30.546C34.7997 30.546 30.8516 34.4942 30.8516 39.3471C30.8516 44.2001 34.7997 48.1484 39.6527 48.1484C44.5056 48.1484 48.4538 44.2002 48.4538 39.3471C48.4538 34.4942 44.5056 30.546 39.6527 30.546ZM39.6527 45.5251C38.5948 45.5251 37.7341 44.6644 37.7341 43.6065C37.7341 42.5487 38.5948 41.6879 39.6527 41.6879C40.7106 41.6879 41.5712 42.5487 41.5712 43.6065C41.5712 44.6644 40.7104 45.5251 39.6527 45.5251ZM39.6527 42.3205C38.9436 42.3205 38.3668 42.8975 38.3668 43.6065C38.3668 44.3156 38.9436 44.8924 39.6527 44.8924C40.3617 44.8924 40.9386 44.3155 40.9386 43.6065C40.9386 42.8975 40.3617 42.3205 39.6527 42.3205ZM43.9121 41.2655C42.8542 41.2655 41.9935 40.4049 41.9935 39.347C41.9935 38.2891 42.8542 37.4285 43.9121 37.4285C44.97 37.4285 45.8307 38.2891 45.8307 39.347C45.8307 40.4049 44.97 41.2655 43.9121 41.2655ZM43.9121 38.0611C43.203 38.0611 42.6262 38.6381 42.6262 39.347C42.6262 40.0559 43.203 40.6329 43.9121 40.6329C44.6211 40.6329 45.1981 40.0559 45.1981 39.347C45.1981 38.6381 44.6211 38.0611 43.9121 38.0611ZM35.3933 41.2655C34.3354 41.2655 33.4747 40.4049 33.4747 39.347C33.4747 38.2891 34.3354 37.4285 35.3933 37.4285C36.4512 37.4285 37.3118 38.2891 37.3118 39.347C37.3118 40.4049 36.451 41.2655 35.3933 41.2655ZM35.3933 38.0611C34.6842 38.0611 34.1074 38.6381 34.1074 39.347C34.1074 40.0559 34.6842 40.6329 35.3933 40.6329C36.1023 40.6329 36.6792 40.0559 36.6792 39.347C36.6792 38.6381 36.1023 38.0611 35.3933 38.0611ZM39.6527 37.0061C38.5948 37.0061 37.7341 36.1455 37.7341 35.0876C37.7341 34.0297 38.5948 33.1691 39.6527 33.1691C40.7106 33.1691 41.5712 34.0297 41.5712 35.0876C41.5712 36.1455 40.7104 37.0061 39.6527 37.0061ZM39.6527 33.8017C38.9436 33.8017 38.3668 34.3787 38.3668 35.0876C38.3668 35.7965 38.9436 36.3735 39.6527 36.3735C40.3617 36.3735 40.9386 35.7965 40.9386 35.0876C40.9386 34.3787 40.3617 33.8017 39.6527 33.8017Z",
            fill: color
          })]
        });

      case 'Pleats':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
            "clip-path": "url(#clip0)",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M10.2246 16.2232C32.9206 12.0797 46.0227 11.7333 70.3506 16.2232",
              stroke: color,
              "stroke-width": "1.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M4.49902 80.6441C4.77232 44.0774 4.37031 18.1813 7.83935 12.6445C11.7757 18.081 13.6916 21.3748 15.4744 28.6304C14.6308 48.516 14.5346 60.0056 14.52 80.6441",
              stroke: color,
              "stroke-width": "1.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M19.7693 80.4076C18.8202 58.0559 18.0976 46.1049 15.4746 28.8711",
              stroke: color,
              "stroke-width": "1.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M8.07812 12.6471C13.0788 9.5962 15.974 7.88534 27.4043 4.77344",
              stroke: color,
              "stroke-width": "1.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M76.3154 80.6441C76.0421 44.0774 76.4441 18.1813 72.9751 12.6445C69.0388 18.081 67.1228 21.3748 65.3401 28.6304C66.1837 48.516 66.2799 60.0056 66.2944 80.6441",
              stroke: color,
              "stroke-width": "1.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M61.0461 80.4076C61.9952 58.0559 62.7178 46.1049 65.3408 28.8711",
              stroke: color,
              "stroke-width": "1.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M72.7373 12.6471C67.7366 9.5962 64.8414 7.88534 53.4111 4.77344",
              stroke: color,
              "stroke-width": "1.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M29.3131 0C28.3145 1.76408 27.8783 2.89032 27.4043 5.24909C38.105 8.41426 43.5528 7.87566 53.4112 4.7719C52.5359 2.7969 52.0563 1.76476 50.548 0C42.6132 2.15018 37.9464 2.11306 29.3131 0Z",
              stroke: color,
              "stroke-width": "1.5"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("defs", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("clipPath", {
              id: "clip0",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
                width: "80",
                height: "80",
                fill: "white"
              })
            })
          })]
        });

      case 'Sleeve':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            width: width,
            height: height,
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
            "clip-path": "url(#clip0)",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M50.3711 19.0488V71.2279",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M52.292 19.0488V71.2279",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M50.4707 14.6992H52.392",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M47.9434 19.1523H54.9208",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M46.7305 12.8761C50.1498 12.1817 52.1353 12.1511 55.8315 12.8761",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M18.6188 70.2124C16.9296 52.1553 20.1929 32.5814 23.4549 21.707",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M23.5742 21.8767C29.9243 18.8858 33.6155 17.3678 40.5627 15.1016",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M40.8652 14.797C41.1386 12.8465 41.3597 11.8451 41.9776 10.3477C45.3404 12.4604 47.2731 13.3482 50.7752 14.5948L46.3258 21.2689C43.7074 19.2182 42.4823 17.8288 40.8652 14.797Z",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M41.9766 10.2485C43.6956 6.80957 57.8527 6.91061 60.7853 10.2485",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M62 14.797C61.7266 12.8465 61.5055 11.8451 60.8877 10.3477C57.5248 12.4604 55.5922 13.3482 52.09 14.5948L56.5394 21.2689C59.1578 19.2182 60.383 17.8288 62 14.797Z",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M26.8101 70.0179C26.008 68.8317 28.1667 44.5392 29.9449 33.3105C29.8343 50.5754 29.8295 59.946 30.9562 70.5235M23.3721 22.0859C25.4956 24.9174 26.7725 26.1434 29.4394 32.5015",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
              cx: "51.2797",
              cy: "17.5316",
              r: "0.5",
              fill: color,
              stroke: color,
              "stroke-width": "0.617955"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
              cx: "51.3808",
              cy: "23.496",
              r: "0.5",
              fill: color,
              stroke: color,
              "stroke-width": "0.820199"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
              cx: "51.3808",
              cy: "32.1953",
              r: "0.5",
              fill: color,
              stroke: color,
              "stroke-width": "0.820199"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
              cx: "51.3808",
              cy: "45.1288",
              r: "0.5",
              fill: color,
              stroke: color,
              "stroke-width": "0.820199"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
              cx: "51.3808",
              cy: "57.871",
              r: "0.5",
              fill: color,
              stroke: color,
              "stroke-width": "0.820199"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
              cx: "51.3808",
              cy: "70.8203",
              r: "0.5",
              fill: color,
              stroke: color,
              "stroke-width": "0.820199"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("defs", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("clipPath", {
              id: "clip0",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
                width: "64",
                height: "64",
                fill: "white",
                transform: "translate(8 8)"
              })
            })
          })]
        });

      case 'Embroidory':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M18.144 49.1458H9.648L8.388 52.9978H0L9.324 27.5098H18.54L27.828 52.9978H19.404L18.144 49.1458ZM16.2 43.1338L13.896 36.0418L11.592 43.1338H16.2Z",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M46.7618 39.9298C48.2978 40.2898 49.4858 41.0338 50.3258 42.1618C51.1898 43.2658 51.6218 44.5498 51.6218 46.0138C51.6218 48.2458 50.8778 49.9738 49.3898 51.1978C47.9258 52.3978 45.8138 52.9978 43.0538 52.9978H29.6978V27.5098H42.6938C45.2858 27.5098 47.3258 28.0738 48.8138 29.2018C50.3018 30.3298 51.0457 31.9738 51.0457 34.1338C51.0457 35.6218 50.6497 36.8818 49.8577 37.9138C49.0897 38.9218 48.0578 39.5938 46.7618 39.9298ZM37.6898 37.4458H40.7858C41.5058 37.4458 42.0338 37.3018 42.3698 37.0138C42.7298 36.7258 42.9098 36.2818 42.9098 35.6818C42.9098 35.0578 42.7298 34.6018 42.3698 34.3138C42.0338 34.0018 41.5058 33.8458 40.7858 33.8458H37.6898V37.4458ZM41.3258 46.5898C42.0458 46.5898 42.5738 46.4578 42.9098 46.1938C43.2698 45.9058 43.4498 45.4498 43.4498 44.8258C43.4498 43.6018 42.7418 42.9898 41.3258 42.9898H37.6898V46.5898H41.3258Z",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M53.6411 40.2178C53.6411 37.6978 54.1451 35.4538 55.1531 33.4858C56.1851 31.5178 57.6491 29.9938 59.5451 28.9138C61.4411 27.8098 63.6731 27.2578 66.2411 27.2578C68.4491 27.2578 70.4171 27.6778 72.1451 28.5178C73.8971 29.3338 75.3131 30.4978 76.3931 32.0098C77.4971 33.5218 78.2291 35.2858 78.5891 37.3018H70.1651C69.7811 36.4618 69.2291 35.8138 68.5091 35.3578C67.8131 34.8778 67.0091 34.6378 66.0971 34.6378C64.7531 34.6378 63.6851 35.1418 62.8931 36.1498C62.1251 37.1578 61.7411 38.5138 61.7411 40.2178C61.7411 41.9218 62.1251 43.2778 62.8931 44.2858C63.6851 45.2938 64.7531 45.7978 66.0971 45.7978C67.0091 45.7978 67.8131 45.5698 68.5091 45.1138C69.2291 44.6338 69.7811 43.9738 70.1651 43.1338H78.5891C78.2291 45.1498 77.4971 46.9138 76.3931 48.4258C75.3131 49.9378 73.8971 51.1138 72.1451 51.9538C70.4171 52.7698 68.4491 53.1778 66.2411 53.1778C63.6731 53.1778 61.4411 52.6378 59.5451 51.5578C57.6491 50.4538 56.1851 48.9178 55.1531 46.9498C54.1451 44.9818 53.6411 42.7378 53.6411 40.2178Z",
            fill: color
          })]
        });

      case 'ContrastedCollar':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M10.8828 21.8277C19.7652 10.554 63.152 12.2624 68.6181 21.8277L50.5118 40.2757H34.7968L10.8828 21.8277Z",
            fill: "white",
            stroke: color,
            "stroke-width": "2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M51.1943 50.1842C42.3072 52.3584 37.4634 52.2379 28.9884 50.1842L25.2305 49.1593C26.8247 44.832 30.2663 35.9188 30.3549 36.1774C30.7561 37.3485 42.9195 37.5911 48.8029 36.1774L51.1943 50.1842Z",
            fill: "white",
            stroke: color,
            "stroke-width": "2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M18.7398 65.8983L37.5294 36.8598C26.1925 31.9747 20.2698 28.7667 10.8824 21.8281C6.96313 28.6599 5.06915 33.4529 2 43.0091C7.05562 55.9555 10.965 60.3099 18.7398 65.8983Z",
            fill: "white",
            stroke: color,
            "stroke-width": "2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M60.7602 65.8983L41.9706 36.8598C53.3075 31.9747 60.4186 29.6856 68.6176 21.8281C72.5369 28.6599 74.4309 33.4529 77.5 43.0091C72.4444 55.9555 68.535 60.3099 60.7602 65.8983Z",
            fill: "white",
            stroke: color,
            "stroke-width": "2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("mask", {
            id: "mask0",
            "mask-type": "alpha",
            maskUnits: "userSpaceOnUse",
            x: "40",
            y: "20",
            width: "39",
            height: "48",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M60.7602 66.0701L41.9706 37.0317C53.3075 32.1466 60.4186 29.8575 68.6176 22C72.5369 28.8318 74.4309 33.6247 77.5 43.181C72.4444 56.1274 68.535 60.4818 60.7602 66.0701Z",
              fill: "white",
              stroke: color,
              "stroke-width": "2"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
            mask: "url(#mask0)",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M68.5492 99.0884C66.7749 88.7272 66.3322 31.1311 68.5491 -3",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M41.0257 99.0884C39.2515 88.7272 38.8087 31.1311 41.0257 -3",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M54.5374 99.0884C52.7632 88.7272 52.3204 31.1311 54.5374 -3",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M75.555 99.0884C73.7808 88.7272 73.338 31.1311 75.555 -3",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M48.0316 99.0884C46.2573 88.7272 45.8146 31.1311 48.0316 -3",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M61.5433 99.0884C59.769 88.7272 59.3263 31.1311 61.5433 -3",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M72.0521 99.088C70.2778 87.8633 69.8351 25.4675 72.0521 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M44.5286 99.088C42.7544 87.8633 42.3116 25.4675 44.5286 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M58.0404 99.088C56.2661 87.8633 55.8234 25.4675 58.0403 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M79.0589 99.088C77.2847 87.8633 76.8419 25.4675 79.0589 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M51.5345 99.088C49.7602 87.8633 49.3175 25.4675 51.5345 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M65.0462 99.088C63.272 87.8633 62.8292 25.4675 65.0462 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M70.0511 99.0884C68.2768 88.7272 67.8341 31.1311 70.0511 -3",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M42.5267 99.0884C40.7524 88.7272 40.3097 31.1311 42.5267 -3",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M56.0384 99.0884C54.2642 88.7272 53.8214 31.1311 56.0384 -3",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M77.5574 99.0884C75.1917 88.7272 74.6014 31.1311 77.5574 -3",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M50.033 99.0884C47.6673 88.7272 47.077 31.1311 50.033 -3",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M63.5447 99.0884C61.179 88.7272 60.5887 31.1311 63.5447 -3",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M74.0545 99.088C71.6888 87.8633 71.0985 25.4675 74.0544 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M46.5301 99.088C44.1644 87.8633 43.5741 25.4675 46.53 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M60.0418 99.088C57.6761 87.8633 57.0858 25.4675 60.0417 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M53.5359 99.088C51.1702 87.8633 50.5799 25.4675 53.5359 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M67.0476 99.088C64.682 87.8633 64.0916 25.4675 67.0476 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("mask", {
            id: "mask1",
            "mask-type": "alpha",
            maskUnits: "userSpaceOnUse",
            x: "0",
            y: "20",
            width: "40",
            height: "48",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M18.7398 66.0701L37.5294 37.0317C26.1925 32.1466 20.2698 28.9386 10.8824 22C6.96313 28.8318 5.06915 33.6247 2 43.181C7.05562 56.1274 10.965 60.4818 18.7398 66.0701Z",
              fill: "white",
              stroke: color,
              "stroke-width": "2"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
            mask: "url(#mask1)",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M40.0501 99.0845C38.2759 88.7233 37.8331 31.1271 40.0501 -3.00391",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M12.5267 99.0845C10.7524 88.7233 10.3097 31.1271 12.5267 -3.00391",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M26.0384 99.0845C24.2642 88.7233 23.8214 31.1271 26.0384 -3.00391",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M19.5326 99.0845C17.7583 88.7233 17.3156 31.1271 19.5325 -3.00391",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M5.52083 99.0845C3.74657 88.7233 3.30383 31.1271 5.52081 -3.00391",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M33.0443 99.0845C31.27 88.7233 30.8273 31.1271 33.0442 -3.00391",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M16.0296 99.088C14.2554 87.8633 13.8126 25.4675 16.0296 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M2.01693 99.088C0.242668 87.8633 -0.200073 25.4675 2.0169 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M29.5413 99.088C27.7671 87.8633 27.3243 25.4675 29.5413 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M23.0355 99.088C21.2612 87.8633 20.8185 25.4675 23.0355 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M9.02376 99.088C7.2495 87.8633 6.80676 25.4675 9.02374 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M36.5472 99.088C34.7729 87.8633 34.3302 25.4675 36.5472 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M14.0277 99.0845C12.2534 88.7233 11.8107 31.1271 14.0276 -3.00391",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M27.5394 99.0845C25.7651 88.7233 25.3224 31.1271 27.5394 -3.00391",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M21.534 99.0845C19.1683 88.7233 18.578 31.1271 21.5339 -3.00391",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M7.52224 99.0845C5.15657 88.7233 4.56624 31.1271 7.52221 -3.00391",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M35.0457 99.0845C32.68 88.7233 32.0897 31.1271 35.0456 -3.00391",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M18.031 99.088C15.6654 87.8633 15.075 25.4675 18.031 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M4.01931 99.088C1.65364 87.8633 1.06331 25.4675 4.01928 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M31.5427 99.088C29.1771 87.8633 28.5868 25.4675 31.5427 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M25.0369 99.088C22.6712 87.8633 22.0809 25.4675 25.0369 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M11.0252 99.088C8.6595 87.8633 8.06917 25.4675 11.0251 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M38.5486 99.088C36.1829 87.8633 35.5926 25.4675 38.5486 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "40.1186",
            cy: "45.7251",
            r: "1.21336",
            fill: color,
            stroke: color,
            "stroke-width": "2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M30.5273 33.4939C38.1142 31.7316 42.3218 31.8041 49.7098 33.4939",
            stroke: color,
            "stroke-width": "2"
          })]
        });

      case 'CustomizeCuffs':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("mask", {
            id: "mask0",
            "mask-type": "alpha",
            maskUnits: "userSpaceOnUse",
            x: "6",
            y: "31",
            width: "43",
            height: "43",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M29.5 62.0012C20 50.5012 12.5 45.5012 7 49.0012L24 32.0012C36.5 30.5012 48.5 44.001 47.5 57.5012L33 72.0012C33.8493 67.5567 33.4821 65.0408 31 60.5012L29.5 62.0012Z",
              fill: color,
              stroke: color
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
            mask: "url(#mask0)",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M29.5267 108.088C27.7524 97.7272 27.3097 40.1311 29.5267 6",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M15.514 108.088C13.7397 97.7272 13.297 40.1311 15.514 6",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M43.0384 108.088C41.2642 97.7272 40.8214 40.1311 43.0384 6",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M9.00911 108.088C7.23486 97.7272 6.79211 40.1311 9.00909 6",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M36.5326 108.088C34.7583 97.7272 34.3156 40.1311 36.5325 6",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M22.5208 108.088C20.7466 97.7272 20.3038 40.1311 22.5208 6",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M33.0296 108.088C31.2554 96.8633 30.8126 34.4675 33.0296 -2.50781",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M19.0169 108.088C17.2427 96.8633 16.7999 34.4675 19.0169 -2.50781",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M46.5413 108.088C44.7671 96.8633 44.3243 34.4675 46.5413 -2.50781",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M12.512 108.088C10.7378 96.8633 10.295 34.4675 12.512 -2.50781",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M40.0355 108.088C38.2612 96.8633 37.8185 34.4675 40.0355 -2.50781",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M26.0238 108.088C24.2495 96.8633 23.8068 34.4675 26.0237 -2.50781",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M31.0277 108.088C29.2534 97.7272 28.8107 40.1311 31.0276 6",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M17.0159 108.088C15.2417 97.7272 14.799 40.1311 17.0159 6",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M44.5394 108.088C42.7651 97.7272 42.3224 40.1311 44.5394 6",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M11.0105 108.088C8.64485 97.7272 8.05452 40.1311 11.0105 6",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M38.534 108.088C36.1683 97.7272 35.578 40.1311 38.5339 6",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M24.5222 108.088C22.1566 97.7272 21.5662 40.1311 24.5222 6",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M7.50759 108.088C5.14192 96.8633 4.5516 34.4675 7.50756 -2.50781",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M35.031 108.088C32.6654 96.8633 32.075 34.4675 35.031 -2.50781",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M21.0193 108.088C18.6536 96.8633 18.0633 34.4675 21.0193 -2.50781",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M48.5427 108.088C46.1771 96.8633 45.5868 34.4675 48.5427 -2.50781",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M14.5135 108.088C12.1478 96.8633 11.5575 34.4675 14.5134 -2.50781",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M42.0369 108.088C39.6712 96.8633 39.0809 34.4675 42.0369 -2.50781",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M28.0252 108.088C25.6595 96.8633 25.0692 34.4675 28.0251 -2.50781",
              stroke: color,
              "stroke-width": "0.5"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M6 49.8331L24.0567 31.7765C32.5834 31.2749 40.1071 36.2906 45.3736 46.0713",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M23.8057 31.7748C23.8057 31.5742 36.8466 14.8049 43.3671 6.44531",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M29.5742 32.0244C31.434 28.9334 32.6539 27.5276 35.0915 25.5039",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M44.8721 44.5645C51.4197 37.2566 56.0296 34.4119 63.1795 27.7617C56.7555 35.5372 53.097 39.8142 45.6244 46.0692",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M47.3799 50.3329C49.8279 48.5236 51.1539 47.4702 52.8972 45.0664",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M47.3799 56.8529C49.773 56.6586 66.9308 40.396 74.4649 31.5234",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M29.5741 62.122L31.3296 60.3665C34.3493 66.1425 34.8408 69.3951 31.3297 73.6585C20.0444 76.9187 2.99059 56.1027 6.50171 49.5822C10.5145 45.5698 19.3695 48.7335 29.5741 62.122Z",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M45.3732 46.3203L31.3291 60.3644C33.2361 64.1299 33.6643 66.6441 33.5862 71.6498L47.6303 56.8534C48.1153 51.9148 47.6029 49.599 45.3732 46.3203Z",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M32.1321 51.2073C31.8284 51.9447 30.8264 52.389 29.786 51.9605C28.7457 51.532 28.3473 50.5108 28.651 49.7734C28.9547 49.0361 29.9567 48.5917 30.9971 49.0202C32.0374 49.4487 32.4358 50.4699 32.1321 51.2073Z",
            fill: color,
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "27.2994",
            y: "47.9844",
            width: "0.250787",
            height: "8.36908",
            transform: "rotate(-45 27.2994 47.9844)",
            fill: color,
            stroke: color,
            "stroke-width": "0.250787"
          })]
        });

      case 'Buttons':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "38",
            y: "11",
            width: "4",
            height: "57",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "39.653",
            cy: "39.1715",
            r: "19.3473",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "39.653",
            cy: "39.1715",
            r: "19.3473",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("mask", {
            id: "mask0",
            "mask-type": "alpha",
            maskUnits: "userSpaceOnUse",
            x: "12",
            y: "12",
            width: "55",
            height: "54",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
              cx: "39.6525",
              cy: "39.1704",
              r: "19.3473",
              transform: "rotate(33.6142 39.6525 39.1704)",
              fill: "white"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
            mask: "url(#mask0)",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-19.6056 65.7217C-15.3472 56.1109 16.1692 7.90063 36.9104 -19.2958",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M26.2372 96.1964C30.4956 86.5855 62.012 38.3752 82.7532 11.1788",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M3.3163 80.9581C7.57468 71.3472 39.0911 23.137 59.8323 -4.05952",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-8.35264 73.2003C-4.09426 63.5894 27.4222 15.3791 48.1633 -11.8173",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M37.4901 103.677C41.7485 94.0659 73.2649 45.8557 94.0061 18.6592",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M14.5692 88.4385C18.8276 78.8277 50.344 30.6174 71.0852 3.42095",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-13.7706 69.6007C-9.51223 59.9898 22.0042 11.7795 42.7454 -15.4169",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M32.0722 100.075C36.3305 90.4644 67.847 42.2541 88.5881 15.0577",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M9.15126 84.837C13.4096 75.2261 44.9261 27.0159 65.6672 -0.180613",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-2.51768 77.0792C1.7407 67.4683 33.2571 19.258 53.9983 -7.93843",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M20.4032 92.3174C24.6616 82.7066 56.178 34.4963 76.9192 7.29986",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-16.6883 67.6601C-11.9519 57.3301 22.2216 5.12279 44.5373 -24.4423",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M29.1545 98.1327C33.8909 87.8028 68.0644 35.5954 90.3801 6.03032",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M6.23359 82.8983C10.97 72.5684 45.1435 20.3611 67.4592 -9.20405",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-5.43536 75.1405C-0.698981 64.8106 33.4745 12.6033 55.7903 -16.9619",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M17.4865 90.3788C22.2229 80.0489 56.3964 27.8415 78.7122 -1.72358",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-10.8523 71.539C-6.11597 61.209 28.0576 9.0017 50.3733 -20.5634",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M34.9904 102.012C39.7268 91.6817 73.9003 39.4744 96.2161 9.90923",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M12.0686 86.7772C16.8049 76.4473 50.9785 24.24 73.2942 -5.32514",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M0.399606 79.0194C5.13598 68.6895 39.3095 16.4822 61.6252 -13.083",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M23.3205 94.2538C28.0569 83.9239 62.2304 31.7165 84.5461 2.15142",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-18.3546 66.5518C-14.0962 56.9409 17.4202 8.7307 38.1614 -18.4658",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M27.4882 97.0284C31.7466 87.4175 63.263 39.2073 84.0041 12.0108",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M4.5663 81.7901C8.82468 72.1792 40.3411 23.969 61.0823 -3.22749",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-7.10264 74.0323C-2.84426 64.4214 28.6722 16.2112 49.4133 -10.9853",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M38.7411 104.505C42.9995 94.8941 74.5159 46.6838 95.2571 19.4874",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M15.8192 89.2706C20.0776 79.6597 51.594 31.4495 72.3352 4.25298",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-12.1039 70.7078C-8.338 60.7695 23.0555 12.4775 44.4121 -14.3098",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M33.7399 101.18C37.5057 91.2421 68.8993 42.9502 90.2559 16.1628",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M10.818 85.946C14.5839 76.0078 45.9774 27.7158 67.334 0.928453",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-0.85093 78.1882C2.91492 68.25 34.3085 19.958 55.665 -6.82936",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M22.07 93.4265C25.8358 83.4882 57.2294 35.1963 78.5859 8.40892",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-15.0206 68.7691C-10.7767 58.1118 23.2739 5.82275 46.2051 -23.3333",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M30.8222 99.2418C35.0661 88.5844 69.1167 36.2954 92.0478 7.13939",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M7.90034 84.0035C12.1442 73.3462 46.1948 21.0571 69.126 -8.09889",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-3.7686 76.2496C0.475248 65.5923 34.5259 13.3032 57.457 -15.8528",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M19.1533 91.484C23.3971 80.8266 57.4477 28.5376 80.3789 -0.618422",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-9.18657 72.648C-4.94272 61.9907 29.1079 9.70166 52.0391 -19.4544",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M36.6572 103.121C40.901 92.4634 74.9517 40.1743 97.8828 11.0183",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M13.7353 87.8824C17.9792 77.2251 52.0298 24.936 74.9609 -4.21998",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M2.06636 80.1285C6.31021 69.4712 40.3608 17.1821 63.292 -11.9739",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M24.9873 95.3629C29.2311 84.7055 63.2817 32.4165 86.2129 3.26048",
              stroke: color,
              "stroke-width": "0.5"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
            cx: "39.3646",
            cy: "32.7172",
            rx: "2.24252",
            ry: "2.80315",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
            cx: "33.2016",
            cy: "38.8871",
            rx: "2.80315",
            ry: "2.24252",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "39.3646",
            cy: "45.6136",
            r: "2.24252",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "46.0941",
            cy: "38.8871",
            r: "2.24252",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M39.653 58.5191C28.9848 58.5191 20.3057 49.8398 20.3057 39.1716C20.3057 28.5033 28.9848 19.8242 39.653 19.8242C50.3212 19.8242 59.0003 28.5033 59.0003 39.1716C59.0003 49.8398 50.321 58.5191 39.653 58.5191ZM39.653 20.7941C29.5195 20.7941 21.2753 29.0383 21.2753 39.1716C21.2753 49.305 29.5193 57.5492 39.6528 57.5492C49.7863 57.5492 58.0303 49.305 58.0303 39.1716C58.0305 29.0383 49.7863 20.7941 39.653 20.7941ZM39.653 53.6338C31.6786 53.6338 25.1909 47.1462 25.1909 39.1716C25.1909 31.1973 31.6786 24.7095 39.653 24.7095C47.6274 24.7095 54.115 31.1971 54.115 39.1716C54.115 47.146 47.6272 53.6338 39.653 53.6338ZM39.653 25.6795C32.2134 25.6795 26.1608 31.7321 26.1608 39.1717C26.1608 46.6114 32.2134 52.6642 39.653 52.6642C47.0926 52.6642 53.1452 46.6116 53.1452 39.1717C53.1452 31.7321 47.0926 25.6795 39.653 25.6795ZM39.653 48.6426C38.0312 48.6426 36.7119 47.3232 36.7119 45.7015C36.7119 44.0797 38.0312 42.7602 39.653 42.7602C41.2748 42.7602 42.5941 44.0797 42.5941 45.7015C42.5941 47.3232 41.2746 48.6426 39.653 48.6426ZM39.653 43.73C38.566 43.73 37.6817 44.6145 37.6817 45.7015C37.6817 46.7885 38.566 47.6728 39.653 47.6728C40.74 47.6728 41.6243 46.7883 41.6243 45.7015C41.6243 44.6145 40.74 43.73 39.653 43.73ZM46.1827 42.1127C44.561 42.1127 43.2416 40.7933 43.2416 39.1716C43.2416 37.5498 44.561 36.2304 46.1827 36.2304C47.8045 36.2304 49.1241 37.5498 49.1241 39.1716C49.1241 40.7933 47.8045 42.1127 46.1827 42.1127ZM46.1827 37.2003C45.0957 37.2003 44.2114 38.0847 44.2114 39.1716C44.2114 40.2584 45.0957 41.1428 46.1827 41.1428C47.2697 41.1428 48.1542 40.2584 48.1542 39.1716C48.1542 38.0847 47.2697 37.2003 46.1827 37.2003ZM33.1233 42.1127C31.5015 42.1127 30.1821 40.7933 30.1821 39.1716C30.1821 37.5498 31.5015 36.2304 33.1233 36.2304C34.745 36.2304 36.0644 37.5498 36.0644 39.1716C36.0644 40.7933 34.7448 42.1127 33.1233 42.1127ZM33.1233 37.2003C32.0363 37.2003 31.152 38.0847 31.152 39.1716C31.152 40.2584 32.0363 41.1428 33.1233 41.1428C34.2103 41.1428 35.0946 40.2584 35.0946 39.1716C35.0946 38.0847 34.2103 37.2003 33.1233 37.2003ZM39.653 35.583C38.0312 35.583 36.7119 34.2636 36.7119 32.6418C36.7119 31.02 38.0312 29.7007 39.653 29.7007C41.2748 29.7007 42.5941 31.02 42.5941 32.6418C42.5941 34.2636 41.2746 35.583 39.653 35.583ZM39.653 30.6705C38.566 30.6705 37.6817 31.555 37.6817 32.6418C37.6817 33.7286 38.566 34.6131 39.653 34.6131C40.74 34.6131 41.6243 33.7286 41.6243 32.6418C41.6243 31.555 40.74 30.6705 39.653 30.6705Z",
            fill: color
          })]
        });

      case 'ElbowPatches':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M62.7288 66.183L22.4068 42.4033L10 19.1406",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("mask", {
            id: "mask0",
            "mask-type": "alpha",
            maskUnits: "userSpaceOnUse",
            x: "16",
            y: "30",
            width: "16",
            height: "18",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M31.712 47.9191C28.6534 35.1513 24.8022 32.2008 16.0312 30.6875L22.407 42.405L31.712 47.9191Z",
              fill: "#C4C4C4"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
            mask: "url(#mask0)",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M31.712 47.9191C28.6534 35.1513 24.8022 32.2008 16.0312 30.6875L22.407 42.405L31.712 47.9191Z",
              stroke: color,
              "stroke-width": "1.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M31.0399 58.4604C30.4284 54.8895 30.2758 35.04 31.0399 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M21.5545 58.4604C20.943 54.8895 20.7905 35.04 21.5545 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M16.7254 58.4604C16.1139 54.8895 15.9614 35.04 16.7254 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M26.2108 58.4604C25.5993 54.8895 25.4467 35.04 26.2107 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M23.9686 58.4604C23.3571 54.8895 23.2045 35.04 23.9686 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M19.1395 58.4604C18.528 54.8895 18.3754 35.04 19.1395 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M28.6258 58.4604C28.0143 54.8895 27.8617 35.04 28.6258 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M32.2469 58.4587C31.6354 54.5903 31.4828 33.0867 32.2469 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M22.7615 58.4587C22.1501 54.5903 21.9975 33.0867 22.7615 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M17.9324 58.4587C17.321 54.5903 17.1684 33.0867 17.9324 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M27.4178 58.4587C26.8063 54.5903 26.6537 33.0867 27.4178 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M25.1756 58.4587C24.5641 54.5903 24.4116 33.0867 25.1756 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M20.3475 58.4587C19.736 54.5903 19.5834 33.0867 20.3475 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M29.8328 58.4587C29.2214 54.5903 29.0688 33.0867 29.8328 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M31.5574 58.4604C30.946 54.8895 30.7934 35.04 31.5574 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M22.0721 58.4604C21.4606 54.8895 21.308 35.04 22.0721 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M17.243 58.4604C16.6315 54.8895 16.4789 35.04 17.243 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M26.7283 58.4604C26.1169 54.8895 25.9643 35.04 26.7283 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M24.6586 58.4604C23.8433 54.8895 23.6399 35.04 24.6586 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M19.8295 58.4604C19.0142 54.8895 18.8108 35.04 19.8295 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M29.3149 58.4604C28.4996 54.8895 28.2961 35.04 29.3149 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M23.4516 58.4587C22.6363 54.5903 22.4328 33.0867 23.4516 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M18.6225 58.4587C17.8072 54.5903 17.6037 33.0867 18.6225 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M28.1078 58.4587C27.2925 54.5903 27.0891 33.0867 28.1078 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M16.3803 58.4587C15.565 54.5903 15.3616 33.0867 16.3803 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M25.8656 58.4587C25.0504 54.5903 24.8469 33.0867 25.8656 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M21.0365 58.4587C20.2213 54.5903 20.0178 33.0867 21.0365 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M30.5229 58.4587C29.7076 54.5903 29.5041 33.0867 30.5229 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M70.9996 54.6384L35.6748 32.7543L26.542 14.3164",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M62.5566 66.0105C63.3492 58.4842 64.741 55.3823 71.0001 54.293C70.562 61.1449 68.5331 63.568 62.5566 66.0105Z",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M53.5957 61.1871C54.9853 54.3719 56.3992 51.3325 61.5223 49.125",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M54.1128 58.4293L52.3896 57.3954L52.7343 57.0508L54.2851 58.0847",
            stroke: color,
            "stroke-width": "0.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M47.5654 52.399L63.4185 61.8764V60.6702L47.9101 51.7097L47.5654 52.399Z",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M55.1474 49.4696L57.7321 51.0205L58.0767 50.6758L55.492 49.125L55.1474 49.4696Z",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M47.5654 52.399L63.4185 61.8764V60.6702L47.9101 51.7097L47.5654 52.399Z",
            stroke: color,
            "stroke-width": "0.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M55.1474 49.4696L57.7321 51.0205L58.0767 50.6758L55.492 49.125L55.1474 49.4696Z",
            stroke: color,
            "stroke-width": "0.5"
          })]
        });

      case 'Threads':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "38",
            y: "11",
            width: "4",
            height: "57",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "39.653",
            cy: "39.1715",
            r: "19.3473",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "39.653",
            cy: "39.1715",
            r: "19.3473",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
            cx: "39.3646",
            cy: "32.7211",
            rx: "2.24252",
            ry: "2.80315",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
            cx: "33.2026",
            cy: "38.8871",
            rx: "2.80315",
            ry: "2.24252",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "39.3646",
            cy: "45.6136",
            r: "2.24252",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "46.0941",
            cy: "38.8871",
            r: "2.24252",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M39.653 58.5191C28.9848 58.5191 20.3057 49.8398 20.3057 39.1716C20.3057 28.5033 28.9848 19.8242 39.653 19.8242C50.3212 19.8242 59.0003 28.5033 59.0003 39.1716C59.0003 49.8398 50.321 58.5191 39.653 58.5191ZM39.653 20.7941C29.5195 20.7941 21.2753 29.0383 21.2753 39.1716C21.2753 49.305 29.5193 57.5492 39.6528 57.5492C49.7863 57.5492 58.0303 49.305 58.0303 39.1716C58.0305 29.0383 49.7863 20.7941 39.653 20.7941ZM39.653 53.6338C31.6786 53.6338 25.1909 47.1462 25.1909 39.1716C25.1909 31.1973 31.6786 24.7095 39.653 24.7095C47.6274 24.7095 54.115 31.1971 54.115 39.1716C54.115 47.146 47.6272 53.6338 39.653 53.6338ZM39.653 25.6795C32.2134 25.6795 26.1608 31.7321 26.1608 39.1717C26.1608 46.6114 32.2134 52.6642 39.653 52.6642C47.0926 52.6642 53.1452 46.6116 53.1452 39.1717C53.1452 31.7321 47.0926 25.6795 39.653 25.6795ZM39.653 48.6426C38.0312 48.6426 36.7119 47.3232 36.7119 45.7015C36.7119 44.0797 38.0312 42.7602 39.653 42.7602C41.2748 42.7602 42.5941 44.0797 42.5941 45.7015C42.5941 47.3232 41.2746 48.6426 39.653 48.6426ZM39.653 43.73C38.566 43.73 37.6817 44.6145 37.6817 45.7015C37.6817 46.7885 38.566 47.6728 39.653 47.6728C40.74 47.6728 41.6243 46.7883 41.6243 45.7015C41.6243 44.6145 40.74 43.73 39.653 43.73ZM46.1827 42.1127C44.561 42.1127 43.2416 40.7933 43.2416 39.1716C43.2416 37.5498 44.561 36.2304 46.1827 36.2304C47.8045 36.2304 49.1241 37.5498 49.1241 39.1716C49.1241 40.7933 47.8045 42.1127 46.1827 42.1127ZM46.1827 37.2003C45.0957 37.2003 44.2114 38.0847 44.2114 39.1716C44.2114 40.2584 45.0957 41.1428 46.1827 41.1428C47.2697 41.1428 48.1542 40.2584 48.1542 39.1716C48.1542 38.0847 47.2697 37.2003 46.1827 37.2003ZM33.1233 42.1127C31.5015 42.1127 30.1821 40.7933 30.1821 39.1716C30.1821 37.5498 31.5015 36.2304 33.1233 36.2304C34.745 36.2304 36.0644 37.5498 36.0644 39.1716C36.0644 40.7933 34.7448 42.1127 33.1233 42.1127ZM33.1233 37.2003C32.0363 37.2003 31.152 38.0847 31.152 39.1716C31.152 40.2584 32.0363 41.1428 33.1233 41.1428C34.2103 41.1428 35.0946 40.2584 35.0946 39.1716C35.0946 38.0847 34.2103 37.2003 33.1233 37.2003ZM39.653 35.583C38.0312 35.583 36.7119 34.2636 36.7119 32.6418C36.7119 31.02 38.0312 29.7007 39.653 29.7007C41.2748 29.7007 42.5941 31.02 42.5941 32.6418C42.5941 34.2636 41.2746 35.583 39.653 35.583ZM39.653 30.6705C38.566 30.6705 37.6817 31.555 37.6817 32.6418C37.6817 33.7286 38.566 34.6131 39.653 34.6131C40.74 34.6131 41.6243 33.7286 41.6243 32.6418C41.6243 31.555 40.74 30.6705 39.653 30.6705Z",
            fill: color
          })]
        });

      default:
        return false;
    }
  } else if (category === "batiks") {
    switch (icon) {
      case 'Bottom':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            width: width,
            height: height,
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M75.8736 14.5664C76.0322 17.8012 76.25 21.1061 76.6395 24.3816C77.6531 32.9046 77.0353 39.089 76.0149 49.3047L76.0149 49.3049C75.8559 50.8962 75.6872 52.5853 75.5134 54.3963C72.9415 52.8829 70.9807 52.9474 67.5619 53.838C67.0927 56.3331 66.6943 57.9034 66.0947 59.9015C67.4926 51.6623 66.4997 46.0697 64.9864 37.5454L64.9863 37.5452L64.9861 37.544C64.86 36.8337 64.7303 36.103 64.598 35.3487L64.5793 34.7079V34.7079V34.7078C64.4859 31.5057 64.4051 28.7377 64.2716 26.1479C65.4563 25.8175 66.4059 25.2827 67.279 24.7164C69.8345 23.5424 71.0562 22.6435 73.1785 20.9734C72.7212 21.26 72.3059 21.5265 71.9144 21.7776C70.2994 22.8139 69.0884 23.5908 66.9961 24.4544C66.8372 24.4588 66.6873 24.4622 66.5444 24.4654C65.6549 24.4856 65.0359 24.4996 64.1906 24.7107C63.981 21.3014 63.6534 18.1283 63.0479 14.5664H75.8736ZM60.9381 14.5664C58.7285 24.0636 58.5091 30.9009 59.143 42.1235C54.6172 43.1716 47.5493 43.4772 39.2625 43.5084C38.6391 43.5459 38.0087 43.5705 37.3495 43.5807C38.5376 34.8154 38.0946 26.8168 37.6037 17.9543L37.5471 16.9298C37.5041 16.1496 37.4612 15.3622 37.4194 14.5664H60.9381ZM36.6683 14.5664C36.7108 15.3765 36.7545 16.1777 36.7982 16.9711L36.8535 17.9718C37.3473 26.8885 37.7882 34.8519 36.5919 43.5861C32.787 43.5812 27.8429 43.1113 18.0484 41.899C18.3826 37.9932 19.089 34.7959 19.7456 31.8237C20.9611 26.3217 22.0062 21.5911 20.2045 14.5664H36.6683ZM18.3796 14.5664C18.1365 15.5775 17.8807 16.5593 17.6166 17.5732L17.6166 17.5732C16.9045 20.307 16.1317 23.2739 15.3814 27.6755C15.1467 35.6952 14.3278 39.5499 13.339 44.2047L13.3389 44.2049L13.3388 44.2054L13.3387 44.2058C12.7954 46.7634 12.2007 49.5628 11.6235 53.4274C11.6839 53.7366 11.7463 54.0355 11.8107 54.3263C9.12954 53.0775 7.20422 53.3011 4.20264 55.0346L4.61176 62.5796C4.35727 62.7651 4.15749 62.9705 4.02701 63.1967L3.09763 54.7001C1.65516 43.9373 2.78873 34.2165 4.31114 21.1613L4.35027 20.8258C4.89062 19.0044 5.32504 16.8718 5.70737 14.5664H18.3796ZM64.302 24.7154L64.1909 24.7163C64.2191 25.1753 64.2452 25.6385 64.2695 26.1076L64.6121 25.8768L65.0566 25.5773L65.6627 24.9036C65.215 24.7072 64.8186 24.7107 64.302 24.7154ZM13.8724 61.1659C13.9302 61.3406 13.9888 61.5183 14.0481 61.6995C14.0171 61.6739 13.9813 61.6492 13.9409 61.6254C13.9169 61.4689 13.894 61.316 13.8724 61.1659ZM74.979 62.6004C73.3092 61.4699 68.5021 60.679 65.7777 61.611C65.7618 61.6902 65.7458 61.7696 65.7295 61.8492C69.4263 60.994 71.4699 60.9207 74.9424 63.1967L74.979 62.6004ZM11.6971 48.7498C11.4385 49.169 7.73712 52.4244 6.52489 52.4554L4.18125 53.1291L7.57549 52.4554L10.8889 51.8191L8.58569 52.0437L10.3636 50.3967L11.4546 49.461L11.6971 48.7498ZM73.7224 43.808C72.7043 44.2598 70.8129 45.5917 70.6918 45.9415C72.0578 45.0608 72.6997 44.7289 73.4395 44.6689C74.1691 44.8856 75.0993 45.8065 75.3003 46.0688L75.2569 45.9888C75.0219 45.5549 74.3317 44.2806 73.7224 43.808ZM75.3387 46.1287C75.3452 46.1487 75.3313 46.1253 75.3003 46.0688C75.3218 46.0969 75.335 46.1174 75.3387 46.1287ZM74.8538 29.0606C74.6027 28.9288 73.6824 28.2886 73.7224 28.2372C73.8323 28.0957 69.2685 29.2308 67.1763 29.8092C69.7049 28.7243 71.1917 28.2814 73.9244 27.7131C74.4888 27.691 74.6367 27.9238 74.8942 28.3495C74.6837 28.1634 74.5657 28.0607 74.3285 28.2372C74.3243 28.5647 74.4873 28.7166 74.714 28.9279L74.7141 28.9279C74.7585 28.9693 74.8053 29.0129 74.8538 29.0606ZM9.05154 24.2672C10.2503 25.49 12.7367 28.0552 13.0923 28.5343C13.2651 28.8544 13.5652 29.4408 13.7351 29.8597C13.5832 29.2745 13.3294 28.2207 13.1731 27.5611L9.77888 24.0052L14.5874 22.8075L7.07156 23.7807L9.05154 24.2672ZM13.86 30.2561C13.8715 30.3625 13.8188 30.1822 13.7351 29.8597C13.8035 30.0285 13.8508 30.1701 13.86 30.2561Z",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M76.6395 24.3816L76.143 24.4407L76.6395 24.3816ZM75.8736 14.5664V14.0664H76.3497L76.373 14.5419L75.8736 14.5664ZM76.0149 49.3047L75.5173 49.2559L75.5174 49.255L76.0149 49.3047ZM76.0149 49.3049L76.5125 49.3537L76.5124 49.3546L76.0149 49.3049ZM75.5134 54.3963L76.0111 54.444L75.9361 55.2251L75.2598 54.8272L75.5134 54.3963ZM67.5619 53.838L67.0705 53.7456L67.1291 53.434L67.4358 53.3541L67.5619 53.838ZM66.0947 59.9015L66.5736 60.0452L65.6017 59.8178L66.0947 59.9015ZM64.9864 37.5454L65.4784 37.4565L65.4787 37.458L64.9864 37.5454ZM64.9863 37.5452L64.4943 37.634L64.494 37.6327L64.9863 37.5452ZM64.9861 37.544L64.4938 37.6316L64.4938 37.6314L64.9861 37.544ZM64.598 35.3487L64.1056 35.435L64.0993 35.3994L64.0983 35.3633L64.598 35.3487ZM64.5793 34.7079L64.0795 34.7225L64.0793 34.7152V34.7079H64.5793ZM64.5793 34.7078L65.0791 34.6933L65.0793 34.7005V34.7078H64.5793ZM64.2716 26.1479L63.7722 26.1737L63.7516 25.7739L64.1372 25.6663L64.2716 26.1479ZM67.279 24.7164L67.0069 24.2969L67.0373 24.2772L67.0703 24.2621L67.279 24.7164ZM73.1785 20.9734L72.913 20.5498L73.4877 21.3664L73.1785 20.9734ZM71.9144 21.7776L72.1844 22.1985L71.9144 21.7776ZM66.9961 24.4544L67.1869 24.9166L67.1019 24.9517L67.01 24.9542L66.9961 24.4544ZM66.5444 24.4654L66.5557 24.9653L66.5444 24.4654ZM64.1906 24.7107L64.3117 25.1958L63.7284 25.3415L63.6915 24.7414L64.1906 24.7107ZM63.0479 14.5664L62.555 14.6502L62.4558 14.0664H63.0479V14.5664ZM59.143 42.1235L59.6422 42.0953L59.666 42.5157L59.2558 42.6106L59.143 42.1235ZM60.9381 14.5664V14.0664H61.5677L61.425 14.6797L60.9381 14.5664ZM39.2625 43.5084L39.2325 43.0093L39.2465 43.0085L39.2606 43.0085L39.2625 43.5084ZM37.3495 43.5807L37.3573 44.0807L36.776 44.0897L36.8541 43.5136L37.3495 43.5807ZM37.6037 17.9543L37.1045 17.982L37.1045 17.9819L37.6037 17.9543ZM37.5471 16.9298L37.0478 16.9575L37.0478 16.9574L37.5471 16.9298ZM37.4194 14.5664L36.9201 14.5926L36.8924 14.0664H37.4194V14.5664ZM36.6683 14.5664V14.0664H37.1428L37.1676 14.5402L36.6683 14.5664ZM36.7982 16.9711L36.299 16.9987L36.299 16.9986L36.7982 16.9711ZM36.8535 17.9718L36.3543 17.9994V17.9994L36.8535 17.9718ZM36.5919 43.5861L37.0872 43.6539L37.028 44.0866L36.5912 44.0861L36.5919 43.5861ZM18.0484 41.899L17.987 42.3952L17.5092 42.336L17.5503 41.8563L18.0484 41.899ZM19.7456 31.8237L20.2338 31.9315L19.7456 31.8237ZM20.2045 14.5664L19.7201 14.6906L19.56 14.0664H20.2045V14.5664ZM18.3796 14.5664V14.0664H19.0141L18.8658 14.6833L18.3796 14.5664ZM17.6166 17.5732L18.1005 17.6992L18.0963 17.7154L18.091 17.7313L17.6166 17.5732ZM17.6166 17.5732L17.1328 17.4472L17.137 17.431L17.1423 17.4151L17.6166 17.5732ZM15.3814 27.6755L14.8816 27.6609L14.8826 27.6259L14.8885 27.5915L15.3814 27.6755ZM13.339 44.2047L13.8282 44.3087L13.8252 44.3214L13.339 44.2047ZM13.3389 44.2049L12.8502 44.0986L12.8527 44.0882L13.3389 44.2049ZM13.3388 44.2054L13.8274 44.3116L13.8273 44.3122L13.3388 44.2054ZM13.3387 44.2058L12.8496 44.1019L12.8503 44.0989L13.3387 44.2058ZM11.6235 53.4274L11.1328 53.5233L11.1163 53.4388L11.129 53.3536L11.6235 53.4274ZM11.8107 54.3263L12.2989 54.2182L12.5178 55.2072L11.5996 54.7795L11.8107 54.3263ZM4.20264 55.0346L3.70337 55.0616L3.68675 54.7551L3.95258 54.6016L4.20264 55.0346ZM4.61176 62.5796L5.11103 62.5525L5.12573 62.8236L4.90632 62.9836L4.61176 62.5796ZM4.02701 63.1967L4.4601 63.4466L3.69618 64.7706L3.52998 63.2511L4.02701 63.1967ZM3.09763 54.7001L3.59335 54.6336L3.59467 54.6457L3.09763 54.7001ZM4.31114 21.1613L4.80778 21.2192L4.31114 21.1613ZM4.35027 20.8258L3.85363 20.7679L3.85863 20.725L3.87092 20.6836L4.35027 20.8258ZM5.70737 14.5664L5.21411 14.4846L5.28347 14.0664H5.70737V14.5664ZM64.1909 24.7163L63.6918 24.7469L63.6595 24.2207L64.1867 24.2163L64.1909 24.7163ZM64.302 24.7154L64.3065 25.2153L64.3062 25.2153L64.302 24.7154ZM64.2695 26.1076L64.5488 26.5223L63.8159 27.016L63.7701 26.1335L64.2695 26.1076ZM64.6121 25.8768L64.8915 26.2915H64.8915L64.6121 25.8768ZM65.0566 25.5773L65.4283 25.9117L65.3871 25.9576L65.3359 25.992L65.0566 25.5773ZM65.6627 24.9036L65.8636 24.4457L66.4971 24.7237L66.0344 25.238L65.6627 24.9036ZM14.0481 61.6995L14.5233 61.544L15.0603 63.1855L13.7294 62.0848L14.0481 61.6995ZM13.8724 61.1659L13.3775 61.2373L14.347 61.0087L13.8724 61.1659ZM13.9409 61.6254L13.6873 62.0563L13.4828 61.936L13.4467 61.7014L13.9409 61.6254ZM65.7777 61.611L65.2875 61.5127L65.344 61.2309L65.6159 61.1379L65.7777 61.611ZM74.979 62.6004L75.2593 62.1864L75.4955 62.3463L75.4781 62.631L74.979 62.6004ZM65.7295 61.8492L65.8421 62.3364L65.0835 62.5118L65.2396 61.749L65.7295 61.8492ZM74.9424 63.1967L75.4414 63.2273L75.3887 64.087L74.6683 63.6149L74.9424 63.1967ZM6.52489 52.4554L6.38675 51.9749L6.44819 51.9572L6.51209 51.9556L6.52489 52.4554ZM11.6971 48.7498L11.2715 48.4873L12.1703 48.9111L11.6971 48.7498ZM4.18125 53.1291L4.2786 53.6196L4.04311 52.6486L4.18125 53.1291ZM7.57549 52.4554L7.47814 51.965L7.48119 51.9644L7.57549 52.4554ZM10.8889 51.8191L10.8404 51.3214L10.9832 52.3101L10.8889 51.8191ZM8.58569 52.0437L8.63421 52.5413L7.15722 52.6853L8.2459 51.6769L8.58569 52.0437ZM10.3636 50.3967L10.0238 50.0299L10.0308 50.0234L10.0381 50.0172L10.3636 50.3967ZM11.4546 49.461L11.9279 49.6223L11.8838 49.7516L11.7801 49.8405L11.4546 49.461ZM70.6918 45.9415L70.9628 46.3618L69.7456 47.1465L70.2193 45.778L70.6918 45.9415ZM73.7224 43.808L73.5196 43.351L73.7927 43.2298L74.0288 43.4129L73.7224 43.808ZM73.4395 44.6689L73.3991 44.1706L73.4923 44.163L73.5819 44.1896L73.4395 44.6689ZM75.2569 45.9888L74.8175 46.2275L74.8172 46.2269L75.2569 45.9888ZM75.3387 46.1287L74.8631 46.2831L74.8631 46.2831L75.3387 46.1287ZM73.7224 28.2372L73.3276 27.9304L73.3276 27.9304L73.7224 28.2372ZM74.8538 29.0606L75.2043 28.7041L74.6214 29.5033L74.8538 29.0606ZM67.1763 29.8092L67.3096 30.2912L66.9792 29.3497L67.1763 29.8092ZM73.9244 27.7131L73.8226 27.2236L73.8633 27.2152L73.9048 27.2135L73.9244 27.7131ZM74.8942 28.3495L75.322 28.0907L74.563 28.7241L74.8942 28.3495ZM74.3285 28.2372L73.8285 28.2307L73.8317 27.9836L74.03 27.836L74.3285 28.2372ZM74.714 28.9279L75.0549 28.5621L75.0567 28.5638L74.714 28.9279ZM74.7141 28.9279L74.3732 29.2937L74.3714 29.292L74.7141 28.9279ZM13.0923 28.5343L13.4938 28.2363L13.5152 28.2652L13.5323 28.2968L13.0923 28.5343ZM9.05154 24.2672L9.17087 23.7817L9.30899 23.8156L9.40857 23.9172L9.05154 24.2672ZM13.1731 27.5611L13.5348 27.2159L13.6284 27.3139L13.6596 27.4458L13.1731 27.5611ZM9.77888 24.0052L9.4172 24.3505L8.82306 23.728L9.65802 23.5201L9.77888 24.0052ZM14.5874 22.8075L14.5232 22.3116L14.7082 23.2926L14.5874 22.8075ZM7.07156 23.7807L6.95223 24.2662L7.00735 23.2848L7.07156 23.7807ZM13.86 30.2561L14.3572 30.2024V30.2024L13.86 30.2561ZM76.143 24.4407C75.7515 21.1486 75.5331 17.8306 75.3742 14.5909L76.373 14.5419C76.5314 17.7718 76.7484 21.0637 77.136 24.3226L76.143 24.4407ZM75.5174 49.255C76.5382 39.0352 77.1493 32.9021 76.143 24.4407L77.136 24.3226C78.1569 32.907 77.5324 39.1429 76.5124 49.3544L75.5174 49.255ZM75.5173 49.2562L75.5173 49.2559L76.5125 49.3535L76.5125 49.3537L75.5173 49.2562ZM75.0157 54.3485C75.1896 52.5364 75.3584 50.8464 75.5174 49.2552L76.5124 49.3546C76.3534 50.946 76.1848 52.6342 76.0111 54.444L75.0157 54.3485ZM67.4358 53.3541C69.1573 52.9057 70.5625 52.6506 71.8801 52.7162C73.2133 52.7826 74.4242 53.1752 75.7669 53.9653L75.2598 54.8272C74.0307 54.1039 72.9751 53.772 71.8303 53.715C70.6698 53.6572 69.3852 53.8797 67.6879 54.3218L67.4358 53.3541ZM65.6158 59.7578C66.2105 57.7759 66.6047 56.2228 67.0705 53.7456L68.0533 53.9304C67.5807 56.4435 67.178 58.0309 66.5736 60.0452L65.6158 59.7578ZM65.4787 37.458C66.9919 45.9817 68.0015 51.6516 66.5876 59.9851L65.6017 59.8178C66.9836 51.6731 66.0075 46.1577 64.4941 37.6328L65.4787 37.458ZM65.4784 37.4563L65.4784 37.4565L64.4943 37.6342L64.4943 37.634L65.4784 37.4563ZM65.4784 37.4565L65.4786 37.4576L64.494 37.6327L64.4938 37.6316L65.4784 37.4565ZM65.0905 35.2623C65.2227 36.016 65.3523 36.7462 65.4784 37.4566L64.4938 37.6314C64.3677 36.9212 64.2379 36.1899 64.1056 35.435L65.0905 35.2623ZM65.0791 34.6933L65.0978 35.3341L64.0983 35.3633L64.0795 34.7225L65.0791 34.6933ZM65.0793 34.7079V34.7079H64.0793V34.7079H65.0793ZM65.0793 34.7078V34.7079H64.0793V34.7078H65.0793ZM64.7709 26.1222C64.9048 28.7186 64.9857 31.4925 65.0791 34.6933L64.0795 34.7224C63.9861 31.5189 63.9055 28.7568 63.7722 26.1737L64.7709 26.1222ZM67.5511 25.136C66.6593 25.7143 65.6608 26.2795 64.4059 26.6295L64.1372 25.6663C65.2518 25.3554 66.1525 24.851 67.0069 24.2969L67.5511 25.136ZM73.4877 21.3664C71.3516 23.0473 70.0945 23.9732 67.4877 25.1708L67.0703 24.2621C69.5745 23.1116 70.7608 22.2397 72.8693 20.5805L73.4877 21.3664ZM71.6444 21.3568C72.0357 21.1057 72.4531 20.838 72.913 20.5498L73.444 21.3971C72.9893 21.6821 72.5761 21.9472 72.1844 22.1985L71.6444 21.3568ZM66.8054 23.9923C68.8537 23.1468 70.0331 22.3906 71.6444 21.3568L72.1844 22.1985C70.5656 23.2371 69.3231 24.0349 67.1869 24.9166L66.8054 23.9923ZM66.5331 23.9656C66.6761 23.9623 66.8248 23.959 66.9823 23.9546L67.01 24.9542C66.8496 24.9587 66.6985 24.9621 66.5557 24.9653L66.5331 23.9656ZM64.0694 24.2256C64.9747 23.9995 65.6444 23.9857 66.5331 23.9656L66.5557 24.9653C65.6654 24.9855 65.0971 24.9997 64.3117 25.1958L64.0694 24.2256ZM63.5409 14.4826C64.1498 18.0652 64.4791 21.2564 64.6896 24.68L63.6915 24.7414C63.4828 21.3464 63.1569 18.1914 62.555 14.6502L63.5409 14.4826ZM63.0479 14.0664H75.8736V15.0664H63.0479V14.0664ZM58.6438 42.1517C58.0084 30.9019 58.227 24.013 60.4511 14.4531L61.425 14.6797C59.2301 24.1142 59.0098 30.8999 59.6422 42.0953L58.6438 42.1517ZM39.2606 43.0085C47.554 42.9772 54.5672 42.6699 59.0302 41.6364L59.2558 42.6106C54.6672 43.6732 47.5445 43.9773 39.2643 44.0084L39.2606 43.0085ZM37.3418 43.0808C37.9933 43.0707 38.6163 43.0464 39.2325 43.0093L39.2924 44.0075C38.6619 44.0454 38.0241 44.0703 37.3573 44.0807L37.3418 43.0808ZM38.103 17.9267C38.5935 26.7834 39.0405 34.8283 37.845 43.6479L36.8541 43.5136C38.0348 34.8026 37.5957 26.8503 37.1045 17.982L38.103 17.9267ZM38.0463 16.9022L38.103 17.9267L37.1045 17.9819L37.0478 16.9575L38.0463 16.9022ZM37.9187 14.5402C37.9604 15.3354 38.0033 16.1223 38.0463 16.9023L37.0478 16.9574C37.0048 16.177 36.9619 15.389 36.9201 14.5926L37.9187 14.5402ZM37.4194 14.0664H60.9381V15.0664H37.4194V14.0664ZM37.1676 14.5402C37.2101 15.3497 37.2537 16.1504 37.2975 16.9436L36.299 16.9986C36.2552 16.205 36.2115 15.4033 36.169 14.5926L37.1676 14.5402ZM37.2975 16.9435L37.3528 17.9442L36.3543 17.9994L36.299 16.9987L37.2975 16.9435ZM37.3528 17.9442C37.8462 26.8549 38.2911 34.865 37.0872 43.6539L36.0965 43.5182C37.2853 34.8388 36.8484 26.9221 36.3543 17.9994L37.3528 17.9442ZM36.5912 44.0861C32.7511 44.0812 27.7775 43.607 17.987 42.3952L18.1099 41.4027C27.9083 42.6156 32.8228 43.0813 36.5925 43.0861L36.5912 44.0861ZM17.5503 41.8563C17.8876 37.9141 18.6008 34.6876 19.2574 31.7158L20.2338 31.9315C19.5771 34.9041 18.8777 38.0724 18.5466 41.9416L17.5503 41.8563ZM19.2574 31.7158C20.4708 26.2233 21.4905 21.593 19.7201 14.6906L20.6888 14.4422C22.5219 21.5892 21.4514 26.42 20.2338 31.9315L19.2574 31.7158ZM20.2045 14.0664H36.6683V15.0664H20.2045V14.0664ZM18.8658 14.6833C18.6213 15.6997 18.3644 16.686 18.1005 17.6992L17.1328 17.4471C17.3971 16.4325 17.6516 15.4552 17.8935 14.4495L18.8658 14.6833ZM18.091 17.7313L18.091 17.7313L17.1423 17.4151L17.1423 17.4151L18.091 17.7313ZM18.1005 17.6992C17.3891 20.43 16.6208 23.3799 15.8743 27.7595L14.8885 27.5915C15.6425 23.1679 16.4199 20.184 17.1328 17.4472L18.1005 17.6992ZM15.8812 27.6901C15.6453 35.7519 14.82 39.6391 13.8281 44.3086L12.8499 44.1008C13.8356 39.4607 14.6482 35.6386 14.8816 27.6609L15.8812 27.6901ZM13.8252 44.3214L13.8251 44.3216L12.8527 44.0882L12.8528 44.088L13.8252 44.3214ZM13.8275 44.3111L13.8274 44.3116L12.8502 44.0992L12.8503 44.0987L13.8275 44.3111ZM13.8273 44.3122L13.8272 44.3126L12.8503 44.0989L12.8504 44.0985L13.8273 44.3122ZM13.8278 44.3097C13.2848 46.8659 12.6929 49.6527 12.118 53.5013L11.129 53.3536C11.7086 49.4729 12.306 46.661 12.8497 44.1019L13.8278 44.3097ZM12.1142 53.3315C12.1738 53.6366 12.2354 53.9315 12.2989 54.2182L11.3225 54.4343C11.2572 54.1395 11.194 53.8365 11.1328 53.5233L12.1142 53.3315ZM11.5996 54.7795C10.3141 54.1808 9.25338 53.9543 8.17547 54.0597C7.08633 54.1662 5.92684 54.6162 4.45269 55.4675L3.95258 54.6016C5.48002 53.7195 6.78398 53.191 8.07818 53.0645C9.38361 52.9369 10.6262 53.223 12.0218 53.873L11.5996 54.7795ZM4.7019 55.0075L5.11103 62.5525L4.1125 62.6066L3.70337 55.0616L4.7019 55.0075ZM4.90632 62.9836C4.6908 63.1407 4.54629 63.2972 4.4601 63.4466L3.59392 62.9468C3.7687 62.6439 4.02374 62.3895 4.31721 62.1755L4.90632 62.9836ZM3.52998 63.2511L2.6006 54.7544L3.59467 54.6457L4.52404 63.1423L3.52998 63.2511ZM2.60207 54.7665C1.14986 43.9312 2.29338 34.1476 3.81451 21.1034L4.80778 21.2192C3.28407 34.2855 2.16045 43.9434 3.5932 54.6336L2.60207 54.7665ZM3.81451 21.1034L3.85363 20.7679L4.8469 20.8837L4.80778 21.2192L3.81451 21.1034ZM3.87092 20.6836C4.40274 18.8909 4.83318 16.7815 5.21411 14.4846L6.20064 14.6482C5.8169 16.9621 5.37851 19.1178 4.82961 20.968L3.87092 20.6836ZM5.70737 14.0664H18.3796V15.0664H5.70737V14.0664ZM64.1867 24.2163L64.2979 24.2154L64.3062 25.2153L64.1951 25.2163L64.1867 24.2163ZM63.7701 26.1335C63.7459 25.6659 63.7199 25.2042 63.6918 24.7469L64.69 24.6856C64.7183 25.1463 64.7444 25.6112 64.7688 26.0817L63.7701 26.1335ZM64.8915 26.2915L64.5488 26.5223L63.9901 25.6929L64.3327 25.4621L64.8915 26.2915ZM65.3359 25.992L64.8915 26.2915L64.3327 25.4621L64.7772 25.1627L65.3359 25.992ZM66.0344 25.238L65.4283 25.9117L64.6849 25.2429L65.291 24.5692L66.0344 25.238ZM64.2975 24.2154C64.8033 24.2109 65.3042 24.2003 65.8636 24.4457L65.4618 25.3615C65.1258 25.214 64.8339 25.2106 64.3065 25.2153L64.2975 24.2154ZM13.5729 61.855C13.5138 61.6744 13.4555 61.4973 13.3978 61.3232L14.347 61.0087C14.405 61.1838 14.4638 61.3621 14.5233 61.544L13.5729 61.855ZM14.1945 61.1945C14.2536 61.2293 14.3119 61.2688 14.3668 61.3142L13.7294 62.0848C13.7224 62.079 13.7091 62.0691 13.6873 62.0563L14.1945 61.1945ZM14.3673 61.0946C14.3887 61.243 14.4113 61.3944 14.4351 61.5494L13.4467 61.7014C13.4224 61.5435 13.3994 61.3891 13.3775 61.2373L14.3673 61.0946ZM65.6159 61.1379C67.0821 60.6363 69.0526 60.6095 70.8368 60.8363C72.612 61.0618 74.3259 61.5544 75.2593 62.1864L74.6987 63.0144C73.9623 62.5159 72.4377 62.0477 70.7108 61.8283C68.9929 61.61 67.1976 61.6537 65.9396 62.0841L65.6159 61.1379ZM65.2396 61.749C65.2558 61.6699 65.2717 61.5912 65.2875 61.5127L66.268 61.7094C66.2519 61.7891 66.2357 61.8692 66.2193 61.9495L65.2396 61.749ZM74.6683 63.6149C72.9729 62.5037 71.6684 61.9933 70.3638 61.8456C69.0472 61.6966 67.6832 61.9105 65.8421 62.3364L65.6168 61.3621C67.4726 60.9328 68.9788 60.6824 70.4763 60.852C71.9859 61.0228 73.4394 61.6137 75.2165 62.7785L74.6683 63.6149ZM75.4781 62.631L75.4414 63.2273L74.4433 63.1661L74.4799 62.5698L75.4781 62.631ZM6.51209 51.9556C6.56973 51.9541 6.69133 51.9285 6.88852 51.8445C7.0769 51.7642 7.29988 51.6456 7.54892 51.4947C8.04653 51.1931 8.61342 50.7835 9.15998 50.3548C9.70503 49.9272 10.2208 49.4877 10.6145 49.1308C10.8116 48.9522 10.9753 48.7968 11.0956 48.6758C11.2316 48.5388 11.2747 48.4822 11.2715 48.4873L12.1226 49.0123C12.0548 49.1222 11.9256 49.2591 11.805 49.3805C11.6686 49.5178 11.4913 49.6858 11.2861 49.8718C10.8752 50.2442 10.3413 50.699 9.77719 51.1416C9.21457 51.5829 8.61267 52.0193 8.06726 52.3498C7.79478 52.515 7.5277 52.6591 7.28062 52.7644C7.04236 52.866 6.78312 52.9489 6.5377 52.9552L6.51209 51.9556ZM4.04311 52.6486L6.38675 51.9749L6.66304 52.9359L4.3194 53.6097L4.04311 52.6486ZM7.67284 52.9458L4.2786 53.6196L4.0839 52.6387L7.47814 51.965L7.67284 52.9458ZM10.9832 52.3101L7.66979 52.9464L7.48119 51.9644L10.7946 51.3281L10.9832 52.3101ZM8.53716 51.546L10.8404 51.3214L10.9374 52.3167L8.63421 52.5413L8.53716 51.546ZM10.7034 50.7635L8.92547 52.4105L8.2459 51.6769L10.0238 50.0299L10.7034 50.7635ZM11.7801 49.8405L10.6891 50.7763L10.0381 50.0172L11.1291 49.0815L11.7801 49.8405ZM12.1703 48.9111L11.9279 49.6223L10.9814 49.2996L11.2238 48.5885L12.1703 48.9111ZM70.2193 45.778C70.2715 45.6273 70.3799 45.5023 70.4475 45.4289C70.5307 45.3387 70.6342 45.2424 70.7469 45.1453C70.9736 44.95 71.2673 44.7264 71.5829 44.5042C72.2088 44.0635 72.9669 43.5963 73.5196 43.351L73.9252 44.265C73.4598 44.4716 72.7631 44.8962 72.1586 45.3219C71.8589 45.5328 71.5934 45.736 71.3996 45.903C71.3021 45.987 71.2299 46.0556 71.1825 46.107C71.1196 46.1752 71.1424 46.1683 71.1643 46.1051L70.2193 45.778ZM73.4799 45.1673C72.883 45.2157 72.3413 45.4729 70.9628 46.3618L70.4209 45.5213C71.7743 44.6486 72.5165 44.2421 73.3991 44.1706L73.4799 45.1673ZM74.9035 46.3729C74.8334 46.2815 74.5805 46.0123 74.2484 45.7362C73.9098 45.4546 73.5598 45.2262 73.2972 45.1482L73.5819 44.1896C74.0488 44.3283 74.5287 44.6687 74.8878 44.9673C75.2535 45.2714 75.5663 45.5938 75.6972 45.7646L74.9035 46.3729ZM75.6962 45.7501L75.7397 45.8301L74.861 46.3075L74.8175 46.2275L75.6962 45.7501ZM74.0288 43.4129C74.407 43.7063 74.771 44.2084 75.0504 44.6422C75.3397 45.0916 75.5789 45.5335 75.6965 45.7507L74.8172 46.2269C74.6998 46.0102 74.4764 45.598 74.2096 45.1836C73.9328 44.7537 73.647 44.3823 73.416 44.2031L74.0288 43.4129ZM75.8143 45.9743C75.8158 45.9792 75.8274 46.0137 75.8342 46.0574C75.8351 46.0627 75.852 46.1515 75.8249 46.2584C75.8103 46.3158 75.7637 46.4548 75.6162 46.5525C75.4525 46.661 75.2848 46.6416 75.1947 46.6142C75.1125 46.5893 75.0573 46.5492 75.0358 46.5328C75.0093 46.5125 74.9902 46.4937 74.9796 46.4827C74.9584 46.4608 74.9437 46.4416 74.9376 46.4334C74.924 46.4153 74.914 46.3995 74.9099 46.393C74.894 46.3676 74.8753 46.3337 74.8618 46.3089L75.7389 45.8286C75.7563 45.8604 75.76 45.8664 75.7572 45.8618C75.7564 45.8606 75.7491 45.8488 75.7376 45.8335C75.7325 45.8266 75.7187 45.8085 75.6982 45.7874C75.688 45.7768 75.6692 45.7583 75.643 45.7383C75.6218 45.722 75.5668 45.6821 75.4849 45.6573C75.395 45.63 75.2275 45.6105 75.0639 45.7189C74.9165 45.8165 74.8701 45.9553 74.8556 46.0125C74.8286 46.1188 74.8455 46.2069 74.8461 46.211C74.85 46.236 74.855 46.255 74.857 46.2626C74.8596 46.272 74.8619 46.2792 74.8631 46.2831L75.8143 45.9743ZM75.6972 45.7646C75.7129 45.7851 75.7306 45.8094 75.7473 45.8354C75.7581 45.8523 75.7917 45.9048 75.8143 45.9743L74.8631 46.2831C74.8743 46.3176 74.8868 46.3421 74.892 46.3519C74.8982 46.3637 74.9032 46.3716 74.9051 46.3747C74.9089 46.3806 74.9093 46.3805 74.9035 46.3729L75.6972 45.7646ZM74.1172 28.544C74.2384 28.388 74.2276 28.2208 74.2106 28.1403C74.1944 28.0636 74.1636 28.0111 74.1526 27.9931C74.1384 27.9699 74.1259 27.9543 74.1206 27.9478C74.1145 27.9404 74.1103 27.9361 74.1095 27.9353C74.1083 27.934 74.1118 27.9377 74.1226 27.9473C74.1328 27.9563 74.1464 27.968 74.1639 27.9823C74.2358 28.0412 74.3446 28.1228 74.4693 28.2117C74.7264 28.3952 74.9943 28.5697 75.0862 28.6179L74.6214 29.5033C74.4622 29.4198 74.1443 29.2083 73.8885 29.0258C73.7568 28.9318 73.6273 28.8354 73.53 28.7557C73.4838 28.7179 73.4317 28.6731 73.3889 28.6286C73.3707 28.6097 73.3324 28.5687 73.2989 28.5138C73.2832 28.4882 73.2495 28.4292 73.2322 28.347C73.214 28.2611 73.2038 28.0896 73.3276 27.9304L74.1172 28.544ZM67.0431 29.3273C68.0955 29.0364 69.7647 28.6067 71.1568 28.2674C71.8525 28.0979 72.4833 27.9499 72.9352 27.8529C73.1593 27.8048 73.348 27.7673 73.4807 27.7464C73.5416 27.7369 73.6142 27.7268 73.6777 27.7253C73.689 27.725 73.7858 27.7199 73.8896 27.7575C73.9324 27.773 74.1223 27.8469 74.198 28.072C74.2795 28.3141 74.1542 28.4963 74.1172 28.544L73.3276 27.9304C73.2939 27.9736 73.1698 28.152 73.2502 28.3909C73.3249 28.6128 73.5115 28.6841 73.5488 28.6976C73.6068 28.7187 73.6536 28.7227 73.6665 28.7238C73.6853 28.7253 73.6984 28.7251 73.7022 28.725C73.7099 28.7248 73.6937 28.7252 73.6362 28.7343C73.5323 28.7506 73.3661 28.7832 73.1451 28.8306C72.7068 28.9247 72.0865 29.0701 71.3935 29.239C70.0082 29.5766 68.3494 30.0037 67.3096 30.2912L67.0431 29.3273ZM74.0262 28.2027C71.3221 28.765 69.8677 29.1986 67.3735 30.2687L66.9792 29.3497C69.5421 28.2501 71.0613 27.7978 73.8226 27.2236L74.0262 28.2027ZM74.4664 28.6083C74.3246 28.3739 74.2699 28.2988 74.2175 28.2581C74.1997 28.2443 74.1509 28.2047 73.944 28.2128L73.9048 27.2135C74.2623 27.1995 74.5697 27.2652 74.8313 27.4687C75.0583 27.6452 75.2062 27.8993 75.322 28.0907L74.4664 28.6083ZM74.03 27.836C74.2224 27.6929 74.4776 27.588 74.7713 27.6804C74.89 27.7177 74.9836 27.7789 75.049 27.8275C75.1134 27.8756 75.1768 27.9319 75.2253 27.9748L74.563 28.7241C74.5361 28.7003 74.5148 28.6815 74.4952 28.6648C74.4759 28.6484 74.462 28.6373 74.4517 28.6296C74.4284 28.6122 74.4381 28.6239 74.4714 28.6343C74.49 28.6402 74.5138 28.645 74.5411 28.6458C74.5685 28.6467 74.5927 28.6433 74.612 28.6383C74.6477 28.6291 74.6546 28.6177 74.627 28.6383L74.03 27.836ZM74.3732 29.2937C74.2713 29.1987 74.1241 29.0654 74.0156 28.8989C73.8919 28.7089 73.8252 28.4915 73.8285 28.2307L74.8284 28.2436C74.8279 28.2826 74.8325 28.3044 74.8357 28.3157C74.8388 28.3265 74.8435 28.3377 74.8537 28.3533C74.8824 28.3975 74.9301 28.4458 75.0549 28.5621L74.3732 29.2937ZM74.3714 29.292L74.3714 29.292L75.0567 28.5638L75.0567 28.5638L74.3714 29.292ZM74.5032 29.4172C74.4602 29.3749 74.4181 29.3356 74.3732 29.2937L75.0549 28.5621C75.0988 28.603 75.1504 28.651 75.2043 28.7041L74.5032 29.4172ZM12.6908 28.8323C12.5368 28.6247 11.8564 27.8936 11.0266 27.025C10.2126 26.173 9.29289 25.2276 8.6945 24.6173L9.40857 23.9172C10.0089 24.5296 10.9318 25.4782 11.7496 26.3342C12.5516 27.1737 13.2923 27.9648 13.4938 28.2363L12.6908 28.8323ZM13.2717 30.0476C13.1125 29.655 12.8231 29.0882 12.6523 28.7718L13.5323 28.2968C13.7071 28.6207 14.0179 29.2267 14.1984 29.6718L13.2717 30.0476ZM13.6596 27.4458C13.816 28.1056 14.0686 29.1546 14.219 29.7341L13.2511 29.9853C13.0977 29.3943 12.8428 28.3358 12.6866 27.6764L13.6596 27.4458ZM10.1406 23.66L13.5348 27.2159L12.8114 27.9063L9.4172 24.3505L10.1406 23.66ZM14.7082 23.2926L9.89973 24.4904L9.65802 23.5201L14.4665 22.3223L14.7082 23.2926ZM7.00735 23.2848L14.5232 22.3116L14.6516 23.3033L7.13577 24.2765L7.00735 23.2848ZM8.93221 24.7528L6.95223 24.2662L7.1909 23.2951L9.17087 23.7817L8.93221 24.7528ZM14.3572 30.2024C14.3579 30.2095 14.3657 30.2707 14.3584 30.3374C14.3564 30.356 14.3503 30.4055 14.3278 30.4642C14.3137 30.5011 14.2412 30.6835 14.0241 30.7589C13.7794 30.844 13.5951 30.7159 13.5452 30.6757C13.4858 30.6279 13.4519 30.5779 13.4408 30.5613C13.4 30.4999 13.3785 30.4356 13.3776 30.433C13.3696 30.4109 13.362 30.3875 13.3554 30.366C13.3295 30.2818 13.2928 30.146 13.2511 29.9853L14.219 29.7341C14.261 29.896 14.2926 30.0115 14.311 30.0714C14.3131 30.0782 14.3148 30.0834 14.316 30.0871C14.3173 30.0911 14.3178 30.0925 14.3176 30.0919C14.3175 30.0916 14.317 30.0902 14.3162 30.0881C14.3154 30.086 14.3139 30.0823 14.3118 30.0774C14.3104 30.0742 14.2976 30.0438 14.2734 30.0074C14.2636 29.9926 14.2307 29.9438 14.1722 29.8968C14.1233 29.8573 13.9398 29.7295 13.6958 29.8143C13.4794 29.8896 13.4075 30.0712 13.3939 30.1068C13.3719 30.1642 13.3662 30.2119 13.3644 30.2282C13.3581 30.2857 13.365 30.3292 13.3629 30.3097L14.3572 30.2024ZM14.1984 29.6718C14.2645 29.8349 14.3394 30.0375 14.3572 30.2024L13.3629 30.3097C13.3637 30.3172 13.3618 30.2983 13.3436 30.2414C13.3271 30.1902 13.3031 30.1251 13.2717 30.0476L14.1984 29.6718Z",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M67.4996 54.0054C71.2043 52.9631 73.1429 53.0015 76.1172 55.2201C75.843 58.0806 75.2664 63.9885 75.2554 63.9193C75.008 62.3605 68.6356 60.902 65.5411 62.2343C66.4489 59.1015 66.9182 57.3445 67.4996 54.0054Z",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M12.5239 54.6588C8.65959 53.5717 6.6375 53.6118 3.53516 55.9259C3.82116 58.9096 4.42257 65.072 4.43403 64.9997C4.69207 63.3739 11.339 61.8525 14.5668 63.2422C13.6199 59.9745 13.1303 58.1418 12.5239 54.6588Z",
            fill: "white",
            stroke: color
          })]
        });

      case 'ChestPocket':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            width: width,
            height: height,
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M62.602 9.73047H58.3686H9.95312H8.45312V11.2305V22.4033V53.2615V54.0513L9.10436 54.4983L14.132 57.9486L16.2964 55.7954L11.4531 52.4717V24.5816L37.6273 34.5754L41.0021 31.2181L39.1944 31.9625L11.4531 21.3704V12.7305H58.3686H59.5863L62.602 9.73047ZM59.0223 23.798L64.8492 21.3987V18.0015L67.8492 15.0171V22.4033V54.3256V55.1749L67.1209 55.6118L66.3492 54.3256C67.1209 55.6118 67.1209 55.6119 67.1207 55.6119L67.12 55.6123L67.1174 55.6139L67.1068 55.6203L67.0647 55.6456L66.8995 55.7447L66.2636 56.1262L63.9204 57.5321L56.1476 62.1958L37.8588 73.1691L37.0327 73.6648L36.2383 73.1196L20.3818 62.2377L22.5462 60.0846L37.1415 70.1009L54.6042 59.6233L62.3769 54.9597L64.7202 53.5537L64.8492 53.4763V24.6431L53.4577 29.3337L59.0223 23.798Z",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "70.7793",
            y: "5.4375",
            width: "3.19223",
            height: "89.3824",
            transform: "rotate(45.915 70.7793 5.4375)",
            fill: color
          })]
        });

      case 'Collar':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            width: width,
            height: height,
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M10.8828 21.8277C19.7652 10.554 63.152 12.2624 68.6181 21.8277L50.5118 40.2757H34.7968L10.8828 21.8277Z",
            fill: "white",
            stroke: color,
            "stroke-width": "2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M51.1943 50.1842C42.3072 52.3584 37.4634 52.2379 28.9884 50.1842L25.2305 49.1593C26.8247 44.832 30.2663 35.9188 30.3549 36.1774C30.7561 37.3485 42.9195 37.5911 48.8029 36.1774L51.1943 50.1842Z",
            fill: "white",
            stroke: color,
            "stroke-width": "2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M18.7398 65.8983L37.5294 36.8598C26.1925 31.9747 20.2698 28.7667 10.8824 21.8281C6.96313 28.6599 5.06915 33.4529 2 43.0091C7.05562 55.9555 10.965 60.3099 18.7398 65.8983Z",
            fill: "white",
            stroke: color,
            "stroke-width": "2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M60.7602 65.8983L41.9706 36.8598C53.3075 31.9747 60.4186 29.6856 68.6176 21.8281C72.5369 28.6599 74.4309 33.4529 77.5 43.0091C72.4444 55.9555 68.535 60.3099 60.7602 65.8983Z",
            fill: "white",
            stroke: color,
            "stroke-width": "2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "40.1186",
            cy: "45.7251",
            r: "1.21336",
            fill: color,
            stroke: color,
            "stroke-width": "2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M30.5273 33.4939C38.1142 31.7316 42.3218 31.8041 49.7098 33.4939",
            stroke: color,
            "stroke-width": "2"
          })]
        });

      case 'Cuffs':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            width: width,
            height: height,
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M6 49.8331L24.0567 31.7765C32.5834 31.2749 40.1071 36.2906 45.3736 46.0713",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M23.8057 31.7748C23.8057 31.5742 36.8466 14.8049 43.3671 6.44531",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M29.5742 32.0244C31.434 28.9334 32.6539 27.5276 35.0915 25.5039",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M44.8721 44.5645C51.4197 37.2566 56.0296 34.4119 63.1795 27.7617C56.7555 35.5372 53.097 39.8142 45.6244 46.0692",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M47.3799 50.3329C49.8279 48.5236 51.1539 47.4702 52.8972 45.0664",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M47.3799 56.8529C49.773 56.6586 66.9308 40.396 74.4649 31.5234",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M29.5741 62.122L31.3296 60.3665C34.3493 66.1425 34.8408 69.3951 31.3297 73.6585C20.0444 76.9187 2.99059 56.1027 6.50171 49.5822C10.5145 45.5698 19.3695 48.7335 29.5741 62.122Z",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M45.3732 46.3203L31.3291 60.3644C33.2361 64.1299 33.6643 66.6441 33.5862 71.6498L47.6303 56.8534C48.1153 51.9148 47.6029 49.599 45.3732 46.3203Z",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M32.1321 51.2073C31.8284 51.9447 30.8264 52.389 29.786 51.9605C28.7457 51.532 28.3473 50.5108 28.651 49.7734C28.9547 49.0361 29.9567 48.5917 30.9971 49.0202C32.0374 49.4487 32.4358 50.4699 32.1321 51.2073Z",
            fill: color,
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "27.2994",
            y: "47.9844",
            width: "0.250787",
            height: "8.36908",
            transform: "rotate(-45 27.2994 47.9844)",
            fill: color,
            stroke: color,
            "stroke-width": "0.250787"
          })]
        });

      case 'Fit':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            width: width,
            height: height,
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M18.8386 12.5443C23.6713 10.2672 26.966 8.91774 33.1142 6.10938L39.6429 9.51428L47.7022 6.2968L62.0716 11.4823C69.1311 15.0121 67.007 30.1624 68.6002 44.6254C69.5259 53.0284 68.6915 58.7076 67.6631 70.4277L67.2882 77.0189C64.6038 75.1195 63.024 75.1806 60.1661 75.8943C61.7591 67.4914 60.7149 62.5426 59.2914 53.7781C59.0583 45.1746 58.9565 40.3342 57.3859 32.5052C54.8236 42.655 54.5072 48.5925 55.0743 59.4321C51.5756 60.3067 46.1116 60.5618 39.7054 60.5879C36.3608 60.8047 32.7502 60.5067 23.3056 59.2447C24.1177 48.9987 27.7725 44.5942 24.1401 33.5048C23.3605 38.0991 22.2746 40.8457 21.2438 47.3743C20.9627 57.7453 19.5972 59.7702 18.3387 68.8659C18.8075 71.4559 19.4308 73.1879 20.2131 75.7694C19.3383 74.9884 13.4344 75.2071 12.4661 77.0189L11.7476 69.9279C10.6325 60.9458 11.5088 52.8332 12.6858 41.9378L12.716 41.6578C14.9651 33.4736 14.8402 17.761 18.8386 12.5443Z",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            opacity: "0.5",
            d: "M65.8373 68.0535C64.9002 68.0276 62.0388 65.3108 61.8389 64.9609L62.0263 65.5545L62.8697 66.3354L64.2442 67.7099L62.4636 67.5224L65.0251 68.0535L67.6491 68.6157L65.8373 68.0535Z",
            fill: "black",
            "fill-opacity": "0.45",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            opacity: "0.5",
            d: "M13.8884 60.8359C14.6755 61.213 16.1376 62.3245 16.2312 62.6165C15.1752 61.8814 14.679 61.6044 14.1071 61.5544C13.5431 61.7352 12.824 62.5038 12.6686 62.7227C12.6446 62.7698 12.6339 62.7894 12.6389 62.7727C12.6417 62.7632 12.6519 62.7461 12.6686 62.7227C12.8067 62.4504 13.3835 61.2587 13.8884 60.8359Z",
            fill: "black",
            "fill-opacity": "0.45",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            opacity: "0.5",
            d: "M13.8883 47.8409C13.9192 47.8838 13.2078 48.4181 13.0137 48.5281C13.2426 48.2851 13.4236 48.1677 13.4197 47.8409C13.2364 47.6936 13.1452 47.7793 12.9824 47.9346C13.1815 47.5793 13.2958 47.3851 13.7321 47.4035C15.8447 47.8778 16.9941 48.2474 18.9488 49.1529C17.3314 48.6701 13.8033 47.7228 13.8883 47.8409Z",
            fill: "black",
            "fill-opacity": "0.45",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M38.6436 7.57715L40.0805 8.20191L40.4554 8.608L38.6123 10.6072L33.7393 8.63923L34.1141 5.10938L38.6436 7.57715Z",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M39.0492 7.63855C36.4461 5.82119 34.0512 3.64013 34.2386 2.39062C33.6771 4.19779 33.3965 5.2289 32.6143 6.92009C32.9537 8.36942 33.3831 9.39948 34.4885 11.5433C36.0248 9.32565 37.0075 8.4326 39.0492 7.63855Z",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M38.6124 10.701C38.3088 9.34445 38.6851 8.6554 40.9864 7.63974L47.4214 5.39062L46.2656 8.20202C43.3498 9.97275 41.553 10.7731 38.6124 10.701Z",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M45.6095 11.5119C43.112 8.66211 41.9264 7.50239 40.9238 7.70092C43.7665 5.48304 47.0464 4.32725 46.4529 2.10938C47.1364 3.88545 47.4802 4.94581 47.9523 7.07617C47.3619 8.82465 46.7345 9.79016 45.6095 11.5119Z",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M38.737 60.6794C37.7687 45.373 39.518 33.0029 38.5183 10.543",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M18.6516 69.2071C15.6972 68.3763 14.1512 68.4069 11.7793 70.1755C11.998 72.4558 12.4578 77.1654 12.4665 77.1102C12.6638 75.8676 17.7457 74.7049 20.2135 75.767C19.4895 73.2696 19.1152 71.869 18.6516 69.2071Z",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M60.4159 70.3961C63.2574 68.5514 64.8442 68.4708 67.6318 70.2087L67.2882 77.0497C64.8508 75.3697 63.298 74.9731 60.0723 75.9252C60.3572 73.9808 60.4395 72.7243 60.4159 70.3961Z",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            opacity: "0.75",
            cx: "39.8924",
            cy: "9.4803",
            r: "0.437327",
            fill: "black",
            "fill-opacity": "0.6",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            opacity: "0.75",
            cx: "40.2987",
            cy: "15.6678",
            r: "0.437327",
            fill: "black",
            "fill-opacity": "0.6",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            opacity: "0.75",
            cx: "40.3612",
            cy: "23.4139",
            r: "0.437327",
            fill: "black",
            "fill-opacity": "0.6",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            opacity: "0.75",
            cx: "40.5487",
            cy: "32.66",
            r: "0.437327",
            fill: "black",
            "fill-opacity": "0.6",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            opacity: "0.75",
            cx: "40.7987",
            cy: "41.8436",
            r: "0.437327",
            fill: "black",
            "fill-opacity": "0.6",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            opacity: "0.75",
            cx: "40.5487",
            cy: "51.2147",
            r: "0.437327",
            fill: "black",
            "fill-opacity": "0.6",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            opacity: "0.5",
            d: "M63.8831 44.5308C62.9564 45.5512 61.0342 47.692 60.7593 48.0919C60.6257 48.3591 60.3937 48.8484 60.2624 49.198C60.1977 49.4672 60.1569 49.6176 60.1658 49.5288C60.173 49.457 60.2095 49.3389 60.2624 49.198C60.3798 48.7096 60.576 47.8302 60.6968 47.2797L63.3208 44.3121L59.6035 43.3125L65.4137 44.1247L63.8831 44.5308Z",
            fill: "black",
            "fill-opacity": "0.3",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            opacity: "0.5",
            d: "M59.4161 27.1013C59.2991 28.282 58.2957 31.7747 58.0417 32.5991C58.3469 30.2757 58.4393 29.0192 58.0417 27.1013C57.601 26.2368 57.4351 25.7299 57.2607 24.7897L57.2713 24.7992C57.6725 25.1602 57.9008 25.3655 58.6664 25.352C60.2829 22.007 60.8056 20.0365 61.6965 16.5117C61.0064 19.9691 60.639 21.9081 59.4161 25.352C60.5864 24.565 61.2382 23.9894 62.3837 22.5718C61.3006 24.5216 60.6388 25.4859 59.4161 27.1013Z",
            fill: "black",
            "fill-opacity": "0.3",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            opacity: "0.5",
            d: "M18.8703 44.905C19.5648 45.3913 20.3221 45.8498 21.2756 46.1233L20.932 45.8734L20.5883 45.6235L20.1198 45.0612C20.4953 44.8834 20.8241 44.902 21.2756 44.905C20.5074 44.6955 19.9835 44.713 19.0889 44.6864C17.0794 43.7909 16.1215 43.0071 14.3096 41.7812C15.9503 43.175 16.8947 43.9252 18.8703 44.905Z",
            fill: "black",
            "fill-opacity": "0.3",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            opacity: "0.5",
            d: "M23.6181 29.5991C23.9438 30.3347 24.325 32.4819 24.2116 32.9727L24.3053 33.2539C24.4258 31.8266 24.3822 31.0265 24.2116 29.5991L23.9929 29.1305L23.3994 27.4749C22.9211 26.0213 22.6726 25.0654 22.2436 23.2578C22.4519 24.3095 22.7434 25.9755 22.8684 26.4753C22.9769 26.9092 23.212 27.756 23.5869 28.9743C22.5392 27.8108 21.9156 27.2586 20.9629 25.913C21.5617 26.9646 21.9282 27.5817 23.6181 29.5991Z",
            fill: "black",
            "fill-opacity": "0.3",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M23.0866 32.8066L22.7331 32.453L22.3795 32.8066L21.5688 33.6173L21.2155 33.9706L21.5685 34.3241L23.9252 36.6851H18.1331H17.6331V37.1851V38.3351V38.8351H18.1331H23.9222L21.5633 41.1897L21.2092 41.5432L21.563 41.8971L22.3795 42.7136L22.7331 43.0671L23.0866 42.7136L27.6866 38.1136L28.0401 37.7601L27.6866 37.4065L23.0866 32.8066Z",
            fill: color,
            stroke: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M55.7288 42.711L56.0824 43.0645L56.4359 42.711L57.2466 41.9002L57.5999 41.547L57.247 41.1934L54.8902 38.8325H60.6823H61.1823V38.3325V37.1825V36.6825H60.6823H54.8933L57.2521 34.3279L57.6063 33.9744L57.2524 33.6205L56.4359 32.804L56.0824 32.4504L55.7288 32.804L51.1289 37.4039L50.7753 37.7575L51.1289 38.111L55.7288 42.711Z",
            fill: color,
            stroke: "white"
          })]
        });

      case 'Placket':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "38.6367",
            y: "21.2734",
            width: "2.72727",
            height: "36.8182",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "10",
            y: "9",
            width: "2.72727",
            height: "61.3636",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "67.2725",
            y: "9",
            width: "2.72727",
            height: "61.3636",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "39.6527",
            cy: "39.347",
            r: "12.6204",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
            cx: "39.4648",
            cy: "35.1371",
            rx: "1.46282",
            ry: "1.82852",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
            cx: "35.4447",
            cy: "39.162",
            rx: "1.82852",
            ry: "1.46282",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "39.4648",
            cy: "43.5488",
            r: "1.46282",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "43.8544",
            cy: "39.162",
            r: "1.46282",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M39.6527 51.9676C32.6937 51.9676 27.0322 46.306 27.0322 39.347C27.0322 32.388 32.6937 26.7266 39.6527 26.7266C46.6117 26.7266 52.2731 32.388 52.2731 39.347C52.2731 46.306 46.6115 51.9676 39.6527 51.9676ZM39.6527 27.3592C33.0425 27.3592 27.6647 32.737 27.6647 39.347C27.6647 45.9572 33.0424 51.3349 39.6525 51.3349C46.2627 51.3349 51.6404 45.9572 51.6404 39.347C51.6405 32.737 46.2627 27.3592 39.6527 27.3592ZM39.6527 48.7809C34.4509 48.7809 30.2189 44.5489 30.2189 39.347C30.2189 34.1454 34.4509 29.9133 39.6527 29.9133C44.8545 29.9133 49.0864 34.1452 49.0864 39.347C49.0864 44.5488 44.8543 48.7809 39.6527 48.7809ZM39.6527 30.546C34.7997 30.546 30.8516 34.4942 30.8516 39.3471C30.8516 44.2001 34.7997 48.1484 39.6527 48.1484C44.5056 48.1484 48.4538 44.2002 48.4538 39.3471C48.4538 34.4942 44.5056 30.546 39.6527 30.546ZM39.6527 45.5251C38.5948 45.5251 37.7341 44.6644 37.7341 43.6065C37.7341 42.5487 38.5948 41.6879 39.6527 41.6879C40.7106 41.6879 41.5712 42.5487 41.5712 43.6065C41.5712 44.6644 40.7104 45.5251 39.6527 45.5251ZM39.6527 42.3205C38.9436 42.3205 38.3668 42.8975 38.3668 43.6065C38.3668 44.3156 38.9436 44.8924 39.6527 44.8924C40.3617 44.8924 40.9386 44.3155 40.9386 43.6065C40.9386 42.8975 40.3617 42.3205 39.6527 42.3205ZM43.9121 41.2655C42.8542 41.2655 41.9935 40.4049 41.9935 39.347C41.9935 38.2891 42.8542 37.4285 43.9121 37.4285C44.97 37.4285 45.8307 38.2891 45.8307 39.347C45.8307 40.4049 44.97 41.2655 43.9121 41.2655ZM43.9121 38.0611C43.203 38.0611 42.6262 38.6381 42.6262 39.347C42.6262 40.0559 43.203 40.6329 43.9121 40.6329C44.6211 40.6329 45.1981 40.0559 45.1981 39.347C45.1981 38.6381 44.6211 38.0611 43.9121 38.0611ZM35.3933 41.2655C34.3354 41.2655 33.4747 40.4049 33.4747 39.347C33.4747 38.2891 34.3354 37.4285 35.3933 37.4285C36.4512 37.4285 37.3118 38.2891 37.3118 39.347C37.3118 40.4049 36.451 41.2655 35.3933 41.2655ZM35.3933 38.0611C34.6842 38.0611 34.1074 38.6381 34.1074 39.347C34.1074 40.0559 34.6842 40.6329 35.3933 40.6329C36.1023 40.6329 36.6792 40.0559 36.6792 39.347C36.6792 38.6381 36.1023 38.0611 35.3933 38.0611ZM39.6527 37.0061C38.5948 37.0061 37.7341 36.1455 37.7341 35.0876C37.7341 34.0297 38.5948 33.1691 39.6527 33.1691C40.7106 33.1691 41.5712 34.0297 41.5712 35.0876C41.5712 36.1455 40.7104 37.0061 39.6527 37.0061ZM39.6527 33.8017C38.9436 33.8017 38.3668 34.3787 38.3668 35.0876C38.3668 35.7965 38.9436 36.3735 39.6527 36.3735C40.3617 36.3735 40.9386 35.7965 40.9386 35.0876C40.9386 34.3787 40.3617 33.8017 39.6527 33.8017Z",
            fill: color
          })]
        });

      case 'Pleats':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
            "clip-path": "url(#clip0)",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M10.2246 16.2232C32.9206 12.0797 46.0227 11.7333 70.3506 16.2232",
              stroke: color,
              "stroke-width": "1.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M4.49902 80.6441C4.77232 44.0774 4.37031 18.1813 7.83935 12.6445C11.7757 18.081 13.6916 21.3748 15.4744 28.6304C14.6308 48.516 14.5346 60.0056 14.52 80.6441",
              stroke: color,
              "stroke-width": "1.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M19.7693 80.4076C18.8202 58.0559 18.0976 46.1049 15.4746 28.8711",
              stroke: color,
              "stroke-width": "1.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M8.07812 12.6471C13.0788 9.5962 15.974 7.88534 27.4043 4.77344",
              stroke: color,
              "stroke-width": "1.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M76.3154 80.6441C76.0421 44.0774 76.4441 18.1813 72.9751 12.6445C69.0388 18.081 67.1228 21.3748 65.3401 28.6304C66.1837 48.516 66.2799 60.0056 66.2944 80.6441",
              stroke: color,
              "stroke-width": "1.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M61.0461 80.4076C61.9952 58.0559 62.7178 46.1049 65.3408 28.8711",
              stroke: color,
              "stroke-width": "1.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M72.7373 12.6471C67.7366 9.5962 64.8414 7.88534 53.4111 4.77344",
              stroke: color,
              "stroke-width": "1.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M29.3131 0C28.3145 1.76408 27.8783 2.89032 27.4043 5.24909C38.105 8.41426 43.5528 7.87566 53.4112 4.7719C52.5359 2.7969 52.0563 1.76476 50.548 0C42.6132 2.15018 37.9464 2.11306 29.3131 0Z",
              stroke: color,
              "stroke-width": "1.5"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("defs", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("clipPath", {
              id: "clip0",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
                width: "80",
                height: "80",
                fill: "white"
              })
            })
          })]
        });

      case 'Sleeve':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            width: width,
            height: height,
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
            "clip-path": "url(#clip0)",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M50.3711 19.0488V71.2279",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M52.292 19.0488V71.2279",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M50.4707 14.6992H52.392",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M47.9434 19.1523H54.9208",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M46.7305 12.8761C50.1498 12.1817 52.1353 12.1511 55.8315 12.8761",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M18.6188 70.2124C16.9296 52.1553 20.1929 32.5814 23.4549 21.707",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M23.5742 21.8767C29.9243 18.8858 33.6155 17.3678 40.5627 15.1016",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M40.8652 14.797C41.1386 12.8465 41.3597 11.8451 41.9776 10.3477C45.3404 12.4604 47.2731 13.3482 50.7752 14.5948L46.3258 21.2689C43.7074 19.2182 42.4823 17.8288 40.8652 14.797Z",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M41.9766 10.2485C43.6956 6.80957 57.8527 6.91061 60.7853 10.2485",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M62 14.797C61.7266 12.8465 61.5055 11.8451 60.8877 10.3477C57.5248 12.4604 55.5922 13.3482 52.09 14.5948L56.5394 21.2689C59.1578 19.2182 60.383 17.8288 62 14.797Z",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M26.8101 70.0179C26.008 68.8317 28.1667 44.5392 29.9449 33.3105C29.8343 50.5754 29.8295 59.946 30.9562 70.5235M23.3721 22.0859C25.4956 24.9174 26.7725 26.1434 29.4394 32.5015",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
              cx: "51.2797",
              cy: "17.5316",
              r: "0.5",
              fill: color,
              stroke: color,
              "stroke-width": "0.617955"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
              cx: "51.3808",
              cy: "23.496",
              r: "0.5",
              fill: color,
              stroke: color,
              "stroke-width": "0.820199"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
              cx: "51.3808",
              cy: "32.1953",
              r: "0.5",
              fill: color,
              stroke: color,
              "stroke-width": "0.820199"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
              cx: "51.3808",
              cy: "45.1288",
              r: "0.5",
              fill: color,
              stroke: color,
              "stroke-width": "0.820199"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
              cx: "51.3808",
              cy: "57.871",
              r: "0.5",
              fill: color,
              stroke: color,
              "stroke-width": "0.820199"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
              cx: "51.3808",
              cy: "70.8203",
              r: "0.5",
              fill: color,
              stroke: color,
              "stroke-width": "0.820199"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("defs", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("clipPath", {
              id: "clip0",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
                width: "64",
                height: "64",
                fill: "white",
                transform: "translate(8 8)"
              })
            })
          })]
        });

      case 'Embroidory':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M18.144 49.1458H9.648L8.388 52.9978H0L9.324 27.5098H18.54L27.828 52.9978H19.404L18.144 49.1458ZM16.2 43.1338L13.896 36.0418L11.592 43.1338H16.2Z",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M46.7618 39.9298C48.2978 40.2898 49.4858 41.0338 50.3258 42.1618C51.1898 43.2658 51.6218 44.5498 51.6218 46.0138C51.6218 48.2458 50.8778 49.9738 49.3898 51.1978C47.9258 52.3978 45.8138 52.9978 43.0538 52.9978H29.6978V27.5098H42.6938C45.2858 27.5098 47.3258 28.0738 48.8138 29.2018C50.3018 30.3298 51.0457 31.9738 51.0457 34.1338C51.0457 35.6218 50.6497 36.8818 49.8577 37.9138C49.0897 38.9218 48.0578 39.5938 46.7618 39.9298ZM37.6898 37.4458H40.7858C41.5058 37.4458 42.0338 37.3018 42.3698 37.0138C42.7298 36.7258 42.9098 36.2818 42.9098 35.6818C42.9098 35.0578 42.7298 34.6018 42.3698 34.3138C42.0338 34.0018 41.5058 33.8458 40.7858 33.8458H37.6898V37.4458ZM41.3258 46.5898C42.0458 46.5898 42.5738 46.4578 42.9098 46.1938C43.2698 45.9058 43.4498 45.4498 43.4498 44.8258C43.4498 43.6018 42.7418 42.9898 41.3258 42.9898H37.6898V46.5898H41.3258Z",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M53.6411 40.2178C53.6411 37.6978 54.1451 35.4538 55.1531 33.4858C56.1851 31.5178 57.6491 29.9938 59.5451 28.9138C61.4411 27.8098 63.6731 27.2578 66.2411 27.2578C68.4491 27.2578 70.4171 27.6778 72.1451 28.5178C73.8971 29.3338 75.3131 30.4978 76.3931 32.0098C77.4971 33.5218 78.2291 35.2858 78.5891 37.3018H70.1651C69.7811 36.4618 69.2291 35.8138 68.5091 35.3578C67.8131 34.8778 67.0091 34.6378 66.0971 34.6378C64.7531 34.6378 63.6851 35.1418 62.8931 36.1498C62.1251 37.1578 61.7411 38.5138 61.7411 40.2178C61.7411 41.9218 62.1251 43.2778 62.8931 44.2858C63.6851 45.2938 64.7531 45.7978 66.0971 45.7978C67.0091 45.7978 67.8131 45.5698 68.5091 45.1138C69.2291 44.6338 69.7811 43.9738 70.1651 43.1338H78.5891C78.2291 45.1498 77.4971 46.9138 76.3931 48.4258C75.3131 49.9378 73.8971 51.1138 72.1451 51.9538C70.4171 52.7698 68.4491 53.1778 66.2411 53.1778C63.6731 53.1778 61.4411 52.6378 59.5451 51.5578C57.6491 50.4538 56.1851 48.9178 55.1531 46.9498C54.1451 44.9818 53.6411 42.7378 53.6411 40.2178Z",
            fill: color
          })]
        });

      case 'ContrastedCollar':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M10.8828 21.8277C19.7652 10.554 63.152 12.2624 68.6181 21.8277L50.5118 40.2757H34.7968L10.8828 21.8277Z",
            fill: "white",
            stroke: color,
            "stroke-width": "2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M51.1943 50.1842C42.3072 52.3584 37.4634 52.2379 28.9884 50.1842L25.2305 49.1593C26.8247 44.832 30.2663 35.9188 30.3549 36.1774C30.7561 37.3485 42.9195 37.5911 48.8029 36.1774L51.1943 50.1842Z",
            fill: "white",
            stroke: color,
            "stroke-width": "2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M18.7398 65.8983L37.5294 36.8598C26.1925 31.9747 20.2698 28.7667 10.8824 21.8281C6.96313 28.6599 5.06915 33.4529 2 43.0091C7.05562 55.9555 10.965 60.3099 18.7398 65.8983Z",
            fill: "white",
            stroke: color,
            "stroke-width": "2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M60.7602 65.8983L41.9706 36.8598C53.3075 31.9747 60.4186 29.6856 68.6176 21.8281C72.5369 28.6599 74.4309 33.4529 77.5 43.0091C72.4444 55.9555 68.535 60.3099 60.7602 65.8983Z",
            fill: "white",
            stroke: color,
            "stroke-width": "2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("mask", {
            id: "mask0",
            "mask-type": "alpha",
            maskUnits: "userSpaceOnUse",
            x: "40",
            y: "20",
            width: "39",
            height: "48",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M60.7602 66.0701L41.9706 37.0317C53.3075 32.1466 60.4186 29.8575 68.6176 22C72.5369 28.8318 74.4309 33.6247 77.5 43.181C72.4444 56.1274 68.535 60.4818 60.7602 66.0701Z",
              fill: "white",
              stroke: color,
              "stroke-width": "2"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
            mask: "url(#mask0)",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M68.5492 99.0884C66.7749 88.7272 66.3322 31.1311 68.5491 -3",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M41.0257 99.0884C39.2515 88.7272 38.8087 31.1311 41.0257 -3",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M54.5374 99.0884C52.7632 88.7272 52.3204 31.1311 54.5374 -3",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M75.555 99.0884C73.7808 88.7272 73.338 31.1311 75.555 -3",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M48.0316 99.0884C46.2573 88.7272 45.8146 31.1311 48.0316 -3",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M61.5433 99.0884C59.769 88.7272 59.3263 31.1311 61.5433 -3",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M72.0521 99.088C70.2778 87.8633 69.8351 25.4675 72.0521 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M44.5286 99.088C42.7544 87.8633 42.3116 25.4675 44.5286 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M58.0404 99.088C56.2661 87.8633 55.8234 25.4675 58.0403 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M79.0589 99.088C77.2847 87.8633 76.8419 25.4675 79.0589 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M51.5345 99.088C49.7602 87.8633 49.3175 25.4675 51.5345 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M65.0462 99.088C63.272 87.8633 62.8292 25.4675 65.0462 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M70.0511 99.0884C68.2768 88.7272 67.8341 31.1311 70.0511 -3",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M42.5267 99.0884C40.7524 88.7272 40.3097 31.1311 42.5267 -3",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M56.0384 99.0884C54.2642 88.7272 53.8214 31.1311 56.0384 -3",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M77.5574 99.0884C75.1917 88.7272 74.6014 31.1311 77.5574 -3",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M50.033 99.0884C47.6673 88.7272 47.077 31.1311 50.033 -3",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M63.5447 99.0884C61.179 88.7272 60.5887 31.1311 63.5447 -3",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M74.0545 99.088C71.6888 87.8633 71.0985 25.4675 74.0544 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M46.5301 99.088C44.1644 87.8633 43.5741 25.4675 46.53 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M60.0418 99.088C57.6761 87.8633 57.0858 25.4675 60.0417 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M53.5359 99.088C51.1702 87.8633 50.5799 25.4675 53.5359 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M67.0476 99.088C64.682 87.8633 64.0916 25.4675 67.0476 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("mask", {
            id: "mask1",
            "mask-type": "alpha",
            maskUnits: "userSpaceOnUse",
            x: "0",
            y: "20",
            width: "40",
            height: "48",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M18.7398 66.0701L37.5294 37.0317C26.1925 32.1466 20.2698 28.9386 10.8824 22C6.96313 28.8318 5.06915 33.6247 2 43.181C7.05562 56.1274 10.965 60.4818 18.7398 66.0701Z",
              fill: "white",
              stroke: color,
              "stroke-width": "2"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
            mask: "url(#mask1)",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M40.0501 99.0845C38.2759 88.7233 37.8331 31.1271 40.0501 -3.00391",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M12.5267 99.0845C10.7524 88.7233 10.3097 31.1271 12.5267 -3.00391",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M26.0384 99.0845C24.2642 88.7233 23.8214 31.1271 26.0384 -3.00391",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M19.5326 99.0845C17.7583 88.7233 17.3156 31.1271 19.5325 -3.00391",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M5.52083 99.0845C3.74657 88.7233 3.30383 31.1271 5.52081 -3.00391",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M33.0443 99.0845C31.27 88.7233 30.8273 31.1271 33.0442 -3.00391",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M16.0296 99.088C14.2554 87.8633 13.8126 25.4675 16.0296 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M2.01693 99.088C0.242668 87.8633 -0.200073 25.4675 2.0169 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M29.5413 99.088C27.7671 87.8633 27.3243 25.4675 29.5413 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M23.0355 99.088C21.2612 87.8633 20.8185 25.4675 23.0355 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M9.02376 99.088C7.2495 87.8633 6.80676 25.4675 9.02374 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M36.5472 99.088C34.7729 87.8633 34.3302 25.4675 36.5472 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M14.0277 99.0845C12.2534 88.7233 11.8107 31.1271 14.0276 -3.00391",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M27.5394 99.0845C25.7651 88.7233 25.3224 31.1271 27.5394 -3.00391",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M21.534 99.0845C19.1683 88.7233 18.578 31.1271 21.5339 -3.00391",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M7.52224 99.0845C5.15657 88.7233 4.56624 31.1271 7.52221 -3.00391",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M35.0457 99.0845C32.68 88.7233 32.0897 31.1271 35.0456 -3.00391",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M18.031 99.088C15.6654 87.8633 15.075 25.4675 18.031 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M4.01931 99.088C1.65364 87.8633 1.06331 25.4675 4.01928 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M31.5427 99.088C29.1771 87.8633 28.5868 25.4675 31.5427 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M25.0369 99.088C22.6712 87.8633 22.0809 25.4675 25.0369 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M11.0252 99.088C8.6595 87.8633 8.06917 25.4675 11.0251 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M38.5486 99.088C36.1829 87.8633 35.5926 25.4675 38.5486 -11.5078",
              stroke: color,
              "stroke-width": "0.5"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "40.1186",
            cy: "45.7251",
            r: "1.21336",
            fill: color,
            stroke: color,
            "stroke-width": "2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M30.5273 33.4939C38.1142 31.7316 42.3218 31.8041 49.7098 33.4939",
            stroke: color,
            "stroke-width": "2"
          })]
        });

      case 'CustomizeCuffs':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("mask", {
            id: "mask0",
            "mask-type": "alpha",
            maskUnits: "userSpaceOnUse",
            x: "6",
            y: "31",
            width: "43",
            height: "43",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M29.5 62.0012C20 50.5012 12.5 45.5012 7 49.0012L24 32.0012C36.5 30.5012 48.5 44.001 47.5 57.5012L33 72.0012C33.8493 67.5567 33.4821 65.0408 31 60.5012L29.5 62.0012Z",
              fill: color,
              stroke: color
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
            mask: "url(#mask0)",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M29.5267 108.088C27.7524 97.7272 27.3097 40.1311 29.5267 6",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M15.514 108.088C13.7397 97.7272 13.297 40.1311 15.514 6",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M43.0384 108.088C41.2642 97.7272 40.8214 40.1311 43.0384 6",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M9.00911 108.088C7.23486 97.7272 6.79211 40.1311 9.00909 6",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M36.5326 108.088C34.7583 97.7272 34.3156 40.1311 36.5325 6",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M22.5208 108.088C20.7466 97.7272 20.3038 40.1311 22.5208 6",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M33.0296 108.088C31.2554 96.8633 30.8126 34.4675 33.0296 -2.50781",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M19.0169 108.088C17.2427 96.8633 16.7999 34.4675 19.0169 -2.50781",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M46.5413 108.088C44.7671 96.8633 44.3243 34.4675 46.5413 -2.50781",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M12.512 108.088C10.7378 96.8633 10.295 34.4675 12.512 -2.50781",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M40.0355 108.088C38.2612 96.8633 37.8185 34.4675 40.0355 -2.50781",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M26.0238 108.088C24.2495 96.8633 23.8068 34.4675 26.0237 -2.50781",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M31.0277 108.088C29.2534 97.7272 28.8107 40.1311 31.0276 6",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M17.0159 108.088C15.2417 97.7272 14.799 40.1311 17.0159 6",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M44.5394 108.088C42.7651 97.7272 42.3224 40.1311 44.5394 6",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M11.0105 108.088C8.64485 97.7272 8.05452 40.1311 11.0105 6",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M38.534 108.088C36.1683 97.7272 35.578 40.1311 38.5339 6",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M24.5222 108.088C22.1566 97.7272 21.5662 40.1311 24.5222 6",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M7.50759 108.088C5.14192 96.8633 4.5516 34.4675 7.50756 -2.50781",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M35.031 108.088C32.6654 96.8633 32.075 34.4675 35.031 -2.50781",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M21.0193 108.088C18.6536 96.8633 18.0633 34.4675 21.0193 -2.50781",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M48.5427 108.088C46.1771 96.8633 45.5868 34.4675 48.5427 -2.50781",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M14.5135 108.088C12.1478 96.8633 11.5575 34.4675 14.5134 -2.50781",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M42.0369 108.088C39.6712 96.8633 39.0809 34.4675 42.0369 -2.50781",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M28.0252 108.088C25.6595 96.8633 25.0692 34.4675 28.0251 -2.50781",
              stroke: color,
              "stroke-width": "0.5"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M6 49.8331L24.0567 31.7765C32.5834 31.2749 40.1071 36.2906 45.3736 46.0713",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M23.8057 31.7748C23.8057 31.5742 36.8466 14.8049 43.3671 6.44531",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M29.5742 32.0244C31.434 28.9334 32.6539 27.5276 35.0915 25.5039",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M44.8721 44.5645C51.4197 37.2566 56.0296 34.4119 63.1795 27.7617C56.7555 35.5372 53.097 39.8142 45.6244 46.0692",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M47.3799 50.3329C49.8279 48.5236 51.1539 47.4702 52.8972 45.0664",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M47.3799 56.8529C49.773 56.6586 66.9308 40.396 74.4649 31.5234",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M29.5741 62.122L31.3296 60.3665C34.3493 66.1425 34.8408 69.3951 31.3297 73.6585C20.0444 76.9187 2.99059 56.1027 6.50171 49.5822C10.5145 45.5698 19.3695 48.7335 29.5741 62.122Z",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M45.3732 46.3203L31.3291 60.3644C33.2361 64.1299 33.6643 66.6441 33.5862 71.6498L47.6303 56.8534C48.1153 51.9148 47.6029 49.599 45.3732 46.3203Z",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M32.1321 51.2073C31.8284 51.9447 30.8264 52.389 29.786 51.9605C28.7457 51.532 28.3473 50.5108 28.651 49.7734C28.9547 49.0361 29.9567 48.5917 30.9971 49.0202C32.0374 49.4487 32.4358 50.4699 32.1321 51.2073Z",
            fill: color,
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "27.2994",
            y: "47.9844",
            width: "0.250787",
            height: "8.36908",
            transform: "rotate(-45 27.2994 47.9844)",
            fill: color,
            stroke: color,
            "stroke-width": "0.250787"
          })]
        });

      case 'Buttons':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "38",
            y: "11",
            width: "4",
            height: "57",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "39.653",
            cy: "39.1715",
            r: "19.3473",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "39.653",
            cy: "39.1715",
            r: "19.3473",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("mask", {
            id: "mask0",
            "mask-type": "alpha",
            maskUnits: "userSpaceOnUse",
            x: "12",
            y: "12",
            width: "55",
            height: "54",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
              cx: "39.6525",
              cy: "39.1704",
              r: "19.3473",
              transform: "rotate(33.6142 39.6525 39.1704)",
              fill: "white"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
            mask: "url(#mask0)",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-19.6056 65.7217C-15.3472 56.1109 16.1692 7.90063 36.9104 -19.2958",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M26.2372 96.1964C30.4956 86.5855 62.012 38.3752 82.7532 11.1788",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M3.3163 80.9581C7.57468 71.3472 39.0911 23.137 59.8323 -4.05952",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-8.35264 73.2003C-4.09426 63.5894 27.4222 15.3791 48.1633 -11.8173",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M37.4901 103.677C41.7485 94.0659 73.2649 45.8557 94.0061 18.6592",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M14.5692 88.4385C18.8276 78.8277 50.344 30.6174 71.0852 3.42095",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-13.7706 69.6007C-9.51223 59.9898 22.0042 11.7795 42.7454 -15.4169",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M32.0722 100.075C36.3305 90.4644 67.847 42.2541 88.5881 15.0577",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M9.15126 84.837C13.4096 75.2261 44.9261 27.0159 65.6672 -0.180613",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-2.51768 77.0792C1.7407 67.4683 33.2571 19.258 53.9983 -7.93843",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M20.4032 92.3174C24.6616 82.7066 56.178 34.4963 76.9192 7.29986",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-16.6883 67.6601C-11.9519 57.3301 22.2216 5.12279 44.5373 -24.4423",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M29.1545 98.1327C33.8909 87.8028 68.0644 35.5954 90.3801 6.03032",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M6.23359 82.8983C10.97 72.5684 45.1435 20.3611 67.4592 -9.20405",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-5.43536 75.1405C-0.698981 64.8106 33.4745 12.6033 55.7903 -16.9619",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M17.4865 90.3788C22.2229 80.0489 56.3964 27.8415 78.7122 -1.72358",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-10.8523 71.539C-6.11597 61.209 28.0576 9.0017 50.3733 -20.5634",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M34.9904 102.012C39.7268 91.6817 73.9003 39.4744 96.2161 9.90923",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M12.0686 86.7772C16.8049 76.4473 50.9785 24.24 73.2942 -5.32514",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M0.399606 79.0194C5.13598 68.6895 39.3095 16.4822 61.6252 -13.083",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M23.3205 94.2538C28.0569 83.9239 62.2304 31.7165 84.5461 2.15142",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-18.3546 66.5518C-14.0962 56.9409 17.4202 8.7307 38.1614 -18.4658",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M27.4882 97.0284C31.7466 87.4175 63.263 39.2073 84.0041 12.0108",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M4.5663 81.7901C8.82468 72.1792 40.3411 23.969 61.0823 -3.22749",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-7.10264 74.0323C-2.84426 64.4214 28.6722 16.2112 49.4133 -10.9853",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M38.7411 104.505C42.9995 94.8941 74.5159 46.6838 95.2571 19.4874",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M15.8192 89.2706C20.0776 79.6597 51.594 31.4495 72.3352 4.25298",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-12.1039 70.7078C-8.338 60.7695 23.0555 12.4775 44.4121 -14.3098",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M33.7399 101.18C37.5057 91.2421 68.8993 42.9502 90.2559 16.1628",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M10.818 85.946C14.5839 76.0078 45.9774 27.7158 67.334 0.928453",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-0.85093 78.1882C2.91492 68.25 34.3085 19.958 55.665 -6.82936",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M22.07 93.4265C25.8358 83.4882 57.2294 35.1963 78.5859 8.40892",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-15.0206 68.7691C-10.7767 58.1118 23.2739 5.82275 46.2051 -23.3333",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M30.8222 99.2418C35.0661 88.5844 69.1167 36.2954 92.0478 7.13939",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M7.90034 84.0035C12.1442 73.3462 46.1948 21.0571 69.126 -8.09889",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-3.7686 76.2496C0.475248 65.5923 34.5259 13.3032 57.457 -15.8528",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M19.1533 91.484C23.3971 80.8266 57.4477 28.5376 80.3789 -0.618422",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-9.18657 72.648C-4.94272 61.9907 29.1079 9.70166 52.0391 -19.4544",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M36.6572 103.121C40.901 92.4634 74.9517 40.1743 97.8828 11.0183",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M13.7353 87.8824C17.9792 77.2251 52.0298 24.936 74.9609 -4.21998",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M2.06636 80.1285C6.31021 69.4712 40.3608 17.1821 63.292 -11.9739",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M24.9873 95.3629C29.2311 84.7055 63.2817 32.4165 86.2129 3.26048",
              stroke: color,
              "stroke-width": "0.5"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
            cx: "39.3646",
            cy: "32.7172",
            rx: "2.24252",
            ry: "2.80315",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
            cx: "33.2016",
            cy: "38.8871",
            rx: "2.80315",
            ry: "2.24252",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "39.3646",
            cy: "45.6136",
            r: "2.24252",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "46.0941",
            cy: "38.8871",
            r: "2.24252",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M39.653 58.5191C28.9848 58.5191 20.3057 49.8398 20.3057 39.1716C20.3057 28.5033 28.9848 19.8242 39.653 19.8242C50.3212 19.8242 59.0003 28.5033 59.0003 39.1716C59.0003 49.8398 50.321 58.5191 39.653 58.5191ZM39.653 20.7941C29.5195 20.7941 21.2753 29.0383 21.2753 39.1716C21.2753 49.305 29.5193 57.5492 39.6528 57.5492C49.7863 57.5492 58.0303 49.305 58.0303 39.1716C58.0305 29.0383 49.7863 20.7941 39.653 20.7941ZM39.653 53.6338C31.6786 53.6338 25.1909 47.1462 25.1909 39.1716C25.1909 31.1973 31.6786 24.7095 39.653 24.7095C47.6274 24.7095 54.115 31.1971 54.115 39.1716C54.115 47.146 47.6272 53.6338 39.653 53.6338ZM39.653 25.6795C32.2134 25.6795 26.1608 31.7321 26.1608 39.1717C26.1608 46.6114 32.2134 52.6642 39.653 52.6642C47.0926 52.6642 53.1452 46.6116 53.1452 39.1717C53.1452 31.7321 47.0926 25.6795 39.653 25.6795ZM39.653 48.6426C38.0312 48.6426 36.7119 47.3232 36.7119 45.7015C36.7119 44.0797 38.0312 42.7602 39.653 42.7602C41.2748 42.7602 42.5941 44.0797 42.5941 45.7015C42.5941 47.3232 41.2746 48.6426 39.653 48.6426ZM39.653 43.73C38.566 43.73 37.6817 44.6145 37.6817 45.7015C37.6817 46.7885 38.566 47.6728 39.653 47.6728C40.74 47.6728 41.6243 46.7883 41.6243 45.7015C41.6243 44.6145 40.74 43.73 39.653 43.73ZM46.1827 42.1127C44.561 42.1127 43.2416 40.7933 43.2416 39.1716C43.2416 37.5498 44.561 36.2304 46.1827 36.2304C47.8045 36.2304 49.1241 37.5498 49.1241 39.1716C49.1241 40.7933 47.8045 42.1127 46.1827 42.1127ZM46.1827 37.2003C45.0957 37.2003 44.2114 38.0847 44.2114 39.1716C44.2114 40.2584 45.0957 41.1428 46.1827 41.1428C47.2697 41.1428 48.1542 40.2584 48.1542 39.1716C48.1542 38.0847 47.2697 37.2003 46.1827 37.2003ZM33.1233 42.1127C31.5015 42.1127 30.1821 40.7933 30.1821 39.1716C30.1821 37.5498 31.5015 36.2304 33.1233 36.2304C34.745 36.2304 36.0644 37.5498 36.0644 39.1716C36.0644 40.7933 34.7448 42.1127 33.1233 42.1127ZM33.1233 37.2003C32.0363 37.2003 31.152 38.0847 31.152 39.1716C31.152 40.2584 32.0363 41.1428 33.1233 41.1428C34.2103 41.1428 35.0946 40.2584 35.0946 39.1716C35.0946 38.0847 34.2103 37.2003 33.1233 37.2003ZM39.653 35.583C38.0312 35.583 36.7119 34.2636 36.7119 32.6418C36.7119 31.02 38.0312 29.7007 39.653 29.7007C41.2748 29.7007 42.5941 31.02 42.5941 32.6418C42.5941 34.2636 41.2746 35.583 39.653 35.583ZM39.653 30.6705C38.566 30.6705 37.6817 31.555 37.6817 32.6418C37.6817 33.7286 38.566 34.6131 39.653 34.6131C40.74 34.6131 41.6243 33.7286 41.6243 32.6418C41.6243 31.555 40.74 30.6705 39.653 30.6705Z",
            fill: color
          })]
        });

      case 'ElbowPatches':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M62.7288 66.183L22.4068 42.4033L10 19.1406",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("mask", {
            id: "mask0",
            "mask-type": "alpha",
            maskUnits: "userSpaceOnUse",
            x: "16",
            y: "30",
            width: "16",
            height: "18",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M31.712 47.9191C28.6534 35.1513 24.8022 32.2008 16.0312 30.6875L22.407 42.405L31.712 47.9191Z",
              fill: "#C4C4C4"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
            mask: "url(#mask0)",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M31.712 47.9191C28.6534 35.1513 24.8022 32.2008 16.0312 30.6875L22.407 42.405L31.712 47.9191Z",
              stroke: color,
              "stroke-width": "1.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M31.0399 58.4604C30.4284 54.8895 30.2758 35.04 31.0399 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M21.5545 58.4604C20.943 54.8895 20.7905 35.04 21.5545 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M16.7254 58.4604C16.1139 54.8895 15.9614 35.04 16.7254 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M26.2108 58.4604C25.5993 54.8895 25.4467 35.04 26.2107 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M23.9686 58.4604C23.3571 54.8895 23.2045 35.04 23.9686 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M19.1395 58.4604C18.528 54.8895 18.3754 35.04 19.1395 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M28.6258 58.4604C28.0143 54.8895 27.8617 35.04 28.6258 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M32.2469 58.4587C31.6354 54.5903 31.4828 33.0867 32.2469 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M22.7615 58.4587C22.1501 54.5903 21.9975 33.0867 22.7615 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M17.9324 58.4587C17.321 54.5903 17.1684 33.0867 17.9324 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M27.4178 58.4587C26.8063 54.5903 26.6537 33.0867 27.4178 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M25.1756 58.4587C24.5641 54.5903 24.4116 33.0867 25.1756 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M20.3475 58.4587C19.736 54.5903 19.5834 33.0867 20.3475 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M29.8328 58.4587C29.2214 54.5903 29.0688 33.0867 29.8328 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M31.5574 58.4604C30.946 54.8895 30.7934 35.04 31.5574 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M22.0721 58.4604C21.4606 54.8895 21.308 35.04 22.0721 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M17.243 58.4604C16.6315 54.8895 16.4789 35.04 17.243 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M26.7283 58.4604C26.1169 54.8895 25.9643 35.04 26.7283 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M24.6586 58.4604C23.8433 54.8895 23.6399 35.04 24.6586 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M19.8295 58.4604C19.0142 54.8895 18.8108 35.04 19.8295 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M29.3149 58.4604C28.4996 54.8895 28.2961 35.04 29.3149 23.2773",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M23.4516 58.4587C22.6363 54.5903 22.4328 33.0867 23.4516 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M18.6225 58.4587C17.8072 54.5903 17.6037 33.0867 18.6225 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M28.1078 58.4587C27.2925 54.5903 27.0891 33.0867 28.1078 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M16.3803 58.4587C15.565 54.5903 15.3616 33.0867 16.3803 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M25.8656 58.4587C25.0504 54.5903 24.8469 33.0867 25.8656 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M21.0365 58.4587C20.2213 54.5903 20.0178 33.0867 21.0365 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M30.5229 58.4587C29.7076 54.5903 29.5041 33.0867 30.5229 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M70.9996 54.6384L35.6748 32.7543L26.542 14.3164",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M62.5566 66.0105C63.3492 58.4842 64.741 55.3823 71.0001 54.293C70.562 61.1449 68.5331 63.568 62.5566 66.0105Z",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M53.5957 61.1871C54.9853 54.3719 56.3992 51.3325 61.5223 49.125",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M54.1128 58.4293L52.3896 57.3954L52.7343 57.0508L54.2851 58.0847",
            stroke: color,
            "stroke-width": "0.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M47.5654 52.399L63.4185 61.8764V60.6702L47.9101 51.7097L47.5654 52.399Z",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M55.1474 49.4696L57.7321 51.0205L58.0767 50.6758L55.492 49.125L55.1474 49.4696Z",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M47.5654 52.399L63.4185 61.8764V60.6702L47.9101 51.7097L47.5654 52.399Z",
            stroke: color,
            "stroke-width": "0.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M55.1474 49.4696L57.7321 51.0205L58.0767 50.6758L55.492 49.125L55.1474 49.4696Z",
            stroke: color,
            "stroke-width": "0.5"
          })]
        });

      case 'Threads':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "38",
            y: "11",
            width: "4",
            height: "57",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "39.653",
            cy: "39.1715",
            r: "19.3473",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "39.653",
            cy: "39.1715",
            r: "19.3473",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
            cx: "39.3646",
            cy: "32.7211",
            rx: "2.24252",
            ry: "2.80315",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
            cx: "33.2026",
            cy: "38.8871",
            rx: "2.80315",
            ry: "2.24252",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "39.3646",
            cy: "45.6136",
            r: "2.24252",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "46.0941",
            cy: "38.8871",
            r: "2.24252",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M39.653 58.5191C28.9848 58.5191 20.3057 49.8398 20.3057 39.1716C20.3057 28.5033 28.9848 19.8242 39.653 19.8242C50.3212 19.8242 59.0003 28.5033 59.0003 39.1716C59.0003 49.8398 50.321 58.5191 39.653 58.5191ZM39.653 20.7941C29.5195 20.7941 21.2753 29.0383 21.2753 39.1716C21.2753 49.305 29.5193 57.5492 39.6528 57.5492C49.7863 57.5492 58.0303 49.305 58.0303 39.1716C58.0305 29.0383 49.7863 20.7941 39.653 20.7941ZM39.653 53.6338C31.6786 53.6338 25.1909 47.1462 25.1909 39.1716C25.1909 31.1973 31.6786 24.7095 39.653 24.7095C47.6274 24.7095 54.115 31.1971 54.115 39.1716C54.115 47.146 47.6272 53.6338 39.653 53.6338ZM39.653 25.6795C32.2134 25.6795 26.1608 31.7321 26.1608 39.1717C26.1608 46.6114 32.2134 52.6642 39.653 52.6642C47.0926 52.6642 53.1452 46.6116 53.1452 39.1717C53.1452 31.7321 47.0926 25.6795 39.653 25.6795ZM39.653 48.6426C38.0312 48.6426 36.7119 47.3232 36.7119 45.7015C36.7119 44.0797 38.0312 42.7602 39.653 42.7602C41.2748 42.7602 42.5941 44.0797 42.5941 45.7015C42.5941 47.3232 41.2746 48.6426 39.653 48.6426ZM39.653 43.73C38.566 43.73 37.6817 44.6145 37.6817 45.7015C37.6817 46.7885 38.566 47.6728 39.653 47.6728C40.74 47.6728 41.6243 46.7883 41.6243 45.7015C41.6243 44.6145 40.74 43.73 39.653 43.73ZM46.1827 42.1127C44.561 42.1127 43.2416 40.7933 43.2416 39.1716C43.2416 37.5498 44.561 36.2304 46.1827 36.2304C47.8045 36.2304 49.1241 37.5498 49.1241 39.1716C49.1241 40.7933 47.8045 42.1127 46.1827 42.1127ZM46.1827 37.2003C45.0957 37.2003 44.2114 38.0847 44.2114 39.1716C44.2114 40.2584 45.0957 41.1428 46.1827 41.1428C47.2697 41.1428 48.1542 40.2584 48.1542 39.1716C48.1542 38.0847 47.2697 37.2003 46.1827 37.2003ZM33.1233 42.1127C31.5015 42.1127 30.1821 40.7933 30.1821 39.1716C30.1821 37.5498 31.5015 36.2304 33.1233 36.2304C34.745 36.2304 36.0644 37.5498 36.0644 39.1716C36.0644 40.7933 34.7448 42.1127 33.1233 42.1127ZM33.1233 37.2003C32.0363 37.2003 31.152 38.0847 31.152 39.1716C31.152 40.2584 32.0363 41.1428 33.1233 41.1428C34.2103 41.1428 35.0946 40.2584 35.0946 39.1716C35.0946 38.0847 34.2103 37.2003 33.1233 37.2003ZM39.653 35.583C38.0312 35.583 36.7119 34.2636 36.7119 32.6418C36.7119 31.02 38.0312 29.7007 39.653 29.7007C41.2748 29.7007 42.5941 31.02 42.5941 32.6418C42.5941 34.2636 41.2746 35.583 39.653 35.583ZM39.653 30.6705C38.566 30.6705 37.6817 31.555 37.6817 32.6418C37.6817 33.7286 38.566 34.6131 39.653 34.6131C40.74 34.6131 41.6243 33.7286 41.6243 32.6418C41.6243 31.555 40.74 30.6705 39.653 30.6705Z",
            fill: color
          })]
        });

      default:
        return false;
    }
  } else if (category === "trousers") {
    switch (icon) {
      case 'Fit':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M38.8301 2.9209V5.27162",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M31.9746 2.9209V5.07572",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M47.6455 2.9209V5.07572",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M28.6432 78.1435C27.6493 48.0548 27.5351 31.4999 27.8595 2.33279C30.9938 0.961667 50.779 1.3534 52.7381 2.33281C53.2363 32.3497 53.047 48.9315 51.9545 78.1435L48.0367 79.3188L44.1188 78.1435C43.3362 53.7728 42.4731 40.2017 39.8091 16.2412C38.1992 40.7214 37.4518 54.239 36.2831 78.1435L33.1488 79.3188L28.6432 78.1435Z",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M32.9521 79.3185L33.3439 18.0039",
            stroke: color,
            "stroke-width": "0.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M48.0375 79.3185C48.3233 55.8592 48.1895 42.4652 47.2539 18.0039",
            stroke: color,
            "stroke-width": "0.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M27.8613 2.9209H52.5439",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M27.6641 5.0752H52.7384",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M40.0055 5.0752L39.8096 16.8288",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M42.5521 5.0752C42.4954 12.723 42.093 14.9102 39.8096 14.2822",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M27.6641 11.3438L30.7984 5.0752",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M50.1904 5.0752L52.9329 11.5397",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "40.2014",
            cy: "4.09491",
            r: "0.391786",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M25.2536 34.8046L24.9001 34.4511L24.5465 34.8046L23.7358 35.6154L23.3825 35.9686L23.7355 36.3222L26.0922 38.6831H20.3001H19.8001V39.1831V40.3331V40.8331H20.3001H26.0891L23.7303 43.1877L23.3762 43.5413L23.73 43.8951L24.5465 44.7116L24.9001 45.0652L25.2536 44.7116L29.8536 40.1117L30.2071 39.7581L29.8536 39.4046L25.2536 34.8046Z",
            fill: color,
            stroke: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M55.7288 44.712L56.0824 45.0655L56.4359 44.712L57.2466 43.9012L57.5999 43.548L57.247 43.1944L54.8902 40.8335H60.6823H61.1823V40.3335V39.1835V38.6835H60.6823H54.8933L57.2521 36.3289L57.6063 35.9753L57.2524 35.6215L56.4359 34.805L56.0824 34.4514L55.7288 34.805L51.1289 39.4049L50.7753 39.7585L51.1289 40.112L55.7288 44.712Z",
            fill: color,
            stroke: "white"
          })]
        });

      case 'PantsBottom':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M35.4551 13.8182L36.4096 37L39.546 47.5L38.5914 51.3182L52.9096 52.9545L61.3642 55.2727L62.5914 50.0909L60.9551 45.8636L62.5914 13",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M48.8184 13.9541L49.2275 52.1359",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M38.9998 52C35.8609 54.8967 33.8065 56.3579 29.8635 58.8182C20.4544 58.8182 17.1816 58.8182 17.1816 63.5909",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M16.9092 63.4545C24.1618 65.8848 28.3014 66.3164 35.7274 66.4545C44.9961 63.559 50.5425 62.5677 61.3637 62.5",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M16.9092 63.4541C40.9092 70.8177 36.9546 63.5902 50.591 63.5905",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M33.4092 56.9092C34.3637 61.4092 46.7728 52.0001 48.0001 61.8183",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M61.3642 55.2725C61.5751 58.1256 61.4173 59.6421 60.9551 62.0906",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M35.3184 58.1368C37.3706 55.3314 38.7788 54.046 42.0002 52.5459",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M49.6367 63.1817L61.6367 62.0908V66.1817L49.6367 66.9999V63.1817Z",
            fill: color
          })]
        });

      case 'PantsCuffs':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M7.5 16.3867C8.72361 33.9018 9.04811 44.2797 9.24915 63.3952L20.4 68.424L33.7373 63.3952C33.4899 46.6317 33.4577 36.5184 33.7373 16.3867",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M72 16.3867C70.7764 33.9018 70.4519 44.2797 70.2508 63.3952L59.1 68.424L45.7627 63.3952C46.0101 46.6317 46.0423 36.5184 45.7627 16.3867",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M21.0557 11.5762V68.205",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M58.4443 11.5762V68.205",
            stroke: color
          })]
        });

      case 'PantsFastening':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M44.6201 27.3535V72.4538",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M35.8261 27.1338C35.0362 49.4098 35.9376 58.7629 44.8406 58.3617",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M7.66016 7.99257C28.5706 7.08673 44.0843 7.32291 73.0006 7.99257",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M7 14.5928C31.7695 14.9193 45.6768 14.9736 70.5804 14.5928",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M7.2207 23.6133C32.1372 25.4091 46.235 25.5431 71.6811 23.6133",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M65.7396 14.8125C50.1029 14.8125 42.216 14.8125 26.5793 14.8125L21.7393 19.2125L27.0193 24.4926C42.7992 25.2948 51.791 25.6061 67.0596 24.0526",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "31.2011",
            cy: "19.6533",
            r: "2.58002",
            fill: color,
            stroke: color
          })]
        });

      case 'Pleats':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M18.6631 10.5469V15.9726",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M21.1289 10.5469V15.9726",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M35.9268 11.04V16.7124",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M57.6299 10.793V16.2187",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M59.6035 10.5469V15.9726",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M7.07227 73.189V9.31289C14.7177 6.35346 66.5091 6.10719 71.6882 9.31289L72.6747 73.189",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M7.07227 9.56055C16.6907 11.5336 71.4416 11.2869 71.4416 9.56055",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M37.1602 72.9427L39.6264 43.8408L42.3393 72.9427",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M6.8252 33.4832L14.7172 15.4795",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M65.0293 15.4795L72.1814 31.2635",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M6.8252 15.4795C31.0561 16.8237 45.3825 16.7521 71.9344 15.4795",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "38.6398",
            cy: "13.9992",
            r: "0.5",
            fill: color,
            stroke: color,
            "stroke-width": "0.973006"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M39.3789 16.4658V47.294",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M39.3789 40.1414C43.8481 39.713 45.4151 35.5932 45.2979 16.2188",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M20.6358 16.3721C19.9401 20.2321 20.082 23.4846 20.4406 28.2101",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M59.1103 16.3721C59.806 20.2321 59.6641 23.4846 59.3055 28.2101",
            stroke: color,
            "stroke-width": "1.5"
          })]
        });

      case 'Pockets':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M18.6631 10.5459V15.9716",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M21.1299 10.5459V15.9716",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M35.9277 11.04V16.7124",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M57.6289 10.793V16.2187",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M59.6035 10.5459V15.9716",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M7.07129 73.1888V9.31289C14.7167 6.35346 66.5079 6.10719 71.687 9.31289L72.6735 73.1888",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M7.07129 9.55957C16.6897 11.5326 71.4404 11.2859 71.4404 9.55957",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M37.1602 72.9426L39.6264 43.8408L42.3393 72.9426",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M6.8252 33.4821L14.7172 15.4785",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M65.0273 15.4785L72.1795 31.2625",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M6.8252 15.4785C31.056 16.8227 45.3824 16.7511 71.9342 15.4785",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "38.6408",
            cy: "13.9992",
            r: "0.5",
            fill: color,
            stroke: color,
            "stroke-width": "0.973"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M39.3789 16.4658V47.2939",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M39.3789 40.1414C43.8481 39.7129 45.4151 35.5932 45.2979 16.2188",
            stroke: color
          })]
        });

      case 'Rise':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M18.6631 10.5459V15.9717",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M21.1299 10.5459V15.9717",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M35.9277 11.04V16.7125",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M57.6299 10.793V16.2188",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M59.6035 10.5459V15.9717",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M7.07129 73.1894V9.31291C14.7167 6.35345 66.5085 6.10718 71.6876 9.31291L72.6741 73.1894",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M7.07129 9.55957C16.6898 11.5326 71.441 11.286 71.441 9.55957",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M37.1602 72.9428L39.6264 43.8408L42.3393 72.9428",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M6.8252 33.4823L14.7173 15.4785",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M65.0293 15.4785L72.1815 31.2627",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M6.8252 15.4785C31.0562 16.8228 45.3828 16.7511 71.9348 15.4785",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "38.6408",
            cy: "13.9992",
            r: "0.5",
            fill: color,
            stroke: color,
            "stroke-width": "0.973018"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M39.3789 16.4648V47.2933",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M39.3789 40.1416C43.8481 39.7131 45.4151 35.5934 45.298 16.2188",
            stroke: color,
            "stroke-width": "1.5"
          })]
        });

      case 'SuspenderButtons':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
            "clip-path": "url(#clip0)",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M65.7444 43.483C64.2713 45.2596 61.1124 32.5349 61.1378 23.96",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M37.8857 66.5155C43.0246 65.4389 45.1372 63.7405 45.1246 55.3281",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-2.03809 7.72746C30.7918 6.82322 49.154 6.69396 81.7575 7.72746",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M37.665 59.9355V72.6584",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M37.8853 16.2826C37.8753 12.7986 37.7423 10.8993 37.0078 7.72754",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M37.447 59.7157L11.5625 20.4502",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M14.6318 62.3479C19.3873 53.5284 20.9934 47.7248 21.6514 35.5859",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-2.25781 14.7471H6.29724C15.1423 18.713 13.9665 31.0142 6.29724 62.1289C18.5814 64.5414 31.9624 56.4251 37.4464 60.1546",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M45.123 47.8715C51.5057 42.8281 55.3133 40.4197 62.8912 37.5615",
              stroke: color,
              "stroke-width": "1.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M11.1221 19.353C32.2542 19.2617 44.1255 19.2065 63.5492 19.353",
              stroke: color,
              "stroke-width": "1.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M8.92871 16.5022C31.7138 16.2843 44.5075 16.1538 65.9624 16.5022",
              stroke: color,
              "stroke-width": "1.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M38.981 54.0128C38.8493 35.9719 39.3887 34.5228 38.1035 16.0635",
              stroke: color,
              "stroke-width": "1.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M37.4453 60.1556C48.7581 40.958 55.4945 30.5773 68.3751 12.9932H80.0012",
              stroke: color,
              "stroke-width": "1.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M37.4453 60.155C53.6195 49.0732 62.5085 43.3437 75.614 40.6319C73.2741 31.4919 68.5945 13.2119 68.5945 13.2119",
              stroke: color,
              "stroke-width": "1.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-2.25781 23.083H10.9038",
              stroke: color
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("defs", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("clipPath", {
              id: "clip0",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
                width: "80",
                height: "80",
                fill: "white"
              })
            })
          })]
        });

      default:
        return false;
    }
  } else if (category === "vests") {
    switch (icon) {
      case 'BreastPocket':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M25.5576 59.6288H31.4953",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "25.1326",
            cy: "59.6289",
            r: "2.0447",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M16.666 73.6359V50.7115C30.426 35.6546 35.2001 27.0756 35.7697 6.5",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M52.871 8.86517C49.7385 23.8535 51.3686 30.7177 63.9693 38.5214C60.2821 51.2576 58.8434 58.8761 58.3292 73.9998",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "36.1807",
            y: "37.4224",
            width: "16.1126",
            height: "1.5352",
            rx: "0.767602",
            fill: color,
            stroke: color
          })]
        });

      case 'Edge':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M47.7031 28.3196H53.0402",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "47.3205",
            cy: "28.3195",
            r: "1.78731",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M47.7031 44.3107H53.0402",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "47.3205",
            cy: "44.3107",
            r: "1.78731",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M19.6143 62.5242C19.4702 50.7536 19.4615 44.3198 19.6143 33.2076",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M63.8965 62.5242C64.0406 50.7536 64.0492 44.3198 63.8965 33.2076",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M4.0332 24.1875C4.30626 38.941 4.29281 46.8971 4.0332 60.6795C10.8917 64.8071 17.5555 65.0871 30.2746 64.9847C34.0098 60.7226 35.5434 58.5605 39.5 54.0005",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M38.2715 14.9619V53.094L48.317 64.9846C67.7693 64.6007 72.1276 62.8978 75.3785 58.8343C76.3203 45.6125 76.7924 38.179 76.8136 24.5974",
            stroke: color
          })]
        });

      case 'FrontPocket':
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "8.38209",
            y: "30.3019",
            width: "65.7932",
            height: "10.3479",
            rx: "5.17393",
            transform: "rotate(7.85167 8.38209 30.3019)",
            stroke: color
          })
        });

      case 'Lapels':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M41.2275 68.8013H46.2027",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "40.8725",
            cy: "68.8015",
            r: "1.63223",
            fill: color,
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M19.1934 7.85541C31.1127 12.6147 37.7662 11.9108 49.5776 7.85541",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M36.0742 58.318C46.8374 47.4271 49.6721 37.802 50.1114 15.3181L55.2642 19.5826L61.8386 17.2727C60.4816 28.0174 55.094 36.8618 36.0742 58.318Z",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M35.3633 58.318C24.6001 47.4271 20.344 37.802 19.9046 15.3181L14.7518 19.5826L8.17741 17.2727C9.5344 28.0174 16.3435 36.8618 35.3633 58.318Z",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M50.1123 15.3182L50.1735 15.375M50.1735 15.375L55.0875 19.938L59.5296 18.1611C58.8179 14.4445 58.1957 12.4408 56.509 9.09917L50.1123 7.5L50.1735 15.375Z",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M19.9043 15.3182L19.8431 15.375M19.8431 15.375L14.9291 19.938L10.487 18.1611C11.1987 14.4445 11.8209 12.4408 13.5076 9.09917L19.9043 7.5L19.8431 15.375Z",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M36.0755 58.318L33.7656 60.6279V71.9998",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M57.042 9.27676L69.3023 12.1197C64.1317 32.5337 62.9566 42.0193 71.6122 46.7684C69.2886 56.0512 68.7812 61.5045 68.0585 71.289",
            stroke: color
          })]
        });

      case 'Sleeve':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M41.2275 68.8013H46.2027",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "40.8725",
            cy: "68.8015",
            r: "1.63223",
            fill: color,
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M19.1934 7.85541C31.1127 12.6147 37.7662 11.9108 49.5776 7.85541",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M36.0742 58.318C46.8374 47.4271 49.6721 37.802 50.1114 15.3181L55.2642 19.5826L61.8386 17.2727C60.4816 28.0174 55.094 36.8618 36.0742 58.318Z",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M35.3633 58.318C24.6001 47.4271 20.344 37.802 19.9046 15.3181L14.7518 19.5826L8.17741 17.2727C9.5344 28.0174 16.3435 36.8618 35.3633 58.318Z",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M50.1123 15.3182L50.1735 15.375M50.1735 15.375L55.0875 19.938L59.5296 18.1611C58.8179 14.4445 58.1957 12.4408 56.509 9.09917L50.1123 7.5L50.1735 15.375Z",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M19.9043 15.3182L19.8431 15.375M19.8431 15.375L14.9291 19.938L10.487 18.1611C11.1987 14.4445 11.8209 12.4408 13.5076 9.09917L19.9043 7.5L19.8431 15.375Z",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M36.0755 58.318L33.7656 60.6279V71.9998",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M57.042 9.27676L69.3023 12.1197C64.1317 32.5337 62.9566 42.0193 71.6122 46.7684C69.2886 56.0512 68.7812 61.5045 68.0585 71.289",
            stroke: color
          })]
        });

      case 'Style':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M30.6954 7.89844C30.3907 21.3531 32.4827 28.1764 41.6147 38.671L41.1184 66.2174C37.3959 71.9252 25.7321 74.1587 21.0169 69.4436C21.0886 54.5948 20.6308 46.6065 18.2871 33.4595C25.0375 27.0155 25.0827 21.2416 20.7688 8.39477C24.9021 8.70474 27.1187 8.68753 30.6954 7.89844Z",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M48.3148 7.65039C48.8661 20.7226 48.5775 27.8671 39.3809 37.9266V67.2102C42.607 72.918 52.5337 72.918 58.986 68.451C58.9813 54.6058 59.3081 46.8654 62.2121 33.2115C56.8245 28.9017 55.5794 24.1965 58.986 8.39489C54.5899 8.67834 52.2843 8.47984 48.3148 7.65039Z",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M30.1992 8.14648C37.1507 9.8003 41.304 10.0032 49.5562 8.14648",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M44.8418 52.8164H48.3161",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "44.5925",
            cy: "52.8167",
            r: "0.988996",
            fill: color,
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M44.8418 63.7359H48.3161",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "44.5925",
            cy: "63.7361",
            r: "0.988996",
            fill: color,
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M44.8418 47.357H48.3161",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "44.5925",
            cy: "47.3572",
            r: "0.988996",
            fill: color,
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M44.8418 58.2764H48.3161",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "44.5925",
            cy: "58.2761",
            r: "0.988996",
            fill: color,
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M44.8418 41.8975H48.3161",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "44.5925",
            cy: "41.8972",
            r: "0.988996",
            fill: color,
            stroke: color
          })]
        });

      case 'Vest':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M30.8444 8.89471C30.5444 22.1403 32.6039 28.8576 41.594 39.1891L41.1054 66.3074C37.4407 71.9265 25.9582 74.1253 21.3163 69.4834C21.3869 54.8654 20.9362 47.0012 18.6289 34.0586C25.2744 27.7147 25.3189 22.0305 21.072 9.38333C25.1411 9.68848 27.3233 9.67154 30.8444 8.89471Z",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M48.1906 8.65039C48.7333 21.5195 48.4493 28.5529 39.3955 38.4561V67.2846C42.5715 72.9037 52.3439 72.9037 58.6959 68.5062C58.6914 54.8761 59.0131 47.256 61.872 33.8142C56.5681 29.5714 55.3423 24.9394 58.6959 9.38332C54.3682 9.66236 52.0985 9.46695 48.1906 8.65039Z",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M29.623 54.5805V70.7049",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M53.8096 54.5805V70.7049",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M30.3555 9.13901C37.199 10.7671 41.2877 10.9668 49.4116 9.13901",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M44.7705 61.177H48.1908",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "44.5254",
            cy: "61.1769",
            r: "0.965856",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M44.7705 52.8706H48.1908",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "44.5254",
            cy: "52.8704",
            r: "0.965856",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M44.7705 44.5637H48.1908",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "44.5254",
            cy: "44.5638",
            r: "0.965856",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "47.9346",
            y: "33.3142",
            width: "8.32928",
            height: "2.95447",
            stroke: color
          })]
        });

      case 'BackLining':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M22.1154 8.93587L31.7092 8.23389C37.9461 10.0946 41.5756 10.191 48.0889 8.23389L58.6188 8.93587C55.2342 21.6894 54.4346 28.0831 61.8947 33.2714C58.8227 44.876 58.4694 52.9272 58.3848 67.9028C44.1841 72.2208 36.4504 72.4793 21.4134 68.6048C22.4867 52.857 21.7758 45.2071 18.6055 33.2714C23.8535 30.5592 25.7837 27.2614 22.1154 8.93587Z",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("mask", {
            id: "mask0",
            "mask-type": "alpha",
            maskUnits: "userSpaceOnUse",
            x: "21",
            y: "8",
            width: "38",
            height: "64",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M24.2189 68.8389C25.6483 51.3595 25.3494 42.9274 21.8789 31.3996C24.8318 26.2539 24.5452 20.9621 22.1129 9.16998L31.9407 8C38.0596 10.29 41.9308 10.047 49.2564 8L58.8503 9.16998C55.7332 22.2811 55.1371 27.8417 58.8503 30.4636C54.3471 43.1944 54.9279 52.3889 56.0423 68.8389C43.629 72.1282 36.6394 72.0336 24.2189 68.8389Z",
              fill: "#C4C4C4"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
            mask: "url(#mask0)",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-1.66933 76.6983C0.75036 65.5235 20.6134 8.07975 34.0717 -24.7305",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M36.1383 104.266C38.558 93.0914 58.421 35.6476 71.8794 2.83735",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M17.233 90.4835C19.6527 79.3087 39.5157 21.8649 52.9741 -10.9454",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M7.53868 83.4039C9.95837 72.2291 29.8214 14.7853 43.2798 -18.025",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M45.3424 110.971C47.7621 99.796 67.6251 42.3522 81.0835 9.54194",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M26.441 97.189C28.8607 86.0142 48.7237 28.5705 62.1821 -4.2398",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M2.92539 80.0499C5.34509 68.8751 25.2081 11.4313 38.6665 -21.379",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M40.7408 107.621C43.1605 96.4459 63.0235 39.0021 76.4819 6.19184",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M21.8346 93.8375C24.2543 82.6627 44.1173 25.2189 57.5757 -7.59136",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M12.1295 86.7574C14.5492 75.5826 34.4122 18.1388 47.8706 -14.6714",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M31.0348 100.542C33.4545 89.3673 53.3175 31.9235 66.7758 -0.886774",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M0.373348 78.1894C3.08218 66.1941 24.5525 4.18901 38.9633 -31.3243",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M38.1888 105.758C40.8976 93.7624 62.3679 31.7574 76.7788 -3.75592",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M19.2786 91.9722C21.9875 79.9768 43.4578 17.9717 57.8686 -17.5416",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M10.0845 85.2671C12.1895 72.8314 33.5091 10.7165 48.6745 -24.2467",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M28.9915 99.0517C31.7003 87.0564 53.1706 25.0513 67.5815 -10.462",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M5.48077 81.9136C8.18961 69.9182 29.6599 7.91313 44.0708 -27.6002",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M43.2991 109.481C46.008 97.4861 67.4783 35.481 81.8891 -0.0322822",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M24.3899 95.6968C27.0988 83.7014 48.5691 21.6963 62.9799 -13.817",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M14.681 88.6201C17.3898 76.6247 38.8601 14.6197 53.271 -20.8936",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M33.5941 102.404C36.3029 90.4084 57.7732 28.4034 72.1841 -7.10992",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M-0.651754 77.4454C1.76794 66.2706 21.6309 8.82682 35.0893 -23.9835",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M37.1666 105.011C39.5863 93.8365 59.4493 36.3927 72.9077 3.58246",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M18.2574 91.2286C20.6771 80.0538 40.5401 22.61 53.9985 -10.2003",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M8.55528 84.149C10.975 72.9742 30.838 15.5304 44.2964 -17.2798",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M46.3629 111.717C48.7826 100.542 68.6456 43.0983 82.104 10.288",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M27.4576 97.9322C29.8773 86.7574 49.7403 29.3136 63.1987 -3.49664",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M4.4686 81.1675C6.28441 69.5524 25.9967 11.9988 40.2097 -20.2613",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M42.2752 108.736C44.0911 97.1213 63.8034 39.5677 78.0163 7.30753",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M23.37 94.9551C25.1858 83.34 44.8981 25.7864 59.111 -6.47372",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M13.6571 87.8755C15.4729 76.2605 35.1852 18.7068 49.3981 -13.5533",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M32.5702 101.659C34.386 90.0437 54.0983 32.4901 68.3112 0.229897",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M1.90874 79.3066C4.0137 66.871 25.3333 4.75605 40.4987 -30.2071",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M39.7203 106.875C41.8252 94.4398 63.1448 32.3249 78.3103 -2.63827",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M20.814 93.0918C22.919 80.6561 44.2386 18.5412 59.404 -16.422",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M11.1028 86.0127C13.8117 74.0173 35.282 12.0123 49.6928 -23.501",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M30.012 99.7969C32.7209 87.8015 54.1912 25.7964 68.602 -9.71685",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M6.51202 82.6606C9.22086 70.6653 30.6912 8.6602 45.102 -26.8531",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M44.8306 110.599C46.9356 98.1635 68.2552 36.0485 83.4206 1.08537",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M25.9253 96.8169C28.0303 84.3812 49.3499 22.2663 64.5153 -12.6969",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M16.2164 89.7378C18.3213 77.3021 39.6409 15.1872 54.8063 -19.776",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M35.1216 103.522C37.2266 91.0868 58.5462 28.9719 73.7116 -5.99129",
              stroke: color,
              "stroke-width": "0.25"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M55.3421 57.373C43.7549 62.4365 37.2985 62.792 25.1559 57.373C24.9229 58.0718 24.9227 58.3069 24.9219 59.0014L24.9219 59.011C36.8557 64.6269 49.0234 62.9889 55.3823 59.011L55.3421 57.373Z",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M24.2228 68.8389C25.6522 51.3595 25.3533 42.9274 21.8828 31.3996C24.8357 26.2539 24.5491 20.9621 22.1168 9.16998L31.9446 8C38.0635 10.29 41.9347 10.047 49.2603 8L58.8542 9.16998C55.7372 22.2811 55.141 27.8417 58.8542 30.4636C54.3511 43.1944 54.9318 52.3889 56.0462 68.8389C43.633 72.1282 36.6433 72.0336 24.2228 68.8389Z",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "39.4299",
            y: "61.5847",
            width: "1.87197",
            height: "0.935983",
            fill: "white",
            stroke: color,
            "stroke-width": "0.935983"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "40.7201",
            y: "61.4677",
            width: "0.701988",
            height: "1.16998",
            fill: "white",
            stroke: color,
            "stroke-width": "0.701988"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M46.686 61.3506C44.6842 61.6738 43.541 61.6398 41.5381 61.3506V62.7546C43.6238 63.0886 44.748 63.1402 46.686 62.7546V61.3506Z",
            fill: "white",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M40.1309 11.5098C41.0083 30.7567 40.8956 41.0732 40.1309 59.0109",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M40.3691 63.9253C40.6057 65.9891 40.4759 67.0667 40.3691 69.0732",
            stroke: color
          })]
        });

      case 'Buttons':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "40.0022",
            cy: "39.4573",
            r: "25.593",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "40.0027",
            cy: "39.4568",
            r: "22.8464",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("mask", {
            id: "path-3-inside-1",
            fill: "white",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M40.1088 30.9679C38.9525 30.9679 38.0117 30.0272 38.0117 28.871C38.0117 27.7146 38.9525 26.7739 40.1088 26.7739C41.2651 26.7739 42.2058 27.7146 42.2058 28.871C42.2058 30.0272 41.2651 30.9679 40.1088 30.9679ZM40.1088 27.4033C39.2995 27.4033 38.6411 28.0617 38.6411 28.871C38.6411 29.6802 39.2995 30.3385 40.1088 30.3385C40.9181 30.3385 41.5764 29.6802 41.5764 28.871C41.5764 28.0617 40.9181 27.4033 40.1088 27.4033Z"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M40.1088 30.9679C38.9525 30.9679 38.0117 30.0272 38.0117 28.871C38.0117 27.7146 38.9525 26.7739 40.1088 26.7739C41.2651 26.7739 42.2058 27.7146 42.2058 28.871C42.2058 30.0272 41.2651 30.9679 40.1088 30.9679ZM40.1088 27.4033C39.2995 27.4033 38.6411 28.0617 38.6411 28.871C38.6411 29.6802 39.2995 30.3385 40.1088 30.3385C40.9181 30.3385 41.5764 29.6802 41.5764 28.871C41.5764 28.0617 40.9181 27.4033 40.1088 27.4033Z",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M40.1088 29.9679C39.5047 29.9679 39.0117 29.4749 39.0117 28.871H37.0117C37.0117 30.5796 38.4003 31.9679 40.1088 31.9679V29.9679ZM39.0117 28.871C39.0117 28.2669 39.5048 27.7739 40.1088 27.7739V25.7739C38.4002 25.7739 37.0117 27.1623 37.0117 28.871H39.0117ZM40.1088 27.7739C40.7128 27.7739 41.2058 28.2669 41.2058 28.871H43.2058C43.2058 27.1623 41.8174 25.7739 40.1088 25.7739V27.7739ZM41.2058 28.871C41.2058 29.4749 40.7128 29.9679 40.1088 29.9679V31.9679C41.8174 31.9679 43.2058 30.5795 43.2058 28.871H41.2058ZM40.1088 26.4033C38.7472 26.4033 37.6411 27.5094 37.6411 28.871H39.6411C39.6411 28.614 39.8518 28.4033 40.1088 28.4033V26.4033ZM37.6411 28.871C37.6411 30.2326 38.7473 31.3385 40.1088 31.3385V29.3385C39.8517 29.3385 39.6411 29.1279 39.6411 28.871H37.6411ZM40.1088 31.3385C41.4703 31.3385 42.5764 30.2325 42.5764 28.871H40.5764C40.5764 29.1279 40.3658 29.3385 40.1088 29.3385V31.3385ZM42.5764 28.871C42.5764 27.5095 41.4704 26.4033 40.1088 26.4033V28.4033C40.3658 28.4033 40.5764 28.614 40.5764 28.871H42.5764Z",
            fill: color,
            mask: "url(#path-3-inside-1)"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("mask", {
            id: "path-5-inside-2",
            fill: "white",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M39.9899 54.0841C39.9665 54.0841 39.9431 54.0815 39.92 54.0762C36.9229 53.3931 34.7516 51.7557 33.4578 50.5024C32.5334 49.6069 31.9194 48.7864 31.6002 48.317L31.0437 49.1115C30.9847 49.1956 30.8884 49.2456 30.7859 49.2456C30.7847 49.2456 30.7836 49.2456 30.7823 49.2456C30.6784 49.2444 30.5818 49.192 30.5241 49.1055C29.5142 47.5909 29.1504 45.7483 29.4722 43.777C29.7138 42.2976 30.2491 41.2747 30.2718 41.2319C30.3255 41.1304 30.4301 41.0663 30.5449 41.0644C30.5465 41.0644 30.5482 41.0644 30.5499 41.0644C30.6627 41.0644 30.767 41.1248 30.8231 41.223C32.2824 43.7766 33.8691 45.2828 34.5041 45.7225C34.5977 45.7872 34.6492 45.8976 34.6386 46.0109C34.6279 46.1242 34.557 46.223 34.453 46.2692L33.7456 46.5827C35.0533 47.7699 36.6403 48.547 38.3772 48.85V36.7376H33.4047C33.0667 37.2282 32.5517 37.516 31.9958 37.516C31.0082 37.516 30.2047 36.6021 30.2047 35.4788C30.2047 34.3556 31.0081 33.4417 31.9958 33.4417C32.5516 33.4417 33.0666 33.7295 33.4047 34.2201H38.3772V32.5774C36.9365 31.906 36.0171 30.4736 36.0171 28.8707C36.0171 26.6149 37.8523 24.7798 40.108 24.7798C42.3637 24.7798 44.1988 26.6149 44.1988 28.8707C44.1988 30.5647 43.1647 32.0672 41.6028 32.6788V34.2201H46.5752C46.9133 33.7295 47.4283 33.4417 47.9841 33.4417C48.9717 33.4417 49.7751 34.3555 49.7751 35.4788C49.7751 36.6021 48.9717 37.516 47.9841 37.516C47.4283 37.516 46.9133 37.2283 46.5752 36.7376H41.6028V48.8501C43.3397 48.5471 44.9266 47.77 46.2343 46.5828L45.527 46.2693C45.4228 46.2231 45.3517 46.1242 45.3412 46.0107C45.3306 45.8973 45.3822 45.7869 45.4762 45.7223C46.1108 45.283 47.6975 43.7767 49.1568 41.223C49.2129 41.1249 49.3173 41.0644 49.43 41.0644C49.4317 41.0644 49.4335 41.0644 49.4351 41.0645C49.5498 41.0663 49.6544 41.1305 49.7082 41.2319C49.7308 41.2747 50.2661 42.2976 50.5077 43.7771C50.8296 45.7484 50.4659 47.591 49.4559 49.1056C49.3982 49.1921 49.3016 49.2445 49.1977 49.2457C49.1965 49.2457 49.1952 49.2457 49.194 49.2457C49.0915 49.2457 48.9952 49.1957 48.9363 49.1116L48.3798 48.317C48.0604 48.7866 47.4465 49.6071 46.5221 50.5024C45.2283 51.7558 43.057 53.3931 40.06 54.0763C40.0368 54.0815 40.0134 54.0841 39.9899 54.0841ZM31.6119 47.437C31.6166 47.437 31.6214 47.4371 31.6261 47.4373C31.7336 47.4421 31.8313 47.5016 31.8848 47.5951C31.9112 47.6408 34.5802 52.1799 39.9899 53.4464C45.4097 52.1776 48.0685 47.6409 48.0949 47.5951C48.1486 47.5016 48.2461 47.4422 48.3537 47.4373C48.4612 47.4314 48.5637 47.483 48.6256 47.5711L49.1768 48.3582C50.5849 45.8637 49.8245 43.1881 49.3888 42.0678C48.11 44.1661 46.8821 45.3695 46.2575 45.9048L46.9195 46.1981C47.0144 46.2402 47.0824 46.3263 47.1014 46.4282C47.1204 46.5303 47.0879 46.6351 47.0145 46.7084C45.4629 48.26 43.4973 49.2354 41.3302 49.5292C41.24 49.5414 41.1493 49.5142 41.0809 49.4544C41.0125 49.3946 40.9732 49.3082 40.9732 49.2174V36.4229C40.9732 36.2491 41.1141 36.1082 41.2879 36.1082H46.7493C46.863 36.1082 46.9677 36.1695 47.0234 36.2686C47.2414 36.6556 47.6004 36.8866 47.9839 36.8866C48.6245 36.8866 49.1455 36.255 49.1455 35.4788C49.1455 34.7025 48.6244 34.0711 47.9839 34.0711C47.6004 34.0711 47.2414 34.3021 47.0234 34.689C46.9677 34.7881 46.8629 34.8494 46.7493 34.8494H41.2881C41.1143 34.8494 40.9734 34.7085 40.9734 34.5347V32.4577C40.9734 32.3218 41.0606 32.2012 41.1897 32.1587C42.6131 31.6907 43.5694 30.3694 43.5694 28.8707C43.5694 26.962 42.0167 25.4092 40.108 25.4092C38.1993 25.4092 36.6466 26.962 36.6466 28.8707C36.6466 30.2878 37.4958 31.5473 38.8101 32.0795C38.9289 32.1277 39.0067 32.243 39.0067 32.3712V34.5348C39.0067 34.7086 38.8658 34.8495 38.692 34.8495H33.2305C33.1169 34.8495 33.0121 34.7882 32.9563 34.6892C32.7384 34.3022 32.3795 34.0712 31.9959 34.0712C31.3554 34.0712 30.8342 34.7027 30.8342 35.4789C30.8342 36.2552 31.3554 36.8867 31.9959 36.8867C32.3795 36.8867 32.7384 36.6556 32.9563 36.2687C33.0121 36.1697 33.1169 36.1084 33.2305 36.1084H38.692C38.8658 36.1084 39.0067 36.2493 39.0067 36.4231V49.2175C39.0067 49.3083 38.9674 49.3947 38.899 49.4545C38.8305 49.5142 38.74 49.5414 38.6497 49.5293C36.4825 49.2356 34.5169 48.2601 32.9653 46.7085C32.892 46.6352 32.8595 46.5304 32.8785 46.4283C32.8975 46.3264 32.9655 46.2403 33.0604 46.1982L33.7223 45.9048C33.0977 45.3697 31.8702 44.1665 30.5916 42.069C30.1572 43.1911 29.3989 45.8692 30.8031 48.3582L31.3543 47.5712C31.4133 47.4869 31.5096 47.437 31.6119 47.437Z"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M39.9899 54.0841C39.9665 54.0841 39.9431 54.0815 39.92 54.0762C36.9229 53.3931 34.7516 51.7557 33.4578 50.5024C32.5334 49.6069 31.9194 48.7864 31.6002 48.317L31.0437 49.1115C30.9847 49.1956 30.8884 49.2456 30.7859 49.2456C30.7847 49.2456 30.7836 49.2456 30.7823 49.2456C30.6784 49.2444 30.5818 49.192 30.5241 49.1055C29.5142 47.5909 29.1504 45.7483 29.4722 43.777C29.7138 42.2976 30.2491 41.2747 30.2718 41.2319C30.3255 41.1304 30.4301 41.0663 30.5449 41.0644C30.5465 41.0644 30.5482 41.0644 30.5499 41.0644C30.6627 41.0644 30.767 41.1248 30.8231 41.223C32.2824 43.7766 33.8691 45.2828 34.5041 45.7225C34.5977 45.7872 34.6492 45.8976 34.6386 46.0109C34.6279 46.1242 34.557 46.223 34.453 46.2692L33.7456 46.5827C35.0533 47.7699 36.6403 48.547 38.3772 48.85V36.7376H33.4047C33.0667 37.2282 32.5517 37.516 31.9958 37.516C31.0082 37.516 30.2047 36.6021 30.2047 35.4788C30.2047 34.3556 31.0081 33.4417 31.9958 33.4417C32.5516 33.4417 33.0666 33.7295 33.4047 34.2201H38.3772V32.5774C36.9365 31.906 36.0171 30.4736 36.0171 28.8707C36.0171 26.6149 37.8523 24.7798 40.108 24.7798C42.3637 24.7798 44.1988 26.6149 44.1988 28.8707C44.1988 30.5647 43.1647 32.0672 41.6028 32.6788V34.2201H46.5752C46.9133 33.7295 47.4283 33.4417 47.9841 33.4417C48.9717 33.4417 49.7751 34.3555 49.7751 35.4788C49.7751 36.6021 48.9717 37.516 47.9841 37.516C47.4283 37.516 46.9133 37.2283 46.5752 36.7376H41.6028V48.8501C43.3397 48.5471 44.9266 47.77 46.2343 46.5828L45.527 46.2693C45.4228 46.2231 45.3517 46.1242 45.3412 46.0107C45.3306 45.8973 45.3822 45.7869 45.4762 45.7223C46.1108 45.283 47.6975 43.7767 49.1568 41.223C49.2129 41.1249 49.3173 41.0644 49.43 41.0644C49.4317 41.0644 49.4335 41.0644 49.4351 41.0645C49.5498 41.0663 49.6544 41.1305 49.7082 41.2319C49.7308 41.2747 50.2661 42.2976 50.5077 43.7771C50.8296 45.7484 50.4659 47.591 49.4559 49.1056C49.3982 49.1921 49.3016 49.2445 49.1977 49.2457C49.1965 49.2457 49.1952 49.2457 49.194 49.2457C49.0915 49.2457 48.9952 49.1957 48.9363 49.1116L48.3798 48.317C48.0604 48.7866 47.4465 49.6071 46.5221 50.5024C45.2283 51.7558 43.057 53.3931 40.06 54.0763C40.0368 54.0815 40.0134 54.0841 39.9899 54.0841ZM31.6119 47.437C31.6166 47.437 31.6214 47.4371 31.6261 47.4373C31.7336 47.4421 31.8313 47.5016 31.8848 47.5951C31.9112 47.6408 34.5802 52.1799 39.9899 53.4464C45.4097 52.1776 48.0685 47.6409 48.0949 47.5951C48.1486 47.5016 48.2461 47.4422 48.3537 47.4373C48.4612 47.4314 48.5637 47.483 48.6256 47.5711L49.1768 48.3582C50.5849 45.8637 49.8245 43.1881 49.3888 42.0678C48.11 44.1661 46.8821 45.3695 46.2575 45.9048L46.9195 46.1981C47.0144 46.2402 47.0824 46.3263 47.1014 46.4282C47.1204 46.5303 47.0879 46.6351 47.0145 46.7084C45.4629 48.26 43.4973 49.2354 41.3302 49.5292C41.24 49.5414 41.1493 49.5142 41.0809 49.4544C41.0125 49.3946 40.9732 49.3082 40.9732 49.2174V36.4229C40.9732 36.2491 41.1141 36.1082 41.2879 36.1082H46.7493C46.863 36.1082 46.9677 36.1695 47.0234 36.2686C47.2414 36.6556 47.6004 36.8866 47.9839 36.8866C48.6245 36.8866 49.1455 36.255 49.1455 35.4788C49.1455 34.7025 48.6244 34.0711 47.9839 34.0711C47.6004 34.0711 47.2414 34.3021 47.0234 34.689C46.9677 34.7881 46.8629 34.8494 46.7493 34.8494H41.2881C41.1143 34.8494 40.9734 34.7085 40.9734 34.5347V32.4577C40.9734 32.3218 41.0606 32.2012 41.1897 32.1587C42.6131 31.6907 43.5694 30.3694 43.5694 28.8707C43.5694 26.962 42.0167 25.4092 40.108 25.4092C38.1993 25.4092 36.6466 26.962 36.6466 28.8707C36.6466 30.2878 37.4958 31.5473 38.8101 32.0795C38.9289 32.1277 39.0067 32.243 39.0067 32.3712V34.5348C39.0067 34.7086 38.8658 34.8495 38.692 34.8495H33.2305C33.1169 34.8495 33.0121 34.7882 32.9563 34.6892C32.7384 34.3022 32.3795 34.0712 31.9959 34.0712C31.3554 34.0712 30.8342 34.7027 30.8342 35.4789C30.8342 36.2552 31.3554 36.8867 31.9959 36.8867C32.3795 36.8867 32.7384 36.6556 32.9563 36.2687C33.0121 36.1697 33.1169 36.1084 33.2305 36.1084H38.692C38.8658 36.1084 39.0067 36.2493 39.0067 36.4231V49.2175C39.0067 49.3083 38.9674 49.3947 38.899 49.4545C38.8305 49.5142 38.74 49.5414 38.6497 49.5293C36.4825 49.2356 34.5169 48.2601 32.9653 46.7085C32.892 46.6352 32.8595 46.5304 32.8785 46.4283C32.8975 46.3264 32.9655 46.2403 33.0604 46.1982L33.7223 45.9048C33.0977 45.3697 31.8702 44.1665 30.5916 42.069C30.1572 43.1911 29.3989 45.8692 30.8031 48.3582L31.3543 47.5712C31.4133 47.4869 31.5096 47.437 31.6119 47.437Z",
            fill: color,
            stroke: color,
            "stroke-width": "2",
            mask: "url(#path-5-inside-2)"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("mask", {
            id: "path-6-inside-3",
            fill: "white",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M40.303 19.0187C40.4993 18.8441 40.5984 18.5651 40.4664 18.338C40.434 18.2822 40.3986 18.2321 40.3607 18.1886C40.2471 18.0581 40.1157 17.9924 39.9824 17.9996C39.8492 18.0067 39.72 18.0864 39.6105 18.2289C39.5011 18.3713 39.4161 18.5705 39.3659 18.802C39.3158 19.0335 39.3026 19.2874 39.3281 19.5326C39.3536 19.7779 39.4166 20.0039 39.5094 20.1832C39.6022 20.3625 39.7208 20.4873 39.8508 20.5424C40.0814 20.64 40.21 20.3346 40.1612 20.0889L40.0805 19.6816C40.0319 19.4368 40.1166 19.1846 40.303 19.0187Z"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M40.303 19.0187C40.4993 18.8441 40.5984 18.5651 40.4664 18.338C40.434 18.2822 40.3986 18.2321 40.3607 18.1886C40.2471 18.0581 40.1157 17.9924 39.9824 17.9996C39.8492 18.0067 39.72 18.0864 39.6105 18.2289C39.5011 18.3713 39.4161 18.5705 39.3659 18.802C39.3158 19.0335 39.3026 19.2874 39.3281 19.5326C39.3536 19.7779 39.4166 20.0039 39.5094 20.1832C39.6022 20.3625 39.7208 20.4873 39.8508 20.5424C40.0814 20.64 40.21 20.3346 40.1612 20.0889L40.0805 19.6816C40.0319 19.4368 40.1166 19.1846 40.303 19.0187Z",
            stroke: color,
            "stroke-width": "2",
            mask: "url(#path-6-inside-3)"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("mask", {
            id: "path-7-inside-4",
            fill: "white",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M40.1471 59.2417C40.1908 58.9973 40.0513 58.7031 39.8281 58.812C39.6992 58.875 39.5828 59.0069 39.4931 59.1918C39.4034 59.3766 39.3444 59.6064 39.3232 59.8531C39.302 60.0998 39.3195 60.3527 39.3737 60.5811C39.4278 60.8094 39.5162 61.0032 39.6281 61.139C39.74 61.2747 39.8705 61.3464 40.0038 61.3455C40.1371 61.3445 40.2673 61.2708 40.3786 61.1335C40.4186 61.0841 40.4556 61.0272 40.489 60.964C40.6085 60.7377 40.5051 60.4693 40.3068 60.3075C40.1181 60.1535 40.0277 59.9093 40.0706 59.6695L40.1471 59.2417Z"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M40.1471 59.2417C40.1908 58.9973 40.0513 58.7031 39.8281 58.812C39.6992 58.875 39.5828 59.0069 39.4931 59.1918C39.4034 59.3766 39.3444 59.6064 39.3232 59.8531C39.302 60.0998 39.3195 60.3527 39.3737 60.5811C39.4278 60.8094 39.5162 61.0032 39.6281 61.139C39.74 61.2747 39.8705 61.3464 40.0038 61.3455C40.1371 61.3445 40.2673 61.2708 40.3786 61.1335C40.4186 61.0841 40.4556 61.0272 40.489 60.964C40.6085 60.7377 40.5051 60.4693 40.3068 60.3075C40.1181 60.1535 40.0277 59.9093 40.0706 59.6695L40.1471 59.2417Z",
            stroke: color,
            "stroke-width": "2",
            mask: "url(#path-7-inside-4)"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("mask", {
            id: "path-8-inside-5",
            fill: "white",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M60.8318 39.1989C61.0065 39.0027 61.2855 38.9036 61.5126 39.0356C61.5684 39.068 61.6185 39.1033 61.662 39.1412C61.7925 39.2549 61.8582 39.3863 61.851 39.5195C61.8439 39.6527 61.7642 39.7819 61.6217 39.8914C61.4792 40.0009 61.2801 40.0859 61.0486 40.136C60.8171 40.1862 60.5632 40.1993 60.318 40.1739C60.0727 40.1484 59.8466 40.0854 59.6673 39.9926C59.488 39.8998 59.3633 39.7811 59.3082 39.6511C59.2106 39.4205 59.516 39.292 59.7617 39.3407L60.1689 39.4215C60.4137 39.47 60.666 39.3854 60.8318 39.1989Z"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M60.8318 39.1989C61.0065 39.0027 61.2855 38.9036 61.5126 39.0356C61.5684 39.068 61.6185 39.1033 61.662 39.1412C61.7925 39.2549 61.8582 39.3863 61.851 39.5195C61.8439 39.6527 61.7642 39.7819 61.6217 39.8914C61.4792 40.0009 61.2801 40.0859 61.0486 40.136C60.8171 40.1862 60.5632 40.1993 60.318 40.1739C60.0727 40.1484 59.8466 40.0854 59.6673 39.9926C59.488 39.8998 59.3633 39.7811 59.3082 39.6511C59.2106 39.4205 59.516 39.292 59.7617 39.3407L60.1689 39.4215C60.4137 39.47 60.666 39.3854 60.8318 39.1989Z",
            stroke: color,
            "stroke-width": "2",
            mask: "url(#path-8-inside-5)"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("mask", {
            id: "path-9-inside-6",
            fill: "white",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M20.106 39.3549C20.3504 39.3111 20.6445 39.4507 20.5356 39.6738C20.4727 39.8028 20.3407 39.9192 20.1559 40.0088C19.971 40.0985 19.7412 40.1575 19.4945 40.1788C19.2479 40.2 18.9949 40.1824 18.7666 40.1283C18.5383 40.0741 18.3444 39.9857 18.2087 39.8738C18.073 39.762 18.0012 39.6314 18.0022 39.4982C18.0032 39.3649 18.0768 39.2347 18.2142 39.1233C18.2636 39.0833 18.3205 39.0463 18.3837 39.013C18.61 38.8934 18.8784 38.9969 19.0402 39.1951C19.1942 39.3838 19.4383 39.4743 19.6781 39.4314L20.106 39.3549Z"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M20.106 39.3549C20.3504 39.3111 20.6445 39.4507 20.5356 39.6738C20.4727 39.8028 20.3407 39.9192 20.1559 40.0088C19.971 40.0985 19.7412 40.1575 19.4945 40.1788C19.2479 40.2 18.9949 40.1824 18.7666 40.1283C18.5383 40.0741 18.3444 39.9857 18.2087 39.8738C18.073 39.762 18.0012 39.6314 18.0022 39.4982C18.0032 39.3649 18.0768 39.2347 18.2142 39.1233C18.2636 39.0833 18.3205 39.0463 18.3837 39.013C18.61 38.8934 18.8784 38.9969 19.0402 39.1951C19.1942 39.3838 19.4383 39.4743 19.6781 39.4314L20.106 39.3549Z",
            stroke: color,
            "stroke-width": "2",
            mask: "url(#path-9-inside-6)"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("mask", {
            id: "path-10-inside-7",
            fill: "white",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M53.6853 53.8352C53.6707 54.0867 53.7927 54.3432 54.0363 54.4077C54.0961 54.4236 54.1541 54.4335 54.2093 54.4374C54.3749 54.4488 54.5086 54.4042 54.5941 54.309C54.6796 54.2138 54.7132 54.0721 54.6908 53.9012C54.6684 53.7303 54.591 53.5376 54.468 53.3465C54.345 53.1555 54.1817 52.9744 53.9981 52.8253C53.8144 52.6762 53.6184 52.5656 53.4338 52.507C53.2492 52.4483 53.0841 52.4441 52.9586 52.495C52.736 52.5852 52.856 52.8795 53.0556 53.0131L53.3867 53.2346C53.5857 53.3677 53.6993 53.5962 53.6853 53.8352Z"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M53.6853 53.8352C53.6707 54.0867 53.7927 54.3432 54.0363 54.4077C54.0961 54.4236 54.1541 54.4335 54.2093 54.4374C54.3749 54.4488 54.5086 54.4042 54.5941 54.309C54.6796 54.2138 54.7132 54.0721 54.6908 53.9012C54.6684 53.7303 54.591 53.5376 54.468 53.3465C54.345 53.1555 54.1817 52.9744 53.9981 52.8253C53.8144 52.6762 53.6184 52.5656 53.4338 52.507C53.2492 52.4483 53.0841 52.4441 52.9586 52.495C52.736 52.5852 52.856 52.8795 53.0556 53.0131L53.3867 53.2346C53.5857 53.3677 53.6993 53.5962 53.6853 53.8352Z",
            stroke: color,
            "stroke-width": "2",
            mask: "url(#path-10-inside-7)"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("mask", {
            id: "path-11-inside-8",
            fill: "white",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M26.5092 26.4464C26.6453 26.6418 26.9395 26.7466 27.017 26.5214C27.0618 26.3913 27.0512 26.2228 26.9866 26.0366C26.9221 25.8504 26.8062 25.6545 26.6533 25.4728C26.5004 25.2911 26.3169 25.1314 26.1253 25.0133C25.9337 24.8951 25.7423 24.8236 25.5743 24.8074C25.4064 24.7913 25.2692 24.8311 25.1794 24.9222C25.0897 25.0132 25.0513 25.1515 25.069 25.3202C25.0754 25.3809 25.0889 25.4445 25.1091 25.5101C25.1815 25.7446 25.4337 25.8565 25.6779 25.8318C25.9104 25.8082 26.1373 25.9125 26.2709 26.1042L26.5092 26.4464Z"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M26.5092 26.4464C26.6453 26.6418 26.9395 26.7466 27.017 26.5214C27.0618 26.3913 27.0512 26.2228 26.9866 26.0366C26.9221 25.8504 26.8062 25.6545 26.6533 25.4728C26.5004 25.2911 26.3169 25.1314 26.1253 25.0133C25.9337 24.8951 25.7423 24.8236 25.5743 24.8074C25.4064 24.7913 25.2692 24.8311 25.1794 24.9222C25.0897 25.0132 25.0513 25.1515 25.069 25.3202C25.0754 25.3809 25.0889 25.4445 25.1091 25.5101C25.1815 25.7446 25.4337 25.8565 25.6779 25.8318C25.9104 25.8082 26.1373 25.9125 26.2709 26.1042L26.5092 26.4464Z",
            stroke: color,
            "stroke-width": "2",
            mask: "url(#path-11-inside-8)"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("mask", {
            id: "path-12-inside-9",
            fill: "white",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M26.0715 54.0715C26.0862 54.323 25.9641 54.5795 25.7205 54.644C25.6607 54.6599 25.6028 54.6699 25.5476 54.6737C25.382 54.6851 25.2482 54.6405 25.1627 54.5453C25.0772 54.4501 25.0436 54.3084 25.066 54.1375C25.0884 53.9666 25.1658 53.7739 25.2888 53.5829C25.4118 53.3918 25.5751 53.2107 25.7588 53.0616C25.9424 52.9126 26.1385 52.8019 26.323 52.7433C26.5076 52.6846 26.6727 52.6805 26.7982 52.7313C27.0209 52.8215 26.9009 53.1159 26.7012 53.2494L26.3702 53.4709C26.1712 53.604 26.0576 53.8325 26.0715 54.0715Z"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M26.0715 54.0715C26.0862 54.323 25.9641 54.5795 25.7205 54.644C25.6607 54.6599 25.6028 54.6699 25.5476 54.6737C25.382 54.6851 25.2482 54.6405 25.1627 54.5453C25.0772 54.4501 25.0436 54.3084 25.066 54.1375C25.0884 53.9666 25.1658 53.7739 25.2888 53.5829C25.4118 53.3918 25.5751 53.2107 25.7588 53.0616C25.9424 52.9126 26.1385 52.8019 26.323 52.7433C26.5076 52.6846 26.6727 52.6805 26.7982 52.7313C27.0209 52.8215 26.9009 53.1159 26.7012 53.2494L26.3702 53.4709C26.1712 53.604 26.0576 53.8325 26.0715 54.0715Z",
            stroke: color,
            "stroke-width": "2",
            mask: "url(#path-12-inside-9)"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("mask", {
            id: "path-13-inside-10",
            fill: "white",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M53.5885 26.3414C53.4523 26.5368 53.1582 26.6417 53.0807 26.4165C53.0359 26.2863 53.0464 26.1178 53.111 25.9316C53.1756 25.7454 53.2914 25.5495 53.4443 25.3678C53.5973 25.1861 53.7807 25.0264 53.9723 24.9083C54.1639 24.7902 54.3554 24.7186 54.5233 24.7025C54.6913 24.6863 54.8285 24.7262 54.9182 24.8172C55.008 24.9083 55.0463 25.0466 55.0287 25.2152C55.0223 25.2759 55.0088 25.3395 54.9886 25.4051C54.9161 25.6396 54.664 25.7515 54.4197 25.7268C54.1873 25.7033 53.9603 25.8075 53.8268 25.9993L53.5885 26.3414Z"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M53.5885 26.3414C53.4523 26.5368 53.1582 26.6417 53.0807 26.4165C53.0359 26.2863 53.0464 26.1178 53.111 25.9316C53.1756 25.7454 53.2914 25.5495 53.4443 25.3678C53.5973 25.1861 53.7807 25.0264 53.9723 24.9083C54.1639 24.7902 54.3554 24.7186 54.5233 24.7025C54.6913 24.6863 54.8285 24.7262 54.9182 24.8172C55.008 24.9083 55.0463 25.0466 55.0287 25.2152C55.0223 25.2759 55.0088 25.3395 54.9886 25.4051C54.9161 25.6396 54.664 25.7515 54.4197 25.7268C54.1873 25.7033 53.9603 25.8075 53.8268 25.9993L53.5885 26.3414Z",
            stroke: color,
            "stroke-width": "2",
            mask: "url(#path-13-inside-10)"
          })]
        });

      case 'Lining':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M53.833 32.4727H51.7402L52.5012 33.9947H53.833V32.4727Z",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("mask", {
            id: "mask0",
            "mask-type": "alpha",
            maskUnits: "userSpaceOnUse",
            x: "47",
            y: "33",
            width: "11",
            height: "39",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M57.5595 71.7133C58.048 56.4251 56.5645 47.9278 47.749 33.043L48.51 68.6198C51.686 70.0574 54.1117 72.1894 57.5595 71.7133Z",
              fill: "#C4C4C4"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
            mask: "url(#mask0)",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M33.39 67.6278C34.5234 62.3936 43.8272 35.4872 50.131 20.119",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M51.099 80.5404C52.2324 75.3062 61.5361 48.3998 67.84 33.0316",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M42.2436 74.0849C43.3769 68.8506 52.6807 41.9442 58.9845 26.576",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M37.7016 70.769C38.8349 65.5347 48.1387 38.6283 54.4425 23.2601",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M55.4096 83.6811C56.5429 78.4468 65.8467 51.5404 72.1505 36.1722",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M46.5561 77.2255C47.6894 71.9913 56.9932 45.0849 63.297 29.7167",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M35.5424 69.1982C36.6758 63.9639 45.9795 37.0575 52.2834 21.6893",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M53.2533 82.1117C54.3867 76.8775 63.6904 49.9711 69.9943 34.6029",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M44.3988 75.6557C45.5322 70.4214 54.836 43.515 61.1398 28.1468",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M39.8539 72.3398C40.9873 67.1055 50.291 40.1991 56.5949 24.8309",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M48.7084 78.7963C49.8418 73.5621 59.1455 46.6557 65.4494 31.2875",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M34.3457 68.3264C35.6145 62.7078 45.6711 33.6649 52.4211 17.0306",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M52.0595 81.2395C53.3283 75.6209 63.3849 46.578 70.1349 29.9437",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M43.2011 74.7824C44.4699 69.1639 54.5265 40.121 61.2765 23.4867",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M38.8955 71.6415C39.8815 65.8167 49.8675 36.7223 56.9709 20.3457",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M47.7509 78.0984C49.0197 72.4798 59.0763 43.4369 65.8263 26.8026",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M36.7392 70.071C38.008 64.4524 48.0646 35.4095 54.8146 18.7753",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M54.4531 82.9836C55.7219 77.365 65.7785 48.3221 72.5285 31.6879",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M45.5957 76.5271C46.8645 70.9085 56.9211 41.8656 63.6711 25.2313",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M41.0478 73.2121C42.3166 67.5936 52.3732 38.5506 59.1232 21.9164",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M49.9062 79.6687C51.175 74.0501 61.2316 45.0072 67.9816 28.3729",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M33.8666 67.9779C35 62.7437 44.3037 35.8373 50.6076 20.4691",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M51.5795 80.8901C52.7129 75.6558 62.0166 48.7494 68.3205 33.3812",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M42.7221 74.434C43.8554 69.1998 53.1592 42.2934 59.463 26.9252",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M38.1791 71.1181C39.3125 65.8839 48.6162 38.9774 54.9201 23.6092",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M55.8881 84.0307C57.0215 78.7964 66.3252 51.89 72.6291 36.5218",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M47.0326 77.5737C48.166 72.3394 57.4697 45.433 63.7736 30.0648",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M36.2641 69.7213C37.1147 64.2808 46.3478 37.323 53.0051 22.2124",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M53.9722 82.6349C54.8227 77.1944 64.0558 50.2365 70.7131 35.126",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M45.1186 76.1793C45.9692 70.7388 55.2023 43.781 61.8596 28.6704",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M40.5688 72.8634C41.4194 67.4229 50.6525 40.4651 57.3098 25.3545",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M49.4272 79.3194C50.2778 73.879 59.5109 46.9211 66.1682 31.8106",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M35.0655 68.85C36.0514 63.0252 46.0374 33.9308 53.1409 17.5542",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M52.7764 81.7631C53.7624 75.9383 63.7484 46.8439 70.8518 30.4673",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M43.9209 75.3066C44.9069 69.4818 54.8929 40.3874 61.9963 24.0108",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M39.373 71.9909C40.6418 66.3724 50.6984 37.3295 57.4484 20.6952",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M48.2294 78.447C49.4983 72.8284 59.5549 43.7855 66.3048 27.1512",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M37.2216 70.4206C38.4904 64.8021 48.547 35.7591 55.297 19.1249",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M55.169 83.5067C56.1549 77.682 66.141 48.5876 73.2444 32.211",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M46.3155 77.0512C47.3014 71.2264 57.2874 42.132 64.3909 25.7554",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M41.7666 73.7358C42.7526 67.911 52.7386 38.8166 59.842 22.44",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M50.6211 80.1923C51.6071 74.3675 61.5931 45.2731 68.6965 28.8965",
              stroke: color,
              "stroke-width": "0.25"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M57.8305 71.8545C58.319 56.5663 56.7529 47.9283 47.9375 33.0435L48.5083 68.8105C53.0743 71.2838 54.2158 71.8545 57.8305 71.8545Z",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M21.1104 10.0233C26.2861 27.1912 24.1947 30.5755 18.0664 33.6144C21.0935 44.4318 21.1086 52.9738 21.1104 68.2399C36.9082 73.7656 42.7678 70.6348 39.9452 37.6096C31.9118 28.5922 30.5138 21.9508 30.4327 8.88184C26.5956 9.88605 24.5757 10.0758 21.1104 10.0233Z",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M57.0682 10.2135C52.9297 10.1063 50.8794 9.87794 47.5557 9.26221L48.5069 68.8106C58.5902 75.0888 65.4319 74.0599 58.0194 47.5025L60.3024 33.6142C53.7006 29.9093 53.3683 24.4105 57.0682 10.2135Z",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M47.7451 23.7212C52.7987 34.6157 54.9379 40.4276 58.5894 49.2147",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "37.0917",
            cy: "43.6977",
            r: "0.641502",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "37.0917",
            cy: "51.6884",
            r: "0.641502",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "36.7108",
            cy: "59.6786",
            r: "0.641502",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M28.5303 54.1616C29.1077 60.1655 29.2194 63.4152 29.101 69.0011",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M30.4326 8.88184C36.5826 10.6499 40.3949 10.6357 47.5551 9.26234",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M35.9502 69.0008C40.9573 68.0219 43.7953 67.761 48.8872 68.8108",
            stroke: color
          })]
        });

      case 'Monogram':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M21.1511 53.0006C21.1031 52.0646 21.0431 51.1526 20.9711 50.2646C20.9231 49.3526 20.8631 48.4526 20.7911 47.5646H11.4311C10.9511 48.4526 10.4471 49.3526 9.91906 50.2646C9.39106 51.1526 8.88706 52.0646 8.40706 53.0006H2.53906C4.09906 50.3126 5.55106 47.8286 6.89506 45.5486C8.26306 43.2686 9.57106 41.1206 10.8191 39.1046C12.0911 37.0886 13.3271 35.1806 14.5271 33.3806C15.7271 31.5566 16.9511 29.7806 18.1991 28.0526H23.2031C23.5871 29.7806 23.9471 31.7006 24.2831 33.8126C24.6431 35.9006 24.9671 38.0486 25.2551 40.2566C25.5671 42.4406 25.8431 44.6366 26.0831 46.8446C26.3471 49.0286 26.5871 51.0806 26.8031 53.0006H21.1511ZM19.4951 33.5246C18.4871 35.1326 17.4911 36.7286 16.5071 38.3126C15.5471 39.8966 14.6111 41.5166 13.6991 43.1726H20.4311C20.3111 41.7086 20.1791 40.1486 20.0351 38.4926C19.9151 36.8366 19.7351 35.1806 19.4951 33.5246Z",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M38.703 53.3246C37.263 53.3246 35.787 53.2646 34.275 53.1446C32.763 53.0246 31.395 52.8326 30.171 52.5686L35.931 28.4486C37.299 28.1846 38.727 28.0046 40.215 27.9086C41.727 27.8126 43.107 27.7646 44.355 27.7646C45.795 27.7646 47.031 27.9206 48.063 28.2326C49.119 28.5206 49.971 28.9166 50.619 29.4206C51.291 29.9246 51.783 30.5246 52.095 31.2206C52.431 31.8926 52.599 32.6126 52.599 33.3806C52.599 33.9086 52.539 34.4606 52.419 35.0366C52.323 35.6126 52.107 36.1886 51.771 36.7646C51.459 37.3166 51.015 37.8446 50.439 38.3486C49.887 38.8526 49.155 39.3086 48.243 39.7166C49.323 40.1966 50.115 40.8566 50.619 41.6966C51.123 42.5126 51.375 43.4246 51.375 44.4326C51.375 45.5846 51.147 46.7006 50.691 47.7806C50.235 48.8366 49.503 49.7846 48.495 50.6246C47.487 51.4406 46.179 52.1006 44.571 52.6046C42.963 53.0846 41.007 53.3246 38.703 53.3246ZM38.199 42.0926L36.651 48.5726C37.035 48.6446 37.515 48.7046 38.091 48.7526C38.691 48.7766 39.243 48.7886 39.747 48.7886C40.467 48.7886 41.175 48.7406 41.871 48.6446C42.591 48.5246 43.227 48.3206 43.779 48.0326C44.355 47.7446 44.823 47.3486 45.183 46.8446C45.543 46.3406 45.723 45.6926 45.723 44.9006C45.723 44.5646 45.651 44.2286 45.507 43.8926C45.387 43.5566 45.183 43.2566 44.895 42.9926C44.607 42.7286 44.223 42.5126 43.743 42.3446C43.287 42.1766 42.735 42.0926 42.087 42.0926H38.199ZM39.243 37.8806H42.771C44.211 37.8806 45.279 37.5686 45.975 36.9446C46.695 36.3206 47.055 35.5766 47.055 34.7126C47.055 34.2566 46.947 33.8726 46.731 33.5606C46.539 33.2246 46.275 32.9606 45.939 32.7686C45.603 32.5766 45.219 32.4446 44.787 32.3726C44.355 32.2766 43.911 32.2286 43.455 32.2286C42.951 32.2286 42.411 32.2526 41.835 32.3006C41.259 32.3246 40.827 32.3606 40.539 32.4086L39.243 37.8806Z",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M73.3243 51.9206C72.3403 52.4006 71.2483 52.7846 70.0483 53.0726C68.8484 53.3606 67.3843 53.5046 65.6563 53.5046C64.1683 53.5046 62.8003 53.2646 61.5523 52.7846C60.3283 52.2806 59.2723 51.5726 58.3843 50.6606C57.5203 49.7486 56.8483 48.6446 56.3683 47.3486C55.8883 46.0286 55.6483 44.5526 55.6483 42.9206C55.6483 41.0486 55.9723 39.1886 56.6203 37.3406C57.2923 35.4926 58.2643 33.8486 59.5363 32.4086C60.8323 30.9446 62.4043 29.7566 64.2523 28.8446C66.1243 27.9326 68.2723 27.4766 70.6963 27.4766C71.8483 27.4766 72.9763 27.6086 74.0803 27.8726C75.2083 28.1366 76.3843 28.6046 77.6083 29.2766L75.5923 33.6326C74.5843 33.1046 73.6843 32.7446 72.8923 32.5526C72.1003 32.3606 71.2484 32.2646 70.3363 32.2646C68.9684 32.2646 67.7323 32.5406 66.6283 33.0926C65.5483 33.6446 64.6123 34.4006 63.8203 35.3606C63.0523 36.2966 62.4643 37.3886 62.0563 38.6366C61.6483 39.8846 61.4443 41.2046 61.4443 42.5966C61.4443 44.7086 61.9003 46.2446 62.8123 47.2046C63.7483 48.1646 65.0803 48.6446 66.8083 48.6446C67.9604 48.6446 69.0163 48.5246 69.9763 48.2846C70.9604 48.0446 71.8724 47.7326 72.7123 47.3486L73.3243 51.9206Z",
            fill: color
          })]
        });

      case 'Threads':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "11.1953",
            y: "42.5",
            width: "4",
            height: "57",
            transform: "rotate(-90 11.1953 42.5)",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "39.3473",
            cy: "40.1707",
            r: "19.3473",
            transform: "rotate(-90 39.3473 40.1707)",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "39.3473",
            cy: "40.1707",
            r: "19.3473",
            transform: "rotate(-90 39.3473 40.1707)",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
            cx: "32.8949",
            cy: "40.4587",
            rx: "2.24252",
            ry: "2.80315",
            transform: "rotate(-90 32.8949 40.4587)",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
            cx: "39.0619",
            cy: "46.6217",
            rx: "2.80315",
            ry: "2.24252",
            transform: "rotate(-90 39.0619 46.6217)",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "45.7884",
            cy: "40.4587",
            r: "2.24252",
            transform: "rotate(-90 45.7884 40.4587)",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "39.0619",
            cy: "33.7292",
            r: "2.24252",
            transform: "rotate(-90 39.0619 33.7292)",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M58.6949 40.1707C58.6949 50.839 50.0156 59.5181 39.3473 59.5181C28.6791 59.5181 20 50.839 20 40.1707C20 29.5025 28.6791 20.8234 39.3473 20.8234C50.0156 20.8234 58.6949 29.5027 58.6949 40.1707ZM20.9698 40.1707C20.9698 50.3042 29.2141 58.5484 39.3473 58.5484C49.4808 58.5484 57.725 50.3044 57.725 40.1709C57.725 30.0375 49.4808 21.7934 39.3473 21.7934C29.2141 21.7932 20.9698 30.0375 20.9698 40.1707ZM53.8096 40.1707C53.8096 48.1451 47.3219 54.6328 39.3473 54.6328C31.3731 54.6328 24.8853 48.1451 24.8853 40.1707C24.8853 32.1963 31.3729 25.7087 39.3473 25.7087C47.3217 25.7087 53.8096 32.1965 53.8096 40.1707ZM25.8553 40.1707C25.8553 47.6104 31.9079 53.663 39.3475 53.663C46.7872 53.663 52.8399 47.6104 52.8399 40.1707C52.8399 32.7311 46.7874 26.6785 39.3475 26.6785C31.9079 26.6785 25.8553 32.7311 25.8553 40.1707ZM48.8184 40.1707C48.8184 41.7925 47.499 43.1119 45.8773 43.1119C44.2555 43.1119 42.9359 41.7925 42.9359 40.1707C42.9359 38.549 44.2555 37.2296 45.8773 37.2296C47.499 37.2296 48.8184 38.5492 48.8184 40.1707ZM43.9058 40.1707C43.9058 41.2577 44.7903 42.142 45.8773 42.142C46.9643 42.142 47.8486 41.2577 47.8486 40.1707C47.8486 39.0837 46.9641 38.1994 45.8773 38.1994C44.7903 38.1994 43.9058 39.0837 43.9058 40.1707ZM42.2885 33.641C42.2885 35.2628 40.9691 36.5821 39.3473 36.5821C37.7256 36.5821 36.4062 35.2628 36.4062 33.641C36.4062 32.0192 37.7256 30.6997 39.3473 30.6997C40.9691 30.6997 42.2885 32.0192 42.2885 33.641ZM37.376 33.641C37.376 34.728 38.2605 35.6123 39.3473 35.6123C40.4341 35.6123 41.3186 34.728 41.3186 33.641C41.3186 32.554 40.4341 31.6695 39.3473 31.6695C38.2605 31.6695 37.376 32.554 37.376 33.641ZM42.2885 46.7005C42.2885 48.3222 40.9691 49.6416 39.3473 49.6416C37.7256 49.6416 36.4062 48.3222 36.4062 46.7005C36.4062 45.0787 37.7256 43.7593 39.3473 43.7593C40.9691 43.7593 42.2885 45.0789 42.2885 46.7005ZM37.376 46.7005C37.376 47.7875 38.2605 48.6718 39.3473 48.6718C40.4341 48.6718 41.3186 47.7875 41.3186 46.7005C41.3186 45.6135 40.4341 44.7292 39.3473 44.7292C38.2605 44.7292 37.376 45.6135 37.376 46.7005ZM35.7587 40.1707C35.7587 41.7925 34.4394 43.1119 32.8176 43.1119C31.1958 43.1119 29.8765 41.7925 29.8765 40.1707C29.8765 38.549 31.1958 37.2296 32.8176 37.2296C34.4394 37.2296 35.7587 38.5492 35.7587 40.1707ZM30.8463 40.1707C30.8463 41.2577 31.7308 42.142 32.8176 42.142C33.9044 42.142 34.7889 41.2577 34.7889 40.1707C34.7889 39.0837 33.9044 38.1994 32.8176 38.1994C31.7308 38.1994 30.8463 39.0837 30.8463 40.1707Z",
            fill: color
          })]
        });

      default:
        return false;
    }
  } else if (category === "blazer") {
    switch (icon) {
      case 'Style':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            width: "80",
            height: "80",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M33.3887 9.55469L20.2063 14.8278C17.0272 34.1539 17.0786 46.0281 17.7894 67.5584C20.3937 69.256 21.8878 69.1558 24.6005 67.7781C24.1133 53.3166 24.1128 45.2827 24.6005 31.0864C26.5328 36.6227 27.1131 43.3554 25.9187 71.2935C32.7042 73.244 35.7844 73.4776 39.1014 71.2935V42.7311C33.9165 30.5781 31.81 25.0662 29.2144 17.0249L33.6086 12.4109L31.0977 15.0475L28.3353 14.608L33.3887 9.55469Z",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M45.9131 9.55469L59.0955 14.8278C62.2745 34.1539 62.2231 46.0281 61.5123 67.5584C58.908 69.256 57.414 69.1558 54.7013 67.7781C55.1884 53.3165 55.189 45.2827 54.7013 31.0864C52.7689 36.6227 52.1886 43.3554 53.383 71.2935C46.5976 73.244 42.6383 73.2578 39.3213 71.0738L39.1016 46.6859C44.2865 34.5329 47.4918 25.0662 50.0873 17.0249L45.6931 12.4109L48.2041 15.0475L50.9664 14.608L45.9131 9.55469Z",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M39.3209 37.458L39.1011 42.7311L45.9122 9.55473C42.8362 6.03945 36.2449 6.25912 33.1689 9.55473L33.6084 12.6307L39.3209 37.458Z",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M39.3213 47.125H42.617",
            stroke: color,
            "stroke-width": "0.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M23.9403 28.4503C22.6285 23.7797 22.1645 21.0619 21.5234 16.1465",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M39.3213 56.793H42.617",
            stroke: color,
            "stroke-width": "0.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "40.6386",
            cy: "47.1249",
            r: "0.628844",
            fill: "white",
            stroke: color,
            "stroke-width": "0.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M55.5793 28.6689C56.7718 23.1642 57.1936 19.9611 57.7764 14.168",
            stroke: color
          })]
        });

      case 'Fit':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            width: "80",
            height: "80",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M33.418 9.54297L20.2975 14.7913C17.1335 34.0266 17.1846 45.845 17.8921 67.2741C20.4841 68.9637 21.9711 68.864 24.6711 67.4928C24.1863 53.0992 24.1857 45.1031 24.6711 30.9735C26.5943 36.4838 27.1719 43.1848 25.9832 70.9916C32.7367 72.933 35.8024 73.1654 39.1039 70.9916V42.5634C33.9433 30.4676 31.8467 24.9815 29.2633 16.978L33.6369 12.3858L31.1377 15.0099L28.3884 14.5726L33.418 9.54297Z",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M45.8828 9.54297L59.0032 14.7913C62.1673 34.0266 62.1162 45.845 61.4087 67.2741C58.8166 68.9637 57.3297 68.864 54.6297 67.4928C55.1145 53.0992 55.1151 45.1031 54.6297 30.9735C52.7064 36.4838 52.1288 43.1848 53.3176 70.9916C46.564 72.933 42.6234 72.9467 39.322 70.7729L39.1033 46.4996C44.2638 34.4038 47.4541 24.9815 50.0374 16.978L45.6639 12.3858L48.163 15.0099L50.9124 14.5726L45.8828 9.54297Z",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M39.3222 37.3149L39.1035 42.5632L45.8826 9.54272C42.8211 6.04397 36.2607 6.2626 33.1992 9.54272L33.6366 12.6042L39.3222 37.3149Z",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M39.3223 46.9375H42.6024",
            stroke: color,
            "stroke-width": "0.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M39.3223 56.5586H42.6024",
            stroke: color,
            "stroke-width": "0.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "40.6345",
            cy: "46.9372",
            r: "0.624714",
            fill: "white",
            stroke: color,
            "stroke-width": "0.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M24.0148 28.3495C22.7092 23.7008 22.2474 20.9958 21.6094 16.1035",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M55.5046 28.5675C56.6916 23.0888 57.1114 19.9007 57.6914 14.1348",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
            "clip-path": "url(#clip0)",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M26.5546 42.6406L26.2011 42.287L25.8475 42.6406L25.4929 42.9952L25.1397 43.3484L25.4926 43.702L26.0442 44.2545H24.1893H23.6893V44.7545V45.2574V45.7574H24.1893H26.0411L25.4907 46.3068L25.1366 46.6604L25.4904 47.0142L25.8475 47.3713L26.2011 47.7249L26.5546 47.3713L28.5664 45.3595L28.92 45.006L28.5664 44.6524L26.5546 42.6406Z",
              fill: color,
              stroke: "white"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
            "clip-path": "url(#clip1)",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M52.4385 47.3711L52.7921 47.7247L53.1456 47.3711L53.5002 47.0165L53.8535 46.6633L53.5005 46.3098L52.949 45.7572H54.8039H55.3039V45.2572V44.7543V44.2543H54.8039H52.9521L53.5024 43.7049L53.8566 43.3514L53.5027 42.9975L53.1456 42.6404L52.7921 42.2868L52.4385 42.6404L50.4267 44.6522L50.0732 45.0058L50.4267 45.3593L52.4385 47.3711Z",
              fill: color,
              stroke: "white"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("defs", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("clipPath", {
              id: "clip0",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
                width: "6.03544",
                height: "6.03544",
                fill: "white",
                transform: "translate(29.2188 41.9883) rotate(90)"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("clipPath", {
              id: "clip1",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
                width: "6.03544",
                height: "6.03544",
                fill: "white",
                transform: "translate(49.7744 48.0234) rotate(-90)"
              })
            })]
          })]
        });

      case 'LapelStyle':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            width: "80",
            height: "80",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M23.753 48.4535C28.628 21.2926 38.6103 8.98887 18.8779 7.36385C30.715 6.52441 35.3925 10.3764 41.1639 22.9176L35.8245 24.0783L30.9495 18.739L40.2353 28.9534C35.4119 44.3123 32.1482 51.8134 26.0744 64.7037",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M40.0029 19.2031L56.4852 24.5425C59.485 26.3863 60.1726 29.9377 60.896 37.5426C62.1319 50.8134 62.1436 58.5089 61.8246 72.3644",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M46.2715 58.8993C50.996 47.0114 53.4151 40.1718 56.2537 26.8633",
            stroke: color
          })]
        });

      case 'Pocket':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            width: "80",
            height: "80",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M2.9668 28.1055H2.2168V28.8555V43.001C2.2168 48.3858 6.58202 52.751 11.9668 52.751H68.0324C73.4172 52.751 77.7824 48.3858 77.7824 43.001V28.8555V28.1055H77.0324H2.9668Z",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "2.2168",
            y: "28.1055",
            width: "75.5656",
            height: "8.7743",
            stroke: color,
            "stroke-width": "1.5"
          })]
        });

      case 'Sleeve':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            width: "80",
            height: "80",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M8 47.0194L17 38.0198C25.5268 37.5182 33.2335 42.3502 38.5 52.1309",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M31.5751 59.3075L33.3306 57.552C36.3503 63.328 36.8418 66.5806 33.3306 70.844C22.0454 74.1042 4.99157 53.2882 8.50269 46.7678C12.5155 42.7554 21.3705 45.919 31.5751 59.3075Z",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M38.5 52.3789L33.3281 57.5476C35.2352 61.3132 35.6633 63.8274 35.5852 68.8331L41.5 62.1659C41.985 57.2274 40.7297 55.6576 38.5 52.3789Z",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M34.1311 48.3948C33.8274 49.1322 32.8254 49.5765 31.785 49.148C30.7447 48.7195 30.3463 47.6983 30.65 46.9609C30.9537 46.2236 31.9557 45.7792 32.9961 46.2077C34.0364 46.6362 34.4348 47.6574 34.1311 48.3948Z",
            fill: color,
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "29.2984",
            y: "45.1719",
            width: "0.250787",
            height: "8.36908",
            transform: "rotate(-45 29.2984 45.1719)",
            fill: color,
            stroke: color,
            "stroke-width": "0.250787"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M43.0657 42.8108C42.762 43.5482 41.76 43.9925 40.7196 43.564C39.6793 43.1355 39.2808 42.1144 39.5846 41.377C39.8883 40.6396 40.8903 40.1953 41.9306 40.6238C42.971 41.0522 43.3694 42.0734 43.0657 42.8108Z",
            fill: color,
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M48.0657 38.8108C47.762 39.5482 46.76 39.9925 45.7196 39.564C44.6793 39.1355 44.2808 38.1144 44.5846 37.377C44.8883 36.6396 45.8903 36.1953 46.9306 36.6238C47.971 37.0522 48.3694 38.0734 48.0657 38.8108Z",
            fill: color,
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M53.0657 35.8108C52.762 36.5482 51.76 36.9925 50.7196 36.564C49.6793 36.1355 49.2808 35.1144 49.5846 34.377C49.8883 33.6396 50.8903 33.1953 51.9306 33.6238C52.971 34.0522 53.3694 35.0734 53.0657 35.8108Z",
            fill: color,
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "38.233",
            y: "39.5898",
            width: "0.250787",
            height: "8.36908",
            transform: "rotate(-45 38.233 39.5898)",
            fill: color,
            stroke: color,
            "stroke-width": "0.250787"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "43.233",
            y: "35.5898",
            width: "0.250787",
            height: "8.36908",
            transform: "rotate(-45 43.233 35.5898)",
            fill: color,
            stroke: color,
            "stroke-width": "0.250787"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "48.233",
            y: "32.5898",
            width: "0.250787",
            height: "8.36908",
            transform: "rotate(-45 48.233 32.5898)",
            fill: color,
            stroke: color,
            "stroke-width": "0.250787"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M42.7982 7.92773C31.3578 19.9002 22.0138 29.7855 13.5 40.4277C21.7477 29.7855 51.578 54.7534 37.7431 65.9277C51.578 56.8819 58.4954 46.2397 71.5321 34.2672",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M40.9355 55.8168L60.3576 37.459",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M60.3581 37.459L41.2021 56.881",
            stroke: color
          })]
        });

      case 'Back':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M40.8906 46.4785V63.9941",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M18.9206 18.5723C16.5438 34.3895 12.6879 57.7598 13.875 60.1348C21.5936 65.7754 60.7811 65.1816 67.6092 60.4316C67.6092 60.4316 65.2065 34.2103 63.7487 20.0566",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M5.85938 15.3066L2 57.4629L10.3125 59.541L16.25 17.9785",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M75.0312 15.0098L78 58.9473L70.5781 59.541L65.5312 17.6816",
            stroke: color
          })]
        });

      case 'BreastPocket':
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "5.5",
            y: "31.5",
            width: "69",
            height: "17",
            stroke: color
          })
        });

      case 'Lining':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M29.7146 11.7793L18.8607 15.9141C16.0964 30.4517 15.547 42.381 15.9318 68.9777C17.9044 70.4147 19.3007 70.5751 22.3064 69.4945V31.2474C24.3083 36.9739 24.8025 43.7183 22.9955 70.8728C30.7146 73.3934 36.9513 73.4571 37.2951 70.356L37.6397 41.0676M37.6397 41.0676C32.4277 32.5462 29.9464 27.6701 27.6472 18.4984L31.782 13.1576L37.6397 41.0676Z",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M22.3059 29.1799C20.8753 24.4643 20.4003 21.7195 19.7217 16.7754",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M26.2705 71.906C28.8011 56.3055 29.614 47.8754 28.5102 34.1758",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M29.7155 15.7419L26.959 15.5696C32.2998 5.23244 42.12 5.74938 47.4608 14.7082L45.0488 15.3974",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M31.7835 13.3289C31.3455 11.8745 31.2918 11.0773 31.7835 9.71094",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M42.9812 13.5027C43.4191 12.0484 43.4729 11.2511 42.9812 9.88477",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M47.1151 17.6368L42.9803 13.502C42.2506 21.1276 43.7708 25.1809 49.0102 32.1087C46.7664 26.4231 45.8143 23.242 47.1151 17.6368Z",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M49.0103 32.1079L49.019 32.1306M49.019 32.1306C57.4971 46.09 66.9279 60.7071 63.1376 68.9767C58.4496 71.5668 54.906 70.9794 48.1489 68.9767C46.4049 52.1242 46.368 43.511 45.9092 27.8008L49.019 32.1306Z",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M45.3936 11.9512L55.9029 15.5691C59.5548 29.7503 60.3657 37.7126 60.3823 51.9211M53.1463 38.1384L52.9741 30.2133L51.5958 36.2433",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M53.1465 28.8353C53.3486 24.0251 53.7757 21.38 55.2139 16.7754",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "34.8672",
            y: "42.084",
            width: "1.06741",
            height: "1.06741",
            rx: "0.533706",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "34.8672",
            y: "50.6992",
            width: "1.06741",
            height: "1.06741",
            rx: "0.533706",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M59.4094 70.3557C60.07 56.6651 58.0639 49.0559 46.1436 35.7266L48.0387 68.8051C52.3333 70.0925 54.7473 70.782 59.4094 70.3557Z",
            stroke: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("mask", {
            id: "mask0",
            "mask-type": "alpha",
            maskUnits: "userSpaceOnUse",
            x: "46",
            y: "35",
            width: "14",
            height: "36",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M59.5217 70.5276C60.1823 56.837 58.1762 49.2278 46.2559 35.8984L48.151 68.977C52.4456 70.2644 54.8596 70.9539 59.5217 70.5276Z",
              fill: "#C4C4C4"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
            mask: "url(#mask0)",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M28.328 67.1371C29.7834 62.4643 41.7307 38.4436 49.8256 24.7237",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M51.0692 78.6645C52.5246 73.9916 64.4719 49.9709 72.5668 36.251",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M39.6982 72.9008C41.1536 68.2279 53.1008 44.2073 61.1957 30.4873",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M33.8593 69.9418C35.3147 65.2689 47.2619 41.2483 55.3569 27.5284",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M56.6015 81.4691C58.0569 76.7963 70.0041 52.7756 78.0991 39.0557",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M45.2304 75.7055C46.6858 71.0326 58.633 47.012 66.728 33.292",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M31.0937 68.5395C32.5491 63.8666 44.4963 39.8459 52.5912 26.126",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M53.8358 80.0668C55.2912 75.3939 67.2385 51.3733 75.3334 37.6534",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M42.4648 74.3031C43.9202 69.6303 55.8674 45.6096 63.9623 31.8897",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M36.6259 71.3422C38.0813 66.6693 50.0285 42.6487 58.1235 28.9287",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M47.997 77.1078C49.4524 72.435 61.3996 48.4143 69.4946 34.6944",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M29.5559 67.7601C31.1852 62.7441 44.0992 36.8161 52.767 21.9659",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M52.3 79.2874C53.9293 74.2714 66.8433 48.3434 75.5112 33.4932",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M40.927 73.5237C42.5563 68.5078 55.4703 42.5797 64.1381 27.7295",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M35.3954 70.7205C36.6615 65.5205 49.4849 39.5465 58.6066 24.9263",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M46.7678 76.4847C48.3971 71.4687 61.3111 45.5407 69.9789 30.6905",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M32.6281 69.3167C34.2574 64.3007 47.1714 38.3727 55.8393 23.5225",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M55.3733 80.846C57.0026 75.83 69.9165 49.902 78.5844 35.0518",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M44.0022 75.0823C45.6315 70.0664 58.5454 44.1383 67.2133 29.2881",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M38.1604 72.1214C39.7897 67.1054 52.7037 41.1774 61.3715 26.3272",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M49.5344 77.8851C51.1637 72.8691 64.0777 46.9411 72.7455 32.0909",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M28.9413 67.4496C30.3967 62.7768 42.3439 38.7561 50.4389 25.0362",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M51.6855 78.977C53.1409 74.3041 65.0881 50.2834 73.183 36.5635",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M40.3124 73.2133C41.7678 68.5404 53.715 44.5198 61.81 30.7998",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M34.4735 70.2523C35.9289 65.5795 47.8762 41.5588 55.9711 27.8389",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M57.2177 81.7797C58.6731 77.1068 70.6203 53.0862 78.7153 39.3662",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M45.8446 76.016C47.3 71.3432 59.2473 47.3225 67.3422 33.6026",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M32.0143 69.0058C33.1065 64.1488 44.963 40.0822 53.5119 26.5923",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M54.7594 80.5351C55.8516 75.6781 67.7082 51.6115 76.257 38.1216",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M43.3854 74.7695C44.4776 69.9125 56.3341 45.8459 64.883 32.356",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M37.5465 71.8105C38.6387 66.9535 50.4953 42.8869 59.0441 29.397",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M48.9176 77.5741C50.0098 72.7172 61.8664 48.6506 70.4152 35.1607",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M30.4794 68.2264C31.7455 63.0263 44.5689 37.0524 53.6906 22.4322",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M53.2206 79.7557C54.4867 74.5556 67.3101 48.5817 76.4318 33.9615",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M41.8505 73.992C43.1166 68.7919 55.9399 42.818 65.0617 28.1978",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M36.0109 71.0316C37.6403 66.0156 50.5542 40.0876 59.2221 25.2373",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M47.382 76.7952C49.0114 71.7793 61.9253 45.8512 70.5932 31.001",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M33.2443 69.6292C34.8737 64.6132 47.7876 38.6852 56.4555 23.835",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M56.2939 81.3123C57.56 76.1123 70.3833 50.1383 79.505 35.5181",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M44.9228 75.5487C46.1889 70.3486 59.0122 44.3746 68.1339 29.7544",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M39.0839 72.5897C40.35 67.3896 53.1733 41.4156 62.2951 26.7955",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M50.455 78.3534C51.7211 73.1533 64.5444 47.1793 73.6662 32.5591",
              stroke: color,
              "stroke-width": "0.25"
            })]
          })]
        });

      case 'Lapels':
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M4 58.1364C4.135 58.0074 31.6926 34.9701 45.4545 23.4675M4 58.1364L40.5968 23.1661M4 58.1364L37.6818 21C40.2727 22.7273 40.2727 22.7273 40.5968 23.1661M45.4545 23.4675L46.3182 22.7273L76.5455 59H4L45.4545 23.4675ZM45.4545 23.4675L42.8636 21L40.5968 23.1661",
            stroke: color,
            "stroke-width": "1.5"
          })
        });

      case 'Monogram':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M21.1511 53.0006C21.1031 52.0646 21.0431 51.1526 20.9711 50.2646C20.9231 49.3526 20.8631 48.4526 20.7911 47.5646H11.4311C10.9511 48.4526 10.4471 49.3526 9.91906 50.2646C9.39106 51.1526 8.88706 52.0646 8.40706 53.0006H2.53906C4.09906 50.3126 5.55106 47.8286 6.89506 45.5486C8.26306 43.2686 9.57106 41.1206 10.8191 39.1046C12.0911 37.0886 13.3271 35.1806 14.5271 33.3806C15.7271 31.5566 16.9511 29.7806 18.1991 28.0526H23.2031C23.5871 29.7806 23.9471 31.7006 24.2831 33.8126C24.6431 35.9006 24.9671 38.0486 25.2551 40.2566C25.5671 42.4406 25.8431 44.6366 26.0831 46.8446C26.3471 49.0286 26.5871 51.0806 26.8031 53.0006H21.1511ZM19.4951 33.5246C18.4871 35.1326 17.4911 36.7286 16.5071 38.3126C15.5471 39.8966 14.6111 41.5166 13.6991 43.1726H20.4311C20.3111 41.7086 20.1791 40.1486 20.0351 38.4926C19.9151 36.8366 19.7351 35.1806 19.4951 33.5246Z",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M38.703 53.3246C37.263 53.3246 35.787 53.2646 34.275 53.1446C32.763 53.0246 31.395 52.8326 30.171 52.5686L35.931 28.4486C37.299 28.1846 38.727 28.0046 40.215 27.9086C41.727 27.8126 43.107 27.7646 44.355 27.7646C45.795 27.7646 47.031 27.9206 48.063 28.2326C49.119 28.5206 49.971 28.9166 50.619 29.4206C51.291 29.9246 51.783 30.5246 52.095 31.2206C52.431 31.8926 52.599 32.6126 52.599 33.3806C52.599 33.9086 52.539 34.4606 52.419 35.0366C52.323 35.6126 52.107 36.1886 51.771 36.7646C51.459 37.3166 51.015 37.8446 50.439 38.3486C49.887 38.8526 49.155 39.3086 48.243 39.7166C49.323 40.1966 50.115 40.8566 50.619 41.6966C51.123 42.5126 51.375 43.4246 51.375 44.4326C51.375 45.5846 51.147 46.7006 50.691 47.7806C50.235 48.8366 49.503 49.7846 48.495 50.6246C47.487 51.4406 46.179 52.1006 44.571 52.6046C42.963 53.0846 41.007 53.3246 38.703 53.3246ZM38.199 42.0926L36.651 48.5726C37.035 48.6446 37.515 48.7046 38.091 48.7526C38.691 48.7766 39.243 48.7886 39.747 48.7886C40.467 48.7886 41.175 48.7406 41.871 48.6446C42.591 48.5246 43.227 48.3206 43.779 48.0326C44.355 47.7446 44.823 47.3486 45.183 46.8446C45.543 46.3406 45.723 45.6926 45.723 44.9006C45.723 44.5646 45.651 44.2286 45.507 43.8926C45.387 43.5566 45.183 43.2566 44.895 42.9926C44.607 42.7286 44.223 42.5126 43.743 42.3446C43.287 42.1766 42.735 42.0926 42.087 42.0926H38.199ZM39.243 37.8806H42.771C44.211 37.8806 45.279 37.5686 45.975 36.9446C46.695 36.3206 47.055 35.5766 47.055 34.7126C47.055 34.2566 46.947 33.8726 46.731 33.5606C46.539 33.2246 46.275 32.9606 45.939 32.7686C45.603 32.5766 45.219 32.4446 44.787 32.3726C44.355 32.2766 43.911 32.2286 43.455 32.2286C42.951 32.2286 42.411 32.2526 41.835 32.3006C41.259 32.3246 40.827 32.3606 40.539 32.4086L39.243 37.8806Z",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M73.3243 51.9206C72.3403 52.4006 71.2483 52.7846 70.0483 53.0726C68.8484 53.3606 67.3843 53.5046 65.6563 53.5046C64.1683 53.5046 62.8003 53.2646 61.5523 52.7846C60.3283 52.2806 59.2723 51.5726 58.3843 50.6606C57.5203 49.7486 56.8483 48.6446 56.3683 47.3486C55.8883 46.0286 55.6483 44.5526 55.6483 42.9206C55.6483 41.0486 55.9723 39.1886 56.6203 37.3406C57.2923 35.4926 58.2643 33.8486 59.5363 32.4086C60.8323 30.9446 62.4043 29.7566 64.2523 28.8446C66.1243 27.9326 68.2723 27.4766 70.6963 27.4766C71.8483 27.4766 72.9763 27.6086 74.0803 27.8726C75.2083 28.1366 76.3843 28.6046 77.6083 29.2766L75.5923 33.6326C74.5843 33.1046 73.6843 32.7446 72.8923 32.5526C72.1003 32.3606 71.2484 32.2646 70.3363 32.2646C68.9684 32.2646 67.7323 32.5406 66.6283 33.0926C65.5483 33.6446 64.6123 34.4006 63.8203 35.3606C63.0523 36.2966 62.4643 37.3886 62.0563 38.6366C61.6483 39.8846 61.4443 41.2046 61.4443 42.5966C61.4443 44.7086 61.9003 46.2446 62.8123 47.2046C63.7483 48.1646 65.0803 48.6446 66.8083 48.6446C67.9604 48.6446 69.0163 48.5246 69.9763 48.2846C70.9604 48.0446 71.8724 47.7326 72.7123 47.3486L73.3243 51.9206Z",
            fill: color
          })]
        });

      case 'Buttons':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "11.6699",
            y: "42.5",
            width: "4",
            height: "57",
            transform: "rotate(-90 11.6699 42.5)",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "39.8229",
            cy: "40.1703",
            r: "19.3473",
            transform: "rotate(-90 39.8229 40.1703)",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "39.8229",
            cy: "40.1703",
            r: "19.3473",
            transform: "rotate(-90 39.8229 40.1703)",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("mask", {
            id: "mask0",
            "mask-type": "alpha",
            maskUnits: "userSpaceOnUse",
            x: "13",
            y: "13",
            width: "54",
            height: "54",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
              cx: "39.8228",
              cy: "40.1688",
              r: "19.3473",
              transform: "rotate(-56.3858 39.8228 40.1688)",
              fill: "white"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
            mask: "url(#mask0)",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M66.3731 99.4259C56.7622 95.1675 8.55199 63.6511 -18.6445 42.9099",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M96.8477 53.5841C87.2368 49.3257 39.0266 17.8093 11.8301 -2.93188",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M81.6104 76.504C71.9995 72.2456 23.7893 40.7292 -3.40718 19.988",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M73.8536 88.1739C64.2427 83.9156 16.0325 52.3991 -11.164 31.658",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M104.328 42.3321C94.7173 38.0738 46.5071 6.55733 19.3106 -14.1838",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M89.0909 65.2521C79.48 60.9937 31.2698 29.4772 4.07329 8.73609",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M70.252 93.5919C60.6411 89.3335 12.4309 57.8171 -14.7656 37.0759",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M100.726 47.7501C91.1148 43.4917 42.9045 11.9753 15.7081 -8.76587",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M85.4893 70.67C75.8784 66.4116 27.6682 34.8952 0.47173 14.1541",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M77.7325 82.3399C68.1216 78.0816 19.9114 46.5651 -7.28511 25.824",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M92.9688 59.4181C83.3579 55.1597 35.1477 23.6433 7.95122 2.9021",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M68.3124 96.5086C57.9825 91.7722 5.77513 57.5987 -23.79 35.283",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M98.787 50.6668C88.4571 45.9304 36.2497 11.7569 6.68462 -10.5588",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M83.5497 73.5867C73.2198 68.8503 21.0124 34.6768 -8.55268 12.3611",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M75.7919 85.2566C65.462 80.5203 13.2546 46.3467 -16.3105 24.031",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M91.0292 62.3348C80.6993 57.5984 28.4919 23.4249 -1.07319 1.10913",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M72.1913 90.6746C61.8614 85.9382 9.65404 51.7647 -19.9111 29.449",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M102.666 44.8309C92.336 40.0945 40.1286 5.92096 10.5635 -16.3948",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M87.4276 67.7527C77.0977 63.0164 24.8904 28.8428 -4.67475 6.5271",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M79.6708 79.4227C69.3409 74.6863 17.1335 40.5128 -12.4316 18.197",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M94.9081 56.5008C84.5782 51.7644 32.3708 17.5909 2.80571 -4.72485",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M67.2051 98.1759C57.5943 93.9175 9.38402 62.4011 -17.8124 41.6599",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M97.6788 52.3321C88.0679 48.0738 39.8577 16.5573 12.6612 -4.18383",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M82.4415 75.254C72.8306 70.9956 24.6204 39.4792 -2.57612 18.738",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M74.6846 86.9239C65.0738 82.6656 16.8635 51.1491 -10.333 30.408",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M105.159 41.0802C95.5484 36.8218 47.3381 5.30537 20.1417 -15.4358",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M89.9219 64.0021C80.3111 59.7437 32.1008 28.2272 4.90435 7.48609",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M71.3601 91.9251C61.4218 88.1593 13.1299 56.7658 -13.6575 35.4092",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M101.835 46.0814C91.8964 42.3155 43.6045 10.922 16.8171 -10.4346",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M86.5974 69.0033C76.6591 65.2374 28.3672 33.8439 1.57982 12.4873",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M78.8406 80.6732C68.9023 76.9073 20.6104 45.5138 -6.17702 24.1572",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M94.0769 57.7513C84.1386 53.9855 35.8467 22.5919 9.05931 1.23536",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M69.4205 94.8418C58.7632 90.598 6.47412 56.5474 -22.6819 33.6162",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M99.8951 48.9981C89.2378 44.7542 36.9487 10.7036 7.79271 -12.2275",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M84.6578 71.92C74.0005 67.6761 21.7114 33.6255 -7.44459 10.6943",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M76.901 83.5899C66.2436 79.346 13.9546 45.2954 -15.2014 22.3643",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M92.1373 60.668C81.48 56.4242 29.1909 22.3735 0.0348983 -0.557612",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M73.2994 89.0079C62.6421 84.764 10.353 50.7134 -18.803 27.7822",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M103.773 43.1641C93.1157 38.9203 40.8267 4.86964 11.6706 -18.0615",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M88.5357 66.086C77.8784 61.8421 25.5894 27.7915 -3.56666 4.86036",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M80.7789 77.7559C70.1216 73.5121 17.8325 39.4614 -11.3235 16.5303",
              stroke: color,
              "stroke-width": "0.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M96.0162 54.834C85.3589 50.5902 33.0698 16.5396 3.9138 -6.3916",
              stroke: color,
              "stroke-width": "0.5"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
            cx: "33.3705",
            cy: "40.4567",
            rx: "2.24252",
            ry: "2.80315",
            transform: "rotate(-90 33.3705 40.4567)",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
            cx: "39.5374",
            cy: "46.6207",
            rx: "2.80315",
            ry: "2.24252",
            transform: "rotate(-90 39.5374 46.6207)",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "46.264",
            cy: "40.4567",
            r: "2.24252",
            transform: "rotate(-90 46.264 40.4567)",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "39.5374",
            cy: "33.7282",
            r: "2.24252",
            transform: "rotate(-90 39.5374 33.7282)",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M59.1704 40.1702C59.1704 50.8385 50.4912 59.5176 39.8229 59.5176C29.1547 59.5176 20.4756 50.8385 20.4756 40.1702C20.4756 29.502 29.1547 20.8229 39.8229 20.8229C50.4912 20.8229 59.1704 29.5022 59.1704 40.1702ZM21.4454 40.1702C21.4454 50.3037 29.6896 58.5479 39.8229 58.5479C49.9564 58.5479 58.2006 50.3039 58.2006 40.1704C58.2006 30.037 49.9564 21.7929 39.8229 21.7929C29.6896 21.7928 21.4454 30.037 21.4454 40.1702ZM54.2852 40.1702C54.2852 48.1447 47.7975 54.6323 39.8229 54.6323C31.8487 54.6323 25.3609 48.1447 25.3609 40.1702C25.3609 32.1958 31.8485 25.7082 39.8229 25.7082C47.7973 25.7082 54.2852 32.196 54.2852 40.1702ZM26.3309 40.1702C26.3309 47.6099 32.3835 53.6625 39.8231 53.6625C47.2628 53.6625 53.3155 47.6099 53.3155 40.1702C53.3155 32.7306 47.2629 26.678 39.8231 26.678C32.3835 26.678 26.3309 32.7306 26.3309 40.1702ZM49.294 40.1702C49.294 41.792 47.9746 43.1114 46.3528 43.1114C44.7311 43.1114 43.4115 41.792 43.4115 40.1702C43.4115 38.5485 44.7311 37.2291 46.3528 37.2291C47.9746 37.2291 49.294 38.5487 49.294 40.1702ZM44.3814 40.1702C44.3814 41.2572 45.2659 42.1415 46.3528 42.1415C47.4398 42.1415 48.3241 41.2572 48.3241 40.1702C48.3241 39.0833 47.4397 38.199 46.3528 38.199C45.2659 38.199 44.3814 39.0833 44.3814 40.1702ZM42.7641 33.6405C42.7641 35.2623 41.4447 36.5816 39.8229 36.5816C38.2012 36.5816 36.8818 35.2623 36.8818 33.6405C36.8818 32.0187 38.2012 30.6992 39.8229 30.6992C41.4447 30.6992 42.7641 32.0187 42.7641 33.6405ZM37.8516 33.6405C37.8516 34.7275 38.7361 35.6118 39.8229 35.6118C40.9097 35.6118 41.7942 34.7275 41.7942 33.6405C41.7942 32.5535 40.9097 31.669 39.8229 31.669C38.7361 31.669 37.8516 32.5535 37.8516 33.6405ZM42.7641 46.7C42.7641 48.3217 41.4447 49.6411 39.8229 49.6411C38.2012 49.6411 36.8818 48.3217 36.8818 46.7C36.8818 45.0782 38.2012 43.7588 39.8229 43.7588C41.4447 43.7588 42.7641 45.0784 42.7641 46.7ZM37.8516 46.7C37.8516 47.787 38.7361 48.6713 39.8229 48.6713C40.9097 48.6713 41.7942 47.787 41.7942 46.7C41.7942 45.613 40.9097 44.7287 39.8229 44.7287C38.7361 44.7287 37.8516 45.613 37.8516 46.7ZM36.2343 40.1702C36.2343 41.792 34.9149 43.1114 33.2932 43.1114C31.6714 43.1114 30.352 41.792 30.352 40.1702C30.352 38.5485 31.6714 37.2291 33.2932 37.2291C34.9149 37.2291 36.2343 38.5487 36.2343 40.1702ZM31.3219 40.1702C31.3219 41.2572 32.2064 42.1415 33.2932 42.1415C34.38 42.1415 35.2645 41.2572 35.2645 40.1702C35.2645 39.0833 34.38 38.199 33.2932 38.199C32.2064 38.199 31.3219 39.0833 31.3219 40.1702Z",
            fill: color
          })]
        });

      case 'Threads':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
            x: "11.1953",
            y: "42.5",
            width: "4",
            height: "57",
            transform: "rotate(-90 11.1953 42.5)",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "39.3473",
            cy: "40.1703",
            r: "19.3473",
            transform: "rotate(-90 39.3473 40.1703)",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "39.3473",
            cy: "40.1703",
            r: "19.3473",
            transform: "rotate(-90 39.3473 40.1703)",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
            cx: "32.8949",
            cy: "40.4587",
            rx: "2.24252",
            ry: "2.80315",
            transform: "rotate(-90 32.8949 40.4587)",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
            cx: "39.0619",
            cy: "46.6207",
            rx: "2.80315",
            ry: "2.24252",
            transform: "rotate(-90 39.0619 46.6207)",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "45.7884",
            cy: "40.4587",
            r: "2.24252",
            transform: "rotate(-90 45.7884 40.4587)",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "39.0619",
            cy: "33.7282",
            r: "2.24252",
            transform: "rotate(-90 39.0619 33.7282)",
            fill: "white"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M58.6949 40.1702C58.6949 50.8385 50.0156 59.5176 39.3473 59.5176C28.6791 59.5176 20 50.8385 20 40.1702C20 29.502 28.6791 20.8229 39.3473 20.8229C50.0156 20.8229 58.6949 29.5022 58.6949 40.1702ZM20.9698 40.1702C20.9698 50.3037 29.2141 58.5479 39.3473 58.5479C49.4808 58.5479 57.725 50.3039 57.725 40.1704C57.725 30.037 49.4808 21.7929 39.3473 21.7929C29.2141 21.7928 20.9698 30.037 20.9698 40.1702ZM53.8096 40.1702C53.8096 48.1447 47.3219 54.6323 39.3473 54.6323C31.3731 54.6323 24.8853 48.1447 24.8853 40.1702C24.8853 32.1958 31.3729 25.7082 39.3473 25.7082C47.3217 25.7082 53.8096 32.196 53.8096 40.1702ZM25.8553 40.1702C25.8553 47.6099 31.9079 53.6625 39.3475 53.6625C46.7872 53.6625 52.8399 47.6099 52.8399 40.1702C52.8399 32.7306 46.7874 26.678 39.3475 26.678C31.9079 26.678 25.8553 32.7306 25.8553 40.1702ZM48.8184 40.1702C48.8184 41.792 47.499 43.1114 45.8773 43.1114C44.2555 43.1114 42.9359 41.792 42.9359 40.1702C42.9359 38.5485 44.2555 37.2291 45.8773 37.2291C47.499 37.2291 48.8184 38.5487 48.8184 40.1702ZM43.9058 40.1702C43.9058 41.2572 44.7903 42.1415 45.8773 42.1415C46.9643 42.1415 47.8486 41.2572 47.8486 40.1702C47.8486 39.0833 46.9641 38.199 45.8773 38.199C44.7903 38.199 43.9058 39.0833 43.9058 40.1702ZM42.2885 33.6405C42.2885 35.2623 40.9691 36.5816 39.3473 36.5816C37.7256 36.5816 36.4062 35.2623 36.4062 33.6405C36.4062 32.0187 37.7256 30.6992 39.3473 30.6992C40.9691 30.6992 42.2885 32.0187 42.2885 33.6405ZM37.376 33.6405C37.376 34.7275 38.2605 35.6118 39.3473 35.6118C40.4341 35.6118 41.3186 34.7275 41.3186 33.6405C41.3186 32.5535 40.4341 31.669 39.3473 31.669C38.2605 31.669 37.376 32.5535 37.376 33.6405ZM42.2885 46.7C42.2885 48.3217 40.9691 49.6411 39.3473 49.6411C37.7256 49.6411 36.4062 48.3217 36.4062 46.7C36.4062 45.0782 37.7256 43.7588 39.3473 43.7588C40.9691 43.7588 42.2885 45.0784 42.2885 46.7ZM37.376 46.7C37.376 47.787 38.2605 48.6713 39.3473 48.6713C40.4341 48.6713 41.3186 47.787 41.3186 46.7C41.3186 45.613 40.4341 44.7287 39.3473 44.7287C38.2605 44.7287 37.376 45.613 37.376 46.7ZM35.7587 40.1702C35.7587 41.792 34.4394 43.1114 32.8176 43.1114C31.1958 43.1114 29.8765 41.792 29.8765 40.1702C29.8765 38.5485 31.1958 37.2291 32.8176 37.2291C34.4394 37.2291 35.7587 38.5487 35.7587 40.1702ZM30.8463 40.1702C30.8463 41.2572 31.7308 42.1415 32.8176 42.1415C33.9044 42.1415 34.7889 41.2572 34.7889 40.1702C34.7889 39.0833 33.9044 38.199 32.8176 38.199C31.7308 38.199 30.8463 39.0833 30.8463 40.1702Z",
            fill: color
          })]
        });

      case 'ElbowPatches':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M62.5 64.4995L58 62.4995L57.5 62.9995L22.4068 42.4033L10 19.1406",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("mask", {
            id: "mask0",
            "mask-type": "alpha",
            maskUnits: "userSpaceOnUse",
            x: "16",
            y: "30",
            width: "16",
            height: "18",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M31.712 47.9172C28.6534 35.1494 24.8022 32.1988 16.0312 30.6855L22.407 42.4031L31.712 47.9172Z",
              fill: "#C4C4C4"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
            mask: "url(#mask0)",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M31.712 47.9172C28.6534 35.1494 24.8022 32.1988 16.0312 30.6855L22.407 42.4031L31.712 47.9172Z",
              stroke: color,
              "stroke-width": "1.5"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M31.0399 58.4584C30.4284 54.8876 30.2758 35.0381 31.0399 23.2754",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M21.5545 58.4584C20.943 54.8876 20.7905 35.0381 21.5545 23.2754",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M16.7254 58.4584C16.1139 54.8876 15.9614 35.0381 16.7254 23.2754",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M26.2108 58.4584C25.5993 54.8876 25.4467 35.0381 26.2107 23.2754",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M23.9686 58.4584C23.3571 54.8876 23.2045 35.0381 23.9686 23.2754",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M19.1395 58.4584C18.528 54.8876 18.3754 35.0381 19.1395 23.2754",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M28.6258 58.4584C28.0143 54.8876 27.8617 35.0381 28.6258 23.2754",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M32.2469 58.4587C31.6354 54.5903 31.4828 33.0867 32.2469 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M22.7615 58.4587C22.1501 54.5903 21.9975 33.0867 22.7615 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M17.9324 58.4587C17.321 54.5903 17.1684 33.0867 17.9324 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M27.4178 58.4587C26.8063 54.5903 26.6537 33.0867 27.4178 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M25.1756 58.4587C24.5641 54.5903 24.4116 33.0867 25.1756 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M20.3475 58.4587C19.736 54.5903 19.5834 33.0867 20.3475 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M29.8328 58.4587C29.2214 54.5903 29.0688 33.0867 29.8328 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M31.5574 58.4584C30.946 54.8876 30.7934 35.0381 31.5574 23.2754",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M22.0721 58.4584C21.4606 54.8876 21.308 35.0381 22.0721 23.2754",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M17.243 58.4584C16.6315 54.8876 16.4789 35.0381 17.243 23.2754",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M26.7283 58.4584C26.1169 54.8876 25.9643 35.0381 26.7283 23.2754",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M24.6586 58.4584C23.8433 54.8876 23.6399 35.0381 24.6586 23.2754",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M19.8295 58.4584C19.0142 54.8876 18.8108 35.0381 19.8295 23.2754",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M29.3149 58.4584C28.4996 54.8876 28.2961 35.0381 29.3149 23.2754",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M23.4516 58.4587C22.6363 54.5903 22.4328 33.0867 23.4516 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M18.6225 58.4587C17.8072 54.5903 17.6037 33.0867 18.6225 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M28.1078 58.4587C27.2925 54.5903 27.0891 33.0867 28.1078 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M16.3803 58.4587C15.565 54.5903 15.3616 33.0867 16.3803 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M25.8656 58.4587C25.0504 54.5903 24.8469 33.0867 25.8656 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M21.0365 58.4587C20.2213 54.5903 20.0178 33.0867 21.0365 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M30.5229 58.4587C29.7076 54.5903 29.5041 33.0867 30.5229 20.3438",
              stroke: color,
              "stroke-width": "0.25"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M70.9996 54.6384L35.6748 32.7543L26.542 14.3164",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M63 64.5C63.5 62.5 66.5 56 70.5 55C69.5 60.5 67 63 63 64.5Z",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M57.2051 63.0621C58.5947 56.2469 60.0086 53.2075 65.1316 51",
            stroke: color,
            "stroke-width": "1.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M57.7232 60.3043L56 59.2704L56.3446 58.9258L57.8955 59.9597",
            stroke: color,
            "stroke-width": "0.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M47.5654 52.3982L58.001 58.7062V57.5L47.9101 51.709L47.5654 52.3982Z",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M57.1563 52.7432L59.7411 54.294L60.0857 53.9494L57.501 52.3985L57.1563 52.7432Z",
            fill: color
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M47.5654 52.3982L58.001 58.7062V57.5L47.9101 51.709L47.5654 52.3982Z",
            stroke: color,
            "stroke-width": "0.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M57.1563 52.7432L59.7411 54.294L60.0857 53.9494L57.501 52.3985L57.1563 52.7432Z",
            stroke: color,
            "stroke-width": "0.5"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: "59.25",
            cy: "59.25",
            r: "1.25",
            fill: color
          })]
        });

      case 'NeckLining':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
          width: width,
          height: height,
          viewBox: `0 0 ${width} ${height}`,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
            "clip-path": "url(#clip0)",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M7 54.3896C41.6963 43.9558 17.6402 41.5479 63.285 42.5108C67.113 45.6028 69.2561 47.2686 73 48.1292",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M19.1674 41.5117C18.9111 43.8967 16.6582 51.1703 16.6582 51.1703C16.6582 51.1703 22.846 49.5605 29.5363 45.902L19.1674 41.5117Z",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M22.9051 34.1339C22.5938 40.6612 21.0399 44.8573 24.4592 48.2762C33.5 43.1477 40.9327 42.526 63.1563 43.1477C60.0357 35.8663 58.7587 31.9542 59.8927 26.208C43.8191 22.8404 35.7262 24.4808 22.9051 34.1339Z",
              fill: "white",
              stroke: color
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("mask", {
              id: "mask0",
              "mask-type": "alpha",
              maskUnits: "userSpaceOnUse",
              x: "21",
              y: "24",
              width: "43",
              height: "25",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M22.9051 34.1339C22.5938 40.6612 21.0399 44.8573 24.4592 48.2762C34.5 42.4995 40.9327 42.526 63.1563 43.1477C60.0357 35.8663 58.7587 31.9542 59.8927 26.208C43.8191 22.8404 35.7262 24.4808 22.9051 34.1339Z",
                fill: "white",
                stroke: "black"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
              mask: "url(#mask0)",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M11.0497 53.8674C13.3178 48.1039 30.6734 18.9405 42.2078 2.41523",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M38.7929 70.6701C41.061 64.9066 58.4166 35.7432 69.951 19.218",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M24.9227 62.2678C27.1908 56.5043 44.5465 27.3409 56.0809 10.8156",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M17.8593 57.9924C20.1274 52.2289 37.483 23.0655 49.0174 6.54023",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M45.6024 74.7932C47.8705 69.0296 65.2262 39.8663 76.7605 23.341",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M31.7313 66.3928C33.9994 60.6293 51.3551 31.4659 62.8895 14.9406",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M14.58 56.0061C16.8481 50.2425 34.2037 21.0792 45.7381 4.5539",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M42.3231 72.8068C44.5912 67.0433 61.9469 37.88 73.4812 21.3547",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M28.452 64.4064C30.7201 58.6429 48.0758 29.4796 59.6102 12.9543",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M21.3905 60.1311C23.6586 54.3675 41.0142 25.2042 52.5486 8.6789",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M35.2636 68.5314C37.5317 62.7679 54.8873 33.6046 66.4217 17.0793",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M12.8155 54.9363C15.3471 48.7376 34.1676 17.1552 46.5701 -0.803518",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M40.5587 71.7371C43.0903 65.5384 61.9108 33.956 74.3133 15.9973",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M26.6866 63.3367C29.2182 57.138 48.0387 25.5556 60.4412 7.59687",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M19.6251 59.0613C22.1567 52.8626 40.9772 21.2802 53.3797 3.32148",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M33.4952 67.4617C36.0268 61.263 54.8473 29.6806 67.2498 11.7219",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M16.3458 57.0769C18.8774 50.8782 37.6979 19.2959 50.1004 1.33711",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M44.0909 73.8758C46.6225 67.6771 65.443 36.0947 77.8455 18.1359",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M30.2178 65.4773C32.7495 59.2786 51.57 27.6963 63.9725 9.7375",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M23.1563 61.2C25.6879 55.0013 44.5085 23.4189 56.9109 5.46015",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M37.0274 69.6004C39.559 63.4017 58.3796 31.8193 70.782 13.8605",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M11.8075 54.3264C14.0756 48.5628 31.4312 19.3995 42.9656 2.87422",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M39.5507 71.1272C41.8188 65.3636 59.1744 36.2003 70.7088 19.675",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M25.6786 62.7268C27.9467 56.9632 45.3023 27.7999 56.8367 11.2746",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M18.6161 58.4514C20.8842 52.6878 38.2398 23.5245 49.7742 6.99922",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M46.3593 75.2522C48.6274 69.4886 65.983 40.3253 77.5174 23.8",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M32.4872 66.8518C34.7553 61.0882 52.1109 31.9249 63.6453 15.3996",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M15.589 56.6178C17.559 50.6737 34.8403 21.4654 46.7471 5.16562",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M43.3332 73.4186C45.3032 67.4745 62.5844 38.2661 74.4913 21.9664",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M29.4601 65.0182C31.4301 59.0741 48.7114 29.8657 60.6182 13.566",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M22.3986 60.7408C24.3686 54.7968 41.6499 25.5884 53.5567 9.28867",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M36.2707 69.1412C38.2407 63.1972 55.5219 33.9888 67.4288 17.6891",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M13.8255 55.548C16.0591 49.1688 34.8052 17.5414 47.5801 -0.1918",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M41.5697 72.3488C43.8032 65.9696 62.5494 34.3422 75.3243 16.609",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M27.6966 63.9484C29.9302 57.5692 48.6763 25.9418 61.4512 8.20859",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M20.6341 59.6711C22.8677 53.2919 41.6138 21.6645 54.3887 3.93125",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M34.5042 68.0734C36.7378 61.6942 55.4839 30.0668 68.2589 12.3336",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M17.3548 57.6867C19.5884 51.3075 38.3345 19.6801 51.1094 1.94687",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M45.098 74.4875C47.3315 68.1083 66.0777 36.4809 78.8526 18.7477",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M31.2259 66.0871C33.4595 59.7079 52.2056 28.0805 64.9805 10.3473",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M24.1644 61.8098C26.3979 55.4306 45.1441 23.8031 57.919 6.06992",
                stroke: color,
                "stroke-width": "0.5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M38.0374 70.2101C40.271 63.8309 59.0171 32.2035 71.7921 14.4703",
                stroke: color,
                "stroke-width": "0.5"
              })]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("defs", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("clipPath", {
              id: "clip0",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
                width: "80",
                height: "80",
                fill: "white"
              })
            })
          })]
        });

      default:
        return false;
    }
  } else {
    return false;
  }
};

CustomIcon.defaultProps = {
  category: '',
  icon: '',
  width: 80,
  height: 80,
  color: "#757575"
};
/* harmony default export */ var custom = (CustomIcon);
// CONCATENATED MODULE: ./components/partials/custom/sidebar/styleContainer.jsx






 // elements




const StyleContainer = props => {
  var _subCategory$list;

  const {
    0: data,
    1: setData
  } = Object(external_react_["useState"])(props);
  const router = Object(router_["useRouter"])();
  const {
    category
  } = router.query;
  const {
    0: subCategory,
    1: setSubCategory
  } = Object(external_react_["useState"])();
  Object(external_react_["useEffect"])(() => {
    if (props.styleSelected) {
      setSubCategory({
        id: props.styleSelected.id,
        title: props.styleSelected.title,
        list: props.styleSelected.list
      });
    }
  }, [props.styleSelected]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "style-container",
      children: subCategory ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Slide_default.a, {
        when: true,
        left: true,
        duration: 500,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: `row`,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-4 me-0 pe-0 d-flex flex-column align-items-center mini-category",
            children: props.listStyle.map((data, index) => {
              var _props$subCategory;

              return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                onClick: () => {
                  setSubCategory({
                    id: data.id,
                    title: data.title,
                    list: data.list_category,
                    other_list: data.other_category
                  });
                },
                className: `sub-category-item w-100 text-pointer`,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "d-flex justify-content-center",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(custom, {
                    color: subCategory.title === data.title ? '#1E1E22' : '#757575',
                    category: category,
                    icon: data.image
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  className: `title text-center ${((_props$subCategory = props.subCategory) === null || _props$subCategory === void 0 ? void 0 : _props$subCategory.title) === data.title ? 'text-primary fw-bold' : ''}`,
                  children: props.t(data.title)
                })]
              }, index);
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "col-8 list-mini-category",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "header d-flex justify-content-between align-items-center",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: props.t(subCategory.title)
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "text-pointer",
                onClick: () => props.onClickOpenStyle(false),
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(elements_icon["e" /* ArrowLeft */], {})
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "row mt-4",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
                children: subCategory.list && ((_subCategory$list = subCategory.list) === null || _subCategory$list === void 0 ? void 0 : _subCategory$list.map(v => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  onClick: () => props.onClick({
                    id: subCategory.id,
                    title: subCategory.title,
                    list: subCategory.list,
                    name: v.name
                  }),
                  className: "col-12 col-lg-6 d-flex flex-column align-items-center text-pointer ",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
                    width: 65,
                    height: 80,
                    src: v.image,
                    alt: "laxmi"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    children: v.name
                  })]
                })))
              })
            })]
          })]
        })
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: `icon-style-list mt-2 pb-4 ${!props.isOpenStyle ? '' : 'd-none'}`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: `row`,
          children: props.listStyle.map((data, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            onClick: () => {
              console.log(data.title);
              setSubCategory({
                id: data.id,
                title: data.title,
                list: data.list_category,
                other_list: data.other_category
              });
            },
            className: "col-12 icon-style-item d-flex align-items-center text-pointer",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "img-container",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(custom, {
                category: category,
                icon: data.image
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
              className: "title mb-0",
              children: props.t(data.title)
            })]
          }))
        })
      })
    })
  });
};

/* harmony default export */ var styleContainer = (StyleContainer);
// CONCATENATED MODULE: ./components/partials/custom/sidebar/dataSidebar.js
const ShirtListStyle = [{
  id: 1,
  title: "Collar",
  image: 'Collar',
  list_category: [{
    name: "Stand Up",
    image: "/img/custom/styles/collar/band.jpg",
    price: 4
  }, {
    name: "Button Down",
    image: "/img/custom/styles/collar/button_down.jpg",
    price: 5
  }, {
    name: "Cutaway",
    image: "/img/custom/styles/collar/cutaway.jpg",
    price: 4
  }, {
    name: "Kent Collar",
    image: "/img/custom/styles/collar/kent.jpg",
    price: 4
  }, {
    name: "New Kent",
    image: "/img/custom/styles/collar/new_kent.jpg",
    price: 5
  }, {
    name: "Pinned",
    image: "/img/custom/styles/collar/pinned.jpg",
    price: 6
  }, {
    name: "Rounded",
    image: "/img/custom/styles/collar/rounded.jpg",
    price: 4
  }, {
    name: "Wing",
    image: "/img/custom/styles/collar/wing.jpg",
    price: 5
  }, {
    name: "Long",
    image: "/img/custom/styles/collar/long.jpg",
    price: 5
  }, {
    name: "Short Classic",
    image: "/img/custom/styles/collar/short.jpg",
    price: 3
  }]
}, {
  id: 2,
  title: "Cuffs",
  image: 'Cuffs',
  list_category: [{
    name: "Double Rounded French",
    image: "/img/custom/styles/cuff/drf.png",
    price: 5
  }, {
    name: "Double Square French",
    image: "/img/custom/styles/cuff/dsf.png",
    price: 5
  }, {
    name: "Rounded One",
    image: "/img/custom/styles/cuff/r1.png",
    price: 5
  }, {
    name: "Rounded Two",
    image: "/img/custom/styles/cuff/r2.png",
    price: 5
  }, {
    name: "Rounded French",
    image: "/img/custom/styles/cuff/rf.png",
    price: 5
  }, {
    name: "Square French",
    image: "/img/custom/styles/cuff/sf.png",
    price: 5
  }, {
    name: "Single One Button",
    image: "/img/custom/styles/cuff/s1.png",
    price: 5
  }, {
    name: "Single Two Button",
    image: "/img/custom/styles/cuff/s2.png",
    price: 5
  }, {
    name: "One Button Cut",
    image: "/img/custom/styles/cuff/obc.png",
    price: 5
  }, {
    name: "Two Button Cut",
    image: "/img/custom/styles/cuff/tbc.png",
    price: 5
  }]
}, {
  id: 3,
  title: "Sleeve",
  image: 'Sleeve',
  list_category: [{
    name: "Long",
    image: "/img/custom/styles/sleeve/long.jpg",
    price: 5
  }, {
    name: "Short",
    image: "/img/custom/styles/sleeve/short.jpg",
    price: 3
  }]
}, // {
//     id: 3,
//     title: "Fit",
//     image: 'Fit',
//     list_category: [
//         {
//             name: "Regular",
//             image: "/img/custom/styles/fit/regular.jpg",
//         },
//         {
//             name: "Slim",
//             image: "/img/custom/styles/fit/slim.jpg",
//         },
//     ]
// },
{
  id: 4,
  title: "Bottom",
  image: 'Bottom',
  list_category: [{
    name: "Tail",
    image: "/img/custom/styles/bottom/tail.jpg",
    price: 0
  }, {
    name: "Square",
    image: "/img/custom/styles/bottom/square.jpg",
    price: 0
  }],
  other_category: [{
    name: "Tucked",
    image: "/img/custom/styles/bottom/tucked.jpg",
    price: 0
  }, {
    name: "Untucked",
    image: "/img/custom/styles/bottom/untucked.jpg",
    price: 0
  }]
}, {
  id: 5,
  title: "Chest Pocket",
  image: 'ChestPocket',
  list_category: [{
    name: "No Pocket",
    image: "/img/custom/styles/pocket/no_pocket.jpg",
    price: 0
  }, {
    name: "Standard",
    image: "/img/custom/styles/pocket/standard.jpg",
    price: 3
  }, {
    name: "With Flap",
    image: "/img/custom/styles/pocket/with_flap.jpg",
    price: 4
  }, {
    name: "Double Standard",
    image: "/img/custom/styles/pocket/double_standard.jpg",
    price: 5
  }, {
    name: "Double With Flap",
    image: "/img/custom/styles/pocket/double_with_flap.jpg",
    price: 6
  }]
}, {
  id: 6,
  title: "Placket",
  image: 'Placket',
  list_category: [{
    name: "Standard",
    image: "/img/custom/styles/placket/standard.jpg",
    price: 5
  }, {
    name: "French",
    image: "/img/custom/styles/placket/french.jpg",
    price: 6
  }, {
    name: "Hidden",
    image: "/img/custom/styles/placket/hidden.jpg",
    price: 6
  }]
} // {
//     id: 7,
//     title: "Pleats",
//     image: 'Pleats',
//     list_category: [
//         {
//             name: "Box Pleat",
//             image: "/img/custom/styles/pleats/box_pleat.jpg",
//         },
//         {
//             name: "Side Pleat",
//             image: "/img/custom/styles/pleats/side_pleat.jpg",
//         },
//         {
//             name: "No Pleat",
//             image: "/img/custom/styles/pleats/no_pleat.jpg",
//         },
//     ]
// }
];
const TrouserListStyle = [{
  id: 8,
  title: "Fit",
  image: 'Fit'
}, {
  id: 9,
  title: "Rise",
  image: 'Rise'
}, {
  id: 10,
  title: "Pants Bottom",
  image: 'PantsBottom'
}, {
  id: 11,
  title: "Pleats",
  image: 'Pleats'
}, {
  id: 12,
  title: "Pants Fastening",
  image: 'PantsFastening'
}, {
  id: 13,
  title: "Pocket",
  image: 'Pockets'
}, {
  id: 14,
  title: "Pants Cuffs",
  image: 'PantsCuffs'
}, {
  id: 15,
  title: "Suspender Buttons",
  image: 'SuspenderButtons'
}];
const VestListStyle = [{
  id: 'v1',
  title: "Vest",
  image: 'Vest'
}, {
  id: 'v2',
  title: "Style",
  image: 'Style'
}, {
  id: 'v3',
  title: "Lapels",
  image: 'Lapels'
}, {
  id: 'v4',
  title: "Edge",
  image: 'Edge'
}, {
  id: 'v5',
  title: "Breast Pocket",
  image: 'BreastPocket'
}, {
  id: 'v6',
  title: "Front Pockets",
  image: 'FrontPocket'
}];
const BatikListStyle = [{
  id: 'b1',
  title: "Collar",
  image: 'Collar'
}, {
  id: 'b2',
  title: "Cuffs",
  image: 'Cuffs'
}, {
  id: 'b3',
  title: "Sleeve",
  image: 'Sleeve'
}, {
  id: 'b4',
  title: "Fit",
  image: 'Fit'
}, {
  id: 'b5',
  title: "Bottom",
  image: 'Bottom'
}, {
  id: 'b6',
  title: "Chest Pocket",
  image: 'ChestPocket'
}, {
  id: 'b7',
  title: "Placket",
  image: 'Placket'
}, {
  id: 'b8',
  title: "Pleats",
  image: 'Pleats'
}];
const BlazerListStyle = [{
  id: 'bl1',
  title: "Style",
  image: 'Style'
}, {
  id: 'bl2',
  title: "Fit",
  image: 'Fit'
}, {
  id: 'bl3',
  title: "Lapel Style",
  image: 'LapelStyle'
}, {
  id: 'bl4',
  title: "Pocket",
  image: 'Pocket'
}, {
  id: 'bl5',
  title: "Sleeve",
  image: 'Sleeve'
}, {
  id: 'bl6',
  title: "Back",
  image: 'Back'
}, {
  id: 'bl7',
  title: "Breast Pocket",
  image: 'BreastPocket'
}]; // accents

const ShirtListAccent = [{
  id: 16,
  title: "Embroidory",
  image: 'Embroidory',
  list_category: []
}, {
  id: 17,
  title: "Contrasted Collar",
  image: 'ContrastedCollar',
  list_category: [{
    name: "Default",
    image: "/img/custom/accent/collar/default.png",
    price: 3
  }, {
    name: "Inner",
    image: "/img/custom/accent/collar/inner.png",
    price: 5
  }, {
    name: "Outer",
    image: "/img/custom/accent/collar/outer.png",
    price: 5
  }, {
    name: "All",
    image: "/img/custom/accent/collar/all.png",
    price: 10
  }],
  list_color: [{
    name: "Black",
    code: "#323232",
    price: 0
  }, {
    name: "Navy",
    code: "#1d2541",
    price: 0
  }, {
    name: "Red",
    code: "#b40808",
    price: 0
  }]
}, {
  id: 18,
  title: "Customize Cuffs",
  image: 'CustomizeCuffs',
  list_category: [{
    name: "Inner",
    image: "/img/custom/accent/cuffs/inner.png",
    price: 5
  }, {
    name: "Outer",
    image: "/img/custom/accent/cuffs/outer.png",
    price: 5
  }, {
    name: "All",
    image: "/img/custom/accent/cuffs/all.png",
    price: 10
  }],
  list_color: [{
    name: "Black",
    code: "#323232",
    price: 0
  }, {
    name: "Navy",
    code: "#1d2541",
    price: 0
  }, {
    name: "Red",
    code: "#b40808",
    price: 0
  }]
}, {
  id: 19,
  title: "Threads",
  image: 'Threads',
  list_category: [{
    name: "All",
    image: "/img/custom/accent/threads/all.png",
    price: 10
  }, {
    name: "Default",
    image: "/img/custom/accent/threads/default.png",
    price: 10
  }]
}, // {
//     id: 20,
//     title: "Elbow Patches",
//     image: 'ElbowPatches'
// },
{
  id: 21,
  title: "Buttons",
  image: 'Buttons',
  list_category: [{
    name: "Custom",
    image: "/img/custom/accent/buttons/custom.png",
    price: 10
  }, {
    name: "Default",
    image: "/img/custom/accent/buttons/default.png",
    price: 10
  }],
  list_color: [{
    name: "Black",
    code: "#323232",
    price: 0
  }, {
    name: "Navy",
    code: "#1d2541",
    price: 0
  }, {
    name: "Red",
    code: "#b40808",
    price: 0
  }]
}];
const ShirtAccentSubCategory = {
  ContrastedCollar: [{
    title: "Default",
    modalFIlter: false,
    isData: false,
    image: '/img/custom/shirts/accent/ContrastedCollar/Default.svg'
  }, {
    title: "All",
    modalFIlter: true,
    isData: false,
    image: '/img/custom/shirts/accent/ContrastedCollar/All.svg'
  }, {
    title: "Inner",
    modalFIlter: true,
    isData: false,
    image: '/img/custom/shirts/accent/ContrastedCollar/Inner.svg'
  }, {
    title: "Outer",
    modalFIlter: true,
    isData: false,
    image: '/img/custom/shirts/accent/ContrastedCollar/Outer.svg'
  }],
  CustomizeCuffs: [{
    title: "Default",
    modalFIlter: false,
    isData: false,
    image: '/img/custom/shirts/accent/CustomizeCuffs/Default.svg'
  }, {
    title: "All",
    modalFIlter: true,
    isData: false,
    image: '/img/custom/shirts/accent/CustomizeCuffs/All.svg'
  }, {
    title: "Inner",
    modalFIlter: true,
    isData: false,
    image: '/img/custom/shirts/accent/CustomizeCuffs/Inner.svg'
  }, {
    title: "Outer",
    modalFIlter: true,
    isData: false,
    image: '/img/custom/shirts/accent/CustomizeCuffs/Outer.svg'
  }],
  // ElbowPatches: [
  //     {
  //         title: "Default",
  //         modalFIlter: false,
  //         isData: false,
  //         image: '/img/custom/shirts/accent/ElbowPatches/Default.svg'
  //     },
  //     {
  //         title: "Custom Color",
  //         modalFIlter: true,
  //         isData: false,
  //         image: '/img/custom/shirts/accent/ElbowPatches/CustomColour.svg'
  //     }
  // ],
  Threads: [{
    title: "Default",
    modalFIlter: false,
    isData: false,
    image: '/img/custom/none.svg'
  }, {
    title: "All",
    modalFIlter: false,
    isData: true,
    image: '/img/custom/shirts/accent/Threads/All.svg'
  }, {
    title: "Only Cuffs",
    modalFIlter: false,
    isData: true,
    image: '/img/custom/shirts/accent/Threads/OnlyCuffs.svg'
  }],
  Buttons: [{
    title: "Default",
    modalFIlter: false,
    isData: false,
    image: '/img/custom/shirts/accent/Buttons/Default.svg'
  }, {
    title: "Custom",
    modalFIlter: true,
    isData: false,
    image: '/img/custom/shirts/accent/Buttons/Custom.svg'
  }]
};
const VestListAccent = [{
  id: 22,
  title: "Lining",
  image: 'Lining'
}, {
  id: 23,
  title: `Back Lining`,
  image: 'BackLining'
}, {
  id: 24,
  title: "Monogram",
  image: 'Monogram'
}, {
  id: 25,
  title: "Buttons",
  image: 'Buttons'
}, {
  id: 26,
  title: "Threads",
  image: 'Threads'
}];
const VestAccentSubCategory = {
  Lining: [{
    title: "Default",
    modalFIlter: false,
    isData: false,
    image: '/img/custom/none.svg'
  }, {
    title: "Custom Color",
    modalFIlter: true,
    isData: false,
    image: '/img/custom/vest/accent/Lining/CustomColor.svg'
  }],
  Backlining: [{
    title: "Default",
    modalFIlter: false,
    isData: false,
    image: '/img/custom/none.svg'
  }, {
    title: "Custom Color",
    modalFIlter: true,
    isData: false,
    image: '/img/custom/vest/accent/Backlining/CustomColor.svg'
  }, {
    title: "Same Fabric as The Front",
    modalFIlter: false,
    isData: false,
    image: '/img/custom/vest/accent/Backlining/SameFabricAsTheFront.svg'
  }],
  Buttons: [{
    title: "Default",
    modalFIlter: false,
    isData: false,
    image: '/img/custom/none.svg'
  }, {
    title: "All",
    modalFIlter: false,
    isData: true,
    image: '/img/custom/vest/accent/Buttons/BrassButtons.svg'
  }],
  Threads: [{
    title: "Default",
    modalFIlter: false,
    isData: false,
    image: '/img/custom/none.svg'
  }, {
    title: "All",
    modalFIlter: false,
    isData: true,
    image: '/img/custom/vest/accent/Threads/All.svg'
  }]
};
const BatikListAccent = [{
  id: 27,
  title: "Embroidory",
  image: 'Embroidory'
}, {
  id: 28,
  title: "Contrasted Collar",
  image: 'ContrastedCollar'
}, {
  id: 29,
  title: "Customize Cuffs",
  image: 'CustomizeCuffs'
}, {
  id: 30,
  title: "Threads",
  image: 'Threads'
}, // {
//     id: 31,
//     title: "Elbow Patches",
//     image: 'ElbowPatches'
// },
{
  id: 32,
  title: "Buttons",
  image: 'Buttons'
}];
const BlazerListAccent = [{
  id: 'bla1',
  title: "Lining",
  image: 'Lining'
}, {
  id: 'bla2',
  title: "Monogram",
  image: 'Monogram'
}, {
  id: 'bla3',
  title: "Lapels",
  image: 'Lapels'
}, {
  id: 'bla4',
  title: "Buttons",
  image: 'Buttons'
}, {
  id: 'bla5',
  title: "Threads",
  image: 'Threads'
}, // {
//     id: 'bla6',
//     title: "Elbow Patches",
//     image: 'ElbowPatches'
// },
{
  id: 'bla7',
  title: "Neck Lining",
  image: 'NeckLining'
}];
const BlazerAccentSubCategory = {
  Lining: [{
    title: "Default",
    modalFIlter: false,
    isData: false,
    image: '/img/custom/blazer/accent/Lining/Default.svg'
  }, {
    title: "Custom Color",
    modalFIlter: true,
    isData: false,
    image: '/img/custom/blazer/accent/Lining/CustomColor.svg'
  }, {
    title: "Unlined",
    modalFIlter: true,
    isData: false,
    image: '/img/custom/blazer/accent/Lining/Unlined.svg'
  }, {
    title: "Quilted Lining",
    modalFIlter: true,
    isData: false,
    image: '/img/custom/blazer/accent/Lining/QuiltedLining.svg'
  }],
  Lapels: [{
    title: "Without",
    modalFIlter: false,
    isData: false,
    image: '/img/custom/blazer/accent/Lapels/Without.svg'
  }, {
    title: "Custom Color",
    modalFIlter: false,
    isData: true,
    image: '/img/custom/blazer/accent/Lapels/CustomColor.svg'
  }],
  Buttons: [{
    title: "Without",
    modalFIlter: false,
    isData: false,
    image: '/img/custom/blazer/accent/Buttons/Default.svg'
  }, {
    title: "Custom Color",
    modalFIlter: false,
    isData: true,
    image: '/img/custom/blazer/accent/Buttons/Custom.svg'
  }],
  Threads: [{
    title: "Default",
    modalFIlter: false,
    isData: false,
    image: '/img/custom/none.svg'
  }, {
    title: "All",
    modalFIlter: false,
    isData: true,
    image: '/img/custom/blazer/accent/Threads/All.svg'
  }, {
    title: "Only Cuffs",
    modalFIlter: false,
    isData: true,
    image: '/img/custom/blazer/accent/Threads/OnlyCuffs.svg'
  }, {
    title: "Lapels Only",
    modalFIlter: false,
    isData: true,
    image: '/img/custom/blazer/accent/Threads/LapelsOnly.svg'
  }],
  // ElbowPatches: [
  //     {
  //         title: "Without",
  //         modalFIlter: false,
  //         isData: false,
  //         image: '/img/custom/blazer/accent/ElbowPatches/Without.svg'
  //     },
  //     {
  //         title: "Custom Color",
  //         modalFIlter: false,
  //         isData: true,
  //         image: '/img/custom/blazer/accent/ElbowPatches/CustomColor.svg'
  //     }
  // ],
  NeckLining: [{
    title: "Default",
    modalFIlter: false,
    isData: false,
    image: '/img/custom/none.svg'
  }, {
    title: "Custom Color",
    modalFIlter: false,
    isData: true,
    image: '/img/custom/blazer/accent/NeckLining/CustomColor.svg'
  }]
};
// CONCATENATED MODULE: ./components/partials/custom/sidebar/module/monogram.jsx



const fontList = [{
  fontFamily: "Mr Bedfort",
  type: "cursive"
}, {
  fontFamily: "Philosopher",
  type: "sans-serif"
}, {
  fontFamily: "Princess Sofia",
  type: "cursive"
}, {
  fontFamily: "Rakkas",
  type: "cursive"
}, {
  fontFamily: "Revalia",
  type: "cursive"
}, {
  fontFamily: "Ananda Black",
  type: "sans-serif"
}, {
  fontFamily: "Curetro",
  type: "sans-serif"
}, {
  fontFamily: "Naliko Betah",
  type: "sans-serif"
}];
const colorList = ["#28568C", "#DDB210", "#987734", "#C1386C", "#898279", "#B4272C", "#F0EFEC", "#359540"];
const intialPosition = ["High", "Low", "Medium", "Cuff"];

const Monogram = ({
  t,
  category
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      className: "form-control mt-4",
      type: "search",
      placeholder: "Type your initials"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      className: "mt-4 title-sub-accent",
      children: [t("Font"), " : "]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "row",
      children: fontList.map((data, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-12 col-lg-5",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "form-check d-flex align-items-center",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            className: "form-check-input",
            type: "radio",
            name: "MonogramCheckbox",
            id: `monogramItemCheck${index}`,
            value: "option1"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            style: {
              fontFamily: data.fontFamily
            },
            className: "form-check-label",
            for: `monogramItemCheck${index}`,
            children: "ABC"
          })]
        })
      }, index))
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      className: "mt-4 title-sub-accent",
      children: [t("Monogram Thread Color"), " : "]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "row",
      children: colorList.map((data, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-6 col-md-4 col-lg-2 my-2",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            backgroundColor: data
          },
          className: "color-item text-pointer"
        })
      }, index))
    }), category === "shirts" ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: "mt-4 title-sub-accent",
        children: "Initial Position : "
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "row",
        children: intialPosition.map((data, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-12 col-lg-5",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "form-check d-flex align-items-center",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
              className: "form-check-input",
              type: "radio",
              name: "InitialPositionCheckbox",
              id: `positionCheck${index}`,
              value: "option1"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
              className: "form-check-label",
              for: `positionCheck${index}`,
              children: data
            })]
          })
        }, index))
      })]
    }) : null]
  });
};

/* harmony default export */ var monogram = (Monogram);
// CONCATENATED MODULE: ./components/partials/custom/sidebar/module/accentSubCategoryFilter.jsx



const accentSubCategoryFilter_colorList = ["#28568C", "#DDB210", "#987734", "#C1386C", "#898279", "#B4272C", "#F0EFEC", "#359540"];

const AccentSubCategoryFilter = ({
  t,
  data,
  setOpenFabric,
  setOpenData
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "row mt-4",
    children: data.map((data, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      onClick: () => {
        if (data.isData) {
          setOpenData(true);
        } else if (data.modalFIlter) {
          setOpenFabric(true);
        } else {
          return false;
        }
      },
      className: "text-pointer col-12 col-lg-6 d-flex flex-column align-items-center",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
        width: 80,
        height: 80,
        src: data.image,
        alt: "laxmi"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: "text-center",
        children: t(data.title)
      })]
    }, index))
  });
};

/* harmony default export */ var accentSubCategoryFilter = (AccentSubCategoryFilter);
// CONCATENATED MODULE: ./components/partials/custom/sidebar/accentContainer.jsx






 // elements


 // data


 // module




const AccentContainer = ({
  t
}) => {
  const router = Object(router_["useRouter"])();
  const {
    category
  } = router.query;
  const {
    0: list,
    1: setList
  } = Object(external_react_["useState"])([]);
  const {
    0: openStyle,
    1: setOpenStyle
  } = Object(external_react_["useState"])(false);
  const {
    0: openFabric,
    1: setOpenFabric
  } = Object(external_react_["useState"])(false);
  const {
    0: openData,
    1: setOpenData
  } = Object(external_react_["useState"])(false);
  const {
    0: nameSubCategory,
    1: setNameSubCategory
  } = Object(external_react_["useState"])("");
  const {
    0: subCategory,
    1: setSubCategory
  } = Object(external_react_["useState"])({});
  Object(external_react_["useEffect"])(() => {
    switch (category) {
      case 'vests':
        setList(VestListAccent);
        break;

      case 'batiks':
        setList(BatikListAccent);
        break;

      case 'shirts':
        setList(ShirtListAccent);
        break;

      case 'blazer':
        setList(BlazerListAccent);
        break;

      default:
        return false;
    }
  }, [category]);

  const SubCategory = () => {
    if (category === "shirts") {
      switch (subCategory.title) {
        case 'Embroidory':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(monogram, {
            t: t,
            category: category
          });

        case 'Contrasted Collar':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: ShirtAccentSubCategory.ContrastedCollar
          });

        case 'Customize Cuffs':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: ShirtAccentSubCategory.CustomizeCuffs
          });

        case 'Threads':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: ShirtAccentSubCategory.Threads
          });

        case 'Elbow Patches':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: ShirtAccentSubCategory.ElbowPatches
          });

        case 'Buttons':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: ShirtAccentSubCategory.Buttons
          });

        default:
          return false;
      }
    } else if (category === "batiks") {
      switch (subCategory.title) {
        case 'Embroidory':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(monogram, {
            t: t,
            category: category
          });

        case 'Contrasted Collar':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: ShirtAccentSubCategory.ContrastedCollar
          });

        case 'Customize Cuffs':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: ShirtAccentSubCategory.CustomizeCuffs
          });

        case 'Threads':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: ShirtAccentSubCategory.Threads
          });

        case 'Elbow Patches':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: ShirtAccentSubCategory.ElbowPatches
          });

        case 'Buttons':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: ShirtAccentSubCategory.Buttons
          });

        default:
          return false;
      }
    } else if (category === "vests") {
      switch (subCategory.title) {
        case 'Monogram':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(monogram, {
            t: t,
            category: category
          });

        case 'Lining':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: VestAccentSubCategory.Lining
          });

        case 'Back Lining':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: VestAccentSubCategory.Backlining
          });

        case 'Buttons':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: VestAccentSubCategory.Buttons
          });

        case 'Threads':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: VestAccentSubCategory.Threads
          });

        default:
          return false;
      }
    } else if (category === "blazer") {
      switch (subCategory.title) {
        case 'Monogram':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(monogram, {
            t: t,
            category: category
          });

        case 'Lining':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: BlazerAccentSubCategory.Lining
          });

        case 'Lapels':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: BlazerAccentSubCategory.Lapels
          });

        case 'Buttons':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: BlazerAccentSubCategory.Buttons
          });

        case 'Threads':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: BlazerAccentSubCategory.Threads
          });

        case 'Elbow Patches':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: BlazerAccentSubCategory.ElbowPatches
          });

        case 'Neck Lining':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: BlazerAccentSubCategory.NeckLining
          });

        default:
          return false;
      }
    } else {
      return false;
    }
  };

  const SubCategorySuits = () => {
    if (nameSubCategory === "blazer") {
      switch (subCategory.title) {
        case 'Monogram':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(monogram, {
            t: t,
            category: category
          });

        case 'Lining':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: BlazerAccentSubCategory.Lining
          });

        case 'Lapels':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: BlazerAccentSubCategory.Lapels
          });

        case 'Buttons':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: BlazerAccentSubCategory.Buttons
          });

        case 'Threads':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: BlazerAccentSubCategory.Threads
          });

        case 'Elbow Patches':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: BlazerAccentSubCategory.ElbowPatches
          });

        case 'Neck Lining':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: BlazerAccentSubCategory.NeckLining
          });

        default:
          return false;
      }
    } else {
      switch (subCategory.title) {
        case 'Monogram':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(monogram, {
            t: t,
            category: category
          });

        case 'Lining':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: VestAccentSubCategory.Lining
          });

        case 'Back Lining':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: VestAccentSubCategory.Backlining
          });

        case 'Buttons':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: VestAccentSubCategory.Buttons
          });

        case 'Threads':
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(accentSubCategoryFilter, {
            setOpenData: setOpenData,
            setOpenFabric: setOpenFabric,
            t: t,
            data: VestAccentSubCategory.Threads
          });

        default:
          return false;
      }
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "style-container",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Slide_default.a, {
      left: true,
      when: openStyle,
      duration: 500,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: `row sub-category ${openStyle ? '' : 'd-none'}`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-4 me-0 pe-0 d-flex flex-column align-items-center mini-category",
          children: category !== "suits" ? list.map((data, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            onClick: () => {
              setOpenFabric(false);
              setOpenData(false);
              setSubCategory({
                id: data.id,
                title: data.title
              });
            },
            className: "sub-category-item w-100 text-pointer",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "d-flex justify-content-center",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(custom, {
                color: subCategory.title === data.title ? '#1E1E22' : '#757575',
                category: category,
                icon: data.image
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: `title text-center ${subCategory.title === data.title ? 'text-primary fw-bold' : ''}`,
              children: t(data.title)
            })]
          }, index)) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "sub-category-item w-100 text-pointer",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: `title text-center fw-bold`,
                children: t("common:blazer")
              })
            }), BlazerListAccent.map((data, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              onClick: () => {
                setNameSubCategory("blazer");
                setSubCategory({
                  id: data.id,
                  title: data.title
                });
              },
              className: "sub-category-item w-100 text-pointer",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "d-flex justify-content-center",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(custom, {
                  color: subCategory.title === data.title ? '#1E1E22' : '#757575',
                  category: "blazer",
                  icon: data.image
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: `title text-center ${subCategory.title === data.title ? 'text-primary fw-bold' : ''}`,
                children: t(data.title)
              })]
            }, index)), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "sub-category-item w-100 text-pointer",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: `title text-center fw-bold`,
                children: t("common:vests")
              })
            }), VestListAccent.map((data, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              onClick: () => {
                setNameSubCategory("vests");
                setSubCategory({
                  id: data.id,
                  title: data.title
                });
              },
              className: "sub-category-item w-100 text-pointer",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "d-flex justify-content-center",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(custom, {
                  color: subCategory.title === data.title ? '#1E1E22' : '#757575',
                  category: "vests",
                  icon: data.image
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: `title text-center ${subCategory.title === data.title ? 'text-primary fw-bold' : ''}`,
                children: t(data.title)
              })]
            }, index))]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Slide_default.a, {
          left: true,
          when: openFabric,
          duration: 500,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: `col-8 mx-0 px-0 open-fabric ${openFabric ? '' : 'd-none'}`,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "header d-flex justify-content-between align-items-center",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: "Filter"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "text-pointer",
                onClick: () => setOpenFabric(!openFabric),
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(elements_icon["e" /* ArrowLeft */], {})
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "row mt-3 me-0 ps-3 scroll",
              children: FabricList.map((data, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "mx-0 col-lg-6 col-12 fabric-item text-pointer",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "img-container",
                  children: [data.isNew ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: "new",
                    children: t("common:New")
                  }) : null, /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
                    layout: "fill",
                    objectFit: "cover",
                    src: data.image,
                    alt: "laxmi"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: "price d-flex align-items-center w-100",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
                      children: " $ 0.00"
                    })
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                  className: "title mb-0 mt-0",
                  children: data.title
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  className: "category mb-0",
                  children: data.category
                })]
              }, index))
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-8 list-mini-category",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "header d-flex justify-content-between align-items-center",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: t(subCategory.title)
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "text-pointer",
              onClick: () => setOpenStyle(!openStyle),
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(elements_icon["e" /* ArrowLeft */], {})
            })]
          }), category !== "suits" ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(SubCategory, {}) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(SubCategorySuits, {})]
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "icon-style-list mt-2 pb-4",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "row ",
        children: category !== "suits" ? list.map((data, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          onClick: () => {
            setSubCategory({
              id: data.id,
              title: data.title
            });
            setOpenStyle(true);
          },
          className: "col-12 icon-style-item d-flex align-items-center text-pointer",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "img-container",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(custom, {
              category: category,
              icon: data.image
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
            className: "title mb-0",
            children: t(data.title)
          })]
        }, index)) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "accordion",
          id: "accordionExample",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "accordion-item",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
              className: "accordion-header",
              id: "headingOne",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                className: "accordion-button",
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#collapseOne",
                "aria-expanded": "true",
                "aria-controls": "collapseOne",
                children: "Jacket"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              id: "collapseOne",
              className: "accordion-collapse collapse show",
              "aria-labelledby": "headingOne",
              "data-bs-parent": "#accordionExample",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "accordion-body",
                children: BlazerListAccent.map((data, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  onClick: () => {
                    setSubCategory({
                      id: data.id,
                      title: data.title
                    });
                    setNameSubCategory("blazer");
                    setOpenStyle(true);
                  },
                  className: "col-12 icon-style-item d-flex align-items-center text-pointer",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: "img-container",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(custom, {
                      category: "blazer",
                      icon: data.image
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                    className: "title mb-0",
                    children: t(data.title)
                  })]
                }, index))
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "accordion-item",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
              className: "accordion-header",
              id: "headingThree",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                className: "accordion-button collapsed",
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#collapseThree",
                "aria-expanded": "false",
                "aria-controls": "collapseThree",
                children: "Vest"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              id: "collapseThree",
              className: "accordion-collapse collapse",
              "aria-labelledby": "headingThree",
              "data-bs-parent": "#accordionExample",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "accordion-body",
                children: VestListAccent.map((data, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  onClick: () => {
                    setSubCategory({
                      id: data.id,
                      title: data.title
                    });
                    setNameSubCategory("vests");
                    setOpenStyle(true);
                  },
                  className: "col-12 icon-style-item d-flex align-items-center text-pointer",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: "img-container",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(custom, {
                      category: "vests",
                      icon: data.image
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                    className: "title mb-0",
                    children: t(data.title)
                  })]
                }, index))
              })
            })]
          })]
        })
      })
    })]
  });
};

/* harmony default export */ var accentContainer = (AccentContainer);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./components/partials/custom/hookCustom.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import frenchPlacket from "../../../public/img/placket/Placket French.svg";




const initStyle = {
  "bottom": {
    "image": "",
    "name": "Square"
  },
  "collar": {
    "image": "",
    "name": "Stand Up"
  },
  "collarBack": {
    "image": "/img/pleats/red/Collar Back.svg",
    "name": "Stand Up"
  },
  "sleeve": {
    "image": "",
    "name": "Short"
  },
  "cuffs": {
    "image": "",
    "name": "One Button Cut"
  },
  "cuffsBack": {
    "image": "/img/sleeve_back/Cuffs Double Rounded French Back.svg",
    "name": "Square French"
  },
  "pocket": {
    "image": "",
    "name": "With Flap"
  },
  "placket": {
    "image": "",
    "name": "Standard Body Untucked With Square"
  },
  "pleats": {
    "image": "/img/pleats/red/Pleats Box Tucked.svg",
    "name": "Pleats"
  },
  "collarFold": {
    "image": ""
  },
  "cuffsFold": {
    "image": ""
  },
  "pocketFold": {
    "image": "" // "image":"/img/pleats/red/Chest Pocket Folded.svg"

  },
  "placketFold": {
    "image": "/img/folded/red/pleats/Placket Standard Body Folded.svg"
  }
};

const useHookCustom = () => {
  const router = Object(router_["useRouter"])();
  const {
    0: fabricList,
    1: setFabricList
  } = Object(external_react_["useState"])([]);
  const {
    0: fabricSelect,
    1: setFabricSelect
  } = Object(external_react_["useState"])(null);
  const {
    0: listStyle,
    1: setListStyle
  } = Object(external_react_["useState"])([]);
  const {
    0: openStyle,
    1: setOpenStyle
  } = Object(external_react_["useState"])(false);
  const {
    0: styleSelect,
    1: setStyleSelect
  } = Object(external_react_["useState"])(null);
  const {
    0: dataStyle,
    1: setDataStyle
  } = Object(external_react_["useState"])(initStyle);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: isLoadingFabric,
    1: setIsLoadingFabric
  } = Object(external_react_["useState"])(false);
  const {
    category
  } = router.query;
  const {
    0: pov,
    1: setPov
  } = Object(external_react_["useState"])("FRONT");
  const fabricSelectRef = Object(external_react_["useRef"])(null);
  var fabric;
  Object(external_react_["useEffect"])(() => {
    if (fabricSelect) {
      getCustomStyle();
      fabricSelectRef.current = fabricSelect;
    }
  }, [fabricSelect]);
  Object(external_react_["useEffect"])(() => {
    setIsLoadingFabric(true);
    console.log("ini new pov", pov);

    if (!fabricSelect && fabricSelectRef.current) {
      setFabricSelect(fabricSelectRef.current);
    } else {
      getCustomStyle();
    }
  }, [pov]);

  const updatePov = (newPov, newFabric) => {
    setPov(newPov);
    setFabricSelect(newFabric);
  };

  Object(external_react_["useEffect"])(() => {
    getCustomStyle();
  }, []);
  Object(external_react_["useEffect"])(async () => {
    try {
      var response = await external_axios_default.a.get("/api/fabric/list");
      const {
        status,
        message
      } = response.data;

      if (status) {
        const {
          data
        } = response.data;
        setFabricList(data);
      } else {
        setFabricList([]);
      }
    } catch (e) {
      setFabricList([]);
    }
  }, []);
  Object(external_react_["useEffect"])(async () => {
    setIsLoadingFabric(true);
    getCustomStyle();
  }, [fabricSelect]);
  Object(external_react_["useEffect"])(() => {
    console.log("DataStyle:", dataStyle);
  }, [dataStyle]);
  Object(external_react_["useEffect"])(() => {
    setIsLoading(true);
    console.log(styleSelect);

    const newDataStyle = _objectSpread({}, dataStyle);

    switch (styleSelect === null || styleSelect === void 0 ? void 0 : styleSelect.title) {
      case "Collar":
        newDataStyle.collar.name = styleSelect.name;
        break;

      case "Sleeve":
        newDataStyle.sleeve.name = styleSelect.name;
        break;

      case "Bottom":
        newDataStyle.bottom.name = styleSelect.name;
        break;

      case "Chest Pocket":
        newDataStyle.pocket.name = styleSelect.name;
        break;

      case "Cuffs":
        newDataStyle.cuffs.name = styleSelect.name;
        newDataStyle.cuffsBack.name = styleSelect.name;
        newDataStyle.sleeve.name = "Long";
        break;

      case "Placket":
        newDataStyle.placket.name = styleSelect.name;
      // case "Pleats":
      //     newDataStyle.pleats.name = styleSelect.name

      default:
        break;
    }

    getCustomStyle();
  }, [styleSelect]);
  Object(external_react_["useEffect"])(() => {
    switch (category) {
      case 'vests':
        setListStyle(VestListStyle);
        break;

      case 'batiks':
        setListStyle(BatikListStyle);
        break;

      case 'shirts':
        setListStyle(ShirtListStyle);
        break;

      case 'trousers':
        setListStyle(TrouserListStyle);
        break;

      case 'blazer':
        setListStyle(BlazerListStyle);
        break;
    }
  }, [category]);

  const getCustomStyle = async () => {
    const currentFabricSelect = fabricSelect || fabricSelectRef.current;
    console.log(currentFabricSelect);

    if (!currentFabricSelect) {
      console.log("No fabric selected");
      setIsLoadingFabric(false);
      return;
    }

    try {
      var _data$styles$collar, _data$styles$collar2, _data$styles$sleeve, _data$styles$sleeve2, _data$styles$chestpoc, _data$styles$chestpoc2, _data$styles$placket, _data$styles$placket2;

      let placketName = "",
          isTucked = false;

      if (dataStyle.placket.name.split(" ").length > 1) {
        //* Check apakah isi nya "Standar" atau sudah lengkap dengan "Body Untucked With Square"
        placketName = dataStyle.placket.name;
      } else {
        placketName = dataStyle.placket.name.concat(" Body", isTucked ? "" : "Untucked", "With Square");
      }

      var url = `/api/custom/custom_style?fabric=${currentFabricSelect._id}&collar=${dataStyle.collar.name}&cuffs=${dataStyle.cuffs.name}&sleeve=${dataStyle.sleeve.name}&bottom=${dataStyle.bottom.name}&chestpocket=${dataStyle.pocket.name}&placket=${dataStyle.placket.name}&pov=${pov}`;
      var response = await external_axios_default.a.get(url);
      console.log(url);
      const {
        status,
        data
      } = response.data;
      console.log(data);

      const newDataStyle = _objectSpread({}, dataStyle); // newDataStyle.bottom.name = data.bottom.name
      // newDataStyle.bottom.image = data.bottom.image


      newDataStyle.collar.name = ((_data$styles$collar = data.styles.collar) === null || _data$styles$collar === void 0 ? void 0 : _data$styles$collar.name) || "";
      newDataStyle.collar.image = ((_data$styles$collar2 = data.styles.collar) === null || _data$styles$collar2 === void 0 ? void 0 : _data$styles$collar2.image) || "";
      newDataStyle.sleeve.name = ((_data$styles$sleeve = data.styles.sleeve) === null || _data$styles$sleeve === void 0 ? void 0 : _data$styles$sleeve.name) || "";
      newDataStyle.sleeve.image = ((_data$styles$sleeve2 = data.styles.sleeve) === null || _data$styles$sleeve2 === void 0 ? void 0 : _data$styles$sleeve2.image) || "";
      newDataStyle.pocket.name = ((_data$styles$chestpoc = data.styles.chestpocket) === null || _data$styles$chestpoc === void 0 ? void 0 : _data$styles$chestpoc.name) || "";
      newDataStyle.pocket.image = ((_data$styles$chestpoc2 = data.styles.chestpocket) === null || _data$styles$chestpoc2 === void 0 ? void 0 : _data$styles$chestpoc2.image) || "";
      newDataStyle.placket.name = ((_data$styles$placket = data.styles.placket) === null || _data$styles$placket === void 0 ? void 0 : _data$styles$placket.name) || "";
      newDataStyle.placket.image = ((_data$styles$placket2 = data.styles.placket) === null || _data$styles$placket2 === void 0 ? void 0 : _data$styles$placket2.image) || "";
      fabric = fabricSelect;
      console.log(fabricSelect._id);
      setDataStyle(newDataStyle);
      console.log(newDataStyle); // if(fabricSelect._id==="6705fffa8f14879009126d1d"){

      newDataStyle.pleats.image = "/img/pleats/red/Pleats Box Tucked.svg";
      newDataStyle.collarBack.image = "/img/pleats/red/Collar Back.svg";

      if (dataStyle.placket.name === "French") {
        newDataStyle.placketFold.image = "/img/folded/red/pleats/Placket French Body Folded.svg";
      } else if (dataStyle.placket.name === "Hidden") {
        newDataStyle.placketFold.image = "/img/folded/red/pleats/Placket Hidden Body Folded.svg";
      } else if (dataStyle.placket.name === "Standard") {
        newDataStyle.placketFold.image = "/img/folded/red/pleats/Placket Standard Body Folded.svg";
      }

      if (dataStyle.collar.name === "Stand Up") {
        newDataStyle.collarFold.image = "/img/folded/red/collar/Collar Stand Up Placket French Folded.svg";
      } else if (dataStyle.collar.name === "Button Down") {
        newDataStyle.collarFold.image = "/img/folded/red/collar/Collar Button Down Placket French Folded.svg";
      } else if (dataStyle.collar.name === "Cutaway") {
        newDataStyle.collarFold.image = "/img/folded/red/collar/Collar Cutaway Placket French Folded.svg";
      } else if (dataStyle.collar.name === "Kent Collar") {
        newDataStyle.collarFold.image = "/img/folded/red/collar/Collar Kent Collar Placket French Folded.svg";
      } else if (dataStyle.collar.name === "New Kent") {
        newDataStyle.collarFold.image = "/img/folded/red/collar/Collar New Kent Placket French Folded.svg";
      } else if (dataStyle.collar.name === "Pinned") {
        newDataStyle.collarFold.image = "/img/folded/red/collar/Collar Pinned Placket French Folded.svg";
      } else if (dataStyle.collar.name === "Rounded") {
        newDataStyle.collarFold.image = "/img/folded/red/collar/Collar Rounded Placket French Folded.svg";
      } else if (dataStyle.collar.name === "Wing") {
        newDataStyle.collarFold.image = "/img/folded/red/collar/Collar Wing Placket French Folded.svg";
      } else if (dataStyle.collar.name === "Long") {
        newDataStyle.collarFold.image = "/img/folded/red/collar/Collar Long Placket French Folded.svg";
      } else if (dataStyle.collar.name === "Short Classic") {}

      if (dataStyle.pocket.name === "No Pocket") {} else if (dataStyle.pocket.name === "Standard") {
        newDataStyle.pocketFold.image = "/img/folded/red/pocket/Chestpocket Standard Folded.svg";
      } else if (dataStyle.pocket.name === "With Flap") {
        newDataStyle.pocketFold.image = "/img/folded/red/pocket/Chestpocket With Flap Folded.svg";
      } else if (dataStyle.pocket.name === "Double Standard") {
        newDataStyle.pocketFold.image = "/img/folded/red/pocket/Chestpocket Double Standard Folded.svg";
      } else if (dataStyle.pocket.name === "Double With Flap") {
        newDataStyle.pocketFold.image = "/img/folded/red/pocket/Chestpocket Double With Flap Folded.svg";
      }

      if (dataStyle.cuffs.name === "Double Rounded French") {
        newDataStyle.cuffsFold.image = "/img/folded/red/sleeve/Cuffs Double Rounded French Folded.svg";
      } else if (dataStyle.cuffs.name === "Double Square French") {} else if (dataStyle.cuffs.name === "Rounded One") {
        newDataStyle.cuffsFold.image = "/img/folded/red/sleeve/Cuffs Rounded One Button Folded.svg";
      } else if (dataStyle.cuffs.name === "Rounded Two") {} else if (dataStyle.cuffs.name === "Square French") {
        newDataStyle.cuffsFold.image = "/img/folded/red/sleeve/Cuffs Square French Folded.svg";
      } else if (dataStyle.cuffs.name === "Single One Button") {} else if (dataStyle.cuffs.name === "Single Two Button") {} else if (dataStyle.cuffs.name === "One Button Cut") {
        newDataStyle.cuffsFold.image = "/img/folded/red/sleeve/Cuffs One Button Cut  Folded.svg";
      } else if (dataStyle.cuffs.name === "Two Button Cut") {} else if (dataStyle.cuffs.name === "Short") {
        newDataStyle.cuffsFold.image = "/img/folded/red/sleeve/Sleeve Short Folded.svg";
      }
    } catch (e) {
      console.log(e);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 700);
      setTimeout(() => {
        setIsLoadingFabric(false);
      }, 1000);
    }
  };

  return {
    openStyle,
    listStyle,
    fabricList,
    styleSelect,
    fabricSelect,
    dataStyle,
    isLoading,
    isLoadingFabric,
    pov,
    updatePov,
    setPov,
    setDataStyle,
    setIsLoading,
    setOpenStyle,
    setFabricList,
    setStyleSelect,
    setFabricSelect,
    setIsLoadingFabric
  };
};

/* harmony default export */ var hookCustom = (useHookCustom);
// CONCATENATED MODULE: ./components/partials/custom/modelContainer.jsx









const ModelContainer = ({
  fabricSelect,
  isLoading,
  isLoadingFabric,
  dataStyle
}) => {
  const {
    pov,
    updatePov
  } = hookCustom(); // Array containing the possible values

  const povOptions = ['FRONT', 'BACK', 'FOLDED'];
  const duration = 1000;
  const interval = 300;
  const {
    0: sleeveFlicker,
    1: setSleeveFlicker
  } = Object(external_react_["useState"])(false);
  const {
    0: collarFlicker,
    1: setCollarFlicker
  } = Object(external_react_["useState"])(false);
  const {
    0: cuffsFlicker,
    1: setCuffsFlicker
  } = Object(external_react_["useState"])(false);
  const {
    0: placketFlicker,
    1: setPlacketFlicker
  } = Object(external_react_["useState"])(false);
  const {
    0: pocketFlicker,
    1: setPocketFlicker
  } = Object(external_react_["useState"])(false);
  const {
    0: pleatsFlicker,
    1: setPleatsFlicker
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    updatePov(povOptions[0], fabricSelect);
  }, []);

  const handlePrevPovChange = () => {
    const currentIndex = povOptions.indexOf(pov);
    const prevIndex = (currentIndex - 1 + povOptions.length) % povOptions.length; // Fix for negative index

    updatePov(povOptions[prevIndex], fabricSelect);
  }; // Function to handle next POV change (cyclic forward)


  const handleNextPovChange = () => {
    const currentIndex = povOptions.indexOf(pov);
    const nextIndex = (currentIndex + 1) % povOptions.length;
    updatePov(povOptions[nextIndex], fabricSelect);
    console.log(povOptions[nextIndex]);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: {
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center" // backgroundColor: "red"

      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          height: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            border: "2px solid black",
            borderRadius: "24px",
            padding: "8px 12px",
            cursor: "pointer"
          },
          onClick: handlePrevPovChange,
          children: "\u21E6"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          display: pov === "FRONT" ? 'flex' : 'none',
          width: "100%",
          position: "relative",
          justifyContent: "center"
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            zIndex: 2,
            position: 'absolute'
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
            width: 350 // 200 | 350 | 400 | 500 | 1080
            ,
            height: 953 // 544 | 953 | 1089 | 1361 | 2940
            ,
            src: `/img/custom/model_${pov}.svg`,
            alt: "laxmi"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            zIndex: 3,
            position: 'absolute'
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
            width: 350 // 200 | 350 | 400 | 500 | 1080
            ,
            height: 953 // 544 | 953 | 1089 | 1361 | 2940
            ,
            src: `/img/custom/model_${pov}_pant.svg`,
            alt: "laxmi"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            zIndex: 4,
            position: 'absolute'
          },
          children: dataStyle.bottom.image !== "" && dataStyle.bottom.image !== null ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            width: 350 // 200 | 350 | 400 | 500 | 1080
            ,
            height: 953 // 544 | 953 | 1089 | 1361 | 2940
            ,
            src: dataStyle.bottom.image,
            alt: "laxmi"
          }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {})
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            zIndex: 5,
            position: 'absolute'
          },
          children: dataStyle.collar.image !== "" && dataStyle.collar.image !== null ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            width: 350 // 200 | 350 | 400 | 500 | 1080
            ,
            height: 953 // 544 | 953 | 1089 | 1361 | 2940
            ,
            src: dataStyle.collar.image,
            alt: "laxmi"
          }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {})
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            zIndex: 6,
            position: 'absolute'
          },
          children: dataStyle.sleeve.image !== "" && dataStyle.sleeve.image !== null ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            width: 350 // 200 | 350 | 400 | 500 | 1080
            ,
            height: 953 // 544 | 953 | 1089 | 1361 | 2940
            ,
            src: dataStyle.sleeve.image,
            style: {
              opacity: sleeveFlicker ? 1 : 0.8
            },
            alt: "laxmi"
          }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {})
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            zIndex: 20,
            position: 'absolute'
          },
          children: dataStyle.pocket.image !== "" && dataStyle.pocket.image !== null ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            width: 350 // 200 | 350 | 400 | 500 | 1080
            ,
            height: 953 // 544 | 953 | 1089 | 1361 | 2940
            ,
            src: dataStyle.pocket.image,
            alt: "laxmi"
          }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {})
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            zIndex: 8,
            position: 'absolute'
          },
          children: dataStyle.placket.image !== "" && dataStyle.placket.image !== null ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            width: 350 // 200 | 350 | 400 | 500 | 1080
            ,
            height: 953 // 544 | 953 | 1089 | 1361 | 2940
            ,
            src: dataStyle.placket.image,
            alt: "laxmi"
          }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {})
        }), isLoading ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            width: "350px",
            height: "953px",
            // backgroundColor: "white",
            // backgroundColor: "rgba(0,0,0,.3)",
            paddingTop: "30vh",
            zIndex: 100,
            position: "absolute"
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "loader"
          })
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {}), isLoadingFabric ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            width: "350px",
            height: "953px",
            backgroundColor: "white",
            // backgroundColor: "rgba(0,0,0,.3)",
            paddingTop: "30vh",
            zIndex: 200,
            position: "absolute"
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "loader"
          })
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {})]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "slide",
        style: {
          display: pov === "BACK" ? 'block' : 'none',
          justifyContent: "center",
          width: '100%'
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "img-container",
          style: {
            position: 'relative',
            zIndex: 1,
            display: "flex",
            justifyContent: "center"
          },
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            style: {
              zIndex: 2,
              position: 'absolute'
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
              width: 350 // 200 | 350 | 400 | 500 | 1080
              ,
              height: 953 // 544 | 953 | 1089 | 1361 | 2940
              ,
              src: `/img/custom/model_${pov}.png`,
              alt: "laxmi"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            style: {
              zIndex: 3,
              position: 'absolute'
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
              width: 350 // 200 | 350 | 400 | 500 | 1080
              ,
              height: 953 // 544 | 953 | 1089 | 1361 | 2940
              ,
              src: `/img/custom/model_${pov}_pant.png`,
              alt: "laxmi"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            style: {
              zIndex: 4,
              position: 'absolute'
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
              width: 350 // 200 | 350 | 400 | 500 | 1080
              ,
              height: 953 // 544 | 953 | 1089 | 1361 | 2940
              ,
              src: `/img/custom/model_${pov}_pant.png` // src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/body/${bottomSecondary === "Untucked" ? bottom : bottomSecondary}.png`}
              ,
              alt: "laxmi"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            style: {
              zIndex: 5,
              position: 'absolute'
            },
            children: dataStyle.collar.image !== "" && dataStyle.collar.image !== null ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
              width: 350 // 200 | 350 | 400 | 500 | 1080
              ,
              height: 953 // 544 | 953 | 1089 | 1361 | 2940
              ,
              src: dataStyle.collarBack.image // src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/collar/collar.png`}
              ,
              alt: "laxmi"
            }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {})
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            style: {
              zIndex: 6,
              position: 'absolute'
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
              width: 350 // 200 | 350 | 400 | 500 | 1080
              ,
              height: 953 // 544 | 953 | 1089 | 1361 | 2940
              ,
              src: `/img/custom/model_${pov}_pant.png` // src={`/img/custom/${category}/accent/${pov}/collar/${collarColor}.png`}
              ,
              alt: "laxmi"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            style: {
              zIndex: 7,
              position: 'absolute'
            },
            children: [console.log(dataStyle), dataStyle.sleeve.image !== "" && dataStyle.sleeve.image !== null ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
              width: 350 // 200 | 350 | 400 | 500 | 1080
              ,
              height: 953 // 544 | 953 | 1089 | 1361 | 2940
              ,
              src: dataStyle.sleeve.image,
              alt: "laxmi"
            }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {})]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            style: {
              zIndex: 8,
              position: 'absolute'
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
              width: 350 // 200 | 350 | 400 | 500 | 1080
              ,
              height: 953 // 544 | 953 | 1089 | 1361 | 2940
              ,
              src: `/img/custom/model_${pov}_pant.png` // src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/cuffs/${cuffs}.png`}
              ,
              alt: "laxmi"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            style: {
              zIndex: 9,
              position: 'absolute'
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
              width: 350 // 200 | 350 | 400 | 500 | 1080
              ,
              height: 953 // 544 | 953 | 1089 | 1361 | 2940
              ,
              src: dataStyle.pleats.image,
              alt: "laxmi"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            style: {
              zIndex: 9,
              position: 'absolute'
            },
            children: dataStyle.cuffs.image !== "" && dataStyle.cuffs.image !== null ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
              width: 350 // 200 | 350 | 400 | 500 | 1080
              ,
              height: 953 // 544 | 953 | 1089 | 1361 | 2940
              ,
              src: dataStyle.cuffsBack.image,
              alt: "laxmi"
            }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {})
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            style: {
              zIndex: 10,
              position: 'relative'
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
              width: 350 // 200 | 350 | 400 | 500 | 1080
              ,
              height: 953 // 544 | 953 | 1089 | 1361 | 2940
              ,
              src: `/img/custom/back_no_model.png`,
              alt: "laxmi"
            })
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          display: pov === "FOLDED" ? 'flex' : 'none',
          width: "100%",
          position: "relative",
          justifyContent: "center"
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            zIndex: 2,
            position: 'absolute'
          }
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            zIndex: 3,
            position: 'absolute'
          }
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            zIndex: 4,
            position: 'absolute'
          },
          children: dataStyle.bottom.image !== "" && dataStyle.bottom.image !== null ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            width: 350 // 200 | 350 | 400 | 500 | 1080
            ,
            height: 953 // 544 | 953 | 1089 | 1361 | 2940
            ,
            src: dataStyle.bottom.image,
            alt: "laxmi"
          }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {})
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            zIndex: 5,
            position: 'absolute'
          },
          children: dataStyle.collarFold.image !== "" && dataStyle.collarFold.image !== null ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            width: 350 // 200 | 350 | 400 | 500 | 1080
            ,
            height: 953 // 544 | 953 | 1089 | 1361 | 2940
            ,
            src: dataStyle.collarFold.image,
            alt: "laxmi"
          }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {})
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            zIndex: 99,
            position: 'absolute'
          },
          children: dataStyle.cuffsFold.image !== "" && dataStyle.cuffsFold.image !== null ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            width: 350 // 200 | 350 | 400 | 500 | 1080
            ,
            height: 953 // 544 | 953 | 1089 | 1361 | 2940
            ,
            src: dataStyle.cuffsFold.image,
            alt: "laxmi"
          }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {})
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            zIndex: 13,
            position: 'absolute'
          },
          children: dataStyle.pocketFold.image !== "" && dataStyle.pocketFold.image !== null ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            width: 350 // 200 | 350 | 400 | 500 | 1080
            ,
            height: 953 // 544 | 953 | 1089 | 1361 | 2940
            ,
            src: dataStyle.pocketFold.image,
            alt: "laxmi",
            style: {
              marginTop: '-120px'
            }
          }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {})
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            zIndex: 8,
            position: 'absolute'
          },
          children: dataStyle.placketFold.image !== "" && dataStyle.placketFold.image !== null ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            width: 350 // 200 | 350 | 400 | 500 | 1080
            ,
            height: 953 // 544 | 953 | 1089 | 1361 | 2940
            ,
            src: dataStyle.placketFold.image,
            alt: "laxmi"
          }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {})
        }), isLoading ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            width: "350px",
            height: "953px",
            // backgroundColor: "white",
            // backgroundColor: "rgba(0,0,0,.3)",
            paddingTop: "30vh",
            zIndex: 100,
            position: "absolute"
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "loader"
          })
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {}), isLoadingFabric ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            width: "350px",
            height: "953px",
            backgroundColor: "white",
            // backgroundColor: "rgba(0,0,0,.3)",
            paddingTop: "30vh",
            zIndex: 200,
            position: "absolute"
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "loader"
          })
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {})]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          height: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            border: "2px solid black",
            borderRadius: "24px",
            padding: "8px 12px",
            cursor: "pointer"
          },
          onClick: handleNextPovChange,
          children: "\u21E8"
        })
      })]
    })
  }); // return (
  //     <div className="model-container row">
  //         {/* front */}
  //         <div className='col-2 d-flex align-items-center' style={{ height: "80%" }}>
  //             <div onClick={() => {
  //                 console.log(pov);
  //                 switch (pov) {
  //                     case "front":
  //                         setPov("folded")
  //                         break;
  //                     case "folded":
  //                         setPov("back")
  //                         break;
  //                     case "back":
  //                         setPov("front")
  //                         break;
  //                     default:
  //                         break;
  //                 }
  //             }}>
  //                 <ChevronLeft width={20} height={20} />
  //             </div>
  //         </div>
  //         <div className="col-8">
  //             {/* front */}
  //             <div className='slide' style={{ display: pov === "front" ? 'block' : 'none' }}>
  //                 <div className="img-container" style={{
  //                     position: 'relative',
  //                     zIndex: 1,
  //                 }}>
  //                     {/* model */}
  //                     <div style={{ zIndex: 2, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                             src={`/img/custom/model_${pov}.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     {/* pant */}
  //                     <div style={{ zIndex: 3, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                             src={`/img/custom/model_${pov}_pant.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     {/* body */}
  //                     <div style={{ zIndex: 4, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                             src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/${placket}/body/${bottomSecondary === "Untucked" ? bottom : bottomSecondary}.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     {/* collar */}
  //                     <div style={{ zIndex: 5, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                             src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/${placket}/collar/${collar}.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     {/* accent collar */}
  //                     {
  //                         collarAccent !== "Default" && collarAccent !== "Inner" && collarColor && (
  //                             <div style={{ zIndex: 6, position: 'absolute' }}>
  //                                 <Image
  //                                     width={350} // 200 | 350 | 400 | 500 | 1080
  //                                     height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                                     src={`/img/custom/${category}/accent/${pov}/collar/${collarAccent.replace("All", "Outer")} ${collar} ${collarColor}.png`}
  //                                     alt="laxmi" />
  //                             </div>
  //                         )
  //                     }
  //                     {/* sleeve */}
  //                     <div style={{ zIndex: 7, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                             src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/${placket}/sleeve/${sleeve}.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     {/* accent cuffs */}
  //                     {
  //                         sleeve === "long" && cuffsAccent !== "Default" && cuffsAccent !== "Inner" && cuffsColor && (
  //                             <div style={{ zIndex: 8, position: 'absolute' }}>
  //                                 <Image
  //                                     width={350} // 200 | 350 | 400 | 500 | 1080
  //                                     height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                                     src={`/img/custom/${category}/accent/${pov}/cuffs/${cuffsColor}.png`}
  //                                     alt="laxmi" />
  //                             </div>
  //                         )
  //                     }
  //                     {/* pocket */}
  //                     <div style={{ zIndex: 9, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                             src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/${placket}/pocket/${pocket}.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     <div style={{
  //                         width: 350, // 200 | 350 | 400 | 500 | 1080
  //                         height: 953, // 544 | 953 | 1089 | 1361 | 2940
  //                         zIndex: 10, position: 'absolute',
  //                         // backgroundColor: 'red',
  //                     }}>
  //                         <label style={{
  //                             position: 'absolute',
  //                             fontFamily: bordirs?.font ?? "Arial",
  //                             fontSize: 6,
  //                             top: getBordirPosition('top', bordirs?.position),
  //                             right: getBordirPosition('right', bordirs?.position),
  //                             color: bordirs?.color,
  //                         }}>{bordirs?.name}</label>
  //                     </div>
  //                     {/* no model */}
  //                     <div style={{ zIndex: 11, position: 'relative' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                             src={`/img/custom/front_no_model.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                 </div>
  //             </div>
  //             {/* back */}
  //             <div className='slide' style={{ display: pov === "back" ? 'block' : 'none' }}>
  //                 <div className="img-container" style={{
  //                     position: 'relative',
  //                     zIndex: 1,
  //                 }}>
  //                     {/* model */}
  //                     <div style={{ zIndex: 2, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                             src={`/img/custom/model_${pov}.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     {/* pant */}
  //                     <div style={{ zIndex: 3, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                             src={`/img/custom/model_${pov}_pant.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     {/* body */}
  //                     <div style={{ zIndex: 4, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                             src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/body/${bottomSecondary === "Untucked" ? bottom : bottomSecondary}.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     {/* collar */}
  //                     <div style={{ zIndex: 5, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                             src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/collar/collar.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     {/* accent collar */}
  //                     {
  //                         (collarAccent === "Outer" || collarAccent === "All") && collarAccent !== "Default" && collarColor && (
  //                             <div style={{ zIndex: 6, position: 'absolute' }}>
  //                                 <Image
  //                                     width={350} // 200 | 350 | 400 | 500 | 1080
  //                                     height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                                     src={`/img/custom/${category}/accent/${pov}/collar/${collarColor}.png`}
  //                                     alt="laxmi" />
  //                             </div>
  //                         )
  //                     }
  //                     {/* sleeve */}
  //                     {
  //                         sleeve !== "long" && (
  //                             <div style={{ zIndex: 7, position: 'absolute' }}>
  //                                 <Image
  //                                     width={350} // 200 | 350 | 400 | 500 | 1080
  //                                     height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                                     src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/sleeve/${sleeve}.png`}
  //                                     alt="laxmi" />
  //                             </div>
  //                         )
  //                     }
  //                     {/* cuffs */}
  //                     {
  //                         sleeve === "long" && (
  //                             <div style={{ zIndex: 8, position: 'absolute' }}>
  //                                 <Image
  //                                     width={350} // 200 | 350 | 400 | 500 | 1080
  //                                     height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                                     src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/cuffs/${cuffs}.png`}
  //                                     alt="laxmi" />
  //                             </div>
  //                         )
  //                     }
  //                     {/* accent cuffs */}
  //                     {
  //                         sleeve === "long" && cuffsAccent !== "Default" && cuffsColor && cuffsAccent !== "Inner" && (
  //                             <div style={{ zIndex: 9, position: 'absolute' }}>
  //                                 <Image
  //                                     width={350} // 200 | 350 | 400 | 500 | 1080
  //                                     height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                                     src={`/img/custom/${category}/accent/${pov}/cuffs/${cuffs} ${cuffsColor}.png`}
  //                                     alt="laxmi" />
  //                             </div>
  //                         )
  //                     }
  //                     {/* no model */}
  //                     <div style={{ zIndex: 10, position: 'relative' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                             src={`/img/custom/back_no_model.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                 </div>
  //             </div>
  //             {/* folded */}
  //             <div className='slide' style={{ display: pov === "folded" ? 'block' : 'none' }}>
  //                 <div className="img-container" style={{
  //                     position: 'relative',
  //                     zIndex: 1,
  //                 }}>
  //                     {/* model */}
  //                     <div style={{ zIndex: 2, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={512} // 292 | 512 | 585 | 731 | 1579
  //                             src={`/img/custom/model_${pov}.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     {/* body */}
  //                     <div style={{ zIndex: 3, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={512} // 292 | 512 | 585 | 731 | 1579
  //                             src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/${placket}/body/Regular.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     {/* collar */}
  //                     <div style={{ zIndex: 4, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={512} // 292 | 512 | 585 | 731 | 1579
  //                             src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/${placket}/collar/${collar}.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     {/* accent collar */}
  //                     {
  //                         collarAccent !== "Default" && collarColor && (
  //                             <div style={{ zIndex: 5, position: 'absolute' }}>
  //                                 <Image
  //                                     width={350} // 200 | 350 | 400 | 500 | 1080
  //                                     height={512} // 544 | 953 | 1089 | 1361 | 2940
  //                                     src={`/img/custom/${category}/accent/${pov}/collar/${collarAccent} ${collar} ${collarColor}.png`}
  //                                     alt="laxmi" />
  //                             </div>
  //                         )
  //                     }
  //                     {/* sleeve */}
  //                     {
  //                         sleeve !== "long" && (
  //                             <div style={{ zIndex: 6, position: 'absolute' }}>
  //                                 <Image
  //                                     width={350} // 200 | 350 | 400 | 500 | 1080
  //                                     height={512} // 292 | 512 | 585 | 731 | 1579
  //                                     src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/${placket}/sleeve/${sleeve}.png`}
  //                                     alt="laxmi" />
  //                             </div>
  //                         )
  //                     }
  //                     {/* cuffs */}
  //                     {
  //                         sleeve === "long" && (
  //                             <div style={{ zIndex: 7, position: 'absolute' }}>
  //                                 <Image
  //                                     width={350} // 200 | 350 | 400 | 500 | 1080
  //                                     height={512} // 292 | 512 | 585 | 731 | 1579
  //                                     src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/cuffs/${cuffs}.png`}
  //                                     alt="laxmi" />
  //                             </div>
  //                         )
  //                     }
  //                     {/* accent cuffs */}
  //                     {
  //                         sleeve === "long" && cuffsAccent !== "Default" && cuffsColor && cuffsAccent !== "Inner" && (
  //                             <div style={{ zIndex: 8, position: 'absolute' }}>
  //                                 <Image
  //                                     width={350} // 200 | 350 | 400 | 500 | 1080
  //                                     height={512} // 292 | 512 | 585 | 731 | 1579
  //                                     src={`/img/custom/${category}/accent/${pov}/cuffs/${cuffs} ${cuffsColor}.png`}
  //                                     alt="laxmi" />
  //                             </div>
  //                         )
  //                     }
  //                     {/* pocket */}
  //                     <div style={{ zIndex: 9, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={512} // 292 | 512 | 585 | 731 | 1579
  //                             src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/${placket}/pocket/${pocket}.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     {
  //                         bordirs && bordirs.position && bordirs.position === "Chest" && (
  //                             <div style={{
  //                                 width: 350, // 200 | 350 | 400 | 500 | 1080
  //                                 height: 512, // 544 | 953 | 1089 | 1361 | 2940
  //                                 zIndex: 10, position: 'absolute',
  //                                 // backgroundColor: 'red',
  //                             }}>
  //                                 <label style={{
  //                                     position: 'absolute',
  //                                     fontFamily: bordirs?.font ?? "Arial",
  //                                     fontSize: 12,
  //                                     top: 340,
  //                                     right: 122,
  //                                     color: bordirs.color,
  //                                 }}>{bordirs.name}</label>
  //                             </div>
  //                         )
  //                     }
  //                     {/* no model */}
  //                     <div style={{ zIndex: 11, position: 'relative' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={512} // 292 | 512 | 585 | 731 | 1579
  //                             src={`/img/custom/folded_no_model.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                 </div>
  //             </div>
  //         </div>
  //         <div className='col-2 d-flex align-items-center' style={{ height: "80%", zIndex: 12 }}>
  //             <div onClick={() => {
  //                 switch (pov) {
  //                     case "front":
  //                         setPov("back")
  //                         break;
  //                     case "back":
  //                         setPov("folded")
  //                         break;
  //                     case "folded":
  //                         setPov("front")
  //                         break;
  //                     default:
  //                         break;
  //                 }
  //             }}>
  //                 <ChevronRight width={20} height={20} />
  //             </div>
  //         </div>
  //     </div >
  // )
};

/* harmony default export */ var modelContainer = (ModelContainer);
// CONCATENATED MODULE: ./components/partials/custom/detailContainer.jsx




const OrderContainer = ({
  fabricSelect,
  category,
  t,
  setSidebar,
  sidebar,
  price,
  dataStyle
}) => {
  const postAddToCart = async () => {
    try {
      var response = await external_axios_default.a.post(`/api/cart/cart`, {
        category: category,
        fabric: fabricSelect.fabric_name,
        collar: dataStyle.collar.name,
        cuffs: dataStyle.cuffs.name,
        sleeve: dataStyle.sleeve.name,
        bottom: dataStyle.bottom.name,
        chest_pocket: dataStyle.pocket.name,
        // price: price,
        placket: dataStyle.placket.name
      });
      const {
        status
      } = response; // Check if the status is 200

      if (status === 200) {
        // Log the entire response object
        console.log("Response data:", response);
      } else {
        // Handle other status codes
        console.log("Error in posting data, status code:", status);
      }
    } catch (e) {
      console.log(e);
    } finally {}
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "detail-container",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      className: "title",
      children: [t("Custom"), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: "fw-bold",
        children: t(`common:${category}`)
      }), " "]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      className: "price",
      children: ["$", price, ",00"]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      className: "fabric-category",
      children: ["Cotton", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: "ref",
        children: "ref: Mayfield"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
        className: "ref detail text-pointer",
        children: [t("Fabrics"), " ", t("Details")]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "d-flex justify-content-end",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        onClick: () => {
          postAddToCart();
          console.log(dataStyle);

          if (sidebar < 3) {
            if (category === "trousers") {
              if (sidebar < 2) {
                setSidebar(sidebar + 1);
              }
            } else {
              setSidebar(sidebar + 1);
            }
          }
        },
        className: "btn btn-primary py-2 mt-4 px-5",
        children: t("NEXT")
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      className: "recieve mt-4",
      children: [t("Receive it in"), " 13 ", t("Days")]
    })]
  });
};

/* harmony default export */ var detailContainer = (OrderContainer);
// CONCATENATED MODULE: ./components/partials/custom/customContainer.jsx




function customContainer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function customContainer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { customContainer_ownKeys(Object(source), true).forEach(function (key) { customContainer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { customContainer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function customContainer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // elements


 // sidebar











const customContainer_fontList = [// {
//     fontFamily: "Mr Bedfort",
//     type: "cursive"
// },
// {
//     fontFamily: "Philosopher",
//     type: "sans-serif"
// },
// {
//     fontFamily: "Princess Sofia",
//     type: "cursive"
// },
// {
//     fontFamily: "Rakkas",
//     type: "cursive"
// },
// {
//     fontFamily: "Revalia",
//     type: "cursive"
// },
{
  fontFamily: "Ananda Black",
  type: "sans-serif"
}, {
  fontFamily: "Curetro",
  type: "sans-serif"
}, {
  fontFamily: "Naliko Betah",
  type: "sans-serif"
}];
const customContainer_colorList = ["#28568C", "#B4272C", "#F0EFEC"];
const customContainer_intialPosition = ["Chest", "Low", "Medium", "Cuff"];

const CustomContainer = ({
  t
}) => {
  const initialValue = {
    id: 1,
    title: "Collar",
    list: []
  };
  const {
    openStyle,
    listStyle,
    fabricList,
    styleSelect,
    fabricSelect,
    dataStyle,
    isLoading,
    isLoadingFabric,
    setOpenStyle,
    setStyleSelect,
    setFabricSelect
  } = hookCustom();
  const {
    0: bordir,
    1: setBordir
  } = Object(external_react_["useState"])({});
  const {
    0: sidebar,
    1: setSidebar
  } = Object(external_react_["useState"])(1);
  const {
    0: listAccent,
    1: setListAccent
  } = Object(external_react_["useState"])([]);
  const {
    0: subCategory,
    1: setSubCategory
  } = Object(external_react_["useState"])(initialValue);
  const router = Object(router_["useRouter"])();

  const debouncedHandleTyping = debounce_default()(handleTyping, 500);

  const {
    category
  } = router.query;

  function handleTyping(v) {
    setBordir(v);
    console.log(v);
  }

  console.log(listStyle);

  const StepSidebar = () => {
    var _bordirs$autoFocus, _subCategory$list, _subCategory$list_col;

    switch (sidebar) {
      case 1:
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])(fabricContainer, {
          t: t,
          list: fabricList,
          listSelected: fabricSelect,
          onClick: v => setFabricSelect(v)
        });

      case 2:
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])(styleContainer, {
          t: t,
          isOpenStyle: openStyle,
          listStyle: listStyle,
          styleSelected: styleSelect,
          onClickOpenStyle: v => setOpenStyle(v),
          onClick: v => setStyleSelect(v)
        });

      case 3:
        const {
          0: bordirs,
          1: setBordirs
        } = Object(external_react_["useState"])(bordir); // return <AccentContainer t={t} />

        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "style-container",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Slide_default.a, {
            left: true,
            when: openStyle,
            duration: 500,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: `row ${openStyle ? '' : 'd-none'}`,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "col-4 me-0 pe-0 d-flex flex-column align-items-center mini-category",
                children: category !== "suits" ? listAccent.map((data, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  onClick: () => {
                    console.log(data);
                    setSubCategory({
                      id: data.id,
                      title: data.title,
                      list: data.list_category,
                      list_color: data.list_color
                    });
                  } // onClick={() => changeSubCategory(data)}
                  ,
                  className: "sub-category-item w-100 text-pointer",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: "d-flex justify-content-center",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(custom, {
                      color: subCategory.title === data.title ? '#1E1E22' : '#757575',
                      category: category,
                      icon: data.image
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: `title text-center ${subCategory.title === data.title ? 'text-primary fw-bold' : ''}`,
                    children: t(data.title)
                  })]
                }, index)) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: "sub-category-item w-100 text-pointer",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                      className: `title text-center fw-bold`,
                      children: t("common:blazer")
                    })
                  }), BlazerListAccent.map((data, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    onClick: () => {
                      setSubCategory({
                        id: data.id,
                        title: data.title
                      });
                    },
                    className: "sub-category-item w-100 text-pointer",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      className: "d-flex justify-content-center",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(custom, {
                        color: subCategory.title === data.title ? '#1E1E22' : '#757575',
                        category: "blazer",
                        icon: data.image
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                      className: `title text-center ${subCategory.title === data.title ? 'text-primary fw-bold' : ''}`,
                      children: t(data.title)
                    })]
                  }, index)), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: "sub-category-item w-100 text-pointer",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                      className: `title text-center fw-bold`,
                      children: t("common:vests")
                    })
                  }), VestListAccent.map((data, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    onClick: () => {
                      setSubCategory({
                        id: data.id,
                        title: data.title
                      });
                    },
                    className: "sub-category-item w-100 text-pointer",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      className: "d-flex justify-content-center",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(custom, {
                        color: subCategory.title === data.title ? '#1E1E22' : '#757575',
                        category: "vests",
                        icon: data.image
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                      className: `title text-center ${subCategory.title === data.title ? 'text-primary fw-bold' : ''}`,
                      children: t(data.title)
                    })]
                  }, index))]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "col-8 list-mini-category",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "header d-flex justify-content-between align-items-center",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    children: t(subCategory.title)
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    className: "text-pointer",
                    onClick: () => setOpenStyle(false),
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(elements_icon["e" /* ArrowLeft */], {})
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "row mt-4",
                  children: [category === "shirts" && subCategory.title === "Embroidory" && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "col-12",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                        className: "form-control",
                        type: "search",
                        maxLength: 5,
                        value: bordirs.name,
                        onChange: v => {
                          const newBordir = customContainer_objectSpread({}, bordirs);

                          newBordir.name = v.target.value;
                          newBordir.autoFocus = true;
                          setBordirs(newBordir);
                          debouncedHandleTyping(newBordir);
                        },
                        autoFocus: (_bordirs$autoFocus = bordirs.autoFocus) !== null && _bordirs$autoFocus !== void 0 ? _bordirs$autoFocus : true,
                        placeholder: "Type your initials"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
                        className: "mt-4 title-sub-accent",
                        children: [t("Font"), " : "]
                      })]
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      className: "row",
                      children: customContainer_fontList.map((data, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        className: "col-12 col-lg-6",
                        onClick: () => {
                          const newBordir = customContainer_objectSpread({}, bordirs);

                          newBordir.font = data.fontFamily;
                          newBordir.autoFocus = false;
                          setBordirs(newBordir);
                          debouncedHandleTyping(newBordir);
                        },
                        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                          className: "form-check d-flex align-items-center",
                          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                            className: "form-check-input",
                            type: "radio",
                            style: {
                              width: 16,
                              height: 16
                            },
                            checked: bordirs.font === data.fontFamily,
                            name: "MonogramCheckbox",
                            id: `monogramItemCheck${index}`,
                            value: bordirs.font
                          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                            style: {
                              fontFamily: data.fontFamily
                            },
                            className: "form-check-label",
                            for: `monogramItemCheck${index}`,
                            children: "ABC"
                          })]
                        })
                      }, index))
                    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
                      className: "mt-4 title-sub-accent",
                      children: [t("Monogram Thread Color"), " : "]
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      className: "row",
                      children: customContainer_colorList.map((data, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
                        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                          className: "col-6 col-md-4 col-lg-2 my-2",
                          onClick: () => {
                            const newBordir = customContainer_objectSpread({}, bordirs);

                            newBordir.color = data;
                            newBordir.autoFocus = false;
                            setBordirs(newBordir);
                            debouncedHandleTyping(newBordir);
                          },
                          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                            style: {
                              backgroundColor: data
                            },
                            className: "color-item text-pointer"
                          }), bordirs.color && bordirs.color === data && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                            style: {
                              marginTop: 2,
                              height: 2,
                              backgroundColor: data
                            },
                            className: "color-item text-pointer"
                          })]
                        }, index)
                      }))
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                      className: "mt-4 title-sub-accent",
                      children: "Initial Position : "
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      className: "row",
                      children: customContainer_intialPosition.map((data, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        className: "col-12",
                        onClick: () => {
                          const newBordir = customContainer_objectSpread({}, bordirs);

                          newBordir.position = data;
                          newBordir.autoFocus = false;
                          setBordirs(newBordir);
                          debouncedHandleTyping(newBordir);
                        },
                        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                          className: "form-check d-flex align-items-center",
                          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                            className: "form-check-input",
                            type: "radio",
                            style: {
                              width: 16,
                              height: 16
                            },
                            name: "InitialPositionCheckbox",
                            id: `positionCheck${index}`,
                            checked: bordirs.position === data,
                            value: bordirs.position
                          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                            className: "form-check-label" // style={{ fontSize: 12 }}
                            ,
                            for: `positionCheck${index}`,
                            children: data
                          })]
                        })
                      }, index))
                    })]
                  }), subCategory.list && ((_subCategory$list = subCategory.list) === null || _subCategory$list === void 0 ? void 0 : _subCategory$list.map(v => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    onClick: () => {
                      setStyleSelect({
                        title: subCategory.title,
                        category: v.name,
                        price: v.price,
                        type: "primary" // color: styleSelect.color ?? "Black"

                      });
                    },
                    className: "col-12 col-lg-6 d-flex flex-column align-items-center",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
                      width: 65,
                      height: 80,
                      src: v.image,
                      alt: "laxmi"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                      children: v.name
                    })]
                  }))), subCategory.list_color && /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: "mt-4 title-sub-accent",
                    children: t("Custom Color")
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: "row",
                    children: subCategory.list_color && ((_subCategory$list_col = subCategory.list_color) === null || _subCategory$list_col === void 0 ? void 0 : _subCategory$list_col.map((v, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      onClick: () => {
                        setStyleSelect({
                          title: subCategory.title,
                          category: v.name,
                          price: v.price,
                          type: "color"
                        });
                      },
                      className: "col-6 col-md-4 col-lg-2 my-2",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        style: {
                          backgroundColor: v.code
                        },
                        className: "color-item text-pointer"
                      })
                    }, index)))
                  })]
                })]
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: `icon-style-list mt-2 pb-4 ${!openStyle ? '' : 'd-none'}`,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "row",
              children: category !== "suits" ? listAccent.map((data, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                onClick: () => {
                  setSubCategory({
                    id: data.id,
                    title: data.title,
                    list: data.list_category,
                    list_color: data.list_color
                  });
                  setOpenStyle(true);
                },
                className: "col-12 icon-style-item d-flex align-items-center text-pointer",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "img-container",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(custom, {
                    category: category,
                    icon: data.image
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                  className: "title mb-0",
                  children: t(data.title)
                })]
              }, index)) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "accordion",
                id: "accordionExample",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "accordion-item",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
                    className: "accordion-header",
                    id: "headingOne",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                      className: "accordion-button",
                      type: "button",
                      "data-bs-toggle": "collapse",
                      "data-bs-target": "#collapseOne",
                      "aria-expanded": "true",
                      "aria-controls": "collapseOne",
                      children: "Jacket"
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    id: "collapseOne",
                    className: "accordion-collapse collapse show",
                    "aria-labelledby": "headingOne",
                    "data-bs-parent": "#accordionExample",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      className: "accordion-body",
                      children: BlazerListStyle.map((data, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                        onClick: () => {
                          setSubCategory({
                            id: data.id,
                            title: data.title
                          });
                          setOpenStyle(true);
                        },
                        className: "col-12 icon-style-item d-flex align-items-center text-pointer",
                        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                          className: "img-container",
                          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(custom, {
                            category: "blazer",
                            icon: data.image
                          })
                        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                          className: "title mb-0",
                          children: t(data.title)
                        })]
                      }, index))
                    })
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "accordion-item",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
                    className: "accordion-header",
                    id: "headingTwo",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                      className: "accordion-button collapsed",
                      type: "button",
                      "data-bs-toggle": "collapse",
                      "data-bs-target": "#collapseTwo",
                      "aria-expanded": "false",
                      "aria-controls": "collapseTwo",
                      children: "Trouser"
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    id: "collapseTwo",
                    className: "accordion-collapse collapse",
                    "aria-labelledby": "headingTwo",
                    "data-bs-parent": "#accordionExample",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "accordion-body",
                      children: [TrouserListStyle.map((data, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                        onClick: () => {
                          setSubCategory({
                            id: data.id,
                            title: data.title
                          });
                          setOpenStyle(true);
                        },
                        className: "col-12 icon-style-item d-flex align-items-center text-pointer",
                        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                          className: "img-container",
                          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(custom, {
                            category: "trousers",
                            icon: data.image
                          })
                        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                          className: "title mb-0",
                          children: t(data.title)
                        })]
                      }, index)), "                                             "]
                    })
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "accordion-item",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
                    className: "accordion-header",
                    id: "headingThree",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                      className: "accordion-button collapsed",
                      type: "button",
                      "data-bs-toggle": "collapse",
                      "data-bs-target": "#collapseThree",
                      "aria-expanded": "false",
                      "aria-controls": "collapseThree",
                      children: "Vest"
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    id: "collapseThree",
                    className: "accordion-collapse collapse",
                    "aria-labelledby": "headingThree",
                    "data-bs-parent": "#accordionExample",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      className: "accordion-body",
                      children: VestListStyle.map((data, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                        onClick: () => {
                          setSubCategory({
                            id: data.id,
                            title: data.title
                          });
                          setOpenStyle(true);
                        },
                        className: "col-12 icon-style-item d-flex align-items-center text-pointer",
                        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                          className: "img-container",
                          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(custom, {
                            category: "vests",
                            icon: data.image
                          })
                        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                          className: "title mb-0",
                          children: t(data.title)
                        })]
                      }, index))
                    })
                  })]
                })]
              })
            })
          })]
        });

      default:
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "Page Not Found"
        });
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "container-fluid custom",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "position-relative w-100 d-flex justify-content-center align-items-center nav",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "stepper mt-4 d-flex flex-row",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          onClick: () => setSidebar(1),
          className: `${sidebar === 1 ? 'active' : ''} text-pointer`,
          children: t("Fabrics")
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(elements_icon["j" /* ChevronRight */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          onClick: () => {
            setOpenStyle(false);
            setSidebar(2);
          },
          className: `${sidebar === 2 ? 'active' : ''} text-pointer`,
          children: t("Style")
        }), category !== "trousers" ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(elements_icon["j" /* ChevronRight */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            onClick: () => {
              setOpenStyle(false);
              setSidebar(3);
            },
            className: `${sidebar === 3 ? 'active' : ''} text-pointer`,
            children: t("Accents")
          })]
        }) : null]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {
      className: "hr-stepper w-100 mb-0"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-4",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(StepSidebar, {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-5 d-flex justify-content-center",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(modelContainer, {
          t: t,
          isLoading: isLoading,
          fabricSelect: fabricSelect,
          isLoadingFabric: isLoadingFabric,
          dataStyle: dataStyle
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-3",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(detailContainer, {
          fabricSelect: fabricSelect,
          dataStyle: dataStyle,
          category: category,
          sidebar: sidebar,
          price: 0,
          setSidebar: setSidebar,
          t: t
        })
      })]
    })]
  }); // return (<></>);
};

/* harmony default export */ var customContainer = (CustomContainer);
// CONCATENATED MODULE: ./pages/custom/[category].jsx



 // elements


 // partials



const CustomShirt = () => {
  const {
    t
  } = useTranslation_default()("custom");
  const router = Object(router_["useRouter"])();
  const {
    category
  } = router.query;
  const pathBreadCumb = [{
    'path': '/howitworks',
    'name': `${t("common:custom")} ${t(`common:${category}`)}`
  }];
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "custom",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "container-fluid px-5",
      style: {
        marginTop: 100
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(breadcrumb["a" /* default */], {
        path: pathBreadCumb
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(heading["a" /* default */], {
        title: `${t("common:custom")} ${t(`common:${category}`)}`
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
      className: "mt-3 d-flex justify-content-center",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(customContainer, {
        t: t
      })
    })]
  });
};

/* harmony default export */ var _category_ = __webpack_exports__["default"] = (CustomShirt);

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

/***/ "8qPd":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Slide");

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

/***/ "NUC6":
/***/ (function(module, exports) {

module.exports = require("lodash/debounce");

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

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });