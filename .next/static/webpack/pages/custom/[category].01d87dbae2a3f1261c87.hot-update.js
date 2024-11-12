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

  var isLoading = _ref.isLoading,
      isLoadingFabric = _ref.isLoadingFabric,
      dataStyle = _ref.dataStyle;

  var _useHookCustom = Object(_hookCustom__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      fabricSelect = _useHookCustom.fabricSelect,
      setFabricSelect = _useHookCustom.setFabricSelect,
      pov = _useHookCustom.pov,
      updatePov = _useHookCustom.updatePov; // Array containing the possible values


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
    console.log('Current POV:', pov);
  }, [pov]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    updatePov(povOptions[0]);
  }, []);
  /*************  ✨ Codeium Command ⭐  *************/

  /**
   * Handles previous POV change. Cycles through the povOptions array
   * and applies the previous POV to the model.
   * @function
   */

  /******  c1cb9113-a8e3-449b-ad74-1e95fd418dd4  *******/

  var handlePrevPovChange = function handlePrevPovChange() {
    var currentIndex = povOptions.indexOf(pov);
    var prevIndex = (currentIndex - 1 + povOptions.length) % povOptions.length; // Fix for negative index

    updatePov(povOptions[prevIndex]);
  }; // Function to handle next POV change (cyclic forward)


  var handleNextPovChange = function handleNextPovChange() {
    var currentIndex = povOptions.indexOf(pov);
    var nextIndex = (currentIndex + 1) % povOptions.length;
    updatePov(povOptions[nextIndex]);
    console.log(povOptions[nextIndex]);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center" // backgroundColor: "red"

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
          lineNumber: 63,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
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
            width: 350 // 200 | 350 | 400 | 500 | 1080
            ,
            height: 953 // 544 | 953 | 1089 | 1361 | 2940
            ,
            src: "/img/custom/model_".concat(pov, ".svg"),
            alt: "laxmi"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            zIndex: 3,
            position: 'absolute'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
            width: 350 // 200 | 350 | 400 | 500 | 1080
            ,
            height: 953 // 544 | 953 | 1089 | 1361 | 2940
            ,
            src: "/img/custom/model_".concat(pov, "_pant.svg"),
            alt: "laxmi"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            zIndex: 4,
            position: 'absolute'
          },
          children: dataStyle.bottom.image !== "" && dataStyle.bottom.image !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            width: 350 // 200 | 350 | 400 | 500 | 1080
            ,
            height: 953 // 544 | 953 | 1089 | 1361 | 2940
            ,
            src: dataStyle.bottom.image,
            alt: "laxmi"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 33
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            zIndex: 5,
            position: 'absolute'
          },
          children: dataStyle.collar.image !== "" && dataStyle.collar.image !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            width: 350 // 200 | 350 | 400 | 500 | 1080
            ,
            height: 953 // 544 | 953 | 1089 | 1361 | 2940
            ,
            src: dataStyle.collar.image,
            alt: "laxmi"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 33
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            zIndex: 6,
            position: 'absolute'
          },
          children: dataStyle.sleeve.image !== "" && dataStyle.sleeve.image !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            width: 350 // 200 | 350 | 400 | 500 | 1080
            ,
            height: 953 // 544 | 953 | 1089 | 1361 | 2940
            ,
            src: dataStyle.sleeve.image,
            style: {
              opacity: sleeveFlicker ? 1 : 0.8
            },
            alt: "laxmi"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 33
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            zIndex: 20,
            position: 'absolute'
          },
          children: dataStyle.pocket.image !== "" && dataStyle.pocket.image !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            width: 350 // 200 | 350 | 400 | 500 | 1080
            ,
            height: 953 // 544 | 953 | 1089 | 1361 | 2940
            ,
            src: dataStyle.pocket.image,
            alt: "laxmi"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 33
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            zIndex: 8,
            position: 'absolute'
          },
          children: dataStyle.placket.image !== "" && dataStyle.placket.image !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            width: 350 // 200 | 350 | 400 | 500 | 1080
            ,
            height: 953 // 544 | 953 | 1089 | 1361 | 2940
            ,
            src: dataStyle.placket.image,
            alt: "laxmi"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 33
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }, _this), isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            width: "350px",
            height: "953px",
            // backgroundColor: "white",
            // backgroundColor: "rgba(0,0,0,.3)",
            paddingTop: "30vh",
            zIndex: 100,
            position: "absolute"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "loader"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 28
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 37
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), isLoadingFabric ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            width: "350px",
            height: "953px",
            backgroundColor: "white",
            // backgroundColor: "rgba(0,0,0,.3)",
            paddingTop: "30vh",
            zIndex: 200,
            position: "absolute"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "loader"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 28
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 43
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "slide",
        style: {
          display: pov === "BACK" ? 'block' : 'none',
          justifyContent: "center",
          width: '100%'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "img-container",
          style: {
            position: 'relative',
            zIndex: 1,
            display: "flex",
            justifyContent: "center"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              zIndex: 2,
              position: 'absolute'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
              width: 350 // 200 | 350 | 400 | 500 | 1080
              ,
              height: 953 // 544 | 953 | 1089 | 1361 | 2940
              ,
              src: "/img/custom/model_".concat(pov, ".png"),
              alt: "laxmi"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              zIndex: 3,
              position: 'absolute'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
              width: 350 // 200 | 350 | 400 | 500 | 1080
              ,
              height: 953 // 544 | 953 | 1089 | 1361 | 2940
              ,
              src: "/img/custom/model_".concat(pov, "_pant.png"),
              alt: "laxmi"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              zIndex: 4,
              position: 'absolute'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
              width: 350 // 200 | 350 | 400 | 500 | 1080
              ,
              height: 953 // 544 | 953 | 1089 | 1361 | 2940
              ,
              src: "/img/custom/model_".concat(pov, "_pant.png") // src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/body/${bottomSecondary === "Untucked" ? bottom : bottomSecondary}.png`}
              ,
              alt: "laxmi"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              zIndex: 5,
              position: 'absolute'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
              width: 350 // 200 | 350 | 400 | 500 | 1080
              ,
              height: 953 // 544 | 953 | 1089 | 1361 | 2940
              ,
              src: dataStyle.collarBack.image // src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/collar/collar.png`}
              ,
              alt: "laxmi"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 30
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              zIndex: 6,
              position: 'absolute'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
              width: 350 // 200 | 350 | 400 | 500 | 1080
              ,
              height: 953 // 544 | 953 | 1089 | 1361 | 2940
              ,
              src: "/img/custom/model_".concat(pov, "_pant.png") // src={`/img/custom/${category}/accent/${pov}/collar/${collarColor}.png`}
              ,
              alt: "laxmi"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 37
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 33
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              zIndex: 7,
              position: 'absolute'
            },
            children: [console.log(dataStyle), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
              width: 350 // 200 | 350 | 400 | 500 | 1080
              ,
              height: 953 // 544 | 953 | 1089 | 1361 | 2940
              ,
              src: dataStyle.cuffsBack.image,
              alt: "laxmi"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 37
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 33
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              zIndex: 8,
              position: 'absolute'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
              width: 350 // 200 | 350 | 400 | 500 | 1080
              ,
              height: 953 // 544 | 953 | 1089 | 1361 | 2940
              ,
              src: "/img/custom/model_".concat(pov, "_pant.png") // src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/cuffs/${cuffs}.png`}
              ,
              alt: "laxmi"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 37
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 33
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              zIndex: 9,
              position: 'absolute'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
              width: 350 // 200 | 350 | 400 | 500 | 1080
              ,
              height: 953 // 544 | 953 | 1089 | 1361 | 2940
              ,
              src: dataStyle.pleats.image,
              alt: "laxmi"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 37
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 33
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              zIndex: 9,
              position: 'absolute'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
              width: 350 // 200 | 350 | 400 | 500 | 1080
              ,
              height: 953 // 544 | 953 | 1089 | 1361 | 2940
              ,
              src: dataStyle.cuffsBack.image,
              alt: "laxmi"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 37
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 33
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              zIndex: 10,
              position: 'relative'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
              width: 350 // 200 | 350 | 400 | 500 | 1080
              ,
              height: 953 // 544 | 953 | 1089 | 1361 | 2940
              ,
              src: "/img/custom/back_no_model.png",
              alt: "laxmi"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 22
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: pov === "FOLDED" ? 'flex' : 'none',
          width: "100%",
          position: "relative",
          justifyContent: "center"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            zIndex: 2,
            position: 'absolute'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            zIndex: 3,
            position: 'absolute'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            zIndex: 4,
            position: 'absolute'
          },
          children: dataStyle.bottom.image !== "" && dataStyle.bottom.image !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            width: 350 // 200 | 350 | 400 | 500 | 1080
            ,
            height: 953 // 544 | 953 | 1089 | 1361 | 2940
            ,
            src: dataStyle.bottom.image,
            alt: "laxmi"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 33
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            zIndex: 5,
            position: 'absolute'
          },
          children: dataStyle.collarFold.image !== "" && dataStyle.collarFold.image !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            width: 350 // 200 | 350 | 400 | 500 | 1080
            ,
            height: 953 // 544 | 953 | 1089 | 1361 | 2940
            ,
            src: dataStyle.collar.image,
            alt: "laxmi"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 33
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            zIndex: 99,
            position: 'absolute'
          },
          children: dataStyle.cuffsFold.image !== "" && dataStyle.cuffsFold.image !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            width: 350 // 200 | 350 | 400 | 500 | 1080
            ,
            height: 953 // 544 | 953 | 1089 | 1361 | 2940
            ,
            src: dataStyle.cuffs.image,
            alt: "laxmi"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 296,
            columnNumber: 33
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            zIndex: 13,
            position: 'absolute'
          },
          children: dataStyle.pocketFold.image !== "" && dataStyle.pocketFold.image !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            width: 350 // 200 | 350 | 400 | 500 | 1080
            ,
            height: 953 // 544 | 953 | 1089 | 1361 | 2940
            ,
            src: dataStyle.pocket.image,
            alt: "laxmi",
            style: {
              marginTop: '-120px'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 306,
            columnNumber: 33
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            zIndex: 8,
            position: 'absolute'
          },
          children: dataStyle.placketFold.image !== "" && dataStyle.placketFold.image !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            width: 350 // 200 | 350 | 400 | 500 | 1080
            ,
            height: 953 // 544 | 953 | 1089 | 1361 | 2940
            ,
            src: dataStyle.placket.image,
            alt: "laxmi"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 33
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 21
        }, _this), isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            width: "350px",
            height: "953px",
            // backgroundColor: "white",
            // backgroundColor: "rgba(0,0,0,.3)",
            paddingTop: "30vh",
            zIndex: 100,
            position: "absolute"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "loader"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 28
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 37
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), isLoadingFabric ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            width: "350px",
            height: "953px",
            backgroundColor: "white",
            // backgroundColor: "rgba(0,0,0,.3)",
            paddingTop: "30vh",
            zIndex: 200,
            position: "absolute"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "loader"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 342,
            columnNumber: 28
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 43
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 258,
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
          lineNumber: 348,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, _this)
  }, void 0, false); // return (
  //     <div className="model-container row">
  //         {/* front */}
  //         <div className='col-2 d-flex align-items-center' style={{ height: "80%" }}>
  //             <div onClick={() => {
  //                 console.log(pov);
  //                 switch (pov) {
  //                     case "front":
  //                         setPov("folded")
  //                         break;
  //                     case "folded":
  //                         setPov("back")
  //                         break;
  //                     case "back":
  //                         setPov("front")
  //                         break;
  //                     default:
  //                         break;
  //                 }
  //             }}>
  //                 <ChevronLeft width={20} height={20} />
  //             </div>
  //         </div>
  //         <div className="col-8">
  //             {/* front */}
  //             <div className='slide' style={{ display: pov === "front" ? 'block' : 'none' }}>
  //                 <div className="img-container" style={{
  //                     position: 'relative',
  //                     zIndex: 1,
  //                 }}>
  //                     {/* model */}
  //                     <div style={{ zIndex: 2, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                             src={`/img/custom/model_${pov}.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     {/* pant */}
  //                     <div style={{ zIndex: 3, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                             src={`/img/custom/model_${pov}_pant.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     {/* body */}
  //                     <div style={{ zIndex: 4, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                             src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/${placket}/body/${bottomSecondary === "Untucked" ? bottom : bottomSecondary}.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     {/* collar */}
  //                     <div style={{ zIndex: 5, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                             src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/${placket}/collar/${collar}.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     {/* accent collar */}
  //                     {
  //                         collarAccent !== "Default" && collarAccent !== "Inner" && collarColor && (
  //                             <div style={{ zIndex: 6, position: 'absolute' }}>
  //                                 <Image
  //                                     width={350} // 200 | 350 | 400 | 500 | 1080
  //                                     height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                                     src={`/img/custom/${category}/accent/${pov}/collar/${collarAccent.replace("All", "Outer")} ${collar} ${collarColor}.png`}
  //                                     alt="laxmi" />
  //                             </div>
  //                         )
  //                     }
  //                     {/* sleeve */}
  //                     <div style={{ zIndex: 7, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                             src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/${placket}/sleeve/${sleeve}.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     {/* accent cuffs */}
  //                     {
  //                         sleeve === "long" && cuffsAccent !== "Default" && cuffsAccent !== "Inner" && cuffsColor && (
  //                             <div style={{ zIndex: 8, position: 'absolute' }}>
  //                                 <Image
  //                                     width={350} // 200 | 350 | 400 | 500 | 1080
  //                                     height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                                     src={`/img/custom/${category}/accent/${pov}/cuffs/${cuffsColor}.png`}
  //                                     alt="laxmi" />
  //                             </div>
  //                         )
  //                     }
  //                     {/* pocket */}
  //                     <div style={{ zIndex: 9, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                             src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/${placket}/pocket/${pocket}.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     <div style={{
  //                         width: 350, // 200 | 350 | 400 | 500 | 1080
  //                         height: 953, // 544 | 953 | 1089 | 1361 | 2940
  //                         zIndex: 10, position: 'absolute',
  //                         // backgroundColor: 'red',
  //                     }}>
  //                         <label style={{
  //                             position: 'absolute',
  //                             fontFamily: bordirs?.font ?? "Arial",
  //                             fontSize: 6,
  //                             top: getBordirPosition('top', bordirs?.position),
  //                             right: getBordirPosition('right', bordirs?.position),
  //                             color: bordirs?.color,
  //                         }}>{bordirs?.name}</label>
  //                     </div>
  //                     {/* no model */}
  //                     <div style={{ zIndex: 11, position: 'relative' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                             src={`/img/custom/front_no_model.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                 </div>
  //             </div>
  //             {/* back */}
  //             <div className='slide' style={{ display: pov === "back" ? 'block' : 'none' }}>
  //                 <div className="img-container" style={{
  //                     position: 'relative',
  //                     zIndex: 1,
  //                 }}>
  //                     {/* model */}
  //                     <div style={{ zIndex: 2, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                             src={`/img/custom/model_${pov}.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     {/* pant */}
  //                     <div style={{ zIndex: 3, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                             src={`/img/custom/model_${pov}_pant.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     {/* body */}
  //                     <div style={{ zIndex: 4, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                             src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/body/${bottomSecondary === "Untucked" ? bottom : bottomSecondary}.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     {/* collar */}
  //                     <div style={{ zIndex: 5, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                             src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/collar/collar.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     {/* accent collar */}
  //                     {
  //                         (collarAccent === "Outer" || collarAccent === "All") && collarAccent !== "Default" && collarColor && (
  //                             <div style={{ zIndex: 6, position: 'absolute' }}>
  //                                 <Image
  //                                     width={350} // 200 | 350 | 400 | 500 | 1080
  //                                     height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                                     src={`/img/custom/${category}/accent/${pov}/collar/${collarColor}.png`}
  //                                     alt="laxmi" />
  //                             </div>
  //                         )
  //                     }
  //                     {/* sleeve */}
  //                     {
  //                         sleeve !== "long" && (
  //                             <div style={{ zIndex: 7, position: 'absolute' }}>
  //                                 <Image
  //                                     width={350} // 200 | 350 | 400 | 500 | 1080
  //                                     height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                                     src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/sleeve/${sleeve}.png`}
  //                                     alt="laxmi" />
  //                             </div>
  //                         )
  //                     }
  //                     {/* cuffs */}
  //                     {
  //                         sleeve === "long" && (
  //                             <div style={{ zIndex: 8, position: 'absolute' }}>
  //                                 <Image
  //                                     width={350} // 200 | 350 | 400 | 500 | 1080
  //                                     height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                                     src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/cuffs/${cuffs}.png`}
  //                                     alt="laxmi" />
  //                             </div>
  //                         )
  //                     }
  //                     {/* accent cuffs */}
  //                     {
  //                         sleeve === "long" && cuffsAccent !== "Default" && cuffsColor && cuffsAccent !== "Inner" && (
  //                             <div style={{ zIndex: 9, position: 'absolute' }}>
  //                                 <Image
  //                                     width={350} // 200 | 350 | 400 | 500 | 1080
  //                                     height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                                     src={`/img/custom/${category}/accent/${pov}/cuffs/${cuffs} ${cuffsColor}.png`}
  //                                     alt="laxmi" />
  //                             </div>
  //                         )
  //                     }
  //                     {/* no model */}
  //                     <div style={{ zIndex: 10, position: 'relative' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
  //                             src={`/img/custom/back_no_model.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                 </div>
  //             </div>
  //             {/* folded */}
  //             <div className='slide' style={{ display: pov === "folded" ? 'block' : 'none' }}>
  //                 <div className="img-container" style={{
  //                     position: 'relative',
  //                     zIndex: 1,
  //                 }}>
  //                     {/* model */}
  //                     <div style={{ zIndex: 2, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={512} // 292 | 512 | 585 | 731 | 1579
  //                             src={`/img/custom/model_${pov}.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     {/* body */}
  //                     <div style={{ zIndex: 3, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={512} // 292 | 512 | 585 | 731 | 1579
  //                             src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/${placket}/body/Regular.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     {/* collar */}
  //                     <div style={{ zIndex: 4, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={512} // 292 | 512 | 585 | 731 | 1579
  //                             src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/${placket}/collar/${collar}.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     {/* accent collar */}
  //                     {
  //                         collarAccent !== "Default" && collarColor && (
  //                             <div style={{ zIndex: 5, position: 'absolute' }}>
  //                                 <Image
  //                                     width={350} // 200 | 350 | 400 | 500 | 1080
  //                                     height={512} // 544 | 953 | 1089 | 1361 | 2940
  //                                     src={`/img/custom/${category}/accent/${pov}/collar/${collarAccent} ${collar} ${collarColor}.png`}
  //                                     alt="laxmi" />
  //                             </div>
  //                         )
  //                     }
  //                     {/* sleeve */}
  //                     {
  //                         sleeve !== "long" && (
  //                             <div style={{ zIndex: 6, position: 'absolute' }}>
  //                                 <Image
  //                                     width={350} // 200 | 350 | 400 | 500 | 1080
  //                                     height={512} // 292 | 512 | 585 | 731 | 1579
  //                                     src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/${placket}/sleeve/${sleeve}.png`}
  //                                     alt="laxmi" />
  //                             </div>
  //                         )
  //                     }
  //                     {/* cuffs */}
  //                     {
  //                         sleeve === "long" && (
  //                             <div style={{ zIndex: 7, position: 'absolute' }}>
  //                                 <Image
  //                                     width={350} // 200 | 350 | 400 | 500 | 1080
  //                                     height={512} // 292 | 512 | 585 | 731 | 1579
  //                                     src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/cuffs/${cuffs}.png`}
  //                                     alt="laxmi" />
  //                             </div>
  //                         )
  //                     }
  //                     {/* accent cuffs */}
  //                     {
  //                         sleeve === "long" && cuffsAccent !== "Default" && cuffsColor && cuffsAccent !== "Inner" && (
  //                             <div style={{ zIndex: 8, position: 'absolute' }}>
  //                                 <Image
  //                                     width={350} // 200 | 350 | 400 | 500 | 1080
  //                                     height={512} // 292 | 512 | 585 | 731 | 1579
  //                                     src={`/img/custom/${category}/accent/${pov}/cuffs/${cuffs} ${cuffsColor}.png`}
  //                                     alt="laxmi" />
  //                             </div>
  //                         )
  //                     }
  //                     {/* pocket */}
  //                     <div style={{ zIndex: 9, position: 'absolute' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={512} // 292 | 512 | 585 | 731 | 1579
  //                             src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/${placket}/pocket/${pocket}.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                     {
  //                         bordirs && bordirs.position && bordirs.position === "Chest" && (
  //                             <div style={{
  //                                 width: 350, // 200 | 350 | 400 | 500 | 1080
  //                                 height: 512, // 544 | 953 | 1089 | 1361 | 2940
  //                                 zIndex: 10, position: 'absolute',
  //                                 // backgroundColor: 'red',
  //                             }}>
  //                                 <label style={{
  //                                     position: 'absolute',
  //                                     fontFamily: bordirs?.font ?? "Arial",
  //                                     fontSize: 12,
  //                                     top: 340,
  //                                     right: 122,
  //                                     color: bordirs.color,
  //                                 }}>{bordirs.name}</label>
  //                             </div>
  //                         )
  //                     }
  //                     {/* no model */}
  //                     <div style={{ zIndex: 11, position: 'relative' }}>
  //                         <Image
  //                             width={350} // 200 | 350 | 400 | 500 | 1080
  //                             height={512} // 292 | 512 | 585 | 731 | 1579
  //                             src={`/img/custom/folded_no_model.png`}
  //                             alt="laxmi" />
  //                     </div>
  //                 </div>
  //             </div>
  //         </div>
  //         <div className='col-2 d-flex align-items-center' style={{ height: "80%", zIndex: 12 }}>
  //             <div onClick={() => {
  //                 switch (pov) {
  //                     case "front":
  //                         setPov("back")
  //                         break;
  //                     case "back":
  //                         setPov("folded")
  //                         break;
  //                     case "folded":
  //                         setPov("front")
  //                         break;
  //                     default:
  //                         break;
  //                 }
  //             }}>
  //                 <ChevronRight width={20} height={20} />
  //             </div>
  //         </div>
  //     </div >
  // )
};

