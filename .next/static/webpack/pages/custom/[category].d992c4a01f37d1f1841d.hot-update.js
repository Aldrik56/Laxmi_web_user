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

  var initialPov = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'FRONT';

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      fabricList = _useState[0],
      setFabricList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    collar: {
      name: '',
      image: ''
    },
    sleeve: {
      name: '',
      image: ''
    },
    pocket: {
      name: '',
      image: ''
    },
    placket: {
      name: '',
      image: ''
    },
    cuffs: {
      name: '',
      image: ''
    },
    bottom: {
      name: '',
      image: ''
    }
  }),
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
                var _data$styles$collar, _data$styles$collar2, _data$styles$sleeve, _data$styles$sleeve2, _data$styles$chestpoc, _data$styles$chestpoc2, _data$styles$placket, _data$styles$placket2, _data$styles$cuffs, _data$styles$cuffs2, _data$styles$bottom, _data$styles$bottom2;

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

_s(useHookCustom, "11cXBgkUBSIBKA5MK5+LA0cM7sk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9jdXN0b20vaG9va0N1c3RvbS5qcyJdLCJuYW1lcyI6WyJpbml0U3R5bGUiLCJ1c2VIb29rQ3VzdG9tIiwiaW5pdGlhbFBvdiIsInVzZVN0YXRlIiwiZmFicmljTGlzdCIsInNldEZhYnJpY0xpc3QiLCJjb2xsYXIiLCJuYW1lIiwiaW1hZ2UiLCJzbGVldmUiLCJwb2NrZXQiLCJwbGFja2V0IiwiY3VmZnMiLCJib3R0b20iLCJkYXRhU3R5bGUiLCJzZXREYXRhU3R5bGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0xvYWRpbmdGYWJyaWMiLCJzZXRJc0xvYWRpbmdGYWJyaWMiLCJwb3YiLCJzZXRQb3YiLCJmYWJyaWNTZWxlY3RSZWYiLCJ1c2VSZWYiLCJ1cGRhdGVQb3YiLCJ1c2VDYWxsYmFjayIsIm5ld1BvdiIsImNvbnNvbGUiLCJsb2ciLCJzZXRGYWJyaWNTZWxlY3QiLCJmYWJyaWMiLCJjdXJyZW50IiwiZ2V0Q3VzdG9tU3R5bGUiLCJfaWQiLCJlcnJvciIsInVybCIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiY2hlc3Rwb2NrZXQiLCJzZWFyY2giLCJ0b1N0cmluZyIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwic3RhdHVzIiwicHJldlN0YXRlIiwic3R5bGVzIiwidXNlRWZmZWN0IiwiZmFicmljU2VsZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUVBO0FBQ0E7QUFDQTtBQVNBLElBQU1BLFNBQVMsR0FBRztBQUNkLFlBQVU7QUFDTixhQUFTLEVBREg7QUFFTixZQUFRO0FBRkYsR0FESTtBQUtkLFlBQVU7QUFDTixhQUFTLEVBREg7QUFFTixZQUFRO0FBRkYsR0FMSTtBQVNkLGdCQUFjO0FBQ1YsYUFBUyxpQ0FEQztBQUVWLFlB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LENBQUMsS0FBRCxDQUFaO0FBQ0FFLDhCQUFrQixDQUFDLEtBQUQsQ0FBbEI7QUFwRStCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFzRS9CLENBQUNDLEdBQUQsRUFBTU4sU0FBTixDQXRFK0IsQ0FBbEM7QUF3RUFzQyx5REFBUyxDQUFDLFlBQU07QUFDZHpCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLCtCQUFaLEVBQTZDUixHQUE3QztBQUNBTyxXQUFPLENBQUNDLEdBQVIsQ0FBWSx3Q0FBWixFQUFzRE4sZUFBZSxDQUFDUyxPQUF0RTs7QUFDQSxRQUFJVCxlQUFlLENBQUNTLE9BQWhCLElBQTJCVCxlQUFlLENBQUNTLE9BQWhCLENBQXdCRSxHQUFuRCxJQUEwRGIsR0FBOUQsRUFBbUU7QUFDakVZLG9CQUFjO0FBQ2Y7QUFDRixHQU5RLEVBTU4sQ0FBQ1osR0FBRCxFQUFNWSxjQUFOLENBTk0sQ0FBVDtBQVFBLFNBQU87QUFDTDVCLGNBQVUsRUFBVkEsVUFESztBQUVMQyxpQkFBYSxFQUFiQSxhQUZLO0FBR0xnRCxnQkFBWSxFQUFFL0IsZUFBZSxDQUFDUyxPQUh6QjtBQUlMRixtQkFBZSxFQUFmQSxlQUpLO0FBS0xmLGFBQVMsRUFBVEEsU0FMSztBQU1MQyxnQkFBWSxFQUFaQSxZQU5LO0FBT0xDLGFBQVMsRUFBVEEsU0FQSztBQVFMRSxtQkFBZSxFQUFmQSxlQVJLO0FBU0xFLE9BQUcsRUFBSEEsR0FUSztBQVVMSSxhQUFTLEVBQVRBLFNBVks7QUFXTFEsa0JBQWMsRUFBZEE7QUFYSyxHQUFQO0FBYUQsQ0F2SEQ7O0dBQU0vQixhOztBQXlIU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3VzdG9tL1tjYXRlZ29yeV0uZDk5MmM0YTAxZjM3ZDFmMTg0MWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuLy8gaW1wb3J0IGZyZW5jaFBsYWNrZXQgZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9pbWcvcGxhY2tldC9QbGFja2V0IEZyZW5jaC5zdmdcIjtcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7XHJcbiAgICBCbGF6ZXJMaXN0U3R5bGUsXHJcbiAgICBTaGlydExpc3RTdHlsZSxcclxuICAgIFRyb3VzZXJMaXN0U3R5bGUsXHJcbiAgICBWZXN0TGlzdFN0eWxlLFxyXG4gICAgQmF0aWtMaXN0U3R5bGVcclxufSBmcm9tICcuL3NpZGViYXIvZGF0YVNpZGViYXInXHJcblxyXG5cclxuY29uc3QgaW5pdFN0eWxlID0ge1xyXG4gICAgXCJib3R0b21cIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTcXVhcmVcIlxyXG4gICAgfSxcclxuICAgIFwiY29sbGFyXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU3RhbmQgVXBcIlxyXG4gICAgfSxcclxuICAgIFwiY29sbGFyQmFja1wiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIi9pbWcvcGxlYXRzL3JlZC9Db2xsYXIgQmFjay5zdmdcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTdGFuZCBVcFwiXHJcbiAgICB9LFxyXG4gICAgXCJzbGVldmVcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTaG9ydFwiXHJcbiAgICB9LFxyXG4gICAgXCJjdWZmc1wiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlNxdWFyZSBGcmVuY2hcIlxyXG4gICAgfSxcclxuICAgIFwiY3VmZnNCYWNrXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiL2ltZy9zbGVldmVfYmFjay9DdWZmcyBEb3VibGUgUm91bmRlZCBGcmVuY2ggQmFjay5zdmdcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTcXVhcmUgRnJlbmNoXCJcclxuICAgIH0sXHJcbiAgICBcInBvY2tldFwiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIldpdGggRmxhcFwiXHJcbiAgICB9LFxyXG4gICAgXCJwbGFja2V0XCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU3RhbmRhcmQgQm9keSBVbnR1Y2tlZCBXaXRoIFNxdWFyZVwiXHJcbiAgICB9LFxyXG4gICAgXCJwbGVhdHNcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCIvaW1nL3BsZWF0cy9yZWQvUGxlYXRzIEJveCBUdWNrZWQuc3ZnXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiUGxlYXRzXCJcclxuICAgIH0sXHJcbiAgICBcImNvbGxhckZvbGRcIjp7XHJcbiAgICAgICAgXCJpbWFnZVwiOlwiXCJcclxuICAgIH0sXHJcbiAgICBcImN1ZmZzRm9sZFwiOntcclxuICAgICAgICBcImltYWdlXCI6XCJcIlxyXG4gICAgfSxcclxuICAgIFwicG9ja2V0Rm9sZFwiOntcclxuICAgICAgICBcImltYWdlXCI6XCJcIlxyXG4gICAgICAgIC8vIFwiaW1hZ2VcIjpcIi9pbWcvcGxlYXRzL3JlZC9DaGVzdCBQb2NrZXQgRm9sZGVkLnN2Z1wiXHJcbiAgICB9LFxyXG4gICAgXCJwbGFja2V0Rm9sZFwiOntcclxuICAgICAgICBcImltYWdlXCI6XCIvaW1nL2ZvbGRlZC9yZWQvcGxlYXRzL1BsYWNrZXQgU3RhbmRhcmQgQm9keSBGb2xkZWQuc3ZnXCJcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgdXNlSG9va0N1c3RvbSA9IChpbml0aWFsUG92ID0gJ0ZST05UJykgPT4ge1xyXG4gIGNvbnN0IFtmYWJyaWNMaXN0LCBzZXRGYWJyaWNMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZGF0YVN0eWxlLCBzZXREYXRhU3R5bGVdID0gdXNlU3RhdGUoe1xyXG4gICAgY29sbGFyOiB7IG5hbWU6ICcnLCBpbWFnZTogJycgfSxcclxuICAgIHNsZWV2ZTogeyBuYW1lOiAnJywgaW1hZ2U6ICcnIH0sXHJcbiAgICBwb2NrZXQ6IHsgbmFtZTogJycsIGltYWdlOiAnJyB9LFxyXG4gICAgcGxhY2tldDogeyBuYW1lOiAnJywgaW1hZ2U6ICcnIH0sXHJcbiAgICBjdWZmczogeyBuYW1lOiAnJywgaW1hZ2U6ICcnIH0sXHJcbiAgICBib3R0b206IHsgbmFtZTogJycsIGltYWdlOiAnJyB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZ0ZhYnJpYywgc2V0SXNMb2FkaW5nRmFicmljXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcG92LCBzZXRQb3ZdID0gdXNlU3RhdGUoaW5pdGlhbFBvdik7XHJcbiAgXHJcbiAgY29uc3QgZmFicmljU2VsZWN0UmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCB1cGRhdGVQb3YgPSB1c2VDYWxsYmFjaygobmV3UG92KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnVXBkYXRpbmcgUE9WIHRvOicsIG5ld1Bvdik7XHJcbiAgICBzZXRQb3YobmV3UG92KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNldEZhYnJpY1NlbGVjdCA9IHVzZUNhbGxiYWNrKChmYWJyaWMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdTZXR0aW5nIGZhYnJpY1NlbGVjdDonLCBmYWJyaWMpO1xyXG4gICAgZmFicmljU2VsZWN0UmVmLmN1cnJlbnQgPSBmYWJyaWM7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBnZXRDdXN0b21TdHlsZSA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiR2V0dGluZyBjdXN0b20gc3R5bGUgZm9yIFBPVjpcIiwgcG92KTtcclxuICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCBmYWJyaWNTZWxlY3Q6XCIsIGZhYnJpY1NlbGVjdFJlZi5jdXJyZW50KTtcclxuICAgIFxyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0SXNMb2FkaW5nRmFicmljKHRydWUpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghZmFicmljU2VsZWN0UmVmLmN1cnJlbnQgfHwgIWZhYnJpY1NlbGVjdFJlZi5jdXJyZW50Ll9pZCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBmYWJyaWMgc2VsZWN0ZWQgb3IgZmFicmljIElEIGlzIG1pc3NpbmdcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgdXJsID0gbmV3IFVSTCgnL2FwaS9jdXN0b20vY3VzdG9tX3N0eWxlJywgd2luZG93LmxvY2F0aW9uLm9yaWdpbik7XHJcbiAgICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcclxuICAgICAgICBmYWJyaWM6IGZhYnJpY1NlbGVjdFJlZi5jdXJyZW50Ll9pZCxcclxuICAgICAgICBjb2xsYXI6IGRhdGFTdHlsZS5jb2xsYXIubmFtZSxcclxuICAgICAgICBjdWZmczogZGF0YVN0eWxlLmN1ZmZzLm5hbWUsXHJcbiAgICAgICAgc2xlZXZlOiBkYXRhU3R5bGUuc2xlZXZlLm5hbWUsXHJcbiAgICAgICAgYm90dG9tOiBkYXRhU3R5bGUuYm90dG9tLm5hbWUsXHJcbiAgICAgICAgY2hlc3Rwb2NrZXQ6IGRhdGFTdHlsZS5wb2NrZXQubmFtZSxcclxuICAgICAgICBwbGFja2V0OiBkYXRhU3R5bGUucGxhY2tldC5uYW1lLFxyXG4gICAgICAgIHBvdjogcG92XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdXJsLnNlYXJjaCA9IHBhcmFtcy50b1N0cmluZygpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJSZXF1ZXN0IFVSTDpcIiwgdXJsLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsLnRvU3RyaW5nKCkpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkFQSSBSZXNwb25zZTpcIiwgcmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgaWYgKHN0YXR1cykge1xyXG4gICAgICAgIHNldERhdGFTdHlsZShwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgICAgIGNvbGxhcjogeyBcclxuICAgICAgICAgICAgbmFtZTogZGF0YS5zdHlsZXMuY29sbGFyPy5uYW1lIHx8IHByZXZTdGF0ZS5jb2xsYXIubmFtZSwgXHJcbiAgICAgICAgICAgIGltYWdlOiBkYXRhLnN0eWxlcy5jb2xsYXI/LmltYWdlIHx8IHByZXZTdGF0ZS5jb2xsYXIuaW1hZ2UgXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2xlZXZlOiB7IFxyXG4gICAgICAgICAgICBuYW1lOiBkYXRhLnN0eWxlcy5zbGVldmU/Lm5hbWUgfHwgcHJldlN0YXRlLnNsZWV2ZS5uYW1lLCBcclxuICAgICAgICAgICAgaW1hZ2U6IGRhdGEuc3R5bGVzLnNsZWV2ZT8uaW1hZ2UgfHwgcHJldlN0YXRlLnNsZWV2ZS5pbWFnZSBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwb2NrZXQ6IHsgXHJcbiAgICAgICAgICAgIG5hbWU6IGRhdGEuc3R5bGVzLmNoZXN0cG9ja2V0Py5uYW1lIHx8IHByZXZTdGF0ZS5wb2NrZXQubmFtZSwgXHJcbiAgICAgICAgICAgIGltYWdlOiBkYXRhLnN0eWxlcy5jaGVzdHBvY2tldD8uaW1hZ2UgfHwgcHJldlN0YXRlLnBvY2tldC5pbWFnZSBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwbGFja2V0OiB7IFxyXG4gICAgICAgICAgICBuYW1lOiBkYXRhLnN0eWxlcy5wbGFja2V0Py5uYW1lIHx8IHByZXZTdGF0ZS5wbGFja2V0Lm5hbWUsIFxyXG4gICAgICAgICAgICBpbWFnZTogZGF0YS5zdHlsZXMucGxhY2tldD8uaW1hZ2UgfHwgcHJldlN0YXRlLnBsYWNrZXQuaW1hZ2UgXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY3VmZnM6IHsgXHJcbiAgICAgICAgICAgIG5hbWU6IGRhdGEuc3R5bGVzLmN1ZmZzPy5uYW1lIHx8IHByZXZTdGF0ZS5jdWZmcy5uYW1lLCBcclxuICAgICAgICAgICAgaW1hZ2U6IGRhdGEuc3R5bGVzLmN1ZmZzPy5pbWFnZSB8fCBwcmV2U3RhdGUuY3VmZnMuaW1hZ2UgXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm90dG9tOiB7IFxyXG4gICAgICAgICAgICBuYW1lOiBkYXRhLnN0eWxlcy5ib3R0b20/Lm5hbWUgfHwgcHJldlN0YXRlLmJvdHRvbS5uYW1lLCBcclxuICAgICAgICAgICAgaW1hZ2U6IGRhdGEuc3R5bGVzLmJvdHRvbT8uaW1hZ2UgfHwgcHJldlN0YXRlLmJvdHRvbS5pbWFnZSBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBUEkgcmV0dXJuZWQgZXJyb3Igc3RhdHVzXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBnZXRDdXN0b21TdHlsZTpcIiwgZSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRJc0xvYWRpbmdGYWJyaWMoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtwb3YsIGRhdGFTdHlsZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1BPViBjaGFuZ2VkIGluIHVzZUhvb2tDdXN0b206JywgcG92KTtcclxuICAgIGNvbnNvbGUubG9nKCdDdXJyZW50IGZhYnJpY1NlbGVjdCB3aGVuIFBPViBjaGFuZ2VkOicsIGZhYnJpY1NlbGVjdFJlZi5jdXJyZW50KTtcclxuICAgIGlmIChmYWJyaWNTZWxlY3RSZWYuY3VycmVudCAmJiBmYWJyaWNTZWxlY3RSZWYuY3VycmVudC5faWQgJiYgcG92KSB7XHJcbiAgICAgIGdldEN1c3RvbVN0eWxlKCk7XHJcbiAgICB9XHJcbiAgfSwgW3BvdiwgZ2V0Q3VzdG9tU3R5bGVdKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGZhYnJpY0xpc3QsXHJcbiAgICBzZXRGYWJyaWNMaXN0LFxyXG4gICAgZmFicmljU2VsZWN0OiBmYWJyaWNTZWxlY3RSZWYuY3VycmVudCxcclxuICAgIHNldEZhYnJpY1NlbGVjdCxcclxuICAgIGRhdGFTdHlsZSxcclxuICAgIHNldERhdGFTdHlsZSxcclxuICAgIGlzTG9hZGluZyxcclxuICAgIGlzTG9hZGluZ0ZhYnJpYyxcclxuICAgIHBvdixcclxuICAgIHVwZGF0ZVBvdixcclxuICAgIGdldEN1c3RvbVN0eWxlXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUhvb2tDdXN0b207Il0sInNvdXJjZVJvb3QiOiIifQ==