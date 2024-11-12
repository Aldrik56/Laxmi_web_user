webpackHotUpdate_N_E("pages/custom/[category]",{

/***/ "./components/partials/custom/hookCustom.js":
/*!**************************************************!*\
  !*** ./components/partials/custom/hookCustom.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.12.5/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/.pnpm/@babel+runtime@7.12.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.12.5/node_modules/@babel/runtime/regenerator */ "./node_modules/.pnpm/@babel+runtime@7.12.5/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.12.5/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/.pnpm/@babel+runtime@7.12.5/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/.pnpm/axios@0.21.4/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/.pnpm/next@10.2.0_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sidebar_dataSidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/dataSidebar */ "./components/partials/custom/sidebar/dataSidebar.js");




var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // import frenchPlacket from "../../../public/img/placket/Placket French.svg";




var initStyle = {
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
    "name": "Square French"
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

var useHookCustom = function useHookCustom() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      fabricList = _useState[0],
      setFabricList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      fabricSelect = _useState2[0],
      setFabricSelect = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      listStyle = _useState3[0],
      setListStyle = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      openStyle = _useState4[0],
      setOpenStyle = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      styleSelect = _useState5[0],
      setStyleSelect = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(initStyle),
      dataStyle = _useState6[0],
      setDataStyle = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      isLoading = _useState7[0],
      setIsLoading = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      isLoadingFabric = _useState8[0],
      setIsLoadingFabric = _useState8[1];

  var category = router.query.category;

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])("FRONT"),
      pov = _useState9[0],
      setPov = _useState9[1];

  var fabricSelectRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
  var fabric;
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (fabricSelect) {
      getCustomStyle();
      fabricSelectRef.current = fabricSelect;
    }
  }, [fabricSelect]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    setIsLoadingFabric(true);
    console.log("ini new pov", pov);

    if (!fabricSelect && fabricSelectRef.current) {
      setFabricSelect(fabricSelectRef.current);
    } else {
      getCustomStyle();
    }
  }, [pov]);

  var updatePov = function updatePov(newPov) {
    setPov(newPov);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    getCustomStyle();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])( /*#__PURE__*/Object(D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var response, _response$data, status, message, data;

    return D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/fabric/list");

          case 3:
            response = _context.sent;
            _response$data = response.data, status = _response$data.status, message = _response$data.message;

            if (status) {
              data = response.data.data;
              setFabricList(data);
            } else {
              setFabricList([]);
            }

            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            setFabricList([]);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  })), []);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])( /*#__PURE__*/Object(D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
    return D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            setIsLoadingFabric(true);
            getCustomStyle();

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), [fabricSelect]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    console.log("DataStyle:", dataStyle);
  }, [dataStyle]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    setIsLoading(true);
    console.log(styleSelect);

    var newDataStyle = _objectSpread({}, dataStyle);

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
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    switch (category) {
      case 'vests':
        setListStyle(_sidebar_dataSidebar__WEBPACK_IMPORTED_MODULE_6__["VestListStyle"]);
        break;

      case 'batiks':
        setListStyle(_sidebar_dataSidebar__WEBPACK_IMPORTED_MODULE_6__["BatikListStyle"]);
        break;

      case 'shirts':
        setListStyle(_sidebar_dataSidebar__WEBPACK_IMPORTED_MODULE_6__["ShirtListStyle"]);
        break;

      case 'trousers':
        setListStyle(_sidebar_dataSidebar__WEBPACK_IMPORTED_MODULE_6__["TrouserListStyle"]);
        break;

      case 'blazer':
        setListStyle(_sidebar_dataSidebar__WEBPACK_IMPORTED_MODULE_6__["BlazerListStyle"]);
        break;
    }
  }, [category]);

  var getCustomStyle = /*#__PURE__*/function () {
    var _ref3 = Object(D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var currentFabricSelect, _data$styles$collar, _data$styles$collar2, _data$styles$sleeve, _data$styles$sleeve2, _data$styles$chestpoc, _data$styles$chestpoc2, _data$styles$placket, _data$styles$placket2, placketName, isTucked, url, response, _response$data2, status, data, newDataStyle;

      return D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              currentFabricSelect = fabricSelect || fabricSelectRef.current;
              console.log(currentFabricSelect);

              if (currentFabricSelect) {
                _context3.next = 6;
                break;
              }

              console.log("No fabric selected");
              setIsLoadingFabric(false);
              return _context3.abrupt("return");

            case 6:
              _context3.prev = 6;
              placketName = "", isTucked = false;

              if (dataStyle.placket.name.split(" ").length > 1) {
                //* Check apakah isi nya "Standar" atau sudah lengkap dengan "Body Untucked With Square"
                placketName = dataStyle.placket.name;
              } else {
                placketName = dataStyle.placket.name.concat(" Body", isTucked ? "" : "Untucked", "With Square");
              }

              url = "/api/custom/custom_style?fabric=".concat(currentFabricSelect._id, "&collar=").concat(dataStyle.collar.name, "&cuffs=").concat(dataStyle.cuffs.name, "&sleeve=").concat(dataStyle.sleeve.name, "&bottom=").concat(dataStyle.bottom.name, "&chestpocket=").concat(dataStyle.pocket.name, "&placket=").concat(dataStyle.placket.name, "&pov=").concat(pov);
              _context3.next = 12;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url);

            case 12:
              response = _context3.sent;
              console.log(url);
              _response$data2 = response.data, status = _response$data2.status, data = _response$data2.data;
              console.log(data);
              newDataStyle = _objectSpread({}, dataStyle); // newDataStyle.bottom.name = data.bottom.name
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
              console.log(newDataStyle);
              _context3.next = 34;
              break;

            case 31:
              _context3.prev = 31;
              _context3.t0 = _context3["catch"](6);
              console.log(_context3.t0);

            case 34:
              _context3.prev = 34;
              setTimeout(function () {
                setIsLoading(false);
              }, 700);
              setTimeout(function () {
                setIsLoadingFabric(false);
              }, 1000);
              return _context3.finish(34);

            case 38:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[6, 31, 34, 38]]);
    }));

    return function getCustomStyle() {
      return _ref3.apply(this, arguments);
    };
  }();

  return {
    openStyle: openStyle,
    listStyle: listStyle,
    fabricList: fabricList,
    styleSelect: styleSelect,
    fabricSelect: fabricSelect,
    dataStyle: dataStyle,
    isLoading: isLoading,
    isLoadingFabric: isLoadingFabric,
    pov: pov,
    updatePov: updatePov,
    setPov: setPov,
    setDataStyle: setDataStyle,
    setIsLoading: setIsLoading,
    setOpenStyle: setOpenStyle,
    setFabricList: setFabricList,
    setStyleSelect: setStyleSelect,
    setFabricSelect: setFabricSelect,
    setIsLoadingFabric: setIsLoadingFabric
  };
};

