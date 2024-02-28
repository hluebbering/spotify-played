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
  const getData = async () => {
    const response = await getNowPlaying();

    if (response.status === 204 || response.status > 400) {
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
    const favAlbums = ["HEROES & VILLAINS", "METRO BOOMIN PRESENTS SPIDER-MAN: ACROSS THE SPIDER-VERSE (SOUNDTRACK FROM AND INSPIRED BY THE MOTION PICTURE)"];
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
  }; // Call the API immediately


  await getData(); // Call the API every 5 seconds

  setTimeout(getData, 5000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TixNQUFBQSxNQUgwQjtBQUkxQk4sTUFBQUEsU0FKMEI7QUFLMUJlLE1BQUFBLE9BTDBCO0FBTTFCWixNQUFBQSxLQU4wQjtBQU8xQm9CLE1BQUFBLFNBUDBCO0FBUTFCRCxNQUFBQTtBQVIwQixLQUFyQixDQUFQO0FBVUQsR0EvQ0QsQ0FEK0IsQ0FrRC9COzs7QUFDQSxRQUFNeEIsT0FBTyxFQUFiLENBbkQrQixDQXFEL0I7O0FBQ0EyQixFQUFBQSxVQUFVLENBQUMzQixPQUFELEVBQVUsSUFBVixDQUFWO0FBQ0QsQ0F2REQ7Ozs7Ozs7Ozs7QUNsRUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXRhaWx3aW5kLXN0YXJ0ZXIvLi9wYWdlcy9hcGkvc3BvdGlmeS5qcyIsIndlYnBhY2s6Ly9uZXh0anMtdGFpbHdpbmQtc3RhcnRlci9leHRlcm5hbCBcImFsYnVtLWFydFwiIiwid2VicGFjazovL25leHRqcy10YWlsd2luZC1zdGFydGVyL2V4dGVybmFsIFwicXVlcnlzdHJpbmdcIiIsIndlYnBhY2s6Ly9uZXh0anMtdGFpbHdpbmQtc3RhcnRlci9leHRlcm5hbCBcInJlYWN0XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHF1ZXJ5c3RyaW5nIGZyb20gXCJxdWVyeXN0cmluZ1wiO1xyXG5jb25zdCBhbGJ1bUFydCA9IHJlcXVpcmUoXCJhbGJ1bS1hcnRcIik7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vL2NvbnN0IGFsYnVtQXJ0ID0gcmVxdWlyZSgnaXR1bmVzLWFsYnVtYXJ0Jyk7XHJcblxyXG5jb25zdCB7XHJcbiAgU1BPVElGWV9DTElFTlRfSUQ6IGNsaWVudF9pZCxcclxuICBTUE9USUZZX0NMSUVOVF9TRUNSRVQ6IGNsaWVudF9zZWNyZXQsXHJcbiAgU1BPVElGWV9SRUZSRVNIX1RPS0VOOiByZWZyZXNoX3Rva2VuLFxyXG59ID0gcHJvY2Vzcy5lbnY7XHJcblxyXG5jb25zdCBiYXNpYyA9IEJ1ZmZlci5mcm9tKGAke2NsaWVudF9pZH06JHtjbGllbnRfc2VjcmV0fWApLnRvU3RyaW5nKFwiYmFzZTY0XCIpO1xyXG5jb25zdCBOT1dfUExBWUlOR19FTkRQT0lOVCA9IGBodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9tZS9wbGF5ZXIvY3VycmVudGx5LXBsYXlpbmdgO1xyXG5jb25zdCBSRUNFTlRMWV9QTEFZRURfRU5EUE9JTlQgPSBgaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvcGxheWVyL3JlY2VudGx5LXBsYXllZGA7XHJcbmNvbnN0IFRPS0VOX0VORFBPSU5UID0gYGh0dHBzOi8vYWNjb3VudHMuc3BvdGlmeS5jb20vYXBpL3Rva2VuYDtcclxuXHJcbmNvbnN0IGdldEFjY2Vzc1Rva2VuID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVE9LRU5fRU5EUE9JTlQsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke2Jhc2ljfWAsXHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keTogcXVlcnlzdHJpbmcuc3RyaW5naWZ5KHtcclxuICAgICAgZ3JhbnRfdHlwZTogXCJyZWZyZXNoX3Rva2VuXCIsXHJcbiAgICAgIHJlZnJlc2hfdG9rZW4sXHJcbiAgICB9KSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXROb3dQbGF5aW5nID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHsgYWNjZXNzX3Rva2VuIH0gPSBhd2FpdCBnZXRBY2Nlc3NUb2tlbigpO1xyXG5cclxuICByZXR1cm4gZmV0Y2goTk9XX1BMQVlJTkdfRU5EUE9JTlQsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc190b2tlbn1gLFxyXG4gICAgfSxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSZWNlbnRseVBsYXllZCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB7IGFjY2Vzc190b2tlbiB9ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4oKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKFJFQ0VOVExZX1BMQVlFRF9FTkRQT0lOVCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzX3Rva2VufWAsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvcFRyYWNrcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB7IGFjY2Vzc190b2tlbiB9ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4oKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKFwiaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvdG9wL3RyYWNrc1wiLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NfdG9rZW59YCxcclxuICAgIH0sXHJcbiAgfSk7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tYW5vbnltb3VzLWRlZmF1bHQtZXhwb3J0XHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChfLCByZXMpID0+IHtcclxuICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXROb3dQbGF5aW5nKCk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0IHx8IHJlc3BvbnNlLnN0YXR1cyA+IDQwMCkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIGlzUGxheWluZzogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNvbmcgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCBpc1BsYXlpbmcgPSBzb25nLmlzX3BsYXlpbmc7XHJcbiAgICBjb25zdCB0aXRsZSA9IHNvbmcuaXRlbS5uYW1lO1xyXG4gICAgY29uc3QgYXJ0aXN0ID0gc29uZy5pdGVtLmFydGlzdHMubWFwKChfYXJ0aXN0KSA9PiBfYXJ0aXN0Lm5hbWUpLmpvaW4oXCIsIFwiKTtcclxuICAgIGNvbnN0IGFsYnVtID0gc29uZy5pdGVtLmFsYnVtLm5hbWU7XHJcbiAgICBjb25zdCBhbGJ1bUltYWdlVXJsID0gc29uZy5pdGVtLmFsYnVtLmltYWdlc1swXS51cmw7XHJcbiAgICBjb25zdCBzb25nVXJsID0gc29uZy5pdGVtLmV4dGVybmFsX3VybHMuc3BvdGlmeTtcclxuXHJcbiAgICBjb25zdCBhbGJ1bUNvdmVycyA9IFtcclxuICAgICAgXCJodHRwczovL3d3dy5zbGFudG1hZ2F6aW5lLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMi8xMi9oZXJvZXNhbmR2aWxsYWlucy5qcGdcIixcclxuICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vaGx1ZWJiZXJpbmcvd2ViLWRlc2lnbi9ibG9iL21haW4vYXNzZXRzL2ltYWdlcy9tZXRyb3NwaWRlci5wbmc/cmF3PXRydWVcIixcclxuICAgIF07XHJcbiAgICBjb25zdCBmYXZBbGJ1bXMgPSBbXHJcbiAgICAgIFwiSEVST0VTICYgVklMTEFJTlNcIixcclxuICAgICAgXCJNRVRSTyBCT09NSU4gUFJFU0VOVFMgU1BJREVSLU1BTjogQUNST1NTIFRIRSBTUElERVItVkVSU0UgKFNPVU5EVFJBQ0sgRlJPTSBBTkQgSU5TUElSRUQgQlkgVEhFIE1PVElPTiBQSUNUVVJFKVwiLFxyXG4gICAgXTtcclxuXHJcbiAgICBsZXQgaW5kZXggPSBmYXZBbGJ1bXMuaW5kZXhPZihhbGJ1bSk7XHJcbiAgICBsZXQgZmF2QWxidW1Db3ZlcjtcclxuXHJcbiAgICBpZiAoaW5kZXggIT0gLTEpIHtcclxuICAgICAgZmF2QWxidW1Db3ZlciA9IGFsYnVtQ292ZXJzW2luZGV4XTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZhdkFsYnVtQ292ZXIgPSBhbGJ1bUltYWdlVXJsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFsYnVtSGlnaCA9IGF3YWl0IGFsYnVtQXJ0KGFydGlzdCwgeyBhbGJ1bTogYWxidW0sIHNpemU6IFwibGFyZ2VcIiB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICBhbGJ1bSxcclxuICAgICAgYWxidW1JbWFnZVVybCxcclxuICAgICAgYXJ0aXN0LFxyXG4gICAgICBpc1BsYXlpbmcsXHJcbiAgICAgIHNvbmdVcmwsXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBhbGJ1bUhpZ2gsXHJcbiAgICAgIGZhdkFsYnVtQ292ZXIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyBDYWxsIHRoZSBBUEkgaW1tZWRpYXRlbHlcclxuICBhd2FpdCBnZXREYXRhKCk7XHJcblxyXG4gIC8vIENhbGwgdGhlIEFQSSBldmVyeSA1IHNlY29uZHNcclxuICBzZXRUaW1lb3V0KGdldERhdGEsIDUwMDApO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFsYnVtLWFydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJxdWVyeXN0cmluZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwibmFtZXMiOlsicXVlcnlzdHJpbmciLCJhbGJ1bUFydCIsInJlcXVpcmUiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU1BPVElGWV9DTElFTlRfSUQiLCJjbGllbnRfaWQiLCJTUE9USUZZX0NMSUVOVF9TRUNSRVQiLCJjbGllbnRfc2VjcmV0IiwiU1BPVElGWV9SRUZSRVNIX1RPS0VOIiwicmVmcmVzaF90b2tlbiIsInByb2Nlc3MiLCJlbnYiLCJiYXNpYyIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsIk5PV19QTEFZSU5HX0VORFBPSU5UIiwiUkVDRU5UTFlfUExBWUVEX0VORFBPSU5UIiwiVE9LRU5fRU5EUE9JTlQiLCJnZXRBY2Nlc3NUb2tlbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJzdHJpbmdpZnkiLCJncmFudF90eXBlIiwianNvbiIsImdldE5vd1BsYXlpbmciLCJhY2Nlc3NfdG9rZW4iLCJnZXRSZWNlbnRseVBsYXllZCIsInRvcFRyYWNrcyIsIl8iLCJyZXMiLCJnZXREYXRhIiwic3RhdHVzIiwiaXNQbGF5aW5nIiwic29uZyIsImlzX3BsYXlpbmciLCJ0aXRsZSIsIml0ZW0iLCJuYW1lIiwiYXJ0aXN0IiwiYXJ0aXN0cyIsIm1hcCIsIl9hcnRpc3QiLCJqb2luIiwiYWxidW0iLCJhbGJ1bUltYWdlVXJsIiwiaW1hZ2VzIiwidXJsIiwic29uZ1VybCIsImV4dGVybmFsX3VybHMiLCJzcG90aWZ5IiwiYWxidW1Db3ZlcnMiLCJmYXZBbGJ1bXMiLCJpbmRleCIsImluZGV4T2YiLCJmYXZBbGJ1bUNvdmVyIiwiYWxidW1IaWdoIiwic2l6ZSIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9