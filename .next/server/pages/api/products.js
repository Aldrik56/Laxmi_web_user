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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("VwFn");


/***/ }),

/***/ "486k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const axios = __webpack_require__("zr5I");

const cookie = __webpack_require__("vmXh");

/* harmony default export */ __webpack_exports__["a"] = (axios.create({
  baseURL: "http://34.101.70.83:3421/api/web_user/v1",
  timeout: 10000,
  headers: {
    "X-API-KEY": "L@xm1_4p1_k3y2",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjcyOTY3Njg2MDRkZWUwNDNjODU5OTUiLCJlbWFpbCI6InRlc3Rpbmd1c2VyQGdtYWlsLmNvbSIsIm5hbWUiOiJpcmZhbm1ATWFpbC5jb20iLCJyb2xlIjoidXNlciIsInBob25lX251bWJlciI6InVuZGVmaW5lZCIsImhlaWdodCI6MTUwLCJ3ZWlnaHQiOjcwLCJhZ2UiOjI1LCJpYXQiOjE3MjM2NjgyOTQsImV4cCI6MTc1NTIwNDI5NH0.BuzFgEd7FSTvwR1f3lz9Nidup95-UJ5SxfRplchNLes" // "Accept-Language": cookie.get('next-i18next')

  }
}));

/***/ }),

/***/ "VwFn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
/* harmony import */ var _helpers_axiosConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("486k");

async function handler(req, res) {
  // try {
  //     const response = await axios.get('/')
  // } catch (e) {
  // }
  res.status(200).json({
    "status": true,
    "message": "products was fetched",
    "page": 1,
    "limit": 9,
    "total_page": 1,
    "total_data": 1,
    "req": `${req.body}`,
    "data": [{
      "_id": "1",
      "image": "/img/product_gallery/product1.png",
      "title": "Suit - Navy | K0012",
      "stocks": 123,
      "currency": "IDR",
      "price": 1000000,
      "is_new": false
    }, {
      "_id": "2",
      "image": "/img/product_gallery/product2.png",
      "title": "Suit - Navy | K0013",
      "stocks": 3,
      "currency": "IDR",
      "price": 1500000,
      "is_new": false
    }, {
      "_id": "3",
      "image": "/img/product_gallery/product3.png",
      "title": "Suit - Navy | K0014",
      "stocks": 5,
      "currency": "IDR",
      "price": 3000000,
      "is_new": true
    }, {
      "_id": "4",
      "image": "/img/product_gallery/product4.png",
      "title": "Suit - Navy | K0015",
      "stocks": 10,
      "currency": "IDR",
      "price": 500000,
      "is_new": true
    }, {
      "_id": "5",
      "image": "/img/product_gallery/product5.png",
      "title": "Suit - Navy | K0014",
      "stocks": 5,
      "currency": "IDR",
      "price": 2000000,
      "is_new": true
    }, {
      "_id": "6",
      "image": "/img/product_gallery/product6.png",
      "title": "Suit - Navy | K0015",
      "stocks": 10,
      "currency": "IDR",
      "price": 500000,
      "is_new": true
    }]
  });
}

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });