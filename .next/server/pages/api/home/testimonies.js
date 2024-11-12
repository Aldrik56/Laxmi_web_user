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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("I06q");


/***/ }),

/***/ "I06q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
function handler(req, res) {
  res.status(200).json({
    "status": true,
    "message": "testimonies was fetched",
    "data": [{
      "_id": "1",
      "image": "/img/testimonies/cs1.png",
      "name": "Jhon Doe",
      "profession": "programmer",
      "description": "I am happy about the suits I picked up yesterday. The quality and the services rendered are excellent. Thank you. With best regards.",
      "date": "04/05/2021",
      "country": "Jakarta",
      "star": 5
    }, {
      "_id": "2",
      "image": "/img/testimonies/cs2.png",
      "name": "Dafa",
      "profession": "Chef",
      "description": "mantap banget web ini uhuy I am happy about the suits I picked up yesterday. The quality and the services rendered are excellent. Thank you. With best regards. I am happy about the suits I picked up yesterday. The quality and the services rendered are excellent. Thank you. With best regards.",
      "date": "04/05/2021",
      "country": "Jakarta",
      "star": 5
    }, {
      "_id": "3",
      "image": "/img/testimonies/cs1.png",
      "name": "Zakhulhaq",
      "profession": "designer",
      "description": "I am happy about the suits I picked up yesterday. The quality and the services rendered are excellent. Thank you. With best regards.",
      "date": "04/05/2021",
      "country": "Jakarta",
      "star": 3
    }, {
      "_id": "4",
      "image": "/img/testimonies/cs2.png",
      "name": "Fachrudin",
      "profession": "Photgrapher",
      "description": "I am happy about the suits I picked up yesterday. The quality and the services rendered are excellent. Thank you. With best regards.",
      "date": "04/05/2021",
      "country": "Jakarta",
      "star": 4.5
    }, {
      "_id": "5",
      "image": "/img/testimonies/cs1.png",
      "name": "Dafa",
      "profession": "Chef",
      "description": "mantap banget web ini uhuy I am happy about the suits I picked up yesterday. The quality and the services rendered are excellent. Thank you. With best regards. I am happy about the suits I picked up yesterday. The quality and the services rendered are excellent. Thank you. With best regards.",
      "date": "04/05/2021",
      "country": "Jakarta",
      "star": 2.6
    }, {
      "_id": "6",
      "image": "/img/testimonies/cs2.png",
      "name": "Zakhulhaq",
      "profession": "designer",
      "description": "I am happy about the suits I picked up yesterday. The quality and the services rendered are excellent. Thank you. With best regards.",
      "date": "04/05/2021",
      "country": "Jakarta",
      "star": 4
    }, {
      "_id": "7",
      "image": "/img/testimonies/cs1.png",
      "name": "Dafa",
      "profession": "Chef",
      "description": "mantap banget web ini uhuy I am happy about the suits I picked up yesterday. The quality and the services rendered are excellent. Thank you. With best regards. I am happy about the suits I picked up yesterday. The quality and the services rendered are excellent. Thank you. With best regards.",
      "date": "04/05/2021",
      "country": "Jakarta",
      "star": 2.6
    }]
  });
}

/***/ })

/******/ });