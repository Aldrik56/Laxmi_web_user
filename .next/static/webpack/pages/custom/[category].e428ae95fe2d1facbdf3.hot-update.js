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

              if (dataStyle.pocket.name === "No Pocket") {} else if (dataStyle.pocket.name === "Standard") {
                newDataStyle.pocketFold.image = "/img/folded/red/pocket/Chestpocket Standard Folded.svg";
              } else if (dataStyle.pocket.name === "With Flap") {
                newDataStyle.pocketFold.image = "/img/folded/red/pocket/Chestpocket With Flap Folded.svg";
              } else if (dataStyle.pocket.name === "Double Standard") {
                newDataStyle.pocketFold.image = "/img/folded/red/pocket/Chestpocket Double Standard Folded.svg";
              } else if (dataStyle.pocket.name === "Double With Flap") {
                newDataStyle.pocketFold.image = "/img/folded/red/pocket/Chestpocket Double With Flap Folded.svg";
              }

              if (dataStyle.cuffs.name === "Double Rounded French") {
                newDataStyle.cuffsFold.image = "/img/folded/red/sleeve/Cuffs Double Rounded French Folded.svg";
              } else if (dataStyle.cuffs.name === "Double Square French") {} else if (dataStyle.cuffs.name === "Rounded One") {
                newDataStyle.cuffsFold.image = "/img/folded/red/sleeve/Cuffs Rounded One Button Folded.svg";
              } else if (dataStyle.cuffs.name === "Rounded Two") {} else if (dataStyle.cuffs.name === "Square French") {
                newDataStyle.cuffsFold.image = "/img/folded/red/sleeve/Cuffs Square French Folded.svg";
              } else if (dataStyle.cuffs.name === "Single One Button") {} else if (dataStyle.cuffs.name === "Single Two Button") {} else if (dataStyle.cuffs.name === "One Button Cut") {
                newDataStyle.cuffsFold.image = "/img/folded/red/sleeve/Cuffs One Button Cut  Folded.svg";
              } else if (dataStyle.cuffs.name === "Two Button Cut") {} else if (dataStyle.cuffs.name === "Short") {
                newDataStyle.cuffsFold.image = "/img/folded/red/sleeve/Sleeve Short Folded.svg";
              }

              _context3.next = 40;
              break;

            case 37:
              _context3.prev = 37;
              _context3.t0 = _context3["catch"](6);
              console.log(_context3.t0);

            case 40:
              _context3.prev = 40;
              setTimeout(function () {
                setIsLoading(false);
              }, 700);
              setTimeout(function () {
                setIsLoadingFabric(false);
              }, 1000);
              return _context3.finish(40);

            case 44:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[6, 37, 40, 44]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9jdXN0b20vaG9va0N1c3RvbS5qcyJdLCJuYW1lcyI6WyJpbml0U3R5bGUiLCJ1c2VIb29rQ3VzdG9tIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJmYWJyaWNMaXN0Iiwic2V0RmFicmljTGlzdCIsImZhYnJpY1NlbGVjdCIsInNldEZhYnJpY1NlbGVjdCIsImxpc3RTdHlsZSIsInNldExpc3RTdHlsZSIsIm9wZW5TdHlsZSIsInNldE9wZW5TdHlsZSIsInN0eWxlU2VsZWN0Iiwic2V0U3R5bGVTZWxlY3QiLCJkYXRhU3R5bGUiLCJzZXREYXRhU3R5bGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0xvYWRpbmdGYWJyaWMiLCJzZXRJc0xvYWRpbmdGYWJyaWMiLCJjYXRlZ29yeSIsInF1ZXJ5IiwicG92Iiwic2V0UG92IiwiZmFicmljU2VsZWN0UmVmIiwidXNlUmVmIiwiZmFicmljIiwidXNlRWZmZWN0IiwiZ2V0Q3VzdG9tU3R5bGUiLCJjdXJyZW50IiwiY29uc29sZSIsImxvZyIsInVwZGF0ZVBvdiIsIm5ld1BvdiIsIm5ld0ZhYnJpYyIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwic3RhdHVzIiwibWVzc2FnZSIsIm5ld0RhdGFTdHlsZSIsInRpdGxlIiwiY29sbGFyIiwibmFtZSIsInNsZWV2ZSIsImJvdHRvbSIsInBvY2tldCIsImN1ZmZzIiwiY3VmZnNCYWNrIiwicGxhY2tldCIsIlZlc3RMaXN0U3R5bGUiLCJCYXRpa0xpc3RTdHlsZSIsIlNoaXJ0TGlzdFN0eWxlIiwiVHJvdXNlckxpc3RTdHlsZSIsIkJsYXplckxpc3RTdHlsZSIsImN1cnJlbnRGYWJyaWNTZWxlY3QiLCJwbGFja2V0TmFtZSIsImlzVHVja2VkIiwic3BsaXQiLCJsZW5ndGgiLCJjb25jYXQiLCJ1cmwiLCJfaWQiLCJzdHlsZXMiLCJpbWFnZSIsImNoZXN0cG9ja2V0IiwicGxlYXRzIiwiY29sbGFyQmFjayIsInBsYWNrZXRGb2xkIiwiY29sbGFyRm9sZCIsInBvY2tldEZvbGQiLCJjdWZmc0ZvbGQiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUVBO0FBQ0E7QUFDQTtBQVFBLElBQU1BLFNBQVMsR0FBRztBQUNkLFlBQVU7QUFDTixhQUFTLEVBREg7QUFFTixZQUFRO0FBRkYsR0FESTtBQUtkLFlBQVU7QUFDTixhQUFTLEVBREg7QUFFTixZQUFRO0FBRkYsR0FMSTtBQVNkLGdCQUFjO0FBQ1YsYUFBUyxpQ0FEQztBQUVWLFlBQVE7QUFGRSxHQVRBO0FBYWQsWUFBVTtBQUNOLGFBQVMsRUFESDtBQUVOLFlBQVE7QUFGRixHQWJJO0FBaUJkLFdBQVM7QUFDTCxhQUFTLEVBREo7QUFFTCxZQUFRO0FBRkgsR0FqQks7QUFxQmQsZUFBYTtBQUNULGFBQVMsdURBREE7QUFFVCxZQUFRO0FBRkMsR0FyQkM7QUF5QmQsWUFBVTtBQUNOLGFBQVMsRUFESDtBQUVOLFlBQVE7QUFGRixHQXpCSTtBQTZCZCxhQUFXO0FBQ1AsYUFBUyxFQURGO0FBRVAsWUFBUTtBQUZELEdBN0JHO0FBaUNkLFlBQVU7QUFDTixhQUFTLHVDQURIO0FBRU4sWUFBUTtBQUZGLEdBakNJO0FBcUNkLGdCQUFhO0FBQ1QsYUFBUTtBQURDLEdBckNDO0FBd0NkLGVBQVk7QUFDUixhQUFRO0FBREEsR0F4Q0U7QUEyQ2QsZ0JBQWE7QUFDVCxhQUFRLEVBREMsQ0FFVDs7QUFGUyxHQTNDQztBQStDZCxpQkFBYztBQUNWLGFBQVE7QUFERTtBQS9DQSxDQUFsQjs7QUFvREEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQ3hCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRHdCLGtCQUVZQyxzREFBUSxDQUFDLEVBQUQsQ0FGcEI7QUFBQSxNQUVqQkMsVUFGaUI7QUFBQSxNQUVMQyxhQUZLOztBQUFB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QVMsRUFBVEEsU0FWRztBQVdIVCxVQUFNLEVBQU5BLE1BWEc7QUFZSFIsZ0JBQVksRUFBWkEsWUFaRztBQWFIRSxnQkFBWSxFQUFaQSxZQWJHO0FBY0hOLGdCQUFZLEVBQVpBLFlBZEc7QUFlSE4saUJBQWEsRUFBYkEsYUFmRztBQWdCSFEsa0JBQWMsRUFBZEEsY0FoQkc7QUFpQkhOLG1CQUFlLEVBQWZBLGVBakJHO0FBa0JIWSxzQkFBa0IsRUFBbEJBO0FBbEJHLEdBQVA7QUFvQkgsQ0F2UUQ7O0dBQU1uQixhO1VBQ2FFLHFEOzs7QUF1UUpGLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2N1c3RvbS9bY2F0ZWdvcnldLmU0MjhhZTk1ZmUyZDFmYWNiZGYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbi8vIGltcG9ydCBmcmVuY2hQbGFja2V0IGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvaW1nL3BsYWNrZXQvUGxhY2tldCBGcmVuY2guc3ZnXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUsdXNlUmVmIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHtcclxuICAgIEJsYXplckxpc3RTdHlsZSxcclxuICAgIFNoaXJ0TGlzdFN0eWxlLFxyXG4gICAgVHJvdXNlckxpc3RTdHlsZSxcclxuICAgIFZlc3RMaXN0U3R5bGUsXHJcbiAgICBCYXRpa0xpc3RTdHlsZVxyXG59IGZyb20gJy4vc2lkZWJhci9kYXRhU2lkZWJhcidcclxuXHJcbmNvbnN0IGluaXRTdHlsZSA9IHtcclxuICAgIFwiYm90dG9tXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU3F1YXJlXCJcclxuICAgIH0sXHJcbiAgICBcImNvbGxhclwiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlN0YW5kIFVwXCJcclxuICAgIH0sXHJcbiAgICBcImNvbGxhckJhY2tcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCIvaW1nL3BsZWF0cy9yZWQvQ29sbGFyIEJhY2suc3ZnXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU3RhbmQgVXBcIlxyXG4gICAgfSxcclxuICAgIFwic2xlZXZlXCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiU2hvcnRcIlxyXG4gICAgfSxcclxuICAgIFwiY3VmZnNcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJPbmUgQnV0dG9uIEN1dFwiXHJcbiAgICB9LFxyXG4gICAgXCJjdWZmc0JhY2tcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCIvaW1nL3NsZWV2ZV9iYWNrL0N1ZmZzIERvdWJsZSBSb3VuZGVkIEZyZW5jaCBCYWNrLnN2Z1wiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlNxdWFyZSBGcmVuY2hcIlxyXG4gICAgfSxcclxuICAgIFwicG9ja2V0XCI6IHtcclxuICAgICAgICBcImltYWdlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiV2l0aCBGbGFwXCJcclxuICAgIH0sXHJcbiAgICBcInBsYWNrZXRcIjoge1xyXG4gICAgICAgIFwiaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJTdGFuZGFyZCBCb2R5IFVudHVja2VkIFdpdGggU3F1YXJlXCJcclxuICAgIH0sXHJcbiAgICBcInBsZWF0c1wiOiB7XHJcbiAgICAgICAgXCJpbWFnZVwiOiBcIi9pbWcvcGxlYXRzL3JlZC9QbGVhdHMgQm94IFR1Y2tlZC5zdmdcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJQbGVhdHNcIlxyXG4gICAgfSxcclxuICAgIFwiY29sbGFyRm9sZFwiOntcclxuICAgICAgICBcImltYWdlXCI6XCJcIlxyXG4gICAgfSxcclxuICAgIFwiY3VmZnNGb2xkXCI6e1xyXG4gICAgICAgIFwiaW1hZ2VcIjpcIlwiXHJcbiAgICB9LFxyXG4gICAgXCJwb2NrZXRGb2xkXCI6e1xyXG4gICAgICAgIFwiaW1hZ2VcIjpcIlwiXHJcbiAgICAgICAgLy8gXCJpbWFnZVwiOlwiL2ltZy9wbGVhdHMvcmVkL0NoZXN0IFBvY2tldCBGb2xkZWQuc3ZnXCJcclxuICAgIH0sXHJcbiAgICBcInBsYWNrZXRGb2xkXCI6e1xyXG4gICAgICAgIFwiaW1hZ2VcIjpcIi9pbWcvZm9sZGVkL3JlZC9wbGVhdHMvUGxhY2tldCBTdGFuZGFyZCBCb2R5IEZvbGRlZC5zdmdcIlxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB1c2VIb29rQ3VzdG9tID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IFtmYWJyaWNMaXN0LCBzZXRGYWJyaWNMaXN0XSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2ZhYnJpY1NlbGVjdCwgc2V0RmFicmljU2VsZWN0XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbbGlzdFN0eWxlLCBzZXRMaXN0U3R5bGVdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbb3BlblN0eWxlLCBzZXRPcGVuU3R5bGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbc3R5bGVTZWxlY3QsIHNldFN0eWxlU2VsZWN0XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbZGF0YVN0eWxlLCBzZXREYXRhU3R5bGVdID0gdXNlU3RhdGUoaW5pdFN0eWxlKVxyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2lzTG9hZGluZ0ZhYnJpYywgc2V0SXNMb2FkaW5nRmFicmljXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgeyBjYXRlZ29yeSB9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgICBjb25zdCBbcG92LCBzZXRQb3ZdID0gdXNlU3RhdGUoXCJGUk9OVFwiKVxyXG4gICAgY29uc3QgZmFicmljU2VsZWN0UmVmID0gdXNlUmVmKG51bGwpXHJcbiAgICB2YXIgZmFicmljO1xyXG5cclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZmFicmljU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIGdldEN1c3RvbVN0eWxlKClcclxuICAgICAgICAgICAgZmFicmljU2VsZWN0UmVmLmN1cnJlbnQgPSBmYWJyaWNTZWxlY3RcclxuICAgICAgICB9XHJcbiAgICB9LCBbZmFicmljU2VsZWN0XSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZ0ZhYnJpYyh0cnVlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5pIG5ldyBwb3ZcIiwgcG92KTtcclxuICAgICAgICBpZiAoIWZhYnJpY1NlbGVjdCAmJiBmYWJyaWNTZWxlY3RSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBzZXRGYWJyaWNTZWxlY3QoZmFicmljU2VsZWN0UmVmLmN1cnJlbnQpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZ2V0Q3VzdG9tU3R5bGUoKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtwb3ZdKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVQb3YgPSAobmV3UG92LCBuZXdGYWJyaWMpID0+IHtcclxuICAgICAgICBzZXRQb3YobmV3UG92KTtcclxuICAgICAgICBzZXRGYWJyaWNTZWxlY3QobmV3RmFicmljKVxyXG4gICAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0Q3VzdG9tU3R5bGUoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2ZhYnJpYy9saXN0XCIpO1xyXG4gICAgICAgICAgICBjb25zdCB7IHN0YXR1cywgbWVzc2FnZSB9ID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICBpZiAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgIHNldEZhYnJpY0xpc3QoZGF0YSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEZhYnJpY0xpc3QoW10pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHNldEZhYnJpY0xpc3QoW10pXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmdGYWJyaWModHJ1ZSlcclxuICAgICAgICBnZXRDdXN0b21TdHlsZSgpXHJcbiAgICB9LCBbZmFicmljU2VsZWN0XSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGFTdHlsZTpcIiwgZGF0YVN0eWxlKVxyXG4gICAgfSxbZGF0YVN0eWxlXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0eWxlU2VsZWN0KTtcclxuICAgICAgICBjb25zdCBuZXdEYXRhU3R5bGUgPSB7IC4uLmRhdGFTdHlsZSB9XHJcbiAgICAgICAgc3dpdGNoIChzdHlsZVNlbGVjdD8udGl0bGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkNvbGxhclwiOlxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmNvbGxhci5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJTbGVldmVcIjpcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5zbGVldmUubmFtZSA9IHN0eWxlU2VsZWN0Lm5hbWVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQm90dG9tXCI6XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuYm90dG9tLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkNoZXN0IFBvY2tldFwiOlxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnBvY2tldC5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDdWZmc1wiOlxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmN1ZmZzLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY3VmZnNCYWNrLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuc2xlZXZlLm5hbWUgPSBcIkxvbmdcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJQbGFja2V0XCI6XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUucGxhY2tldC5uYW1lID0gc3R5bGVTZWxlY3QubmFtZVxyXG4gICAgICAgICAgICAvLyBjYXNlIFwiUGxlYXRzXCI6XHJcbiAgICAgICAgICAgIC8vICAgICBuZXdEYXRhU3R5bGUucGxlYXRzLm5hbWUgPSBzdHlsZVNlbGVjdC5uYW1lXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRDdXN0b21TdHlsZSgpXHJcbiAgICB9LCBbc3R5bGVTZWxlY3RdKVxyXG4gICAgXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChjYXRlZ29yeSkge1xyXG4gICAgICAgICAgICBjYXNlICd2ZXN0cyc6XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0U3R5bGUoVmVzdExpc3RTdHlsZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdiYXRpa3MnOlxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdFN0eWxlKEJhdGlrTGlzdFN0eWxlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NoaXJ0cyc6XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0U3R5bGUoU2hpcnRMaXN0U3R5bGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAndHJvdXNlcnMnOlxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdFN0eWxlKFRyb3VzZXJMaXN0U3R5bGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYmxhemVyJzpcclxuICAgICAgICAgICAgICAgIHNldExpc3RTdHlsZShCbGF6ZXJMaXN0U3R5bGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LCBbY2F0ZWdvcnldKTtcclxuXHJcbiAgICBjb25zdCBnZXRDdXN0b21TdHlsZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50RmFicmljU2VsZWN0ID0gZmFicmljU2VsZWN0IHx8IGZhYnJpY1NlbGVjdFJlZi5jdXJyZW50O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRGYWJyaWNTZWxlY3QpO1xyXG4gICAgICAgIGlmICghY3VycmVudEZhYnJpY1NlbGVjdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGZhYnJpYyBzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nRmFicmljKGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcGxhY2tldE5hbWUgPSBcIlwiLFxyXG4gICAgICAgICAgICBpc1R1Y2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZihkYXRhU3R5bGUucGxhY2tldC5uYW1lLnNwbGl0KFwiIFwiKS5sZW5ndGggPiAxKXsgLy8qIENoZWNrIGFwYWthaCBpc2kgbnlhIFwiU3RhbmRhclwiIGF0YXUgc3VkYWggbGVuZ2thcCBkZW5nYW4gXCJCb2R5IFVudHVja2VkIFdpdGggU3F1YXJlXCJcclxuICAgICAgICAgICAgICAgIHBsYWNrZXROYW1lID0gZGF0YVN0eWxlLnBsYWNrZXQubmFtZTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGxhY2tldE5hbWUgPSBkYXRhU3R5bGUucGxhY2tldC5uYW1lLmNvbmNhdChcIiBCb2R5XCIsIGlzVHVja2VkID8gXCJcIiA6IFwiVW50dWNrZWRcIiAsXCJXaXRoIFNxdWFyZVwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgdXJsID0gYC9hcGkvY3VzdG9tL2N1c3RvbV9zdHlsZT9mYWJyaWM9JHtjdXJyZW50RmFicmljU2VsZWN0Ll9pZH0mY29sbGFyPSR7ZGF0YVN0eWxlLmNvbGxhci5uYW1lfSZjdWZmcz0ke2RhdGFTdHlsZS5jdWZmcy5uYW1lfSZzbGVldmU9JHtkYXRhU3R5bGUuc2xlZXZlLm5hbWV9JmJvdHRvbT0ke2RhdGFTdHlsZS5ib3R0b20ubmFtZX0mY2hlc3Rwb2NrZXQ9JHtkYXRhU3R5bGUucG9ja2V0Lm5hbWV9JnBsYWNrZXQ9JHtkYXRhU3R5bGUucGxhY2tldC5uYW1lfSZwb3Y9JHtwb3Z9YDtcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVybClcclxuICAgICAgICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgY29uc3QgbmV3RGF0YVN0eWxlID0geyAuLi5kYXRhU3R5bGUgfVxyXG4gICAgICAgICAgICAvLyBuZXdEYXRhU3R5bGUuYm90dG9tLm5hbWUgPSBkYXRhLmJvdHRvbS5uYW1lXHJcbiAgICAgICAgICAgIC8vIG5ld0RhdGFTdHlsZS5ib3R0b20uaW1hZ2UgPSBkYXRhLmJvdHRvbS5pbWFnZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmNvbGxhci5uYW1lID0gZGF0YS5zdHlsZXMuY29sbGFyPy5uYW1lIHx8IFwiXCJcclxuICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmNvbGxhci5pbWFnZSA9IGRhdGEuc3R5bGVzLmNvbGxhcj8uaW1hZ2UgfHwgXCJcIlxyXG4gICAgICAgICAgICBuZXdEYXRhU3R5bGUuc2xlZXZlLm5hbWUgPSBkYXRhLnN0eWxlcy5zbGVldmU/Lm5hbWUgfHwgXCJcIlxyXG4gICAgICAgICAgICBuZXdEYXRhU3R5bGUuc2xlZXZlLmltYWdlID0gZGF0YS5zdHlsZXMuc2xlZXZlPy5pbWFnZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wb2NrZXQubmFtZSA9IGRhdGEuc3R5bGVzLmNoZXN0cG9ja2V0Py5uYW1lIHx8IFwiXCJcclxuICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnBvY2tldC5pbWFnZSA9IGRhdGEuc3R5bGVzLmNoZXN0cG9ja2V0Py5pbWFnZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wbGFja2V0Lm5hbWUgPSBkYXRhLnN0eWxlcy5wbGFja2V0Py5uYW1lIHx8IFwiXCJcclxuICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnBsYWNrZXQuaW1hZ2UgPSBkYXRhLnN0eWxlcy5wbGFja2V0Py5pbWFnZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIGZhYnJpYz0gZmFicmljU2VsZWN0XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmYWJyaWNTZWxlY3QuX2lkKVxyXG4gICAgICAgICAgICBzZXREYXRhU3R5bGUobmV3RGF0YVN0eWxlKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdEYXRhU3R5bGUpXHJcblxyXG4gICAgICAgICAgICAvLyBpZihmYWJyaWNTZWxlY3QuX2lkPT09XCI2NzA1ZmZmYThmMTQ4NzkwMDkxMjZkMWRcIil7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wbGVhdHMuaW1hZ2U9XCIvaW1nL3BsZWF0cy9yZWQvUGxlYXRzIEJveCBUdWNrZWQuc3ZnXCJcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5jb2xsYXJCYWNrLmltYWdlPVwiL2ltZy9wbGVhdHMvcmVkL0NvbGxhciBCYWNrLnN2Z1wiXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihkYXRhU3R5bGUucGxhY2tldC5uYW1lPT09XCJGcmVuY2hcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLnBsYWNrZXRGb2xkLmltYWdlPVwiL2ltZy9mb2xkZWQvcmVkL3BsZWF0cy9QbGFja2V0IEZyZW5jaCBCb2R5IEZvbGRlZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoZGF0YVN0eWxlLnBsYWNrZXQubmFtZT09PVwiSGlkZGVuXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wbGFja2V0Rm9sZC5pbWFnZT1cIi9pbWcvZm9sZGVkL3JlZC9wbGVhdHMvUGxhY2tldCBIaWRkZW4gQm9keSBGb2xkZWQuc3ZnXCJcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGRhdGFTdHlsZS5wbGFja2V0Lm5hbWU9PT1cIlN0YW5kYXJkXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wbGFja2V0Rm9sZC5pbWFnZT1cIi9pbWcvZm9sZGVkL3JlZC9wbGVhdHMvUGxhY2tldCBTdGFuZGFyZCBCb2R5IEZvbGRlZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKGRhdGFTdHlsZS5jb2xsYXIubmFtZT09PVwiU3RhbmQgVXBcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmNvbGxhckZvbGQuaW1hZ2U9XCIvaW1nL2ZvbGRlZC9yZWQvY29sbGFyL0NvbGxhciBTdGFuZCBVcCBQbGFja2V0IEZyZW5jaCBGb2xkZWQuc3ZnXCJcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGRhdGFTdHlsZS5jb2xsYXIubmFtZT09PVwiQnV0dG9uIERvd25cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmNvbGxhckZvbGQuaW1hZ2U9XCIvaW1nL2ZvbGRlZC9yZWQvY29sbGFyL0NvbGxhciBCdXR0b24gRG93biBQbGFja2V0IEZyZW5jaCBGb2xkZWQuc3ZnXCJcclxuXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihkYXRhU3R5bGUuY29sbGFyLm5hbWU9PT1cIkN1dGF3YXlcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmNvbGxhckZvbGQuaW1hZ2U9XCIvaW1nL2ZvbGRlZC9yZWQvY29sbGFyL0NvbGxhciBDdXRhd2F5IFBsYWNrZXQgRnJlbmNoIEZvbGRlZC5zdmdcIlxyXG5cclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGRhdGFTdHlsZS5jb2xsYXIubmFtZT09PVwiS2VudCBDb2xsYXJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmNvbGxhckZvbGQuaW1hZ2U9XCIvaW1nL2ZvbGRlZC9yZWQvY29sbGFyL0NvbGxhciBLZW50IENvbGxhciBQbGFja2V0IEZyZW5jaCBGb2xkZWQuc3ZnXCJcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGRhdGFTdHlsZS5jb2xsYXIubmFtZT09PVwiTmV3IEtlbnRcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmNvbGxhckZvbGQuaW1hZ2U9XCIvaW1nL2ZvbGRlZC9yZWQvY29sbGFyL0NvbGxhciBOZXcgS2VudCBQbGFja2V0IEZyZW5jaCBGb2xkZWQuc3ZnXCJcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGRhdGFTdHlsZS5jb2xsYXIubmFtZT09PVwiUGlubmVkXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5jb2xsYXJGb2xkLmltYWdlPVwiL2ltZy9mb2xkZWQvcmVkL2NvbGxhci9Db2xsYXIgUGlubmVkIFBsYWNrZXQgRnJlbmNoIEZvbGRlZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoZGF0YVN0eWxlLmNvbGxhci5uYW1lPT09XCJSb3VuZGVkXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5jb2xsYXJGb2xkLmltYWdlPVwiL2ltZy9mb2xkZWQvcmVkL2NvbGxhci9Db2xsYXIgUm91bmRlZCBQbGFja2V0IEZyZW5jaCBGb2xkZWQuc3ZnXCJcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGRhdGFTdHlsZS5jb2xsYXIubmFtZT09PVwiV2luZ1wiKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY29sbGFyRm9sZC5pbWFnZT1cIi9pbWcvZm9sZGVkL3JlZC9jb2xsYXIvQ29sbGFyIFdpbmcgUGxhY2tldCBGcmVuY2ggRm9sZGVkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihkYXRhU3R5bGUuY29sbGFyLm5hbWU9PT1cIkxvbmdcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmNvbGxhckZvbGQuaW1hZ2U9XCIvaW1nL2ZvbGRlZC9yZWQvY29sbGFyL0NvbGxhciBMb25nIFBsYWNrZXQgRnJlbmNoIEZvbGRlZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoZGF0YVN0eWxlLmNvbGxhci5uYW1lPT09XCJTaG9ydCBDbGFzc2ljXCIpe1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihkYXRhU3R5bGUucG9ja2V0Lm5hbWU9PT1cIk5vIFBvY2tldFwiKXtcclxuXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihkYXRhU3R5bGUucG9ja2V0Lm5hbWU9PT1cIlN0YW5kYXJkXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wb2NrZXRGb2xkLmltYWdlPVwiL2ltZy9mb2xkZWQvcmVkL3BvY2tldC9DaGVzdHBvY2tldCBTdGFuZGFyZCBGb2xkZWQuc3ZnXCJcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGRhdGFTdHlsZS5wb2NrZXQubmFtZT09PVwiV2l0aCBGbGFwXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wb2NrZXRGb2xkLmltYWdlPVwiL2ltZy9mb2xkZWQvcmVkL3BvY2tldC9DaGVzdHBvY2tldCBXaXRoIEZsYXAgRm9sZGVkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihkYXRhU3R5bGUucG9ja2V0Lm5hbWU9PT1cIkRvdWJsZSBTdGFuZGFyZFwiKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUucG9ja2V0Rm9sZC5pbWFnZT1cIi9pbWcvZm9sZGVkL3JlZC9wb2NrZXQvQ2hlc3Rwb2NrZXQgRG91YmxlIFN0YW5kYXJkIEZvbGRlZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoZGF0YVN0eWxlLnBvY2tldC5uYW1lPT09XCJEb3VibGUgV2l0aCBGbGFwXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5wb2NrZXRGb2xkLmltYWdlPVwiL2ltZy9mb2xkZWQvcmVkL3BvY2tldC9DaGVzdHBvY2tldCBEb3VibGUgV2l0aCBGbGFwIEZvbGRlZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKGRhdGFTdHlsZS5jdWZmcy5uYW1lPT09XCJEb3VibGUgUm91bmRlZCBGcmVuY2hcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmN1ZmZzRm9sZC5pbWFnZT1cIi9pbWcvZm9sZGVkL3JlZC9zbGVldmUvQ3VmZnMgRG91YmxlIFJvdW5kZWQgRnJlbmNoIEZvbGRlZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoZGF0YVN0eWxlLmN1ZmZzLm5hbWU9PT1cIkRvdWJsZSBTcXVhcmUgRnJlbmNoXCIpe1xyXG5cclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGRhdGFTdHlsZS5jdWZmcy5uYW1lPT09XCJSb3VuZGVkIE9uZVwiKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdEYXRhU3R5bGUuY3VmZnNGb2xkLmltYWdlPVwiL2ltZy9mb2xkZWQvcmVkL3NsZWV2ZS9DdWZmcyBSb3VuZGVkIE9uZSBCdXR0b24gRm9sZGVkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihkYXRhU3R5bGUuY3VmZnMubmFtZT09PVwiUm91bmRlZCBUd29cIil7XHJcblxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoZGF0YVN0eWxlLmN1ZmZzLm5hbWU9PT1cIlNxdWFyZSBGcmVuY2hcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmN1ZmZzRm9sZC5pbWFnZT1cIi9pbWcvZm9sZGVkL3JlZC9zbGVldmUvQ3VmZnMgU3F1YXJlIEZyZW5jaCBGb2xkZWQuc3ZnXCJcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGRhdGFTdHlsZS5jdWZmcy5uYW1lPT09XCJTaW5nbGUgT25lIEJ1dHRvblwiKXtcclxuXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihkYXRhU3R5bGUuY3VmZnMubmFtZT09PVwiU2luZ2xlIFR3byBCdXR0b25cIil7XHJcblxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoZGF0YVN0eWxlLmN1ZmZzLm5hbWU9PT1cIk9uZSBCdXR0b24gQ3V0XCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0RhdGFTdHlsZS5jdWZmc0ZvbGQuaW1hZ2U9XCIvaW1nL2ZvbGRlZC9yZWQvc2xlZXZlL0N1ZmZzIE9uZSBCdXR0b24gQ3V0ICBGb2xkZWQuc3ZnXCJcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGRhdGFTdHlsZS5jdWZmcy5uYW1lPT09XCJUd28gQnV0dG9uIEN1dFwiKXtcclxuXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihkYXRhU3R5bGUuY3VmZnMubmFtZT09PVwiU2hvcnRcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RGF0YVN0eWxlLmN1ZmZzRm9sZC5pbWFnZT1cIi9pbWcvZm9sZGVkL3JlZC9zbGVldmUvU2xlZXZlIFNob3J0IEZvbGRlZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICB9LCA3MDApO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldElzTG9hZGluZ0ZhYnJpYyhmYWxzZSlcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgb3BlblN0eWxlLFxyXG4gICAgICAgIGxpc3RTdHlsZSxcclxuICAgICAgICBmYWJyaWNMaXN0LFxyXG4gICAgICAgIHN0eWxlU2VsZWN0LFxyXG4gICAgICAgIGZhYnJpY1NlbGVjdCxcclxuICAgICAgICBkYXRhU3R5bGUsXHJcbiAgICAgICAgaXNMb2FkaW5nLFxyXG4gICAgICAgIGlzTG9hZGluZ0ZhYnJpYyxcclxuICAgICAgICBwb3YsXHJcbiAgICAgICAgdXBkYXRlUG92LFxyXG4gICAgICAgIHNldFBvdixcclxuICAgICAgICBzZXREYXRhU3R5bGUsXHJcbiAgICAgICAgc2V0SXNMb2FkaW5nLFxyXG4gICAgICAgIHNldE9wZW5TdHlsZSxcclxuICAgICAgICBzZXRGYWJyaWNMaXN0LFxyXG4gICAgICAgIHNldFN0eWxlU2VsZWN0LFxyXG4gICAgICAgIHNldEZhYnJpY1NlbGVjdCxcclxuICAgICAgICBzZXRJc0xvYWRpbmdGYWJyaWMsXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgdXNlSG9va0N1c3RvbSJdLCJzb3VyY2VSb290IjoiIn0=