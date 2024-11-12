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
var fabricSelectRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(fabricSelect);

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

  var povRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(pov);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    povRef.current = pov;
  }, [pov]);

  var updatePov = function updatePov(newPov) {
    setPov(newPov);
    console.log(newPov);
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
  })), [pov]);
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
      var url, params, response, _response$data2, status, data;

      return D_luarKampus_Magang_Bestada_laxmi_front_web_user_node_modules_pnpm_babel_runtime_7_12_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log("Getting custom style for POV:", povRef.current);
              setIsLoading(true);
              setIsLoadingFabric(true);
              _context4.prev = 3;

              if (!(!fabricSelectRef.current || !fabricSelectRef.current._id)) {
                _context4.next = 7;
                break;
              }

              console.error("No fabric selected or fabric ID is missing");
              return _context4.abrupt("return");

            case 7:
              url = new URL('/api/custom/custom_style', window.location.origin);
              params = new URLSearchParams({
                fabric: fabricSelectRef.current._id,
                collar: dataStyleRef.current.collar.name,
                cuffs: dataStyleRef.current.cuffs.name,
                sleeve: dataStyleRef.current.sleeve.name,
                bottom: dataStyleRef.current.bottom.name,
                chestpocket: dataStyleRef.current.pocket.name,
                placket: dataStyleRef.current.placket.name,
                pov: povRef.current
              });
              url.search = params.toString();
              console.log("Request URL:", url.toString());
              _context4.next = 13;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url.toString());

            case 13:
              response = _context4.sent;
              console.log("API Response:", response.data);
              _response$data2 = response.data, status = _response$data2.status, data = _response$data2.data;

              if (status) {
                setDataStyle(function (prevState) {
                  var _data$styles$collar, _data$styles$collar2, _data$styles$sleeve, _data$styles$sleeve2, _data$styles$chestpoc, _data$styles$chestpoc2, _data$styles$placket, _data$styles$placket2;

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
                    } // Add other style properties as needed

                  });
                });
              } else {
                console.error("API returned error status");
              }

              _context4.next = 22;
              break;

            case 19:
              _context4.prev = 19;
              _context4.t0 = _context4["catch"](3);
              console.error("Error in getCustomStyle:", _context4.t0);

            case 22:
              _context4.prev = 22;
              setIsLoading(false);
              setIsLoadingFabric(false);
              return _context4.finish(22);

            case 26:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[3, 19, 22, 26]]);
    }));

    return function getCustomStyle() {
      return _ref4.apply(this, arguments);
    };
  }(); // const getCustomStyle = async () => {
  //     console.log(fabricSelect);
  //     try {
  //         let placketName = "",
  //         isTucked = false;
  //         if(dataStyle.placket.name.split(" ").length > 1){ //* Check apakah isi nya "Standar" atau sudah lengkap dengan "Body Untucked With Square"
  //             placketName = dataStyle.placket.name;
  //         }else {
  //             placketName = dataStyle.placket.name.concat(" Body", isTucked ? "" : "Untucked" ,"With Square")
  //         }
  //         var url = `/api/custom/custom_style?fabric=${fabricSelect._id}&collar=${dataStyle.collar.name}&cuffs=${dataStyle.cuffs.name}&sleeve=${dataStyle.sleeve.name}&bottom=${dataStyle.bottom.name}&chestpocket=${dataStyle.pocket.name}&placket=${dataStyle.placket.name}&pov=${pov}`;
  //         var response = await axios.get(url);
  //         console.log(url)
  //         const { status, data } = response.data
  //         console.log(data)
  //         const newDataStyle = { ...dataStyle }
  //         // newDataStyle.bottom.name = data.bottom.name
  //         // newDataStyle.bottom.image = data.bottom.image
  //         newDataStyle.collar.name = data.styles.collar?.name || ""
  //         newDataStyle.collar.image = data.styles.collar?.image || ""
  //         newDataStyle.sleeve.name = data.styles.sleeve?.name || ""
  //         newDataStyle.sleeve.image = data.styles.sleeve?.image || ""
  //         newDataStyle.pocket.name = data.styles.chestpocket?.name || ""
  //         newDataStyle.pocket.image = data.styles.chestpocket?.image || ""
  //         newDataStyle.placket.name = data.styles.placket?.name || ""
  //         newDataStyle.placket.image = data.styles.placket?.image || ""
  //         console.log(fabricSelect._id)
  //         setDataStyle(newDataStyle)
  //         console.log(newDataStyle)
  //     } catch (e) {
  //         console.log(e);
  //     } finally {
  //         setTimeout(() => {
  //             setIsLoading(false)
  //         }, 700);
  //         setTimeout(() => {
  //             setIsLoadingFabric(false)
  //         }, 1000);
  //     }
  // }


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

