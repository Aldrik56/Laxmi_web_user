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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9jdXN0b20vaG9va0N1c3RvbS5qcyJdLCJuYW1lcyI6WyJpbml0U3R5bGUiLCJ1c2VIb29rQ3VzdG9tIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJmYWJyaWNMaXN0Iiwic2V0RmFicmljTGlzdCIsImZhYnJpY1NlbGVjdCIsInNldEZhYnJpY1NlbGVjdCIsImxpc3RTdHlsZSIsInNldExpc3RTdHlsZSIsIm9wZW5TdHlsZSIsInNldE9wZW5TdHlsZSIsInN0eWxlU2VsZWN0Iiwic2V0U3R5bGVTZWxlY3QiLCJkYXRhU3R5bGUiLCJzZXREYXRhU3R5bGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0xvYWRpbmdGYWJyaWMiLCJzZXRJc0xvYWRpbmdGYWJyaWMiLCJjYXRlZ29yeSIsInF1ZXJ5IiwicG92Iiwic2V0UG92IiwiZmFicmljU2VsZWN0UmVmIiwidXNlUmVmIiwiZmFicmljIiwidXNlRWZmZWN0IiwiZ2V0Q3VzdG9tU3R5bGUiLCJjdXJyZW50IiwiY29uc29sZSIsImxvZyIsInVwZGF0ZVBvdiIsIm5ld1BvdiIsIm5ld0ZhYnJpYyIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwic3RhdHVzIiwibWVzc2FnZSIsIm5ld0RhdGFTdHlsZSIsInRpdGxlIiwiY29sbGFyIiwibmFtZSIsInNsZWV2ZSIsImJvdHRvbSIsInBvY2tldCIsImN1ZmZzIiwiY3VmZnNCYWNrIiwicGxhY2tldCIsIlZlc3RMaXN0U3R5bGUiLCJCYXRpa0xpc3RTdHlsZSIsIlNoaXJ0TGlzdFN0eWxlIiwiVHJvdXNlckxpc3RTdHlsZSIsIkJsYXplckxpc3RTdHlsZSIsImN1cnJlbnRGYWJyaWNTZWxlY3QiLCJwbGFja2V0TmFtZSIsImlzVHVja2VkIiwic3BsaXQiLCJsZW5ndGgiLCJjb25jYXQiLCJ1cmwiLCJfaWQiLCJzdHlsZXMiLCJpbWFnZSIsImNoZXN0cG9ja2V0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QUFVLENBQUMsWUFBTTtBQUNiaEQsa0NBQWtCLENBQUMsS0FBRCxDQUFsQjtBQUNILGVBRlMsRUFFUCxJQUZPLENBQVY7QUE5Q2U7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZFMsY0FBYztBQUFBO0FBQUE7QUFBQSxLQUFwQjs7QUFvREEsU0FBTztBQUNIbEIsYUFBUyxFQUFUQSxTQURHO0FBRUhGLGFBQVMsRUFBVEEsU0FGRztBQUdISixjQUFVLEVBQVZBLFVBSEc7QUFJSFEsZUFBVyxFQUFYQSxXQUpHO0FBS0hOLGdCQUFZLEVBQVpBLFlBTEc7QUFNSFEsYUFBUyxFQUFUQSxTQU5HO0FBT0hFLGFBQVMsRUFBVEEsU0FQRztBQVFIRSxtQkFBZSxFQUFmQSxlQVJHO0FBU0hJLE9BQUcsRUFBSEEsR0FURztBQVVIVSxhQUFTLEVBQVRBLFNBVkc7QUFXSFQsVUFBTSxFQUFOQSxNQVhHO0FBWUhSLGdCQUFZLEVBQVpBLFlBWkc7QUFhSEUsZ0JBQVksRUFBWkEsWUFiRztBQWNITixnQkFBWSxFQUFaQSxZQWRHO0FBZUhOLGlCQUFhLEVBQWJBLGFBZkc7QUFnQkhRLGtCQUFjLEVBQWRBLGNBaEJHO0FBaUJITixtQkFBZSxFQUFmQSxlQWpCRztBQWtCSFksc0JBQWtCLEVBQWxCQTtBQWxCRyxHQUFQO0FBb0JILENBL0xEOztHQUFNbkIsYTtVQUNhRSxxRDs7O0FBK0xKRiw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jdXN0b20vW2NhdGVnb3J5XS44M2MyYWMyMDBiZjYwMjQ1NzIzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG4vLyBpbXBvcnQgZnJlbmNoUGxhY2tldCBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2ltZy9wbGFja2V0L1BsYWNrZXQgRnJlbmNoLnN2Z1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlLHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7XHJcbiAgICBCbGF6ZXJMaXN0U3R5bGUsXHJcbiAgICBTaGlydExpc3RTdHlsZSxcclxuICAgIFRyb3VzZXJMaXN0U3R5bGUsXHJcbiAgICBWZXN0TGlzdFN0eWxlLFxyXG4gICAgQmF0aWtMaXN0U3R5bGVcclxufSBmcm9tICcuL3NpZGViYXIvZGF0YVNpZGViYXInXHJcblxyXG5jb25zdCBpbml0U3R5bGUgPSB7XHJcbiAgICBcImJvdHRvbVwiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlNxdWFyZVwiXHJcbiAgICB9LFxyXG4gICAgXCJjb2xsYXJcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTdGFuZCBVcFwiXHJcbiAgICB9LFxyXG4gICAgXCJjb2xsYXJCYWNrXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiL2ltZy9wbGVhdHMvcmVkL0NvbGxhciBCYWNrLnN2Z1wiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlN0YW5kIFVwXCJcclxuICAgIH0sXHJcbiAgICBcInNsZWV2ZVwiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlNob3J0XCJcclxuICAgIH0sXHJcbiAgICBcImN1ZmZzXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU3F1YXJlIEZyZW5jaFwiXHJcbiAgICB9LFxyXG4gICAgXCJjdWZmc0JhY2tcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCIvaW1nL3NsZWV2ZV9iYWNrL0N1ZmZzIERvdWJsZSBSb3VuZGVkIEZyZW5jaCBCYWNrLnN2Z1wiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlNxdWFyZSBGcmVuY2hcIlxyXG4gICAgfSxcclxuICAgIFwicG9ja2V0XCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiV2l0aCBGbGFwXCJcclxuICAgIH0sXHJcbiAgICBcInBsYWNrZXRcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTdGFuZGFyZCBCb2R5IFVudHVja2VkIFdpdGggU3F1YXJlXCJcclxuICAgIH0sXHJcbiAgICBcInBsZWF0c1wiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIi9pbWcvcGxlYXRzL3JlZC9QbGVhdHMgQm94IFR1Y2tlZC5zdmdcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJQbGVhdHNcIlxyXG4gICAgfSxcclxuICAgIFwiY29sbGFyRm9sZFwiOntcclxuICAgICAgICBcImltYWdlXCI6XCJcIlxyXG4gICAgfSxcclxuICAgIFwiY3VmZnNGb2xkXCI6e1xyXG4gICAgICAgIFwiaW1hZ2VcIjpcIlwiXHJcbiAgICB9LFxyXG4gICAgXCJwb2NrZXRGb2xkXCI6e1xyXG4gICAgICAgIFwiaW1hZ2VcIjpcIlwiXHJcbiAgICAgICAgLy8gXCJpbWFnZVwiOlwiL2ltZy9wbGVhdHMvcmVkL0NoZXN0IFBvY2tldCBGb2xkZWQuc3ZnXCJcclxuICAgIH0sXHJcbiAgICBcInBsYWNrZXRGb2xkXCI6e1xyXG4gICAgICAgIFwiaW1hZ2VcIjpcIi9pbWcvZm9sZGVkL3JlZC9wbGVhdHMvUGxhY2tldCBTdGFuZGFyZCBCb2R5IEZvbGRlZC5zdmdcIlxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB1c2VIb29rQ3VzdG9tID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IFtmYWJyaWNMaXN0LCBzZXRGYWJyaWNMaXN0XSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2ZhYnJpY1NlbGVjdCwgc2V0RmFicmljU2VsZWN0XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbbGlzdFN0eWxlLCBzZXRMaXN0U3R5bGVdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbb3BlblN0eWxlLCBzZXRPcGVuU3R5bGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbc3R5bGVTZWxlY3QsIHNldFN0eWxlU2VsZWN0XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbZGF0YVN0eWxlLCBzZXREYXRhU3R5bGVdID0gdXNlU3RhdGUoaW5pdFN0eWxlKVxyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2lzTG9hZGluZ0ZhYnJpYywgc2V0SXNMb2FkaW5nRmFicmljXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgeyBjYXRlZ29yeSB9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgICBjb25zdCBbcG92LCBzZXRQb3ZdID0gdXNlU3RhdGUoXCJGUk9OVFwiKVxyXG4gICAgY29uc3QgZmFicmljU2VsZWN0UmVmID0gdXNlUmVmKG51bGwpXHJcbiAgICB2YXIgZmFicmljO1xyXG5cclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZmFicmljU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIGdldEN1c3RvbVN0eWxlKClcclxuICAgICAgICAgICAgZmFicmljU2VsZWN0UmVmLmN1cnJlbnQgPSBmYWJyaWNTZWxlY3RcclxuICAgICAgICB9XHJcbiAgICB9LCBbZmFicmljU2VsZWN0XSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZ0ZhYnJpYyh0cnVlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5pIG5ldyBwb3ZcIiwgcG92KTtcclxuICAgICAgICBpZiAoIWZhYnJpY1NlbGVjdCAmJiBmYWJyaWNTZWxlY3RSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBzZXRGYWJyaWNTZWxlY3QoZmFicmljU2VsZWN0UmVmLmN1cnJlbnQpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZ2V0Q3VzdG9tU3R5bGUoKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtwb3ZdKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVQb3YgPSAobmV3UG92LCBuZXdGYWJyaWMpID0+IHtcclxuICAgICAgICBzZXRQb3YobmV3UG92KTtcclxuICAgICAgICBzZXRGYWJyaWNTZWxlY3QobmV3RmFicmljKVxyXG4gICAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0Q3VzdG9tU3R5bGUoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2ZhYnJpYy9saXN0XCIpO1xyXG4gICAgICAgICAgICBjb25zdCB7IHN0YXR1cywgbWVzc2FnZSB9ID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICBpZiAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgIHNldEZhYnJpY0xpc3QoZGF0YSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEZhYnJpY0xpc3QoW10pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHNldEZhYnJpY0xpc3QoW10pXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmdGYWJyaWModHJ1ZSlcclxuICAgICAgICBnZXRDdXN0b21TdHlsZSgpXHJcbiAgICB9LCBbZmFicmljU2VsZWN0XSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGFTdHlsZTpcIiwgZGF0YVN0eWxlKVxyXG4gICAgfSxbZGF0YVN0eWxlXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0eWxlU2VsZWN0KTtcclxuICAgICAgICBjb25zdCBuZXdEYXRhU3R5bGUgPSB7IC4uLmRhdGFTdHlsZSB9XHJcbiAgICAgICAgc3dpdGNoIChzdHlsZVNlbGVjdD8udGl0bGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkNvbGxhclwiOlxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmNvbGxhci5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJTbGVldmVcIjpcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5zbGVldmUubmFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQm90dG9tXCI6XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuYm90dG9tLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkNoZXN0IFBvY2tldFwiOlxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnBvY2tldC5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDdWZmc1wiOlxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmN1ZmZzLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY3VmZnNCYWNrLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuc2xlZXZlLm5hbWUgPSBcIkxvbmdcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJQbGFja2V0XCI6XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUucGxhY2tldC5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAvLyBjYXNlIFwiUGxlYXRzXCI6XHJcbiAgICAgICAgICAgIC8vICAgICBuZXdEYXRhU3R5bGUucGxlYXRzLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRDdXN0b21TdHlsZSgpXHJcbiAgICB9LCBbc3R5bGVTZWxlY3RdKVxyXG4gICAgXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChjYXRlZ29yeSkge1xyXG4gICAgICAgICAgICBjYXNlICd2ZXN0cyc6XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0U3R5bGUoVmVzdExpc3RTdHlsZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdiYXRpa3MnOlxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdFN0eWxlKEJhdGlrTGlzdFN0eWxlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NoaXJ0cyc6XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0U3R5bGUoU2hpcnRMaXN0U3R5bGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAndHJvdXNlcnMnOlxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdFN0eWxlKFRyb3VzZXJMaXN0U3R5bGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYmxhemVyJzpcclxuICAgICAgICAgICAgICAgIHNldExpc3RTdHlsZShCbGF6ZXJMaXN0U3R5bGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LCBbY2F0ZWdvcnldKTtcclxuXHJcbiAgICBjb25zdCBnZXRDdXN0b21TdHlsZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50RmFicmljU2VsZWN0ID0gZmFicmljU2VsZWN0IHx8IGZhYnJpY1NlbGVjdFJlZi5jdXJyZW50O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRGYWJyaWNTZWxlY3QpO1xyXG4gICAgICAgIGlmICghY3VycmVudEZhYnJpY1NlbGVjdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGZhYnJpYyBzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nRmFicmljKGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcGxhY2tldE5hbWUgPSBcIlwiLFxyXG4gICAgICAgICAgICBpc1R1Y2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZihkYXRhU3R5bGUucGxhY2tldC5uYW1lLnNwbGl0KFwiIFwiKS5sZW5ndGggPiAxKXsgLy8qIENoZWNrIGFwYWthaCBpc2kgbnlhIFwiU3RhbmRhclwiIGF0YXUgc3VkYWggbGVuZ2thcCBkZW5nYW4gXCJCb2R5IFVudHVja2VkIFdpdGggU3F1YXJlXCJcclxuICAgICAgICAgICAgICAgIHBsYWNrZXROYW1lID0gZGF0YVN0eWxlLnBsYWNrZXQubmFtZTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGxhY2tldE5hbWUgPSBkYXRhU3R5bGUucGxhY2tldC5uYW1lLmNvbmNhdChcIiBCb2R5XCIsIGlzVHVja2VkID8gXCJcIiA6IFwiVW50dWNrZWRcIiAsXCJXaXRoIFNxdWFyZVwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgdXJsID0gYC9hcGkvY3VzdG9tL2N1c3RvbV9zdHlsZT9mYWJyaWM9JHtjdXJyZW50RmFicmljU2VsZWN0Ll9pZH0mY29sbGFyPSR7ZGF0YVN0eWxlLmNvbGxhci5uYW1lfSZjdWZmcz0ke2RhdGFTdHlsZS5jdWZmcy5uYW1lfSZzbGVldmU9JHtkYXRhU3R5bGUuc2xlZXZlLm5hbWV9JmJvdHRvbT0ke2RhdGFTdHlsZS5ib3R0b20ubmFtZX0mY2hlc3Rwb2NrZXQ9JHtkYXRhU3R5bGUucG9ja2V0Lm5hbWV9JnBsYWNrZXQ9JHtkYXRhU3R5bGUucGxhY2tldC5uYW1lfSZwb3Y9JHtwb3Z9YDtcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVybClcclxuICAgICAgICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgY29uc3QgbmV3RGF0YVN0eWxlID0geyAuLi5kYXRhU3R5bGUgfVxyXG4gICAgICAgICAgICAvLyBuZXdEYXRhU3R5bGUuYm90dG9tLm5hbWUgPSBkYXRhLmJvdHRvbS5uYW1lXHJcbiAgICAgICAgICAgIC8vIG5ld0RhdGFTdHlsZS5ib3R0b20uaW1hZ2UgPSBkYXRhLmJvdHRvbS5pbWFnZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmNvbGxhci5uYW1lID0gZGF0YS5zdHlsZXMuY29sbGFyPy5uYW1lIHx8IFwiXCJcclxuICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmNvbGxhci5pbWFnZSA9IGRhdGEuc3R5bGVzLmNvbGxhcj8uaW1hZ2UgfHwgXCJcIlxyXG4gICAgICAgICAgICBuZXdEYXRhU3R5bGUuc2xlZXZlLm5hbWUgPSBkYXRhLnN0eWxlcy5zbGVldmU/Lm5hbWUgfHwgXCJcIlxyXG4gICAgICAgICAgICBuZXdEYXRhU3R5bGUuc2xlZXZlLmltYWdlID0gZGF0YS5zdHlsZXMuc2xlZXZlPy5pbWFnZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wb2NrZXQubmFtZSA9IGRhdGEuc3R5bGVzLmNoZXN0cG9ja2V0Py5uYW1lIHx8IFwiXCJcclxuICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnBvY2tldC5pbWFnZSA9IGRhdGEuc3R5bGVzLmNoZXN0cG9ja2V0Py5pbWFnZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wbGFja2V0Lm5hbWUgPSBkYXRhLnN0eWxlcy5wbGFja2V0Py5uYW1lIHx8IFwiXCJcclxuICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnBsYWNrZXQuaW1hZ2UgPSBkYXRhLnN0eWxlcy5wbGFja2V0Py5pbWFnZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIGZhYnJpYz0gZmFicmljU2VsZWN0XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmYWJyaWNTZWxlY3QuX2lkKVxyXG4gICAgICAgICAgICBzZXREYXRhU3R5bGUobmV3RGF0YVN0eWxlKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdEYXRhU3R5bGUpXHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgfSwgNzAwKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmdGYWJyaWMoZmFsc2UpXHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG9wZW5TdHlsZSxcclxuICAgICAgICBsaXN0U3R5bGUsXHJcbiAgICAgICAgZmFicmljTGlzdCxcclxuICAgICAgICBzdHlsZVNlbGVjdCxcclxuICAgICAgICBmYWJyaWNTZWxlY3QsXHJcbiAgICAgICAgZGF0YVN0eWxlLFxyXG4gICAgICAgIGlzTG9hZGluZyxcclxuICAgICAgICBpc0xvYWRpbmdGYWJyaWMsXHJcbiAgICAgICAgcG92LFxyXG4gICAgICAgIHVwZGF0ZVBvdixcclxuICAgICAgICBzZXRQb3YsXHJcbiAgICAgICAgc2V0RGF0YVN0eWxlLFxyXG4gICAgICAgIHNldElzTG9hZGluZyxcclxuICAgICAgICBzZXRPcGVuU3R5bGUsXHJcbiAgICAgICAgc2V0RmFicmljTGlzdCxcclxuICAgICAgICBzZXRTdHlsZVNlbGVjdCxcclxuICAgICAgICBzZXRGYWJyaWNTZWxlY3QsXHJcbiAgICAgICAgc2V0SXNMb2FkaW5nRmFicmljLFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHVzZUhvb2tDdXN0b20iXSwic291cmNlUm9vdCI6IiJ9