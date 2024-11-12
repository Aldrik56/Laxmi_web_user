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
    updatePov(povOptions[0], fabricSelect);
  }, []);

  var handlePrevPovChange = function handlePrevPovChange() {
    var currentIndex = povOptions.indexOf(pov);
    var prevIndex = (currentIndex - 1 + povOptions.length) % povOptions.length; // Fix for negative index

    updatePov(povOptions[prevIndex], fabricSelect);
  }; // Function to handle next POV change (cyclic forward)


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
          lineNumber: 53,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
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
            lineNumber: 60,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
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
            lineNumber: 67,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
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
            lineNumber: 76,
            columnNumber: 33
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
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
            lineNumber: 86,
            columnNumber: 33
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
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
            lineNumber: 96,
            columnNumber: 33
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
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
            lineNumber: 107,
            columnNumber: 33
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
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
            lineNumber: 117,
            columnNumber: 33
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
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
            lineNumber: 132,
            columnNumber: 28
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
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
            lineNumber: 143,
            columnNumber: 28
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 43
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
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
              lineNumber: 157,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
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
              lineNumber: 165,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
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
              lineNumber: 173,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
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
              lineNumber: 182,
              columnNumber: 30
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
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
              lineNumber: 191,
              columnNumber: 37
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
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
              src: dataStyle.sleeves.image,
              alt: "laxmi"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 37
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 199,
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
              lineNumber: 211,
              columnNumber: 37
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
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
              src: dataStyle.cuffsBack.image,
              alt: "laxmi"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 37
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
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
              lineNumber: 238,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 22
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
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
          lineNumber: 249,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            zIndex: 3,
            position: 'absolute'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 256,
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
            lineNumber: 266,
            columnNumber: 33
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 263,
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
            lineNumber: 276,
            columnNumber: 33
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 273,
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
            lineNumber: 286,
            columnNumber: 33
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 283,
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
            lineNumber: 296,
            columnNumber: 33
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 293,
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
            lineNumber: 306,
            columnNumber: 33
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 303,
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
            lineNumber: 321,
            columnNumber: 28
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 314,
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
            lineNumber: 332,
            columnNumber: 28
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 43
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 248,
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
          lineNumber: 338,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9jdXN0b20vbW9kZWxDb250YWluZXIuanN4Il0sIm5hbWVzIjpbIk1vZGVsQ29udGFpbmVyIiwiZmFicmljU2VsZWN0IiwiaXNMb2FkaW5nIiwiaXNMb2FkaW5nRmFicmljIiwiZGF0YVN0eWxlIiwidXNlSG9va0N1c3RvbSIsInBvdiIsInVwZGF0ZVBvdiIsInBvdk9wdGlvbnMiLCJkdXJhdGlvbiIsImludGVydmFsIiwidXNlU3RhdGUiLCJzbGVldmVGbGlja2VyIiwic2V0U2xlZXZlRmxpY2tlciIsImNvbGxhckZsaWNrZXIiLCJzZXRDb2xsYXJGbGlja2VyIiwiY3VmZnNGbGlja2VyIiwic2V0Q3VmZnNGbGlja2VyIiwicGxhY2tldEZsaWNrZXIiLCJzZXRQbGFja2V0RmxpY2tlciIsInBvY2tldEZsaWNrZXIiLCJzZXRQb2NrZXRGbGlja2VyIiwicGxlYXRzRmxpY2tlciIsInNldFBsZWF0c0ZsaWNrZXIiLCJ1c2VFZmZlY3QiLCJoYW5kbGVQcmV2UG92Q2hhbmdlIiwiY3VycmVudEluZGV4IiwiaW5kZXhPZiIsInByZXZJbmRleCIsImxlbmd0aCIsImhhbmRsZU5leHRQb3ZDaGFuZ2UiLCJuZXh0SW5kZXgiLCJjb25zb2xlIiwibG9nIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImN1cnNvciIsInBvc2l0aW9uIiwiekluZGV4IiwiYm90dG9tIiwiaW1hZ2UiLCJjb2xsYXIiLCJzbGVldmUiLCJvcGFjaXR5IiwicG9ja2V0IiwicGxhY2tldCIsInBhZGRpbmdUb3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xsYXJCYWNrIiwic2xlZXZlcyIsInBsZWF0cyIsImN1ZmZzQmFjayIsImNvbGxhckZvbGQiLCJjdWZmc0ZvbGQiLCJjdWZmcyIsInBvY2tldEZvbGQi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ZUFyU0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREosQ0FuQytFLENBb1YvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDSCxDQWpzQkQ7O0dBQU05QixjO1VBRXlCSyxtRDs7O0tBRnpCTCxjO0FBbXNCU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3VzdG9tL1tjYXRlZ29yeV0uMTEwNTkzNThkNmYyMWI4NTM2YTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyBDaGV2cm9uTGVmdCwgQ2hldnJvblJpZ2h0IH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvaWNvbidcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHVzZUhvb2tDdXN0b20gZnJvbSAnLi9ob29rQ3VzdG9tJztcclxuXHJcbmNvbnN0IE1vZGVsQ29udGFpbmVyID0gKHsgZmFicmljU2VsZWN0LGlzTG9hZGluZywgaXNMb2FkaW5nRmFicmljLCBkYXRhU3R5bGUgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgcG92LCB1cGRhdGVQb3YgfSA9IHVzZUhvb2tDdXN0b20oKTtcclxuXHJcbiAgICAgLy8gQXJyYXkgY29udGFpbmluZyB0aGUgcG9zc2libGUgdmFsdWVzXHJcbiAgICBjb25zdCBwb3ZPcHRpb25zID0gWydGUk9OVCcsICdCQUNLJywgJ0ZPTERFRCddO1xyXG4gICAgY29uc3QgZHVyYXRpb249IDEwMDA7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IDMwMFxyXG4gICAgY29uc3QgW3NsZWV2ZUZsaWNrZXIsIHNldFNsZWV2ZUZsaWNrZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NvbGxhckZsaWNrZXIsIHNldENvbGxhckZsaWNrZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2N1ZmZzRmxpY2tlciwgc2V0Q3VmZnNGbGlja2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwbGFja2V0RmxpY2tlciwgc2V0UGxhY2tldEZsaWNrZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3BvY2tldEZsaWNrZXIsIHNldFBvY2tldEZsaWNrZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3BsZWF0c0ZsaWNrZXIsIHNldFBsZWF0c0ZsaWNrZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIFxyXG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZVBvdihwb3ZPcHRpb25zWzBdLCBmYWJyaWNTZWxlY3QpO1xyXG4gICAgICB9LFtdKVxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgaGFuZGxlUHJldlBvdkNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBwb3ZPcHRpb25zLmluZGV4T2YocG92KTtcclxuICAgICAgICBjb25zdCBwcmV2SW5kZXggPSAoY3VycmVudEluZGV4IC0gMSArIHBvdk9wdGlvbnMubGVuZ3RoKSAlIHBvdk9wdGlvbnMubGVuZ3RoOyAvLyBGaXggZm9yIG5lZ2F0aXZlIGluZGV4XHJcbiAgICAgICAgdXBkYXRlUG92KHBvdk9wdGlvbnNbcHJldkluZGV4XSwgZmFicmljU2VsZWN0KVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgbmV4dCBQT1YgY2hhbmdlIChjeWNsaWMgZm9yd2FyZClcclxuICAgIGNvbnN0IGhhbmRsZU5leHRQb3ZDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gcG92T3B0aW9ucy5pbmRleE9mKHBvdik7XHJcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gKGN1cnJlbnRJbmRleCArIDEpICUgcG92T3B0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgdXBkYXRlUG92KHBvdk9wdGlvbnNbbmV4dEluZGV4XSwgZmFicmljU2VsZWN0KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHBvdk9wdGlvbnNbbmV4dEluZGV4XSlcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiBcInJlZFwiXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiODAlXCIsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogXCIycHggc29saWQgYmxhY2tcIiwgYm9yZGVyUmFkaXVzOiBcIjI0cHhcIiwgcGFkZGluZzogXCI4cHggMTJweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19IG9uQ2xpY2s9e2hhbmRsZVByZXZQb3ZDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmIzg2Nzg7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBmcm9udCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogcG92ID09PSBcIkZST05UXCIgPyAnZmxleCcgOiAnbm9uZScsIHdpZHRoOiBcIjEwMCVcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDIsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfSAvLyA1NDQgfCA5NTMgfCAxMDg5IHwgMTM2MSB8IDI5NDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWcvY3VzdG9tL21vZGVsXyR7cG92fS5zdmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiAzLCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL2N1c3RvbS9tb2RlbF8ke3Bvdn1fcGFudC5zdmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiA0LCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVN0eWxlLmJvdHRvbS5pbWFnZSAhPT0gXCJcIiAmJiBkYXRhU3R5bGUuYm90dG9tLmltYWdlICE9PSBudWxsID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGFTdHlsZS5ib3R0b20uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz4gOiA8PjwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDUsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU3R5bGUuY29sbGFyLmltYWdlICE9PSBcIlwiICYmIGRhdGFTdHlsZS5jb2xsYXIuaW1hZ2UgIT09IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YVN0eWxlLmNvbGxhci5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPiA6IDw+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogNiwgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTdHlsZS5zbGVldmUuaW1hZ2UgIT09IFwiXCIgJiYgZGF0YVN0eWxlLnNsZWV2ZS5pbWFnZSAhPT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfSAvLyA1NDQgfCA5NTMgfCAxMDg5IHwgMTM2MSB8IDI5NDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhU3R5bGUuc2xlZXZlLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e29wYWNpdHk6IHNsZWV2ZUZsaWNrZXIgPyAxIDogMC44fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPiA6IDw+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogMjAsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU3R5bGUucG9ja2V0LmltYWdlICE9PSBcIlwiICYmIGRhdGFTdHlsZS5wb2NrZXQuaW1hZ2UgIT09IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YVN0eWxlLnBvY2tldC5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPiA6IDw+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogOCwgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTdHlsZS5wbGFja2V0LmltYWdlICE9PSBcIlwiICYmIGRhdGFTdHlsZS5wbGFja2V0LmltYWdlICE9PSBudWxsID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGFTdHlsZS5wbGFja2V0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+IDogPD48Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nID8gPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzUwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI5NTNweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwuMylcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMzB2aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiAxMDAsIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PjxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDw+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nRmFicmljID8gPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzUwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI5NTNweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwuMylcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMzB2aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiAyMDAsIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PjxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDw+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7Lyoge2JhY2t9ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlJyBzdHlsZT17eyBkaXNwbGF5OiBwb3YgPT09IFwiQkFDS1wiID8gJ2Jsb2NrJyA6ICdub25lJywganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgLHdpZHRoOicxMDAlJyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWNvbnRhaW5lclwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogbW9kZWwgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiAyLCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vbW9kZWxfJHtwb3Z9LnBuZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHBhbnQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiAzLCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vbW9kZWxfJHtwb3Z9X3BhbnQucG5nYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogYm9keSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDQsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfSAvLyA1NDQgfCA5NTMgfCAxMDg5IHwgMTM2MSB8IDI5NDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL2N1c3RvbS9tb2RlbF8ke3Bvdn1fcGFudC5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNyYz17YC9pbWcvY3VzdG9tLyR7Y2F0ZWdvcnl9LyR7ZmFicmljU2VsZWN0Py50aXRsZSA/PyBcIkMtQmx1ZVwifS8ke3Bvdn0vYm9keS8ke2JvdHRvbVNlY29uZGFyeSA9PT0gXCJVbnR1Y2tlZFwiID8gYm90dG9tIDogYm90dG9tU2Vjb25kYXJ5fS5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogY29sbGFyICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogNSwgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGFTdHlsZS5jb2xsYXJCYWNrLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNyYz17YC9pbWcvY3VzdG9tLyR7Y2F0ZWdvcnl9LyR7ZmFicmljU2VsZWN0Py50aXRsZSA/PyBcIkMtQmx1ZVwifS8ke3Bvdn0vY29sbGFyL2NvbGxhci5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBhY2NlbnQgY29sbGFyICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiA2LCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL2N1c3RvbS9tb2RlbF8ke3Bvdn1fcGFudC5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3JjPXtgL2ltZy9jdXN0b20vJHtjYXRlZ29yeX0vYWNjZW50LyR7cG92fS9jb2xsYXIvJHtjb2xsYXJDb2xvcn0ucG5nYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHNsZWV2ZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogNywgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhkYXRhU3R5bGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfSAvLyA1NDQgfCA5NTMgfCAxMDg5IHwgMTM2MSB8IDI5NDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YVN0eWxlLnNsZWV2ZXMuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogY3VmZnMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDgsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfSAvLyA1NDQgfCA5NTMgfCAxMDg5IHwgMTM2MSB8IDI5NDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWcvY3VzdG9tL21vZGVsXyR7cG92fV9wYW50LnBuZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzcmM9e2AvaW1nL2N1c3RvbS8ke2NhdGVnb3J5fS8ke2ZhYnJpY1NlbGVjdD8udGl0bGUgPz8gXCJDLUJsdWVcIn0vJHtwb3Z9L2N1ZmZzLyR7Y3VmZnN9LnBuZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBwbGVhdHMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDksIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfSAvLyA1NDQgfCA5NTMgfCAxMDg5IHwgMTM2MSB8IDI5NDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YVN0eWxlLnBsZWF0cy5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBhY2NlbnQgY3VmZnMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDksIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfSAvLyA1NDQgfCA5NTMgfCAxMDg5IHwgMTM2MSB8IDI5NDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YVN0eWxlLmN1ZmZzQmFjay5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiAxMCwgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWcvY3VzdG9tL2JhY2tfbm9fbW9kZWwucG5nYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBmb2xkZWQgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IHBvdiA9PT0gXCJGT0xERURcIiA/ICdmbGV4JyA6ICdub25lJywgd2lkdGg6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogMiwgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfSAvLyA1NDQgfCA5NTMgfCAxMDg5IHwgMTM2MSB8IDI5NDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWcvY3VzdG9tL21vZGVsXyR7cG92fS5zdmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogMywgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfSAvLyA1NDQgfCA5NTMgfCAxMDg5IHwgMTM2MSB8IDI5NDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWcvY3VzdG9tL21vZGVsXyR7cG92fV9wYW50LnN2Z2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiA0LCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVN0eWxlLmJvdHRvbS5pbWFnZSAhPT0gXCJcIiAmJiBkYXRhU3R5bGUuYm90dG9tLmltYWdlICE9PSBudWxsID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGFTdHlsZS5ib3R0b20uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz4gOiA8PjwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDUsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU3R5bGUuY29sbGFyRm9sZC5pbWFnZSAhPT0gXCJcIiAmJiBkYXRhU3R5bGUuY29sbGFyRm9sZC5pbWFnZSAhPT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfSAvLyA1NDQgfCA5NTMgfCAxMDg5IHwgMTM2MSB8IDI5NDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhU3R5bGUuY29sbGFyLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+IDogPD48Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiA5OSwgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTdHlsZS5jdWZmc0ZvbGQuaW1hZ2UgIT09IFwiXCIgJiYgZGF0YVN0eWxlLmN1ZmZzRm9sZC5pbWFnZSAhPT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfSAvLyA1NDQgfCA5NTMgfCAxMDg5IHwgMTM2MSB8IDI5NDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhU3R5bGUuY3VmZnMuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz4gOiA8PjwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDEzLCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVN0eWxlLnBvY2tldEZvbGQuaW1hZ2UgIT09IFwiXCIgJiYgZGF0YVN0eWxlLnBvY2tldEZvbGQuaW1hZ2UgIT09IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YVN0eWxlLnBvY2tldC5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAgc3R5bGU9e3ttYXJnaW5Ub3A6Jy0xMjBweCd9fS8+IDogPD48Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogOCwgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTdHlsZS5wbGFja2V0Rm9sZC5pbWFnZSAhPT0gXCJcIiAmJiBkYXRhU3R5bGUucGxhY2tldEZvbGQuaW1hZ2UgIT09IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YVN0eWxlLnBsYWNrZXQuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz4gOiA8PjwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmcgPyA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIzNTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjk1M3B4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLC4zKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIzMHZoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDEwMCwgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+PGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPD48Lz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmdGYWJyaWMgPyA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIzNTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjk1M3B4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLC4zKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIzMHZoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDIwMCwgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+PGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPD48Lz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCI4MCVcIiwgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiBcIjJweCBzb2xpZCBibGFja1wiLCBib3JkZXJSYWRpdXM6IFwiMjRweFwiLCBwYWRkaW5nOiBcIjhweCAxMnB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX0gb25DbGljaz17aGFuZGxlTmV4dFBvdkNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYjODY4MDtcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG4gICAgLy8gcmV0dXJuIChcclxuICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsLWNvbnRhaW5lciByb3dcIj5cclxuICAgIC8vICAgICAgICAgey8qIGZyb250ICovfVxyXG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcicgc3R5bGU9e3sgaGVpZ2h0OiBcIjgwJVwiIH19PlxyXG4gICAgLy8gICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocG92KTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBzd2l0Y2ggKHBvdikge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZnJvbnRcIjpcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvdihcImZvbGRlZFwiKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmb2xkZWRcIjpcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvdihcImJhY2tcIilcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYmFja1wiOlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG92KFwiZnJvbnRcIilcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPENoZXZyb25MZWZ0IHdpZHRoPXsyMH0gaGVpZ2h0PXsyMH0gLz5cclxuICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiPlxyXG4gICAgLy8gICAgICAgICAgICAgey8qIGZyb250ICovfVxyXG4gICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlJyBzdHlsZT17eyBkaXNwbGF5OiBwb3YgPT09IFwiZnJvbnRcIiA/ICdibG9jaycgOiAnbm9uZScgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCIgc3R5bGU9e3tcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogMSxcclxuICAgIC8vICAgICAgICAgICAgICAgICB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgey8qIG1vZGVsICovfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogMiwgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWcvY3VzdG9tL21vZGVsXyR7cG92fS5wbmdgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHsvKiBwYW50ICovfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogMywgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWcvY3VzdG9tL21vZGVsXyR7cG92fV9wYW50LnBuZ2B9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgey8qIGJvZHkgKi99XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiA0LCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vJHtjYXRlZ29yeX0vJHtmYWJyaWNTZWxlY3Q/LnRpdGxlID8/IFwiQy1CbHVlXCJ9LyR7cG92fS8ke3BsYWNrZXR9L2JvZHkvJHtib3R0b21TZWNvbmRhcnkgPT09IFwiVW50dWNrZWRcIiA/IGJvdHRvbSA6IGJvdHRvbVNlY29uZGFyeX0ucG5nYH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7LyogY29sbGFyICovfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogNSwgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWcvY3VzdG9tLyR7Y2F0ZWdvcnl9LyR7ZmFicmljU2VsZWN0Py50aXRsZSA/PyBcIkMtQmx1ZVwifS8ke3Bvdn0vJHtwbGFja2V0fS9jb2xsYXIvJHtjb2xsYXJ9LnBuZ2B9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgey8qIGFjY2VudCBjb2xsYXIgKi99XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhckFjY2VudCAhPT0gXCJEZWZhdWx0XCIgJiYgY29sbGFyQWNjZW50ICE9PSBcIklubmVyXCIgJiYgY29sbGFyQ29sb3IgJiYgKFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiA2LCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL2N1c3RvbS8ke2NhdGVnb3J5fS9hY2NlbnQvJHtwb3Z9L2NvbGxhci8ke2NvbGxhckFjY2VudC5yZXBsYWNlKFwiQWxsXCIsIFwiT3V0ZXJcIil9ICR7Y29sbGFyfSAke2NvbGxhckNvbG9yfS5wbmdgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHsvKiBzbGVldmUgKi99XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiA3LCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vJHtjYXRlZ29yeX0vJHtmYWJyaWNTZWxlY3Q/LnRpdGxlID8/IFwiQy1CbHVlXCJ9LyR7cG92fS8ke3BsYWNrZXR9L3NsZWV2ZS8ke3NsZWV2ZX0ucG5nYH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7LyogYWNjZW50IGN1ZmZzICovfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBzbGVldmUgPT09IFwibG9uZ1wiICYmIGN1ZmZzQWNjZW50ICE9PSBcIkRlZmF1bHRcIiAmJiBjdWZmc0FjY2VudCAhPT0gXCJJbm5lclwiICYmIGN1ZmZzQ29sb3IgJiYgKFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiA4LCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL2N1c3RvbS8ke2NhdGVnb3J5fS9hY2NlbnQvJHtwb3Z9L2N1ZmZzLyR7Y3VmZnNDb2xvcn0ucG5nYH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7LyogcG9ja2V0ICovfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogOSwgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWcvY3VzdG9tLyR7Y2F0ZWdvcnl9LyR7ZmFicmljU2VsZWN0Py50aXRsZSA/PyBcIkMtQmx1ZVwifS8ke3Bvdn0vJHtwbGFja2V0fS9wb2NrZXQvJHtwb2NrZXR9LnBuZ2B9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1MCwgLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5NTMsIC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiAxMCwgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IGJvcmRpcnM/LmZvbnQgPz8gXCJBcmlhbFwiLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiA2LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogZ2V0Qm9yZGlyUG9zaXRpb24oJ3RvcCcsIGJvcmRpcnM/LnBvc2l0aW9uKSxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogZ2V0Qm9yZGlyUG9zaXRpb24oJ3JpZ2h0JywgYm9yZGlycz8ucG9zaXRpb24pLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBib3JkaXJzPy5jb2xvcixcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH19Pntib3JkaXJzPy5uYW1lfTwvbGFiZWw+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7Lyogbm8gbW9kZWwgKi99XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiAxMSwgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWcvY3VzdG9tL2Zyb250X25vX21vZGVsLnBuZ2B9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgIHsvKiBiYWNrICovfVxyXG4gICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlJyBzdHlsZT17eyBkaXNwbGF5OiBwb3YgPT09IFwiYmFja1wiID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1jb250YWluZXJcIiBzdHlsZT17e1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgekluZGV4OiAxLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7LyogbW9kZWwgKi99XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiAyLCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vbW9kZWxfJHtwb3Z9LnBuZ2B9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgey8qIHBhbnQgKi99XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiAzLCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezk1M30gLy8gNTQ0IHwgOTUzIHwgMTA4OSB8IDEzNjEgfCAyOTQwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vbW9kZWxfJHtwb3Z9X3BhbnQucG5nYH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7LyogYm9keSAqL31cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDQsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfSAvLyA1NDQgfCA5NTMgfCAxMDg5IHwgMTM2MSB8IDI5NDBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL2N1c3RvbS8ke2NhdGVnb3J5fS8ke2ZhYnJpY1NlbGVjdD8udGl0bGUgPz8gXCJDLUJsdWVcIn0vJHtwb3Z9L2JvZHkvJHtib3R0b21TZWNvbmRhcnkgPT09IFwiVW50dWNrZWRcIiA/IGJvdHRvbSA6IGJvdHRvbVNlY29uZGFyeX0ucG5nYH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7LyogY29sbGFyICovfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogNSwgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWcvY3VzdG9tLyR7Y2F0ZWdvcnl9LyR7ZmFicmljU2VsZWN0Py50aXRsZSA/PyBcIkMtQmx1ZVwifS8ke3Bvdn0vY29sbGFyL2NvbGxhci5wbmdgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHsvKiBhY2NlbnQgY29sbGFyICovfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAoY29sbGFyQWNjZW50ID09PSBcIk91dGVyXCIgfHwgY29sbGFyQWNjZW50ID09PSBcIkFsbFwiKSAmJiBjb2xsYXJBY2NlbnQgIT09IFwiRGVmYXVsdFwiICYmIGNvbGxhckNvbG9yICYmIChcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogNiwgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vJHtjYXRlZ29yeX0vYWNjZW50LyR7cG92fS9jb2xsYXIvJHtjb2xsYXJDb2xvcn0ucG5nYH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7Lyogc2xlZXZlICovfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBzbGVldmUgIT09IFwibG9uZ1wiICYmIChcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogNywgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vJHtjYXRlZ29yeX0vJHtmYWJyaWNTZWxlY3Q/LnRpdGxlID8/IFwiQy1CbHVlXCJ9LyR7cG92fS9zbGVldmUvJHtzbGVldmV9LnBuZ2B9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgey8qIGN1ZmZzICovfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBzbGVldmUgPT09IFwibG9uZ1wiICYmIChcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogOCwgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vJHtjYXRlZ29yeX0vJHtmYWJyaWNTZWxlY3Q/LnRpdGxlID8/IFwiQy1CbHVlXCJ9LyR7cG92fS9jdWZmcy8ke2N1ZmZzfS5wbmdgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHsvKiBhY2NlbnQgY3VmZnMgKi99XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHNsZWV2ZSA9PT0gXCJsb25nXCIgJiYgY3VmZnNBY2NlbnQgIT09IFwiRGVmYXVsdFwiICYmIGN1ZmZzQ29sb3IgJiYgY3VmZnNBY2NlbnQgIT09IFwiSW5uZXJcIiAmJiAoXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDksIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTUzfSAvLyA1NDQgfCA5NTMgfCAxMDg5IHwgMTM2MSB8IDI5NDBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWcvY3VzdG9tLyR7Y2F0ZWdvcnl9L2FjY2VudC8ke3Bvdn0vY3VmZnMvJHtjdWZmc30gJHtjdWZmc0NvbG9yfS5wbmdgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7Lyogbm8gbW9kZWwgKi99XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiAxMCwgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs5NTN9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWcvY3VzdG9tL2JhY2tfbm9fbW9kZWwucG5nYH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICB7LyogZm9sZGVkICovfVxyXG4gICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlJyBzdHlsZT17eyBkaXNwbGF5OiBwb3YgPT09IFwiZm9sZGVkXCIgPyAnYmxvY2snIDogJ25vbmUnIH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWNvbnRhaW5lclwiIHN0eWxlPXt7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHsvKiBtb2RlbCAqL31cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDIsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTEyfSAvLyAyOTIgfCA1MTIgfCA1ODUgfCA3MzEgfCAxNTc5XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vbW9kZWxfJHtwb3Z9LnBuZ2B9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgey8qIGJvZHkgKi99XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiAzLCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUxMn0gLy8gMjkyIHwgNTEyIHwgNTg1IHwgNzMxIHwgMTU3OVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWcvY3VzdG9tLyR7Y2F0ZWdvcnl9LyR7ZmFicmljU2VsZWN0Py50aXRsZSA/PyBcIkMtQmx1ZVwifS8ke3Bvdn0vJHtwbGFja2V0fS9ib2R5L1JlZ3VsYXIucG5nYH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7LyogY29sbGFyICovfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogNCwgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MTJ9IC8vIDI5MiB8IDUxMiB8IDU4NSB8IDczMSB8IDE1NzlcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL2N1c3RvbS8ke2NhdGVnb3J5fS8ke2ZhYnJpY1NlbGVjdD8udGl0bGUgPz8gXCJDLUJsdWVcIn0vJHtwb3Z9LyR7cGxhY2tldH0vY29sbGFyLyR7Y29sbGFyfS5wbmdgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHsvKiBhY2NlbnQgY29sbGFyICovfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXJBY2NlbnQgIT09IFwiRGVmYXVsdFwiICYmIGNvbGxhckNvbG9yICYmIChcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogNSwgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MTJ9IC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vJHtjYXRlZ29yeX0vYWNjZW50LyR7cG92fS9jb2xsYXIvJHtjb2xsYXJBY2NlbnR9ICR7Y29sbGFyfSAke2NvbGxhckNvbG9yfS5wbmdgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHsvKiBzbGVldmUgKi99XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHNsZWV2ZSAhPT0gXCJsb25nXCIgJiYgKFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiA2LCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUxMn0gLy8gMjkyIHwgNTEyIHwgNTg1IHwgNzMxIHwgMTU3OVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vJHtjYXRlZ29yeX0vJHtmYWJyaWNTZWxlY3Q/LnRpdGxlID8/IFwiQy1CbHVlXCJ9LyR7cG92fS8ke3BsYWNrZXR9L3NsZWV2ZS8ke3NsZWV2ZX0ucG5nYH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7LyogY3VmZnMgKi99XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHNsZWV2ZSA9PT0gXCJsb25nXCIgJiYgKFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiA3LCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUxMn0gLy8gMjkyIHwgNTEyIHwgNTg1IHwgNzMxIHwgMTU3OVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vJHtjYXRlZ29yeX0vJHtmYWJyaWNTZWxlY3Q/LnRpdGxlID8/IFwiQy1CbHVlXCJ9LyR7cG92fS9jdWZmcy8ke2N1ZmZzfS5wbmdgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGF4bWlcIiAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHsvKiBhY2NlbnQgY3VmZnMgKi99XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHNsZWV2ZSA9PT0gXCJsb25nXCIgJiYgY3VmZnNBY2NlbnQgIT09IFwiRGVmYXVsdFwiICYmIGN1ZmZzQ29sb3IgJiYgY3VmZnNBY2NlbnQgIT09IFwiSW5uZXJcIiAmJiAoXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDgsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTEyfSAvLyAyOTIgfCA1MTIgfCA1ODUgfCA3MzEgfCAxNTc5XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL2N1c3RvbS8ke2NhdGVnb3J5fS9hY2NlbnQvJHtwb3Z9L2N1ZmZzLyR7Y3VmZnN9ICR7Y3VmZnNDb2xvcn0ucG5nYH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxheG1pXCIgLz5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgey8qIHBvY2tldCAqL31cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDksIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gLy8gMjAwIHwgMzUwIHwgNDAwIHwgNTAwIHwgMTA4MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTEyfSAvLyAyOTIgfCA1MTIgfCA1ODUgfCA3MzEgfCAxNTc5XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy9jdXN0b20vJHtjYXRlZ29yeX0vJHtmYWJyaWNTZWxlY3Q/LnRpdGxlID8/IFwiQy1CbHVlXCJ9LyR7cG92fS8ke3BsYWNrZXR9L3BvY2tldC8ke3BvY2tldH0ucG5nYH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBib3JkaXJzICYmIGJvcmRpcnMucG9zaXRpb24gJiYgYm9yZGlycy5wb3NpdGlvbiA9PT0gXCJDaGVzdFwiICYmIChcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNTAsIC8vIDIwMCB8IDM1MCB8IDQwMCB8IDUwMCB8IDEwODBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MTIsIC8vIDU0NCB8IDk1MyB8IDEwODkgfCAxMzYxIHwgMjk0MFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDEwLCBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiAncmVkJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IGJvcmRpcnM/LmZvbnQgPz8gXCJBcmlhbFwiLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAzNDAsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTIyLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJvcmRpcnMuY29sb3IsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Pntib3JkaXJzLm5hbWV9PC9sYWJlbD5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7Lyogbm8gbW9kZWwgKi99XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiAxMSwgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSAvLyAyMDAgfCAzNTAgfCA0MDAgfCA1MDAgfCAxMDgwXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MTJ9IC8vIDI5MiB8IDUxMiB8IDU4NSB8IDczMSB8IDE1NzlcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL2N1c3RvbS9mb2xkZWRfbm9fbW9kZWwucG5nYH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsYXhtaVwiIC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcicgc3R5bGU9e3sgaGVpZ2h0OiBcIjgwJVwiLCB6SW5kZXg6IDEyIH19PlxyXG4gICAgLy8gICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgc3dpdGNoIChwb3YpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZyb250XCI6XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQb3YoXCJiYWNrXCIpXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJhY2tcIjpcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvdihcImZvbGRlZFwiKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmb2xkZWRcIjpcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvdihcImZyb250XCIpXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDxDaGV2cm9uUmlnaHQgd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfSAvPlxyXG4gICAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAvLyAgICAgPC9kaXYgPlxyXG4gICAgLy8gKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RlbENvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=