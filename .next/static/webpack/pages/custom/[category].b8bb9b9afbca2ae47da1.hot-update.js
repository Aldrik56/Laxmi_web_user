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
    "name": "One Button Cut"
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

  var updatePov = function updatePov(newPov, newFabric) {
    setPov(newPov);
    setFabricSelect(newFabric);
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
              console.log(newDataStyle); // if(fabricSelect._id==="6705fffa8f14879009126d1d"){

              newDataStyle.pleats.image = "/img/pleats/red/Pleats Box Tucked.svg";
              newDataStyle.collarBack.image = "/img/pleats/red/Collar Back.svg";

              if (dataStyle.placket.name === "French") {
                newDataStyle.placketFold.image = "/img/folded/red/pleats/Placket French Body Folded.svg";
              } else if (dataStyle.placket.name === "Hidden") {
                newDataStyle.placketFold.image = "/img/folded/red/pleats/Placket Hidden Body Folded.svg";
              } else if (dataStyle.placket.name === "Standard") {
                newDataStyle.placketFold.image = "/img/folded/red/pleats/Placket Standard Body Folded.svg";
              }

              if (dataStyle.collar.name === "Stand Up") {
                newDataStyle.collarFold.image = "/img/folded/red/collar/Collar Stand Up Placket French Folded.svg";
              } else if (dataStyle.collar.name === "Button Down") {
                newDataStyle.collarFold.image = "/img/folded/red/collar/Collar Button Down Placket French Folded.svg";
              } else if (dataStyle.collar.name === "Cutaway") {
                newDataStyle.collarFold.image = "/img/folded/red/collar/Collar Cutaway Placket French Folded.svg";
              } else if (dataStyle.collar.name === "Kent Collar") {
                newDataStyle.collarFold.image = "/img/folded/red/collar/Collar Kent Collar Placket French Folded.svg";
              } else if (dataStyle.collar.name === "New Kent") {
                newDataStyle.collarFold.image = "/img/folded/red/collar/Collar New Kent Placket French Folded.svg";
              } else if (dataStyle.collar.name === "Pinned") {
                newDataStyle.collarFold.image = "/img/folded/red/collar/Collar Pinned Placket French Folded.svg";
              } else if (dataStyle.collar.name === "Rounded") {
                newDataStyle.collarFold.image = "/img/folded/red/collar/Collar Rounded Placket French Folded.svg";
              } else if (dataStyle.collar.name === "Wing") {
                newDataStyle.collarFold.image = "/img/folded/red/collar/Collar Wing Placket French Folded.svg";
              } else if (dataStyle.collar.name === "Long") {
                newDataStyle.collarFold.image = "/img/folded/red/collar/Collar Long Placket French Folded.svg";
              } else if (dataStyle.collar.name === "Short Classic") {}

              _context3.next = 38;
              break;

            case 35:
              _context3.prev = 35;
              _context3.t0 = _context3["catch"](6);
              console.log(_context3.t0);

            case 38:
              _context3.prev = 38;
              setTimeout(function () {
                setIsLoading(false);
              }, 700);
              setTimeout(function () {
                setIsLoadingFabric(false);
              }, 1000);
              return _context3.finish(38);

            case 42:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[6, 35, 38, 42]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9jdXN0b20vaG9va0N1c3RvbS5qcyJdLCJuYW1lcyI6WyJpbml0U3R5bGUiLCJ1c2VIb29rQ3VzdG9tIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJmYWJyaWNMaXN0Iiwic2V0RmFicmljTGlzdCIsImZhYnJpY1NlbGVjdCIsInNldEZhYnJpY1NlbGVjdCIsImxpc3RTdHlsZSIsInNldExpc3RTdHlsZSIsIm9wZW5TdHlsZSIsInNldE9wZW5TdHlsZSIsInN0eWxlU2VsZWN0Iiwic2V0U3R5bGVTZWxlY3QiLCJkYXRhU3R5bGUiLCJzZXREYXRhU3R5bGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0xvYWRpbmdGYWJyaWMiLCJzZXRJc0xvYWRpbmdGYWJyaWMiLCJjYXRlZ29yeSIsInF1ZXJ5IiwicG92Iiwic2V0UG92IiwiZmFicmljU2VsZWN0UmVmIiwidXNlUmVmIiwiZmFicmljIiwidXNlRWZmZWN0IiwiZ2V0Q3VzdG9tU3R5bGUiLCJjdXJyZW50IiwiY29uc29sZSIsImxvZyIsInVwZGF0ZVBvdiIsIm5ld1BvdiIsIm5ld0ZhYnJpYyIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwic3RhdHVzIiwibWVzc2FnZSIsIm5ld0RhdGFTdHlsZSIsInRpdGxlIiwiY29sbGFyIiwibmFtZSIsInNsZWV2ZSIsImJvdHRvbSIsInBvY2tldCIsImN1ZmZzIiwiY3VmZnNCYWNrIiwicGxhY2tldCIsIlZlc3RMaXN0U3R5bGUiLCJCYXRpa0xpc3RTdHlsZSIsIlNoaXJ0TGlzdFN0eWxlIiwiVHJvdXNlckxpc3RTdHlsZSIsIkJsYXplckxpc3RTdHlsZSIsImN1cnJlbnRGYWJyaWNTZWxlY3QiLCJwbGFja2V0TmFtZSIsImlzVHVja2VkIiwic3BsaXQiLCJsZW5ndGgiLCJjb25jYXQiLCJ1cmwiLCJfaWQiLCJzdHlsZXMiLCJpbWFnZSIsImNoZXN0cG9ja2V0IiwicGxlYXRzIiwiY29sbGFyQmFjayIsInBsYWNrZXRGb2xkIiwiY29sbGFyRm9sZCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBUUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2QsWUFBVTtBQUNOLGFBQVMsRUFESDtBQUVOLFlBQVE7QUFGRixHQURJO0FBS2QsWUFBVTtBQUNOLGFBQVMsRUFESDtBQUVOLFlBQVE7QUFGRixHQUxJO0FBU2QsZ0JBQWM7QUFDVixhQUFTLGlDQURDO0FBRVYsWUFBUTtBQUZFLEdBVEE7QUFhZCxZQUFVO0FBQ04sYUFBUyxFQURIO0FBRU4sWUFBUTtBQUZGLEdBYkk7QUFpQmQsV0FBUztBQUNMLGFBQVMsRUFESjtBQUVMLFlBQVE7QUFGSCxHQWpCSztBQXFCZCxlQUFhO0FBQ1QsYUFBUyx1REFEQTtBQUVULFlBQVE7QUFGQyxHQXJCQztBQXlCZCxZQUFVO0FBQ04sYUFBUyxFQURIO0FBRU4sWUFBUTtBQUZGLEdBekJJO0FBNkJkLGFBQVc7QUFDUCxhQUFTLEVBREY7QUFFUCxZQUFRO0FBRkQsR0E3Qkc7QUFpQ2QsWUFBVTtBQUNOLGFBQVMsdUNBREg7QUFFTixZQUFRO0FBRkYsR0FqQ0k7QUFxQ2QsZ0JBQWE7QUFDVCxhQUFRO0FBREMsR0FyQ0M7QUF3Q2QsZUFBWTtBQUNSLGFBQVE7QUFEQSxHQXhDRTtBQTJDZCxnQkFBYTtBQUNULGFBQVEsRUFEQyxDQUVUOztBQUZTLEdBM0NDO0FBK0NkLGlCQUFjO0FBQ1YsYUFBUTtBQURFO0FBL0NBLENBQWxCOztBQW9EQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFDeEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEd0Isa0JBRVlDLHNEQUFRLENBQUMsRUFBRCxDQUZwQjtBQUFBLE1BRWpCQyxVQUZpQjtBQUFBLE1BRUxDLGFBRks7O0FBQUEsbUJBR2dCRixzREFBUSxDQUFDLElBQUQs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QUEsb0JBQWRTLGNBQWM7QUFBQTtBQUFBO0FBQUEsS0FBcEI7O0FBMEZBLFNBQU87QUFDSGxCLGFBQVMsRUFBVEEsU0FERztBQUVIRixhQUFTLEVBQVRBLFNBRkc7QUFHSEosY0FBVSxFQUFWQSxVQUhHO0FBSUhRLGVBQVcsRUFBWEEsV0FKRztBQUtITixnQkFBWSxFQUFaQSxZQUxHO0FBTUhRLGFBQVMsRUFBVEEsU0FORztBQU9IRSxhQUFTLEVBQVRBLFNBUEc7QUFRSEUsbUJBQWUsRUFBZkEsZUFSRztBQVNISSxPQUFHLEVBQUhBLEdBVEc7QUFVSFUsYUFBUyxFQUFUQSxTQVZHO0FBV0hULFVBQU0sRUFBTkEsTUFYRztBQVlIUixnQkFBWSxFQUFaQSxZQVpHO0FBYUhFLGdCQUFZLEVBQVpBLFlBYkc7QUFjSE4sZ0JBQVksRUFBWkEsWUFkRztBQWVITixpQkFBYSxFQUFiQSxhQWZHO0FBZ0JIUSxrQkFBYyxFQUFkQSxjQWhCRztBQWlCSE4sbUJBQWUsRUFBZkEsZUFqQkc7QUFrQkhZLHNCQUFrQixFQUFsQkE7QUFsQkcsR0FBUDtBQW9CSCxDQXJPRDs7R0FBTW5CLGE7VUFDYUUscUQ7OztBQXFPSkYsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3VzdG9tL1tjYXRlZ29yeV0uYjhiYjliOWFmYmNhMmFlNDdkYTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuLy8gaW1wb3J0IGZyZW5jaFBsYWNrZXQgZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9pbWcvcGxhY2tldC9QbGFja2V0IEZyZW5jaC5zdmdcIjtcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSx1c2VSZWYgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge1xyXG4gICAgQmxhemVyTGlzdFN0eWxlLFxyXG4gICAgU2hpcnRMaXN0U3R5bGUsXHJcbiAgICBUcm91c2VyTGlzdFN0eWxlLFxyXG4gICAgVmVzdExpc3RTdHlsZSxcclxuICAgIEJhdGlrTGlzdFN0eWxlXHJcbn0gZnJvbSAnLi9zaWRlYmFyL2RhdGFTaWRlYmFyJ1xyXG5cclxuY29uc3QgaW5pdFN0eWxlID0ge1xyXG4gICAgXCJib3R0b21cIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTcXVhcmVcIlxyXG4gICAgfSxcclxuICAgIFwiY29sbGFyXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU3RhbmQgVXBcIlxyXG4gICAgfSxcclxuICAgIFwiY29sbGFyQmFja1wiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIi9pbWcvcGxlYXRzL3JlZC9Db2xsYXIgQmFjay5zdmdcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTdGFuZCBVcFwiXHJcbiAgICB9LFxyXG4gICAgXCJzbGVldmVcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTaG9ydFwiXHJcbiAgICB9LFxyXG4gICAgXCJjdWZmc1wiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIk9uZSBCdXR0b24gQ3V0XCJcclxuICAgIH0sXHJcbiAgICBcImN1ZmZzQmFja1wiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIi9pbWcvc2xlZXZlX2JhY2svQ3VmZnMgRG91YmxlIFJvdW5kZWQgRnJlbmNoIEJhY2suc3ZnXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU3F1YXJlIEZyZW5jaFwiXHJcbiAgICB9LFxyXG4gICAgXCJwb2NrZXRcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJXaXRoIEZsYXBcIlxyXG4gICAgfSxcclxuICAgIFwicGxhY2tldFwiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlN0YW5kYXJkIEJvZHkgVW50dWNrZWQgV2l0aCBTcXVhcmVcIlxyXG4gICAgfSxcclxuICAgIFwicGxlYXRzXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiL2ltZy9wbGVhdHMvcmVkL1BsZWF0cyBCb3ggVHVja2VkLnN2Z1wiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlBsZWF0c1wiXHJcbiAgICB9LFxyXG4gICAgXCJjb2xsYXJGb2xkXCI6e1xyXG4gICAgICAgIFwiaW1hZ2VcIjpcIlwiXHJcbiAgICB9LFxyXG4gICAgXCJjdWZmc0ZvbGRcIjp7XHJcbiAgICAgICAgXCJpbWFnZVwiOlwiXCJcclxuICAgIH0sXHJcbiAgICBcInBvY2tldEZvbGRcIjp7XHJcbiAgICAgICAgXCJpbWFnZVwiOlwiXCJcclxuICAgICAgICAvLyBcImltYWdlXCI6XCIvaW1nL3BsZWF0cy9yZWQvQ2hlc3QgUG9ja2V0IEZvbGRlZC5zdmdcIlxyXG4gICAgfSxcclxuICAgIFwicGxhY2tldEZvbGRcIjp7XHJcbiAgICAgICAgXCJpbWFnZVwiOlwiL2ltZy9mb2xkZWQvcmVkL3BsZWF0cy9QbGFja2V0IFN0YW5kYXJkIEJvZHkgRm9sZGVkLnN2Z1wiXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHVzZUhvb2tDdXN0b20gPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgW2ZhYnJpY0xpc3QsIHNldEZhYnJpY0xpc3RdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbZmFicmljU2VsZWN0LCBzZXRGYWJyaWNTZWxlY3RdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtsaXN0U3R5bGUsIHNldExpc3RTdHlsZV0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtvcGVuU3R5bGUsIHNldE9wZW5TdHlsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtzdHlsZVNlbGVjdCwgc2V0U3R5bGVTZWxlY3RdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtkYXRhU3R5bGUsIHNldERhdGFTdHlsZV0gPSB1c2VTdGF0ZShpbml0U3R5bGUpXHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaXNMb2FkaW5nRmFicmljLCBzZXRJc0xvYWRpbmdGYWJyaWNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCB7IGNhdGVnb3J5IH0gPSByb3V0ZXIucXVlcnlcclxuICAgIGNvbnN0IFtwb3YsIHNldFBvdl0gPSB1c2VTdGF0ZShcIkZST05UXCIpXHJcbiAgICBjb25zdCBmYWJyaWNTZWxlY3RSZWYgPSB1c2VSZWYobnVsbClcclxuICAgIHZhciBmYWJyaWM7XHJcblxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChmYWJyaWNTZWxlY3QpIHtcclxuICAgICAgICAgICAgZ2V0Q3VzdG9tU3R5bGUoKVxyXG4gICAgICAgICAgICBmYWJyaWNTZWxlY3RSZWYuY3VycmVudCA9IGZhYnJpY1NlbGVjdFxyXG4gICAgICAgIH1cclxuICAgIH0sIFtmYWJyaWNTZWxlY3RdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nRmFicmljKHRydWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbmkgbmV3IHBvdlwiLCBwb3YpO1xyXG4gICAgICAgIGlmICghZmFicmljU2VsZWN0ICYmIGZhYnJpY1NlbGVjdFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHNldEZhYnJpY1NlbGVjdChmYWJyaWNTZWxlY3RSZWYuY3VycmVudClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnZXRDdXN0b21TdHlsZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Bvdl0pO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVBvdiA9IChuZXdQb3YsIG5ld0ZhYnJpYykgPT4ge1xyXG4gICAgICAgIHNldFBvdihuZXdQb3YpO1xyXG4gICAgICAgIHNldEZhYnJpY1NlbGVjdChuZXdGYWJyaWMpXHJcbiAgICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRDdXN0b21TdHlsZSgpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvZmFicmljL2xpc3RcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgc3RhdHVzLCBtZXNzYWdlIH0gPSByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgIGlmIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgc2V0RmFicmljTGlzdChkYXRhKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0RmFicmljTGlzdChbXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgc2V0RmFicmljTGlzdChbXSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZ0ZhYnJpYyh0cnVlKVxyXG4gICAgICAgIGdldEN1c3RvbVN0eWxlKClcclxuICAgIH0sIFtmYWJyaWNTZWxlY3RdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YVN0eWxlOlwiLCBkYXRhU3R5bGUpXHJcbiAgICB9LFtkYXRhU3R5bGVdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coc3R5bGVTZWxlY3QpO1xyXG4gICAgICAgIGNvbnN0IG5ld0RhdGFTdHlsZSA9IHsgLi4uZGF0YVN0eWxlIH1cclxuICAgICAgICBzd2l0Y2ggKHN0eWxlU2VsZWN0Py50aXRsZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQ29sbGFyXCI6XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY29sbGFyLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlNsZWV2ZVwiOlxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnNsZWV2ZS5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJCb3R0b21cIjpcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5ib3R0b20ubmFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQ2hlc3QgUG9ja2V0XCI6XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUucG9ja2V0Lm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkN1ZmZzXCI6XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY3VmZnMubmFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5jdWZmc0JhY2submFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5zbGVldmUubmFtZSA9IFwiTG9uZ1wiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlBsYWNrZXRcIjpcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wbGFja2V0Lm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgIC8vIGNhc2UgXCJQbGVhdHNcIjpcclxuICAgICAgICAgICAgLy8gICAgIG5ld0RhdGFTdHlsZS5wbGVhdHMubmFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldEN1c3RvbVN0eWxlKClcclxuICAgIH0sIFtzdHlsZVNlbGVjdF0pXHJcbiAgICBcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Zlc3RzJzpcclxuICAgICAgICAgICAgICAgIHNldExpc3RTdHlsZShWZXN0TGlzdFN0eWxlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JhdGlrcyc6XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0U3R5bGUoQmF0aWtMaXN0U3R5bGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc2hpcnRzJzpcclxuICAgICAgICAgICAgICAgIHNldExpc3RTdHlsZShTaGlydExpc3RTdHlsZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd0cm91c2Vycyc6XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0U3R5bGUoVHJvdXNlckxpc3RTdHlsZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdibGF6ZXInOlxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdFN0eWxlKEJsYXplckxpc3RTdHlsZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtjYXRlZ29yeV0pO1xyXG5cclxuICAgIGNvbnN0IGdldEN1c3RvbVN0eWxlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRGYWJyaWNTZWxlY3QgPSBmYWJyaWNTZWxlY3QgfHwgZmFicmljU2VsZWN0UmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudEZhYnJpY1NlbGVjdCk7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50RmFicmljU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gZmFicmljIHNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmdGYWJyaWMoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBwbGFja2V0TmFtZSA9IFwiXCIsXHJcbiAgICAgICAgICAgIGlzVHVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmKGRhdGFTdHlsZS5wbGFja2V0Lm5hbWUuc3BsaXQoXCIgXCIpLmxlbmd0aCA+IDEpeyAvLyogQ2hlY2sgYXBha2FoIGlzaSBueWEgXCJTdGFuZGFyXCIgYXRhdSBzdWRhaCBsZW5na2FwIGRlbmdhbiBcIkJvZHkgVW50dWNrZWQgV2l0aCBTcXVhcmVcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2tldE5hbWUgPSBkYXRhU3R5bGUucGxhY2tldC5uYW1lO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwbGFja2V0TmFtZSA9IGRhdGFTdHlsZS5wbGFja2V0Lm5hbWUuY29uY2F0KFwiIEJvZHlcIiwgaXNUdWNrZWQgPyBcIlwiIDogXCJVbnR1Y2tlZFwiICxcIldpdGggU3F1YXJlXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciB1cmwgPSBgL2FwaS9jdXN0b20vY3VzdG9tX3N0eWxlP2ZhYnJpYz0ke2N1cnJlbnRGYWJyaWNTZWxlY3QuX2lkfSZjb2xsYXI9JHtkYXRhU3R5bGUuY29sbGFyLm5hbWV9JmN1ZmZzPSR7ZGF0YVN0eWxlLmN1ZmZzLm5hbWV9JnNsZWV2ZT0ke2RhdGFTdHlsZS5zbGVldmUubmFtZX0mYm90dG9tPSR7ZGF0YVN0eWxlLmJvdHRvbS5uYW1lfSZjaGVzdHBvY2tldD0ke2RhdGFTdHlsZS5wb2NrZXQubmFtZX0mcGxhY2tldD0ke2RhdGFTdHlsZS5wbGFja2V0Lm5hbWV9JnBvdj0ke3Bvdn1gO1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXJsKVxyXG4gICAgICAgICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICBjb25zdCBuZXdEYXRhU3R5bGUgPSB7IC4uLmRhdGFTdHlsZSB9XHJcbiAgICAgICAgICAgIC8vIG5ld0RhdGFTdHlsZS5ib3R0b20ubmFtZSA9IGRhdGEuYm90dG9tLm5hbWVcclxuICAgICAgICAgICAgLy8gbmV3RGF0YVN0eWxlLmJvdHRvbS5pbWFnZSA9IGRhdGEuYm90dG9tLmltYWdlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBuZXdEYXRhU3R5bGUuY29sbGFyLm5hbWUgPSBkYXRhLnN0eWxlcy5jb2xsYXI/Lm5hbWUgfHwgXCJcIlxyXG4gICAgICAgICAgICBuZXdEYXRhU3R5bGUuY29sbGFyLmltYWdlID0gZGF0YS5zdHlsZXMuY29sbGFyPy5pbWFnZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5zbGVldmUubmFtZSA9IGRhdGEuc3R5bGVzLnNsZWV2ZT8ubmFtZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5zbGVldmUuaW1hZ2UgPSBkYXRhLnN0eWxlcy5zbGVldmU/LmltYWdlIHx8IFwiXCJcclxuICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnBvY2tldC5uYW1lID0gZGF0YS5zdHlsZXMuY2hlc3Rwb2NrZXQ/Lm5hbWUgfHwgXCJcIlxyXG4gICAgICAgICAgICBuZXdEYXRhU3R5bGUucG9ja2V0LmltYWdlID0gZGF0YS5zdHlsZXMuY2hlc3Rwb2NrZXQ/LmltYWdlIHx8IFwiXCJcclxuICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnBsYWNrZXQubmFtZSA9IGRhdGEuc3R5bGVzLnBsYWNrZXQ/Lm5hbWUgfHwgXCJcIlxyXG4gICAgICAgICAgICBuZXdEYXRhU3R5bGUucGxhY2tldC5pbWFnZSA9IGRhdGEuc3R5bGVzLnBsYWNrZXQ/LmltYWdlIHx8IFwiXCJcclxuICAgICAgICAgICAgZmFicmljPSBmYWJyaWNTZWxlY3RcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZhYnJpY1NlbGVjdC5faWQpXHJcbiAgICAgICAgICAgIHNldERhdGFTdHlsZShuZXdEYXRhU3R5bGUpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld0RhdGFTdHlsZSlcclxuXHJcbiAgICAgICAgICAgIC8vIGlmKGZhYnJpY1NlbGVjdC5faWQ9PT1cIjY3MDVmZmZhOGYxNDg3OTAwOTEyNmQxZFwiKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnBsZWF0cy5pbWFnZT1cIi9pbWcvcGxlYXRzL3JlZC9QbGVhdHMgQm94IFR1Y2tlZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmNvbGxhckJhY2suaW1hZ2U9XCIvaW1nL3BsZWF0cy9yZWQvQ29sbGFyIEJhY2suc3ZnXCJcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKGRhdGFTdHlsZS5wbGFja2V0Lm5hbWU9PT1cIkZyZW5jaFwiKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUucGxhY2tldEZvbGQuaW1hZ2U9XCIvaW1nL2ZvbGRlZC9yZWQvcGxlYXRzL1BsYWNrZXQgRnJlbmNoIEJvZHkgRm9sZGVkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihkYXRhU3R5bGUucGxhY2tldC5uYW1lPT09XCJIaWRkZW5cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnBsYWNrZXRGb2xkLmltYWdlPVwiL2ltZy9mb2xkZWQvcmVkL3BsZWF0cy9QbGFja2V0IEhpZGRlbiBCb2R5IEZvbGRlZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoZGF0YVN0eWxlLnBsYWNrZXQubmFtZT09PVwiU3RhbmRhcmRcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnBsYWNrZXRGb2xkLmltYWdlPVwiL2ltZy9mb2xkZWQvcmVkL3BsZWF0cy9QbGFja2V0IFN0YW5kYXJkIEJvZHkgRm9sZGVkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoZGF0YVN0eWxlLmNvbGxhci5uYW1lPT09XCJTdGFuZCBVcFwiKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY29sbGFyRm9sZC5pbWFnZT1cIi9pbWcvZm9sZGVkL3JlZC9jb2xsYXIvQ29sbGFyIFN0YW5kIFVwIFBsYWNrZXQgRnJlbmNoIEZvbGRlZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoZGF0YVN0eWxlLmNvbGxhci5uYW1lPT09XCJCdXR0b24gRG93blwiKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY29sbGFyRm9sZC5pbWFnZT1cIi9pbWcvZm9sZGVkL3JlZC9jb2xsYXIvQ29sbGFyIEJ1dHRvbiBEb3duIFBsYWNrZXQgRnJlbmNoIEZvbGRlZC5zdmdcIlxyXG5cclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGRhdGFTdHlsZS5jb2xsYXIubmFtZT09PVwiQ3V0YXdheVwiKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY29sbGFyRm9sZC5pbWFnZT1cIi9pbWcvZm9sZGVkL3JlZC9jb2xsYXIvQ29sbGFyIEN1dGF3YXkgUGxhY2tldCBGcmVuY2ggRm9sZGVkLnN2Z1wiXHJcblxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoZGF0YVN0eWxlLmNvbGxhci5uYW1lPT09XCJLZW50IENvbGxhclwiKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY29sbGFyRm9sZC5pbWFnZT1cIi9pbWcvZm9sZGVkL3JlZC9jb2xsYXIvQ29sbGFyIEtlbnQgQ29sbGFyIFBsYWNrZXQgRnJlbmNoIEZvbGRlZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoZGF0YVN0eWxlLmNvbGxhci5uYW1lPT09XCJOZXcgS2VudFwiKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY29sbGFyRm9sZC5pbWFnZT1cIi9pbWcvZm9sZGVkL3JlZC9jb2xsYXIvQ29sbGFyIE5ldyBLZW50IFBsYWNrZXQgRnJlbmNoIEZvbGRlZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoZGF0YVN0eWxlLmNvbGxhci5uYW1lPT09XCJQaW5uZWRcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmNvbGxhckZvbGQuaW1hZ2U9XCIvaW1nL2ZvbGRlZC9yZWQvY29sbGFyL0NvbGxhciBQaW5uZWQgUGxhY2tldCBGcmVuY2ggRm9sZGVkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihkYXRhU3R5bGUuY29sbGFyLm5hbWU9PT1cIlJvdW5kZWRcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmNvbGxhckZvbGQuaW1hZ2U9XCIvaW1nL2ZvbGRlZC9yZWQvY29sbGFyL0NvbGxhciBSb3VuZGVkIFBsYWNrZXQgRnJlbmNoIEZvbGRlZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoZGF0YVN0eWxlLmNvbGxhci5uYW1lPT09XCJXaW5nXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5jb2xsYXJGb2xkLmltYWdlPVwiL2ltZy9mb2xkZWQvcmVkL2NvbGxhci9Db2xsYXIgV2luZyBQbGFja2V0IEZyZW5jaCBGb2xkZWQuc3ZnXCJcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGRhdGFTdHlsZS5jb2xsYXIubmFtZT09PVwiTG9uZ1wiKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY29sbGFyRm9sZC5pbWFnZT1cIi9pbWcvZm9sZGVkL3JlZC9jb2xsYXIvQ29sbGFyIExvbmcgUGxhY2tldCBGcmVuY2ggRm9sZGVkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihkYXRhU3R5bGUuY29sbGFyLm5hbWU9PT1cIlNob3J0IENsYXNzaWNcIil7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICB9LCA3MDApO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldElzTG9hZGluZ0ZhYnJpYyhmYWxzZSlcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgb3BlblN0eWxlLFxyXG4gICAgICAgIGxpc3RTdHlsZSxcclxuICAgICAgICBmYWJyaWNMaXN0LFxyXG4gICAgICAgIHN0eWxlU2VsZWN0LFxyXG4gICAgICAgIGZhYnJpY1NlbGVjdCxcclxuICAgICAgICBkYXRhU3R5bGUsXHJcbiAgICAgICAgaXNMb2FkaW5nLFxyXG4gICAgICAgIGlzTG9hZGluZ0ZhYnJpYyxcclxuICAgICAgICBwb3YsXHJcbiAgICAgICAgdXBkYXRlUG92LFxyXG4gICAgICAgIHNldFBvdixcclxuICAgICAgICBzZXREYXRhU3R5bGUsXHJcbiAgICAgICAgc2V0SXNMb2FkaW5nLFxyXG4gICAgICAgIHNldE9wZW5TdHlsZSxcclxuICAgICAgICBzZXRGYWJyaWNMaXN0LFxyXG4gICAgICAgIHNldFN0eWxlU2VsZWN0LFxyXG4gICAgICAgIHNldEZhYnJpY1NlbGVjdCxcclxuICAgICAgICBzZXRJc0xvYWRpbmdGYWJyaWMsXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgdXNlSG9va0N1c3RvbSJdLCJzb3VyY2VSb290IjoiIn0=