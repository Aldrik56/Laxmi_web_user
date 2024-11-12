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

              url = "/api/custom/custom_style?fabric=".concat(fabricSelect._id, "&collar=").concat(dataStyle.collar.name, "&cuffs=").concat(dataStyle.cuffs.name, "&sleeve=").concat(dataStyle.sleeve.name, "&bottom=").concat(dataStyle.bottom.name, "&chestpocket=").concat(dataStyle.pocket.name, "&placket=").concat(dataStyle.placket.name, "&pov=").concat(pov);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9jdXN0b20vaG9va0N1c3RvbS5qcyJdLCJuYW1lcyI6WyJpbml0U3R5bGUiLCJ1c2VIb29rQ3VzdG9tIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJmYWJyaWNMaXN0Iiwic2V0RmFicmljTGlzdCIsImZhYnJpY1NlbGVjdCIsInNldEZhYnJpY1NlbGVjdCIsImxpc3RTdHlsZSIsInNldExpc3RTdHlsZSIsIm9wZW5TdHlsZSIsInNldE9wZW5TdHlsZSIsInN0eWxlU2VsZWN0Iiwic2V0U3R5bGVTZWxlY3QiLCJkYXRhU3R5bGUiLCJzZXREYXRhU3R5bGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0xvYWRpbmdGYWJyaWMiLCJzZXRJc0xvYWRpbmdGYWJyaWMiLCJjYXRlZ29yeSIsInF1ZXJ5IiwicG92Iiwic2V0UG92IiwiZmFicmljU2VsZWN0UmVmIiwidXNlUmVmIiwiZmFicmljIiwidXNlRWZmZWN0IiwiZ2V0Q3VzdG9tU3R5bGUiLCJjdXJyZW50IiwiY29uc29sZSIsImxvZyIsInVwZGF0ZVBvdiIsIm5ld1BvdiIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwic3RhdHVzIiwibWVzc2FnZSIsIm5ld0RhdGFTdHlsZSIsInRpdGxlIiwiY29sbGFyIiwibmFtZSIsInNsZWV2ZSIsImJvdHRvbSIsInBvY2tldCIsImN1ZmZzIiwiY3VmZnNCYWNrIiwicGxhY2tldCIsIlZlc3RMaXN0U3R5bGUiLCJCYXRpa0xpc3RTdHlsZSIsIlNoaXJ0TGlzdFN0eWxlIiwiVHJvdXNlckxpc3RTdHlsZSIsIkJsYXplckxpc3RTdHlsZSIsImN1cnJlbnRGYWJyaWNTZWxlY3QiLCJwbGFja2V0TmFtZSIsImlzVHVja2VkIiwic3BsaXQiLCJsZW5ndGgiLCJjb25jYXQiLCJ1cmwiLCJfaWQiLCJzdHlsZXMiLCJpbWFnZSIsImNoZXN0cG9ja2V0Iiwic2V0VGltZW91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RlMsRUFFUCxJQUZPLENBQVY7QUE5Q2U7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZFMsY0FBYztBQUFBO0FBQUE7QUFBQSxLQUFwQjs7QUFvREEsU0FBTztBQUNIbEIsYUFBUyxFQUFUQSxTQURHO0FBRUhGLGFBQVMsRUFBVEEsU0FGRztBQUdISixjQUFVLEVBQVZBLFVBSEc7QUFJSFEsZUFBVyxFQUFYQSxXQUpHO0FBS0hOLGdCQUFZLEVBQVpBLFlBTEc7QUFNSFEsYUFBUyxFQUFUQSxTQU5HO0FBT0hFLGFBQVMsRUFBVEEsU0FQRztBQVFIRSxtQkFBZSxFQUFmQSxlQVJHO0FBU0hJLE9BQUcsRUFBSEEsR0FURztBQVVIVSxhQUFTLEVBQVRBLFNBVkc7QUFXSFQsVUFBTSxFQUFOQSxNQVhHO0FBWUhSLGdCQUFZLEVBQVpBLFlBWkc7QUFhSEUsZ0JBQVksRUFBWkEsWUFiRztBQWNITixnQkFBWSxFQUFaQSxZQWRHO0FBZUhOLGlCQUFhLEVBQWJBLGFBZkc7QUFnQkhRLGtCQUFjLEVBQWRBLGNBaEJHO0FBaUJITixtQkFBZSxFQUFmQSxlQWpCRztBQWtCSFksc0JBQWtCLEVBQWxCQTtBQWxCRyxHQUFQO0FBb0JILENBOUxEOztHQUFNbkIsYTtVQUNhRSxxRDs7O0FBOExKRiw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jdXN0b20vW2NhdGVnb3J5XS43YTVjMjkzMzY1NDQ3MWUzYjA5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG4vLyBpbXBvcnQgZnJlbmNoUGxhY2tldCBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2ltZy9wbGFja2V0L1BsYWNrZXQgRnJlbmNoLnN2Z1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlLHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7XHJcbiAgICBCbGF6ZXJMaXN0U3R5bGUsXHJcbiAgICBTaGlydExpc3RTdHlsZSxcclxuICAgIFRyb3VzZXJMaXN0U3R5bGUsXHJcbiAgICBWZXN0TGlzdFN0eWxlLFxyXG4gICAgQmF0aWtMaXN0U3R5bGVcclxufSBmcm9tICcuL3NpZGViYXIvZGF0YVNpZGViYXInXHJcblxyXG5jb25zdCBpbml0U3R5bGUgPSB7XHJcbiAgICBcImJvdHRvbVwiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlNxdWFyZVwiXHJcbiAgICB9LFxyXG4gICAgXCJjb2xsYXJcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTdGFuZCBVcFwiXHJcbiAgICB9LFxyXG4gICAgXCJjb2xsYXJCYWNrXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiL2ltZy9wbGVhdHMvcmVkL0NvbGxhciBCYWNrLnN2Z1wiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlN0YW5kIFVwXCJcclxuICAgIH0sXHJcbiAgICBcInNsZWV2ZVwiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlNob3J0XCJcclxuICAgIH0sXHJcbiAgICBcImN1ZmZzXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU3F1YXJlIEZyZW5jaFwiXHJcbiAgICB9LFxyXG4gICAgXCJjdWZmc0JhY2tcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCIvaW1nL3NsZWV2ZV9iYWNrL0N1ZmZzIERvdWJsZSBSb3VuZGVkIEZyZW5jaCBCYWNrLnN2Z1wiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlNxdWFyZSBGcmVuY2hcIlxyXG4gICAgfSxcclxuICAgIFwicG9ja2V0XCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiV2l0aCBGbGFwXCJcclxuICAgIH0sXHJcbiAgICBcInBsYWNrZXRcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTdGFuZGFyZCBCb2R5IFVudHVja2VkIFdpdGggU3F1YXJlXCJcclxuICAgIH0sXHJcbiAgICBcInBsZWF0c1wiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIi9pbWcvcGxlYXRzL3JlZC9QbGVhdHMgQm94IFR1Y2tlZC5zdmdcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJQbGVhdHNcIlxyXG4gICAgfSxcclxuICAgIFwiY29sbGFyRm9sZFwiOntcclxuICAgICAgICBcImltYWdlXCI6XCJcIlxyXG4gICAgfSxcclxuICAgIFwiY3VmZnNGb2xkXCI6e1xyXG4gICAgICAgIFwiaW1hZ2VcIjpcIlwiXHJcbiAgICB9LFxyXG4gICAgXCJwb2NrZXRGb2xkXCI6e1xyXG4gICAgICAgIFwiaW1hZ2VcIjpcIlwiXHJcbiAgICAgICAgLy8gXCJpbWFnZVwiOlwiL2ltZy9wbGVhdHMvcmVkL0NoZXN0IFBvY2tldCBGb2xkZWQuc3ZnXCJcclxuICAgIH0sXHJcbiAgICBcInBsYWNrZXRGb2xkXCI6e1xyXG4gICAgICAgIFwiaW1hZ2VcIjpcIi9pbWcvZm9sZGVkL3JlZC9wbGVhdHMvUGxhY2tldCBTdGFuZGFyZCBCb2R5IEZvbGRlZC5zdmdcIlxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB1c2VIb29rQ3VzdG9tID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IFtmYWJyaWNMaXN0LCBzZXRGYWJyaWNMaXN0XSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2ZhYnJpY1NlbGVjdCwgc2V0RmFicmljU2VsZWN0XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbbGlzdFN0eWxlLCBzZXRMaXN0U3R5bGVdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbb3BlblN0eWxlLCBzZXRPcGVuU3R5bGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbc3R5bGVTZWxlY3QsIHNldFN0eWxlU2VsZWN0XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbZGF0YVN0eWxlLCBzZXREYXRhU3R5bGVdID0gdXNlU3RhdGUoaW5pdFN0eWxlKVxyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2lzTG9hZGluZ0ZhYnJpYywgc2V0SXNMb2FkaW5nRmFicmljXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgeyBjYXRlZ29yeSB9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgICBjb25zdCBbcG92LCBzZXRQb3ZdID0gdXNlU3RhdGUoXCJGUk9OVFwiKVxyXG4gICAgY29uc3QgZmFicmljU2VsZWN0UmVmID0gdXNlUmVmKG51bGwpXHJcbiAgICB2YXIgZmFicmljO1xyXG5cclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZmFicmljU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIGdldEN1c3RvbVN0eWxlKClcclxuICAgICAgICAgICAgZmFicmljU2VsZWN0UmVmLmN1cnJlbnQgPSBmYWJyaWNTZWxlY3RcclxuICAgICAgICB9XHJcbiAgICB9LCBbZmFicmljU2VsZWN0XSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZ0ZhYnJpYyh0cnVlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5pIG5ldyBwb3ZcIiwgcG92KTtcclxuICAgICAgICBpZiAoIWZhYnJpY1NlbGVjdCAmJiBmYWJyaWNTZWxlY3RSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBzZXRGYWJyaWNTZWxlY3QoZmFicmljU2VsZWN0UmVmLmN1cnJlbnQpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZ2V0Q3VzdG9tU3R5bGUoKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtwb3ZdKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVQb3YgPSAobmV3UG92KSA9PiB7XHJcbiAgICAgICAgc2V0UG92KG5ld1Bvdik7XHJcbiAgICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRDdXN0b21TdHlsZSgpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvZmFicmljL2xpc3RcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgc3RhdHVzLCBtZXNzYWdlIH0gPSByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgIGlmIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgc2V0RmFicmljTGlzdChkYXRhKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0RmFicmljTGlzdChbXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgc2V0RmFicmljTGlzdChbXSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZ0ZhYnJpYyh0cnVlKVxyXG4gICAgICAgIGdldEN1c3RvbVN0eWxlKClcclxuICAgIH0sIFtmYWJyaWNTZWxlY3RdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YVN0eWxlOlwiLCBkYXRhU3R5bGUpXHJcbiAgICB9LFtkYXRhU3R5bGVdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coc3R5bGVTZWxlY3QpO1xyXG4gICAgICAgIGNvbnN0IG5ld0RhdGFTdHlsZSA9IHsgLi4uZGF0YVN0eWxlIH1cclxuICAgICAgICBzd2l0Y2ggKHN0eWxlU2VsZWN0Py50aXRsZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQ29sbGFyXCI6XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY29sbGFyLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlNsZWV2ZVwiOlxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnNsZWV2ZS5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJCb3R0b21cIjpcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5ib3R0b20ubmFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQ2hlc3QgUG9ja2V0XCI6XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUucG9ja2V0Lm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkN1ZmZzXCI6XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY3VmZnMubmFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5jdWZmc0JhY2submFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5zbGVldmUubmFtZSA9IFwiTG9uZ1wiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlBsYWNrZXRcIjpcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wbGFja2V0Lm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgIC8vIGNhc2UgXCJQbGVhdHNcIjpcclxuICAgICAgICAgICAgLy8gICAgIG5ld0RhdGFTdHlsZS5wbGVhdHMubmFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldEN1c3RvbVN0eWxlKClcclxuICAgIH0sIFtzdHlsZVNlbGVjdF0pXHJcbiAgICBcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Zlc3RzJzpcclxuICAgICAgICAgICAgICAgIHNldExpc3RTdHlsZShWZXN0TGlzdFN0eWxlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JhdGlrcyc6XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0U3R5bGUoQmF0aWtMaXN0U3R5bGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc2hpcnRzJzpcclxuICAgICAgICAgICAgICAgIHNldExpc3RTdHlsZShTaGlydExpc3RTdHlsZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd0cm91c2Vycyc6XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0U3R5bGUoVHJvdXNlckxpc3RTdHlsZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdibGF6ZXInOlxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdFN0eWxlKEJsYXplckxpc3RTdHlsZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtjYXRlZ29yeV0pO1xyXG5cclxuICAgIGNvbnN0IGdldEN1c3RvbVN0eWxlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRGYWJyaWNTZWxlY3QgPSBmYWJyaWNTZWxlY3QgfHwgZmFicmljU2VsZWN0UmVmLmN1cnJlbnQ7XHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50RmFicmljU2VsZWN0KTtcclxuICAgIGlmICghY3VycmVudEZhYnJpY1NlbGVjdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gZmFicmljIHNlbGVjdGVkXCIpO1xyXG4gICAgICAgIHNldElzTG9hZGluZ0ZhYnJpYyhmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBwbGFja2V0TmFtZSA9IFwiXCIsXHJcbiAgICAgICAgICAgIGlzVHVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmKGRhdGFTdHlsZS5wbGFja2V0Lm5hbWUuc3BsaXQoXCIgXCIpLmxlbmd0aCA+IDEpeyAvLyogQ2hlY2sgYXBha2FoIGlzaSBueWEgXCJTdGFuZGFyXCIgYXRhdSBzdWRhaCBsZW5na2FwIGRlbmdhbiBcIkJvZHkgVW50dWNrZWQgV2l0aCBTcXVhcmVcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2tldE5hbWUgPSBkYXRhU3R5bGUucGxhY2tldC5uYW1lO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwbGFja2V0TmFtZSA9IGRhdGFTdHlsZS5wbGFja2V0Lm5hbWUuY29uY2F0KFwiIEJvZHlcIiwgaXNUdWNrZWQgPyBcIlwiIDogXCJVbnR1Y2tlZFwiICxcIldpdGggU3F1YXJlXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciB1cmwgPSBgL2FwaS9jdXN0b20vY3VzdG9tX3N0eWxlP2ZhYnJpYz0ke2ZhYnJpY1NlbGVjdC5faWR9JmNvbGxhcj0ke2RhdGFTdHlsZS5jb2xsYXIubmFtZX0mY3VmZnM9JHtkYXRhU3R5bGUuY3VmZnMubmFtZX0mc2xlZXZlPSR7ZGF0YVN0eWxlLnNsZWV2ZS5uYW1lfSZib3R0b209JHtkYXRhU3R5bGUuYm90dG9tLm5hbWV9JmNoZXN0cG9ja2V0PSR7ZGF0YVN0eWxlLnBvY2tldC5uYW1lfSZwbGFja2V0PSR7ZGF0YVN0eWxlLnBsYWNrZXQubmFtZX0mcG92PSR7cG92fWA7XHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICAgICAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0RhdGFTdHlsZSA9IHsgLi4uZGF0YVN0eWxlIH1cclxuICAgICAgICAgICAgLy8gbmV3RGF0YVN0eWxlLmJvdHRvbS5uYW1lID0gZGF0YS5ib3R0b20ubmFtZVxyXG4gICAgICAgICAgICAvLyBuZXdEYXRhU3R5bGUuYm90dG9tLmltYWdlID0gZGF0YS5ib3R0b20uaW1hZ2VcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5jb2xsYXIubmFtZSA9IGRhdGEuc3R5bGVzLmNvbGxhcj8ubmFtZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5jb2xsYXIuaW1hZ2UgPSBkYXRhLnN0eWxlcy5jb2xsYXI/LmltYWdlIHx8IFwiXCJcclxuICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnNsZWV2ZS5uYW1lID0gZGF0YS5zdHlsZXMuc2xlZXZlPy5uYW1lIHx8IFwiXCJcclxuICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnNsZWV2ZS5pbWFnZSA9IGRhdGEuc3R5bGVzLnNsZWV2ZT8uaW1hZ2UgfHwgXCJcIlxyXG4gICAgICAgICAgICBuZXdEYXRhU3R5bGUucG9ja2V0Lm5hbWUgPSBkYXRhLnN0eWxlcy5jaGVzdHBvY2tldD8ubmFtZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wb2NrZXQuaW1hZ2UgPSBkYXRhLnN0eWxlcy5jaGVzdHBvY2tldD8uaW1hZ2UgfHwgXCJcIlxyXG4gICAgICAgICAgICBuZXdEYXRhU3R5bGUucGxhY2tldC5uYW1lID0gZGF0YS5zdHlsZXMucGxhY2tldD8ubmFtZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wbGFja2V0LmltYWdlID0gZGF0YS5zdHlsZXMucGxhY2tldD8uaW1hZ2UgfHwgXCJcIlxyXG4gICAgICAgICAgICBmYWJyaWM9IGZhYnJpY1NlbGVjdFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZmFicmljU2VsZWN0Ll9pZClcclxuICAgICAgICAgICAgc2V0RGF0YVN0eWxlKG5ld0RhdGFTdHlsZSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3RGF0YVN0eWxlKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgIH0sIDcwMCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nRmFicmljKGZhbHNlKVxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBvcGVuU3R5bGUsXHJcbiAgICAgICAgbGlzdFN0eWxlLFxyXG4gICAgICAgIGZhYnJpY0xpc3QsXHJcbiAgICAgICAgc3R5bGVTZWxlY3QsXHJcbiAgICAgICAgZmFicmljU2VsZWN0LFxyXG4gICAgICAgIGRhdGFTdHlsZSxcclxuICAgICAgICBpc0xvYWRpbmcsXHJcbiAgICAgICAgaXNMb2FkaW5nRmFicmljLFxyXG4gICAgICAgIHBvdixcclxuICAgICAgICB1cGRhdGVQb3YsXHJcbiAgICAgICAgc2V0UG92LFxyXG4gICAgICAgIHNldERhdGFTdHlsZSxcclxuICAgICAgICBzZXRJc0xvYWRpbmcsXHJcbiAgICAgICAgc2V0T3BlblN0eWxlLFxyXG4gICAgICAgIHNldEZhYnJpY0xpc3QsXHJcbiAgICAgICAgc2V0U3R5bGVTZWxlY3QsXHJcbiAgICAgICAgc2V0RmFicmljU2VsZWN0LFxyXG4gICAgICAgIHNldElzTG9hZGluZ0ZhYnJpYyxcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCB1c2VIb29rQ3VzdG9tIl0sInNvdXJjZVJvb3QiOiIifQ==