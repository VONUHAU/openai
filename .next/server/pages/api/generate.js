"use strict";
(() => {
var exports = {};
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ "openai");
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);

const configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);
/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
  console.log(req.body.max);
  const completion = await openai.createCompletion("text-davinci-002", {
    prompt: generatePrompt(req.body.productDes, req.body.max),
    temperature: 0.8,
    max_tokens: Math.round(req.body.max / 4)
  });
  res.status(200).json({
    result: completion.data.choices[0].text
  });
}

function generatePrompt(product, max = 40) {
  return `Suggest three line primary messages for the description of the product/service that win the advertising campaign with the maximum characters for each line is ${max}
  Product/Service description: Tennis shoes, Creating an accelerated response with a natural close-to-the-ground feel, implementing a torque control feature in the heel counter, this shoe is also designed to help maintain a locked in feel during quick transitions
  Copy Suggestion:  Find your perfect tennis shoe, Don't miss your perfect tennis shoe, Baseline All Court Best of both
  Product/Service description: We believe in making Candles, Reed Diffusers and Skincare items that we, ourselves, use in our homes – that are kind to our skin and our minds. Our Home Fragrance range is based on a range of aromatherapy oils carefully blended to deliver different therapeutic qualities to help your health and well-being.We use all-natural, pure, plant-based ingredients and aromatherapy oils to ensure our Home Fragrance products smell more authentic, last longer and work better than other products on the market
  Copy Suggestion: The scent is beyond beautiful, My house smells like a spa, Gorgeous long-lasting scents
  Product description: ${product}
  Copy Suggestion:`;
}