_s(ModelContainer, "Cz31JgJh08LgrP4AUCnhQqOCFGA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9jdXN0b20vbW9kZWxDb250YWluZXIuanN4Il0sIm5hbWVzIjpbIk1vZGVsQ29udGFpbmVyIiwiaXNMb2FkaW5nIiwiaXNMb2FkaW5nRmFicmljIiwiZGF0YVN0eWxlIiwidXNlSG9va0N1c3RvbSIsImZhYnJpY1NlbGVjdCIsInNldEZhYnJpY1NlbGVjdCIsInBvdiIsInVwZGF0ZVBvdiIsInBvdk9wdGlvbnMiLCJkdXJhdGlvbiIsImludGVydmFsIiwidXNlU3RhdGUiLCJzbGVldmVGbGlja2VyIiwic2V0U2xlZXZlRmxpY2tlciIsImNvbGxhckZsaWNrZXIiLCJzZXRDb2xsYXJGbGlja2VyIiwiY3VmZnNGbGlja2VyIiwic2V0Q3VmZnNGbGlja2VyIiwicGxhY2tldEZsaWNrZXIiLCJzZXRQbGFja2V0RmxpY2tlciIsInBvY2tldEZsaWNrZXIiLCJzZXRQb2NrZXRGbGlja2VyIiwicGxlYXRzRmxpY2tlciIsInNldFBsZWF0c0ZsaWNrZXIiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlUHJldlBvdkNoYW5nZSIsImN1cnJlbnRJbmRleCIsImluZGV4T2YiLCJwcmV2SW5kZXgiLCJsZW5ndGgiLCJoYW5kbGVOZXh0UG92Q2hhbmdlIiwibmV4dEluZGV4Iiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImN1cnNvciIsInBvc2l0aW9uIiwiekluZGV4IiwiYm90dG9tIiwiaW1hZ2UiLCJjb2xsYXIiLCJzbGVldmUiLCJvcGFjaXR5IiwicG9ja2V0IiwicGxhY2tldCIsInBhZGRpbmdUb3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xsYXJCYWNrIiwiY3VmZnNCYWNrIiwicGxlYXRzIiwiY29sbGFyRm9sZCIsImN1ZmZzRm9sZCIsImN1ZmZzIiwicG9j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QztBQUFtREMsbUJBQU8sRUFBRSxVQUE1RDtBQUF3RUMsa0JBQU0sRUFBRTtBQUFoRixXQUFaO0FBQXlHLGlCQUFPLEVBQUVWLG1CQUFsSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyU0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREosQ0E3Q2tFLENBOFZsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDSCxDQTNzQkQ7O0dBQU1qQyxjO1VBRXdESSxtRDs7O0tBRnhESixjO0FBNnNCU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3VzdG9tL1tjYXRlZ29yeV0uMDFkODdkYmFlMmEzZjEyNjFjODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyBDaGV2cm9uTGVmdCwgQ2hldnJvblJpZ2h0IH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvaWNvbidcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHVzZUhvb2tDdXN0b20gZnJvbSAnLi9ob29rQ3VzdG9tJztcclxuXHJcbmNvbnN0IE1vZGVsQ29udGFpbmVyID0gKHsgaXNMb2FkaW5nLCBpc0xvYWRpbmdGYWJyaWMsIGRhdGFTdHlsZSB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBmYWJyaWNTZWxlY3QsIHNldEZhYnJpY1NlbGVjdCwgcG92LCB1cGRhdGVQb3YgfSA9IHVzZUhvb2tDdXN0b20oKTtcclxuXHJcbiAgICAgLy8gQXJyYXkgY29udGFpbmluZyB0aGUgcG9zc2libGUgdmFsdWVzXHJcbiAgICBjb25zdCBwb3ZPcHRpb25zID0gWydGUk9OVCcsICdCQUNLJywgJ0ZPTERFRCddO1xyXG4gICAgY29uc3QgZHVyYXRpb249IDEwMDA7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IDMwMFxyXG4gICAgY29uc3QgW3NsZWV2ZUZsaWNrZXIsIHNldFNsZWV2ZUZsaWNrZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NvbGxhckZsaWNrZXIsIHNldENvbGxhckZsaWNrZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2N1ZmZzRmxpY2tlciwgc2V0Q3VmZnNGbGlja2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwbGFja2V0RmxpY2tlciwgc2V0UGxhY2tldEZsaWNrZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3BvY2tldEZsaWNrZXIsIHNldFBvY2tldEZsaWNrZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3BsZWF0c0ZsaWNrZXIsIHNldFBsZWF0c0ZsaWNrZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0N1cnJlbnQgUE9WOicsIHBvdik7XHJcbiAgICAgIH0sIFtwb3ZdKTtcclxuICAgIFxyXG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZVBvdihwb3ZPcHRpb25zWzBdKTtcclxuICAgICAgfSxbXSlcclxuICAgIFxyXG5cclxuLyoqKioqKioqKioqKiogIOKcqCBDb2RlaXVtIENvbW1hbmQg4q2QICAqKioqKioqKioqKioqL1xyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIHByZXZpb3VzIFBPViBjaGFuZ2UuIEN5Y2xlcyB0aHJvdWdoIHRoZSBwb3ZPcHRpb25zIGFycmF5XHJcbiAgICAgKiBhbmQgYXBwbGllcyB0aGUgcHJldmlvdXMgUE9WIHRvIHRoZSBtb2RlbC5cclxuICAgICAqIEBmdW5jdGlvblxyXG4gICAgICovXHJcbi8qKioqKiogIGMxY2I5MTEzLWE4ZTMtNDQ5Yi1hZDc0LTFlOTVmZDQxOGRkNCAgKioqKioqKi9cclxuICAgIGNvbnN0IGhhbmRsZVByZXZQb3ZDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gcG92T3B0aW9ucy5pbmRleE9mKHBvdik7XHJcbiAgICAgICAgY29uc3QgcHJldkluZGV4ID0gKGN1cnJlbnRJbmRleCAtIDEgKyBwb3ZPcHRpb25zLmxlbmd0aCkgJSBwb3ZPcHRpb25zLmxlbmd0aDsgLy8gRml4IGZvciBuZWdhdGl2ZSBpbmRleFxyXG4gICAgICAgIHVwZGF0ZVBvdihwb3ZPcHRpb25zW3ByZXZJbmRleF0pXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBuZXh0IFBPViBjaGFuZ2UgKGN5Y2xpYyBmb3J3YXJkKVxyXG4gICAgY29uc3QgaGFuZGxlTmV4dFBvdkNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBwb3ZPcHRpb25zLmluZGV4T2YocG92KTtcclxuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSAoY3VycmVudEluZGV4ICsgMSkgJSBwb3ZPcHRpb25zLmxlbmd0aDtcclxuICAgICAgICB1cGRhdGVQb3YocG92T3B0aW9uc1tuZXh0SW5kZXhdKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHBvdk9wdGlvbnNbbmV4dEluZGV4XSlcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiBcInJlZFwiXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiODAlXCIsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogXCIycHggc29saWQgYmxhY2tcIiwgYm9yZGVyUmFkaXVzOiBcIjI0cHhcIiwgcGFkZGluZzogXCI4cHggMTJweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19IG9uQ2xpY2s9e2hhbmRsZVByZXZQb3ZDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmIzg2Nzg7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBmcm9udCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogcG92ID09PSBcIkZST05UXCIgPyAnZmxleCcgOiAnbm9uZScsIHdpZHRoOiBcIjEwMCVcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDIsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfSAvLyA1NDQgfCA5NTMgfCAxMDg5IHwgMTM2MSB8IDI5NDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWcvY3VzdG9tL21vZGVsXyR7cG92fS5zdmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiAzLCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL2N1c3RvbS9tb2RlbF8ke3Bvdn1fcGFudC5zdmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiA0LCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVN0eWxlLmJvdHRvbS5pbWFnZSAhPT0gXCJcIiAmJiBkYXRhU3R5bGUuYm90dG9tLmltYWdlICE9PSBudWxsID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGFTdHlsZS5ib3R0b20uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz4gOiA8PjwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDUsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU3R5bGUuY29sbGFyLmltYWdlICE9PSBcIlwiICYmIGRhdGFTdHlsZS5jb2xsYXIuaW1hZ2UgIT09IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YVN0eWxlLmNvbGxhci5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPiA6IDw+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogNiwgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTdHlsZS5zbGVldmUuaW1hZ2UgIT09IFwiXCIgJiYgZGF0YVN0eWxlLnNsZWV2ZS5pbWFnZSAhPT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfSAvLyA1NDQgfCA5NTMgfCAxMDg5IHwgMTM2MSB8IDI5NDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhU3R5bGUuc2xlZXZlLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e29wYWNpdHk6IHNsZWV2ZUZsaWNrZXIgPyAxIDogMC44fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPiA6IDw+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogMjAsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU3R5bGUucG9ja2V0LmltYWdlICE9PSBcIlwiICYmIGRhdGFTdHlsZS5wb2NrZXQuaW1hZ2UgIT09IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YVN0eWxlLnBvY2tldC5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPiA6IDw+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogOCwgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTdHlsZS5wbGFja2V0LmltYWdlICE9PSBcIlwiICYmIGRhdGFTdHlsZS5wbGFja2V0LmltYWdlICE9PSBudWxsID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGFTdHlsZS5wbGFja2V0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+IDogPD48Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nID8gPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzUwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI5NTNweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwuMylcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMzB2aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiAxMDAsIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PjxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDw+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nRmFicmljID8gPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzUwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI5NTNweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwuMylcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMzB2aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiAyMDAsIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PjxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDw+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7Lyoge2JhY2t9ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlJyBzdHlsZT17eyBkaXNwbGF5OiBwb3YgPT09IFwiQkFDS1wiID8gJ2Jsb2NrJyA6ICdub25lJywganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgLHdpZHRoOicxMDAlJyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWNvbnRhaW5lclwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogbW9kZWwgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiAyLCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vbW9kZWxfJHtwb3Z9LnBuZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHBhbnQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiAzLCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vbW9kZWxfJHtwb3Z9X3BhbnQucG5nYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogYm9keSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDQsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfSAvLyA1NDQgfCA5NTMgfCAxMDg5IHwgMTM2MSB8IDI5NDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL2N1c3RvbS9tb2RlbF8ke3Bvdn1fcGFudC5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNyYz17YC9pbWcvY3VzdG9tLyR7Y2F0ZWdvcnl9LyR7ZmFicmljU2VsZWN0Py50aXRsZSA/PyBcIkMtQmx1ZVwifS8ke3Bvdn0vYm9keS8ke2JvdHRvbVNlY29uZGFyeSA9PT0gXCJVbnR1Y2tlZFwiID8gYm90dG9tIDogYm90dG9tU2Vjb25kYXJ5fS5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogY29sbGFyICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogNSwgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGFTdHlsZS5jb2xsYXJCYWNrLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNyYz17YC9pbWcvY3VzdG9tLyR7Y2F0ZWdvcnl9LyR7ZmFicmljU2VsZWN0Py50aXRsZSA/PyBcIkMtQmx1ZVwifS8ke3Bvdn0vY29sbGFyL2NvbGxhci5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBhY2NlbnQgY29sbGFyICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiA2LCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL2N1c3RvbS9tb2RlbF8ke3Bvdn1fcGFudC5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3JjPXtgL2ltZy9jdXN0b20vJHtjYXRlZ29yeX0vYWNjZW50LyR7cG92fS9jb2xsYXIvJHtjb2xsYXJDb2xvcn0ucG5nYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHNsZWV2ZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogNywgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhkYXRhU3R5bGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfSAvLyA1NDQgfCA5NTMgfCAxMDg5IHwgMTM2MSB8IDI5NDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YVN0eWxlLmN1ZmZzQmFjay5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBjdWZmcyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogOCwgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vbW9kZWxfJHtwb3Z9X3BhbnQucG5nYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNyYz17YC9pbWcvY3VzdG9tLyR7Y2F0ZWdvcnl9LyR7ZmFicmljU2VsZWN0Py50aXRsZSA/PyBcIkMtQmx1ZVwifS8ke3Bvdn0vY3VmZnMvJHtjdWZmc30ucG5nYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHBsZWF0cyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogOSwgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhU3R5bGUucGxlYXRzLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIGFjY2VudCBjdWZmcyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogOSwgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhU3R5bGUuY3VmZnNCYWNrLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDEwLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vYmFja19ub19tb2RlbC5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIGZvbGRlZCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogcG92ID09PSBcIkZPTERFRFwiID8gJ2ZsZXgnIDogJ25vbmUnLCB3aWR0aDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiAyLCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vbW9kZWxfJHtwb3Z9LnN2Z2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiAzLCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vbW9kZWxfJHtwb3Z9X3BhbnQuc3ZnYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDQsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU3R5bGUuYm90dG9tLmltYWdlICE9PSBcIlwiICYmIGRhdGFTdHlsZS5ib3R0b20uaW1hZ2UgIT09IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YVN0eWxlLmJvdHRvbS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPiA6IDw+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogNSwgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTdHlsZS5jb2xsYXJGb2xkLmltYWdlICE9PSBcIlwiICYmIGRhdGFTdHlsZS5jb2xsYXJGb2xkLmltYWdlICE9PSBudWxsID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGFTdHlsZS5jb2xsYXIuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz4gOiA8PjwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDk5LCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVN0eWxlLmN1ZmZzRm9sZC5pbWFnZSAhPT0gXCJcIiAmJiBkYXRhU3R5bGUuY3VmZnNGb2xkLmltYWdlICE9PSBudWxsID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGFTdHlsZS5jdWZmcy5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPiA6IDw+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogMTMsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU3R5bGUucG9ja2V0Rm9sZC5pbWFnZSAhPT0gXCJcIiAmJiBkYXRhU3R5bGUucG9ja2V0Rm9sZC5pbWFnZSAhPT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfSAvLyA1NDQgfCA5NTMgfCAxMDg5IHwgMTM2MSB8IDI5NDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhU3R5bGUucG9ja2V0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiICBzdHlsZT17e21hcmdpblRvcDonLTEyMHB4J319Lz4gOiA8PjwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiA4LCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVN0eWxlLnBsYWNrZXRGb2xkLmltYWdlICE9PSBcIlwiICYmIGRhdGFTdHlsZS5wbGFja2V0Rm9sZC5pbWFnZSAhPT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfSAvLyA1NDQgfCA5NTMgfCAxMDg5IHwgMTM2MSB8IDI5NDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhU3R5bGUucGxhY2tldC5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPiA6IDw+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZyA/IDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjM1MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiOTUzcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsLjMpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjMwdmhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogMTAwLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT48ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8PjwvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZ0ZhYnJpYyA/IDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjM1MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiOTUzcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsLjMpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjMwdmhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogMjAwLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT48ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8PjwvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjgwJVwiLCBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6IFwiMnB4IHNvbGlkIGJsYWNrXCIsIGJvcmRlclJhZGl1czogXCIyNHB4XCIsIHBhZGRpbmc6IFwiOHB4IDEycHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fSBvbkNsaWNrPXtoYW5kbGVOZXh0UG92Q2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJiM4NjgwO1xyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbiAgICAvLyByZXR1cm4gKFxyXG4gICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kZWwtY29udGFpbmVyIHJvd1wiPlxyXG4gICAgLy8gICAgICAgICB7LyogZnJvbnQgKi99XHJcbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJyBzdHlsZT17eyBoZWlnaHQ6IFwiODAlXCIgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwb3YpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHN3aXRjaCAocG92KSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmcm9udFwiOlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG92KFwiZm9sZGVkXCIpXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZvbGRlZFwiOlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG92KFwiYmFja1wiKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJiYWNrXCI6XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQb3YoXCJmcm9udFwiKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8Q2hldnJvbkxlZnQgd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfSAvPlxyXG4gICAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XHJcbiAgICAvLyAgICAgICAgICAgICB7LyogZnJvbnQgKi99XHJcbiAgICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGUnIHN0eWxlPXt7IGRpc3BsYXk6IHBvdiA9PT0gXCJmcm9udFwiID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1jb250YWluZXJcIiBzdHlsZT17e1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgekluZGV4OiAxLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7LyogbW9kZWwgKi99XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiAyLCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vbW9kZWxfJHtwb3Z9LnBuZ2B9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgey8qIHBhbnQgKi99XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiAzLCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vbW9kZWxfJHtwb3Z9X3BhbnQucG5nYH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7LyogYm9keSAqL31cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDQsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfSAvLyA1NDQgfCA5NTMgfCAxMDg5IHwgMTM2MSB8IDI5NDBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL2N1c3RvbS8ke2NhdGVnb3J5fS8ke2ZhYnJpY1NlbGVjdD8udGl0bGUgPz8gXCJDLUJsdWVcIn0vJHtwb3Z9LyR7cGxhY2tldH0vYm9keS8ke2JvdHRvbVNlY29uZGFyeSA9PT0gXCJVbnR1Y2tlZFwiID8gYm90dG9tIDogYm90dG9tU2Vjb25kYXJ5fS5wbmdgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHsvKiBjb2xsYXIgKi99XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiA1LCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vJHtjYXRlZ29yeX0vJHtmYWJyaWNTZWxlY3Q/LnRpdGxlID8/IFwiQy1CbHVlXCJ9LyR7cG92fS8ke3BsYWNrZXR9L2NvbGxhci8ke2NvbGxhcn0ucG5nYH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7LyogYWNjZW50IGNvbGxhciAqL31cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFyQWNjZW50ICE9PSBcIkRlZmF1bHRcIiAmJiBjb2xsYXJBY2NlbnQgIT09IFwiSW5uZXJcIiAmJiBjb2xsYXJDb2xvciAmJiAoXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDYsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfSAvLyA1NDQgfCA5NTMgfCAxMDg5IHwgMTM2MSB8IDI5NDBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWcvY3VzdG9tLyR7Y2F0ZWdvcnl9L2FjY2VudC8ke3Bvdn0vY29sbGFyLyR7Y29sbGFyQWNjZW50LnJlcGxhY2UoXCJBbGxcIiwgXCJPdXRlclwiKX0gJHtjb2xsYXJ9ICR7Y29sbGFyQ29sb3J9LnBuZ2B9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgey8qIHNsZWV2ZSAqL31cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfSAvLyA1NDQgfCA5NTMgfCAxMDg5IHwgMTM2MSB8IDI5NDBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL2N1c3RvbS8ke2NhdGVnb3J5fS8ke2ZhYnJpY1NlbGVjdD8udGl0bGUgPz8gXCJDLUJsdWVcIn0vJHtwb3Z9LyR7cGxhY2tldH0vc2xlZXZlLyR7c2xlZXZlfS5wbmdgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHsvKiBhY2NlbnQgY3VmZnMgKi99XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHNsZWV2ZSA9PT0gXCJsb25nXCIgJiYgY3VmZnNBY2NlbnQgIT09IFwiRGVmYXVsdFwiICYmIGN1ZmZzQWNjZW50ICE9PSBcIklubmVyXCIgJiYgY3VmZnNDb2xvciAmJiAoXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDgsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfSAvLyA1NDQgfCA5NTMgfCAxMDg5IHwgMTM2MSB8IDI5NDBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWcvY3VzdG9tLyR7Y2F0ZWdvcnl9L2FjY2VudC8ke3Bvdn0vY3VmZnMvJHtjdWZmc0NvbG9yfS5wbmdgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHsvKiBwb2NrZXQgKi99XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiA5LCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vJHtjYXRlZ29yeX0vJHtmYWJyaWNTZWxlY3Q/LnRpdGxlID8/IFwiQy1CbHVlXCJ9LyR7cG92fS8ke3BsYWNrZXR9L3BvY2tldC8ke3BvY2tldH0ucG5nYH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzUwLCAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDk1MywgLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDEwLCBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogYm9yZGlycz8uZm9udCA/PyBcIkFyaWFsXCIsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDYsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBnZXRCb3JkaXJQb3NpdGlvbigndG9wJywgYm9yZGlycz8ucG9zaXRpb24pLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBnZXRCb3JkaXJQb3NpdGlvbigncmlnaHQnLCBib3JkaXJzPy5wb3NpdGlvbiksXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJvcmRpcnM/LmNvbG9yLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfX0+e2JvcmRpcnM/Lm5hbWV9PC9sYWJlbD5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHsvKiBubyBtb2RlbCAqL31cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDExLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vZnJvbnRfbm9fbW9kZWwucG5nYH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgey8qIGJhY2sgKi99XHJcbiAgICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGUnIHN0eWxlPXt7IGRpc3BsYXk6IHBvdiA9PT0gXCJiYWNrXCIgPyAnYmxvY2snIDogJ25vbmUnIH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWNvbnRhaW5lclwiIHN0eWxlPXt7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHsvKiBtb2RlbCAqL31cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDIsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfSAvLyA1NDQgfCA5NTMgfCAxMDg5IHwgMTM2MSB8IDI5NDBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL2N1c3RvbS9tb2RlbF8ke3Bvdn0ucG5nYH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7LyogcGFudCAqL31cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDMsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfSAvLyA1NDQgfCA5NTMgfCAxMDg5IHwgMTM2MSB8IDI5NDBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL2N1c3RvbS9tb2RlbF8ke3Bvdn1fcGFudC5wbmdgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHsvKiBib2R5ICovfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogNCwgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWcvY3VzdG9tLyR7Y2F0ZWdvcnl9LyR7ZmFicmljU2VsZWN0Py50aXRsZSA/PyBcIkMtQmx1ZVwifS8ke3Bvdn0vYm9keS8ke2JvdHRvbVNlY29uZGFyeSA9PT0gXCJVbnR1Y2tlZFwiID8gYm90dG9tIDogYm90dG9tU2Vjb25kYXJ5fS5wbmdgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHsvKiBjb2xsYXIgKi99XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiA1LCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vJHtjYXRlZ29yeX0vJHtmYWJyaWNTZWxlY3Q/LnRpdGxlID8/IFwiQy1CbHVlXCJ9LyR7cG92fS9jb2xsYXIvY29sbGFyLnBuZ2B9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgey8qIGFjY2VudCBjb2xsYXIgKi99XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIChjb2xsYXJBY2NlbnQgPT09IFwiT3V0ZXJcIiB8fCBjb2xsYXJBY2NlbnQgPT09IFwiQWxsXCIpICYmIGNvbGxhckFjY2VudCAhPT0gXCJEZWZhdWx0XCIgJiYgY29sbGFyQ29sb3IgJiYgKFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiA2LCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL2N1c3RvbS8ke2NhdGVnb3J5fS9hY2NlbnQvJHtwb3Z9L2NvbGxhci8ke2NvbGxhckNvbG9yfS5wbmdgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHsvKiBzbGVldmUgKi99XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHNsZWV2ZSAhPT0gXCJsb25nXCIgJiYgKFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiA3LCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL2N1c3RvbS8ke2NhdGVnb3J5fS8ke2ZhYnJpY1NlbGVjdD8udGl0bGUgPz8gXCJDLUJsdWVcIn0vJHtwb3Z9L3NsZWV2ZS8ke3NsZWV2ZX0ucG5nYH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7LyogY3VmZnMgKi99XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHNsZWV2ZSA9PT0gXCJsb25nXCIgJiYgKFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiA4LCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL2N1c3RvbS8ke2NhdGVnb3J5fS8ke2ZhYnJpY1NlbGVjdD8udGl0bGUgPz8gXCJDLUJsdWVcIn0vJHtwb3Z9L2N1ZmZzLyR7Y3VmZnN9LnBuZ2B9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgey8qIGFjY2VudCBjdWZmcyAqL31cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgc2xlZXZlID09PSBcImxvbmdcIiAmJiBjdWZmc0FjY2VudCAhPT0gXCJEZWZhdWx0XCIgJiYgY3VmZnNDb2xvciAmJiBjdWZmc0FjY2VudCAhPT0gXCJJbm5lclwiICYmIChcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogOSwgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vJHtjYXRlZ29yeX0vYWNjZW50LyR7cG92fS9jdWZmcy8ke2N1ZmZzfSAke2N1ZmZzQ29sb3J9LnBuZ2B9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHsvKiBubyBtb2RlbCAqL31cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDEwLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vYmFja19ub19tb2RlbC5wbmdgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgIHsvKiBmb2xkZWQgKi99XHJcbiAgICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGUnIHN0eWxlPXt7IGRpc3BsYXk6IHBvdiA9PT0gXCJmb2xkZWRcIiA/ICdibG9jaycgOiAnbm9uZScgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCIgc3R5bGU9e3tcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogMSxcclxuICAgIC8vICAgICAgICAgICAgICAgICB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgey8qIG1vZGVsICovfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogMiwgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MTJ9IC8vIDI5MiB8IDUxMiB8IDU4NSB8IDczMSB8IDE1NzlcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL2N1c3RvbS9tb2RlbF8ke3Bvdn0ucG5nYH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7LyogYm9keSAqL31cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDMsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTEyfSAvLyAyOTIgfCA1MTIgfCA1ODUgfCA3MzEgfCAxNTc5XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vJHtjYXRlZ29yeX0vJHtmYWJyaWNTZWxlY3Q/LnRpdGxlID8/IFwiQy1CbHVlXCJ9LyR7cG92fS8ke3BsYWNrZXR9L2JvZHkvUmVndWxhci5wbmdgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHsvKiBjb2xsYXIgKi99XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiA0LCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUxMn0gLy8gMjkyIHwgNTEyIHwgNTg1IHwgNzMxIHwgMTU3OVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWcvY3VzdG9tLyR7Y2F0ZWdvcnl9LyR7ZmFicmljU2VsZWN0Py50aXRsZSA/PyBcIkMtQmx1ZVwifS8ke3Bvdn0vJHtwbGFja2V0fS9jb2xsYXIvJHtjb2xsYXJ9LnBuZ2B9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgey8qIGFjY2VudCBjb2xsYXIgKi99XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhckFjY2VudCAhPT0gXCJEZWZhdWx0XCIgJiYgY29sbGFyQ29sb3IgJiYgKFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiA1LCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUxMn0gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL2N1c3RvbS8ke2NhdGVnb3J5fS9hY2NlbnQvJHtwb3Z9L2NvbGxhci8ke2NvbGxhckFjY2VudH0gJHtjb2xsYXJ9ICR7Y29sbGFyQ29sb3J9LnBuZ2B9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgey8qIHNsZWV2ZSAqL31cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgc2xlZXZlICE9PSBcImxvbmdcIiAmJiAoXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDYsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTEyfSAvLyAyOTIgfCA1MTIgfCA1ODUgfCA3MzEgfCAxNTc5XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL2N1c3RvbS8ke2NhdGVnb3J5fS8ke2ZhYnJpY1NlbGVjdD8udGl0bGUgPz8gXCJDLUJsdWVcIn0vJHtwb3Z9LyR7cGxhY2tldH0vc2xlZXZlLyR7c2xlZXZlfS5wbmdgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHsvKiBjdWZmcyAqL31cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgc2xlZXZlID09PSBcImxvbmdcIiAmJiAoXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTEyfSAvLyAyOTIgfCA1MTIgfCA1ODUgfCA3MzEgfCAxNTc5XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL2N1c3RvbS8ke2NhdGVnb3J5fS8ke2ZhYnJpY1NlbGVjdD8udGl0bGUgPz8gXCJDLUJsdWVcIn0vJHtwb3Z9L2N1ZmZzLyR7Y3VmZnN9LnBuZ2B9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgey8qIGFjY2VudCBjdWZmcyAqL31cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgc2xlZXZlID09PSBcImxvbmdcIiAmJiBjdWZmc0FjY2VudCAhPT0gXCJEZWZhdWx0XCIgJiYgY3VmZnNDb2xvciAmJiBjdWZmc0FjY2VudCAhPT0gXCJJbm5lclwiICYmIChcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogOCwgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MTJ9IC8vIDI5MiB8IDUxMiB8IDU4NSB8IDczMSB8IDE1NzlcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWcvY3VzdG9tLyR7Y2F0ZWdvcnl9L2FjY2VudC8ke3Bvdn0vY3VmZnMvJHtjdWZmc30gJHtjdWZmc0NvbG9yfS5wbmdgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7LyogcG9ja2V0ICovfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogOSwgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MTJ9IC8vIDI5MiB8IDUxMiB8IDU4NSB8IDczMSB8IDE1NzlcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL2N1c3RvbS8ke2NhdGVnb3J5fS8ke2ZhYnJpY1NlbGVjdD8udGl0bGUgPz8gXCJDLUJsdWVcIn0vJHtwb3Z9LyR7cGxhY2tldH0vcG9ja2V0LyR7cG9ja2V0fS5wbmdgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRpcnMgJiYgYm9yZGlycy5wb3NpdGlvbiAmJiBib3JkaXJzLnBvc2l0aW9uID09PSBcIkNoZXN0XCIgJiYgKFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1MCwgLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUxMiwgLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogMTAsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogYm9yZGlycz8uZm9udCA/PyBcIkFyaWFsXCIsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDM0MCxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMjIsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYm9yZGlycy5jb2xvcixcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+e2JvcmRpcnMubmFtZX08L2xhYmVsPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHsvKiBubyBtb2RlbCAqL31cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDExLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUxMn0gLy8gMjkyIHwgNTEyIHwgNTg1IHwgNzMxIHwgMTU3OVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWcvY3VzdG9tL2ZvbGRlZF9ub19tb2RlbC5wbmdgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJyBzdHlsZT17eyBoZWlnaHQ6IFwiODAlXCIsIHpJbmRleDogMTIgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBzd2l0Y2ggKHBvdikge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZnJvbnRcIjpcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvdihcImJhY2tcIilcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYmFja1wiOlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG92KFwiZm9sZGVkXCIpXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZvbGRlZFwiOlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG92KFwiZnJvbnRcIilcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPENoZXZyb25SaWdodCB3aWR0aD17MjB9IGhlaWdodD17MjB9IC8+XHJcbiAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgIC8vICAgICA8L2RpdiA+XHJcbiAgICAvLyApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGVsQ29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==