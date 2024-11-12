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

  var fabric;
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])( /*#__PURE__*/Object(D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    return D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setIsLoadingFabric(true);
            console.log("ini new pov", pov);
            setFabricSelect(fabric);
            getCustomStyle();

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [pov]);

  var updatePov = function updatePov(newPov) {
    setPov(newPov);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    getCustomStyle();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])( /*#__PURE__*/Object(D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
    var response, _response$data, status, message, data;

    return D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/fabric/list");

          case 3:
            response = _context2.sent;
            _response$data = response.data, status = _response$data.status, message = _response$data.message;

            if (status) {
              data = response.data.data;
              setFabricList(data);
            } else {
              setFabricList([]);
            }

            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            setFabricList([]);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  })), []);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])( /*#__PURE__*/Object(D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
    return D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            setIsLoadingFabric(true);
            getCustomStyle();

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
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
    var _ref4 = Object(D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
      var _data$styles$collar, _data$styles$collar2, _data$styles$sleeve, _data$styles$sleeve2, _data$styles$chestpoc, _data$styles$chestpoc2, _data$styles$placket, _data$styles$placket2, placketName, isTucked, url, response, _response$data2, status, data, newDataStyle;

      return D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log(fabricSelect);
              console.log("/api/custom/custom_style?fabric=".concat(fabricSelect._id, "&collar=").concat(dataStyle.collar.name, "&cuffs=").concat(dataStyle.cuffs.name, "&sleeve=").concat(dataStyle.sleeve.name, "&bottom=").concat(dataStyle.bottom.name, "&chestpocket=").concat(dataStyle.pocket.name, "&placket=").concat(dataStyle.placket.name, "&pov=").concat(pov));
              _context4.prev = 2;
              placketName = "", isTucked = false;

              if (dataStyle.placket.name.split(" ").length > 1) {
                //* Check apakah isi nya "Standar" atau sudah lengkap dengan "Body Untucked With Square"
                placketName = dataStyle.placket.name;
              } else {
                placketName = dataStyle.placket.name.concat(" Body", isTucked ? "" : "Untucked", "With Square");
              }

              url = "/api/custom/custom_style?fabric=".concat(fabricSelect._id, "&collar=").concat(dataStyle.collar.name, "&cuffs=").concat(dataStyle.cuffs.name, "&sleeve=").concat(dataStyle.sleeve.name, "&bottom=").concat(dataStyle.bottom.name, "&chestpocket=").concat(dataStyle.pocket.name, "&placket=").concat(dataStyle.placket.name, "&pov=").concat(pov);
              _context4.next = 8;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url);

            case 8:
              response = _context4.sent;
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
              _context4.next = 30;
              break;

            case 27:
              _context4.prev = 27;
              _context4.t0 = _context4["catch"](2);
              console.log(_context4.t0);

            case 30:
              _context4.prev = 30;
              setTimeout(function () {
                setIsLoading(false);
              }, 700);
              setTimeout(function () {
                setIsLoadingFabric(false);
              }, 1000);
              return _context4.finish(30);

            case 34:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 27, 30, 34]]);
    }));

    return function getCustomStyle() {
      return _ref4.apply(this, arguments);
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

_s(useHookCustom, "lWXe7MQbrxS7H3qzcDX1xYCcVKM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9jdXN0b20vaG9va0N1c3RvbS5qcyJdLCJuYW1lcyI6WyJpbml0U3R5bGUiLCJ1c2VIb29rQ3VzdG9tIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJmYWJyaWNMaXN0Iiwic2V0RmFicmljTGlzdCIsImZhYnJpY1NlbGVjdCIsInNldEZhYnJpY1NlbGVjdCIsImxpc3RTdHlsZSIsInNldExpc3RTdHlsZSIsIm9wZW5TdHlsZSIsInNldE9wZW5TdHlsZSIsInN0eWxlU2VsZWN0Iiwic2V0U3R5bGVTZWxlY3QiLCJkYXRhU3R5bGUiLCJzZXREYXRhU3R5bGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0xvYWRpbmdGYWJyaWMiLCJzZXRJc0xvYWRpbmdGYWJyaWMiLCJjYXRlZ29yeSIsInF1ZXJ5IiwicG92Iiwic2V0UG92IiwiZmFicmljIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImdldEN1c3RvbVN0eWxlIiwidXBkYXRlUG92IiwibmV3UG92IiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsImRhdGEiLCJzdGF0dXMiLCJtZXNzYWdlIiwibmV3RGF0YVN0eWxlIiwidGl0bGUiLCJjb2xsYXIiLCJuYW1lIiwic2xlZXZlIiwiYm90dG9tIiwicG9ja2V0IiwiY3VmZnMiLCJjdWZmc0JhY2siLCJwbGFja2V0IiwiVmVzdExpc3RTdHlsZSIsIkJhdGlrTGlzdFN0eWxlIiwiU2hpcnRMaXN0U3R5bGUiLCJUcm91c2VyTGlzdFN0eWxlIiwiQmxhemVyTGlzdFN0eWxlIiwiX2lkIiwicGxhY2tldE5hbWUiLCJpc1R1Y2tlZCIsInNwbGl0IiwibGVuZ3RoIiwiY29uY2F0IiwidXJsIiwic3R5bGVzIiwiaW1hZ2UiLCJjaGVzdHBvY2tldCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBRUE7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LEVBQVZBLFVBSEc7QUFJSFEsZUFBVyxFQUFYQSxXQUpHO0FBS0hOLGdCQUFZLEVBQVpBLFlBTEc7QUFNSFEsYUFBUyxFQUFUQSxTQU5HO0FBT0hFLGFBQVMsRUFBVEEsU0FQRztBQVFIRSxtQkFBZSxFQUFmQSxlQVJHO0FBU0hJLE9BQUcsRUFBSEEsR0FURztBQVVITyxhQUFTLEVBQVRBLFNBVkc7QUFXSE4sVUFBTSxFQUFOQSxNQVhHO0FBWUhSLGdCQUFZLEVBQVpBLFlBWkc7QUFhSEUsZ0JBQVksRUFBWkEsWUFiRztBQWNITixnQkFBWSxFQUFaQSxZQWRHO0FBZUhOLGlCQUFhLEVBQWJBLGFBZkc7QUFnQkhRLGtCQUFjLEVBQWRBLGNBaEJHO0FBaUJITixtQkFBZSxFQUFmQSxlQWpCRztBQWtCSFksc0JBQWtCLEVBQWxCQTtBQWxCRyxHQUFQO0FBb0JILENBN0tEOztHQUFNbkIsYTtVQUNhRSxxRDs7O0FBNktKRiw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jdXN0b20vW2NhdGVnb3J5XS5jZjViMzUzMmU2MTViYzc5YzM1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG4vLyBpbXBvcnQgZnJlbmNoUGxhY2tldCBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2ltZy9wbGFja2V0L1BsYWNrZXQgRnJlbmNoLnN2Z1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHtcclxuICAgIEJsYXplckxpc3RTdHlsZSxcclxuICAgIFNoaXJ0TGlzdFN0eWxlLFxyXG4gICAgVHJvdXNlckxpc3RTdHlsZSxcclxuICAgIFZlc3RMaXN0U3R5bGUsXHJcbiAgICBCYXRpa0xpc3RTdHlsZVxyXG59IGZyb20gJy4vc2lkZWJhci9kYXRhU2lkZWJhcidcclxuXHJcbmNvbnN0IGluaXRTdHlsZSA9IHtcclxuICAgIFwiYm90dG9tXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU3F1YXJlXCJcclxuICAgIH0sXHJcbiAgICBcImNvbGxhclwiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlN0YW5kIFVwXCJcclxuICAgIH0sXHJcbiAgICBcImNvbGxhckJhY2tcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCIvaW1nL3BsZWF0cy9yZWQvQ29sbGFyIEJhY2suc3ZnXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU3RhbmQgVXBcIlxyXG4gICAgfSxcclxuICAgIFwic2xlZXZlXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU2hvcnRcIlxyXG4gICAgfSxcclxuICAgIFwiY3VmZnNcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTcXVhcmUgRnJlbmNoXCJcclxuICAgIH0sXHJcbiAgICBcImN1ZmZzQmFja1wiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIi9pbWcvc2xlZXZlX2JhY2svQ3VmZnMgRG91YmxlIFJvdW5kZWQgRnJlbmNoIEJhY2suc3ZnXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU3F1YXJlIEZyZW5jaFwiXHJcbiAgICB9LFxyXG4gICAgXCJwb2NrZXRcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJXaXRoIEZsYXBcIlxyXG4gICAgfSxcclxuICAgIFwicGxhY2tldFwiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlN0YW5kYXJkIEJvZHkgVW50dWNrZWQgV2l0aCBTcXVhcmVcIlxyXG4gICAgfSxcclxuICAgIFwicGxlYXRzXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiL2ltZy9wbGVhdHMvcmVkL1BsZWF0cyBCb3ggVHVja2VkLnN2Z1wiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlBsZWF0c1wiXHJcbiAgICB9LFxyXG4gICAgXCJjb2xsYXJGb2xkXCI6e1xyXG4gICAgICAgIFwiaW1hZ2VcIjpcIlwiXHJcbiAgICB9LFxyXG4gICAgXCJjdWZmc0ZvbGRcIjp7XHJcbiAgICAgICAgXCJpbWFnZVwiOlwiXCJcclxuICAgIH0sXHJcbiAgICBcInBvY2tldEZvbGRcIjp7XHJcbiAgICAgICAgXCJpbWFnZVwiOlwiXCJcclxuICAgICAgICAvLyBcImltYWdlXCI6XCIvaW1nL3BsZWF0cy9yZWQvQ2hlc3QgUG9ja2V0IEZvbGRlZC5zdmdcIlxyXG4gICAgfSxcclxuICAgIFwicGxhY2tldEZvbGRcIjp7XHJcbiAgICAgICAgXCJpbWFnZVwiOlwiL2ltZy9mb2xkZWQvcmVkL3BsZWF0cy9QbGFja2V0IFN0YW5kYXJkIEJvZHkgRm9sZGVkLnN2Z1wiXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHVzZUhvb2tDdXN0b20gPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgW2ZhYnJpY0xpc3QsIHNldEZhYnJpY0xpc3RdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbZmFicmljU2VsZWN0LCBzZXRGYWJyaWNTZWxlY3RdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtsaXN0U3R5bGUsIHNldExpc3RTdHlsZV0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtvcGVuU3R5bGUsIHNldE9wZW5TdHlsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtzdHlsZVNlbGVjdCwgc2V0U3R5bGVTZWxlY3RdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtkYXRhU3R5bGUsIHNldERhdGFTdHlsZV0gPSB1c2VTdGF0ZShpbml0U3R5bGUpXHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaXNMb2FkaW5nRmFicmljLCBzZXRJc0xvYWRpbmdGYWJyaWNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCB7IGNhdGVnb3J5IH0gPSByb3V0ZXIucXVlcnlcclxuICAgIGNvbnN0IFtwb3YsIHNldFBvdl0gPSB1c2VTdGF0ZShcIkZST05UXCIpXHJcbiAgICB2YXIgZmFicmljO1xyXG5cclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nRmFicmljKHRydWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbmkgbmV3IHBvdlwiLHBvdik7XHJcbiAgICAgICAgc2V0RmFicmljU2VsZWN0KGZhYnJpYylcclxuICAgICAgICBnZXRDdXN0b21TdHlsZSgpXHJcbiAgICB9LCBbcG92XSk7XHJcblxyXG4gICAgY29uc3QgdXBkYXRlUG92ID0gKG5ld1BvdikgPT4ge1xyXG4gICAgICAgIHNldFBvdihuZXdQb3YpO1xyXG4gICAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0Q3VzdG9tU3R5bGUoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2ZhYnJpYy9saXN0XCIpO1xyXG4gICAgICAgICAgICBjb25zdCB7IHN0YXR1cywgbWVzc2FnZSB9ID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICBpZiAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgIHNldEZhYnJpY0xpc3QoZGF0YSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEZhYnJpY0xpc3QoW10pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHNldEZhYnJpY0xpc3QoW10pXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmdGYWJyaWModHJ1ZSlcclxuICAgICAgICBnZXRDdXN0b21TdHlsZSgpXHJcbiAgICB9LCBbZmFicmljU2VsZWN0XSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGFTdHlsZTpcIiwgZGF0YVN0eWxlKVxyXG4gICAgfSxbZGF0YVN0eWxlXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0eWxlU2VsZWN0KTtcclxuICAgICAgICBjb25zdCBuZXdEYXRhU3R5bGUgPSB7IC4uLmRhdGFTdHlsZSB9XHJcbiAgICAgICAgc3dpdGNoIChzdHlsZVNlbGVjdD8udGl0bGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkNvbGxhclwiOlxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmNvbGxhci5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJTbGVldmVcIjpcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5zbGVldmUubmFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQm90dG9tXCI6XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuYm90dG9tLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkNoZXN0IFBvY2tldFwiOlxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnBvY2tldC5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDdWZmc1wiOlxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmN1ZmZzLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY3VmZnNCYWNrLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuc2xlZXZlLm5hbWUgPSBcIkxvbmdcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJQbGFja2V0XCI6XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUucGxhY2tldC5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAvLyBjYXNlIFwiUGxlYXRzXCI6XHJcbiAgICAgICAgICAgIC8vICAgICBuZXdEYXRhU3R5bGUucGxlYXRzLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRDdXN0b21TdHlsZSgpXHJcbiAgICB9LCBbc3R5bGVTZWxlY3RdKVxyXG4gICAgXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChjYXRlZ29yeSkge1xyXG4gICAgICAgICAgICBjYXNlICd2ZXN0cyc6XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0U3R5bGUoVmVzdExpc3RTdHlsZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdiYXRpa3MnOlxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdFN0eWxlKEJhdGlrTGlzdFN0eWxlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NoaXJ0cyc6XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0U3R5bGUoU2hpcnRMaXN0U3R5bGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAndHJvdXNlcnMnOlxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdFN0eWxlKFRyb3VzZXJMaXN0U3R5bGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYmxhemVyJzpcclxuICAgICAgICAgICAgICAgIHNldExpc3RTdHlsZShCbGF6ZXJMaXN0U3R5bGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LCBbY2F0ZWdvcnldKTtcclxuXHJcbiAgICBjb25zdCBnZXRDdXN0b21TdHlsZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhmYWJyaWNTZWxlY3QpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCBgL2FwaS9jdXN0b20vY3VzdG9tX3N0eWxlP2ZhYnJpYz0ke2ZhYnJpY1NlbGVjdC5faWR9JmNvbGxhcj0ke2RhdGFTdHlsZS5jb2xsYXIubmFtZX0mY3VmZnM9JHtkYXRhU3R5bGUuY3VmZnMubmFtZX0mc2xlZXZlPSR7ZGF0YVN0eWxlLnNsZWV2ZS5uYW1lfSZib3R0b209JHtkYXRhU3R5bGUuYm90dG9tLm5hbWV9JmNoZXN0cG9ja2V0PSR7ZGF0YVN0eWxlLnBvY2tldC5uYW1lfSZwbGFja2V0PSR7ZGF0YVN0eWxlLnBsYWNrZXQubmFtZX0mcG92PSR7cG92fWApO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBwbGFja2V0TmFtZSA9IFwiXCIsXHJcbiAgICAgICAgICAgIGlzVHVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmKGRhdGFTdHlsZS5wbGFja2V0Lm5hbWUuc3BsaXQoXCIgXCIpLmxlbmd0aCA+IDEpeyAvLyogQ2hlY2sgYXBha2FoIGlzaSBueWEgXCJTdGFuZGFyXCIgYXRhdSBzdWRhaCBsZW5na2FwIGRlbmdhbiBcIkJvZHkgVW50dWNrZWQgV2l0aCBTcXVhcmVcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2tldE5hbWUgPSBkYXRhU3R5bGUucGxhY2tldC5uYW1lO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwbGFja2V0TmFtZSA9IGRhdGFTdHlsZS5wbGFja2V0Lm5hbWUuY29uY2F0KFwiIEJvZHlcIiwgaXNUdWNrZWQgPyBcIlwiIDogXCJVbnR1Y2tlZFwiICxcIldpdGggU3F1YXJlXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciB1cmwgPSBgL2FwaS9jdXN0b20vY3VzdG9tX3N0eWxlP2ZhYnJpYz0ke2ZhYnJpY1NlbGVjdC5faWR9JmNvbGxhcj0ke2RhdGFTdHlsZS5jb2xsYXIubmFtZX0mY3VmZnM9JHtkYXRhU3R5bGUuY3VmZnMubmFtZX0mc2xlZXZlPSR7ZGF0YVN0eWxlLnNsZWV2ZS5uYW1lfSZib3R0b209JHtkYXRhU3R5bGUuYm90dG9tLm5hbWV9JmNoZXN0cG9ja2V0PSR7ZGF0YVN0eWxlLnBvY2tldC5uYW1lfSZwbGFja2V0PSR7ZGF0YVN0eWxlLnBsYWNrZXQubmFtZX0mcG92PSR7cG92fWA7XHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICAgICAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0RhdGFTdHlsZSA9IHsgLi4uZGF0YVN0eWxlIH1cclxuICAgICAgICAgICAgLy8gbmV3RGF0YVN0eWxlLmJvdHRvbS5uYW1lID0gZGF0YS5ib3R0b20ubmFtZVxyXG4gICAgICAgICAgICAvLyBuZXdEYXRhU3R5bGUuYm90dG9tLmltYWdlID0gZGF0YS5ib3R0b20uaW1hZ2VcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5jb2xsYXIubmFtZSA9IGRhdGEuc3R5bGVzLmNvbGxhcj8ubmFtZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5jb2xsYXIuaW1hZ2UgPSBkYXRhLnN0eWxlcy5jb2xsYXI/LmltYWdlIHx8IFwiXCJcclxuICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnNsZWV2ZS5uYW1lID0gZGF0YS5zdHlsZXMuc2xlZXZlPy5uYW1lIHx8IFwiXCJcclxuICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnNsZWV2ZS5pbWFnZSA9IGRhdGEuc3R5bGVzLnNsZWV2ZT8uaW1hZ2UgfHwgXCJcIlxyXG4gICAgICAgICAgICBuZXdEYXRhU3R5bGUucG9ja2V0Lm5hbWUgPSBkYXRhLnN0eWxlcy5jaGVzdHBvY2tldD8ubmFtZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wb2NrZXQuaW1hZ2UgPSBkYXRhLnN0eWxlcy5jaGVzdHBvY2tldD8uaW1hZ2UgfHwgXCJcIlxyXG4gICAgICAgICAgICBuZXdEYXRhU3R5bGUucGxhY2tldC5uYW1lID0gZGF0YS5zdHlsZXMucGxhY2tldD8ubmFtZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wbGFja2V0LmltYWdlID0gZGF0YS5zdHlsZXMucGxhY2tldD8uaW1hZ2UgfHwgXCJcIlxyXG4gICAgICAgICAgICBmYWJyaWM9IGZhYnJpY1NlbGVjdFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZmFicmljU2VsZWN0Ll9pZClcclxuICAgICAgICAgICAgc2V0RGF0YVN0eWxlKG5ld0RhdGFTdHlsZSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3RGF0YVN0eWxlKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgIH0sIDcwMCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nRmFicmljKGZhbHNlKVxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBvcGVuU3R5bGUsXHJcbiAgICAgICAgbGlzdFN0eWxlLFxyXG4gICAgICAgIGZhYnJpY0xpc3QsXHJcbiAgICAgICAgc3R5bGVTZWxlY3QsXHJcbiAgICAgICAgZmFicmljU2VsZWN0LFxyXG4gICAgICAgIGRhdGFTdHlsZSxcclxuICAgICAgICBpc0xvYWRpbmcsXHJcbiAgICAgICAgaXNMb2FkaW5nRmFicmljLFxyXG4gICAgICAgIHBvdixcclxuICAgICAgICB1cGRhdGVQb3YsXHJcbiAgICAgICAgc2V0UG92LFxyXG4gICAgICAgIHNldERhdGFTdHlsZSxcclxuICAgICAgICBzZXRJc0xvYWRpbmcsXHJcbiAgICAgICAgc2V0T3BlblN0eWxlLFxyXG4gICAgICAgIHNldEZhYnJpY0xpc3QsXHJcbiAgICAgICAgc2V0U3R5bGVTZWxlY3QsXHJcbiAgICAgICAgc2V0RmFicmljU2VsZWN0LFxyXG4gICAgICAgIHNldElzTG9hZGluZ0ZhYnJpYyxcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCB1c2VIb29rQ3VzdG9tIl0sInNvdXJjZVJvb3QiOiIifQ==