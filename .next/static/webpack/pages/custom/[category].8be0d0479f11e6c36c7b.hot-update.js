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
      var _data$styles$collar, _data$styles$collar2, _data$styles$sleeve, _data$styles$sleeve2, _data$styles$chestpoc, _data$styles$chestpoc2, _data$styles$placket, _data$styles$placket2, placketName, isTucked, url, response, _response$data2, status, data, newDataStyle;

      return D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log(fabricSelect);
              console.log("/api/custom/custom_style?fabric=".concat(fabricSelect._id, "&collar=").concat(dataStyle.collar.name, "&cuffs=").concat(dataStyle.cuffs.name, "&sleeve=").concat(dataStyle.sleeve.name, "&bottom=").concat(dataStyle.bottom.name, "&chestpocket=").concat(dataStyle.pocket.name, "&placket=").concat(dataStyle.placket.name, "&pov=").concat(pov));
              _context3.prev = 2;
              placketName = "", isTucked = false;

              if (dataStyle.placket.name.split(" ").length > 1) {
                //* Check apakah isi nya "Standar" atau sudah lengkap dengan "Body Untucked With Square"
                placketName = dataStyle.placket.name;
              } else {
                placketName = dataStyle.placket.name.concat(" Body", isTucked ? "" : "Untucked", "With Square");
              }

              url = "/api/custom/custom_style?fabric=".concat(fabricSelect._id, "&collar=").concat(dataStyle.collar.name, "&cuffs=").concat(dataStyle.cuffs.name, "&sleeve=").concat(dataStyle.sleeve.name, "&bottom=").concat(dataStyle.bottom.name, "&chestpocket=").concat(dataStyle.pocket.name, "&placket=").concat(dataStyle.placket.name, "&pov=").concat(pov);
              _context3.next = 8;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url);

            case 8:
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
              _context3.next = 30;
              break;

            case 27:
              _context3.prev = 27;
              _context3.t0 = _context3["catch"](2);
              console.log(_context3.t0);

            case 30:
              _context3.prev = 30;
              setTimeout(function () {
                setIsLoading(false);
              }, 700);
              setTimeout(function () {
                setIsLoadingFabric(false);
              }, 1000);
              return _context3.finish(30);

            case 34:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 27, 30, 34]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9jdXN0b20vaG9va0N1c3RvbS5qcyJdLCJuYW1lcyI6WyJpbml0U3R5bGUiLCJ1c2VIb29rQ3VzdG9tIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJmYWJyaWNMaXN0Iiwic2V0RmFicmljTGlzdCIsImZhYnJpY1NlbGVjdCIsInNldEZhYnJpY1NlbGVjdCIsImxpc3RTdHlsZSIsInNldExpc3RTdHlsZSIsIm9wZW5TdHlsZSIsInNldE9wZW5TdHlsZSIsInN0eWxlU2VsZWN0Iiwic2V0U3R5bGVTZWxlY3QiLCJkYXRhU3R5bGUiLCJzZXREYXRhU3R5bGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0xvYWRpbmdGYWJyaWMiLCJzZXRJc0xvYWRpbmdGYWJyaWMiLCJjYXRlZ29yeSIsInF1ZXJ5IiwicG92Iiwic2V0UG92IiwiZmFicmljU2VsZWN0UmVmIiwidXNlUmVmIiwiZmFicmljIiwidXNlRWZmZWN0IiwiZ2V0Q3VzdG9tU3R5bGUiLCJjdXJyZW50IiwiY29uc29sZSIsImxvZyIsInVwZGF0ZVBvdiIsIm5ld1BvdiIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwic3RhdHVzIiwibWVzc2FnZSIsIm5ld0RhdGFTdHlsZSIsInRpdGxlIiwiY29sbGFyIiwibmFtZSIsInNsZWV2ZSIsImJvdHRvbSIsInBvY2tldCIsImN1ZmZzIiwiY3VmZnNCYWNrIiwicGxhY2tldCIsIlZlc3RMaXN0U3R5bGUiLCJCYXRpa0xpc3RTdHlsZSIsIlNoaXJ0TGlzdFN0eWxlIiwiVHJvdXNlckxpc3RTdHlsZSIsIkJsYXplckxpc3RTdHlsZSIsIl9pZCIsInBsYWNrZXROYW1lIiwiaXNUdWNrZWQiLCJzcGxpdCIsImxlbmd0aCIsImNvbmNhdCIsInVybCIsInN0eWxlcyIsImltYWdlIiwiY2hlc3Rwb2NrZXQiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7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LENBQVo7QUFDSCxlQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0FnRCx3QkFBVSxDQUFDLFlBQU07QUFDYjlDLGtDQUFrQixDQUFDLEtBQUQsQ0FBbEI7QUFDSCxlQUZTLEVBRVAsSUFGTyxDQUFWO0FBekNlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWRTLGNBQWM7QUFBQTtBQUFBO0FBQUEsS0FBcEI7O0FBK0NBLFNBQU87QUFDSGxCLGFBQVMsRUFBVEEsU0FERztBQUVIRixhQUFTLEVBQVRBLFNBRkc7QUFHSEosY0FBVSxFQUFWQSxVQUhHO0FBSUhRLGVBQVcsRUFBWEEsV0FKRztBQUtITixnQkFBWSxFQUFaQSxZQUxHO0FBTUhRLGFBQVMsRUFBVEEsU0FORztBQU9IRSxhQUFTLEVBQVRBLFNBUEc7QUFRSEUsbUJBQWUsRUFBZkEsZUFSRztBQVNISSxPQUFHLEVBQUhBLEdBVEc7QUFVSFUsYUFBUyxFQUFUQSxTQVZHO0FBV0hULFVBQU0sRUFBTkEsTUFYRztBQVlIUixnQkFBWSxFQUFaQSxZQVpHO0FBYUhFLGdCQUFZLEVBQVpBLFlBYkc7QUFjSE4sZ0JBQVksRUFBWkEsWUFkRztBQWVITixpQkFBYSxFQUFiQSxhQWZHO0FBZ0JIUSxrQkFBYyxFQUFkQSxjQWhCRztBQWlCSE4sbUJBQWUsRUFBZkEsZUFqQkc7QUFrQkhZLHNCQUFrQixFQUFsQkE7QUFsQkcsR0FBUDtBQW9CSCxDQXpMRDs7R0FBTW5CLGE7VUFDYUUscUQ7OztBQXlMSkYsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3VzdG9tL1tjYXRlZ29yeV0uOGJlMGQwNDc5ZjExZTZjMzZjN2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuLy8gaW1wb3J0IGZyZW5jaFBsYWNrZXQgZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9pbWcvcGxhY2tldC9QbGFja2V0IEZyZW5jaC5zdmdcIjtcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSx1c2VSZWYgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge1xyXG4gICAgQmxhemVyTGlzdFN0eWxlLFxyXG4gICAgU2hpcnRMaXN0U3R5bGUsXHJcbiAgICBUcm91c2VyTGlzdFN0eWxlLFxyXG4gICAgVmVzdExpc3RTdHlsZSxcclxuICAgIEJhdGlrTGlzdFN0eWxlXHJcbn0gZnJvbSAnLi9zaWRlYmFyL2RhdGFTaWRlYmFyJ1xyXG5cclxuY29uc3QgaW5pdFN0eWxlID0ge1xyXG4gICAgXCJib3R0b21cIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTcXVhcmVcIlxyXG4gICAgfSxcclxuICAgIFwiY29sbGFyXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU3RhbmQgVXBcIlxyXG4gICAgfSxcclxuICAgIFwiY29sbGFyQmFja1wiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIi9pbWcvcGxlYXRzL3JlZC9Db2xsYXIgQmFjay5zdmdcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTdGFuZCBVcFwiXHJcbiAgICB9LFxyXG4gICAgXCJzbGVldmVcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTaG9ydFwiXHJcbiAgICB9LFxyXG4gICAgXCJjdWZmc1wiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlNxdWFyZSBGcmVuY2hcIlxyXG4gICAgfSxcclxuICAgIFwiY3VmZnNCYWNrXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiL2ltZy9zbGVldmVfYmFjay9DdWZmcyBEb3VibGUgUm91bmRlZCBGcmVuY2ggQmFjay5zdmdcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTcXVhcmUgRnJlbmNoXCJcclxuICAgIH0sXHJcbiAgICBcInBvY2tldFwiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIldpdGggRmxhcFwiXHJcbiAgICB9LFxyXG4gICAgXCJwbGFja2V0XCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU3RhbmRhcmQgQm9keSBVbnR1Y2tlZCBXaXRoIFNxdWFyZVwiXHJcbiAgICB9LFxyXG4gICAgXCJwbGVhdHNcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCIvaW1nL3BsZWF0cy9yZWQvUGxlYXRzIEJveCBUdWNrZWQuc3ZnXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiUGxlYXRzXCJcclxuICAgIH0sXHJcbiAgICBcImNvbGxhckZvbGRcIjp7XHJcbiAgICAgICAgXCJpbWFnZVwiOlwiXCJcclxuICAgIH0sXHJcbiAgICBcImN1ZmZzRm9sZFwiOntcclxuICAgICAgICBcImltYWdlXCI6XCJcIlxyXG4gICAgfSxcclxuICAgIFwicG9ja2V0Rm9sZFwiOntcclxuICAgICAgICBcImltYWdlXCI6XCJcIlxyXG4gICAgICAgIC8vIFwiaW1hZ2VcIjpcIi9pbWcvcGxlYXRzL3JlZC9DaGVzdCBQb2NrZXQgRm9sZGVkLnN2Z1wiXHJcbiAgICB9LFxyXG4gICAgXCJwbGFja2V0Rm9sZFwiOntcclxuICAgICAgICBcImltYWdlXCI6XCIvaW1nL2ZvbGRlZC9yZWQvcGxlYXRzL1BsYWNrZXQgU3RhbmRhcmQgQm9keSBGb2xkZWQuc3ZnXCJcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgdXNlSG9va0N1c3RvbSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBbZmFicmljTGlzdCwgc2V0RmFicmljTGlzdF0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtmYWJyaWNTZWxlY3QsIHNldEZhYnJpY1NlbGVjdF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW2xpc3RTdHlsZSwgc2V0TGlzdFN0eWxlXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW29wZW5TdHlsZSwgc2V0T3BlblN0eWxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3N0eWxlU2VsZWN0LCBzZXRTdHlsZVNlbGVjdF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW2RhdGFTdHlsZSwgc2V0RGF0YVN0eWxlXSA9IHVzZVN0YXRlKGluaXRTdHlsZSlcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtpc0xvYWRpbmdGYWJyaWMsIHNldElzTG9hZGluZ0ZhYnJpY10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IHsgY2F0ZWdvcnkgfSA9IHJvdXRlci5xdWVyeVxyXG4gICAgY29uc3QgW3Bvdiwgc2V0UG92XSA9IHVzZVN0YXRlKFwiRlJPTlRcIilcclxuICAgIGNvbnN0IGZhYnJpY1NlbGVjdFJlZiA9IHVzZVJlZihudWxsKVxyXG4gICAgdmFyIGZhYnJpYztcclxuXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGZhYnJpY1NlbGVjdCkge1xyXG4gICAgICAgICAgICBnZXRDdXN0b21TdHlsZSgpXHJcbiAgICAgICAgICAgIGZhYnJpY1NlbGVjdFJlZi5jdXJyZW50ID0gZmFicmljU2VsZWN0XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2ZhYnJpY1NlbGVjdF0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmdGYWJyaWModHJ1ZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluaSBuZXcgcG92XCIsIHBvdik7XHJcbiAgICAgICAgaWYgKCFmYWJyaWNTZWxlY3QgJiYgZmFicmljU2VsZWN0UmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgc2V0RmFicmljU2VsZWN0KGZhYnJpY1NlbGVjdFJlZi5jdXJyZW50KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGdldEN1c3RvbVN0eWxlKClcclxuICAgICAgICB9XHJcbiAgICB9LCBbcG92XSk7XHJcblxyXG4gICAgY29uc3QgdXBkYXRlUG92ID0gKG5ld1BvdikgPT4ge1xyXG4gICAgICAgIHNldFBvdihuZXdQb3YpO1xyXG4gICAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0Q3VzdG9tU3R5bGUoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2ZhYnJpYy9saXN0XCIpO1xyXG4gICAgICAgICAgICBjb25zdCB7IHN0YXR1cywgbWVzc2FnZSB9ID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICBpZiAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgIHNldEZhYnJpY0xpc3QoZGF0YSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEZhYnJpY0xpc3QoW10pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHNldEZhYnJpY0xpc3QoW10pXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmdGYWJyaWModHJ1ZSlcclxuICAgICAgICBnZXRDdXN0b21TdHlsZSgpXHJcbiAgICB9LCBbZmFicmljU2VsZWN0XSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGFTdHlsZTpcIiwgZGF0YVN0eWxlKVxyXG4gICAgfSxbZGF0YVN0eWxlXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0eWxlU2VsZWN0KTtcclxuICAgICAgICBjb25zdCBuZXdEYXRhU3R5bGUgPSB7IC4uLmRhdGFTdHlsZSB9XHJcbiAgICAgICAgc3dpdGNoIChzdHlsZVNlbGVjdD8udGl0bGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkNvbGxhclwiOlxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmNvbGxhci5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJTbGVldmVcIjpcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5zbGVldmUubmFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQm90dG9tXCI6XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuYm90dG9tLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkNoZXN0IFBvY2tldFwiOlxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnBvY2tldC5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDdWZmc1wiOlxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmN1ZmZzLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY3VmZnNCYWNrLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuc2xlZXZlLm5hbWUgPSBcIkxvbmdcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJQbGFja2V0XCI6XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUucGxhY2tldC5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAvLyBjYXNlIFwiUGxlYXRzXCI6XHJcbiAgICAgICAgICAgIC8vICAgICBuZXdEYXRhU3R5bGUucGxlYXRzLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRDdXN0b21TdHlsZSgpXHJcbiAgICB9LCBbc3R5bGVTZWxlY3RdKVxyXG4gICAgXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChjYXRlZ29yeSkge1xyXG4gICAgICAgICAgICBjYXNlICd2ZXN0cyc6XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0U3R5bGUoVmVzdExpc3RTdHlsZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdiYXRpa3MnOlxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdFN0eWxlKEJhdGlrTGlzdFN0eWxlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NoaXJ0cyc6XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0U3R5bGUoU2hpcnRMaXN0U3R5bGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAndHJvdXNlcnMnOlxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdFN0eWxlKFRyb3VzZXJMaXN0U3R5bGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYmxhemVyJzpcclxuICAgICAgICAgICAgICAgIHNldExpc3RTdHlsZShCbGF6ZXJMaXN0U3R5bGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LCBbY2F0ZWdvcnldKTtcclxuXHJcbiAgICBjb25zdCBnZXRDdXN0b21TdHlsZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhmYWJyaWNTZWxlY3QpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCBgL2FwaS9jdXN0b20vY3VzdG9tX3N0eWxlP2ZhYnJpYz0ke2ZhYnJpY1NlbGVjdC5faWR9JmNvbGxhcj0ke2RhdGFTdHlsZS5jb2xsYXIubmFtZX0mY3VmZnM9JHtkYXRhU3R5bGUuY3VmZnMubmFtZX0mc2xlZXZlPSR7ZGF0YVN0eWxlLnNsZWV2ZS5uYW1lfSZib3R0b209JHtkYXRhU3R5bGUuYm90dG9tLm5hbWV9JmNoZXN0cG9ja2V0PSR7ZGF0YVN0eWxlLnBvY2tldC5uYW1lfSZwbGFja2V0PSR7ZGF0YVN0eWxlLnBsYWNrZXQubmFtZX0mcG92PSR7cG92fWApO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBwbGFja2V0TmFtZSA9IFwiXCIsXHJcbiAgICAgICAgICAgIGlzVHVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmKGRhdGFTdHlsZS5wbGFja2V0Lm5hbWUuc3BsaXQoXCIgXCIpLmxlbmd0aCA+IDEpeyAvLyogQ2hlY2sgYXBha2FoIGlzaSBueWEgXCJTdGFuZGFyXCIgYXRhdSBzdWRhaCBsZW5na2FwIGRlbmdhbiBcIkJvZHkgVW50dWNrZWQgV2l0aCBTcXVhcmVcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2tldE5hbWUgPSBkYXRhU3R5bGUucGxhY2tldC5uYW1lO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwbGFja2V0TmFtZSA9IGRhdGFTdHlsZS5wbGFja2V0Lm5hbWUuY29uY2F0KFwiIEJvZHlcIiwgaXNUdWNrZWQgPyBcIlwiIDogXCJVbnR1Y2tlZFwiICxcIldpdGggU3F1YXJlXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciB1cmwgPSBgL2FwaS9jdXN0b20vY3VzdG9tX3N0eWxlP2ZhYnJpYz0ke2ZhYnJpY1NlbGVjdC5faWR9JmNvbGxhcj0ke2RhdGFTdHlsZS5jb2xsYXIubmFtZX0mY3VmZnM9JHtkYXRhU3R5bGUuY3VmZnMubmFtZX0mc2xlZXZlPSR7ZGF0YVN0eWxlLnNsZWV2ZS5uYW1lfSZib3R0b209JHtkYXRhU3R5bGUuYm90dG9tLm5hbWV9JmNoZXN0cG9ja2V0PSR7ZGF0YVN0eWxlLnBvY2tldC5uYW1lfSZwbGFja2V0PSR7ZGF0YVN0eWxlLnBsYWNrZXQubmFtZX0mcG92PSR7cG92fWA7XHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICAgICAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0RhdGFTdHlsZSA9IHsgLi4uZGF0YVN0eWxlIH1cclxuICAgICAgICAgICAgLy8gbmV3RGF0YVN0eWxlLmJvdHRvbS5uYW1lID0gZGF0YS5ib3R0b20ubmFtZVxyXG4gICAgICAgICAgICAvLyBuZXdEYXRhU3R5bGUuYm90dG9tLmltYWdlID0gZGF0YS5ib3R0b20uaW1hZ2VcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5jb2xsYXIubmFtZSA9IGRhdGEuc3R5bGVzLmNvbGxhcj8ubmFtZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5jb2xsYXIuaW1hZ2UgPSBkYXRhLnN0eWxlcy5jb2xsYXI/LmltYWdlIHx8IFwiXCJcclxuICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnNsZWV2ZS5uYW1lID0gZGF0YS5zdHlsZXMuc2xlZXZlPy5uYW1lIHx8IFwiXCJcclxuICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnNsZWV2ZS5pbWFnZSA9IGRhdGEuc3R5bGVzLnNsZWV2ZT8uaW1hZ2UgfHwgXCJcIlxyXG4gICAgICAgICAgICBuZXdEYXRhU3R5bGUucG9ja2V0Lm5hbWUgPSBkYXRhLnN0eWxlcy5jaGVzdHBvY2tldD8ubmFtZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wb2NrZXQuaW1hZ2UgPSBkYXRhLnN0eWxlcy5jaGVzdHBvY2tldD8uaW1hZ2UgfHwgXCJcIlxyXG4gICAgICAgICAgICBuZXdEYXRhU3R5bGUucGxhY2tldC5uYW1lID0gZGF0YS5zdHlsZXMucGxhY2tldD8ubmFtZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wbGFja2V0LmltYWdlID0gZGF0YS5zdHlsZXMucGxhY2tldD8uaW1hZ2UgfHwgXCJcIlxyXG4gICAgICAgICAgICBmYWJyaWM9IGZhYnJpY1NlbGVjdFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZmFicmljU2VsZWN0Ll9pZClcclxuICAgICAgICAgICAgc2V0RGF0YVN0eWxlKG5ld0RhdGFTdHlsZSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3RGF0YVN0eWxlKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgIH0sIDcwMCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nRmFicmljKGZhbHNlKVxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBvcGVuU3R5bGUsXHJcbiAgICAgICAgbGlzdFN0eWxlLFxyXG4gICAgICAgIGZhYnJpY0xpc3QsXHJcbiAgICAgICAgc3R5bGVTZWxlY3QsXHJcbiAgICAgICAgZmFicmljU2VsZWN0LFxyXG4gICAgICAgIGRhdGFTdHlsZSxcclxuICAgICAgICBpc0xvYWRpbmcsXHJcbiAgICAgICAgaXNMb2FkaW5nRmFicmljLFxyXG4gICAgICAgIHBvdixcclxuICAgICAgICB1cGRhdGVQb3YsXHJcbiAgICAgICAgc2V0UG92LFxyXG4gICAgICAgIHNldERhdGFTdHlsZSxcclxuICAgICAgICBzZXRJc0xvYWRpbmcsXHJcbiAgICAgICAgc2V0T3BlblN0eWxlLFxyXG4gICAgICAgIHNldEZhYnJpY0xpc3QsXHJcbiAgICAgICAgc2V0U3R5bGVTZWxlY3QsXHJcbiAgICAgICAgc2V0RmFicmljU2VsZWN0LFxyXG4gICAgICAgIHNldElzTG9hZGluZ0ZhYnJpYyxcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCB1c2VIb29rQ3VzdG9tIl0sInNvdXJjZVJvb3QiOiIifQ==