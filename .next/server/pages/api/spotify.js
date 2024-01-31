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
/* harmony export */   "getRecentlyPlayed": () => (/* binding */ getRecentlyPlayed),
/* harmony export */   "topTracks": () => (/* binding */ topTracks),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_0__);


const albumArt = __webpack_require__(/*! album-art */ "album-art"); //const albumArt = require('itunes-albumart');


const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token
} = process.env;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;
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
const getRecentlyPlayed = async () => {
  const {
    access_token
  } = await getAccessToken();
  return fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};
const topTracks = async () => {
  const {
    access_token
  } = await getAccessToken();
  return fetch("https://api.spotify.com/v1/me/top/tracks", {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
}; // eslint-disable-next-line import/no-anonymous-default-export

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (_, res) => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    //const response2 = await getRecentlyPlayed();
    //const prevSong = await response2.json();
    //const prevTitle = prevSong.items[0].track.name;
    //const prevAlbumImageUrl = prevSong.items[0].track.album.images[0].url;
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
  const albumHigh = await albumArt(artist, {
    album: album,
    size: 'large'
  });
  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
    albumHigh
  });
});

/***/ }),

/***/ "album-art":
/*!****************************!*\
  !*** external "album-art" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("album-art");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0csSUFBTCxDQUFVQyxJQUF4QjtBQUNBLFFBQU1DLE1BQU0sR0FBR0wsSUFBSSxDQUFDRyxJQUFMLENBQVVHLE9BQVYsQ0FBa0JDLEdBQWxCLENBQXVCQyxPQUFELElBQWFBLE9BQU8sQ0FBQ0osSUFBM0MsRUFBaURLLElBQWpELENBQXNELElBQXRELENBQWY7QUFDQSxRQUFNQyxLQUFLLEdBQUdWLElBQUksQ0FBQ0csSUFBTCxDQUFVTyxLQUFWLENBQWdCTixJQUE5QjtBQUNBLFFBQU1PLGFBQWEsR0FBR1gsSUFBSSxDQUFDRyxJQUFMLENBQVVPLEtBQVYsQ0FBZ0JFLE1BQWhCLENBQXVCLENBQXZCLEVBQTBCQyxHQUFoRDtBQUNBLFFBQU1DLE9BQU8sR0FBR2QsSUFBSSxDQUFDRyxJQUFMLENBQVVZLGFBQVYsQ0FBd0JDLE9BQXhDO0FBR0EsUUFBTUMsU0FBUyxHQUFHLE1BQU1wRCxRQUFRLENBQUN3QyxNQUFELEVBQVM7QUFBRUssSUFBQUEsS0FBSyxFQUFFQSxLQUFUO0FBQWdCUSxJQUFBQSxJQUFJLEVBQUU7QUFBdEIsR0FBVCxDQUFoQztBQUVBLFNBQU9yQixHQUFHLENBQUNDLE1BQUosQ0FBVyxHQUFYLEVBQWdCUCxJQUFoQixDQUFxQjtBQUMxQm1CLElBQUFBLEtBRDBCO0FBRTFCQyxJQUFBQSxhQUYwQjtBQUcxQk4sSUFBQUEsTUFIMEI7QUFJMUJOLElBQUFBLFNBSjBCO0FBSzFCZSxJQUFBQSxPQUwwQjtBQU0xQlosSUFBQUEsS0FOMEI7QUFPMUJlLElBQUFBO0FBUDBCLEdBQXJCLENBQVA7QUFTRCxDQXBDRDs7Ozs7Ozs7OztBQ2xFQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXRhaWx3aW5kLXN0YXJ0ZXIvLi9wYWdlcy9hcGkvc3BvdGlmeS5qcyIsIndlYnBhY2s6Ly9uZXh0anMtdGFpbHdpbmQtc3RhcnRlci9leHRlcm5hbCBcImFsYnVtLWFydFwiIiwid2VicGFjazovL25leHRqcy10YWlsd2luZC1zdGFydGVyL2V4dGVybmFsIFwicXVlcnlzdHJpbmdcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXVlcnlzdHJpbmcgZnJvbSAncXVlcnlzdHJpbmcnO1xyXG5jb25zdCBhbGJ1bUFydCA9IHJlcXVpcmUoJ2FsYnVtLWFydCcpO1xyXG4vL2NvbnN0IGFsYnVtQXJ0ID0gcmVxdWlyZSgnaXR1bmVzLWFsYnVtYXJ0Jyk7XHJcblxyXG5jb25zdCB7XHJcbiAgU1BPVElGWV9DTElFTlRfSUQ6IGNsaWVudF9pZCxcclxuICBTUE9USUZZX0NMSUVOVF9TRUNSRVQ6IGNsaWVudF9zZWNyZXQsXHJcbiAgU1BPVElGWV9SRUZSRVNIX1RPS0VOOiByZWZyZXNoX3Rva2VuLFxyXG59ID0gcHJvY2Vzcy5lbnY7XHJcblxyXG5jb25zdCBiYXNpYyA9IEJ1ZmZlci5mcm9tKGAke2NsaWVudF9pZH06JHtjbGllbnRfc2VjcmV0fWApLnRvU3RyaW5nKCdiYXNlNjQnKTtcclxuY29uc3QgTk9XX1BMQVlJTkdfRU5EUE9JTlQgPSBgaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvcGxheWVyL2N1cnJlbnRseS1wbGF5aW5nYDtcclxuY29uc3QgUkVDRU5UTFlfUExBWUVEX0VORFBPSU5UID0gYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL21lL3BsYXllci9yZWNlbnRseS1wbGF5ZWRgO1xyXG5jb25zdCBUT0tFTl9FTkRQT0lOVCA9IGBodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2FwaS90b2tlbmA7XHJcblxyXG5cclxuY29uc3QgZ2V0QWNjZXNzVG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChUT0tFTl9FTkRQT0lOVCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke2Jhc2ljfWAsXHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBxdWVyeXN0cmluZy5zdHJpbmdpZnkoe1xyXG4gICAgICBncmFudF90eXBlOiAncmVmcmVzaF90b2tlbicsXHJcbiAgICAgIHJlZnJlc2hfdG9rZW4sXHJcbiAgICB9KSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXROb3dQbGF5aW5nID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHsgYWNjZXNzX3Rva2VuIH0gPSBhd2FpdCBnZXRBY2Nlc3NUb2tlbigpO1xyXG5cclxuICByZXR1cm4gZmV0Y2goTk9XX1BMQVlJTkdfRU5EUE9JTlQsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc190b2tlbn1gLFxyXG4gICAgfSxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSZWNlbnRseVBsYXllZCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB7IGFjY2Vzc190b2tlbiB9ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4oKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKFJFQ0VOVExZX1BMQVlFRF9FTkRQT0lOVCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzX3Rva2VufWAsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB0b3BUcmFja3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgeyBhY2Nlc3NfdG9rZW4gfSA9IGF3YWl0IGdldEFjY2Vzc1Rva2VuKCk7XHJcblxyXG4gIHJldHVybiBmZXRjaChcImh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL21lL3RvcC90cmFja3NcIiwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzX3Rva2VufWAsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWFub255bW91cy1kZWZhdWx0LWV4cG9ydFxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoXywgcmVzKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXROb3dQbGF5aW5nKCk7XHJcblxyXG5cclxuICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQgfHwgcmVzcG9uc2Uuc3RhdHVzID4gNDAwKSB7XHJcblxyXG4gICAgLy9jb25zdCByZXNwb25zZTIgPSBhd2FpdCBnZXRSZWNlbnRseVBsYXllZCgpO1xyXG4gICAgLy9jb25zdCBwcmV2U29uZyA9IGF3YWl0IHJlc3BvbnNlMi5qc29uKCk7XHJcbiAgICAvL2NvbnN0IHByZXZUaXRsZSA9IHByZXZTb25nLml0ZW1zWzBdLnRyYWNrLm5hbWU7XHJcbiAgICAvL2NvbnN0IHByZXZBbGJ1bUltYWdlVXJsID0gcHJldlNvbmcuaXRlbXNbMF0udHJhY2suYWxidW0uaW1hZ2VzWzBdLnVybDtcclxuXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICBpc1BsYXlpbmc6IGZhbHNlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNvbmcgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgY29uc3QgaXNQbGF5aW5nID0gc29uZy5pc19wbGF5aW5nO1xyXG4gIGNvbnN0IHRpdGxlID0gc29uZy5pdGVtLm5hbWU7XHJcbiAgY29uc3QgYXJ0aXN0ID0gc29uZy5pdGVtLmFydGlzdHMubWFwKChfYXJ0aXN0KSA9PiBfYXJ0aXN0Lm5hbWUpLmpvaW4oJywgJyk7XHJcbiAgY29uc3QgYWxidW0gPSBzb25nLml0ZW0uYWxidW0ubmFtZTtcclxuICBjb25zdCBhbGJ1bUltYWdlVXJsID0gc29uZy5pdGVtLmFsYnVtLmltYWdlc1swXS51cmw7XHJcbiAgY29uc3Qgc29uZ1VybCA9IHNvbmcuaXRlbS5leHRlcm5hbF91cmxzLnNwb3RpZnk7XHJcblxyXG5cclxuICBjb25zdCBhbGJ1bUhpZ2ggPSBhd2FpdCBhbGJ1bUFydChhcnRpc3QsIHsgYWxidW06IGFsYnVtLCBzaXplOiAnbGFyZ2UnIH0pO1xyXG5cclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgYWxidW0sXHJcbiAgICBhbGJ1bUltYWdlVXJsLFxyXG4gICAgYXJ0aXN0LFxyXG4gICAgaXNQbGF5aW5nLFxyXG4gICAgc29uZ1VybCxcclxuICAgIHRpdGxlLFxyXG4gICAgYWxidW1IaWdoXHJcbiAgfSk7XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbGJ1bS1hcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnlzdHJpbmdcIik7Il0sIm5hbWVzIjpbInF1ZXJ5c3RyaW5nIiwiYWxidW1BcnQiLCJyZXF1aXJlIiwiU1BPVElGWV9DTElFTlRfSUQiLCJjbGllbnRfaWQiLCJTUE9USUZZX0NMSUVOVF9TRUNSRVQiLCJjbGllbnRfc2VjcmV0IiwiU1BPVElGWV9SRUZSRVNIX1RPS0VOIiwicmVmcmVzaF90b2tlbiIsInByb2Nlc3MiLCJlbnYiLCJiYXNpYyIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsIk5PV19QTEFZSU5HX0VORFBPSU5UIiwiUkVDRU5UTFlfUExBWUVEX0VORFBPSU5UIiwiVE9LRU5fRU5EUE9JTlQiLCJnZXRBY2Nlc3NUb2tlbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJzdHJpbmdpZnkiLCJncmFudF90eXBlIiwianNvbiIsImdldE5vd1BsYXlpbmciLCJhY2Nlc3NfdG9rZW4iLCJnZXRSZWNlbnRseVBsYXllZCIsInRvcFRyYWNrcyIsIl8iLCJyZXMiLCJzdGF0dXMiLCJpc1BsYXlpbmciLCJzb25nIiwiaXNfcGxheWluZyIsInRpdGxlIiwiaXRlbSIsIm5hbWUiLCJhcnRpc3QiLCJhcnRpc3RzIiwibWFwIiwiX2FydGlzdCIsImpvaW4iLCJhbGJ1bSIsImFsYnVtSW1hZ2VVcmwiLCJpbWFnZXMiLCJ1cmwiLCJzb25nVXJsIiwiZXh0ZXJuYWxfdXJscyIsInNwb3RpZnkiLCJhbGJ1bUhpZ2giLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==