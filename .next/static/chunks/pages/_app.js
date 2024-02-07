(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./next-seo.config.js":
/*!****************************!*\
  !*** ./next-seo.config.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Hannah_Luebbering_OneDrive_Desktop_hluebbering_github_io_spotify_played_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _next_seo_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../next-seo.config */ "./next-seo.config.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Hannah Luebbering\\OneDrive\\Desktop\\hluebbering.github.io\\spotify-played\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Hannah_Luebbering_OneDrive_Desktop_hluebbering_github_io_spotify_played_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_1__.DefaultSeo, _objectSpread({}, _next_seo_config__WEBPACK_IMPORTED_MODULE_3__.default), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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


/***/ }),

/***/ "./node_modules/next-seo/lib/next-seo.module.js":
/*!******************************************************!*\
  !*** ./node_modules/next-seo/lib/next-seo.module.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleJsonLd": function() { return /* binding */ ArticleJsonLd; },
/* harmony export */   "BrandJsonLd": function() { return /* binding */ BrandJsonLd; },
/* harmony export */   "BreadcrumbJsonLd": function() { return /* binding */ BreadCrumbJsonLd; },
/* harmony export */   "CampgroundJsonLd": function() { return /* binding */ CampgroundJsonLd; },
/* harmony export */   "CarouselJsonLd": function() { return /* binding */ CarouselJsonLd; },
/* harmony export */   "CollectionPageJsonLd": function() { return /* binding */ CollectionPageJsonLd; },
/* harmony export */   "CorporateContactJsonLd": function() { return /* binding */ CorporateContactJsonLd; },
/* harmony export */   "CourseJsonLd": function() { return /* binding */ CourseJsonLd; },
/* harmony export */   "DatasetJsonLd": function() { return /* binding */ DatasetJsonLd; },
/* harmony export */   "DefaultSeo": function() { return /* binding */ DefaultSeo; },
/* harmony export */   "EventJsonLd": function() { return /* binding */ EventJsonLd; },
/* harmony export */   "FAQPageJsonLd": function() { return /* binding */ FAQPageJsonLd; },
/* harmony export */   "HowToJsonLd": function() { return /* binding */ howToJsonLd; },
/* harmony export */   "ImageJsonLd": function() { return /* binding */ ImageJsonLd; },
/* harmony export */   "JobPostingJsonLd": function() { return /* binding */ JobPostingJsonLd; },
/* harmony export */   "LocalBusinessJsonLd": function() { return /* binding */ LocalBusinessJsonLd; },
/* harmony export */   "LogoJsonLd": function() { return /* binding */ LogoJsonLd; },
/* harmony export */   "NewsArticleJsonLd": function() { return /* binding */ NewsArticleJsonLd; },
/* harmony export */   "NextSeo": function() { return /* binding */ NextSeo; },
/* harmony export */   "OrganizationJsonLd": function() { return /* binding */ OrganizationJsonLd; },
/* harmony export */   "ParkJsonLd": function() { return /* binding */ ParkJsonLd; },
/* harmony export */   "ProductJsonLd": function() { return /* binding */ ProductJsonLd; },
/* harmony export */   "ProfilePageJsonLd": function() { return /* binding */ ProfilePageJsonLd; },
/* harmony export */   "QAPageJsonLd": function() { return /* binding */ QAPageJsonLd; },
/* harmony export */   "RecipeJsonLd": function() { return /* binding */ RecipeJsonLd; },
/* harmony export */   "SiteLinksSearchBoxJsonLd": function() { return /* binding */ SiteLinksSearchBoxJsonLd; },
/* harmony export */   "SocialProfileJsonLd": function() { return /* binding */ SocialProfileJsonLd; },
/* harmony export */   "SoftwareAppJsonLd": function() { return /* binding */ SoftwareAppJsonLd; },
/* harmony export */   "VideoGameJsonLd": function() { return /* binding */ VideoGameJsonLd; },
/* harmony export */   "VideoJsonLd": function() { return /* binding */ VideoJsonLd; },
/* harmony export */   "WebPageJsonLd": function() { return /* binding */ WebPageJsonLd; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);



function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var _excluded$z = ["keyOverride"],
  _excluded2$2 = ["crossOrigin"];
var defaults = {
  templateTitle: '',
  noindex: false,
  nofollow: false,
  norobots: false,
  defaultOpenGraphImageWidth: 0,
  defaultOpenGraphImageHeight: 0,
  defaultOpenGraphVideoWidth: 0,
  defaultOpenGraphVideoHeight: 0
};
var buildOpenGraphMediaTags = function buildOpenGraphMediaTags(mediaType, media, _temp) {
  if (media === void 0) {
    media = [];
  }
  var _ref = _temp === void 0 ? {} : _temp,
    defaultWidth = _ref.defaultWidth,
    defaultHeight = _ref.defaultHeight;
  return media.reduce(function (tags, medium, index) {
    tags.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
      key: "og:" + mediaType + ":0" + index,
      property: "og:" + mediaType,
      content: medium.url
    }));
    if (medium.alt) {
      tags.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
        key: "og:" + mediaType + ":alt0" + index,
        property: "og:" + mediaType + ":alt",
        content: medium.alt
      }));
    }
    if (medium.secureUrl) {
      tags.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
        key: "og:" + mediaType + ":secure_url0" + index,
        property: "og:" + mediaType + ":secure_url",
        content: medium.secureUrl.toString()
      }));
    }
    if (medium.type) {
      tags.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
        key: "og:" + mediaType + ":type0" + index,
        property: "og:" + mediaType + ":type",
        content: medium.type.toString()
      }));
    }
    if (medium.width) {
      tags.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
        key: "og:" + mediaType + ":width0" + index,
        property: "og:" + mediaType + ":width",
        content: medium.width.toString()
      }));
    } else if (defaultWidth) {
      tags.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
        key: "og:" + mediaType + ":width0" + index,
        property: "og:" + mediaType + ":width",
        content: defaultWidth.toString()
      }));
    }
    if (medium.height) {
      tags.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
        key: "og:" + mediaType + ":height" + index,
        property: "og:" + mediaType + ":height",
        content: medium.height.toString()
      }));
    } else if (defaultHeight) {
      tags.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
        key: "og:" + mediaType + ":height" + index,
        property: "og:" + mediaType + ":height",
        content: defaultHeight.toString()
      }));
    }
    return tags;
  }, []);
};
var buildTags = function buildTags(config) {
  var _config$openGraph, _config$openGraph3, _config$additionalLin;
  var tagsToRender = [];
  if (config.titleTemplate) {
    defaults.templateTitle = config.titleTemplate;
  }
  var updatedTitle = '';
  if (config.title) {
    updatedTitle = config.title;
    if (defaults.templateTitle) {
      updatedTitle = defaults.templateTitle.replace(/%s/g, function () {
        return updatedTitle;
      });
    }
  } else if (config.defaultTitle) {
    updatedTitle = config.defaultTitle;
  }
  if (updatedTitle) {
    tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", {
      key: "title"
    }, updatedTitle));
  }
  var noindex = config.noindex === undefined ? defaults.noindex || config.dangerouslySetAllPagesToNoIndex : config.noindex;
  var nofollow = config.nofollow === undefined ? defaults.nofollow || config.dangerouslySetAllPagesToNoFollow : config.nofollow;
  var norobots = config.norobots || defaults.norobots;
  var robotsParams = '';
  if (config.robotsProps) {
    var _config$robotsProps = config.robotsProps,
      nosnippet = _config$robotsProps.nosnippet,
      maxSnippet = _config$robotsProps.maxSnippet,
      maxImagePreview = _config$robotsProps.maxImagePreview,
      maxVideoPreview = _config$robotsProps.maxVideoPreview,
      noarchive = _config$robotsProps.noarchive,
      noimageindex = _config$robotsProps.noimageindex,
      notranslate = _config$robotsProps.notranslate,
      unavailableAfter = _config$robotsProps.unavailableAfter;
    robotsParams = "" + (nosnippet ? ',nosnippet' : '') + (maxSnippet ? ",max-snippet:" + maxSnippet : '') + (maxImagePreview ? ",max-image-preview:" + maxImagePreview : '') + (noarchive ? ',noarchive' : '') + (unavailableAfter ? ",unavailable_after:" + unavailableAfter : '') + (noimageindex ? ',noimageindex' : '') + (maxVideoPreview ? ",max-video-preview:" + maxVideoPreview : '') + (notranslate ? ',notranslate' : '');
  }
  if (config.norobots) {
    defaults.norobots = true;
  }
  if (noindex || nofollow) {
    if (config.dangerouslySetAllPagesToNoIndex) {
      defaults.noindex = true;
    }
    if (config.dangerouslySetAllPagesToNoFollow) {
      defaults.nofollow = true;
    }
    tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
      key: "robots",
      name: "robots",
      content: (noindex ? 'noindex' : 'index') + "," + (nofollow ? 'nofollow' : 'follow') + robotsParams
    }));
  } else if (!norobots || robotsParams) {
    tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
      key: "robots",
      name: "robots",
      content: "index,follow" + robotsParams
    }));
  }
  if (config.description) {
    tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
      key: "description",
      name: "description",
      content: config.description
    }));
  }
  if (config.themeColor) {
    tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
      key: "theme-color",
      name: "theme-color",
      content: config.themeColor
    }));
  }
  if (config.mobileAlternate) {
    tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
      rel: "alternate",
      key: "mobileAlternate",
      media: config.mobileAlternate.media,
      href: config.mobileAlternate.href
    }));
  }
  if (config.languageAlternates && config.languageAlternates.length > 0) {
    config.languageAlternates.forEach(function (languageAlternate) {
      tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
        rel: "alternate",
        key: "languageAlternate-" + languageAlternate.hrefLang,
        hrefLang: languageAlternate.hrefLang,
        href: languageAlternate.href
      }));
    });
  }
  if (config.twitter) {
    if (config.twitter.cardType) {
      tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
        key: "twitter:card",
        name: "twitter:card",
        content: config.twitter.cardType
      }));
    }
    if (config.twitter.site) {
      tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
        key: "twitter:site",
        name: "twitter:site",
        content: config.twitter.site
      }));
    }
    if (config.twitter.handle) {
      tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
        key: "twitter:creator",
        name: "twitter:creator",
        content: config.twitter.handle
      }));
    }
  }
  if (config.facebook) {
    if (config.facebook.appId) {
      tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
        key: "fb:app_id",
        property: "fb:app_id",
        content: config.facebook.appId
      }));
    }
  }
  if ((_config$openGraph = config.openGraph) != null && _config$openGraph.title || updatedTitle) {
    var _config$openGraph2;
    tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
      key: "og:title",
      property: "og:title",
      content: ((_config$openGraph2 = config.openGraph) == null ? void 0 : _config$openGraph2.title) || updatedTitle
    }));
  }
  if ((_config$openGraph3 = config.openGraph) != null && _config$openGraph3.description || config.description) {
    var _config$openGraph4;
    tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
      key: "og:description",
      property: "og:description",
      content: ((_config$openGraph4 = config.openGraph) == null ? void 0 : _config$openGraph4.description) || config.description
    }));
  }
  if (config.openGraph) {
    if (config.openGraph.url || config.canonical) {
      tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
        key: "og:url",
        property: "og:url",
        content: config.openGraph.url || config.canonical
      }));
    }
    if (config.openGraph.type) {
      var type = config.openGraph.type.toLowerCase();
      tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
        key: "og:type",
        property: "og:type",
        content: type
      }));
      if (type === 'profile' && config.openGraph.profile) {
        if (config.openGraph.profile.firstName) {
          tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
            key: "profile:first_name",
            property: "profile:first_name",
            content: config.openGraph.profile.firstName
          }));
        }
        if (config.openGraph.profile.lastName) {
          tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
            key: "profile:last_name",
            property: "profile:last_name",
            content: config.openGraph.profile.lastName
          }));
        }
        if (config.openGraph.profile.username) {
          tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
            key: "profile:username",
            property: "profile:username",
            content: config.openGraph.profile.username
          }));
        }
        if (config.openGraph.profile.gender) {
          tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
            key: "profile:gender",
            property: "profile:gender",
            content: config.openGraph.profile.gender
          }));
        }
      } else if (type === 'book' && config.openGraph.book) {
        if (config.openGraph.book.authors && config.openGraph.book.authors.length) {
          config.openGraph.book.authors.forEach(function (author, index) {
            tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
              key: "book:author:0" + index,
              property: "book:author",
              content: author
            }));
          });
        }
        if (config.openGraph.book.isbn) {
          tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
            key: "book:isbn",
            property: "book:isbn",
            content: config.openGraph.book.isbn
          }));
        }
        if (config.openGraph.book.releaseDate) {
          tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
            key: "book:release_date",
            property: "book:release_date",
            content: config.openGraph.book.releaseDate
          }));
        }
        if (config.openGraph.book.tags && config.openGraph.book.tags.length) {
          config.openGraph.book.tags.forEach(function (tag, index) {
            tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
              key: "book:tag:0" + index,
              property: "book:tag",
              content: tag
            }));
          });
        }
      } else if (type === 'article' && config.openGraph.article) {
        if (config.openGraph.article.publishedTime) {
          tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
            key: "article:published_time",
            property: "article:published_time",
            content: config.openGraph.article.publishedTime
          }));
        }
        if (config.openGraph.article.modifiedTime) {
          tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
            key: "article:modified_time",
            property: "article:modified_time",
            content: config.openGraph.article.modifiedTime
          }));
        }
        if (config.openGraph.article.expirationTime) {
          tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
            key: "article:expiration_time",
            property: "article:expiration_time",
            content: config.openGraph.article.expirationTime
          }));
        }
        if (config.openGraph.article.authors && config.openGraph.article.authors.length) {
          config.openGraph.article.authors.forEach(function (author, index) {
            tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
              key: "article:author:0" + index,
              property: "article:author",
              content: author
            }));
          });
        }
        if (config.openGraph.article.section) {
          tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
            key: "article:section",
            property: "article:section",
            content: config.openGraph.article.section
          }));
        }
        if (config.openGraph.article.tags && config.openGraph.article.tags.length) {
          config.openGraph.article.tags.forEach(function (tag, index) {
            tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
              key: "article:tag:0" + index,
              property: "article:tag",
              content: tag
            }));
          });
        }
      } else if ((type === 'video.movie' || type === 'video.episode' || type === 'video.tv_show' || type === 'video.other') && config.openGraph.video) {
        if (config.openGraph.video.actors && config.openGraph.video.actors.length) {
          config.openGraph.video.actors.forEach(function (actor, index) {
            if (actor.profile) {
              tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
                key: "video:actor:0" + index,
                property: "video:actor",
                content: actor.profile
              }));
            }
            if (actor.role) {
              tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
                key: "video:actor:role:0" + index,
                property: "video:actor:role",
                content: actor.role
              }));
            }
          });
        }
        if (config.openGraph.video.directors && config.openGraph.video.directors.length) {
          config.openGraph.video.directors.forEach(function (director, index) {
            tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
              key: "video:director:0" + index,
              property: "video:director",
              content: director
            }));
          });
        }
        if (config.openGraph.video.writers && config.openGraph.video.writers.length) {
          config.openGraph.video.writers.forEach(function (writer, index) {
            tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
              key: "video:writer:0" + index,
              property: "video:writer",
              content: writer
            }));
          });
        }
        if (config.openGraph.video.duration) {
          tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
            key: "video:duration",
            property: "video:duration",
            content: config.openGraph.video.duration.toString()
          }));
        }
        if (config.openGraph.video.releaseDate) {
          tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
            key: "video:release_date",
            property: "video:release_date",
            content: config.openGraph.video.releaseDate
          }));
        }
        if (config.openGraph.video.tags && config.openGraph.video.tags.length) {
          config.openGraph.video.tags.forEach(function (tag, index) {
            tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
              key: "video:tag:0" + index,
              property: "video:tag",
              content: tag
            }));
          });
        }
        if (config.openGraph.video.series) {
          tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
            key: "video:series",
            property: "video:series",
            content: config.openGraph.video.series
          }));
        }
      }
    }
    // images
    if (config.defaultOpenGraphImageWidth) {
      defaults.defaultOpenGraphImageWidth = config.defaultOpenGraphImageWidth;
    }
    if (config.defaultOpenGraphImageHeight) {
      defaults.defaultOpenGraphImageHeight = config.defaultOpenGraphImageHeight;
    }
    if (config.openGraph.images && config.openGraph.images.length) {
      tagsToRender.push.apply(tagsToRender, buildOpenGraphMediaTags('image', config.openGraph.images, {
        defaultWidth: defaults.defaultOpenGraphImageWidth,
        defaultHeight: defaults.defaultOpenGraphImageHeight
      }));
    }
    // videos
    if (config.defaultOpenGraphVideoWidth) {
      defaults.defaultOpenGraphVideoWidth = config.defaultOpenGraphVideoWidth;
    }
    if (config.defaultOpenGraphVideoHeight) {
      defaults.defaultOpenGraphVideoHeight = config.defaultOpenGraphVideoHeight;
    }
    if (config.openGraph.videos && config.openGraph.videos.length) {
      tagsToRender.push.apply(tagsToRender, buildOpenGraphMediaTags('video', config.openGraph.videos, {
        defaultWidth: defaults.defaultOpenGraphVideoWidth,
        defaultHeight: defaults.defaultOpenGraphVideoHeight
      }));
    }
    // audio
    if (config.openGraph.audio) {
      tagsToRender.push.apply(tagsToRender, buildOpenGraphMediaTags('audio', config.openGraph.audio));
    }
    if (config.openGraph.locale) {
      tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
        key: "og:locale",
        property: "og:locale",
        content: config.openGraph.locale
      }));
    }
    if (config.openGraph.siteName || config.openGraph.site_name) {
      tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
        key: "og:site_name",
        property: "og:site_name",
        content: config.openGraph.siteName || config.openGraph.site_name
      }));
    }
  }
  if (config.canonical) {
    tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
      rel: "canonical",
      href: config.canonical,
      key: "canonical"
    }));
  }
  if (config.additionalMetaTags && config.additionalMetaTags.length > 0) {
    config.additionalMetaTags.forEach(function (_ref2) {
      var _ref3, _ref4;
      var keyOverride = _ref2.keyOverride,
        tag = _objectWithoutPropertiesLoose(_ref2, _excluded$z);
      tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", _extends({
        key: "meta:" + ((_ref3 = (_ref4 = keyOverride != null ? keyOverride : tag.name) != null ? _ref4 : tag.property) != null ? _ref3 : tag.httpEquiv)
      }, tag)));
    });
  }
  if ((_config$additionalLin = config.additionalLinkTags) != null && _config$additionalLin.length) {
    config.additionalLinkTags.forEach(function (tag) {
      var _rest$keyOverride;
      var tagCrossOrigin = tag.crossOrigin,
        rest = _objectWithoutPropertiesLoose(tag, _excluded2$2);
      var crossOrigin = tagCrossOrigin === 'anonymous' || tagCrossOrigin === 'use-credentials' || tagCrossOrigin === '' ? tagCrossOrigin : undefined;
      tagsToRender.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", _extends({
        key: "link" + ((_rest$keyOverride = rest.keyOverride) != null ? _rest$keyOverride : rest.href) + rest.rel
      }, rest, {
        crossOrigin: crossOrigin
      })));
    });
  }
  return tagsToRender;
};

var WithHead = function WithHead(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_1___default()), null, buildTags(props));
};

var DefaultSeo = function DefaultSeo(_ref) {
  var title = _ref.title,
    titleTemplate = _ref.titleTemplate,
    defaultTitle = _ref.defaultTitle,
    themeColor = _ref.themeColor,
    _ref$dangerouslySetAl = _ref.dangerouslySetAllPagesToNoIndex,
    dangerouslySetAllPagesToNoIndex = _ref$dangerouslySetAl === void 0 ? false : _ref$dangerouslySetAl,
    _ref$dangerouslySetAl2 = _ref.dangerouslySetAllPagesToNoFollow,
    dangerouslySetAllPagesToNoFollow = _ref$dangerouslySetAl2 === void 0 ? false : _ref$dangerouslySetAl2,
    description = _ref.description,
    canonical = _ref.canonical,
    facebook = _ref.facebook,
    openGraph = _ref.openGraph,
    additionalMetaTags = _ref.additionalMetaTags,
    twitter = _ref.twitter,
    defaultOpenGraphImageWidth = _ref.defaultOpenGraphImageWidth,
    defaultOpenGraphImageHeight = _ref.defaultOpenGraphImageHeight,
    defaultOpenGraphVideoWidth = _ref.defaultOpenGraphVideoWidth,
    defaultOpenGraphVideoHeight = _ref.defaultOpenGraphVideoHeight,
    mobileAlternate = _ref.mobileAlternate,
    languageAlternates = _ref.languageAlternates,
    additionalLinkTags = _ref.additionalLinkTags,
    robotsProps = _ref.robotsProps,
    norobots = _ref.norobots;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(WithHead, {
    title: title,
    titleTemplate: titleTemplate,
    defaultTitle: defaultTitle,
    themeColor: themeColor,
    dangerouslySetAllPagesToNoIndex: dangerouslySetAllPagesToNoIndex,
    dangerouslySetAllPagesToNoFollow: dangerouslySetAllPagesToNoFollow,
    description: description,
    canonical: canonical,
    facebook: facebook,
    openGraph: openGraph,
    additionalMetaTags: additionalMetaTags,
    twitter: twitter,
    defaultOpenGraphImageWidth: defaultOpenGraphImageWidth,
    defaultOpenGraphImageHeight: defaultOpenGraphImageHeight,
    defaultOpenGraphVideoWidth: defaultOpenGraphVideoWidth,
    defaultOpenGraphVideoHeight: defaultOpenGraphVideoHeight,
    mobileAlternate: mobileAlternate,
    languageAlternates: languageAlternates,
    additionalLinkTags: additionalLinkTags,
    robotsProps: robotsProps,
    norobots: norobots
  });
};

var NextSeo = function NextSeo(_ref) {
  var title = _ref.title,
    themeColor = _ref.themeColor,
    noindex = _ref.noindex,
    nofollow = _ref.nofollow,
    robotsProps = _ref.robotsProps,
    description = _ref.description,
    canonical = _ref.canonical,
    openGraph = _ref.openGraph,
    facebook = _ref.facebook,
    twitter = _ref.twitter,
    additionalMetaTags = _ref.additionalMetaTags,
    titleTemplate = _ref.titleTemplate,
    defaultTitle = _ref.defaultTitle,
    mobileAlternate = _ref.mobileAlternate,
    languageAlternates = _ref.languageAlternates,
    additionalLinkTags = _ref.additionalLinkTags;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(WithHead, {
    title: title,
    themeColor: themeColor,
    noindex: noindex,
    nofollow: nofollow,
    robotsProps: robotsProps,
    description: description,
    canonical: canonical,
    facebook: facebook,
    openGraph: openGraph,
    additionalMetaTags: additionalMetaTags,
    twitter: twitter,
    titleTemplate: titleTemplate,
    defaultTitle: defaultTitle,
    mobileAlternate: mobileAlternate,
    languageAlternates: languageAlternates,
    additionalLinkTags: additionalLinkTags
  }));
};

var toJson = function toJson(type, jsonld) {
  var data = jsonld;
  if (Array.isArray(data) && data.length === 1) {
    data = _extends({}, jsonld[0]);
  }
  var jsonLdObject = Array.isArray(data) ? data.map(function (item) {
    return formatObjectForSchema(type, item);
  }) : formatObjectForSchema(type, data);
  return {
    __html: JSON.stringify(jsonLdObject, safeJsonLdReplacer)
  };
};
var formatObjectForSchema = function formatObjectForSchema(type, jsonld) {
  var _jsonld$id = jsonld.id,
    id = _jsonld$id === void 0 ? undefined : _jsonld$id;
  var updated = _extends({}, id ? {
    '@id': jsonld.id
  } : {}, jsonld);
  delete updated.id;
  return _extends({
    '@context': 'https://schema.org',
    '@type': type
  }, updated);
};
var ESCAPE_ENTITIES = Object.freeze({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;'
});
var ESCAPE_REGEX = new RegExp("[" + Object.keys(ESCAPE_ENTITIES).join('') + "]", 'g');
var ESCAPE_REPLACER = function ESCAPE_REPLACER(t) {
  return ESCAPE_ENTITIES[t];
};
/**
 * A replacer for JSON.stringify to strip JSON-LD of illegal HTML entities
 * per https://www.w3.org/TR/json-ld11/#restrictions-for-contents-of-json-ld-script-elements
 */
var safeJsonLdReplacer = function () {
  // Replace per https://www.w3.org/TR/json-ld11/#restrictions-for-contents-of-json-ld-script-elements
  // Solution from https://stackoverflow.com/a/5499821/864313
  return function (_, value) {
    switch (typeof value) {
      case 'object':
        // Omit null values.
        if (value === null) {
          return undefined;
        }
        return value;
      // JSON.stringify will recursively call replacer.
      case 'number':
      case 'boolean':
      case 'bigint':
        return value;
      // These values are not risky.
      case 'string':
        return value.replace(ESCAPE_REGEX, ESCAPE_REPLACER);
      default:
        {
          // JSON.stringify will remove this element.
          return undefined;
        }
    }
  };
}();

var _excluded$y = ["type", "keyOverride", "scriptKey", "scriptId", "dataArray", "useAppDir"];
function JsonLd(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'Thing' : _ref$type,
    keyOverride = _ref.keyOverride,
    scriptKey = _ref.scriptKey,
    _ref$scriptId = _ref.scriptId,
    scriptId = _ref$scriptId === void 0 ? undefined : _ref$scriptId,
    dataArray = _ref.dataArray,
    _ref$useAppDir = _ref.useAppDir,
    useAppDir = _ref$useAppDir === void 0 ? false : _ref$useAppDir,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$y);
  var JsonLdScript = function JsonLdScript() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
      type: "application/ld+json",
      id: scriptId,
      "data-testid": scriptId,
      dangerouslySetInnerHTML: toJson(type, dataArray === undefined ? _extends({}, rest) : dataArray),
      key: "jsonld-" + scriptKey + (keyOverride ? "-" + keyOverride : '')
    });
  };
  if (useAppDir) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLdScript, null);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_1___default()), null, JsonLdScript());
}

/**
 * Generate author information
 * @param author
 * @returns
 */
function generateAuthorInfo(author) {
  if (typeof author === 'string') {
    return {
      '@type': 'Person',
      name: author
    };
  } else if (!!author.name) {
    var _author$type;
    return {
      '@type': (_author$type = author == null ? void 0 : author.type) != null ? _author$type : 'Person',
      name: author.name,
      url: author == null ? void 0 : author.url
    };
  }
  return;
}
function setAuthor(author) {
  if (Array.isArray(author)) {
    return author.map(function (item) {
      return generateAuthorInfo(item);
    }).filter(function (item) {
      return !!item;
    });
  } else if (author) {
    return generateAuthorInfo(author);
  }
  return;
}

function setImage(image) {
  if (image) {
    return {
      '@type': 'ImageObject',
      url: image
    };
  }
  return undefined;
}

function setPublisher(publisherName, publisherLogo) {
  if (!publisherName) {
    return undefined;
  }
  return {
    '@type': 'Organization',
    name: publisherName,
    logo: setImage(publisherLogo)
  };
}

function setReviewRating(rating) {
  if (rating) {
    return _extends({}, rating, {
      '@type': 'Rating'
    });
  }
  return undefined;
}

var _excluded$x = ["reviewRating", "author", "publisher"];
function setReviews(reviews) {
  function mapReview(_ref) {
    var reviewRating = _ref.reviewRating,
      author = _ref.author,
      publisher = _ref.publisher,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$x);
    return _extends({}, rest, {
      '@type': 'Review'
    }, author && {
      author: setAuthor(author)
    }, reviewRating && {
      reviewRating: setReviewRating(reviewRating)
    }, publisher && {
      publisher: setPublisher(publisher.name)
    });
  }
  if (Array.isArray(reviews)) {
    return reviews.map(mapReview);
  } else if (reviews) {
    return mapReview(reviews);
  }
  return undefined;
}

function setNutrition(calories) {
  if (calories) {
    return {
      '@type': 'NutritionInformation',
      calories: calories + " calories"
    };
  }
  return undefined;
}

function setAggregateRating(aggregateRating) {
  if (aggregateRating) {
    return {
      '@type': 'AggregateRating',
      ratingCount: aggregateRating.ratingCount,
      reviewCount: aggregateRating.reviewCount,
      bestRating: aggregateRating.bestRating,
      ratingValue: aggregateRating.ratingValue,
      worstRating: aggregateRating.worstRating
    };
  }
  return undefined;
}

function setClip(clips) {
  function mapClip(clip) {
    return _extends({}, clip, {
      '@type': 'Clip'
    });
  }
  if (Array.isArray(clips)) {
    return clips.map(mapClip);
  } else if (clips) {
    return mapClip(clips);
  }
  return undefined;
}

function setInteractionStatistic(watchCount) {
  if (watchCount) {
    return {
      '@type': 'InteractionCounter',
      interactionType: 'https://schema.org/WatchAction',
      userInteractionCount: watchCount
    };
  }
  return undefined;
}

function setBroadcastEvent(publication) {
  function mapBroadcastEvent(publication) {
    return _extends({}, publication, {
      '@type': 'BroadcastEvent'
    });
  }
  if (publication) {
    if (Array.isArray(publication)) {
      return publication.map(mapBroadcastEvent);
    }
    return mapBroadcastEvent(publication);
  }
  return undefined;
}

var _excluded$w = ["thumbnailUrls", "hasPart", "watchCount", "publication"];
function setVideo(video, setContext) {
  if (setContext === void 0) {
    setContext = false;
  }
  function mapVideo(_ref, context) {
    var thumbnailUrls = _ref.thumbnailUrls,
      hasPart = _ref.hasPart,
      watchCount = _ref.watchCount,
      publication = _ref.publication,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$w);
    return _extends({}, rest, {
      '@type': 'VideoObject'
    }, context && {
      '@context': 'https://schema.org'
    }, {
      thumbnailUrl: thumbnailUrls,
      hasPart: setClip(hasPart),
      interactionStatistic: setInteractionStatistic(watchCount),
      publication: setBroadcastEvent(publication)
    });
  }
  if (video) {
    return mapVideo(video, setContext);
  }
  return undefined;
}

function setInstruction(instruction) {
  if (instruction) {
    return _extends({}, instruction, {
      '@type': 'HowToStep'
    });
  }
  return undefined;
}

var _excluded$v = ["type", "keyOverride", "ofType", "data"],
  _excluded2$1 = ["authorName", "images", "yields", "category", "calories", "aggregateRating", "video", "ingredients", "instructions", "cuisine"];
function CarouselJsonLd(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'Carousel' : _ref$type,
    keyOverride = _ref.keyOverride,
    ofType = _ref.ofType,
    data = _ref.data,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$v);
  function generateList(data, ofType) {
    switch (ofType) {
      case 'default':
        return data.map(function (item, index) {
          return {
            '@type': 'ListItem',
            position: "" + (index + 1),
            url: item.url
          };
        });
      case 'course':
        return data.map(function (item, index) {
          return {
            '@type': 'ListItem',
            position: "" + (index + 1),
            item: {
              '@context': 'https://schema.org',
              '@type': 'Course',
              url: item.url,
              name: item.courseName,
              description: item.description,
              provider: {
                '@type': 'Organization',
                name: item.providerName,
                sameAs: item.providerUrl
              }
            }
          };
        });
      case 'movie':
        return data.map(function (item, index) {
          return {
            '@type': 'ListItem',
            position: "" + (index + 1),
            item: {
              '@context': 'https://schema.org',
              '@type': 'Movie',
              name: item.name,
              url: item.url,
              image: item.image,
              dateCreated: item.dateCreated,
              director: item.director ? Array.isArray(item.director) ? item.director.map(function (director) {
                return {
                  '@type': 'Person',
                  name: director.name
                };
              }) : {
                '@type': 'Person',
                name: item.director.name
              } : undefined,
              review: setReviews(item.review)
            }
          };
        });
      case 'recipe':
        return data.map(function (_ref2, index) {
          var authorName = _ref2.authorName,
            images = _ref2.images,
            yields = _ref2.yields,
            category = _ref2.category,
            calories = _ref2.calories,
            aggregateRating = _ref2.aggregateRating,
            video = _ref2.video,
            ingredients = _ref2.ingredients,
            instructions = _ref2.instructions,
            cuisine = _ref2.cuisine,
            rest = _objectWithoutPropertiesLoose(_ref2, _excluded2$1);
          return {
            '@type': 'ListItem',
            position: "" + (index + 1),
            item: _extends({
              '@context': 'https://schema.org',
              '@type': 'Recipe'
            }, rest, {
              author: setAuthor(authorName),
              image: images,
              recipeYield: yields,
              recipeCategory: category,
              recipeCuisine: cuisine,
              nutrition: setNutrition(calories),
              aggregateRating: setAggregateRating(aggregateRating),
              video: setVideo(video),
              recipeIngredient: ingredients,
              recipeInstructions: instructions.map(setInstruction)
            })
          };
        });
      case 'custom':
        return data.map(function (item, index) {
          var _item$position;
          return {
            '@type': 'ListItem',
            position: (_item$position = item.position) != null ? _item$position : index + 1,
            item: {
              '@type': item.type,
              name: item.name
            }
          };
        });
    }
  }
  var jsonLdData = _extends({
    '@type': 'ItemList'
  }, rest, {
    itemListElement: generateList(data, ofType)
  }, rest);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    type: type,
    keyOverride: keyOverride
  }, jsonLdData, {
    scriptKey: "Carousel"
  }));
}

var _excluded$u = ["type", "keyOverride", "url", "title", "images", "section", "dateCreated", "datePublished", "dateModified", "authorName", "authorType", "publisherName", "publisherLogo", "body", "isAccessibleForFree"];
function NewsArticleJsonLd(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'NewsArticle' : _ref$type,
    keyOverride = _ref.keyOverride,
    url = _ref.url,
    title = _ref.title,
    images = _ref.images,
    section = _ref.section,
    dateCreated = _ref.dateCreated,
    datePublished = _ref.datePublished,
    dateModified = _ref.dateModified,
    authorName = _ref.authorName,
    publisherName = _ref.publisherName,
    publisherLogo = _ref.publisherLogo,
    body = _ref.body,
    isAccessibleForFree = _ref.isAccessibleForFree,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$u);
  var data = _extends({}, rest, {
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    headline: title,
    image: images,
    articleSection: section,
    dateCreated: dateCreated || datePublished,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: setAuthor(authorName),
    publisher: setPublisher(publisherName, publisherLogo),
    articleBody: body,
    isAccessibleForFree: isAccessibleForFree
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    type: type,
    keyOverride: keyOverride
  }, data, {
    scriptKey: "NewsArticle"
  }));
}

var _excluded$t = ["type", "keyOverride", "baseSalary", "hiringOrganization", "applicantLocationRequirements", "experienceRequirements", "jobLocation"];
function JobPostingJsonLd(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'JobPosting' : _ref$type,
    keyOverride = _ref.keyOverride,
    baseSalary = _ref.baseSalary,
    hiringOrganization = _ref.hiringOrganization,
    applicantLocationRequirements = _ref.applicantLocationRequirements,
    experienceRequirements = _ref.experienceRequirements,
    jobLocation = _ref.jobLocation,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$t);
  function setBaseSalary(baseSalary) {
    if (baseSalary) {
      return {
        '@type': 'MonetaryAmount',
        currency: baseSalary.currency,
        value: _extends({
          '@type': 'QuantitativeValue',
          unitText: baseSalary.unitText
        }, Array.isArray(baseSalary.value) ? {
          minValue: baseSalary.value[0],
          maxValue: baseSalary.value[1]
        } : {
          value: baseSalary.value
        })
      };
    }
    return undefined;
  }
  function setHiringOrganization(org) {
    if (org === 'confidential') {
      return 'confidential';
    }
    return {
      '@type': 'Organization',
      name: org.name,
      sameAs: org.sameAs,
      logo: org.logo
    };
  }
  function setJobLocation(location) {
    if (location) {
      return {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressCountry: location.addressCountry,
          addressLocality: location.addressLocality,
          addressRegion: location.addressRegion,
          postalCode: location.postalCode,
          streetAddress: location.streetAddress
        }
      };
    }
    return undefined;
  }
  function setApplicantLocationRequirements(requirements) {
    if (requirements) {
      return {
        '@type': 'Country',
        name: requirements
      };
    }
    return undefined;
  }
  function setOccupationalExperienceRequirements(requirements) {
    if (requirements) {
      return {
        '@type': requirements['@type'] ? requirements['@type'] : 'OccupationalExperienceRequirements',
        monthsOfExperience: requirements.minimumMonthsOfExperience
      };
    }
    return undefined;
  }
  function setEducationalOccupationalCredential(requirements) {
    if (requirements) {
      return {
        '@type': requirements['@type'] ? requirements['@type'] : 'EducationalOccupationalCredential',
        credentialCategory: requirements.credentialCategory
      };
    }
    return undefined;
  }
  var data = _extends({}, rest, {
    baseSalary: setBaseSalary(baseSalary),
    hiringOrganization: setHiringOrganization(hiringOrganization),
    jobLocation: setJobLocation(jobLocation),
    applicantLocationRequirements: setApplicantLocationRequirements(applicantLocationRequirements),
    experienceRequirements: setOccupationalExperienceRequirements(experienceRequirements == null ? void 0 : experienceRequirements.occupational),
    educationRequirements: setEducationalOccupationalCredential(experienceRequirements == null ? void 0 : experienceRequirements.educational),
    experienceInPlaceOfEducation: experienceRequirements == null ? void 0 : experienceRequirements.experienceInPlaceOfEducation
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    type: type,
    keyOverride: keyOverride
  }, data, {
    scriptKey: "JobPosting"
  }));
}

function setAddress(address) {
  if (!address) return undefined;
  if (!Array.isArray(address)) return toPostalAddress(address);
  // If array of one address, replace with single address
  if (address.length === 1) return toPostalAddress(address[0]);
  // If array, return mapped array of PostalAddresses
  return address.map(toPostalAddress);
}
function toPostalAddress(address) {
  if (typeof address === 'string') return address;
  return _extends({
    '@type': 'PostalAddress'
  }, address);
}

function setGeo(geo) {
  if (geo) {
    return _extends({}, geo, {
      '@type': 'GeoCoordinates'
    });
  }
  return undefined;
}

function setAction(action) {
  if (action) {
    return {
      '@type': action.actionType,
      name: action.actionName,
      target: action.target
    };
  }
  return undefined;
}

function setGeoCircle(geoCircle) {
  if (geoCircle) {
    return {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: geoCircle.geoMidpoint.latitude,
        longitude: geoCircle.geoMidpoint.longitude
      },
      geoRadius: geoCircle.geoRadius
    };
  }
  return undefined;
}

function setOffer(offer) {
  function setPriceSpecification(priceSpecification) {
    if (priceSpecification) {
      return {
        '@type': priceSpecification.type,
        priceCurrency: priceSpecification.priceCurrency,
        price: priceSpecification.price
      };
    }
    return undefined;
  }
  function setItemOffered(itemOffered) {
    if (itemOffered) {
      return _extends({}, itemOffered, {
        '@type': 'Service'
      });
    }
    return undefined;
  }
  if (offer) {
    return _extends({}, offer, {
      '@type': 'Offer',
      priceSpecification: setPriceSpecification(offer.priceSpecification),
      itemOffered: setItemOffered(offer.itemOffered)
    });
  }
  return undefined;
}

function setOpeningHours(openingHours) {
  if (openingHours) {
    return _extends({}, openingHours, {
      '@type': 'OpeningHoursSpecification'
    });
  }
  return undefined;
}

var _excluded$s = ["type", "keyOverride", "address", "geo", "rating", "review", "action", "areaServed", "makesOffer", "openingHours", "images"];
function LocalBusinessJsonLd(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'LocalBusiness' : _ref$type,
    keyOverride = _ref.keyOverride,
    address = _ref.address,
    geo = _ref.geo,
    rating = _ref.rating,
    review = _ref.review,
    action = _ref.action,
    areaServed = _ref.areaServed,
    makesOffer = _ref.makesOffer,
    openingHours = _ref.openingHours,
    images = _ref.images,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$s);
  var data = _extends({}, rest, {
    image: images,
    address: setAddress(address),
    geo: setGeo(geo),
    aggregateRating: setAggregateRating(rating),
    review: setReviews(review),
    potentialAction: setAction(action),
    areaServed: areaServed && areaServed.map(setGeoCircle),
    makesOffer: makesOffer == null ? void 0 : makesOffer.map(setOffer),
    openingHoursSpecification: Array.isArray(openingHours) ? openingHours.map(setOpeningHours) : setOpeningHours(openingHours)
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    type: type,
    keyOverride: keyOverride
  }, data, {
    scriptKey: "LocalBusiness"
  }));
}

var _excluded$r = ["type", "keyOverride", "mainEntity"],
  _excluded2 = ["upvoteCount"];
function QAPageJsonLd(_ref) {
  var _mainEntity$author, _mainEntity$acceptedA, _mainEntity$acceptedA2;
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'QAPage' : _ref$type,
    keyOverride = _ref.keyOverride,
    mainEntity = _ref.mainEntity,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$r);
  var data = _extends({}, rest, {
    mainEntity: _extends({}, mainEntity, {
      '@type': 'Question',
      author: setAuthor((_mainEntity$author = mainEntity.author) == null ? void 0 : _mainEntity$author.name)
    }, mainEntity.acceptedAnswer && {
      acceptedAnswer: _extends({}, mainEntity.acceptedAnswer, {
        '@type': 'Answer',
        author: setAuthor((_mainEntity$acceptedA = mainEntity.acceptedAnswer) == null ? void 0 : (_mainEntity$acceptedA2 = _mainEntity$acceptedA.author) == null ? void 0 : _mainEntity$acceptedA2.name)
      })
    }, mainEntity.suggestedAnswer && {
      suggestedAnswer: mainEntity.suggestedAnswer.map(function (_ref2) {
        var _rest$author;
        var upvoteCount = _ref2.upvoteCount,
          rest = _objectWithoutPropertiesLoose(_ref2, _excluded2);
        return _extends({}, rest, {
          '@type': 'Answer',
          upvoteCount: upvoteCount || 0,
          author: setAuthor((_rest$author = rest.author) == null ? void 0 : _rest$author.name)
        });
      })
    })
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    type: type,
    keyOverride: keyOverride
  }, data, {
    scriptKey: "QAPage"
  }));
}

function setItemListElements(items) {
  if (items && items.length) {
    return items.map(function (item) {
      return {
        '@type': 'ListItem',
        position: item.position,
        item: {
          '@id': item.item,
          name: item.name
        }
      };
    });
  }
  return undefined;
}

var _excluded$q = ["type", "keyOverride", "breadcrumb"];
function ProfilePageJsonLd(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'ProfilePage' : _ref$type,
    keyOverride = _ref.keyOverride,
    breadcrumb = _ref.breadcrumb,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$q);
  var data = _extends({}, rest, {
    breadcrumb: Array.isArray(breadcrumb) ? {
      '@type': 'BreadcrumbList',
      itemListElement: setItemListElements(breadcrumb)
    } : breadcrumb
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    type: type,
    keyOverride: keyOverride
  }, data, {
    scriptKey: "ProfilePage"
  }));
}

var _excluded$p = ["type", "keyOverride", "potentialActions"];
function SiteLinksSearchBoxJsonLd(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'WebSite' : _ref$type,
    keyOverride = _ref.keyOverride,
    potentialActions = _ref.potentialActions,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$p);
  function setPotentialAction(action) {
    if (action) {
      var target = action.target,
        queryInput = action.queryInput;
      return {
        '@type': 'SearchAction',
        target: target + "={" + queryInput + "}",
        'query-input': "required name=" + queryInput
      };
    }
    return undefined;
  }
  var data = _extends({}, rest, {
    potentialAction: potentialActions.map(setPotentialAction)
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    type: type,
    keyOverride: keyOverride
  }, data, {
    scriptKey: "jsonld-siteLinksSearchBox"
  }));
}

var _excluded$o = ["type", "keyOverride", "authorName", "images", "yields", "category", "cuisine", "calories", "aggregateRating", "video", "ingredients", "instructions"];
function RecipeJsonLd(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'Recipe' : _ref$type,
    keyOverride = _ref.keyOverride,
    authorName = _ref.authorName,
    images = _ref.images,
    yields = _ref.yields,
    category = _ref.category,
    cuisine = _ref.cuisine,
    calories = _ref.calories,
    aggregateRating = _ref.aggregateRating,
    video = _ref.video,
    ingredients = _ref.ingredients,
    instructions = _ref.instructions,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$o);
  var data = _extends({}, rest, {
    author: setAuthor(authorName),
    image: images,
    recipeYield: yields,
    recipeCategory: category,
    recipeCuisine: cuisine,
    nutrition: setNutrition(calories),
    aggregateRating: setAggregateRating(aggregateRating),
    video: setVideo(video),
    recipeIngredient: ingredients,
    recipeInstructions: instructions ? instructions.map(setInstruction) : undefined
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    type: type,
    keyOverride: keyOverride
  }, data, {
    scriptKey: "recipe"
  }));
}

function setLocation(location) {
  if (!location) {
    return undefined;
  }
  if (typeof location === 'string') {
    return location;
  }
  if ('url' in location) {
    return setVirtualLocation(location);
  } else {
    return setPlace(location);
  }
}
function setVirtualLocation(location) {
  return _extends({}, location, {
    '@type': 'VirtualLocation'
  });
}
function setPlace(location) {
  return _extends({}, location, {
    address: setAddress(location.address),
    '@type': 'Place'
  });
}

var _excluded$n = ["type"];
function setPerformer(performer) {
  if (performer) {
    var type = performer.type,
      restPerformer = _objectWithoutPropertiesLoose(performer, _excluded$n);
    return _extends({}, restPerformer, {
      '@type': type || 'PerformingGroup'
    });
  }
  return undefined;
}

var _excluded$m = ["seller"];
function setOffers(offers) {
  function mapOffer(_ref) {
    var seller = _ref.seller,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$m);
    return _extends({}, rest, {
      '@type': 'Offer'
    }, seller && {
      seller: {
        '@type': 'Organization',
        name: seller.name
      }
    });
  }
  if (Array.isArray(offers)) {
    return offers.map(mapOffer);
  } else if (offers) {
    return mapOffer(offers);
  }
  return undefined;
}

function setAggregateOffer(aggregateOffer) {
  if (aggregateOffer) {
    return {
      '@type': 'AggregateOffer',
      priceCurrency: aggregateOffer.priceCurrency,
      highPrice: aggregateOffer.highPrice,
      lowPrice: aggregateOffer.lowPrice,
      offerCount: aggregateOffer.offerCount,
      offers: setOffers(aggregateOffer.offers)
    };
  }
  return undefined;
}

var _excluded$l = ["type"];
function setOrganizer(organizer) {
  if (organizer) {
    var type = organizer.type,
      restOrganizer = _objectWithoutPropertiesLoose(organizer, _excluded$l);
    return _extends({}, restOrganizer, {
      '@type': type || 'Person'
    });
  }
  return undefined;
}

var _excluded$k = ["type", "keyOverride", "location", "images", "offers", "aggregateOffer", "performers", "organizer", "eventStatus", "eventAttendanceMode"];
function EventJsonLd(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'Event' : _ref$type,
    keyOverride = _ref.keyOverride,
    location = _ref.location,
    images = _ref.images,
    offers = _ref.offers,
    aggregateOffer = _ref.aggregateOffer,
    performers = _ref.performers,
    organizer = _ref.organizer,
    eventStatus = _ref.eventStatus,
    eventAttendanceMode = _ref.eventAttendanceMode,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$k);
  var data = _extends({}, rest, {
    location: setLocation(location),
    image: images,
    offers: offers ? setOffers(offers) : setAggregateOffer(aggregateOffer),
    performer: Array.isArray(performers) ? performers.map(setPerformer) : setPerformer(performers),
    organizer: Array.isArray(organizer) ? organizer.map(setOrganizer) : setOrganizer(organizer),
    eventStatus: eventStatus ? "https://schema.org/" + eventStatus : undefined,
    eventAttendanceMode: eventAttendanceMode ? "https://schema.org/" + eventAttendanceMode : undefined
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    type: type,
    keyOverride: keyOverride
  }, data, {
    scriptKey: "Event"
  }));
}

function setContactPoint(contactPoint) {
  if (contactPoint) {
    return _extends({}, contactPoint, {
      '@type': 'ContactPoint'
    });
  }
  return undefined;
}

var _excluded$j = ["type", "keyOverride", "contactPoint"];
function CorporateContactJsonLd(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'Organization' : _ref$type,
    keyOverride = _ref.keyOverride,
    contactPoint = _ref.contactPoint,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$j);
  var data = _extends({}, rest, {
    contactPoint: contactPoint.map(setContactPoint)
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    type: type,
    keyOverride: keyOverride
  }, data, {
    scriptKey: "CorporateContact"
  }));
}

function setCreativeWork(creativeWork) {
  if (creativeWork) {
    return _extends({}, creativeWork, {
      '@type': 'CreativeWork'
    });
  }
  return undefined;
}

var _excluded$i = ["type", "keyOverride", "hasPart"];
function CollectionPageJsonLd(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'CollectionPage' : _ref$type,
    keyOverride = _ref.keyOverride,
    hasPart = _ref.hasPart,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$i);
  var data = _extends({}, rest, {
    hasPart: hasPart.map(setCreativeWork)
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    type: type,
    keyOverride: keyOverride
  }, data, {
    scriptKey: "CollectionPage"
  }));
}

function setManufacturer(manufacturer) {
  if (manufacturer && (manufacturer.manufacturerName || manufacturer.manufacturerLogo)) {
    return {
      '@type': 'Organization',
      name: manufacturer.manufacturerName,
      logo: setImage(manufacturer.manufacturerLogo)
    };
  }
  return undefined;
}

function setBrand(brand) {
  if (brand) {
    return {
      '@type': 'Brand',
      name: brand
    };
  }
  return undefined;
}

var _excluded$h = ["type", "keyOverride", "images", "brand", "reviews", "aggregateRating", "manufacturerLogo", "manufacturerName", "offers", "aggregateOffer", "productName"];
function ProductJsonLd(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'Product' : _ref$type,
    keyOverride = _ref.keyOverride,
    images = _ref.images,
    brand = _ref.brand,
    reviews = _ref.reviews,
    aggregateRating = _ref.aggregateRating,
    manufacturerLogo = _ref.manufacturerLogo,
    manufacturerName = _ref.manufacturerName,
    offers = _ref.offers,
    aggregateOffer = _ref.aggregateOffer,
    productName = _ref.productName,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$h);
  var data = _extends({}, rest, {
    image: images,
    brand: setBrand(brand),
    review: setReviews(reviews),
    aggregateRating: setAggregateRating(aggregateRating),
    manufacturer: setManufacturer({
      manufacturerLogo: manufacturerLogo,
      manufacturerName: manufacturerName
    }),
    offers: offers ? setOffers(offers) : setAggregateOffer(aggregateOffer),
    name: productName
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    type: type,
    keyOverride: keyOverride
  }, data, {
    scriptKey: "Product"
  }));
}

var _excluded$g = ["type", "keyOverride", "priceCurrency", "price", "aggregateRating", "review", "keywords"];
function SoftwareAppJsonLd(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'SoftwareApplication' : _ref$type,
    keyOverride = _ref.keyOverride,
    priceCurrency = _ref.priceCurrency,
    price = _ref.price,
    aggregateRating = _ref.aggregateRating,
    review = _ref.review,
    keywords = _ref.keywords,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$g);
  var data = _extends({}, rest, {
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: priceCurrency
    },
    aggregateRating: setAggregateRating(aggregateRating),
    review: setReviews(review),
    keywords: keywords
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    type: type,
    keyOverride: keyOverride
  }, data, {
    scriptKey: "SoftwareApp"
  }));
}

var _excluded$f = ["type", "keyOverride"];
function VideoJsonLd(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'Video' : _ref$type,
    keyOverride = _ref.keyOverride,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$f);
  var data = setVideo(rest, true);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    type: type,
    keyOverride: keyOverride
  }, data, {
    scriptKey: "Video"
  }));
}

function setProducer(producer) {
  if (producer) {
    return {
      '@type': 'Organization',
      sameAs: producer.url,
      name: producer.name
    };
  }
  return undefined;
}

function setProvider(provider) {
  if (provider) {
    return {
      '@type': provider.type || 'Organization',
      name: provider.name,
      sameAs: provider.url
    };
  }
  return undefined;
}

var _excluded$e = ["type", "keyOverride", "aggregateRating", "trailer", "reviews", "image", "authorName", "provider", "producerName", "producerUrl", "offers", "operatingSystemName", "platformName", "translatorName", "languageName", "genreName", "publisherName"];
function VideoGameJsonLd(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'VideoGame' : _ref$type,
    keyOverride = _ref.keyOverride,
    aggregateRating = _ref.aggregateRating,
    trailer = _ref.trailer,
    reviews = _ref.reviews,
    image = _ref.image,
    authorName = _ref.authorName,
    provider = _ref.provider,
    producerName = _ref.producerName,
    producerUrl = _ref.producerUrl,
    offers = _ref.offers,
    operatingSystemName = _ref.operatingSystemName,
    platformName = _ref.platformName,
    translatorName = _ref.translatorName,
    languageName = _ref.languageName,
    genreName = _ref.genreName,
    publisherName = _ref.publisherName,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$e);
  var data = _extends({}, rest, {
    aggregateRating: setAggregateRating(aggregateRating),
    trailer: setVideo(trailer),
    review: setReviews(reviews),
    image: setImage(image),
    author: setAuthor(authorName),
    provider: setProvider(provider),
    producer: setProducer({
      name: producerName,
      url: producerUrl
    }),
    offers: setOffers(offers),
    operatingSystem: operatingSystemName,
    gamePlatform: platformName,
    translator: translatorName,
    inLanguage: languageName,
    genre: genreName,
    publisher: publisherName
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    type: type,
    keyOverride: keyOverride
  }, data, {
    scriptKey: "VideoGame"
  }));
}

function setContactPoints(contactPoint) {
  if (contactPoint && contactPoint.length) {
    return contactPoint.map(function (contactPoint) {
      return _extends({
        '@type': 'ContactPoint'
      }, contactPoint);
    });
  }
  return undefined;
}

var _excluded$d = ["type", "keyOverride", "address", "contactPoints", "contactPoint"];
function OrganizationJsonLd(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'Organization' : _ref$type,
    keyOverride = _ref.keyOverride,
    address = _ref.address,
    contactPoints = _ref.contactPoints,
    contactPoint = _ref.contactPoint,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$d);
  var data = _extends({}, rest, {
    address: setAddress(address),
    contactPoint: setContactPoints(contactPoint || contactPoints)
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    type: type,
    keyOverride: keyOverride
  }, data, {
    scriptKey: "organization"
  }));
}

function setQuestions(questions) {
  if (questions && questions.length) {
    return questions.map(function (question) {
      return {
        '@type': 'Question',
        name: question.questionName,
        acceptedAnswer: {
          '@type': 'Answer',
          text: question.acceptedAnswerText
        }
      };
    });
  }
  return undefined;
}

var _excluded$c = ["type", "keyOverride", "mainEntity"];
function FAQPageJsonLd(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'FAQPage' : _ref$type,
    keyOverride = _ref.keyOverride,
    mainEntity = _ref.mainEntity,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$c);
  var data = _extends({}, rest, {
    mainEntity: setQuestions(mainEntity)
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    type: type,
    keyOverride: keyOverride
  }, data, {
    scriptKey: "faq-page"
  }));
}

var _excluded$b = ["type", "keyOverride"];
function LogoJsonLd(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'Organization' : _ref$type,
    keyOverride = _ref.keyOverride,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$b);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    type: type,
    keyOverride: keyOverride
  }, rest, {
    scriptKey: "Logo"
  }));
}

var _excluded$a = ["type", "keyOverride"];
function DatasetJsonLd(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'Dataset' : _ref$type,
    keyOverride = _ref.keyOverride,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$a);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    type: type,
    keyOverride: keyOverride
  }, rest, {
    scriptKey: "dataset"
  }));
}

var _excluded$9 = ["type", "keyOverride", "courseName", "provider"];
function CourseJsonLd(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'Course' : _ref$type,
    keyOverride = _ref.keyOverride,
    courseName = _ref.courseName,
    provider = _ref.provider,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$9);
  var data = _extends({
    name: courseName
  }, rest, {
    provider: setProvider(provider)
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    type: type,
    keyOverride: keyOverride
  }, data, {
    scriptKey: "course"
  }));
}

var _excluded$8 = ["type", "keyOverride", "itemListElements"];
function BreadCrumbJsonLd(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'BreadcrumbList' : _ref$type,
    keyOverride = _ref.keyOverride,
    itemListElements = _ref.itemListElements,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$8);
  var data = _extends({}, rest, {
    itemListElement: setItemListElements(itemListElements)
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    type: type,
    keyOverride: keyOverride
  }, data, {
    scriptKey: "breadcrumb"
  }));
}

var _excluded$7 = ["type", "id", "keyOverride", "aggregateRating"];
function BrandJsonLd(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'Brand' : _ref$type,
    id = _ref.id,
    keyOverride = _ref.keyOverride,
    aggregateRating = _ref.aggregateRating,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$7);
  var data = _extends({
    aggregateRating: setAggregateRating(aggregateRating),
    '@id': id
  }, rest);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    type: type,
    keyOverride: keyOverride
  }, data, {
    scriptKey: "brand"
  }));
}

var _excluded$6 = ["type", "keyOverride", "url", "title", "images", "datePublished", "dateModified", "authorName", "publisherName", "publisherLogo", "description", "isAccessibleForFree"];
function ArticleJsonLd(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'Article' : _ref$type,
    keyOverride = _ref.keyOverride,
    url = _ref.url,
    title = _ref.title,
    images = _ref.images,
    datePublished = _ref.datePublished,
    dateModified = _ref.dateModified,
    authorName = _ref.authorName,
    _ref$publisherName = _ref.publisherName,
    publisherName = _ref$publisherName === void 0 ? undefined : _ref$publisherName,
    _ref$publisherLogo = _ref.publisherLogo,
    publisherLogo = _ref$publisherLogo === void 0 ? undefined : _ref$publisherLogo,
    description = _ref.description,
    isAccessibleForFree = _ref.isAccessibleForFree,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$6);
  var data = _extends({
    datePublished: datePublished,
    description: description,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    headline: title,
    image: images,
    dateModified: dateModified || datePublished,
    author: setAuthor(authorName),
    publisher: setPublisher(publisherName, publisherLogo),
    isAccessibleForFree: isAccessibleForFree
  }, rest);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    type: type,
    keyOverride: keyOverride
  }, data, {
    scriptKey: "article"
  }));
}

function setReviewedBy(reviewedBy) {
  if (reviewedBy) {
    return _extends({
      '@type': (reviewedBy == null ? void 0 : reviewedBy.type) || 'Organization'
    }, reviewedBy);
  }
  return undefined;
}

var _excluded$5 = ["keyOverride", "reviewedBy"];
function WebPageJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
    reviewedBy = _ref.reviewedBy,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$5);
  var data = _extends({}, rest, {
    reviewedBy: setReviewedBy(reviewedBy)
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    keyOverride: keyOverride
  }, data, {
    type: "WebPage",
    scriptKey: "WebPage"
  }));
}

var _excluded$4 = ["type", "keyOverride"];
function SocialProfileJsonLd(_ref) {
  var type = _ref.type,
    keyOverride = _ref.keyOverride,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$4);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    type: type,
    keyOverride: keyOverride
  }, rest, {
    scriptKey: "social"
  }));
}

function setCost(cost) {
  if (cost) {
    return _extends({}, cost, {
      '@type': 'MonetaryAmount'
    });
  }
  return undefined;
}

function setSupply(supply) {
  if (supply) {
    return supply.map(function (supplyItem) {
      return {
        '@type': 'HowToSupply',
        name: supplyItem
      };
    });
  }
  return undefined;
}

function setTool(tool) {
  if (tool) {
    return tool.map(function (toolItem) {
      return {
        '@type': 'HowToTool',
        name: toolItem
      };
    });
  }
  return undefined;
}

function setStep(step) {
  if (step) {
    return step.map(function (stepElement) {
      var itemListElement = stepElement.itemListElement,
        image = stepElement.image;
      var currentListElements = itemListElement == null ? void 0 : itemListElement.map(function (_ref) {
        var type = _ref.type,
          text = _ref.text;
        return {
          '@type': type,
          text: text
        };
      });
      return _extends({}, stepElement, {
        '@type': 'HowToStep',
        itemListElement: currentListElements,
        image: setImage(image)
      });
    });
  }
  return undefined;
}

var _excluded$3 = ["type", "keyOverride", "image", "estimatedCost", "supply", "tool", "step"];
function howToJsonLd(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'HowTo' : _ref$type,
    keyOverride = _ref.keyOverride,
    image = _ref.image,
    estimatedCost = _ref.estimatedCost,
    supply = _ref.supply,
    tool = _ref.tool,
    step = _ref.step,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$3);
  var data = _extends({}, rest, {
    image: setImage(image),
    estimatedCost: setCost(estimatedCost),
    supply: setSupply(supply),
    tool: setTool(tool),
    step: setStep(step)
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    type: type,
    keyOverride: keyOverride
  }, data, {
    scriptKey: "howTo"
  }));
}

var _excluded$2 = ["keyOverride", "images"];
function ImageJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
    images = _ref.images,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({}, rest, {
    type: "ImageObject",
    keyOverride: keyOverride,
    dataArray: images,
    scriptKey: "image"
  }));
}

function setAmenityFeature(amenityFeature) {
  if (!amenityFeature) return undefined;
  if (!Array.isArray(amenityFeature)) {
    return decorateAmenityFeature(amenityFeature);
  }
  if (amenityFeature.length === 1) {
    return decorateAmenityFeature(amenityFeature[0]);
  }
  return amenityFeature.map(decorateAmenityFeature);
}
function decorateAmenityFeature(amenity) {
  return _extends({
    '@type': 'LocationFeatureSpecification'
  }, amenity);
}

var _excluded$1 = ["address", "geo", "images", "keyOverride", "openingHours", "type", "amenityFeature", "rating"];
function CampgroundJsonLd(_ref) {
  var address = _ref.address,
    geo = _ref.geo,
    images = _ref.images,
    keyOverride = _ref.keyOverride,
    openingHours = _ref.openingHours,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'Campground' : _ref$type,
    amenityFeature = _ref.amenityFeature,
    rating = _ref.rating,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  var data = _extends({
    image: images,
    openingHoursSpecification: Array.isArray(openingHours) ? openingHours.map(setOpeningHours) : setOpeningHours(openingHours),
    address: setAddress(address),
    geo: setGeo(geo),
    amenityFeature: setAmenityFeature(amenityFeature),
    aggregateRating: setAggregateRating(rating)
  }, rest);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    type: type,
    keyOverride: keyOverride
  }, data, {
    scriptKey: "campground"
  }));
}

var _excluded = ["address", "geo", "images", "keyOverride", "openingHours", "type"];
function ParkJsonLd(_ref) {
  var address = _ref.address,
    geo = _ref.geo,
    images = _ref.images,
    keyOverride = _ref.keyOverride,
    openingHours = _ref.openingHours,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'Park' : _ref$type,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  var data = _extends({
    image: images,
    openingHoursSpecification: Array.isArray(openingHours) ? openingHours.map(setOpeningHours) : setOpeningHours(openingHours),
    address: setAddress(address),
    geo: setGeo(geo)
  }, rest);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsonLd, _extends({
    type: type,
    keyOverride: keyOverride
  }, data, {
    scriptKey: "park"
  }));
}




/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app!":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app! ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app */ "./pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./globals.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/globals.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./globals.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/globals.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./globals.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/globals.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

const isOldIE = function isOldIE1() {
    let memo;
    return function memorize() {
        if (typeof memo === 'undefined') {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            memo = Boolean(window && document && document.all && !window.atob);
        }
        return memo;
    };
}();
const getTarget = function getTarget1() {
    const memo = {
    };
    return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
            let styleTarget = document.querySelector(target);
            // Special case to return head of iframe instead of iframe itself
            if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                try {
                    // This will throw an exception if access to iframe is blocked
                    // due to cross-origin restrictions
                    styleTarget = styleTarget.contentDocument.head;
                } catch (e) {
                    // istanbul ignore next
                    styleTarget = null;
                }
            }
            memo[target] = styleTarget;
        }
        return memo[target];
    };
}();
const stylesInDom = [];
function getIndexByIdentifier(identifier) {
    let result = -1;
    for(let i = 0; i < stylesInDom.length; i++){
        if (stylesInDom[i].identifier === identifier) {
            result = i;
            break;
        }
    }
    return result;
}
function modulesToDom(list, options) {
    const idCountMap = {
    };
    const identifiers = [];
    for(let i = 0; i < list.length; i++){
        const item = list[i];
        const id = options.base ? item[0] + options.base : item[0];
        const count = idCountMap[id] || 0;
        const identifier = id + ' ' + count.toString();
        idCountMap[id] = count + 1;
        const index = getIndexByIdentifier(identifier);
        const obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3]
        };
        if (index !== -1) {
            stylesInDom[index].references++;
            stylesInDom[index].updater(obj);
        } else {
            stylesInDom.push({
                identifier: identifier,
                updater: addStyle(obj, options),
                references: 1
            });
        }
        identifiers.push(identifier);
    }
    return identifiers;
}
function insertStyleElement(options) {
    const style = document.createElement('style');
    const attributes = options.attributes || {
    };
    if (typeof attributes.nonce === 'undefined') {
        const nonce = // eslint-disable-next-line no-undef
         true ? __webpack_require__.nc : 0;
        if (nonce) {
            attributes.nonce = nonce;
        }
    }
    Object.keys(attributes).forEach(function(key) {
        style.setAttribute(key, attributes[key]);
    });
    if (typeof options.insert === 'function') {
        options.insert(style);
    } else {
        const target = getTarget(options.insert || 'head');
        if (!target) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }
        target.appendChild(style);
    }
    return style;
}
function removeStyleElement(style) {
    // istanbul ignore if
    if (style.parentNode === null) {
        return false;
    }
    style.parentNode.removeChild(style);
}
/* istanbul ignore next  */ const replaceText = function replaceText1() {
    const textStore = [];
    return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
    };
}();
function applyToSingletonTag(style, index, remove, obj) {
    const css = remove ? '' : obj.media ? '@media ' + obj.media + ' {' + obj.css + '}' : obj.css;
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
    } else {
        const cssNode = document.createTextNode(css);
        const childNodes = style.childNodes;
        if (childNodes[index]) {
            style.removeChild(childNodes[index]);
        }
        if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
        } else {
            style.appendChild(cssNode);
        }
    }
}
function applyToTag(style, options, obj) {
    let css = obj.css;
    const media = obj.media;
    const sourceMap = obj.sourceMap;
    if (media) {
        style.setAttribute('media', media);
    } else {
        style.removeAttribute('media');
    }
    if (sourceMap && typeof btoa !== 'undefined') {
        css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */';
    }
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        while(style.firstChild){
            style.removeChild(style.firstChild);
        }
        style.appendChild(document.createTextNode(css));
    }
}
let singleton = null;
let singletonCounter = 0;
function addStyle(obj, options) {
    let style;
    let update;
    let remove;
    if (options.singleton) {
        const styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
    } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);
        remove = function() {
            removeStyleElement(style);
        };
    }
    update(obj);
    return function updateStyle(newObj) {
        if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                return;
            }
            update(obj = newObj);
        } else {
            remove();
        }
    };
}
module.exports = function(list, options) {
    options = options || {
    };
    // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
    // tags it will allow on a page
    if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
    }
    list = list || [];
    let lastIdentifiers = modulesToDom(list, options);
    return function update(newList) {
        newList = newList || [];
        if (Object.prototype.toString.call(newList) !== '[object Array]') {
            return;
        }
        for(let i = 0; i < lastIdentifiers.length; i++){
            const identifier = lastIdentifiers[i];
            const index = getIndexByIdentifier(identifier);
            stylesInDom[index].references--;
        }
        const newLastIdentifiers = modulesToDom(newList, options);
        for(let i1 = 0; i1 < lastIdentifiers.length; i1++){
            const identifier = lastIdentifiers[i1];
            const index = getIndexByIdentifier(identifier);
            if (stylesInDom[index].references === 0) {
                stylesInDom[index].updater();
                stylesInDom.splice(index, 1);
            }
        }
        lastIdentifiers = newLastIdentifiers;
    };
};

//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/globals.css":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/globals.css ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! tailwindcss v2.2.19 | MIT License | https://tailwindcss.com *//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\t   tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n \n:-moz-focusring {\n\toutline: auto;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(229, 231, 235, var(--tw-border-opacity));\n\t--tw-ring-offset-shadow: 0 0 #0000;\n\t--tw-ring-shadow: 0 0 #0000;\n\t--tw-shadow: 0 0 #0000;\n}\n\n[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {\n\t-webkit-appearance: none;\n\t   -moz-appearance: none;\n\t        appearance: none;\n\tbackground-color: #fff;\n\tborder-color: #6b7280;\n\tborder-width: 1px;\n\tborder-radius: 0px;\n\tpadding-top: 0.5rem;\n\tpadding-right: 0.75rem;\n\tpadding-bottom: 0.5rem;\n\tpadding-left: 0.75rem;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\t--tw-shadow: 0 0 #0000;\n}\n\n[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n\t--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-ring-offset-width: 0px;\n\t--tw-ring-offset-color: #fff;\n\t--tw-ring-color: #2563eb;\n\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n\tborder-color: #2563eb;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n\tcolor: #6b7280;\n\topacity: 1;\n}\n\ninput::placeholder,textarea::placeholder {\n\tcolor: #6b7280;\n\topacity: 1;\n}\n\n::-webkit-datetime-edit-fields-wrapper {\n\tpadding: 0;\n}\n\n::-webkit-date-and-time-value {\n\tmin-height: 1.5em;\n}\n\nselect {\n\tbackground-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");\n\tbackground-position: right 0.5rem center;\n\tbackground-repeat: no-repeat;\n\tbackground-size: 1.5em 1.5em;\n\tpadding-right: 2.5rem;\n\t-webkit-print-color-adjust: exact;\n\t        color-adjust: exact;\n}\n\n[multiple] {\n\tbackground-image: initial;\n\tbackground-position: initial;\n\tbackground-repeat: unset;\n\tbackground-size: initial;\n\tpadding-right: 0.75rem;\n\t-webkit-print-color-adjust: unset;\n\t        color-adjust: unset;\n}\n\n[type='checkbox'],[type='radio'] {\n\t-webkit-appearance: none;\n\t   -moz-appearance: none;\n\t        appearance: none;\n\tpadding: 0;\n\t-webkit-print-color-adjust: exact;\n\t        color-adjust: exact;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tbackground-origin: border-box;\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t        user-select: none;\n\tflex-shrink: 0;\n\theight: 1rem;\n\twidth: 1rem;\n\tcolor: #2563eb;\n\tbackground-color: #fff;\n\tborder-color: #6b7280;\n\tborder-width: 1px;\n\t--tw-shadow: 0 0 #0000;\n}\n\n[type='checkbox'] {\n\tborder-radius: 0px;\n}\n\n[type='radio'] {\n\tborder-radius: 100%;\n}\n\n[type='checkbox']:focus,[type='radio']:focus {\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n\t--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-ring-offset-width: 2px;\n\t--tw-ring-offset-color: #fff;\n\t--tw-ring-color: #2563eb;\n\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n}\n\n[type='checkbox']:checked,[type='radio']:checked {\n\tborder-color: transparent;\n\tbackground-color: currentColor;\n\tbackground-size: 100% 100%;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n}\n\n[type='checkbox']:checked {\n\tbackground-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\");\n}\n\n[type='radio']:checked {\n\tbackground-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\");\n}\n\n[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {\n\tborder-color: transparent;\n\tbackground-color: currentColor;\n}\n\n[type='checkbox']:indeterminate {\n\tbackground-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\");\n\tborder-color: transparent;\n\tbackground-color: currentColor;\n\tbackground-size: 100% 100%;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n}\n\n[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {\n\tborder-color: transparent;\n\tbackground-color: currentColor;\n}\n\n[type='file'] {\n\tbackground: unset;\n\tborder-color: inherit;\n\tborder-width: 0;\n\tborder-radius: 0;\n\tpadding: 0;\n\tfont-size: unset;\n\tline-height: inherit;\n}\n\n[type='file']:focus {\n\toutline: 1px auto -webkit-focus-ring-color;\n}\n  /* inter var - latin */\n  @font-face {\n    font-family: \"Inter\";\n    font-style: normal;\n    font-weight: 100 900;\n    font-display: optional;\n    src: url(\"/fonts/inter-var-latin.woff2\") format(\"woff2\");\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\n      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,\n      U+2215, U+FEFF, U+FFFD;\n  }\n\n  .toptitle {\n    position: absolute;\n    top: 10px;\n    z-index: 5;\n    padding: 5px;\n    line-height: 1;\n  }\n\n  /* Write your own custom base styles here */\n  ph1.component {\n    font-size: 27px;\n    text-transform: uppercase;\n    font-family: \"Inter\";\n    letter-spacing: 2px;\n    line-height: 1;\n    margin-top: 6px;\n    margin-bottom: 8px;\n    font-weight: 900;\n    color: #fff;\n    filter: drop-shadow(0.4025px 0.8425px 0.325px black);\n    background-size: cover;\n    background-position: 0% 50%;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -webkit-text-stroke-width: 0;\n    -webkit-text-stroke-color: hsl(0deg 0% 20% / 50%);\n    background-image: linear-gradient(45deg, white, #f6f8fa);\n  }\n  ph1.album {\n    display: -webkit-box;\n    margin: 2px 0 3px 0;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    word-spacing: -0.1em;\n    font-family: FranklinGothic, Lato, sans-serif;\n    font-weight: 400;\n    line-height: 1.5;\n    width: 100%;\n    color: white;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    margin-block: 7px;\n    font-size: 12px;\n    font-family: CircularSp, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl,\n      CircularSp-Grek, CircularSp-Deva, var(--fallback-fonts, sans-serif);\n  }\n  h1 {\n\tfont-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n\tfont-size: 1.875rem;\n\tline-height: 2.25rem;\n\tfont-weight: 700;\n}\n  @media (min-width: 768px) {\n\n\th1 {\n\t\tfont-size: 3rem;\n\t\tline-height: 1;\n\t}\n}\n\n  h1.text-center {\n    font-family: \"DM Sans\";\n    font-family: Segoe UI;\n    letter-spacing: 5px;\n    font-size: 24px;\n    font-weight: 400;\n    line-height: 1.5;\n    text-transform: uppercase;\n  }\n\n  ph2.component {\n    font-size: 27px;\n    text-transform: uppercase;\n    font-family: \"Inter\";\n    letter-spacing: 2px;\n    line-height: 1;\n    margin-top: 6px;\n    margin-bottom: 8px;\n    font-weight: 900;\n    color: #fff;\n    filter: drop-shadow(0.4025px 0.8425px 0.325px black);\n    background-size: cover;\n    background-position: 0% 50%;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -webkit-text-stroke-width: 0;\n    -webkit-text-stroke-color: hsl(0deg 0% 20% / 50%);\n    background-image: linear-gradient(45deg, white, #f6f8fa);\n  }\n\n  ph2.album {\n    display: -webkit-box;\n    margin: 2px 0 3px 0;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    word-spacing: -0.1em;\n    font-family: FranklinGothic, Lato, sans-serif;\n    font-weight: 400;\n    line-height: 1.5;\n    width: 100%;\n    color: white;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    margin-block: 7px;\n    font-size: 12px;\n    font-family: CircularSp, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl,\n      CircularSp-Grek, CircularSp-Deva, var(--fallback-fonts, sans-serif);\n  }\n\n  h2 {\n\tfont-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n\tfont-size: 1.5rem;\n\tline-height: 2rem;\n\tfont-weight: 700;\n}\n\n  @media (min-width: 768px) {\n\n\th2 {\n\t\tfont-size: 2.25rem;\n\t\tline-height: 2.5rem;\n\t}\n}\n\n  ph3.component {\n    font-size: 27px;\n    text-transform: uppercase;\n    font-family: \"Inter\";\n    letter-spacing: 2px;\n    line-height: 1;\n    margin-top: 6px;\n    margin-bottom: 8px;\n    font-weight: 900;\n    color: #fff;\n    filter: drop-shadow(0.4025px 0.8425px 0.325px black);\n    background-size: cover;\n    background-position: 0% 50%;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -webkit-text-stroke-width: 0;\n    -webkit-text-stroke-color: hsl(0deg 0% 20% / 50%);\n    background-image: linear-gradient(45deg, white, #f6f8fa);\n  }\n\n  ph3.album {\n    display: -webkit-box;\n    margin: 2px 0 3px 0;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    word-spacing: -0.1em;\n    font-family: FranklinGothic, Lato, sans-serif;\n    font-weight: 400;\n    line-height: 1.5;\n    width: 100%;\n    color: white;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    margin-block: 7px;\n    font-size: 12px;\n    font-family: CircularSp, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl,\n      CircularSp-Grek, CircularSp-Deva, var(--fallback-fonts, sans-serif);\n  }\n\n  h3 {\n\tfont-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n\tfont-size: 1.25rem;\n\tline-height: 1.75rem;\n\tfont-weight: 700;\n}\n\n  @media (min-width: 768px) {\n\n\th3 {\n\t\tfont-size: 1.875rem;\n\t\tline-height: 2.25rem;\n\t}\n}\n\n  h3.text-center {\n    color: black;\n    font-size: 20px;\n    font-family: \"Inter\";\n    font-weight: 600;\n    letter-spacing: 1px;\n  }\n\n  ph4.component {\n    font-size: 27px;\n    text-transform: uppercase;\n    font-family: \"Inter\";\n    letter-spacing: 2px;\n    line-height: 1;\n    margin-top: 6px;\n    margin-bottom: 8px;\n    font-weight: 900;\n    color: #fff;\n    filter: drop-shadow(0.4025px 0.8425px 0.325px black);\n    background-size: cover;\n    background-position: 0% 50%;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -webkit-text-stroke-width: 0;\n    -webkit-text-stroke-color: hsl(0deg 0% 20% / 50%);\n    background-image: linear-gradient(45deg, white, #f6f8fa);\n  }\n\n  ph4.album {\n    display: -webkit-box;\n    margin: 2px 0 3px 0;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    word-spacing: -0.1em;\n    font-family: FranklinGothic, Lato, sans-serif;\n    font-weight: 400;\n    line-height: 1.5;\n    width: 100%;\n    color: white;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    margin-block: 7px;\n    font-size: 12px;\n    font-family: CircularSp, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl,\n      CircularSp-Grek, CircularSp-Deva, var(--fallback-fonts, sans-serif);\n  }\n\n  h4 {\n\tfont-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n\tfont-size: 1.125rem;\n\tline-height: 1.75rem;\n\tfont-weight: 700;\n}\n\n  p.font-bold.component {\n    font-size: 27px;\n    text-transform: uppercase;\n    font-family: \"Inter\";\n    letter-spacing: 2px;\n    line-height: 1;\n    margin-top: 6px;\n    margin-bottom: 8px;\n    font-weight: 900 !important;\n    color: #fff;\n    filter: drop-shadow(0.4025px 0.8425px 0.325px black);\n    background-size: cover;\n    background-position: 0% 50%;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -webkit-text-stroke-width: 0;\n    -webkit-text-stroke-color: hsl(0deg 0% 20% / 50%);\n    background-image: linear-gradient(45deg, white, #f6f8fa);\n  }\n\n  .text-xs {\n    display: -webkit-box;\n    font-size: 20px !important;\n    line-height: 1.5 !important;\n    font-family: \"DM Sans\";\n    margin: 2px 0 3px 0;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    word-spacing: -0.1em;\n    font-weight: 400;\n    width: 112%;\n    font-family: \"Roboto\", sans-serif;\n    color: #fff;\n    text-transform: uppercase;\n    letter-spacing: 4px;\n  }\n\n  p.font-bold.album {\n    display: -webkit-box;\n    margin: 2px 0 3px 0;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    word-spacing: -0.1em;\n    font-family: FranklinGothic, Lato, sans-serif;\n    font-weight: 400;\n    line-height: 1.5;\n    width: 100%;\n    color: white !important;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    margin-block: 7px;\n    font-size: 12px;\n    font-family: CircularSp, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl,\n      CircularSp-Grek, CircularSp-Deva, var(--fallback-fonts, sans-serif);\n  }\n\n  body {\n\tfont-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n\tfont-size: 0.875rem;\n\tline-height: 1.25rem;\n}\n\n  @media (min-width: 768px) {\n\n\tbody {\n\t\tfont-size: 1rem;\n\t\tline-height: 1.5rem;\n\t}\n}\n\n  .shadow-sm {\n  }\n\n  body {\n    background-image: url(\"/img/aasd.jpg\");\n    background-image: url(\"/img/dogsbg2.jpg\");\n    background-size: cover;\n    width: 100%;\n    height: 100%;\n  }\n\n  .w-bg {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    z-index: -1;\n  }\n  img.w-img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n  }\n\n  a.container {\n    position: relative;\n    width: 50% !important;\n    margin: auto !important;\n    padding: 30px !important;\n    color: white;\n    box-shadow: -0.2em -0.125em 0.125em rgb(0 0 0 / 25%),\n      0 0 0 0.04em rgb(0 0 0 / 30%), 0.02em 0.02em 0.02em rgb(0 0 0 / 40%) inset,\n      -0.05em -0.05em 0.02em rgb(255 255 255 / 80%) inset !important;\n    background-color: #eee;\n    border-radius: 15px;\n    border: 2px outset rgba(255, 255, 255, 0.3);\n    -webkit-backdrop-filter: blur(20px);\n            backdrop-filter: blur(20px);\n    background-image: linear-gradient(\n      145deg,\n      rgba(255, 255, 255, 0.15),\n      transparent\n    );\n    background-color: rgba(0, 0, 0, 0.05);\n    background-image: linear-gradient(\n      145deg,\n      rgba(255, 255, 255, 0.4) 0%,\n      rgba(255, 255, 255, 0.1) 100%\n    );\n  }\n\n  .w-16 {\n    width: 45% !important;\n    border-radius: 20px;\n    filter: saturate(1.025) contrast(1.015)\n      drop-shadow(0.125px 0.25px 0.25px black);\n  }\n\n  img.w-16.shadow-sm {\n    display: flex !important;\n    position: relative !important;\n    width: auto !important;\n    height: 60% !important;\n    -o-object-fit: cover !important;\n       object-fit: cover !important;\n  }\n\n  .w-16::before {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    content: \"\";\n    width: calc(100% + 0px);\n    height: calc(100% + 1px);\n    background: url(https://pudding.cool/2021/10/judge-my-music/assets/images/plastic-small.jpg);\n    background-size: contain;\n    mix-blend-mode: screen;\n    opacity: 1;\n    z-index: 1;\n    mix-blend-mode: difference;\n    opacity: 0.5;\n    border-radius: 20px;\n    filter: brightness(1.125) opacity(1);\n  }\n\n  p.text-center {\n    font-size: 11px;\n    opacity: 0.5;\n    font-weight: 300 !important;\n    font-family: Roboto;\n    line-height: 2;\n    color: white;\n  }\n.container {\n\twidth: 100%;\n}\n@media (min-width: 640px) {\n\n\t.container {\n\t\tmax-width: 640px;\n\t}\n}\n@media (min-width: 768px) {\n\n\t.container {\n\t\tmax-width: 768px;\n\t}\n}\n@media (min-width: 1024px) {\n\n\t.container {\n\t\tmax-width: 1024px;\n\t}\n}\n@media (min-width: 1280px) {\n\n\t.container {\n\t\tmax-width: 1280px;\n\t}\n}\n@media (min-width: 1536px) {\n\n\t.container {\n\t\tmax-width: 1536px;\n\t}\n}\n.static {\n\tposition: static;\n}\n.absolute {\n\tposition: absolute;\n}\n.relative {\n\tposition: relative;\n}\n.bottom-1\\.5 {\n\tbottom: 0.375rem;\n}\n.right-1\\.5 {\n\tright: 0.375rem;\n}\n.bottom-1 {\n\tbottom: 0.25rem;\n}\n.right-1 {\n\tright: 0.25rem;\n}\n.flex {\n\tdisplay: flex;\n}\n.inline-flex {\n\tdisplay: inline-flex;\n}\n.min-h-screen {\n\tmin-height: 100vh;\n}\n.w-72 {\n\twidth: 18rem;\n}\n.w-16 {\n\twidth: 4rem;\n}\n.flex-1 {\n\tflex: 1 1 0%;\n}\n.cursor-\\[ne-resize\\] {\n\tcursor: ne-resize;\n}\n.flex-col {\n\tflex-direction: column;\n}\n.items-center {\n\talign-items: center;\n}\n.justify-center {\n\tjustify-content: center;\n}\n.justify-between {\n\tjustify-content: space-between;\n}\n.space-y-3 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-y-reverse: 0;\n\tmargin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));\n\tmargin-bottom: calc(0.75rem * var(--tw-space-y-reverse));\n}\n.space-x-4 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-x-reverse: 0;\n\tmargin-right: calc(1rem * var(--tw-space-x-reverse));\n\tmargin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.rounded-md {\n\tborder-radius: 0.375rem;\n}\n.border {\n\tborder-width: 1px;\n}\n.bg-gray-700 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(55, 65, 81, var(--tw-bg-opacity));\n}\n.p-5 {\n\tpadding: 1.25rem;\n}\n.px-8 {\n\tpadding-left: 2rem;\n\tpadding-right: 2rem;\n}\n.py-4 {\n\tpadding-top: 1rem;\n\tpadding-bottom: 1rem;\n}\n.text-center {\n\ttext-align: center;\n}\n.text-xs {\n\tfont-size: 0.75rem;\n\tline-height: 1rem;\n}\n.font-bold {\n\tfont-weight: 700;\n}\n.text-green-400 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(52, 211, 153, var(--tw-text-opacity));\n}\n.text-white {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.underline {\n\ttext-decoration: underline;\n}\n.shadow-sm {\n\t--tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.transition-shadow {\n\ttransition-property: box-shadow;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\n.animated-underline {\n    background-image: linear-gradient(#33333300, #33333300),\n      linear-gradient(to right, #00e0f3, #00c4fd);\n    background-size: 100% 2px, 0 2px;\n    background-position: 100% 100%, 0 100%;\n    background-repeat: no-repeat;\n    transition: background-size 0.3s ease;\n  }\n.animated-underline:hover,\n  .animated-underline:focus {\n    background-size: 0 2px, 100% 2px;\n  }\n\n@media (max-width: 630px) {\n  a.container {\n    width: 65% !important;\n    padding: 30px 20px !important;\n    height: auto !important;\n}\np.font-bold.component {\n  font-size: 18px;\n}\n\n.text-xs {\n  font-size: 12px !important;\n  letter-spacing: 3px !important;\n}\np.font-bold.album {\n  font-size: 10px !important;\n}\n\n}\n\n\n\n\n\n.hover\\:text-blue-500:hover {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(59, 130, 246, var(--tw-text-opacity));\n}\n\n\n\n\n\n.hover\\:text-primary-500:hover {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(0, 196, 253, var(--tw-text-opacity));\n}\n\n\n\n\n\n.hover\\:text-primary-400:hover {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(0, 224, 243, var(--tw-text-opacity));\n}\n\n\n\n\n\n.hover\\:text-green-400:hover {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(52, 211, 153, var(--tw-text-opacity));\n}\n\n\n\n\n\n.hover\\:shadow-md:hover {\n\t--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n\n", "",{"version":3,"sources":["webpack://styles/globals.css","webpack://styles/%3Cinput%20css%20VPLaDt%3E","webpack://styles/%3Cinput%20css%20taK0Yq%3E","<no source>"],"names":[],"mappings":"AAAA,iEAAc,CAAd,8FAAc;;AAAd;;;CAAc;;AAAd;;CAAc;;AAAd;;;CCcC,sBAAsB;ADdT;;AAAd;;CAAc;;AAAd;CCsBC,gBAAgB;CAChB,cAAW;IAAX,WAAW;ADvBE;;AAAd;;;CAAc;;AAAd;CCgCC,iBAAiB,EAAE,MAAM;CACzB,8BAA8B,EAAE,MAAM;ADjCzB;;AAAd;;;CAAc;;AAAd;;CAAc;;AAAd;CC8CC,SAAS;AD9CI;;AAAd;;CAAc;;AAAd;CCsDC;;;;;;;;;kBASiB;AD/DJ;;AAAd;;;CAAc;;AAAd;;;CAAc;;AAAd;CC6EC,SAAS,EAAE,MAAM;CACjB,cAAc,EAAE,MAAM;AD9ET;;AAAd;;;CAAc;;AAAd;;CAAc;;AAAd;CC2FC,yCAAiC;SAAjC,iCAAiC;AD3FpB;;AAAd;;CAAc;;AAAd;;CCoGC,mBAAmB;ADpGN;;AAAd;;;CAAc;;AAAd;;;;CCgHC;;;;;;WAMU,EAAE,MAAM;CAClB,cAAc,EAAE,MAAM;ADvHT;;AAAd;;CAAc;;AAAd;CC+HC,cAAc;AD/HD;;AAAd;;CAAc;;AAAd;;CCwIC,cAAc;CACd,cAAc;CACd,kBAAkB;CAClB,wBAAwB;AD3IX;;AAAd;CC+IC,eAAe;AD/IF;;AAAd;CCmJC,WAAW;ADnJE;;AAAd;;;CAAc;;AAAd;;;CAAc;;AAAd;CCiKC,cAAc,EAAE,MAAM;CACtB,qBAAqB,EAAE,MAAM;ADlKhB;;AAAd;;;CAAc;;AAAd;;;CAAc;;AAAd;;;;;CCoLC,oBAAoB,EAAE,MAAM;CAC5B,eAAe,EAAE,MAAM;CACvB,iBAAiB,EAAE,MAAM;CACzB,SAAS,EAAE,MAAM;ADvLJ;;AAAd;;;CAAc;;AAAd;SCgMS,MAAM;CACd,oBAAoB;ADjMP;;AAAd;;CAAc;;AAAd;;;;CC4MC,0BAA0B;AD5Mb;;AAAd;;CAAc;;AAAd;CCoNC,kBAAkB;CAClB,UAAU;ADrNG;;AAAd;;CAAc;;AAAd;CC6NC,8BAA8B;AD7NjB;;AAAd;;;CAAc;;AAAd;CCsOC,gBAAgB;ADtOH;;AAAd;;CAAc;;AAAd;CC8OC,UAAU;AD9OG;;AAAd;;CAAc;;AAAd;CCsPC,wBAAwB;ADtPX;;AAAd;;CAAc;;AAAd;;CC+PC,YAAY;AD/PC;;AAAd;;;CAAc;;AAAd;CCwQC,6BAA6B,EAAE,MAAM;CACrC,oBAAoB,EAAE,MAAM;ADzQf;;AAAd;;CAAc;;AAAd;CCiRC,wBAAwB;ADjRX;;AAAd;;;CAAc;;AAAd;CC0RC,0BAA0B,EAAE,MAAM;CAClC,aAAa,EAAE,MAAM;AD3RR;;AAAd;;;CAAc;;AAAd;;CAAc;;AAAd;CCwSC,kBAAkB;ADxSL,CAAd;;;;EAAc;;AAAd;;EAAc;;AAAd;;;;;;;;;;;;;EEuBE,SAAS;AFvBG;;AAAd;EE2BE,6BAA6B;EAC7B,sBAAsB;AF5BV;;AAAd;EEgCE,SAAS;EACT,UAAU;AFjCE;;AAAd;;EEsCE,gBAAgB;EAChB,SAAS;EACT,UAAU;AFxCE;;AAAd;;EAAc;;AAAd;;;;;EAAc;;AAAd;EEuDE,4NAAsP,EAAE,MAAM;EAC9P,gBAAgB,EAAE,MAAM;AFxDZ;;;AAAd;;;EAAc;;AAAd;EEkEE,oBAAoB;EACpB,oBAAoB;AFnER;;AAAd;;;;;;;;;;;;;;;;;;;;;;;;EAAc;;AAAd;;;EEmGE,sBAAsB,EAAE,MAAM;EAC9B,eAAe,EAAE,MAAM;EACvB,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;AFtGtB;;AAAd;;EAAc;;AAAd;EE8GE,qBAAqB;AF9GT;;AAAd;;;;;;;;EAAc;;AAAd;EE4HE,mBAAmB;AF5HP;;AAAd;EEgIE,gBAAgB;AFhIJ;;AAAd;EEqIE,UAAU;EACV,cAAwC;AFtI5B;;AAAd;;EEqIE,UAAU;EACV,cAAwC;AFtI5B;;AAAd;;EE2IE,eAAe;AF3IH;;AAAd;;;;;;EAAc;;AAAd;CEuJC,aAAa;AFvJA;;AAAd;EE2JE,yBAAyB;AF3Jb;;AAAd;;;;;;EEoKE,kBAAkB;EAClB,oBAAoB;AFrKR;;AAAd;;;EAAc;;AAAd;EE8KE,cAAc;EACd,wBAAwB;AF/KZ;;AAAd;;;;;;EAAc;;AAAd;;;;;EE+LE,UAAU;EACV,oBAAoB;EACpB,cAAc;AFjMF;;AAAd;;;;;EAAc;;AAAd;;;;EE+ME,+GAAyI;AF/M7H;;AAAd;;;;;;;;;;;;;;;EAAc;;AAAd;;;;;;;;EE2OE,cAAc,EAAE,MAAM;EACtB,sBAAsB,EAAE,MAAM;AF5OlB;;AAAd;;;;;EAAc;;AAAd;;EEwPE,eAAe;EACf,YAAY;AFzPA;;AAAd;;EAAc;;AAAd;EEiQE,aAAa;AFjQD;;AGAd;CAAA,sBAAA;CAAA,2DAAA;CAAA,kCAAA;CAAA,2BAAA;CAAA,sBAAA;AH0jBA;;AA1jBA;CGAA,wBAAA;IAAA,qBAAA;SAAA,gBAAA;CAAA,sBAAA;CAAA,qBAAA;CAAA,iBAAA;CAAA,kBAAA;CAAA,mBAAA;CAAA,sBAAA;CAAA,sBAAA;CAAA,qBAAA;CAAA,eAAA;CAAA,mBAAA;CAAA,sBAAA;AHAc;;AAAd;CGAA,8BAAA;CAAA,mBAAA;CAAA,4CAAA;CAAA,2BAAA;CAAA,4BAAA;CAAA,wBAAA;CAAA,2GAAA;CAAA,yGAAA;CAAA,iFAAA;CAAA,qBAAA;AHAc;;AAAd;CGAA,cAAA;CAAA,UAAA;AHAc;;AAAd;CGAA,cAAA;CAAA,UAAA;AHAc;;AAAd;CGAA,UAAA;AHAc;;AAAd;CGAA,iBAAA;AHAc;;AAAd;CGAA,mPAAA;CAAA,wCAAA;CAAA,4BAAA;CAAA,4BAAA;CAAA,qBAAA;CAAA,iCAAA;SAAA,mBAAA;AHAc;;AAAd;CGAA,yBAAA;CAAA,4BAAA;CAAA,wBAAA;CAAA,wBAAA;CAAA,sBAAA;CAAA,iCAAA;SAAA,mBAAA;AHAc;;AAAd;CGAA,wBAAA;IAAA,qBAAA;SAAA,gBAAA;CAAA,UAAA;CAAA,iCAAA;SAAA,mBAAA;CAAA,qBAAA;CAAA,sBAAA;CAAA,6BAAA;CAAA,yBAAA;IAAA,sBAAA;SAAA,iBAAA;CAAA,cAAA;CAAA,YAAA;CAAA,WAAA;CAAA,cAAA;CAAA,sBAAA;CAAA,qBAAA;CAAA,iBAAA;CAAA,sBAAA;AHAc;;AAAd;CGAA,kBAAA;AHAc;;AAAd;CGAA,mBAAA;AHAc;;AAAd;CGAA,8BAAA;CAAA,mBAAA;CAAA,4CAAA;CAAA,2BAAA;CAAA,4BAAA;CAAA,wBAAA;CAAA,2GAAA;CAAA,yGAAA;CAAA,iFAAA;AHAc;;AAAd;CGAA,yBAAA;CAAA,8BAAA;CAAA,0BAAA;CAAA,2BAAA;CAAA,4BAAA;AHAc;;AAAd;CGAA,sQAAA;AHAc;;AAAd;CGAA,oKAAA;AHAc;;AAAd;CGAA,yBAAA;CAAA,8BAAA;AHAc;;AAAd;CGAA,uOAAA;CAAA,yBAAA;CAAA,8BAAA;CAAA,0BAAA;CAAA,2BAAA;CAAA,4BAAA;AHAc;;AAAd;CGAA,yBAAA;CAAA,8BAAA;AHAc;;AAAd;CGAA,iBAAA;CAAA,qBAAA;CAAA,eAAA;CAAA,gBAAA;CAAA,UAAA;CAAA,gBAAA;CAAA,oBAAA;AHAc;;AAAd;CGAA,0CAAA;AHAc;EAAd,sBAAc;EAAd;IAOI,oBAAoB;IACpB,kBAAkB;IAClB,oBAAoB;IACpB,sBAAsB;IACtB,wDAAwD;IACxD;;4BAEwB;EAdd;;EAAd;IAkBI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,YAAY;IACZ,cAAc;EAtBJ;;EAAd,2CAAc;EA4DZ;IACE,eAAe;IACf,yBAAyB;IACzB,oBAAoB;IACpB,mBAAmB;IACnB,cAAc;IACd,eAAe;IACf,kBAAkB;IAClB,gBAA2B;IAC3B,WAAW;IACX,oDAAoD;IACpD,sBAAsB;IACtB,2BAA2B;IAC3B,6BAA6B;IAC7B,oCAAoC;IACpC,4BAA4B;IAC5B,iDAAiD;IACjD,wDAAwD;EAC1D;EAmBA;IACE,oBAAoB;IACpB,mBAAmB;IACnB,qBAAqB;IACrB,4BAA4B;IAC5B,gBAAgB;IAChB,oBAAoB;IACpB,6CAA6C;IAC7C,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;IACX,YAAuB;IACvB,yBAAyB;IACzB,qBAAqB;IACrB,iBAAiB;IACjB,eAAe;IACf;yEACqE;EACvE;EGnHF;CAAA,mOAAA;CAAA,mBAAA;CAAA,oBAAA;CAAA,gBAAA;AH2xBA;EG3xBA;;CAAA;EAAA,eAAA;EAAA,cAAA;CHiyBC;AACD;;EAlyBA;IA+BI,sBAAsB;IACtB,qBAAqB;IACrB,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,yBAAyB;EArCf;;EA4DZ;IACE,eAAe;IACf,yBAAyB;IACzB,oBAAoB;IACpB,mBAAmB;IACnB,cAAc;IACd,eAAe;IACf,kBAAkB;IAClB,gBAA2B;IAC3B,WAAW;IACX,oDAAoD;IACpD,sBAAsB;IACtB,2BAA2B;IAC3B,6BAA6B;IAC7B,oCAAoC;IACpC,4BAA4B;IAC5B,iDAAiD;IACjD,wDAAwD;EAC1D;;EAmBA;IACE,oBAAoB;IACpB,mBAAmB;IACnB,qBAAqB;IACrB,4BAA4B;IAC5B,gBAAgB;IAChB,oBAAoB;IACpB,6CAA6C;IAC7C,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;IACX,YAAuB;IACvB,yBAAyB;IACzB,qBAAqB;IACrB,iBAAiB;IACjB,eAAe;IACf;yEACqE;EACvE;;EGnHF;CAAA,mOAAA;CAAA,iBAAA;CAAA,iBAAA;CAAA,gBAAA;AH21BA;;EG31BA;;CAAA;EAAA,kBAAA;EAAA,mBAAA;CHk2BC;AACD;;EAvyBE;IACE,eAAe;IACf,yBAAyB;IACzB,oBAAoB;IACpB,mBAAmB;IACnB,cAAc;IACd,eAAe;IACf,kBAAkB;IAClB,gBAA2B;IAC3B,WAAW;IACX,oDAAoD;IACpD,sBAAsB;IACtB,2BAA2B;IAC3B,6BAA6B;IAC7B,oCAAoC;IACpC,4BAA4B;IAC5B,iDAAiD;IACjD,wDAAwD;EAC1D;;EAmBA;IACE,oBAAoB;IACpB,mBAAmB;IACnB,qBAAqB;IACrB,4BAA4B;IAC5B,gBAAgB;IAChB,oBAAoB;IACpB,6CAA6C;IAC7C,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;IACX,YAAuB;IACvB,yBAAyB;IACzB,qBAAqB;IACrB,iBAAiB;IACjB,eAAe;IACf;yEACqE;EACvE;;EGnHF;CAAA,mOAAA;CAAA,kBAAA;CAAA,oBAAA;CAAA,gBAAA;AHk5BA;;EGl5BA;;CAAA;EAAA,mBAAA;EAAA,oBAAA;CHy5BC;AACD;;EA15BA;IAiDI,YAAY;IACZ,eAAe;IACf,oBAAoB;IACpB,gBAAgB;IAChB,mBAAmB;EArDT;;EA4DZ;IACE,eAAe;IACf,yBAAyB;IACzB,oBAAoB;IACpB,mBAAmB;IACnB,cAAc;IACd,eAAe;IACf,kBAAkB;IAClB,gBAA2B;IAC3B,WAAW;IACX,oDAAoD;IACpD,sBAAsB;IACtB,2BAA2B;IAC3B,6BAA6B;IAC7B,oCAAoC;IACpC,4BAA4B;IAC5B,iDAAiD;IACjD,wDAAwD;EAC1D;;EAmBA;IACE,oBAAoB;IACpB,mBAAmB;IACnB,qBAAqB;IACrB,4BAA4B;IAC5B,gBAAgB;IAChB,oBAAoB;IACpB,6CAA6C;IAC7C,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;IACX,YAAuB;IACvB,yBAAyB;IACzB,qBAAqB;IACrB,iBAAiB;IACjB,eAAe;IACf;yEACqE;EACvE;;EGnHF;CAAA,mOAAA;CAAA,mBAAA;CAAA,oBAAA;CAAA,gBAAA;AHi9BA;;EAj9BA;IA6DI,eAAe;IACf,yBAAyB;IACzB,oBAAoB;IACpB,mBAAmB;IACnB,cAAc;IACd,eAAe;IACf,kBAAkB;IAClB,2BAA2B;IAC3B,WAAW;IACX,oDAAoD;IACpD,sBAAsB;IACtB,2BAA2B;IAC3B,6BAA6B;IAC7B,oCAAoC;IACpC,4BAA4B;IAC5B,iDAAiD;IACjD,wDAAwD;EA7E9C;;EAAd;IAiFI,oBAAoB;IACpB,0BAA0B;IAC1B,2BAA2B;IAC3B,sBAAsB;IACtB,mBAAmB;IACnB,4BAA4B;IAC5B,gBAAgB;IAChB,oBAAoB;IACpB,gBAAgB;IAChB,WAAW;IACX,iCAAiC;IACjC,WAAW;IACX,yBAAyB;IACzB,mBAAmB;EA9FT;;EAAd;IAkGI,oBAAoB;IACpB,mBAAmB;IACnB,qBAAqB;IACrB,4BAA4B;IAC5B,gBAAgB;IAChB,oBAAoB;IACpB,6CAA6C;IAC7C,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;IACX,uBAAuB;IACvB,yBAAyB;IACzB,qBAAqB;IACrB,iBAAiB;IACjB,eAAe;IACf;yEACqE;EAlH3D;;EGAd;CAAA,mOAAA;CAAA,mBAAA;CAAA,oBAAA;AHghCA;;EGhhCA;;CAAA;EAAA,eAAA;EAAA,mBAAA;CHuhCC;AACD;;EAxhCA;EAAc;;EAAd;IAsII,sCAAsC;IACtC,yCAAyC;IACzC,sBAAsB;IACtB,WAAW;IACX,YAAY;EA1IF;;EAAd;IA8II,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,oBAAiB;OAAjB,iBAAiB;IACjB,WAAW;EAlJD;EAAd;IAqJI,WAAW;IACX,YAAY;IACZ,oBAAiB;OAAjB,iBAAiB;EAvJP;;EAAd;IA2JI,kBAAkB;IAClB,qBAAqB;IACrB,uBAAuB;IACvB,wBAAwB;IACxB,YAAY;IACZ;;oEAEgE;IAChE,sBAAsB;IACtB,mBAAmB;IACnB,2CAA2C;IAC3C,mCAA2B;YAA3B,2BAA2B;IAC3B;;;;KAIC;IACD,qCAAqC;IACrC;;;;KAIC;EAjLS;;EAAd;IAqLI,qBAAqB;IACrB,mBAAmB;IACnB;8CAC0C;EAxLhC;;EAAd;IA4LI,wBAAwB;IACxB,6BAA6B;IAC7B,sBAAsB;IACtB,sBAAsB;IACtB,+BAA4B;OAA5B,4BAA4B;EAhMlB;;EAAd;IAoMI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,WAAW;IACX,uBAAuB;IACvB,wBAAwB;IACxB,4FAA4F;IAC5F,wBAAwB;IACxB,sBAAsB;IACtB,UAAU;IACV,UAAU;IACV,0BAA0B;IAC1B,YAAY;IACZ,mBAAmB;IACnB,oCAAoC;EAlN1B;;EAAd;IAsNI,eAAe;IACf,YAAY;IACZ,2BAA2B;IAC3B,mBAAmB;IACnB,cAAc;IACd,YAAY;EA3NF;AACd;CGDA,WAAA;AHCoB;AAApB;;CGDA;EAAA,gBAAA;CHgoCC;AA/nCmB;AAApB;;CGDA;EAAA,gBAAA;CHsoCC;AAroCmB;AAApB;;CGDA;EAAA,iBAAA;CH4oCC;AA3oCmB;AAApB;;CGDA;EAAA,iBAAA;CHkpCC;AAjpCmB;AAApB;;CGDA;EAAA,iBAAA;CHwpCC;AAvpCmB;AACpB;CGFA,gBAAA;AHEmB;AAAnB;CGFA,kBAAA;AHEmB;AAAnB;CGFA,kBAAA;AHEmB;AAAnB;CGFA,gBAAA;AHEmB;AAAnB;CGFA,eAAA;AHEmB;AAAnB;CGFA,eAAA;AHEmB;AAAnB;CGFA,cAAA;AHEmB;AAAnB;CGFA,aAAA;AHEmB;AAAnB;CGFA,oBAAA;AHEmB;AAAnB;CGFA,iBAAA;AHEmB;AAAnB;CGFA,YAAA;AHEmB;AAAnB;CGFA,WAAA;AHEmB;AAAnB;CGFA,YAAA;AHEmB;AAAnB;CGFA,iBAAA;AHEmB;AAAnB;CGFA,sBAAA;AHEmB;AAAnB;CGFA,mBAAA;AHEmB;AAAnB;CGFA,uBAAA;AHEmB;AAAnB;CGFA,8BAAA;AHEmB;AAAnB;CGFA,uBAAA;CAAA,+DAAA;CAAA,wDAAA;AHEmB;AAAnB;CGFA,uBAAA;CAAA,oDAAA;CAAA,6DAAA;AHEmB;AAAnB;CGFA,uBAAA;AHEmB;AAAnB;CGFA,iBAAA;AHEmB;AAAnB;CGFA,kBAAA;CAAA,wDAAA;AHEmB;AAAnB;CGFA,gBAAA;AHEmB;AAAnB;CGFA,kBAAA;CAAA,mBAAA;AHEmB;AAAnB;CGFA,iBAAA;CAAA,oBAAA;AHEmB;AAAnB;CGFA,kBAAA;AHEmB;AAAnB;CGFA,kBAAA;CAAA,iBAAA;AHEmB;AAAnB;CGFA,gBAAA;AHEmB;AAAnB;CGFA,oBAAA;CAAA,iDAAA;AHEmB;AAAnB;CGFA,oBAAA;CAAA,kDAAA;AHEmB;AAAnB;CGFA,0BAAA;AHEmB;AAAnB;CGFA,4CAAA;CAAA,uGAAA;AHEmB;AAAnB;CGFA,+BAAA;CAAA,wDAAA;CAAA,0BAAA;AHEmB;AAAnB;IAuPI;iDAC6C;IAC7C,gCAAgC;IAChC,sCAAsC;IACtC,4BAA4B;IAC5B,qCAAqC;EA5PtB;AAAnB;;IAgQI,gCAAgC;EAhQjB;;AA6NnB;EACE;IACE,qBAAqB;IACrB,6BAA6B;IAC7B,uBAAuB;AAC3B;AACA;EACE,eAAe;AACjB;;AAEA;EACE,0BAA0B;EAC1B,8BAA8B;AAChC;AACA;EACE,0BAA0B;AAC5B;;AAEA;;;;;;AAjPA;CGAA,oBAAA;CAAA,iDAAA;AHqzCA;;;;;;AArzCA;CGAA,oBAAA;CAAA,gDAAA;AH8zCA;;;;;;AA9zCA;CGAA,oBAAA;CAAA,gDAAA;AHu0CA;;;;;;AAv0CA;CGAA,oBAAA;CAAA,iDAAA;AHg1CA;;;;;;AAh1CA;CGAA,kFAAA;CAAA,uGAAA;AHy1CA","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n  /* inter var - latin */\n  @font-face {\n    font-family: \"Inter\";\n    font-style: normal;\n    font-weight: 100 900;\n    font-display: optional;\n    src: url(\"/fonts/inter-var-latin.woff2\") format(\"woff2\");\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\n      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,\n      U+2215, U+FEFF, U+FFFD;\n  }\n\n  .toptitle {\n    position: absolute;\n    top: 10px;\n    z-index: 5;\n    padding: 5px;\n    line-height: 1;\n  }\n\n  /* Write your own custom base styles here */\n  h1 {\n    @apply text-3xl font-bold md:text-5xl font-primary;\n  }\n\n  h1.text-center {\n    font-family: \"DM Sans\";\n    font-family: Segoe UI;\n    letter-spacing: 5px;\n    font-size: 24px;\n    font-weight: 400;\n    line-height: 1.5;\n    text-transform: uppercase;\n  }\n\n  h2 {\n    @apply text-2xl font-bold md:text-4xl font-primary;\n  }\n\n  h3 {\n    @apply text-xl font-bold md:text-3xl font-primary;\n  }\n\n  h3.text-center {\n    color: black;\n    font-size: 20px;\n    font-family: \"Inter\";\n    font-weight: 600;\n    letter-spacing: 1px;\n  }\n\n  h4 {\n    @apply text-lg font-bold font-primary;\n  }\n\n  p.font-bold.component {\n    font-size: 27px;\n    text-transform: uppercase;\n    font-family: \"Inter\";\n    letter-spacing: 2px;\n    line-height: 1;\n    margin-top: 6px;\n    margin-bottom: 8px;\n    font-weight: 900 !important;\n    color: #fff;\n    filter: drop-shadow(0.4025px 0.8425px 0.325px black);\n    background-size: cover;\n    background-position: 0% 50%;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -webkit-text-stroke-width: 0;\n    -webkit-text-stroke-color: hsl(0deg 0% 20% / 50%);\n    background-image: linear-gradient(45deg, white, #f6f8fa);\n  }\n\n  .text-xs {\n    display: -webkit-box;\n    font-size: 20px !important;\n    line-height: 1.5 !important;\n    font-family: \"DM Sans\";\n    margin: 2px 0 3px 0;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    word-spacing: -0.1em;\n    font-weight: 400;\n    width: 112%;\n    font-family: \"Roboto\", sans-serif;\n    color: #fff;\n    text-transform: uppercase;\n    letter-spacing: 4px;\n  }\n\n  p.font-bold.album {\n    display: -webkit-box;\n    margin: 2px 0 3px 0;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    word-spacing: -0.1em;\n    font-family: FranklinGothic, Lato, sans-serif;\n    font-weight: 400;\n    line-height: 1.5;\n    width: 100%;\n    color: white !important;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    margin-block: 7px;\n    font-size: 12px;\n    font-family: CircularSp, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl,\n      CircularSp-Grek, CircularSp-Deva, var(--fallback-fonts, sans-serif);\n  }\n\n  body {\n    @apply text-sm font-primary md:text-base;\n  }\n\n  .layout {\n    /* 750px */\n    /* max-width: 43.75rem; */\n\n    /* 1100px */\n    max-width: 68.75rem;\n    @apply w-11/12 mx-auto;\n  }\n\n  .shadow-sm {\n  }\n\n  body {\n    background-image: url(\"/img/aasd.jpg\");\n    background-image: url(\"/img/dogsbg2.jpg\");\n    background-size: cover;\n    width: 100%;\n    height: 100%;\n  }\n\n  .w-bg {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    z-index: -1;\n  }\n  img.w-img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  a.container {\n    position: relative;\n    width: 50% !important;\n    margin: auto !important;\n    padding: 30px !important;\n    color: white;\n    box-shadow: -0.2em -0.125em 0.125em rgb(0 0 0 / 25%),\n      0 0 0 0.04em rgb(0 0 0 / 30%), 0.02em 0.02em 0.02em rgb(0 0 0 / 40%) inset,\n      -0.05em -0.05em 0.02em rgb(255 255 255 / 80%) inset !important;\n    background-color: #eee;\n    border-radius: 15px;\n    border: 2px outset rgba(255, 255, 255, 0.3);\n    backdrop-filter: blur(20px);\n    background-image: linear-gradient(\n      145deg,\n      rgba(255, 255, 255, 0.15),\n      transparent\n    );\n    background-color: rgba(0, 0, 0, 0.05);\n    background-image: linear-gradient(\n      145deg,\n      rgba(255, 255, 255, 0.4) 0%,\n      rgba(255, 255, 255, 0.1) 100%\n    );\n  }\n\n  .w-16 {\n    width: 45% !important;\n    border-radius: 20px;\n    filter: saturate(1.025) contrast(1.015)\n      drop-shadow(0.125px 0.25px 0.25px black);\n  }\n\n  img.w-16.shadow-sm {\n    display: flex !important;\n    position: relative !important;\n    width: auto !important;\n    height: 60% !important;\n    object-fit: cover !important;\n  }\n\n  .w-16::before {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    content: \"\";\n    width: calc(100% + 0px);\n    height: calc(100% + 1px);\n    background: url(https://pudding.cool/2021/10/judge-my-music/assets/images/plastic-small.jpg);\n    background-size: contain;\n    mix-blend-mode: screen;\n    opacity: 1;\n    z-index: 1;\n    mix-blend-mode: difference;\n    opacity: 0.5;\n    border-radius: 20px;\n    filter: brightness(1.125) opacity(1);\n  }\n\n  p.text-center {\n    font-size: 11px;\n    opacity: 0.5;\n    font-weight: 300 !important;\n    font-family: Roboto;\n    line-height: 2;\n    color: white;\n  }\n}\n\n@media (max-width: 630px) {\n  a.container {\n    width: 65% !important;\n    padding: 30px 20px !important;\n    height: auto !important;\n}\np.font-bold.component {\n  font-size: 18px;\n}\n\n.text-xs {\n  font-size: 12px !important;\n  letter-spacing: 3px !important;\n}\np.font-bold.album {\n  font-size: 10px !important;\n}\n\n}\n\n\n\n\n\n@layer utilities {\n  .animated-underline {\n    background-image: linear-gradient(#33333300, #33333300),\n      linear-gradient(to right, #00e0f3, #00c4fd);\n    background-size: 100% 2px, 0 2px;\n    background-position: 100% 100%, 0 100%;\n    background-repeat: no-repeat;\n    transition: background-size 0.3s ease;\n  }\n  .animated-underline:hover,\n  .animated-underline:focus {\n    background-size: 0 2px, 100% 2px;\n  }\n}\n\n\n","/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\ttab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n","/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"); /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: theme('colors.gray.400', #a1a1aa);\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n \n:-moz-focusring {\n\toutline: auto;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ "./node_modules/next/dist/shared/lib/head.js")


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app!"), __webpack_exec__("./node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxzQkFBc0IsMERBQW1CO0FBQ3pDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxzQkFBc0IsMERBQW1CO0FBQ3pDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxzQkFBc0IsMERBQW1CO0FBQ3pDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxHQUFHO0FBQ0gsc0JBQXNCLDBEQUFtQjtBQUN6QztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0EsR0FBRztBQUNILHNCQUFzQiwwREFBbUI7QUFDekM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsc0JBQXNCLDBEQUFtQjtBQUN6QztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHNCQUFzQiwwREFBbUI7QUFDekM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwwREFBbUI7QUFDekM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7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S0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLE1BQU0sS0FBSyxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxXQUFXLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFdBQVcsYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLE9BQU8sTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxRQUFRLEtBQUssVUFBVSxVQUFVLE9BQU8sTUFBTSxPQUFPLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxXQUFXLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxPQUFPLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFFBQVEsUUFBUSxLQUFLLFdBQVcsV0FBVyxPQUFPLE1BQU0sT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsV0FBVyxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssT0FBTyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLFFBQVEsS0FBSyxXQUFXLFdBQVcsT0FBTyxNQUFNLE9BQU8sV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsV0FBVyxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssT0FBTyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssT0FBTyxRQUFRLEtBQUssV0FBVyxXQUFXLFdBQVcsUUFBUSxRQUFRLEtBQUssVUFBVSxXQUFXLE9BQU8sTUFBTSxPQUFPLE1BQU0sS0FBSyxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxPQUFPLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxTQUFTLEtBQUssWUFBWSxTQUFTLEtBQUssT0FBTyxLQUFLLGFBQWEsYUFBYSxNQUFNLE9BQU8sUUFBUSxLQUFLLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxRQUFRLEtBQUssV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLEtBQUssV0FBVyxPQUFPLFFBQVEsT0FBTyxLQUFLLFdBQVcsT0FBTyxRQUFRLE9BQU8sS0FBSyxXQUFXLE9BQU8sUUFBUSxPQUFPLEtBQUssV0FBVyxPQUFPLFFBQVEsT0FBTyxLQUFLLFdBQVcsT0FBTyxRQUFRLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0s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Q0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLCtGQUErRixlQUFlO0FBQzlHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxHQUFHOztBQUVSLGtEQUFrRDtBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsV0FBVyxHQUFHO0FBQ2QsV0FBVyxHQUFHO0FBQ2QsV0FBVyxlQUFlO0FBQzFCLFdBQVcsR0FBRztBQUNkLFdBQVcsR0FBRztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssR0FBRzs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxHQUFHO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7O0FBRUE7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QTtBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUEsY0FBYztBQUNkLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDbHJDYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUMsQ0FBQztBQUNGLEVBQUUsdUpBQXNFO0FBQ3hFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9uZXh0LXNlby5jb25maWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0LXNlby9saWIvbmV4dC1zZW8ubW9kdWxlLmpzIiwid2VicGFjazovL19OX0UvIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/NjEzOCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWxzLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9qc3gtZGV2LXJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0aXRsZSA9ICdTcG90aWZ5IE5vdyBQbGF5aW5nIHdpdGggTmV4dC5qcyc7XHJcbmNvbnN0IGRlc2NyaXB0aW9uID0gJ0Egc3BvdGlmeSBBUEkgdXNpbmcgTmV4dC5qcyc7XHJcblxyXG5jb25zdCBTRU8gPSB7XHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgLy8gY2Fub25pY2FsOiAnaHR0cHM6Ly90aGVvZG9ydXNjbGFyZW5jZS5jb20nLFxyXG4gICAgb3BlbkdyYXBoOiB7XHJcbiAgICAgICAgdHlwZTogJ3dlYnNpdGUnLFxyXG4gICAgICAgIGxvY2FsZTogJ2VuX0lFJyxcclxuICAgICAgICB1cmw6ICdodHRwczovL3RoZW9kb3J1c2NsYXJlbmNlLmNvbScsXHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vdGhlb2RvcnVzY2xhcmVuY2UuY29tL2Zhdmljb24vbXMtaWNvbi0xNDR4MTQ0LnBuZycsXHJcbiAgICAgICAgICAgICAgICBhbHQ6IHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE0NCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTQ0LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVtYW5kRW50cmllczoge1xyXG4gICAgICAgIC8vIHBlcmlvZCAoaW4gbXMpIHdoZXJlIHRoZSBzZXJ2ZXIgd2lsbCBrZWVwIHBhZ2VzIGluIHRoZSBidWZmZXJcclxuICAgICAgICBtYXhJbmFjdGl2ZUFnZTogMTAwMCxcclxuICAgICAgICAvLyBudW1iZXIgb2YgcGFnZXMgdGhhdCBzaG91bGQgYmUga2VwdCBzaW11bHRhbmVvdXNseSB3aXRob3V0IGJlaW5nIGRpc3Bvc2VkXHJcbiAgICAgICAgcGFnZXNCdWZmZXJMZW5ndGg6IDEsXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU0VPO1xyXG4iLCJpbXBvcnQgeyBEZWZhdWx0U2VvIH0gZnJvbSAnbmV4dC1zZW8nO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IFNFTyBmcm9tICcuLi9uZXh0LXNlby5jb25maWcnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPERlZmF1bHRTZW8gey4uLlNFT30gLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG52YXIgX2V4Y2x1ZGVkJHogPSBbXCJrZXlPdmVycmlkZVwiXSxcbiAgX2V4Y2x1ZGVkMiQyID0gW1wiY3Jvc3NPcmlnaW5cIl07XG52YXIgZGVmYXVsdHMgPSB7XG4gIHRlbXBsYXRlVGl0bGU6ICcnLFxuICBub2luZGV4OiBmYWxzZSxcbiAgbm9mb2xsb3c6IGZhbHNlLFxuICBub3JvYm90czogZmFsc2UsXG4gIGRlZmF1bHRPcGVuR3JhcGhJbWFnZVdpZHRoOiAwLFxuICBkZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQ6IDAsXG4gIGRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoOiAwLFxuICBkZWZhdWx0T3BlbkdyYXBoVmlkZW9IZWlnaHQ6IDBcbn07XG52YXIgYnVpbGRPcGVuR3JhcGhNZWRpYVRhZ3MgPSBmdW5jdGlvbiBidWlsZE9wZW5HcmFwaE1lZGlhVGFncyhtZWRpYVR5cGUsIG1lZGlhLCBfdGVtcCkge1xuICBpZiAobWVkaWEgPT09IHZvaWQgMCkge1xuICAgIG1lZGlhID0gW107XG4gIH1cbiAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICBkZWZhdWx0V2lkdGggPSBfcmVmLmRlZmF1bHRXaWR0aCxcbiAgICBkZWZhdWx0SGVpZ2h0ID0gX3JlZi5kZWZhdWx0SGVpZ2h0O1xuICByZXR1cm4gbWVkaWEucmVkdWNlKGZ1bmN0aW9uICh0YWdzLCBtZWRpdW0sIGluZGV4KSB7XG4gICAgdGFncy5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAga2V5OiBcIm9nOlwiICsgbWVkaWFUeXBlICsgXCI6MFwiICsgaW5kZXgsXG4gICAgICBwcm9wZXJ0eTogXCJvZzpcIiArIG1lZGlhVHlwZSxcbiAgICAgIGNvbnRlbnQ6IG1lZGl1bS51cmxcbiAgICB9KSk7XG4gICAgaWYgKG1lZGl1bS5hbHQpIHtcbiAgICAgIHRhZ3MucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcIm9nOlwiICsgbWVkaWFUeXBlICsgXCI6YWx0MFwiICsgaW5kZXgsXG4gICAgICAgIHByb3BlcnR5OiBcIm9nOlwiICsgbWVkaWFUeXBlICsgXCI6YWx0XCIsXG4gICAgICAgIGNvbnRlbnQ6IG1lZGl1bS5hbHRcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgaWYgKG1lZGl1bS5zZWN1cmVVcmwpIHtcbiAgICAgIHRhZ3MucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcIm9nOlwiICsgbWVkaWFUeXBlICsgXCI6c2VjdXJlX3VybDBcIiArIGluZGV4LFxuICAgICAgICBwcm9wZXJ0eTogXCJvZzpcIiArIG1lZGlhVHlwZSArIFwiOnNlY3VyZV91cmxcIixcbiAgICAgICAgY29udGVudDogbWVkaXVtLnNlY3VyZVVybC50b1N0cmluZygpXG4gICAgICB9KSk7XG4gICAgfVxuICAgIGlmIChtZWRpdW0udHlwZSkge1xuICAgICAgdGFncy5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwib2c6XCIgKyBtZWRpYVR5cGUgKyBcIjp0eXBlMFwiICsgaW5kZXgsXG4gICAgICAgIHByb3BlcnR5OiBcIm9nOlwiICsgbWVkaWFUeXBlICsgXCI6dHlwZVwiLFxuICAgICAgICBjb250ZW50OiBtZWRpdW0udHlwZS50b1N0cmluZygpXG4gICAgICB9KSk7XG4gICAgfVxuICAgIGlmIChtZWRpdW0ud2lkdGgpIHtcbiAgICAgIHRhZ3MucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcIm9nOlwiICsgbWVkaWFUeXBlICsgXCI6d2lkdGgwXCIgKyBpbmRleCxcbiAgICAgICAgcHJvcGVydHk6IFwib2c6XCIgKyBtZWRpYVR5cGUgKyBcIjp3aWR0aFwiLFxuICAgICAgICBjb250ZW50OiBtZWRpdW0ud2lkdGgudG9TdHJpbmcoKVxuICAgICAgfSkpO1xuICAgIH0gZWxzZSBpZiAoZGVmYXVsdFdpZHRoKSB7XG4gICAgICB0YWdzLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJvZzpcIiArIG1lZGlhVHlwZSArIFwiOndpZHRoMFwiICsgaW5kZXgsXG4gICAgICAgIHByb3BlcnR5OiBcIm9nOlwiICsgbWVkaWFUeXBlICsgXCI6d2lkdGhcIixcbiAgICAgICAgY29udGVudDogZGVmYXVsdFdpZHRoLnRvU3RyaW5nKClcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgaWYgKG1lZGl1bS5oZWlnaHQpIHtcbiAgICAgIHRhZ3MucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcIm9nOlwiICsgbWVkaWFUeXBlICsgXCI6aGVpZ2h0XCIgKyBpbmRleCxcbiAgICAgICAgcHJvcGVydHk6IFwib2c6XCIgKyBtZWRpYVR5cGUgKyBcIjpoZWlnaHRcIixcbiAgICAgICAgY29udGVudDogbWVkaXVtLmhlaWdodC50b1N0cmluZygpXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIGlmIChkZWZhdWx0SGVpZ2h0KSB7XG4gICAgICB0YWdzLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJvZzpcIiArIG1lZGlhVHlwZSArIFwiOmhlaWdodFwiICsgaW5kZXgsXG4gICAgICAgIHByb3BlcnR5OiBcIm9nOlwiICsgbWVkaWFUeXBlICsgXCI6aGVpZ2h0XCIsXG4gICAgICAgIGNvbnRlbnQ6IGRlZmF1bHRIZWlnaHQudG9TdHJpbmcoKVxuICAgICAgfSkpO1xuICAgIH1cbiAgICByZXR1cm4gdGFncztcbiAgfSwgW10pO1xufTtcbnZhciBidWlsZFRhZ3MgPSBmdW5jdGlvbiBidWlsZFRhZ3MoY29uZmlnKSB7XG4gIHZhciBfY29uZmlnJG9wZW5HcmFwaCwgX2NvbmZpZyRvcGVuR3JhcGgzLCBfY29uZmlnJGFkZGl0aW9uYWxMaW47XG4gIHZhciB0YWdzVG9SZW5kZXIgPSBbXTtcbiAgaWYgKGNvbmZpZy50aXRsZVRlbXBsYXRlKSB7XG4gICAgZGVmYXVsdHMudGVtcGxhdGVUaXRsZSA9IGNvbmZpZy50aXRsZVRlbXBsYXRlO1xuICB9XG4gIHZhciB1cGRhdGVkVGl0bGUgPSAnJztcbiAgaWYgKGNvbmZpZy50aXRsZSkge1xuICAgIHVwZGF0ZWRUaXRsZSA9IGNvbmZpZy50aXRsZTtcbiAgICBpZiAoZGVmYXVsdHMudGVtcGxhdGVUaXRsZSkge1xuICAgICAgdXBkYXRlZFRpdGxlID0gZGVmYXVsdHMudGVtcGxhdGVUaXRsZS5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB1cGRhdGVkVGl0bGU7XG4gICAgICB9KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoY29uZmlnLmRlZmF1bHRUaXRsZSkge1xuICAgIHVwZGF0ZWRUaXRsZSA9IGNvbmZpZy5kZWZhdWx0VGl0bGU7XG4gIH1cbiAgaWYgKHVwZGF0ZWRUaXRsZSkge1xuICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsIHtcbiAgICAgIGtleTogXCJ0aXRsZVwiXG4gICAgfSwgdXBkYXRlZFRpdGxlKSk7XG4gIH1cbiAgdmFyIG5vaW5kZXggPSBjb25maWcubm9pbmRleCA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdHMubm9pbmRleCB8fCBjb25maWcuZGFuZ2Vyb3VzbHlTZXRBbGxQYWdlc1RvTm9JbmRleCA6IGNvbmZpZy5ub2luZGV4O1xuICB2YXIgbm9mb2xsb3cgPSBjb25maWcubm9mb2xsb3cgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRzLm5vZm9sbG93IHx8IGNvbmZpZy5kYW5nZXJvdXNseVNldEFsbFBhZ2VzVG9Ob0ZvbGxvdyA6IGNvbmZpZy5ub2ZvbGxvdztcbiAgdmFyIG5vcm9ib3RzID0gY29uZmlnLm5vcm9ib3RzIHx8IGRlZmF1bHRzLm5vcm9ib3RzO1xuICB2YXIgcm9ib3RzUGFyYW1zID0gJyc7XG4gIGlmIChjb25maWcucm9ib3RzUHJvcHMpIHtcbiAgICB2YXIgX2NvbmZpZyRyb2JvdHNQcm9wcyA9IGNvbmZpZy5yb2JvdHNQcm9wcyxcbiAgICAgIG5vc25pcHBldCA9IF9jb25maWckcm9ib3RzUHJvcHMubm9zbmlwcGV0LFxuICAgICAgbWF4U25pcHBldCA9IF9jb25maWckcm9ib3RzUHJvcHMubWF4U25pcHBldCxcbiAgICAgIG1heEltYWdlUHJldmlldyA9IF9jb25maWckcm9ib3RzUHJvcHMubWF4SW1hZ2VQcmV2aWV3LFxuICAgICAgbWF4VmlkZW9QcmV2aWV3ID0gX2NvbmZpZyRyb2JvdHNQcm9wcy5tYXhWaWRlb1ByZXZpZXcsXG4gICAgICBub2FyY2hpdmUgPSBfY29uZmlnJHJvYm90c1Byb3BzLm5vYXJjaGl2ZSxcbiAgICAgIG5vaW1hZ2VpbmRleCA9IF9jb25maWckcm9ib3RzUHJvcHMubm9pbWFnZWluZGV4LFxuICAgICAgbm90cmFuc2xhdGUgPSBfY29uZmlnJHJvYm90c1Byb3BzLm5vdHJhbnNsYXRlLFxuICAgICAgdW5hdmFpbGFibGVBZnRlciA9IF9jb25maWckcm9ib3RzUHJvcHMudW5hdmFpbGFibGVBZnRlcjtcbiAgICByb2JvdHNQYXJhbXMgPSBcIlwiICsgKG5vc25pcHBldCA/ICcsbm9zbmlwcGV0JyA6ICcnKSArIChtYXhTbmlwcGV0ID8gXCIsbWF4LXNuaXBwZXQ6XCIgKyBtYXhTbmlwcGV0IDogJycpICsgKG1heEltYWdlUHJldmlldyA/IFwiLG1heC1pbWFnZS1wcmV2aWV3OlwiICsgbWF4SW1hZ2VQcmV2aWV3IDogJycpICsgKG5vYXJjaGl2ZSA/ICcsbm9hcmNoaXZlJyA6ICcnKSArICh1bmF2YWlsYWJsZUFmdGVyID8gXCIsdW5hdmFpbGFibGVfYWZ0ZXI6XCIgKyB1bmF2YWlsYWJsZUFmdGVyIDogJycpICsgKG5vaW1hZ2VpbmRleCA/ICcsbm9pbWFnZWluZGV4JyA6ICcnKSArIChtYXhWaWRlb1ByZXZpZXcgPyBcIixtYXgtdmlkZW8tcHJldmlldzpcIiArIG1heFZpZGVvUHJldmlldyA6ICcnKSArIChub3RyYW5zbGF0ZSA/ICcsbm90cmFuc2xhdGUnIDogJycpO1xuICB9XG4gIGlmIChjb25maWcubm9yb2JvdHMpIHtcbiAgICBkZWZhdWx0cy5ub3JvYm90cyA9IHRydWU7XG4gIH1cbiAgaWYgKG5vaW5kZXggfHwgbm9mb2xsb3cpIHtcbiAgICBpZiAoY29uZmlnLmRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vSW5kZXgpIHtcbiAgICAgIGRlZmF1bHRzLm5vaW5kZXggPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vRm9sbG93KSB7XG4gICAgICBkZWZhdWx0cy5ub2ZvbGxvdyA9IHRydWU7XG4gICAgfVxuICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAga2V5OiBcInJvYm90c1wiLFxuICAgICAgbmFtZTogXCJyb2JvdHNcIixcbiAgICAgIGNvbnRlbnQ6IChub2luZGV4ID8gJ25vaW5kZXgnIDogJ2luZGV4JykgKyBcIixcIiArIChub2ZvbGxvdyA/ICdub2ZvbGxvdycgOiAnZm9sbG93JykgKyByb2JvdHNQYXJhbXNcbiAgICB9KSk7XG4gIH0gZWxzZSBpZiAoIW5vcm9ib3RzIHx8IHJvYm90c1BhcmFtcykge1xuICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAga2V5OiBcInJvYm90c1wiLFxuICAgICAgbmFtZTogXCJyb2JvdHNcIixcbiAgICAgIGNvbnRlbnQ6IFwiaW5kZXgsZm9sbG93XCIgKyByb2JvdHNQYXJhbXNcbiAgICB9KSk7XG4gIH1cbiAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAga2V5OiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICBuYW1lOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICBjb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KSk7XG4gIH1cbiAgaWYgKGNvbmZpZy50aGVtZUNvbG9yKSB7XG4gICAgdGFnc1RvUmVuZGVyLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICBrZXk6IFwidGhlbWUtY29sb3JcIixcbiAgICAgIG5hbWU6IFwidGhlbWUtY29sb3JcIixcbiAgICAgIGNvbnRlbnQ6IGNvbmZpZy50aGVtZUNvbG9yXG4gICAgfSkpO1xuICB9XG4gIGlmIChjb25maWcubW9iaWxlQWx0ZXJuYXRlKSB7XG4gICAgdGFnc1RvUmVuZGVyLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICByZWw6IFwiYWx0ZXJuYXRlXCIsXG4gICAgICBrZXk6IFwibW9iaWxlQWx0ZXJuYXRlXCIsXG4gICAgICBtZWRpYTogY29uZmlnLm1vYmlsZUFsdGVybmF0ZS5tZWRpYSxcbiAgICAgIGhyZWY6IGNvbmZpZy5tb2JpbGVBbHRlcm5hdGUuaHJlZlxuICAgIH0pKTtcbiAgfVxuICBpZiAoY29uZmlnLmxhbmd1YWdlQWx0ZXJuYXRlcyAmJiBjb25maWcubGFuZ3VhZ2VBbHRlcm5hdGVzLmxlbmd0aCA+IDApIHtcbiAgICBjb25maWcubGFuZ3VhZ2VBbHRlcm5hdGVzLmZvckVhY2goZnVuY3Rpb24gKGxhbmd1YWdlQWx0ZXJuYXRlKSB7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAgcmVsOiBcImFsdGVybmF0ZVwiLFxuICAgICAgICBrZXk6IFwibGFuZ3VhZ2VBbHRlcm5hdGUtXCIgKyBsYW5ndWFnZUFsdGVybmF0ZS5ocmVmTGFuZyxcbiAgICAgICAgaHJlZkxhbmc6IGxhbmd1YWdlQWx0ZXJuYXRlLmhyZWZMYW5nLFxuICAgICAgICBocmVmOiBsYW5ndWFnZUFsdGVybmF0ZS5ocmVmXG4gICAgICB9KSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGNvbmZpZy50d2l0dGVyKSB7XG4gICAgaWYgKGNvbmZpZy50d2l0dGVyLmNhcmRUeXBlKSB7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcInR3aXR0ZXI6Y2FyZFwiLFxuICAgICAgICBuYW1lOiBcInR3aXR0ZXI6Y2FyZFwiLFxuICAgICAgICBjb250ZW50OiBjb25maWcudHdpdHRlci5jYXJkVHlwZVxuICAgICAgfSkpO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLnR3aXR0ZXIuc2l0ZSkge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJ0d2l0dGVyOnNpdGVcIixcbiAgICAgICAgbmFtZTogXCJ0d2l0dGVyOnNpdGVcIixcbiAgICAgICAgY29udGVudDogY29uZmlnLnR3aXR0ZXIuc2l0ZVxuICAgICAgfSkpO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLnR3aXR0ZXIuaGFuZGxlKSB7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcInR3aXR0ZXI6Y3JlYXRvclwiLFxuICAgICAgICBuYW1lOiBcInR3aXR0ZXI6Y3JlYXRvclwiLFxuICAgICAgICBjb250ZW50OiBjb25maWcudHdpdHRlci5oYW5kbGVcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cbiAgaWYgKGNvbmZpZy5mYWNlYm9vaykge1xuICAgIGlmIChjb25maWcuZmFjZWJvb2suYXBwSWQpIHtcbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwiZmI6YXBwX2lkXCIsXG4gICAgICAgIHByb3BlcnR5OiBcImZiOmFwcF9pZFwiLFxuICAgICAgICBjb250ZW50OiBjb25maWcuZmFjZWJvb2suYXBwSWRcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cbiAgaWYgKChfY29uZmlnJG9wZW5HcmFwaCA9IGNvbmZpZy5vcGVuR3JhcGgpICE9IG51bGwgJiYgX2NvbmZpZyRvcGVuR3JhcGgudGl0bGUgfHwgdXBkYXRlZFRpdGxlKSB7XG4gICAgdmFyIF9jb25maWckb3BlbkdyYXBoMjtcbiAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgIGtleTogXCJvZzp0aXRsZVwiLFxuICAgICAgcHJvcGVydHk6IFwib2c6dGl0bGVcIixcbiAgICAgIGNvbnRlbnQ6ICgoX2NvbmZpZyRvcGVuR3JhcGgyID0gY29uZmlnLm9wZW5HcmFwaCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9jb25maWckb3BlbkdyYXBoMi50aXRsZSkgfHwgdXBkYXRlZFRpdGxlXG4gICAgfSkpO1xuICB9XG4gIGlmICgoX2NvbmZpZyRvcGVuR3JhcGgzID0gY29uZmlnLm9wZW5HcmFwaCkgIT0gbnVsbCAmJiBfY29uZmlnJG9wZW5HcmFwaDMuZGVzY3JpcHRpb24gfHwgY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgdmFyIF9jb25maWckb3BlbkdyYXBoNDtcbiAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgIGtleTogXCJvZzpkZXNjcmlwdGlvblwiLFxuICAgICAgcHJvcGVydHk6IFwib2c6ZGVzY3JpcHRpb25cIixcbiAgICAgIGNvbnRlbnQ6ICgoX2NvbmZpZyRvcGVuR3JhcGg0ID0gY29uZmlnLm9wZW5HcmFwaCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9jb25maWckb3BlbkdyYXBoNC5kZXNjcmlwdGlvbikgfHwgY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfSkpO1xuICB9XG4gIGlmIChjb25maWcub3BlbkdyYXBoKSB7XG4gICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgudXJsIHx8IGNvbmZpZy5jYW5vbmljYWwpIHtcbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwib2c6dXJsXCIsXG4gICAgICAgIHByb3BlcnR5OiBcIm9nOnVybFwiLFxuICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLnVybCB8fCBjb25maWcuY2Fub25pY2FsXG4gICAgICB9KSk7XG4gICAgfVxuICAgIGlmIChjb25maWcub3BlbkdyYXBoLnR5cGUpIHtcbiAgICAgIHZhciB0eXBlID0gY29uZmlnLm9wZW5HcmFwaC50eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcIm9nOnR5cGVcIixcbiAgICAgICAgcHJvcGVydHk6IFwib2c6dHlwZVwiLFxuICAgICAgICBjb250ZW50OiB0eXBlXG4gICAgICB9KSk7XG4gICAgICBpZiAodHlwZSA9PT0gJ3Byb2ZpbGUnICYmIGNvbmZpZy5vcGVuR3JhcGgucHJvZmlsZSkge1xuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5wcm9maWxlLmZpcnN0TmFtZSkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcInByb2ZpbGU6Zmlyc3RfbmFtZVwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwicHJvZmlsZTpmaXJzdF9uYW1lXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLnByb2ZpbGUuZmlyc3ROYW1lXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLnByb2ZpbGUubGFzdE5hbWUpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJwcm9maWxlOmxhc3RfbmFtZVwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwicHJvZmlsZTpsYXN0X25hbWVcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGgucHJvZmlsZS5sYXN0TmFtZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5wcm9maWxlLnVzZXJuYW1lKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwicHJvZmlsZTp1c2VybmFtZVwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwicHJvZmlsZTp1c2VybmFtZVwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5wcm9maWxlLnVzZXJuYW1lXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLnByb2ZpbGUuZ2VuZGVyKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwicHJvZmlsZTpnZW5kZXJcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcInByb2ZpbGU6Z2VuZGVyXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLnByb2ZpbGUuZ2VuZGVyXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdib29rJyAmJiBjb25maWcub3BlbkdyYXBoLmJvb2spIHtcbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguYm9vay5hdXRob3JzICYmIGNvbmZpZy5vcGVuR3JhcGguYm9vay5hdXRob3JzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbmZpZy5vcGVuR3JhcGguYm9vay5hdXRob3JzLmZvckVhY2goZnVuY3Rpb24gKGF1dGhvciwgaW5kZXgpIHtcbiAgICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgICBrZXk6IFwiYm9vazphdXRob3I6MFwiICsgaW5kZXgsXG4gICAgICAgICAgICAgIHByb3BlcnR5OiBcImJvb2s6YXV0aG9yXCIsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGF1dGhvclxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLmJvb2suaXNibikge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcImJvb2s6aXNiblwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwiYm9vazppc2JuXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLmJvb2suaXNiblxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5ib29rLnJlbGVhc2VEYXRlKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwiYm9vazpyZWxlYXNlX2RhdGVcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcImJvb2s6cmVsZWFzZV9kYXRlXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLmJvb2sucmVsZWFzZURhdGVcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguYm9vay50YWdzICYmIGNvbmZpZy5vcGVuR3JhcGguYm9vay50YWdzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbmZpZy5vcGVuR3JhcGguYm9vay50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZywgaW5kZXgpIHtcbiAgICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgICBrZXk6IFwiYm9vazp0YWc6MFwiICsgaW5kZXgsXG4gICAgICAgICAgICAgIHByb3BlcnR5OiBcImJvb2s6dGFnXCIsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHRhZ1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdhcnRpY2xlJyAmJiBjb25maWcub3BlbkdyYXBoLmFydGljbGUpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS5wdWJsaXNoZWRUaW1lKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwiYXJ0aWNsZTpwdWJsaXNoZWRfdGltZVwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwiYXJ0aWNsZTpwdWJsaXNoZWRfdGltZVwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlLnB1Ymxpc2hlZFRpbWVcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS5tb2RpZmllZFRpbWUpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJhcnRpY2xlOm1vZGlmaWVkX3RpbWVcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcImFydGljbGU6bW9kaWZpZWRfdGltZVwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlLm1vZGlmaWVkVGltZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlLmV4cGlyYXRpb25UaW1lKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwiYXJ0aWNsZTpleHBpcmF0aW9uX3RpbWVcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcImFydGljbGU6ZXhwaXJhdGlvbl90aW1lXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLmFydGljbGUuZXhwaXJhdGlvblRpbWVcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS5hdXRob3JzICYmIGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS5hdXRob3JzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS5hdXRob3JzLmZvckVhY2goZnVuY3Rpb24gKGF1dGhvciwgaW5kZXgpIHtcbiAgICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgICBrZXk6IFwiYXJ0aWNsZTphdXRob3I6MFwiICsgaW5kZXgsXG4gICAgICAgICAgICAgIHByb3BlcnR5OiBcImFydGljbGU6YXV0aG9yXCIsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGF1dGhvclxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLmFydGljbGUuc2VjdGlvbikge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcImFydGljbGU6c2VjdGlvblwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwiYXJ0aWNsZTpzZWN0aW9uXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLmFydGljbGUuc2VjdGlvblxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlLnRhZ3MgJiYgY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlLnRhZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlLnRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnLCBpbmRleCkge1xuICAgICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICAgIGtleTogXCJhcnRpY2xlOnRhZzowXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgcHJvcGVydHk6IFwiYXJ0aWNsZTp0YWdcIixcbiAgICAgICAgICAgICAgY29udGVudDogdGFnXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoKHR5cGUgPT09ICd2aWRlby5tb3ZpZScgfHwgdHlwZSA9PT0gJ3ZpZGVvLmVwaXNvZGUnIHx8IHR5cGUgPT09ICd2aWRlby50dl9zaG93JyB8fCB0eXBlID09PSAndmlkZW8ub3RoZXInKSAmJiBjb25maWcub3BlbkdyYXBoLnZpZGVvKSB7XG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLnZpZGVvLmFjdG9ycyAmJiBjb25maWcub3BlbkdyYXBoLnZpZGVvLmFjdG9ycy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25maWcub3BlbkdyYXBoLnZpZGVvLmFjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChhY3RvciwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChhY3Rvci5wcm9maWxlKSB7XG4gICAgICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgICAgIGtleTogXCJ2aWRlbzphY3RvcjowXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJ2aWRlbzphY3RvclwiLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGFjdG9yLnByb2ZpbGVcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFjdG9yLnJvbGUpIHtcbiAgICAgICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInZpZGVvOmFjdG9yOnJvbGU6MFwiICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgcHJvcGVydHk6IFwidmlkZW86YWN0b3I6cm9sZVwiLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGFjdG9yLnJvbGVcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLnZpZGVvLmRpcmVjdG9ycyAmJiBjb25maWcub3BlbkdyYXBoLnZpZGVvLmRpcmVjdG9ycy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25maWcub3BlbkdyYXBoLnZpZGVvLmRpcmVjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChkaXJlY3RvciwgaW5kZXgpIHtcbiAgICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgICBrZXk6IFwidmlkZW86ZGlyZWN0b3I6MFwiICsgaW5kZXgsXG4gICAgICAgICAgICAgIHByb3BlcnR5OiBcInZpZGVvOmRpcmVjdG9yXCIsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGRpcmVjdG9yXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgudmlkZW8ud3JpdGVycyAmJiBjb25maWcub3BlbkdyYXBoLnZpZGVvLndyaXRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uZmlnLm9wZW5HcmFwaC52aWRlby53cml0ZXJzLmZvckVhY2goZnVuY3Rpb24gKHdyaXRlciwgaW5kZXgpIHtcbiAgICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgICBrZXk6IFwidmlkZW86d3JpdGVyOjBcIiArIGluZGV4LFxuICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJ2aWRlbzp3cml0ZXJcIixcbiAgICAgICAgICAgICAgY29udGVudDogd3JpdGVyXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uZHVyYXRpb24pIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJ2aWRlbzpkdXJhdGlvblwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwidmlkZW86ZHVyYXRpb25cIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uZHVyYXRpb24udG9TdHJpbmcoKVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC52aWRlby5yZWxlYXNlRGF0ZSkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcInZpZGVvOnJlbGVhc2VfZGF0ZVwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwidmlkZW86cmVsZWFzZV9kYXRlXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLnZpZGVvLnJlbGVhc2VEYXRlXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLnZpZGVvLnRhZ3MgJiYgY29uZmlnLm9wZW5HcmFwaC52aWRlby50YWdzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbmZpZy5vcGVuR3JhcGgudmlkZW8udGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcsIGluZGV4KSB7XG4gICAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBcInZpZGVvOnRhZzowXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgcHJvcGVydHk6IFwidmlkZW86dGFnXCIsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHRhZ1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLnZpZGVvLnNlcmllcykge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcInZpZGVvOnNlcmllc1wiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwidmlkZW86c2VyaWVzXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLnZpZGVvLnNlcmllc1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBpbWFnZXNcbiAgICBpZiAoY29uZmlnLmRlZmF1bHRPcGVuR3JhcGhJbWFnZVdpZHRoKSB7XG4gICAgICBkZWZhdWx0cy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VXaWR0aCA9IGNvbmZpZy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VXaWR0aDtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQpIHtcbiAgICAgIGRlZmF1bHRzLmRlZmF1bHRPcGVuR3JhcGhJbWFnZUhlaWdodCA9IGNvbmZpZy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQ7XG4gICAgfVxuICAgIGlmIChjb25maWcub3BlbkdyYXBoLmltYWdlcyAmJiBjb25maWcub3BlbkdyYXBoLmltYWdlcy5sZW5ndGgpIHtcbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoLmFwcGx5KHRhZ3NUb1JlbmRlciwgYnVpbGRPcGVuR3JhcGhNZWRpYVRhZ3MoJ2ltYWdlJywgY29uZmlnLm9wZW5HcmFwaC5pbWFnZXMsIHtcbiAgICAgICAgZGVmYXVsdFdpZHRoOiBkZWZhdWx0cy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VXaWR0aCxcbiAgICAgICAgZGVmYXVsdEhlaWdodDogZGVmYXVsdHMuZGVmYXVsdE9wZW5HcmFwaEltYWdlSGVpZ2h0XG4gICAgICB9KSk7XG4gICAgfVxuICAgIC8vIHZpZGVvc1xuICAgIGlmIChjb25maWcuZGVmYXVsdE9wZW5HcmFwaFZpZGVvV2lkdGgpIHtcbiAgICAgIGRlZmF1bHRzLmRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoID0gY29uZmlnLmRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodCkge1xuICAgICAgZGVmYXVsdHMuZGVmYXVsdE9wZW5HcmFwaFZpZGVvSGVpZ2h0ID0gY29uZmlnLmRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodDtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgudmlkZW9zICYmIGNvbmZpZy5vcGVuR3JhcGgudmlkZW9zLmxlbmd0aCkge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2guYXBwbHkodGFnc1RvUmVuZGVyLCBidWlsZE9wZW5HcmFwaE1lZGlhVGFncygndmlkZW8nLCBjb25maWcub3BlbkdyYXBoLnZpZGVvcywge1xuICAgICAgICBkZWZhdWx0V2lkdGg6IGRlZmF1bHRzLmRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoLFxuICAgICAgICBkZWZhdWx0SGVpZ2h0OiBkZWZhdWx0cy5kZWZhdWx0T3BlbkdyYXBoVmlkZW9IZWlnaHRcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgLy8gYXVkaW9cbiAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5hdWRpbykge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2guYXBwbHkodGFnc1RvUmVuZGVyLCBidWlsZE9wZW5HcmFwaE1lZGlhVGFncygnYXVkaW8nLCBjb25maWcub3BlbkdyYXBoLmF1ZGlvKSk7XG4gICAgfVxuICAgIGlmIChjb25maWcub3BlbkdyYXBoLmxvY2FsZSkge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJvZzpsb2NhbGVcIixcbiAgICAgICAgcHJvcGVydHk6IFwib2c6bG9jYWxlXCIsXG4gICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGgubG9jYWxlXG4gICAgICB9KSk7XG4gICAgfVxuICAgIGlmIChjb25maWcub3BlbkdyYXBoLnNpdGVOYW1lIHx8IGNvbmZpZy5vcGVuR3JhcGguc2l0ZV9uYW1lKSB7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcIm9nOnNpdGVfbmFtZVwiLFxuICAgICAgICBwcm9wZXJ0eTogXCJvZzpzaXRlX25hbWVcIixcbiAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5zaXRlTmFtZSB8fCBjb25maWcub3BlbkdyYXBoLnNpdGVfbmFtZVxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuICBpZiAoY29uZmlnLmNhbm9uaWNhbCkge1xuICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgcmVsOiBcImNhbm9uaWNhbFwiLFxuICAgICAgaHJlZjogY29uZmlnLmNhbm9uaWNhbCxcbiAgICAgIGtleTogXCJjYW5vbmljYWxcIlxuICAgIH0pKTtcbiAgfVxuICBpZiAoY29uZmlnLmFkZGl0aW9uYWxNZXRhVGFncyAmJiBjb25maWcuYWRkaXRpb25hbE1ldGFUYWdzLmxlbmd0aCA+IDApIHtcbiAgICBjb25maWcuYWRkaXRpb25hbE1ldGFUYWdzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICB2YXIgX3JlZjMsIF9yZWY0O1xuICAgICAgdmFyIGtleU92ZXJyaWRlID0gX3JlZjIua2V5T3ZlcnJpZGUsXG4gICAgICAgIHRhZyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYyLCBfZXhjbHVkZWQkeik7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIF9leHRlbmRzKHtcbiAgICAgICAga2V5OiBcIm1ldGE6XCIgKyAoKF9yZWYzID0gKF9yZWY0ID0ga2V5T3ZlcnJpZGUgIT0gbnVsbCA/IGtleU92ZXJyaWRlIDogdGFnLm5hbWUpICE9IG51bGwgPyBfcmVmNCA6IHRhZy5wcm9wZXJ0eSkgIT0gbnVsbCA/IF9yZWYzIDogdGFnLmh0dHBFcXVpdilcbiAgICAgIH0sIHRhZykpKTtcbiAgICB9KTtcbiAgfVxuICBpZiAoKF9jb25maWckYWRkaXRpb25hbExpbiA9IGNvbmZpZy5hZGRpdGlvbmFsTGlua1RhZ3MpICE9IG51bGwgJiYgX2NvbmZpZyRhZGRpdGlvbmFsTGluLmxlbmd0aCkge1xuICAgIGNvbmZpZy5hZGRpdGlvbmFsTGlua1RhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICB2YXIgX3Jlc3Qka2V5T3ZlcnJpZGU7XG4gICAgICB2YXIgdGFnQ3Jvc3NPcmlnaW4gPSB0YWcuY3Jvc3NPcmlnaW4sXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSh0YWcsIF9leGNsdWRlZDIkMik7XG4gICAgICB2YXIgY3Jvc3NPcmlnaW4gPSB0YWdDcm9zc09yaWdpbiA9PT0gJ2Fub255bW91cycgfHwgdGFnQ3Jvc3NPcmlnaW4gPT09ICd1c2UtY3JlZGVudGlhbHMnIHx8IHRhZ0Nyb3NzT3JpZ2luID09PSAnJyA/IHRhZ0Nyb3NzT3JpZ2luIDogdW5kZWZpbmVkO1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCBfZXh0ZW5kcyh7XG4gICAgICAgIGtleTogXCJsaW5rXCIgKyAoKF9yZXN0JGtleU92ZXJyaWRlID0gcmVzdC5rZXlPdmVycmlkZSkgIT0gbnVsbCA/IF9yZXN0JGtleU92ZXJyaWRlIDogcmVzdC5ocmVmKSArIHJlc3QucmVsXG4gICAgICB9LCByZXN0LCB7XG4gICAgICAgIGNyb3NzT3JpZ2luOiBjcm9zc09yaWdpblxuICAgICAgfSkpKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdGFnc1RvUmVuZGVyO1xufTtcblxudmFyIFdpdGhIZWFkID0gZnVuY3Rpb24gV2l0aEhlYWQocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIGJ1aWxkVGFncyhwcm9wcykpO1xufTtcblxudmFyIERlZmF1bHRTZW8gPSBmdW5jdGlvbiBEZWZhdWx0U2VvKF9yZWYpIHtcbiAgdmFyIHRpdGxlID0gX3JlZi50aXRsZSxcbiAgICB0aXRsZVRlbXBsYXRlID0gX3JlZi50aXRsZVRlbXBsYXRlLFxuICAgIGRlZmF1bHRUaXRsZSA9IF9yZWYuZGVmYXVsdFRpdGxlLFxuICAgIHRoZW1lQ29sb3IgPSBfcmVmLnRoZW1lQ29sb3IsXG4gICAgX3JlZiRkYW5nZXJvdXNseVNldEFsID0gX3JlZi5kYW5nZXJvdXNseVNldEFsbFBhZ2VzVG9Ob0luZGV4LFxuICAgIGRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vSW5kZXggPSBfcmVmJGRhbmdlcm91c2x5U2V0QWwgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRkYW5nZXJvdXNseVNldEFsLFxuICAgIF9yZWYkZGFuZ2Vyb3VzbHlTZXRBbDIgPSBfcmVmLmRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vRm9sbG93LFxuICAgIGRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vRm9sbG93ID0gX3JlZiRkYW5nZXJvdXNseVNldEFsMiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGRhbmdlcm91c2x5U2V0QWwyLFxuICAgIGRlc2NyaXB0aW9uID0gX3JlZi5kZXNjcmlwdGlvbixcbiAgICBjYW5vbmljYWwgPSBfcmVmLmNhbm9uaWNhbCxcbiAgICBmYWNlYm9vayA9IF9yZWYuZmFjZWJvb2ssXG4gICAgb3BlbkdyYXBoID0gX3JlZi5vcGVuR3JhcGgsXG4gICAgYWRkaXRpb25hbE1ldGFUYWdzID0gX3JlZi5hZGRpdGlvbmFsTWV0YVRhZ3MsXG4gICAgdHdpdHRlciA9IF9yZWYudHdpdHRlcixcbiAgICBkZWZhdWx0T3BlbkdyYXBoSW1hZ2VXaWR0aCA9IF9yZWYuZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGgsXG4gICAgZGVmYXVsdE9wZW5HcmFwaEltYWdlSGVpZ2h0ID0gX3JlZi5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQsXG4gICAgZGVmYXVsdE9wZW5HcmFwaFZpZGVvV2lkdGggPSBfcmVmLmRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoLFxuICAgIGRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodCA9IF9yZWYuZGVmYXVsdE9wZW5HcmFwaFZpZGVvSGVpZ2h0LFxuICAgIG1vYmlsZUFsdGVybmF0ZSA9IF9yZWYubW9iaWxlQWx0ZXJuYXRlLFxuICAgIGxhbmd1YWdlQWx0ZXJuYXRlcyA9IF9yZWYubGFuZ3VhZ2VBbHRlcm5hdGVzLFxuICAgIGFkZGl0aW9uYWxMaW5rVGFncyA9IF9yZWYuYWRkaXRpb25hbExpbmtUYWdzLFxuICAgIHJvYm90c1Byb3BzID0gX3JlZi5yb2JvdHNQcm9wcyxcbiAgICBub3JvYm90cyA9IF9yZWYubm9yb2JvdHM7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChXaXRoSGVhZCwge1xuICAgIHRpdGxlOiB0aXRsZSxcbiAgICB0aXRsZVRlbXBsYXRlOiB0aXRsZVRlbXBsYXRlLFxuICAgIGRlZmF1bHRUaXRsZTogZGVmYXVsdFRpdGxlLFxuICAgIHRoZW1lQ29sb3I6IHRoZW1lQ29sb3IsXG4gICAgZGFuZ2Vyb3VzbHlTZXRBbGxQYWdlc1RvTm9JbmRleDogZGFuZ2Vyb3VzbHlTZXRBbGxQYWdlc1RvTm9JbmRleCxcbiAgICBkYW5nZXJvdXNseVNldEFsbFBhZ2VzVG9Ob0ZvbGxvdzogZGFuZ2Vyb3VzbHlTZXRBbGxQYWdlc1RvTm9Gb2xsb3csXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIGNhbm9uaWNhbDogY2Fub25pY2FsLFxuICAgIGZhY2Vib29rOiBmYWNlYm9vayxcbiAgICBvcGVuR3JhcGg6IG9wZW5HcmFwaCxcbiAgICBhZGRpdGlvbmFsTWV0YVRhZ3M6IGFkZGl0aW9uYWxNZXRhVGFncyxcbiAgICB0d2l0dGVyOiB0d2l0dGVyLFxuICAgIGRlZmF1bHRPcGVuR3JhcGhJbWFnZVdpZHRoOiBkZWZhdWx0T3BlbkdyYXBoSW1hZ2VXaWR0aCxcbiAgICBkZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQ6IGRlZmF1bHRPcGVuR3JhcGhJbWFnZUhlaWdodCxcbiAgICBkZWZhdWx0T3BlbkdyYXBoVmlkZW9XaWR0aDogZGVmYXVsdE9wZW5HcmFwaFZpZGVvV2lkdGgsXG4gICAgZGVmYXVsdE9wZW5HcmFwaFZpZGVvSGVpZ2h0OiBkZWZhdWx0T3BlbkdyYXBoVmlkZW9IZWlnaHQsXG4gICAgbW9iaWxlQWx0ZXJuYXRlOiBtb2JpbGVBbHRlcm5hdGUsXG4gICAgbGFuZ3VhZ2VBbHRlcm5hdGVzOiBsYW5ndWFnZUFsdGVybmF0ZXMsXG4gICAgYWRkaXRpb25hbExpbmtUYWdzOiBhZGRpdGlvbmFsTGlua1RhZ3MsXG4gICAgcm9ib3RzUHJvcHM6IHJvYm90c1Byb3BzLFxuICAgIG5vcm9ib3RzOiBub3JvYm90c1xuICB9KTtcbn07XG5cbnZhciBOZXh0U2VvID0gZnVuY3Rpb24gTmV4dFNlbyhfcmVmKSB7XG4gIHZhciB0aXRsZSA9IF9yZWYudGl0bGUsXG4gICAgdGhlbWVDb2xvciA9IF9yZWYudGhlbWVDb2xvcixcbiAgICBub2luZGV4ID0gX3JlZi5ub2luZGV4LFxuICAgIG5vZm9sbG93ID0gX3JlZi5ub2ZvbGxvdyxcbiAgICByb2JvdHNQcm9wcyA9IF9yZWYucm9ib3RzUHJvcHMsXG4gICAgZGVzY3JpcHRpb24gPSBfcmVmLmRlc2NyaXB0aW9uLFxuICAgIGNhbm9uaWNhbCA9IF9yZWYuY2Fub25pY2FsLFxuICAgIG9wZW5HcmFwaCA9IF9yZWYub3BlbkdyYXBoLFxuICAgIGZhY2Vib29rID0gX3JlZi5mYWNlYm9vayxcbiAgICB0d2l0dGVyID0gX3JlZi50d2l0dGVyLFxuICAgIGFkZGl0aW9uYWxNZXRhVGFncyA9IF9yZWYuYWRkaXRpb25hbE1ldGFUYWdzLFxuICAgIHRpdGxlVGVtcGxhdGUgPSBfcmVmLnRpdGxlVGVtcGxhdGUsXG4gICAgZGVmYXVsdFRpdGxlID0gX3JlZi5kZWZhdWx0VGl0bGUsXG4gICAgbW9iaWxlQWx0ZXJuYXRlID0gX3JlZi5tb2JpbGVBbHRlcm5hdGUsXG4gICAgbGFuZ3VhZ2VBbHRlcm5hdGVzID0gX3JlZi5sYW5ndWFnZUFsdGVybmF0ZXMsXG4gICAgYWRkaXRpb25hbExpbmtUYWdzID0gX3JlZi5hZGRpdGlvbmFsTGlua1RhZ3M7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoV2l0aEhlYWQsIHtcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgdGhlbWVDb2xvcjogdGhlbWVDb2xvcixcbiAgICBub2luZGV4OiBub2luZGV4LFxuICAgIG5vZm9sbG93OiBub2ZvbGxvdyxcbiAgICByb2JvdHNQcm9wczogcm9ib3RzUHJvcHMsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIGNhbm9uaWNhbDogY2Fub25pY2FsLFxuICAgIGZhY2Vib29rOiBmYWNlYm9vayxcbiAgICBvcGVuR3JhcGg6IG9wZW5HcmFwaCxcbiAgICBhZGRpdGlvbmFsTWV0YVRhZ3M6IGFkZGl0aW9uYWxNZXRhVGFncyxcbiAgICB0d2l0dGVyOiB0d2l0dGVyLFxuICAgIHRpdGxlVGVtcGxhdGU6IHRpdGxlVGVtcGxhdGUsXG4gICAgZGVmYXVsdFRpdGxlOiBkZWZhdWx0VGl0bGUsXG4gICAgbW9iaWxlQWx0ZXJuYXRlOiBtb2JpbGVBbHRlcm5hdGUsXG4gICAgbGFuZ3VhZ2VBbHRlcm5hdGVzOiBsYW5ndWFnZUFsdGVybmF0ZXMsXG4gICAgYWRkaXRpb25hbExpbmtUYWdzOiBhZGRpdGlvbmFsTGlua1RhZ3NcbiAgfSkpO1xufTtcblxudmFyIHRvSnNvbiA9IGZ1bmN0aW9uIHRvSnNvbih0eXBlLCBqc29ubGQpIHtcbiAgdmFyIGRhdGEgPSBqc29ubGQ7XG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEpICYmIGRhdGEubGVuZ3RoID09PSAxKSB7XG4gICAgZGF0YSA9IF9leHRlbmRzKHt9LCBqc29ubGRbMF0pO1xuICB9XG4gIHZhciBqc29uTGRPYmplY3QgPSBBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICByZXR1cm4gZm9ybWF0T2JqZWN0Rm9yU2NoZW1hKHR5cGUsIGl0ZW0pO1xuICB9KSA6IGZvcm1hdE9iamVjdEZvclNjaGVtYSh0eXBlLCBkYXRhKTtcbiAgcmV0dXJuIHtcbiAgICBfX2h0bWw6IEpTT04uc3RyaW5naWZ5KGpzb25MZE9iamVjdCwgc2FmZUpzb25MZFJlcGxhY2VyKVxuICB9O1xufTtcbnZhciBmb3JtYXRPYmplY3RGb3JTY2hlbWEgPSBmdW5jdGlvbiBmb3JtYXRPYmplY3RGb3JTY2hlbWEodHlwZSwganNvbmxkKSB7XG4gIHZhciBfanNvbmxkJGlkID0ganNvbmxkLmlkLFxuICAgIGlkID0gX2pzb25sZCRpZCA9PT0gdm9pZCAwID8gdW5kZWZpbmVkIDogX2pzb25sZCRpZDtcbiAgdmFyIHVwZGF0ZWQgPSBfZXh0ZW5kcyh7fSwgaWQgPyB7XG4gICAgJ0BpZCc6IGpzb25sZC5pZFxuICB9IDoge30sIGpzb25sZCk7XG4gIGRlbGV0ZSB1cGRhdGVkLmlkO1xuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICdAY29udGV4dCc6ICdodHRwczovL3NjaGVtYS5vcmcnLFxuICAgICdAdHlwZSc6IHR5cGVcbiAgfSwgdXBkYXRlZCk7XG59O1xudmFyIEVTQ0FQRV9FTlRJVElFUyA9IE9iamVjdC5mcmVlemUoe1xuICAnJic6ICcmYW1wOycsXG4gICc8JzogJyZsdDsnLFxuICAnPic6ICcmZ3Q7JyxcbiAgJ1wiJzogJyZxdW90OycsXG4gIFwiJ1wiOiAnJmFwb3M7J1xufSk7XG52YXIgRVNDQVBFX1JFR0VYID0gbmV3IFJlZ0V4cChcIltcIiArIE9iamVjdC5rZXlzKEVTQ0FQRV9FTlRJVElFUykuam9pbignJykgKyBcIl1cIiwgJ2cnKTtcbnZhciBFU0NBUEVfUkVQTEFDRVIgPSBmdW5jdGlvbiBFU0NBUEVfUkVQTEFDRVIodCkge1xuICByZXR1cm4gRVNDQVBFX0VOVElUSUVTW3RdO1xufTtcbi8qKlxuICogQSByZXBsYWNlciBmb3IgSlNPTi5zdHJpbmdpZnkgdG8gc3RyaXAgSlNPTi1MRCBvZiBpbGxlZ2FsIEhUTUwgZW50aXRpZXNcbiAqIHBlciBodHRwczovL3d3dy53My5vcmcvVFIvanNvbi1sZDExLyNyZXN0cmljdGlvbnMtZm9yLWNvbnRlbnRzLW9mLWpzb24tbGQtc2NyaXB0LWVsZW1lbnRzXG4gKi9cbnZhciBzYWZlSnNvbkxkUmVwbGFjZXIgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFJlcGxhY2UgcGVyIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9qc29uLWxkMTEvI3Jlc3RyaWN0aW9ucy1mb3ItY29udGVudHMtb2YtanNvbi1sZC1zY3JpcHQtZWxlbWVudHNcbiAgLy8gU29sdXRpb24gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTQ5OTgyMS84NjQzMTNcbiAgcmV0dXJuIGZ1bmN0aW9uIChfLCB2YWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAvLyBPbWl0IG51bGwgdmFsdWVzLlxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIC8vIEpTT04uc3RyaW5naWZ5IHdpbGwgcmVjdXJzaXZlbHkgY2FsbCByZXBsYWNlci5cbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2JpZ2ludCc6XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIC8vIFRoZXNlIHZhbHVlcyBhcmUgbm90IHJpc2t5LlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoRVNDQVBFX1JFR0VYLCBFU0NBUEVfUkVQTEFDRVIpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAge1xuICAgICAgICAgIC8vIEpTT04uc3RyaW5naWZ5IHdpbGwgcmVtb3ZlIHRoaXMgZWxlbWVudC5cbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICB9O1xufSgpO1xuXG52YXIgX2V4Y2x1ZGVkJHkgPSBbXCJ0eXBlXCIsIFwia2V5T3ZlcnJpZGVcIiwgXCJzY3JpcHRLZXlcIiwgXCJzY3JpcHRJZFwiLCBcImRhdGFBcnJheVwiLCBcInVzZUFwcERpclwiXTtcbmZ1bmN0aW9uIEpzb25MZChfcmVmKSB7XG4gIHZhciBfcmVmJHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgdHlwZSA9IF9yZWYkdHlwZSA9PT0gdm9pZCAwID8gJ1RoaW5nJyA6IF9yZWYkdHlwZSxcbiAgICBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgc2NyaXB0S2V5ID0gX3JlZi5zY3JpcHRLZXksXG4gICAgX3JlZiRzY3JpcHRJZCA9IF9yZWYuc2NyaXB0SWQsXG4gICAgc2NyaXB0SWQgPSBfcmVmJHNjcmlwdElkID09PSB2b2lkIDAgPyB1bmRlZmluZWQgOiBfcmVmJHNjcmlwdElkLFxuICAgIGRhdGFBcnJheSA9IF9yZWYuZGF0YUFycmF5LFxuICAgIF9yZWYkdXNlQXBwRGlyID0gX3JlZi51c2VBcHBEaXIsXG4gICAgdXNlQXBwRGlyID0gX3JlZiR1c2VBcHBEaXIgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiR1c2VBcHBEaXIsXG4gICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCR5KTtcbiAgdmFyIEpzb25MZFNjcmlwdCA9IGZ1bmN0aW9uIEpzb25MZFNjcmlwdCgpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgICBpZDogc2NyaXB0SWQsXG4gICAgICBcImRhdGEtdGVzdGlkXCI6IHNjcmlwdElkLFxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHRvSnNvbih0eXBlLCBkYXRhQXJyYXkgPT09IHVuZGVmaW5lZCA/IF9leHRlbmRzKHt9LCByZXN0KSA6IGRhdGFBcnJheSksXG4gICAgICBrZXk6IFwianNvbmxkLVwiICsgc2NyaXB0S2V5ICsgKGtleU92ZXJyaWRlID8gXCItXCIgKyBrZXlPdmVycmlkZSA6ICcnKVxuICAgIH0pO1xuICB9O1xuICBpZiAodXNlQXBwRGlyKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEpzb25MZFNjcmlwdCwgbnVsbCk7XG4gIH1cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIEpzb25MZFNjcmlwdCgpKTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhdXRob3IgaW5mb3JtYXRpb25cbiAqIEBwYXJhbSBhdXRob3JcbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlQXV0aG9ySW5mbyhhdXRob3IpIHtcbiAgaWYgKHR5cGVvZiBhdXRob3IgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdAdHlwZSc6ICdQZXJzb24nLFxuICAgICAgbmFtZTogYXV0aG9yXG4gICAgfTtcbiAgfSBlbHNlIGlmICghIWF1dGhvci5uYW1lKSB7XG4gICAgdmFyIF9hdXRob3IkdHlwZTtcbiAgICByZXR1cm4ge1xuICAgICAgJ0B0eXBlJzogKF9hdXRob3IkdHlwZSA9IGF1dGhvciA9PSBudWxsID8gdm9pZCAwIDogYXV0aG9yLnR5cGUpICE9IG51bGwgPyBfYXV0aG9yJHR5cGUgOiAnUGVyc29uJyxcbiAgICAgIG5hbWU6IGF1dGhvci5uYW1lLFxuICAgICAgdXJsOiBhdXRob3IgPT0gbnVsbCA/IHZvaWQgMCA6IGF1dGhvci51cmxcbiAgICB9O1xuICB9XG4gIHJldHVybjtcbn1cbmZ1bmN0aW9uIHNldEF1dGhvcihhdXRob3IpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXV0aG9yKSkge1xuICAgIHJldHVybiBhdXRob3IubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gZ2VuZXJhdGVBdXRob3JJbmZvKGl0ZW0pO1xuICAgIH0pLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICEhaXRlbTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChhdXRob3IpIHtcbiAgICByZXR1cm4gZ2VuZXJhdGVBdXRob3JJbmZvKGF1dGhvcik7XG4gIH1cbiAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBzZXRJbWFnZShpbWFnZSkge1xuICBpZiAoaW1hZ2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ0B0eXBlJzogJ0ltYWdlT2JqZWN0JyxcbiAgICAgIHVybDogaW1hZ2VcbiAgICB9O1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHNldFB1Ymxpc2hlcihwdWJsaXNoZXJOYW1lLCBwdWJsaXNoZXJMb2dvKSB7XG4gIGlmICghcHVibGlzaGVyTmFtZSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICAnQHR5cGUnOiAnT3JnYW5pemF0aW9uJyxcbiAgICBuYW1lOiBwdWJsaXNoZXJOYW1lLFxuICAgIGxvZ286IHNldEltYWdlKHB1Ymxpc2hlckxvZ28pXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNldFJldmlld1JhdGluZyhyYXRpbmcpIHtcbiAgaWYgKHJhdGluZykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcmF0aW5nLCB7XG4gICAgICAnQHR5cGUnOiAnUmF0aW5nJ1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbnZhciBfZXhjbHVkZWQkeCA9IFtcInJldmlld1JhdGluZ1wiLCBcImF1dGhvclwiLCBcInB1Ymxpc2hlclwiXTtcbmZ1bmN0aW9uIHNldFJldmlld3MocmV2aWV3cykge1xuICBmdW5jdGlvbiBtYXBSZXZpZXcoX3JlZikge1xuICAgIHZhciByZXZpZXdSYXRpbmcgPSBfcmVmLnJldmlld1JhdGluZyxcbiAgICAgIGF1dGhvciA9IF9yZWYuYXV0aG9yLFxuICAgICAgcHVibGlzaGVyID0gX3JlZi5wdWJsaXNoZXIsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgX2V4Y2x1ZGVkJHgpO1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgICAgJ0B0eXBlJzogJ1JldmlldydcbiAgICB9LCBhdXRob3IgJiYge1xuICAgICAgYXV0aG9yOiBzZXRBdXRob3IoYXV0aG9yKVxuICAgIH0sIHJldmlld1JhdGluZyAmJiB7XG4gICAgICByZXZpZXdSYXRpbmc6IHNldFJldmlld1JhdGluZyhyZXZpZXdSYXRpbmcpXG4gICAgfSwgcHVibGlzaGVyICYmIHtcbiAgICAgIHB1Ymxpc2hlcjogc2V0UHVibGlzaGVyKHB1Ymxpc2hlci5uYW1lKVxuICAgIH0pO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHJldmlld3MpKSB7XG4gICAgcmV0dXJuIHJldmlld3MubWFwKG1hcFJldmlldyk7XG4gIH0gZWxzZSBpZiAocmV2aWV3cykge1xuICAgIHJldHVybiBtYXBSZXZpZXcocmV2aWV3cyk7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gc2V0TnV0cml0aW9uKGNhbG9yaWVzKSB7XG4gIGlmIChjYWxvcmllcykge1xuICAgIHJldHVybiB7XG4gICAgICAnQHR5cGUnOiAnTnV0cml0aW9uSW5mb3JtYXRpb24nLFxuICAgICAgY2Fsb3JpZXM6IGNhbG9yaWVzICsgXCIgY2Fsb3JpZXNcIlxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gc2V0QWdncmVnYXRlUmF0aW5nKGFnZ3JlZ2F0ZVJhdGluZykge1xuICBpZiAoYWdncmVnYXRlUmF0aW5nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdAdHlwZSc6ICdBZ2dyZWdhdGVSYXRpbmcnLFxuICAgICAgcmF0aW5nQ291bnQ6IGFnZ3JlZ2F0ZVJhdGluZy5yYXRpbmdDb3VudCxcbiAgICAgIHJldmlld0NvdW50OiBhZ2dyZWdhdGVSYXRpbmcucmV2aWV3Q291bnQsXG4gICAgICBiZXN0UmF0aW5nOiBhZ2dyZWdhdGVSYXRpbmcuYmVzdFJhdGluZyxcbiAgICAgIHJhdGluZ1ZhbHVlOiBhZ2dyZWdhdGVSYXRpbmcucmF0aW5nVmFsdWUsXG4gICAgICB3b3JzdFJhdGluZzogYWdncmVnYXRlUmF0aW5nLndvcnN0UmF0aW5nXG4gICAgfTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBzZXRDbGlwKGNsaXBzKSB7XG4gIGZ1bmN0aW9uIG1hcENsaXAoY2xpcCkge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgY2xpcCwge1xuICAgICAgJ0B0eXBlJzogJ0NsaXAnXG4gICAgfSk7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2xpcHMpKSB7XG4gICAgcmV0dXJuIGNsaXBzLm1hcChtYXBDbGlwKTtcbiAgfSBlbHNlIGlmIChjbGlwcykge1xuICAgIHJldHVybiBtYXBDbGlwKGNsaXBzKTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBzZXRJbnRlcmFjdGlvblN0YXRpc3RpYyh3YXRjaENvdW50KSB7XG4gIGlmICh3YXRjaENvdW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdAdHlwZSc6ICdJbnRlcmFjdGlvbkNvdW50ZXInLFxuICAgICAgaW50ZXJhY3Rpb25UeXBlOiAnaHR0cHM6Ly9zY2hlbWEub3JnL1dhdGNoQWN0aW9uJyxcbiAgICAgIHVzZXJJbnRlcmFjdGlvbkNvdW50OiB3YXRjaENvdW50XG4gICAgfTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBzZXRCcm9hZGNhc3RFdmVudChwdWJsaWNhdGlvbikge1xuICBmdW5jdGlvbiBtYXBCcm9hZGNhc3RFdmVudChwdWJsaWNhdGlvbikge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcHVibGljYXRpb24sIHtcbiAgICAgICdAdHlwZSc6ICdCcm9hZGNhc3RFdmVudCdcbiAgICB9KTtcbiAgfVxuICBpZiAocHVibGljYXRpb24pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwdWJsaWNhdGlvbikpIHtcbiAgICAgIHJldHVybiBwdWJsaWNhdGlvbi5tYXAobWFwQnJvYWRjYXN0RXZlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gbWFwQnJvYWRjYXN0RXZlbnQocHVibGljYXRpb24pO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbnZhciBfZXhjbHVkZWQkdyA9IFtcInRodW1ibmFpbFVybHNcIiwgXCJoYXNQYXJ0XCIsIFwid2F0Y2hDb3VudFwiLCBcInB1YmxpY2F0aW9uXCJdO1xuZnVuY3Rpb24gc2V0VmlkZW8odmlkZW8sIHNldENvbnRleHQpIHtcbiAgaWYgKHNldENvbnRleHQgPT09IHZvaWQgMCkge1xuICAgIHNldENvbnRleHQgPSBmYWxzZTtcbiAgfVxuICBmdW5jdGlvbiBtYXBWaWRlbyhfcmVmLCBjb250ZXh0KSB7XG4gICAgdmFyIHRodW1ibmFpbFVybHMgPSBfcmVmLnRodW1ibmFpbFVybHMsXG4gICAgICBoYXNQYXJ0ID0gX3JlZi5oYXNQYXJ0LFxuICAgICAgd2F0Y2hDb3VudCA9IF9yZWYud2F0Y2hDb3VudCxcbiAgICAgIHB1YmxpY2F0aW9uID0gX3JlZi5wdWJsaWNhdGlvbixcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQkdyk7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgICAnQHR5cGUnOiAnVmlkZW9PYmplY3QnXG4gICAgfSwgY29udGV4dCAmJiB7XG4gICAgICAnQGNvbnRleHQnOiAnaHR0cHM6Ly9zY2hlbWEub3JnJ1xuICAgIH0sIHtcbiAgICAgIHRodW1ibmFpbFVybDogdGh1bWJuYWlsVXJscyxcbiAgICAgIGhhc1BhcnQ6IHNldENsaXAoaGFzUGFydCksXG4gICAgICBpbnRlcmFjdGlvblN0YXRpc3RpYzogc2V0SW50ZXJhY3Rpb25TdGF0aXN0aWMod2F0Y2hDb3VudCksXG4gICAgICBwdWJsaWNhdGlvbjogc2V0QnJvYWRjYXN0RXZlbnQocHVibGljYXRpb24pXG4gICAgfSk7XG4gIH1cbiAgaWYgKHZpZGVvKSB7XG4gICAgcmV0dXJuIG1hcFZpZGVvKHZpZGVvLCBzZXRDb250ZXh0KTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBzZXRJbnN0cnVjdGlvbihpbnN0cnVjdGlvbikge1xuICBpZiAoaW5zdHJ1Y3Rpb24pIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGluc3RydWN0aW9uLCB7XG4gICAgICAnQHR5cGUnOiAnSG93VG9TdGVwJ1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbnZhciBfZXhjbHVkZWQkdiA9IFtcInR5cGVcIiwgXCJrZXlPdmVycmlkZVwiLCBcIm9mVHlwZVwiLCBcImRhdGFcIl0sXG4gIF9leGNsdWRlZDIkMSA9IFtcImF1dGhvck5hbWVcIiwgXCJpbWFnZXNcIiwgXCJ5aWVsZHNcIiwgXCJjYXRlZ29yeVwiLCBcImNhbG9yaWVzXCIsIFwiYWdncmVnYXRlUmF0aW5nXCIsIFwidmlkZW9cIiwgXCJpbmdyZWRpZW50c1wiLCBcImluc3RydWN0aW9uc1wiLCBcImN1aXNpbmVcIl07XG5mdW5jdGlvbiBDYXJvdXNlbEpzb25MZChfcmVmKSB7XG4gIHZhciBfcmVmJHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgdHlwZSA9IF9yZWYkdHlwZSA9PT0gdm9pZCAwID8gJ0Nhcm91c2VsJyA6IF9yZWYkdHlwZSxcbiAgICBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgb2ZUeXBlID0gX3JlZi5vZlR5cGUsXG4gICAgZGF0YSA9IF9yZWYuZGF0YSxcbiAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgX2V4Y2x1ZGVkJHYpO1xuICBmdW5jdGlvbiBnZW5lcmF0ZUxpc3QoZGF0YSwgb2ZUeXBlKSB7XG4gICAgc3dpdGNoIChvZlR5cGUpIHtcbiAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICByZXR1cm4gZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdAdHlwZSc6ICdMaXN0SXRlbScsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJcIiArIChpbmRleCArIDEpLFxuICAgICAgICAgICAgdXJsOiBpdGVtLnVybFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnY291cnNlJzpcbiAgICAgICAgcmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnQHR5cGUnOiAnTGlzdEl0ZW0nLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiXCIgKyAoaW5kZXggKyAxKSxcbiAgICAgICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAgICAgJ0Bjb250ZXh0JzogJ2h0dHBzOi8vc2NoZW1hLm9yZycsXG4gICAgICAgICAgICAgICdAdHlwZSc6ICdDb3Vyc2UnLFxuICAgICAgICAgICAgICB1cmw6IGl0ZW0udXJsLFxuICAgICAgICAgICAgICBuYW1lOiBpdGVtLmNvdXJzZU5hbWUsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBwcm92aWRlcjoge1xuICAgICAgICAgICAgICAgICdAdHlwZSc6ICdPcmdhbml6YXRpb24nLFxuICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0ucHJvdmlkZXJOYW1lLFxuICAgICAgICAgICAgICAgIHNhbWVBczogaXRlbS5wcm92aWRlclVybFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdtb3ZpZSc6XG4gICAgICAgIHJldHVybiBkYXRhLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ0B0eXBlJzogJ0xpc3RJdGVtJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcIlwiICsgKGluZGV4ICsgMSksXG4gICAgICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgICAgICdAY29udGV4dCc6ICdodHRwczovL3NjaGVtYS5vcmcnLFxuICAgICAgICAgICAgICAnQHR5cGUnOiAnTW92aWUnLFxuICAgICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgIHVybDogaXRlbS51cmwsXG4gICAgICAgICAgICAgIGltYWdlOiBpdGVtLmltYWdlLFxuICAgICAgICAgICAgICBkYXRlQ3JlYXRlZDogaXRlbS5kYXRlQ3JlYXRlZCxcbiAgICAgICAgICAgICAgZGlyZWN0b3I6IGl0ZW0uZGlyZWN0b3IgPyBBcnJheS5pc0FycmF5KGl0ZW0uZGlyZWN0b3IpID8gaXRlbS5kaXJlY3Rvci5tYXAoZnVuY3Rpb24gKGRpcmVjdG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICdAdHlwZSc6ICdQZXJzb24nLFxuICAgICAgICAgICAgICAgICAgbmFtZTogZGlyZWN0b3IubmFtZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0pIDoge1xuICAgICAgICAgICAgICAgICdAdHlwZSc6ICdQZXJzb24nLFxuICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0uZGlyZWN0b3IubmFtZVxuICAgICAgICAgICAgICB9IDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICByZXZpZXc6IHNldFJldmlld3MoaXRlbS5yZXZpZXcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdyZWNpcGUnOlxuICAgICAgICByZXR1cm4gZGF0YS5tYXAoZnVuY3Rpb24gKF9yZWYyLCBpbmRleCkge1xuICAgICAgICAgIHZhciBhdXRob3JOYW1lID0gX3JlZjIuYXV0aG9yTmFtZSxcbiAgICAgICAgICAgIGltYWdlcyA9IF9yZWYyLmltYWdlcyxcbiAgICAgICAgICAgIHlpZWxkcyA9IF9yZWYyLnlpZWxkcyxcbiAgICAgICAgICAgIGNhdGVnb3J5ID0gX3JlZjIuY2F0ZWdvcnksXG4gICAgICAgICAgICBjYWxvcmllcyA9IF9yZWYyLmNhbG9yaWVzLFxuICAgICAgICAgICAgYWdncmVnYXRlUmF0aW5nID0gX3JlZjIuYWdncmVnYXRlUmF0aW5nLFxuICAgICAgICAgICAgdmlkZW8gPSBfcmVmMi52aWRlbyxcbiAgICAgICAgICAgIGluZ3JlZGllbnRzID0gX3JlZjIuaW5ncmVkaWVudHMsXG4gICAgICAgICAgICBpbnN0cnVjdGlvbnMgPSBfcmVmMi5pbnN0cnVjdGlvbnMsXG4gICAgICAgICAgICBjdWlzaW5lID0gX3JlZjIuY3Vpc2luZSxcbiAgICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMiwgX2V4Y2x1ZGVkMiQxKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ0B0eXBlJzogJ0xpc3RJdGVtJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcIlwiICsgKGluZGV4ICsgMSksXG4gICAgICAgICAgICBpdGVtOiBfZXh0ZW5kcyh7XG4gICAgICAgICAgICAgICdAY29udGV4dCc6ICdodHRwczovL3NjaGVtYS5vcmcnLFxuICAgICAgICAgICAgICAnQHR5cGUnOiAnUmVjaXBlJ1xuICAgICAgICAgICAgfSwgcmVzdCwge1xuICAgICAgICAgICAgICBhdXRob3I6IHNldEF1dGhvcihhdXRob3JOYW1lKSxcbiAgICAgICAgICAgICAgaW1hZ2U6IGltYWdlcyxcbiAgICAgICAgICAgICAgcmVjaXBlWWllbGQ6IHlpZWxkcyxcbiAgICAgICAgICAgICAgcmVjaXBlQ2F0ZWdvcnk6IGNhdGVnb3J5LFxuICAgICAgICAgICAgICByZWNpcGVDdWlzaW5lOiBjdWlzaW5lLFxuICAgICAgICAgICAgICBudXRyaXRpb246IHNldE51dHJpdGlvbihjYWxvcmllcyksXG4gICAgICAgICAgICAgIGFnZ3JlZ2F0ZVJhdGluZzogc2V0QWdncmVnYXRlUmF0aW5nKGFnZ3JlZ2F0ZVJhdGluZyksXG4gICAgICAgICAgICAgIHZpZGVvOiBzZXRWaWRlbyh2aWRlbyksXG4gICAgICAgICAgICAgIHJlY2lwZUluZ3JlZGllbnQ6IGluZ3JlZGllbnRzLFxuICAgICAgICAgICAgICByZWNpcGVJbnN0cnVjdGlvbnM6IGluc3RydWN0aW9ucy5tYXAoc2V0SW5zdHJ1Y3Rpb24pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnY3VzdG9tJzpcbiAgICAgICAgcmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgIHZhciBfaXRlbSRwb3NpdGlvbjtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ0B0eXBlJzogJ0xpc3RJdGVtJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAoX2l0ZW0kcG9zaXRpb24gPSBpdGVtLnBvc2l0aW9uKSAhPSBudWxsID8gX2l0ZW0kcG9zaXRpb24gOiBpbmRleCArIDEsXG4gICAgICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgICAgICdAdHlwZSc6IGl0ZW0udHlwZSxcbiAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHZhciBqc29uTGREYXRhID0gX2V4dGVuZHMoe1xuICAgICdAdHlwZSc6ICdJdGVtTGlzdCdcbiAgfSwgcmVzdCwge1xuICAgIGl0ZW1MaXN0RWxlbWVudDogZ2VuZXJhdGVMaXN0KGRhdGEsIG9mVHlwZSlcbiAgfSwgcmVzdCk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChKc29uTGQsIF9leHRlbmRzKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleU92ZXJyaWRlOiBrZXlPdmVycmlkZVxuICB9LCBqc29uTGREYXRhLCB7XG4gICAgc2NyaXB0S2V5OiBcIkNhcm91c2VsXCJcbiAgfSkpO1xufVxuXG52YXIgX2V4Y2x1ZGVkJHUgPSBbXCJ0eXBlXCIsIFwia2V5T3ZlcnJpZGVcIiwgXCJ1cmxcIiwgXCJ0aXRsZVwiLCBcImltYWdlc1wiLCBcInNlY3Rpb25cIiwgXCJkYXRlQ3JlYXRlZFwiLCBcImRhdGVQdWJsaXNoZWRcIiwgXCJkYXRlTW9kaWZpZWRcIiwgXCJhdXRob3JOYW1lXCIsIFwiYXV0aG9yVHlwZVwiLCBcInB1Ymxpc2hlck5hbWVcIiwgXCJwdWJsaXNoZXJMb2dvXCIsIFwiYm9keVwiLCBcImlzQWNjZXNzaWJsZUZvckZyZWVcIl07XG5mdW5jdGlvbiBOZXdzQXJ0aWNsZUpzb25MZChfcmVmKSB7XG4gIHZhciBfcmVmJHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgdHlwZSA9IF9yZWYkdHlwZSA9PT0gdm9pZCAwID8gJ05ld3NBcnRpY2xlJyA6IF9yZWYkdHlwZSxcbiAgICBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgdXJsID0gX3JlZi51cmwsXG4gICAgdGl0bGUgPSBfcmVmLnRpdGxlLFxuICAgIGltYWdlcyA9IF9yZWYuaW1hZ2VzLFxuICAgIHNlY3Rpb24gPSBfcmVmLnNlY3Rpb24sXG4gICAgZGF0ZUNyZWF0ZWQgPSBfcmVmLmRhdGVDcmVhdGVkLFxuICAgIGRhdGVQdWJsaXNoZWQgPSBfcmVmLmRhdGVQdWJsaXNoZWQsXG4gICAgZGF0ZU1vZGlmaWVkID0gX3JlZi5kYXRlTW9kaWZpZWQsXG4gICAgYXV0aG9yTmFtZSA9IF9yZWYuYXV0aG9yTmFtZSxcbiAgICBwdWJsaXNoZXJOYW1lID0gX3JlZi5wdWJsaXNoZXJOYW1lLFxuICAgIHB1Ymxpc2hlckxvZ28gPSBfcmVmLnB1Ymxpc2hlckxvZ28sXG4gICAgYm9keSA9IF9yZWYuYm9keSxcbiAgICBpc0FjY2Vzc2libGVGb3JGcmVlID0gX3JlZi5pc0FjY2Vzc2libGVGb3JGcmVlLFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQkdSk7XG4gIHZhciBkYXRhID0gX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICBtYWluRW50aXR5T2ZQYWdlOiB7XG4gICAgICAnQHR5cGUnOiAnV2ViUGFnZScsXG4gICAgICAnQGlkJzogdXJsXG4gICAgfSxcbiAgICBoZWFkbGluZTogdGl0bGUsXG4gICAgaW1hZ2U6IGltYWdlcyxcbiAgICBhcnRpY2xlU2VjdGlvbjogc2VjdGlvbixcbiAgICBkYXRlQ3JlYXRlZDogZGF0ZUNyZWF0ZWQgfHwgZGF0ZVB1Ymxpc2hlZCxcbiAgICBkYXRlUHVibGlzaGVkOiBkYXRlUHVibGlzaGVkLFxuICAgIGRhdGVNb2RpZmllZDogZGF0ZU1vZGlmaWVkIHx8IGRhdGVQdWJsaXNoZWQsXG4gICAgYXV0aG9yOiBzZXRBdXRob3IoYXV0aG9yTmFtZSksXG4gICAgcHVibGlzaGVyOiBzZXRQdWJsaXNoZXIocHVibGlzaGVyTmFtZSwgcHVibGlzaGVyTG9nbyksXG4gICAgYXJ0aWNsZUJvZHk6IGJvZHksXG4gICAgaXNBY2Nlc3NpYmxlRm9yRnJlZTogaXNBY2Nlc3NpYmxlRm9yRnJlZVxuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEpzb25MZCwgX2V4dGVuZHMoe1xuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5T3ZlcnJpZGU6IGtleU92ZXJyaWRlXG4gIH0sIGRhdGEsIHtcbiAgICBzY3JpcHRLZXk6IFwiTmV3c0FydGljbGVcIlxuICB9KSk7XG59XG5cbnZhciBfZXhjbHVkZWQkdCA9IFtcInR5cGVcIiwgXCJrZXlPdmVycmlkZVwiLCBcImJhc2VTYWxhcnlcIiwgXCJoaXJpbmdPcmdhbml6YXRpb25cIiwgXCJhcHBsaWNhbnRMb2NhdGlvblJlcXVpcmVtZW50c1wiLCBcImV4cGVyaWVuY2VSZXF1aXJlbWVudHNcIiwgXCJqb2JMb2NhdGlvblwiXTtcbmZ1bmN0aW9uIEpvYlBvc3RpbmdKc29uTGQoX3JlZikge1xuICB2YXIgX3JlZiR0eXBlID0gX3JlZi50eXBlLFxuICAgIHR5cGUgPSBfcmVmJHR5cGUgPT09IHZvaWQgMCA/ICdKb2JQb3N0aW5nJyA6IF9yZWYkdHlwZSxcbiAgICBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgYmFzZVNhbGFyeSA9IF9yZWYuYmFzZVNhbGFyeSxcbiAgICBoaXJpbmdPcmdhbml6YXRpb24gPSBfcmVmLmhpcmluZ09yZ2FuaXphdGlvbixcbiAgICBhcHBsaWNhbnRMb2NhdGlvblJlcXVpcmVtZW50cyA9IF9yZWYuYXBwbGljYW50TG9jYXRpb25SZXF1aXJlbWVudHMsXG4gICAgZXhwZXJpZW5jZVJlcXVpcmVtZW50cyA9IF9yZWYuZXhwZXJpZW5jZVJlcXVpcmVtZW50cyxcbiAgICBqb2JMb2NhdGlvbiA9IF9yZWYuam9iTG9jYXRpb24sXG4gICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCR0KTtcbiAgZnVuY3Rpb24gc2V0QmFzZVNhbGFyeShiYXNlU2FsYXJ5KSB7XG4gICAgaWYgKGJhc2VTYWxhcnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdAdHlwZSc6ICdNb25ldGFyeUFtb3VudCcsXG4gICAgICAgIGN1cnJlbmN5OiBiYXNlU2FsYXJ5LmN1cnJlbmN5LFxuICAgICAgICB2YWx1ZTogX2V4dGVuZHMoe1xuICAgICAgICAgICdAdHlwZSc6ICdRdWFudGl0YXRpdmVWYWx1ZScsXG4gICAgICAgICAgdW5pdFRleHQ6IGJhc2VTYWxhcnkudW5pdFRleHRcbiAgICAgICAgfSwgQXJyYXkuaXNBcnJheShiYXNlU2FsYXJ5LnZhbHVlKSA/IHtcbiAgICAgICAgICBtaW5WYWx1ZTogYmFzZVNhbGFyeS52YWx1ZVswXSxcbiAgICAgICAgICBtYXhWYWx1ZTogYmFzZVNhbGFyeS52YWx1ZVsxXVxuICAgICAgICB9IDoge1xuICAgICAgICAgIHZhbHVlOiBiYXNlU2FsYXJ5LnZhbHVlXG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGZ1bmN0aW9uIHNldEhpcmluZ09yZ2FuaXphdGlvbihvcmcpIHtcbiAgICBpZiAob3JnID09PSAnY29uZmlkZW50aWFsJykge1xuICAgICAgcmV0dXJuICdjb25maWRlbnRpYWwnO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0B0eXBlJzogJ09yZ2FuaXphdGlvbicsXG4gICAgICBuYW1lOiBvcmcubmFtZSxcbiAgICAgIHNhbWVBczogb3JnLnNhbWVBcyxcbiAgICAgIGxvZ286IG9yZy5sb2dvXG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBzZXRKb2JMb2NhdGlvbihsb2NhdGlvbikge1xuICAgIGlmIChsb2NhdGlvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ0B0eXBlJzogJ1BsYWNlJyxcbiAgICAgICAgYWRkcmVzczoge1xuICAgICAgICAgICdAdHlwZSc6ICdQb3N0YWxBZGRyZXNzJyxcbiAgICAgICAgICBhZGRyZXNzQ291bnRyeTogbG9jYXRpb24uYWRkcmVzc0NvdW50cnksXG4gICAgICAgICAgYWRkcmVzc0xvY2FsaXR5OiBsb2NhdGlvbi5hZGRyZXNzTG9jYWxpdHksXG4gICAgICAgICAgYWRkcmVzc1JlZ2lvbjogbG9jYXRpb24uYWRkcmVzc1JlZ2lvbixcbiAgICAgICAgICBwb3N0YWxDb2RlOiBsb2NhdGlvbi5wb3N0YWxDb2RlLFxuICAgICAgICAgIHN0cmVldEFkZHJlc3M6IGxvY2F0aW9uLnN0cmVldEFkZHJlc3NcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBmdW5jdGlvbiBzZXRBcHBsaWNhbnRMb2NhdGlvblJlcXVpcmVtZW50cyhyZXF1aXJlbWVudHMpIHtcbiAgICBpZiAocmVxdWlyZW1lbnRzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnQHR5cGUnOiAnQ291bnRyeScsXG4gICAgICAgIG5hbWU6IHJlcXVpcmVtZW50c1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBmdW5jdGlvbiBzZXRPY2N1cGF0aW9uYWxFeHBlcmllbmNlUmVxdWlyZW1lbnRzKHJlcXVpcmVtZW50cykge1xuICAgIGlmIChyZXF1aXJlbWVudHMpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdAdHlwZSc6IHJlcXVpcmVtZW50c1snQHR5cGUnXSA/IHJlcXVpcmVtZW50c1snQHR5cGUnXSA6ICdPY2N1cGF0aW9uYWxFeHBlcmllbmNlUmVxdWlyZW1lbnRzJyxcbiAgICAgICAgbW9udGhzT2ZFeHBlcmllbmNlOiByZXF1aXJlbWVudHMubWluaW11bU1vbnRoc09mRXhwZXJpZW5jZVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBmdW5jdGlvbiBzZXRFZHVjYXRpb25hbE9jY3VwYXRpb25hbENyZWRlbnRpYWwocmVxdWlyZW1lbnRzKSB7XG4gICAgaWYgKHJlcXVpcmVtZW50cykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ0B0eXBlJzogcmVxdWlyZW1lbnRzWydAdHlwZSddID8gcmVxdWlyZW1lbnRzWydAdHlwZSddIDogJ0VkdWNhdGlvbmFsT2NjdXBhdGlvbmFsQ3JlZGVudGlhbCcsXG4gICAgICAgIGNyZWRlbnRpYWxDYXRlZ29yeTogcmVxdWlyZW1lbnRzLmNyZWRlbnRpYWxDYXRlZ29yeVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICB2YXIgZGF0YSA9IF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgYmFzZVNhbGFyeTogc2V0QmFzZVNhbGFyeShiYXNlU2FsYXJ5KSxcbiAgICBoaXJpbmdPcmdhbml6YXRpb246IHNldEhpcmluZ09yZ2FuaXphdGlvbihoaXJpbmdPcmdhbml6YXRpb24pLFxuICAgIGpvYkxvY2F0aW9uOiBzZXRKb2JMb2NhdGlvbihqb2JMb2NhdGlvbiksXG4gICAgYXBwbGljYW50TG9jYXRpb25SZXF1aXJlbWVudHM6IHNldEFwcGxpY2FudExvY2F0aW9uUmVxdWlyZW1lbnRzKGFwcGxpY2FudExvY2F0aW9uUmVxdWlyZW1lbnRzKSxcbiAgICBleHBlcmllbmNlUmVxdWlyZW1lbnRzOiBzZXRPY2N1cGF0aW9uYWxFeHBlcmllbmNlUmVxdWlyZW1lbnRzKGV4cGVyaWVuY2VSZXF1aXJlbWVudHMgPT0gbnVsbCA/IHZvaWQgMCA6IGV4cGVyaWVuY2VSZXF1aXJlbWVudHMub2NjdXBhdGlvbmFsKSxcbiAgICBlZHVjYXRpb25SZXF1aXJlbWVudHM6IHNldEVkdWNhdGlvbmFsT2NjdXBhdGlvbmFsQ3JlZGVudGlhbChleHBlcmllbmNlUmVxdWlyZW1lbnRzID09IG51bGwgPyB2b2lkIDAgOiBleHBlcmllbmNlUmVxdWlyZW1lbnRzLmVkdWNhdGlvbmFsKSxcbiAgICBleHBlcmllbmNlSW5QbGFjZU9mRWR1Y2F0aW9uOiBleHBlcmllbmNlUmVxdWlyZW1lbnRzID09IG51bGwgPyB2b2lkIDAgOiBleHBlcmllbmNlUmVxdWlyZW1lbnRzLmV4cGVyaWVuY2VJblBsYWNlT2ZFZHVjYXRpb25cbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChKc29uTGQsIF9leHRlbmRzKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleU92ZXJyaWRlOiBrZXlPdmVycmlkZVxuICB9LCBkYXRhLCB7XG4gICAgc2NyaXB0S2V5OiBcIkpvYlBvc3RpbmdcIlxuICB9KSk7XG59XG5cbmZ1bmN0aW9uIHNldEFkZHJlc3MoYWRkcmVzcykge1xuICBpZiAoIWFkZHJlc3MpIHJldHVybiB1bmRlZmluZWQ7XG4gIGlmICghQXJyYXkuaXNBcnJheShhZGRyZXNzKSkgcmV0dXJuIHRvUG9zdGFsQWRkcmVzcyhhZGRyZXNzKTtcbiAgLy8gSWYgYXJyYXkgb2Ygb25lIGFkZHJlc3MsIHJlcGxhY2Ugd2l0aCBzaW5nbGUgYWRkcmVzc1xuICBpZiAoYWRkcmVzcy5sZW5ndGggPT09IDEpIHJldHVybiB0b1Bvc3RhbEFkZHJlc3MoYWRkcmVzc1swXSk7XG4gIC8vIElmIGFycmF5LCByZXR1cm4gbWFwcGVkIGFycmF5IG9mIFBvc3RhbEFkZHJlc3Nlc1xuICByZXR1cm4gYWRkcmVzcy5tYXAodG9Qb3N0YWxBZGRyZXNzKTtcbn1cbmZ1bmN0aW9uIHRvUG9zdGFsQWRkcmVzcyhhZGRyZXNzKSB7XG4gIGlmICh0eXBlb2YgYWRkcmVzcyA9PT0gJ3N0cmluZycpIHJldHVybiBhZGRyZXNzO1xuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICdAdHlwZSc6ICdQb3N0YWxBZGRyZXNzJ1xuICB9LCBhZGRyZXNzKTtcbn1cblxuZnVuY3Rpb24gc2V0R2VvKGdlbykge1xuICBpZiAoZ2VvKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBnZW8sIHtcbiAgICAgICdAdHlwZSc6ICdHZW9Db29yZGluYXRlcydcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBzZXRBY3Rpb24oYWN0aW9uKSB7XG4gIGlmIChhY3Rpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ0B0eXBlJzogYWN0aW9uLmFjdGlvblR5cGUsXG4gICAgICBuYW1lOiBhY3Rpb24uYWN0aW9uTmFtZSxcbiAgICAgIHRhcmdldDogYWN0aW9uLnRhcmdldFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gc2V0R2VvQ2lyY2xlKGdlb0NpcmNsZSkge1xuICBpZiAoZ2VvQ2lyY2xlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdAdHlwZSc6ICdHZW9DaXJjbGUnLFxuICAgICAgZ2VvTWlkcG9pbnQ6IHtcbiAgICAgICAgJ0B0eXBlJzogJ0dlb0Nvb3JkaW5hdGVzJyxcbiAgICAgICAgbGF0aXR1ZGU6IGdlb0NpcmNsZS5nZW9NaWRwb2ludC5sYXRpdHVkZSxcbiAgICAgICAgbG9uZ2l0dWRlOiBnZW9DaXJjbGUuZ2VvTWlkcG9pbnQubG9uZ2l0dWRlXG4gICAgICB9LFxuICAgICAgZ2VvUmFkaXVzOiBnZW9DaXJjbGUuZ2VvUmFkaXVzXG4gICAgfTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBzZXRPZmZlcihvZmZlcikge1xuICBmdW5jdGlvbiBzZXRQcmljZVNwZWNpZmljYXRpb24ocHJpY2VTcGVjaWZpY2F0aW9uKSB7XG4gICAgaWYgKHByaWNlU3BlY2lmaWNhdGlvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ0B0eXBlJzogcHJpY2VTcGVjaWZpY2F0aW9uLnR5cGUsXG4gICAgICAgIHByaWNlQ3VycmVuY3k6IHByaWNlU3BlY2lmaWNhdGlvbi5wcmljZUN1cnJlbmN5LFxuICAgICAgICBwcmljZTogcHJpY2VTcGVjaWZpY2F0aW9uLnByaWNlXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGZ1bmN0aW9uIHNldEl0ZW1PZmZlcmVkKGl0ZW1PZmZlcmVkKSB7XG4gICAgaWYgKGl0ZW1PZmZlcmVkKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGl0ZW1PZmZlcmVkLCB7XG4gICAgICAgICdAdHlwZSc6ICdTZXJ2aWNlJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgaWYgKG9mZmVyKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBvZmZlciwge1xuICAgICAgJ0B0eXBlJzogJ09mZmVyJyxcbiAgICAgIHByaWNlU3BlY2lmaWNhdGlvbjogc2V0UHJpY2VTcGVjaWZpY2F0aW9uKG9mZmVyLnByaWNlU3BlY2lmaWNhdGlvbiksXG4gICAgICBpdGVtT2ZmZXJlZDogc2V0SXRlbU9mZmVyZWQob2ZmZXIuaXRlbU9mZmVyZWQpXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gc2V0T3BlbmluZ0hvdXJzKG9wZW5pbmdIb3Vycykge1xuICBpZiAob3BlbmluZ0hvdXJzKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBvcGVuaW5nSG91cnMsIHtcbiAgICAgICdAdHlwZSc6ICdPcGVuaW5nSG91cnNTcGVjaWZpY2F0aW9uJ1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbnZhciBfZXhjbHVkZWQkcyA9IFtcInR5cGVcIiwgXCJrZXlPdmVycmlkZVwiLCBcImFkZHJlc3NcIiwgXCJnZW9cIiwgXCJyYXRpbmdcIiwgXCJyZXZpZXdcIiwgXCJhY3Rpb25cIiwgXCJhcmVhU2VydmVkXCIsIFwibWFrZXNPZmZlclwiLCBcIm9wZW5pbmdIb3Vyc1wiLCBcImltYWdlc1wiXTtcbmZ1bmN0aW9uIExvY2FsQnVzaW5lc3NKc29uTGQoX3JlZikge1xuICB2YXIgX3JlZiR0eXBlID0gX3JlZi50eXBlLFxuICAgIHR5cGUgPSBfcmVmJHR5cGUgPT09IHZvaWQgMCA/ICdMb2NhbEJ1c2luZXNzJyA6IF9yZWYkdHlwZSxcbiAgICBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgYWRkcmVzcyA9IF9yZWYuYWRkcmVzcyxcbiAgICBnZW8gPSBfcmVmLmdlbyxcbiAgICByYXRpbmcgPSBfcmVmLnJhdGluZyxcbiAgICByZXZpZXcgPSBfcmVmLnJldmlldyxcbiAgICBhY3Rpb24gPSBfcmVmLmFjdGlvbixcbiAgICBhcmVhU2VydmVkID0gX3JlZi5hcmVhU2VydmVkLFxuICAgIG1ha2VzT2ZmZXIgPSBfcmVmLm1ha2VzT2ZmZXIsXG4gICAgb3BlbmluZ0hvdXJzID0gX3JlZi5vcGVuaW5nSG91cnMsXG4gICAgaW1hZ2VzID0gX3JlZi5pbWFnZXMsXG4gICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCRzKTtcbiAgdmFyIGRhdGEgPSBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIGltYWdlOiBpbWFnZXMsXG4gICAgYWRkcmVzczogc2V0QWRkcmVzcyhhZGRyZXNzKSxcbiAgICBnZW86IHNldEdlbyhnZW8pLFxuICAgIGFnZ3JlZ2F0ZVJhdGluZzogc2V0QWdncmVnYXRlUmF0aW5nKHJhdGluZyksXG4gICAgcmV2aWV3OiBzZXRSZXZpZXdzKHJldmlldyksXG4gICAgcG90ZW50aWFsQWN0aW9uOiBzZXRBY3Rpb24oYWN0aW9uKSxcbiAgICBhcmVhU2VydmVkOiBhcmVhU2VydmVkICYmIGFyZWFTZXJ2ZWQubWFwKHNldEdlb0NpcmNsZSksXG4gICAgbWFrZXNPZmZlcjogbWFrZXNPZmZlciA9PSBudWxsID8gdm9pZCAwIDogbWFrZXNPZmZlci5tYXAoc2V0T2ZmZXIpLFxuICAgIG9wZW5pbmdIb3Vyc1NwZWNpZmljYXRpb246IEFycmF5LmlzQXJyYXkob3BlbmluZ0hvdXJzKSA/IG9wZW5pbmdIb3Vycy5tYXAoc2V0T3BlbmluZ0hvdXJzKSA6IHNldE9wZW5pbmdIb3VycyhvcGVuaW5nSG91cnMpXG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSnNvbkxkLCBfZXh0ZW5kcyh7XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXlPdmVycmlkZToga2V5T3ZlcnJpZGVcbiAgfSwgZGF0YSwge1xuICAgIHNjcmlwdEtleTogXCJMb2NhbEJ1c2luZXNzXCJcbiAgfSkpO1xufVxuXG52YXIgX2V4Y2x1ZGVkJHIgPSBbXCJ0eXBlXCIsIFwia2V5T3ZlcnJpZGVcIiwgXCJtYWluRW50aXR5XCJdLFxuICBfZXhjbHVkZWQyID0gW1widXB2b3RlQ291bnRcIl07XG5mdW5jdGlvbiBRQVBhZ2VKc29uTGQoX3JlZikge1xuICB2YXIgX21haW5FbnRpdHkkYXV0aG9yLCBfbWFpbkVudGl0eSRhY2NlcHRlZEEsIF9tYWluRW50aXR5JGFjY2VwdGVkQTI7XG4gIHZhciBfcmVmJHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgdHlwZSA9IF9yZWYkdHlwZSA9PT0gdm9pZCAwID8gJ1FBUGFnZScgOiBfcmVmJHR5cGUsXG4gICAga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgIG1haW5FbnRpdHkgPSBfcmVmLm1haW5FbnRpdHksXG4gICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCRyKTtcbiAgdmFyIGRhdGEgPSBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIG1haW5FbnRpdHk6IF9leHRlbmRzKHt9LCBtYWluRW50aXR5LCB7XG4gICAgICAnQHR5cGUnOiAnUXVlc3Rpb24nLFxuICAgICAgYXV0aG9yOiBzZXRBdXRob3IoKF9tYWluRW50aXR5JGF1dGhvciA9IG1haW5FbnRpdHkuYXV0aG9yKSA9PSBudWxsID8gdm9pZCAwIDogX21haW5FbnRpdHkkYXV0aG9yLm5hbWUpXG4gICAgfSwgbWFpbkVudGl0eS5hY2NlcHRlZEFuc3dlciAmJiB7XG4gICAgICBhY2NlcHRlZEFuc3dlcjogX2V4dGVuZHMoe30sIG1haW5FbnRpdHkuYWNjZXB0ZWRBbnN3ZXIsIHtcbiAgICAgICAgJ0B0eXBlJzogJ0Fuc3dlcicsXG4gICAgICAgIGF1dGhvcjogc2V0QXV0aG9yKChfbWFpbkVudGl0eSRhY2NlcHRlZEEgPSBtYWluRW50aXR5LmFjY2VwdGVkQW5zd2VyKSA9PSBudWxsID8gdm9pZCAwIDogKF9tYWluRW50aXR5JGFjY2VwdGVkQTIgPSBfbWFpbkVudGl0eSRhY2NlcHRlZEEuYXV0aG9yKSA9PSBudWxsID8gdm9pZCAwIDogX21haW5FbnRpdHkkYWNjZXB0ZWRBMi5uYW1lKVxuICAgICAgfSlcbiAgICB9LCBtYWluRW50aXR5LnN1Z2dlc3RlZEFuc3dlciAmJiB7XG4gICAgICBzdWdnZXN0ZWRBbnN3ZXI6IG1haW5FbnRpdHkuc3VnZ2VzdGVkQW5zd2VyLm1hcChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgdmFyIF9yZXN0JGF1dGhvcjtcbiAgICAgICAgdmFyIHVwdm90ZUNvdW50ID0gX3JlZjIudXB2b3RlQ291bnQsXG4gICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYyLCBfZXhjbHVkZWQyKTtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgICAgICAgJ0B0eXBlJzogJ0Fuc3dlcicsXG4gICAgICAgICAgdXB2b3RlQ291bnQ6IHVwdm90ZUNvdW50IHx8IDAsXG4gICAgICAgICAgYXV0aG9yOiBzZXRBdXRob3IoKF9yZXN0JGF1dGhvciA9IHJlc3QuYXV0aG9yKSA9PSBudWxsID8gdm9pZCAwIDogX3Jlc3QkYXV0aG9yLm5hbWUpXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICB9KVxuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEpzb25MZCwgX2V4dGVuZHMoe1xuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5T3ZlcnJpZGU6IGtleU92ZXJyaWRlXG4gIH0sIGRhdGEsIHtcbiAgICBzY3JpcHRLZXk6IFwiUUFQYWdlXCJcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBzZXRJdGVtTGlzdEVsZW1lbnRzKGl0ZW1zKSB7XG4gIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gaXRlbXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnQHR5cGUnOiAnTGlzdEl0ZW0nLFxuICAgICAgICBwb3NpdGlvbjogaXRlbS5wb3NpdGlvbixcbiAgICAgICAgaXRlbToge1xuICAgICAgICAgICdAaWQnOiBpdGVtLml0ZW0sXG4gICAgICAgICAgbmFtZTogaXRlbS5uYW1lXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxudmFyIF9leGNsdWRlZCRxID0gW1widHlwZVwiLCBcImtleU92ZXJyaWRlXCIsIFwiYnJlYWRjcnVtYlwiXTtcbmZ1bmN0aW9uIFByb2ZpbGVQYWdlSnNvbkxkKF9yZWYpIHtcbiAgdmFyIF9yZWYkdHlwZSA9IF9yZWYudHlwZSxcbiAgICB0eXBlID0gX3JlZiR0eXBlID09PSB2b2lkIDAgPyAnUHJvZmlsZVBhZ2UnIDogX3JlZiR0eXBlLFxuICAgIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICBicmVhZGNydW1iID0gX3JlZi5icmVhZGNydW1iLFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQkcSk7XG4gIHZhciBkYXRhID0gX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICBicmVhZGNydW1iOiBBcnJheS5pc0FycmF5KGJyZWFkY3J1bWIpID8ge1xuICAgICAgJ0B0eXBlJzogJ0JyZWFkY3J1bWJMaXN0JyxcbiAgICAgIGl0ZW1MaXN0RWxlbWVudDogc2V0SXRlbUxpc3RFbGVtZW50cyhicmVhZGNydW1iKVxuICAgIH0gOiBicmVhZGNydW1iXG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSnNvbkxkLCBfZXh0ZW5kcyh7XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXlPdmVycmlkZToga2V5T3ZlcnJpZGVcbiAgfSwgZGF0YSwge1xuICAgIHNjcmlwdEtleTogXCJQcm9maWxlUGFnZVwiXG4gIH0pKTtcbn1cblxudmFyIF9leGNsdWRlZCRwID0gW1widHlwZVwiLCBcImtleU92ZXJyaWRlXCIsIFwicG90ZW50aWFsQWN0aW9uc1wiXTtcbmZ1bmN0aW9uIFNpdGVMaW5rc1NlYXJjaEJveEpzb25MZChfcmVmKSB7XG4gIHZhciBfcmVmJHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgdHlwZSA9IF9yZWYkdHlwZSA9PT0gdm9pZCAwID8gJ1dlYlNpdGUnIDogX3JlZiR0eXBlLFxuICAgIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICBwb3RlbnRpYWxBY3Rpb25zID0gX3JlZi5wb3RlbnRpYWxBY3Rpb25zLFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQkcCk7XG4gIGZ1bmN0aW9uIHNldFBvdGVudGlhbEFjdGlvbihhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gYWN0aW9uLnRhcmdldCxcbiAgICAgICAgcXVlcnlJbnB1dCA9IGFjdGlvbi5xdWVyeUlucHV0O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ0B0eXBlJzogJ1NlYXJjaEFjdGlvbicsXG4gICAgICAgIHRhcmdldDogdGFyZ2V0ICsgXCI9e1wiICsgcXVlcnlJbnB1dCArIFwifVwiLFxuICAgICAgICAncXVlcnktaW5wdXQnOiBcInJlcXVpcmVkIG5hbWU9XCIgKyBxdWVyeUlucHV0XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHZhciBkYXRhID0gX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICBwb3RlbnRpYWxBY3Rpb246IHBvdGVudGlhbEFjdGlvbnMubWFwKHNldFBvdGVudGlhbEFjdGlvbilcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChKc29uTGQsIF9leHRlbmRzKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleU92ZXJyaWRlOiBrZXlPdmVycmlkZVxuICB9LCBkYXRhLCB7XG4gICAgc2NyaXB0S2V5OiBcImpzb25sZC1zaXRlTGlua3NTZWFyY2hCb3hcIlxuICB9KSk7XG59XG5cbnZhciBfZXhjbHVkZWQkbyA9IFtcInR5cGVcIiwgXCJrZXlPdmVycmlkZVwiLCBcImF1dGhvck5hbWVcIiwgXCJpbWFnZXNcIiwgXCJ5aWVsZHNcIiwgXCJjYXRlZ29yeVwiLCBcImN1aXNpbmVcIiwgXCJjYWxvcmllc1wiLCBcImFnZ3JlZ2F0ZVJhdGluZ1wiLCBcInZpZGVvXCIsIFwiaW5ncmVkaWVudHNcIiwgXCJpbnN0cnVjdGlvbnNcIl07XG5mdW5jdGlvbiBSZWNpcGVKc29uTGQoX3JlZikge1xuICB2YXIgX3JlZiR0eXBlID0gX3JlZi50eXBlLFxuICAgIHR5cGUgPSBfcmVmJHR5cGUgPT09IHZvaWQgMCA/ICdSZWNpcGUnIDogX3JlZiR0eXBlLFxuICAgIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICBhdXRob3JOYW1lID0gX3JlZi5hdXRob3JOYW1lLFxuICAgIGltYWdlcyA9IF9yZWYuaW1hZ2VzLFxuICAgIHlpZWxkcyA9IF9yZWYueWllbGRzLFxuICAgIGNhdGVnb3J5ID0gX3JlZi5jYXRlZ29yeSxcbiAgICBjdWlzaW5lID0gX3JlZi5jdWlzaW5lLFxuICAgIGNhbG9yaWVzID0gX3JlZi5jYWxvcmllcyxcbiAgICBhZ2dyZWdhdGVSYXRpbmcgPSBfcmVmLmFnZ3JlZ2F0ZVJhdGluZyxcbiAgICB2aWRlbyA9IF9yZWYudmlkZW8sXG4gICAgaW5ncmVkaWVudHMgPSBfcmVmLmluZ3JlZGllbnRzLFxuICAgIGluc3RydWN0aW9ucyA9IF9yZWYuaW5zdHJ1Y3Rpb25zLFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQkbyk7XG4gIHZhciBkYXRhID0gX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICBhdXRob3I6IHNldEF1dGhvcihhdXRob3JOYW1lKSxcbiAgICBpbWFnZTogaW1hZ2VzLFxuICAgIHJlY2lwZVlpZWxkOiB5aWVsZHMsXG4gICAgcmVjaXBlQ2F0ZWdvcnk6IGNhdGVnb3J5LFxuICAgIHJlY2lwZUN1aXNpbmU6IGN1aXNpbmUsXG4gICAgbnV0cml0aW9uOiBzZXROdXRyaXRpb24oY2Fsb3JpZXMpLFxuICAgIGFnZ3JlZ2F0ZVJhdGluZzogc2V0QWdncmVnYXRlUmF0aW5nKGFnZ3JlZ2F0ZVJhdGluZyksXG4gICAgdmlkZW86IHNldFZpZGVvKHZpZGVvKSxcbiAgICByZWNpcGVJbmdyZWRpZW50OiBpbmdyZWRpZW50cyxcbiAgICByZWNpcGVJbnN0cnVjdGlvbnM6IGluc3RydWN0aW9ucyA/IGluc3RydWN0aW9ucy5tYXAoc2V0SW5zdHJ1Y3Rpb24pIDogdW5kZWZpbmVkXG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSnNvbkxkLCBfZXh0ZW5kcyh7XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXlPdmVycmlkZToga2V5T3ZlcnJpZGVcbiAgfSwgZGF0YSwge1xuICAgIHNjcmlwdEtleTogXCJyZWNpcGVcIlxuICB9KSk7XG59XG5cbmZ1bmN0aW9uIHNldExvY2F0aW9uKGxvY2F0aW9uKSB7XG4gIGlmICghbG9jYXRpb24pIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGlmICh0eXBlb2YgbG9jYXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGxvY2F0aW9uO1xuICB9XG4gIGlmICgndXJsJyBpbiBsb2NhdGlvbikge1xuICAgIHJldHVybiBzZXRWaXJ0dWFsTG9jYXRpb24obG9jYXRpb24pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzZXRQbGFjZShsb2NhdGlvbik7XG4gIH1cbn1cbmZ1bmN0aW9uIHNldFZpcnR1YWxMb2NhdGlvbihsb2NhdGlvbikge1xuICByZXR1cm4gX2V4dGVuZHMoe30sIGxvY2F0aW9uLCB7XG4gICAgJ0B0eXBlJzogJ1ZpcnR1YWxMb2NhdGlvbidcbiAgfSk7XG59XG5mdW5jdGlvbiBzZXRQbGFjZShsb2NhdGlvbikge1xuICByZXR1cm4gX2V4dGVuZHMoe30sIGxvY2F0aW9uLCB7XG4gICAgYWRkcmVzczogc2V0QWRkcmVzcyhsb2NhdGlvbi5hZGRyZXNzKSxcbiAgICAnQHR5cGUnOiAnUGxhY2UnXG4gIH0pO1xufVxuXG52YXIgX2V4Y2x1ZGVkJG4gPSBbXCJ0eXBlXCJdO1xuZnVuY3Rpb24gc2V0UGVyZm9ybWVyKHBlcmZvcm1lcikge1xuICBpZiAocGVyZm9ybWVyKSB7XG4gICAgdmFyIHR5cGUgPSBwZXJmb3JtZXIudHlwZSxcbiAgICAgIHJlc3RQZXJmb3JtZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwZXJmb3JtZXIsIF9leGNsdWRlZCRuKTtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHJlc3RQZXJmb3JtZXIsIHtcbiAgICAgICdAdHlwZSc6IHR5cGUgfHwgJ1BlcmZvcm1pbmdHcm91cCdcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG52YXIgX2V4Y2x1ZGVkJG0gPSBbXCJzZWxsZXJcIl07XG5mdW5jdGlvbiBzZXRPZmZlcnMob2ZmZXJzKSB7XG4gIGZ1bmN0aW9uIG1hcE9mZmVyKF9yZWYpIHtcbiAgICB2YXIgc2VsbGVyID0gX3JlZi5zZWxsZXIsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgX2V4Y2x1ZGVkJG0pO1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgICAgJ0B0eXBlJzogJ09mZmVyJ1xuICAgIH0sIHNlbGxlciAmJiB7XG4gICAgICBzZWxsZXI6IHtcbiAgICAgICAgJ0B0eXBlJzogJ09yZ2FuaXphdGlvbicsXG4gICAgICAgIG5hbWU6IHNlbGxlci5uYW1lXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkob2ZmZXJzKSkge1xuICAgIHJldHVybiBvZmZlcnMubWFwKG1hcE9mZmVyKTtcbiAgfSBlbHNlIGlmIChvZmZlcnMpIHtcbiAgICByZXR1cm4gbWFwT2ZmZXIob2ZmZXJzKTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBzZXRBZ2dyZWdhdGVPZmZlcihhZ2dyZWdhdGVPZmZlcikge1xuICBpZiAoYWdncmVnYXRlT2ZmZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ0B0eXBlJzogJ0FnZ3JlZ2F0ZU9mZmVyJyxcbiAgICAgIHByaWNlQ3VycmVuY3k6IGFnZ3JlZ2F0ZU9mZmVyLnByaWNlQ3VycmVuY3ksXG4gICAgICBoaWdoUHJpY2U6IGFnZ3JlZ2F0ZU9mZmVyLmhpZ2hQcmljZSxcbiAgICAgIGxvd1ByaWNlOiBhZ2dyZWdhdGVPZmZlci5sb3dQcmljZSxcbiAgICAgIG9mZmVyQ291bnQ6IGFnZ3JlZ2F0ZU9mZmVyLm9mZmVyQ291bnQsXG4gICAgICBvZmZlcnM6IHNldE9mZmVycyhhZ2dyZWdhdGVPZmZlci5vZmZlcnMpXG4gICAgfTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG52YXIgX2V4Y2x1ZGVkJGwgPSBbXCJ0eXBlXCJdO1xuZnVuY3Rpb24gc2V0T3JnYW5pemVyKG9yZ2FuaXplcikge1xuICBpZiAob3JnYW5pemVyKSB7XG4gICAgdmFyIHR5cGUgPSBvcmdhbml6ZXIudHlwZSxcbiAgICAgIHJlc3RPcmdhbml6ZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShvcmdhbml6ZXIsIF9leGNsdWRlZCRsKTtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHJlc3RPcmdhbml6ZXIsIHtcbiAgICAgICdAdHlwZSc6IHR5cGUgfHwgJ1BlcnNvbidcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG52YXIgX2V4Y2x1ZGVkJGsgPSBbXCJ0eXBlXCIsIFwia2V5T3ZlcnJpZGVcIiwgXCJsb2NhdGlvblwiLCBcImltYWdlc1wiLCBcIm9mZmVyc1wiLCBcImFnZ3JlZ2F0ZU9mZmVyXCIsIFwicGVyZm9ybWVyc1wiLCBcIm9yZ2FuaXplclwiLCBcImV2ZW50U3RhdHVzXCIsIFwiZXZlbnRBdHRlbmRhbmNlTW9kZVwiXTtcbmZ1bmN0aW9uIEV2ZW50SnNvbkxkKF9yZWYpIHtcbiAgdmFyIF9yZWYkdHlwZSA9IF9yZWYudHlwZSxcbiAgICB0eXBlID0gX3JlZiR0eXBlID09PSB2b2lkIDAgPyAnRXZlbnQnIDogX3JlZiR0eXBlLFxuICAgIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICBsb2NhdGlvbiA9IF9yZWYubG9jYXRpb24sXG4gICAgaW1hZ2VzID0gX3JlZi5pbWFnZXMsXG4gICAgb2ZmZXJzID0gX3JlZi5vZmZlcnMsXG4gICAgYWdncmVnYXRlT2ZmZXIgPSBfcmVmLmFnZ3JlZ2F0ZU9mZmVyLFxuICAgIHBlcmZvcm1lcnMgPSBfcmVmLnBlcmZvcm1lcnMsXG4gICAgb3JnYW5pemVyID0gX3JlZi5vcmdhbml6ZXIsXG4gICAgZXZlbnRTdGF0dXMgPSBfcmVmLmV2ZW50U3RhdHVzLFxuICAgIGV2ZW50QXR0ZW5kYW5jZU1vZGUgPSBfcmVmLmV2ZW50QXR0ZW5kYW5jZU1vZGUsXG4gICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCRrKTtcbiAgdmFyIGRhdGEgPSBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIGxvY2F0aW9uOiBzZXRMb2NhdGlvbihsb2NhdGlvbiksXG4gICAgaW1hZ2U6IGltYWdlcyxcbiAgICBvZmZlcnM6IG9mZmVycyA/IHNldE9mZmVycyhvZmZlcnMpIDogc2V0QWdncmVnYXRlT2ZmZXIoYWdncmVnYXRlT2ZmZXIpLFxuICAgIHBlcmZvcm1lcjogQXJyYXkuaXNBcnJheShwZXJmb3JtZXJzKSA/IHBlcmZvcm1lcnMubWFwKHNldFBlcmZvcm1lcikgOiBzZXRQZXJmb3JtZXIocGVyZm9ybWVycyksXG4gICAgb3JnYW5pemVyOiBBcnJheS5pc0FycmF5KG9yZ2FuaXplcikgPyBvcmdhbml6ZXIubWFwKHNldE9yZ2FuaXplcikgOiBzZXRPcmdhbml6ZXIob3JnYW5pemVyKSxcbiAgICBldmVudFN0YXR1czogZXZlbnRTdGF0dXMgPyBcImh0dHBzOi8vc2NoZW1hLm9yZy9cIiArIGV2ZW50U3RhdHVzIDogdW5kZWZpbmVkLFxuICAgIGV2ZW50QXR0ZW5kYW5jZU1vZGU6IGV2ZW50QXR0ZW5kYW5jZU1vZGUgPyBcImh0dHBzOi8vc2NoZW1hLm9yZy9cIiArIGV2ZW50QXR0ZW5kYW5jZU1vZGUgOiB1bmRlZmluZWRcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChKc29uTGQsIF9leHRlbmRzKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleU92ZXJyaWRlOiBrZXlPdmVycmlkZVxuICB9LCBkYXRhLCB7XG4gICAgc2NyaXB0S2V5OiBcIkV2ZW50XCJcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBzZXRDb250YWN0UG9pbnQoY29udGFjdFBvaW50KSB7XG4gIGlmIChjb250YWN0UG9pbnQpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGNvbnRhY3RQb2ludCwge1xuICAgICAgJ0B0eXBlJzogJ0NvbnRhY3RQb2ludCdcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG52YXIgX2V4Y2x1ZGVkJGogPSBbXCJ0eXBlXCIsIFwia2V5T3ZlcnJpZGVcIiwgXCJjb250YWN0UG9pbnRcIl07XG5mdW5jdGlvbiBDb3Jwb3JhdGVDb250YWN0SnNvbkxkKF9yZWYpIHtcbiAgdmFyIF9yZWYkdHlwZSA9IF9yZWYudHlwZSxcbiAgICB0eXBlID0gX3JlZiR0eXBlID09PSB2b2lkIDAgPyAnT3JnYW5pemF0aW9uJyA6IF9yZWYkdHlwZSxcbiAgICBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgY29udGFjdFBvaW50ID0gX3JlZi5jb250YWN0UG9pbnQsXG4gICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCRqKTtcbiAgdmFyIGRhdGEgPSBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIGNvbnRhY3RQb2ludDogY29udGFjdFBvaW50Lm1hcChzZXRDb250YWN0UG9pbnQpXG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSnNvbkxkLCBfZXh0ZW5kcyh7XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXlPdmVycmlkZToga2V5T3ZlcnJpZGVcbiAgfSwgZGF0YSwge1xuICAgIHNjcmlwdEtleTogXCJDb3Jwb3JhdGVDb250YWN0XCJcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBzZXRDcmVhdGl2ZVdvcmsoY3JlYXRpdmVXb3JrKSB7XG4gIGlmIChjcmVhdGl2ZVdvcmspIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGNyZWF0aXZlV29yaywge1xuICAgICAgJ0B0eXBlJzogJ0NyZWF0aXZlV29yaydcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG52YXIgX2V4Y2x1ZGVkJGkgPSBbXCJ0eXBlXCIsIFwia2V5T3ZlcnJpZGVcIiwgXCJoYXNQYXJ0XCJdO1xuZnVuY3Rpb24gQ29sbGVjdGlvblBhZ2VKc29uTGQoX3JlZikge1xuICB2YXIgX3JlZiR0eXBlID0gX3JlZi50eXBlLFxuICAgIHR5cGUgPSBfcmVmJHR5cGUgPT09IHZvaWQgMCA/ICdDb2xsZWN0aW9uUGFnZScgOiBfcmVmJHR5cGUsXG4gICAga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgIGhhc1BhcnQgPSBfcmVmLmhhc1BhcnQsXG4gICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCRpKTtcbiAgdmFyIGRhdGEgPSBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIGhhc1BhcnQ6IGhhc1BhcnQubWFwKHNldENyZWF0aXZlV29yaylcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChKc29uTGQsIF9leHRlbmRzKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleU92ZXJyaWRlOiBrZXlPdmVycmlkZVxuICB9LCBkYXRhLCB7XG4gICAgc2NyaXB0S2V5OiBcIkNvbGxlY3Rpb25QYWdlXCJcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBzZXRNYW51ZmFjdHVyZXIobWFudWZhY3R1cmVyKSB7XG4gIGlmIChtYW51ZmFjdHVyZXIgJiYgKG1hbnVmYWN0dXJlci5tYW51ZmFjdHVyZXJOYW1lIHx8IG1hbnVmYWN0dXJlci5tYW51ZmFjdHVyZXJMb2dvKSkge1xuICAgIHJldHVybiB7XG4gICAgICAnQHR5cGUnOiAnT3JnYW5pemF0aW9uJyxcbiAgICAgIG5hbWU6IG1hbnVmYWN0dXJlci5tYW51ZmFjdHVyZXJOYW1lLFxuICAgICAgbG9nbzogc2V0SW1hZ2UobWFudWZhY3R1cmVyLm1hbnVmYWN0dXJlckxvZ28pXG4gICAgfTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBzZXRCcmFuZChicmFuZCkge1xuICBpZiAoYnJhbmQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ0B0eXBlJzogJ0JyYW5kJyxcbiAgICAgIG5hbWU6IGJyYW5kXG4gICAgfTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG52YXIgX2V4Y2x1ZGVkJGggPSBbXCJ0eXBlXCIsIFwia2V5T3ZlcnJpZGVcIiwgXCJpbWFnZXNcIiwgXCJicmFuZFwiLCBcInJldmlld3NcIiwgXCJhZ2dyZWdhdGVSYXRpbmdcIiwgXCJtYW51ZmFjdHVyZXJMb2dvXCIsIFwibWFudWZhY3R1cmVyTmFtZVwiLCBcIm9mZmVyc1wiLCBcImFnZ3JlZ2F0ZU9mZmVyXCIsIFwicHJvZHVjdE5hbWVcIl07XG5mdW5jdGlvbiBQcm9kdWN0SnNvbkxkKF9yZWYpIHtcbiAgdmFyIF9yZWYkdHlwZSA9IF9yZWYudHlwZSxcbiAgICB0eXBlID0gX3JlZiR0eXBlID09PSB2b2lkIDAgPyAnUHJvZHVjdCcgOiBfcmVmJHR5cGUsXG4gICAga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgIGltYWdlcyA9IF9yZWYuaW1hZ2VzLFxuICAgIGJyYW5kID0gX3JlZi5icmFuZCxcbiAgICByZXZpZXdzID0gX3JlZi5yZXZpZXdzLFxuICAgIGFnZ3JlZ2F0ZVJhdGluZyA9IF9yZWYuYWdncmVnYXRlUmF0aW5nLFxuICAgIG1hbnVmYWN0dXJlckxvZ28gPSBfcmVmLm1hbnVmYWN0dXJlckxvZ28sXG4gICAgbWFudWZhY3R1cmVyTmFtZSA9IF9yZWYubWFudWZhY3R1cmVyTmFtZSxcbiAgICBvZmZlcnMgPSBfcmVmLm9mZmVycyxcbiAgICBhZ2dyZWdhdGVPZmZlciA9IF9yZWYuYWdncmVnYXRlT2ZmZXIsXG4gICAgcHJvZHVjdE5hbWUgPSBfcmVmLnByb2R1Y3ROYW1lLFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQkaCk7XG4gIHZhciBkYXRhID0gX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICBpbWFnZTogaW1hZ2VzLFxuICAgIGJyYW5kOiBzZXRCcmFuZChicmFuZCksXG4gICAgcmV2aWV3OiBzZXRSZXZpZXdzKHJldmlld3MpLFxuICAgIGFnZ3JlZ2F0ZVJhdGluZzogc2V0QWdncmVnYXRlUmF0aW5nKGFnZ3JlZ2F0ZVJhdGluZyksXG4gICAgbWFudWZhY3R1cmVyOiBzZXRNYW51ZmFjdHVyZXIoe1xuICAgICAgbWFudWZhY3R1cmVyTG9nbzogbWFudWZhY3R1cmVyTG9nbyxcbiAgICAgIG1hbnVmYWN0dXJlck5hbWU6IG1hbnVmYWN0dXJlck5hbWVcbiAgICB9KSxcbiAgICBvZmZlcnM6IG9mZmVycyA/IHNldE9mZmVycyhvZmZlcnMpIDogc2V0QWdncmVnYXRlT2ZmZXIoYWdncmVnYXRlT2ZmZXIpLFxuICAgIG5hbWU6IHByb2R1Y3ROYW1lXG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSnNvbkxkLCBfZXh0ZW5kcyh7XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXlPdmVycmlkZToga2V5T3ZlcnJpZGVcbiAgfSwgZGF0YSwge1xuICAgIHNjcmlwdEtleTogXCJQcm9kdWN0XCJcbiAgfSkpO1xufVxuXG52YXIgX2V4Y2x1ZGVkJGcgPSBbXCJ0eXBlXCIsIFwia2V5T3ZlcnJpZGVcIiwgXCJwcmljZUN1cnJlbmN5XCIsIFwicHJpY2VcIiwgXCJhZ2dyZWdhdGVSYXRpbmdcIiwgXCJyZXZpZXdcIiwgXCJrZXl3b3Jkc1wiXTtcbmZ1bmN0aW9uIFNvZnR3YXJlQXBwSnNvbkxkKF9yZWYpIHtcbiAgdmFyIF9yZWYkdHlwZSA9IF9yZWYudHlwZSxcbiAgICB0eXBlID0gX3JlZiR0eXBlID09PSB2b2lkIDAgPyAnU29mdHdhcmVBcHBsaWNhdGlvbicgOiBfcmVmJHR5cGUsXG4gICAga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgIHByaWNlQ3VycmVuY3kgPSBfcmVmLnByaWNlQ3VycmVuY3ksXG4gICAgcHJpY2UgPSBfcmVmLnByaWNlLFxuICAgIGFnZ3JlZ2F0ZVJhdGluZyA9IF9yZWYuYWdncmVnYXRlUmF0aW5nLFxuICAgIHJldmlldyA9IF9yZWYucmV2aWV3LFxuICAgIGtleXdvcmRzID0gX3JlZi5rZXl3b3JkcyxcbiAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgX2V4Y2x1ZGVkJGcpO1xuICB2YXIgZGF0YSA9IF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgb2ZmZXJzOiB7XG4gICAgICAnQHR5cGUnOiAnT2ZmZXInLFxuICAgICAgcHJpY2U6IHByaWNlLFxuICAgICAgcHJpY2VDdXJyZW5jeTogcHJpY2VDdXJyZW5jeVxuICAgIH0sXG4gICAgYWdncmVnYXRlUmF0aW5nOiBzZXRBZ2dyZWdhdGVSYXRpbmcoYWdncmVnYXRlUmF0aW5nKSxcbiAgICByZXZpZXc6IHNldFJldmlld3MocmV2aWV3KSxcbiAgICBrZXl3b3Jkczoga2V5d29yZHNcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChKc29uTGQsIF9leHRlbmRzKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleU92ZXJyaWRlOiBrZXlPdmVycmlkZVxuICB9LCBkYXRhLCB7XG4gICAgc2NyaXB0S2V5OiBcIlNvZnR3YXJlQXBwXCJcbiAgfSkpO1xufVxuXG52YXIgX2V4Y2x1ZGVkJGYgPSBbXCJ0eXBlXCIsIFwia2V5T3ZlcnJpZGVcIl07XG5mdW5jdGlvbiBWaWRlb0pzb25MZChfcmVmKSB7XG4gIHZhciBfcmVmJHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgdHlwZSA9IF9yZWYkdHlwZSA9PT0gdm9pZCAwID8gJ1ZpZGVvJyA6IF9yZWYkdHlwZSxcbiAgICBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCRmKTtcbiAgdmFyIGRhdGEgPSBzZXRWaWRlbyhyZXN0LCB0cnVlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEpzb25MZCwgX2V4dGVuZHMoe1xuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5T3ZlcnJpZGU6IGtleU92ZXJyaWRlXG4gIH0sIGRhdGEsIHtcbiAgICBzY3JpcHRLZXk6IFwiVmlkZW9cIlxuICB9KSk7XG59XG5cbmZ1bmN0aW9uIHNldFByb2R1Y2VyKHByb2R1Y2VyKSB7XG4gIGlmIChwcm9kdWNlcikge1xuICAgIHJldHVybiB7XG4gICAgICAnQHR5cGUnOiAnT3JnYW5pemF0aW9uJyxcbiAgICAgIHNhbWVBczogcHJvZHVjZXIudXJsLFxuICAgICAgbmFtZTogcHJvZHVjZXIubmFtZVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gc2V0UHJvdmlkZXIocHJvdmlkZXIpIHtcbiAgaWYgKHByb3ZpZGVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdAdHlwZSc6IHByb3ZpZGVyLnR5cGUgfHwgJ09yZ2FuaXphdGlvbicsXG4gICAgICBuYW1lOiBwcm92aWRlci5uYW1lLFxuICAgICAgc2FtZUFzOiBwcm92aWRlci51cmxcbiAgICB9O1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbnZhciBfZXhjbHVkZWQkZSA9IFtcInR5cGVcIiwgXCJrZXlPdmVycmlkZVwiLCBcImFnZ3JlZ2F0ZVJhdGluZ1wiLCBcInRyYWlsZXJcIiwgXCJyZXZpZXdzXCIsIFwiaW1hZ2VcIiwgXCJhdXRob3JOYW1lXCIsIFwicHJvdmlkZXJcIiwgXCJwcm9kdWNlck5hbWVcIiwgXCJwcm9kdWNlclVybFwiLCBcIm9mZmVyc1wiLCBcIm9wZXJhdGluZ1N5c3RlbU5hbWVcIiwgXCJwbGF0Zm9ybU5hbWVcIiwgXCJ0cmFuc2xhdG9yTmFtZVwiLCBcImxhbmd1YWdlTmFtZVwiLCBcImdlbnJlTmFtZVwiLCBcInB1Ymxpc2hlck5hbWVcIl07XG5mdW5jdGlvbiBWaWRlb0dhbWVKc29uTGQoX3JlZikge1xuICB2YXIgX3JlZiR0eXBlID0gX3JlZi50eXBlLFxuICAgIHR5cGUgPSBfcmVmJHR5cGUgPT09IHZvaWQgMCA/ICdWaWRlb0dhbWUnIDogX3JlZiR0eXBlLFxuICAgIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICBhZ2dyZWdhdGVSYXRpbmcgPSBfcmVmLmFnZ3JlZ2F0ZVJhdGluZyxcbiAgICB0cmFpbGVyID0gX3JlZi50cmFpbGVyLFxuICAgIHJldmlld3MgPSBfcmVmLnJldmlld3MsXG4gICAgaW1hZ2UgPSBfcmVmLmltYWdlLFxuICAgIGF1dGhvck5hbWUgPSBfcmVmLmF1dGhvck5hbWUsXG4gICAgcHJvdmlkZXIgPSBfcmVmLnByb3ZpZGVyLFxuICAgIHByb2R1Y2VyTmFtZSA9IF9yZWYucHJvZHVjZXJOYW1lLFxuICAgIHByb2R1Y2VyVXJsID0gX3JlZi5wcm9kdWNlclVybCxcbiAgICBvZmZlcnMgPSBfcmVmLm9mZmVycyxcbiAgICBvcGVyYXRpbmdTeXN0ZW1OYW1lID0gX3JlZi5vcGVyYXRpbmdTeXN0ZW1OYW1lLFxuICAgIHBsYXRmb3JtTmFtZSA9IF9yZWYucGxhdGZvcm1OYW1lLFxuICAgIHRyYW5zbGF0b3JOYW1lID0gX3JlZi50cmFuc2xhdG9yTmFtZSxcbiAgICBsYW5ndWFnZU5hbWUgPSBfcmVmLmxhbmd1YWdlTmFtZSxcbiAgICBnZW5yZU5hbWUgPSBfcmVmLmdlbnJlTmFtZSxcbiAgICBwdWJsaXNoZXJOYW1lID0gX3JlZi5wdWJsaXNoZXJOYW1lLFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQkZSk7XG4gIHZhciBkYXRhID0gX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICBhZ2dyZWdhdGVSYXRpbmc6IHNldEFnZ3JlZ2F0ZVJhdGluZyhhZ2dyZWdhdGVSYXRpbmcpLFxuICAgIHRyYWlsZXI6IHNldFZpZGVvKHRyYWlsZXIpLFxuICAgIHJldmlldzogc2V0UmV2aWV3cyhyZXZpZXdzKSxcbiAgICBpbWFnZTogc2V0SW1hZ2UoaW1hZ2UpLFxuICAgIGF1dGhvcjogc2V0QXV0aG9yKGF1dGhvck5hbWUpLFxuICAgIHByb3ZpZGVyOiBzZXRQcm92aWRlcihwcm92aWRlciksXG4gICAgcHJvZHVjZXI6IHNldFByb2R1Y2VyKHtcbiAgICAgIG5hbWU6IHByb2R1Y2VyTmFtZSxcbiAgICAgIHVybDogcHJvZHVjZXJVcmxcbiAgICB9KSxcbiAgICBvZmZlcnM6IHNldE9mZmVycyhvZmZlcnMpLFxuICAgIG9wZXJhdGluZ1N5c3RlbTogb3BlcmF0aW5nU3lzdGVtTmFtZSxcbiAgICBnYW1lUGxhdGZvcm06IHBsYXRmb3JtTmFtZSxcbiAgICB0cmFuc2xhdG9yOiB0cmFuc2xhdG9yTmFtZSxcbiAgICBpbkxhbmd1YWdlOiBsYW5ndWFnZU5hbWUsXG4gICAgZ2VucmU6IGdlbnJlTmFtZSxcbiAgICBwdWJsaXNoZXI6IHB1Ymxpc2hlck5hbWVcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChKc29uTGQsIF9leHRlbmRzKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleU92ZXJyaWRlOiBrZXlPdmVycmlkZVxuICB9LCBkYXRhLCB7XG4gICAgc2NyaXB0S2V5OiBcIlZpZGVvR2FtZVwiXG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gc2V0Q29udGFjdFBvaW50cyhjb250YWN0UG9pbnQpIHtcbiAgaWYgKGNvbnRhY3RQb2ludCAmJiBjb250YWN0UG9pbnQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGNvbnRhY3RQb2ludC5tYXAoZnVuY3Rpb24gKGNvbnRhY3RQb2ludCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgJ0B0eXBlJzogJ0NvbnRhY3RQb2ludCdcbiAgICAgIH0sIGNvbnRhY3RQb2ludCk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxudmFyIF9leGNsdWRlZCRkID0gW1widHlwZVwiLCBcImtleU92ZXJyaWRlXCIsIFwiYWRkcmVzc1wiLCBcImNvbnRhY3RQb2ludHNcIiwgXCJjb250YWN0UG9pbnRcIl07XG5mdW5jdGlvbiBPcmdhbml6YXRpb25Kc29uTGQoX3JlZikge1xuICB2YXIgX3JlZiR0eXBlID0gX3JlZi50eXBlLFxuICAgIHR5cGUgPSBfcmVmJHR5cGUgPT09IHZvaWQgMCA/ICdPcmdhbml6YXRpb24nIDogX3JlZiR0eXBlLFxuICAgIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICBhZGRyZXNzID0gX3JlZi5hZGRyZXNzLFxuICAgIGNvbnRhY3RQb2ludHMgPSBfcmVmLmNvbnRhY3RQb2ludHMsXG4gICAgY29udGFjdFBvaW50ID0gX3JlZi5jb250YWN0UG9pbnQsXG4gICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCRkKTtcbiAgdmFyIGRhdGEgPSBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIGFkZHJlc3M6IHNldEFkZHJlc3MoYWRkcmVzcyksXG4gICAgY29udGFjdFBvaW50OiBzZXRDb250YWN0UG9pbnRzKGNvbnRhY3RQb2ludCB8fCBjb250YWN0UG9pbnRzKVxuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEpzb25MZCwgX2V4dGVuZHMoe1xuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5T3ZlcnJpZGU6IGtleU92ZXJyaWRlXG4gIH0sIGRhdGEsIHtcbiAgICBzY3JpcHRLZXk6IFwib3JnYW5pemF0aW9uXCJcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBzZXRRdWVzdGlvbnMocXVlc3Rpb25zKSB7XG4gIGlmIChxdWVzdGlvbnMgJiYgcXVlc3Rpb25zLmxlbmd0aCkge1xuICAgIHJldHVybiBxdWVzdGlvbnMubWFwKGZ1bmN0aW9uIChxdWVzdGlvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ0B0eXBlJzogJ1F1ZXN0aW9uJyxcbiAgICAgICAgbmFtZTogcXVlc3Rpb24ucXVlc3Rpb25OYW1lLFxuICAgICAgICBhY2NlcHRlZEFuc3dlcjoge1xuICAgICAgICAgICdAdHlwZSc6ICdBbnN3ZXInLFxuICAgICAgICAgIHRleHQ6IHF1ZXN0aW9uLmFjY2VwdGVkQW5zd2VyVGV4dFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbnZhciBfZXhjbHVkZWQkYyA9IFtcInR5cGVcIiwgXCJrZXlPdmVycmlkZVwiLCBcIm1haW5FbnRpdHlcIl07XG5mdW5jdGlvbiBGQVFQYWdlSnNvbkxkKF9yZWYpIHtcbiAgdmFyIF9yZWYkdHlwZSA9IF9yZWYudHlwZSxcbiAgICB0eXBlID0gX3JlZiR0eXBlID09PSB2b2lkIDAgPyAnRkFRUGFnZScgOiBfcmVmJHR5cGUsXG4gICAga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgIG1haW5FbnRpdHkgPSBfcmVmLm1haW5FbnRpdHksXG4gICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCRjKTtcbiAgdmFyIGRhdGEgPSBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIG1haW5FbnRpdHk6IHNldFF1ZXN0aW9ucyhtYWluRW50aXR5KVxuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEpzb25MZCwgX2V4dGVuZHMoe1xuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5T3ZlcnJpZGU6IGtleU92ZXJyaWRlXG4gIH0sIGRhdGEsIHtcbiAgICBzY3JpcHRLZXk6IFwiZmFxLXBhZ2VcIlxuICB9KSk7XG59XG5cbnZhciBfZXhjbHVkZWQkYiA9IFtcInR5cGVcIiwgXCJrZXlPdmVycmlkZVwiXTtcbmZ1bmN0aW9uIExvZ29Kc29uTGQoX3JlZikge1xuICB2YXIgX3JlZiR0eXBlID0gX3JlZi50eXBlLFxuICAgIHR5cGUgPSBfcmVmJHR5cGUgPT09IHZvaWQgMCA/ICdPcmdhbml6YXRpb24nIDogX3JlZiR0eXBlLFxuICAgIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgX2V4Y2x1ZGVkJGIpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSnNvbkxkLCBfZXh0ZW5kcyh7XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXlPdmVycmlkZToga2V5T3ZlcnJpZGVcbiAgfSwgcmVzdCwge1xuICAgIHNjcmlwdEtleTogXCJMb2dvXCJcbiAgfSkpO1xufVxuXG52YXIgX2V4Y2x1ZGVkJGEgPSBbXCJ0eXBlXCIsIFwia2V5T3ZlcnJpZGVcIl07XG5mdW5jdGlvbiBEYXRhc2V0SnNvbkxkKF9yZWYpIHtcbiAgdmFyIF9yZWYkdHlwZSA9IF9yZWYudHlwZSxcbiAgICB0eXBlID0gX3JlZiR0eXBlID09PSB2b2lkIDAgPyAnRGF0YXNldCcgOiBfcmVmJHR5cGUsXG4gICAga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQkYSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChKc29uTGQsIF9leHRlbmRzKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleU92ZXJyaWRlOiBrZXlPdmVycmlkZVxuICB9LCByZXN0LCB7XG4gICAgc2NyaXB0S2V5OiBcImRhdGFzZXRcIlxuICB9KSk7XG59XG5cbnZhciBfZXhjbHVkZWQkOSA9IFtcInR5cGVcIiwgXCJrZXlPdmVycmlkZVwiLCBcImNvdXJzZU5hbWVcIiwgXCJwcm92aWRlclwiXTtcbmZ1bmN0aW9uIENvdXJzZUpzb25MZChfcmVmKSB7XG4gIHZhciBfcmVmJHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgdHlwZSA9IF9yZWYkdHlwZSA9PT0gdm9pZCAwID8gJ0NvdXJzZScgOiBfcmVmJHR5cGUsXG4gICAga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgIGNvdXJzZU5hbWUgPSBfcmVmLmNvdXJzZU5hbWUsXG4gICAgcHJvdmlkZXIgPSBfcmVmLnByb3ZpZGVyLFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQkOSk7XG4gIHZhciBkYXRhID0gX2V4dGVuZHMoe1xuICAgIG5hbWU6IGNvdXJzZU5hbWVcbiAgfSwgcmVzdCwge1xuICAgIHByb3ZpZGVyOiBzZXRQcm92aWRlcihwcm92aWRlcilcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChKc29uTGQsIF9leHRlbmRzKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleU92ZXJyaWRlOiBrZXlPdmVycmlkZVxuICB9LCBkYXRhLCB7XG4gICAgc2NyaXB0S2V5OiBcImNvdXJzZVwiXG4gIH0pKTtcbn1cblxudmFyIF9leGNsdWRlZCQ4ID0gW1widHlwZVwiLCBcImtleU92ZXJyaWRlXCIsIFwiaXRlbUxpc3RFbGVtZW50c1wiXTtcbmZ1bmN0aW9uIEJyZWFkQ3J1bWJKc29uTGQoX3JlZikge1xuICB2YXIgX3JlZiR0eXBlID0gX3JlZi50eXBlLFxuICAgIHR5cGUgPSBfcmVmJHR5cGUgPT09IHZvaWQgMCA/ICdCcmVhZGNydW1iTGlzdCcgOiBfcmVmJHR5cGUsXG4gICAga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgIGl0ZW1MaXN0RWxlbWVudHMgPSBfcmVmLml0ZW1MaXN0RWxlbWVudHMsXG4gICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCQ4KTtcbiAgdmFyIGRhdGEgPSBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIGl0ZW1MaXN0RWxlbWVudDogc2V0SXRlbUxpc3RFbGVtZW50cyhpdGVtTGlzdEVsZW1lbnRzKVxuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEpzb25MZCwgX2V4dGVuZHMoe1xuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5T3ZlcnJpZGU6IGtleU92ZXJyaWRlXG4gIH0sIGRhdGEsIHtcbiAgICBzY3JpcHRLZXk6IFwiYnJlYWRjcnVtYlwiXG4gIH0pKTtcbn1cblxudmFyIF9leGNsdWRlZCQ3ID0gW1widHlwZVwiLCBcImlkXCIsIFwia2V5T3ZlcnJpZGVcIiwgXCJhZ2dyZWdhdGVSYXRpbmdcIl07XG5mdW5jdGlvbiBCcmFuZEpzb25MZChfcmVmKSB7XG4gIHZhciBfcmVmJHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgdHlwZSA9IF9yZWYkdHlwZSA9PT0gdm9pZCAwID8gJ0JyYW5kJyA6IF9yZWYkdHlwZSxcbiAgICBpZCA9IF9yZWYuaWQsXG4gICAga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgIGFnZ3JlZ2F0ZVJhdGluZyA9IF9yZWYuYWdncmVnYXRlUmF0aW5nLFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQkNyk7XG4gIHZhciBkYXRhID0gX2V4dGVuZHMoe1xuICAgIGFnZ3JlZ2F0ZVJhdGluZzogc2V0QWdncmVnYXRlUmF0aW5nKGFnZ3JlZ2F0ZVJhdGluZyksXG4gICAgJ0BpZCc6IGlkXG4gIH0sIHJlc3QpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSnNvbkxkLCBfZXh0ZW5kcyh7XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXlPdmVycmlkZToga2V5T3ZlcnJpZGVcbiAgfSwgZGF0YSwge1xuICAgIHNjcmlwdEtleTogXCJicmFuZFwiXG4gIH0pKTtcbn1cblxudmFyIF9leGNsdWRlZCQ2ID0gW1widHlwZVwiLCBcImtleU92ZXJyaWRlXCIsIFwidXJsXCIsIFwidGl0bGVcIiwgXCJpbWFnZXNcIiwgXCJkYXRlUHVibGlzaGVkXCIsIFwiZGF0ZU1vZGlmaWVkXCIsIFwiYXV0aG9yTmFtZVwiLCBcInB1Ymxpc2hlck5hbWVcIiwgXCJwdWJsaXNoZXJMb2dvXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJpc0FjY2Vzc2libGVGb3JGcmVlXCJdO1xuZnVuY3Rpb24gQXJ0aWNsZUpzb25MZChfcmVmKSB7XG4gIHZhciBfcmVmJHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgdHlwZSA9IF9yZWYkdHlwZSA9PT0gdm9pZCAwID8gJ0FydGljbGUnIDogX3JlZiR0eXBlLFxuICAgIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICB1cmwgPSBfcmVmLnVybCxcbiAgICB0aXRsZSA9IF9yZWYudGl0bGUsXG4gICAgaW1hZ2VzID0gX3JlZi5pbWFnZXMsXG4gICAgZGF0ZVB1Ymxpc2hlZCA9IF9yZWYuZGF0ZVB1Ymxpc2hlZCxcbiAgICBkYXRlTW9kaWZpZWQgPSBfcmVmLmRhdGVNb2RpZmllZCxcbiAgICBhdXRob3JOYW1lID0gX3JlZi5hdXRob3JOYW1lLFxuICAgIF9yZWYkcHVibGlzaGVyTmFtZSA9IF9yZWYucHVibGlzaGVyTmFtZSxcbiAgICBwdWJsaXNoZXJOYW1lID0gX3JlZiRwdWJsaXNoZXJOYW1lID09PSB2b2lkIDAgPyB1bmRlZmluZWQgOiBfcmVmJHB1Ymxpc2hlck5hbWUsXG4gICAgX3JlZiRwdWJsaXNoZXJMb2dvID0gX3JlZi5wdWJsaXNoZXJMb2dvLFxuICAgIHB1Ymxpc2hlckxvZ28gPSBfcmVmJHB1Ymxpc2hlckxvZ28gPT09IHZvaWQgMCA/IHVuZGVmaW5lZCA6IF9yZWYkcHVibGlzaGVyTG9nbyxcbiAgICBkZXNjcmlwdGlvbiA9IF9yZWYuZGVzY3JpcHRpb24sXG4gICAgaXNBY2Nlc3NpYmxlRm9yRnJlZSA9IF9yZWYuaXNBY2Nlc3NpYmxlRm9yRnJlZSxcbiAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgX2V4Y2x1ZGVkJDYpO1xuICB2YXIgZGF0YSA9IF9leHRlbmRzKHtcbiAgICBkYXRlUHVibGlzaGVkOiBkYXRlUHVibGlzaGVkLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICBtYWluRW50aXR5T2ZQYWdlOiB7XG4gICAgICAnQHR5cGUnOiAnV2ViUGFnZScsXG4gICAgICAnQGlkJzogdXJsXG4gICAgfSxcbiAgICBoZWFkbGluZTogdGl0bGUsXG4gICAgaW1hZ2U6IGltYWdlcyxcbiAgICBkYXRlTW9kaWZpZWQ6IGRhdGVNb2RpZmllZCB8fCBkYXRlUHVibGlzaGVkLFxuICAgIGF1dGhvcjogc2V0QXV0aG9yKGF1dGhvck5hbWUpLFxuICAgIHB1Ymxpc2hlcjogc2V0UHVibGlzaGVyKHB1Ymxpc2hlck5hbWUsIHB1Ymxpc2hlckxvZ28pLFxuICAgIGlzQWNjZXNzaWJsZUZvckZyZWU6IGlzQWNjZXNzaWJsZUZvckZyZWVcbiAgfSwgcmVzdCk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChKc29uTGQsIF9leHRlbmRzKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleU92ZXJyaWRlOiBrZXlPdmVycmlkZVxuICB9LCBkYXRhLCB7XG4gICAgc2NyaXB0S2V5OiBcImFydGljbGVcIlxuICB9KSk7XG59XG5cbmZ1bmN0aW9uIHNldFJldmlld2VkQnkocmV2aWV3ZWRCeSkge1xuICBpZiAocmV2aWV3ZWRCeSkge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAnQHR5cGUnOiAocmV2aWV3ZWRCeSA9PSBudWxsID8gdm9pZCAwIDogcmV2aWV3ZWRCeS50eXBlKSB8fCAnT3JnYW5pemF0aW9uJ1xuICAgIH0sIHJldmlld2VkQnkpO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbnZhciBfZXhjbHVkZWQkNSA9IFtcImtleU92ZXJyaWRlXCIsIFwicmV2aWV3ZWRCeVwiXTtcbmZ1bmN0aW9uIFdlYlBhZ2VKc29uTGQoX3JlZikge1xuICB2YXIga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgIHJldmlld2VkQnkgPSBfcmVmLnJldmlld2VkQnksXG4gICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCQ1KTtcbiAgdmFyIGRhdGEgPSBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIHJldmlld2VkQnk6IHNldFJldmlld2VkQnkocmV2aWV3ZWRCeSlcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChKc29uTGQsIF9leHRlbmRzKHtcbiAgICBrZXlPdmVycmlkZToga2V5T3ZlcnJpZGVcbiAgfSwgZGF0YSwge1xuICAgIHR5cGU6IFwiV2ViUGFnZVwiLFxuICAgIHNjcmlwdEtleTogXCJXZWJQYWdlXCJcbiAgfSkpO1xufVxuXG52YXIgX2V4Y2x1ZGVkJDQgPSBbXCJ0eXBlXCIsIFwia2V5T3ZlcnJpZGVcIl07XG5mdW5jdGlvbiBTb2NpYWxQcm9maWxlSnNvbkxkKF9yZWYpIHtcbiAgdmFyIHR5cGUgPSBfcmVmLnR5cGUsXG4gICAga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQkNCk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChKc29uTGQsIF9leHRlbmRzKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleU92ZXJyaWRlOiBrZXlPdmVycmlkZVxuICB9LCByZXN0LCB7XG4gICAgc2NyaXB0S2V5OiBcInNvY2lhbFwiXG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gc2V0Q29zdChjb3N0KSB7XG4gIGlmIChjb3N0KSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBjb3N0LCB7XG4gICAgICAnQHR5cGUnOiAnTW9uZXRhcnlBbW91bnQnXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gc2V0U3VwcGx5KHN1cHBseSkge1xuICBpZiAoc3VwcGx5KSB7XG4gICAgcmV0dXJuIHN1cHBseS5tYXAoZnVuY3Rpb24gKHN1cHBseUl0ZW0pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdAdHlwZSc6ICdIb3dUb1N1cHBseScsXG4gICAgICAgIG5hbWU6IHN1cHBseUl0ZW1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gc2V0VG9vbCh0b29sKSB7XG4gIGlmICh0b29sKSB7XG4gICAgcmV0dXJuIHRvb2wubWFwKGZ1bmN0aW9uICh0b29sSXRlbSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ0B0eXBlJzogJ0hvd1RvVG9vbCcsXG4gICAgICAgIG5hbWU6IHRvb2xJdGVtXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHNldFN0ZXAoc3RlcCkge1xuICBpZiAoc3RlcCkge1xuICAgIHJldHVybiBzdGVwLm1hcChmdW5jdGlvbiAoc3RlcEVsZW1lbnQpIHtcbiAgICAgIHZhciBpdGVtTGlzdEVsZW1lbnQgPSBzdGVwRWxlbWVudC5pdGVtTGlzdEVsZW1lbnQsXG4gICAgICAgIGltYWdlID0gc3RlcEVsZW1lbnQuaW1hZ2U7XG4gICAgICB2YXIgY3VycmVudExpc3RFbGVtZW50cyA9IGl0ZW1MaXN0RWxlbWVudCA9PSBudWxsID8gdm9pZCAwIDogaXRlbUxpc3RFbGVtZW50Lm1hcChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICB2YXIgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgICAgICB0ZXh0ID0gX3JlZi50ZXh0O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICdAdHlwZSc6IHR5cGUsXG4gICAgICAgICAgdGV4dDogdGV4dFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0ZXBFbGVtZW50LCB7XG4gICAgICAgICdAdHlwZSc6ICdIb3dUb1N0ZXAnLFxuICAgICAgICBpdGVtTGlzdEVsZW1lbnQ6IGN1cnJlbnRMaXN0RWxlbWVudHMsXG4gICAgICAgIGltYWdlOiBzZXRJbWFnZShpbWFnZSlcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbnZhciBfZXhjbHVkZWQkMyA9IFtcInR5cGVcIiwgXCJrZXlPdmVycmlkZVwiLCBcImltYWdlXCIsIFwiZXN0aW1hdGVkQ29zdFwiLCBcInN1cHBseVwiLCBcInRvb2xcIiwgXCJzdGVwXCJdO1xuZnVuY3Rpb24gaG93VG9Kc29uTGQoX3JlZikge1xuICB2YXIgX3JlZiR0eXBlID0gX3JlZi50eXBlLFxuICAgIHR5cGUgPSBfcmVmJHR5cGUgPT09IHZvaWQgMCA/ICdIb3dUbycgOiBfcmVmJHR5cGUsXG4gICAga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgIGltYWdlID0gX3JlZi5pbWFnZSxcbiAgICBlc3RpbWF0ZWRDb3N0ID0gX3JlZi5lc3RpbWF0ZWRDb3N0LFxuICAgIHN1cHBseSA9IF9yZWYuc3VwcGx5LFxuICAgIHRvb2wgPSBfcmVmLnRvb2wsXG4gICAgc3RlcCA9IF9yZWYuc3RlcCxcbiAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgX2V4Y2x1ZGVkJDMpO1xuICB2YXIgZGF0YSA9IF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgaW1hZ2U6IHNldEltYWdlKGltYWdlKSxcbiAgICBlc3RpbWF0ZWRDb3N0OiBzZXRDb3N0KGVzdGltYXRlZENvc3QpLFxuICAgIHN1cHBseTogc2V0U3VwcGx5KHN1cHBseSksXG4gICAgdG9vbDogc2V0VG9vbCh0b29sKSxcbiAgICBzdGVwOiBzZXRTdGVwKHN0ZXApXG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSnNvbkxkLCBfZXh0ZW5kcyh7XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXlPdmVycmlkZToga2V5T3ZlcnJpZGVcbiAgfSwgZGF0YSwge1xuICAgIHNjcmlwdEtleTogXCJob3dUb1wiXG4gIH0pKTtcbn1cblxudmFyIF9leGNsdWRlZCQyID0gW1wia2V5T3ZlcnJpZGVcIiwgXCJpbWFnZXNcIl07XG5mdW5jdGlvbiBJbWFnZUpzb25MZChfcmVmKSB7XG4gIHZhciBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgaW1hZ2VzID0gX3JlZi5pbWFnZXMsXG4gICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCQyKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEpzb25MZCwgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICB0eXBlOiBcIkltYWdlT2JqZWN0XCIsXG4gICAga2V5T3ZlcnJpZGU6IGtleU92ZXJyaWRlLFxuICAgIGRhdGFBcnJheTogaW1hZ2VzLFxuICAgIHNjcmlwdEtleTogXCJpbWFnZVwiXG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gc2V0QW1lbml0eUZlYXR1cmUoYW1lbml0eUZlYXR1cmUpIHtcbiAgaWYgKCFhbWVuaXR5RmVhdHVyZSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGFtZW5pdHlGZWF0dXJlKSkge1xuICAgIHJldHVybiBkZWNvcmF0ZUFtZW5pdHlGZWF0dXJlKGFtZW5pdHlGZWF0dXJlKTtcbiAgfVxuICBpZiAoYW1lbml0eUZlYXR1cmUubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGRlY29yYXRlQW1lbml0eUZlYXR1cmUoYW1lbml0eUZlYXR1cmVbMF0pO1xuICB9XG4gIHJldHVybiBhbWVuaXR5RmVhdHVyZS5tYXAoZGVjb3JhdGVBbWVuaXR5RmVhdHVyZSk7XG59XG5mdW5jdGlvbiBkZWNvcmF0ZUFtZW5pdHlGZWF0dXJlKGFtZW5pdHkpIHtcbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAnQHR5cGUnOiAnTG9jYXRpb25GZWF0dXJlU3BlY2lmaWNhdGlvbidcbiAgfSwgYW1lbml0eSk7XG59XG5cbnZhciBfZXhjbHVkZWQkMSA9IFtcImFkZHJlc3NcIiwgXCJnZW9cIiwgXCJpbWFnZXNcIiwgXCJrZXlPdmVycmlkZVwiLCBcIm9wZW5pbmdIb3Vyc1wiLCBcInR5cGVcIiwgXCJhbWVuaXR5RmVhdHVyZVwiLCBcInJhdGluZ1wiXTtcbmZ1bmN0aW9uIENhbXBncm91bmRKc29uTGQoX3JlZikge1xuICB2YXIgYWRkcmVzcyA9IF9yZWYuYWRkcmVzcyxcbiAgICBnZW8gPSBfcmVmLmdlbyxcbiAgICBpbWFnZXMgPSBfcmVmLmltYWdlcyxcbiAgICBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgb3BlbmluZ0hvdXJzID0gX3JlZi5vcGVuaW5nSG91cnMsXG4gICAgX3JlZiR0eXBlID0gX3JlZi50eXBlLFxuICAgIHR5cGUgPSBfcmVmJHR5cGUgPT09IHZvaWQgMCA/ICdDYW1wZ3JvdW5kJyA6IF9yZWYkdHlwZSxcbiAgICBhbWVuaXR5RmVhdHVyZSA9IF9yZWYuYW1lbml0eUZlYXR1cmUsXG4gICAgcmF0aW5nID0gX3JlZi5yYXRpbmcsXG4gICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCQxKTtcbiAgdmFyIGRhdGEgPSBfZXh0ZW5kcyh7XG4gICAgaW1hZ2U6IGltYWdlcyxcbiAgICBvcGVuaW5nSG91cnNTcGVjaWZpY2F0aW9uOiBBcnJheS5pc0FycmF5KG9wZW5pbmdIb3VycykgPyBvcGVuaW5nSG91cnMubWFwKHNldE9wZW5pbmdIb3VycykgOiBzZXRPcGVuaW5nSG91cnMob3BlbmluZ0hvdXJzKSxcbiAgICBhZGRyZXNzOiBzZXRBZGRyZXNzKGFkZHJlc3MpLFxuICAgIGdlbzogc2V0R2VvKGdlbyksXG4gICAgYW1lbml0eUZlYXR1cmU6IHNldEFtZW5pdHlGZWF0dXJlKGFtZW5pdHlGZWF0dXJlKSxcbiAgICBhZ2dyZWdhdGVSYXRpbmc6IHNldEFnZ3JlZ2F0ZVJhdGluZyhyYXRpbmcpXG4gIH0sIHJlc3QpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSnNvbkxkLCBfZXh0ZW5kcyh7XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXlPdmVycmlkZToga2V5T3ZlcnJpZGVcbiAgfSwgZGF0YSwge1xuICAgIHNjcmlwdEtleTogXCJjYW1wZ3JvdW5kXCJcbiAgfSkpO1xufVxuXG52YXIgX2V4Y2x1ZGVkID0gW1wiYWRkcmVzc1wiLCBcImdlb1wiLCBcImltYWdlc1wiLCBcImtleU92ZXJyaWRlXCIsIFwib3BlbmluZ0hvdXJzXCIsIFwidHlwZVwiXTtcbmZ1bmN0aW9uIFBhcmtKc29uTGQoX3JlZikge1xuICB2YXIgYWRkcmVzcyA9IF9yZWYuYWRkcmVzcyxcbiAgICBnZW8gPSBfcmVmLmdlbyxcbiAgICBpbWFnZXMgPSBfcmVmLmltYWdlcyxcbiAgICBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgb3BlbmluZ0hvdXJzID0gX3JlZi5vcGVuaW5nSG91cnMsXG4gICAgX3JlZiR0eXBlID0gX3JlZi50eXBlLFxuICAgIHR5cGUgPSBfcmVmJHR5cGUgPT09IHZvaWQgMCA/ICdQYXJrJyA6IF9yZWYkdHlwZSxcbiAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgX2V4Y2x1ZGVkKTtcbiAgdmFyIGRhdGEgPSBfZXh0ZW5kcyh7XG4gICAgaW1hZ2U6IGltYWdlcyxcbiAgICBvcGVuaW5nSG91cnNTcGVjaWZpY2F0aW9uOiBBcnJheS5pc0FycmF5KG9wZW5pbmdIb3VycykgPyBvcGVuaW5nSG91cnMubWFwKHNldE9wZW5pbmdIb3VycykgOiBzZXRPcGVuaW5nSG91cnMob3BlbmluZ0hvdXJzKSxcbiAgICBhZGRyZXNzOiBzZXRBZGRyZXNzKGFkZHJlc3MpLFxuICAgIGdlbzogc2V0R2VvKGdlbylcbiAgfSwgcmVzdCk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChKc29uTGQsIF9leHRlbmRzKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleU92ZXJyaWRlOiBrZXlPdmVycmlkZVxuICB9LCBkYXRhLCB7XG4gICAgc2NyaXB0S2V5OiBcInBhcmtcIlxuICB9KSk7XG59XG5cbmV4cG9ydCB7IEFydGljbGVKc29uTGQsIEJyYW5kSnNvbkxkLCBCcmVhZENydW1iSnNvbkxkIGFzIEJyZWFkY3J1bWJKc29uTGQsIENhbXBncm91bmRKc29uTGQsIENhcm91c2VsSnNvbkxkLCBDb2xsZWN0aW9uUGFnZUpzb25MZCwgQ29ycG9yYXRlQ29udGFjdEpzb25MZCwgQ291cnNlSnNvbkxkLCBEYXRhc2V0SnNvbkxkLCBEZWZhdWx0U2VvLCBFdmVudEpzb25MZCwgRkFRUGFnZUpzb25MZCwgaG93VG9Kc29uTGQgYXMgSG93VG9Kc29uTGQsIEltYWdlSnNvbkxkLCBKb2JQb3N0aW5nSnNvbkxkLCBMb2NhbEJ1c2luZXNzSnNvbkxkLCBMb2dvSnNvbkxkLCBOZXdzQXJ0aWNsZUpzb25MZCwgTmV4dFNlbywgT3JnYW5pemF0aW9uSnNvbkxkLCBQYXJrSnNvbkxkLCBQcm9kdWN0SnNvbkxkLCBQcm9maWxlUGFnZUpzb25MZCwgUUFQYWdlSnNvbkxkLCBSZWNpcGVKc29uTGQsIFNpdGVMaW5rc1NlYXJjaEJveEpzb25MZCwgU29jaWFsUHJvZmlsZUpzb25MZCwgU29mdHdhcmVBcHBKc29uTGQsIFZpZGVvR2FtZUpzb25MZCwgVmlkZW9Kc29uTGQsIFdlYlBhZ2VKc29uTGQgfTtcbiIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2FwcFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls2XS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNl0udXNlWzJdIS4vZ2xvYmFscy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gYW5jaG9yRWxlbWVudC5wYXJlbnROb2RlLy8gTm9ybWFsbHkgPGhlYWQ+XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIC8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuICAgICAgICAgICAgICAgIC8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3RcbiAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgYW5jaG9yRWxlbWVudCk7XG4gICAgICAgICAgICB9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gICAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBwO1xuICAgIGZvcihwIGluIGEpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKHAgaW4gYil7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzZdLnVzZVsyXSEuL2dsb2JhbHMuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzZdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls2XS51c2VbMl0hLi9nbG9iYWxzLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFMSgpIHtcbiAgICBsZXQgbWVtbztcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAgICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAgICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAgICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgICAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZW1vO1xuICAgIH07XG59KCk7XG5jb25zdCBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQxKCkge1xuICAgIGNvbnN0IG1lbW8gPSB7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgbGV0IHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICAgICAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgICAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gICAgfTtcbn0oKTtcbmNvbnN0IHN0eWxlc0luRG9tID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gICAgbGV0IHJlc3VsdCA9IC0xO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gICAgY29uc3QgaWRDb3VudE1hcCA9IHtcbiAgICB9O1xuICAgIGNvbnN0IGlkZW50aWZpZXJzID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBpdGVtID0gbGlzdFtpXTtcbiAgICAgICAgY29uc3QgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICAgICAgY29uc3QgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gaWQgKyAnICcgKyBjb3VudC50b1N0cmluZygpO1xuICAgICAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICAgICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgICAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICAgICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7XG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnN0IG5vbmNlID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgIHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gICAgICAgIGlmIChub25jZSkge1xuICAgICAgICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICAgIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi8gY29uc3QgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dDEoKSB7XG4gICAgY29uc3QgdGV4dFN0b3JlID0gW107XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICAgICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gICAgfTtcbn0oKTtcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICAgIGNvbnN0IGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gJ0BtZWRpYSAnICsgb2JqLm1lZGlhICsgJyB7JyArIG9iai5jc3MgKyAnfScgOiBvYmouY3NzO1xuICAgIC8vIEZvciBvbGQgSUVcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcbiAgICAgICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgICBsZXQgY3NzID0gb2JqLmNzcztcbiAgICBjb25zdCBtZWRpYSA9IG9iai5tZWRpYTtcbiAgICBjb25zdCBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICAgIGlmIChtZWRpYSkge1xuICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLyc7XG4gICAgfVxuICAgIC8vIEZvciBvbGQgSUVcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aGlsZShzdHlsZS5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cbn1cbmxldCBzaW5nbGV0b24gPSBudWxsO1xubGV0IHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gICAgbGV0IHN0eWxlO1xuICAgIGxldCB1cGRhdGU7XG4gICAgbGV0IHJlbW92ZTtcbiAgICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICAgICAgY29uc3Qgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICAgICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgICAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgICAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuICAgICAgICByZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHVwZGF0ZShvYmopO1xuICAgIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICAgICAgaWYgKG5ld09iaikge1xuICAgICAgICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge1xuICAgIH07XG4gICAgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gICAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuICAgIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gICAgfVxuICAgIGxpc3QgPSBsaXN0IHx8IFtdO1xuICAgIGxldCBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgICAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgICBmb3IobGV0IGkxID0gMDsgaTEgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpMSsrKXtcbiAgICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaTFdO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgICAgICAgIGlmIChzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgICAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gICAgfTtcbn07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBuPXs3NjI6ZnVuY3Rpb24obil7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3ZhciB0PVtdO3QudG9TdHJpbmc9ZnVuY3Rpb24gdG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7dmFyIHI9Y3NzV2l0aE1hcHBpbmdUb1N0cmluZyh0LG4pO2lmKHRbMl0pe3JldHVyblwiQG1lZGlhIFwiLmNvbmNhdCh0WzJdLFwiIHtcIikuY29uY2F0KHIsXCJ9XCIpfXJldHVybiByfSkuam9pbihcIlwiKX07dC5pPWZ1bmN0aW9uKG4scixvKXtpZih0eXBlb2Ygbj09PVwic3RyaW5nXCIpe249W1tudWxsLG4sXCJcIl1dfXZhciBlPXt9O2lmKG8pe2Zvcih2YXIgYT0wO2E8dGhpcy5sZW5ndGg7YSsrKXt2YXIgYz10aGlzW2FdWzBdO2lmKGMhPW51bGwpe2VbY109dHJ1ZX19fWZvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgdT1bXS5jb25jYXQobltpXSk7aWYobyYmZVt1WzBdXSl7Y29udGludWV9aWYocil7aWYoIXVbMl0pe3VbMl09cn1lbHNle3VbMl09XCJcIi5jb25jYXQocixcIiBhbmQgXCIpLmNvbmNhdCh1WzJdKX19dC5wdXNoKHUpfX07cmV0dXJuIHR9O2Z1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcobix0KXt2YXIgcj1uWzFdfHxcIlwiO3ZhciBvPW5bM107aWYoIW8pe3JldHVybiByfWlmKHQmJnR5cGVvZiBidG9hPT09XCJmdW5jdGlvblwiKXt2YXIgZT10b0NvbW1lbnQobyk7dmFyIGE9by5zb3VyY2VzLm1hcChmdW5jdGlvbihuKXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KG8uc291cmNlUm9vdHx8XCJcIikuY29uY2F0KG4sXCIgKi9cIil9KTtyZXR1cm5bcl0uY29uY2F0KGEpLmNvbmNhdChbZV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW3JdLmpvaW4oXCJcXG5cIil9ZnVuY3Rpb24gdG9Db21tZW50KG4pe3ZhciB0PWJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSkpO3ZhciByPVwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KHQpO3JldHVyblwiLyojIFwiLmNvbmNhdChyLFwiICovXCIpfX19O3ZhciB0PXt9O2Z1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18ocil7aWYodFtyXSl7cmV0dXJuIHRbcl0uZXhwb3J0c312YXIgbz10W3JdPXtleHBvcnRzOnt9fTt2YXIgZT10cnVlO3RyeXtuW3JdKG8sby5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO2U9ZmFsc2V9ZmluYWxseXtpZihlKWRlbGV0ZSB0W3JdfXJldHVybiBvLmV4cG9ydHN9X19uY2N3cGNrX3JlcXVpcmVfXy5hYj1fX2Rpcm5hbWUrXCIvXCI7cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oNzYyKX0oKTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgdGFpbHdpbmRjc3MgdjIuMi4xOSB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20gKi8vKiEgbW9kZXJuLW5vcm1hbGl6ZSB2MS4xLjAgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZSAqL1xcblxcbi8qXFxuRG9jdW1lbnRcXG49PT09PT09PVxcbiovXFxuXFxuLyoqXFxuVXNlIGEgYmV0dGVyIGJveCBtb2RlbCAob3BpbmlvbmF0ZWQpLlxcbiovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKipcXG5Vc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplIChvcGluaW9uYXRlZCkuXFxuKi9cXG5cXG5odG1sIHtcXG5cXHQtbW96LXRhYi1zaXplOiA0O1xcblxcdC1vLXRhYi1zaXplOiA0O1xcblxcdCAgIHRhYi1zaXplOiA0O1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuKi9cXG5cXG5odG1sIHtcXG5cXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcblxcdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblNlY3Rpb25zXFxuPT09PT09PT1cXG4qL1xcblxcbi8qKlxcblJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmJvZHkge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuSW1wcm92ZSBjb25zaXN0ZW5jeSBvZiBkZWZhdWx0IGZvbnRzIGluIGFsbCBicm93c2Vycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9pc3N1ZXMvMylcXG4qL1xcblxcbmJvZHkge1xcblxcdGZvbnQtZmFtaWx5OlxcblxcdFxcdHN5c3RlbS11aSxcXG5cXHRcXHQtYXBwbGUtc3lzdGVtLCAvKiBGaXJlZm94IHN1cHBvcnRzIHRoaXMgYnV0IG5vdCB5ZXQgYHN5c3RlbS11aWAgKi9cXG5cXHRcXHQnU2Vnb2UgVUknLFxcblxcdFxcdFJvYm90byxcXG5cXHRcXHRIZWx2ZXRpY2EsXFxuXFx0XFx0QXJpYWwsXFxuXFx0XFx0c2Fucy1zZXJpZixcXG5cXHRcXHQnQXBwbGUgQ29sb3IgRW1vamknLFxcblxcdFxcdCdTZWdvZSBVSSBFbW9qaSc7XFxufVxcblxcbi8qXFxuR3JvdXBpbmcgY29udGVudFxcbj09PT09PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXG4qL1xcblxcbmhyIHtcXG5cXHRoZWlnaHQ6IDA7IC8qIDEgKi9cXG5cXHRjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblRleHQtbGV2ZWwgc2VtYW50aWNzXFxuPT09PT09PT09PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJiclt0aXRsZV0ge1xcblxcdC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcblxcdCAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbjEuIEltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxuMi4gQ29ycmVjdCB0aGUgb2RkICdlbScgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcblxcdGZvbnQtZmFtaWx5OlxcblxcdFxcdHVpLW1vbm9zcGFjZSxcXG5cXHRcXHRTRk1vbm8tUmVndWxhcixcXG5cXHRcXHRDb25zb2xhcyxcXG5cXHRcXHQnTGliZXJhdGlvbiBNb25vJyxcXG5cXHRcXHRNZW5sbyxcXG5cXHRcXHRtb25vc3BhY2U7IC8qIDEgKi9cXG5cXHRmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG5cXHRmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuUHJldmVudCAnc3ViJyBhbmQgJ3N1cCcgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnN1YixcXG5zdXAge1xcblxcdGZvbnQtc2l6ZTogNzUlO1xcblxcdGxpbmUtaGVpZ2h0OiAwO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuXFx0Ym90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcblxcdHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcblRhYnVsYXIgZGF0YVxcbj09PT09PT09PT09PVxcbiovXFxuXFxuLyoqXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuKi9cXG5cXG50YWJsZSB7XFxuXFx0dGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG5cXHRib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Gb3Jtc1xcbj09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcblxcdGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcblxcdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuXFx0bWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4xLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcblxcdHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG5Db3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiovXFxuXFxuOjotbW96LWZvY3VzLWlubmVyIHtcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG5cXHRvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCAnOmludmFsaWQnIHN0eWxlcyBpbiBGaXJlZm94LlxcblNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzdcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcblxcdGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXQgJ2ZpZWxkc2V0JyBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5sZWdlbmQge1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxcbiovXFxuXFxucHJvZ3Jlc3Mge1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG5cXHRvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvICdpbmhlcml0JyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcblxcdGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5JbnRlcmFjdGl2ZVxcbj09PT09PT09PT09XFxuKi9cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuXFx0ZGlzcGxheTogbGlzdC1pdGVtO1xcbn0vKipcXG4gKiBNYW51YWxseSBmb3JrZWQgZnJvbSBTVUlUIENTUyBCYXNlOiBodHRwczovL2dpdGh1Yi5jb20vc3VpdGNzcy9iYXNlXFxuICogQSB0aGluIGxheWVyIG9uIHRvcCBvZiBub3JtYWxpemUuY3NzIHRoYXQgcHJvdmlkZXMgYSBzdGFydGluZyBwb2ludCBtb3JlXFxuICogc3VpdGFibGUgZm9yIHdlYiBhcHBsaWNhdGlvbnMuXFxuICovXFxuXFxuLyoqXFxuICogUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiAqL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFRhaWx3aW5kIGN1c3RvbSByZXNldCBzdHlsZXNcXG4gKi9cXG5cXG4vKipcXG4gKiAxLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSAod2l0aCBUYWlsd2luZCdzIGRlZmF1bHRcXG4gKiAgICBzYW5zLXNlcmlmIGZvbnQgc3RhY2sgYXMgYSBmYWxsYmFjaykgYXMgYSBzYW5lIGRlZmF1bHQuXFxuICogMi4gVXNlIFRhaWx3aW5kJ3MgZGVmYXVsdCBcXFwibm9ybWFsXFxcIiBsaW5lLWhlaWdodCBzbyB0aGUgdXNlciBpc24ndCBmb3JjZWRcXG4gKiAgICB0byBvdmVycmlkZSBpdCB0byBlbnN1cmUgY29uc2lzdGVuY3kgZXZlbiB3aGVuIHVzaW5nIHRoZSBkZWZhdWx0IHRoZW1lLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMiAqL1xcbn1cXG5cXG5cXG4vKipcXG4gKiBJbmhlcml0IGZvbnQtZmFtaWx5IGFuZCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXNcXG4gKiBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguXFxuICpcXG4gKiAgICBXZSB1c2VkIHRvIHNldCB0aGlzIGluIHRoZSBodG1sIGVsZW1lbnQgYW5kIGluaGVyaXQgZnJvbVxcbiAqICAgIHRoZSBwYXJlbnQgZWxlbWVudCBmb3IgZXZlcnl0aGluZyBlbHNlLiBUaGlzIGNhdXNlZCBpc3N1ZXNcXG4gKiAgICBpbiBzaGFkb3ctZG9tLWVuaGFuY2VkIGVsZW1lbnRzIGxpa2UgPGRldGFpbHM+IHdoZXJlIHRoZSBjb250ZW50XFxuICogICAgaXMgd3JhcHBlZCBieSBhIGRpdiB3aXRoIGJveC1zaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAuXFxuICpcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzRcXG4gKlxcbiAqXFxuICogMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguXFxuICpcXG4gKiAgICBCeSBkZWZhdWx0LCB0aGUgd2F5IHRoZSBicm93c2VyIHNwZWNpZmllcyB0aGF0IGFuIGVsZW1lbnQgc2hvdWxkIGhhdmUgbm9cXG4gKiAgICBib3JkZXIgaXMgYnkgc2V0dGluZyBpdCdzIGJvcmRlci1zdHlsZSB0byBgbm9uZWAgaW4gdGhlIHVzZXItYWdlbnRcXG4gKiAgICBzdHlsZXNoZWV0LlxcbiAqXFxuICogICAgSW4gb3JkZXIgdG8gZWFzaWx5IGFkZCBib3JkZXJzIHRvIGVsZW1lbnRzIGJ5IGp1c3Qgc2V0dGluZyB0aGUgYGJvcmRlci13aWR0aGBcXG4gKiAgICBwcm9wZXJ0eSwgd2UgY2hhbmdlIHRoZSBkZWZhdWx0IGJvcmRlci1zdHlsZSBmb3IgYWxsIGVsZW1lbnRzIHRvIGBzb2xpZGAsIGFuZFxcbiAqICAgIHVzZSBib3JkZXItd2lkdGggdG8gaGlkZSB0aGVtIGluc3RlYWQuIFRoaXMgd2F5IG91ciBgYm9yZGVyYCB1dGlsaXRpZXMgb25seVxcbiAqICAgIG5lZWQgdG8gc2V0IHRoZSBgYm9yZGVyLXdpZHRoYCBwcm9wZXJ0eSBpbnN0ZWFkIG9mIHRoZSBlbnRpcmUgYGJvcmRlcmBcXG4gKiAgICBzaG9ydGhhbmQsIG1ha2luZyBvdXIgYm9yZGVyIHV0aWxpdGllcyBtdWNoIG1vcmUgc3RyYWlnaHRmb3J3YXJkIHRvIGNvbXBvc2UuXFxuICpcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTZcXG4gKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbiAqIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHRcXG4gKi9cXG5cXG5ociB7XFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxufVxcblxcbi8qKlxcbiAqIFVuZG8gdGhlIGBib3JkZXItc3R5bGU6IG5vbmVgIHJlc2V0IHRoYXQgTm9ybWFsaXplIGFwcGxpZXMgdG8gaW1hZ2VzIHNvIHRoYXRcXG4gKiBvdXIgYGJvcmRlci17d2lkdGh9YCB1dGlsaXRpZXMgaGF2ZSB0aGUgZXhwZWN0ZWQgZWZmZWN0LlxcbiAqXFxuICogVGhlIE5vcm1hbGl6ZSByZXNldCBpcyB1bm5lY2Vzc2FyeSBmb3IgdXMgc2luY2Ugd2UgZGVmYXVsdCB0aGUgYm9yZGVyLXdpZHRoXFxuICogdG8gMCBvbiBhbGwgZWxlbWVudHMuXFxuICpcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvaXNzdWVzLzM2MlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIGNvbG9yOiAjOWNhM2FmO1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBjb2xvcjogIzljYTNhZjtcXG59XFxuXFxuYnV0dG9uLFxcbltyb2xlPVxcXCJidXR0b25cXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qKlxcbiAqIE92ZXJyaWRlIGxlZ2FjeSBmb2N1cyByZXNldCBmcm9tIE5vcm1hbGl6ZSB3aXRoIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlcy5cXG4gKlxcbiAqIFRoaXMgaXMgYWN0dWFsbHkgYW4gaW1wcm92ZW1lbnQgb3ZlciB0aGUgbmV3IGRlZmF1bHRzIGluIEZpcmVmb3ggaW4gb3VyIHRlc3RpbmcsXFxuICogYXMgaXQgdHJpZ2dlcnMgdGhlIGJldHRlciBmb2N1cyBzdHlsZXMgZXZlbiBmb3IgbGlua3MsIHdoaWNoIHN0aWxsIHVzZSBhIGRvdHRlZFxcbiAqIG91dGxpbmUgaW4gRmlyZWZveCBieSBkZWZhdWx0LlxcbiAqL1xcbiBcXG46LW1vei1mb2N1c3Jpbmcge1xcblxcdG91dGxpbmU6IGF1dG87XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBSZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZlxcbiAqIG9wdC1vdXQuXFxuICovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogUmVzZXQgZm9ybSBlbGVtZW50IHByb3BlcnRpZXMgdGhhdCBhcmUgZWFzeSB0byBmb3JnZXQgdG9cXG4gKiBzdHlsZSBleHBsaWNpdGx5IHNvIHlvdSBkb24ndCBpbmFkdmVydGVudGx5IGludHJvZHVjZVxcbiAqIHN0eWxlcyB0aGF0IGRldmlhdGUgZnJvbSB5b3VyIGRlc2lnbiBzeXN0ZW0uIFRoZXNlIHN0eWxlc1xcbiAqIHN1cHBsZW1lbnQgYSBwYXJ0aWFsIHJlc2V0IHRoYXQgaXMgYWxyZWFkeSBhcHBsaWVkIGJ5XFxuICogbm9ybWFsaXplLmNzcy5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBVc2UgdGhlIGNvbmZpZ3VyZWQgJ21vbm8nIGZvbnQgZmFtaWx5IGZvciBlbGVtZW50cyB0aGF0XFxuICogYXJlIGV4cGVjdGVkIHRvIGJlIHJlbmRlcmVkIHdpdGggYSBtb25vc3BhY2UgZm9udCwgZmFsbGluZ1xcbiAqIGJhY2sgdG8gdGhlIHN5c3RlbSBtb25vc3BhY2Ugc3RhY2sgaWYgdGhlcmUgaXMgbm8gY29uZmlndXJlZFxcbiAqICdtb25vJyBmb250IGZhbWlseS5cXG4gKi9cXG5cXG5wcmUsXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxufVxcblxcbi8qKlxcbiAqIDEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0IGFzIHRoYXQnc1xcbiAqICAgIHRoZSBiZWhhdmlvciB5b3Ugd2FudCBhbG1vc3QgYWxsIG9mIHRoZSB0aW1lLiBJbnNwaXJlZCBieVxcbiAqICAgIENTUyBSZW1lZHksIHdpdGggYHN2Z2AgYWRkZWQgYXMgd2VsbC5cXG4gKlxcbiAqICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTRcXG4gKiBcXG4gKiAyLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmVcXG4gKiAgICBzZW5zaWJseSBieSBkZWZhdWx0IHdoZW4gb3ZlcnJpZGluZyBgZGlzcGxheWAgYnkgYWRkaW5nIGFcXG4gKiAgICB1dGlsaXR5IGxpa2UgYGlubGluZWAuXFxuICpcXG4gKiAgICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludGluZyBlcnJvciBpbiBzb21lXFxuICogICAgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cXG4gKiBcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTBcXG4gKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZVxcbiAqIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uXFxuICpcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0XFxuICovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogRW5zdXJlIHRoZSBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3Igb2YgdGhlIGBoaWRkZW5gIGF0dHJpYnV0ZS5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XFxuXFx0LS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG5cXHRib3JkZXItY29sb3I6IHJnYmEoMjI5LCAyMzEsIDIzNSwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG5cXHQtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcblxcdC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcXG5cXHQtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xcbn1cXG5cXG5bdHlwZT0ndGV4dCddLFt0eXBlPSdlbWFpbCddLFt0eXBlPSd1cmwnXSxbdHlwZT0ncGFzc3dvcmQnXSxbdHlwZT0nbnVtYmVyJ10sW3R5cGU9J2RhdGUnXSxbdHlwZT0nZGF0ZXRpbWUtbG9jYWwnXSxbdHlwZT0nbW9udGgnXSxbdHlwZT0nc2VhcmNoJ10sW3R5cGU9J3RlbCddLFt0eXBlPSd0aW1lJ10sW3R5cGU9J3dlZWsnXSxbbXVsdGlwbGVdLHRleHRhcmVhLHNlbGVjdCB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcblxcdCAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG5cXHQgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXHRib3JkZXItY29sb3I6ICM2YjcyODA7XFxuXFx0Ym9yZGVyLXdpZHRoOiAxcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMHB4O1xcblxcdHBhZGRpbmctdG9wOiAwLjVyZW07XFxuXFx0cGFkZGluZy1yaWdodDogMC43NXJlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcblxcdHBhZGRpbmctbGVmdDogMC43NXJlbTtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuNXJlbTtcXG5cXHQtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xcbn1cXG5cXG5bdHlwZT0ndGV4dCddOmZvY3VzLCBbdHlwZT0nZW1haWwnXTpmb2N1cywgW3R5cGU9J3VybCddOmZvY3VzLCBbdHlwZT0ncGFzc3dvcmQnXTpmb2N1cywgW3R5cGU9J251bWJlciddOmZvY3VzLCBbdHlwZT0nZGF0ZSddOmZvY3VzLCBbdHlwZT0nZGF0ZXRpbWUtbG9jYWwnXTpmb2N1cywgW3R5cGU9J21vbnRoJ106Zm9jdXMsIFt0eXBlPSdzZWFyY2gnXTpmb2N1cywgW3R5cGU9J3RlbCddOmZvY3VzLCBbdHlwZT0ndGltZSddOmZvY3VzLCBbdHlwZT0nd2VlayddOmZvY3VzLCBbbXVsdGlwbGVdOmZvY3VzLCB0ZXh0YXJlYTpmb2N1cywgc2VsZWN0OmZvY3VzIHtcXG5cXHRvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFx0b3V0bGluZS1vZmZzZXQ6IDJweDtcXG5cXHQtLXR3LXJpbmctaW5zZXQ6IHZhcigtLXR3LWVtcHR5LC8qISovIC8qISovKTtcXG5cXHQtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuXFx0LS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXG5cXHQtLXR3LXJpbmctY29sb3I6ICMyNTYzZWI7XFxuXFx0LS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSB2YXIoLS10dy1yaW5nLW9mZnNldC1jb2xvcik7XFxuXFx0LS10dy1yaW5nLXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgY2FsYygxcHggKyB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkpIHZhcigtLXR3LXJpbmctY29sb3IpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksIHZhcigtLXR3LXJpbmctc2hhZG93KSwgdmFyKC0tdHctc2hhZG93KTtcXG5cXHRib3JkZXItY29sb3I6ICMyNTYzZWI7XFxufVxcblxcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxuXFx0Y29sb3I6ICM2YjcyODA7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuXFx0Y29sb3I6ICM2YjcyODA7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuXFxuOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtZmllbGRzLXdyYXBwZXIge1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbjo6LXdlYmtpdC1kYXRlLWFuZC10aW1lLXZhbHVlIHtcXG5cXHRtaW4taGVpZ2h0OiAxLjVlbTtcXG59XFxuXFxuc2VsZWN0IHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPSdub25lJyB2aWV3Qm94PScwIDAgMjAgMjAnJTNlJTNjcGF0aCBzdHJva2U9JyUyMzZiNzI4MCcgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzEuNScgZD0nTTYgOGw0IDQgNC00Jy8lM2UlM2Mvc3ZnJTNlXFxcIik7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMC41cmVtIGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtc2l6ZTogMS41ZW0gMS41ZW07XFxuXFx0cGFkZGluZy1yaWdodDogMi41cmVtO1xcblxcdC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDtcXG5cXHQgICAgICAgIGNvbG9yLWFkanVzdDogZXhhY3Q7XFxufVxcblxcblttdWx0aXBsZV0ge1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IGluaXRpYWw7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogaW5pdGlhbDtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogdW5zZXQ7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBpbml0aWFsO1xcblxcdHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XFxuXFx0LXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IHVuc2V0O1xcblxcdCAgICAgICAgY29sb3ItYWRqdXN0OiB1bnNldDtcXG59XFxuXFxuW3R5cGU9J2NoZWNrYm94J10sW3R5cGU9J3JhZGlvJ10ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG5cXHQgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0ICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0LXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xcblxcdCAgICAgICAgY29sb3ItYWRqdXN0OiBleGFjdDtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG5cXHRiYWNrZ3JvdW5kLW9yaWdpbjogYm9yZGVyLWJveDtcXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcblxcdCAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0ICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHRmbGV4LXNocmluazogMDtcXG5cXHRoZWlnaHQ6IDFyZW07XFxuXFx0d2lkdGg6IDFyZW07XFxuXFx0Y29sb3I6ICMyNTYzZWI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXHRib3JkZXItY29sb3I6ICM2YjcyODA7XFxuXFx0Ym9yZGVyLXdpZHRoOiAxcHg7XFxuXFx0LS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXG59XFxuXFxuW3R5cGU9J2NoZWNrYm94J10ge1xcblxcdGJvcmRlci1yYWRpdXM6IDBweDtcXG59XFxuXFxuW3R5cGU9J3JhZGlvJ10ge1xcblxcdGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcblxcblt0eXBlPSdjaGVja2JveCddOmZvY3VzLFt0eXBlPSdyYWRpbyddOmZvY3VzIHtcXG5cXHRvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFx0b3V0bGluZS1vZmZzZXQ6IDJweDtcXG5cXHQtLXR3LXJpbmctaW5zZXQ6IHZhcigtLXR3LWVtcHR5LC8qISovIC8qISovKTtcXG5cXHQtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAycHg7XFxuXFx0LS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXG5cXHQtLXR3LXJpbmctY29sb3I6ICMyNTYzZWI7XFxuXFx0LS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSB2YXIoLS10dy1yaW5nLW9mZnNldC1jb2xvcik7XFxuXFx0LS10dy1yaW5nLXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgY2FsYygycHggKyB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkpIHZhcigtLXR3LXJpbmctY29sb3IpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksIHZhcigtLXR3LXJpbmctc2hhZG93KSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuXFxuW3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCxbdHlwZT0ncmFkaW8nXTpjaGVja2VkIHtcXG5cXHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcblxcdGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuW3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCB7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nd2hpdGUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM2UlM2NwYXRoIGQ9J00xMi4yMDcgNC43OTNhMSAxIDAgMDEwIDEuNDE0bC01IDVhMSAxIDAgMDEtMS40MTQgMGwtMi0yYTEgMSAwIDAxMS40MTQtMS40MTRMNi41IDkuMDg2bDQuMjkzLTQuMjkzYTEgMSAwIDAxMS40MTQgMHonLyUzZSUzYy9zdmclM2VcXFwiKTtcXG59XFxuXFxuW3R5cGU9J3JhZGlvJ106Y2hlY2tlZCB7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nd2hpdGUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM2UlM2NjaXJjbGUgY3g9JzgnIGN5PSc4JyByPSczJy8lM2UlM2Mvc3ZnJTNlXFxcIik7XFxufVxcblxcblt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6aG92ZXIsW3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZDpmb2N1cyxbdHlwZT0ncmFkaW8nXTpjaGVja2VkOmhvdmVyLFt0eXBlPSdyYWRpbyddOmNoZWNrZWQ6Zm9jdXMge1xcblxcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xcbn1cXG5cXG5bdHlwZT0nY2hlY2tib3gnXTppbmRldGVybWluYXRlIHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPSdub25lJyB2aWV3Qm94PScwIDAgMTYgMTYnJTNlJTNjcGF0aCBzdHJva2U9J3doaXRlJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgOGg4Jy8lM2UlM2Mvc3ZnJTNlXFxcIik7XFxuXFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XFxuXFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcblt0eXBlPSdjaGVja2JveCddOmluZGV0ZXJtaW5hdGU6aG92ZXIsW3R5cGU9J2NoZWNrYm94J106aW5kZXRlcm1pbmF0ZTpmb2N1cyB7XFxuXFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XFxufVxcblxcblt0eXBlPSdmaWxlJ10ge1xcblxcdGJhY2tncm91bmQ6IHVuc2V0O1xcblxcdGJvcmRlci1jb2xvcjogaW5oZXJpdDtcXG5cXHRib3JkZXItd2lkdGg6IDA7XFxuXFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQtc2l6ZTogdW5zZXQ7XFxuXFx0bGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcblt0eXBlPSdmaWxlJ106Zm9jdXMge1xcblxcdG91dGxpbmU6IDFweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtcXG59XFxuICAvKiBpbnRlciB2YXIgLSBsYXRpbiAqL1xcbiAgQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAgOTAwO1xcbiAgICBmb250LWRpc3BsYXk6IG9wdGlvbmFsO1xcbiAgICBzcmM6IHVybChcXFwiL2ZvbnRzL2ludGVyLXZhci1sYXRpbi53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSxcXG4gICAgICBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLFxcbiAgICAgIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XFxuICB9XFxuXFxuICAudG9wdGl0bGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgei1pbmRleDogNTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gIH1cXG5cXG4gIC8qIFdyaXRlIHlvdXIgb3duIGN1c3RvbSBiYXNlIHN0eWxlcyBoZXJlICovXFxuICBwaDEuY29tcG9uZW50IHtcXG4gICAgZm9udC1zaXplOiAyN3B4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIG1hcmdpbi10b3A6IDZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwLjQwMjVweCAwLjg0MjVweCAwLjMyNXB4IGJsYWNrKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAwO1xcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiBoc2woMGRlZyAwJSAyMCUgLyA1MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHdoaXRlLCAjZjZmOGZhKTtcXG4gIH1cXG4gIHBoMS5hbGJ1bSB7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBtYXJnaW46IDJweCAwIDNweCAwO1xcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XFxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdvcmQtc3BhY2luZzogLTAuMWVtO1xcbiAgICBmb250LWZhbWlseTogRnJhbmtsaW5Hb3RoaWMsIExhdG8sIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gICAgbWFyZ2luLWJsb2NrOiA3cHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC1mYW1pbHk6IENpcmN1bGFyU3AsIENpcmN1bGFyU3AtQXJhYiwgQ2lyY3VsYXJTcC1IZWJyLCBDaXJjdWxhclNwLUN5cmwsXFxuICAgICAgQ2lyY3VsYXJTcC1HcmVrLCBDaXJjdWxhclNwLURldmEsIHZhcigtLWZhbGxiYWNrLWZvbnRzLCBzYW5zLXNlcmlmKTtcXG4gIH1cXG4gIGgxIHtcXG5cXHRmb250LWZhbWlseTogSW50ZXIsIHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXG5cXHRmb250LXNpemU6IDEuODc1cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuXFx0aDEge1xcblxcdFxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRcXHRsaW5lLWhlaWdodDogMTtcXG5cXHR9XFxufVxcblxcbiAgaDEudGV4dC1jZW50ZXIge1xcbiAgICBmb250LWZhbWlseTogXFxcIkRNIFNhbnNcXFwiO1xcbiAgICBmb250LWZhbWlseTogU2Vnb2UgVUk7XFxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIH1cXG5cXG4gIHBoMi5jb21wb25lbnQge1xcbiAgICBmb250LXNpemU6IDI3cHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgbWFyZ2luLXRvcDogNnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAuNDAyNXB4IDAuODQyNXB4IDAuMzI1cHggYmxhY2spO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDA7XFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IGhzbCgwZGVnIDAlIDIwJSAvIDUwJSk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgd2hpdGUsICNmNmY4ZmEpO1xcbiAgfVxcblxcbiAgcGgyLmFsYnVtIHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIG1hcmdpbjogMnB4IDAgM3B4IDA7XFxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd29yZC1zcGFjaW5nOiAtMC4xZW07XFxuICAgIGZvbnQtZmFtaWx5OiBGcmFua2xpbkdvdGhpYywgTGF0bywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgICBtYXJnaW4tYmxvY2s6IDdweDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LWZhbWlseTogQ2lyY3VsYXJTcCwgQ2lyY3VsYXJTcC1BcmFiLCBDaXJjdWxhclNwLUhlYnIsIENpcmN1bGFyU3AtQ3lybCxcXG4gICAgICBDaXJjdWxhclNwLUdyZWssIENpcmN1bGFyU3AtRGV2YSwgdmFyKC0tZmFsbGJhY2stZm9udHMsIHNhbnMtc2VyaWYpO1xcbiAgfVxcblxcbiAgaDIge1xcblxcdGZvbnQtZmFtaWx5OiBJbnRlciwgdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAycmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuXFx0aDIge1xcblxcdFxcdGZvbnQtc2l6ZTogMi4yNXJlbTtcXG5cXHRcXHRsaW5lLWhlaWdodDogMi41cmVtO1xcblxcdH1cXG59XFxuXFxuICBwaDMuY29tcG9uZW50IHtcXG4gICAgZm9udC1zaXplOiAyN3B4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIG1hcmdpbi10b3A6IDZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwLjQwMjVweCAwLjg0MjVweCAwLjMyNXB4IGJsYWNrKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAwO1xcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiBoc2woMGRlZyAwJSAyMCUgLyA1MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHdoaXRlLCAjZjZmOGZhKTtcXG4gIH1cXG5cXG4gIHBoMy5hbGJ1bSB7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBtYXJnaW46IDJweCAwIDNweCAwO1xcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XFxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdvcmQtc3BhY2luZzogLTAuMWVtO1xcbiAgICBmb250LWZhbWlseTogRnJhbmtsaW5Hb3RoaWMsIExhdG8sIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gICAgbWFyZ2luLWJsb2NrOiA3cHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC1mYW1pbHk6IENpcmN1bGFyU3AsIENpcmN1bGFyU3AtQXJhYiwgQ2lyY3VsYXJTcC1IZWJyLCBDaXJjdWxhclNwLUN5cmwsXFxuICAgICAgQ2lyY3VsYXJTcC1HcmVrLCBDaXJjdWxhclNwLURldmEsIHZhcigtLWZhbGxiYWNrLWZvbnRzLCBzYW5zLXNlcmlmKTtcXG4gIH1cXG5cXG4gIGgzIHtcXG5cXHRmb250LWZhbWlseTogSW50ZXIsIHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXG5cXHRmb250LXNpemU6IDEuMjVyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuNzVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXG5cXHRoMyB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjg3NXJlbTtcXG5cXHRcXHRsaW5lLWhlaWdodDogMi4yNXJlbTtcXG5cXHR9XFxufVxcblxcbiAgaDMudGV4dC1jZW50ZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCI7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICB9XFxuXFxuICBwaDQuY29tcG9uZW50IHtcXG4gICAgZm9udC1zaXplOiAyN3B4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIG1hcmdpbi10b3A6IDZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwLjQwMjVweCAwLjg0MjVweCAwLjMyNXB4IGJsYWNrKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAwO1xcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiBoc2woMGRlZyAwJSAyMCUgLyA1MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHdoaXRlLCAjZjZmOGZhKTtcXG4gIH1cXG5cXG4gIHBoNC5hbGJ1bSB7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBtYXJnaW46IDJweCAwIDNweCAwO1xcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XFxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdvcmQtc3BhY2luZzogLTAuMWVtO1xcbiAgICBmb250LWZhbWlseTogRnJhbmtsaW5Hb3RoaWMsIExhdG8sIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gICAgbWFyZ2luLWJsb2NrOiA3cHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC1mYW1pbHk6IENpcmN1bGFyU3AsIENpcmN1bGFyU3AtQXJhYiwgQ2lyY3VsYXJTcC1IZWJyLCBDaXJjdWxhclNwLUN5cmwsXFxuICAgICAgQ2lyY3VsYXJTcC1HcmVrLCBDaXJjdWxhclNwLURldmEsIHZhcigtLWZhbGxiYWNrLWZvbnRzLCBzYW5zLXNlcmlmKTtcXG4gIH1cXG5cXG4gIGg0IHtcXG5cXHRmb250LWZhbWlseTogSW50ZXIsIHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXG5cXHRmb250LXNpemU6IDEuMTI1cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbiAgcC5mb250LWJvbGQuY29tcG9uZW50IHtcXG4gICAgZm9udC1zaXplOiAyN3B4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIG1hcmdpbi10b3A6IDZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAuNDAyNXB4IDAuODQyNXB4IDAuMzI1cHggYmxhY2spO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDA7XFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IGhzbCgwZGVnIDAlIDIwJSAvIDUwJSk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgd2hpdGUsICNmNmY4ZmEpO1xcbiAgfVxcblxcbiAgLnRleHQteHMge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjUgIWltcG9ydGFudDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJETSBTYW5zXFxcIjtcXG4gICAgbWFyZ2luOiAycHggMCAzcHggMDtcXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd29yZC1zcGFjaW5nOiAtMC4xZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHdpZHRoOiAxMTIlO1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xcbiAgfVxcblxcbiAgcC5mb250LWJvbGQuYWxidW0ge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgbWFyZ2luOiAycHggMCAzcHggMDtcXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3b3JkLXNwYWNpbmc6IC0wLjFlbTtcXG4gICAgZm9udC1mYW1pbHk6IEZyYW5rbGluR290aGljLCBMYXRvLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gICAgbWFyZ2luLWJsb2NrOiA3cHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC1mYW1pbHk6IENpcmN1bGFyU3AsIENpcmN1bGFyU3AtQXJhYiwgQ2lyY3VsYXJTcC1IZWJyLCBDaXJjdWxhclNwLUN5cmwsXFxuICAgICAgQ2lyY3VsYXJTcC1HcmVrLCBDaXJjdWxhclNwLURldmEsIHZhcigtLWZhbGxiYWNrLWZvbnRzLCBzYW5zLXNlcmlmKTtcXG4gIH1cXG5cXG4gIGJvZHkge1xcblxcdGZvbnQtZmFtaWx5OiBJbnRlciwgdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiO1xcblxcdGZvbnQtc2l6ZTogMC44NzVyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuMjVyZW07XFxufVxcblxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuXFx0Ym9keSB7XFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdFxcdGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuXFx0fVxcbn1cXG5cXG4gIC5zaGFkb3ctc20ge1xcbiAgfVxcblxcbiAgYm9keSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL2ltZy9hYXNkLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9pbWcvZG9nc2JnMi5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG5cXG4gIC53LWJnIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgfVxcbiAgaW1nLnctaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgfVxcblxcbiAgYS5jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmc6IDMwcHggIWltcG9ydGFudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAtMC4yZW0gLTAuMTI1ZW0gMC4xMjVlbSByZ2IoMCAwIDAgLyAyNSUpLFxcbiAgICAgIDAgMCAwIDAuMDRlbSByZ2IoMCAwIDAgLyAzMCUpLCAwLjAyZW0gMC4wMmVtIDAuMDJlbSByZ2IoMCAwIDAgLyA0MCUpIGluc2V0LFxcbiAgICAgIC0wLjA1ZW0gLTAuMDVlbSAwLjAyZW0gcmdiKDI1NSAyNTUgMjU1IC8gODAlKSBpbnNldCAhaW1wb3J0YW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXI6IDJweCBvdXRzZXQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcXG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAxNDVkZWcsXFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSxcXG4gICAgICB0cmFuc3BhcmVudFxcbiAgICApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgMTQ1ZGVnLFxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAwJSxcXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMTAwJVxcbiAgICApO1xcbiAgfVxcblxcbiAgLnctMTYge1xcbiAgICB3aWR0aDogNDUlICFpbXBvcnRhbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZpbHRlcjogc2F0dXJhdGUoMS4wMjUpIGNvbnRyYXN0KDEuMDE1KVxcbiAgICAgIGRyb3Atc2hhZG93KDAuMTI1cHggMC4yNXB4IDAuMjVweCBibGFjayk7XFxuICB9XFxuXFxuICBpbWcudy0xNi5zaGFkb3ctc20ge1xcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xcbiAgICBoZWlnaHQ6IDYwJSAhaW1wb3J0YW50O1xcbiAgICAtby1vYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50O1xcbiAgICAgICBvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLnctMTY6OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAwcHgpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSArIDFweCk7XFxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3B1ZGRpbmcuY29vbC8yMDIxLzEwL2p1ZGdlLW15LW11c2ljL2Fzc2V0cy9pbWFnZXMvcGxhc3RpYy1zbWFsbC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEyNSkgb3BhY2l0eSgxKTtcXG4gIH1cXG5cXG4gIHAudGV4dC1jZW50ZXIge1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgICBsaW5lLWhlaWdodDogMjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcbi5jb250YWluZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcXG5cXG5cXHQuY29udGFpbmVyIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDY0MHB4O1xcblxcdH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuXFx0LmNvbnRhaW5lciB7XFxuXFx0XFx0bWF4LXdpZHRoOiA3NjhweDtcXG5cXHR9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG5cXG5cXHQuY29udGFpbmVyIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDEwMjRweDtcXG5cXHR9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXG5cXG5cXHQuY29udGFpbmVyIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDEyODBweDtcXG5cXHR9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxNTM2cHgpIHtcXG5cXG5cXHQuY29udGFpbmVyIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDE1MzZweDtcXG5cXHR9XFxufVxcbi5zdGF0aWMge1xcblxcdHBvc2l0aW9uOiBzdGF0aWM7XFxufVxcbi5hYnNvbHV0ZSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4ucmVsYXRpdmUge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmJvdHRvbS0xXFxcXC41IHtcXG5cXHRib3R0b206IDAuMzc1cmVtO1xcbn1cXG4ucmlnaHQtMVxcXFwuNSB7XFxuXFx0cmlnaHQ6IDAuMzc1cmVtO1xcbn1cXG4uYm90dG9tLTEge1xcblxcdGJvdHRvbTogMC4yNXJlbTtcXG59XFxuLnJpZ2h0LTEge1xcblxcdHJpZ2h0OiAwLjI1cmVtO1xcbn1cXG4uZmxleCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuLmlubGluZS1mbGV4IHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG59XFxuLm1pbi1oLXNjcmVlbiB7XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxufVxcbi53LTcyIHtcXG5cXHR3aWR0aDogMThyZW07XFxufVxcbi53LTE2IHtcXG5cXHR3aWR0aDogNHJlbTtcXG59XFxuLmZsZXgtMSB7XFxuXFx0ZmxleDogMSAxIDAlO1xcbn1cXG4uY3Vyc29yLVxcXFxbbmUtcmVzaXplXFxcXF0ge1xcblxcdGN1cnNvcjogbmUtcmVzaXplO1xcbn1cXG4uZmxleC1jb2wge1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5pdGVtcy1jZW50ZXIge1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5qdXN0aWZ5LWNlbnRlciB7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5qdXN0aWZ5LWJldHdlZW4ge1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnNwYWNlLXktMyA+IDpub3QoW2hpZGRlbl0pIH4gOm5vdChbaGlkZGVuXSkge1xcblxcdC0tdHctc3BhY2UteS1yZXZlcnNlOiAwO1xcblxcdG1hcmdpbi10b3A6IGNhbGMoMC43NXJlbSAqIGNhbGMoMSAtIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpKTtcXG5cXHRtYXJnaW4tYm90dG9tOiBjYWxjKDAuNzVyZW0gKiB2YXIoLS10dy1zcGFjZS15LXJldmVyc2UpKTtcXG59XFxuLnNwYWNlLXgtNCA+IDpub3QoW2hpZGRlbl0pIH4gOm5vdChbaGlkZGVuXSkge1xcblxcdC0tdHctc3BhY2UteC1yZXZlcnNlOiAwO1xcblxcdG1hcmdpbi1yaWdodDogY2FsYygxcmVtICogdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSk7XFxuXFx0bWFyZ2luLWxlZnQ6IGNhbGMoMXJlbSAqIGNhbGMoMSAtIHZhcigtLXR3LXNwYWNlLXgtcmV2ZXJzZSkpKTtcXG59XFxuLnJvdW5kZWQtbWQge1xcblxcdGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xcbn1cXG4uYm9yZGVyIHtcXG5cXHRib3JkZXItd2lkdGg6IDFweDtcXG59XFxuLmJnLWdyYXktNzAwIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NSwgNjUsIDgxLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5wLTUge1xcblxcdHBhZGRpbmc6IDEuMjVyZW07XFxufVxcbi5weC04IHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDJyZW07XFxuXFx0cGFkZGluZy1yaWdodDogMnJlbTtcXG59XFxuLnB5LTQge1xcblxcdHBhZGRpbmctdG9wOiAxcmVtO1xcblxcdHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG4udGV4dC1jZW50ZXIge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRleHQteHMge1xcblxcdGZvbnQtc2l6ZTogMC43NXJlbTtcXG5cXHRsaW5lLWhlaWdodDogMXJlbTtcXG59XFxuLmZvbnQtYm9sZCB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLnRleHQtZ3JlZW4tNDAwIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSg1MiwgMjExLCAxNTMsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC13aGl0ZSB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi51bmRlcmxpbmUge1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4uc2hhZG93LXNtIHtcXG5cXHQtLXR3LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG4udHJhbnNpdGlvbi1zaGFkb3cge1xcblxcdHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3c7XFxuXFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuXFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxufVxcbi5hbmltYXRlZC11bmRlcmxpbmUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzMzMzMzMzAwLCAjMzMzMzMzMDApLFxcbiAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwZTBmMywgIzAwYzRmZCk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAycHgsIDAgMnB4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCUsIDAgMTAwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1zaXplIDAuM3MgZWFzZTtcXG4gIH1cXG4uYW5pbWF0ZWQtdW5kZXJsaW5lOmhvdmVyLFxcbiAgLmFuaW1hdGVkLXVuZGVybGluZTpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMCAycHgsIDEwMCUgMnB4O1xcbiAgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MzBweCkge1xcbiAgYS5jb250YWluZXIge1xcbiAgICB3aWR0aDogNjUlICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmc6IDMwcHggMjBweCAhaW1wb3J0YW50O1xcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXG59XFxucC5mb250LWJvbGQuY29tcG9uZW50IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLnRleHQteHMge1xcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XFxuICBsZXR0ZXItc3BhY2luZzogM3B4ICFpbXBvcnRhbnQ7XFxufVxcbnAuZm9udC1ib2xkLmFsYnVtIHtcXG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xcbn1cXG5cXG59XFxuXFxuXFxuXFxuXFxuXFxuLmhvdmVyXFxcXDp0ZXh0LWJsdWUtNTAwOmhvdmVyIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4uaG92ZXJcXFxcOnRleHQtcHJpbWFyeS01MDA6aG92ZXIge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDAsIDE5NiwgMjUzLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLmhvdmVyXFxcXDp0ZXh0LXByaW1hcnktNDAwOmhvdmVyIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgwLCAyMjQsIDI0MywgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcblxcblxcblxcblxcblxcbi5ob3ZlclxcXFw6dGV4dC1ncmVlbi00MDA6aG92ZXIge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDUyLCAyMTEsIDE1MywgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcblxcblxcblxcblxcblxcbi5ob3ZlclxcXFw6c2hhZG93LW1kOmhvdmVyIHtcXG5cXHQtLXR3LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvZ2xvYmFscy5jc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvJTNDaW5wdXQlMjBjc3MlMjBWUExhRHQlM0VcIixcIndlYnBhY2s6Ly9zdHlsZXMvJTNDaW5wdXQlMjBjc3MlMjB0YUswWXElM0VcIixcIjxubyBzb3VyY2U+XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGlFQUFjLENBQWQsOEZBQWM7O0FBQWQ7OztDQUFjOztBQUFkOztDQUFjOztBQUFkOzs7Q0NjQyxzQkFBc0I7QURkVDs7QUFBZDs7Q0FBYzs7QUFBZDtDQ3NCQyxnQkFBZ0I7Q0FDaEIsY0FBVztJQUFYLFdBQVc7QUR2QkU7O0FBQWQ7OztDQUFjOztBQUFkO0NDZ0NDLGlCQUFpQixFQUFFLE1BQU07Q0FDekIsOEJBQThCLEVBQUUsTUFBTTtBRGpDekI7O0FBQWQ7OztDQUFjOztBQUFkOztDQUFjOztBQUFkO0NDOENDLFNBQVM7QUQ5Q0k7O0FBQWQ7O0NBQWM7O0FBQWQ7Q0NzREM7Ozs7Ozs7OztrQkFTaUI7QUQvREo7O0FBQWQ7OztDQUFjOztBQUFkOzs7Q0FBYzs7QUFBZDtDQzZFQyxTQUFTLEVBQUUsTUFBTTtDQUNqQixjQUFjLEVBQUUsTUFBTTtBRDlFVDs7QUFBZDs7O0NBQWM7O0FBQWQ7O0NBQWM7O0FBQWQ7Q0MyRkMseUNBQWlDO1NBQWpDLGlDQUFpQztBRDNGcEI7O0FBQWQ7O0NBQWM7O0FBQWQ7O0NDb0dDLG1CQUFtQjtBRHBHTjs7QUFBZDs7O0NBQWM7O0FBQWQ7Ozs7Q0NnSEM7Ozs7OztXQU1VLEVBQUUsTUFBTTtDQUNsQixj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ZXNDb250ZW50XCI6W1wiQHRhaWx3aW5kIGJhc2U7XFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuQHRhaWx3aW5kIHV0aWxpdGllcztcXG5cXG5AbGF5ZXIgYmFzZSB7XFxuICAvKiBpbnRlciB2YXIgLSBsYXRpbiAqL1xcbiAgQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAgOTAwO1xcbiAgICBmb250LWRpc3BsYXk6IG9wdGlvbmFsO1xcbiAgICBzcmM6IHVybChcXFwiL2ZvbnRzL2ludGVyLXZhci1sYXRpbi53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSxcXG4gICAgICBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLFxcbiAgICAgIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XFxuICB9XFxuXFxuICAudG9wdGl0bGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgei1pbmRleDogNTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gIH1cXG5cXG4gIC8qIFdyaXRlIHlvdXIgb3duIGN1c3RvbSBiYXNlIHN0eWxlcyBoZXJlICovXFxuICBoMSB7XFxuICAgIEBhcHBseSB0ZXh0LTN4bCBmb250LWJvbGQgbWQ6dGV4dC01eGwgZm9udC1wcmltYXJ5O1xcbiAgfVxcblxcbiAgaDEudGV4dC1jZW50ZXIge1xcbiAgICBmb250LWZhbWlseTogXFxcIkRNIFNhbnNcXFwiO1xcbiAgICBmb250LWZhbWlseTogU2Vnb2UgVUk7XFxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIH1cXG5cXG4gIGgyIHtcXG4gICAgQGFwcGx5IHRleHQtMnhsIGZvbnQtYm9sZCBtZDp0ZXh0LTR4bCBmb250LXByaW1hcnk7XFxuICB9XFxuXFxuICBoMyB7XFxuICAgIEBhcHBseSB0ZXh0LXhsIGZvbnQtYm9sZCBtZDp0ZXh0LTN4bCBmb250LXByaW1hcnk7XFxuICB9XFxuXFxuICBoMy50ZXh0LWNlbnRlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIH1cXG5cXG4gIGg0IHtcXG4gICAgQGFwcGx5IHRleHQtbGcgZm9udC1ib2xkIGZvbnQtcHJpbWFyeTtcXG4gIH1cXG5cXG4gIHAuZm9udC1ib2xkLmNvbXBvbmVudCB7XFxuICAgIGZvbnQtc2l6ZTogMjdweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCI7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBtYXJnaW4tdG9wOiA2cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMCAhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwLjQwMjVweCAwLjg0MjVweCAwLjMyNXB4IGJsYWNrKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAwO1xcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiBoc2woMGRlZyAwJSAyMCUgLyA1MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHdoaXRlLCAjZjZmOGZhKTtcXG4gIH1cXG5cXG4gIC50ZXh0LXhzIHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xcbiAgICBsaW5lLWhlaWdodDogMS41ICFpbXBvcnRhbnQ7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRE0gU2Fuc1xcXCI7XFxuICAgIG1hcmdpbjogMnB4IDAgM3B4IDA7XFxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdvcmQtc3BhY2luZzogLTAuMWVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB3aWR0aDogMTEyJTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG4gIH1cXG5cXG4gIHAuZm9udC1ib2xkLmFsYnVtIHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIG1hcmdpbjogMnB4IDAgM3B4IDA7XFxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd29yZC1zcGFjaW5nOiAtMC4xZW07XFxuICAgIGZvbnQtZmFtaWx5OiBGcmFua2xpbkdvdGhpYywgTGF0bywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICAgIG1hcmdpbi1ibG9jazogN3B4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtZmFtaWx5OiBDaXJjdWxhclNwLCBDaXJjdWxhclNwLUFyYWIsIENpcmN1bGFyU3AtSGViciwgQ2lyY3VsYXJTcC1DeXJsLFxcbiAgICAgIENpcmN1bGFyU3AtR3JlaywgQ2lyY3VsYXJTcC1EZXZhLCB2YXIoLS1mYWxsYmFjay1mb250cywgc2Fucy1zZXJpZik7XFxuICB9XFxuXFxuICBib2R5IHtcXG4gICAgQGFwcGx5IHRleHQtc20gZm9udC1wcmltYXJ5IG1kOnRleHQtYmFzZTtcXG4gIH1cXG5cXG4gIC5sYXlvdXQge1xcbiAgICAvKiA3NTBweCAqL1xcbiAgICAvKiBtYXgtd2lkdGg6IDQzLjc1cmVtOyAqL1xcblxcbiAgICAvKiAxMTAwcHggKi9cXG4gICAgbWF4LXdpZHRoOiA2OC43NXJlbTtcXG4gICAgQGFwcGx5IHctMTEvMTIgbXgtYXV0bztcXG4gIH1cXG5cXG4gIC5zaGFkb3ctc20ge1xcbiAgfVxcblxcbiAgYm9keSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL2ltZy9hYXNkLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9pbWcvZG9nc2JnMi5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG5cXG4gIC53LWJnIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgei1pbmRleDogLTE7XFxuICB9XFxuICBpbWcudy1pbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIH1cXG5cXG4gIGEuY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nOiAzMHB4ICFpbXBvcnRhbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogLTAuMmVtIC0wLjEyNWVtIDAuMTI1ZW0gcmdiKDAgMCAwIC8gMjUlKSxcXG4gICAgICAwIDAgMCAwLjA0ZW0gcmdiKDAgMCAwIC8gMzAlKSwgMC4wMmVtIDAuMDJlbSAwLjAyZW0gcmdiKDAgMCAwIC8gNDAlKSBpbnNldCxcXG4gICAgICAtMC4wNWVtIC0wLjA1ZW0gMC4wMmVtIHJnYigyNTUgMjU1IDI1NSAvIDgwJSkgaW5zZXQgIWltcG9ydGFudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiAycHggb3V0c2V0IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgMTQ1ZGVnLFxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSksXFxuICAgICAgdHJhbnNwYXJlbnRcXG4gICAgKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIDE0NWRlZyxcXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCkgMCUsXFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDEwMCVcXG4gICAgKTtcXG4gIH1cXG5cXG4gIC53LTE2IHtcXG4gICAgd2lkdGg6IDQ1JSAhaW1wb3J0YW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBmaWx0ZXI6IHNhdHVyYXRlKDEuMDI1KSBjb250cmFzdCgxLjAxNSlcXG4gICAgICBkcm9wLXNoYWRvdygwLjEyNXB4IDAuMjVweCAwLjI1cHggYmxhY2spO1xcbiAgfVxcblxcbiAgaW1nLnctMTYuc2hhZG93LXNtIHtcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXG4gICAgaGVpZ2h0OiA2MCUgIWltcG9ydGFudDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXIgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC53LTE2OjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMHB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMHB4KTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAxcHgpO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9wdWRkaW5nLmNvb2wvMjAyMS8xMC9qdWRnZS1teS1tdXNpYy9hc3NldHMvaW1hZ2VzL3BsYXN0aWMtc21hbGwuanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBtaXgtYmxlbmQtbW9kZTogc2NyZWVuO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xMjUpIG9wYWNpdHkoMSk7XFxuICB9XFxuXFxuICBwLnRleHQtY2VudGVyIHtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gICAgbGluZS1oZWlnaHQ6IDI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYzMHB4KSB7XFxuICBhLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA2NSUgIWltcG9ydGFudDtcXG4gICAgcGFkZGluZzogMzBweCAyMHB4ICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xcbn1cXG5wLmZvbnQtYm9sZC5jb21wb25lbnQge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4udGV4dC14cyB7XFxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcXG4gIGxldHRlci1zcGFjaW5nOiAzcHggIWltcG9ydGFudDtcXG59XFxucC5mb250LWJvbGQuYWxidW0ge1xcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbn1cXG5cXG5cXG5cXG5cXG5cXG5AbGF5ZXIgdXRpbGl0aWVzIHtcXG4gIC5hbmltYXRlZC11bmRlcmxpbmUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzMzMzMzMzAwLCAjMzMzMzMzMDApLFxcbiAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwZTBmMywgIzAwYzRmZCk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAycHgsIDAgMnB4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCUsIDAgMTAwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1zaXplIDAuM3MgZWFzZTtcXG4gIH1cXG4gIC5hbmltYXRlZC11bmRlcmxpbmU6aG92ZXIsXFxuICAuYW5pbWF0ZWQtdW5kZXJsaW5lOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAwIDJweCwgMTAwJSAycHg7XFxuICB9XFxufVxcblxcblxcblwiLFwiLyohIG1vZGVybi1ub3JtYWxpemUgdjEuMS4wIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUgKi9cXG5cXG4vKlxcbkRvY3VtZW50XFxuPT09PT09PT1cXG4qL1xcblxcbi8qKlxcblVzZSBhIGJldHRlciBib3ggbW9kZWwgKG9waW5pb25hdGVkKS5cXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyoqXFxuVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZSAob3BpbmlvbmF0ZWQpLlxcbiovXFxuXFxuaHRtbCB7XFxuXFx0LW1vei10YWItc2l6ZTogNDtcXG5cXHR0YWItc2l6ZTogNDtcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiovXFxuXFxuaHRtbCB7XFxuXFx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG5cXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZWN0aW9uc1xcbj09PT09PT09XFxuKi9cXG5cXG4vKipcXG5SZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbkltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxuKi9cXG5cXG5ib2R5IHtcXG5cXHRmb250LWZhbWlseTpcXG5cXHRcXHRzeXN0ZW0tdWksXFxuXFx0XFx0LWFwcGxlLXN5c3RlbSwgLyogRmlyZWZveCBzdXBwb3J0cyB0aGlzIGJ1dCBub3QgeWV0IGBzeXN0ZW0tdWlgICovXFxuXFx0XFx0J1NlZ29lIFVJJyxcXG5cXHRcXHRSb2JvdG8sXFxuXFx0XFx0SGVsdmV0aWNhLFxcblxcdFxcdEFyaWFsLFxcblxcdFxcdHNhbnMtc2VyaWYsXFxuXFx0XFx0J0FwcGxlIENvbG9yIEVtb2ppJyxcXG5cXHRcXHQnU2Vnb2UgVUkgRW1vamknO1xcbn1cXG5cXG4vKlxcbkdyb3VwaW5nIGNvbnRlbnRcXG49PT09PT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuKi9cXG5cXG5ociB7XFxuXFx0aGVpZ2h0OiAwOyAvKiAxICovXFxuXFx0Y29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5UZXh0LWxldmVsIHNlbWFudGljc1xcbj09PT09PT09PT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnJbdGl0bGVdIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuMS4gSW1wcm92ZSBjb25zaXN0ZW5jeSBvZiBkZWZhdWx0IGZvbnRzIGluIGFsbCBicm93c2Vycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9pc3N1ZXMvMylcXG4yLiBDb3JyZWN0IHRoZSBvZGQgJ2VtJyBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuXFx0Zm9udC1mYW1pbHk6XFxuXFx0XFx0dWktbW9ub3NwYWNlLFxcblxcdFxcdFNGTW9uby1SZWd1bGFyLFxcblxcdFxcdENvbnNvbGFzLFxcblxcdFxcdCdMaWJlcmF0aW9uIE1vbm8nLFxcblxcdFxcdE1lbmxvLFxcblxcdFxcdG1vbm9zcGFjZTsgLyogMSAqL1xcblxcdGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc21hbGwge1xcblxcdGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG5QcmV2ZW50ICdzdWInIGFuZCAnc3VwJyBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc3ViLFxcbnN1cCB7XFxuXFx0Zm9udC1zaXplOiA3NSU7XFxuXFx0bGluZS1oZWlnaHQ6IDA7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG5cXHRib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuXFx0dG9wOiAtMC41ZW07XFxufVxcblxcbi8qXFxuVGFidWxhciBkYXRhXFxuPT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4qL1xcblxcbnRhYmxlIHtcXG5cXHR0ZXh0LWluZGVudDogMDsgLyogMSAqL1xcblxcdGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkZvcm1zXFxuPT09PT1cXG4qL1xcblxcbi8qKlxcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4qL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuXFx0Zm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuXFx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG5cXHRtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbjEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuXFx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbkNvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuKi9cXG5cXG46Oi1tb3otZm9jdXMtaW5uZXIge1xcblxcdGJvcmRlci1zdHlsZTogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG5SZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuKi9cXG5cXG46LW1vei1mb2N1c3Jpbmcge1xcblxcdG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsICc6aW52YWxpZCcgc3R5bGVzIGluIEZpcmVmb3guXFxuU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczN1xcbiovXFxuXFxuOi1tb3otdWktaW52YWxpZCB7XFxuXFx0Ym94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dCAnZmllbGRzZXQnIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmxlZ2VuZCB7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiovXFxuXFxuW3R5cGU9J3NlYXJjaCddIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcblxcdG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4qL1xcblxcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gJ2luaGVyaXQnIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuXFx0Zm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkludGVyYWN0aXZlXFxuPT09PT09PT09PT1cXG4qL1xcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5zdW1tYXJ5IHtcXG5cXHRkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblwiLFwiLyoqXFxuICogTWFudWFsbHkgZm9ya2VkIGZyb20gU1VJVCBDU1MgQmFzZTogaHR0cHM6Ly9naXRodWIuY29tL3N1aXRjc3MvYmFzZVxcbiAqIEEgdGhpbiBsYXllciBvbiB0b3Agb2Ygbm9ybWFsaXplLmNzcyB0aGF0IHByb3ZpZGVzIGEgc3RhcnRpbmcgcG9pbnQgbW9yZVxcbiAqIHN1aXRhYmxlIGZvciB3ZWIgYXBwbGljYXRpb25zLlxcbiAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4gKi9cXG5cXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbmhyLFxcbmZpZ3VyZSxcXG5wLFxcbnByZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBUYWlsd2luZCBjdXN0b20gcmVzZXQgc3R5bGVzXFxuICovXFxuXFxuLyoqXFxuICogMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgKHdpdGggVGFpbHdpbmQncyBkZWZhdWx0XFxuICogICAgc2Fucy1zZXJpZiBmb250IHN0YWNrIGFzIGEgZmFsbGJhY2spIGFzIGEgc2FuZSBkZWZhdWx0LlxcbiAqIDIuIFVzZSBUYWlsd2luZCdzIGRlZmF1bHQgXFxcIm5vcm1hbFxcXCIgbGluZS1oZWlnaHQgc28gdGhlIHVzZXIgaXNuJ3QgZm9yY2VkXFxuICogICAgdG8gb3ZlcnJpZGUgaXQgdG8gZW5zdXJlIGNvbnNpc3RlbmN5IGV2ZW4gd2hlbiB1c2luZyB0aGUgZGVmYXVsdCB0aGVtZS5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiB0aGVtZSgnZm9udEZhbWlseS5zYW5zJywgdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiKTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMiAqL1xcbn1cXG5cXG5cXG4vKipcXG4gKiBJbmhlcml0IGZvbnQtZmFtaWx5IGFuZCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXNcXG4gKiBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguXFxuICpcXG4gKiAgICBXZSB1c2VkIHRvIHNldCB0aGlzIGluIHRoZSBodG1sIGVsZW1lbnQgYW5kIGluaGVyaXQgZnJvbVxcbiAqICAgIHRoZSBwYXJlbnQgZWxlbWVudCBmb3IgZXZlcnl0aGluZyBlbHNlLiBUaGlzIGNhdXNlZCBpc3N1ZXNcXG4gKiAgICBpbiBzaGFkb3ctZG9tLWVuaGFuY2VkIGVsZW1lbnRzIGxpa2UgPGRldGFpbHM+IHdoZXJlIHRoZSBjb250ZW50XFxuICogICAgaXMgd3JhcHBlZCBieSBhIGRpdiB3aXRoIGJveC1zaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAuXFxuICpcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzRcXG4gKlxcbiAqXFxuICogMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguXFxuICpcXG4gKiAgICBCeSBkZWZhdWx0LCB0aGUgd2F5IHRoZSBicm93c2VyIHNwZWNpZmllcyB0aGF0IGFuIGVsZW1lbnQgc2hvdWxkIGhhdmUgbm9cXG4gKiAgICBib3JkZXIgaXMgYnkgc2V0dGluZyBpdCdzIGJvcmRlci1zdHlsZSB0byBgbm9uZWAgaW4gdGhlIHVzZXItYWdlbnRcXG4gKiAgICBzdHlsZXNoZWV0LlxcbiAqXFxuICogICAgSW4gb3JkZXIgdG8gZWFzaWx5IGFkZCBib3JkZXJzIHRvIGVsZW1lbnRzIGJ5IGp1c3Qgc2V0dGluZyB0aGUgYGJvcmRlci13aWR0aGBcXG4gKiAgICBwcm9wZXJ0eSwgd2UgY2hhbmdlIHRoZSBkZWZhdWx0IGJvcmRlci1zdHlsZSBmb3IgYWxsIGVsZW1lbnRzIHRvIGBzb2xpZGAsIGFuZFxcbiAqICAgIHVzZSBib3JkZXItd2lkdGggdG8gaGlkZSB0aGVtIGluc3RlYWQuIFRoaXMgd2F5IG91ciBgYm9yZGVyYCB1dGlsaXRpZXMgb25seVxcbiAqICAgIG5lZWQgdG8gc2V0IHRoZSBgYm9yZGVyLXdpZHRoYCBwcm9wZXJ0eSBpbnN0ZWFkIG9mIHRoZSBlbnRpcmUgYGJvcmRlcmBcXG4gKiAgICBzaG9ydGhhbmQsIG1ha2luZyBvdXIgYm9yZGVyIHV0aWxpdGllcyBtdWNoIG1vcmUgc3RyYWlnaHRmb3J3YXJkIHRvIGNvbXBvc2UuXFxuICpcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTZcXG4gKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbiAqIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHRcXG4gKi9cXG5cXG5ociB7XFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxufVxcblxcbi8qKlxcbiAqIFVuZG8gdGhlIGBib3JkZXItc3R5bGU6IG5vbmVgIHJlc2V0IHRoYXQgTm9ybWFsaXplIGFwcGxpZXMgdG8gaW1hZ2VzIHNvIHRoYXRcXG4gKiBvdXIgYGJvcmRlci17d2lkdGh9YCB1dGlsaXRpZXMgaGF2ZSB0aGUgZXhwZWN0ZWQgZWZmZWN0LlxcbiAqXFxuICogVGhlIE5vcm1hbGl6ZSByZXNldCBpcyB1bm5lY2Vzc2FyeSBmb3IgdXMgc2luY2Ugd2UgZGVmYXVsdCB0aGUgYm9yZGVyLXdpZHRoXFxuICogdG8gMCBvbiBhbGwgZWxlbWVudHMuXFxuICpcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvaXNzdWVzLzM2MlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBjb2xvcjogdGhlbWUoJ2NvbG9ycy5ncmF5LjQwMCcsICNhMWExYWEpO1xcbn1cXG5cXG5idXR0b24sXFxuW3JvbGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyoqXFxuICogT3ZlcnJpZGUgbGVnYWN5IGZvY3VzIHJlc2V0IGZyb20gTm9ybWFsaXplIHdpdGggbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGVzLlxcbiAqXFxuICogVGhpcyBpcyBhY3R1YWxseSBhbiBpbXByb3ZlbWVudCBvdmVyIHRoZSBuZXcgZGVmYXVsdHMgaW4gRmlyZWZveCBpbiBvdXIgdGVzdGluZyxcXG4gKiBhcyBpdCB0cmlnZ2VycyB0aGUgYmV0dGVyIGZvY3VzIHN0eWxlcyBldmVuIGZvciBsaW5rcywgd2hpY2ggc3RpbGwgdXNlIGEgZG90dGVkXFxuICogb3V0bGluZSBpbiBGaXJlZm94IGJ5IGRlZmF1bHQuXFxuICovXFxuIFxcbjotbW96LWZvY3VzcmluZyB7XFxuXFx0b3V0bGluZTogYXV0bztcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIFJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mXFxuICogb3B0LW91dC5cXG4gKi9cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBSZXNldCBmb3JtIGVsZW1lbnQgcHJvcGVydGllcyB0aGF0IGFyZSBlYXN5IHRvIGZvcmdldCB0b1xcbiAqIHN0eWxlIGV4cGxpY2l0bHkgc28geW91IGRvbid0IGluYWR2ZXJ0ZW50bHkgaW50cm9kdWNlXFxuICogc3R5bGVzIHRoYXQgZGV2aWF0ZSBmcm9tIHlvdXIgZGVzaWduIHN5c3RlbS4gVGhlc2Ugc3R5bGVzXFxuICogc3VwcGxlbWVudCBhIHBhcnRpYWwgcmVzZXQgdGhhdCBpcyBhbHJlYWR5IGFwcGxpZWQgYnlcXG4gKiBub3JtYWxpemUuY3NzLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgcGFkZGluZzogMDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIFVzZSB0aGUgY29uZmlndXJlZCAnbW9ubycgZm9udCBmYW1pbHkgZm9yIGVsZW1lbnRzIHRoYXRcXG4gKiBhcmUgZXhwZWN0ZWQgdG8gYmUgcmVuZGVyZWQgd2l0aCBhIG1vbm9zcGFjZSBmb250LCBmYWxsaW5nXFxuICogYmFjayB0byB0aGUgc3lzdGVtIG1vbm9zcGFjZSBzdGFjayBpZiB0aGVyZSBpcyBubyBjb25maWd1cmVkXFxuICogJ21vbm8nIGZvbnQgZmFtaWx5LlxcbiAqL1xcblxcbnByZSxcXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiB0aGVtZSgnZm9udEZhbWlseS5tb25vJywgdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2UpO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIGBkaXNwbGF5OiBibG9ja2AgYnkgZGVmYXVsdCBhcyB0aGF0J3NcXG4gKiAgICB0aGUgYmVoYXZpb3IgeW91IHdhbnQgYWxtb3N0IGFsbCBvZiB0aGUgdGltZS4gSW5zcGlyZWQgYnlcXG4gKiAgICBDU1MgUmVtZWR5LCB3aXRoIGBzdmdgIGFkZGVkIGFzIHdlbGwuXFxuICpcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0XFxuICogXFxuICogMi4gQWRkIGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlXFxuICogICAgc2Vuc2libHkgYnkgZGVmYXVsdCB3aGVuIG92ZXJyaWRpbmcgYGRpc3BsYXlgIGJ5IGFkZGluZyBhXFxuICogICAgdXRpbGl0eSBsaWtlIGBpbmxpbmVgLlxcbiAqXFxuICogICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnRpbmcgZXJyb3IgaW4gc29tZVxcbiAqICAgIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuICogXFxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwXFxuICovXFxuXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyxcXG5jYW52YXMsXFxuYXVkaW8sXFxuaWZyYW1lLFxcbmVtYmVkLFxcbm9iamVjdCB7XFxuICBkaXNwbGF5OiBibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmVcXG4gKiB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLlxcbiAqXFxuICogaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNFxcbiAqL1xcblxcbmltZyxcXG52aWRlbyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIEVuc3VyZSB0aGUgZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yIG9mIHRoZSBgaGlkZGVuYCBhdHRyaWJ1dGUuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsbnVsbF0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG5leHBvcnRzLkZyYWdtZW50ID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBleHBvcnRzLkZyYWdtZW50ID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLkZyYWdtZW50OlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTtcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZik7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICB7XG4gICAgaWYgKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdSZWFjdC5qc3g6IFN0YXRpYyBjaGlsZHJlbiBzaG91bGQgYWx3YXlzIGJlIGFuIGFycmF5LiAnICsgJ1lvdSBhcmUgbGlrZWx5IGV4cGxpY2l0bHkgY2FsbGluZyBSZWFjdC5qc3hzIG9yIFJlYWN0LmpzeERFVi4gJyArICdVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAvLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcblxudmFyIGpzeERFViQxID0gIGpzeFdpdGhWYWxpZGF0aW9uIDtcblxuZXhwb3J0cy5qc3hERVYgPSBqc3hERVYkMTtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iXSwibmFtZXMiOlsidGl0bGUiLCJkZXNjcmlwdGlvbiIsIlNFTyIsIm9wZW5HcmFwaCIsInR5cGUiLCJsb2NhbGUiLCJ1cmwiLCJpbWFnZXMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm9uRGVtYW5kRW50cmllcyIsIm1heEluYWN0aXZlQWdlIiwicGFnZXNCdWZmZXJMZW5ndGgiLCJEZWZhdWx0U2VvIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9