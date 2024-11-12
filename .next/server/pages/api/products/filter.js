module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Jsmu");


/***/ }),

/***/ "Jsmu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
function handler(req, res) {
  res.status(200).json({
    "status": true,
    "message": "Filter was fetched",
    "data": {
      "collections": [{
        "_id": "1",
        "name": "Business Suits"
      }, {
        "_id": "2",
        "name": "3 Piece Suits"
      }, {
        "_id": "3",
        "name": "Wedding Suits 2021"
      }, {
        "_id": "4",
        "name": "Double-Breasted Suits"
      }],
      "category": [{
        "_id": "5",
        "name": "Mandarin",
        "count": 363
      }, {
        "_id": "6",
        "name": "Three Piece",
        "count": 1453
      }, {
        "_id": "7",
        "name": "Double Breasted",
        "count": 479
      }],
      "style": [{
        "_id": "8",
        "name": "Single Button",
        "count": 275
      }, {
        "_id": "9",
        "name": "Two Button",
        "count": 1779
      }, {
        "_id": "10",
        "name": "Three Button",
        "count": 257
      }],
      "material": [{
        "_id": "11",
        "name": "100% Wool",
        "count": 414
      }, {
        "_id": "12",
        "name": "Wool Blends",
        "count": 1178
      }, {
        "_id": "13",
        "name": "Linen",
        "count": 667
      }],
      "color": [{
        "_id": "14",
        "name": "grey",
        "hex_color": "#849CB4",
        "file": ""
      }, {
        "_id": "15",
        "name": "brown",
        "hex_color": "#868686",
        "file": ""
      }, {
        "_id": "16",
        "name": "green",
        "hex_color": "#7FC07F",
        "file": ""
      }, {
        "_id": "17",
        "name": "brown",
        "hex_color": "#868686",
        "file": ""
      }, {
        "_id": "18",
        "name": "green",
        "hex_color": "#7FC07F",
        "file": ""
      }],
      "pattern": [{
        "_id": "19",
        "name": "Plain",
        "count": 414
      }, {
        "_id": "20",
        "name": "Checked",
        "count": 1178
      }, {
        "_id": "21",
        "name": "Floral",
        "count": 667
      }],
      "season": [{
        "_id": "22",
        "name": "Winter",
        "count": 414
      }, {
        "_id": "23",
        "name": "Summer",
        "count": 1178
      }, {
        "_id": "24",
        "name": "Year Round",
        "count": 667
      }]
    }
  });
}

/***/ })

/******/ });