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
    maxInactiveAge: 1000,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mMGQ4Mzc5MTlmYWY5ZDVmM2UyOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHLGtDQUFkO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLDZCQUFwQjtBQUVBLElBQU1DLEdBQUcsR0FBRztBQUNSRixFQUFBQSxLQUFLLEVBQUxBLEtBRFE7QUFFUkMsRUFBQUEsV0FBVyxFQUFYQSxXQUZRO0FBR1I7QUFDQUUsRUFBQUEsU0FBUyxFQUFFO0FBQ1BDLElBQUFBLElBQUksRUFBRSxTQURDO0FBRVBDLElBQUFBLE1BQU0sRUFBRSxPQUZEO0FBR1BDLElBQUFBLEdBQUcsRUFBRSwrQkFIRTtBQUlQTixJQUFBQSxLQUFLLEVBQUxBLEtBSk87QUFLUEMsSUFBQUEsV0FBVyxFQUFYQSxXQUxPO0FBTVBNLElBQUFBLE1BQU0sRUFBRSxDQUNKO0FBQ0lELE1BQUFBLEdBQUcsRUFBRSwyREFEVDtBQUVJRSxNQUFBQSxHQUFHLEVBQUVSLEtBRlQ7QUFHSVMsTUFBQUEsS0FBSyxFQUFFLEdBSFg7QUFJSUMsTUFBQUEsTUFBTSxFQUFFO0FBSlosS0FESTtBQU5ELEdBSkg7QUFvQlJDLEVBQUFBLGVBQWUsRUFBRTtBQUNiO0FBQ0FDLElBQUFBLGNBQWMsRUFBRSxJQUZIO0FBR2I7QUFDQUMsSUFBQUEsaUJBQWlCLEVBQUU7QUFKTjtBQXBCVCxDQUFaO0FBNEJBLCtEQUFlWCxHQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25leHQtc2VvLmNvbmZpZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0aXRsZSA9ICdTcG90aWZ5IE5vdyBQbGF5aW5nIHdpdGggTmV4dC5qcyc7XHJcbmNvbnN0IGRlc2NyaXB0aW9uID0gJ0Egc3BvdGlmeSBBUEkgdXNpbmcgTmV4dC5qcyc7XHJcblxyXG5jb25zdCBTRU8gPSB7XHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgLy8gY2Fub25pY2FsOiAnaHR0cHM6Ly90aGVvZG9ydXNjbGFyZW5jZS5jb20nLFxyXG4gICAgb3BlbkdyYXBoOiB7XHJcbiAgICAgICAgdHlwZTogJ3dlYnNpdGUnLFxyXG4gICAgICAgIGxvY2FsZTogJ2VuX0lFJyxcclxuICAgICAgICB1cmw6ICdodHRwczovL3RoZW9kb3J1c2NsYXJlbmNlLmNvbScsXHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vdGhlb2RvcnVzY2xhcmVuY2UuY29tL2Zhdmljb24vbXMtaWNvbi0xNDR4MTQ0LnBuZycsXHJcbiAgICAgICAgICAgICAgICBhbHQ6IHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE0NCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTQ0LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVtYW5kRW50cmllczoge1xyXG4gICAgICAgIC8vIHBlcmlvZCAoaW4gbXMpIHdoZXJlIHRoZSBzZXJ2ZXIgd2lsbCBrZWVwIHBhZ2VzIGluIHRoZSBidWZmZXJcclxuICAgICAgICBtYXhJbmFjdGl2ZUFnZTogMTAwMCxcclxuICAgICAgICAvLyBudW1iZXIgb2YgcGFnZXMgdGhhdCBzaG91bGQgYmUga2VwdCBzaW11bHRhbmVvdXNseSB3aXRob3V0IGJlaW5nIGRpc3Bvc2VkXHJcbiAgICAgICAgcGFnZXNCdWZmZXJMZW5ndGg6IDEsXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU0VPO1xyXG4iXSwibmFtZXMiOlsidGl0bGUiLCJkZXNjcmlwdGlvbiIsIlNFTyIsIm9wZW5HcmFwaCIsInR5cGUiLCJsb2NhbGUiLCJ1cmwiLCJpbWFnZXMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm9uRGVtYW5kRW50cmllcyIsIm1heEluYWN0aXZlQWdlIiwicGFnZXNCdWZmZXJMZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9