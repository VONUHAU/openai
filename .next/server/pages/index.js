(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\openai-quickstart-node\\pages\\index.js";




function Home() {
  const {
    0: productDes,
    1: setProductDescription
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: maxLength,
    1: setMaxLength
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(260);
  const {
    0: result,
    1: setResult
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        productDes,
        max: maxLength
      })
    });
    const data = await response.json();
    setResult(data.result);
    setProductDescription(result);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("title", {
        children: "OpenAI Quickstart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("main", {
      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
        children: "Copy Suggestion"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
        onSubmit: onSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("textarea", {
          rows: 6,
          type: "text",
          name: "productDes",
          placeholder: "Describe your product/service",
          value: productDes,
          onChange: e => setProductDescription(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          style: {
            marginTop: 0
          },
          children: " Maximum length"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          style: {
            display: "flex",
            width: "100%",
            justifyContent: "space-between"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
            type: "range",
            name: "max",
            min: "50",
            max: "400",
            class: "slider",
            value: maxLength,
            style: {
              marginBottom: "24px",
              width: "90%"
            },
            onChange: e => setMaxLength(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        style: {
          width: "520px"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
          style: {
            textAlign: "left"
          },
          children: " Result "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().result),
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

/***/ }),

/***/ "./pages/index.module.css":
/*!********************************!*\
  !*** ./pages/index.module.css ***!
  \********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"main": "index_main___Ajca",
	"icon": "index_icon__2FeAx",
	"result": "index_result__QuWa4"
};


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEYsZUF1QkU7QUFBTyxjQUFJLEVBQUMsUUFBWjtBQUFxQixlQUFLLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUE0QkU7QUFBSyxhQUFLLEVBQUU7QUFBQ3VCLFVBQUFBLEtBQUssRUFBRTtBQUFSLFNBQVo7QUFBQSxnQ0FDSTtBQUFJLGVBQUssRUFBRTtBQUFDRyxZQUFBQSxTQUFTLEVBQUU7QUFBWixXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBSyxtQkFBUyxFQUFFOUIsaUVBQWhCO0FBQUEsb0JBQWdDTTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJDRDs7Ozs7Ozs7OztBQ2xFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BlbmFpLXF1aWNrc3RhcnQtbm9kZS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL29wZW5haS1xdWlja3N0YXJ0LW5vZGUvLi9wYWdlcy9pbmRleC5tb2R1bGUuY3NzIiwid2VicGFjazovL29wZW5haS1xdWlja3N0YXJ0LW5vZGUvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9vcGVuYWktcXVpY2tzdGFydC1ub2RlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9vcGVuYWktcXVpY2tzdGFydC1ub2RlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3Byb2R1Y3REZXMsIHNldFByb2R1Y3REZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbWF4TGVuZ3RoLCBzZXRNYXhMZW5ndGhdID0gdXNlU3RhdGUoMjYwKTtcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZVwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwcm9kdWN0RGVzLCBtYXg6IG1heExlbmd0aH0pLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgc2V0UmVzdWx0KGRhdGEucmVzdWx0KTtcclxuICAgIHNldFByb2R1Y3REZXNjcmlwdGlvbihyZXN1bHQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5PcGVuQUkgUXVpY2tzdGFydDwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgIFxyXG4gICAgICAgIDxoMz5Db3B5IFN1Z2dlc3Rpb248L2gzPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgcm93cyA9IHs2fVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0RGVzXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmliZSB5b3VyIHByb2R1Y3Qvc2VydmljZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0RGVzfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByb2R1Y3REZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDxwIHN0eWxlPXt7bWFyZ2luVG9wOiAwfX0+IE1heGltdW0gbGVuZ3RoPC9wPlxyXG5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgd2lkdGg6IFwiMTAwJVwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCJ9fT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBuYW1lPVwibWF4XCJcclxuICAgICAgICAgICAgbWluPVwiNTBcIiBtYXg9XCI0MDBcIlxyXG4gICAgICAgICAgICBjbGFzcz1cInNsaWRlclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXttYXhMZW5ndGh9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiBcIjI0cHhcIiwgd2lkdGg6IFwiOTAlXCJ9fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1heExlbmd0aChlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgPGxhYmVsID4ge21heExlbmd0aH08L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiR2VuZXJhdGUgY29weVwiIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogXCI1MjBweFwifX0+XHJcbiAgICAgICAgICAgIDxoNCBzdHlsZT17e3RleHRBbGlnbjogXCJsZWZ0XCJ9fT4gUmVzdWx0IDwvaDQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVzdWx0fT57cmVzdWx0fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJpbmRleF9tYWluX19fQWpjYVwiLFxuXHRcImljb25cIjogXCJpbmRleF9pY29uX18yRmVBeFwiLFxuXHRcInJlc3VsdFwiOiBcImluZGV4X3Jlc3VsdF9fUXVXYTRcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkhvbWUiLCJwcm9kdWN0RGVzIiwic2V0UHJvZHVjdERlc2NyaXB0aW9uIiwibWF4TGVuZ3RoIiwic2V0TWF4TGVuZ3RoIiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1heCIsImRhdGEiLCJqc29uIiwibWFpbiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcmdpblRvcCIsImRpc3BsYXkiLCJ3aWR0aCIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luQm90dG9tIiwidGV4dEFsaWduIl0sInNvdXJjZVJvb3QiOiIifQ==