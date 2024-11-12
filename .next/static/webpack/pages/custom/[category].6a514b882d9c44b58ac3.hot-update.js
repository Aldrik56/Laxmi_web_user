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
    }

    getCustomStyle();
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

_s(useHookCustom, "VeY7ozO3AW3u1Arvm6UMzVvNtSk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9jdXN0b20vaG9va0N1c3RvbS5qcyJdLCJuYW1lcyI6WyJpbml0U3R5bGUiLCJ1c2VIb29rQ3VzdG9tIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJmYWJyaWNMaXN0Iiwic2V0RmFicmljTGlzdCIsImZhYnJpY1NlbGVjdCIsInNldEZhYnJpY1NlbGVjdCIsImxpc3RTdHlsZSIsInNldExpc3RTdHlsZSIsIm9wZW5TdHlsZSIsInNldE9wZW5TdHlsZSIsInN0eWxlU2VsZWN0Iiwic2V0U3R5bGVTZWxlY3QiLCJkYXRhU3R5bGUiLCJzZXREYXRhU3R5bGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0xvYWRpbmdGYWJyaWMiLCJzZXRJc0xvYWRpbmdGYWJyaWMiLCJjYXRlZ29yeSIsInF1ZXJ5IiwicG92Iiwic2V0UG92IiwiZmFicmljIiwidXNlRWZmZWN0IiwiZ2V0Q3VzdG9tU3R5bGUiLCJmYWJyaWNTZWxlY3RSZWYiLCJjdXJyZW50IiwiY29uc29sZSIsImxvZyIsInVwZGF0ZVBvdiIsIm5ld1BvdiIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwic3RhdHVzIiwibWVzc2FnZSIsIm5ld0RhdGFTdHlsZSIsInRpdGxlIiwiY29sbGFyIiwibmFtZSIsInNsZWV2ZSIsImJvdHRvbSIsInBvY2tldCIsImN1ZmZzIiwiY3VmZnNCYWNrIiwicGxhY2tldCIsIlZlc3RMaXN0U3R5bGUiLCJCYXRpa0xpc3RTdHlsZSIsIlNoaXJ0TGlzdFN0eWxlIiwiVHJvdXNlckxpc3RTdHlsZSIsIkJsYXplckxpc3RTdHlsZSIsIl9pZCIsInBsYWNrZXROYW1lIiwiaXNUdWNrZWQiLCJzcGxpdCIsImxlbmd0aCIsImNvbmNhdCIsInVybCIsInN0eWxlcyIsImltYWdlIiwiY2hlc3Rwb2NrZXQiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7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LENBQUMsS0FBRCxDQUFsQjtBQUNILGVBRlMsRUFFUCxJQUZPLENBQVY7QUF6Q2U7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZE8sY0FBYztBQUFBO0FBQUE7QUFBQSxLQUFwQjs7QUErQ0EsU0FBTztBQUNIaEIsYUFBUyxFQUFUQSxTQURHO0FBRUhGLGFBQVMsRUFBVEEsU0FGRztBQUdISixjQUFVLEVBQVZBLFVBSEc7QUFJSFEsZUFBVyxFQUFYQSxXQUpHO0FBS0hOLGdCQUFZLEVBQVpBLFlBTEc7QUFNSFEsYUFBUyxFQUFUQSxTQU5HO0FBT0hFLGFBQVMsRUFBVEEsU0FQRztBQVFIRSxtQkFBZSxFQUFmQSxlQVJHO0FBU0hJLE9BQUcsRUFBSEEsR0FURztBQVVIUyxhQUFTLEVBQVRBLFNBVkc7QUFXSFIsVUFBTSxFQUFOQSxNQVhHO0FBWUhSLGdCQUFZLEVBQVpBLFlBWkc7QUFhSEUsZ0JBQVksRUFBWkEsWUFiRztBQWNITixnQkFBWSxFQUFaQSxZQWRHO0FBZUhOLGlCQUFhLEVBQWJBLGFBZkc7QUFnQkhRLGtCQUFjLEVBQWRBLGNBaEJHO0FBaUJITixtQkFBZSxFQUFmQSxlQWpCRztBQWtCSFksc0JBQWtCLEVBQWxCQTtBQWxCRyxHQUFQO0FBb0JILENBdkxEOztHQUFNbkIsYTtVQUNhRSxxRDs7O0FBdUxKRiw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jdXN0b20vW2NhdGVnb3J5XS42YTUxNGI4ODJkOWM0NGI1OGFjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG4vLyBpbXBvcnQgZnJlbmNoUGxhY2tldCBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2ltZy9wbGFja2V0L1BsYWNrZXQgRnJlbmNoLnN2Z1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHtcclxuICAgIEJsYXplckxpc3RTdHlsZSxcclxuICAgIFNoaXJ0TGlzdFN0eWxlLFxyXG4gICAgVHJvdXNlckxpc3RTdHlsZSxcclxuICAgIFZlc3RMaXN0U3R5bGUsXHJcbiAgICBCYXRpa0xpc3RTdHlsZVxyXG59IGZyb20gJy4vc2lkZWJhci9kYXRhU2lkZWJhcidcclxuXHJcbmNvbnN0IGluaXRTdHlsZSA9IHtcclxuICAgIFwiYm90dG9tXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU3F1YXJlXCJcclxuICAgIH0sXHJcbiAgICBcImNvbGxhclwiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlN0YW5kIFVwXCJcclxuICAgIH0sXHJcbiAgICBcImNvbGxhckJhY2tcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCIvaW1nL3BsZWF0cy9yZWQvQ29sbGFyIEJhY2suc3ZnXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU3RhbmQgVXBcIlxyXG4gICAgfSxcclxuICAgIFwic2xlZXZlXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU2hvcnRcIlxyXG4gICAgfSxcclxuICAgIFwiY3VmZnNcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTcXVhcmUgRnJlbmNoXCJcclxuICAgIH0sXHJcbiAgICBcImN1ZmZzQmFja1wiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIi9pbWcvc2xlZXZlX2JhY2svQ3VmZnMgRG91YmxlIFJvdW5kZWQgRnJlbmNoIEJhY2suc3ZnXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU3F1YXJlIEZyZW5jaFwiXHJcbiAgICB9LFxyXG4gICAgXCJwb2NrZXRcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJXaXRoIEZsYXBcIlxyXG4gICAgfSxcclxuICAgIFwicGxhY2tldFwiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlN0YW5kYXJkIEJvZHkgVW50dWNrZWQgV2l0aCBTcXVhcmVcIlxyXG4gICAgfSxcclxuICAgIFwicGxlYXRzXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiL2ltZy9wbGVhdHMvcmVkL1BsZWF0cyBCb3ggVHVja2VkLnN2Z1wiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlBsZWF0c1wiXHJcbiAgICB9LFxyXG4gICAgXCJjb2xsYXJGb2xkXCI6e1xyXG4gICAgICAgIFwiaW1hZ2VcIjpcIlwiXHJcbiAgICB9LFxyXG4gICAgXCJjdWZmc0ZvbGRcIjp7XHJcbiAgICAgICAgXCJpbWFnZVwiOlwiXCJcclxuICAgIH0sXHJcbiAgICBcInBvY2tldEZvbGRcIjp7XHJcbiAgICAgICAgXCJpbWFnZVwiOlwiXCJcclxuICAgICAgICAvLyBcImltYWdlXCI6XCIvaW1nL3BsZWF0cy9yZWQvQ2hlc3QgUG9ja2V0IEZvbGRlZC5zdmdcIlxyXG4gICAgfSxcclxuICAgIFwicGxhY2tldEZvbGRcIjp7XHJcbiAgICAgICAgXCJpbWFnZVwiOlwiL2ltZy9mb2xkZWQvcmVkL3BsZWF0cy9QbGFja2V0IFN0YW5kYXJkIEJvZHkgRm9sZGVkLnN2Z1wiXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHVzZUhvb2tDdXN0b20gPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgW2ZhYnJpY0xpc3QsIHNldEZhYnJpY0xpc3RdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbZmFicmljU2VsZWN0LCBzZXRGYWJyaWNTZWxlY3RdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtsaXN0U3R5bGUsIHNldExpc3RTdHlsZV0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtvcGVuU3R5bGUsIHNldE9wZW5TdHlsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtzdHlsZVNlbGVjdCwgc2V0U3R5bGVTZWxlY3RdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtkYXRhU3R5bGUsIHNldERhdGFTdHlsZV0gPSB1c2VTdGF0ZShpbml0U3R5bGUpXHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaXNMb2FkaW5nRmFicmljLCBzZXRJc0xvYWRpbmdGYWJyaWNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCB7IGNhdGVnb3J5IH0gPSByb3V0ZXIucXVlcnlcclxuICAgIGNvbnN0IFtwb3YsIHNldFBvdl0gPSB1c2VTdGF0ZShcIkZST05UXCIpXHJcbiAgICB2YXIgZmFicmljO1xyXG5cclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZmFicmljU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIGdldEN1c3RvbVN0eWxlKClcclxuICAgICAgICAgICAgZmFicmljU2VsZWN0UmVmLmN1cnJlbnQgPSBmYWJyaWNTZWxlY3RcclxuICAgICAgICB9XHJcbiAgICB9LCBbZmFicmljU2VsZWN0XSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZ0ZhYnJpYyh0cnVlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5pIG5ldyBwb3ZcIiwgcG92KTtcclxuICAgICAgICBpZiAoIWZhYnJpY1NlbGVjdCAmJiBmYWJyaWNTZWxlY3RSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBzZXRGYWJyaWNTZWxlY3QoZmFicmljU2VsZWN0UmVmLmN1cnJlbnQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldEN1c3RvbVN0eWxlKClcclxuICAgIH0sIFtwb3ZdKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVQb3YgPSAobmV3UG92KSA9PiB7XHJcbiAgICAgICAgc2V0UG92KG5ld1Bvdik7XHJcbiAgICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRDdXN0b21TdHlsZSgpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvZmFicmljL2xpc3RcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgc3RhdHVzLCBtZXNzYWdlIH0gPSByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgIGlmIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgc2V0RmFicmljTGlzdChkYXRhKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0RmFicmljTGlzdChbXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgc2V0RmFicmljTGlzdChbXSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZ0ZhYnJpYyh0cnVlKVxyXG4gICAgICAgIGdldEN1c3RvbVN0eWxlKClcclxuICAgIH0sIFtmYWJyaWNTZWxlY3RdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YVN0eWxlOlwiLCBkYXRhU3R5bGUpXHJcbiAgICB9LFtkYXRhU3R5bGVdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coc3R5bGVTZWxlY3QpO1xyXG4gICAgICAgIGNvbnN0IG5ld0RhdGFTdHlsZSA9IHsgLi4uZGF0YVN0eWxlIH1cclxuICAgICAgICBzd2l0Y2ggKHN0eWxlU2VsZWN0Py50aXRsZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQ29sbGFyXCI6XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY29sbGFyLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlNsZWV2ZVwiOlxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnNsZWV2ZS5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJCb3R0b21cIjpcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5ib3R0b20ubmFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQ2hlc3QgUG9ja2V0XCI6XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUucG9ja2V0Lm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkN1ZmZzXCI6XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY3VmZnMubmFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5jdWZmc0JhY2submFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5zbGVldmUubmFtZSA9IFwiTG9uZ1wiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlBsYWNrZXRcIjpcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wbGFja2V0Lm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgIC8vIGNhc2UgXCJQbGVhdHNcIjpcclxuICAgICAgICAgICAgLy8gICAgIG5ld0RhdGFTdHlsZS5wbGVhdHMubmFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldEN1c3RvbVN0eWxlKClcclxuICAgIH0sIFtzdHlsZVNlbGVjdF0pXHJcbiAgICBcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Zlc3RzJzpcclxuICAgICAgICAgICAgICAgIHNldExpc3RTdHlsZShWZXN0TGlzdFN0eWxlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JhdGlrcyc6XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0U3R5bGUoQmF0aWtMaXN0U3R5bGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc2hpcnRzJzpcclxuICAgICAgICAgICAgICAgIHNldExpc3RTdHlsZShTaGlydExpc3RTdHlsZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd0cm91c2Vycyc6XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0U3R5bGUoVHJvdXNlckxpc3RTdHlsZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdibGF6ZXInOlxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdFN0eWxlKEJsYXplckxpc3RTdHlsZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtjYXRlZ29yeV0pO1xyXG5cclxuICAgIGNvbnN0IGdldEN1c3RvbVN0eWxlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZhYnJpY1NlbGVjdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coIGAvYXBpL2N1c3RvbS9jdXN0b21fc3R5bGU/ZmFicmljPSR7ZmFicmljU2VsZWN0Ll9pZH0mY29sbGFyPSR7ZGF0YVN0eWxlLmNvbGxhci5uYW1lfSZjdWZmcz0ke2RhdGFTdHlsZS5jdWZmcy5uYW1lfSZzbGVldmU9JHtkYXRhU3R5bGUuc2xlZXZlLm5hbWV9JmJvdHRvbT0ke2RhdGFTdHlsZS5ib3R0b20ubmFtZX0mY2hlc3Rwb2NrZXQ9JHtkYXRhU3R5bGUucG9ja2V0Lm5hbWV9JnBsYWNrZXQ9JHtkYXRhU3R5bGUucGxhY2tldC5uYW1lfSZwb3Y9JHtwb3Z9YCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHBsYWNrZXROYW1lID0gXCJcIixcclxuICAgICAgICAgICAgaXNUdWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYoZGF0YVN0eWxlLnBsYWNrZXQubmFtZS5zcGxpdChcIiBcIikubGVuZ3RoID4gMSl7IC8vKiBDaGVjayBhcGFrYWggaXNpIG55YSBcIlN0YW5kYXJcIiBhdGF1IHN1ZGFoIGxlbmdrYXAgZGVuZ2FuIFwiQm9keSBVbnR1Y2tlZCBXaXRoIFNxdWFyZVwiXHJcbiAgICAgICAgICAgICAgICBwbGFja2V0TmFtZSA9IGRhdGFTdHlsZS5wbGFja2V0Lm5hbWU7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHBsYWNrZXROYW1lID0gZGF0YVN0eWxlLnBsYWNrZXQubmFtZS5jb25jYXQoXCIgQm9keVwiLCBpc1R1Y2tlZCA/IFwiXCIgOiBcIlVudHVja2VkXCIgLFwiV2l0aCBTcXVhcmVcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHVybCA9IGAvYXBpL2N1c3RvbS9jdXN0b21fc3R5bGU/ZmFicmljPSR7ZmFicmljU2VsZWN0Ll9pZH0mY29sbGFyPSR7ZGF0YVN0eWxlLmNvbGxhci5uYW1lfSZjdWZmcz0ke2RhdGFTdHlsZS5jdWZmcy5uYW1lfSZzbGVldmU9JHtkYXRhU3R5bGUuc2xlZXZlLm5hbWV9JmJvdHRvbT0ke2RhdGFTdHlsZS5ib3R0b20ubmFtZX0mY2hlc3Rwb2NrZXQ9JHtkYXRhU3R5bGUucG9ja2V0Lm5hbWV9JnBsYWNrZXQ9JHtkYXRhU3R5bGUucGxhY2tldC5uYW1lfSZwb3Y9JHtwb3Z9YDtcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVybClcclxuICAgICAgICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgY29uc3QgbmV3RGF0YVN0eWxlID0geyAuLi5kYXRhU3R5bGUgfVxyXG4gICAgICAgICAgICAvLyBuZXdEYXRhU3R5bGUuYm90dG9tLm5hbWUgPSBkYXRhLmJvdHRvbS5uYW1lXHJcbiAgICAgICAgICAgIC8vIG5ld0RhdGFTdHlsZS5ib3R0b20uaW1hZ2UgPSBkYXRhLmJvdHRvbS5pbWFnZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmNvbGxhci5uYW1lID0gZGF0YS5zdHlsZXMuY29sbGFyPy5uYW1lIHx8IFwiXCJcclxuICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmNvbGxhci5pbWFnZSA9IGRhdGEuc3R5bGVzLmNvbGxhcj8uaW1hZ2UgfHwgXCJcIlxyXG4gICAgICAgICAgICBuZXdEYXRhU3R5bGUuc2xlZXZlLm5hbWUgPSBkYXRhLnN0eWxlcy5zbGVldmU/Lm5hbWUgfHwgXCJcIlxyXG4gICAgICAgICAgICBuZXdEYXRhU3R5bGUuc2xlZXZlLmltYWdlID0gZGF0YS5zdHlsZXMuc2xlZXZlPy5pbWFnZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wb2NrZXQubmFtZSA9IGRhdGEuc3R5bGVzLmNoZXN0cG9ja2V0Py5uYW1lIHx8IFwiXCJcclxuICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnBvY2tldC5pbWFnZSA9IGRhdGEuc3R5bGVzLmNoZXN0cG9ja2V0Py5pbWFnZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wbGFja2V0Lm5hbWUgPSBkYXRhLnN0eWxlcy5wbGFja2V0Py5uYW1lIHx8IFwiXCJcclxuICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnBsYWNrZXQuaW1hZ2UgPSBkYXRhLnN0eWxlcy5wbGFja2V0Py5pbWFnZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIGZhYnJpYz0gZmFicmljU2VsZWN0XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmYWJyaWNTZWxlY3QuX2lkKVxyXG4gICAgICAgICAgICBzZXREYXRhU3R5bGUobmV3RGF0YVN0eWxlKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdEYXRhU3R5bGUpXHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgfSwgNzAwKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmdGYWJyaWMoZmFsc2UpXHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG9wZW5TdHlsZSxcclxuICAgICAgICBsaXN0U3R5bGUsXHJcbiAgICAgICAgZmFicmljTGlzdCxcclxuICAgICAgICBzdHlsZVNlbGVjdCxcclxuICAgICAgICBmYWJyaWNTZWxlY3QsXHJcbiAgICAgICAgZGF0YVN0eWxlLFxyXG4gICAgICAgIGlzTG9hZGluZyxcclxuICAgICAgICBpc0xvYWRpbmdGYWJyaWMsXHJcbiAgICAgICAgcG92LFxyXG4gICAgICAgIHVwZGF0ZVBvdixcclxuICAgICAgICBzZXRQb3YsXHJcbiAgICAgICAgc2V0RGF0YVN0eWxlLFxyXG4gICAgICAgIHNldElzTG9hZGluZyxcclxuICAgICAgICBzZXRPcGVuU3R5bGUsXHJcbiAgICAgICAgc2V0RmFicmljTGlzdCxcclxuICAgICAgICBzZXRTdHlsZVNlbGVjdCxcclxuICAgICAgICBzZXRGYWJyaWNTZWxlY3QsXHJcbiAgICAgICAgc2V0SXNMb2FkaW5nRmFicmljLFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHVzZUhvb2tDdXN0b20iXSwic291cmNlUm9vdCI6IiJ9