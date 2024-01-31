"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/core/dist/index.mjs");
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/si */ "./node_modules/react-icons/si/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Hannah Luebbering\\OneDrive\\Desktop\\hluebbering.github.io\\spotify-played\\pages\\index.jsx",
    _s = $RefreshSig$();






function Home() {
  _s();

  var fetcher = function fetcher(url) {
    return fetch(url).then(function (r) {
      return r.json();
    });
  };

  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_1__.default)("/api/spotify", fetcher),
      data = _useSWR.data;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_0__.NextSeo, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("section", {
      className: "",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("main", {
        className: "flex flex-col items-center justify-center min-h-screen space-y-3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "w-bg",
          children: data !== null && data !== void 0 && data.isPlaying ?
          /*#__PURE__*/
          // eslint-disable-next-line @next/next/no-img-element
          (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
            className: "w-img",
            src: data === null || data === void 0 ? void 0 : data.albumImageUrl,
            alt: data === null || data === void 0 ? void 0 : data.album
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 15
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_si__WEBPACK_IMPORTED_MODULE_3__.SiSpotify, {
            size: 64,
            color: "#1ED760"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
            className: "text-center",
            children: "Spotify Now Playing using Next.js"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            className: "text-center",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
              target: "_blank",
              rel: "noreferer noreferrer",
              href: "https://theodorusclarence.com/blog/spotify-now-playing",
              className: "underline hover:text-blue-500",
              children: "Check the blog"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
          target: "_blank",
          rel: "noopener noreferer noreferrer",
          href: data !== null && data !== void 0 && data.isPlaying ? data.songUrl : "https://open.spotify.com/user/hannahluebbering?si=082d19adc54d42ca",
          className: "container relative flex items-center p-5 space-x-4 transition-shadow border rounded-md hover:shadow-md w-72",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "w-16",
            children: data !== null && data !== void 0 && data.isPlaying ?
            /*#__PURE__*/
            // eslint-disable-next-line @next/next/no-img-element
            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
              className: "w-16 shadow-sm",
              src: data === null || data === void 0 ? void 0 : data.albumImageUrl,
              alt: data === null || data === void 0 ? void 0 : data.album
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 17
            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_si__WEBPACK_IMPORTED_MODULE_3__.SiSpotify, {
              size: 64,
              color: "#1ED760"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "flex-1",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
              className: "font-bold component",
              children: data !== null && data !== void 0 && data.isPlaying ? data.title : "Not Listening"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
              className: "text-xs font-dark",
              children: data !== null && data !== void 0 && data.isPlaying ? data.artist : "Spotify"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "absolute bottom-1.5 right-1.5",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_si__WEBPACK_IMPORTED_MODULE_3__.SiSpotify, {
              size: 20,
              color: "#1ED760"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Home, "Bw9uScf/xQBWZKhLCWSR33xISM4=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_1__.default];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjdlMmUzZjg1ZWFkYTA4ZTE0MTUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFZSxTQUFTRyxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQ7QUFBQSxXQUFTQyxLQUFLLENBQUNELEdBQUQsQ0FBTCxDQUFXRSxJQUFYLENBQWdCLFVBQUNDLENBQUQ7QUFBQSxhQUFPQSxDQUFDLENBQUNDLElBQUYsRUFBUDtBQUFBLEtBQWhCLENBQVQ7QUFBQSxHQUFoQjs7QUFDQSxnQkFBaUJSLDRDQUFNLENBQUMsY0FBRCxFQUFpQkcsT0FBakIsQ0FBdkI7QUFBQSxNQUFRTSxJQUFSLFdBQVFBLElBQVI7O0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFTLGVBQVMsRUFBQyxFQUFuQjtBQUFBLDZCQUNFO0FBQU0saUJBQVMsRUFBQyxrRUFBaEI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsTUFBZjtBQUFBLG9CQUNHQSxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLElBQUFBLElBQUksQ0FBRUMsU0FBTjtBQUFBO0FBQ0M7QUFDQTtBQUNFLHFCQUFTLEVBQUMsT0FEWjtBQUVFLGVBQUcsRUFBRUQsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVFLGFBRmI7QUFHRSxlQUFHLEVBQUVGLElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFRztBQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkQsZ0JBUUMsOERBQUMscURBQUQ7QUFBVyxnQkFBSSxFQUFFLEVBQWpCO0FBQXFCLGlCQUFLLEVBQUU7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFjRTtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBRyxxQkFBUyxFQUFDLGFBQWI7QUFBQSxtQ0FDRTtBQUNFLG9CQUFNLEVBQUMsUUFEVDtBQUVFLGlCQUFHLEVBQUMsc0JBRk47QUFHRSxrQkFBSSxFQUFDLHdEQUhQO0FBSUUsdUJBQVMsRUFBQywrQkFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRGLGVBNEJFO0FBQ0UsZ0JBQU0sRUFBQyxRQURUO0FBRUUsYUFBRyxFQUFDLCtCQUZOO0FBR0UsY0FBSSxFQUNGSCxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLElBQUFBLElBQUksQ0FBRUMsU0FBTixHQUNJRCxJQUFJLENBQUNJLE9BRFQsR0FFSSxvRUFOUjtBQVFFLG1CQUFTLEVBQUMsNkdBUlo7QUFBQSxrQ0FVRTtBQUFLLHFCQUFTLEVBQUMsTUFBZjtBQUFBLHNCQUNHSixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLElBQUFBLElBQUksQ0FBRUMsU0FBTjtBQUFBO0FBQ0M7QUFDQTtBQUNFLHVCQUFTLEVBQUMsZ0JBRFo7QUFFRSxpQkFBRyxFQUFFRCxJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRUUsYUFGYjtBQUdFLGlCQUFHLEVBQUVGLElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFRztBQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkQsZ0JBUUMsOERBQUMscURBQUQ7QUFBVyxrQkFBSSxFQUFFLEVBQWpCO0FBQXFCLG1CQUFLLEVBQUU7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVkYsZUF1QkU7QUFBSyxxQkFBUyxFQUFDLFFBQWY7QUFBQSxvQ0FDRTtBQUFHLHVCQUFTLEVBQUMscUJBQWI7QUFBQSx3QkFDR0gsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixJQUFBQSxJQUFJLENBQUVDLFNBQU4sR0FBa0JELElBQUksQ0FBQ0ssS0FBdkIsR0FBK0I7QUFEbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUlFO0FBQUcsdUJBQVMsRUFBQyxtQkFBYjtBQUFBLHdCQUNHTCxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLElBQUFBLElBQUksQ0FBRUMsU0FBTixHQUFrQkQsSUFBSSxDQUFDTSxNQUF2QixHQUFnQztBQURuQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF2QkYsZUErQkU7QUFBSyxxQkFBUyxFQUFDLCtCQUFmO0FBQUEsbUNBQ0UsOERBQUMscURBQUQ7QUFBVyxrQkFBSSxFQUFFLEVBQWpCO0FBQXFCLG1CQUFLLEVBQUU7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUF1RUQ7O0dBMUV1QmI7VUFFTEY7OztLQUZLRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gXCJuZXh0LXNlb1wiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgeyBTaVNwb3RpZnkgfSBmcm9tIFwicmVhY3QtaWNvbnMvc2lcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocikgPT4gci5qc29uKCkpO1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZVNXUihcIi9hcGkvc3BvdGlmeVwiLCBmZXRjaGVyKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5leHRTZW8gLz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gc3BhY2UteS0zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWJnXCI+XG4gICAgICAgICAgICB7ZGF0YT8uaXNQbGF5aW5nID8gKFxuICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudFxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1pbWdcIlxuICAgICAgICAgICAgICAgIHNyYz17ZGF0YT8uYWxidW1JbWFnZVVybH1cbiAgICAgICAgICAgICAgICBhbHQ9e2RhdGE/LmFsYnVtfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFNpU3BvdGlmeSBzaXplPXs2NH0gY29sb3I9e1wiIzFFRDc2MFwifSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5TcG90aWZ5IE5vdyBQbGF5aW5nIHVzaW5nIE5leHQuanM8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJlciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90aGVvZG9ydXNjbGFyZW5jZS5jb20vYmxvZy9zcG90aWZ5LW5vdy1wbGF5aW5nXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgaG92ZXI6dGV4dC1ibHVlLTUwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDaGVjayB0aGUgYmxvZ1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJlciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICBkYXRhPy5pc1BsYXlpbmdcbiAgICAgICAgICAgICAgICA/IGRhdGEuc29uZ1VybFxuICAgICAgICAgICAgICAgIDogXCJodHRwczovL29wZW4uc3BvdGlmeS5jb20vdXNlci9oYW5uYWhsdWViYmVyaW5nP3NpPTA4MmQxOWFkYzU0ZDQyY2FcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyIHJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIHAtNSBzcGFjZS14LTQgdHJhbnNpdGlvbi1zaGFkb3cgYm9yZGVyIHJvdW5kZWQtbWQgaG92ZXI6c2hhZG93LW1kIHctNzJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNlwiPlxuICAgICAgICAgICAgICB7ZGF0YT8uaXNQbGF5aW5nID8gKFxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBzaGFkb3ctc21cIlxuICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhPy5hbGJ1bUltYWdlVXJsfVxuICAgICAgICAgICAgICAgICAgYWx0PXtkYXRhPy5hbGJ1bX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxTaVNwb3RpZnkgc2l6ZT17NjR9IGNvbG9yPXtcIiMxRUQ3NjBcIn0gLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgY29tcG9uZW50XCI+XG4gICAgICAgICAgICAgICAge2RhdGE/LmlzUGxheWluZyA/IGRhdGEudGl0bGUgOiBcIk5vdCBMaXN0ZW5pbmdcIn1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtZGFya1wiPlxuICAgICAgICAgICAgICAgIHtkYXRhPy5pc1BsYXlpbmcgPyBkYXRhLmFydGlzdCA6IFwiU3BvdGlmeVwifVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTEuNSByaWdodC0xLjVcIj5cbiAgICAgICAgICAgICAgPFNpU3BvdGlmeSBzaXplPXsyMH0gY29sb3I9e1wiIzFFRDc2MFwifSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L21haW4+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTmV4dFNlbyIsInVzZVNXUiIsIlNpU3BvdGlmeSIsIkhvbWUiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwiciIsImpzb24iLCJkYXRhIiwiaXNQbGF5aW5nIiwiYWxidW1JbWFnZVVybCIsImFsYnVtIiwic29uZ1VybCIsInRpdGxlIiwiYXJ0aXN0Il0sInNvdXJjZVJvb3QiOiIifQ==