webpackHotUpdate_N_E("pages/custom/[category]",{

/***/ "./components/partials/custom/modelContainer.jsx":
/*!*******************************************************!*\
  !*** ./components/partials/custom/modelContainer.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/.pnpm/next@10.2.0_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elements_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/icon */ "./components/elements/icon/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/.pnpm/axios@0.21.4/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hookCustom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hookCustom */ "./components/partials/custom/hookCustom.js");



var _jsxFileName = "D:\\luarKampus\\Magang\\Bestada\\laxmi.front.web.user\\components\\partials\\custom\\modelContainer.jsx",
    _this = undefined,
    _s = $RefreshSig$();







var ModelContainer = function ModelContainer(_ref) {
  _s();

  var fabricSelect = _ref.fabricSelect,
      isLoading = _ref.isLoading,
      isLoadingFabric = _ref.isLoadingFabric,
      dataStyle = _ref.dataStyle;

  var _useHookCustom = Object(_hookCustom__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      pov = _useHookCustom.pov,
      updatePov = _useHookCustom.updatePov;

  var povOptions = ['FRONT', 'BACK', 'FOLDED'];
  var duration = 1000;
  var interval = 300;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      sleeveFlicker = _useState[0],
      setSleeveFlicker = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      collarFlicker = _useState2[0],
      setCollarFlicker = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      cuffsFlicker = _useState3[0],
      setCuffsFlicker = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      placketFlicker = _useState4[0],
      setPlacketFlicker = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      pocketFlicker = _useState5[0],
      setPocketFlicker = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      pleatsFlicker = _useState6[0],
      setPleatsFlicker = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    updatePov(povOptions[0], fabricSelect);
  }, []);

  var handlePrevPovChange = function handlePrevPovChange() {
    var currentIndex = povOptions.indexOf(pov);
    var prevIndex = (currentIndex - 1 + povOptions.length) % povOptions.length;
    updatePov(povOptions[prevIndex], fabricSelect);
  };

  var handleNextPovChange = function handleNextPovChange() {
    var currentIndex = povOptions.indexOf(pov);
    var nextIndex = (currentIndex + 1) % povOptions.length;
    updatePov(povOptions[nextIndex], fabricSelect);
    console.log(povOptions[nextIndex]);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          height: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            border: "2px solid black",
            borderRadius: "24px",
            padding: "8px 12px",
            cursor: "pointer"
          },
          onClick: handlePrevPovChange,
          children: "\u21E6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: pov === "FRONT" ? 'flex' : 'none',
          width: "100%",
          position: "relative",
          justifyContent: "center"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            zIndex: 2,
            position: 'absolute'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
            width: 350,
            height: 953,
            src: "/img/custom/model_".concat(pov, ".svg"),
            alt: "laxmi"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            zIndex: 3,
            position: 'absolute'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
            width: 350,
            height: 953,
            src: "/img/custom/model_".concat(pov, "_pant.svg"),
            alt: "laxmi"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, _this), dataStyle.bottom && dataStyle.bottom.image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            zIndex: 4,
            position: 'absolute'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            width: 350,
            height: 953,
            src: dataStyle.bottom.image,
            alt: "bottom"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 25
        }, _this), dataStyle.collar && dataStyle.collar.image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            zIndex: 5,
            position: 'absolute'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            width: 350,
            height: 953,
            src: dataStyle.collar.image,
            alt: "collar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 25
        }, _this), dataStyle.sleeve && dataStyle.sleeve.image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            zIndex: 6,
            position: 'absolute'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            width: 350,
            height: 953,
            src: dataStyle.sleeve.image,
            style: {
              opacity: sleeveFlicker ? 1 : 0.8
            },
            alt: "sleeve"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 25
        }, _this), dataStyle.pocket && dataStyle.pocket.image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            zIndex: 20,
            position: 'absolute'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            width: 350,
            height: 953,
            src: dataStyle.pocket.image,
            alt: "pocket"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 25
        }, _this), dataStyle.placket && dataStyle.placket.image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            zIndex: 8,
            position: 'absolute'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            width: 350,
            height: 953,
            src: dataStyle.placket.image,
            alt: "placket"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 25
        }, _this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            width: "350px",
            height: "953px",
            paddingTop: "30vh",
            zIndex: 100,
            position: "absolute"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "loader"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 28
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 25
        }, _this), isLoadingFabric && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            width: "350px",
            height: "953px",
            backgroundColor: "white",
            paddingTop: "30vh",
            zIndex: 200,
            position: "absolute"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "loader"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 28
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "slide",
        style: {
          display: pov === "BACK" ? 'block' : 'none',
          justifyContent: "center",
          width: '100%'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: pov === "FOLDED" ? 'flex' : 'none',
          width: "100%",
          position: "relative",
          justifyContent: "center"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          height: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            border: "2px solid black",
            borderRadius: "24px",
            padding: "8px 12px",
            cursor: "pointer"
          },
          onClick: handleNextPovChange,
          children: "\u21E8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(ModelContainer, "uI2b2+jqM6yNJ6ko9o3L/RpgcO0=", false, function () {
  return [_hookCustom__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = ModelContainer;
/* harmony default export */ __webpack_exports__["default"] = (ModelContainer);

var _c;

$RefreshReg$(_c, "ModelContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9jdXN0b20vbW9kZWxDb250YWluZXIuanN4Il0sIm5hbWVzIjpbIk1vZGVsQ29udGFpbmVyIiwiZmFicmljU2VsZWN0IiwiaXNMb2FkaW5nIiwiaXNMb2FkaW5nRmFicmljIiwiZGF0YVN0eWxlIiwidXNlSG9va0N1c3RvbSIsInBvdiIsInVwZGF0ZVBvdiIsInBvdk9wdGlvbnMiLCJkdXJhdGlvbiIsImludGVydmFsIiwidXNlU3RhdGUiLCJzbGVldmVGbGlja2VyIiwic2V0U2xlZXZlRmxpY2tlciIsImNvbGxhckZsaWNrZXIiLCJzZXRDb2xsYXJGbGlja2VyIiwiY3VmZnNGbGlja2VyIiwic2V0Q3VmZnNGbGlja2VyIiwicGxhY2tldEZsaWNrZXIiLCJzZXRQbGFja2V0RmxpY2tlciIsInBvY2tldEZsaWNrZXIiLCJzZXRQb2NrZXRGbGlja2VyIiwicGxlYXRzRmxpY2tlciIsInNldFBsZWF0c0ZsaWNrZXIiLCJ1c2VFZmZlY3QiLCJoYW5kbGVQcmV2UG92Q2hhbmdlIiwiY3VycmVudEluZGV4IiwiaW5kZXhPZiIsInByZXZJbmRleCIsImxlbmd0aCIsImhhbmRsZU5leHRQb3ZDaGFuZ2UiLCJuZXh0SW5kZXgiLCJjb25zb2xlIiwibG9nIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImN1cnNvciIsInBvc2l0aW9uIiwiekluZGV4IiwiYm90dG9tIiwiaW1hZ2UiLCJjb2xsYXIiLCJzbGVldmUiLCJvcGFjaXR5IiwicG9ja2V0IiwicGxhY2tldCIsInBhZGRpbmdUb3AiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxT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QUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQWdISCxDQTlJRDs7R0FBTTlCLGM7VUFDeUJLLG1EOzs7S0FEekJMLGM7QUFnSlNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2N1c3RvbS9bY2F0ZWdvcnldLmYxZGNiN2FhMTI2ZTYzMGM4MTQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgQ2hldnJvbkxlZnQsIENoZXZyb25SaWdodCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2ljb24nXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB1c2VIb29rQ3VzdG9tIGZyb20gJy4vaG9va0N1c3RvbSc7XHJcblxyXG5jb25zdCBNb2RlbENvbnRhaW5lciA9ICh7IGZhYnJpY1NlbGVjdCwgaXNMb2FkaW5nLCBpc0xvYWRpbmdGYWJyaWMsIGRhdGFTdHlsZSB9KSA9PiB7XHJcbiAgICBjb25zdCB7IHBvdiwgdXBkYXRlUG92IH0gPSB1c2VIb29rQ3VzdG9tKCk7XHJcblxyXG4gICAgY29uc3QgcG92T3B0aW9ucyA9IFsnRlJPTlQnLCAnQkFDSycsICdGT0xERUQnXTtcclxuICAgIGNvbnN0IGR1cmF0aW9uID0gMTAwMDtcclxuICAgIGNvbnN0IGludGVydmFsID0gMzAwXHJcbiAgICBjb25zdCBbc2xlZXZlRmxpY2tlciwgc2V0U2xlZXZlRmxpY2tlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY29sbGFyRmxpY2tlciwgc2V0Q29sbGFyRmxpY2tlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY3VmZnNGbGlja2VyLCBzZXRDdWZmc0ZsaWNrZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3BsYWNrZXRGbGlja2VyLCBzZXRQbGFja2V0RmxpY2tlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcG9ja2V0RmxpY2tlciwgc2V0UG9ja2V0RmxpY2tlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcGxlYXRzRmxpY2tlciwgc2V0UGxlYXRzRmxpY2tlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB1cGRhdGVQb3YocG92T3B0aW9uc1swXSwgZmFicmljU2VsZWN0KTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVByZXZQb3ZDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gcG92T3B0aW9ucy5pbmRleE9mKHBvdik7XHJcbiAgICAgICAgY29uc3QgcHJldkluZGV4ID0gKGN1cnJlbnRJbmRleCAtIDEgKyBwb3ZPcHRpb25zLmxlbmd0aCkgJSBwb3ZPcHRpb25zLmxlbmd0aDtcclxuICAgICAgICB1cGRhdGVQb3YocG92T3B0aW9uc1twcmV2SW5kZXhdLCBmYWJyaWNTZWxlY3QpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU5leHRQb3ZDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gcG92T3B0aW9ucy5pbmRleE9mKHBvdik7XHJcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gKGN1cnJlbnRJbmRleCArIDEpICUgcG92T3B0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgdXBkYXRlUG92KHBvdk9wdGlvbnNbbmV4dEluZGV4XSwgZmFicmljU2VsZWN0KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHBvdk9wdGlvbnNbbmV4dEluZGV4XSlcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjgwJVwiLCBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6IFwiMnB4IHNvbGlkIGJsYWNrXCIsIGJvcmRlclJhZGl1czogXCIyNHB4XCIsIHBhZGRpbmc6IFwiOHB4IDEycHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fSBvbkNsaWNrPXtoYW5kbGVQcmV2UG92Q2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJiM4Njc4O1xyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogZnJvbnQgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IHBvdiA9PT0gXCJGUk9OVFwiID8gJ2ZsZXgnIDogJ25vbmUnLCB3aWR0aDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiAyLCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL2N1c3RvbS9tb2RlbF8ke3Bvdn0uc3ZnYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogMywgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vbW9kZWxfJHtwb3Z9X3BhbnQuc3ZnYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YVN0eWxlLmJvdHRvbSAmJiBkYXRhU3R5bGUuYm90dG9tLmltYWdlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDQsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhU3R5bGUuYm90dG9tLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImJvdHRvbVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGFTdHlsZS5jb2xsYXIgJiYgZGF0YVN0eWxlLmNvbGxhci5pbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiA1LCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YVN0eWxlLmNvbGxhci5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJjb2xsYXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhU3R5bGUuc2xlZXZlICYmIGRhdGFTdHlsZS5zbGVldmUuaW1hZ2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogNiwgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGFTdHlsZS5zbGVldmUuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tvcGFjaXR5OiBzbGVldmVGbGlja2VyID8gMSA6IDAuOH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwic2xlZXZlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YVN0eWxlLnBvY2tldCAmJiBkYXRhU3R5bGUucG9ja2V0LmltYWdlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDIwLCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YVN0eWxlLnBvY2tldC5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwb2NrZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhU3R5bGUucGxhY2tldCAmJiBkYXRhU3R5bGUucGxhY2tldC5pbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiA4LCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YVN0eWxlLnBsYWNrZXQuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicGxhY2tldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAge2lzTG9hZGluZyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjM1MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiOTUzcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMzB2aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT48ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAge2lzTG9hZGluZ0ZhYnJpYyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjM1MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiOTUzcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIzMHZoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PjxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIGJhY2sgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGUnIHN0eWxlPXt7IGRpc3BsYXk6IHBvdiA9PT0gXCJCQUNLXCIgPyAnYmxvY2snIDogJ25vbmUnLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgd2lkdGg6JzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiAuLi4gKHNpbWlsYXIgc3RydWN0dXJlIGFzIGZyb250LCB3aXRoIGNvbmRpdGlvbmFsIHJlbmRlcmluZyBmb3IgZWFjaCBwYXJ0KSAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIGZvbGRlZCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogcG92ID09PSBcIkZPTERFRFwiID8gJ2ZsZXgnIDogJ25vbmUnLCB3aWR0aDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiAuLi4gKHNpbWlsYXIgc3RydWN0dXJlIGFzIGZyb250LCB3aXRoIGNvbmRpdGlvbmFsIHJlbmRlcmluZyBmb3IgZWFjaCBwYXJ0KSAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiODAlXCIsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogXCIycHggc29saWQgYmxhY2tcIiwgYm9yZGVyUmFkaXVzOiBcIjI0cHhcIiwgcGFkZGluZzogXCI4cHggMTJweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19IG9uQ2xpY2s9e2hhbmRsZU5leHRQb3ZDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmIzg2ODA7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGVsQ29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==