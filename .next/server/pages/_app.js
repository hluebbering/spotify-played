(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./next-seo.config.js":
/*!****************************!*\
  !*** ./next-seo.config.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const title = 'Spotify Now Playing with Next.js';
const description = 'A spotify API using Next.js';
const SEO = {
  title,
  description,
  // canonical: 'https://theodorusclarence.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://theodorusclarence.com',
    title,
    description,
    images: [{
      url: 'https://theodorusclarence.com/favicon/ms-icon-144x144.png',
      alt: title,
      width: 144,
      height: 144
    }]
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _next_seo_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../next-seo.config */ "./next-seo.config.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Hannah Luebbering\\OneDrive\\Desktop\\hluebbering.github.io\\spotify-played\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_0__.DefaultSeo, _objectSpread({}, _next_seo_config__WEBPACK_IMPORTED_MODULE_2__.default), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLEtBQUssR0FBRyxrQ0FBZDtBQUNBLE1BQU1DLFdBQVcsR0FBRyw2QkFBcEI7QUFFQSxNQUFNQyxHQUFHLEdBQUc7QUFDUkYsRUFBQUEsS0FEUTtBQUVSQyxFQUFBQSxXQUZRO0FBR1I7QUFDQUUsRUFBQUEsU0FBUyxFQUFFO0FBQ1BDLElBQUFBLElBQUksRUFBRSxTQURDO0FBRVBDLElBQUFBLE1BQU0sRUFBRSxPQUZEO0FBR1BDLElBQUFBLEdBQUcsRUFBRSwrQkFIRTtBQUlQTixJQUFBQSxLQUpPO0FBS1BDLElBQUFBLFdBTE87QUFNUE0sSUFBQUEsTUFBTSxFQUFFLENBQ0o7QUFDSUQsTUFBQUEsR0FBRyxFQUFFLDJEQURUO0FBRUlFLE1BQUFBLEdBQUcsRUFBRVIsS0FGVDtBQUdJUyxNQUFBQSxLQUFLLEVBQUUsR0FIWDtBQUlJQyxNQUFBQSxNQUFNLEVBQUU7QUFKWixLQURJO0FBTkQsR0FKSDtBQW9CUkMsRUFBQUEsZUFBZSxFQUFFO0FBQ2I7QUFDQUMsSUFBQUEsY0FBYyxFQUFFLElBRkg7QUFHYjtBQUNBQyxJQUFBQSxpQkFBaUIsRUFBRTtBQUpOO0FBcEJULENBQVo7QUE0QkEsaUVBQWVYLEdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7Ozs7QUFFQSxTQUFTYSxLQUFULENBQWU7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQTtBQUFiLENBQWYsRUFBeUM7QUFDdkMsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxnREFBRCxvQkFBZ0JmLHFEQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyxTQUFELG9CQUFlZSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBLGtCQURGO0FBTUQ7O0FBRUQsaUVBQWVGLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRWJBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXRhaWx3aW5kLXN0YXJ0ZXIvLi9uZXh0LXNlby5jb25maWcuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLXRhaWx3aW5kLXN0YXJ0ZXIvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL25leHRqcy10YWlsd2luZC1zdGFydGVyLy4vc3R5bGVzL2dsb2JhbHMuY3NzIiwid2VicGFjazovL25leHRqcy10YWlsd2luZC1zdGFydGVyL2V4dGVybmFsIFwibmV4dC1zZW9cIiIsIndlYnBhY2s6Ly9uZXh0anMtdGFpbHdpbmQtc3RhcnRlci9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRpdGxlID0gJ1Nwb3RpZnkgTm93IFBsYXlpbmcgd2l0aCBOZXh0LmpzJztcclxuY29uc3QgZGVzY3JpcHRpb24gPSAnQSBzcG90aWZ5IEFQSSB1c2luZyBOZXh0LmpzJztcclxuXHJcbmNvbnN0IFNFTyA9IHtcclxuICAgIHRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICAvLyBjYW5vbmljYWw6ICdodHRwczovL3RoZW9kb3J1c2NsYXJlbmNlLmNvbScsXHJcbiAgICBvcGVuR3JhcGg6IHtcclxuICAgICAgICB0eXBlOiAnd2Vic2l0ZScsXHJcbiAgICAgICAgbG9jYWxlOiAnZW5fSUUnLFxyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vdGhlb2RvcnVzY2xhcmVuY2UuY29tJyxcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICBpbWFnZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly90aGVvZG9ydXNjbGFyZW5jZS5jb20vZmF2aWNvbi9tcy1pY29uLTE0NHgxNDQucG5nJyxcclxuICAgICAgICAgICAgICAgIGFsdDogdGl0bGUsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTQ0LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNDQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcblxyXG4gICAgb25EZW1hbmRFbnRyaWVzOiB7XHJcbiAgICAgICAgLy8gcGVyaW9kIChpbiBtcykgd2hlcmUgdGhlIHNlcnZlciB3aWxsIGtlZXAgcGFnZXMgaW4gdGhlIGJ1ZmZlclxyXG4gICAgICAgIG1heEluYWN0aXZlQWdlOiAxMDAwLFxyXG4gICAgICAgIC8vIG51bWJlciBvZiBwYWdlcyB0aGF0IHNob3VsZCBiZSBrZXB0IHNpbXVsdGFuZW91c2x5IHdpdGhvdXQgYmVpbmcgZGlzcG9zZWRcclxuICAgICAgICBwYWdlc0J1ZmZlckxlbmd0aDogMSxcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTRU87XHJcbiIsImltcG9ydCB7IERlZmF1bHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0IFNFTyBmcm9tICcuLi9uZXh0LXNlby5jb25maWcnO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxEZWZhdWx0U2VvIHsuLi5TRU99IC8+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXNlb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInRpdGxlIiwiZGVzY3JpcHRpb24iLCJTRU8iLCJvcGVuR3JhcGgiLCJ0eXBlIiwibG9jYWxlIiwidXJsIiwiaW1hZ2VzIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJvbkRlbWFuZEVudHJpZXMiLCJtYXhJbmFjdGl2ZUFnZSIsInBhZ2VzQnVmZmVyTGVuZ3RoIiwiRGVmYXVsdFNlbyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==