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
            marginBottom: "24px",
            display: "inline"
          },
          onChange: function onChange(e) {
            return setMaxLength(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), "   ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
          children: [" ", maxLength]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 62
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "submit",
          value: "Generate names"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
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
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h4", {
          style: {
            textAlign: "left"
          },
          children: " Result "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().result),
        children: result
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTk3NWE3MzFlMWU2NTU3NTYxYWEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVlLFNBQVNHLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0Isa0JBQW9ERiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUQ7QUFBQSxNQUFPRyxrQkFBUDtBQUFBLE1BQTJCQyxxQkFBM0I7O0FBQ0EsbUJBQWtDSiwrQ0FBUSxDQUFDLElBQUQsQ0FBMUM7QUFBQSxNQUFPSyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUE0Qk4sK0NBQVEsRUFBcEM7QUFBQSxNQUFPTyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFINkIsV0FLZEMsUUFMYztBQUFBO0FBQUE7O0FBQUE7QUFBQSxvUUFLN0IsaUJBQXdCQyxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUEsY0FBQUEsS0FBSyxDQUFDQyxjQUFOO0FBREY7QUFBQSxxQkFFeUJDLEtBQUssQ0FBQyxlQUFELEVBQWtCO0FBQzVDQyxnQkFBQUEsTUFBTSxFQUFFLE1BRG9DO0FBRTVDQyxnQkFBQUEsT0FBTyxFQUFFO0FBQ1Asa0NBQWdCO0FBRFQsaUJBRm1DO0FBSzVDQyxnQkFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFQyxrQkFBQUEsTUFBTSxFQUFFZjtBQUFWLGlCQUFmO0FBTHNDLGVBQWxCLENBRjlCOztBQUFBO0FBRVFnQixjQUFBQSxRQUZSO0FBQUE7QUFBQSxxQkFTcUJBLFFBQVEsQ0FBQ0MsSUFBVCxFQVRyQjs7QUFBQTtBQVNRQyxjQUFBQSxJQVRSO0FBVUViLGNBQUFBLFNBQVMsQ0FBQ2EsSUFBSSxDQUFDZCxNQUFOLENBQVQ7QUFDQUgsY0FBQUEscUJBQXFCLENBQUMsRUFBRCxDQUFyQjs7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUw2QjtBQUFBO0FBQUE7O0FBbUI3QixzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FO0FBQU0sZUFBUyxFQUFFSCwrREFBakI7QUFBQSw4QkFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBTSxnQkFBUSxFQUFFUSxRQUFoQjtBQUFBLGdDQUNFO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxjQUFJLEVBQUMsUUFGUDtBQUdFLHFCQUFXLEVBQUMsa0NBSGQ7QUFJRSxlQUFLLEVBQUVOLGtCQUpUO0FBS0Usa0JBQVEsRUFBRSxrQkFBQ29CLENBQUQ7QUFBQSxtQkFBT25CLHFCQUFxQixDQUFDbUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBNUI7QUFBQTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFTRTtBQUFPLGNBQUksRUFBQyxPQUFaO0FBQW9CLGNBQUksRUFBQyxLQUF6QjtBQUNBLGFBQUcsRUFBQyxJQURKO0FBQ1MsYUFBRyxFQUFDLEtBRGI7QUFFQSxlQUFLLEVBQUVwQixTQUZQO0FBR0EsZUFBSyxFQUFFO0FBQUNxQixZQUFBQSxZQUFZLEVBQUUsTUFBZjtBQUF1QkMsWUFBQUEsT0FBTyxFQUFFO0FBQWhDLFdBSFA7QUFJQSxrQkFBUSxFQUFFLGtCQUFDSixDQUFEO0FBQUEsbUJBQU9qQixZQUFZLENBQUNpQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFuQjtBQUFBO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURixzQkFhcUQ7QUFBQSwwQkFBU3BCLFNBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJyRCxlQWVFO0FBQU8sY0FBSSxFQUFDLFFBQVo7QUFBcUIsZUFBSyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFvQkU7QUFBSyxhQUFLLEVBQUU7QUFBQ3VCLFVBQUFBLEtBQUssRUFBRTtBQUFSLFNBQVo7QUFBQSwrQkFFQTtBQUFJLGVBQUssRUFBRTtBQUFDQyxZQUFBQSxTQUFTLEVBQUU7QUFBWixXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBCRixlQXdCRTtBQUFLLGlCQUFTLEVBQUU1QixpRUFBaEI7QUFBQSxrQkFBZ0NNO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQ0Q7O0dBdER1Qkw7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtwcm9kdWN0RGVzY3JpcHRpb24sIHNldFByb2R1Y3REZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbWF4TGVuZ3RoLCBzZXRNYXhMZW5ndGhdID0gdXNlU3RhdGUoXCI0MFwiKTtcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZVwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBhbmltYWw6IHByb2R1Y3REZXNjcmlwdGlvbiB9KSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHNldFJlc3VsdChkYXRhLnJlc3VsdCk7XHJcbiAgICBzZXRQcm9kdWN0RGVzY3JpcHRpb24oXCJcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk9wZW5BSSBRdWlja3N0YXJ0PC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9kb2cucG5nXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICBcclxuICAgICAgICA8aDM+U3VnZ2VzcyBjb3B5IG1lc3NhZ2U8L2gzPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiYW5pbWFsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbiB5b3VyIHByb2R1Y3Qvc2VydmljZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0RGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvZHVjdERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBuYW1lPVwibWF4XCJcclxuICAgICAgICAgIG1pbj1cIjEwXCIgbWF4PVwiMTUwXCJcclxuICAgICAgICAgIHZhbHVlPXttYXhMZW5ndGh9XHJcbiAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogXCIyNHB4XCIsIGRpc3BsYXk6IFwiaW5saW5lXCJ9fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNYXhMZW5ndGgoZS50YXJnZXQudmFsdWUpfS8+ICAgPGxhYmVsPiB7bWF4TGVuZ3RofTwvbGFiZWw+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkdlbmVyYXRlIG5hbWVzXCIgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjMyMHB4XCJ9fT5cclxuXHJcbiAgICAgICAgPGg0IHN0eWxlPXt7dGV4dEFsaWduOiBcImxlZnRcIn19PiBSZXN1bHQgPC9oND5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlc3VsdH0+e3Jlc3VsdH08L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSG9tZSIsInByb2R1Y3REZXNjcmlwdGlvbiIsInNldFByb2R1Y3REZXNjcmlwdGlvbiIsIm1heExlbmd0aCIsInNldE1heExlbmd0aCIsInJlc3VsdCIsInNldFJlc3VsdCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYW5pbWFsIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIm1haW4iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5Iiwid2lkdGgiLCJ0ZXh0QWxpZ24iXSwic291cmNlUm9vdCI6IiJ9