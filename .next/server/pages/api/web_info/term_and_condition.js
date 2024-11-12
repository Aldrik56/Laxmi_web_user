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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("FJS7");


/***/ }),

/***/ "FJS7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
function handler(req, res) {
  res.status(200).json({
    "status": true,
    "message": "faq was fetched",
    "data": {
      "description": `<p><strong>Validity of contract</strong> &ndash; By making a purchase via website, the following agreement between the customer (you) with a minimum age of 18 years and the retailer (Tailor Store) is legally binding until further notice. For other types of agreements, please contact us before completing your purchase. As soon as the order has been placed by you, Tailor Store will send out a confirmation email to the email address stated in your customer profile. It is your responsibility to provide a functioning address and check the order confirmation thoroughly for possible errors. It is important that you contact us immediately in case you wish to change or correct any details in your order. Once a custom-made garment has been cut (i.e. production has started), no further changes can be applied. Information about the status of the order is accessible via the customer&apos;s account at any time. As soon as the order has been shipped, a confirmation email containing possible tracking links is sent to the customer. Upon the receipt of the goods through the customer, the contract is regarded as concluded.</p><p><span style="white-space:pre-wrap;">Delivery &ndash; During the order process you will be informed about the estimated delivery time for your order. This estimate is based on current production queue and the actual time it usually takes to send an order from our tailor shop to your address.<br><br>The delivery time cannot be guaranteed, as it is only a calculated estimate. We are constantly monitoring production, air freight and final delivery and are always working hard to deliver your order as soon as possible. Tailor Store cannot be held responsible for losses, inconveniences, costs or other damages resulting from late deliveries.<br><br>We will charge you $40 for packages that are not accepted/picked up/returned to us to cover the costs of handling. To avoid this charge, always pick up your order within 14 days of delivery to your post office or package agent.<br><br>When your order is handed over to your local dispatcher you will get an automatic e-mail from us with a tracking link. Your order progress can also be followed by logging in to &ldquo;my page&rdquo;.</span>&nbsp;</p><p><span style="white-space:pre-wrap;"><strong>The Perfect Fit guarantee</strong> &ndash; For customer&rsquo;s assurance offers a perfect fit guarantee upon ordering.<br><br>The meaning of the perfect fit guarantee:<br><br>If your first new garment does not fit, You will get a new garment or an adjustment for free.<br>We will help you to find your measurements and update your profile.<br>No returns needed! Keep or give away the garment you cannot use to charity.<br><br>To claim your Perfect Fit guarantee:<br><br>Your first action is to contact our customer service at support@tailorstore.com<br><br>The perfect fit guarantee is valid for the first garment from each range of products: your first dress shirt, your first polo, your first pair of chinos, and so on. The perfect fit guarantee is only valid on tailor-made garments. Please keep in mind that you&apos;re not entitled to the perfect fit guarantee if you purchase a suit, suit jacket, suit pants, waistcoat, or blazer. In these cases, your fit is guaranteed using a fitting garment. If you purchase suit pants and haven&apos;t made a fitting garment on these earlier, you&apos;re entitled to the perfect fit guarantee.<br><br>The Perfect Fit Guarantee is not valid for B2B orders.</span> </p>`
    }
  });
}

/***/ })

/******/ });