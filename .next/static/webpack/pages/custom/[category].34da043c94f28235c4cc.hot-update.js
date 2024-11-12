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
              newDataStyle.collarBack.image = "/img/pleats/red/Collar Back.svg"; // folded red

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

              if (dataStyle.placket.name === "French") {
                newDataStyle.placketFold.image = "/img/folded/red/pleats/Placket French Body Folded.svg";
              } else if (dataStyle.placket.name === "Hidden") {
                newDataStyle.placketFold.image = "/img/folded/red/pleats/Placket Hidden Body Folded.svg";
              } else if (dataStyle.placket.name === "Standard") {
                newDataStyle.placketFold.image = "/img/folded/red/pleats/Placket Standard Body Folded.svg";
              }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9jdXN0b20vaG9va0N1c3RvbS5qcyJdLCJuYW1lcyI6WyJpbml0U3R5bGUiLCJ1c2VIb29rQ3VzdG9tIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJmYWJyaWNMaXN0Iiwic2V0RmFicmljTGlzdCIsImZhYnJpY1NlbGVjdCIsInNldEZhYnJpY1NlbGVjdCIsImxpc3RTdHlsZSIsInNldExpc3RTdHlsZSIsIm9wZW5TdHlsZSIsInNldE9wZW5TdHlsZSIsInN0eWxlU2VsZWN0Iiwic2V0U3R5bGVTZWxlY3QiLCJkYXRhU3R5bGUiLCJzZXREYXRhU3R5bGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0xvYWRpbmdGYWJyaWMiLCJzZXRJc0xvYWRpbmdGYWJyaWMiLCJjYXRlZ29yeSIsInF1ZXJ5IiwicG92Iiwic2V0UG92IiwiZmFicmljU2VsZWN0UmVmIiwidXNlUmVmIiwiZmFicmljIiwidXNlRWZmZWN0IiwiZ2V0Q3VzdG9tU3R5bGUiLCJjdXJyZW50IiwiY29uc29sZSIsImxvZyIsInVwZGF0ZVBvdiIsIm5ld1BvdiIsIm5ld0ZhYnJpYyIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwic3RhdHVzIiwibWVzc2FnZSIsIm5ld0RhdGFTdHlsZSIsInRpdGxlIiwiY29sbGFyIiwibmFtZSIsInNsZWV2ZSIsImJvdHRvbSIsInBvY2tldCIsImN1ZmZzIiwiY3VmZnNCYWNrIiwicGxhY2tldCIsIlZlc3RMaXN0U3R5bGUiLCJCYXRpa0xpc3RTdHlsZSIsIlNoaXJ0TGlzdFN0eWxlIiwiVHJvdXNlckxpc3RTdHlsZSIsIkJsYXplckxpc3RTdHlsZSIsImN1cnJlbnRGYWJyaWNTZWxlY3QiLCJwbGFja2V0TmFtZSIsImlzVHVja2VkIiwic3BsaXQiLCJsZW5ndGgiLCJjb25jYXQiLCJ1cmwiLCJfaWQiLCJzdHlsZXMiLCJpbWFnZSIsImNoZXN0cG9ja2V0IiwicGxlYXRzIiwiY29sbGFyQmFjayIsImNvbGxhckZvbGQiLCJwbGFja2V0Rm9sZCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBUUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2QsWUFBVTtBQUNOLGFBQVMsRUFESDtBQUVOLFlBQVE7QUFGRixHQURJO0FBS2QsWUFBVTtBQUNOLGFBQVMsRUFESDtBQUVOLFlBQVE7QUFGRixHQUxJO0FBU2QsZ0JBQWM7QUFDVixhQUFTLGlDQURDO0FBRVYsWUFBUTtBQUZFLEdBVEE7QUFhZCxZQUFVO0FBQ04sYUFBUyxFQURIO0FBRU4sWUFBUTtBQUZGLEdBYkk7QUFpQmQsV0FBUztBQUNMLGFBQVMsRUFESjtBQUVMLFlBQVE7QUFGSCxHQWpCSztBQXFCZCxlQUFhO0FBQ1QsYUFBUyx1REFEQTtBQUVULFlBQVE7QUFGQyxHQXJCQztBQXlCZCxZQUFVO0FBQ04sYUFBUyxFQURIO0FBRU4sWUFBUTtBQUZGLEdBekJJO0FBNkJkLGFBQVc7QUFDUCxhQUFTLEVBREY7QUFFUCxZQUFRO0FBRkQsR0E3Qkc7QUFpQ2QsWUFBVTtBQUNOLGFBQVMsdUNBREg7QUFFTixZQUFRO0FBRkYsR0FqQ0k7QUFxQ2QsZ0JBQWE7QUFDVCxhQUFRO0FBREMsR0FyQ0M7QUF3Q2QsZUFBWTtBQUNSLGFBQVE7QUFEQSxHQXhDRTtBQTJDZCxnQkFBYTtBQUNULGFBQVEsRUFEQyxDQUVUOztBQUZTLEdBM0NDO0FBK0NkLGlCQUFjO0FBQ1YsYUFBUTtBQURFO0FBL0NBLENBQWxCOztBQW9EQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFDeEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEd0Isa0JBRVlDLHNEQUFRLENBQUMsRUFBRCxDQUZwQjtBQUFBLE1BRWpCQyxVQUZpQjtBQUFBLE1BRUxDLGFBRks7O0FBQUEsbUJBR2dCRixzREFBUSxDQUFDLElBQUQs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QUFBQSxLQUFIOztBQUFBLG9CQUFkUyxjQUFjO0FBQUE7QUFBQTtBQUFBLEtBQXBCOztBQTRGQSxTQUFPO0FBQ0hsQixhQUFTLEVBQVRBLFNBREc7QUFFSEYsYUFBUyxFQUFUQSxTQUZHO0FBR0hKLGNBQVUsRUFBVkEsVUFIRztBQUlIUSxlQUFXLEVBQVhBLFdBSkc7QUFLSE4sZ0JBQVksRUFBWkEsWUFMRztBQU1IUSxhQUFTLEVBQVRBLFNBTkc7QUFPSEUsYUFBUyxFQUFUQSxTQVBHO0FBUUhFLG1CQUFlLEVBQWZBLGVBUkc7QUFTSEksT0FBRyxFQUFIQSxHQVRHO0FBVUhVLGFBQVMsRUFBVEEsU0FWRztBQVdIVCxVQUFNLEVBQU5BLE1BWEc7QUFZSFIsZ0JBQVksRUFBWkEsWUFaRztBQWFIRSxnQkFBWSxFQUFaQSxZQWJHO0FBY0hOLGdCQUFZLEVBQVpBLFlBZEc7QUFlSE4saUJBQWEsRUFBYkEsYUFmRztBQWdCSFEsa0JBQWMsRUFBZEEsY0FoQkc7QUFpQkhOLG1CQUFlLEVBQWZBLGVBakJHO0FBa0JIWSxzQkFBa0IsRUFBbEJBO0FBbEJHLEdBQVA7QUFvQkgsQ0F2T0Q7O0dBQU1uQixhO1VBQ2FFLHFEOzs7QUF1T0pGLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2N1c3RvbS9bY2F0ZWdvcnldLjM0ZGEwNDNjOTRmMjgyMzVjNGNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbi8vIGltcG9ydCBmcmVuY2hQbGFja2V0IGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvaW1nL3BsYWNrZXQvUGxhY2tldCBGcmVuY2guc3ZnXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUsdXNlUmVmIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHtcclxuICAgIEJsYXplckxpc3RTdHlsZSxcclxuICAgIFNoaXJ0TGlzdFN0eWxlLFxyXG4gICAgVHJvdXNlckxpc3RTdHlsZSxcclxuICAgIFZlc3RMaXN0U3R5bGUsXHJcbiAgICBCYXRpa0xpc3RTdHlsZVxyXG59IGZyb20gJy4vc2lkZWJhci9kYXRhU2lkZWJhcidcclxuXHJcbmNvbnN0IGluaXRTdHlsZSA9IHtcclxuICAgIFwiYm90dG9tXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU3F1YXJlXCJcclxuICAgIH0sXHJcbiAgICBcImNvbGxhclwiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlN0YW5kIFVwXCJcclxuICAgIH0sXHJcbiAgICBcImNvbGxhckJhY2tcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCIvaW1nL3BsZWF0cy9yZWQvQ29sbGFyIEJhY2suc3ZnXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU3RhbmQgVXBcIlxyXG4gICAgfSxcclxuICAgIFwic2xlZXZlXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU2hvcnRcIlxyXG4gICAgfSxcclxuICAgIFwiY3VmZnNcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJPbmUgQnV0dG9uIEN1dFwiXHJcbiAgICB9LFxyXG4gICAgXCJjdWZmc0JhY2tcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCIvaW1nL3NsZWV2ZV9iYWNrL0N1ZmZzIERvdWJsZSBSb3VuZGVkIEZyZW5jaCBCYWNrLnN2Z1wiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlNxdWFyZSBGcmVuY2hcIlxyXG4gICAgfSxcclxuICAgIFwicG9ja2V0XCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiV2l0aCBGbGFwXCJcclxuICAgIH0sXHJcbiAgICBcInBsYWNrZXRcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTdGFuZGFyZCBCb2R5IFVudHVja2VkIFdpdGggU3F1YXJlXCJcclxuICAgIH0sXHJcbiAgICBcInBsZWF0c1wiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIi9pbWcvcGxlYXRzL3JlZC9QbGVhdHMgQm94IFR1Y2tlZC5zdmdcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJQbGVhdHNcIlxyXG4gICAgfSxcclxuICAgIFwiY29sbGFyRm9sZFwiOntcclxuICAgICAgICBcImltYWdlXCI6XCJcIlxyXG4gICAgfSxcclxuICAgIFwiY3VmZnNGb2xkXCI6e1xyXG4gICAgICAgIFwiaW1hZ2VcIjpcIlwiXHJcbiAgICB9LFxyXG4gICAgXCJwb2NrZXRGb2xkXCI6e1xyXG4gICAgICAgIFwiaW1hZ2VcIjpcIlwiXHJcbiAgICAgICAgLy8gXCJpbWFnZVwiOlwiL2ltZy9wbGVhdHMvcmVkL0NoZXN0IFBvY2tldCBGb2xkZWQuc3ZnXCJcclxuICAgIH0sXHJcbiAgICBcInBsYWNrZXRGb2xkXCI6e1xyXG4gICAgICAgIFwiaW1hZ2VcIjpcIi9pbWcvZm9sZGVkL3JlZC9wbGVhdHMvUGxhY2tldCBTdGFuZGFyZCBCb2R5IEZvbGRlZC5zdmdcIlxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB1c2VIb29rQ3VzdG9tID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IFtmYWJyaWNMaXN0LCBzZXRGYWJyaWNMaXN0XSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2ZhYnJpY1NlbGVjdCwgc2V0RmFicmljU2VsZWN0XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbbGlzdFN0eWxlLCBzZXRMaXN0U3R5bGVdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbb3BlblN0eWxlLCBzZXRPcGVuU3R5bGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbc3R5bGVTZWxlY3QsIHNldFN0eWxlU2VsZWN0XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbZGF0YVN0eWxlLCBzZXREYXRhU3R5bGVdID0gdXNlU3RhdGUoaW5pdFN0eWxlKVxyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2lzTG9hZGluZ0ZhYnJpYywgc2V0SXNMb2FkaW5nRmFicmljXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgeyBjYXRlZ29yeSB9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgICBjb25zdCBbcG92LCBzZXRQb3ZdID0gdXNlU3RhdGUoXCJGUk9OVFwiKVxyXG4gICAgY29uc3QgZmFicmljU2VsZWN0UmVmID0gdXNlUmVmKG51bGwpXHJcbiAgICB2YXIgZmFicmljO1xyXG5cclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZmFicmljU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIGdldEN1c3RvbVN0eWxlKClcclxuICAgICAgICAgICAgZmFicmljU2VsZWN0UmVmLmN1cnJlbnQgPSBmYWJyaWNTZWxlY3RcclxuICAgICAgICB9XHJcbiAgICB9LCBbZmFicmljU2VsZWN0XSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZ0ZhYnJpYyh0cnVlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5pIG5ldyBwb3ZcIiwgcG92KTtcclxuICAgICAgICBpZiAoIWZhYnJpY1NlbGVjdCAmJiBmYWJyaWNTZWxlY3RSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBzZXRGYWJyaWNTZWxlY3QoZmFicmljU2VsZWN0UmVmLmN1cnJlbnQpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZ2V0Q3VzdG9tU3R5bGUoKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtwb3ZdKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVQb3YgPSAobmV3UG92LCBuZXdGYWJyaWMpID0+IHtcclxuICAgICAgICBzZXRQb3YobmV3UG92KTtcclxuICAgICAgICBzZXRGYWJyaWNTZWxlY3QobmV3RmFicmljKVxyXG4gICAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0Q3VzdG9tU3R5bGUoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2ZhYnJpYy9saXN0XCIpO1xyXG4gICAgICAgICAgICBjb25zdCB7IHN0YXR1cywgbWVzc2FnZSB9ID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICBpZiAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgIHNldEZhYnJpY0xpc3QoZGF0YSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEZhYnJpY0xpc3QoW10pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHNldEZhYnJpY0xpc3QoW10pXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmdGYWJyaWModHJ1ZSlcclxuICAgICAgICBnZXRDdXN0b21TdHlsZSgpXHJcbiAgICB9LCBbZmFicmljU2VsZWN0XSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGFTdHlsZTpcIiwgZGF0YVN0eWxlKVxyXG4gICAgfSxbZGF0YVN0eWxlXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0eWxlU2VsZWN0KTtcclxuICAgICAgICBjb25zdCBuZXdEYXRhU3R5bGUgPSB7IC4uLmRhdGFTdHlsZSB9XHJcbiAgICAgICAgc3dpdGNoIChzdHlsZVNlbGVjdD8udGl0bGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkNvbGxhclwiOlxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmNvbGxhci5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJTbGVldmVcIjpcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5zbGVldmUubmFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQm90dG9tXCI6XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuYm90dG9tLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkNoZXN0IFBvY2tldFwiOlxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnBvY2tldC5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDdWZmc1wiOlxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmN1ZmZzLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY3VmZnNCYWNrLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuc2xlZXZlLm5hbWUgPSBcIkxvbmdcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJQbGFja2V0XCI6XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUucGxhY2tldC5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAvLyBjYXNlIFwiUGxlYXRzXCI6XHJcbiAgICAgICAgICAgIC8vICAgICBuZXdEYXRhU3R5bGUucGxlYXRzLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRDdXN0b21TdHlsZSgpXHJcbiAgICB9LCBbc3R5bGVTZWxlY3RdKVxyXG4gICAgXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChjYXRlZ29yeSkge1xyXG4gICAgICAgICAgICBjYXNlICd2ZXN0cyc6XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0U3R5bGUoVmVzdExpc3RTdHlsZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdiYXRpa3MnOlxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdFN0eWxlKEJhdGlrTGlzdFN0eWxlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NoaXJ0cyc6XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0U3R5bGUoU2hpcnRMaXN0U3R5bGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAndHJvdXNlcnMnOlxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdFN0eWxlKFRyb3VzZXJMaXN0U3R5bGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYmxhemVyJzpcclxuICAgICAgICAgICAgICAgIHNldExpc3RTdHlsZShCbGF6ZXJMaXN0U3R5bGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LCBbY2F0ZWdvcnldKTtcclxuXHJcbiAgICBjb25zdCBnZXRDdXN0b21TdHlsZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50RmFicmljU2VsZWN0ID0gZmFicmljU2VsZWN0IHx8IGZhYnJpY1NlbGVjdFJlZi5jdXJyZW50O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRGYWJyaWNTZWxlY3QpO1xyXG4gICAgICAgIGlmICghY3VycmVudEZhYnJpY1NlbGVjdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGZhYnJpYyBzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nRmFicmljKGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcGxhY2tldE5hbWUgPSBcIlwiLFxyXG4gICAgICAgICAgICBpc1R1Y2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZihkYXRhU3R5bGUucGxhY2tldC5uYW1lLnNwbGl0KFwiIFwiKS5sZW5ndGggPiAxKXsgLy8qIENoZWNrIGFwYWthaCBpc2kgbnlhIFwiU3RhbmRhclwiIGF0YXUgc3VkYWggbGVuZ2thcCBkZW5nYW4gXCJCb2R5IFVudHVja2VkIFdpdGggU3F1YXJlXCJcclxuICAgICAgICAgICAgICAgIHBsYWNrZXROYW1lID0gZGF0YVN0eWxlLnBsYWNrZXQubmFtZTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGxhY2tldE5hbWUgPSBkYXRhU3R5bGUucGxhY2tldC5uYW1lLmNvbmNhdChcIiBCb2R5XCIsIGlzVHVja2VkID8gXCJcIiA6IFwiVW50dWNrZWRcIiAsXCJXaXRoIFNxdWFyZVwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgdXJsID0gYC9hcGkvY3VzdG9tL2N1c3RvbV9zdHlsZT9mYWJyaWM9JHtjdXJyZW50RmFicmljU2VsZWN0Ll9pZH0mY29sbGFyPSR7ZGF0YVN0eWxlLmNvbGxhci5uYW1lfSZjdWZmcz0ke2RhdGFTdHlsZS5jdWZmcy5uYW1lfSZzbGVldmU9JHtkYXRhU3R5bGUuc2xlZXZlLm5hbWV9JmJvdHRvbT0ke2RhdGFTdHlsZS5ib3R0b20ubmFtZX0mY2hlc3Rwb2NrZXQ9JHtkYXRhU3R5bGUucG9ja2V0Lm5hbWV9JnBsYWNrZXQ9JHtkYXRhU3R5bGUucGxhY2tldC5uYW1lfSZwb3Y9JHtwb3Z9YDtcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVybClcclxuICAgICAgICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgY29uc3QgbmV3RGF0YVN0eWxlID0geyAuLi5kYXRhU3R5bGUgfVxyXG4gICAgICAgICAgICAvLyBuZXdEYXRhU3R5bGUuYm90dG9tLm5hbWUgPSBkYXRhLmJvdHRvbS5uYW1lXHJcbiAgICAgICAgICAgIC8vIG5ld0RhdGFTdHlsZS5ib3R0b20uaW1hZ2UgPSBkYXRhLmJvdHRvbS5pbWFnZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmNvbGxhci5uYW1lID0gZGF0YS5zdHlsZXMuY29sbGFyPy5uYW1lIHx8IFwiXCJcclxuICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmNvbGxhci5pbWFnZSA9IGRhdGEuc3R5bGVzLmNvbGxhcj8uaW1hZ2UgfHwgXCJcIlxyXG4gICAgICAgICAgICBuZXdEYXRhU3R5bGUuc2xlZXZlLm5hbWUgPSBkYXRhLnN0eWxlcy5zbGVldmU/Lm5hbWUgfHwgXCJcIlxyXG4gICAgICAgICAgICBuZXdEYXRhU3R5bGUuc2xlZXZlLmltYWdlID0gZGF0YS5zdHlsZXMuc2xlZXZlPy5pbWFnZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wb2NrZXQubmFtZSA9IGRhdGEuc3R5bGVzLmNoZXN0cG9ja2V0Py5uYW1lIHx8IFwiXCJcclxuICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnBvY2tldC5pbWFnZSA9IGRhdGEuc3R5bGVzLmNoZXN0cG9ja2V0Py5pbWFnZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wbGFja2V0Lm5hbWUgPSBkYXRhLnN0eWxlcy5wbGFja2V0Py5uYW1lIHx8IFwiXCJcclxuICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnBsYWNrZXQuaW1hZ2UgPSBkYXRhLnN0eWxlcy5wbGFja2V0Py5pbWFnZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIGZhYnJpYz0gZmFicmljU2VsZWN0XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmYWJyaWNTZWxlY3QuX2lkKVxyXG4gICAgICAgICAgICBzZXREYXRhU3R5bGUobmV3RGF0YVN0eWxlKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdEYXRhU3R5bGUpXHJcblxyXG4gICAgICAgICAgICAvLyBpZihmYWJyaWNTZWxlY3QuX2lkPT09XCI2NzA1ZmZmYThmMTQ4NzkwMDkxMjZkMWRcIil7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wbGVhdHMuaW1hZ2U9XCIvaW1nL3BsZWF0cy9yZWQvUGxlYXRzIEJveCBUdWNrZWQuc3ZnXCJcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5jb2xsYXJCYWNrLmltYWdlPVwiL2ltZy9wbGVhdHMvcmVkL0NvbGxhciBCYWNrLnN2Z1wiXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZm9sZGVkIHJlZFxyXG4gICAgICAgICAgICAgICAgaWYoZGF0YVN0eWxlLmNvbGxhci5uYW1lPT09XCJTdGFuZCBVcFwiKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY29sbGFyRm9sZC5pbWFnZT1cIi9pbWcvZm9sZGVkL3JlZC9jb2xsYXIvQ29sbGFyIFN0YW5kIFVwIFBsYWNrZXQgRnJlbmNoIEZvbGRlZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoZGF0YVN0eWxlLmNvbGxhci5uYW1lPT09XCJCdXR0b24gRG93blwiKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY29sbGFyRm9sZC5pbWFnZT1cIi9pbWcvZm9sZGVkL3JlZC9jb2xsYXIvQ29sbGFyIEJ1dHRvbiBEb3duIFBsYWNrZXQgRnJlbmNoIEZvbGRlZC5zdmdcIlxyXG5cclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGRhdGFTdHlsZS5jb2xsYXIubmFtZT09PVwiQ3V0YXdheVwiKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY29sbGFyRm9sZC5pbWFnZT1cIi9pbWcvZm9sZGVkL3JlZC9jb2xsYXIvQ29sbGFyIEN1dGF3YXkgUGxhY2tldCBGcmVuY2ggRm9sZGVkLnN2Z1wiXHJcblxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoZGF0YVN0eWxlLmNvbGxhci5uYW1lPT09XCJLZW50IENvbGxhclwiKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY29sbGFyRm9sZC5pbWFnZT1cIi9pbWcvZm9sZGVkL3JlZC9jb2xsYXIvQ29sbGFyIEtlbnQgQ29sbGFyIFBsYWNrZXQgRnJlbmNoIEZvbGRlZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoZGF0YVN0eWxlLmNvbGxhci5uYW1lPT09XCJOZXcgS2VudFwiKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY29sbGFyRm9sZC5pbWFnZT1cIi9pbWcvZm9sZGVkL3JlZC9jb2xsYXIvQ29sbGFyIE5ldyBLZW50IFBsYWNrZXQgRnJlbmNoIEZvbGRlZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoZGF0YVN0eWxlLmNvbGxhci5uYW1lPT09XCJQaW5uZWRcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmNvbGxhckZvbGQuaW1hZ2U9XCIvaW1nL2ZvbGRlZC9yZWQvY29sbGFyL0NvbGxhciBQaW5uZWQgUGxhY2tldCBGcmVuY2ggRm9sZGVkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihkYXRhU3R5bGUuY29sbGFyLm5hbWU9PT1cIlJvdW5kZWRcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmNvbGxhckZvbGQuaW1hZ2U9XCIvaW1nL2ZvbGRlZC9yZWQvY29sbGFyL0NvbGxhciBSb3VuZGVkIFBsYWNrZXQgRnJlbmNoIEZvbGRlZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoZGF0YVN0eWxlLmNvbGxhci5uYW1lPT09XCJXaW5nXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5jb2xsYXJGb2xkLmltYWdlPVwiL2ltZy9mb2xkZWQvcmVkL2NvbGxhci9Db2xsYXIgV2luZyBQbGFja2V0IEZyZW5jaCBGb2xkZWQuc3ZnXCJcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGRhdGFTdHlsZS5jb2xsYXIubmFtZT09PVwiTG9uZ1wiKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY29sbGFyRm9sZC5pbWFnZT1cIi9pbWcvZm9sZGVkL3JlZC9jb2xsYXIvQ29sbGFyIExvbmcgUGxhY2tldCBGcmVuY2ggRm9sZGVkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihkYXRhU3R5bGUuY29sbGFyLm5hbWU9PT1cIlNob3J0IENsYXNzaWNcIil7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZihkYXRhU3R5bGUucGxhY2tldC5uYW1lPT09XCJGcmVuY2hcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnBsYWNrZXRGb2xkLmltYWdlPVwiL2ltZy9mb2xkZWQvcmVkL3BsZWF0cy9QbGFja2V0IEZyZW5jaCBCb2R5IEZvbGRlZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoZGF0YVN0eWxlLnBsYWNrZXQubmFtZT09PVwiSGlkZGVuXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wbGFja2V0Rm9sZC5pbWFnZT1cIi9pbWcvZm9sZGVkL3JlZC9wbGVhdHMvUGxhY2tldCBIaWRkZW4gQm9keSBGb2xkZWQuc3ZnXCJcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGRhdGFTdHlsZS5wbGFja2V0Lm5hbWU9PT1cIlN0YW5kYXJkXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wbGFja2V0Rm9sZC5pbWFnZT1cIi9pbWcvZm9sZGVkL3JlZC9wbGVhdHMvUGxhY2tldCBTdGFuZGFyZCBCb2R5IEZvbGRlZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICB9LCA3MDApO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldElzTG9hZGluZ0ZhYnJpYyhmYWxzZSlcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgb3BlblN0eWxlLFxyXG4gICAgICAgIGxpc3RTdHlsZSxcclxuICAgICAgICBmYWJyaWNMaXN0LFxyXG4gICAgICAgIHN0eWxlU2VsZWN0LFxyXG4gICAgICAgIGZhYnJpY1NlbGVjdCxcclxuICAgICAgICBkYXRhU3R5bGUsXHJcbiAgICAgICAgaXNMb2FkaW5nLFxyXG4gICAgICAgIGlzTG9hZGluZ0ZhYnJpYyxcclxuICAgICAgICBwb3YsXHJcbiAgICAgICAgdXBkYXRlUG92LFxyXG4gICAgICAgIHNldFBvdixcclxuICAgICAgICBzZXREYXRhU3R5bGUsXHJcbiAgICAgICAgc2V0SXNMb2FkaW5nLFxyXG4gICAgICAgIHNldE9wZW5TdHlsZSxcclxuICAgICAgICBzZXRGYWJyaWNMaXN0LFxyXG4gICAgICAgIHNldFN0eWxlU2VsZWN0LFxyXG4gICAgICAgIHNldEZhYnJpY1NlbGVjdCxcclxuICAgICAgICBzZXRJc0xvYWRpbmdGYWJyaWMsXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgdXNlSG9va0N1c3RvbSJdLCJzb3VyY2VSb290IjoiIn0=