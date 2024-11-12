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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ({

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aDXK");


/***/ }),

/***/ "aDXK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
function handler(req, res) {
  res.status(200).json({
    "status": true,
    "message": "about us was fetched",
    "data": {
      "about_us": `<p style="text-align:center">&ldquo;What does the term &ldquo;Bespoke&rdquo; actually mean? The word &lsquo;bespoke&rsquo; is derived from &lsquo;bespoken&rsquo; which means full control or characteristic of choice. This in tailoring terms signifies that the client has the freedom to envision his perfect suit with his individual choice of styling and fabric. A skilled cutter will then work hand in hand with the client&rsquo;s coat maker, waistcoat maker, trouser maker, finishers and bespoke alteration tailors, adjusting the pattern in a series of different stages and finally creating the perfect masterwork&hellip;in the form of a perfect suit.</p><p style="text-align:center">Exclusive Custom made clothing is an extraordinary piece of art. It is a result of long years learning and dedication paired with a constant strife for excellence. Established since 1949, we have served our loyal clients with gratifying service in Bespoke (custom) tailoring for both Ladies and Gents.</p><p style="text-align:center">Evolving from the conventional style of tailoring, we have been able to provide modern suiting with the best fabric options and superb cutting and fit. The traditional classic suit is enhanced with fine finishing touches. We carry a wide range of luxury fabrics at our store. Clients from all over the world delight at our vast fabric variety, comfortable shopping environment, combined with friendly services from our fabric consultants and experienced tailors.</p>`,
      "our_vision": "Our Vision is to constantly pursue excellence in our products and services which will enable us to be pioneers of the Tailoring industry.",
      "our_story": {
        "image": "https://via.placeholder.com/400x286",
        "description": `<p style="text-align:center">&ldquo;What does the term &ldquo;Bespoke&rdquo; actually mean? The word &lsquo;bespoke&rsquo; is derived from &lsquo;bespoken&rsquo; which means full control or characteristic of choice. This in tailoring terms signifies that the client has the freedom to envision his perfect suit with his individual choice of styling and fabric. A skilled cutter will then work hand in hand with the client&rsquo;s coat maker, waistcoat maker, trouser maker, finishers and bespoke alteration tailors, adjusting the pattern in a series of different stages and finally creating the perfect masterwork&hellip;in the form of a perfect suit.</p><p style="text-align:center">Exclusive Custom made clothing is an extraordinary piece of art. It is a result of long years learning and dedication paired with a constant strife for excellence. Established since 1949, we have served our loyal clients with gratifying service in Bespoke (custom) tailoring for both Ladies and Gents.</p><p style="text-align:center">Evolving from the conventional style of tailoring, we have been able to provide modern suiting with the best fabric options and superb cutting and fit. The traditional classic suit is enhanced with fine finishing touches. We carry a wide range of luxury fabrics at our store. Clients from all over the world delight at our vast fabric variety, comfortable shopping environment, combined with friendly services from our fabric consultants and experienced tailors.</p>`
      },
      "history": {
        "description": `<p style="text-align:center">&ldquo;What does the term &ldquo;Bespoke&rdquo; actually mean? The word &lsquo;bespoke&rsquo; is derived from &lsquo;bespoken&rsquo; which means full control or characteristic of choice. This in tailoring terms signifies that the client has the freedom to envision his perfect suit with his individual choice of styling and fabric. A skilled cutter will then work hand in hand with the client&rsquo;s coat maker, waistcoat maker, trouser maker, finishers and bespoke alteration tailors, adjusting the pattern in a series of different stages and finally creating the perfect masterwork&hellip;in the form of a perfect suit.</p><p style="text-align:center">Exclusive Custom made clothing is an extraordinary piece of art. It is a result of long years learning and dedication paired with a constant strife for excellence. Established since 1949, we have served our loyal clients with gratifying service in Bespoke (custom) tailoring for both Ladies and Gents.</p>`,
        "images": ["https://via.placeholder.com/600x384", "https://via.placeholder.com/600x384", "https://via.placeholder.com/600x384"]
      }
    }
  });
}

/***/ })

/******/ });