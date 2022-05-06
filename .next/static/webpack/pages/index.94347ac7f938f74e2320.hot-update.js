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
            lineNumber: 44,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
            children: [" ", maxLength]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "submit",
          value: "Generate copy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
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
          lineNumber: 57,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().result),
          children: result
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTQzNDdhYzdmOTM4Zjc0ZTIzMjAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVlLFNBQVNHLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0Isa0JBQTRDRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEQ7QUFBQSxNQUFPRyxVQUFQO0FBQUEsTUFBbUJDLHFCQUFuQjs7QUFDQSxtQkFBa0NKLCtDQUFRLENBQUMsRUFBRCxDQUExQztBQUFBLE1BQU9LLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQTRCTiwrQ0FBUSxFQUFwQztBQUFBLE1BQU9PLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUg2QixXQUtkQyxRQUxjO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG9RQUs3QixpQkFBd0JDLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQSxjQUFBQSxLQUFLLENBQUNDLGNBQU47QUFERjtBQUFBLHFCQUV5QkMsS0FBSyxDQUFDLGVBQUQsRUFBa0I7QUFDNUNDLGdCQUFBQSxNQUFNLEVBQUUsTUFEb0M7QUFFNUNDLGdCQUFBQSxPQUFPLEVBQUU7QUFDUCxrQ0FBZ0I7QUFEVCxpQkFGbUM7QUFLNUNDLGdCQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVkLGtCQUFBQSxVQUFVLEVBQVZBLFVBQUY7QUFBY2Usa0JBQUFBLEdBQUcsRUFBRWI7QUFBbkIsaUJBQWY7QUFMc0MsZUFBbEIsQ0FGOUI7O0FBQUE7QUFFUWMsY0FBQUEsUUFGUjtBQUFBO0FBQUEscUJBU3FCQSxRQUFRLENBQUNDLElBQVQsRUFUckI7O0FBQUE7QUFTUUMsY0FBQUEsSUFUUjtBQVVFYixjQUFBQSxTQUFTLENBQUNhLElBQUksQ0FBQ2QsTUFBTixDQUFUO0FBQ0FILGNBQUFBLHFCQUFxQixDQUFDLEVBQUQsQ0FBckI7O0FBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FMNkI7QUFBQTtBQUFBOztBQW1CN0Isc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFNLGVBQVMsRUFBRUgsK0RBQWpCO0FBQUEsOEJBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sZ0JBQVEsRUFBRVEsUUFBaEI7QUFBQSxnQ0FDRTtBQUNFLGNBQUksRUFBSSxDQURWO0FBRUUsY0FBSSxFQUFDLE1BRlA7QUFHRSxjQUFJLEVBQUMsWUFIUDtBQUlFLHFCQUFXLEVBQUMsK0JBSmQ7QUFLRSxlQUFLLEVBQUVOLFVBTFQ7QUFNRSxrQkFBUSxFQUFFLGtCQUFDb0IsQ0FBRDtBQUFBLG1CQUFPbkIscUJBQXFCLENBQUNtQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUE1QjtBQUFBO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVNFO0FBQUssZUFBSyxFQUFFO0FBQUNDLFlBQUFBLE9BQU8sRUFBRSxNQUFWO0FBQWtCQyxZQUFBQSxLQUFLLEVBQUUsTUFBekI7QUFBaUNDLFlBQUFBLGNBQWMsRUFBRTtBQUFqRCxXQUFaO0FBQUEsa0NBQ0U7QUFBTyxnQkFBSSxFQUFDLE9BQVo7QUFBb0IsZ0JBQUksRUFBQyxLQUF6QjtBQUNBLGVBQUcsRUFBQyxJQURKO0FBQ1MsZUFBRyxFQUFDLEtBRGI7QUFFQSxxQkFBTSxRQUZOO0FBR0EsaUJBQUssRUFBRXZCLFNBSFA7QUFJQSxpQkFBSyxFQUFFO0FBQUN3QixjQUFBQSxZQUFZLEVBQUUsTUFBZjtBQUF1QkYsY0FBQUEsS0FBSyxFQUFFO0FBQTlCLGFBSlA7QUFLQSxvQkFBUSxFQUFFLGtCQUFDSixDQUFEO0FBQUEscUJBQU9qQixZQUFZLENBQUNpQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFuQjtBQUFBO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQU9FO0FBQUEsNEJBQVVwQixTQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEYsZUFvQkU7QUFBTyxjQUFJLEVBQUMsUUFBWjtBQUFxQixlQUFLLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUF5QkU7QUFBSyxhQUFLLEVBQUU7QUFBQ3NCLFVBQUFBLEtBQUssRUFBRTtBQUFSLFNBQVo7QUFBQSxnQ0FDSTtBQUFJLGVBQUssRUFBRTtBQUFDRyxZQUFBQSxTQUFTLEVBQUU7QUFBWixXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBSyxtQkFBUyxFQUFFN0IsaUVBQWhCO0FBQUEsb0JBQWdDTTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdDRDs7R0EzRHVCTDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3Byb2R1Y3REZXMsIHNldFByb2R1Y3REZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbWF4TGVuZ3RoLCBzZXRNYXhMZW5ndGhdID0gdXNlU3RhdGUoNDApO1xyXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2dlbmVyYXRlXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHByb2R1Y3REZXMsIG1heDogbWF4TGVuZ3RofSksXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBzZXRSZXN1bHQoZGF0YS5yZXN1bHQpO1xyXG4gICAgc2V0UHJvZHVjdERlc2NyaXB0aW9uKFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5PcGVuQUkgUXVpY2tzdGFydDwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgIFxyXG4gICAgICAgIDxoMz5TdWdnZXNzIGNvcHkgbWVzc2FnZTwvaDM+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICByb3dzID0gezZ9XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cInByb2R1Y3REZXNcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaWJlIHlvdXIgcHJvZHVjdC9zZXJ2aWNlXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3REZXN9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvZHVjdERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIHdpZHRoOiBcIjEwMCVcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwifX0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBuYW1lPVwibWF4XCJcclxuICAgICAgICAgICAgbWluPVwiMTBcIiBtYXg9XCIxNTBcIlxyXG4gICAgICAgICAgICBjbGFzcz1cInNsaWRlclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXttYXhMZW5ndGh9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiBcIjI0cHhcIiwgd2lkdGg6IFwiOTAlXCJ9fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1heExlbmd0aChlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgPGxhYmVsID4ge21heExlbmd0aH08L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiR2VuZXJhdGUgY29weVwiIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogXCI1MjBweFwifX0+XHJcbiAgICAgICAgICAgIDxoNCBzdHlsZT17e3RleHRBbGlnbjogXCJsZWZ0XCJ9fT4gUmVzdWx0IDwvaDQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVzdWx0fT57cmVzdWx0fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJIb21lIiwicHJvZHVjdERlcyIsInNldFByb2R1Y3REZXNjcmlwdGlvbiIsIm1heExlbmd0aCIsInNldE1heExlbmd0aCIsInJlc3VsdCIsInNldFJlc3VsdCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibWF4IiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIm1haW4iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJkaXNwbGF5Iiwid2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbkJvdHRvbSIsInRleHRBbGlnbiJdLCJzb3VyY2VSb290IjoiIn0=