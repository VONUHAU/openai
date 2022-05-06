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
      productDescription = _useState[0],
      setProductDescription = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("40"),
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
                  animal: productDescription
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
        href: "/dog.png"
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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "text",
          name: "animal",
          placeholder: "Description your product/service",
          value: productDescription,
          onChange: function onChange(e) {
            return setProductDescription(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "range",
          name: "max",
          min: "10",
          max: "150",
          value: maxLength,
          style: {
            marginBottom: "24px"
          },
          onChange: function onChange(e) {
            return setMaxLength(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "submit",
          value: "Generate names"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        style: {
          width: "320px"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h4", {
          style: {
            textAlign: "left"
          },
          children: " Result "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
          children: [" ", maxLength]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 55
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().result),
        children: result
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
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

_s(Home, "dXd0ax2didkMFFdYS7cLhPZEGa0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjg4MGU4MjM3MzY0ZjUxNjAzYmQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVlLFNBQVNHLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0Isa0JBQW9ERiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUQ7QUFBQSxNQUFPRyxrQkFBUDtBQUFBLE1BQTJCQyxxQkFBM0I7O0FBQ0EsbUJBQWtDSiwrQ0FBUSxDQUFDLElBQUQsQ0FBMUM7QUFBQSxNQUFPSyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUE0Qk4sK0NBQVEsRUFBcEM7QUFBQSxNQUFPTyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFINkIsV0FLZEMsUUFMYztBQUFBO0FBQUE7O0FBQUE7QUFBQSxvUUFLN0IsaUJBQXdCQyxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUEsY0FBQUEsS0FBSyxDQUFDQyxjQUFOO0FBREY7QUFBQSxxQkFFeUJDLEtBQUssQ0FBQyxlQUFELEVBQWtCO0FBQzVDQyxnQkFBQUEsTUFBTSxFQUFFLE1BRG9DO0FBRTVDQyxnQkFBQUEsT0FBTyxFQUFFO0FBQ1Asa0NBQWdCO0FBRFQsaUJBRm1DO0FBSzVDQyxnQkFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFQyxrQkFBQUEsTUFBTSxFQUFFZjtBQUFWLGlCQUFmO0FBTHNDLGVBQWxCLENBRjlCOztBQUFBO0FBRVFnQixjQUFBQSxRQUZSO0FBQUE7QUFBQSxxQkFTcUJBLFFBQVEsQ0FBQ0MsSUFBVCxFQVRyQjs7QUFBQTtBQVNRQyxjQUFBQSxJQVRSO0FBVUViLGNBQUFBLFNBQVMsQ0FBQ2EsSUFBSSxDQUFDZCxNQUFOLENBQVQ7QUFDQUgsY0FBQUEscUJBQXFCLENBQUMsRUFBRCxDQUFyQjs7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUw2QjtBQUFBO0FBQUE7O0FBbUI3QixzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FO0FBQU0sZUFBUyxFQUFFSCwrREFBakI7QUFBQSw4QkFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBTSxnQkFBUSxFQUFFUSxRQUFoQjtBQUFBLGdDQUNFO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxjQUFJLEVBQUMsUUFGUDtBQUdFLHFCQUFXLEVBQUMsa0NBSGQ7QUFJRSxlQUFLLEVBQUVOLGtCQUpUO0FBS0Usa0JBQVEsRUFBRSxrQkFBQ29CLENBQUQ7QUFBQSxtQkFBT25CLHFCQUFxQixDQUFDbUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBNUI7QUFBQTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFRRTtBQUFPLGNBQUksRUFBQyxPQUFaO0FBQW9CLGNBQUksRUFBQyxLQUF6QjtBQUNBLGFBQUcsRUFBQyxJQURKO0FBQ1MsYUFBRyxFQUFDLEtBRGI7QUFFQSxlQUFLLEVBQUVwQixTQUZQO0FBR0EsZUFBSyxFQUFFO0FBQUNxQixZQUFBQSxZQUFZLEVBQUU7QUFBZixXQUhQO0FBSUEsa0JBQVEsRUFBRSxrQkFBQ0gsQ0FBRDtBQUFBLG1CQUFPakIsWUFBWSxDQUFDaUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbkI7QUFBQTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkYsZUFjRTtBQUFPLGNBQUksRUFBQyxRQUFaO0FBQXFCLGVBQUssRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBbUJFO0FBQUssYUFBSyxFQUFFO0FBQUNFLFVBQUFBLEtBQUssRUFBRTtBQUFSLFNBQVo7QUFBQSxnQ0FFQTtBQUFJLGVBQUssRUFBRTtBQUFDQyxZQUFBQSxTQUFTLEVBQUU7QUFBWixXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZBLG9CQUU4QztBQUFBLDBCQUFRdkIsU0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRjlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5CRixlQXVCRTtBQUFLLGlCQUFTLEVBQUVKLGlFQUFoQjtBQUFBLGtCQUFnQ007QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtDRDs7R0FyRHVCTDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3Byb2R1Y3REZXNjcmlwdGlvbiwgc2V0UHJvZHVjdERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttYXhMZW5ndGgsIHNldE1heExlbmd0aF0gPSB1c2VTdGF0ZShcIjQwXCIpO1xyXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2dlbmVyYXRlXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGFuaW1hbDogcHJvZHVjdERlc2NyaXB0aW9uIH0pLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgc2V0UmVzdWx0KGRhdGEucmVzdWx0KTtcclxuICAgIHNldFByb2R1Y3REZXNjcmlwdGlvbihcIlwiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+T3BlbkFJIFF1aWNrc3RhcnQ8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2RvZy5wbmdcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgIFxyXG4gICAgICAgIDxoMz5TdWdnZXNzIGNvcHkgbWVzc2FnZTwvaDM+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJhbmltYWxcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uIHlvdXIgcHJvZHVjdC9zZXJ2aWNlXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3REZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcm9kdWN0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBuYW1lPVwibWF4XCJcclxuICAgICAgICAgIG1pbj1cIjEwXCIgbWF4PVwiMTUwXCJcclxuICAgICAgICAgIHZhbHVlPXttYXhMZW5ndGh9XHJcbiAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogXCIyNHB4XCJ9fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNYXhMZW5ndGgoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkdlbmVyYXRlIG5hbWVzXCIgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjMyMHB4XCJ9fT5cclxuXHJcbiAgICAgICAgPGg0IHN0eWxlPXt7dGV4dEFsaWduOiBcImxlZnRcIn19PiBSZXN1bHQgPC9oND4gPHNwYW4+IHttYXhMZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVzdWx0fT57cmVzdWx0fTwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJIb21lIiwicHJvZHVjdERlc2NyaXB0aW9uIiwic2V0UHJvZHVjdERlc2NyaXB0aW9uIiwibWF4TGVuZ3RoIiwic2V0TWF4TGVuZ3RoIiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhbmltYWwiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwibWFpbiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcmdpbkJvdHRvbSIsIndpZHRoIiwidGV4dEFsaWduIl0sInNvdXJjZVJvb3QiOiIifQ==