_s(useHookCustom, "sKG+wq7SXqFLlZHF9I235W842qY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

/* harmony default export */ __webpack_exports__["default"] = (useHookCustom);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/.pnpm/next@10.2.0_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/.pnpm/next@10.2.0_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9jdXN0b20vaG9va0N1c3RvbS5qcyJdLCJuYW1lcyI6WyJpbml0U3R5bGUiLCJ1c2VIb29rQ3VzdG9tIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJmYWJyaWNMaXN0Iiwic2V0RmFicmljTGlzdCIsImZhYnJpY1NlbGVjdCIsInNldEZhYnJpY1NlbGVjdCIsImxpc3RTdHlsZSIsInNldExpc3RTdHlsZSIsIm9wZW5TdHlsZSIsInNldE9wZW5TdHlsZSIsInN0eWxlU2VsZWN0Iiwic2V0U3R5bGVTZWxlY3QiLCJkYXRhU3R5bGUiLCJzZXREYXRhU3R5bGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0xvYWRpbmdGYWJyaWMiLCJzZXRJc0xvYWRpbmdGYWJyaWMiLCJjYXRlZ29yeSIsInF1ZXJ5IiwicG92Iiwic2V0UG92IiwiZmFicmljU2VsZWN0UmVmIiwidXNlUmVmIiwiZmFicmljIiwidXNlRWZmZWN0IiwiZ2V0Q3VzdG9tU3R5bGUiLCJjdXJyZW50IiwiY29uc29sZSIsImxvZyIsInVwZGF0ZVBvdiIsIm5ld1BvdiIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwic3RhdHVzIiwibWVzc2FnZSIsIm5ld0RhdGFTdHlsZSIsInRpdGxlIiwiY29sbGFyIiwibmFtZSIsInNsZWV2ZSIsImJvdHRvbSIsInBvY2tldCIsImN1ZmZzIiwiY3VmZnNCYWNrIiwicGxhY2tldCIsIlZlc3RMaXN0U3R5bGUiLCJCYXRpa0xpc3RTdHlsZSIsIlNoaXJ0TGlzdFN0eWxlIiwiVHJvdXNlckxpc3RTdHlsZSIsIkJsYXplckxpc3RTdHlsZSIsImN1cnJlbnRGYWJyaWNTZWxlY3QiLCJwbGFja2V0TmFtZSIsImlzVHVja2VkIiwic3BsaXQiLCJsZW5ndGgiLCJjb25jYXQiLCJ1cmwiLCJfaWQiLCJzdHlsZXMiLCJpbWFnZSIsImNoZXN0cG9ja2V0Iiwic2V0VGltZW91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QUVQLElBRk8sQ0FBVjtBQTlDZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFkUyxjQUFjO0FBQUE7QUFBQTtBQUFBLEtBQXBCOztBQW9EQSxTQUFPO0FBQ0hsQixhQUFTLEVBQVRBLFNBREc7QUFFSEYsYUFBUyxFQUFUQSxTQUZHO0FBR0hKLGNBQVUsRUFBVkEsVUFIRztBQUlIUSxlQUFXLEVBQVhBLFdBSkc7QUFLSE4sZ0JBQVksRUFBWkEsWUFMRztBQU1IUSxhQUFTLEVBQVRBLFNBTkc7QUFPSEUsYUFBUyxFQUFUQSxTQVBHO0FBUUhFLG1CQUFlLEVBQWZBLGVBUkc7QUFTSEksT0FBRyxFQUFIQSxHQVRHO0FBVUhVLGFBQVMsRUFBVEEsU0FWRztBQVdIVCxVQUFNLEVBQU5BLE1BWEc7QUFZSFIsZ0JBQVksRUFBWkEsWUFaRztBQWFIRSxnQkFBWSxFQUFaQSxZQWJHO0FBY0hOLGdCQUFZLEVBQVpBLFlBZEc7QUFlSE4saUJBQWEsRUFBYkEsYUFmRztBQWdCSFEsa0JBQWMsRUFBZEEsY0FoQkc7QUFpQkhOLG1CQUFlLEVBQWZBLGVBakJHO0FBa0JIWSxzQkFBa0IsRUFBbEJBO0FBbEJHLEdBQVA7QUFvQkgsQ0E5TEQ7O0dBQU1uQixhO1VBQ2FFLHFEOzs7QUE4TEpGLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2N1c3RvbS9bY2F0ZWdvcnldLjBlMTAwOGY4OTE2OTcxODllZWE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbi8vIGltcG9ydCBmcmVuY2hQbGFja2V0IGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvaW1nL3BsYWNrZXQvUGxhY2tldCBGcmVuY2guc3ZnXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUsdXNlUmVmIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHtcclxuICAgIEJsYXplckxpc3RTdHlsZSxcclxuICAgIFNoaXJ0TGlzdFN0eWxlLFxyXG4gICAgVHJvdXNlckxpc3RTdHlsZSxcclxuICAgIFZlc3RMaXN0U3R5bGUsXHJcbiAgICBCYXRpa0xpc3RTdHlsZVxyXG59IGZyb20gJy4vc2lkZWJhci9kYXRhU2lkZWJhcidcclxuXHJcbmNvbnN0IGluaXRTdHlsZSA9IHtcclxuICAgIFwiYm90dG9tXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU3F1YXJlXCJcclxuICAgIH0sXHJcbiAgICBcImNvbGxhclwiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlN0YW5kIFVwXCJcclxuICAgIH0sXHJcbiAgICBcImNvbGxhckJhY2tcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCIvaW1nL3BsZWF0cy9yZWQvQ29sbGFyIEJhY2suc3ZnXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU3RhbmQgVXBcIlxyXG4gICAgfSxcclxuICAgIFwic2xlZXZlXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU2hvcnRcIlxyXG4gICAgfSxcclxuICAgIFwiY3VmZnNcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTcXVhcmUgRnJlbmNoXCJcclxuICAgIH0sXHJcbiAgICBcImN1ZmZzQmFja1wiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIi9pbWcvc2xlZXZlX2JhY2svQ3VmZnMgRG91YmxlIFJvdW5kZWQgRnJlbmNoIEJhY2suc3ZnXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU3F1YXJlIEZyZW5jaFwiXHJcbiAgICB9LFxyXG4gICAgXCJwb2NrZXRcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJXaXRoIEZsYXBcIlxyXG4gICAgfSxcclxuICAgIFwicGxhY2tldFwiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlN0YW5kYXJkIEJvZHkgVW50dWNrZWQgV2l0aCBTcXVhcmVcIlxyXG4gICAgfSxcclxuICAgIFwicGxlYXRzXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiL2ltZy9wbGVhdHMvcmVkL1BsZWF0cyBCb3ggVHVja2VkLnN2Z1wiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlBsZWF0c1wiXHJcbiAgICB9LFxyXG4gICAgXCJjb2xsYXJGb2xkXCI6e1xyXG4gICAgICAgIFwiaW1hZ2VcIjpcIlwiXHJcbiAgICB9LFxyXG4gICAgXCJjdWZmc0ZvbGRcIjp7XHJcbiAgICAgICAgXCJpbWFnZVwiOlwiXCJcclxuICAgIH0sXHJcbiAgICBcInBvY2tldEZvbGRcIjp7XHJcbiAgICAgICAgXCJpbWFnZVwiOlwiXCJcclxuICAgICAgICAvLyBcImltYWdlXCI6XCIvaW1nL3BsZWF0cy9yZWQvQ2hlc3QgUG9ja2V0IEZvbGRlZC5zdmdcIlxyXG4gICAgfSxcclxuICAgIFwicGxhY2tldEZvbGRcIjp7XHJcbiAgICAgICAgXCJpbWFnZVwiOlwiL2ltZy9mb2xkZWQvcmVkL3BsZWF0cy9QbGFja2V0IFN0YW5kYXJkIEJvZHkgRm9sZGVkLnN2Z1wiXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHVzZUhvb2tDdXN0b20gPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgW2ZhYnJpY0xpc3QsIHNldEZhYnJpY0xpc3RdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbZmFicmljU2VsZWN0LCBzZXRGYWJyaWNTZWxlY3RdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtsaXN0U3R5bGUsIHNldExpc3RTdHlsZV0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtvcGVuU3R5bGUsIHNldE9wZW5TdHlsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtzdHlsZVNlbGVjdCwgc2V0U3R5bGVTZWxlY3RdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtkYXRhU3R5bGUsIHNldERhdGFTdHlsZV0gPSB1c2VTdGF0ZShpbml0U3R5bGUpXHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaXNMb2FkaW5nRmFicmljLCBzZXRJc0xvYWRpbmdGYWJyaWNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCB7IGNhdGVnb3J5IH0gPSByb3V0ZXIucXVlcnlcclxuICAgIGNvbnN0IFtwb3YsIHNldFBvdl0gPSB1c2VTdGF0ZShcIkZST05UXCIpXHJcbiAgICBjb25zdCBmYWJyaWNTZWxlY3RSZWYgPSB1c2VSZWYobnVsbClcclxuICAgIHZhciBmYWJyaWM7XHJcblxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChmYWJyaWNTZWxlY3QpIHtcclxuICAgICAgICAgICAgZ2V0Q3VzdG9tU3R5bGUoKVxyXG4gICAgICAgICAgICBmYWJyaWNTZWxlY3RSZWYuY3VycmVudCA9IGZhYnJpY1NlbGVjdFxyXG4gICAgICAgIH1cclxuICAgIH0sIFtmYWJyaWNTZWxlY3RdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nRmFicmljKHRydWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbmkgbmV3IHBvdlwiLCBwb3YpO1xyXG4gICAgICAgIGlmICghZmFicmljU2VsZWN0ICYmIGZhYnJpY1NlbGVjdFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHNldEZhYnJpY1NlbGVjdChmYWJyaWNTZWxlY3RSZWYuY3VycmVudClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnZXRDdXN0b21TdHlsZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Bvdl0pO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVBvdiA9IChuZXdQb3YpID0+IHtcclxuICAgICAgICBzZXRQb3YobmV3UG92KTtcclxuICAgICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldEN1c3RvbVN0eWxlKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9mYWJyaWMvbGlzdFwiKTtcclxuICAgICAgICAgICAgY29uc3QgeyBzdGF0dXMsIG1lc3NhZ2UgfSA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgaWYgKHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICBzZXRGYWJyaWNMaXN0KGRhdGEpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRGYWJyaWNMaXN0KFtdKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBzZXRGYWJyaWNMaXN0KFtdKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nRmFicmljKHRydWUpXHJcbiAgICAgICAgZ2V0Q3VzdG9tU3R5bGUoKVxyXG4gICAgfSwgW2ZhYnJpY1NlbGVjdF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEYXRhU3R5bGU6XCIsIGRhdGFTdHlsZSlcclxuICAgIH0sW2RhdGFTdHlsZV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhzdHlsZVNlbGVjdCk7XHJcbiAgICAgICAgY29uc3QgbmV3RGF0YVN0eWxlID0geyAuLi5kYXRhU3R5bGUgfVxyXG4gICAgICAgIHN3aXRjaCAoc3R5bGVTZWxlY3Q/LnRpdGxlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDb2xsYXJcIjpcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5jb2xsYXIubmFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiU2xlZXZlXCI6XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuc2xlZXZlLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkJvdHRvbVwiOlxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmJvdHRvbS5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDaGVzdCBQb2NrZXRcIjpcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wb2NrZXQubmFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQ3VmZnNcIjpcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5jdWZmcy5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmN1ZmZzQmFjay5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnNsZWV2ZS5uYW1lID0gXCJMb25nXCJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiUGxhY2tldFwiOlxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnBsYWNrZXQubmFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgLy8gY2FzZSBcIlBsZWF0c1wiOlxyXG4gICAgICAgICAgICAvLyAgICAgbmV3RGF0YVN0eWxlLnBsZWF0cy5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICBkZWZhdWx0OiBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0Q3VzdG9tU3R5bGUoKVxyXG4gICAgfSwgW3N0eWxlU2VsZWN0XSlcclxuICAgIFxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoY2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgY2FzZSAndmVzdHMnOlxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdFN0eWxlKFZlc3RMaXN0U3R5bGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYmF0aWtzJzpcclxuICAgICAgICAgICAgICAgIHNldExpc3RTdHlsZShCYXRpa0xpc3RTdHlsZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzaGlydHMnOlxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdFN0eWxlKFNoaXJ0TGlzdFN0eWxlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Ryb3VzZXJzJzpcclxuICAgICAgICAgICAgICAgIHNldExpc3RTdHlsZShUcm91c2VyTGlzdFN0eWxlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JsYXplcic6XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0U3R5bGUoQmxhemVyTGlzdFN0eWxlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2NhdGVnb3J5XSk7XHJcblxyXG4gICAgY29uc3QgZ2V0Q3VzdG9tU3R5bGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEZhYnJpY1NlbGVjdCA9IGZhYnJpY1NlbGVjdCB8fCBmYWJyaWNTZWxlY3RSZWYuY3VycmVudDtcclxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50RmFicmljU2VsZWN0KTtcclxuICAgICAgICBpZiAoIWN1cnJlbnRGYWJyaWNTZWxlY3QpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBmYWJyaWMgc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZ0ZhYnJpYyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHBsYWNrZXROYW1lID0gXCJcIixcclxuICAgICAgICAgICAgaXNUdWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYoZGF0YVN0eWxlLnBsYWNrZXQubmFtZS5zcGxpdChcIiBcIikubGVuZ3RoID4gMSl7IC8vKiBDaGVjayBhcGFrYWggaXNpIG55YSBcIlN0YW5kYXJcIiBhdGF1IHN1ZGFoIGxlbmdrYXAgZGVuZ2FuIFwiQm9keSBVbnR1Y2tlZCBXaXRoIFNxdWFyZVwiXHJcbiAgICAgICAgICAgICAgICBwbGFja2V0TmFtZSA9IGRhdGFTdHlsZS5wbGFja2V0Lm5hbWU7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHBsYWNrZXROYW1lID0gZGF0YVN0eWxlLnBsYWNrZXQubmFtZS5jb25jYXQoXCIgQm9keVwiLCBpc1R1Y2tlZCA/IFwiXCIgOiBcIlVudHVja2VkXCIgLFwiV2l0aCBTcXVhcmVcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHVybCA9IGAvYXBpL2N1c3RvbS9jdXN0b21fc3R5bGU/ZmFicmljPSR7Y3VycmVudEZhYnJpY1NlbGVjdC5faWR9JmNvbGxhcj0ke2RhdGFTdHlsZS5jb2xsYXIubmFtZX0mY3VmZnM9JHtkYXRhU3R5bGUuY3VmZnMubmFtZX0mc2xlZXZlPSR7ZGF0YVN0eWxlLnNsZWV2ZS5uYW1lfSZib3R0b209JHtkYXRhU3R5bGUuYm90dG9tLm5hbWV9JmNoZXN0cG9ja2V0PSR7ZGF0YVN0eWxlLnBvY2tldC5uYW1lfSZwbGFja2V0PSR7ZGF0YVN0eWxlLnBsYWNrZXQubmFtZX0mcG92PSR7cG92fWA7XHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICAgICAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0RhdGFTdHlsZSA9IHsgLi4uZGF0YVN0eWxlIH1cclxuICAgICAgICAgICAgLy8gbmV3RGF0YVN0eWxlLmJvdHRvbS5uYW1lID0gZGF0YS5ib3R0b20ubmFtZVxyXG4gICAgICAgICAgICAvLyBuZXdEYXRhU3R5bGUuYm90dG9tLmltYWdlID0gZGF0YS5ib3R0b20uaW1hZ2VcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5jb2xsYXIubmFtZSA9IGRhdGEuc3R5bGVzLmNvbGxhcj8ubmFtZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5jb2xsYXIuaW1hZ2UgPSBkYXRhLnN0eWxlcy5jb2xsYXI/LmltYWdlIHx8IFwiXCJcclxuICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnNsZWV2ZS5uYW1lID0gZGF0YS5zdHlsZXMuc2xlZXZlPy5uYW1lIHx8IFwiXCJcclxuICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnNsZWV2ZS5pbWFnZSA9IGRhdGEuc3R5bGVzLnNsZWV2ZT8uaW1hZ2UgfHwgXCJcIlxyXG4gICAgICAgICAgICBuZXdEYXRhU3R5bGUucG9ja2V0Lm5hbWUgPSBkYXRhLnN0eWxlcy5jaGVzdHBvY2tldD8ubmFtZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wb2NrZXQuaW1hZ2UgPSBkYXRhLnN0eWxlcy5jaGVzdHBvY2tldD8uaW1hZ2UgfHwgXCJcIlxyXG4gICAgICAgICAgICBuZXdEYXRhU3R5bGUucGxhY2tldC5uYW1lID0gZGF0YS5zdHlsZXMucGxhY2tldD8ubmFtZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wbGFja2V0LmltYWdlID0gZGF0YS5zdHlsZXMucGxhY2tldD8uaW1hZ2UgfHwgXCJcIlxyXG4gICAgICAgICAgICBmYWJyaWM9IGZhYnJpY1NlbGVjdFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZmFicmljU2VsZWN0Ll9pZClcclxuICAgICAgICAgICAgc2V0RGF0YVN0eWxlKG5ld0RhdGFTdHlsZSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3RGF0YVN0eWxlKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgIH0sIDcwMCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nRmFicmljKGZhbHNlKVxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBvcGVuU3R5bGUsXHJcbiAgICAgICAgbGlzdFN0eWxlLFxyXG4gICAgICAgIGZhYnJpY0xpc3QsXHJcbiAgICAgICAgc3R5bGVTZWxlY3QsXHJcbiAgICAgICAgZmFicmljU2VsZWN0LFxyXG4gICAgICAgIGRhdGFTdHlsZSxcclxuICAgICAgICBpc0xvYWRpbmcsXHJcbiAgICAgICAgaXNMb2FkaW5nRmFicmljLFxyXG4gICAgICAgIHBvdixcclxuICAgICAgICB1cGRhdGVQb3YsXHJcbiAgICAgICAgc2V0UG92LFxyXG4gICAgICAgIHNldERhdGFTdHlsZSxcclxuICAgICAgICBzZXRJc0xvYWRpbmcsXHJcbiAgICAgICAgc2V0T3BlblN0eWxlLFxyXG4gICAgICAgIHNldEZhYnJpY0xpc3QsXHJcbiAgICAgICAgc2V0U3R5bGVTZWxlY3QsXHJcbiAgICAgICAgc2V0RmFicmljU2VsZWN0LFxyXG4gICAgICAgIHNldElzTG9hZGluZ0ZhYnJpYyxcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCB1c2VIb29rQ3VzdG9tIl0sInNvdXJjZVJvb3QiOiIifQ==