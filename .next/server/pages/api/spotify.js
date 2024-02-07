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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const albumArt = __webpack_require__(/*! album-art */ "album-art");

 //const albumArt = require('itunes-albumart');

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token
} = process.env;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: querystring__WEBPACK_IMPORTED_MODULE_0___default().stringify({
      grant_type: "refresh_token",
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
  const artist = song.item.artists.map(_artist => _artist.name).join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;
  const albumCovers = ["https://www.slantmagazine.com/wp-content/uploads/2022/12/heroesandvillains.jpg", "https://github.com/hluebbering/web-design/blob/main/assets/images/metrospider.png?raw=true"];
  const favAlbums = ["HEROES & VILLAINS", "METRO BOOMIN PRESENTS SPIDER-MAN: ACROSS THE SPIDER-VERSE (SOUNDTRACK FROM AND INSPIRED BY THE MOTION PICTURE)"]; //const isItemInSet = favAlbums.has(album)

  let index = favAlbums.indexOf(album);
  let favAlbumCover;

  if (index != -1) {
    favAlbumCover = albumCovers[index];
  } else {
    favAlbumCover = albumImageUrl;
  }

  const albumHigh = await albumArt(artist, {
    album: album,
    size: "large"
  });
  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
    albumHigh,
    favAlbumCover
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

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RzFCTixJQUFBQSxNQUgwQjtBQUkxQk4sSUFBQUEsU0FKMEI7QUFLMUJlLElBQUFBLE9BTDBCO0FBTTFCWixJQUFBQSxLQU4wQjtBQU8xQm9CLElBQUFBLFNBUDBCO0FBUTFCRCxJQUFBQTtBQVIwQixHQUFyQixDQUFQO0FBVUQsQ0FyREQ7Ozs7Ozs7Ozs7QUNsRUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXRhaWx3aW5kLXN0YXJ0ZXIvLi9wYWdlcy9hcGkvc3BvdGlmeS5qcyIsIndlYnBhY2s6Ly9uZXh0anMtdGFpbHdpbmQtc3RhcnRlci9leHRlcm5hbCBcImFsYnVtLWFydFwiIiwid2VicGFjazovL25leHRqcy10YWlsd2luZC1zdGFydGVyL2V4dGVybmFsIFwicXVlcnlzdHJpbmdcIiIsIndlYnBhY2s6Ly9uZXh0anMtdGFpbHdpbmQtc3RhcnRlci9leHRlcm5hbCBcInJlYWN0XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHF1ZXJ5c3RyaW5nIGZyb20gXCJxdWVyeXN0cmluZ1wiO1xyXG5jb25zdCBhbGJ1bUFydCA9IHJlcXVpcmUoXCJhbGJ1bS1hcnRcIik7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vL2NvbnN0IGFsYnVtQXJ0ID0gcmVxdWlyZSgnaXR1bmVzLWFsYnVtYXJ0Jyk7XHJcblxyXG5jb25zdCB7XHJcbiAgU1BPVElGWV9DTElFTlRfSUQ6IGNsaWVudF9pZCxcclxuICBTUE9USUZZX0NMSUVOVF9TRUNSRVQ6IGNsaWVudF9zZWNyZXQsXHJcbiAgU1BPVElGWV9SRUZSRVNIX1RPS0VOOiByZWZyZXNoX3Rva2VuLFxyXG59ID0gcHJvY2Vzcy5lbnY7XHJcblxyXG5jb25zdCBiYXNpYyA9IEJ1ZmZlci5mcm9tKGAke2NsaWVudF9pZH06JHtjbGllbnRfc2VjcmV0fWApLnRvU3RyaW5nKFwiYmFzZTY0XCIpO1xyXG5jb25zdCBOT1dfUExBWUlOR19FTkRQT0lOVCA9IGBodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9tZS9wbGF5ZXIvY3VycmVudGx5LXBsYXlpbmdgO1xyXG5jb25zdCBSRUNFTlRMWV9QTEFZRURfRU5EUE9JTlQgPSBgaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvcGxheWVyL3JlY2VudGx5LXBsYXllZGA7XHJcbmNvbnN0IFRPS0VOX0VORFBPSU5UID0gYGh0dHBzOi8vYWNjb3VudHMuc3BvdGlmeS5jb20vYXBpL3Rva2VuYDtcclxuXHJcbmNvbnN0IGdldEFjY2Vzc1Rva2VuID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVE9LRU5fRU5EUE9JTlQsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke2Jhc2ljfWAsXHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keTogcXVlcnlzdHJpbmcuc3RyaW5naWZ5KHtcclxuICAgICAgZ3JhbnRfdHlwZTogXCJyZWZyZXNoX3Rva2VuXCIsXHJcbiAgICAgIHJlZnJlc2hfdG9rZW4sXHJcbiAgICB9KSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXROb3dQbGF5aW5nID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHsgYWNjZXNzX3Rva2VuIH0gPSBhd2FpdCBnZXRBY2Nlc3NUb2tlbigpO1xyXG5cclxuICByZXR1cm4gZmV0Y2goTk9XX1BMQVlJTkdfRU5EUE9JTlQsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc190b2tlbn1gLFxyXG4gICAgfSxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSZWNlbnRseVBsYXllZCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB7IGFjY2Vzc190b2tlbiB9ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4oKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKFJFQ0VOVExZX1BMQVlFRF9FTkRQT0lOVCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzX3Rva2VufWAsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvcFRyYWNrcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB7IGFjY2Vzc190b2tlbiB9ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4oKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKFwiaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvdG9wL3RyYWNrc1wiLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NfdG9rZW59YCxcclxuICAgIH0sXHJcbiAgfSk7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tYW5vbnltb3VzLWRlZmF1bHQtZXhwb3J0XHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChfLCByZXMpID0+IHtcclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXROb3dQbGF5aW5nKCk7XHJcblxyXG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCB8fCByZXNwb25zZS5zdGF0dXMgPiA0MDApIHtcclxuICAgIC8vY29uc3QgcmVzcG9uc2UyID0gYXdhaXQgZ2V0UmVjZW50bHlQbGF5ZWQoKTtcclxuICAgIC8vY29uc3QgcHJldlNvbmcgPSBhd2FpdCByZXNwb25zZTIuanNvbigpO1xyXG4gICAgLy9jb25zdCBwcmV2VGl0bGUgPSBwcmV2U29uZy5pdGVtc1swXS50cmFjay5uYW1lO1xyXG4gICAgLy9jb25zdCBwcmV2QWxidW1JbWFnZVVybCA9IHByZXZTb25nLml0ZW1zWzBdLnRyYWNrLmFsYnVtLmltYWdlc1swXS51cmw7XHJcblxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgaXNQbGF5aW5nOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBjb25zdCBzb25nID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIGNvbnN0IGlzUGxheWluZyA9IHNvbmcuaXNfcGxheWluZztcclxuICBjb25zdCB0aXRsZSA9IHNvbmcuaXRlbS5uYW1lO1xyXG4gIGNvbnN0IGFydGlzdCA9IHNvbmcuaXRlbS5hcnRpc3RzLm1hcCgoX2FydGlzdCkgPT4gX2FydGlzdC5uYW1lKS5qb2luKFwiLCBcIik7XHJcbiAgY29uc3QgYWxidW0gPSBzb25nLml0ZW0uYWxidW0ubmFtZTtcclxuICBjb25zdCBhbGJ1bUltYWdlVXJsID0gc29uZy5pdGVtLmFsYnVtLmltYWdlc1swXS51cmw7XHJcbiAgY29uc3Qgc29uZ1VybCA9IHNvbmcuaXRlbS5leHRlcm5hbF91cmxzLnNwb3RpZnk7XHJcblxyXG4gIGNvbnN0IGFsYnVtQ292ZXJzID0gW1xyXG4gICAgXCJodHRwczovL3d3dy5zbGFudG1hZ2F6aW5lLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMi8xMi9oZXJvZXNhbmR2aWxsYWlucy5qcGdcIixcclxuICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL2hsdWViYmVyaW5nL3dlYi1kZXNpZ24vYmxvYi9tYWluL2Fzc2V0cy9pbWFnZXMvbWV0cm9zcGlkZXIucG5nP3Jhdz10cnVlXCIsXHJcbiAgXTtcclxuICBjb25zdCBmYXZBbGJ1bXMgPSBbXCJIRVJPRVMgJiBWSUxMQUlOU1wiLCBcIk1FVFJPIEJPT01JTiBQUkVTRU5UUyBTUElERVItTUFOOiBBQ1JPU1MgVEhFIFNQSURFUi1WRVJTRSAoU09VTkRUUkFDSyBGUk9NIEFORCBJTlNQSVJFRCBCWSBUSEUgTU9USU9OIFBJQ1RVUkUpXCJdO1xyXG4gIC8vY29uc3QgaXNJdGVtSW5TZXQgPSBmYXZBbGJ1bXMuaGFzKGFsYnVtKVxyXG5cclxuICBsZXQgaW5kZXggPSBmYXZBbGJ1bXMuaW5kZXhPZihhbGJ1bSk7XHJcbiAgbGV0IGZhdkFsYnVtQ292ZXI7XHJcblxyXG4gIGlmIChpbmRleCAhPSAtMSkge1xyXG4gICAgZmF2QWxidW1Db3ZlciA9IGFsYnVtQ292ZXJzW2luZGV4XTtcclxuICB9IGVsc2Uge1xyXG4gICAgZmF2QWxidW1Db3ZlciA9IGFsYnVtSW1hZ2VVcmw7XHJcbiAgfVxyXG5cclxuICBjb25zdCBhbGJ1bUhpZ2ggPSBhd2FpdCBhbGJ1bUFydChhcnRpc3QsIHsgYWxidW06IGFsYnVtLCBzaXplOiBcImxhcmdlXCIgfSk7XHJcblxyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICBhbGJ1bSxcclxuICAgIGFsYnVtSW1hZ2VVcmwsXHJcbiAgICBhcnRpc3QsXHJcbiAgICBpc1BsYXlpbmcsXHJcbiAgICBzb25nVXJsLFxyXG4gICAgdGl0bGUsXHJcbiAgICBhbGJ1bUhpZ2gsXHJcbiAgICBmYXZBbGJ1bUNvdmVyLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWxidW0tYXJ0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5c3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJuYW1lcyI6WyJxdWVyeXN0cmluZyIsImFsYnVtQXJ0IiwicmVxdWlyZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTUE9USUZZX0NMSUVOVF9JRCIsImNsaWVudF9pZCIsIlNQT1RJRllfQ0xJRU5UX1NFQ1JFVCIsImNsaWVudF9zZWNyZXQiLCJTUE9USUZZX1JFRlJFU0hfVE9LRU4iLCJyZWZyZXNoX3Rva2VuIiwicHJvY2VzcyIsImVudiIsImJhc2ljIiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwiTk9XX1BMQVlJTkdfRU5EUE9JTlQiLCJSRUNFTlRMWV9QTEFZRURfRU5EUE9JTlQiLCJUT0tFTl9FTkRQT0lOVCIsImdldEFjY2Vzc1Rva2VuIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsInN0cmluZ2lmeSIsImdyYW50X3R5cGUiLCJqc29uIiwiZ2V0Tm93UGxheWluZyIsImFjY2Vzc190b2tlbiIsImdldFJlY2VudGx5UGxheWVkIiwidG9wVHJhY2tzIiwiXyIsInJlcyIsInN0YXR1cyIsImlzUGxheWluZyIsInNvbmciLCJpc19wbGF5aW5nIiwidGl0bGUiLCJpdGVtIiwibmFtZSIsImFydGlzdCIsImFydGlzdHMiLCJtYXAiLCJfYXJ0aXN0Iiwiam9pbiIsImFsYnVtIiwiYWxidW1JbWFnZVVybCIsImltYWdlcyIsInVybCIsInNvbmdVcmwiLCJleHRlcm5hbF91cmxzIiwic3BvdGlmeSIsImFsYnVtQ292ZXJzIiwiZmF2QWxidW1zIiwiaW5kZXgiLCJpbmRleE9mIiwiZmF2QWxidW1Db3ZlciIsImFsYnVtSGlnaCIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9