/***/ }),

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2dlbmVyYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1FLGFBQWEsR0FBRyxJQUFJRixpREFBSixDQUFrQjtBQUN0Q0csRUFBQUEsTUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUM7QUFEa0IsQ0FBbEIsQ0FBdEI7QUFHQSxNQUFNQyxNQUFNLEdBQUcsSUFBSU4sNkNBQUosQ0FBY0MsYUFBZCxDQUFmO0FBRUEsNkJBQWUsMENBQWdCTSxHQUFoQixFQUFxQkMsR0FBckIsRUFBMEI7QUFDdkNDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFHLENBQUNJLElBQUosQ0FBU0MsR0FBckI7QUFDQSxRQUFNQyxVQUFVLEdBQUcsTUFBTVAsTUFBTSxDQUFDUSxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEM7QUFDbkVDLElBQUFBLE1BQU0sRUFBRUMsY0FBYyxDQUFDVCxHQUFHLENBQUNJLElBQUosQ0FBU00sVUFBVixFQUFzQlYsR0FBRyxDQUFDSSxJQUFKLENBQVNDLEdBQS9CLENBRDZDO0FBRW5FTSxJQUFBQSxXQUFXLEVBQUUsR0FGc0Q7QUFHbkVDLElBQUFBLFVBQVUsRUFBRUMsSUFBSSxDQUFDQyxLQUFMLENBQVdkLEdBQUcsQ0FBQ0ksSUFBSixDQUFTQyxHQUFULEdBQWEsQ0FBeEI7QUFIdUQsR0FBNUMsQ0FBekI7QUFLQUosRUFBQUEsR0FBRyxDQUFDYyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsSUFBQUEsTUFBTSxFQUFFWCxVQUFVLENBQUNZLElBQVgsQ0FBZ0JDLE9BQWhCLENBQXdCLENBQXhCLEVBQTJCQztBQUFyQyxHQUFyQjtBQUNEOztBQUVELFNBQVNYLGNBQVQsQ0FBd0JZLE9BQXhCLEVBQWlDaEIsR0FBRyxHQUFHLEVBQXZDLEVBQTJDO0FBQ3pDLFNBQVEsaUtBQWdLQSxHQUFJO0FBQzlLO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCZ0IsT0FBUTtBQUNqQyxtQkFORTtBQU9EOzs7Ozs7Ozs7O0FDekJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BlbmFpLXF1aWNrc3RhcnQtbm9kZS8uL3BhZ2VzL2FwaS9nZW5lcmF0ZS5qcyIsIndlYnBhY2s6Ly9vcGVuYWktcXVpY2tzdGFydC1ub2RlL2V4dGVybmFsIFwib3BlbmFpXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSBcIm9wZW5haVwiO1xyXG5cclxuY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxyXG59KTtcclxuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG4gIGNvbnNvbGUubG9nKHJlcS5ib2R5Lm1heClcclxuICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgb3BlbmFpLmNyZWF0ZUNvbXBsZXRpb24oXCJ0ZXh0LWRhdmluY2ktMDAyXCIsIHtcclxuICAgIHByb21wdDogZ2VuZXJhdGVQcm9tcHQocmVxLmJvZHkucHJvZHVjdERlcywgcmVxLmJvZHkubWF4KSxcclxuICAgIHRlbXBlcmF0dXJlOiAwLjgsXHJcbiAgICBtYXhfdG9rZW5zOiBNYXRoLnJvdW5kKHJlcS5ib2R5Lm1heC80KVxyXG4gIH0pO1xyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcmVzdWx0OiBjb21wbGV0aW9uLmRhdGEuY2hvaWNlc1swXS50ZXh0IH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVByb21wdChwcm9kdWN0LCBtYXggPSA0MCkge1xyXG4gIHJldHVybiBgU3VnZ2VzdCB0aHJlZSBsaW5lIHByaW1hcnkgbWVzc2FnZXMgZm9yIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvZHVjdC9zZXJ2aWNlIHRoYXQgd2luIHRoZSBhZHZlcnRpc2luZyBjYW1wYWlnbiB3aXRoIHRoZSBtYXhpbXVtIGNoYXJhY3RlcnMgZm9yIGVhY2ggbGluZSBpcyAke21heH1cclxuICBQcm9kdWN0L1NlcnZpY2UgZGVzY3JpcHRpb246IFRlbm5pcyBzaG9lcywgQ3JlYXRpbmcgYW4gYWNjZWxlcmF0ZWQgcmVzcG9uc2Ugd2l0aCBhIG5hdHVyYWwgY2xvc2UtdG8tdGhlLWdyb3VuZCBmZWVsLCBpbXBsZW1lbnRpbmcgYSB0b3JxdWUgY29udHJvbCBmZWF0dXJlIGluIHRoZSBoZWVsIGNvdW50ZXIsIHRoaXMgc2hvZSBpcyBhbHNvIGRlc2lnbmVkIHRvIGhlbHAgbWFpbnRhaW4gYSBsb2NrZWQgaW4gZmVlbCBkdXJpbmcgcXVpY2sgdHJhbnNpdGlvbnNcclxuICBDb3B5IFN1Z2dlc3Rpb246ICBGaW5kIHlvdXIgcGVyZmVjdCB0ZW5uaXMgc2hvZSwgRG9uJ3QgbWlzcyB5b3VyIHBlcmZlY3QgdGVubmlzIHNob2UsIEJhc2VsaW5lIEFsbCBDb3VydCBCZXN0IG9mIGJvdGhcclxuICBQcm9kdWN0L1NlcnZpY2UgZGVzY3JpcHRpb246IFdlIGJlbGlldmUgaW4gbWFraW5nIENhbmRsZXMsIFJlZWQgRGlmZnVzZXJzIGFuZCBTa2luY2FyZSBpdGVtcyB0aGF0IHdlLCBvdXJzZWx2ZXMsIHVzZSBpbiBvdXIgaG9tZXMg4oCTIHRoYXQgYXJlIGtpbmQgdG8gb3VyIHNraW4gYW5kIG91ciBtaW5kcy4gT3VyIEhvbWUgRnJhZ3JhbmNlIHJhbmdlIGlzIGJhc2VkIG9uIGEgcmFuZ2Ugb2YgYXJvbWF0aGVyYXB5IG9pbHMgY2FyZWZ1bGx5IGJsZW5kZWQgdG8gZGVsaXZlciBkaWZmZXJlbnQgdGhlcmFwZXV0aWMgcXVhbGl0aWVzIHRvIGhlbHAgeW91ciBoZWFsdGggYW5kIHdlbGwtYmVpbmcuV2UgdXNlIGFsbC1uYXR1cmFsLCBwdXJlLCBwbGFudC1iYXNlZCBpbmdyZWRpZW50cyBhbmQgYXJvbWF0aGVyYXB5IG9pbHMgdG8gZW5zdXJlIG91ciBIb21lIEZyYWdyYW5jZSBwcm9kdWN0cyBzbWVsbCBtb3JlIGF1dGhlbnRpYywgbGFzdCBsb25nZXIgYW5kIHdvcmsgYmV0dGVyIHRoYW4gb3RoZXIgcHJvZHVjdHMgb24gdGhlIG1hcmtldFxyXG4gIENvcHkgU3VnZ2VzdGlvbjogVGhlIHNjZW50IGlzIGJleW9uZCBiZWF1dGlmdWwsIE15IGhvdXNlIHNtZWxscyBsaWtlIGEgc3BhLCBHb3JnZW91cyBsb25nLWxhc3Rpbmcgc2NlbnRzXHJcbiAgUHJvZHVjdCBkZXNjcmlwdGlvbjogJHtwcm9kdWN0fVxyXG4gIENvcHkgU3VnZ2VzdGlvbjpgO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib3BlbmFpXCIpOyJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwiT3BlbkFJQXBpIiwiY29uZmlndXJhdGlvbiIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsIm9wZW5haSIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwibWF4IiwiY29tcGxldGlvbiIsImNyZWF0ZUNvbXBsZXRpb24iLCJwcm9tcHQiLCJnZW5lcmF0ZVByb21wdCIsInByb2R1Y3REZXMiLCJ0ZW1wZXJhdHVyZSIsIm1heF90b2tlbnMiLCJNYXRoIiwicm91bmQiLCJzdGF0dXMiLCJqc29uIiwicmVzdWx0IiwiZGF0YSIsImNob2ljZXMiLCJ0ZXh0IiwicHJvZHVjdCJdLCJzb3VyY2VSb290IjoiIn0=