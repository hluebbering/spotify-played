"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./next-seo.config.js":
/*!****************************!*\
  !*** ./next-seo.config.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* module decorator */ module = __webpack_require__.hmd(module);
var title = 'Spotify Now Playing with Next.js';
var description = 'A spotify API using Next.js';
var SEO = {
  title: title,
  description: description,
  // canonical: 'https://theodorusclarence.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://theodorusclarence.com',
    title: title,
    description: description,
    images: [{
      url: 'https://theodorusclarence.com/favicon/ms-icon-144x144.png',
      alt: title,
      width: 144,
      height: 144
    }]
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 10 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 1
  }
};
/* harmony default export */ __webpack_exports__["default"] = (SEO);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iMGViZjE4NzY4NGYyMmNlZTRiZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHLGtDQUFkO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLDZCQUFwQjtBQUVBLElBQU1DLEdBQUcsR0FBRztBQUNSRixFQUFBQSxLQUFLLEVBQUxBLEtBRFE7QUFFUkMsRUFBQUEsV0FBVyxFQUFYQSxXQUZRO0FBR1I7QUFDQUUsRUFBQUEsU0FBUyxFQUFFO0FBQ1BDLElBQUFBLElBQUksRUFBRSxTQURDO0FBRVBDLElBQUFBLE1BQU0sRUFBRSxPQUZEO0FBR1BDLElBQUFBLEdBQUcsRUFBRSwrQkFIRTtBQUlQTixJQUFBQSxLQUFLLEVBQUxBLEtBSk87QUFLUEMsSUFBQUEsV0FBVyxFQUFYQSxXQUxPO0FBTVBNLElBQUFBLE1BQU0sRUFBRSxDQUNKO0FBQ0lELE1BQUFBLEdBQUcsRUFBRSwyREFEVDtBQUVJRSxNQUFBQSxHQUFHLEVBQUVSLEtBRlQ7QUFHSVMsTUFBQUEsS0FBSyxFQUFFLEdBSFg7QUFJSUMsTUFBQUEsTUFBTSxFQUFFO0FBSlosS0FESTtBQU5ELEdBSkg7QUFvQlJDLEVBQUFBLGVBQWUsRUFBRTtBQUNiO0FBQ0FDLElBQUFBLGNBQWMsRUFBRSxLQUFLLElBRlI7QUFHYjtBQUNBQyxJQUFBQSxpQkFBaUIsRUFBRTtBQUpOO0FBcEJULENBQVo7QUE0QkEsK0RBQWVYLEdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbmV4dC1zZW8uY29uZmlnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRpdGxlID0gJ1Nwb3RpZnkgTm93IFBsYXlpbmcgd2l0aCBOZXh0LmpzJztcclxuY29uc3QgZGVzY3JpcHRpb24gPSAnQSBzcG90aWZ5IEFQSSB1c2luZyBOZXh0LmpzJztcclxuXHJcbmNvbnN0IFNFTyA9IHtcclxuICAgIHRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICAvLyBjYW5vbmljYWw6ICdodHRwczovL3RoZW9kb3J1c2NsYXJlbmNlLmNvbScsXHJcbiAgICBvcGVuR3JhcGg6IHtcclxuICAgICAgICB0eXBlOiAnd2Vic2l0ZScsXHJcbiAgICAgICAgbG9jYWxlOiAnZW5fSUUnLFxyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vdGhlb2RvcnVzY2xhcmVuY2UuY29tJyxcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICBpbWFnZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly90aGVvZG9ydXNjbGFyZW5jZS5jb20vZmF2aWNvbi9tcy1pY29uLTE0NHgxNDQucG5nJyxcclxuICAgICAgICAgICAgICAgIGFsdDogdGl0bGUsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTQ0LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNDQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcblxyXG4gICAgb25EZW1hbmRFbnRyaWVzOiB7XHJcbiAgICAgICAgLy8gcGVyaW9kIChpbiBtcykgd2hlcmUgdGhlIHNlcnZlciB3aWxsIGtlZXAgcGFnZXMgaW4gdGhlIGJ1ZmZlclxyXG4gICAgICAgIG1heEluYWN0aXZlQWdlOiAxMCAqIDEwMDAsXHJcbiAgICAgICAgLy8gbnVtYmVyIG9mIHBhZ2VzIHRoYXQgc2hvdWxkIGJlIGtlcHQgc2ltdWx0YW5lb3VzbHkgd2l0aG91dCBiZWluZyBkaXNwb3NlZFxyXG4gICAgICAgIHBhZ2VzQnVmZmVyTGVuZ3RoOiAxLFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNFTztcclxuIl0sIm5hbWVzIjpbInRpdGxlIiwiZGVzY3JpcHRpb24iLCJTRU8iLCJvcGVuR3JhcGgiLCJ0eXBlIiwibG9jYWxlIiwidXJsIiwiaW1hZ2VzIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJvbkRlbWFuZEVudHJpZXMiLCJtYXhJbmFjdGl2ZUFnZSIsInBhZ2VzQnVmZmVyTGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==