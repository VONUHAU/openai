self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var C_openai_quickstart_node_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_openai_quickstart_node_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_openai_quickstart_node_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_openai_quickstart_node_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\openai-quickstart-node\\pages\\index.js",
    _s = $RefreshSig$();






function Home() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      productDes = _useState[0],
      setProductDescription = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(100),
      maxLength = _useState2[0],
      setMaxLength = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      result = _useState3[0],
      setResult = _useState3[1];

  function onSubmit(_x) {
    return _onSubmit.apply(this, arguments);
  }

  function _onSubmit() {
    _onSubmit = (0,C_openai_quickstart_node_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_openai_quickstart_node_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {
      var response, data;
      return C_openai_quickstart_node_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              _context.next = 3;
              return fetch("/api/generate", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  productDes: productDes,
                  max: maxLength
                })
              });

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              data = _context.sent;
              setResult(data.result);
              setProductDescription("");

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _onSubmit.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("title", {
        children: "OpenAI Quickstart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("main", {
      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
        children: "Copy Suggestion"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
        onSubmit: onSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("textarea", {
          rows: 6,
          type: "text",
          name: "productDes",
          placeholder: "Describe your product/service",
          value: productDes,
          onChange: function onChange(e) {
            return setProductDescription(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
          style: {
            marginTop: 0
          },
          children: " Maximum length"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          style: {
            display: "flex",
            width: "100%",
            justifyContent: "space-between"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "range",
            name: "max",
            min: "40",
            max: "300",
            "class": "slider",
            value: maxLength,
            style: {
              marginBottom: "24px",
              width: "90%"
            },
            onChange: function onChange(e) {
              return setMaxLength(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
            children: [" ", maxLength]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "submit",
          value: "Generate copy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        style: {
          width: "520px"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h4", {
          style: {
            textAlign: "left"
          },
          children: " Result "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().result),
          children: result
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

_s(Home, "XlK3QhEB5DQtsH5z97KJVjf3kqE=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./pages/index.module.css":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./pages/index.module.css ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: \"ColfaxAI\";\r\n  src: url(https://cdn.openai.com/API/fonts/ColfaxAIRegular.woff2)\r\n      format(\"woff2\"),\r\n    url(https://cdn.openai.com/API/fonts/ColfaxAIRegular.woff) format(\"woff\");\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n@font-face {\r\n  font-family: \"ColfaxAI\";\r\n  src: url(https://cdn.openai.com/API/fonts/ColfaxAIBold.woff2) format(\"woff2\"),\r\n    url(https://cdn.openai.com/API/fonts/ColfaxAIBold.woff) format(\"woff\");\r\n  font-weight: bold;\r\n  font-style: normal;\r\n}\r\n.index_main___Ajca,\r\n.index_main___Ajca input {\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  color: #353740;\r\n  font-family: \"ColfaxAI\", Helvetica, sans-serif;\r\n}\r\n.index_main___Ajca {\r\n  display: -webkit-flex;\r\n  display: -moz-box;\r\n  display: flex;\r\n  -webkit-flex-direction: column;\r\n     -moz-box-orient: vertical;\r\n     -moz-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-align-items: center;\r\n     -moz-box-align: center;\r\n          align-items: center;\r\n  padding-top: 60px;\r\n}\r\n.index_main___Ajca .index_icon__2FeAx {\r\n  width: 34px;\r\n}\r\n.index_main___Ajca h3 {\r\n  font-size: 32px;\r\n  line-height: 40px;\r\n  font-weight: bold;\r\n  color: #202123;\r\n  margin: 16px 0 40px;\r\n}\r\n.index_main___Ajca form {\r\n  display: -webkit-flex;\r\n  display: -moz-box;\r\n  display: flex;\r\n  -webkit-flex-direction: column;\r\n     -moz-box-orient: vertical;\r\n     -moz-box-direction: normal;\r\n          flex-direction: column;\r\n  width: 520px;\r\n}\r\n.index_main___Ajca textarea{\r\n  padding: 12px 16px;\r\n  border: 2px solid #10a37f;\r\n  border-radius: 4px;\r\n  margin-bottom: 24px;\r\n}\r\n\r\n.index_main___Ajca ::-webkit-input-placeholder {\r\n  color: #8e8ea0;\r\n  opacity: 1;\r\n}\r\n\r\n.index_main___Ajca ::-moz-placeholder {\r\n  color: #8e8ea0;\r\n  opacity: 1;\r\n}\r\n\r\n.index_main___Ajca :-ms-input-placeholder {\r\n  color: #8e8ea0;\r\n  opacity: 1;\r\n}\r\n\r\n.index_main___Ajca ::placeholder {\r\n  color: #8e8ea0;\r\n  opacity: 1;\r\n}\r\n.index_main___Ajca input[type=\"submit\"] {\r\n  padding: 12px 0;\r\n  color: #fff;\r\n  background-color: #10a37f;\r\n  border: none;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n.index_main___Ajca .index_result__QuWa4 {\r\n  font-weight: bold;\r\n}\r\n\r\n.index_slider__Pjzgf {\r\n  -webkit-appearance: none;\r\n  margin-right: 15px;\r\n  width: 200px;\r\n  height: 7px;\r\n  background: rgba(255, 255, 255, 0.6);\r\n  border-radius: 5px;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#ff4500), to(#ff4500));\r\n  background-image: -webkit-linear-gradient(#ff4500, #ff4500);\r\n  background-image: linear-gradient(#ff4500, #ff4500);\r\n  background-size: 70% 100%;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.index_slider__Pjzgf{\r\n  -webkit-appearance: none;\r\n  height: 20px;\r\n  width: 20px;\r\n  border-radius: 50%;\r\n  background: #ff4500;\r\n  cursor: ew-resize;\r\n  -webkit-box-shadow: 0 0 2px 0 #555;\r\n          box-shadow: 0 0 2px 0 #555;\r\n  -webkit-transition: background .3s ease-in-out;\r\n  transition: background .3s ease-in-out;\r\n}\r\n\r\n.index_slider__Pjzgf{\r\n  -webkit-appearance: none;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  border: none;\r\n  background: transparent;\r\n}", "",{"version":3,"sources":["webpack://pages/index.module.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB;;6EAE2E;EAC3E,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,uBAAuB;EACvB;0EACwE;EACxE,iBAAiB;EACjB,kBAAkB;AACpB;AACA;;EAEE,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,8CAA8C;AAChD;AACA;EACE,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,8BAAsB;KAAtB,yBAAsB;KAAtB,0BAAsB;UAAtB,sBAAsB;EACtB,2BAAmB;KAAnB,sBAAmB;UAAnB,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,WAAW;AACb;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,cAAc;EACd,mBAAmB;AACrB;AACA;EACE,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,8BAAsB;KAAtB,yBAAsB;KAAtB,0BAAsB;UAAtB,sBAAsB;EACtB,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,UAAU;AACZ;;AAHA;EACE,cAAc;EACd,UAAU;AACZ;;AAHA;EACE,cAAc;EACd,UAAU;AACZ;;AAHA;EACE,cAAc;EACd,UAAU;AACZ;AACA;EACE,eAAe;EACf,WAAW;EACX,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,oCAAoC;EACpC,kBAAkB;EAClB,6FAAmD;EAAnD,2DAAmD;EAAnD,mDAAmD;EACnD,yBAAyB;EACzB,4BAA4B;AAC9B;;AAEA;EACE,wBAAwB;EACxB,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,kCAA0B;UAA1B,0BAA0B;EAC1B,8CAAsC;EAAtC,sCAAsC;AACxC;;AAEA;EACE,wBAAwB;EACxB,wBAAgB;UAAhB,gBAAgB;EAChB,YAAY;EACZ,uBAAuB;AACzB","sourcesContent":["@font-face {\r\n  font-family: \"ColfaxAI\";\r\n  src: url(https://cdn.openai.com/API/fonts/ColfaxAIRegular.woff2)\r\n      format(\"woff2\"),\r\n    url(https://cdn.openai.com/API/fonts/ColfaxAIRegular.woff) format(\"woff\");\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n@font-face {\r\n  font-family: \"ColfaxAI\";\r\n  src: url(https://cdn.openai.com/API/fonts/ColfaxAIBold.woff2) format(\"woff2\"),\r\n    url(https://cdn.openai.com/API/fonts/ColfaxAIBold.woff) format(\"woff\");\r\n  font-weight: bold;\r\n  font-style: normal;\r\n}\r\n.main,\r\n.main input {\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  color: #353740;\r\n  font-family: \"ColfaxAI\", Helvetica, sans-serif;\r\n}\r\n.main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 60px;\r\n}\r\n.main .icon {\r\n  width: 34px;\r\n}\r\n.main h3 {\r\n  font-size: 32px;\r\n  line-height: 40px;\r\n  font-weight: bold;\r\n  color: #202123;\r\n  margin: 16px 0 40px;\r\n}\r\n.main form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 520px;\r\n}\r\n.main textarea{\r\n  padding: 12px 16px;\r\n  border: 2px solid #10a37f;\r\n  border-radius: 4px;\r\n  margin-bottom: 24px;\r\n}\r\n\r\n.main ::placeholder {\r\n  color: #8e8ea0;\r\n  opacity: 1;\r\n}\r\n.main input[type=\"submit\"] {\r\n  padding: 12px 0;\r\n  color: #fff;\r\n  background-color: #10a37f;\r\n  border: none;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n.main .result {\r\n  font-weight: bold;\r\n}\r\n\r\n.slider {\r\n  -webkit-appearance: none;\r\n  margin-right: 15px;\r\n  width: 200px;\r\n  height: 7px;\r\n  background: rgba(255, 255, 255, 0.6);\r\n  border-radius: 5px;\r\n  background-image: linear-gradient(#ff4500, #ff4500);\r\n  background-size: 70% 100%;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.slider{\r\n  -webkit-appearance: none;\r\n  height: 20px;\r\n  width: 20px;\r\n  border-radius: 50%;\r\n  background: #ff4500;\r\n  cursor: ew-resize;\r\n  box-shadow: 0 0 2px 0 #555;\r\n  transition: background .3s ease-in-out;\r\n}\r\n\r\n.slider{\r\n  -webkit-appearance: none;\r\n  box-shadow: none;\r\n  border: none;\r\n  background: transparent;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"main": "index_main___Ajca",
	"icon": "index_icon__2FeAx",
	"result": "index_result__QuWa4",
	"slider": "index_slider__Pjzgf"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2EyNTY5MzJhMjI2M2IwNGY4NTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVlLFNBQVNHLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0Isa0JBQTRDRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEQ7QUFBQSxNQUFPRyxVQUFQO0FBQUEsTUFBbUJDLHFCQUFuQjs7QUFDQSxtQkFBa0NKLCtDQUFRLENBQUMsR0FBRCxDQUExQztBQUFBLE1BQU9LLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQTRCTiwrQ0FBUSxFQUFwQztBQUFBLE1BQU9PLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUg2QixXQUtkQyxRQUxjO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG9RQUs3QixpQkFBd0JDLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQSxjQUFBQSxLQUFLLENBQUNDLGNBQU47QUFERjtBQUFBLHFCQUV5QkMsS0FBSyxDQUFDLGVBQUQsRUFBa0I7QUFDNUNDLGdCQUFBQSxNQUFNLEVBQUUsTUFEb0M7QUFFNUNDLGdCQUFBQSxPQUFPLEVBQUU7QUFDUCxrQ0FBZ0I7QUFEVCxpQkFGbUM7QUFLNUNDLGdCQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVkLGtCQUFBQSxVQUFVLEVBQVZBLFVBQUY7QUFBY2Usa0JBQUFBLEdBQUcsRUFBRWI7QUFBbkIsaUJBQWY7QUFMc0MsZUFBbEIsQ0FGOUI7O0FBQUE7QUFFUWMsY0FBQUEsUUFGUjtBQUFBO0FBQUEscUJBU3FCQSxRQUFRLENBQUNDLElBQVQsRUFUckI7O0FBQUE7QUFTUUMsY0FBQUEsSUFUUjtBQVVFYixjQUFBQSxTQUFTLENBQUNhLElBQUksQ0FBQ2QsTUFBTixDQUFUO0FBQ0FILGNBQUFBLHFCQUFxQixDQUFDLEVBQUQsQ0FBckI7O0FBWEY7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QW1DLEtBQUssZ0JBQWdCLCtCQUErQixtQkFBbUIsa0JBQWtCLHlCQUF5QiwwQkFBMEIsd0JBQXdCLGlDQUFpQyw2Q0FBNkMsS0FBSyxnQkFBZ0IsK0JBQStCLHVCQUF1QixtQkFBbUIsOEJBQThCLEtBQUssbUJBQW1CO0FBQ3Z6TjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5tb2R1bGUuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtwcm9kdWN0RGVzLCBzZXRQcm9kdWN0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW21heExlbmd0aCwgc2V0TWF4TGVuZ3RoXSA9IHVzZVN0YXRlKDEwMCk7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0KGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZ2VuZXJhdGVcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcHJvZHVjdERlcywgbWF4OiBtYXhMZW5ndGh9KSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHNldFJlc3VsdChkYXRhLnJlc3VsdCk7XHJcbiAgICBzZXRQcm9kdWN0RGVzY3JpcHRpb24oXCJcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk9wZW5BSSBRdWlja3N0YXJ0PC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLnBuZ1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgXHJcbiAgICAgICAgPGgzPkNvcHkgU3VnZ2VzdGlvbjwvaDM+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICByb3dzID0gezZ9XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cInByb2R1Y3REZXNcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaWJlIHlvdXIgcHJvZHVjdC9zZXJ2aWNlXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3REZXN9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvZHVjdERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW5Ub3A6IDB9fT4gTWF4aW11bSBsZW5ndGg8L3A+XHJcblxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCB3aWR0aDogXCIxMDAlXCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIn19PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG5hbWU9XCJtYXhcIlxyXG4gICAgICAgICAgICBtaW49XCI0MFwiIG1heD1cIjMwMFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwic2xpZGVyXCJcclxuICAgICAgICAgICAgdmFsdWU9e21heExlbmd0aH1cclxuICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IFwiMjRweFwiLCB3aWR0aDogXCI5MCVcIn19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWF4TGVuZ3RoKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICA8bGFiZWwgPiB7bWF4TGVuZ3RofTwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJHZW5lcmF0ZSBjb3B5XCIgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjUyMHB4XCJ9fT5cclxuICAgICAgICAgICAgPGg0IHN0eWxlPXt7dGV4dEFsaWduOiBcImxlZnRcIn19PiBSZXN1bHQgPC9oND5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXN1bHR9PntyZXN1bHR9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkNvbGZheEFJXFxcIjtcXHJcXG4gIHNyYzogdXJsKGh0dHBzOi8vY2RuLm9wZW5haS5jb20vQVBJL2ZvbnRzL0NvbGZheEFJUmVndWxhci53b2ZmMilcXHJcXG4gICAgICBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxyXFxuICAgIHVybChodHRwczovL2Nkbi5vcGVuYWkuY29tL0FQSS9mb250cy9Db2xmYXhBSVJlZ3VsYXIud29mZikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ29sZmF4QUlcXFwiO1xcclxcbiAgc3JjOiB1cmwoaHR0cHM6Ly9jZG4ub3BlbmFpLmNvbS9BUEkvZm9udHMvQ29sZmF4QUlCb2xkLndvZmYyKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxyXFxuICAgIHVybChodHRwczovL2Nkbi5vcGVuYWkuY29tL0FQSS9mb250cy9Db2xmYXhBSUJvbGQud29mZikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuLmluZGV4X21haW5fX19BamNhLFxcclxcbi5pbmRleF9tYWluX19fQWpjYSBpbnB1dCB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gIGNvbG9yOiAjMzUzNzQwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJDb2xmYXhBSVxcXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuLmluZGV4X21haW5fX19BamNhIHtcXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxyXFxuICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXHJcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogNjBweDtcXHJcXG59XFxyXFxuLmluZGV4X21haW5fX19BamNhIC5pbmRleF9pY29uX18yRmVBeCB7XFxyXFxuICB3aWR0aDogMzRweDtcXHJcXG59XFxyXFxuLmluZGV4X21haW5fX19BamNhIGgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogIzIwMjEyMztcXHJcXG4gIG1hcmdpbjogMTZweCAwIDQwcHg7XFxyXFxufVxcclxcbi5pbmRleF9tYWluX19fQWpjYSBmb3JtIHtcXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxyXFxuICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXHJcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiA1MjBweDtcXHJcXG59XFxyXFxuLmluZGV4X21haW5fX19BamNhIHRleHRhcmVhe1xcclxcbiAgcGFkZGluZzogMTJweCAxNnB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzEwYTM3ZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5pbmRleF9tYWluX19fQWpjYSA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6ICM4ZThlYTA7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5kZXhfbWFpbl9fX0FqY2EgOjotbW96LXBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiAjOGU4ZWEwO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZGV4X21haW5fX19BamNhIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6ICM4ZThlYTA7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5kZXhfbWFpbl9fX0FqY2EgOjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogIzhlOGVhMDtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcbi5pbmRleF9tYWluX19fQWpjYSBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICBwYWRkaW5nOiAxMnB4IDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMGEzN2Y7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5pbmRleF9tYWluX19fQWpjYSAuaW5kZXhfcmVzdWx0X19RdVdhNCB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZGV4X3NsaWRlcl9fUGp6Z2Yge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgaGVpZ2h0OiA3cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNmZjQ1MDApLCB0bygjZmY0NTAwKSk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjZmY0NTAwLCAjZmY0NTAwKTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjZmY0NTAwLCAjZmY0NTAwKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogNzAlIDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5kZXhfc2xpZGVyX19QanpnZntcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXHJcXG4gIGN1cnNvcjogZXctcmVzaXplO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMnB4IDAgIzU1NTtcXHJcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDJweCAwICM1NTU7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5pbmRleF9zbGlkZXJfX1Bqemdme1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcclxcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9wYWdlcy9pbmRleC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCOzs2RUFFMkU7RUFDM0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCOzBFQUN3RTtFQUN4RSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsOENBQThDO0FBQ2hEO0FBQ0E7RUFDRSxxQkFBYTtFQUFiLGlCQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFzQjtLQUF0Qix5QkFBc0I7S0FBdEIsMEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QiwyQkFBbUI7S0FBbkIsc0JBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUJBQWE7RUFBYixpQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBc0I7S0FBdEIseUJBQXNCO0tBQXRCLDBCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUhBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFIQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBSEE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQiw2RkFBbUQ7RUFBbkQsMkRBQW1EO0VBQW5ELG1EQUFtRDtFQUNuRCx5QkFBeUI7RUFDekIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQiw4Q0FBc0M7RUFBdEMsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHdCQUFnQjtVQUFoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ29sZmF4QUlcXFwiO1xcclxcbiAgc3JjOiB1cmwoaHR0cHM6Ly9jZG4ub3BlbmFpLmNvbS9BUEkvZm9udHMvQ29sZmF4QUlSZWd1bGFyLndvZmYyKVxcclxcbiAgICAgIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXHJcXG4gICAgdXJsKGh0dHBzOi8vY2RuLm9wZW5haS5jb20vQVBJL2ZvbnRzL0NvbGZheEFJUmVndWxhci53b2ZmKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJDb2xmYXhBSVxcXCI7XFxyXFxuICBzcmM6IHVybChodHRwczovL2Nkbi5vcGVuYWkuY29tL0FQSS9mb250cy9Db2xmYXhBSUJvbGQud29mZjIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXHJcXG4gICAgdXJsKGh0dHBzOi8vY2RuLm9wZW5haS5jb20vQVBJL2ZvbnRzL0NvbGZheEFJQm9sZC53b2ZmKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG4ubWFpbixcXHJcXG4ubWFpbiBpbnB1dCB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gIGNvbG9yOiAjMzUzNzQwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJDb2xmYXhBSVxcXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuLm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDYwcHg7XFxyXFxufVxcclxcbi5tYWluIC5pY29uIHtcXHJcXG4gIHdpZHRoOiAzNHB4O1xcclxcbn1cXHJcXG4ubWFpbiBoMyB7XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxuICBsaW5lLWhlaWdodDogNDBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6ICMyMDIxMjM7XFxyXFxuICBtYXJnaW46IDE2cHggMCA0MHB4O1xcclxcbn1cXHJcXG4ubWFpbiBmb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDUyMHB4O1xcclxcbn1cXHJcXG4ubWFpbiB0ZXh0YXJlYXtcXHJcXG4gIHBhZGRpbmc6IDEycHggMTZweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMxMGEzN2Y7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiA6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiAjOGU4ZWEwO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuLm1haW4gaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcclxcbiAgcGFkZGluZzogMTJweCAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTBhMzdmO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ubWFpbiAucmVzdWx0IHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIGhlaWdodDogN3B4O1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNmZjQ1MDAsICNmZjQ1MDApO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiA3MCUgMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXJ7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxyXFxuICBjdXJzb3I6IGV3LXJlc2l6ZTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggMCAjNTU1O1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXJ7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm1haW5cIjogXCJpbmRleF9tYWluX19fQWpjYVwiLFxuXHRcImljb25cIjogXCJpbmRleF9pY29uX18yRmVBeFwiLFxuXHRcInJlc3VsdFwiOiBcImluZGV4X3Jlc3VsdF9fUXVXYTRcIixcblx0XCJzbGlkZXJcIjogXCJpbmRleF9zbGlkZXJfX1BqemdmXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkhvbWUiLCJwcm9kdWN0RGVzIiwic2V0UHJvZHVjdERlc2NyaXB0aW9uIiwibWF4TGVuZ3RoIiwic2V0TWF4TGVuZ3RoIiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYXgiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwibWFpbiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcmdpblRvcCIsImRpc3BsYXkiLCJ3aWR0aCIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luQm90dG9tIiwidGV4dEFsaWduIl0sInNvdXJjZVJvb3QiOiIifQ==