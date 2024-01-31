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
___CSS_LOADER_EXPORT___.push([module.id, "/*! tailwindcss v2.2.19 | MIT License | https://tailwindcss.com *//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\t   tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n \n:-moz-focusring {\n\toutline: auto;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(229, 231, 235, var(--tw-border-opacity));\n\t--tw-ring-offset-shadow: 0 0 #0000;\n\t--tw-ring-shadow: 0 0 #0000;\n\t--tw-shadow: 0 0 #0000;\n}\n\n[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {\n\t-webkit-appearance: none;\n\t   -moz-appearance: none;\n\t        appearance: none;\n\tbackground-color: #fff;\n\tborder-color: #6b7280;\n\tborder-width: 1px;\n\tborder-radius: 0px;\n\tpadding-top: 0.5rem;\n\tpadding-right: 0.75rem;\n\tpadding-bottom: 0.5rem;\n\tpadding-left: 0.75rem;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\t--tw-shadow: 0 0 #0000;\n}\n\n[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n\t--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-ring-offset-width: 0px;\n\t--tw-ring-offset-color: #fff;\n\t--tw-ring-color: #2563eb;\n\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n\tborder-color: #2563eb;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n\tcolor: #6b7280;\n\topacity: 1;\n}\n\ninput::placeholder,textarea::placeholder {\n\tcolor: #6b7280;\n\topacity: 1;\n}\n\n::-webkit-datetime-edit-fields-wrapper {\n\tpadding: 0;\n}\n\n::-webkit-date-and-time-value {\n\tmin-height: 1.5em;\n}\n\nselect {\n\tbackground-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");\n\tbackground-position: right 0.5rem center;\n\tbackground-repeat: no-repeat;\n\tbackground-size: 1.5em 1.5em;\n\tpadding-right: 2.5rem;\n\t-webkit-print-color-adjust: exact;\n\t        color-adjust: exact;\n}\n\n[multiple] {\n\tbackground-image: initial;\n\tbackground-position: initial;\n\tbackground-repeat: unset;\n\tbackground-size: initial;\n\tpadding-right: 0.75rem;\n\t-webkit-print-color-adjust: unset;\n\t        color-adjust: unset;\n}\n\n[type='checkbox'],[type='radio'] {\n\t-webkit-appearance: none;\n\t   -moz-appearance: none;\n\t        appearance: none;\n\tpadding: 0;\n\t-webkit-print-color-adjust: exact;\n\t        color-adjust: exact;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tbackground-origin: border-box;\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t        user-select: none;\n\tflex-shrink: 0;\n\theight: 1rem;\n\twidth: 1rem;\n\tcolor: #2563eb;\n\tbackground-color: #fff;\n\tborder-color: #6b7280;\n\tborder-width: 1px;\n\t--tw-shadow: 0 0 #0000;\n}\n\n[type='checkbox'] {\n\tborder-radius: 0px;\n}\n\n[type='radio'] {\n\tborder-radius: 100%;\n}\n\n[type='checkbox']:focus,[type='radio']:focus {\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n\t--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-ring-offset-width: 2px;\n\t--tw-ring-offset-color: #fff;\n\t--tw-ring-color: #2563eb;\n\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n}\n\n[type='checkbox']:checked,[type='radio']:checked {\n\tborder-color: transparent;\n\tbackground-color: currentColor;\n\tbackground-size: 100% 100%;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n}\n\n[type='checkbox']:checked {\n\tbackground-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\");\n}\n\n[type='radio']:checked {\n\tbackground-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\");\n}\n\n[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {\n\tborder-color: transparent;\n\tbackground-color: currentColor;\n}\n\n[type='checkbox']:indeterminate {\n\tbackground-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\");\n\tborder-color: transparent;\n\tbackground-color: currentColor;\n\tbackground-size: 100% 100%;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n}\n\n[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {\n\tborder-color: transparent;\n\tbackground-color: currentColor;\n}\n\n[type='file'] {\n\tbackground: unset;\n\tborder-color: inherit;\n\tborder-width: 0;\n\tborder-radius: 0;\n\tpadding: 0;\n\tfont-size: unset;\n\tline-height: inherit;\n}\n\n[type='file']:focus {\n\toutline: 1px auto -webkit-focus-ring-color;\n}\n  /* inter var - latin */\n  @font-face {\n    font-family: \"Inter\";\n    font-style: normal;\n    font-weight: 100 900;\n    font-display: optional;\n    src: url(\"/fonts/inter-var-latin.woff2\") format(\"woff2\");\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\n      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,\n      U+2215, U+FEFF, U+FFFD;\n  }\n\n  .toptitle {\n    position: absolute;\n    top: 10px;\n    z-index: 5;\n    padding: 5px;\n    line-height: 1;\n  }\n\n  /* Write your own custom base styles here */\n  ph1.component {\n    font-size: 27px;\n    text-transform: uppercase;\n    font-family: \"Inter\";\n    letter-spacing: 2px;\n    line-height: 1;\n    margin-top: 6px;\n    margin-bottom: 8px;\n    font-weight: 900;\n    color: #fff;\n    filter: drop-shadow(0.4025px 0.8425px 0.325px black);\n    background-size: cover;\n    background-position: 0% 50%;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -webkit-text-stroke-width: 0;\n    -webkit-text-stroke-color: hsl(0deg 0% 20% / 50%);\n    background-image: linear-gradient(45deg, white, #f6f8fa);\n  }\n  ph1.album {\n    display: -webkit-box;\n    margin: 2px 0 3px 0;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    word-spacing: -0.1em;\n    font-family: FranklinGothic, Lato, sans-serif;\n    font-weight: 400;\n    line-height: 1.5;\n    width: 100%;\n    color: white;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    margin-block: 7px;\n    font-size: 12px;\n    font-family: CircularSp, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl,\n      CircularSp-Grek, CircularSp-Deva, var(--fallback-fonts, sans-serif);\n  }\n  h1 {\n\tfont-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n\tfont-size: 1.875rem;\n\tline-height: 2.25rem;\n\tfont-weight: 700;\n}\n  @media (min-width: 768px) {\n\n\th1 {\n\t\tfont-size: 3rem;\n\t\tline-height: 1;\n\t}\n}\n\n  h1.text-center {\n    font-family: \"DM Sans\";\n    font-family: Segoe UI;\n    letter-spacing: 5px;\n    font-size: 24px;\n    font-weight: 400;\n    line-height: 1.5;\n    text-transform: uppercase;\n  }\n\n  ph2.component {\n    font-size: 27px;\n    text-transform: uppercase;\n    font-family: \"Inter\";\n    letter-spacing: 2px;\n    line-height: 1;\n    margin-top: 6px;\n    margin-bottom: 8px;\n    font-weight: 900;\n    color: #fff;\n    filter: drop-shadow(0.4025px 0.8425px 0.325px black);\n    background-size: cover;\n    background-position: 0% 50%;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -webkit-text-stroke-width: 0;\n    -webkit-text-stroke-color: hsl(0deg 0% 20% / 50%);\n    background-image: linear-gradient(45deg, white, #f6f8fa);\n  }\n\n  ph2.album {\n    display: -webkit-box;\n    margin: 2px 0 3px 0;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    word-spacing: -0.1em;\n    font-family: FranklinGothic, Lato, sans-serif;\n    font-weight: 400;\n    line-height: 1.5;\n    width: 100%;\n    color: white;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    margin-block: 7px;\n    font-size: 12px;\n    font-family: CircularSp, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl,\n      CircularSp-Grek, CircularSp-Deva, var(--fallback-fonts, sans-serif);\n  }\n\n  h2 {\n\tfont-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n\tfont-size: 1.5rem;\n\tline-height: 2rem;\n\tfont-weight: 700;\n}\n\n  @media (min-width: 768px) {\n\n\th2 {\n\t\tfont-size: 2.25rem;\n\t\tline-height: 2.5rem;\n\t}\n}\n\n  ph3.component {\n    font-size: 27px;\n    text-transform: uppercase;\n    font-family: \"Inter\";\n    letter-spacing: 2px;\n    line-height: 1;\n    margin-top: 6px;\n    margin-bottom: 8px;\n    font-weight: 900;\n    color: #fff;\n    filter: drop-shadow(0.4025px 0.8425px 0.325px black);\n    background-size: cover;\n    background-position: 0% 50%;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -webkit-text-stroke-width: 0;\n    -webkit-text-stroke-color: hsl(0deg 0% 20% / 50%);\n    background-image: linear-gradient(45deg, white, #f6f8fa);\n  }\n\n  ph3.album {\n    display: -webkit-box;\n    margin: 2px 0 3px 0;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    word-spacing: -0.1em;\n    font-family: FranklinGothic, Lato, sans-serif;\n    font-weight: 400;\n    line-height: 1.5;\n    width: 100%;\n    color: white;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    margin-block: 7px;\n    font-size: 12px;\n    font-family: CircularSp, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl,\n      CircularSp-Grek, CircularSp-Deva, var(--fallback-fonts, sans-serif);\n  }\n\n  h3 {\n\tfont-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n\tfont-size: 1.25rem;\n\tline-height: 1.75rem;\n\tfont-weight: 700;\n}\n\n  @media (min-width: 768px) {\n\n\th3 {\n\t\tfont-size: 1.875rem;\n\t\tline-height: 2.25rem;\n\t}\n}\n\n  h3.text-center {\n    color: black;\n    font-size: 20px;\n    font-family: \"Inter\";\n    font-weight: 600;\n    letter-spacing: 1px;\n  }\n\n  ph4.component {\n    font-size: 27px;\n    text-transform: uppercase;\n    font-family: \"Inter\";\n    letter-spacing: 2px;\n    line-height: 1;\n    margin-top: 6px;\n    margin-bottom: 8px;\n    font-weight: 900;\n    color: #fff;\n    filter: drop-shadow(0.4025px 0.8425px 0.325px black);\n    background-size: cover;\n    background-position: 0% 50%;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -webkit-text-stroke-width: 0;\n    -webkit-text-stroke-color: hsl(0deg 0% 20% / 50%);\n    background-image: linear-gradient(45deg, white, #f6f8fa);\n  }\n\n  ph4.album {\n    display: -webkit-box;\n    margin: 2px 0 3px 0;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    word-spacing: -0.1em;\n    font-family: FranklinGothic, Lato, sans-serif;\n    font-weight: 400;\n    line-height: 1.5;\n    width: 100%;\n    color: white;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    margin-block: 7px;\n    font-size: 12px;\n    font-family: CircularSp, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl,\n      CircularSp-Grek, CircularSp-Deva, var(--fallback-fonts, sans-serif);\n  }\n\n  h4 {\n\tfont-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n\tfont-size: 1.125rem;\n\tline-height: 1.75rem;\n\tfont-weight: 700;\n}\n\n  p.font-bold.component {\n    font-size: 27px;\n    text-transform: uppercase;\n    font-family: \"Inter\";\n    letter-spacing: 2px;\n    line-height: 1;\n    margin-top: 6px;\n    margin-bottom: 8px;\n    font-weight: 900 !important;\n    color: #fff;\n    filter: drop-shadow(0.4025px 0.8425px 0.325px black);\n    background-size: cover;\n    background-position: 0% 50%;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -webkit-text-stroke-width: 0;\n    -webkit-text-stroke-color: hsl(0deg 0% 20% / 50%);\n    background-image: linear-gradient(45deg, white, #f6f8fa);\n  }\n\n  .text-xs {\n    display: -webkit-box;\n    font-size: 20px !important;\n    line-height: 1.5 !important;\n    font-family: \"DM Sans\";\n    margin: 2px 0 3px 0;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    word-spacing: -0.1em;\n    font-weight: 400;\n    width: 112%;\n    font-family: \"Roboto\", sans-serif;\n    color: #fff;\n    text-transform: uppercase;\n    letter-spacing: 4px;\n  }\n\n  p.font-bold.album {\n    display: -webkit-box;\n    margin: 2px 0 3px 0;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    word-spacing: -0.1em;\n    font-family: FranklinGothic, Lato, sans-serif;\n    font-weight: 400;\n    line-height: 1.5;\n    width: 100%;\n    color: white !important;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    margin-block: 7px;\n    font-size: 12px;\n    font-family: CircularSp, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl,\n      CircularSp-Grek, CircularSp-Deva, var(--fallback-fonts, sans-serif);\n  }\n\n  body {\n\tfont-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n\tfont-size: 0.875rem;\n\tline-height: 1.25rem;\n}\n\n  @media (min-width: 768px) {\n\n\tbody {\n\t\tfont-size: 1rem;\n\t\tline-height: 1.5rem;\n\t}\n}\n\n  .shadow-sm {\n  }\n\n  body {\n    background-image: url(\"/img/aasd.jpg\");\n    background-image: url(\"/img/dogsbg2.jpg\");\n    background-size: cover;\n    width: 100%;\n    height: 100%;\n  }\n\n  .w-bg {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    z-index: -1;\n  }\n  img.w-img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n  }\n\n  a.container {\n    position: relative;\n    width: 50% !important;\n    margin: auto !important;\n    padding: 30px !important;\n    color: white;\n    box-shadow: -0.2em -0.125em 0.125em rgb(0 0 0 / 25%),\n      0 0 0 0.04em rgb(0 0 0 / 30%), 0.02em 0.02em 0.02em rgb(0 0 0 / 40%) inset,\n      -0.05em -0.05em 0.02em rgb(255 255 255 / 80%) inset !important;\n    background-color: #eee;\n    border-radius: 15px;\n    border: 2px outset rgba(255, 255, 255, 0.3);\n    -webkit-backdrop-filter: blur(20px);\n            backdrop-filter: blur(20px);\n    background-image: linear-gradient(\n      145deg,\n      rgba(255, 255, 255, 0.15),\n      transparent\n    );\n    background-color: rgba(0, 0, 0, 0.05);\n    background-image: linear-gradient(\n      145deg,\n      rgba(255, 255, 255, 0.4) 0%,\n      rgba(255, 255, 255, 0.1) 100%\n    );\n  }\n\n  .w-16 {\n    width: 45% !important;\n    border-radius: 20px;\n    filter: saturate(1.025) contrast(1.015)\n      drop-shadow(0.125px 0.25px 0.25px black);\n  }\n\n  img.w-16.shadow-sm {\n    display: flex !important;\n    position: relative !important;\n    width: auto !important;\n    height: 60% !important;\n    -o-object-fit: cover !important;\n       object-fit: cover !important;\n  }\n\n  .w-16::before {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    content: \"\";\n    width: calc(100% + 0px);\n    height: calc(100% + 1px);\n    background: url(https://pudding.cool/2021/10/judge-my-music/assets/images/plastic-small.jpg);\n    background-size: contain;\n    mix-blend-mode: screen;\n    opacity: 1;\n    z-index: 1;\n    mix-blend-mode: difference;\n    opacity: 0.5;\n    border-radius: 20px;\n    filter: brightness(1.125) opacity(1);\n  }\n\n  p.text-center {\n    font-size: 11px;\n    opacity: 0.5;\n    font-weight: 300 !important;\n    font-family: Roboto;\n    line-height: 2;\n    color: white;\n  }\n.container {\n\twidth: 100%;\n}\n@media (min-width: 640px) {\n\n\t.container {\n\t\tmax-width: 640px;\n\t}\n}\n@media (min-width: 768px) {\n\n\t.container {\n\t\tmax-width: 768px;\n\t}\n}\n@media (min-width: 1024px) {\n\n\t.container {\n\t\tmax-width: 1024px;\n\t}\n}\n@media (min-width: 1280px) {\n\n\t.container {\n\t\tmax-width: 1280px;\n\t}\n}\n@media (min-width: 1536px) {\n\n\t.container {\n\t\tmax-width: 1536px;\n\t}\n}\n.static {\n\tposition: static;\n}\n.absolute {\n\tposition: absolute;\n}\n.relative {\n\tposition: relative;\n}\n.bottom-1\\.5 {\n\tbottom: 0.375rem;\n}\n.right-1\\.5 {\n\tright: 0.375rem;\n}\n.bottom-1 {\n\tbottom: 0.25rem;\n}\n.right-1 {\n\tright: 0.25rem;\n}\n.flex {\n\tdisplay: flex;\n}\n.inline-flex {\n\tdisplay: inline-flex;\n}\n.min-h-screen {\n\tmin-height: 100vh;\n}\n.w-72 {\n\twidth: 18rem;\n}\n.w-16 {\n\twidth: 4rem;\n}\n.flex-1 {\n\tflex: 1 1 0%;\n}\n.cursor-\\[ne-resize\\] {\n\tcursor: ne-resize;\n}\n.flex-col {\n\tflex-direction: column;\n}\n.items-center {\n\talign-items: center;\n}\n.justify-center {\n\tjustify-content: center;\n}\n.justify-between {\n\tjustify-content: space-between;\n}\n.space-y-3 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-y-reverse: 0;\n\tmargin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));\n\tmargin-bottom: calc(0.75rem * var(--tw-space-y-reverse));\n}\n.space-x-4 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-x-reverse: 0;\n\tmargin-right: calc(1rem * var(--tw-space-x-reverse));\n\tmargin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.rounded-md {\n\tborder-radius: 0.375rem;\n}\n.border {\n\tborder-width: 1px;\n}\n.bg-gray-700 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(55, 65, 81, var(--tw-bg-opacity));\n}\n.p-5 {\n\tpadding: 1.25rem;\n}\n.px-8 {\n\tpadding-left: 2rem;\n\tpadding-right: 2rem;\n}\n.py-4 {\n\tpadding-top: 1rem;\n\tpadding-bottom: 1rem;\n}\n.text-center {\n\ttext-align: center;\n}\n.text-xs {\n\tfont-size: 0.75rem;\n\tline-height: 1rem;\n}\n.font-bold {\n\tfont-weight: 700;\n}\n.text-green-400 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(52, 211, 153, var(--tw-text-opacity));\n}\n.text-white {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.underline {\n\ttext-decoration: underline;\n}\n.shadow-sm {\n\t--tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.transition-shadow {\n\ttransition-property: box-shadow;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\n.animated-underline {\n    background-image: linear-gradient(#33333300, #33333300),\n      linear-gradient(to right, #00e0f3, #00c4fd);\n    background-size: 100% 2px, 0 2px;\n    background-position: 100% 100%, 0 100%;\n    background-repeat: no-repeat;\n    transition: background-size 0.3s ease;\n  }\n.animated-underline:hover,\n  .animated-underline:focus {\n    background-size: 0 2px, 100% 2px;\n  }\n\n@media (max-width: 630px) {\n  a.container {\n    width: 65% !important;\n    padding: 30px 20px !important;\n    height: auto !important;\n}\np.font-bold.component {\n  font-size: 18px;\n}\n\n.text-xs {\n  font-size: 12px !important;\n  letter-spacing: 3px !important;\n}\np.font-bold.album {\n  font-size: 10px !important;\n}\n\n}\n\n.hover\\:text-blue-500:hover {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(59, 130, 246, var(--tw-text-opacity));\n}\n\n.hover\\:text-primary-500:hover {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(0, 196, 253, var(--tw-text-opacity));\n}\n\n.hover\\:text-primary-400:hover {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(0, 224, 243, var(--tw-text-opacity));\n}\n\n.hover\\:text-green-400:hover {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(52, 211, 153, var(--tw-text-opacity));\n}\n\n.hover\\:shadow-md:hover {\n\t--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n\n", "",{"version":3,"sources":["webpack://styles/globals.css","webpack://styles/%3Cinput%20css%20pkGgWY%3E","webpack://styles/%3Cinput%20css%20dFqGnl%3E","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n  /* inter var - latin */\n  @font-face {\n    font-family: \"Inter\";\n    font-style: normal;\n    font-weight: 100 900;\n    font-display: optional;\n    src: url(\"/fonts/inter-var-latin.woff2\") format(\"woff2\");\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\n      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,\n      U+2215, U+FEFF, U+FFFD;\n  }\n\n  .toptitle {\n    position: absolute;\n    top: 10px;\n    z-index: 5;\n    padding: 5px;\n    line-height: 1;\n  }\n\n  /* Write your own custom base styles here */\n  h1 {\n    @apply text-3xl font-bold md:text-5xl font-primary;\n  }\n\n  h1.text-center {\n    font-family: \"DM Sans\";\n    font-family: Segoe UI;\n    letter-spacing: 5px;\n    font-size: 24px;\n    font-weight: 400;\n    line-height: 1.5;\n    text-transform: uppercase;\n  }\n\n  h2 {\n    @apply text-2xl font-bold md:text-4xl font-primary;\n  }\n\n  h3 {\n    @apply text-xl font-bold md:text-3xl font-primary;\n  }\n\n  h3.text-center {\n    color: black;\n    font-size: 20px;\n    font-family: \"Inter\";\n    font-weight: 600;\n    letter-spacing: 1px;\n  }\n\n  h4 {\n    @apply text-lg font-bold font-primary;\n  }\n\n  p.font-bold.component {\n    font-size: 27px;\n    text-transform: uppercase;\n    font-family: \"Inter\";\n    letter-spacing: 2px;\n    line-height: 1;\n    margin-top: 6px;\n    margin-bottom: 8px;\n    font-weight: 900 !important;\n    color: #fff;\n    filter: drop-shadow(0.4025px 0.8425px 0.325px black);\n    background-size: cover;\n    background-position: 0% 50%;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -webkit-text-stroke-width: 0;\n    -webkit-text-stroke-color: hsl(0deg 0% 20% / 50%);\n    background-image: linear-gradient(45deg, white, #f6f8fa);\n  }\n\n  .text-xs {\n    display: -webkit-box;\n    font-size: 20px !important;\n    line-height: 1.5 !important;\n    font-family: \"DM Sans\";\n    margin: 2px 0 3px 0;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    word-spacing: -0.1em;\n    font-weight: 400;\n    width: 112%;\n    font-family: \"Roboto\", sans-serif;\n    color: #fff;\n    text-transform: uppercase;\n    letter-spacing: 4px;\n  }\n\n  p.font-bold.album {\n    display: -webkit-box;\n    margin: 2px 0 3px 0;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    word-spacing: -0.1em;\n    font-family: FranklinGothic, Lato, sans-serif;\n    font-weight: 400;\n    line-height: 1.5;\n    width: 100%;\n    color: white !important;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    margin-block: 7px;\n    font-size: 12px;\n    font-family: CircularSp, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl,\n      CircularSp-Grek, CircularSp-Deva, var(--fallback-fonts, sans-serif);\n  }\n\n  body {\n    @apply text-sm font-primary md:text-base;\n  }\n\n  .layout {\n    /* 750px */\n    /* max-width: 43.75rem; */\n\n    /* 1100px */\n    max-width: 68.75rem;\n    @apply w-11/12 mx-auto;\n  }\n\n  .shadow-sm {\n  }\n\n  body {\n    background-image: url(\"/img/aasd.jpg\");\n    background-image: url(\"/img/dogsbg2.jpg\");\n    background-size: cover;\n    width: 100%;\n    height: 100%;\n  }\n\n  .w-bg {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    z-index: -1;\n  }\n  img.w-img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  a.container {\n    position: relative;\n    width: 50% !important;\n    margin: auto !important;\n    padding: 30px !important;\n    color: white;\n    box-shadow: -0.2em -0.125em 0.125em rgb(0 0 0 / 25%),\n      0 0 0 0.04em rgb(0 0 0 / 30%), 0.02em 0.02em 0.02em rgb(0 0 0 / 40%) inset,\n      -0.05em -0.05em 0.02em rgb(255 255 255 / 80%) inset !important;\n    background-color: #eee;\n    border-radius: 15px;\n    border: 2px outset rgba(255, 255, 255, 0.3);\n    backdrop-filter: blur(20px);\n    background-image: linear-gradient(\n      145deg,\n      rgba(255, 255, 255, 0.15),\n      transparent\n    );\n    background-color: rgba(0, 0, 0, 0.05);\n    background-image: linear-gradient(\n      145deg,\n      rgba(255, 255, 255, 0.4) 0%,\n      rgba(255, 255, 255, 0.1) 100%\n    );\n  }\n\n  .w-16 {\n    width: 45% !important;\n    border-radius: 20px;\n    filter: saturate(1.025) contrast(1.015)\n      drop-shadow(0.125px 0.25px 0.25px black);\n  }\n\n  img.w-16.shadow-sm {\n    display: flex !important;\n    position: relative !important;\n    width: auto !important;\n    height: 60% !important;\n    object-fit: cover !important;\n  }\n\n  .w-16::before {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    content: \"\";\n    width: calc(100% + 0px);\n    height: calc(100% + 1px);\n    background: url(https://pudding.cool/2021/10/judge-my-music/assets/images/plastic-small.jpg);\n    background-size: contain;\n    mix-blend-mode: screen;\n    opacity: 1;\n    z-index: 1;\n    mix-blend-mode: difference;\n    opacity: 0.5;\n    border-radius: 20px;\n    filter: brightness(1.125) opacity(1);\n  }\n\n  p.text-center {\n    font-size: 11px;\n    opacity: 0.5;\n    font-weight: 300 !important;\n    font-family: Roboto;\n    line-height: 2;\n    color: white;\n  }\n}\n\n@media (max-width: 630px) {\n  a.container {\n    width: 65% !important;\n    padding: 30px 20px !important;\n    height: auto !important;\n}\np.font-bold.component {\n  font-size: 18px;\n}\n\n.text-xs {\n  font-size: 12px !important;\n  letter-spacing: 3px !important;\n}\np.font-bold.album {\n  font-size: 10px !important;\n}\n\n}\n\n\n\n\n\n@layer utilities {\n  .animated-underline {\n    background-image: linear-gradient(#33333300, #33333300),\n      linear-gradient(to right, #00e0f3, #00c4fd);\n    background-size: 100% 2px, 0 2px;\n    background-position: 100% 100%, 0 100%;\n    background-repeat: no-repeat;\n    transition: background-size 0.3s ease;\n  }\n  .animated-underline:hover,\n  .animated-underline:focus {\n    background-size: 0 2px, 100% 2px;\n  }\n}\n\n\n","/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\ttab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n","/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"); /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: theme('colors.gray.400', #a1a1aa);\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n \n:-moz-focusring {\n\toutline: auto;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n",null],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNMO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsc0JBQXNCLDBEQUFtQjtBQUN6QztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsc0JBQXNCLDBEQUFtQjtBQUN6QztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsc0JBQXNCLDBEQUFtQjtBQUN6QztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FB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V0FBVyxPQUFPLEtBQUssYUFBYSxhQUFhLE9BQU8sS0FBSyxXQUFXLFVBQVUsT0FBTyxNQUFNLGFBQWEsV0FBVyxVQUFVLE9BQU8sTUFBTSxNQUFNLFNBQVMsTUFBTSxLQUFLLHVCQUF1Qix1QkFBdUIsUUFBUSxPQUFPLE1BQU0sS0FBSyxhQUFhLGFBQWEsT0FBTyw0QkFBNEIsTUFBTSxPQUFPLHVCQUF1QixxQkFBcUIsdUJBQXVCLHVCQUF1QixRQUFRLE1BQU0sTUFBTSxLQUFLLGFBQWEsT0FBTyxZQUFZLE1BQU0sS0FBSyxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxXQUFXLFdBQVcsUUFBUSxNQUFNLFdBQVcsV0FBVyxRQUFRLE1BQU0sV0FBVyxPQUFPLFVBQVUsTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLGFBQWEsT0FBTyxVQUFVLGFBQWEsYUFBYSxPQUFPLE9BQU8sTUFBTSxLQUFLLFdBQVcsWUFBWSxPQUFPLFVBQVUsTUFBTSxTQUFTLFdBQVcsWUFBWSxXQUFXLE9BQU8sU0FBUyxNQUFNLFFBQVEsYUFBYSxRQUFRLG1CQUFtQixNQUFNLFlBQVkscUJBQXFCLHVCQUF1QixRQUFRLFNBQVMsTUFBTSxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxNQUFNLEtBQUssYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sV0FBVyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxXQUFXLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxPQUFPLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sUUFBUSxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sT0FBTyxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsV0FBVyxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssT0FBTyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLFFBQVEsS0FBSyxXQUFXLFdBQVcsT0FBTyxNQUFNLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFdBQVcsYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLE9BQU8sT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsUUFBUSxRQUFRLEtBQUssV0FBVyxXQUFXLE9BQU8sTUFBTSxPQUFPLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFdBQVcsYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLE9BQU8sT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLE9BQU8sUUFBUSxLQUFLLFdBQVcsV0FBVyxXQUFXLFFBQVEsUUFBUSxLQUFLLFVBQVUsV0FBVyxPQUFPLE1BQU0sT0FBTyxNQUFNLEtBQUssYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sT0FBTyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsU0FBUyxLQUFLLFlBQVksU0FBUyxLQUFLLE9BQU8sS0FBSyxhQUFhLGFBQWEsTUFBTSxPQUFPLFFBQVEsS0FBSyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsUUFBUSxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxLQUFLLFdBQVcsT0FBTyxRQUFRLE9BQU8sS0FBSyxXQUFXLE9BQU8sUUFBUSxPQUFPLEtBQUssV0FBVyxPQUFPLFFBQVEsT0FBTyxLQUFLLFdBQVcsT0FBTyxRQUFRLE9BQU8sS0FBSyxXQUFXLE9BQU8sUUFBUSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0s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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssR0FBRzs7QUFFUixrREFBa0Q7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EsU0FBUztBQUNULHdCQUF3QjtBQUN4QjtBQUNBLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEI7QUFDQSxTQUFTO0FBQ1QseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNULHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCxrQ0FBa0M7QUFDbEM7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkRBQTJEOztBQUUzRDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLGtCQUFrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjs7O0FBR2xCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOzs7QUFHSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkhBQTJIO0FBQzNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0VBQW9FOztBQUVwRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLFdBQVcsR0FBRztBQUNkLFdBQVcsR0FBRztBQUNkLFdBQVcsZUFBZTtBQUMxQixXQUFXLEdBQUc7QUFDZCxXQUFXLEdBQUc7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEdBQUc7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssR0FBRztBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25COztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsMkRBQTJELFVBQVU7QUFDckUseUJBQXlCLFVBQVU7QUFDbkM7QUFDQSxhQUFhLFVBQVU7QUFDdkI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixXQUFXLEdBQUc7QUFDZDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw2REFBNkQ7QUFDN0Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFdBQVc7QUFDdEIsV0FBVyxHQUFHO0FBQ2Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sNENBQTRDOztBQUU1Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGlCQUFpQjtBQUNyQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhDQUE4QztBQUM5Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwREFBMEQ7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBLGNBQWM7QUFDZCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ2xyQ2E7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDLENBQUM7QUFDRixFQUFFLHVKQUFzRTtBQUN4RTs7Ozs7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbmV4dC1zZW8uY29uZmlnLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC1zZW8vbGliL25leHQtc2VvLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzPzYxMzgiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2hlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvanN4LWRldi1ydW50aW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGl0bGUgPSAnU3BvdGlmeSBOb3cgUGxheWluZyB3aXRoIE5leHQuanMnO1xyXG5jb25zdCBkZXNjcmlwdGlvbiA9ICdBIHNwb3RpZnkgQVBJIHVzaW5nIE5leHQuanMnO1xyXG5cclxuY29uc3QgU0VPID0ge1xyXG4gICAgdGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIC8vIGNhbm9uaWNhbDogJ2h0dHBzOi8vdGhlb2RvcnVzY2xhcmVuY2UuY29tJyxcclxuICAgIG9wZW5HcmFwaDoge1xyXG4gICAgICAgIHR5cGU6ICd3ZWJzaXRlJyxcclxuICAgICAgICBsb2NhbGU6ICdlbl9JRScsXHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly90aGVvZG9ydXNjbGFyZW5jZS5jb20nLFxyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3RoZW9kb3J1c2NsYXJlbmNlLmNvbS9mYXZpY29uL21zLWljb24tMTQ0eDE0NC5wbmcnLFxyXG4gICAgICAgICAgICAgICAgYWx0OiB0aXRsZSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNDQsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0NCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNFTztcclxuIiwiaW1wb3J0IHsgRGVmYXVsdFNlbyB9IGZyb20gJ25leHQtc2VvJztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCBTRU8gZnJvbSAnLi4vbmV4dC1zZW8uY29uZmlnJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxEZWZhdWx0U2VvIHsuLi5TRU99IC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxudmFyIF9leGNsdWRlZCR6ID0gW1wia2V5T3ZlcnJpZGVcIl0sXG4gIF9leGNsdWRlZDIkMiA9IFtcImNyb3NzT3JpZ2luXCJdO1xudmFyIGRlZmF1bHRzID0ge1xuICB0ZW1wbGF0ZVRpdGxlOiAnJyxcbiAgbm9pbmRleDogZmFsc2UsXG4gIG5vZm9sbG93OiBmYWxzZSxcbiAgbm9yb2JvdHM6IGZhbHNlLFxuICBkZWZhdWx0T3BlbkdyYXBoSW1hZ2VXaWR0aDogMCxcbiAgZGVmYXVsdE9wZW5HcmFwaEltYWdlSGVpZ2h0OiAwLFxuICBkZWZhdWx0T3BlbkdyYXBoVmlkZW9XaWR0aDogMCxcbiAgZGVmYXVsdE9wZW5HcmFwaFZpZGVvSGVpZ2h0OiAwXG59O1xudmFyIGJ1aWxkT3BlbkdyYXBoTWVkaWFUYWdzID0gZnVuY3Rpb24gYnVpbGRPcGVuR3JhcGhNZWRpYVRhZ3MobWVkaWFUeXBlLCBtZWRpYSwgX3RlbXApIHtcbiAgaWYgKG1lZGlhID09PSB2b2lkIDApIHtcbiAgICBtZWRpYSA9IFtdO1xuICB9XG4gIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgZGVmYXVsdFdpZHRoID0gX3JlZi5kZWZhdWx0V2lkdGgsXG4gICAgZGVmYXVsdEhlaWdodCA9IF9yZWYuZGVmYXVsdEhlaWdodDtcbiAgcmV0dXJuIG1lZGlhLnJlZHVjZShmdW5jdGlvbiAodGFncywgbWVkaXVtLCBpbmRleCkge1xuICAgIHRhZ3MucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgIGtleTogXCJvZzpcIiArIG1lZGlhVHlwZSArIFwiOjBcIiArIGluZGV4LFxuICAgICAgcHJvcGVydHk6IFwib2c6XCIgKyBtZWRpYVR5cGUsXG4gICAgICBjb250ZW50OiBtZWRpdW0udXJsXG4gICAgfSkpO1xuICAgIGlmIChtZWRpdW0uYWx0KSB7XG4gICAgICB0YWdzLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJvZzpcIiArIG1lZGlhVHlwZSArIFwiOmFsdDBcIiArIGluZGV4LFxuICAgICAgICBwcm9wZXJ0eTogXCJvZzpcIiArIG1lZGlhVHlwZSArIFwiOmFsdFwiLFxuICAgICAgICBjb250ZW50OiBtZWRpdW0uYWx0XG4gICAgICB9KSk7XG4gICAgfVxuICAgIGlmIChtZWRpdW0uc2VjdXJlVXJsKSB7XG4gICAgICB0YWdzLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJvZzpcIiArIG1lZGlhVHlwZSArIFwiOnNlY3VyZV91cmwwXCIgKyBpbmRleCxcbiAgICAgICAgcHJvcGVydHk6IFwib2c6XCIgKyBtZWRpYVR5cGUgKyBcIjpzZWN1cmVfdXJsXCIsXG4gICAgICAgIGNvbnRlbnQ6IG1lZGl1bS5zZWN1cmVVcmwudG9TdHJpbmcoKVxuICAgICAgfSkpO1xuICAgIH1cbiAgICBpZiAobWVkaXVtLnR5cGUpIHtcbiAgICAgIHRhZ3MucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcIm9nOlwiICsgbWVkaWFUeXBlICsgXCI6dHlwZTBcIiArIGluZGV4LFxuICAgICAgICBwcm9wZXJ0eTogXCJvZzpcIiArIG1lZGlhVHlwZSArIFwiOnR5cGVcIixcbiAgICAgICAgY29udGVudDogbWVkaXVtLnR5cGUudG9TdHJpbmcoKVxuICAgICAgfSkpO1xuICAgIH1cbiAgICBpZiAobWVkaXVtLndpZHRoKSB7XG4gICAgICB0YWdzLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJvZzpcIiArIG1lZGlhVHlwZSArIFwiOndpZHRoMFwiICsgaW5kZXgsXG4gICAgICAgIHByb3BlcnR5OiBcIm9nOlwiICsgbWVkaWFUeXBlICsgXCI6d2lkdGhcIixcbiAgICAgICAgY29udGVudDogbWVkaXVtLndpZHRoLnRvU3RyaW5nKClcbiAgICAgIH0pKTtcbiAgICB9IGVsc2UgaWYgKGRlZmF1bHRXaWR0aCkge1xuICAgICAgdGFncy5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwib2c6XCIgKyBtZWRpYVR5cGUgKyBcIjp3aWR0aDBcIiArIGluZGV4LFxuICAgICAgICBwcm9wZXJ0eTogXCJvZzpcIiArIG1lZGlhVHlwZSArIFwiOndpZHRoXCIsXG4gICAgICAgIGNvbnRlbnQ6IGRlZmF1bHRXaWR0aC50b1N0cmluZygpXG4gICAgICB9KSk7XG4gICAgfVxuICAgIGlmIChtZWRpdW0uaGVpZ2h0KSB7XG4gICAgICB0YWdzLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJvZzpcIiArIG1lZGlhVHlwZSArIFwiOmhlaWdodFwiICsgaW5kZXgsXG4gICAgICAgIHByb3BlcnR5OiBcIm9nOlwiICsgbWVkaWFUeXBlICsgXCI6aGVpZ2h0XCIsXG4gICAgICAgIGNvbnRlbnQ6IG1lZGl1bS5oZWlnaHQudG9TdHJpbmcoKVxuICAgICAgfSkpO1xuICAgIH0gZWxzZSBpZiAoZGVmYXVsdEhlaWdodCkge1xuICAgICAgdGFncy5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwib2c6XCIgKyBtZWRpYVR5cGUgKyBcIjpoZWlnaHRcIiArIGluZGV4LFxuICAgICAgICBwcm9wZXJ0eTogXCJvZzpcIiArIG1lZGlhVHlwZSArIFwiOmhlaWdodFwiLFxuICAgICAgICBjb250ZW50OiBkZWZhdWx0SGVpZ2h0LnRvU3RyaW5nKClcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhZ3M7XG4gIH0sIFtdKTtcbn07XG52YXIgYnVpbGRUYWdzID0gZnVuY3Rpb24gYnVpbGRUYWdzKGNvbmZpZykge1xuICB2YXIgX2NvbmZpZyRvcGVuR3JhcGgsIF9jb25maWckb3BlbkdyYXBoMywgX2NvbmZpZyRhZGRpdGlvbmFsTGluO1xuICB2YXIgdGFnc1RvUmVuZGVyID0gW107XG4gIGlmIChjb25maWcudGl0bGVUZW1wbGF0ZSkge1xuICAgIGRlZmF1bHRzLnRlbXBsYXRlVGl0bGUgPSBjb25maWcudGl0bGVUZW1wbGF0ZTtcbiAgfVxuICB2YXIgdXBkYXRlZFRpdGxlID0gJyc7XG4gIGlmIChjb25maWcudGl0bGUpIHtcbiAgICB1cGRhdGVkVGl0bGUgPSBjb25maWcudGl0bGU7XG4gICAgaWYgKGRlZmF1bHRzLnRlbXBsYXRlVGl0bGUpIHtcbiAgICAgIHVwZGF0ZWRUaXRsZSA9IGRlZmF1bHRzLnRlbXBsYXRlVGl0bGUucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdXBkYXRlZFRpdGxlO1xuICAgICAgfSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGNvbmZpZy5kZWZhdWx0VGl0bGUpIHtcbiAgICB1cGRhdGVkVGl0bGUgPSBjb25maWcuZGVmYXVsdFRpdGxlO1xuICB9XG4gIGlmICh1cGRhdGVkVGl0bGUpIHtcbiAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aXRsZVwiLCB7XG4gICAgICBrZXk6IFwidGl0bGVcIlxuICAgIH0sIHVwZGF0ZWRUaXRsZSkpO1xuICB9XG4gIHZhciBub2luZGV4ID0gY29uZmlnLm5vaW5kZXggPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRzLm5vaW5kZXggfHwgY29uZmlnLmRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vSW5kZXggOiBjb25maWcubm9pbmRleDtcbiAgdmFyIG5vZm9sbG93ID0gY29uZmlnLm5vZm9sbG93ID09PSB1bmRlZmluZWQgPyBkZWZhdWx0cy5ub2ZvbGxvdyB8fCBjb25maWcuZGFuZ2Vyb3VzbHlTZXRBbGxQYWdlc1RvTm9Gb2xsb3cgOiBjb25maWcubm9mb2xsb3c7XG4gIHZhciBub3JvYm90cyA9IGNvbmZpZy5ub3JvYm90cyB8fCBkZWZhdWx0cy5ub3JvYm90cztcbiAgdmFyIHJvYm90c1BhcmFtcyA9ICcnO1xuICBpZiAoY29uZmlnLnJvYm90c1Byb3BzKSB7XG4gICAgdmFyIF9jb25maWckcm9ib3RzUHJvcHMgPSBjb25maWcucm9ib3RzUHJvcHMsXG4gICAgICBub3NuaXBwZXQgPSBfY29uZmlnJHJvYm90c1Byb3BzLm5vc25pcHBldCxcbiAgICAgIG1heFNuaXBwZXQgPSBfY29uZmlnJHJvYm90c1Byb3BzLm1heFNuaXBwZXQsXG4gICAgICBtYXhJbWFnZVByZXZpZXcgPSBfY29uZmlnJHJvYm90c1Byb3BzLm1heEltYWdlUHJldmlldyxcbiAgICAgIG1heFZpZGVvUHJldmlldyA9IF9jb25maWckcm9ib3RzUHJvcHMubWF4VmlkZW9QcmV2aWV3LFxuICAgICAgbm9hcmNoaXZlID0gX2NvbmZpZyRyb2JvdHNQcm9wcy5ub2FyY2hpdmUsXG4gICAgICBub2ltYWdlaW5kZXggPSBfY29uZmlnJHJvYm90c1Byb3BzLm5vaW1hZ2VpbmRleCxcbiAgICAgIG5vdHJhbnNsYXRlID0gX2NvbmZpZyRyb2JvdHNQcm9wcy5ub3RyYW5zbGF0ZSxcbiAgICAgIHVuYXZhaWxhYmxlQWZ0ZXIgPSBfY29uZmlnJHJvYm90c1Byb3BzLnVuYXZhaWxhYmxlQWZ0ZXI7XG4gICAgcm9ib3RzUGFyYW1zID0gXCJcIiArIChub3NuaXBwZXQgPyAnLG5vc25pcHBldCcgOiAnJykgKyAobWF4U25pcHBldCA/IFwiLG1heC1zbmlwcGV0OlwiICsgbWF4U25pcHBldCA6ICcnKSArIChtYXhJbWFnZVByZXZpZXcgPyBcIixtYXgtaW1hZ2UtcHJldmlldzpcIiArIG1heEltYWdlUHJldmlldyA6ICcnKSArIChub2FyY2hpdmUgPyAnLG5vYXJjaGl2ZScgOiAnJykgKyAodW5hdmFpbGFibGVBZnRlciA/IFwiLHVuYXZhaWxhYmxlX2FmdGVyOlwiICsgdW5hdmFpbGFibGVBZnRlciA6ICcnKSArIChub2ltYWdlaW5kZXggPyAnLG5vaW1hZ2VpbmRleCcgOiAnJykgKyAobWF4VmlkZW9QcmV2aWV3ID8gXCIsbWF4LXZpZGVvLXByZXZpZXc6XCIgKyBtYXhWaWRlb1ByZXZpZXcgOiAnJykgKyAobm90cmFuc2xhdGUgPyAnLG5vdHJhbnNsYXRlJyA6ICcnKTtcbiAgfVxuICBpZiAoY29uZmlnLm5vcm9ib3RzKSB7XG4gICAgZGVmYXVsdHMubm9yb2JvdHMgPSB0cnVlO1xuICB9XG4gIGlmIChub2luZGV4IHx8IG5vZm9sbG93KSB7XG4gICAgaWYgKGNvbmZpZy5kYW5nZXJvdXNseVNldEFsbFBhZ2VzVG9Ob0luZGV4KSB7XG4gICAgICBkZWZhdWx0cy5ub2luZGV4ID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5kYW5nZXJvdXNseVNldEFsbFBhZ2VzVG9Ob0ZvbGxvdykge1xuICAgICAgZGVmYXVsdHMubm9mb2xsb3cgPSB0cnVlO1xuICAgIH1cbiAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgIGtleTogXCJyb2JvdHNcIixcbiAgICAgIG5hbWU6IFwicm9ib3RzXCIsXG4gICAgICBjb250ZW50OiAobm9pbmRleCA/ICdub2luZGV4JyA6ICdpbmRleCcpICsgXCIsXCIgKyAobm9mb2xsb3cgPyAnbm9mb2xsb3cnIDogJ2ZvbGxvdycpICsgcm9ib3RzUGFyYW1zXG4gICAgfSkpO1xuICB9IGVsc2UgaWYgKCFub3JvYm90cyB8fCByb2JvdHNQYXJhbXMpIHtcbiAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgIGtleTogXCJyb2JvdHNcIixcbiAgICAgIG5hbWU6IFwicm9ib3RzXCIsXG4gICAgICBjb250ZW50OiBcImluZGV4LGZvbGxvd1wiICsgcm9ib3RzUGFyYW1zXG4gICAgfSkpO1xuICB9XG4gIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgIGtleTogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgbmFtZTogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgY29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfSkpO1xuICB9XG4gIGlmIChjb25maWcudGhlbWVDb2xvcikge1xuICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAga2V5OiBcInRoZW1lLWNvbG9yXCIsXG4gICAgICBuYW1lOiBcInRoZW1lLWNvbG9yXCIsXG4gICAgICBjb250ZW50OiBjb25maWcudGhlbWVDb2xvclxuICAgIH0pKTtcbiAgfVxuICBpZiAoY29uZmlnLm1vYmlsZUFsdGVybmF0ZSkge1xuICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgcmVsOiBcImFsdGVybmF0ZVwiLFxuICAgICAga2V5OiBcIm1vYmlsZUFsdGVybmF0ZVwiLFxuICAgICAgbWVkaWE6IGNvbmZpZy5tb2JpbGVBbHRlcm5hdGUubWVkaWEsXG4gICAgICBocmVmOiBjb25maWcubW9iaWxlQWx0ZXJuYXRlLmhyZWZcbiAgICB9KSk7XG4gIH1cbiAgaWYgKGNvbmZpZy5sYW5ndWFnZUFsdGVybmF0ZXMgJiYgY29uZmlnLmxhbmd1YWdlQWx0ZXJuYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgY29uZmlnLmxhbmd1YWdlQWx0ZXJuYXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChsYW5ndWFnZUFsdGVybmF0ZSkge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgIHJlbDogXCJhbHRlcm5hdGVcIixcbiAgICAgICAga2V5OiBcImxhbmd1YWdlQWx0ZXJuYXRlLVwiICsgbGFuZ3VhZ2VBbHRlcm5hdGUuaHJlZkxhbmcsXG4gICAgICAgIGhyZWZMYW5nOiBsYW5ndWFnZUFsdGVybmF0ZS5ocmVmTGFuZyxcbiAgICAgICAgaHJlZjogbGFuZ3VhZ2VBbHRlcm5hdGUuaHJlZlxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9XG4gIGlmIChjb25maWcudHdpdHRlcikge1xuICAgIGlmIChjb25maWcudHdpdHRlci5jYXJkVHlwZSkge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJ0d2l0dGVyOmNhcmRcIixcbiAgICAgICAgbmFtZTogXCJ0d2l0dGVyOmNhcmRcIixcbiAgICAgICAgY29udGVudDogY29uZmlnLnR3aXR0ZXIuY2FyZFR5cGVcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy50d2l0dGVyLnNpdGUpIHtcbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwidHdpdHRlcjpzaXRlXCIsXG4gICAgICAgIG5hbWU6IFwidHdpdHRlcjpzaXRlXCIsXG4gICAgICAgIGNvbnRlbnQ6IGNvbmZpZy50d2l0dGVyLnNpdGVcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy50d2l0dGVyLmhhbmRsZSkge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJ0d2l0dGVyOmNyZWF0b3JcIixcbiAgICAgICAgbmFtZTogXCJ0d2l0dGVyOmNyZWF0b3JcIixcbiAgICAgICAgY29udGVudDogY29uZmlnLnR3aXR0ZXIuaGFuZGxlXG4gICAgICB9KSk7XG4gICAgfVxuICB9XG4gIGlmIChjb25maWcuZmFjZWJvb2spIHtcbiAgICBpZiAoY29uZmlnLmZhY2Vib29rLmFwcElkKSB7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcImZiOmFwcF9pZFwiLFxuICAgICAgICBwcm9wZXJ0eTogXCJmYjphcHBfaWRcIixcbiAgICAgICAgY29udGVudDogY29uZmlnLmZhY2Vib29rLmFwcElkXG4gICAgICB9KSk7XG4gICAgfVxuICB9XG4gIGlmICgoX2NvbmZpZyRvcGVuR3JhcGggPSBjb25maWcub3BlbkdyYXBoKSAhPSBudWxsICYmIF9jb25maWckb3BlbkdyYXBoLnRpdGxlIHx8IHVwZGF0ZWRUaXRsZSkge1xuICAgIHZhciBfY29uZmlnJG9wZW5HcmFwaDI7XG4gICAgdGFnc1RvUmVuZGVyLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICBrZXk6IFwib2c6dGl0bGVcIixcbiAgICAgIHByb3BlcnR5OiBcIm9nOnRpdGxlXCIsXG4gICAgICBjb250ZW50OiAoKF9jb25maWckb3BlbkdyYXBoMiA9IGNvbmZpZy5vcGVuR3JhcGgpID09IG51bGwgPyB2b2lkIDAgOiBfY29uZmlnJG9wZW5HcmFwaDIudGl0bGUpIHx8IHVwZGF0ZWRUaXRsZVxuICAgIH0pKTtcbiAgfVxuICBpZiAoKF9jb25maWckb3BlbkdyYXBoMyA9IGNvbmZpZy5vcGVuR3JhcGgpICE9IG51bGwgJiYgX2NvbmZpZyRvcGVuR3JhcGgzLmRlc2NyaXB0aW9uIHx8IGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgIHZhciBfY29uZmlnJG9wZW5HcmFwaDQ7XG4gICAgdGFnc1RvUmVuZGVyLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICBrZXk6IFwib2c6ZGVzY3JpcHRpb25cIixcbiAgICAgIHByb3BlcnR5OiBcIm9nOmRlc2NyaXB0aW9uXCIsXG4gICAgICBjb250ZW50OiAoKF9jb25maWckb3BlbkdyYXBoNCA9IGNvbmZpZy5vcGVuR3JhcGgpID09IG51bGwgPyB2b2lkIDAgOiBfY29uZmlnJG9wZW5HcmFwaDQuZGVzY3JpcHRpb24pIHx8IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH0pKTtcbiAgfVxuICBpZiAoY29uZmlnLm9wZW5HcmFwaCkge1xuICAgIGlmIChjb25maWcub3BlbkdyYXBoLnVybCB8fCBjb25maWcuY2Fub25pY2FsKSB7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcIm9nOnVybFwiLFxuICAgICAgICBwcm9wZXJ0eTogXCJvZzp1cmxcIixcbiAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC51cmwgfHwgY29uZmlnLmNhbm9uaWNhbFxuICAgICAgfSkpO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC50eXBlKSB7XG4gICAgICB2YXIgdHlwZSA9IGNvbmZpZy5vcGVuR3JhcGgudHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJvZzp0eXBlXCIsXG4gICAgICAgIHByb3BlcnR5OiBcIm9nOnR5cGVcIixcbiAgICAgICAgY29udGVudDogdHlwZVxuICAgICAgfSkpO1xuICAgICAgaWYgKHR5cGUgPT09ICdwcm9maWxlJyAmJiBjb25maWcub3BlbkdyYXBoLnByb2ZpbGUpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgucHJvZmlsZS5maXJzdE5hbWUpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJwcm9maWxlOmZpcnN0X25hbWVcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcInByb2ZpbGU6Zmlyc3RfbmFtZVwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5wcm9maWxlLmZpcnN0TmFtZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5wcm9maWxlLmxhc3ROYW1lKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwicHJvZmlsZTpsYXN0X25hbWVcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcInByb2ZpbGU6bGFzdF9uYW1lXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLnByb2ZpbGUubGFzdE5hbWVcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgucHJvZmlsZS51c2VybmFtZSkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcInByb2ZpbGU6dXNlcm5hbWVcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcInByb2ZpbGU6dXNlcm5hbWVcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGgucHJvZmlsZS51c2VybmFtZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5wcm9maWxlLmdlbmRlcikge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcInByb2ZpbGU6Z2VuZGVyXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJwcm9maWxlOmdlbmRlclwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5wcm9maWxlLmdlbmRlclxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnYm9vaycgJiYgY29uZmlnLm9wZW5HcmFwaC5ib29rKSB7XG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLmJvb2suYXV0aG9ycyAmJiBjb25maWcub3BlbkdyYXBoLmJvb2suYXV0aG9ycy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25maWcub3BlbkdyYXBoLmJvb2suYXV0aG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChhdXRob3IsIGluZGV4KSB7XG4gICAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBcImJvb2s6YXV0aG9yOjBcIiArIGluZGV4LFxuICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJib29rOmF1dGhvclwiLFxuICAgICAgICAgICAgICBjb250ZW50OiBhdXRob3JcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5ib29rLmlzYm4pIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJib29rOmlzYm5cIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcImJvb2s6aXNiblwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5ib29rLmlzYm5cbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguYm9vay5yZWxlYXNlRGF0ZSkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcImJvb2s6cmVsZWFzZV9kYXRlXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJib29rOnJlbGVhc2VfZGF0ZVwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5ib29rLnJlbGVhc2VEYXRlXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLmJvb2sudGFncyAmJiBjb25maWcub3BlbkdyYXBoLmJvb2sudGFncy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25maWcub3BlbkdyYXBoLmJvb2sudGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcsIGluZGV4KSB7XG4gICAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBcImJvb2s6dGFnOjBcIiArIGluZGV4LFxuICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJib29rOnRhZ1wiLFxuICAgICAgICAgICAgICBjb250ZW50OiB0YWdcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnYXJ0aWNsZScgJiYgY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlKSB7XG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLmFydGljbGUucHVibGlzaGVkVGltZSkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcImFydGljbGU6cHVibGlzaGVkX3RpbWVcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcImFydGljbGU6cHVibGlzaGVkX3RpbWVcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS5wdWJsaXNoZWRUaW1lXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLmFydGljbGUubW9kaWZpZWRUaW1lKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwiYXJ0aWNsZTptb2RpZmllZF90aW1lXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJhcnRpY2xlOm1vZGlmaWVkX3RpbWVcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS5tb2RpZmllZFRpbWVcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS5leHBpcmF0aW9uVGltZSkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcImFydGljbGU6ZXhwaXJhdGlvbl90aW1lXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJhcnRpY2xlOmV4cGlyYXRpb25fdGltZVwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlLmV4cGlyYXRpb25UaW1lXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLmFydGljbGUuYXV0aG9ycyAmJiBjb25maWcub3BlbkdyYXBoLmFydGljbGUuYXV0aG9ycy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25maWcub3BlbkdyYXBoLmFydGljbGUuYXV0aG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChhdXRob3IsIGluZGV4KSB7XG4gICAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBcImFydGljbGU6YXV0aG9yOjBcIiArIGluZGV4LFxuICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJhcnRpY2xlOmF1dGhvclwiLFxuICAgICAgICAgICAgICBjb250ZW50OiBhdXRob3JcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlLnNlY3Rpb24pIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJhcnRpY2xlOnNlY3Rpb25cIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcImFydGljbGU6c2VjdGlvblwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlLnNlY3Rpb25cbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS50YWdzICYmIGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS50YWdzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZywgaW5kZXgpIHtcbiAgICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgICBrZXk6IFwiYXJ0aWNsZTp0YWc6MFwiICsgaW5kZXgsXG4gICAgICAgICAgICAgIHByb3BlcnR5OiBcImFydGljbGU6dGFnXCIsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHRhZ1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCh0eXBlID09PSAndmlkZW8ubW92aWUnIHx8IHR5cGUgPT09ICd2aWRlby5lcGlzb2RlJyB8fCB0eXBlID09PSAndmlkZW8udHZfc2hvdycgfHwgdHlwZSA9PT0gJ3ZpZGVvLm90aGVyJykgJiYgY29uZmlnLm9wZW5HcmFwaC52aWRlbykge1xuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC52aWRlby5hY3RvcnMgJiYgY29uZmlnLm9wZW5HcmFwaC52aWRlby5hY3RvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uZmlnLm9wZW5HcmFwaC52aWRlby5hY3RvcnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0b3IsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoYWN0b3IucHJvZmlsZSkge1xuICAgICAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwidmlkZW86YWN0b3I6MFwiICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgcHJvcGVydHk6IFwidmlkZW86YWN0b3JcIixcbiAgICAgICAgICAgICAgICBjb250ZW50OiBhY3Rvci5wcm9maWxlXG4gICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhY3Rvci5yb2xlKSB7XG4gICAgICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgICAgIGtleTogXCJ2aWRlbzphY3Rvcjpyb2xlOjBcIiArIGluZGV4LFxuICAgICAgICAgICAgICAgIHByb3BlcnR5OiBcInZpZGVvOmFjdG9yOnJvbGVcIixcbiAgICAgICAgICAgICAgICBjb250ZW50OiBhY3Rvci5yb2xlXG4gICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC52aWRlby5kaXJlY3RvcnMgJiYgY29uZmlnLm9wZW5HcmFwaC52aWRlby5kaXJlY3RvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uZmlnLm9wZW5HcmFwaC52aWRlby5kaXJlY3RvcnMuZm9yRWFjaChmdW5jdGlvbiAoZGlyZWN0b3IsIGluZGV4KSB7XG4gICAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBcInZpZGVvOmRpcmVjdG9yOjBcIiArIGluZGV4LFxuICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJ2aWRlbzpkaXJlY3RvclwiLFxuICAgICAgICAgICAgICBjb250ZW50OiBkaXJlY3RvclxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLnZpZGVvLndyaXRlcnMgJiYgY29uZmlnLm9wZW5HcmFwaC52aWRlby53cml0ZXJzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbmZpZy5vcGVuR3JhcGgudmlkZW8ud3JpdGVycy5mb3JFYWNoKGZ1bmN0aW9uICh3cml0ZXIsIGluZGV4KSB7XG4gICAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBcInZpZGVvOndyaXRlcjowXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgcHJvcGVydHk6IFwidmlkZW86d3JpdGVyXCIsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHdyaXRlclxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLnZpZGVvLmR1cmF0aW9uKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwidmlkZW86ZHVyYXRpb25cIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcInZpZGVvOmR1cmF0aW9uXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLnZpZGVvLmR1cmF0aW9uLnRvU3RyaW5nKClcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgudmlkZW8ucmVsZWFzZURhdGUpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJ2aWRlbzpyZWxlYXNlX2RhdGVcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcInZpZGVvOnJlbGVhc2VfZGF0ZVwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC52aWRlby5yZWxlYXNlRGF0ZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC52aWRlby50YWdzICYmIGNvbmZpZy5vcGVuR3JhcGgudmlkZW8udGFncy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25maWcub3BlbkdyYXBoLnZpZGVvLnRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnLCBpbmRleCkge1xuICAgICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICAgIGtleTogXCJ2aWRlbzp0YWc6MFwiICsgaW5kZXgsXG4gICAgICAgICAgICAgIHByb3BlcnR5OiBcInZpZGVvOnRhZ1wiLFxuICAgICAgICAgICAgICBjb250ZW50OiB0YWdcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC52aWRlby5zZXJpZXMpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJ2aWRlbzpzZXJpZXNcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcInZpZGVvOnNlcmllc1wiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC52aWRlby5zZXJpZXNcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gaW1hZ2VzXG4gICAgaWYgKGNvbmZpZy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VXaWR0aCkge1xuICAgICAgZGVmYXVsdHMuZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGggPSBjb25maWcuZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGg7XG4gICAgfVxuICAgIGlmIChjb25maWcuZGVmYXVsdE9wZW5HcmFwaEltYWdlSGVpZ2h0KSB7XG4gICAgICBkZWZhdWx0cy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQgPSBjb25maWcuZGVmYXVsdE9wZW5HcmFwaEltYWdlSGVpZ2h0O1xuICAgIH1cbiAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5pbWFnZXMgJiYgY29uZmlnLm9wZW5HcmFwaC5pbWFnZXMubGVuZ3RoKSB7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaC5hcHBseSh0YWdzVG9SZW5kZXIsIGJ1aWxkT3BlbkdyYXBoTWVkaWFUYWdzKCdpbWFnZScsIGNvbmZpZy5vcGVuR3JhcGguaW1hZ2VzLCB7XG4gICAgICAgIGRlZmF1bHRXaWR0aDogZGVmYXVsdHMuZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGgsXG4gICAgICAgIGRlZmF1bHRIZWlnaHQ6IGRlZmF1bHRzLmRlZmF1bHRPcGVuR3JhcGhJbWFnZUhlaWdodFxuICAgICAgfSkpO1xuICAgIH1cbiAgICAvLyB2aWRlb3NcbiAgICBpZiAoY29uZmlnLmRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoKSB7XG4gICAgICBkZWZhdWx0cy5kZWZhdWx0T3BlbkdyYXBoVmlkZW9XaWR0aCA9IGNvbmZpZy5kZWZhdWx0T3BlbkdyYXBoVmlkZW9XaWR0aDtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5kZWZhdWx0T3BlbkdyYXBoVmlkZW9IZWlnaHQpIHtcbiAgICAgIGRlZmF1bHRzLmRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodCA9IGNvbmZpZy5kZWZhdWx0T3BlbkdyYXBoVmlkZW9IZWlnaHQ7XG4gICAgfVxuICAgIGlmIChjb25maWcub3BlbkdyYXBoLnZpZGVvcyAmJiBjb25maWcub3BlbkdyYXBoLnZpZGVvcy5sZW5ndGgpIHtcbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoLmFwcGx5KHRhZ3NUb1JlbmRlciwgYnVpbGRPcGVuR3JhcGhNZWRpYVRhZ3MoJ3ZpZGVvJywgY29uZmlnLm9wZW5HcmFwaC52aWRlb3MsIHtcbiAgICAgICAgZGVmYXVsdFdpZHRoOiBkZWZhdWx0cy5kZWZhdWx0T3BlbkdyYXBoVmlkZW9XaWR0aCxcbiAgICAgICAgZGVmYXVsdEhlaWdodDogZGVmYXVsdHMuZGVmYXVsdE9wZW5HcmFwaFZpZGVvSGVpZ2h0XG4gICAgICB9KSk7XG4gICAgfVxuICAgIC8vIGF1ZGlvXG4gICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguYXVkaW8pIHtcbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoLmFwcGx5KHRhZ3NUb1JlbmRlciwgYnVpbGRPcGVuR3JhcGhNZWRpYVRhZ3MoJ2F1ZGlvJywgY29uZmlnLm9wZW5HcmFwaC5hdWRpbykpO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5sb2NhbGUpIHtcbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwib2c6bG9jYWxlXCIsXG4gICAgICAgIHByb3BlcnR5OiBcIm9nOmxvY2FsZVwiLFxuICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLmxvY2FsZVxuICAgICAgfSkpO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5zaXRlTmFtZSB8fCBjb25maWcub3BlbkdyYXBoLnNpdGVfbmFtZSkge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJvZzpzaXRlX25hbWVcIixcbiAgICAgICAgcHJvcGVydHk6IFwib2c6c2l0ZV9uYW1lXCIsXG4gICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGguc2l0ZU5hbWUgfHwgY29uZmlnLm9wZW5HcmFwaC5zaXRlX25hbWVcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cbiAgaWYgKGNvbmZpZy5jYW5vbmljYWwpIHtcbiAgICB0YWdzVG9SZW5kZXIucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgIHJlbDogXCJjYW5vbmljYWxcIixcbiAgICAgIGhyZWY6IGNvbmZpZy5jYW5vbmljYWwsXG4gICAgICBrZXk6IFwiY2Fub25pY2FsXCJcbiAgICB9KSk7XG4gIH1cbiAgaWYgKGNvbmZpZy5hZGRpdGlvbmFsTWV0YVRhZ3MgJiYgY29uZmlnLmFkZGl0aW9uYWxNZXRhVGFncy5sZW5ndGggPiAwKSB7XG4gICAgY29uZmlnLmFkZGl0aW9uYWxNZXRhVGFncy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgdmFyIF9yZWYzLCBfcmVmNDtcbiAgICAgIHZhciBrZXlPdmVycmlkZSA9IF9yZWYyLmtleU92ZXJyaWRlLFxuICAgICAgICB0YWcgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMiwgX2V4Y2x1ZGVkJHopO1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCBfZXh0ZW5kcyh7XG4gICAgICAgIGtleTogXCJtZXRhOlwiICsgKChfcmVmMyA9IChfcmVmNCA9IGtleU92ZXJyaWRlICE9IG51bGwgPyBrZXlPdmVycmlkZSA6IHRhZy5uYW1lKSAhPSBudWxsID8gX3JlZjQgOiB0YWcucHJvcGVydHkpICE9IG51bGwgPyBfcmVmMyA6IHRhZy5odHRwRXF1aXYpXG4gICAgICB9LCB0YWcpKSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKChfY29uZmlnJGFkZGl0aW9uYWxMaW4gPSBjb25maWcuYWRkaXRpb25hbExpbmtUYWdzKSAhPSBudWxsICYmIF9jb25maWckYWRkaXRpb25hbExpbi5sZW5ndGgpIHtcbiAgICBjb25maWcuYWRkaXRpb25hbExpbmtUYWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgdmFyIF9yZXN0JGtleU92ZXJyaWRlO1xuICAgICAgdmFyIHRhZ0Nyb3NzT3JpZ2luID0gdGFnLmNyb3NzT3JpZ2luLFxuICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UodGFnLCBfZXhjbHVkZWQyJDIpO1xuICAgICAgdmFyIGNyb3NzT3JpZ2luID0gdGFnQ3Jvc3NPcmlnaW4gPT09ICdhbm9ueW1vdXMnIHx8IHRhZ0Nyb3NzT3JpZ2luID09PSAndXNlLWNyZWRlbnRpYWxzJyB8fCB0YWdDcm9zc09yaWdpbiA9PT0gJycgPyB0YWdDcm9zc09yaWdpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmtcIiwgX2V4dGVuZHMoe1xuICAgICAgICBrZXk6IFwibGlua1wiICsgKChfcmVzdCRrZXlPdmVycmlkZSA9IHJlc3Qua2V5T3ZlcnJpZGUpICE9IG51bGwgPyBfcmVzdCRrZXlPdmVycmlkZSA6IHJlc3QuaHJlZikgKyByZXN0LnJlbFxuICAgICAgfSwgcmVzdCwge1xuICAgICAgICBjcm9zc09yaWdpbjogY3Jvc3NPcmlnaW5cbiAgICAgIH0pKSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHRhZ3NUb1JlbmRlcjtcbn07XG5cbnZhciBXaXRoSGVhZCA9IGZ1bmN0aW9uIFdpdGhIZWFkKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBidWlsZFRhZ3MocHJvcHMpKTtcbn07XG5cbnZhciBEZWZhdWx0U2VvID0gZnVuY3Rpb24gRGVmYXVsdFNlbyhfcmVmKSB7XG4gIHZhciB0aXRsZSA9IF9yZWYudGl0bGUsXG4gICAgdGl0bGVUZW1wbGF0ZSA9IF9yZWYudGl0bGVUZW1wbGF0ZSxcbiAgICBkZWZhdWx0VGl0bGUgPSBfcmVmLmRlZmF1bHRUaXRsZSxcbiAgICB0aGVtZUNvbG9yID0gX3JlZi50aGVtZUNvbG9yLFxuICAgIF9yZWYkZGFuZ2Vyb3VzbHlTZXRBbCA9IF9yZWYuZGFuZ2Vyb3VzbHlTZXRBbGxQYWdlc1RvTm9JbmRleCxcbiAgICBkYW5nZXJvdXNseVNldEFsbFBhZ2VzVG9Ob0luZGV4ID0gX3JlZiRkYW5nZXJvdXNseVNldEFsID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZGFuZ2Vyb3VzbHlTZXRBbCxcbiAgICBfcmVmJGRhbmdlcm91c2x5U2V0QWwyID0gX3JlZi5kYW5nZXJvdXNseVNldEFsbFBhZ2VzVG9Ob0ZvbGxvdyxcbiAgICBkYW5nZXJvdXNseVNldEFsbFBhZ2VzVG9Ob0ZvbGxvdyA9IF9yZWYkZGFuZ2Vyb3VzbHlTZXRBbDIgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRkYW5nZXJvdXNseVNldEFsMixcbiAgICBkZXNjcmlwdGlvbiA9IF9yZWYuZGVzY3JpcHRpb24sXG4gICAgY2Fub25pY2FsID0gX3JlZi5jYW5vbmljYWwsXG4gICAgZmFjZWJvb2sgPSBfcmVmLmZhY2Vib29rLFxuICAgIG9wZW5HcmFwaCA9IF9yZWYub3BlbkdyYXBoLFxuICAgIGFkZGl0aW9uYWxNZXRhVGFncyA9IF9yZWYuYWRkaXRpb25hbE1ldGFUYWdzLFxuICAgIHR3aXR0ZXIgPSBfcmVmLnR3aXR0ZXIsXG4gICAgZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGggPSBfcmVmLmRlZmF1bHRPcGVuR3JhcGhJbWFnZVdpZHRoLFxuICAgIGRlZmF1bHRPcGVuR3JhcGhJbWFnZUhlaWdodCA9IF9yZWYuZGVmYXVsdE9wZW5HcmFwaEltYWdlSGVpZ2h0LFxuICAgIGRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoID0gX3JlZi5kZWZhdWx0T3BlbkdyYXBoVmlkZW9XaWR0aCxcbiAgICBkZWZhdWx0T3BlbkdyYXBoVmlkZW9IZWlnaHQgPSBfcmVmLmRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodCxcbiAgICBtb2JpbGVBbHRlcm5hdGUgPSBfcmVmLm1vYmlsZUFsdGVybmF0ZSxcbiAgICBsYW5ndWFnZUFsdGVybmF0ZXMgPSBfcmVmLmxhbmd1YWdlQWx0ZXJuYXRlcyxcbiAgICBhZGRpdGlvbmFsTGlua1RhZ3MgPSBfcmVmLmFkZGl0aW9uYWxMaW5rVGFncyxcbiAgICByb2JvdHNQcm9wcyA9IF9yZWYucm9ib3RzUHJvcHMsXG4gICAgbm9yb2JvdHMgPSBfcmVmLm5vcm9ib3RzO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoV2l0aEhlYWQsIHtcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgdGl0bGVUZW1wbGF0ZTogdGl0bGVUZW1wbGF0ZSxcbiAgICBkZWZhdWx0VGl0bGU6IGRlZmF1bHRUaXRsZSxcbiAgICB0aGVtZUNvbG9yOiB0aGVtZUNvbG9yLFxuICAgIGRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vSW5kZXg6IGRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vSW5kZXgsXG4gICAgZGFuZ2Vyb3VzbHlTZXRBbGxQYWdlc1RvTm9Gb2xsb3c6IGRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vRm9sbG93LFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICBjYW5vbmljYWw6IGNhbm9uaWNhbCxcbiAgICBmYWNlYm9vazogZmFjZWJvb2ssXG4gICAgb3BlbkdyYXBoOiBvcGVuR3JhcGgsXG4gICAgYWRkaXRpb25hbE1ldGFUYWdzOiBhZGRpdGlvbmFsTWV0YVRhZ3MsXG4gICAgdHdpdHRlcjogdHdpdHRlcixcbiAgICBkZWZhdWx0T3BlbkdyYXBoSW1hZ2VXaWR0aDogZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGgsXG4gICAgZGVmYXVsdE9wZW5HcmFwaEltYWdlSGVpZ2h0OiBkZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQsXG4gICAgZGVmYXVsdE9wZW5HcmFwaFZpZGVvV2lkdGg6IGRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoLFxuICAgIGRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodDogZGVmYXVsdE9wZW5HcmFwaFZpZGVvSGVpZ2h0LFxuICAgIG1vYmlsZUFsdGVybmF0ZTogbW9iaWxlQWx0ZXJuYXRlLFxuICAgIGxhbmd1YWdlQWx0ZXJuYXRlczogbGFuZ3VhZ2VBbHRlcm5hdGVzLFxuICAgIGFkZGl0aW9uYWxMaW5rVGFnczogYWRkaXRpb25hbExpbmtUYWdzLFxuICAgIHJvYm90c1Byb3BzOiByb2JvdHNQcm9wcyxcbiAgICBub3JvYm90czogbm9yb2JvdHNcbiAgfSk7XG59O1xuXG52YXIgTmV4dFNlbyA9IGZ1bmN0aW9uIE5leHRTZW8oX3JlZikge1xuICB2YXIgdGl0bGUgPSBfcmVmLnRpdGxlLFxuICAgIHRoZW1lQ29sb3IgPSBfcmVmLnRoZW1lQ29sb3IsXG4gICAgbm9pbmRleCA9IF9yZWYubm9pbmRleCxcbiAgICBub2ZvbGxvdyA9IF9yZWYubm9mb2xsb3csXG4gICAgcm9ib3RzUHJvcHMgPSBfcmVmLnJvYm90c1Byb3BzLFxuICAgIGRlc2NyaXB0aW9uID0gX3JlZi5kZXNjcmlwdGlvbixcbiAgICBjYW5vbmljYWwgPSBfcmVmLmNhbm9uaWNhbCxcbiAgICBvcGVuR3JhcGggPSBfcmVmLm9wZW5HcmFwaCxcbiAgICBmYWNlYm9vayA9IF9yZWYuZmFjZWJvb2ssXG4gICAgdHdpdHRlciA9IF9yZWYudHdpdHRlcixcbiAgICBhZGRpdGlvbmFsTWV0YVRhZ3MgPSBfcmVmLmFkZGl0aW9uYWxNZXRhVGFncyxcbiAgICB0aXRsZVRlbXBsYXRlID0gX3JlZi50aXRsZVRlbXBsYXRlLFxuICAgIGRlZmF1bHRUaXRsZSA9IF9yZWYuZGVmYXVsdFRpdGxlLFxuICAgIG1vYmlsZUFsdGVybmF0ZSA9IF9yZWYubW9iaWxlQWx0ZXJuYXRlLFxuICAgIGxhbmd1YWdlQWx0ZXJuYXRlcyA9IF9yZWYubGFuZ3VhZ2VBbHRlcm5hdGVzLFxuICAgIGFkZGl0aW9uYWxMaW5rVGFncyA9IF9yZWYuYWRkaXRpb25hbExpbmtUYWdzO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFdpdGhIZWFkLCB7XG4gICAgdGl0bGU6IHRpdGxlLFxuICAgIHRoZW1lQ29sb3I6IHRoZW1lQ29sb3IsXG4gICAgbm9pbmRleDogbm9pbmRleCxcbiAgICBub2ZvbGxvdzogbm9mb2xsb3csXG4gICAgcm9ib3RzUHJvcHM6IHJvYm90c1Byb3BzLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICBjYW5vbmljYWw6IGNhbm9uaWNhbCxcbiAgICBmYWNlYm9vazogZmFjZWJvb2ssXG4gICAgb3BlbkdyYXBoOiBvcGVuR3JhcGgsXG4gICAgYWRkaXRpb25hbE1ldGFUYWdzOiBhZGRpdGlvbmFsTWV0YVRhZ3MsXG4gICAgdHdpdHRlcjogdHdpdHRlcixcbiAgICB0aXRsZVRlbXBsYXRlOiB0aXRsZVRlbXBsYXRlLFxuICAgIGRlZmF1bHRUaXRsZTogZGVmYXVsdFRpdGxlLFxuICAgIG1vYmlsZUFsdGVybmF0ZTogbW9iaWxlQWx0ZXJuYXRlLFxuICAgIGxhbmd1YWdlQWx0ZXJuYXRlczogbGFuZ3VhZ2VBbHRlcm5hdGVzLFxuICAgIGFkZGl0aW9uYWxMaW5rVGFnczogYWRkaXRpb25hbExpbmtUYWdzXG4gIH0pKTtcbn07XG5cbnZhciB0b0pzb24gPSBmdW5jdGlvbiB0b0pzb24odHlwZSwganNvbmxkKSB7XG4gIHZhciBkYXRhID0ganNvbmxkO1xuICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSAmJiBkYXRhLmxlbmd0aCA9PT0gMSkge1xuICAgIGRhdGEgPSBfZXh0ZW5kcyh7fSwganNvbmxkWzBdKTtcbiAgfVxuICB2YXIganNvbkxkT2JqZWN0ID0gQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgcmV0dXJuIGZvcm1hdE9iamVjdEZvclNjaGVtYSh0eXBlLCBpdGVtKTtcbiAgfSkgOiBmb3JtYXRPYmplY3RGb3JTY2hlbWEodHlwZSwgZGF0YSk7XG4gIHJldHVybiB7XG4gICAgX19odG1sOiBKU09OLnN0cmluZ2lmeShqc29uTGRPYmplY3QsIHNhZmVKc29uTGRSZXBsYWNlcilcbiAgfTtcbn07XG52YXIgZm9ybWF0T2JqZWN0Rm9yU2NoZW1hID0gZnVuY3Rpb24gZm9ybWF0T2JqZWN0Rm9yU2NoZW1hKHR5cGUsIGpzb25sZCkge1xuICB2YXIgX2pzb25sZCRpZCA9IGpzb25sZC5pZCxcbiAgICBpZCA9IF9qc29ubGQkaWQgPT09IHZvaWQgMCA/IHVuZGVmaW5lZCA6IF9qc29ubGQkaWQ7XG4gIHZhciB1cGRhdGVkID0gX2V4dGVuZHMoe30sIGlkID8ge1xuICAgICdAaWQnOiBqc29ubGQuaWRcbiAgfSA6IHt9LCBqc29ubGQpO1xuICBkZWxldGUgdXBkYXRlZC5pZDtcbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAnQGNvbnRleHQnOiAnaHR0cHM6Ly9zY2hlbWEub3JnJyxcbiAgICAnQHR5cGUnOiB0eXBlXG4gIH0sIHVwZGF0ZWQpO1xufTtcbnZhciBFU0NBUEVfRU5USVRJRVMgPSBPYmplY3QuZnJlZXplKHtcbiAgJyYnOiAnJmFtcDsnLFxuICAnPCc6ICcmbHQ7JyxcbiAgJz4nOiAnJmd0OycsXG4gICdcIic6ICcmcXVvdDsnLFxuICBcIidcIjogJyZhcG9zOydcbn0pO1xudmFyIEVTQ0FQRV9SRUdFWCA9IG5ldyBSZWdFeHAoXCJbXCIgKyBPYmplY3Qua2V5cyhFU0NBUEVfRU5USVRJRVMpLmpvaW4oJycpICsgXCJdXCIsICdnJyk7XG52YXIgRVNDQVBFX1JFUExBQ0VSID0gZnVuY3Rpb24gRVNDQVBFX1JFUExBQ0VSKHQpIHtcbiAgcmV0dXJuIEVTQ0FQRV9FTlRJVElFU1t0XTtcbn07XG4vKipcbiAqIEEgcmVwbGFjZXIgZm9yIEpTT04uc3RyaW5naWZ5IHRvIHN0cmlwIEpTT04tTEQgb2YgaWxsZWdhbCBIVE1MIGVudGl0aWVzXG4gKiBwZXIgaHR0cHM6Ly93d3cudzMub3JnL1RSL2pzb24tbGQxMS8jcmVzdHJpY3Rpb25zLWZvci1jb250ZW50cy1vZi1qc29uLWxkLXNjcmlwdC1lbGVtZW50c1xuICovXG52YXIgc2FmZUpzb25MZFJlcGxhY2VyID0gZnVuY3Rpb24gKCkge1xuICAvLyBSZXBsYWNlIHBlciBodHRwczovL3d3dy53My5vcmcvVFIvanNvbi1sZDExLyNyZXN0cmljdGlvbnMtZm9yLWNvbnRlbnRzLW9mLWpzb24tbGQtc2NyaXB0LWVsZW1lbnRzXG4gIC8vIFNvbHV0aW9uIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU0OTk4MjEvODY0MzEzXG4gIHJldHVybiBmdW5jdGlvbiAoXywgdmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgLy8gT21pdCBudWxsIHZhbHVlcy5cbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAvLyBKU09OLnN0cmluZ2lmeSB3aWxsIHJlY3Vyc2l2ZWx5IGNhbGwgcmVwbGFjZXIuXG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdiaWdpbnQnOlxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAvLyBUaGVzZSB2YWx1ZXMgYXJlIG5vdCByaXNreS5cbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKEVTQ0FQRV9SRUdFWCwgRVNDQVBFX1JFUExBQ0VSKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHtcbiAgICAgICAgICAvLyBKU09OLnN0cmluZ2lmeSB3aWxsIHJlbW92ZSB0aGlzIGVsZW1lbnQuXG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgfTtcbn0oKTtcblxudmFyIF9leGNsdWRlZCR5ID0gW1widHlwZVwiLCBcImtleU92ZXJyaWRlXCIsIFwic2NyaXB0S2V5XCIsIFwic2NyaXB0SWRcIiwgXCJkYXRhQXJyYXlcIiwgXCJ1c2VBcHBEaXJcIl07XG5mdW5jdGlvbiBKc29uTGQoX3JlZikge1xuICB2YXIgX3JlZiR0eXBlID0gX3JlZi50eXBlLFxuICAgIHR5cGUgPSBfcmVmJHR5cGUgPT09IHZvaWQgMCA/ICdUaGluZycgOiBfcmVmJHR5cGUsXG4gICAga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgIHNjcmlwdEtleSA9IF9yZWYuc2NyaXB0S2V5LFxuICAgIF9yZWYkc2NyaXB0SWQgPSBfcmVmLnNjcmlwdElkLFxuICAgIHNjcmlwdElkID0gX3JlZiRzY3JpcHRJZCA9PT0gdm9pZCAwID8gdW5kZWZpbmVkIDogX3JlZiRzY3JpcHRJZCxcbiAgICBkYXRhQXJyYXkgPSBfcmVmLmRhdGFBcnJheSxcbiAgICBfcmVmJHVzZUFwcERpciA9IF9yZWYudXNlQXBwRGlyLFxuICAgIHVzZUFwcERpciA9IF9yZWYkdXNlQXBwRGlyID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkdXNlQXBwRGlyLFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQkeSk7XG4gIHZhciBKc29uTGRTY3JpcHQgPSBmdW5jdGlvbiBKc29uTGRTY3JpcHQoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgICAgaWQ6IHNjcmlwdElkLFxuICAgICAgXCJkYXRhLXRlc3RpZFwiOiBzY3JpcHRJZCxcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB0b0pzb24odHlwZSwgZGF0YUFycmF5ID09PSB1bmRlZmluZWQgPyBfZXh0ZW5kcyh7fSwgcmVzdCkgOiBkYXRhQXJyYXkpLFxuICAgICAga2V5OiBcImpzb25sZC1cIiArIHNjcmlwdEtleSArIChrZXlPdmVycmlkZSA/IFwiLVwiICsga2V5T3ZlcnJpZGUgOiAnJylcbiAgICB9KTtcbiAgfTtcbiAgaWYgKHVzZUFwcERpcikge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChKc29uTGRTY3JpcHQsIG51bGwpO1xuICB9XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBKc29uTGRTY3JpcHQoKSk7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYXV0aG9yIGluZm9ybWF0aW9uXG4gKiBAcGFyYW0gYXV0aG9yXG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiBnZW5lcmF0ZUF1dGhvckluZm8oYXV0aG9yKSB7XG4gIGlmICh0eXBlb2YgYXV0aG9yID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB7XG4gICAgICAnQHR5cGUnOiAnUGVyc29uJyxcbiAgICAgIG5hbWU6IGF1dGhvclxuICAgIH07XG4gIH0gZWxzZSBpZiAoISFhdXRob3IubmFtZSkge1xuICAgIHZhciBfYXV0aG9yJHR5cGU7XG4gICAgcmV0dXJuIHtcbiAgICAgICdAdHlwZSc6IChfYXV0aG9yJHR5cGUgPSBhdXRob3IgPT0gbnVsbCA/IHZvaWQgMCA6IGF1dGhvci50eXBlKSAhPSBudWxsID8gX2F1dGhvciR0eXBlIDogJ1BlcnNvbicsXG4gICAgICBuYW1lOiBhdXRob3IubmFtZSxcbiAgICAgIHVybDogYXV0aG9yID09IG51bGwgPyB2b2lkIDAgOiBhdXRob3IudXJsXG4gICAgfTtcbiAgfVxuICByZXR1cm47XG59XG5mdW5jdGlvbiBzZXRBdXRob3IoYXV0aG9yKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGF1dGhvcikpIHtcbiAgICByZXR1cm4gYXV0aG9yLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGdlbmVyYXRlQXV0aG9ySW5mbyhpdGVtKTtcbiAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAhIWl0ZW07XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoYXV0aG9yKSB7XG4gICAgcmV0dXJuIGdlbmVyYXRlQXV0aG9ySW5mbyhhdXRob3IpO1xuICB9XG4gIHJldHVybjtcbn1cblxuZnVuY3Rpb24gc2V0SW1hZ2UoaW1hZ2UpIHtcbiAgaWYgKGltYWdlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdAdHlwZSc6ICdJbWFnZU9iamVjdCcsXG4gICAgICB1cmw6IGltYWdlXG4gICAgfTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBzZXRQdWJsaXNoZXIocHVibGlzaGVyTmFtZSwgcHVibGlzaGVyTG9nbykge1xuICBpZiAoIXB1Ymxpc2hlck5hbWUpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiB7XG4gICAgJ0B0eXBlJzogJ09yZ2FuaXphdGlvbicsXG4gICAgbmFtZTogcHVibGlzaGVyTmFtZSxcbiAgICBsb2dvOiBzZXRJbWFnZShwdWJsaXNoZXJMb2dvKVxuICB9O1xufVxuXG5mdW5jdGlvbiBzZXRSZXZpZXdSYXRpbmcocmF0aW5nKSB7XG4gIGlmIChyYXRpbmcpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHJhdGluZywge1xuICAgICAgJ0B0eXBlJzogJ1JhdGluZydcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG52YXIgX2V4Y2x1ZGVkJHggPSBbXCJyZXZpZXdSYXRpbmdcIiwgXCJhdXRob3JcIiwgXCJwdWJsaXNoZXJcIl07XG5mdW5jdGlvbiBzZXRSZXZpZXdzKHJldmlld3MpIHtcbiAgZnVuY3Rpb24gbWFwUmV2aWV3KF9yZWYpIHtcbiAgICB2YXIgcmV2aWV3UmF0aW5nID0gX3JlZi5yZXZpZXdSYXRpbmcsXG4gICAgICBhdXRob3IgPSBfcmVmLmF1dGhvcixcbiAgICAgIHB1Ymxpc2hlciA9IF9yZWYucHVibGlzaGVyLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCR4KTtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICAgICdAdHlwZSc6ICdSZXZpZXcnXG4gICAgfSwgYXV0aG9yICYmIHtcbiAgICAgIGF1dGhvcjogc2V0QXV0aG9yKGF1dGhvcilcbiAgICB9LCByZXZpZXdSYXRpbmcgJiYge1xuICAgICAgcmV2aWV3UmF0aW5nOiBzZXRSZXZpZXdSYXRpbmcocmV2aWV3UmF0aW5nKVxuICAgIH0sIHB1Ymxpc2hlciAmJiB7XG4gICAgICBwdWJsaXNoZXI6IHNldFB1Ymxpc2hlcihwdWJsaXNoZXIubmFtZSlcbiAgICB9KTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShyZXZpZXdzKSkge1xuICAgIHJldHVybiByZXZpZXdzLm1hcChtYXBSZXZpZXcpO1xuICB9IGVsc2UgaWYgKHJldmlld3MpIHtcbiAgICByZXR1cm4gbWFwUmV2aWV3KHJldmlld3MpO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHNldE51dHJpdGlvbihjYWxvcmllcykge1xuICBpZiAoY2Fsb3JpZXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ0B0eXBlJzogJ051dHJpdGlvbkluZm9ybWF0aW9uJyxcbiAgICAgIGNhbG9yaWVzOiBjYWxvcmllcyArIFwiIGNhbG9yaWVzXCJcbiAgICB9O1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHNldEFnZ3JlZ2F0ZVJhdGluZyhhZ2dyZWdhdGVSYXRpbmcpIHtcbiAgaWYgKGFnZ3JlZ2F0ZVJhdGluZykge1xuICAgIHJldHVybiB7XG4gICAgICAnQHR5cGUnOiAnQWdncmVnYXRlUmF0aW5nJyxcbiAgICAgIHJhdGluZ0NvdW50OiBhZ2dyZWdhdGVSYXRpbmcucmF0aW5nQ291bnQsXG4gICAgICByZXZpZXdDb3VudDogYWdncmVnYXRlUmF0aW5nLnJldmlld0NvdW50LFxuICAgICAgYmVzdFJhdGluZzogYWdncmVnYXRlUmF0aW5nLmJlc3RSYXRpbmcsXG4gICAgICByYXRpbmdWYWx1ZTogYWdncmVnYXRlUmF0aW5nLnJhdGluZ1ZhbHVlLFxuICAgICAgd29yc3RSYXRpbmc6IGFnZ3JlZ2F0ZVJhdGluZy53b3JzdFJhdGluZ1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gc2V0Q2xpcChjbGlwcykge1xuICBmdW5jdGlvbiBtYXBDbGlwKGNsaXApIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGNsaXAsIHtcbiAgICAgICdAdHlwZSc6ICdDbGlwJ1xuICAgIH0pO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KGNsaXBzKSkge1xuICAgIHJldHVybiBjbGlwcy5tYXAobWFwQ2xpcCk7XG4gIH0gZWxzZSBpZiAoY2xpcHMpIHtcbiAgICByZXR1cm4gbWFwQ2xpcChjbGlwcyk7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gc2V0SW50ZXJhY3Rpb25TdGF0aXN0aWMod2F0Y2hDb3VudCkge1xuICBpZiAod2F0Y2hDb3VudCkge1xuICAgIHJldHVybiB7XG4gICAgICAnQHR5cGUnOiAnSW50ZXJhY3Rpb25Db3VudGVyJyxcbiAgICAgIGludGVyYWN0aW9uVHlwZTogJ2h0dHBzOi8vc2NoZW1hLm9yZy9XYXRjaEFjdGlvbicsXG4gICAgICB1c2VySW50ZXJhY3Rpb25Db3VudDogd2F0Y2hDb3VudFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gc2V0QnJvYWRjYXN0RXZlbnQocHVibGljYXRpb24pIHtcbiAgZnVuY3Rpb24gbWFwQnJvYWRjYXN0RXZlbnQocHVibGljYXRpb24pIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHB1YmxpY2F0aW9uLCB7XG4gICAgICAnQHR5cGUnOiAnQnJvYWRjYXN0RXZlbnQnXG4gICAgfSk7XG4gIH1cbiAgaWYgKHB1YmxpY2F0aW9uKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHVibGljYXRpb24pKSB7XG4gICAgICByZXR1cm4gcHVibGljYXRpb24ubWFwKG1hcEJyb2FkY2FzdEV2ZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIG1hcEJyb2FkY2FzdEV2ZW50KHB1YmxpY2F0aW9uKTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG52YXIgX2V4Y2x1ZGVkJHcgPSBbXCJ0aHVtYm5haWxVcmxzXCIsIFwiaGFzUGFydFwiLCBcIndhdGNoQ291bnRcIiwgXCJwdWJsaWNhdGlvblwiXTtcbmZ1bmN0aW9uIHNldFZpZGVvKHZpZGVvLCBzZXRDb250ZXh0KSB7XG4gIGlmIChzZXRDb250ZXh0ID09PSB2b2lkIDApIHtcbiAgICBzZXRDb250ZXh0ID0gZmFsc2U7XG4gIH1cbiAgZnVuY3Rpb24gbWFwVmlkZW8oX3JlZiwgY29udGV4dCkge1xuICAgIHZhciB0aHVtYm5haWxVcmxzID0gX3JlZi50aHVtYm5haWxVcmxzLFxuICAgICAgaGFzUGFydCA9IF9yZWYuaGFzUGFydCxcbiAgICAgIHdhdGNoQ291bnQgPSBfcmVmLndhdGNoQ291bnQsXG4gICAgICBwdWJsaWNhdGlvbiA9IF9yZWYucHVibGljYXRpb24sXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgX2V4Y2x1ZGVkJHcpO1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgICAgJ0B0eXBlJzogJ1ZpZGVvT2JqZWN0J1xuICAgIH0sIGNvbnRleHQgJiYge1xuICAgICAgJ0Bjb250ZXh0JzogJ2h0dHBzOi8vc2NoZW1hLm9yZydcbiAgICB9LCB7XG4gICAgICB0aHVtYm5haWxVcmw6IHRodW1ibmFpbFVybHMsXG4gICAgICBoYXNQYXJ0OiBzZXRDbGlwKGhhc1BhcnQpLFxuICAgICAgaW50ZXJhY3Rpb25TdGF0aXN0aWM6IHNldEludGVyYWN0aW9uU3RhdGlzdGljKHdhdGNoQ291bnQpLFxuICAgICAgcHVibGljYXRpb246IHNldEJyb2FkY2FzdEV2ZW50KHB1YmxpY2F0aW9uKVxuICAgIH0pO1xuICB9XG4gIGlmICh2aWRlbykge1xuICAgIHJldHVybiBtYXBWaWRlbyh2aWRlbywgc2V0Q29udGV4dCk7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gc2V0SW5zdHJ1Y3Rpb24oaW5zdHJ1Y3Rpb24pIHtcbiAgaWYgKGluc3RydWN0aW9uKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBpbnN0cnVjdGlvbiwge1xuICAgICAgJ0B0eXBlJzogJ0hvd1RvU3RlcCdcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG52YXIgX2V4Y2x1ZGVkJHYgPSBbXCJ0eXBlXCIsIFwia2V5T3ZlcnJpZGVcIiwgXCJvZlR5cGVcIiwgXCJkYXRhXCJdLFxuICBfZXhjbHVkZWQyJDEgPSBbXCJhdXRob3JOYW1lXCIsIFwiaW1hZ2VzXCIsIFwieWllbGRzXCIsIFwiY2F0ZWdvcnlcIiwgXCJjYWxvcmllc1wiLCBcImFnZ3JlZ2F0ZVJhdGluZ1wiLCBcInZpZGVvXCIsIFwiaW5ncmVkaWVudHNcIiwgXCJpbnN0cnVjdGlvbnNcIiwgXCJjdWlzaW5lXCJdO1xuZnVuY3Rpb24gQ2Fyb3VzZWxKc29uTGQoX3JlZikge1xuICB2YXIgX3JlZiR0eXBlID0gX3JlZi50eXBlLFxuICAgIHR5cGUgPSBfcmVmJHR5cGUgPT09IHZvaWQgMCA/ICdDYXJvdXNlbCcgOiBfcmVmJHR5cGUsXG4gICAga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgIG9mVHlwZSA9IF9yZWYub2ZUeXBlLFxuICAgIGRhdGEgPSBfcmVmLmRhdGEsXG4gICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCR2KTtcbiAgZnVuY3Rpb24gZ2VuZXJhdGVMaXN0KGRhdGEsIG9mVHlwZSkge1xuICAgIHN3aXRjaCAob2ZUeXBlKSB7XG4gICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgcmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnQHR5cGUnOiAnTGlzdEl0ZW0nLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiXCIgKyAoaW5kZXggKyAxKSxcbiAgICAgICAgICAgIHVybDogaXRlbS51cmxcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2NvdXJzZSc6XG4gICAgICAgIHJldHVybiBkYXRhLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ0B0eXBlJzogJ0xpc3RJdGVtJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcIlwiICsgKGluZGV4ICsgMSksXG4gICAgICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgICAgICdAY29udGV4dCc6ICdodHRwczovL3NjaGVtYS5vcmcnLFxuICAgICAgICAgICAgICAnQHR5cGUnOiAnQ291cnNlJyxcbiAgICAgICAgICAgICAgdXJsOiBpdGVtLnVybCxcbiAgICAgICAgICAgICAgbmFtZTogaXRlbS5jb3Vyc2VOYW1lLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgcHJvdmlkZXI6IHtcbiAgICAgICAgICAgICAgICAnQHR5cGUnOiAnT3JnYW5pemF0aW9uJyxcbiAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLnByb3ZpZGVyTmFtZSxcbiAgICAgICAgICAgICAgICBzYW1lQXM6IGl0ZW0ucHJvdmlkZXJVcmxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnbW92aWUnOlxuICAgICAgICByZXR1cm4gZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdAdHlwZSc6ICdMaXN0SXRlbScsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJcIiArIChpbmRleCArIDEpLFxuICAgICAgICAgICAgaXRlbToge1xuICAgICAgICAgICAgICAnQGNvbnRleHQnOiAnaHR0cHM6Ly9zY2hlbWEub3JnJyxcbiAgICAgICAgICAgICAgJ0B0eXBlJzogJ01vdmllJyxcbiAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICB1cmw6IGl0ZW0udXJsLFxuICAgICAgICAgICAgICBpbWFnZTogaXRlbS5pbWFnZSxcbiAgICAgICAgICAgICAgZGF0ZUNyZWF0ZWQ6IGl0ZW0uZGF0ZUNyZWF0ZWQsXG4gICAgICAgICAgICAgIGRpcmVjdG9yOiBpdGVtLmRpcmVjdG9yID8gQXJyYXkuaXNBcnJheShpdGVtLmRpcmVjdG9yKSA/IGl0ZW0uZGlyZWN0b3IubWFwKGZ1bmN0aW9uIChkaXJlY3Rvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAnQHR5cGUnOiAnUGVyc29uJyxcbiAgICAgICAgICAgICAgICAgIG5hbWU6IGRpcmVjdG9yLm5hbWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9KSA6IHtcbiAgICAgICAgICAgICAgICAnQHR5cGUnOiAnUGVyc29uJyxcbiAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLmRpcmVjdG9yLm5hbWVcbiAgICAgICAgICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgcmV2aWV3OiBzZXRSZXZpZXdzKGl0ZW0ucmV2aWV3KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAncmVjaXBlJzpcbiAgICAgICAgcmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uIChfcmVmMiwgaW5kZXgpIHtcbiAgICAgICAgICB2YXIgYXV0aG9yTmFtZSA9IF9yZWYyLmF1dGhvck5hbWUsXG4gICAgICAgICAgICBpbWFnZXMgPSBfcmVmMi5pbWFnZXMsXG4gICAgICAgICAgICB5aWVsZHMgPSBfcmVmMi55aWVsZHMsXG4gICAgICAgICAgICBjYXRlZ29yeSA9IF9yZWYyLmNhdGVnb3J5LFxuICAgICAgICAgICAgY2Fsb3JpZXMgPSBfcmVmMi5jYWxvcmllcyxcbiAgICAgICAgICAgIGFnZ3JlZ2F0ZVJhdGluZyA9IF9yZWYyLmFnZ3JlZ2F0ZVJhdGluZyxcbiAgICAgICAgICAgIHZpZGVvID0gX3JlZjIudmlkZW8sXG4gICAgICAgICAgICBpbmdyZWRpZW50cyA9IF9yZWYyLmluZ3JlZGllbnRzLFxuICAgICAgICAgICAgaW5zdHJ1Y3Rpb25zID0gX3JlZjIuaW5zdHJ1Y3Rpb25zLFxuICAgICAgICAgICAgY3Vpc2luZSA9IF9yZWYyLmN1aXNpbmUsXG4gICAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjIsIF9leGNsdWRlZDIkMSk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdAdHlwZSc6ICdMaXN0SXRlbScsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJcIiArIChpbmRleCArIDEpLFxuICAgICAgICAgICAgaXRlbTogX2V4dGVuZHMoe1xuICAgICAgICAgICAgICAnQGNvbnRleHQnOiAnaHR0cHM6Ly9zY2hlbWEub3JnJyxcbiAgICAgICAgICAgICAgJ0B0eXBlJzogJ1JlY2lwZSdcbiAgICAgICAgICAgIH0sIHJlc3QsIHtcbiAgICAgICAgICAgICAgYXV0aG9yOiBzZXRBdXRob3IoYXV0aG9yTmFtZSksXG4gICAgICAgICAgICAgIGltYWdlOiBpbWFnZXMsXG4gICAgICAgICAgICAgIHJlY2lwZVlpZWxkOiB5aWVsZHMsXG4gICAgICAgICAgICAgIHJlY2lwZUNhdGVnb3J5OiBjYXRlZ29yeSxcbiAgICAgICAgICAgICAgcmVjaXBlQ3Vpc2luZTogY3Vpc2luZSxcbiAgICAgICAgICAgICAgbnV0cml0aW9uOiBzZXROdXRyaXRpb24oY2Fsb3JpZXMpLFxuICAgICAgICAgICAgICBhZ2dyZWdhdGVSYXRpbmc6IHNldEFnZ3JlZ2F0ZVJhdGluZyhhZ2dyZWdhdGVSYXRpbmcpLFxuICAgICAgICAgICAgICB2aWRlbzogc2V0VmlkZW8odmlkZW8pLFxuICAgICAgICAgICAgICByZWNpcGVJbmdyZWRpZW50OiBpbmdyZWRpZW50cyxcbiAgICAgICAgICAgICAgcmVjaXBlSW5zdHJ1Y3Rpb25zOiBpbnN0cnVjdGlvbnMubWFwKHNldEluc3RydWN0aW9uKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2N1c3RvbSc6XG4gICAgICAgIHJldHVybiBkYXRhLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICB2YXIgX2l0ZW0kcG9zaXRpb247XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdAdHlwZSc6ICdMaXN0SXRlbScsXG4gICAgICAgICAgICBwb3NpdGlvbjogKF9pdGVtJHBvc2l0aW9uID0gaXRlbS5wb3NpdGlvbikgIT0gbnVsbCA/IF9pdGVtJHBvc2l0aW9uIDogaW5kZXggKyAxLFxuICAgICAgICAgICAgaXRlbToge1xuICAgICAgICAgICAgICAnQHR5cGUnOiBpdGVtLnR5cGUsXG4gICAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuICB2YXIganNvbkxkRGF0YSA9IF9leHRlbmRzKHtcbiAgICAnQHR5cGUnOiAnSXRlbUxpc3QnXG4gIH0sIHJlc3QsIHtcbiAgICBpdGVtTGlzdEVsZW1lbnQ6IGdlbmVyYXRlTGlzdChkYXRhLCBvZlR5cGUpXG4gIH0sIHJlc3QpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSnNvbkxkLCBfZXh0ZW5kcyh7XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXlPdmVycmlkZToga2V5T3ZlcnJpZGVcbiAgfSwganNvbkxkRGF0YSwge1xuICAgIHNjcmlwdEtleTogXCJDYXJvdXNlbFwiXG4gIH0pKTtcbn1cblxudmFyIF9leGNsdWRlZCR1ID0gW1widHlwZVwiLCBcImtleU92ZXJyaWRlXCIsIFwidXJsXCIsIFwidGl0bGVcIiwgXCJpbWFnZXNcIiwgXCJzZWN0aW9uXCIsIFwiZGF0ZUNyZWF0ZWRcIiwgXCJkYXRlUHVibGlzaGVkXCIsIFwiZGF0ZU1vZGlmaWVkXCIsIFwiYXV0aG9yTmFtZVwiLCBcImF1dGhvclR5cGVcIiwgXCJwdWJsaXNoZXJOYW1lXCIsIFwicHVibGlzaGVyTG9nb1wiLCBcImJvZHlcIiwgXCJpc0FjY2Vzc2libGVGb3JGcmVlXCJdO1xuZnVuY3Rpb24gTmV3c0FydGljbGVKc29uTGQoX3JlZikge1xuICB2YXIgX3JlZiR0eXBlID0gX3JlZi50eXBlLFxuICAgIHR5cGUgPSBfcmVmJHR5cGUgPT09IHZvaWQgMCA/ICdOZXdzQXJ0aWNsZScgOiBfcmVmJHR5cGUsXG4gICAga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgIHVybCA9IF9yZWYudXJsLFxuICAgIHRpdGxlID0gX3JlZi50aXRsZSxcbiAgICBpbWFnZXMgPSBfcmVmLmltYWdlcyxcbiAgICBzZWN0aW9uID0gX3JlZi5zZWN0aW9uLFxuICAgIGRhdGVDcmVhdGVkID0gX3JlZi5kYXRlQ3JlYXRlZCxcbiAgICBkYXRlUHVibGlzaGVkID0gX3JlZi5kYXRlUHVibGlzaGVkLFxuICAgIGRhdGVNb2RpZmllZCA9IF9yZWYuZGF0ZU1vZGlmaWVkLFxuICAgIGF1dGhvck5hbWUgPSBfcmVmLmF1dGhvck5hbWUsXG4gICAgcHVibGlzaGVyTmFtZSA9IF9yZWYucHVibGlzaGVyTmFtZSxcbiAgICBwdWJsaXNoZXJMb2dvID0gX3JlZi5wdWJsaXNoZXJMb2dvLFxuICAgIGJvZHkgPSBfcmVmLmJvZHksXG4gICAgaXNBY2Nlc3NpYmxlRm9yRnJlZSA9IF9yZWYuaXNBY2Nlc3NpYmxlRm9yRnJlZSxcbiAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgX2V4Y2x1ZGVkJHUpO1xuICB2YXIgZGF0YSA9IF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgbWFpbkVudGl0eU9mUGFnZToge1xuICAgICAgJ0B0eXBlJzogJ1dlYlBhZ2UnLFxuICAgICAgJ0BpZCc6IHVybFxuICAgIH0sXG4gICAgaGVhZGxpbmU6IHRpdGxlLFxuICAgIGltYWdlOiBpbWFnZXMsXG4gICAgYXJ0aWNsZVNlY3Rpb246IHNlY3Rpb24sXG4gICAgZGF0ZUNyZWF0ZWQ6IGRhdGVDcmVhdGVkIHx8IGRhdGVQdWJsaXNoZWQsXG4gICAgZGF0ZVB1Ymxpc2hlZDogZGF0ZVB1Ymxpc2hlZCxcbiAgICBkYXRlTW9kaWZpZWQ6IGRhdGVNb2RpZmllZCB8fCBkYXRlUHVibGlzaGVkLFxuICAgIGF1dGhvcjogc2V0QXV0aG9yKGF1dGhvck5hbWUpLFxuICAgIHB1Ymxpc2hlcjogc2V0UHVibGlzaGVyKHB1Ymxpc2hlck5hbWUsIHB1Ymxpc2hlckxvZ28pLFxuICAgIGFydGljbGVCb2R5OiBib2R5LFxuICAgIGlzQWNjZXNzaWJsZUZvckZyZWU6IGlzQWNjZXNzaWJsZUZvckZyZWVcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChKc29uTGQsIF9leHRlbmRzKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleU92ZXJyaWRlOiBrZXlPdmVycmlkZVxuICB9LCBkYXRhLCB7XG4gICAgc2NyaXB0S2V5OiBcIk5ld3NBcnRpY2xlXCJcbiAgfSkpO1xufVxuXG52YXIgX2V4Y2x1ZGVkJHQgPSBbXCJ0eXBlXCIsIFwia2V5T3ZlcnJpZGVcIiwgXCJiYXNlU2FsYXJ5XCIsIFwiaGlyaW5nT3JnYW5pemF0aW9uXCIsIFwiYXBwbGljYW50TG9jYXRpb25SZXF1aXJlbWVudHNcIiwgXCJleHBlcmllbmNlUmVxdWlyZW1lbnRzXCIsIFwiam9iTG9jYXRpb25cIl07XG5mdW5jdGlvbiBKb2JQb3N0aW5nSnNvbkxkKF9yZWYpIHtcbiAgdmFyIF9yZWYkdHlwZSA9IF9yZWYudHlwZSxcbiAgICB0eXBlID0gX3JlZiR0eXBlID09PSB2b2lkIDAgPyAnSm9iUG9zdGluZycgOiBfcmVmJHR5cGUsXG4gICAga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgIGJhc2VTYWxhcnkgPSBfcmVmLmJhc2VTYWxhcnksXG4gICAgaGlyaW5nT3JnYW5pemF0aW9uID0gX3JlZi5oaXJpbmdPcmdhbml6YXRpb24sXG4gICAgYXBwbGljYW50TG9jYXRpb25SZXF1aXJlbWVudHMgPSBfcmVmLmFwcGxpY2FudExvY2F0aW9uUmVxdWlyZW1lbnRzLFxuICAgIGV4cGVyaWVuY2VSZXF1aXJlbWVudHMgPSBfcmVmLmV4cGVyaWVuY2VSZXF1aXJlbWVudHMsXG4gICAgam9iTG9jYXRpb24gPSBfcmVmLmpvYkxvY2F0aW9uLFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQkdCk7XG4gIGZ1bmN0aW9uIHNldEJhc2VTYWxhcnkoYmFzZVNhbGFyeSkge1xuICAgIGlmIChiYXNlU2FsYXJ5KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnQHR5cGUnOiAnTW9uZXRhcnlBbW91bnQnLFxuICAgICAgICBjdXJyZW5jeTogYmFzZVNhbGFyeS5jdXJyZW5jeSxcbiAgICAgICAgdmFsdWU6IF9leHRlbmRzKHtcbiAgICAgICAgICAnQHR5cGUnOiAnUXVhbnRpdGF0aXZlVmFsdWUnLFxuICAgICAgICAgIHVuaXRUZXh0OiBiYXNlU2FsYXJ5LnVuaXRUZXh0XG4gICAgICAgIH0sIEFycmF5LmlzQXJyYXkoYmFzZVNhbGFyeS52YWx1ZSkgPyB7XG4gICAgICAgICAgbWluVmFsdWU6IGJhc2VTYWxhcnkudmFsdWVbMF0sXG4gICAgICAgICAgbWF4VmFsdWU6IGJhc2VTYWxhcnkudmFsdWVbMV1cbiAgICAgICAgfSA6IHtcbiAgICAgICAgICB2YWx1ZTogYmFzZVNhbGFyeS52YWx1ZVxuICAgICAgICB9KVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBmdW5jdGlvbiBzZXRIaXJpbmdPcmdhbml6YXRpb24ob3JnKSB7XG4gICAgaWYgKG9yZyA9PT0gJ2NvbmZpZGVudGlhbCcpIHtcbiAgICAgIHJldHVybiAnY29uZmlkZW50aWFsJztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdAdHlwZSc6ICdPcmdhbml6YXRpb24nLFxuICAgICAgbmFtZTogb3JnLm5hbWUsXG4gICAgICBzYW1lQXM6IG9yZy5zYW1lQXMsXG4gICAgICBsb2dvOiBvcmcubG9nb1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gc2V0Sm9iTG9jYXRpb24obG9jYXRpb24pIHtcbiAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdAdHlwZSc6ICdQbGFjZScsXG4gICAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgICAnQHR5cGUnOiAnUG9zdGFsQWRkcmVzcycsXG4gICAgICAgICAgYWRkcmVzc0NvdW50cnk6IGxvY2F0aW9uLmFkZHJlc3NDb3VudHJ5LFxuICAgICAgICAgIGFkZHJlc3NMb2NhbGl0eTogbG9jYXRpb24uYWRkcmVzc0xvY2FsaXR5LFxuICAgICAgICAgIGFkZHJlc3NSZWdpb246IGxvY2F0aW9uLmFkZHJlc3NSZWdpb24sXG4gICAgICAgICAgcG9zdGFsQ29kZTogbG9jYXRpb24ucG9zdGFsQ29kZSxcbiAgICAgICAgICBzdHJlZXRBZGRyZXNzOiBsb2NhdGlvbi5zdHJlZXRBZGRyZXNzXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgZnVuY3Rpb24gc2V0QXBwbGljYW50TG9jYXRpb25SZXF1aXJlbWVudHMocmVxdWlyZW1lbnRzKSB7XG4gICAgaWYgKHJlcXVpcmVtZW50cykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ0B0eXBlJzogJ0NvdW50cnknLFxuICAgICAgICBuYW1lOiByZXF1aXJlbWVudHNcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgZnVuY3Rpb24gc2V0T2NjdXBhdGlvbmFsRXhwZXJpZW5jZVJlcXVpcmVtZW50cyhyZXF1aXJlbWVudHMpIHtcbiAgICBpZiAocmVxdWlyZW1lbnRzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnQHR5cGUnOiByZXF1aXJlbWVudHNbJ0B0eXBlJ10gPyByZXF1aXJlbWVudHNbJ0B0eXBlJ10gOiAnT2NjdXBhdGlvbmFsRXhwZXJpZW5jZVJlcXVpcmVtZW50cycsXG4gICAgICAgIG1vbnRoc09mRXhwZXJpZW5jZTogcmVxdWlyZW1lbnRzLm1pbmltdW1Nb250aHNPZkV4cGVyaWVuY2VcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgZnVuY3Rpb24gc2V0RWR1Y2F0aW9uYWxPY2N1cGF0aW9uYWxDcmVkZW50aWFsKHJlcXVpcmVtZW50cykge1xuICAgIGlmIChyZXF1aXJlbWVudHMpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdAdHlwZSc6IHJlcXVpcmVtZW50c1snQHR5cGUnXSA/IHJlcXVpcmVtZW50c1snQHR5cGUnXSA6ICdFZHVjYXRpb25hbE9jY3VwYXRpb25hbENyZWRlbnRpYWwnLFxuICAgICAgICBjcmVkZW50aWFsQ2F0ZWdvcnk6IHJlcXVpcmVtZW50cy5jcmVkZW50aWFsQ2F0ZWdvcnlcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgdmFyIGRhdGEgPSBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIGJhc2VTYWxhcnk6IHNldEJhc2VTYWxhcnkoYmFzZVNhbGFyeSksXG4gICAgaGlyaW5nT3JnYW5pemF0aW9uOiBzZXRIaXJpbmdPcmdhbml6YXRpb24oaGlyaW5nT3JnYW5pemF0aW9uKSxcbiAgICBqb2JMb2NhdGlvbjogc2V0Sm9iTG9jYXRpb24oam9iTG9jYXRpb24pLFxuICAgIGFwcGxpY2FudExvY2F0aW9uUmVxdWlyZW1lbnRzOiBzZXRBcHBsaWNhbnRMb2NhdGlvblJlcXVpcmVtZW50cyhhcHBsaWNhbnRMb2NhdGlvblJlcXVpcmVtZW50cyksXG4gICAgZXhwZXJpZW5jZVJlcXVpcmVtZW50czogc2V0T2NjdXBhdGlvbmFsRXhwZXJpZW5jZVJlcXVpcmVtZW50cyhleHBlcmllbmNlUmVxdWlyZW1lbnRzID09IG51bGwgPyB2b2lkIDAgOiBleHBlcmllbmNlUmVxdWlyZW1lbnRzLm9jY3VwYXRpb25hbCksXG4gICAgZWR1Y2F0aW9uUmVxdWlyZW1lbnRzOiBzZXRFZHVjYXRpb25hbE9jY3VwYXRpb25hbENyZWRlbnRpYWwoZXhwZXJpZW5jZVJlcXVpcmVtZW50cyA9PSBudWxsID8gdm9pZCAwIDogZXhwZXJpZW5jZVJlcXVpcmVtZW50cy5lZHVjYXRpb25hbCksXG4gICAgZXhwZXJpZW5jZUluUGxhY2VPZkVkdWNhdGlvbjogZXhwZXJpZW5jZVJlcXVpcmVtZW50cyA9PSBudWxsID8gdm9pZCAwIDogZXhwZXJpZW5jZVJlcXVpcmVtZW50cy5leHBlcmllbmNlSW5QbGFjZU9mRWR1Y2F0aW9uXG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSnNvbkxkLCBfZXh0ZW5kcyh7XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXlPdmVycmlkZToga2V5T3ZlcnJpZGVcbiAgfSwgZGF0YSwge1xuICAgIHNjcmlwdEtleTogXCJKb2JQb3N0aW5nXCJcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBzZXRBZGRyZXNzKGFkZHJlc3MpIHtcbiAgaWYgKCFhZGRyZXNzKSByZXR1cm4gdW5kZWZpbmVkO1xuICBpZiAoIUFycmF5LmlzQXJyYXkoYWRkcmVzcykpIHJldHVybiB0b1Bvc3RhbEFkZHJlc3MoYWRkcmVzcyk7XG4gIC8vIElmIGFycmF5IG9mIG9uZSBhZGRyZXNzLCByZXBsYWNlIHdpdGggc2luZ2xlIGFkZHJlc3NcbiAgaWYgKGFkZHJlc3MubGVuZ3RoID09PSAxKSByZXR1cm4gdG9Qb3N0YWxBZGRyZXNzKGFkZHJlc3NbMF0pO1xuICAvLyBJZiBhcnJheSwgcmV0dXJuIG1hcHBlZCBhcnJheSBvZiBQb3N0YWxBZGRyZXNzZXNcbiAgcmV0dXJuIGFkZHJlc3MubWFwKHRvUG9zdGFsQWRkcmVzcyk7XG59XG5mdW5jdGlvbiB0b1Bvc3RhbEFkZHJlc3MoYWRkcmVzcykge1xuICBpZiAodHlwZW9mIGFkZHJlc3MgPT09ICdzdHJpbmcnKSByZXR1cm4gYWRkcmVzcztcbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAnQHR5cGUnOiAnUG9zdGFsQWRkcmVzcydcbiAgfSwgYWRkcmVzcyk7XG59XG5cbmZ1bmN0aW9uIHNldEdlbyhnZW8pIHtcbiAgaWYgKGdlbykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgZ2VvLCB7XG4gICAgICAnQHR5cGUnOiAnR2VvQ29vcmRpbmF0ZXMnXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gc2V0QWN0aW9uKGFjdGlvbikge1xuICBpZiAoYWN0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdAdHlwZSc6IGFjdGlvbi5hY3Rpb25UeXBlLFxuICAgICAgbmFtZTogYWN0aW9uLmFjdGlvbk5hbWUsXG4gICAgICB0YXJnZXQ6IGFjdGlvbi50YXJnZXRcbiAgICB9O1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHNldEdlb0NpcmNsZShnZW9DaXJjbGUpIHtcbiAgaWYgKGdlb0NpcmNsZSkge1xuICAgIHJldHVybiB7XG4gICAgICAnQHR5cGUnOiAnR2VvQ2lyY2xlJyxcbiAgICAgIGdlb01pZHBvaW50OiB7XG4gICAgICAgICdAdHlwZSc6ICdHZW9Db29yZGluYXRlcycsXG4gICAgICAgIGxhdGl0dWRlOiBnZW9DaXJjbGUuZ2VvTWlkcG9pbnQubGF0aXR1ZGUsXG4gICAgICAgIGxvbmdpdHVkZTogZ2VvQ2lyY2xlLmdlb01pZHBvaW50LmxvbmdpdHVkZVxuICAgICAgfSxcbiAgICAgIGdlb1JhZGl1czogZ2VvQ2lyY2xlLmdlb1JhZGl1c1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gc2V0T2ZmZXIob2ZmZXIpIHtcbiAgZnVuY3Rpb24gc2V0UHJpY2VTcGVjaWZpY2F0aW9uKHByaWNlU3BlY2lmaWNhdGlvbikge1xuICAgIGlmIChwcmljZVNwZWNpZmljYXRpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdAdHlwZSc6IHByaWNlU3BlY2lmaWNhdGlvbi50eXBlLFxuICAgICAgICBwcmljZUN1cnJlbmN5OiBwcmljZVNwZWNpZmljYXRpb24ucHJpY2VDdXJyZW5jeSxcbiAgICAgICAgcHJpY2U6IHByaWNlU3BlY2lmaWNhdGlvbi5wcmljZVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBmdW5jdGlvbiBzZXRJdGVtT2ZmZXJlZChpdGVtT2ZmZXJlZCkge1xuICAgIGlmIChpdGVtT2ZmZXJlZCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBpdGVtT2ZmZXJlZCwge1xuICAgICAgICAnQHR5cGUnOiAnU2VydmljZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGlmIChvZmZlcikge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgb2ZmZXIsIHtcbiAgICAgICdAdHlwZSc6ICdPZmZlcicsXG4gICAgICBwcmljZVNwZWNpZmljYXRpb246IHNldFByaWNlU3BlY2lmaWNhdGlvbihvZmZlci5wcmljZVNwZWNpZmljYXRpb24pLFxuICAgICAgaXRlbU9mZmVyZWQ6IHNldEl0ZW1PZmZlcmVkKG9mZmVyLml0ZW1PZmZlcmVkKVxuICAgIH0pO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHNldE9wZW5pbmdIb3VycyhvcGVuaW5nSG91cnMpIHtcbiAgaWYgKG9wZW5pbmdIb3Vycykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgb3BlbmluZ0hvdXJzLCB7XG4gICAgICAnQHR5cGUnOiAnT3BlbmluZ0hvdXJzU3BlY2lmaWNhdGlvbidcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG52YXIgX2V4Y2x1ZGVkJHMgPSBbXCJ0eXBlXCIsIFwia2V5T3ZlcnJpZGVcIiwgXCJhZGRyZXNzXCIsIFwiZ2VvXCIsIFwicmF0aW5nXCIsIFwicmV2aWV3XCIsIFwiYWN0aW9uXCIsIFwiYXJlYVNlcnZlZFwiLCBcIm1ha2VzT2ZmZXJcIiwgXCJvcGVuaW5nSG91cnNcIiwgXCJpbWFnZXNcIl07XG5mdW5jdGlvbiBMb2NhbEJ1c2luZXNzSnNvbkxkKF9yZWYpIHtcbiAgdmFyIF9yZWYkdHlwZSA9IF9yZWYudHlwZSxcbiAgICB0eXBlID0gX3JlZiR0eXBlID09PSB2b2lkIDAgPyAnTG9jYWxCdXNpbmVzcycgOiBfcmVmJHR5cGUsXG4gICAga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgIGFkZHJlc3MgPSBfcmVmLmFkZHJlc3MsXG4gICAgZ2VvID0gX3JlZi5nZW8sXG4gICAgcmF0aW5nID0gX3JlZi5yYXRpbmcsXG4gICAgcmV2aWV3ID0gX3JlZi5yZXZpZXcsXG4gICAgYWN0aW9uID0gX3JlZi5hY3Rpb24sXG4gICAgYXJlYVNlcnZlZCA9IF9yZWYuYXJlYVNlcnZlZCxcbiAgICBtYWtlc09mZmVyID0gX3JlZi5tYWtlc09mZmVyLFxuICAgIG9wZW5pbmdIb3VycyA9IF9yZWYub3BlbmluZ0hvdXJzLFxuICAgIGltYWdlcyA9IF9yZWYuaW1hZ2VzLFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQkcyk7XG4gIHZhciBkYXRhID0gX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICBpbWFnZTogaW1hZ2VzLFxuICAgIGFkZHJlc3M6IHNldEFkZHJlc3MoYWRkcmVzcyksXG4gICAgZ2VvOiBzZXRHZW8oZ2VvKSxcbiAgICBhZ2dyZWdhdGVSYXRpbmc6IHNldEFnZ3JlZ2F0ZVJhdGluZyhyYXRpbmcpLFxuICAgIHJldmlldzogc2V0UmV2aWV3cyhyZXZpZXcpLFxuICAgIHBvdGVudGlhbEFjdGlvbjogc2V0QWN0aW9uKGFjdGlvbiksXG4gICAgYXJlYVNlcnZlZDogYXJlYVNlcnZlZCAmJiBhcmVhU2VydmVkLm1hcChzZXRHZW9DaXJjbGUpLFxuICAgIG1ha2VzT2ZmZXI6IG1ha2VzT2ZmZXIgPT0gbnVsbCA/IHZvaWQgMCA6IG1ha2VzT2ZmZXIubWFwKHNldE9mZmVyKSxcbiAgICBvcGVuaW5nSG91cnNTcGVjaWZpY2F0aW9uOiBBcnJheS5pc0FycmF5KG9wZW5pbmdIb3VycykgPyBvcGVuaW5nSG91cnMubWFwKHNldE9wZW5pbmdIb3VycykgOiBzZXRPcGVuaW5nSG91cnMob3BlbmluZ0hvdXJzKVxuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEpzb25MZCwgX2V4dGVuZHMoe1xuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5T3ZlcnJpZGU6IGtleU92ZXJyaWRlXG4gIH0sIGRhdGEsIHtcbiAgICBzY3JpcHRLZXk6IFwiTG9jYWxCdXNpbmVzc1wiXG4gIH0pKTtcbn1cblxudmFyIF9leGNsdWRlZCRyID0gW1widHlwZVwiLCBcImtleU92ZXJyaWRlXCIsIFwibWFpbkVudGl0eVwiXSxcbiAgX2V4Y2x1ZGVkMiA9IFtcInVwdm90ZUNvdW50XCJdO1xuZnVuY3Rpb24gUUFQYWdlSnNvbkxkKF9yZWYpIHtcbiAgdmFyIF9tYWluRW50aXR5JGF1dGhvciwgX21haW5FbnRpdHkkYWNjZXB0ZWRBLCBfbWFpbkVudGl0eSRhY2NlcHRlZEEyO1xuICB2YXIgX3JlZiR0eXBlID0gX3JlZi50eXBlLFxuICAgIHR5cGUgPSBfcmVmJHR5cGUgPT09IHZvaWQgMCA/ICdRQVBhZ2UnIDogX3JlZiR0eXBlLFxuICAgIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICBtYWluRW50aXR5ID0gX3JlZi5tYWluRW50aXR5LFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQkcik7XG4gIHZhciBkYXRhID0gX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICBtYWluRW50aXR5OiBfZXh0ZW5kcyh7fSwgbWFpbkVudGl0eSwge1xuICAgICAgJ0B0eXBlJzogJ1F1ZXN0aW9uJyxcbiAgICAgIGF1dGhvcjogc2V0QXV0aG9yKChfbWFpbkVudGl0eSRhdXRob3IgPSBtYWluRW50aXR5LmF1dGhvcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9tYWluRW50aXR5JGF1dGhvci5uYW1lKVxuICAgIH0sIG1haW5FbnRpdHkuYWNjZXB0ZWRBbnN3ZXIgJiYge1xuICAgICAgYWNjZXB0ZWRBbnN3ZXI6IF9leHRlbmRzKHt9LCBtYWluRW50aXR5LmFjY2VwdGVkQW5zd2VyLCB7XG4gICAgICAgICdAdHlwZSc6ICdBbnN3ZXInLFxuICAgICAgICBhdXRob3I6IHNldEF1dGhvcigoX21haW5FbnRpdHkkYWNjZXB0ZWRBID0gbWFpbkVudGl0eS5hY2NlcHRlZEFuc3dlcikgPT0gbnVsbCA/IHZvaWQgMCA6IChfbWFpbkVudGl0eSRhY2NlcHRlZEEyID0gX21haW5FbnRpdHkkYWNjZXB0ZWRBLmF1dGhvcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9tYWluRW50aXR5JGFjY2VwdGVkQTIubmFtZSlcbiAgICAgIH0pXG4gICAgfSwgbWFpbkVudGl0eS5zdWdnZXN0ZWRBbnN3ZXIgJiYge1xuICAgICAgc3VnZ2VzdGVkQW5zd2VyOiBtYWluRW50aXR5LnN1Z2dlc3RlZEFuc3dlci5tYXAoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgIHZhciBfcmVzdCRhdXRob3I7XG4gICAgICAgIHZhciB1cHZvdGVDb3VudCA9IF9yZWYyLnVwdm90ZUNvdW50LFxuICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMiwgX2V4Y2x1ZGVkMik7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgICAgICAgICdAdHlwZSc6ICdBbnN3ZXInLFxuICAgICAgICAgIHVwdm90ZUNvdW50OiB1cHZvdGVDb3VudCB8fCAwLFxuICAgICAgICAgIGF1dGhvcjogc2V0QXV0aG9yKChfcmVzdCRhdXRob3IgPSByZXN0LmF1dGhvcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9yZXN0JGF1dGhvci5uYW1lKVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChKc29uTGQsIF9leHRlbmRzKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleU92ZXJyaWRlOiBrZXlPdmVycmlkZVxuICB9LCBkYXRhLCB7XG4gICAgc2NyaXB0S2V5OiBcIlFBUGFnZVwiXG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gc2V0SXRlbUxpc3RFbGVtZW50cyhpdGVtcykge1xuICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ0B0eXBlJzogJ0xpc3RJdGVtJyxcbiAgICAgICAgcG9zaXRpb246IGl0ZW0ucG9zaXRpb24sXG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAnQGlkJzogaXRlbS5pdGVtLFxuICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbnZhciBfZXhjbHVkZWQkcSA9IFtcInR5cGVcIiwgXCJrZXlPdmVycmlkZVwiLCBcImJyZWFkY3J1bWJcIl07XG5mdW5jdGlvbiBQcm9maWxlUGFnZUpzb25MZChfcmVmKSB7XG4gIHZhciBfcmVmJHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgdHlwZSA9IF9yZWYkdHlwZSA9PT0gdm9pZCAwID8gJ1Byb2ZpbGVQYWdlJyA6IF9yZWYkdHlwZSxcbiAgICBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgYnJlYWRjcnVtYiA9IF9yZWYuYnJlYWRjcnVtYixcbiAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgX2V4Y2x1ZGVkJHEpO1xuICB2YXIgZGF0YSA9IF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgYnJlYWRjcnVtYjogQXJyYXkuaXNBcnJheShicmVhZGNydW1iKSA/IHtcbiAgICAgICdAdHlwZSc6ICdCcmVhZGNydW1iTGlzdCcsXG4gICAgICBpdGVtTGlzdEVsZW1lbnQ6IHNldEl0ZW1MaXN0RWxlbWVudHMoYnJlYWRjcnVtYilcbiAgICB9IDogYnJlYWRjcnVtYlxuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEpzb25MZCwgX2V4dGVuZHMoe1xuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5T3ZlcnJpZGU6IGtleU92ZXJyaWRlXG4gIH0sIGRhdGEsIHtcbiAgICBzY3JpcHRLZXk6IFwiUHJvZmlsZVBhZ2VcIlxuICB9KSk7XG59XG5cbnZhciBfZXhjbHVkZWQkcCA9IFtcInR5cGVcIiwgXCJrZXlPdmVycmlkZVwiLCBcInBvdGVudGlhbEFjdGlvbnNcIl07XG5mdW5jdGlvbiBTaXRlTGlua3NTZWFyY2hCb3hKc29uTGQoX3JlZikge1xuICB2YXIgX3JlZiR0eXBlID0gX3JlZi50eXBlLFxuICAgIHR5cGUgPSBfcmVmJHR5cGUgPT09IHZvaWQgMCA/ICdXZWJTaXRlJyA6IF9yZWYkdHlwZSxcbiAgICBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgcG90ZW50aWFsQWN0aW9ucyA9IF9yZWYucG90ZW50aWFsQWN0aW9ucyxcbiAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgX2V4Y2x1ZGVkJHApO1xuICBmdW5jdGlvbiBzZXRQb3RlbnRpYWxBY3Rpb24oYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgdmFyIHRhcmdldCA9IGFjdGlvbi50YXJnZXQsXG4gICAgICAgIHF1ZXJ5SW5wdXQgPSBhY3Rpb24ucXVlcnlJbnB1dDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdAdHlwZSc6ICdTZWFyY2hBY3Rpb24nLFxuICAgICAgICB0YXJnZXQ6IHRhcmdldCArIFwiPXtcIiArIHF1ZXJ5SW5wdXQgKyBcIn1cIixcbiAgICAgICAgJ3F1ZXJ5LWlucHV0JzogXCJyZXF1aXJlZCBuYW1lPVwiICsgcXVlcnlJbnB1dFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICB2YXIgZGF0YSA9IF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgcG90ZW50aWFsQWN0aW9uOiBwb3RlbnRpYWxBY3Rpb25zLm1hcChzZXRQb3RlbnRpYWxBY3Rpb24pXG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSnNvbkxkLCBfZXh0ZW5kcyh7XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXlPdmVycmlkZToga2V5T3ZlcnJpZGVcbiAgfSwgZGF0YSwge1xuICAgIHNjcmlwdEtleTogXCJqc29ubGQtc2l0ZUxpbmtzU2VhcmNoQm94XCJcbiAgfSkpO1xufVxuXG52YXIgX2V4Y2x1ZGVkJG8gPSBbXCJ0eXBlXCIsIFwia2V5T3ZlcnJpZGVcIiwgXCJhdXRob3JOYW1lXCIsIFwiaW1hZ2VzXCIsIFwieWllbGRzXCIsIFwiY2F0ZWdvcnlcIiwgXCJjdWlzaW5lXCIsIFwiY2Fsb3JpZXNcIiwgXCJhZ2dyZWdhdGVSYXRpbmdcIiwgXCJ2aWRlb1wiLCBcImluZ3JlZGllbnRzXCIsIFwiaW5zdHJ1Y3Rpb25zXCJdO1xuZnVuY3Rpb24gUmVjaXBlSnNvbkxkKF9yZWYpIHtcbiAgdmFyIF9yZWYkdHlwZSA9IF9yZWYudHlwZSxcbiAgICB0eXBlID0gX3JlZiR0eXBlID09PSB2b2lkIDAgPyAnUmVjaXBlJyA6IF9yZWYkdHlwZSxcbiAgICBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgYXV0aG9yTmFtZSA9IF9yZWYuYXV0aG9yTmFtZSxcbiAgICBpbWFnZXMgPSBfcmVmLmltYWdlcyxcbiAgICB5aWVsZHMgPSBfcmVmLnlpZWxkcyxcbiAgICBjYXRlZ29yeSA9IF9yZWYuY2F0ZWdvcnksXG4gICAgY3Vpc2luZSA9IF9yZWYuY3Vpc2luZSxcbiAgICBjYWxvcmllcyA9IF9yZWYuY2Fsb3JpZXMsXG4gICAgYWdncmVnYXRlUmF0aW5nID0gX3JlZi5hZ2dyZWdhdGVSYXRpbmcsXG4gICAgdmlkZW8gPSBfcmVmLnZpZGVvLFxuICAgIGluZ3JlZGllbnRzID0gX3JlZi5pbmdyZWRpZW50cyxcbiAgICBpbnN0cnVjdGlvbnMgPSBfcmVmLmluc3RydWN0aW9ucyxcbiAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgX2V4Y2x1ZGVkJG8pO1xuICB2YXIgZGF0YSA9IF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgYXV0aG9yOiBzZXRBdXRob3IoYXV0aG9yTmFtZSksXG4gICAgaW1hZ2U6IGltYWdlcyxcbiAgICByZWNpcGVZaWVsZDogeWllbGRzLFxuICAgIHJlY2lwZUNhdGVnb3J5OiBjYXRlZ29yeSxcbiAgICByZWNpcGVDdWlzaW5lOiBjdWlzaW5lLFxuICAgIG51dHJpdGlvbjogc2V0TnV0cml0aW9uKGNhbG9yaWVzKSxcbiAgICBhZ2dyZWdhdGVSYXRpbmc6IHNldEFnZ3JlZ2F0ZVJhdGluZyhhZ2dyZWdhdGVSYXRpbmcpLFxuICAgIHZpZGVvOiBzZXRWaWRlbyh2aWRlbyksXG4gICAgcmVjaXBlSW5ncmVkaWVudDogaW5ncmVkaWVudHMsXG4gICAgcmVjaXBlSW5zdHJ1Y3Rpb25zOiBpbnN0cnVjdGlvbnMgPyBpbnN0cnVjdGlvbnMubWFwKHNldEluc3RydWN0aW9uKSA6IHVuZGVmaW5lZFxuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEpzb25MZCwgX2V4dGVuZHMoe1xuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5T3ZlcnJpZGU6IGtleU92ZXJyaWRlXG4gIH0sIGRhdGEsIHtcbiAgICBzY3JpcHRLZXk6IFwicmVjaXBlXCJcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBzZXRMb2NhdGlvbihsb2NhdGlvbikge1xuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBpZiAodHlwZW9mIGxvY2F0aW9uID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBsb2NhdGlvbjtcbiAgfVxuICBpZiAoJ3VybCcgaW4gbG9jYXRpb24pIHtcbiAgICByZXR1cm4gc2V0VmlydHVhbExvY2F0aW9uKGxvY2F0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc2V0UGxhY2UobG9jYXRpb24pO1xuICB9XG59XG5mdW5jdGlvbiBzZXRWaXJ0dWFsTG9jYXRpb24obG9jYXRpb24pIHtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBsb2NhdGlvbiwge1xuICAgICdAdHlwZSc6ICdWaXJ0dWFsTG9jYXRpb24nXG4gIH0pO1xufVxuZnVuY3Rpb24gc2V0UGxhY2UobG9jYXRpb24pIHtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBsb2NhdGlvbiwge1xuICAgIGFkZHJlc3M6IHNldEFkZHJlc3MobG9jYXRpb24uYWRkcmVzcyksXG4gICAgJ0B0eXBlJzogJ1BsYWNlJ1xuICB9KTtcbn1cblxudmFyIF9leGNsdWRlZCRuID0gW1widHlwZVwiXTtcbmZ1bmN0aW9uIHNldFBlcmZvcm1lcihwZXJmb3JtZXIpIHtcbiAgaWYgKHBlcmZvcm1lcikge1xuICAgIHZhciB0eXBlID0gcGVyZm9ybWVyLnR5cGUsXG4gICAgICByZXN0UGVyZm9ybWVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocGVyZm9ybWVyLCBfZXhjbHVkZWQkbik7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCByZXN0UGVyZm9ybWVyLCB7XG4gICAgICAnQHR5cGUnOiB0eXBlIHx8ICdQZXJmb3JtaW5nR3JvdXAnXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxudmFyIF9leGNsdWRlZCRtID0gW1wic2VsbGVyXCJdO1xuZnVuY3Rpb24gc2V0T2ZmZXJzKG9mZmVycykge1xuICBmdW5jdGlvbiBtYXBPZmZlcihfcmVmKSB7XG4gICAgdmFyIHNlbGxlciA9IF9yZWYuc2VsbGVyLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCRtKTtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICAgICdAdHlwZSc6ICdPZmZlcidcbiAgICB9LCBzZWxsZXIgJiYge1xuICAgICAgc2VsbGVyOiB7XG4gICAgICAgICdAdHlwZSc6ICdPcmdhbml6YXRpb24nLFxuICAgICAgICBuYW1lOiBzZWxsZXIubmFtZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KG9mZmVycykpIHtcbiAgICByZXR1cm4gb2ZmZXJzLm1hcChtYXBPZmZlcik7XG4gIH0gZWxzZSBpZiAob2ZmZXJzKSB7XG4gICAgcmV0dXJuIG1hcE9mZmVyKG9mZmVycyk7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gc2V0QWdncmVnYXRlT2ZmZXIoYWdncmVnYXRlT2ZmZXIpIHtcbiAgaWYgKGFnZ3JlZ2F0ZU9mZmVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdAdHlwZSc6ICdBZ2dyZWdhdGVPZmZlcicsXG4gICAgICBwcmljZUN1cnJlbmN5OiBhZ2dyZWdhdGVPZmZlci5wcmljZUN1cnJlbmN5LFxuICAgICAgaGlnaFByaWNlOiBhZ2dyZWdhdGVPZmZlci5oaWdoUHJpY2UsXG4gICAgICBsb3dQcmljZTogYWdncmVnYXRlT2ZmZXIubG93UHJpY2UsXG4gICAgICBvZmZlckNvdW50OiBhZ2dyZWdhdGVPZmZlci5vZmZlckNvdW50LFxuICAgICAgb2ZmZXJzOiBzZXRPZmZlcnMoYWdncmVnYXRlT2ZmZXIub2ZmZXJzKVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxudmFyIF9leGNsdWRlZCRsID0gW1widHlwZVwiXTtcbmZ1bmN0aW9uIHNldE9yZ2FuaXplcihvcmdhbml6ZXIpIHtcbiAgaWYgKG9yZ2FuaXplcikge1xuICAgIHZhciB0eXBlID0gb3JnYW5pemVyLnR5cGUsXG4gICAgICByZXN0T3JnYW5pemVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uob3JnYW5pemVyLCBfZXhjbHVkZWQkbCk7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCByZXN0T3JnYW5pemVyLCB7XG4gICAgICAnQHR5cGUnOiB0eXBlIHx8ICdQZXJzb24nXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxudmFyIF9leGNsdWRlZCRrID0gW1widHlwZVwiLCBcImtleU92ZXJyaWRlXCIsIFwibG9jYXRpb25cIiwgXCJpbWFnZXNcIiwgXCJvZmZlcnNcIiwgXCJhZ2dyZWdhdGVPZmZlclwiLCBcInBlcmZvcm1lcnNcIiwgXCJvcmdhbml6ZXJcIiwgXCJldmVudFN0YXR1c1wiLCBcImV2ZW50QXR0ZW5kYW5jZU1vZGVcIl07XG5mdW5jdGlvbiBFdmVudEpzb25MZChfcmVmKSB7XG4gIHZhciBfcmVmJHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgdHlwZSA9IF9yZWYkdHlwZSA9PT0gdm9pZCAwID8gJ0V2ZW50JyA6IF9yZWYkdHlwZSxcbiAgICBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgbG9jYXRpb24gPSBfcmVmLmxvY2F0aW9uLFxuICAgIGltYWdlcyA9IF9yZWYuaW1hZ2VzLFxuICAgIG9mZmVycyA9IF9yZWYub2ZmZXJzLFxuICAgIGFnZ3JlZ2F0ZU9mZmVyID0gX3JlZi5hZ2dyZWdhdGVPZmZlcixcbiAgICBwZXJmb3JtZXJzID0gX3JlZi5wZXJmb3JtZXJzLFxuICAgIG9yZ2FuaXplciA9IF9yZWYub3JnYW5pemVyLFxuICAgIGV2ZW50U3RhdHVzID0gX3JlZi5ldmVudFN0YXR1cyxcbiAgICBldmVudEF0dGVuZGFuY2VNb2RlID0gX3JlZi5ldmVudEF0dGVuZGFuY2VNb2RlLFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQkayk7XG4gIHZhciBkYXRhID0gX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICBsb2NhdGlvbjogc2V0TG9jYXRpb24obG9jYXRpb24pLFxuICAgIGltYWdlOiBpbWFnZXMsXG4gICAgb2ZmZXJzOiBvZmZlcnMgPyBzZXRPZmZlcnMob2ZmZXJzKSA6IHNldEFnZ3JlZ2F0ZU9mZmVyKGFnZ3JlZ2F0ZU9mZmVyKSxcbiAgICBwZXJmb3JtZXI6IEFycmF5LmlzQXJyYXkocGVyZm9ybWVycykgPyBwZXJmb3JtZXJzLm1hcChzZXRQZXJmb3JtZXIpIDogc2V0UGVyZm9ybWVyKHBlcmZvcm1lcnMpLFxuICAgIG9yZ2FuaXplcjogQXJyYXkuaXNBcnJheShvcmdhbml6ZXIpID8gb3JnYW5pemVyLm1hcChzZXRPcmdhbml6ZXIpIDogc2V0T3JnYW5pemVyKG9yZ2FuaXplciksXG4gICAgZXZlbnRTdGF0dXM6IGV2ZW50U3RhdHVzID8gXCJodHRwczovL3NjaGVtYS5vcmcvXCIgKyBldmVudFN0YXR1cyA6IHVuZGVmaW5lZCxcbiAgICBldmVudEF0dGVuZGFuY2VNb2RlOiBldmVudEF0dGVuZGFuY2VNb2RlID8gXCJodHRwczovL3NjaGVtYS5vcmcvXCIgKyBldmVudEF0dGVuZGFuY2VNb2RlIDogdW5kZWZpbmVkXG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSnNvbkxkLCBfZXh0ZW5kcyh7XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXlPdmVycmlkZToga2V5T3ZlcnJpZGVcbiAgfSwgZGF0YSwge1xuICAgIHNjcmlwdEtleTogXCJFdmVudFwiXG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gc2V0Q29udGFjdFBvaW50KGNvbnRhY3RQb2ludCkge1xuICBpZiAoY29udGFjdFBvaW50KSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBjb250YWN0UG9pbnQsIHtcbiAgICAgICdAdHlwZSc6ICdDb250YWN0UG9pbnQnXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxudmFyIF9leGNsdWRlZCRqID0gW1widHlwZVwiLCBcImtleU92ZXJyaWRlXCIsIFwiY29udGFjdFBvaW50XCJdO1xuZnVuY3Rpb24gQ29ycG9yYXRlQ29udGFjdEpzb25MZChfcmVmKSB7XG4gIHZhciBfcmVmJHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgdHlwZSA9IF9yZWYkdHlwZSA9PT0gdm9pZCAwID8gJ09yZ2FuaXphdGlvbicgOiBfcmVmJHR5cGUsXG4gICAga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgIGNvbnRhY3RQb2ludCA9IF9yZWYuY29udGFjdFBvaW50LFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQkaik7XG4gIHZhciBkYXRhID0gX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICBjb250YWN0UG9pbnQ6IGNvbnRhY3RQb2ludC5tYXAoc2V0Q29udGFjdFBvaW50KVxuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEpzb25MZCwgX2V4dGVuZHMoe1xuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5T3ZlcnJpZGU6IGtleU92ZXJyaWRlXG4gIH0sIGRhdGEsIHtcbiAgICBzY3JpcHRLZXk6IFwiQ29ycG9yYXRlQ29udGFjdFwiXG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gc2V0Q3JlYXRpdmVXb3JrKGNyZWF0aXZlV29yaykge1xuICBpZiAoY3JlYXRpdmVXb3JrKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBjcmVhdGl2ZVdvcmssIHtcbiAgICAgICdAdHlwZSc6ICdDcmVhdGl2ZVdvcmsnXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxudmFyIF9leGNsdWRlZCRpID0gW1widHlwZVwiLCBcImtleU92ZXJyaWRlXCIsIFwiaGFzUGFydFwiXTtcbmZ1bmN0aW9uIENvbGxlY3Rpb25QYWdlSnNvbkxkKF9yZWYpIHtcbiAgdmFyIF9yZWYkdHlwZSA9IF9yZWYudHlwZSxcbiAgICB0eXBlID0gX3JlZiR0eXBlID09PSB2b2lkIDAgPyAnQ29sbGVjdGlvblBhZ2UnIDogX3JlZiR0eXBlLFxuICAgIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICBoYXNQYXJ0ID0gX3JlZi5oYXNQYXJ0LFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQkaSk7XG4gIHZhciBkYXRhID0gX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICBoYXNQYXJ0OiBoYXNQYXJ0Lm1hcChzZXRDcmVhdGl2ZVdvcmspXG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSnNvbkxkLCBfZXh0ZW5kcyh7XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXlPdmVycmlkZToga2V5T3ZlcnJpZGVcbiAgfSwgZGF0YSwge1xuICAgIHNjcmlwdEtleTogXCJDb2xsZWN0aW9uUGFnZVwiXG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gc2V0TWFudWZhY3R1cmVyKG1hbnVmYWN0dXJlcikge1xuICBpZiAobWFudWZhY3R1cmVyICYmIChtYW51ZmFjdHVyZXIubWFudWZhY3R1cmVyTmFtZSB8fCBtYW51ZmFjdHVyZXIubWFudWZhY3R1cmVyTG9nbykpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ0B0eXBlJzogJ09yZ2FuaXphdGlvbicsXG4gICAgICBuYW1lOiBtYW51ZmFjdHVyZXIubWFudWZhY3R1cmVyTmFtZSxcbiAgICAgIGxvZ286IHNldEltYWdlKG1hbnVmYWN0dXJlci5tYW51ZmFjdHVyZXJMb2dvKVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gc2V0QnJhbmQoYnJhbmQpIHtcbiAgaWYgKGJyYW5kKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdAdHlwZSc6ICdCcmFuZCcsXG4gICAgICBuYW1lOiBicmFuZFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxudmFyIF9leGNsdWRlZCRoID0gW1widHlwZVwiLCBcImtleU92ZXJyaWRlXCIsIFwiaW1hZ2VzXCIsIFwiYnJhbmRcIiwgXCJyZXZpZXdzXCIsIFwiYWdncmVnYXRlUmF0aW5nXCIsIFwibWFudWZhY3R1cmVyTG9nb1wiLCBcIm1hbnVmYWN0dXJlck5hbWVcIiwgXCJvZmZlcnNcIiwgXCJhZ2dyZWdhdGVPZmZlclwiLCBcInByb2R1Y3ROYW1lXCJdO1xuZnVuY3Rpb24gUHJvZHVjdEpzb25MZChfcmVmKSB7XG4gIHZhciBfcmVmJHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgdHlwZSA9IF9yZWYkdHlwZSA9PT0gdm9pZCAwID8gJ1Byb2R1Y3QnIDogX3JlZiR0eXBlLFxuICAgIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICBpbWFnZXMgPSBfcmVmLmltYWdlcyxcbiAgICBicmFuZCA9IF9yZWYuYnJhbmQsXG4gICAgcmV2aWV3cyA9IF9yZWYucmV2aWV3cyxcbiAgICBhZ2dyZWdhdGVSYXRpbmcgPSBfcmVmLmFnZ3JlZ2F0ZVJhdGluZyxcbiAgICBtYW51ZmFjdHVyZXJMb2dvID0gX3JlZi5tYW51ZmFjdHVyZXJMb2dvLFxuICAgIG1hbnVmYWN0dXJlck5hbWUgPSBfcmVmLm1hbnVmYWN0dXJlck5hbWUsXG4gICAgb2ZmZXJzID0gX3JlZi5vZmZlcnMsXG4gICAgYWdncmVnYXRlT2ZmZXIgPSBfcmVmLmFnZ3JlZ2F0ZU9mZmVyLFxuICAgIHByb2R1Y3ROYW1lID0gX3JlZi5wcm9kdWN0TmFtZSxcbiAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgX2V4Y2x1ZGVkJGgpO1xuICB2YXIgZGF0YSA9IF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgaW1hZ2U6IGltYWdlcyxcbiAgICBicmFuZDogc2V0QnJhbmQoYnJhbmQpLFxuICAgIHJldmlldzogc2V0UmV2aWV3cyhyZXZpZXdzKSxcbiAgICBhZ2dyZWdhdGVSYXRpbmc6IHNldEFnZ3JlZ2F0ZVJhdGluZyhhZ2dyZWdhdGVSYXRpbmcpLFxuICAgIG1hbnVmYWN0dXJlcjogc2V0TWFudWZhY3R1cmVyKHtcbiAgICAgIG1hbnVmYWN0dXJlckxvZ286IG1hbnVmYWN0dXJlckxvZ28sXG4gICAgICBtYW51ZmFjdHVyZXJOYW1lOiBtYW51ZmFjdHVyZXJOYW1lXG4gICAgfSksXG4gICAgb2ZmZXJzOiBvZmZlcnMgPyBzZXRPZmZlcnMob2ZmZXJzKSA6IHNldEFnZ3JlZ2F0ZU9mZmVyKGFnZ3JlZ2F0ZU9mZmVyKSxcbiAgICBuYW1lOiBwcm9kdWN0TmFtZVxuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEpzb25MZCwgX2V4dGVuZHMoe1xuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5T3ZlcnJpZGU6IGtleU92ZXJyaWRlXG4gIH0sIGRhdGEsIHtcbiAgICBzY3JpcHRLZXk6IFwiUHJvZHVjdFwiXG4gIH0pKTtcbn1cblxudmFyIF9leGNsdWRlZCRnID0gW1widHlwZVwiLCBcImtleU92ZXJyaWRlXCIsIFwicHJpY2VDdXJyZW5jeVwiLCBcInByaWNlXCIsIFwiYWdncmVnYXRlUmF0aW5nXCIsIFwicmV2aWV3XCIsIFwia2V5d29yZHNcIl07XG5mdW5jdGlvbiBTb2Z0d2FyZUFwcEpzb25MZChfcmVmKSB7XG4gIHZhciBfcmVmJHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgdHlwZSA9IF9yZWYkdHlwZSA9PT0gdm9pZCAwID8gJ1NvZnR3YXJlQXBwbGljYXRpb24nIDogX3JlZiR0eXBlLFxuICAgIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICBwcmljZUN1cnJlbmN5ID0gX3JlZi5wcmljZUN1cnJlbmN5LFxuICAgIHByaWNlID0gX3JlZi5wcmljZSxcbiAgICBhZ2dyZWdhdGVSYXRpbmcgPSBfcmVmLmFnZ3JlZ2F0ZVJhdGluZyxcbiAgICByZXZpZXcgPSBfcmVmLnJldmlldyxcbiAgICBrZXl3b3JkcyA9IF9yZWYua2V5d29yZHMsXG4gICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCRnKTtcbiAgdmFyIGRhdGEgPSBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIG9mZmVyczoge1xuICAgICAgJ0B0eXBlJzogJ09mZmVyJyxcbiAgICAgIHByaWNlOiBwcmljZSxcbiAgICAgIHByaWNlQ3VycmVuY3k6IHByaWNlQ3VycmVuY3lcbiAgICB9LFxuICAgIGFnZ3JlZ2F0ZVJhdGluZzogc2V0QWdncmVnYXRlUmF0aW5nKGFnZ3JlZ2F0ZVJhdGluZyksXG4gICAgcmV2aWV3OiBzZXRSZXZpZXdzKHJldmlldyksXG4gICAga2V5d29yZHM6IGtleXdvcmRzXG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSnNvbkxkLCBfZXh0ZW5kcyh7XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXlPdmVycmlkZToga2V5T3ZlcnJpZGVcbiAgfSwgZGF0YSwge1xuICAgIHNjcmlwdEtleTogXCJTb2Z0d2FyZUFwcFwiXG4gIH0pKTtcbn1cblxudmFyIF9leGNsdWRlZCRmID0gW1widHlwZVwiLCBcImtleU92ZXJyaWRlXCJdO1xuZnVuY3Rpb24gVmlkZW9Kc29uTGQoX3JlZikge1xuICB2YXIgX3JlZiR0eXBlID0gX3JlZi50eXBlLFxuICAgIHR5cGUgPSBfcmVmJHR5cGUgPT09IHZvaWQgMCA/ICdWaWRlbycgOiBfcmVmJHR5cGUsXG4gICAga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQkZik7XG4gIHZhciBkYXRhID0gc2V0VmlkZW8ocmVzdCwgdHJ1ZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChKc29uTGQsIF9leHRlbmRzKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleU92ZXJyaWRlOiBrZXlPdmVycmlkZVxuICB9LCBkYXRhLCB7XG4gICAgc2NyaXB0S2V5OiBcIlZpZGVvXCJcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBzZXRQcm9kdWNlcihwcm9kdWNlcikge1xuICBpZiAocHJvZHVjZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ0B0eXBlJzogJ09yZ2FuaXphdGlvbicsXG4gICAgICBzYW1lQXM6IHByb2R1Y2VyLnVybCxcbiAgICAgIG5hbWU6IHByb2R1Y2VyLm5hbWVcbiAgICB9O1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHNldFByb3ZpZGVyKHByb3ZpZGVyKSB7XG4gIGlmIChwcm92aWRlcikge1xuICAgIHJldHVybiB7XG4gICAgICAnQHR5cGUnOiBwcm92aWRlci50eXBlIHx8ICdPcmdhbml6YXRpb24nLFxuICAgICAgbmFtZTogcHJvdmlkZXIubmFtZSxcbiAgICAgIHNhbWVBczogcHJvdmlkZXIudXJsXG4gICAgfTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG52YXIgX2V4Y2x1ZGVkJGUgPSBbXCJ0eXBlXCIsIFwia2V5T3ZlcnJpZGVcIiwgXCJhZ2dyZWdhdGVSYXRpbmdcIiwgXCJ0cmFpbGVyXCIsIFwicmV2aWV3c1wiLCBcImltYWdlXCIsIFwiYXV0aG9yTmFtZVwiLCBcInByb3ZpZGVyXCIsIFwicHJvZHVjZXJOYW1lXCIsIFwicHJvZHVjZXJVcmxcIiwgXCJvZmZlcnNcIiwgXCJvcGVyYXRpbmdTeXN0ZW1OYW1lXCIsIFwicGxhdGZvcm1OYW1lXCIsIFwidHJhbnNsYXRvck5hbWVcIiwgXCJsYW5ndWFnZU5hbWVcIiwgXCJnZW5yZU5hbWVcIiwgXCJwdWJsaXNoZXJOYW1lXCJdO1xuZnVuY3Rpb24gVmlkZW9HYW1lSnNvbkxkKF9yZWYpIHtcbiAgdmFyIF9yZWYkdHlwZSA9IF9yZWYudHlwZSxcbiAgICB0eXBlID0gX3JlZiR0eXBlID09PSB2b2lkIDAgPyAnVmlkZW9HYW1lJyA6IF9yZWYkdHlwZSxcbiAgICBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgYWdncmVnYXRlUmF0aW5nID0gX3JlZi5hZ2dyZWdhdGVSYXRpbmcsXG4gICAgdHJhaWxlciA9IF9yZWYudHJhaWxlcixcbiAgICByZXZpZXdzID0gX3JlZi5yZXZpZXdzLFxuICAgIGltYWdlID0gX3JlZi5pbWFnZSxcbiAgICBhdXRob3JOYW1lID0gX3JlZi5hdXRob3JOYW1lLFxuICAgIHByb3ZpZGVyID0gX3JlZi5wcm92aWRlcixcbiAgICBwcm9kdWNlck5hbWUgPSBfcmVmLnByb2R1Y2VyTmFtZSxcbiAgICBwcm9kdWNlclVybCA9IF9yZWYucHJvZHVjZXJVcmwsXG4gICAgb2ZmZXJzID0gX3JlZi5vZmZlcnMsXG4gICAgb3BlcmF0aW5nU3lzdGVtTmFtZSA9IF9yZWYub3BlcmF0aW5nU3lzdGVtTmFtZSxcbiAgICBwbGF0Zm9ybU5hbWUgPSBfcmVmLnBsYXRmb3JtTmFtZSxcbiAgICB0cmFuc2xhdG9yTmFtZSA9IF9yZWYudHJhbnNsYXRvck5hbWUsXG4gICAgbGFuZ3VhZ2VOYW1lID0gX3JlZi5sYW5ndWFnZU5hbWUsXG4gICAgZ2VucmVOYW1lID0gX3JlZi5nZW5yZU5hbWUsXG4gICAgcHVibGlzaGVyTmFtZSA9IF9yZWYucHVibGlzaGVyTmFtZSxcbiAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgX2V4Y2x1ZGVkJGUpO1xuICB2YXIgZGF0YSA9IF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgYWdncmVnYXRlUmF0aW5nOiBzZXRBZ2dyZWdhdGVSYXRpbmcoYWdncmVnYXRlUmF0aW5nKSxcbiAgICB0cmFpbGVyOiBzZXRWaWRlbyh0cmFpbGVyKSxcbiAgICByZXZpZXc6IHNldFJldmlld3MocmV2aWV3cyksXG4gICAgaW1hZ2U6IHNldEltYWdlKGltYWdlKSxcbiAgICBhdXRob3I6IHNldEF1dGhvcihhdXRob3JOYW1lKSxcbiAgICBwcm92aWRlcjogc2V0UHJvdmlkZXIocHJvdmlkZXIpLFxuICAgIHByb2R1Y2VyOiBzZXRQcm9kdWNlcih7XG4gICAgICBuYW1lOiBwcm9kdWNlck5hbWUsXG4gICAgICB1cmw6IHByb2R1Y2VyVXJsXG4gICAgfSksXG4gICAgb2ZmZXJzOiBzZXRPZmZlcnMob2ZmZXJzKSxcbiAgICBvcGVyYXRpbmdTeXN0ZW06IG9wZXJhdGluZ1N5c3RlbU5hbWUsXG4gICAgZ2FtZVBsYXRmb3JtOiBwbGF0Zm9ybU5hbWUsXG4gICAgdHJhbnNsYXRvcjogdHJhbnNsYXRvck5hbWUsXG4gICAgaW5MYW5ndWFnZTogbGFuZ3VhZ2VOYW1lLFxuICAgIGdlbnJlOiBnZW5yZU5hbWUsXG4gICAgcHVibGlzaGVyOiBwdWJsaXNoZXJOYW1lXG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSnNvbkxkLCBfZXh0ZW5kcyh7XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXlPdmVycmlkZToga2V5T3ZlcnJpZGVcbiAgfSwgZGF0YSwge1xuICAgIHNjcmlwdEtleTogXCJWaWRlb0dhbWVcIlxuICB9KSk7XG59XG5cbmZ1bmN0aW9uIHNldENvbnRhY3RQb2ludHMoY29udGFjdFBvaW50KSB7XG4gIGlmIChjb250YWN0UG9pbnQgJiYgY29udGFjdFBvaW50Lmxlbmd0aCkge1xuICAgIHJldHVybiBjb250YWN0UG9pbnQubWFwKGZ1bmN0aW9uIChjb250YWN0UG9pbnQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgICdAdHlwZSc6ICdDb250YWN0UG9pbnQnXG4gICAgICB9LCBjb250YWN0UG9pbnQpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbnZhciBfZXhjbHVkZWQkZCA9IFtcInR5cGVcIiwgXCJrZXlPdmVycmlkZVwiLCBcImFkZHJlc3NcIiwgXCJjb250YWN0UG9pbnRzXCIsIFwiY29udGFjdFBvaW50XCJdO1xuZnVuY3Rpb24gT3JnYW5pemF0aW9uSnNvbkxkKF9yZWYpIHtcbiAgdmFyIF9yZWYkdHlwZSA9IF9yZWYudHlwZSxcbiAgICB0eXBlID0gX3JlZiR0eXBlID09PSB2b2lkIDAgPyAnT3JnYW5pemF0aW9uJyA6IF9yZWYkdHlwZSxcbiAgICBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgYWRkcmVzcyA9IF9yZWYuYWRkcmVzcyxcbiAgICBjb250YWN0UG9pbnRzID0gX3JlZi5jb250YWN0UG9pbnRzLFxuICAgIGNvbnRhY3RQb2ludCA9IF9yZWYuY29udGFjdFBvaW50LFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQkZCk7XG4gIHZhciBkYXRhID0gX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICBhZGRyZXNzOiBzZXRBZGRyZXNzKGFkZHJlc3MpLFxuICAgIGNvbnRhY3RQb2ludDogc2V0Q29udGFjdFBvaW50cyhjb250YWN0UG9pbnQgfHwgY29udGFjdFBvaW50cylcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChKc29uTGQsIF9leHRlbmRzKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleU92ZXJyaWRlOiBrZXlPdmVycmlkZVxuICB9LCBkYXRhLCB7XG4gICAgc2NyaXB0S2V5OiBcIm9yZ2FuaXphdGlvblwiXG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gc2V0UXVlc3Rpb25zKHF1ZXN0aW9ucykge1xuICBpZiAocXVlc3Rpb25zICYmIHF1ZXN0aW9ucy5sZW5ndGgpIHtcbiAgICByZXR1cm4gcXVlc3Rpb25zLm1hcChmdW5jdGlvbiAocXVlc3Rpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdAdHlwZSc6ICdRdWVzdGlvbicsXG4gICAgICAgIG5hbWU6IHF1ZXN0aW9uLnF1ZXN0aW9uTmFtZSxcbiAgICAgICAgYWNjZXB0ZWRBbnN3ZXI6IHtcbiAgICAgICAgICAnQHR5cGUnOiAnQW5zd2VyJyxcbiAgICAgICAgICB0ZXh0OiBxdWVzdGlvbi5hY2NlcHRlZEFuc3dlclRleHRcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG52YXIgX2V4Y2x1ZGVkJGMgPSBbXCJ0eXBlXCIsIFwia2V5T3ZlcnJpZGVcIiwgXCJtYWluRW50aXR5XCJdO1xuZnVuY3Rpb24gRkFRUGFnZUpzb25MZChfcmVmKSB7XG4gIHZhciBfcmVmJHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgdHlwZSA9IF9yZWYkdHlwZSA9PT0gdm9pZCAwID8gJ0ZBUVBhZ2UnIDogX3JlZiR0eXBlLFxuICAgIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICBtYWluRW50aXR5ID0gX3JlZi5tYWluRW50aXR5LFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQkYyk7XG4gIHZhciBkYXRhID0gX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICBtYWluRW50aXR5OiBzZXRRdWVzdGlvbnMobWFpbkVudGl0eSlcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChKc29uTGQsIF9leHRlbmRzKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleU92ZXJyaWRlOiBrZXlPdmVycmlkZVxuICB9LCBkYXRhLCB7XG4gICAgc2NyaXB0S2V5OiBcImZhcS1wYWdlXCJcbiAgfSkpO1xufVxuXG52YXIgX2V4Y2x1ZGVkJGIgPSBbXCJ0eXBlXCIsIFwia2V5T3ZlcnJpZGVcIl07XG5mdW5jdGlvbiBMb2dvSnNvbkxkKF9yZWYpIHtcbiAgdmFyIF9yZWYkdHlwZSA9IF9yZWYudHlwZSxcbiAgICB0eXBlID0gX3JlZiR0eXBlID09PSB2b2lkIDAgPyAnT3JnYW5pemF0aW9uJyA6IF9yZWYkdHlwZSxcbiAgICBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCRiKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEpzb25MZCwgX2V4dGVuZHMoe1xuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5T3ZlcnJpZGU6IGtleU92ZXJyaWRlXG4gIH0sIHJlc3QsIHtcbiAgICBzY3JpcHRLZXk6IFwiTG9nb1wiXG4gIH0pKTtcbn1cblxudmFyIF9leGNsdWRlZCRhID0gW1widHlwZVwiLCBcImtleU92ZXJyaWRlXCJdO1xuZnVuY3Rpb24gRGF0YXNldEpzb25MZChfcmVmKSB7XG4gIHZhciBfcmVmJHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgdHlwZSA9IF9yZWYkdHlwZSA9PT0gdm9pZCAwID8gJ0RhdGFzZXQnIDogX3JlZiR0eXBlLFxuICAgIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgX2V4Y2x1ZGVkJGEpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSnNvbkxkLCBfZXh0ZW5kcyh7XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXlPdmVycmlkZToga2V5T3ZlcnJpZGVcbiAgfSwgcmVzdCwge1xuICAgIHNjcmlwdEtleTogXCJkYXRhc2V0XCJcbiAgfSkpO1xufVxuXG52YXIgX2V4Y2x1ZGVkJDkgPSBbXCJ0eXBlXCIsIFwia2V5T3ZlcnJpZGVcIiwgXCJjb3Vyc2VOYW1lXCIsIFwicHJvdmlkZXJcIl07XG5mdW5jdGlvbiBDb3Vyc2VKc29uTGQoX3JlZikge1xuICB2YXIgX3JlZiR0eXBlID0gX3JlZi50eXBlLFxuICAgIHR5cGUgPSBfcmVmJHR5cGUgPT09IHZvaWQgMCA/ICdDb3Vyc2UnIDogX3JlZiR0eXBlLFxuICAgIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICBjb3Vyc2VOYW1lID0gX3JlZi5jb3Vyc2VOYW1lLFxuICAgIHByb3ZpZGVyID0gX3JlZi5wcm92aWRlcixcbiAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgX2V4Y2x1ZGVkJDkpO1xuICB2YXIgZGF0YSA9IF9leHRlbmRzKHtcbiAgICBuYW1lOiBjb3Vyc2VOYW1lXG4gIH0sIHJlc3QsIHtcbiAgICBwcm92aWRlcjogc2V0UHJvdmlkZXIocHJvdmlkZXIpXG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSnNvbkxkLCBfZXh0ZW5kcyh7XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXlPdmVycmlkZToga2V5T3ZlcnJpZGVcbiAgfSwgZGF0YSwge1xuICAgIHNjcmlwdEtleTogXCJjb3Vyc2VcIlxuICB9KSk7XG59XG5cbnZhciBfZXhjbHVkZWQkOCA9IFtcInR5cGVcIiwgXCJrZXlPdmVycmlkZVwiLCBcIml0ZW1MaXN0RWxlbWVudHNcIl07XG5mdW5jdGlvbiBCcmVhZENydW1iSnNvbkxkKF9yZWYpIHtcbiAgdmFyIF9yZWYkdHlwZSA9IF9yZWYudHlwZSxcbiAgICB0eXBlID0gX3JlZiR0eXBlID09PSB2b2lkIDAgPyAnQnJlYWRjcnVtYkxpc3QnIDogX3JlZiR0eXBlLFxuICAgIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICBpdGVtTGlzdEVsZW1lbnRzID0gX3JlZi5pdGVtTGlzdEVsZW1lbnRzLFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQkOCk7XG4gIHZhciBkYXRhID0gX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICBpdGVtTGlzdEVsZW1lbnQ6IHNldEl0ZW1MaXN0RWxlbWVudHMoaXRlbUxpc3RFbGVtZW50cylcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChKc29uTGQsIF9leHRlbmRzKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleU92ZXJyaWRlOiBrZXlPdmVycmlkZVxuICB9LCBkYXRhLCB7XG4gICAgc2NyaXB0S2V5OiBcImJyZWFkY3J1bWJcIlxuICB9KSk7XG59XG5cbnZhciBfZXhjbHVkZWQkNyA9IFtcInR5cGVcIiwgXCJpZFwiLCBcImtleU92ZXJyaWRlXCIsIFwiYWdncmVnYXRlUmF0aW5nXCJdO1xuZnVuY3Rpb24gQnJhbmRKc29uTGQoX3JlZikge1xuICB2YXIgX3JlZiR0eXBlID0gX3JlZi50eXBlLFxuICAgIHR5cGUgPSBfcmVmJHR5cGUgPT09IHZvaWQgMCA/ICdCcmFuZCcgOiBfcmVmJHR5cGUsXG4gICAgaWQgPSBfcmVmLmlkLFxuICAgIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICBhZ2dyZWdhdGVSYXRpbmcgPSBfcmVmLmFnZ3JlZ2F0ZVJhdGluZyxcbiAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgX2V4Y2x1ZGVkJDcpO1xuICB2YXIgZGF0YSA9IF9leHRlbmRzKHtcbiAgICBhZ2dyZWdhdGVSYXRpbmc6IHNldEFnZ3JlZ2F0ZVJhdGluZyhhZ2dyZWdhdGVSYXRpbmcpLFxuICAgICdAaWQnOiBpZFxuICB9LCByZXN0KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEpzb25MZCwgX2V4dGVuZHMoe1xuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5T3ZlcnJpZGU6IGtleU92ZXJyaWRlXG4gIH0sIGRhdGEsIHtcbiAgICBzY3JpcHRLZXk6IFwiYnJhbmRcIlxuICB9KSk7XG59XG5cbnZhciBfZXhjbHVkZWQkNiA9IFtcInR5cGVcIiwgXCJrZXlPdmVycmlkZVwiLCBcInVybFwiLCBcInRpdGxlXCIsIFwiaW1hZ2VzXCIsIFwiZGF0ZVB1Ymxpc2hlZFwiLCBcImRhdGVNb2RpZmllZFwiLCBcImF1dGhvck5hbWVcIiwgXCJwdWJsaXNoZXJOYW1lXCIsIFwicHVibGlzaGVyTG9nb1wiLCBcImRlc2NyaXB0aW9uXCIsIFwiaXNBY2Nlc3NpYmxlRm9yRnJlZVwiXTtcbmZ1bmN0aW9uIEFydGljbGVKc29uTGQoX3JlZikge1xuICB2YXIgX3JlZiR0eXBlID0gX3JlZi50eXBlLFxuICAgIHR5cGUgPSBfcmVmJHR5cGUgPT09IHZvaWQgMCA/ICdBcnRpY2xlJyA6IF9yZWYkdHlwZSxcbiAgICBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgdXJsID0gX3JlZi51cmwsXG4gICAgdGl0bGUgPSBfcmVmLnRpdGxlLFxuICAgIGltYWdlcyA9IF9yZWYuaW1hZ2VzLFxuICAgIGRhdGVQdWJsaXNoZWQgPSBfcmVmLmRhdGVQdWJsaXNoZWQsXG4gICAgZGF0ZU1vZGlmaWVkID0gX3JlZi5kYXRlTW9kaWZpZWQsXG4gICAgYXV0aG9yTmFtZSA9IF9yZWYuYXV0aG9yTmFtZSxcbiAgICBfcmVmJHB1Ymxpc2hlck5hbWUgPSBfcmVmLnB1Ymxpc2hlck5hbWUsXG4gICAgcHVibGlzaGVyTmFtZSA9IF9yZWYkcHVibGlzaGVyTmFtZSA9PT0gdm9pZCAwID8gdW5kZWZpbmVkIDogX3JlZiRwdWJsaXNoZXJOYW1lLFxuICAgIF9yZWYkcHVibGlzaGVyTG9nbyA9IF9yZWYucHVibGlzaGVyTG9nbyxcbiAgICBwdWJsaXNoZXJMb2dvID0gX3JlZiRwdWJsaXNoZXJMb2dvID09PSB2b2lkIDAgPyB1bmRlZmluZWQgOiBfcmVmJHB1Ymxpc2hlckxvZ28sXG4gICAgZGVzY3JpcHRpb24gPSBfcmVmLmRlc2NyaXB0aW9uLFxuICAgIGlzQWNjZXNzaWJsZUZvckZyZWUgPSBfcmVmLmlzQWNjZXNzaWJsZUZvckZyZWUsXG4gICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCQ2KTtcbiAgdmFyIGRhdGEgPSBfZXh0ZW5kcyh7XG4gICAgZGF0ZVB1Ymxpc2hlZDogZGF0ZVB1Ymxpc2hlZCxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgbWFpbkVudGl0eU9mUGFnZToge1xuICAgICAgJ0B0eXBlJzogJ1dlYlBhZ2UnLFxuICAgICAgJ0BpZCc6IHVybFxuICAgIH0sXG4gICAgaGVhZGxpbmU6IHRpdGxlLFxuICAgIGltYWdlOiBpbWFnZXMsXG4gICAgZGF0ZU1vZGlmaWVkOiBkYXRlTW9kaWZpZWQgfHwgZGF0ZVB1Ymxpc2hlZCxcbiAgICBhdXRob3I6IHNldEF1dGhvcihhdXRob3JOYW1lKSxcbiAgICBwdWJsaXNoZXI6IHNldFB1Ymxpc2hlcihwdWJsaXNoZXJOYW1lLCBwdWJsaXNoZXJMb2dvKSxcbiAgICBpc0FjY2Vzc2libGVGb3JGcmVlOiBpc0FjY2Vzc2libGVGb3JGcmVlXG4gIH0sIHJlc3QpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSnNvbkxkLCBfZXh0ZW5kcyh7XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXlPdmVycmlkZToga2V5T3ZlcnJpZGVcbiAgfSwgZGF0YSwge1xuICAgIHNjcmlwdEtleTogXCJhcnRpY2xlXCJcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBzZXRSZXZpZXdlZEJ5KHJldmlld2VkQnkpIHtcbiAgaWYgKHJldmlld2VkQnkpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgJ0B0eXBlJzogKHJldmlld2VkQnkgPT0gbnVsbCA/IHZvaWQgMCA6IHJldmlld2VkQnkudHlwZSkgfHwgJ09yZ2FuaXphdGlvbidcbiAgICB9LCByZXZpZXdlZEJ5KTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG52YXIgX2V4Y2x1ZGVkJDUgPSBbXCJrZXlPdmVycmlkZVwiLCBcInJldmlld2VkQnlcIl07XG5mdW5jdGlvbiBXZWJQYWdlSnNvbkxkKF9yZWYpIHtcbiAgdmFyIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICByZXZpZXdlZEJ5ID0gX3JlZi5yZXZpZXdlZEJ5LFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQkNSk7XG4gIHZhciBkYXRhID0gX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICByZXZpZXdlZEJ5OiBzZXRSZXZpZXdlZEJ5KHJldmlld2VkQnkpXG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSnNvbkxkLCBfZXh0ZW5kcyh7XG4gICAga2V5T3ZlcnJpZGU6IGtleU92ZXJyaWRlXG4gIH0sIGRhdGEsIHtcbiAgICB0eXBlOiBcIldlYlBhZ2VcIixcbiAgICBzY3JpcHRLZXk6IFwiV2ViUGFnZVwiXG4gIH0pKTtcbn1cblxudmFyIF9leGNsdWRlZCQ0ID0gW1widHlwZVwiLCBcImtleU92ZXJyaWRlXCJdO1xuZnVuY3Rpb24gU29jaWFsUHJvZmlsZUpzb25MZChfcmVmKSB7XG4gIHZhciB0eXBlID0gX3JlZi50eXBlLFxuICAgIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgX2V4Y2x1ZGVkJDQpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSnNvbkxkLCBfZXh0ZW5kcyh7XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXlPdmVycmlkZToga2V5T3ZlcnJpZGVcbiAgfSwgcmVzdCwge1xuICAgIHNjcmlwdEtleTogXCJzb2NpYWxcIlxuICB9KSk7XG59XG5cbmZ1bmN0aW9uIHNldENvc3QoY29zdCkge1xuICBpZiAoY29zdCkge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgY29zdCwge1xuICAgICAgJ0B0eXBlJzogJ01vbmV0YXJ5QW1vdW50J1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHNldFN1cHBseShzdXBwbHkpIHtcbiAgaWYgKHN1cHBseSkge1xuICAgIHJldHVybiBzdXBwbHkubWFwKGZ1bmN0aW9uIChzdXBwbHlJdGVtKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnQHR5cGUnOiAnSG93VG9TdXBwbHknLFxuICAgICAgICBuYW1lOiBzdXBwbHlJdGVtXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHNldFRvb2wodG9vbCkge1xuICBpZiAodG9vbCkge1xuICAgIHJldHVybiB0b29sLm1hcChmdW5jdGlvbiAodG9vbEl0ZW0pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdAdHlwZSc6ICdIb3dUb1Rvb2wnLFxuICAgICAgICBuYW1lOiB0b29sSXRlbVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBzZXRTdGVwKHN0ZXApIHtcbiAgaWYgKHN0ZXApIHtcbiAgICByZXR1cm4gc3RlcC5tYXAoZnVuY3Rpb24gKHN0ZXBFbGVtZW50KSB7XG4gICAgICB2YXIgaXRlbUxpc3RFbGVtZW50ID0gc3RlcEVsZW1lbnQuaXRlbUxpc3RFbGVtZW50LFxuICAgICAgICBpbWFnZSA9IHN0ZXBFbGVtZW50LmltYWdlO1xuICAgICAgdmFyIGN1cnJlbnRMaXN0RWxlbWVudHMgPSBpdGVtTGlzdEVsZW1lbnQgPT0gbnVsbCA/IHZvaWQgMCA6IGl0ZW1MaXN0RWxlbWVudC5tYXAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgICAgICAgdGV4dCA9IF9yZWYudGV4dDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAnQHR5cGUnOiB0eXBlLFxuICAgICAgICAgIHRleHQ6IHRleHRcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGVwRWxlbWVudCwge1xuICAgICAgICAnQHR5cGUnOiAnSG93VG9TdGVwJyxcbiAgICAgICAgaXRlbUxpc3RFbGVtZW50OiBjdXJyZW50TGlzdEVsZW1lbnRzLFxuICAgICAgICBpbWFnZTogc2V0SW1hZ2UoaW1hZ2UpXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG52YXIgX2V4Y2x1ZGVkJDMgPSBbXCJ0eXBlXCIsIFwia2V5T3ZlcnJpZGVcIiwgXCJpbWFnZVwiLCBcImVzdGltYXRlZENvc3RcIiwgXCJzdXBwbHlcIiwgXCJ0b29sXCIsIFwic3RlcFwiXTtcbmZ1bmN0aW9uIGhvd1RvSnNvbkxkKF9yZWYpIHtcbiAgdmFyIF9yZWYkdHlwZSA9IF9yZWYudHlwZSxcbiAgICB0eXBlID0gX3JlZiR0eXBlID09PSB2b2lkIDAgPyAnSG93VG8nIDogX3JlZiR0eXBlLFxuICAgIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICBpbWFnZSA9IF9yZWYuaW1hZ2UsXG4gICAgZXN0aW1hdGVkQ29zdCA9IF9yZWYuZXN0aW1hdGVkQ29zdCxcbiAgICBzdXBwbHkgPSBfcmVmLnN1cHBseSxcbiAgICB0b29sID0gX3JlZi50b29sLFxuICAgIHN0ZXAgPSBfcmVmLnN0ZXAsXG4gICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCQzKTtcbiAgdmFyIGRhdGEgPSBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIGltYWdlOiBzZXRJbWFnZShpbWFnZSksXG4gICAgZXN0aW1hdGVkQ29zdDogc2V0Q29zdChlc3RpbWF0ZWRDb3N0KSxcbiAgICBzdXBwbHk6IHNldFN1cHBseShzdXBwbHkpLFxuICAgIHRvb2w6IHNldFRvb2wodG9vbCksXG4gICAgc3RlcDogc2V0U3RlcChzdGVwKVxuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEpzb25MZCwgX2V4dGVuZHMoe1xuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5T3ZlcnJpZGU6IGtleU92ZXJyaWRlXG4gIH0sIGRhdGEsIHtcbiAgICBzY3JpcHRLZXk6IFwiaG93VG9cIlxuICB9KSk7XG59XG5cbnZhciBfZXhjbHVkZWQkMiA9IFtcImtleU92ZXJyaWRlXCIsIFwiaW1hZ2VzXCJdO1xuZnVuY3Rpb24gSW1hZ2VKc29uTGQoX3JlZikge1xuICB2YXIga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgIGltYWdlcyA9IF9yZWYuaW1hZ2VzLFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQkMik7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChKc29uTGQsIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgdHlwZTogXCJJbWFnZU9iamVjdFwiLFxuICAgIGtleU92ZXJyaWRlOiBrZXlPdmVycmlkZSxcbiAgICBkYXRhQXJyYXk6IGltYWdlcyxcbiAgICBzY3JpcHRLZXk6IFwiaW1hZ2VcIlxuICB9KSk7XG59XG5cbmZ1bmN0aW9uIHNldEFtZW5pdHlGZWF0dXJlKGFtZW5pdHlGZWF0dXJlKSB7XG4gIGlmICghYW1lbml0eUZlYXR1cmUpIHJldHVybiB1bmRlZmluZWQ7XG4gIGlmICghQXJyYXkuaXNBcnJheShhbWVuaXR5RmVhdHVyZSkpIHtcbiAgICByZXR1cm4gZGVjb3JhdGVBbWVuaXR5RmVhdHVyZShhbWVuaXR5RmVhdHVyZSk7XG4gIH1cbiAgaWYgKGFtZW5pdHlGZWF0dXJlLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBkZWNvcmF0ZUFtZW5pdHlGZWF0dXJlKGFtZW5pdHlGZWF0dXJlWzBdKTtcbiAgfVxuICByZXR1cm4gYW1lbml0eUZlYXR1cmUubWFwKGRlY29yYXRlQW1lbml0eUZlYXR1cmUpO1xufVxuZnVuY3Rpb24gZGVjb3JhdGVBbWVuaXR5RmVhdHVyZShhbWVuaXR5KSB7XG4gIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgJ0B0eXBlJzogJ0xvY2F0aW9uRmVhdHVyZVNwZWNpZmljYXRpb24nXG4gIH0sIGFtZW5pdHkpO1xufVxuXG52YXIgX2V4Y2x1ZGVkJDEgPSBbXCJhZGRyZXNzXCIsIFwiZ2VvXCIsIFwiaW1hZ2VzXCIsIFwia2V5T3ZlcnJpZGVcIiwgXCJvcGVuaW5nSG91cnNcIiwgXCJ0eXBlXCIsIFwiYW1lbml0eUZlYXR1cmVcIiwgXCJyYXRpbmdcIl07XG5mdW5jdGlvbiBDYW1wZ3JvdW5kSnNvbkxkKF9yZWYpIHtcbiAgdmFyIGFkZHJlc3MgPSBfcmVmLmFkZHJlc3MsXG4gICAgZ2VvID0gX3JlZi5nZW8sXG4gICAgaW1hZ2VzID0gX3JlZi5pbWFnZXMsXG4gICAga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgIG9wZW5pbmdIb3VycyA9IF9yZWYub3BlbmluZ0hvdXJzLFxuICAgIF9yZWYkdHlwZSA9IF9yZWYudHlwZSxcbiAgICB0eXBlID0gX3JlZiR0eXBlID09PSB2b2lkIDAgPyAnQ2FtcGdyb3VuZCcgOiBfcmVmJHR5cGUsXG4gICAgYW1lbml0eUZlYXR1cmUgPSBfcmVmLmFtZW5pdHlGZWF0dXJlLFxuICAgIHJhdGluZyA9IF9yZWYucmF0aW5nLFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQkMSk7XG4gIHZhciBkYXRhID0gX2V4dGVuZHMoe1xuICAgIGltYWdlOiBpbWFnZXMsXG4gICAgb3BlbmluZ0hvdXJzU3BlY2lmaWNhdGlvbjogQXJyYXkuaXNBcnJheShvcGVuaW5nSG91cnMpID8gb3BlbmluZ0hvdXJzLm1hcChzZXRPcGVuaW5nSG91cnMpIDogc2V0T3BlbmluZ0hvdXJzKG9wZW5pbmdIb3VycyksXG4gICAgYWRkcmVzczogc2V0QWRkcmVzcyhhZGRyZXNzKSxcbiAgICBnZW86IHNldEdlbyhnZW8pLFxuICAgIGFtZW5pdHlGZWF0dXJlOiBzZXRBbWVuaXR5RmVhdHVyZShhbWVuaXR5RmVhdHVyZSksXG4gICAgYWdncmVnYXRlUmF0aW5nOiBzZXRBZ2dyZWdhdGVSYXRpbmcocmF0aW5nKVxuICB9LCByZXN0KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEpzb25MZCwgX2V4dGVuZHMoe1xuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5T3ZlcnJpZGU6IGtleU92ZXJyaWRlXG4gIH0sIGRhdGEsIHtcbiAgICBzY3JpcHRLZXk6IFwiY2FtcGdyb3VuZFwiXG4gIH0pKTtcbn1cblxudmFyIF9leGNsdWRlZCA9IFtcImFkZHJlc3NcIiwgXCJnZW9cIiwgXCJpbWFnZXNcIiwgXCJrZXlPdmVycmlkZVwiLCBcIm9wZW5pbmdIb3Vyc1wiLCBcInR5cGVcIl07XG5mdW5jdGlvbiBQYXJrSnNvbkxkKF9yZWYpIHtcbiAgdmFyIGFkZHJlc3MgPSBfcmVmLmFkZHJlc3MsXG4gICAgZ2VvID0gX3JlZi5nZW8sXG4gICAgaW1hZ2VzID0gX3JlZi5pbWFnZXMsXG4gICAga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgIG9wZW5pbmdIb3VycyA9IF9yZWYub3BlbmluZ0hvdXJzLFxuICAgIF9yZWYkdHlwZSA9IF9yZWYudHlwZSxcbiAgICB0eXBlID0gX3JlZiR0eXBlID09PSB2b2lkIDAgPyAnUGFyaycgOiBfcmVmJHR5cGUsXG4gICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCk7XG4gIHZhciBkYXRhID0gX2V4dGVuZHMoe1xuICAgIGltYWdlOiBpbWFnZXMsXG4gICAgb3BlbmluZ0hvdXJzU3BlY2lmaWNhdGlvbjogQXJyYXkuaXNBcnJheShvcGVuaW5nSG91cnMpID8gb3BlbmluZ0hvdXJzLm1hcChzZXRPcGVuaW5nSG91cnMpIDogc2V0T3BlbmluZ0hvdXJzKG9wZW5pbmdIb3VycyksXG4gICAgYWRkcmVzczogc2V0QWRkcmVzcyhhZGRyZXNzKSxcbiAgICBnZW86IHNldEdlbyhnZW8pXG4gIH0sIHJlc3QpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSnNvbkxkLCBfZXh0ZW5kcyh7XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXlPdmVycmlkZToga2V5T3ZlcnJpZGVcbiAgfSwgZGF0YSwge1xuICAgIHNjcmlwdEtleTogXCJwYXJrXCJcbiAgfSkpO1xufVxuXG5leHBvcnQgeyBBcnRpY2xlSnNvbkxkLCBCcmFuZEpzb25MZCwgQnJlYWRDcnVtYkpzb25MZCBhcyBCcmVhZGNydW1iSnNvbkxkLCBDYW1wZ3JvdW5kSnNvbkxkLCBDYXJvdXNlbEpzb25MZCwgQ29sbGVjdGlvblBhZ2VKc29uTGQsIENvcnBvcmF0ZUNvbnRhY3RKc29uTGQsIENvdXJzZUpzb25MZCwgRGF0YXNldEpzb25MZCwgRGVmYXVsdFNlbywgRXZlbnRKc29uTGQsIEZBUVBhZ2VKc29uTGQsIGhvd1RvSnNvbkxkIGFzIEhvd1RvSnNvbkxkLCBJbWFnZUpzb25MZCwgSm9iUG9zdGluZ0pzb25MZCwgTG9jYWxCdXNpbmVzc0pzb25MZCwgTG9nb0pzb25MZCwgTmV3c0FydGljbGVKc29uTGQsIE5leHRTZW8sIE9yZ2FuaXphdGlvbkpzb25MZCwgUGFya0pzb25MZCwgUHJvZHVjdEpzb25MZCwgUHJvZmlsZVBhZ2VKc29uTGQsIFFBUGFnZUpzb25MZCwgUmVjaXBlSnNvbkxkLCBTaXRlTGlua3NTZWFyY2hCb3hKc29uTGQsIFNvY2lhbFByb2ZpbGVKc29uTGQsIFNvZnR3YXJlQXBwSnNvbkxkLCBWaWRlb0dhbWVKc29uTGQsIFZpZGVvSnNvbkxkLCBXZWJQYWdlSnNvbkxkIH07XG4iLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL19hcHBcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJwcml2YXRlLW5leHQtcGFnZXMvX2FwcFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzZdLnVzZVsyXSEuL2dsb2JhbHMuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIC8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuICAgICAgICAgICAgICAgIC8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbiAgICAgICAgICAgICAgICB2YXIgYW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IGFuY2hvckVsZW1lbnQucGFyZW50Tm9kZS8vIE5vcm1hbGx5IDxoZWFkPlxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAvLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbiAgICAgICAgICAgICAgICAvLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4gICAgICAgICAgICAgICAgLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIGFuY2hvckVsZW1lbnQpO1xuICAgICAgICAgICAgfTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICAgIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgcDtcbiAgICBmb3IocCBpbiBhKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvcihwIGluIGIpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYVtwXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzZdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls2XS51c2VbMl0hLi9nbG9iYWxzLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls2XS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNl0udXNlWzJdIS4vZ2xvYmFscy5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRTEoKSB7XG4gICAgbGV0IG1lbW87XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgICAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAgICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgICAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVtbztcbiAgICB9O1xufSgpO1xuY29uc3QgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0MSgpIHtcbiAgICBjb25zdCBtZW1vID0ge1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGxldCBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgICAgICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICAgIH07XG59KCk7XG5jb25zdCBzdHlsZXNJbkRvbSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICAgIGxldCByZXN1bHQgPSAtMTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgICAgICAgcmVzdWx0ID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICAgIGNvbnN0IGlkQ291bnRNYXAgPSB7XG4gICAgfTtcbiAgICBjb25zdCBpZGVudGlmaWVycyA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgaXRlbSA9IGxpc3RbaV07XG4gICAgICAgIGNvbnN0IGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgICAgIGNvbnN0IGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICAgICAgY29uc3QgaWRlbnRpZmllciA9IGlkICsgJyAnICsgY291bnQudG9TdHJpbmcoKTtcbiAgICAgICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgICAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgICAgIH07XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICAgICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgICAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gICAgfVxuICAgIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge1xuICAgIH07XG4gICAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zdCBub25jZSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICAgICAgICBpZiAobm9uY2UpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGU7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovIGNvbnN0IHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQxKCkge1xuICAgIGNvbnN0IHRleHRTdG9yZSA9IFtdO1xuICAgIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgICAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICAgIH07XG59KCk7XG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgICBjb25zdCBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/ICdAbWVkaWEgJyArIG9iai5tZWRpYSArICcgeycgKyBvYmouY3NzICsgJ30nIDogb2JqLmNzcztcbiAgICAvLyBGb3Igb2xkIElFXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqLyBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG4gICAgICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gICAgbGV0IGNzcyA9IG9iai5jc3M7XG4gICAgY29uc3QgbWVkaWEgPSBvYmoubWVkaWE7XG4gICAgY29uc3Qgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gICAgfVxuICAgIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nO1xuICAgIH1cbiAgICAvLyBGb3Igb2xkIElFXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqLyBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2hpbGUoc3R5bGUuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICB9XG59XG5sZXQgc2luZ2xldG9uID0gbnVsbDtcbmxldCBzaW5nbGV0b25Db3VudGVyID0gMDtcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICAgIGxldCBzdHlsZTtcbiAgICBsZXQgdXBkYXRlO1xuICAgIGxldCByZW1vdmU7XG4gICAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgICAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICAgICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICAgICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcbiAgICAgICAgcmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICB1cGRhdGUob2JqKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgICAgIGlmIChuZXdPYmopIHtcbiAgICAgICAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHtcbiAgICB9O1xuICAgIC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAgIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbiAgICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICAgIH1cbiAgICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgICBsZXQgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgICAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICAgICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICAgICAgZm9yKGxldCBpMSA9IDA7IGkxIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaTErKyl7XG4gICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2kxXTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICAgICAgICBpZiAoc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcigpO1xuICAgICAgICAgICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICAgIH07XG59O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMubWFwIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbj17NzYyOmZ1bmN0aW9uKG4pe24uZXhwb3J0cz1mdW5jdGlvbihuKXt2YXIgdD1bXTt0LnRvU3RyaW5nPWZ1bmN0aW9uIHRvU3RyaW5nKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQpe3ZhciByPWNzc1dpdGhNYXBwaW5nVG9TdHJpbmcodCxuKTtpZih0WzJdKXtyZXR1cm5cIkBtZWRpYSBcIi5jb25jYXQodFsyXSxcIiB7XCIpLmNvbmNhdChyLFwifVwiKX1yZXR1cm4gcn0pLmpvaW4oXCJcIil9O3QuaT1mdW5jdGlvbihuLHIsbyl7aWYodHlwZW9mIG49PT1cInN0cmluZ1wiKXtuPVtbbnVsbCxuLFwiXCJdXX12YXIgZT17fTtpZihvKXtmb3IodmFyIGE9MDthPHRoaXMubGVuZ3RoO2ErKyl7dmFyIGM9dGhpc1thXVswXTtpZihjIT1udWxsKXtlW2NdPXRydWV9fX1mb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIHU9W10uY29uY2F0KG5baV0pO2lmKG8mJmVbdVswXV0pe2NvbnRpbnVlfWlmKHIpe2lmKCF1WzJdKXt1WzJdPXJ9ZWxzZXt1WzJdPVwiXCIuY29uY2F0KHIsXCIgYW5kIFwiKS5jb25jYXQodVsyXSl9fXQucHVzaCh1KX19O3JldHVybiB0fTtmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKG4sdCl7dmFyIHI9blsxXXx8XCJcIjt2YXIgbz1uWzNdO2lmKCFvKXtyZXR1cm4gcn1pZih0JiZ0eXBlb2YgYnRvYT09PVwiZnVuY3Rpb25cIil7dmFyIGU9dG9Db21tZW50KG8pO3ZhciBhPW8uc291cmNlcy5tYXAoZnVuY3Rpb24obil7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChvLnNvdXJjZVJvb3R8fFwiXCIpLmNvbmNhdChuLFwiICovXCIpfSk7cmV0dXJuW3JdLmNvbmNhdChhKS5jb25jYXQoW2VdKS5qb2luKFwiXFxuXCIpfXJldHVybltyXS5qb2luKFwiXFxuXCIpfWZ1bmN0aW9uIHRvQ29tbWVudChuKXt2YXIgdD1idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShuKSkpKTt2YXIgcj1cInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdCh0KTtyZXR1cm5cIi8qIyBcIi5jb25jYXQocixcIiAqL1wiKX19fTt2YXIgdD17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHIpe2lmKHRbcl0pe3JldHVybiB0W3JdLmV4cG9ydHN9dmFyIG89dFtyXT17ZXhwb3J0czp7fX07dmFyIGU9dHJ1ZTt0cnl7bltyXShvLG8uZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtlPWZhbHNlfWZpbmFsbHl7aWYoZSlkZWxldGUgdFtyXX1yZXR1cm4gby5leHBvcnRzfV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3JldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDc2Mil9KCk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIHRhaWx3aW5kY3NzIHYyLjIuMTkgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tICovLyohIG1vZGVybi1ub3JtYWxpemUgdjEuMS4wIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUgKi9cXG5cXG4vKlxcbkRvY3VtZW50XFxuPT09PT09PT1cXG4qL1xcblxcbi8qKlxcblVzZSBhIGJldHRlciBib3ggbW9kZWwgKG9waW5pb25hdGVkKS5cXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyoqXFxuVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZSAob3BpbmlvbmF0ZWQpLlxcbiovXFxuXFxuaHRtbCB7XFxuXFx0LW1vei10YWItc2l6ZTogNDtcXG5cXHQtby10YWItc2l6ZTogNDtcXG5cXHQgICB0YWItc2l6ZTogNDtcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiovXFxuXFxuaHRtbCB7XFxuXFx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG5cXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZWN0aW9uc1xcbj09PT09PT09XFxuKi9cXG5cXG4vKipcXG5SZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbkltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxuKi9cXG5cXG5ib2R5IHtcXG5cXHRmb250LWZhbWlseTpcXG5cXHRcXHRzeXN0ZW0tdWksXFxuXFx0XFx0LWFwcGxlLXN5c3RlbSwgLyogRmlyZWZveCBzdXBwb3J0cyB0aGlzIGJ1dCBub3QgeWV0IGBzeXN0ZW0tdWlgICovXFxuXFx0XFx0J1NlZ29lIFVJJyxcXG5cXHRcXHRSb2JvdG8sXFxuXFx0XFx0SGVsdmV0aWNhLFxcblxcdFxcdEFyaWFsLFxcblxcdFxcdHNhbnMtc2VyaWYsXFxuXFx0XFx0J0FwcGxlIENvbG9yIEVtb2ppJyxcXG5cXHRcXHQnU2Vnb2UgVUkgRW1vamknO1xcbn1cXG5cXG4vKlxcbkdyb3VwaW5nIGNvbnRlbnRcXG49PT09PT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuKi9cXG5cXG5ociB7XFxuXFx0aGVpZ2h0OiAwOyAvKiAxICovXFxuXFx0Y29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5UZXh0LWxldmVsIHNlbWFudGljc1xcbj09PT09PT09PT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnJbdGl0bGVdIHtcXG5cXHQtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG5cXHQgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmIsXFxuc3Ryb25nIHtcXG5cXHRmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4xLiBJbXByb3ZlIGNvbnNpc3RlbmN5IG9mIGRlZmF1bHQgZm9udHMgaW4gYWxsIGJyb3dzZXJzLiAoaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplL2lzc3Vlcy8zKVxcbjIuIENvcnJlY3QgdGhlIG9kZCAnZW0nIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG5cXHRmb250LWZhbWlseTpcXG5cXHRcXHR1aS1tb25vc3BhY2UsXFxuXFx0XFx0U0ZNb25vLVJlZ3VsYXIsXFxuXFx0XFx0Q29uc29sYXMsXFxuXFx0XFx0J0xpYmVyYXRpb24gTW9ubycsXFxuXFx0XFx0TWVubG8sXFxuXFx0XFx0bW9ub3NwYWNlOyAvKiAxICovXFxuXFx0Zm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zbWFsbCB7XFxuXFx0Zm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcblByZXZlbnQgJ3N1YicgYW5kICdzdXAnIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG5cXHRmb250LXNpemU6IDc1JTtcXG5cXHRsaW5lLWhlaWdodDogMDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcblxcdGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG5cXHR0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG5UYWJ1bGFyIGRhdGFcXG49PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcbiovXFxuXFxudGFibGUge1xcblxcdHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuXFx0Ym9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuRm9ybXNcXG49PT09PVxcbiovXFxuXFxuLyoqXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG5cXHRmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG5cXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcblxcdG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXFxuMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG5cXHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmJ1dHRvbixcXG5bdHlwZT0nYnV0dG9uJ10sXFxuW3R5cGU9J3Jlc2V0J10sXFxuW3R5cGU9J3N1Ym1pdCddIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4qL1xcblxcbjo6LW1vei1mb2N1cy1pbm5lciB7XFxuXFx0Ym9yZGVyLXN0eWxlOiBub25lO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcblJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuXFx0b3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgJzppbnZhbGlkJyBzdHlsZXMgaW4gRmlyZWZveC5cXG5TZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3XFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG5cXHRib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0ICdmaWVsZHNldCcgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxubGVnZW5kIHtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuXFx0b3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byAnaW5oZXJpdCcgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG5cXHRmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuSW50ZXJhY3RpdmVcXG49PT09PT09PT09PVxcbiovXFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcblxcdGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59LyoqXFxuICogTWFudWFsbHkgZm9ya2VkIGZyb20gU1VJVCBDU1MgQmFzZTogaHR0cHM6Ly9naXRodWIuY29tL3N1aXRjc3MvYmFzZVxcbiAqIEEgdGhpbiBsYXllciBvbiB0b3Agb2Ygbm9ybWFsaXplLmNzcyB0aGF0IHByb3ZpZGVzIGEgc3RhcnRpbmcgcG9pbnQgbW9yZVxcbiAqIHN1aXRhYmxlIGZvciB3ZWIgYXBwbGljYXRpb25zLlxcbiAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4gKi9cXG5cXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbmhyLFxcbmZpZ3VyZSxcXG5wLFxcbnByZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBUYWlsd2luZCBjdXN0b20gcmVzZXQgc3R5bGVzXFxuICovXFxuXFxuLyoqXFxuICogMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgKHdpdGggVGFpbHdpbmQncyBkZWZhdWx0XFxuICogICAgc2Fucy1zZXJpZiBmb250IHN0YWNrIGFzIGEgZmFsbGJhY2spIGFzIGEgc2FuZSBkZWZhdWx0LlxcbiAqIDIuIFVzZSBUYWlsd2luZCdzIGRlZmF1bHQgXFxcIm5vcm1hbFxcXCIgbGluZS1oZWlnaHQgc28gdGhlIHVzZXIgaXNuJ3QgZm9yY2VkXFxuICogICAgdG8gb3ZlcnJpZGUgaXQgdG8gZW5zdXJlIGNvbnNpc3RlbmN5IGV2ZW4gd2hlbiB1c2luZyB0aGUgZGVmYXVsdCB0aGVtZS5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDIgKi9cXG59XFxuXFxuXFxuLyoqXFxuICogSW5oZXJpdCBmb250LWZhbWlseSBhbmQgbGluZS1oZWlnaHQgZnJvbSBgaHRtbGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzXFxuICogYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuICovXFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLlxcbiAqXFxuICogICAgV2UgdXNlZCB0byBzZXQgdGhpcyBpbiB0aGUgaHRtbCBlbGVtZW50IGFuZCBpbmhlcml0IGZyb21cXG4gKiAgICB0aGUgcGFyZW50IGVsZW1lbnQgZm9yIGV2ZXJ5dGhpbmcgZWxzZS4gVGhpcyBjYXVzZWQgaXNzdWVzXFxuICogICAgaW4gc2hhZG93LWRvbS1lbmhhbmNlZCBlbGVtZW50cyBsaWtlIDxkZXRhaWxzPiB3aGVyZSB0aGUgY29udGVudFxcbiAqICAgIGlzIHdyYXBwZWQgYnkgYSBkaXYgd2l0aCBib3gtc2l6aW5nIHNldCB0byBgY29udGVudC1ib3hgLlxcbiAqXFxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80XFxuICpcXG4gKlxcbiAqIDIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLlxcbiAqXFxuICogICAgQnkgZGVmYXVsdCwgdGhlIHdheSB0aGUgYnJvd3NlciBzcGVjaWZpZXMgdGhhdCBhbiBlbGVtZW50IHNob3VsZCBoYXZlIG5vXFxuICogICAgYm9yZGVyIGlzIGJ5IHNldHRpbmcgaXQncyBib3JkZXItc3R5bGUgdG8gYG5vbmVgIGluIHRoZSB1c2VyLWFnZW50XFxuICogICAgc3R5bGVzaGVldC5cXG4gKlxcbiAqICAgIEluIG9yZGVyIHRvIGVhc2lseSBhZGQgYm9yZGVycyB0byBlbGVtZW50cyBieSBqdXN0IHNldHRpbmcgdGhlIGBib3JkZXItd2lkdGhgXFxuICogICAgcHJvcGVydHksIHdlIGNoYW5nZSB0aGUgZGVmYXVsdCBib3JkZXItc3R5bGUgZm9yIGFsbCBlbGVtZW50cyB0byBgc29saWRgLCBhbmRcXG4gKiAgICB1c2UgYm9yZGVyLXdpZHRoIHRvIGhpZGUgdGhlbSBpbnN0ZWFkLiBUaGlzIHdheSBvdXIgYGJvcmRlcmAgdXRpbGl0aWVzIG9ubHlcXG4gKiAgICBuZWVkIHRvIHNldCB0aGUgYGJvcmRlci13aWR0aGAgcHJvcGVydHkgaW5zdGVhZCBvZiB0aGUgZW50aXJlIGBib3JkZXJgXFxuICogICAgc2hvcnRoYW5kLCBtYWtpbmcgb3VyIGJvcmRlciB1dGlsaXRpZXMgbXVjaCBtb3JlIHN0cmFpZ2h0Zm9yd2FyZCB0byBjb21wb3NlLlxcbiAqXFxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2XFxuICovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGJvcmRlci13aWR0aDogMDsgLyogMiAqL1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbG9yOiBjdXJyZW50Q29sb3I7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4gKiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0XFxuICovXFxuXFxuaHIge1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcbn1cXG5cXG4vKipcXG4gKiBVbmRvIHRoZSBgYm9yZGVyLXN0eWxlOiBub25lYCByZXNldCB0aGF0IE5vcm1hbGl6ZSBhcHBsaWVzIHRvIGltYWdlcyBzbyB0aGF0XFxuICogb3VyIGBib3JkZXIte3dpZHRofWAgdXRpbGl0aWVzIGhhdmUgdGhlIGV4cGVjdGVkIGVmZmVjdC5cXG4gKlxcbiAqIFRoZSBOb3JtYWxpemUgcmVzZXQgaXMgdW5uZWNlc3NhcnkgZm9yIHVzIHNpbmNlIHdlIGRlZmF1bHQgdGhlIGJvcmRlci13aWR0aFxcbiAqIHRvIDAgb24gYWxsIGVsZW1lbnRzLlxcbiAqXFxuICogaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zNjJcXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBjb2xvcjogIzljYTNhZjtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgY29sb3I6ICM5Y2EzYWY7XFxufVxcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKipcXG4gKiBPdmVycmlkZSBsZWdhY3kgZm9jdXMgcmVzZXQgZnJvbSBOb3JtYWxpemUgd2l0aCBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZXMuXFxuICpcXG4gKiBUaGlzIGlzIGFjdHVhbGx5IGFuIGltcHJvdmVtZW50IG92ZXIgdGhlIG5ldyBkZWZhdWx0cyBpbiBGaXJlZm94IGluIG91ciB0ZXN0aW5nLFxcbiAqIGFzIGl0IHRyaWdnZXJzIHRoZSBiZXR0ZXIgZm9jdXMgc3R5bGVzIGV2ZW4gZm9yIGxpbmtzLCB3aGljaCBzdGlsbCB1c2UgYSBkb3R0ZWRcXG4gKiBvdXRsaW5lIGluIEZpcmVmb3ggYnkgZGVmYXVsdC5cXG4gKi9cXG4gXFxuOi1tb3otZm9jdXNyaW5nIHtcXG5cXHRvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2ZcXG4gKiBvcHQtb3V0LlxcbiAqL1xcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIFJlc2V0IGZvcm0gZWxlbWVudCBwcm9wZXJ0aWVzIHRoYXQgYXJlIGVhc3kgdG8gZm9yZ2V0IHRvXFxuICogc3R5bGUgZXhwbGljaXRseSBzbyB5b3UgZG9uJ3QgaW5hZHZlcnRlbnRseSBpbnRyb2R1Y2VcXG4gKiBzdHlsZXMgdGhhdCBkZXZpYXRlIGZyb20geW91ciBkZXNpZ24gc3lzdGVtLiBUaGVzZSBzdHlsZXNcXG4gKiBzdXBwbGVtZW50IGEgcGFydGlhbCByZXNldCB0aGF0IGlzIGFscmVhZHkgYXBwbGllZCBieVxcbiAqIG5vcm1hbGl6ZS5jc3MuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogVXNlIHRoZSBjb25maWd1cmVkICdtb25vJyBmb250IGZhbWlseSBmb3IgZWxlbWVudHMgdGhhdFxcbiAqIGFyZSBleHBlY3RlZCB0byBiZSByZW5kZXJlZCB3aXRoIGEgbW9ub3NwYWNlIGZvbnQsIGZhbGxpbmdcXG4gKiBiYWNrIHRvIHRoZSBzeXN0ZW0gbW9ub3NwYWNlIHN0YWNrIGlmIHRoZXJlIGlzIG5vIGNvbmZpZ3VyZWRcXG4gKiAnbW9ubycgZm9udCBmYW1pbHkuXFxuICovXFxuXFxucHJlLFxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIGBkaXNwbGF5OiBibG9ja2AgYnkgZGVmYXVsdCBhcyB0aGF0J3NcXG4gKiAgICB0aGUgYmVoYXZpb3IgeW91IHdhbnQgYWxtb3N0IGFsbCBvZiB0aGUgdGltZS4gSW5zcGlyZWQgYnlcXG4gKiAgICBDU1MgUmVtZWR5LCB3aXRoIGBzdmdgIGFkZGVkIGFzIHdlbGwuXFxuICpcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0XFxuICogXFxuICogMi4gQWRkIGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlXFxuICogICAgc2Vuc2libHkgYnkgZGVmYXVsdCB3aGVuIG92ZXJyaWRpbmcgYGRpc3BsYXlgIGJ5IGFkZGluZyBhXFxuICogICAgdXRpbGl0eSBsaWtlIGBpbmxpbmVgLlxcbiAqXFxuICogICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnRpbmcgZXJyb3IgaW4gc29tZVxcbiAqICAgIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuICogXFxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwXFxuICovXFxuXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyxcXG5jYW52YXMsXFxuYXVkaW8sXFxuaWZyYW1lLFxcbmVtYmVkLFxcbm9iamVjdCB7XFxuICBkaXNwbGF5OiBibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmVcXG4gKiB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLlxcbiAqXFxuICogaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNFxcbiAqL1xcblxcbmltZyxcXG52aWRlbyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIEVuc3VyZSB0aGUgZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yIG9mIHRoZSBgaGlkZGVuYCBhdHRyaWJ1dGUuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuXFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDIyOSwgMjMxLCAyMzUsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxuXFx0LS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcXG5cXHQtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XFxuXFx0LS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXG59XFxuXFxuW3R5cGU9J3RleHQnXSxbdHlwZT0nZW1haWwnXSxbdHlwZT0ndXJsJ10sW3R5cGU9J3Bhc3N3b3JkJ10sW3R5cGU9J251bWJlciddLFt0eXBlPSdkYXRlJ10sW3R5cGU9J2RhdGV0aW1lLWxvY2FsJ10sW3R5cGU9J21vbnRoJ10sW3R5cGU9J3NlYXJjaCddLFt0eXBlPSd0ZWwnXSxbdHlwZT0ndGltZSddLFt0eXBlPSd3ZWVrJ10sW211bHRpcGxlXSx0ZXh0YXJlYSxzZWxlY3Qge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG5cXHQgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0ICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuXFx0Ym9yZGVyLWNvbG9yOiAjNmI3MjgwO1xcblxcdGJvcmRlci13aWR0aDogMXB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDBweDtcXG5cXHRwYWRkaW5nLXRvcDogMC41cmVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG5cXHRwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuXFx0LS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXG59XFxuXFxuW3R5cGU9J3RleHQnXTpmb2N1cywgW3R5cGU9J2VtYWlsJ106Zm9jdXMsIFt0eXBlPSd1cmwnXTpmb2N1cywgW3R5cGU9J3Bhc3N3b3JkJ106Zm9jdXMsIFt0eXBlPSdudW1iZXInXTpmb2N1cywgW3R5cGU9J2RhdGUnXTpmb2N1cywgW3R5cGU9J2RhdGV0aW1lLWxvY2FsJ106Zm9jdXMsIFt0eXBlPSdtb250aCddOmZvY3VzLCBbdHlwZT0nc2VhcmNoJ106Zm9jdXMsIFt0eXBlPSd0ZWwnXTpmb2N1cywgW3R5cGU9J3RpbWUnXTpmb2N1cywgW3R5cGU9J3dlZWsnXTpmb2N1cywgW211bHRpcGxlXTpmb2N1cywgdGV4dGFyZWE6Zm9jdXMsIHNlbGVjdDpmb2N1cyB7XFxuXFx0b3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcdG91dGxpbmUtb2Zmc2V0OiAycHg7XFxuXFx0LS10dy1yaW5nLWluc2V0OiB2YXIoLS10dy1lbXB0eSwvKiEqLyAvKiEqLyk7XFxuXFx0LS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcblxcdC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuXFx0LS10dy1yaW5nLWNvbG9yOiAjMjU2M2ViO1xcblxcdC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkgdmFyKC0tdHctcmluZy1vZmZzZXQtY29sb3IpO1xcblxcdC0tdHctcmluZy1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoMXB4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3cpLCB2YXIoLS10dy1yaW5nLXNoYWRvdyksIHZhcigtLXR3LXNoYWRvdyk7XFxuXFx0Ym9yZGVyLWNvbG9yOiAjMjU2M2ViO1xcbn1cXG5cXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xcblxcdGNvbG9yOiAjNmI3MjgwO1xcblxcdG9wYWNpdHk6IDE7XFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlcix0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcblxcdGNvbG9yOiAjNmI3MjgwO1xcblxcdG9wYWNpdHk6IDE7XFxufVxcblxcbjo6LXdlYmtpdC1kYXRldGltZS1lZGl0LWZpZWxkcy13cmFwcGVyIHtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG46Oi13ZWJraXQtZGF0ZS1hbmQtdGltZS12YWx1ZSB7XFxuXFx0bWluLWhlaWdodDogMS41ZW07XFxufVxcblxcbnNlbGVjdCB7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nbm9uZScgdmlld0JveD0nMCAwIDIwIDIwJyUzZSUzY3BhdGggc3Ryb2tlPSclMjM2YjcyODAnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPScxLjUnIGQ9J002IDhsNCA0IDQtNCcvJTNlJTNjL3N2ZyUzZVxcXCIpO1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDAuNXJlbSBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDEuNWVtIDEuNWVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDIuNXJlbTtcXG5cXHQtd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDogZXhhY3Q7XFxuXFx0ICAgICAgICBjb2xvci1hZGp1c3Q6IGV4YWN0O1xcbn1cXG5cXG5bbXVsdGlwbGVdIHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBpbml0aWFsO1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGluaXRpYWw7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IHVuc2V0O1xcblxcdGJhY2tncm91bmQtc2l6ZTogaW5pdGlhbDtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xcblxcdC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiB1bnNldDtcXG5cXHQgICAgICAgIGNvbG9yLWFkanVzdDogdW5zZXQ7XFxufVxcblxcblt0eXBlPSdjaGVja2JveCddLFt0eXBlPSdyYWRpbyddIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0ICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcblxcdCAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDtcXG5cXHQgICAgICAgIGNvbG9yLWFkanVzdDogZXhhY3Q7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuXFx0YmFja2dyb3VuZC1vcmlnaW46IGJvcmRlci1ib3g7XFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcblxcdCAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0ZmxleC1zaHJpbms6IDA7XFxuXFx0aGVpZ2h0OiAxcmVtO1xcblxcdHdpZHRoOiAxcmVtO1xcblxcdGNvbG9yOiAjMjU2M2ViO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuXFx0Ym9yZGVyLWNvbG9yOiAjNmI3MjgwO1xcblxcdGJvcmRlci13aWR0aDogMXB4O1xcblxcdC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XFxufVxcblxcblt0eXBlPSdjaGVja2JveCddIHtcXG5cXHRib3JkZXItcmFkaXVzOiAwcHg7XFxufVxcblxcblt0eXBlPSdyYWRpbyddIHtcXG5cXHRib3JkZXItcmFkaXVzOiAxMDAlO1xcbn1cXG5cXG5bdHlwZT0nY2hlY2tib3gnXTpmb2N1cyxbdHlwZT0ncmFkaW8nXTpmb2N1cyB7XFxuXFx0b3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcdG91dGxpbmUtb2Zmc2V0OiAycHg7XFxuXFx0LS10dy1yaW5nLWluc2V0OiB2YXIoLS10dy1lbXB0eSwvKiEqLyAvKiEqLyk7XFxuXFx0LS10dy1yaW5nLW9mZnNldC13aWR0aDogMnB4O1xcblxcdC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuXFx0LS10dy1yaW5nLWNvbG9yOiAjMjU2M2ViO1xcblxcdC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkgdmFyKC0tdHctcmluZy1vZmZzZXQtY29sb3IpO1xcblxcdC0tdHctcmluZy1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoMnB4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3cpLCB2YXIoLS10dy1yaW5nLXNoYWRvdyksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcblxcblt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQsW3R5cGU9J3JhZGlvJ106Y2hlY2tlZCB7XFxuXFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XFxuXFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcblt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQge1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9J3doaXRlJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNlJTNjcGF0aCBkPSdNMTIuMjA3IDQuNzkzYTEgMSAwIDAxMCAxLjQxNGwtNSA1YTEgMSAwIDAxLTEuNDE0IDBsLTItMmExIDEgMCAwMTEuNDE0LTEuNDE0TDYuNSA5LjA4Nmw0LjI5My00LjI5M2ExIDEgMCAwMTEuNDE0IDB6Jy8lM2UlM2Mvc3ZnJTNlXFxcIik7XFxufVxcblxcblt0eXBlPSdyYWRpbyddOmNoZWNrZWQge1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9J3doaXRlJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNlJTNjY2lyY2xlIGN4PSc4JyBjeT0nOCcgcj0nMycvJTNlJTNjL3N2ZyUzZVxcXCIpO1xcbn1cXG5cXG5bdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkOmhvdmVyLFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6Zm9jdXMsW3R5cGU9J3JhZGlvJ106Y2hlY2tlZDpob3ZlcixbdHlwZT0ncmFkaW8nXTpjaGVja2VkOmZvY3VzIHtcXG5cXHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcblxcdGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuW3R5cGU9J2NoZWNrYm94J106aW5kZXRlcm1pbmF0ZSB7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nbm9uZScgdmlld0JveD0nMCAwIDE2IDE2JyUzZSUzY3BhdGggc3Ryb2tlPSd3aGl0ZScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzInIGQ9J000IDhoOCcvJTNlJTNjL3N2ZyUzZVxcXCIpO1xcblxcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xcblxcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG5bdHlwZT0nY2hlY2tib3gnXTppbmRldGVybWluYXRlOmhvdmVyLFt0eXBlPSdjaGVja2JveCddOmluZGV0ZXJtaW5hdGU6Zm9jdXMge1xcblxcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xcbn1cXG5cXG5bdHlwZT0nZmlsZSddIHtcXG5cXHRiYWNrZ3JvdW5kOiB1bnNldDtcXG5cXHRib3JkZXItY29sb3I6IGluaGVyaXQ7XFxuXFx0Ym9yZGVyLXdpZHRoOiAwO1xcblxcdGJvcmRlci1yYWRpdXM6IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRmb250LXNpemU6IHVuc2V0O1xcblxcdGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG5bdHlwZT0nZmlsZSddOmZvY3VzIHtcXG5cXHRvdXRsaW5lOiAxcHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XFxufVxcbiAgLyogaW50ZXIgdmFyIC0gbGF0aW4gKi9cXG4gIEBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIjtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogMTAwIDkwMDtcXG4gICAgZm9udC1kaXNwbGF5OiBvcHRpb25hbDtcXG4gICAgc3JjOiB1cmwoXFxcIi9mb250cy9pbnRlci12YXItbGF0aW4ud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsXFxuICAgICAgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMixcXG4gICAgICBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xcbiAgfVxcblxcbiAgLnRvcHRpdGxlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIHotaW5kZXg6IDU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICB9XFxuXFxuICAvKiBXcml0ZSB5b3VyIG93biBjdXN0b20gYmFzZSBzdHlsZXMgaGVyZSAqL1xcbiAgcGgxLmNvbXBvbmVudCB7XFxuICAgIGZvbnQtc2l6ZTogMjdweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCI7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBtYXJnaW4tdG9wOiA2cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMC40MDI1cHggMC44NDI1cHggMC4zMjVweCBibGFjayk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMDtcXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogaHNsKDBkZWcgMCUgMjAlIC8gNTAlKTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB3aGl0ZSwgI2Y2ZjhmYSk7XFxuICB9XFxuICBwaDEuYWxidW0ge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgbWFyZ2luOiAycHggMCAzcHggMDtcXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3b3JkLXNwYWNpbmc6IC0wLjFlbTtcXG4gICAgZm9udC1mYW1pbHk6IEZyYW5rbGluR290aGljLCBMYXRvLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICAgIG1hcmdpbi1ibG9jazogN3B4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtZmFtaWx5OiBDaXJjdWxhclNwLCBDaXJjdWxhclNwLUFyYWIsIENpcmN1bGFyU3AtSGViciwgQ2lyY3VsYXJTcC1DeXJsLFxcbiAgICAgIENpcmN1bGFyU3AtR3JlaywgQ2lyY3VsYXJTcC1EZXZhLCB2YXIoLS1mYWxsYmFjay1mb250cywgc2Fucy1zZXJpZik7XFxuICB9XFxuICBoMSB7XFxuXFx0Zm9udC1mYW1pbHk6IEludGVyLCB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxuXFx0Zm9udC1zaXplOiAxLjg3NXJlbTtcXG5cXHRsaW5lLWhlaWdodDogMi4yNXJlbTtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcbn1cXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcblxcblxcdGgxIHtcXG5cXHRcXHRmb250LXNpemU6IDNyZW07XFxuXFx0XFx0bGluZS1oZWlnaHQ6IDE7XFxuXFx0fVxcbn1cXG5cXG4gIGgxLnRleHQtY2VudGVyIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJETSBTYW5zXFxcIjtcXG4gICAgZm9udC1mYW1pbHk6IFNlZ29lIFVJO1xcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB9XFxuXFxuICBwaDIuY29tcG9uZW50IHtcXG4gICAgZm9udC1zaXplOiAyN3B4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIG1hcmdpbi10b3A6IDZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwLjQwMjVweCAwLjg0MjVweCAwLjMyNXB4IGJsYWNrKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAwO1xcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiBoc2woMGRlZyAwJSAyMCUgLyA1MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHdoaXRlLCAjZjZmOGZhKTtcXG4gIH1cXG5cXG4gIHBoMi5hbGJ1bSB7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBtYXJnaW46IDJweCAwIDNweCAwO1xcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XFxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdvcmQtc3BhY2luZzogLTAuMWVtO1xcbiAgICBmb250LWZhbWlseTogRnJhbmtsaW5Hb3RoaWMsIExhdG8sIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gICAgbWFyZ2luLWJsb2NrOiA3cHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC1mYW1pbHk6IENpcmN1bGFyU3AsIENpcmN1bGFyU3AtQXJhYiwgQ2lyY3VsYXJTcC1IZWJyLCBDaXJjdWxhclNwLUN5cmwsXFxuICAgICAgQ2lyY3VsYXJTcC1HcmVrLCBDaXJjdWxhclNwLURldmEsIHZhcigtLWZhbGxiYWNrLWZvbnRzLCBzYW5zLXNlcmlmKTtcXG4gIH1cXG5cXG4gIGgyIHtcXG5cXHRmb250LWZhbWlseTogSW50ZXIsIHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRsaW5lLWhlaWdodDogMnJlbTtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcblxcblxcdGgyIHtcXG5cXHRcXHRmb250LXNpemU6IDIuMjVyZW07XFxuXFx0XFx0bGluZS1oZWlnaHQ6IDIuNXJlbTtcXG5cXHR9XFxufVxcblxcbiAgcGgzLmNvbXBvbmVudCB7XFxuICAgIGZvbnQtc2l6ZTogMjdweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCI7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBtYXJnaW4tdG9wOiA2cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMC40MDI1cHggMC44NDI1cHggMC4zMjVweCBibGFjayk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMDtcXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogaHNsKDBkZWcgMCUgMjAlIC8gNTAlKTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB3aGl0ZSwgI2Y2ZjhmYSk7XFxuICB9XFxuXFxuICBwaDMuYWxidW0ge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgbWFyZ2luOiAycHggMCAzcHggMDtcXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3b3JkLXNwYWNpbmc6IC0wLjFlbTtcXG4gICAgZm9udC1mYW1pbHk6IEZyYW5rbGluR290aGljLCBMYXRvLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICAgIG1hcmdpbi1ibG9jazogN3B4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtZmFtaWx5OiBDaXJjdWxhclNwLCBDaXJjdWxhclNwLUFyYWIsIENpcmN1bGFyU3AtSGViciwgQ2lyY3VsYXJTcC1DeXJsLFxcbiAgICAgIENpcmN1bGFyU3AtR3JlaywgQ2lyY3VsYXJTcC1EZXZhLCB2YXIoLS1mYWxsYmFjay1mb250cywgc2Fucy1zZXJpZik7XFxuICB9XFxuXFxuICBoMyB7XFxuXFx0Zm9udC1mYW1pbHk6IEludGVyLCB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxuXFx0Zm9udC1zaXplOiAxLjI1cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuXFx0aDMge1xcblxcdFxcdGZvbnQtc2l6ZTogMS44NzVyZW07XFxuXFx0XFx0bGluZS1oZWlnaHQ6IDIuMjVyZW07XFxuXFx0fVxcbn1cXG5cXG4gIGgzLnRleHQtY2VudGVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgfVxcblxcbiAgcGg0LmNvbXBvbmVudCB7XFxuICAgIGZvbnQtc2l6ZTogMjdweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCI7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBtYXJnaW4tdG9wOiA2cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMC40MDI1cHggMC44NDI1cHggMC4zMjVweCBibGFjayk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMDtcXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogaHNsKDBkZWcgMCUgMjAlIC8gNTAlKTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB3aGl0ZSwgI2Y2ZjhmYSk7XFxuICB9XFxuXFxuICBwaDQuYWxidW0ge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgbWFyZ2luOiAycHggMCAzcHggMDtcXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3b3JkLXNwYWNpbmc6IC0wLjFlbTtcXG4gICAgZm9udC1mYW1pbHk6IEZyYW5rbGluR290aGljLCBMYXRvLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICAgIG1hcmdpbi1ibG9jazogN3B4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtZmFtaWx5OiBDaXJjdWxhclNwLCBDaXJjdWxhclNwLUFyYWIsIENpcmN1bGFyU3AtSGViciwgQ2lyY3VsYXJTcC1DeXJsLFxcbiAgICAgIENpcmN1bGFyU3AtR3JlaywgQ2lyY3VsYXJTcC1EZXZhLCB2YXIoLS1mYWxsYmFjay1mb250cywgc2Fucy1zZXJpZik7XFxuICB9XFxuXFxuICBoNCB7XFxuXFx0Zm9udC1mYW1pbHk6IEludGVyLCB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxuXFx0Zm9udC1zaXplOiAxLjEyNXJlbTtcXG5cXHRsaW5lLWhlaWdodDogMS43NXJlbTtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4gIHAuZm9udC1ib2xkLmNvbXBvbmVudCB7XFxuICAgIGZvbnQtc2l6ZTogMjdweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCI7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBtYXJnaW4tdG9wOiA2cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMCAhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwLjQwMjVweCAwLjg0MjVweCAwLjMyNXB4IGJsYWNrKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAwO1xcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiBoc2woMGRlZyAwJSAyMCUgLyA1MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHdoaXRlLCAjZjZmOGZhKTtcXG4gIH1cXG5cXG4gIC50ZXh0LXhzIHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xcbiAgICBsaW5lLWhlaWdodDogMS41ICFpbXBvcnRhbnQ7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRE0gU2Fuc1xcXCI7XFxuICAgIG1hcmdpbjogMnB4IDAgM3B4IDA7XFxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdvcmQtc3BhY2luZzogLTAuMWVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB3aWR0aDogMTEyJTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG4gIH1cXG5cXG4gIHAuZm9udC1ib2xkLmFsYnVtIHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIG1hcmdpbjogMnB4IDAgM3B4IDA7XFxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd29yZC1zcGFjaW5nOiAtMC4xZW07XFxuICAgIGZvbnQtZmFtaWx5OiBGcmFua2xpbkdvdGhpYywgTGF0bywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICAgIG1hcmdpbi1ibG9jazogN3B4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtZmFtaWx5OiBDaXJjdWxhclNwLCBDaXJjdWxhclNwLUFyYWIsIENpcmN1bGFyU3AtSGViciwgQ2lyY3VsYXJTcC1DeXJsLFxcbiAgICAgIENpcmN1bGFyU3AtR3JlaywgQ2lyY3VsYXJTcC1EZXZhLCB2YXIoLS1mYWxsYmFjay1mb250cywgc2Fucy1zZXJpZik7XFxuICB9XFxuXFxuICBib2R5IHtcXG5cXHRmb250LWZhbWlseTogSW50ZXIsIHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXG5cXHRmb250LXNpemU6IDAuODc1cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbn1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcblxcblxcdGJvZHkge1xcblxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRcXHRsaW5lLWhlaWdodDogMS41cmVtO1xcblxcdH1cXG59XFxuXFxuICAuc2hhZG93LXNtIHtcXG4gIH1cXG5cXG4gIGJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9pbWcvYWFzZC5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvaW1nL2RvZ3NiZzIuanBnXFxcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuICAudy1iZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gIH1cXG4gIGltZy53LWltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIH1cXG5cXG4gIGEuY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nOiAzMHB4ICFpbXBvcnRhbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogLTAuMmVtIC0wLjEyNWVtIDAuMTI1ZW0gcmdiKDAgMCAwIC8gMjUlKSxcXG4gICAgICAwIDAgMCAwLjA0ZW0gcmdiKDAgMCAwIC8gMzAlKSwgMC4wMmVtIDAuMDJlbSAwLjAyZW0gcmdiKDAgMCAwIC8gNDAlKSBpbnNldCxcXG4gICAgICAtMC4wNWVtIC0wLjA1ZW0gMC4wMmVtIHJnYigyNTUgMjU1IDI1NSAvIDgwJSkgaW5zZXQgIWltcG9ydGFudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiAycHggb3V0c2V0IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XFxuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgMTQ1ZGVnLFxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSksXFxuICAgICAgdHJhbnNwYXJlbnRcXG4gICAgKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIDE0NWRlZyxcXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCkgMCUsXFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDEwMCVcXG4gICAgKTtcXG4gIH1cXG5cXG4gIC53LTE2IHtcXG4gICAgd2lkdGg6IDQ1JSAhaW1wb3J0YW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBmaWx0ZXI6IHNhdHVyYXRlKDEuMDI1KSBjb250cmFzdCgxLjAxNSlcXG4gICAgICBkcm9wLXNoYWRvdygwLjEyNXB4IDAuMjVweCAwLjI1cHggYmxhY2spO1xcbiAgfVxcblxcbiAgaW1nLnctMTYuc2hhZG93LXNtIHtcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXG4gICAgaGVpZ2h0OiA2MCUgIWltcG9ydGFudDtcXG4gICAgLW8tb2JqZWN0LWZpdDogY292ZXIgIWltcG9ydGFudDtcXG4gICAgICAgb2JqZWN0LWZpdDogY292ZXIgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC53LTE2OjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMHB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMHB4KTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAxcHgpO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9wdWRkaW5nLmNvb2wvMjAyMS8xMC9qdWRnZS1teS1tdXNpYy9hc3NldHMvaW1hZ2VzL3BsYXN0aWMtc21hbGwuanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBtaXgtYmxlbmQtbW9kZTogc2NyZWVuO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xMjUpIG9wYWNpdHkoMSk7XFxuICB9XFxuXFxuICBwLnRleHQtY2VudGVyIHtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gICAgbGluZS1oZWlnaHQ6IDI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG4uY29udGFpbmVyIHtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuXFxuXFx0LmNvbnRhaW5lciB7XFxuXFx0XFx0bWF4LXdpZHRoOiA2NDBweDtcXG5cXHR9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcblxcblxcdC5jb250YWluZXIge1xcblxcdFxcdG1heC13aWR0aDogNzY4cHg7XFxuXFx0fVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuXFxuXFx0LmNvbnRhaW5lciB7XFxuXFx0XFx0bWF4LXdpZHRoOiAxMDI0cHg7XFxuXFx0fVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxuXFxuXFx0LmNvbnRhaW5lciB7XFxuXFx0XFx0bWF4LXdpZHRoOiAxMjgwcHg7XFxuXFx0fVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTUzNnB4KSB7XFxuXFxuXFx0LmNvbnRhaW5lciB7XFxuXFx0XFx0bWF4LXdpZHRoOiAxNTM2cHg7XFxuXFx0fVxcbn1cXG4uc3RhdGljIHtcXG5cXHRwb3NpdGlvbjogc3RhdGljO1xcbn1cXG4uYWJzb2x1dGUge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLnJlbGF0aXZlIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5ib3R0b20tMVxcXFwuNSB7XFxuXFx0Ym90dG9tOiAwLjM3NXJlbTtcXG59XFxuLnJpZ2h0LTFcXFxcLjUge1xcblxcdHJpZ2h0OiAwLjM3NXJlbTtcXG59XFxuLmJvdHRvbS0xIHtcXG5cXHRib3R0b206IDAuMjVyZW07XFxufVxcbi5yaWdodC0xIHtcXG5cXHRyaWdodDogMC4yNXJlbTtcXG59XFxuLmZsZXgge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcbi5pbmxpbmUtZmxleCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XFxufVxcbi5taW4taC1zY3JlZW4ge1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG4udy03MiB7XFxuXFx0d2lkdGg6IDE4cmVtO1xcbn1cXG4udy0xNiB7XFxuXFx0d2lkdGg6IDRyZW07XFxufVxcbi5mbGV4LTEge1xcblxcdGZsZXg6IDEgMSAwJTtcXG59XFxuLmN1cnNvci1cXFxcW25lLXJlc2l6ZVxcXFxdIHtcXG5cXHRjdXJzb3I6IG5lLXJlc2l6ZTtcXG59XFxuLmZsZXgtY29sIHtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uaXRlbXMtY2VudGVyIHtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uanVzdGlmeS1jZW50ZXIge1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uanVzdGlmeS1iZXR3ZWVuIHtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5zcGFjZS15LTMgPiA6bm90KFtoaWRkZW5dKSB+IDpub3QoW2hpZGRlbl0pIHtcXG5cXHQtLXR3LXNwYWNlLXktcmV2ZXJzZTogMDtcXG5cXHRtYXJnaW4tdG9wOiBjYWxjKDAuNzVyZW0gKiBjYWxjKDEgLSB2YXIoLS10dy1zcGFjZS15LXJldmVyc2UpKSk7XFxuXFx0bWFyZ2luLWJvdHRvbTogY2FsYygwLjc1cmVtICogdmFyKC0tdHctc3BhY2UteS1yZXZlcnNlKSk7XFxufVxcbi5zcGFjZS14LTQgPiA6bm90KFtoaWRkZW5dKSB+IDpub3QoW2hpZGRlbl0pIHtcXG5cXHQtLXR3LXNwYWNlLXgtcmV2ZXJzZTogMDtcXG5cXHRtYXJnaW4tcmlnaHQ6IGNhbGMoMXJlbSAqIHZhcigtLXR3LXNwYWNlLXgtcmV2ZXJzZSkpO1xcblxcdG1hcmdpbi1sZWZ0OiBjYWxjKDFyZW0gKiBjYWxjKDEgLSB2YXIoLS10dy1zcGFjZS14LXJldmVyc2UpKSk7XFxufVxcbi5yb3VuZGVkLW1kIHtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcXG59XFxuLmJvcmRlciB7XFxuXFx0Ym9yZGVyLXdpZHRoOiAxcHg7XFxufVxcbi5iZy1ncmF5LTcwMCB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTUsIDY1LCA4MSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4ucC01IHtcXG5cXHRwYWRkaW5nOiAxLjI1cmVtO1xcbn1cXG4ucHgtOCB7XFxuXFx0cGFkZGluZy1sZWZ0OiAycmVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDJyZW07XFxufVxcbi5weS00IHtcXG5cXHRwYWRkaW5nLXRvcDogMXJlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XFxuLnRleHQtY2VudGVyIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi50ZXh0LXhzIHtcXG5cXHRmb250LXNpemU6IDAuNzVyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDFyZW07XFxufVxcbi5mb250LWJvbGQge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi50ZXh0LWdyZWVuLTQwMCB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoNTIsIDIxMSwgMTUzLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtd2hpdGUge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udW5kZXJsaW5lIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLnNoYWRvdy1zbSB7XFxuXFx0LS10dy1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuLnRyYW5zaXRpb24tc2hhZG93IHtcXG5cXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93O1xcblxcdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcblxcdHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xcbn1cXG4uYW5pbWF0ZWQtdW5kZXJsaW5lIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMzMzMzMzMwMCwgIzMzMzMzMzAwKSxcXG4gICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMGUwZjMsICMwMGM0ZmQpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMnB4LCAwIDJweDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDAlLCAwIDEwMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAwLjNzIGVhc2U7XFxuICB9XFxuLmFuaW1hdGVkLXVuZGVybGluZTpob3ZlcixcXG4gIC5hbmltYXRlZC11bmRlcmxpbmU6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDAgMnB4LCAxMDAlIDJweDtcXG4gIH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjMwcHgpIHtcXG4gIGEuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDY1JSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggIWltcG9ydGFudDtcXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XFxufVxcbnAuZm9udC1ib2xkLmNvbXBvbmVudCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi50ZXh0LXhzIHtcXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDNweCAhaW1wb3J0YW50O1xcbn1cXG5wLmZvbnQtYm9sZC5hbGJ1bSB7XFxuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcXG59XFxuXFxufVxcblxcbi5ob3ZlclxcXFw6dGV4dC1ibHVlLTUwMDpob3ZlciB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuXFxuLmhvdmVyXFxcXDp0ZXh0LXByaW1hcnktNTAwOmhvdmVyIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgwLCAxOTYsIDI1MywgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcblxcbi5ob3ZlclxcXFw6dGV4dC1wcmltYXJ5LTQwMDpob3ZlciB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoMCwgMjI0LCAyNDMsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG5cXG4uaG92ZXJcXFxcOnRleHQtZ3JlZW4tNDAwOmhvdmVyIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSg1MiwgMjExLCAxNTMsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG5cXG4uaG92ZXJcXFxcOnNoYWRvdy1tZDpob3ZlciB7XFxuXFx0LS10dy1zaGFkb3c6IDAgNHB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbHMuY3NzXCIsXCJ3ZWJwYWNrOi8vc3R5bGVzLyUzQ2lucHV0JTIwY3NzJTIwcGtHZ1dZJTNFXCIsXCJ3ZWJwYWNrOi8vc3R5bGVzLyUzQ2lucHV0JTIwY3NzJTIwZEZxR25sJTNFXCIsXCI8bm8gc291cmNlPlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxpRUFBYyxDQUFkLDhGQUFjOztBQUFkOzs7Q0FBYzs7QUFBZDs7Q0FBYzs7QUFBZDs7O0ND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LDBCQUFBO0FIRW1CO0FBQW5CO0lBdVBJO2lEQUM2QztJQUM3QyxnQ0FBZ0M7SUFDaEMsc0NBQXNDO0lBQ3RDLDRCQUE0QjtJQUM1QixxQ0FBcUM7RUE1UHRCO0FBQW5COztJQWdRSSxnQ0FBZ0M7RUFoUWpCOztBQTZObkI7RUFDRTtJQUNFLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsdUJBQXVCO0FBQzNCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBOztBQWpQQTtDR0FBLG9CQUFBO0NBQUEsaURBQUE7QUhpekNBOztBQWp6Q0E7Q0dBQSxvQkFBQTtDQUFBLGdEQUFBO0FIc3pDQTs7QUF0ekNBO0NHQUEsb0JBQUE7Q0FBQSxnREFBQTtBSDJ6Q0E7O0FBM3pDQTtDR0FBLG9CQUFBO0NBQUEsaURBQUE7QUhnMENBOztBQWgwQ0E7Q0dBQSxrRkFBQTtDQUFBLHVHQUFBO0FIcTBDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdGFpbHdpbmQgYmFzZTtcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcblxcbkBsYXllciBiYXNlIHtcXG4gIC8qIGludGVyIHZhciAtIGxhdGluICovXFxuICBAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCI7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMCA5MDA7XFxuICAgIGZvbnQtZGlzcGxheTogb3B0aW9uYWw7XFxuICAgIHNyYzogdXJsKFxcXCIvZm9udHMvaW50ZXItdmFyLWxhdGluLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLFxcbiAgICAgIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsXFxuICAgICAgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcXG4gIH1cXG5cXG4gIC50b3B0aXRsZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgfVxcblxcbiAgLyogV3JpdGUgeW91ciBvd24gY3VzdG9tIGJhc2Ugc3R5bGVzIGhlcmUgKi9cXG4gIGgxIHtcXG4gICAgQGFwcGx5IHRleHQtM3hsIGZvbnQtYm9sZCBtZDp0ZXh0LTV4bCBmb250LXByaW1hcnk7XFxuICB9XFxuXFxuICBoMS50ZXh0LWNlbnRlciB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRE0gU2Fuc1xcXCI7XFxuICAgIGZvbnQtZmFtaWx5OiBTZWdvZSBVSTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgfVxcblxcbiAgaDIge1xcbiAgICBAYXBwbHkgdGV4dC0yeGwgZm9udC1ib2xkIG1kOnRleHQtNHhsIGZvbnQtcHJpbWFyeTtcXG4gIH1cXG5cXG4gIGgzIHtcXG4gICAgQGFwcGx5IHRleHQteGwgZm9udC1ib2xkIG1kOnRleHQtM3hsIGZvbnQtcHJpbWFyeTtcXG4gIH1cXG5cXG4gIGgzLnRleHQtY2VudGVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgfVxcblxcbiAgaDQge1xcbiAgICBAYXBwbHkgdGV4dC1sZyBmb250LWJvbGQgZm9udC1wcmltYXJ5O1xcbiAgfVxcblxcbiAgcC5mb250LWJvbGQuY29tcG9uZW50IHtcXG4gICAgZm9udC1zaXplOiAyN3B4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIG1hcmdpbi10b3A6IDZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAuNDAyNXB4IDAuODQyNXB4IDAuMzI1cHggYmxhY2spO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDA7XFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IGhzbCgwZGVnIDAlIDIwJSAvIDUwJSk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgd2hpdGUsICNmNmY4ZmEpO1xcbiAgfVxcblxcbiAgLnRleHQteHMge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjUgIWltcG9ydGFudDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJETSBTYW5zXFxcIjtcXG4gICAgbWFyZ2luOiAycHggMCAzcHggMDtcXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd29yZC1zcGFjaW5nOiAtMC4xZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHdpZHRoOiAxMTIlO1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xcbiAgfVxcblxcbiAgcC5mb250LWJvbGQuYWxidW0ge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgbWFyZ2luOiAycHggMCAzcHggMDtcXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3b3JkLXNwYWNpbmc6IC0wLjFlbTtcXG4gICAgZm9udC1mYW1pbHk6IEZyYW5rbGluR290aGljLCBMYXRvLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gICAgbWFyZ2luLWJsb2NrOiA3cHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC1mYW1pbHk6IENpcmN1bGFyU3AsIENpcmN1bGFyU3AtQXJhYiwgQ2lyY3VsYXJTcC1IZWJyLCBDaXJjdWxhclNwLUN5cmwsXFxuICAgICAgQ2lyY3VsYXJTcC1HcmVrLCBDaXJjdWxhclNwLURldmEsIHZhcigtLWZhbGxiYWNrLWZvbnRzLCBzYW5zLXNlcmlmKTtcXG4gIH1cXG5cXG4gIGJvZHkge1xcbiAgICBAYXBwbHkgdGV4dC1zbSBmb250LXByaW1hcnkgbWQ6dGV4dC1iYXNlO1xcbiAgfVxcblxcbiAgLmxheW91dCB7XFxuICAgIC8qIDc1MHB4ICovXFxuICAgIC8qIG1heC13aWR0aDogNDMuNzVyZW07ICovXFxuXFxuICAgIC8qIDExMDBweCAqL1xcbiAgICBtYXgtd2lkdGg6IDY4Ljc1cmVtO1xcbiAgICBAYXBwbHkgdy0xMS8xMiBteC1hdXRvO1xcbiAgfVxcblxcbiAgLnNoYWRvdy1zbSB7XFxuICB9XFxuXFxuICBib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvaW1nL2Fhc2QuanBnXFxcIik7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL2ltZy9kb2dzYmcyLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgLnctYmcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gIH1cXG4gIGltZy53LWltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgfVxcblxcbiAgYS5jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmc6IDMwcHggIWltcG9ydGFudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAtMC4yZW0gLTAuMTI1ZW0gMC4xMjVlbSByZ2IoMCAwIDAgLyAyNSUpLFxcbiAgICAgIDAgMCAwIDAuMDRlbSByZ2IoMCAwIDAgLyAzMCUpLCAwLjAyZW0gMC4wMmVtIDAuMDJlbSByZ2IoMCAwIDAgLyA0MCUpIGluc2V0LFxcbiAgICAgIC0wLjA1ZW0gLTAuMDVlbSAwLjAyZW0gcmdiKDI1NSAyNTUgMjU1IC8gODAlKSBpbnNldCAhaW1wb3J0YW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXI6IDJweCBvdXRzZXQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAxNDVkZWcsXFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSxcXG4gICAgICB0cmFuc3BhcmVudFxcbiAgICApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgMTQ1ZGVnLFxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAwJSxcXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMTAwJVxcbiAgICApO1xcbiAgfVxcblxcbiAgLnctMTYge1xcbiAgICB3aWR0aDogNDUlICFpbXBvcnRhbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZpbHRlcjogc2F0dXJhdGUoMS4wMjUpIGNvbnRyYXN0KDEuMDE1KVxcbiAgICAgIGRyb3Atc2hhZG93KDAuMTI1cHggMC4yNXB4IDAuMjVweCBibGFjayk7XFxuICB9XFxuXFxuICBpbWcudy0xNi5zaGFkb3ctc20ge1xcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xcbiAgICBoZWlnaHQ6IDYwJSAhaW1wb3J0YW50O1xcbiAgICBvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLnctMTY6OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAwcHgpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSArIDFweCk7XFxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3B1ZGRpbmcuY29vbC8yMDIxLzEwL2p1ZGdlLW15LW11c2ljL2Fzc2V0cy9pbWFnZXMvcGxhc3RpYy1zbWFsbC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEyNSkgb3BhY2l0eSgxKTtcXG4gIH1cXG5cXG4gIHAudGV4dC1jZW50ZXIge1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgICBsaW5lLWhlaWdodDogMjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjMwcHgpIHtcXG4gIGEuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDY1JSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggIWltcG9ydGFudDtcXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XFxufVxcbnAuZm9udC1ib2xkLmNvbXBvbmVudCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi50ZXh0LXhzIHtcXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDNweCAhaW1wb3J0YW50O1xcbn1cXG5wLmZvbnQtYm9sZC5hbGJ1bSB7XFxuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcXG59XFxuXFxufVxcblxcblxcblxcblxcblxcbkBsYXllciB1dGlsaXRpZXMge1xcbiAgLmFuaW1hdGVkLXVuZGVybGluZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMzMzMzMzMDAsICMzMzMzMzMwMCksXFxuICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDBlMGYzLCAjMDBjNGZkKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDJweCwgMCAycHg7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJSwgMCAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXNpemUgMC4zcyBlYXNlO1xcbiAgfVxcbiAgLmFuaW1hdGVkLXVuZGVybGluZTpob3ZlcixcXG4gIC5hbmltYXRlZC11bmRlcmxpbmU6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDAgMnB4LCAxMDAlIDJweDtcXG4gIH1cXG59XFxuXFxuXFxuXCIsXCIvKiEgbW9kZXJuLW5vcm1hbGl6ZSB2MS4xLjAgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZSAqL1xcblxcbi8qXFxuRG9jdW1lbnRcXG49PT09PT09PVxcbiovXFxuXFxuLyoqXFxuVXNlIGEgYmV0dGVyIGJveCBtb2RlbCAob3BpbmlvbmF0ZWQpLlxcbiovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKipcXG5Vc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplIChvcGluaW9uYXRlZCkuXFxuKi9cXG5cXG5odG1sIHtcXG5cXHQtbW96LXRhYi1zaXplOiA0O1xcblxcdHRhYi1zaXplOiA0O1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuKi9cXG5cXG5odG1sIHtcXG5cXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcblxcdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblNlY3Rpb25zXFxuPT09PT09PT1cXG4qL1xcblxcbi8qKlxcblJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmJvZHkge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuSW1wcm92ZSBjb25zaXN0ZW5jeSBvZiBkZWZhdWx0IGZvbnRzIGluIGFsbCBicm93c2Vycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9pc3N1ZXMvMylcXG4qL1xcblxcbmJvZHkge1xcblxcdGZvbnQtZmFtaWx5OlxcblxcdFxcdHN5c3RlbS11aSxcXG5cXHRcXHQtYXBwbGUtc3lzdGVtLCAvKiBGaXJlZm94IHN1cHBvcnRzIHRoaXMgYnV0IG5vdCB5ZXQgYHN5c3RlbS11aWAgKi9cXG5cXHRcXHQnU2Vnb2UgVUknLFxcblxcdFxcdFJvYm90byxcXG5cXHRcXHRIZWx2ZXRpY2EsXFxuXFx0XFx0QXJpYWwsXFxuXFx0XFx0c2Fucy1zZXJpZixcXG5cXHRcXHQnQXBwbGUgQ29sb3IgRW1vamknLFxcblxcdFxcdCdTZWdvZSBVSSBFbW9qaSc7XFxufVxcblxcbi8qXFxuR3JvdXBpbmcgY29udGVudFxcbj09PT09PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXG4qL1xcblxcbmhyIHtcXG5cXHRoZWlnaHQ6IDA7IC8qIDEgKi9cXG5cXHRjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblRleHQtbGV2ZWwgc2VtYW50aWNzXFxuPT09PT09PT09PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJiclt0aXRsZV0ge1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmIsXFxuc3Ryb25nIHtcXG5cXHRmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4xLiBJbXByb3ZlIGNvbnNpc3RlbmN5IG9mIGRlZmF1bHQgZm9udHMgaW4gYWxsIGJyb3dzZXJzLiAoaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplL2lzc3Vlcy8zKVxcbjIuIENvcnJlY3QgdGhlIG9kZCAnZW0nIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG5cXHRmb250LWZhbWlseTpcXG5cXHRcXHR1aS1tb25vc3BhY2UsXFxuXFx0XFx0U0ZNb25vLVJlZ3VsYXIsXFxuXFx0XFx0Q29uc29sYXMsXFxuXFx0XFx0J0xpYmVyYXRpb24gTW9ubycsXFxuXFx0XFx0TWVubG8sXFxuXFx0XFx0bW9ub3NwYWNlOyAvKiAxICovXFxuXFx0Zm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zbWFsbCB7XFxuXFx0Zm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcblByZXZlbnQgJ3N1YicgYW5kICdzdXAnIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG5cXHRmb250LXNpemU6IDc1JTtcXG5cXHRsaW5lLWhlaWdodDogMDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcblxcdGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG5cXHR0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG5UYWJ1bGFyIGRhdGFcXG49PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcbiovXFxuXFxudGFibGUge1xcblxcdHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuXFx0Ym9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuRm9ybXNcXG49PT09PVxcbiovXFxuXFxuLyoqXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG5cXHRmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG5cXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcblxcdG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXFxuMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG5cXHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmJ1dHRvbixcXG5bdHlwZT0nYnV0dG9uJ10sXFxuW3R5cGU9J3Jlc2V0J10sXFxuW3R5cGU9J3N1Ym1pdCddIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4qL1xcblxcbjo6LW1vei1mb2N1cy1pbm5lciB7XFxuXFx0Ym9yZGVyLXN0eWxlOiBub25lO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcblJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuXFx0b3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgJzppbnZhbGlkJyBzdHlsZXMgaW4gRmlyZWZveC5cXG5TZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3XFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG5cXHRib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0ICdmaWVsZHNldCcgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxubGVnZW5kIHtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuXFx0b3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byAnaW5oZXJpdCcgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG5cXHRmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuSW50ZXJhY3RpdmVcXG49PT09PT09PT09PVxcbiovXFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcblxcdGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXCIsXCIvKipcXG4gKiBNYW51YWxseSBmb3JrZWQgZnJvbSBTVUlUIENTUyBCYXNlOiBodHRwczovL2dpdGh1Yi5jb20vc3VpdGNzcy9iYXNlXFxuICogQSB0aGluIGxheWVyIG9uIHRvcCBvZiBub3JtYWxpemUuY3NzIHRoYXQgcHJvdmlkZXMgYSBzdGFydGluZyBwb2ludCBtb3JlXFxuICogc3VpdGFibGUgZm9yIHdlYiBhcHBsaWNhdGlvbnMuXFxuICovXFxuXFxuLyoqXFxuICogUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiAqL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFRhaWx3aW5kIGN1c3RvbSByZXNldCBzdHlsZXNcXG4gKi9cXG5cXG4vKipcXG4gKiAxLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSAod2l0aCBUYWlsd2luZCdzIGRlZmF1bHRcXG4gKiAgICBzYW5zLXNlcmlmIGZvbnQgc3RhY2sgYXMgYSBmYWxsYmFjaykgYXMgYSBzYW5lIGRlZmF1bHQuXFxuICogMi4gVXNlIFRhaWx3aW5kJ3MgZGVmYXVsdCBcXFwibm9ybWFsXFxcIiBsaW5lLWhlaWdodCBzbyB0aGUgdXNlciBpc24ndCBmb3JjZWRcXG4gKiAgICB0byBvdmVycmlkZSBpdCB0byBlbnN1cmUgY29uc2lzdGVuY3kgZXZlbiB3aGVuIHVzaW5nIHRoZSBkZWZhdWx0IHRoZW1lLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IHRoZW1lKCdmb250RmFtaWx5LnNhbnMnLCB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCIpOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS41OyAvKiAyICovXFxufVxcblxcblxcbi8qKlxcbiAqIEluaGVyaXQgZm9udC1mYW1pbHkgYW5kIGxpbmUtaGVpZ2h0IGZyb20gYGh0bWxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhc1xcbiAqIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIGBodG1sYCBlbGVtZW50LlxcbiAqL1xcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC5cXG4gKlxcbiAqICAgIFdlIHVzZWQgdG8gc2V0IHRoaXMgaW4gdGhlIGh0bWwgZWxlbWVudCBhbmQgaW5oZXJpdCBmcm9tXFxuICogICAgdGhlIHBhcmVudCBlbGVtZW50IGZvciBldmVyeXRoaW5nIGVsc2UuIFRoaXMgY2F1c2VkIGlzc3Vlc1xcbiAqICAgIGluIHNoYWRvdy1kb20tZW5oYW5jZWQgZWxlbWVudHMgbGlrZSA8ZGV0YWlscz4gd2hlcmUgdGhlIGNvbnRlbnRcXG4gKiAgICBpcyB3cmFwcGVkIGJ5IGEgZGl2IHdpdGggYm94LXNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YC5cXG4gKlxcbiAqICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNFxcbiAqXFxuICpcXG4gKiAyLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC5cXG4gKlxcbiAqICAgIEJ5IGRlZmF1bHQsIHRoZSB3YXkgdGhlIGJyb3dzZXIgc3BlY2lmaWVzIHRoYXQgYW4gZWxlbWVudCBzaG91bGQgaGF2ZSBub1xcbiAqICAgIGJvcmRlciBpcyBieSBzZXR0aW5nIGl0J3MgYm9yZGVyLXN0eWxlIHRvIGBub25lYCBpbiB0aGUgdXNlci1hZ2VudFxcbiAqICAgIHN0eWxlc2hlZXQuXFxuICpcXG4gKiAgICBJbiBvcmRlciB0byBlYXNpbHkgYWRkIGJvcmRlcnMgdG8gZWxlbWVudHMgYnkganVzdCBzZXR0aW5nIHRoZSBgYm9yZGVyLXdpZHRoYFxcbiAqICAgIHByb3BlcnR5LCB3ZSBjaGFuZ2UgdGhlIGRlZmF1bHQgYm9yZGVyLXN0eWxlIGZvciBhbGwgZWxlbWVudHMgdG8gYHNvbGlkYCwgYW5kXFxuICogICAgdXNlIGJvcmRlci13aWR0aCB0byBoaWRlIHRoZW0gaW5zdGVhZC4gVGhpcyB3YXkgb3VyIGBib3JkZXJgIHV0aWxpdGllcyBvbmx5XFxuICogICAgbmVlZCB0byBzZXQgdGhlIGBib3JkZXItd2lkdGhgIHByb3BlcnR5IGluc3RlYWQgb2YgdGhlIGVudGlyZSBgYm9yZGVyYFxcbiAqICAgIHNob3J0aGFuZCwgbWFraW5nIG91ciBib3JkZXIgdXRpbGl0aWVzIG11Y2ggbW9yZSBzdHJhaWdodGZvcndhcmQgdG8gY29tcG9zZS5cXG4gKlxcbiAqICAgIGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNlxcbiAqL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yOyAvKiAyICovXFxufVxcblxcbi8qXFxuICogRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdFxcbiAqL1xcblxcbmhyIHtcXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXG59XFxuXFxuLyoqXFxuICogVW5kbyB0aGUgYGJvcmRlci1zdHlsZTogbm9uZWAgcmVzZXQgdGhhdCBOb3JtYWxpemUgYXBwbGllcyB0byBpbWFnZXMgc28gdGhhdFxcbiAqIG91ciBgYm9yZGVyLXt3aWR0aH1gIHV0aWxpdGllcyBoYXZlIHRoZSBleHBlY3RlZCBlZmZlY3QuXFxuICpcXG4gKiBUaGUgTm9ybWFsaXplIHJlc2V0IGlzIHVubmVjZXNzYXJ5IGZvciB1cyBzaW5jZSB3ZSBkZWZhdWx0IHRoZSBib3JkZXItd2lkdGhcXG4gKiB0byAwIG9uIGFsbCBlbGVtZW50cy5cXG4gKlxcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9pc3N1ZXMvMzYyXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIGNvbG9yOiB0aGVtZSgnY29sb3JzLmdyYXkuNDAwJywgI2ExYTFhYSk7XFxufVxcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKipcXG4gKiBPdmVycmlkZSBsZWdhY3kgZm9jdXMgcmVzZXQgZnJvbSBOb3JtYWxpemUgd2l0aCBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZXMuXFxuICpcXG4gKiBUaGlzIGlzIGFjdHVhbGx5IGFuIGltcHJvdmVtZW50IG92ZXIgdGhlIG5ldyBkZWZhdWx0cyBpbiBGaXJlZm94IGluIG91ciB0ZXN0aW5nLFxcbiAqIGFzIGl0IHRyaWdnZXJzIHRoZSBiZXR0ZXIgZm9jdXMgc3R5bGVzIGV2ZW4gZm9yIGxpbmtzLCB3aGljaCBzdGlsbCB1c2UgYSBkb3R0ZWRcXG4gKiBvdXRsaW5lIGluIEZpcmVmb3ggYnkgZGVmYXVsdC5cXG4gKi9cXG4gXFxuOi1tb3otZm9jdXNyaW5nIHtcXG5cXHRvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2ZcXG4gKiBvcHQtb3V0LlxcbiAqL1xcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIFJlc2V0IGZvcm0gZWxlbWVudCBwcm9wZXJ0aWVzIHRoYXQgYXJlIGVhc3kgdG8gZm9yZ2V0IHRvXFxuICogc3R5bGUgZXhwbGljaXRseSBzbyB5b3UgZG9uJ3QgaW5hZHZlcnRlbnRseSBpbnRyb2R1Y2VcXG4gKiBzdHlsZXMgdGhhdCBkZXZpYXRlIGZyb20geW91ciBkZXNpZ24gc3lzdGVtLiBUaGVzZSBzdHlsZXNcXG4gKiBzdXBwbGVtZW50IGEgcGFydGlhbCByZXNldCB0aGF0IGlzIGFscmVhZHkgYXBwbGllZCBieVxcbiAqIG5vcm1hbGl6ZS5jc3MuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogVXNlIHRoZSBjb25maWd1cmVkICdtb25vJyBmb250IGZhbWlseSBmb3IgZWxlbWVudHMgdGhhdFxcbiAqIGFyZSBleHBlY3RlZCB0byBiZSByZW5kZXJlZCB3aXRoIGEgbW9ub3NwYWNlIGZvbnQsIGZhbGxpbmdcXG4gKiBiYWNrIHRvIHRoZSBzeXN0ZW0gbW9ub3NwYWNlIHN0YWNrIGlmIHRoZXJlIGlzIG5vIGNvbmZpZ3VyZWRcXG4gKiAnbW9ubycgZm9udCBmYW1pbHkuXFxuICovXFxuXFxucHJlLFxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IHRoZW1lKCdmb250RmFtaWx5Lm1vbm8nLCB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZSk7XFxufVxcblxcbi8qKlxcbiAqIDEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0IGFzIHRoYXQnc1xcbiAqICAgIHRoZSBiZWhhdmlvciB5b3Ugd2FudCBhbG1vc3QgYWxsIG9mIHRoZSB0aW1lLiBJbnNwaXJlZCBieVxcbiAqICAgIENTUyBSZW1lZHksIHdpdGggYHN2Z2AgYWRkZWQgYXMgd2VsbC5cXG4gKlxcbiAqICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTRcXG4gKiBcXG4gKiAyLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmVcXG4gKiAgICBzZW5zaWJseSBieSBkZWZhdWx0IHdoZW4gb3ZlcnJpZGluZyBgZGlzcGxheWAgYnkgYWRkaW5nIGFcXG4gKiAgICB1dGlsaXR5IGxpa2UgYGlubGluZWAuXFxuICpcXG4gKiAgICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludGluZyBlcnJvciBpbiBzb21lXFxuICogICAgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cXG4gKiBcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTBcXG4gKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZVxcbiAqIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uXFxuICpcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0XFxuICovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogRW5zdXJlIHRoZSBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3Igb2YgdGhlIGBoaWRkZW5gIGF0dHJpYnV0ZS5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIixudWxsXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9zaGFyZWQvbGliL2hlYWQnKVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBqc3hERVYodHlwZSwgY29uZmlnLCBtYXliZUtleSwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBrZXkgPSBudWxsO1xuICAgIHZhciByZWYgPSBudWxsOyAvLyBDdXJyZW50bHksIGtleSBjYW4gYmUgc3ByZWFkIGluIGFzIGEgcHJvcC4gVGhpcyBjYXVzZXMgYSBwb3RlbnRpYWxcbiAgICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cbiAgICAvLyBvciA8ZGl2IGtleT1cIkhpXCIgey4uLnByb3BzfSAvPiApLiBXZSB3YW50IHRvIGRlcHJlY2F0ZSBrZXkgc3ByZWFkLFxuICAgIC8vIGJ1dCBhcyBhbiBpbnRlcm1lZGlhcnkgc3RlcCwgd2Ugd2lsbCB1c2UganN4REVWIGZvciBldmVyeXRoaW5nIGV4Y2VwdFxuICAgIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXG4gICAgLy8ga2V5IGlzIGV4cGxpY2l0bHkgZGVjbGFyZWQgdG8gYmUgdW5kZWZpbmVkIG9yIG5vdC5cblxuICAgIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIHtcbiAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICB7XG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmZvO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gICAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSk7XG5cbiAgICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50KSB7XG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59IC8vIFRoZXNlIHR3byBmdW5jdGlvbnMgZXhpc3QgdG8gc3RpbGwgZ2V0IGNoaWxkIHdhcm5pbmdzIGluIGRldlxuXG52YXIganN4REVWJDEgPSAganN4V2l0aFZhbGlkYXRpb24gO1xuXG5leHBvcnRzLmpzeERFViA9IGpzeERFViQxO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSJdLCJuYW1lcyI6WyJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiU0VPIiwib3BlbkdyYXBoIiwidHlwZSIsImxvY2FsZSIsInVybCIsImltYWdlcyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiRGVmYXVsdFNlbyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==