_s(useHookCustom, "tLmon5KIyWeSVRTRKc8VVwwoKp4=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9jdXN0b20vaG9va0N1c3RvbS5qcyJdLCJuYW1lcyI6WyJpbml0U3R5bGUiLCJmYWJyaWNTZWxlY3RSZWYiLCJ1c2VSZWYiLCJmYWJyaWNTZWxlY3QiLCJ1c2VIb29rQ3VzdG9tIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJmYWJyaWNMaXN0Iiwic2V0RmFicmljTGlzdCIsInNldEZhYnJpY1NlbGVjdCIsImxpc3RTdHlsZSIsInNldExpc3RTdHlsZSIsIm9wZW5TdHlsZSIsInNldE9wZW5TdHlsZSIsInN0eWxlU2VsZWN0Iiwic2V0U3R5bGVTZWxlY3QiLCJkYXRhU3R5bGUiLCJzZXREYXRhU3R5bGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0xvYWRpbmdGYWJyaWMiLCJzZXRJc0xvYWRpbmdGYWJyaWMiLCJjYXRlZ29yeSIsInF1ZXJ5IiwicG92Iiwic2V0UG92IiwicG92UmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInVwZGF0ZVBvdiIsIm5ld1BvdiIsImNvbnNvbGUiLCJsb2ciLCJnZXRDdXN0b21TdHlsZSIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwic3RhdHVzIiwibWVzc2FnZSIsIm5ld0RhdGFTdHlsZSIsInRpdGxlIiwiY29sbGFyIiwibmFtZSIsInNsZWV2ZSIsImJvdHRvbSIsInBvY2tldCIsImN1ZmZzIiwiY3VmZnNCYWNrIiwicGxhY2tldCIsIlZlc3RMaXN0U3R5bGUiLCJCYXRpa0xpc3RTdHlsZSIsIlNoaXJ0TGlzdFN0eWxlIiwiVHJvdXNlckxpc3RTdHlsZSIsIkJsYXplckxpc3RTdHlsZSIsIl9pZCIsImVycm9yIiwidXJsIiwiVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJmYWJyaWMiLCJkYXRhU3R5bGVSZWYiLCJjaGVzdHBvY2tldCIsInNlYXJj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cGFjay9wYWdlcy9jdXN0b20vW2NhdGVnb3J5XS5hYjM2MDY1NDBkMzU0MTc2NjA1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG4vLyBpbXBvcnQgZnJlbmNoUGxhY2tldCBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2ltZy9wbGFja2V0L1BsYWNrZXQgRnJlbmNoLnN2Z1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge1xyXG4gICAgQmxhemVyTGlzdFN0eWxlLFxyXG4gICAgU2hpcnRMaXN0U3R5bGUsXHJcbiAgICBUcm91c2VyTGlzdFN0eWxlLFxyXG4gICAgVmVzdExpc3RTdHlsZSxcclxuICAgIEJhdGlrTGlzdFN0eWxlXHJcbn0gZnJvbSAnLi9zaWRlYmFyL2RhdGFTaWRlYmFyJ1xyXG5cclxuY29uc3QgaW5pdFN0eWxlID0ge1xyXG4gICAgXCJib3R0b21cIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTcXVhcmVcIlxyXG4gICAgfSxcclxuICAgIFwiY29sbGFyXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU3RhbmQgVXBcIlxyXG4gICAgfSxcclxuICAgIFwiY29sbGFyQmFja1wiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIi9pbWcvcGxlYXRzL3JlZC9Db2xsYXIgQmFjay5zdmdcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTdGFuZCBVcFwiXHJcbiAgICB9LFxyXG4gICAgXCJzbGVldmVcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTaG9ydFwiXHJcbiAgICB9LFxyXG4gICAgXCJjdWZmc1wiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlNxdWFyZSBGcmVuY2hcIlxyXG4gICAgfSxcclxuICAgIFwiY3VmZnNCYWNrXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiL2ltZy9zbGVldmVfYmFjay9DdWZmcyBEb3VibGUgUm91bmRlZCBGcmVuY2ggQmFjay5zdmdcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTcXVhcmUgRnJlbmNoXCJcclxuICAgIH0sXHJcbiAgICBcInBvY2tldFwiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIldpdGggRmxhcFwiXHJcbiAgICB9LFxyXG4gICAgXCJwbGFja2V0XCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU3RhbmRhcmQgQm9keSBVbnR1Y2tlZCBXaXRoIFNxdWFyZVwiXHJcbiAgICB9LFxyXG4gICAgXCJwbGVhdHNcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCIvaW1nL3BsZWF0cy9yZWQvUGxlYXRzIEJveCBUdWNrZWQuc3ZnXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiUGxlYXRzXCJcclxuICAgIH0sXHJcbiAgICBcImNvbGxhckZvbGRcIjp7XHJcbiAgICAgICAgXCJpbWFnZVwiOlwiXCJcclxuICAgIH0sXHJcbiAgICBcImN1ZmZzRm9sZFwiOntcclxuICAgICAgICBcImltYWdlXCI6XCJcIlxyXG4gICAgfSxcclxuICAgIFwicG9ja2V0Rm9sZFwiOntcclxuICAgICAgICBcImltYWdlXCI6XCJcIlxyXG4gICAgICAgIC8vIFwiaW1hZ2VcIjpcIi9pbWcvcGxlYXRzL3JlZC9DaGVzdCBQb2NrZXQgRm9sZGVkLnN2Z1wiXHJcbiAgICB9LFxyXG4gICAgXCJwbGFja2V0Rm9sZFwiOntcclxuICAgICAgICBcImltYWdlXCI6XCIvaW1nL2ZvbGRlZC9yZWQvcGxlYXRzL1BsYWNrZXQgU3RhbmRhcmQgQm9keSBGb2xkZWQuc3ZnXCJcclxuICAgIH1cclxufVxyXG5jb25zdCBmYWJyaWNTZWxlY3RSZWYgPSB1c2VSZWYoZmFicmljU2VsZWN0KTtcclxuXHJcbmNvbnN0IHVzZUhvb2tDdXN0b20gPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgW2ZhYnJpY0xpc3QsIHNldEZhYnJpY0xpc3RdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbZmFicmljU2VsZWN0LCBzZXRGYWJyaWNTZWxlY3RdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtsaXN0U3R5bGUsIHNldExpc3RTdHlsZV0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtvcGVuU3R5bGUsIHNldE9wZW5TdHlsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtzdHlsZVNlbGVjdCwgc2V0U3R5bGVTZWxlY3RdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtkYXRhU3R5bGUsIHNldERhdGFTdHlsZV0gPSB1c2VTdGF0ZShpbml0U3R5bGUpXHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaXNMb2FkaW5nRmFicmljLCBzZXRJc0xvYWRpbmdGYWJyaWNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCB7IGNhdGVnb3J5IH0gPSByb3V0ZXIucXVlcnlcclxuICAgIGNvbnN0IFtwb3YsIHNldFBvdl0gPSB1c2VTdGF0ZShcIkZST05UXCIpXHJcblxyXG4gICAgY29uc3QgcG92UmVmID0gdXNlUmVmKHBvdik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBwb3ZSZWYuY3VycmVudCA9IHBvdjtcclxuICAgICAgfSwgW3Bvdl0pO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVBvdiA9IChuZXdQb3YpID0+IHtcclxuICAgICAgICBzZXRQb3YobmV3UG92KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdQb3YpO1xyXG4gICAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0Q3VzdG9tU3R5bGUoKVxyXG4gICAgfSwgW10pXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9mYWJyaWMvbGlzdFwiKTtcclxuICAgICAgICAgICAgY29uc3QgeyBzdGF0dXMsIG1lc3NhZ2UgfSA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgaWYgKHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICBzZXRGYWJyaWNMaXN0KGRhdGEpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRGYWJyaWNMaXN0KFtdKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBzZXRGYWJyaWNMaXN0KFtdKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nRmFicmljKHRydWUpXHJcbiAgICAgICAgZ2V0Q3VzdG9tU3R5bGUoKVxyXG4gICAgfSwgW2ZhYnJpY1NlbGVjdF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nRmFicmljKHRydWUpXHJcbiAgICAgICAgZ2V0Q3VzdG9tU3R5bGUoKVxyXG4gICAgfSwgW3Bvdl0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEYXRhU3R5bGU6XCIsIGRhdGFTdHlsZSlcclxuICAgIH0sW2RhdGFTdHlsZV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhzdHlsZVNlbGVjdCk7XHJcbiAgICAgICAgY29uc3QgbmV3RGF0YVN0eWxlID0geyAuLi5kYXRhU3R5bGUgfVxyXG4gICAgICAgIHN3aXRjaCAoc3R5bGVTZWxlY3Q/LnRpdGxlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDb2xsYXJcIjpcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5jb2xsYXIubmFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiU2xlZXZlXCI6XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuc2xlZXZlLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkJvdHRvbVwiOlxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmJvdHRvbS5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDaGVzdCBQb2NrZXRcIjpcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wb2NrZXQubmFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQ3VmZnNcIjpcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5jdWZmcy5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmN1ZmZzQmFjay5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnNsZWV2ZS5uYW1lID0gXCJMb25nXCJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiUGxhY2tldFwiOlxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnBsYWNrZXQubmFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgLy8gY2FzZSBcIlBsZWF0c1wiOlxyXG4gICAgICAgICAgICAvLyAgICAgbmV3RGF0YVN0eWxlLnBsZWF0cy5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICBkZWZhdWx0OiBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0Q3VzdG9tU3R5bGUoKVxyXG4gICAgfSwgW3N0eWxlU2VsZWN0XSlcclxuICAgIFxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoY2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgY2FzZSAndmVzdHMnOlxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdFN0eWxlKFZlc3RMaXN0U3R5bGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYmF0aWtzJzpcclxuICAgICAgICAgICAgICAgIHNldExpc3RTdHlsZShCYXRpa0xpc3RTdHlsZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzaGlydHMnOlxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdFN0eWxlKFNoaXJ0TGlzdFN0eWxlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Ryb3VzZXJzJzpcclxuICAgICAgICAgICAgICAgIHNldExpc3RTdHlsZShUcm91c2VyTGlzdFN0eWxlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JsYXplcic6XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0U3R5bGUoQmxhemVyTGlzdFN0eWxlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2NhdGVnb3J5XSk7XHJcblxyXG4gICAgY29uc3QgZ2V0Q3VzdG9tU3R5bGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHZXR0aW5nIGN1c3RvbSBzdHlsZSBmb3IgUE9WOlwiLCBwb3ZSZWYuY3VycmVudCk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHNldElzTG9hZGluZ0ZhYnJpYyh0cnVlKTtcclxuICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBpZiAoIWZhYnJpY1NlbGVjdFJlZi5jdXJyZW50IHx8ICFmYWJyaWNTZWxlY3RSZWYuY3VycmVudC5faWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIGZhYnJpYyBzZWxlY3RlZCBvciBmYWJyaWMgSUQgaXMgbWlzc2luZ1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICBsZXQgdXJsID0gbmV3IFVSTCgnL2FwaS9jdXN0b20vY3VzdG9tX3N0eWxlJywgd2luZG93LmxvY2F0aW9uLm9yaWdpbik7XHJcbiAgICAgICAgICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XHJcbiAgICAgICAgICAgIGZhYnJpYzogZmFicmljU2VsZWN0UmVmLmN1cnJlbnQuX2lkLFxyXG4gICAgICAgICAgICBjb2xsYXI6IGRhdGFTdHlsZVJlZi5jdXJyZW50LmNvbGxhci5uYW1lLFxyXG4gICAgICAgICAgICBjdWZmczogZGF0YVN0eWxlUmVmLmN1cnJlbnQuY3VmZnMubmFtZSxcclxuICAgICAgICAgICAgc2xlZXZlOiBkYXRhU3R5bGVSZWYuY3VycmVudC5zbGVldmUubmFtZSxcclxuICAgICAgICAgICAgYm90dG9tOiBkYXRhU3R5bGVSZWYuY3VycmVudC5ib3R0b20ubmFtZSxcclxuICAgICAgICAgICAgY2hlc3Rwb2NrZXQ6IGRhdGFTdHlsZVJlZi5jdXJyZW50LnBvY2tldC5uYW1lLFxyXG4gICAgICAgICAgICBwbGFja2V0OiBkYXRhU3R5bGVSZWYuY3VycmVudC5wbGFja2V0Lm5hbWUsXHJcbiAgICAgICAgICAgIHBvdjogcG92UmVmLmN1cnJlbnRcclxuICAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICB1cmwuc2VhcmNoID0gcGFyYW1zLnRvU3RyaW5nKCk7XHJcbiAgICBcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVxdWVzdCBVUkw6XCIsIHVybC50b1N0cmluZygpKTtcclxuICAgIFxyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJBUEkgUmVzcG9uc2U6XCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgXHJcbiAgICAgICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIGlmIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgc2V0RGF0YVN0eWxlKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgICAgICAgICBjb2xsYXI6IHsgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBkYXRhLnN0eWxlcy5jb2xsYXI/Lm5hbWUgfHwgcHJldlN0YXRlLmNvbGxhci5uYW1lLCBcclxuICAgICAgICAgICAgICAgIGltYWdlOiBkYXRhLnN0eWxlcy5jb2xsYXI/LmltYWdlIHx8IHByZXZTdGF0ZS5jb2xsYXIuaW1hZ2UgXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBzbGVldmU6IHsgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBkYXRhLnN0eWxlcy5zbGVldmU/Lm5hbWUgfHwgcHJldlN0YXRlLnNsZWV2ZS5uYW1lLCBcclxuICAgICAgICAgICAgICAgIGltYWdlOiBkYXRhLnN0eWxlcy5zbGVldmU/LmltYWdlIHx8IHByZXZTdGF0ZS5zbGVldmUuaW1hZ2UgXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBwb2NrZXQ6IHsgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBkYXRhLnN0eWxlcy5jaGVzdHBvY2tldD8ubmFtZSB8fCBwcmV2U3RhdGUucG9ja2V0Lm5hbWUsIFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IGRhdGEuc3R5bGVzLmNoZXN0cG9ja2V0Py5pbWFnZSB8fCBwcmV2U3RhdGUucG9ja2V0LmltYWdlIFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgcGxhY2tldDogeyBcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEuc3R5bGVzLnBsYWNrZXQ/Lm5hbWUgfHwgcHJldlN0YXRlLnBsYWNrZXQubmFtZSwgXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogZGF0YS5zdHlsZXMucGxhY2tldD8uaW1hZ2UgfHwgcHJldlN0YXRlLnBsYWNrZXQuaW1hZ2UgXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAvLyBBZGQgb3RoZXIgc3R5bGUgcHJvcGVydGllcyBhcyBuZWVkZWRcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFQSSByZXR1cm5lZCBlcnJvciBzdGF0dXNcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIGdldEN1c3RvbVN0eWxlOlwiLCBlKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIHNldElzTG9hZGluZ0ZhYnJpYyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgIC8vIGNvbnN0IGdldEN1c3RvbVN0eWxlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGZhYnJpY1NlbGVjdCk7XHJcbiAgICAgICAgXHJcbiAgICAvLyAgICAgdHJ5IHtcclxuICAgIC8vICAgICAgICAgbGV0IHBsYWNrZXROYW1lID0gXCJcIixcclxuICAgIC8vICAgICAgICAgaXNUdWNrZWQgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgaWYoZGF0YVN0eWxlLnBsYWNrZXQubmFtZS5zcGxpdChcIiBcIikubGVuZ3RoID4gMSl7IC8vKiBDaGVjayBhcGFrYWggaXNpIG55YSBcIlN0YW5kYXJcIiBhdGF1IHN1ZGFoIGxlbmdrYXAgZGVuZ2FuIFwiQm9keSBVbnR1Y2tlZCBXaXRoIFNxdWFyZVwiXHJcbiAgICAvLyAgICAgICAgICAgICBwbGFja2V0TmFtZSA9IGRhdGFTdHlsZS5wbGFja2V0Lm5hbWU7XHJcbiAgICAvLyAgICAgICAgIH1lbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgIHBsYWNrZXROYW1lID0gZGF0YVN0eWxlLnBsYWNrZXQubmFtZS5jb25jYXQoXCIgQm9keVwiLCBpc1R1Y2tlZCA/IFwiXCIgOiBcIlVudHVja2VkXCIgLFwiV2l0aCBTcXVhcmVcIilcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgdmFyIHVybCA9IGAvYXBpL2N1c3RvbS9jdXN0b21fc3R5bGU/ZmFicmljPSR7ZmFicmljU2VsZWN0Ll9pZH0mY29sbGFyPSR7ZGF0YVN0eWxlLmNvbGxhci5uYW1lfSZjdWZmcz0ke2RhdGFTdHlsZS5jdWZmcy5uYW1lfSZzbGVldmU9JHtkYXRhU3R5bGUuc2xlZXZlLm5hbWV9JmJvdHRvbT0ke2RhdGFTdHlsZS5ib3R0b20ubmFtZX0mY2hlc3Rwb2NrZXQ9JHtkYXRhU3R5bGUucG9ja2V0Lm5hbWV9JnBsYWNrZXQ9JHtkYXRhU3R5bGUucGxhY2tldC5uYW1lfSZwb3Y9JHtwb3Z9YDtcclxuICAgIC8vICAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHVybClcclxuICAgIC8vICAgICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlLmRhdGFcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIC8vICAgICAgICAgY29uc3QgbmV3RGF0YVN0eWxlID0geyAuLi5kYXRhU3R5bGUgfVxyXG4gICAgLy8gICAgICAgICAvLyBuZXdEYXRhU3R5bGUuYm90dG9tLm5hbWUgPSBkYXRhLmJvdHRvbS5uYW1lXHJcbiAgICAvLyAgICAgICAgIC8vIG5ld0RhdGFTdHlsZS5ib3R0b20uaW1hZ2UgPSBkYXRhLmJvdHRvbS5pbWFnZVxyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgbmV3RGF0YVN0eWxlLmNvbGxhci5uYW1lID0gZGF0YS5zdHlsZXMuY29sbGFyPy5uYW1lIHx8IFwiXCJcclxuICAgIC8vICAgICAgICAgbmV3RGF0YVN0eWxlLmNvbGxhci5pbWFnZSA9IGRhdGEuc3R5bGVzLmNvbGxhcj8uaW1hZ2UgfHwgXCJcIlxyXG4gICAgLy8gICAgICAgICBuZXdEYXRhU3R5bGUuc2xlZXZlLm5hbWUgPSBkYXRhLnN0eWxlcy5zbGVldmU/Lm5hbWUgfHwgXCJcIlxyXG4gICAgLy8gICAgICAgICBuZXdEYXRhU3R5bGUuc2xlZXZlLmltYWdlID0gZGF0YS5zdHlsZXMuc2xlZXZlPy5pbWFnZSB8fCBcIlwiXHJcbiAgICAvLyAgICAgICAgIG5ld0RhdGFTdHlsZS5wb2NrZXQubmFtZSA9IGRhdGEuc3R5bGVzLmNoZXN0cG9ja2V0Py5uYW1lIHx8IFwiXCJcclxuICAgIC8vICAgICAgICAgbmV3RGF0YVN0eWxlLnBvY2tldC5pbWFnZSA9IGRhdGEuc3R5bGVzLmNoZXN0cG9ja2V0Py5pbWFnZSB8fCBcIlwiXHJcbiAgICAvLyAgICAgICAgIG5ld0RhdGFTdHlsZS5wbGFja2V0Lm5hbWUgPSBkYXRhLnN0eWxlcy5wbGFja2V0Py5uYW1lIHx8IFwiXCJcclxuICAgIC8vICAgICAgICAgbmV3RGF0YVN0eWxlLnBsYWNrZXQuaW1hZ2UgPSBkYXRhLnN0eWxlcy5wbGFja2V0Py5pbWFnZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhmYWJyaWNTZWxlY3QuX2lkKVxyXG4gICAgLy8gICAgICAgICBzZXREYXRhU3R5bGUobmV3RGF0YVN0eWxlKVxyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhuZXdEYXRhU3R5bGUpXHJcbiAgICAvLyAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIC8vICAgICB9IGZpbmFsbHkge1xyXG4gICAgLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuICAgIC8vICAgICAgICAgfSwgNzAwKTtcclxuICAgIC8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBzZXRJc0xvYWRpbmdGYWJyaWMoZmFsc2UpXHJcbiAgICAvLyAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG9wZW5TdHlsZSxcclxuICAgICAgICBsaXN0U3R5bGUsXHJcbiAgICAgICAgZmFicmljTGlzdCxcclxuICAgICAgICBzdHlsZVNlbGVjdCxcclxuICAgICAgICBmYWJyaWNTZWxlY3QsXHJcbiAgICAgICAgZGF0YVN0eWxlLFxyXG4gICAgICAgIGlzTG9hZGluZyxcclxuICAgICAgICBpc0xvYWRpbmdGYWJyaWMsXHJcbiAgICAgICAgcG92LFxyXG4gICAgICAgIHVwZGF0ZVBvdixcclxuICAgICAgICBzZXRQb3YsXHJcbiAgICAgICAgc2V0RGF0YVN0eWxlLFxyXG4gICAgICAgIHNldElzTG9hZGluZyxcclxuICAgICAgICBzZXRPcGVuU3R5bGUsXHJcbiAgICAgICAgc2V0RmFicmljTGlzdCxcclxuICAgICAgICBzZXRTdHlsZVNlbGVjdCxcclxuICAgICAgICBzZXRGYWJyaWNTZWxlY3QsXHJcbiAgICAgICAgc2V0SXNMb2FkaW5nRmFicmljLFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHVzZUhvb2tDdXN0b20iXSwic291cmNlUm9vdCI6IiJ9