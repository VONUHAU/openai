"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(40),
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
        children: "Suggess copy message"
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
            min: "10",
            max: "150",
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
            lineNumber: 46,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
            children: [" ", maxLength]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "submit",
          value: "Generate copy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
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
          lineNumber: 59,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().result),
          children: result
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
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

_s(Home, "4OdJcRb3vuH1jURYHzuEOV9iTqE=");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGExYjZmZjJkOTY5YjE3YTQ0ZDAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVlLFNBQVNHLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0Isa0JBQTRDRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEQ7QUFBQSxNQUFPRyxVQUFQO0FBQUEsTUFBbUJDLHFCQUFuQjs7QUFDQSxtQkFBa0NKLCtDQUFRLENBQUMsRUFBRCxDQUExQztBQUFBLE1BQU9LLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQTRCTiwrQ0FBUSxFQUFwQztBQUFBLE1BQU9PLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUg2QixXQUtkQyxRQUxjO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG9RQUs3QixpQkFBd0JDLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQSxjQUFBQSxLQUFLLENBQUNDLGNBQU47QUFERjtBQUFBLHFCQUV5QkMsS0FBSyxDQUFDLGVBQUQsRUFBa0I7QUFDNUNDLGdCQUFBQSxNQUFNLEVBQUUsTUFEb0M7QUFFNUNDLGdCQUFBQSxPQUFPLEVBQUU7QUFDUCxrQ0FBZ0I7QUFEVCxpQkFGbUM7QUFLNUNDLGdCQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVkLGtCQUFBQSxVQUFVLEVBQVZBLFVBQUY7QUFBY2Usa0JBQUFBLEdBQUcsRUFBRWI7QUFBbkIsaUJBQWY7QUFMc0MsZUFBbEIsQ0FGOUI7O0FBQUE7QUFFUWMsY0FBQUEsUUFGUjtBQUFBO0FBQUEscUJBU3FCQSxRQUFRLENBQUNDLElBQVQsRUFUckI7O0FBQUE7QUFTUUMsY0FBQUEsSUFUUjtBQVVFYixjQUFBQSxTQUFTLENBQUNhLElBQUksQ0FBQ2QsTUFBTixDQUFUO0FBQ0FILGNBQUFBLHFCQUFxQixDQUFDLEVBQUQsQ0FBckI7O0FBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FMNkI7QUFBQTtBQUFBOztBQW1CN0Isc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFNLGVBQVMsRUFBRUgsK0RBQWpCO0FBQUEsOEJBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sZ0JBQVEsRUFBRVEsUUFBaEI7QUFBQSxnQ0FDRTtBQUNFLGNBQUksRUFBSSxDQURWO0FBRUUsY0FBSSxFQUFDLE1BRlA7QUFHRSxjQUFJLEVBQUMsWUFIUDtBQUlFLHFCQUFXLEVBQUMsK0JBSmQ7QUFLRSxlQUFLLEVBQUVOLFVBTFQ7QUFNRSxrQkFBUSxFQUFFLGtCQUFDb0IsQ0FBRDtBQUFBLG1CQUFPbkIscUJBQXFCLENBQUNtQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUE1QjtBQUFBO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVNBO0FBQUcsZUFBSyxFQUFFO0FBQUNDLFlBQUFBLFNBQVMsRUFBRTtBQUFaLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEEsZUFVRTtBQUFLLGVBQUssRUFBRTtBQUFDQyxZQUFBQSxPQUFPLEVBQUUsTUFBVjtBQUFrQkMsWUFBQUEsS0FBSyxFQUFFLE1BQXpCO0FBQWlDQyxZQUFBQSxjQUFjLEVBQUU7QUFBakQsV0FBWjtBQUFBLGtDQUVFO0FBQU8sZ0JBQUksRUFBQyxPQUFaO0FBQW9CLGdCQUFJLEVBQUMsS0FBekI7QUFDQSxlQUFHLEVBQUMsSUFESjtBQUNTLGVBQUcsRUFBQyxLQURiO0FBRUEscUJBQU0sUUFGTjtBQUdBLGlCQUFLLEVBQUV4QixTQUhQO0FBSUEsaUJBQUssRUFBRTtBQUFDeUIsY0FBQUEsWUFBWSxFQUFFLE1BQWY7QUFBdUJGLGNBQUFBLEtBQUssRUFBRTtBQUE5QixhQUpQO0FBS0Esb0JBQVEsRUFBRSxrQkFBQ0wsQ0FBRDtBQUFBLHFCQUFPakIsWUFBWSxDQUFDaUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbkI7QUFBQTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFRRTtBQUFBLDRCQUFVcEIsU0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGLGVBc0JFO0FBQU8sY0FBSSxFQUFDLFFBQVo7QUFBcUIsZUFBSyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBMkJFO0FBQUssYUFBSyxFQUFFO0FBQUN1QixVQUFBQSxLQUFLLEVBQUU7QUFBUixTQUFaO0FBQUEsZ0NBQ0k7QUFBSSxlQUFLLEVBQUU7QUFBQ0csWUFBQUEsU0FBUyxFQUFFO0FBQVosV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUssbUJBQVMsRUFBRTlCLGlFQUFoQjtBQUFBLG9CQUFnQ007QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwQ0Q7O0dBN0R1Qkw7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtwcm9kdWN0RGVzLCBzZXRQcm9kdWN0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW21heExlbmd0aCwgc2V0TWF4TGVuZ3RoXSA9IHVzZVN0YXRlKDQwKTtcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZVwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwcm9kdWN0RGVzLCBtYXg6IG1heExlbmd0aH0pLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgc2V0UmVzdWx0KGRhdGEucmVzdWx0KTtcclxuICAgIHNldFByb2R1Y3REZXNjcmlwdGlvbihcIlwiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+T3BlbkFJIFF1aWNrc3RhcnQ8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICBcclxuICAgICAgICA8aDM+U3VnZ2VzcyBjb3B5IG1lc3NhZ2U8L2gzPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgcm93cyA9IHs2fVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0RGVzXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmliZSB5b3VyIHByb2R1Y3Qvc2VydmljZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0RGVzfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByb2R1Y3REZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDxwIHN0eWxlPXt7bWFyZ2luVG9wOiAwfX0+IE1heGltdW0gbGVuZ3RoPC9wPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCB3aWR0aDogXCIxMDAlXCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIn19PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG5hbWU9XCJtYXhcIlxyXG4gICAgICAgICAgICBtaW49XCIxMFwiIG1heD1cIjE1MFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwic2xpZGVyXCJcclxuICAgICAgICAgICAgdmFsdWU9e21heExlbmd0aH1cclxuICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IFwiMjRweFwiLCB3aWR0aDogXCI5MCVcIn19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWF4TGVuZ3RoKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICA8bGFiZWwgPiB7bWF4TGVuZ3RofTwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJHZW5lcmF0ZSBjb3B5XCIgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjUyMHB4XCJ9fT5cclxuICAgICAgICAgICAgPGg0IHN0eWxlPXt7dGV4dEFsaWduOiBcImxlZnRcIn19PiBSZXN1bHQgPC9oND5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXN1bHR9PntyZXN1bHR9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkhvbWUiLCJwcm9kdWN0RGVzIiwic2V0UHJvZHVjdERlc2NyaXB0aW9uIiwibWF4TGVuZ3RoIiwic2V0TWF4TGVuZ3RoIiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYXgiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwibWFpbiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcmdpblRvcCIsImRpc3BsYXkiLCJ3aWR0aCIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luQm90dG9tIiwidGV4dEFsaWduIl0sInNvdXJjZVJvb3QiOiIifQ==