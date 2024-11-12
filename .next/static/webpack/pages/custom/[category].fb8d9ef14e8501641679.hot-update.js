webpackHotUpdate_N_E("pages/custom/[category]",{

/***/ "./components/partials/custom/hookCustom.js":
/*!**************************************************!*\
  !*** ./components/partials/custom/hookCustom.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.12.5/node_modules/@babel/runtime/regenerator */ "./node_modules/.pnpm/@babel+runtime@7.12.5/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.12.5/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/.pnpm/@babel+runtime@7.12.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





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

  var initialPov = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'FRONT';

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      fabricList = _useState[0],
      setFabricList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(initStyle),
      dataStyle = _useState2[0],
      setDataStyle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      isLoading = _useState3[0],
      setIsLoading = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      isLoadingFabric = _useState4[0],
      setIsLoadingFabric = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(initialPov),
      pov = _useState5[0],
      setPov = _useState5[1];

  var fabricSelectRef = useRef(null);
  var updatePov = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (newPov) {
    console.log('Updating POV to:', newPov);
    setPov(newPov);
  }, []);
  var setFabricSelect = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (fabric) {
    console.log('Setting fabricSelect:', fabric);
    fabricSelectRef.current = fabric;
  }, []);
  var getCustomStyle = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])( /*#__PURE__*/Object(D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var url, params, response, _response$data, status, data;

    return D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("Getting custom style for POV:", pov);
            console.log("Current fabricSelect:", fabricSelectRef.current);
            setIsLoading(true);
            setIsLoadingFabric(true);
            _context.prev = 4;

            if (!(!fabricSelectRef.current || !fabricSelectRef.current._id)) {
              _context.next = 8;
              break;
            }

            console.error("No fabric selected or fabric ID is missing");
            return _context.abrupt("return");

          case 8:
            url = new URL('/api/custom/custom_style', window.location.origin);
            params = new URLSearchParams({
              fabric: fabricSelectRef.current._id,
              collar: dataStyle.collar.name,
              cuffs: dataStyle.cuffs.name,
              sleeve: dataStyle.sleeve.name,
              bottom: dataStyle.bottom.name,
              chestpocket: dataStyle.pocket.name,
              placket: dataStyle.placket.name,
              pov: pov
            });
            url.search = params.toString();
            console.log("Request URL:", url.toString());
            _context.next = 14;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url.toString());

          case 14:
            response = _context.sent;
            console.log("API Response:", response.data);
            _response$data = response.data, status = _response$data.status, data = _response$data.data;

            if (status) {
              setDataStyle(function (prevState) {
                var _data$styles$collar, _data$styles$collar2, _data$styles$sleeve, _data$styles$sleeve2, _data$styles$chestpoc, _data$styles$chestpoc2, _data$styles$placket, _data$styles$placket2, _data$styles$cuffs, _data$styles$cuffs2, _data$styles$bottom, _data$styles$bottom2, _data$styles$collarBa, _data$styles$collarBa2, _data$styles$cuffsBac, _data$styles$cuffsBac2, _data$styles$pocketFo, _data$styles$pocketFo2, _data$styles$placketF, _data$styles$placketF2, _data$styles$collarFo, _data$styles$collarFo2, _data$styles$cuffsFol, _data$styles$cuffsFol2;

                return _objectSpread(_objectSpread({}, prevState), {}, {
                  collar: {
                    name: ((_data$styles$collar = data.styles.collar) === null || _data$styles$collar === void 0 ? void 0 : _data$styles$collar.name) || prevState.collar.name,
                    image: ((_data$styles$collar2 = data.styles.collar) === null || _data$styles$collar2 === void 0 ? void 0 : _data$styles$collar2.image) || prevState.collar.image
                  },
                  sleeve: {
                    name: ((_data$styles$sleeve = data.styles.sleeve) === null || _data$styles$sleeve === void 0 ? void 0 : _data$styles$sleeve.name) || prevState.sleeve.name,
                    image: ((_data$styles$sleeve2 = data.styles.sleeve) === null || _data$styles$sleeve2 === void 0 ? void 0 : _data$styles$sleeve2.image) || prevState.sleeve.image
                  },
                  pocket: {
                    name: ((_data$styles$chestpoc = data.styles.chestpocket) === null || _data$styles$chestpoc === void 0 ? void 0 : _data$styles$chestpoc.name) || prevState.pocket.name,
                    image: ((_data$styles$chestpoc2 = data.styles.chestpocket) === null || _data$styles$chestpoc2 === void 0 ? void 0 : _data$styles$chestpoc2.image) || prevState.pocket.image
                  },
                  placket: {
                    name: ((_data$styles$placket = data.styles.placket) === null || _data$styles$placket === void 0 ? void 0 : _data$styles$placket.name) || prevState.placket.name,
                    image: ((_data$styles$placket2 = data.styles.placket) === null || _data$styles$placket2 === void 0 ? void 0 : _data$styles$placket2.image) || prevState.placket.image
                  },
                  cuffs: {
                    name: ((_data$styles$cuffs = data.styles.cuffs) === null || _data$styles$cuffs === void 0 ? void 0 : _data$styles$cuffs.name) || prevState.cuffs.name,
                    image: ((_data$styles$cuffs2 = data.styles.cuffs) === null || _data$styles$cuffs2 === void 0 ? void 0 : _data$styles$cuffs2.image) || prevState.cuffs.image
                  },
                  bottom: {
                    name: ((_data$styles$bottom = data.styles.bottom) === null || _data$styles$bottom === void 0 ? void 0 : _data$styles$bottom.name) || prevState.bottom.name,
                    image: ((_data$styles$bottom2 = data.styles.bottom) === null || _data$styles$bottom2 === void 0 ? void 0 : _data$styles$bottom2.image) || prevState.bottom.image
                  },
                  collarBack: {
                    name: ((_data$styles$collarBa = data.styles.collarBack) === null || _data$styles$collarBa === void 0 ? void 0 : _data$styles$collarBa.name) || prevState.collarBack.name,
                    image: ((_data$styles$collarBa2 = data.styles.collarBack) === null || _data$styles$collarBa2 === void 0 ? void 0 : _data$styles$collarBa2.image) || prevState.collarBack.image
                  },
                  cuffsBack: {
                    name: ((_data$styles$cuffsBac = data.styles.cuffsBack) === null || _data$styles$cuffsBac === void 0 ? void 0 : _data$styles$cuffsBac.name) || prevState.cuffsBack.name,
                    image: ((_data$styles$cuffsBac2 = data.styles.cuffsBack) === null || _data$styles$cuffsBac2 === void 0 ? void 0 : _data$styles$cuffsBac2.image) || prevState.cuffsBack.image
                  },
                  pocketFold: {
                    name: ((_data$styles$pocketFo = data.styles.pocketFold) === null || _data$styles$pocketFo === void 0 ? void 0 : _data$styles$pocketFo.name) || prevState.pocketFold.name,
                    image: ((_data$styles$pocketFo2 = data.styles.pocketFold) === null || _data$styles$pocketFo2 === void 0 ? void 0 : _data$styles$pocketFo2.image) || prevState.pocketFold.image
                  },
                  placketFold: {
                    name: ((_data$styles$placketF = data.styles.placketFold) === null || _data$styles$placketF === void 0 ? void 0 : _data$styles$placketF.name) || prevState.placketFold.name,
                    image: ((_data$styles$placketF2 = data.styles.placketFold) === null || _data$styles$placketF2 === void 0 ? void 0 : _data$styles$placketF2.image) || prevState.placketFold.image
                  },
                  collarFold: {
                    name: ((_data$styles$collarFo = data.styles.collarFold) === null || _data$styles$collarFo === void 0 ? void 0 : _data$styles$collarFo.name) || prevState.collarFold.name,
                    image: ((_data$styles$collarFo2 = data.styles.collarFold) === null || _data$styles$collarFo2 === void 0 ? void 0 : _data$styles$collarFo2.image) || prevState.collarFold.image
                  },
                  cuffsFold: {
                    name: ((_data$styles$cuffsFol = data.styles.cuffsFold) === null || _data$styles$cuffsFol === void 0 ? void 0 : _data$styles$cuffsFol.name) || prevState.cuffsFold.name,
                    image: ((_data$styles$cuffsFol2 = data.styles.cuffsFold) === null || _data$styles$cuffsFol2 === void 0 ? void 0 : _data$styles$cuffsFol2.image) || prevState.cuffsFold.image
                  }
                });
              });
            } else {
              console.error("API returned error status");
            }

            _context.next = 23;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](4);
            console.error("Error in getCustomStyle:", _context.t0);

          case 23:
            _context.prev = 23;
            setIsLoading(false);
            setIsLoadingFabric(false);
            return _context.finish(23);

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 20, 23, 27]]);
  })), [pov, dataStyle]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    console.log('POV changed in useHookCustom:', pov);
    console.log('Current fabricSelect when POV changed:', fabricSelectRef.current);

    if (fabricSelectRef.current && fabricSelectRef.current._id && pov) {
      getCustomStyle();
    }
  }, [pov, getCustomStyle]);
  return {
    fabricList: fabricList,
    setFabricList: setFabricList,
    fabricSelect: fabricSelectRef.current,
    setFabricSelect: setFabricSelect,
    dataStyle: dataStyle,
    setDataStyle: setDataStyle,
    isLoading: isLoading,
    isLoadingFabric: isLoadingFabric,
    pov: pov,
    updatePov: updatePov,
    getCustomStyle: getCustomStyle
  };
};

