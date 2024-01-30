"use strict";
(() => {
var exports = {};
exports.id = "pages/api/spotify";
exports.ids = ["pages/api/spotify"];
exports.modules = {

/***/ "./pages/api/spotify.js":
/*!******************************!*\
  !*** ./pages/api/spotify.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNowPlaying": () => (/* binding */ getNowPlaying),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_0__);

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token
} = process.env;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring__WEBPACK_IMPORTED_MODULE_0___default().stringify({
      grant_type: 'refresh_token',
      refresh_token
    })
  });
  return response.json();
};

const getNowPlaying = async () => {
  const {
    access_token
  } = await getAccessToken();
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (_, res) => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({
      isPlaying: false
    });
  }

  const song = await response.json();
  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map(_artist => _artist.name).join(', ');
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;
  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title
  });
});

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/spotify.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MUJaLElBQUFBO0FBTjBCLEdBQXJCLENBQVA7QUFRRCxDQXZCRDs7Ozs7Ozs7OztBQ3RDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy10YWlsd2luZC1zdGFydGVyLy4vcGFnZXMvYXBpL3Nwb3RpZnkuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLXRhaWx3aW5kLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJxdWVyeXN0cmluZ1wiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxdWVyeXN0cmluZyBmcm9tICdxdWVyeXN0cmluZyc7XHJcblxyXG5jb25zdCB7XHJcbiAgU1BPVElGWV9DTElFTlRfSUQ6IGNsaWVudF9pZCxcclxuICBTUE9USUZZX0NMSUVOVF9TRUNSRVQ6IGNsaWVudF9zZWNyZXQsXHJcbiAgU1BPVElGWV9SRUZSRVNIX1RPS0VOOiByZWZyZXNoX3Rva2VuLFxyXG59ID0gcHJvY2Vzcy5lbnY7XHJcblxyXG5jb25zdCBiYXNpYyA9IEJ1ZmZlci5mcm9tKGAke2NsaWVudF9pZH06JHtjbGllbnRfc2VjcmV0fWApLnRvU3RyaW5nKCdiYXNlNjQnKTtcclxuY29uc3QgTk9XX1BMQVlJTkdfRU5EUE9JTlQgPSBgaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvcGxheWVyL2N1cnJlbnRseS1wbGF5aW5nYDtcclxuY29uc3QgVE9LRU5fRU5EUE9JTlQgPSBgaHR0cHM6Ly9hY2NvdW50cy5zcG90aWZ5LmNvbS9hcGkvdG9rZW5gO1xyXG5cclxuY29uc3QgZ2V0QWNjZXNzVG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChUT0tFTl9FTkRQT0lOVCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke2Jhc2ljfWAsXHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBxdWVyeXN0cmluZy5zdHJpbmdpZnkoe1xyXG4gICAgICBncmFudF90eXBlOiAncmVmcmVzaF90b2tlbicsXHJcbiAgICAgIHJlZnJlc2hfdG9rZW4sXHJcbiAgICB9KSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXROb3dQbGF5aW5nID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHsgYWNjZXNzX3Rva2VuIH0gPSBhd2FpdCBnZXRBY2Nlc3NUb2tlbigpO1xyXG5cclxuICByZXR1cm4gZmV0Y2goTk9XX1BMQVlJTkdfRU5EUE9JTlQsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc190b2tlbn1gLFxyXG4gICAgfSxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChfLCByZXMpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldE5vd1BsYXlpbmcoKTtcclxuXHJcbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0IHx8IHJlc3BvbnNlLnN0YXR1cyA+IDQwMCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgaXNQbGF5aW5nOiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNvbmcgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgY29uc3QgaXNQbGF5aW5nID0gc29uZy5pc19wbGF5aW5nO1xyXG4gIGNvbnN0IHRpdGxlID0gc29uZy5pdGVtLm5hbWU7XHJcbiAgY29uc3QgYXJ0aXN0ID0gc29uZy5pdGVtLmFydGlzdHMubWFwKChfYXJ0aXN0KSA9PiBfYXJ0aXN0Lm5hbWUpLmpvaW4oJywgJyk7XHJcbiAgY29uc3QgYWxidW0gPSBzb25nLml0ZW0uYWxidW0ubmFtZTtcclxuICBjb25zdCBhbGJ1bUltYWdlVXJsID0gc29uZy5pdGVtLmFsYnVtLmltYWdlc1swXS51cmw7XHJcbiAgY29uc3Qgc29uZ1VybCA9IHNvbmcuaXRlbS5leHRlcm5hbF91cmxzLnNwb3RpZnk7XHJcblxyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICBhbGJ1bSxcclxuICAgIGFsYnVtSW1hZ2VVcmwsXHJcbiAgICBhcnRpc3QsXHJcbiAgICBpc1BsYXlpbmcsXHJcbiAgICBzb25nVXJsLFxyXG4gICAgdGl0bGUsXHJcbiAgfSk7XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnlzdHJpbmdcIik7Il0sIm5hbWVzIjpbInF1ZXJ5c3RyaW5nIiwiU1BPVElGWV9DTElFTlRfSUQiLCJjbGllbnRfaWQiLCJTUE9USUZZX0NMSUVOVF9TRUNSRVQiLCJjbGllbnRfc2VjcmV0IiwiU1BPVElGWV9SRUZSRVNIX1RPS0VOIiwicmVmcmVzaF90b2tlbiIsInByb2Nlc3MiLCJlbnYiLCJiYXNpYyIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsIk5PV19QTEFZSU5HX0VORFBPSU5UIiwiVE9LRU5fRU5EUE9JTlQiLCJnZXRBY2Nlc3NUb2tlbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJzdHJpbmdpZnkiLCJncmFudF90eXBlIiwianNvbiIsImdldE5vd1BsYXlpbmciLCJhY2Nlc3NfdG9rZW4iLCJfIiwicmVzIiwic3RhdHVzIiwiaXNQbGF5aW5nIiwic29uZyIsImlzX3BsYXlpbmciLCJ0aXRsZSIsIml0ZW0iLCJuYW1lIiwiYXJ0aXN0IiwiYXJ0aXN0cyIsIm1hcCIsIl9hcnRpc3QiLCJqb2luIiwiYWxidW0iLCJhbGJ1bUltYWdlVXJsIiwiaW1hZ2VzIiwidXJsIiwic29uZ1VybCIsImV4dGVybmFsX3VybHMiLCJzcG90aWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==