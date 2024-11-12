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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9jdXN0b20vaG9va0N1c3RvbS5qcyJdLCJuYW1lcyI6WyJpbml0U3R5bGUiLCJ1c2VIb29rQ3VzdG9tIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJmYWJyaWNMaXN0Iiwic2V0RmFicmljTGlzdCIsImZhYnJpY1NlbGVjdCIsInNldEZhYnJpY1NlbGVjdCIsImxpc3RTdHlsZSIsInNldExpc3RTdHlsZSIsIm9wZW5TdHlsZSIsInNldE9wZW5TdHlsZSIsInN0eWxlU2VsZWN0Iiwic2V0U3R5bGVTZWxlY3QiLCJkYXRhU3R5bGUiLCJzZXREYXRhU3R5bGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0xvYWRpbmdGYWJyaWMiLCJzZXRJc0xvYWRpbmdGYWJyaWMiLCJjYXRlZ29yeSIsInF1ZXJ5IiwicG92Iiwic2V0UG92IiwidXBkYXRlUG92IiwibmV3UG92IiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImdldEN1c3RvbVN0eWxlIiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsImRhdGEiLCJzdGF0dXMiLCJtZXNzYWdlIiwibmV3RGF0YVN0eWxlIiwidGl0bGUiLCJjb2xsYXIiLCJuYW1lIiwic2xlZXZlIiwiYm90dG9tIiwicG9ja2V0IiwiY3VmZnMiLCJjdWZmc0JhY2siLCJwbGFja2V0IiwiVmVzdExpc3RTdHlsZSIsIkJhdGlrTGlzdFN0eWxlIiwiU2hpcnRMaXN0U3R5bGUiLCJUcm91c2VyTGlzdFN0eWxlIiwiQmxhemVyTGlzdFN0eWxlIiwicG92UmVmIiwiY3VycmVudCIsImZhYnJpY1NlbGVjdFJlZiIsIl9pZCIsImVycm9yIiwidXJsIiwiVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJmYWJyaWMiLCJkYXRhU3R5bGVSZWYiLCJjaGVzdHBvY2tldCIsInNlYXJjaCIsInRvU3Ry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QTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQU87QUFDSG5CLGFBQVMsRUFBVEEsU0FERztBQUVIRixhQUFTLEVBQVRBLFNBRkc7QUFHSEosY0FBVSxFQUFWQSxVQUhHO0FBSUhRLGVBQVcsRUFBWEEsV0FKRztBQUtITixnQkFBWSxFQUFaQSxZQUxHO0FBTUhRLGFBQVMsRUFBVEEsU0FORztBQU9IRSxhQUFTLEVBQVRBLFNBUEc7QUFRSEUsbUJBQWUsRUFBZkEsZUFSRztBQVNISSxPQUFHLEVBQUhBLEdBVEc7QUFVSEUsYUFBUyxFQUFUQSxTQVZHO0FBV0hELFVBQU0sRUFBTkEsTUFYRztBQVlIUixnQkFBWSxFQUFaQSxZQVpHO0FBYUhFLGdCQUFZLEVBQVpBLFlBYkc7QUFjSE4sZ0JBQVksRUFBWkEsWUFkRztBQWVITixpQkFBYSxFQUFiQSxhQWZHO0FBZ0JIUSxrQkFBYyxFQUFkQSxjQWhCRztBQWlCSE4sbUJBQWUsRUFBZkEsZUFqQkc7QUFrQkhZLHNCQUFrQixFQUFsQkE7QUFsQkcsR0FBUDtBQW9CSCxDQXpPRDs7R0FBTW5CLGE7VUFDYUUscUQ7OztBQXlPSkYsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3VzdG9tL1tjYXRlZ29yeV0uMjkyZDlkODNkMGIyYjQ1MGJiNDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuLy8gaW1wb3J0IGZyZW5jaFBsYWNrZXQgZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9pbWcvcGxhY2tldC9QbGFja2V0IEZyZW5jaC5zdmdcIjtcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7XHJcbiAgICBCbGF6ZXJMaXN0U3R5bGUsXHJcbiAgICBTaGlydExpc3RTdHlsZSxcclxuICAgIFRyb3VzZXJMaXN0U3R5bGUsXHJcbiAgICBWZXN0TGlzdFN0eWxlLFxyXG4gICAgQmF0aWtMaXN0U3R5bGVcclxufSBmcm9tICcuL3NpZGViYXIvZGF0YVNpZGViYXInXHJcblxyXG5jb25zdCBpbml0U3R5bGUgPSB7XHJcbiAgICBcImJvdHRvbVwiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlNxdWFyZVwiXHJcbiAgICB9LFxyXG4gICAgXCJjb2xsYXJcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTdGFuZCBVcFwiXHJcbiAgICB9LFxyXG4gICAgXCJjb2xsYXJCYWNrXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiL2ltZy9wbGVhdHMvcmVkL0NvbGxhciBCYWNrLnN2Z1wiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlN0YW5kIFVwXCJcclxuICAgIH0sXHJcbiAgICBcInNsZWV2ZVwiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlNob3J0XCJcclxuICAgIH0sXHJcbiAgICBcImN1ZmZzXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU3F1YXJlIEZyZW5jaFwiXHJcbiAgICB9LFxyXG4gICAgXCJjdWZmc0JhY2tcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCIvaW1nL3NsZWV2ZV9iYWNrL0N1ZmZzIERvdWJsZSBSb3VuZGVkIEZyZW5jaCBCYWNrLnN2Z1wiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlNxdWFyZSBGcmVuY2hcIlxyXG4gICAgfSxcclxuICAgIFwicG9ja2V0XCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiV2l0aCBGbGFwXCJcclxuICAgIH0sXHJcbiAgICBcInBsYWNrZXRcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTdGFuZGFyZCBCb2R5IFVudHVja2VkIFdpdGggU3F1YXJlXCJcclxuICAgIH0sXHJcbiAgICBcInBsZWF0c1wiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIi9pbWcvcGxlYXRzL3JlZC9QbGVhdHMgQm94IFR1Y2tlZC5zdmdcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJQbGVhdHNcIlxyXG4gICAgfSxcclxuICAgIFwiY29sbGFyRm9sZFwiOntcclxuICAgICAgICBcImltYWdlXCI6XCJcIlxyXG4gICAgfSxcclxuICAgIFwiY3VmZnNGb2xkXCI6e1xyXG4gICAgICAgIFwiaW1hZ2VcIjpcIlwiXHJcbiAgICB9LFxyXG4gICAgXCJwb2NrZXRGb2xkXCI6e1xyXG4gICAgICAgIFwiaW1hZ2VcIjpcIlwiXHJcbiAgICAgICAgLy8gXCJpbWFnZVwiOlwiL2ltZy9wbGVhdHMvcmVkL0NoZXN0IFBvY2tldCBGb2xkZWQuc3ZnXCJcclxuICAgIH0sXHJcbiAgICBcInBsYWNrZXRGb2xkXCI6e1xyXG4gICAgICAgIFwiaW1hZ2VcIjpcIi9pbWcvZm9sZGVkL3JlZC9wbGVhdHMvUGxhY2tldCBTdGFuZGFyZCBCb2R5IEZvbGRlZC5zdmdcIlxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB1c2VIb29rQ3VzdG9tID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IFtmYWJyaWNMaXN0LCBzZXRGYWJyaWNMaXN0XSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2ZhYnJpY1NlbGVjdCwgc2V0RmFicmljU2VsZWN0XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbbGlzdFN0eWxlLCBzZXRMaXN0U3R5bGVdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbb3BlblN0eWxlLCBzZXRPcGVuU3R5bGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbc3R5bGVTZWxlY3QsIHNldFN0eWxlU2VsZWN0XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbZGF0YVN0eWxlLCBzZXREYXRhU3R5bGVdID0gdXNlU3RhdGUoaW5pdFN0eWxlKVxyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2lzTG9hZGluZ0ZhYnJpYywgc2V0SXNMb2FkaW5nRmFicmljXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgeyBjYXRlZ29yeSB9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgICBjb25zdCBbcG92LCBzZXRQb3ZdID0gdXNlU3RhdGUoXCJGUk9OVFwiKVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVBvdiA9IChuZXdQb3YpID0+IHtcclxuICAgICAgICBzZXRQb3YobmV3UG92KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdQb3YpO1xyXG4gICAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0Q3VzdG9tU3R5bGUoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2ZhYnJpYy9saXN0XCIpO1xyXG4gICAgICAgICAgICBjb25zdCB7IHN0YXR1cywgbWVzc2FnZSB9ID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICBpZiAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgIHNldEZhYnJpY0xpc3QoZGF0YSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEZhYnJpY0xpc3QoW10pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHNldEZhYnJpY0xpc3QoW10pXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmdGYWJyaWModHJ1ZSlcclxuICAgICAgICBnZXRDdXN0b21TdHlsZSgpXHJcbiAgICB9LCBbZmFicmljU2VsZWN0XSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmdGYWJyaWModHJ1ZSlcclxuICAgICAgICBnZXRDdXN0b21TdHlsZSgpXHJcbiAgICB9LCBbcG92XSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGFTdHlsZTpcIiwgZGF0YVN0eWxlKVxyXG4gICAgfSxbZGF0YVN0eWxlXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0eWxlU2VsZWN0KTtcclxuICAgICAgICBjb25zdCBuZXdEYXRhU3R5bGUgPSB7IC4uLmRhdGFTdHlsZSB9XHJcbiAgICAgICAgc3dpdGNoIChzdHlsZVNlbGVjdD8udGl0bGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkNvbGxhclwiOlxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmNvbGxhci5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJTbGVldmVcIjpcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5zbGVldmUubmFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQm90dG9tXCI6XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuYm90dG9tLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkNoZXN0IFBvY2tldFwiOlxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnBvY2tldC5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDdWZmc1wiOlxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmN1ZmZzLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY3VmZnNCYWNrLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuc2xlZXZlLm5hbWUgPSBcIkxvbmdcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJQbGFja2V0XCI6XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUucGxhY2tldC5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAvLyBjYXNlIFwiUGxlYXRzXCI6XHJcbiAgICAgICAgICAgIC8vICAgICBuZXdEYXRhU3R5bGUucGxlYXRzLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRDdXN0b21TdHlsZSgpXHJcbiAgICB9LCBbc3R5bGVTZWxlY3RdKVxyXG4gICAgXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChjYXRlZ29yeSkge1xyXG4gICAgICAgICAgICBjYXNlICd2ZXN0cyc6XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0U3R5bGUoVmVzdExpc3RTdHlsZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdiYXRpa3MnOlxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdFN0eWxlKEJhdGlrTGlzdFN0eWxlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NoaXJ0cyc6XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0U3R5bGUoU2hpcnRMaXN0U3R5bGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAndHJvdXNlcnMnOlxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdFN0eWxlKFRyb3VzZXJMaXN0U3R5bGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYmxhemVyJzpcclxuICAgICAgICAgICAgICAgIHNldExpc3RTdHlsZShCbGF6ZXJMaXN0U3R5bGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LCBbY2F0ZWdvcnldKTtcclxuXHJcbiAgICBjb25zdCBnZXRDdXN0b21TdHlsZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdldHRpbmcgY3VzdG9tIHN0eWxlIGZvciBQT1Y6XCIsIHBvdlJlZi5jdXJyZW50KTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nRmFicmljKHRydWUpO1xyXG4gICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGlmICghZmFicmljU2VsZWN0UmVmLmN1cnJlbnQgfHwgIWZhYnJpY1NlbGVjdFJlZi5jdXJyZW50Ll9pZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gZmFicmljIHNlbGVjdGVkIG9yIGZhYnJpYyBJRCBpcyBtaXNzaW5nXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgIGxldCB1cmwgPSBuZXcgVVJMKCcvYXBpL2N1c3RvbS9jdXN0b21fc3R5bGUnLCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKTtcclxuICAgICAgICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcclxuICAgICAgICAgICAgZmFicmljOiBmYWJyaWNTZWxlY3RSZWYuY3VycmVudC5faWQsXHJcbiAgICAgICAgICAgIGNvbGxhcjogZGF0YVN0eWxlUmVmLmN1cnJlbnQuY29sbGFyLm5hbWUsXHJcbiAgICAgICAgICAgIGN1ZmZzOiBkYXRhU3R5bGVSZWYuY3VycmVudC5jdWZmcy5uYW1lLFxyXG4gICAgICAgICAgICBzbGVldmU6IGRhdGFTdHlsZVJlZi5jdXJyZW50LnNsZWV2ZS5uYW1lLFxyXG4gICAgICAgICAgICBib3R0b206IGRhdGFTdHlsZVJlZi5jdXJyZW50LmJvdHRvbS5uYW1lLFxyXG4gICAgICAgICAgICBjaGVzdHBvY2tldDogZGF0YVN0eWxlUmVmLmN1cnJlbnQucG9ja2V0Lm5hbWUsXHJcbiAgICAgICAgICAgIHBsYWNrZXQ6IGRhdGFTdHlsZVJlZi5jdXJyZW50LnBsYWNrZXQubmFtZSxcclxuICAgICAgICAgICAgcG92OiBwb3ZSZWYuY3VycmVudFxyXG4gICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgIHVybC5zZWFyY2ggPSBwYXJhbXMudG9TdHJpbmcoKTtcclxuICAgIFxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJSZXF1ZXN0IFVSTDpcIiwgdXJsLnRvU3RyaW5nKCkpO1xyXG4gICAgXHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFQSSBSZXNwb25zZTpcIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICBcclxuICAgICAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgaWYgKHN0YXR1cykge1xyXG4gICAgICAgICAgICBzZXREYXRhU3R5bGUocHJldlN0YXRlID0+ICh7XHJcbiAgICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICAgICAgICAgIGNvbGxhcjogeyBcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEuc3R5bGVzLmNvbGxhcj8ubmFtZSB8fCBwcmV2U3RhdGUuY29sbGFyLm5hbWUsIFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IGRhdGEuc3R5bGVzLmNvbGxhcj8uaW1hZ2UgfHwgcHJldlN0YXRlLmNvbGxhci5pbWFnZSBcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHNsZWV2ZTogeyBcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEuc3R5bGVzLnNsZWV2ZT8ubmFtZSB8fCBwcmV2U3RhdGUuc2xlZXZlLm5hbWUsIFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IGRhdGEuc3R5bGVzLnNsZWV2ZT8uaW1hZ2UgfHwgcHJldlN0YXRlLnNsZWV2ZS5pbWFnZSBcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHBvY2tldDogeyBcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEuc3R5bGVzLmNoZXN0cG9ja2V0Py5uYW1lIHx8IHByZXZTdGF0ZS5wb2NrZXQubmFtZSwgXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogZGF0YS5zdHlsZXMuY2hlc3Rwb2NrZXQ/LmltYWdlIHx8IHByZXZTdGF0ZS5wb2NrZXQuaW1hZ2UgXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBwbGFja2V0OiB7IFxyXG4gICAgICAgICAgICAgICAgbmFtZTogZGF0YS5zdHlsZXMucGxhY2tldD8ubmFtZSB8fCBwcmV2U3RhdGUucGxhY2tldC5uYW1lLCBcclxuICAgICAgICAgICAgICAgIGltYWdlOiBkYXRhLnN0eWxlcy5wbGFja2V0Py5pbWFnZSB8fCBwcmV2U3RhdGUucGxhY2tldC5pbWFnZSBcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIC8vIEFkZCBvdGhlciBzdHlsZSBwcm9wZXJ0aWVzIGFzIG5lZWRlZFxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQVBJIHJldHVybmVkIGVycm9yIHN0YXR1c1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gZ2V0Q3VzdG9tU3R5bGU6XCIsIGUpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgc2V0SXNMb2FkaW5nRmFicmljKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgLy8gY29uc3QgZ2V0Q3VzdG9tU3R5bGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coZmFicmljU2VsZWN0KTtcclxuICAgICAgICBcclxuICAgIC8vICAgICB0cnkge1xyXG4gICAgLy8gICAgICAgICBsZXQgcGxhY2tldE5hbWUgPSBcIlwiLFxyXG4gICAgLy8gICAgICAgICBpc1R1Y2tlZCA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICBpZihkYXRhU3R5bGUucGxhY2tldC5uYW1lLnNwbGl0KFwiIFwiKS5sZW5ndGggPiAxKXsgLy8qIENoZWNrIGFwYWthaCBpc2kgbnlhIFwiU3RhbmRhclwiIGF0YXUgc3VkYWggbGVuZ2thcCBkZW5nYW4gXCJCb2R5IFVudHVja2VkIFdpdGggU3F1YXJlXCJcclxuICAgIC8vICAgICAgICAgICAgIHBsYWNrZXROYW1lID0gZGF0YVN0eWxlLnBsYWNrZXQubmFtZTtcclxuICAgIC8vICAgICAgICAgfWVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgcGxhY2tldE5hbWUgPSBkYXRhU3R5bGUucGxhY2tldC5uYW1lLmNvbmNhdChcIiBCb2R5XCIsIGlzVHVja2VkID8gXCJcIiA6IFwiVW50dWNrZWRcIiAsXCJXaXRoIFNxdWFyZVwiKVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICB2YXIgdXJsID0gYC9hcGkvY3VzdG9tL2N1c3RvbV9zdHlsZT9mYWJyaWM9JHtmYWJyaWNTZWxlY3QuX2lkfSZjb2xsYXI9JHtkYXRhU3R5bGUuY29sbGFyLm5hbWV9JmN1ZmZzPSR7ZGF0YVN0eWxlLmN1ZmZzLm5hbWV9JnNsZWV2ZT0ke2RhdGFTdHlsZS5zbGVldmUubmFtZX0mYm90dG9tPSR7ZGF0YVN0eWxlLmJvdHRvbS5uYW1lfSZjaGVzdHBvY2tldD0ke2RhdGFTdHlsZS5wb2NrZXQubmFtZX0mcGxhY2tldD0ke2RhdGFTdHlsZS5wbGFja2V0Lm5hbWV9JnBvdj0ke3Bvdn1gO1xyXG4gICAgLy8gICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2codXJsKVxyXG4gICAgLy8gICAgICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgLy8gICAgICAgICBjb25zdCBuZXdEYXRhU3R5bGUgPSB7IC4uLmRhdGFTdHlsZSB9XHJcbiAgICAvLyAgICAgICAgIC8vIG5ld0RhdGFTdHlsZS5ib3R0b20ubmFtZSA9IGRhdGEuYm90dG9tLm5hbWVcclxuICAgIC8vICAgICAgICAgLy8gbmV3RGF0YVN0eWxlLmJvdHRvbS5pbWFnZSA9IGRhdGEuYm90dG9tLmltYWdlXHJcbiAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICBuZXdEYXRhU3R5bGUuY29sbGFyLm5hbWUgPSBkYXRhLnN0eWxlcy5jb2xsYXI/Lm5hbWUgfHwgXCJcIlxyXG4gICAgLy8gICAgICAgICBuZXdEYXRhU3R5bGUuY29sbGFyLmltYWdlID0gZGF0YS5zdHlsZXMuY29sbGFyPy5pbWFnZSB8fCBcIlwiXHJcbiAgICAvLyAgICAgICAgIG5ld0RhdGFTdHlsZS5zbGVldmUubmFtZSA9IGRhdGEuc3R5bGVzLnNsZWV2ZT8ubmFtZSB8fCBcIlwiXHJcbiAgICAvLyAgICAgICAgIG5ld0RhdGFTdHlsZS5zbGVldmUuaW1hZ2UgPSBkYXRhLnN0eWxlcy5zbGVldmU/LmltYWdlIHx8IFwiXCJcclxuICAgIC8vICAgICAgICAgbmV3RGF0YVN0eWxlLnBvY2tldC5uYW1lID0gZGF0YS5zdHlsZXMuY2hlc3Rwb2NrZXQ/Lm5hbWUgfHwgXCJcIlxyXG4gICAgLy8gICAgICAgICBuZXdEYXRhU3R5bGUucG9ja2V0LmltYWdlID0gZGF0YS5zdHlsZXMuY2hlc3Rwb2NrZXQ/LmltYWdlIHx8IFwiXCJcclxuICAgIC8vICAgICAgICAgbmV3RGF0YVN0eWxlLnBsYWNrZXQubmFtZSA9IGRhdGEuc3R5bGVzLnBsYWNrZXQ/Lm5hbWUgfHwgXCJcIlxyXG4gICAgLy8gICAgICAgICBuZXdEYXRhU3R5bGUucGxhY2tldC5pbWFnZSA9IGRhdGEuc3R5bGVzLnBsYWNrZXQ/LmltYWdlIHx8IFwiXCJcclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGZhYnJpY1NlbGVjdC5faWQpXHJcbiAgICAvLyAgICAgICAgIHNldERhdGFTdHlsZShuZXdEYXRhU3R5bGUpXHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKG5ld0RhdGFTdHlsZSlcclxuICAgIC8vICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgLy8gICAgIH0gZmluYWxseSB7XHJcbiAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxyXG4gICAgLy8gICAgICAgICB9LCA3MDApO1xyXG4gICAgLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIHNldElzTG9hZGluZ0ZhYnJpYyhmYWxzZSlcclxuICAgIC8vICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgb3BlblN0eWxlLFxyXG4gICAgICAgIGxpc3RTdHlsZSxcclxuICAgICAgICBmYWJyaWNMaXN0LFxyXG4gICAgICAgIHN0eWxlU2VsZWN0LFxyXG4gICAgICAgIGZhYnJpY1NlbGVjdCxcclxuICAgICAgICBkYXRhU3R5bGUsXHJcbiAgICAgICAgaXNMb2FkaW5nLFxyXG4gICAgICAgIGlzTG9hZGluZ0ZhYnJpYyxcclxuICAgICAgICBwb3YsXHJcbiAgICAgICAgdXBkYXRlUG92LFxyXG4gICAgICAgIHNldFBvdixcclxuICAgICAgICBzZXREYXRhU3R5bGUsXHJcbiAgICAgICAgc2V0SXNMb2FkaW5nLFxyXG4gICAgICAgIHNldE9wZW5TdHlsZSxcclxuICAgICAgICBzZXRGYWJyaWNMaXN0LFxyXG4gICAgICAgIHNldFN0eWxlU2VsZWN0LFxyXG4gICAgICAgIHNldEZhYnJpY1NlbGVjdCxcclxuICAgICAgICBzZXRJc0xvYWRpbmdGYWJyaWMsXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgdXNlSG9va0N1c3RvbSJdLCJzb3VyY2VSb290IjoiIn0=