_s(useHookCustom, "zHcdhv/sPWQ35nXAZaRVjHhhnZQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9jdXN0b20vaG9va0N1c3RvbS5qcyJdLCJuYW1lcyI6WyJpbml0U3R5bGUiLCJ1c2VIb29rQ3VzdG9tIiwiaW5pdGlhbFBvdiIsInVzZVN0YXRlIiwiZmFicmljTGlzdCIsInNldEZhYnJpY0xpc3QiLCJkYXRhU3R5bGUiLCJzZXREYXRhU3R5bGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0xvYWRpbmdGYWJyaWMiLCJzZXRJc0xvYWRpbmdGYWJyaWMiLCJwb3YiLCJzZXRQb3YiLCJmYWJyaWNTZWxlY3RSZWYiLCJ1c2VSZWYiLCJ1cGRhdGVQb3YiLCJ1c2VDYWxsYmFjayIsIm5ld1BvdiIsImNvbnNvbGUiLCJsb2ciLCJzZXRGYWJyaWNTZWxlY3QiLCJmYWJyaWMiLCJjdXJyZW50IiwiZ2V0Q3VzdG9tU3R5bGUiLCJfaWQiLCJlcnJvciIsInVybCIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiY29sbGFyIiwibmFtZSIsImN1ZmZzIiwic2xlZXZlIiwiYm90dG9tIiwiY2hlc3Rwb2NrZXQiLCJwb2NrZXQiLCJwbGFja2V0Iiwic2VhcmNoIiwidG9TdHJpbmciLCJheGlvcyIsImdldCIsInJlc3BvbnNlIiwiZGF0YSIsInN0YXR1cyIsInByZXZTdGF0ZSIsInN0eWxlcyIsImltYWdlIiwiY29sbGFyQmFjayIsImN1ZmZzQmFjayIsInBvY2tldEZvbGQiLCJwbGFja2V0Rm9sZCIsImNvbGxhckZvbGQiLCJjdWZmc0ZvbGQiLCJ1c2VFZmZlY3QiLCJmYWJyaWNTZWxlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFRQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEIsWUFBVTtBQUNSLGFBQVMsRUFERDtBQUVSLFlBQVE7QUFGQSxHQURNO0FB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d2VicGFjay9wYWdlcy9jdXN0b20vW2NhdGVnb3J5XS5mYjhkOWVmMTRlODUwMTY0MTY3OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBCbGF6ZXJMaXN0U3R5bGUsXHJcbiAgU2hpcnRMaXN0U3R5bGUsXHJcbiAgVHJvdXNlckxpc3RTdHlsZSxcclxuICBWZXN0TGlzdFN0eWxlLFxyXG4gIEJhdGlrTGlzdFN0eWxlXHJcbn0gZnJvbSAnLi9zaWRlYmFyL2RhdGFTaWRlYmFyJztcclxuXHJcbmNvbnN0IGluaXRTdHlsZSA9IHtcclxuICBcImJvdHRvbVwiOiB7XHJcbiAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICBcIm5hbWVcIjogXCJTcXVhcmVcIlxyXG4gIH0sXHJcbiAgXCJjb2xsYXJcIjoge1xyXG4gICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgXCJuYW1lXCI6IFwiU3RhbmQgVXBcIlxyXG4gIH0sXHJcbiAgXCJjb2xsYXJCYWNrXCI6IHtcclxuICAgIFwiaW1hZ2VcIjogXCIvaW1nL3BsZWF0cy9yZWQvQ29sbGFyIEJhY2suc3ZnXCIsXHJcbiAgICBcIm5hbWVcIjogXCJTdGFuZCBVcFwiXHJcbiAgfSxcclxuICBcInNsZWV2ZVwiOiB7XHJcbiAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICBcIm5hbWVcIjogXCJTaG9ydFwiXHJcbiAgfSxcclxuICBcImN1ZmZzXCI6IHtcclxuICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgIFwibmFtZVwiOiBcIlNxdWFyZSBGcmVuY2hcIlxyXG4gIH0sXHJcbiAgXCJjdWZmc0JhY2tcIjoge1xyXG4gICAgXCJpbWFnZVwiOiBcIi9pbWcvc2xlZXZlX2JhY2svQ3VmZnMgRG91YmxlIFJvdW5kZWQgRnJlbmNoIEJhY2suc3ZnXCIsXHJcbiAgICBcIm5hbWVcIjogXCJTcXVhcmUgRnJlbmNoXCJcclxuICB9LFxyXG4gIFwicG9ja2V0XCI6IHtcclxuICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgIFwibmFtZVwiOiBcIldpdGggRmxhcFwiXHJcbiAgfSxcclxuICBcInBsYWNrZXRcIjoge1xyXG4gICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgXCJuYW1lXCI6IFwiU3RhbmRhcmQgQm9keSBVbnR1Y2tlZCBXaXRoIFNxdWFyZVwiXHJcbiAgfSxcclxuICBcInBsZWF0c1wiOiB7XHJcbiAgICBcImltYWdlXCI6IFwiL2ltZy9wbGVhdHMvcmVkL1BsZWF0cyBCb3ggVHVja2VkLnN2Z1wiLFxyXG4gICAgXCJuYW1lXCI6IFwiUGxlYXRzXCJcclxuICB9LFxyXG4gIFwiY29sbGFyRm9sZFwiOiB7XHJcbiAgICBcImltYWdlXCI6IFwiXCJcclxuICB9LFxyXG4gIFwiY3VmZnNGb2xkXCI6IHtcclxuICAgIFwiaW1hZ2VcIjogXCJcIlxyXG4gIH0sXHJcbiAgXCJwb2NrZXRGb2xkXCI6IHtcclxuICAgIFwiaW1hZ2VcIjogXCJcIlxyXG4gICAgLy8gXCJpbWFnZVwiOlwiL2ltZy9wbGVhdHMvcmVkL0NoZXN0IFBvY2tldCBGb2xkZWQuc3ZnXCJcclxuICB9LFxyXG4gIFwicGxhY2tldEZvbGRcIjoge1xyXG4gICAgXCJpbWFnZVwiOiBcIi9pbWcvZm9sZGVkL3JlZC9wbGVhdHMvUGxhY2tldCBTdGFuZGFyZCBCb2R5IEZvbGRlZC5zdmdcIlxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHVzZUhvb2tDdXN0b20gPSAoaW5pdGlhbFBvdiA9ICdGUk9OVCcpID0+IHtcclxuICBjb25zdCBbZmFicmljTGlzdCwgc2V0RmFicmljTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2RhdGFTdHlsZSwgc2V0RGF0YVN0eWxlXSA9IHVzZVN0YXRlKGluaXRTdHlsZSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNMb2FkaW5nRmFicmljLCBzZXRJc0xvYWRpbmdGYWJyaWNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwb3YsIHNldFBvdl0gPSB1c2VTdGF0ZShpbml0aWFsUG92KTtcclxuXHJcbiAgY29uc3QgZmFicmljU2VsZWN0UmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCB1cGRhdGVQb3YgPSB1c2VDYWxsYmFjaygobmV3UG92KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnVXBkYXRpbmcgUE9WIHRvOicsIG5ld1Bvdik7XHJcbiAgICBzZXRQb3YobmV3UG92KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNldEZhYnJpY1NlbGVjdCA9IHVzZUNhbGxiYWNrKChmYWJyaWMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdTZXR0aW5nIGZhYnJpY1NlbGVjdDonLCBmYWJyaWMpO1xyXG4gICAgZmFicmljU2VsZWN0UmVmLmN1cnJlbnQgPSBmYWJyaWM7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBnZXRDdXN0b21TdHlsZSA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiR2V0dGluZyBjdXN0b20gc3R5bGUgZm9yIFBPVjpcIiwgcG92KTtcclxuICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCBmYWJyaWNTZWxlY3Q6XCIsIGZhYnJpY1NlbGVjdFJlZi5jdXJyZW50KTtcclxuXHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRJc0xvYWRpbmdGYWJyaWModHJ1ZSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCFmYWJyaWNTZWxlY3RSZWYuY3VycmVudCB8fCAhZmFicmljU2VsZWN0UmVmLmN1cnJlbnQuX2lkKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIGZhYnJpYyBzZWxlY3RlZCBvciBmYWJyaWMgSUQgaXMgbWlzc2luZ1wiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCB1cmwgPSBuZXcgVVJMKCcvYXBpL2N1c3RvbS9jdXN0b21fc3R5bGUnLCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKTtcclxuICAgICAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xyXG4gICAgICAgIGZhYnJpYzogZmFicmljU2VsZWN0UmVmLmN1cnJlbnQuX2lkLFxyXG4gICAgICAgIGNvbGxhcjogZGF0YVN0eWxlLmNvbGxhci5uYW1lLFxyXG4gICAgICAgIGN1ZmZzOiBkYXRhU3R5bGUuY3VmZnMubmFtZSxcclxuICAgICAgICBzbGVldmU6IGRhdGFTdHlsZS5zbGVldmUubmFtZSxcclxuICAgICAgICBib3R0b206IGRhdGFTdHlsZS5ib3R0b20ubmFtZSxcclxuICAgICAgICBjaGVzdHBvY2tldDogZGF0YVN0eWxlLnBvY2tldC5uYW1lLFxyXG4gICAgICAgIHBsYWNrZXQ6IGRhdGFTdHlsZS5wbGFja2V0Lm5hbWUsXHJcbiAgICAgICAgcG92OiBwb3ZcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB1cmwuc2VhcmNoID0gcGFyYW1zLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcIlJlcXVlc3QgVVJMOlwiLCB1cmwudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwudG9TdHJpbmcoKSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQVBJIFJlc3BvbnNlOlwiLCByZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICBpZiAoc3RhdHVzKSB7XHJcbiAgICAgICAgc2V0RGF0YVN0eWxlKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICAgICAgY29sbGFyOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IGRhdGEuc3R5bGVzLmNvbGxhcj8ubmFtZSB8fCBwcmV2U3RhdGUuY29sbGFyLm5hbWUsXHJcbiAgICAgICAgICAgIGltYWdlOiBkYXRhLnN0eWxlcy5jb2xsYXI/LmltYWdlIHx8IHByZXZTdGF0ZS5jb2xsYXIuaW1hZ2VcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzbGVldmU6IHtcclxuICAgICAgICAgICAgbmFtZTogZGF0YS5zdHlsZXMuc2xlZXZlPy5uYW1lIHx8IHByZXZTdGF0ZS5zbGVldmUubmFtZSxcclxuICAgICAgICAgICAgaW1hZ2U6IGRhdGEuc3R5bGVzLnNsZWV2ZT8uaW1hZ2UgfHwgcHJldlN0YXRlLnNsZWV2ZS5pbWFnZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHBvY2tldDoge1xyXG4gICAgICAgICAgICBuYW1lOiBkYXRhLnN0eWxlcy5jaGVzdHBvY2tldD8ubmFtZSB8fCBwcmV2U3RhdGUucG9ja2V0Lm5hbWUsXHJcbiAgICAgICAgICAgIGltYWdlOiBkYXRhLnN0eWxlcy5jaGVzdHBvY2tldD8uaW1hZ2UgfHwgcHJldlN0YXRlLnBvY2tldC5pbWFnZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHBsYWNrZXQ6IHtcclxuICAgICAgICAgICAgbmFtZTogZGF0YS5zdHlsZXMucGxhY2tldD8ubmFtZSB8fCBwcmV2U3RhdGUucGxhY2tldC5uYW1lLFxyXG4gICAgICAgICAgICBpbWFnZTogZGF0YS5zdHlsZXMucGxhY2tldD8uaW1hZ2UgfHwgcHJldlN0YXRlLnBsYWNrZXQuaW1hZ2VcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjdWZmczoge1xyXG4gICAgICAgICAgICBuYW1lOiBkYXRhLnN0eWxlcy5jdWZmcz8ubmFtZSB8fCBwcmV2U3RhdGUuY3VmZnMubmFtZSxcclxuICAgICAgICAgICAgaW1hZ2U6IGRhdGEuc3R5bGVzLmN1ZmZzPy5pbWFnZSB8fCBwcmV2U3RhdGUuY3VmZnMuaW1hZ2VcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib3R0b206IHtcclxuICAgICAgICAgICAgbmFtZTogZGF0YS5zdHlsZXMuYm90dG9tPy5uYW1lIHx8IHByZXZTdGF0ZS5ib3R0b20ubmFtZSxcclxuICAgICAgICAgICAgaW1hZ2U6IGRhdGEuc3R5bGVzLmJvdHRvbT8uaW1hZ2UgfHwgcHJldlN0YXRlLmJvdHRvbS5pbWFnZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbGxhckJhY2s6IHtcclxuICAgICAgICAgICAgbmFtZTogZGF0YS5zdHlsZXMuY29sbGFyQmFjaz8ubmFtZSB8fCBwcmV2U3RhdGUuY29sbGFyQmFjay5uYW1lLFxyXG4gICAgICAgICAgICBpbWFnZTogZGF0YS5zdHlsZXMuY29sbGFyQmFjaz8uaW1hZ2UgfHwgcHJldlN0YXRlLmNvbGxhckJhY2suaW1hZ2VcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjdWZmc0JhY2s6IHtcclxuICAgICAgICAgICAgbmFtZTogZGF0YS5zdHlsZXMuY3VmZnNCYWNrPy5uYW1lIHx8IHByZXZTdGF0ZS5jdWZmc0JhY2submFtZSxcclxuICAgICAgICAgICAgaW1hZ2U6IGRhdGEuc3R5bGVzLmN1ZmZzQmFjaz8uaW1hZ2UgfHwgcHJldlN0YXRlLmN1ZmZzQmFjay5pbWFnZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHBvY2tldEZvbGQ6IHtcclxuICAgICAgICAgICAgbmFtZTogZGF0YS5zdHlsZXMucG9ja2V0Rm9sZD8ubmFtZSB8fCBwcmV2U3RhdGUucG9ja2V0Rm9sZC5uYW1lLFxyXG4gICAgICAgICAgICBpbWFnZTogZGF0YS5zdHlsZXMucG9ja2V0Rm9sZD8uaW1hZ2UgfHwgcHJldlN0YXRlLnBvY2tldEZvbGQuaW1hZ2VcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwbGFja2V0Rm9sZDoge1xyXG4gICAgICAgICAgICBuYW1lOiBkYXRhLnN0eWxlcy5wbGFja2V0Rm9sZD8ubmFtZSB8fCBwcmV2U3RhdGUucGxhY2tldEZvbGQubmFtZSxcclxuICAgICAgICAgICAgaW1hZ2U6IGRhdGEuc3R5bGVzLnBsYWNrZXRGb2xkPy5pbWFnZSB8fCBwcmV2U3RhdGUucGxhY2tldEZvbGQuaW1hZ2VcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb2xsYXJGb2xkOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IGRhdGEuc3R5bGVzLmNvbGxhckZvbGQ/Lm5hbWUgfHwgcHJldlN0YXRlLmNvbGxhckZvbGQubmFtZSxcclxuICAgICAgICAgICAgaW1hZ2U6IGRhdGEuc3R5bGVzLmNvbGxhckZvbGQ/LmltYWdlIHx8IHByZXZTdGF0ZS5jb2xsYXJGb2xkLmltYWdlXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY3VmZnNGb2xkOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IGRhdGEuc3R5bGVzLmN1ZmZzRm9sZD8ubmFtZSB8fCBwcmV2U3RhdGUuY3VmZnNGb2xkLm5hbWUsXHJcbiAgICAgICAgICAgIGltYWdlOiBkYXRhLnN0eWxlcy5jdWZmc0ZvbGQ/LmltYWdlIHx8IHByZXZTdGF0ZS5jdWZmc0ZvbGQuaW1hZ2VcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBUEkgcmV0dXJuZWQgZXJyb3Igc3RhdHVzXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBnZXRDdXN0b21TdHlsZTpcIiwgZSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRJc0xvYWRpbmdGYWJyaWMoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtwb3YsIGRhdGFTdHlsZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1BPViBjaGFuZ2VkIGluIHVzZUhvb2tDdXN0b206JywgcG92KTtcclxuICAgIGNvbnNvbGUubG9nKCdDdXJyZW50IGZhYnJpY1NlbGVjdCB3aGVuIFBPViBjaGFuZ2VkOicsIGZhYnJpY1NlbGVjdFJlZi5jdXJyZW50KTtcclxuICAgIGlmIChmYWJyaWNTZWxlY3RSZWYuY3VycmVudCAmJiBmYWJyaWNTZWxlY3RSZWYuY3VycmVudC5faWQgJiYgcG92KSB7XHJcbiAgICAgIGdldEN1c3RvbVN0eWxlKCk7XHJcbiAgICB9XHJcbiAgfSwgW3BvdiwgZ2V0Q3VzdG9tU3R5bGVdKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGZhYnJpY0xpc3QsXHJcbiAgICBzZXRGYWJyaWNMaXN0LFxyXG4gICAgZmFicmljU2VsZWN0OiBmYWJyaWNTZWxlY3RSZWYuY3VycmVudCxcclxuICAgIHNldEZhYnJpY1NlbGVjdCxcclxuICAgIGRhdGFTdHlsZSxcclxuICAgIHNldERhdGFTdHlsZSxcclxuICAgIGlzTG9hZGluZyxcclxuICAgIGlzTG9hZGluZ0ZhYnJpYyxcclxuICAgIHBvdixcclxuICAgIHVwZGF0ZVBvdixcclxuICAgIGdldEN1c3RvbVN0eWxlXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUhvb2tDdXN0b207Il0sInNvdXJjZVJvb3QiOiIifQ==