module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("v5l7");


/***/ }),

/***/ "v5l7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
function handler(req, res) {
  res.status(200).json({
    "status": true,
    "message": "Details was fetched",
    "data": {
      "_id": "1",
      "images": [{
        "small": "/img/product_gallery/product1.png",
        "original": "/img/product_gallery/product1.png"
      }, {
        "small": "/img/product_gallery/product2.png",
        "original": "/img/product_gallery/product2.png"
      }, {
        "small": "/img/product_gallery/product3.png",
        "original": "/img/product_gallery/product3.png"
      }, {
        "small": "/img/product_gallery/product4.png",
        "original": "/img/product_gallery/product4.png"
      }],
      "title": "barang baru bosque",
      "category": "batiks",
      "description": "Handmade SHIRT laxmi tailors. Made by best-in-class Tailor With decades of experience, we guarantee the quality and style of the stitches you order.",
      "stocks": 123,
      "currency": "IDR",
      "price": 1900000,
      "is_new": false,
      "about_this_garment": "Handmade SHIRT laxmi tailors. Made by best-in-class Tailor With decades of experience, we guarantee the quality and style of the stitches you order.",
      "fabric_detail": {
        "name": "Perkins, Merino Wool",
        "fabric_category": "100% Wool",
        "detail": {
          "season": "Premium",
          "thread_style": "",
          "brightness": "Year round",
          "super_shiny": "Light Grey",
          "material": "",
          "tone": "",
          "weight": {
            "value": "120",
            "unit": "oz/yd2"
          },
          "thread_count": "",
          "opacity": "",
          "waterproof": "",
          "stretchy_text": "",
          "stretchy": ""
        },
        "quality": {
          "_id": "",
          "name": "Premium",
          "price": ""
        },
        "information": [{
          "_id": "123",
          "name": "Perkins",
          "description": "Our wool suit fabrics are the standard choice for a men's suit. Nothing can go wrong when choosing a made to measure wool suit. Most of them can be used all year long, and your grey suit will be perfect for any event, from business to casual and even weddings. And rememberthree piece suitare the the easiest way to add a smart touch to your favorite outfit. with any other outfit",
          "label": "",
          "file": "/img/fabric/fabricMaterial.png"
        }],
        "bar": {
          "excellence": "",
          "warmth": "",
          "weight": "",
          "yarn": ""
        },
        "composition": [{
          "_id": "",
          "fabric_category": "",
          "percentage": ""
        }],
        "file": "/img/fabric/fabricMaterial.png"
      }
    }
  });
}

/***/ })

/******/ });