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
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
            className: "text-center",
            children: "Spotify Now Playing using Next.js"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
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
              lineNumber: 16,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
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
              lineNumber: 39,
              columnNumber: 17
            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_si__WEBPACK_IMPORTED_MODULE_3__.SiSpotify, {
              size: 64,
              color: "#1ED760"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "flex-1",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
              className: "font-bold component",
              children: data !== null && data !== void 0 && data.isPlaying ? data.title : "Not Listening"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
              className: "text-xs font-dark",
              children: data !== null && data !== void 0 && data.isPlaying ? data.artist : "Spotify"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "absolute bottom-1.5 right-1.5",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_si__WEBPACK_IMPORTED_MODULE_3__.SiSpotify, {
              size: 20,
              color: "#1ED760"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWEzMGM0OGZlMTcxZjM5YTU0OGMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFZSxTQUFTRyxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQ7QUFBQSxXQUFTQyxLQUFLLENBQUNELEdBQUQsQ0FBTCxDQUFXRSxJQUFYLENBQWdCLFVBQUNDLENBQUQ7QUFBQSxhQUFPQSxDQUFDLENBQUNDLElBQUYsRUFBUDtBQUFBLEtBQWhCLENBQVQ7QUFBQSxHQUFoQjs7QUFDQSxnQkFBaUJSLDRDQUFNLENBQUMsY0FBRCxFQUFpQkcsT0FBakIsQ0FBdkI7QUFBQSxNQUFRTSxJQUFSLFdBQVFBLElBQVI7O0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFTLGVBQVMsRUFBQyxFQUFuQjtBQUFBLDZCQUNFO0FBQU0saUJBQVMsRUFBQyxrRUFBaEI7QUFBQSxnQ0FDRTtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBRyxxQkFBUyxFQUFDLGFBQWI7QUFBQSxtQ0FDRTtBQUNFLG9CQUFNLEVBQUMsUUFEVDtBQUVFLGlCQUFHLEVBQUMsc0JBRk47QUFHRSxrQkFBSSxFQUFDLHdEQUhQO0FBSUUsdUJBQVMsRUFBQywrQkFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBY0U7QUFDRSxnQkFBTSxFQUFDLFFBRFQ7QUFFRSxhQUFHLEVBQUMsK0JBRk47QUFHRSxjQUFJLEVBQ0ZBLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosSUFBQUEsSUFBSSxDQUFFQyxTQUFOLEdBQ0lELElBQUksQ0FBQ0UsT0FEVCxHQUVJLG9FQU5SO0FBUUUsbUJBQVMsRUFBQyw2R0FSWjtBQUFBLGtDQVVFO0FBQUsscUJBQVMsRUFBQyxNQUFmO0FBQUEsc0JBQ0dGLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosSUFBQUEsSUFBSSxDQUFFQyxTQUFOO0FBQUE7QUFDQztBQUNBO0FBQ0UsdUJBQVMsRUFBQyxnQkFEWjtBQUVFLGlCQUFHLEVBQUVELElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFRyxhQUZiO0FBR0UsaUJBQUcsRUFBRUgsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVJO0FBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRCxnQkFRQyw4REFBQyxxREFBRDtBQUFXLGtCQUFJLEVBQUUsRUFBakI7QUFBcUIsbUJBQUssRUFBRTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFWRixlQXVCRTtBQUFLLHFCQUFTLEVBQUMsUUFBZjtBQUFBLG9DQUNFO0FBQUcsdUJBQVMsRUFBQyxxQkFBYjtBQUFBLHdCQUNHSixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLElBQUFBLElBQUksQ0FBRUMsU0FBTixHQUFrQkQsSUFBSSxDQUFDSyxLQUF2QixHQUErQjtBQURsQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBSUU7QUFBRyx1QkFBUyxFQUFDLG1CQUFiO0FBQUEsd0JBQ0dMLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosSUFBQUEsSUFBSSxDQUFFQyxTQUFOLEdBQWtCRCxJQUFJLENBQUNNLE1BQXZCLEdBQWdDO0FBRG5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXZCRixlQStCRTtBQUFLLHFCQUFTLEVBQUMsK0JBQWY7QUFBQSxtQ0FDRSw4REFBQyxxREFBRDtBQUFXLGtCQUFJLEVBQUUsRUFBakI7QUFBcUIsbUJBQUssRUFBRTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBLGtCQURGO0FBeUREOztHQTVEdUJiO1VBRUxGOzs7S0FGS0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRTZW8gfSBmcm9tIFwibmV4dC1zZW9cIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IHsgU2lTcG90aWZ5IH0gZnJvbSBcInJlYWN0LWljb25zL3NpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHIpID0+IHIuanNvbigpKTtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IoXCIvYXBpL3Nwb3RpZnlcIiwgZmV0Y2hlcik7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOZXh0U2VvIC8+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIHNwYWNlLXktM1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5TcG90aWZ5IE5vdyBQbGF5aW5nIHVzaW5nIE5leHQuanM8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJlciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90aGVvZG9ydXNjbGFyZW5jZS5jb20vYmxvZy9zcG90aWZ5LW5vdy1wbGF5aW5nXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgaG92ZXI6dGV4dC1ibHVlLTUwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDaGVjayB0aGUgYmxvZ1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVyZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICAgZGF0YT8uaXNQbGF5aW5nXG4gICAgICAgICAgICAgICAgPyBkYXRhLnNvbmdVcmxcbiAgICAgICAgICAgICAgICA6IFwiaHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3VzZXIvaGFubmFobHVlYmJlcmluZz9zaT0wODJkMTlhZGM1NGQ0MmNhXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lciByZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBwLTUgc3BhY2UteC00IHRyYW5zaXRpb24tc2hhZG93IGJvcmRlciByb3VuZGVkLW1kIGhvdmVyOnNoYWRvdy1tZCB3LTcyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTZcIj5cbiAgICAgICAgICAgICAge2RhdGE/LmlzUGxheWluZyA/IChcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudFxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTYgc2hhZG93LXNtXCJcbiAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YT8uYWxidW1JbWFnZVVybH1cbiAgICAgICAgICAgICAgICAgIGFsdD17ZGF0YT8uYWxidW19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8U2lTcG90aWZ5IHNpemU9ezY0fSBjb2xvcj17XCIjMUVENzYwXCJ9IC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIGNvbXBvbmVudFwiPlxuICAgICAgICAgICAgICAgIHtkYXRhPy5pc1BsYXlpbmcgPyBkYXRhLnRpdGxlIDogXCJOb3QgTGlzdGVuaW5nXCJ9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWRhcmtcIj5cbiAgICAgICAgICAgICAgICB7ZGF0YT8uaXNQbGF5aW5nID8gZGF0YS5hcnRpc3QgOiBcIlNwb3RpZnlcIn1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0xLjUgcmlnaHQtMS41XCI+XG4gICAgICAgICAgICAgIDxTaVNwb3RpZnkgc2l6ZT17MjB9IGNvbG9yPXtcIiMxRUQ3NjBcIn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIk5leHRTZW8iLCJ1c2VTV1IiLCJTaVNwb3RpZnkiLCJIb21lIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInIiLCJqc29uIiwiZGF0YSIsImlzUGxheWluZyIsInNvbmdVcmwiLCJhbGJ1bUltYWdlVXJsIiwiYWxidW0iLCJ0aXRsZSIsImFydGlzdCJdLCJzb3VyY2VSb290IjoiIn0=