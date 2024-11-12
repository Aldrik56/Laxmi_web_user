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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9jdXN0b20vaG9va0N1c3RvbS5qcyJdLCJuYW1lcyI6WyJpbml0U3R5bGUiLCJ1c2VIb29rQ3VzdG9tIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJmYWJyaWNMaXN0Iiwic2V0RmFicmljTGlzdCIsImZhYnJpY1NlbGVjdCIsInNldEZhYnJpY1NlbGVjdCIsImxpc3RTdHlsZSIsInNldExpc3RTdHlsZSIsIm9wZW5TdHlsZSIsInNldE9wZW5TdHlsZSIsInN0eWxlU2VsZWN0Iiwic2V0U3R5bGVTZWxlY3QiLCJkYXRhU3R5bGUiLCJzZXREYXRhU3R5bGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0xvYWRpbmdGYWJyaWMiLCJzZXRJc0xvYWRpbmdGYWJyaWMiLCJjYXRlZ29yeSIsInF1ZXJ5IiwicG92Iiwic2V0UG92IiwicG92UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInVwZGF0ZVBvdiIsIm5ld1BvdiIsImNvbnNvbGUiLCJsb2ciLCJnZXRDdXN0b21TdHlsZSIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwic3RhdHVzIiwibWVzc2FnZSIsIm5ld0RhdGFTdHlsZSIsInRpdGxlIiwiY29sbGFyIiwibmFtZSIsInNsZWV2ZSIsImJvdHRvbSIsInBvY2tldCIsImN1ZmZzIiwiY3VmZnNCYWNrIiwicGxhY2tldCIsIlZlc3RMaXN0U3R5bGUiLCJCYXRpa0xpc3RTdHlsZSIsIlNoaXJ0TGlzdFN0eWxlIiwiVHJvdXNlckxpc3RTdHlsZSIsIkJsYXplckxpc3RTdHlsZSIsImZhYnJpY1NlbGVjdFJlZiIsIl9pZCIsImVycm9yIiwidXJsIiwiVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJmYWJyaWMiLCJkYXRhU3R5bGVSZWYiLCJjaGVzdHBvY2tldCIsInNlYXJj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LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbi8vIGltcG9ydCBmcmVuY2hQbGFja2V0IGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvaW1nL3BsYWNrZXQvUGxhY2tldCBGcmVuY2guc3ZnXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7XHJcbiAgICBCbGF6ZXJMaXN0U3R5bGUsXHJcbiAgICBTaGlydExpc3RTdHlsZSxcclxuICAgIFRyb3VzZXJMaXN0U3R5bGUsXHJcbiAgICBWZXN0TGlzdFN0eWxlLFxyXG4gICAgQmF0aWtMaXN0U3R5bGVcclxufSBmcm9tICcuL3NpZGViYXIvZGF0YVNpZGViYXInXHJcblxyXG5jb25zdCBpbml0U3R5bGUgPSB7XHJcbiAgICBcImJvdHRvbVwiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlNxdWFyZVwiXHJcbiAgICB9LFxyXG4gICAgXCJjb2xsYXJcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTdGFuZCBVcFwiXHJcbiAgICB9LFxyXG4gICAgXCJjb2xsYXJCYWNrXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiL2ltZy9wbGVhdHMvcmVkL0NvbGxhciBCYWNrLnN2Z1wiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlN0YW5kIFVwXCJcclxuICAgIH0sXHJcbiAgICBcInNsZWV2ZVwiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlNob3J0XCJcclxuICAgIH0sXHJcbiAgICBcImN1ZmZzXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU3F1YXJlIEZyZW5jaFwiXHJcbiAgICB9LFxyXG4gICAgXCJjdWZmc0JhY2tcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCIvaW1nL3NsZWV2ZV9iYWNrL0N1ZmZzIERvdWJsZSBSb3VuZGVkIEZyZW5jaCBCYWNrLnN2Z1wiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlNxdWFyZSBGcmVuY2hcIlxyXG4gICAgfSxcclxuICAgIFwicG9ja2V0XCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiV2l0aCBGbGFwXCJcclxuICAgIH0sXHJcbiAgICBcInBsYWNrZXRcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTdGFuZGFyZCBCb2R5IFVudHVja2VkIFdpdGggU3F1YXJlXCJcclxuICAgIH0sXHJcbiAgICBcInBsZWF0c1wiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIi9pbWcvcGxlYXRzL3JlZC9QbGVhdHMgQm94IFR1Y2tlZC5zdmdcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJQbGVhdHNcIlxyXG4gICAgfSxcclxuICAgIFwiY29sbGFyRm9sZFwiOntcclxuICAgICAgICBcImltYWdlXCI6XCJcIlxyXG4gICAgfSxcclxuICAgIFwiY3VmZnNGb2xkXCI6e1xyXG4gICAgICAgIFwiaW1hZ2VcIjpcIlwiXHJcbiAgICB9LFxyXG4gICAgXCJwb2NrZXRGb2xkXCI6e1xyXG4gICAgICAgIFwiaW1hZ2VcIjpcIlwiXHJcbiAgICAgICAgLy8gXCJpbWFnZVwiOlwiL2ltZy9wbGVhdHMvcmVkL0NoZXN0IFBvY2tldCBGb2xkZWQuc3ZnXCJcclxuICAgIH0sXHJcbiAgICBcInBsYWNrZXRGb2xkXCI6e1xyXG4gICAgICAgIFwiaW1hZ2VcIjpcIi9pbWcvZm9sZGVkL3JlZC9wbGVhdHMvUGxhY2tldCBTdGFuZGFyZCBCb2R5IEZvbGRlZC5zdmdcIlxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB1c2VIb29rQ3VzdG9tID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IFtmYWJyaWNMaXN0LCBzZXRGYWJyaWNMaXN0XSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2ZhYnJpY1NlbGVjdCwgc2V0RmFicmljU2VsZWN0XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbbGlzdFN0eWxlLCBzZXRMaXN0U3R5bGVdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbb3BlblN0eWxlLCBzZXRPcGVuU3R5bGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbc3R5bGVTZWxlY3QsIHNldFN0eWxlU2VsZWN0XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbZGF0YVN0eWxlLCBzZXREYXRhU3R5bGVdID0gdXNlU3RhdGUoaW5pdFN0eWxlKVxyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2lzTG9hZGluZ0ZhYnJpYywgc2V0SXNMb2FkaW5nRmFicmljXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgeyBjYXRlZ29yeSB9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgICBjb25zdCBbcG92LCBzZXRQb3ZdID0gdXNlU3RhdGUoXCJGUk9OVFwiKVxyXG5cclxuICAgIGNvbnN0IHBvdlJlZiA9IHVzZVJlZihwb3YpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcG92UmVmLmN1cnJlbnQgPSBwb3Y7XHJcbiAgICAgIH0sIFtwb3ZdKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVQb3YgPSAobmV3UG92KSA9PiB7XHJcbiAgICAgICAgc2V0UG92KG5ld1Bvdik7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3UG92KTtcclxuICAgICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldEN1c3RvbVN0eWxlKClcclxuICAgIH0sIFtdKVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvZmFicmljL2xpc3RcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgc3RhdHVzLCBtZXNzYWdlIH0gPSByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgIGlmIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgc2V0RmFicmljTGlzdChkYXRhKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0RmFicmljTGlzdChbXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgc2V0RmFicmljTGlzdChbXSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZ0ZhYnJpYyh0cnVlKVxyXG4gICAgICAgIGdldEN1c3RvbVN0eWxlKClcclxuICAgIH0sIFtmYWJyaWNTZWxlY3RdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZ0ZhYnJpYyh0cnVlKVxyXG4gICAgICAgIGdldEN1c3RvbVN0eWxlKClcclxuICAgIH0sIFtwb3ZdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YVN0eWxlOlwiLCBkYXRhU3R5bGUpXHJcbiAgICB9LFtkYXRhU3R5bGVdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coc3R5bGVTZWxlY3QpO1xyXG4gICAgICAgIGNvbnN0IG5ld0RhdGFTdHlsZSA9IHsgLi4uZGF0YVN0eWxlIH1cclxuICAgICAgICBzd2l0Y2ggKHN0eWxlU2VsZWN0Py50aXRsZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQ29sbGFyXCI6XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY29sbGFyLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlNsZWV2ZVwiOlxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnNsZWV2ZS5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJCb3R0b21cIjpcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5ib3R0b20ubmFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQ2hlc3QgUG9ja2V0XCI6XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUucG9ja2V0Lm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkN1ZmZzXCI6XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY3VmZnMubmFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5jdWZmc0JhY2submFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5zbGVldmUubmFtZSA9IFwiTG9uZ1wiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlBsYWNrZXRcIjpcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wbGFja2V0Lm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgIC8vIGNhc2UgXCJQbGVhdHNcIjpcclxuICAgICAgICAgICAgLy8gICAgIG5ld0RhdGFTdHlsZS5wbGVhdHMubmFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldEN1c3RvbVN0eWxlKClcclxuICAgIH0sIFtzdHlsZVNlbGVjdF0pXHJcbiAgICBcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Zlc3RzJzpcclxuICAgICAgICAgICAgICAgIHNldExpc3RTdHlsZShWZXN0TGlzdFN0eWxlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JhdGlrcyc6XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0U3R5bGUoQmF0aWtMaXN0U3R5bGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc2hpcnRzJzpcclxuICAgICAgICAgICAgICAgIHNldExpc3RTdHlsZShTaGlydExpc3RTdHlsZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd0cm91c2Vycyc6XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0U3R5bGUoVHJvdXNlckxpc3RTdHlsZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdibGF6ZXInOlxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdFN0eWxlKEJsYXplckxpc3RTdHlsZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtjYXRlZ29yeV0pO1xyXG5cclxuICAgIGNvbnN0IGdldEN1c3RvbVN0eWxlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2V0dGluZyBjdXN0b20gc3R5bGUgZm9yIFBPVjpcIiwgcG92UmVmLmN1cnJlbnQpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmdGYWJyaWModHJ1ZSk7XHJcbiAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgaWYgKCFmYWJyaWNTZWxlY3RSZWYuY3VycmVudCB8fCAhZmFicmljU2VsZWN0UmVmLmN1cnJlbnQuX2lkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBmYWJyaWMgc2VsZWN0ZWQgb3IgZmFicmljIElEIGlzIG1pc3NpbmdcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgbGV0IHVybCA9IG5ldyBVUkwoJy9hcGkvY3VzdG9tL2N1c3RvbV9zdHlsZScsIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pO1xyXG4gICAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xyXG4gICAgICAgICAgICBmYWJyaWM6IGZhYnJpY1NlbGVjdFJlZi5jdXJyZW50Ll9pZCxcclxuICAgICAgICAgICAgY29sbGFyOiBkYXRhU3R5bGVSZWYuY3VycmVudC5jb2xsYXIubmFtZSxcclxuICAgICAgICAgICAgY3VmZnM6IGRhdGFTdHlsZVJlZi5jdXJyZW50LmN1ZmZzLm5hbWUsXHJcbiAgICAgICAgICAgIHNsZWV2ZTogZGF0YVN0eWxlUmVmLmN1cnJlbnQuc2xlZXZlLm5hbWUsXHJcbiAgICAgICAgICAgIGJvdHRvbTogZGF0YVN0eWxlUmVmLmN1cnJlbnQuYm90dG9tLm5hbWUsXHJcbiAgICAgICAgICAgIGNoZXN0cG9ja2V0OiBkYXRhU3R5bGVSZWYuY3VycmVudC5wb2NrZXQubmFtZSxcclxuICAgICAgICAgICAgcGxhY2tldDogZGF0YVN0eWxlUmVmLmN1cnJlbnQucGxhY2tldC5uYW1lLFxyXG4gICAgICAgICAgICBwb3Y6IHBvdlJlZi5jdXJyZW50XHJcbiAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgdXJsLnNlYXJjaCA9IHBhcmFtcy50b1N0cmluZygpO1xyXG4gICAgXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlcXVlc3QgVVJMOlwiLCB1cmwudG9TdHJpbmcoKSk7XHJcbiAgICBcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybC50b1N0cmluZygpKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQVBJIFJlc3BvbnNlOlwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgIFxyXG4gICAgICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICBpZiAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIHNldERhdGFTdHlsZShwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgICAgICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgICAgICAgICAgY29sbGFyOiB7IFxyXG4gICAgICAgICAgICAgICAgbmFtZTogZGF0YS5zdHlsZXMuY29sbGFyPy5uYW1lIHx8IHByZXZTdGF0ZS5jb2xsYXIubmFtZSwgXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogZGF0YS5zdHlsZXMuY29sbGFyPy5pbWFnZSB8fCBwcmV2U3RhdGUuY29sbGFyLmltYWdlIFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgc2xlZXZlOiB7IFxyXG4gICAgICAgICAgICAgICAgbmFtZTogZGF0YS5zdHlsZXMuc2xlZXZlPy5uYW1lIHx8IHByZXZTdGF0ZS5zbGVldmUubmFtZSwgXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogZGF0YS5zdHlsZXMuc2xlZXZlPy5pbWFnZSB8fCBwcmV2U3RhdGUuc2xlZXZlLmltYWdlIFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgcG9ja2V0OiB7IFxyXG4gICAgICAgICAgICAgICAgbmFtZTogZGF0YS5zdHlsZXMuY2hlc3Rwb2NrZXQ/Lm5hbWUgfHwgcHJldlN0YXRlLnBvY2tldC5uYW1lLCBcclxuICAgICAgICAgICAgICAgIGltYWdlOiBkYXRhLnN0eWxlcy5jaGVzdHBvY2tldD8uaW1hZ2UgfHwgcHJldlN0YXRlLnBvY2tldC5pbWFnZSBcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHBsYWNrZXQ6IHsgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBkYXRhLnN0eWxlcy5wbGFja2V0Py5uYW1lIHx8IHByZXZTdGF0ZS5wbGFja2V0Lm5hbWUsIFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IGRhdGEuc3R5bGVzLnBsYWNrZXQ/LmltYWdlIHx8IHByZXZTdGF0ZS5wbGFja2V0LmltYWdlIFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gQWRkIG90aGVyIHN0eWxlIHByb3BlcnRpZXMgYXMgbmVlZGVkXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBUEkgcmV0dXJuZWQgZXJyb3Igc3RhdHVzXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBnZXRDdXN0b21TdHlsZTpcIiwgZSk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICBzZXRJc0xvYWRpbmdGYWJyaWMoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAvLyBjb25zdCBnZXRDdXN0b21TdHlsZSA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhmYWJyaWNTZWxlY3QpO1xyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIHRyeSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBwbGFja2V0TmFtZSA9IFwiXCIsXHJcbiAgICAvLyAgICAgICAgIGlzVHVja2VkID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgIGlmKGRhdGFTdHlsZS5wbGFja2V0Lm5hbWUuc3BsaXQoXCIgXCIpLmxlbmd0aCA+IDEpeyAvLyogQ2hlY2sgYXBha2FoIGlzaSBueWEgXCJTdGFuZGFyXCIgYXRhdSBzdWRhaCBsZW5na2FwIGRlbmdhbiBcIkJvZHkgVW50dWNrZWQgV2l0aCBTcXVhcmVcIlxyXG4gICAgLy8gICAgICAgICAgICAgcGxhY2tldE5hbWUgPSBkYXRhU3R5bGUucGxhY2tldC5uYW1lO1xyXG4gICAgLy8gICAgICAgICB9ZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICBwbGFja2V0TmFtZSA9IGRhdGFTdHlsZS5wbGFja2V0Lm5hbWUuY29uY2F0KFwiIEJvZHlcIiwgaXNUdWNrZWQgPyBcIlwiIDogXCJVbnR1Y2tlZFwiICxcIldpdGggU3F1YXJlXCIpXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIHZhciB1cmwgPSBgL2FwaS9jdXN0b20vY3VzdG9tX3N0eWxlP2ZhYnJpYz0ke2ZhYnJpY1NlbGVjdC5faWR9JmNvbGxhcj0ke2RhdGFTdHlsZS5jb2xsYXIubmFtZX0mY3VmZnM9JHtkYXRhU3R5bGUuY3VmZnMubmFtZX0mc2xlZXZlPSR7ZGF0YVN0eWxlLnNsZWV2ZS5uYW1lfSZib3R0b209JHtkYXRhU3R5bGUuYm90dG9tLm5hbWV9JmNoZXN0cG9ja2V0PSR7ZGF0YVN0eWxlLnBvY2tldC5uYW1lfSZwbGFja2V0PSR7ZGF0YVN0eWxlLnBsYWNrZXQubmFtZX0mcG92PSR7cG92fWA7XHJcbiAgICAvLyAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICAvLyAgICAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSByZXNwb25zZS5kYXRhXHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAvLyAgICAgICAgIGNvbnN0IG5ld0RhdGFTdHlsZSA9IHsgLi4uZGF0YVN0eWxlIH1cclxuICAgIC8vICAgICAgICAgLy8gbmV3RGF0YVN0eWxlLmJvdHRvbS5uYW1lID0gZGF0YS5ib3R0b20ubmFtZVxyXG4gICAgLy8gICAgICAgICAvLyBuZXdEYXRhU3R5bGUuYm90dG9tLmltYWdlID0gZGF0YS5ib3R0b20uaW1hZ2VcclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIG5ld0RhdGFTdHlsZS5jb2xsYXIubmFtZSA9IGRhdGEuc3R5bGVzLmNvbGxhcj8ubmFtZSB8fCBcIlwiXHJcbiAgICAvLyAgICAgICAgIG5ld0RhdGFTdHlsZS5jb2xsYXIuaW1hZ2UgPSBkYXRhLnN0eWxlcy5jb2xsYXI/LmltYWdlIHx8IFwiXCJcclxuICAgIC8vICAgICAgICAgbmV3RGF0YVN0eWxlLnNsZWV2ZS5uYW1lID0gZGF0YS5zdHlsZXMuc2xlZXZlPy5uYW1lIHx8IFwiXCJcclxuICAgIC8vICAgICAgICAgbmV3RGF0YVN0eWxlLnNsZWV2ZS5pbWFnZSA9IGRhdGEuc3R5bGVzLnNsZWV2ZT8uaW1hZ2UgfHwgXCJcIlxyXG4gICAgLy8gICAgICAgICBuZXdEYXRhU3R5bGUucG9ja2V0Lm5hbWUgPSBkYXRhLnN0eWxlcy5jaGVzdHBvY2tldD8ubmFtZSB8fCBcIlwiXHJcbiAgICAvLyAgICAgICAgIG5ld0RhdGFTdHlsZS5wb2NrZXQuaW1hZ2UgPSBkYXRhLnN0eWxlcy5jaGVzdHBvY2tldD8uaW1hZ2UgfHwgXCJcIlxyXG4gICAgLy8gICAgICAgICBuZXdEYXRhU3R5bGUucGxhY2tldC5uYW1lID0gZGF0YS5zdHlsZXMucGxhY2tldD8ubmFtZSB8fCBcIlwiXHJcbiAgICAvLyAgICAgICAgIG5ld0RhdGFTdHlsZS5wbGFja2V0LmltYWdlID0gZGF0YS5zdHlsZXMucGxhY2tldD8uaW1hZ2UgfHwgXCJcIlxyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZmFicmljU2VsZWN0Ll9pZClcclxuICAgIC8vICAgICAgICAgc2V0RGF0YVN0eWxlKG5ld0RhdGFTdHlsZSlcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2cobmV3RGF0YVN0eWxlKVxyXG4gICAgLy8gICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAvLyAgICAgfSBmaW5hbGx5IHtcclxuICAgIC8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXHJcbiAgICAvLyAgICAgICAgIH0sIDcwMCk7XHJcbiAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgc2V0SXNMb2FkaW5nRmFicmljKGZhbHNlKVxyXG4gICAgLy8gICAgICAgICB9LCAxMDAwKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBvcGVuU3R5bGUsXHJcbiAgICAgICAgbGlzdFN0eWxlLFxyXG4gICAgICAgIGZhYnJpY0xpc3QsXHJcbiAgICAgICAgc3R5bGVTZWxlY3QsXHJcbiAgICAgICAgZmFicmljU2VsZWN0LFxyXG4gICAgICAgIGRhdGFTdHlsZSxcclxuICAgICAgICBpc0xvYWRpbmcsXHJcbiAgICAgICAgaXNMb2FkaW5nRmFicmljLFxyXG4gICAgICAgIHBvdixcclxuICAgICAgICB1cGRhdGVQb3YsXHJcbiAgICAgICAgc2V0UG92LFxyXG4gICAgICAgIHNldERhdGFTdHlsZSxcclxuICAgICAgICBzZXRJc0xvYWRpbmcsXHJcbiAgICAgICAgc2V0T3BlblN0eWxlLFxyXG4gICAgICAgIHNldEZhYnJpY0xpc3QsXHJcbiAgICAgICAgc2V0U3R5bGVTZWxlY3QsXHJcbiAgICAgICAgc2V0RmFicmljU2VsZWN0LFxyXG4gICAgICAgIHNldElzTG9hZGluZ0ZhYnJpYyxcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCB1c2VIb29rQ3VzdG9tIl0sInNvdXJjZVJvb3QiOiIifQ==