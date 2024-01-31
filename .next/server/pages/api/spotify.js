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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3Nwb3RpZnkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLE1BQU1DLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQyw0QkFBRCxDQUF4QixFQUNBOzs7QUFFQSxNQUFNO0FBQ0pDLEVBQUFBLGlCQUFpQixFQUFFQyxTQURmO0FBRUpDLEVBQUFBLHFCQUFxQixFQUFFQyxhQUZuQjtBQUdKQyxFQUFBQSxxQkFBcUIsRUFBRUM7QUFIbkIsSUFJRkMsT0FBTyxDQUFDQyxHQUpaO0FBTUEsTUFBTUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBYSxHQUFFVCxTQUFVLElBQUdFLGFBQWMsRUFBMUMsRUFBNkNRLFFBQTdDLENBQXNELFFBQXRELENBQWQ7QUFDQSxNQUFNQyxvQkFBb0IsR0FBSSx3REFBOUI7QUFDQSxNQUFNQyx3QkFBd0IsR0FBSSxzREFBbEM7QUFDQSxNQUFNQyxjQUFjLEdBQUksd0NBQXhCOztBQUVBLE1BQU1DLGNBQWMsR0FBRyxZQUFZO0FBQ2pDLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNILGNBQUQsRUFBaUI7QUFDM0NJLElBQUFBLE1BQU0sRUFBRSxNQURtQztBQUUzQ0MsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLGFBQWEsRUFBRyxTQUFRWixLQUFNLEVBRHZCO0FBRVAsc0JBQWdCO0FBRlQsS0FGa0M7QUFNM0NhLElBQUFBLElBQUksRUFBRXhCLDREQUFBLENBQXNCO0FBQzFCMEIsTUFBQUEsVUFBVSxFQUFFLGVBRGM7QUFFMUJsQixNQUFBQTtBQUYwQixLQUF0QjtBQU5xQyxHQUFqQixDQUE1QjtBQVlBLFNBQU9XLFFBQVEsQ0FBQ1EsSUFBVCxFQUFQO0FBQ0QsQ0FkRDs7QUFnQk8sTUFBTUMsYUFBYSxHQUFHLFlBQVk7QUFDdkMsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQW1CLE1BQU1YLGNBQWMsRUFBN0M7QUFFQSxTQUFPRSxLQUFLLENBQUNMLG9CQUFELEVBQXVCO0FBQ2pDTyxJQUFBQSxPQUFPLEVBQUU7QUFDUEMsTUFBQUEsYUFBYSxFQUFHLFVBQVNNLFlBQWE7QUFEL0I7QUFEd0IsR0FBdkIsQ0FBWjtBQUtELENBUk07QUFVQSxNQUFNQyxpQkFBaUIsR0FBRyxZQUFZO0FBQzNDLFFBQU07QUFBRUQsSUFBQUE7QUFBRixNQUFtQixNQUFNWCxjQUFjLEVBQTdDO0FBRUEsU0FBT0UsS0FBSyxDQUFDSix3QkFBRCxFQUEyQjtBQUNyQ00sSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLGFBQWEsRUFBRyxVQUFTTSxZQUFhO0FBRC9CO0FBRDRCLEdBQTNCLENBQVo7QUFLRCxDQVJNO0FBVUEsTUFBTUUsU0FBUyxHQUFHLFlBQVk7QUFDbkMsUUFBTTtBQUFFRixJQUFBQTtBQUFGLE1BQW1CLE1BQU1YLGNBQWMsRUFBN0M7QUFFQSxTQUFPRSxLQUFLLENBQUMsMENBQUQsRUFBNkM7QUFDdkRFLElBQUFBLE9BQU8sRUFBRTtBQUNQQyxNQUFBQSxhQUFhLEVBQUcsVUFBU00sWUFBYTtBQUQvQjtBQUQ4QyxHQUE3QyxDQUFaO0FBS0QsQ0FSTSxFQVVQOztBQUNBLGlFQUFlLE9BQU9HLENBQVAsRUFBVUMsR0FBVixLQUFrQjtBQUMvQixRQUFNZCxRQUFRLEdBQUcsTUFBTVMsYUFBYSxFQUFwQzs7QUFFQSxNQUFJVCxRQUFRLENBQUNlLE1BQVQsS0FBb0IsR0FBcEIsSUFBMkJmLFFBQVEsQ0FBQ2UsTUFBVCxHQUFrQixHQUFqRCxFQUFzRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUVBLFdBQU9ELEdBQUcsQ0FBQ0MsTUFBSixDQUFXLEdBQVgsRUFBZ0JQLElBQWhCLENBQXFCO0FBQzFCUSxNQUFBQSxTQUFTLEVBQUU7QUFEZSxLQUFyQixDQUFQO0FBR0Q7O0FBRUQsUUFBTUMsSUFBSSxHQUFHLE1BQU1qQixRQUFRLENBQUNRLElBQVQsRUFBbkI7QUFDQSxRQUFNUSxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsVUFBdkI7QUFDQSxRQUFNQyxLQUFLLEdBQUdGLElBQUksQ0FBQ0csSUFBTCxDQUFVQyxJQUF4QjtBQUNBLFFBQU1DLE1BQU0sR0FBR0wsSUFBSSxDQUFDRyxJQUFMLENBQVVHLE9BQVYsQ0FBa0JDLEdBQWxCLENBQXVCQyxPQUFELElBQWFBLE9BQU8sQ0FBQ0osSUFBM0MsRUFBaURLLElBQWpELENBQXNELElBQXRELENBQWY7QUFDQSxRQUFNQyxLQUFLLEdBQUdWLElBQUksQ0FBQ0csSUFBTCxDQUFVTyxLQUFWLENBQWdCTixJQUE5QjtBQUNBLFFBQU1PLGFBQWEsR0FBR1gsSUFBSSxDQUFDRyxJQUFMLENBQVVPLEtBQVYsQ0FBZ0JFLE1BQWhCLENBQXVCLENBQXZCLEVBQTBCQyxHQUFoRDtBQUNBLFFBQU1DLE9BQU8sR0FBR2QsSUFBSSxDQUFDRyxJQUFMLENBQVVZLGFBQVYsQ0FBd0JDLE9BQXhDO0FBRUEsUUFBTUMsV0FBVyxHQUFHLENBQ2xCLGdGQURrQixFQUVsQiw0RkFGa0IsQ0FBcEI7QUFJQSxRQUFNQyxTQUFTLEdBQUcsQ0FBQyxtQkFBRCxFQUFzQixnSEFBdEIsQ0FBbEIsQ0ExQitCLENBMkIvQjs7QUFFQSxNQUFJQyxLQUFLLEdBQUdELFNBQVMsQ0FBQ0UsT0FBVixDQUFrQlYsS0FBbEIsQ0FBWjtBQUNBLE1BQUlXLGFBQUo7O0FBRUEsTUFBSUYsS0FBSyxJQUFJLENBQUMsQ0FBZCxFQUFpQjtBQUNmRSxJQUFBQSxhQUFhLEdBQUdKLFdBQVcsQ0FBQ0UsS0FBRCxDQUEzQjtBQUNELEdBRkQsTUFFTztBQUNMRSxJQUFBQSxhQUFhLEdBQUdWLGFBQWhCO0FBQ0Q7O0FBRUQsUUFBTVcsU0FBUyxHQUFHLE1BQU16RCxRQUFRLENBQUN3QyxNQUFELEVBQVM7QUFBRUssSUFBQUEsS0FBSyxFQUFFQSxLQUFUO0FBQWdCYSxJQUFBQSxJQUFJLEVBQUU7QUFBdEIsR0FBVCxDQUFoQztBQUVBLFNBQU8xQixHQUFHLENBQUNDLE1BQUosQ0FBVyxHQUFYLEVBQWdCUCxJQUFoQixDQUFxQjtBQUMxQm1CLElBQUFBLEtBRDBCO0FBRTFCQyxJQUFBQSxhQUYwQjtBQUcxQk4sSUFBQUEsTUFIMEI7QUFJMUJOLElBQUFBLFNBSjBCO0FBSzFCZSxJQUFBQSxPQUwwQjtBQU0xQlosSUFBQUEsS0FOMEI7QUFPMUJvQixJQUFBQSxTQVAwQjtBQVExQkQsSUFBQUE7QUFSMEIsR0FBckIsQ0FBUDtBQVVELENBbEREOzs7Ozs7Ozs7O0FDOURBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtdGFpbHdpbmQtc3RhcnRlci8uL3BhZ2VzL2FwaS9zcG90aWZ5LmpzIiwid2VicGFjazovL25leHRqcy10YWlsd2luZC1zdGFydGVyL2V4dGVybmFsIFwiYWxidW0tYXJ0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLXRhaWx3aW5kLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJxdWVyeXN0cmluZ1wiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxdWVyeXN0cmluZyBmcm9tIFwicXVlcnlzdHJpbmdcIjtcclxuY29uc3QgYWxidW1BcnQgPSByZXF1aXJlKFwiYWxidW0tYXJ0XCIpO1xyXG4vL2NvbnN0IGFsYnVtQXJ0ID0gcmVxdWlyZSgnaXR1bmVzLWFsYnVtYXJ0Jyk7XHJcblxyXG5jb25zdCB7XHJcbiAgU1BPVElGWV9DTElFTlRfSUQ6IGNsaWVudF9pZCxcclxuICBTUE9USUZZX0NMSUVOVF9TRUNSRVQ6IGNsaWVudF9zZWNyZXQsXHJcbiAgU1BPVElGWV9SRUZSRVNIX1RPS0VOOiByZWZyZXNoX3Rva2VuLFxyXG59ID0gcHJvY2Vzcy5lbnY7XHJcblxyXG5jb25zdCBiYXNpYyA9IEJ1ZmZlci5mcm9tKGAke2NsaWVudF9pZH06JHtjbGllbnRfc2VjcmV0fWApLnRvU3RyaW5nKFwiYmFzZTY0XCIpO1xyXG5jb25zdCBOT1dfUExBWUlOR19FTkRQT0lOVCA9IGBodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9tZS9wbGF5ZXIvY3VycmVudGx5LXBsYXlpbmdgO1xyXG5jb25zdCBSRUNFTlRMWV9QTEFZRURfRU5EUE9JTlQgPSBgaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvcGxheWVyL3JlY2VudGx5LXBsYXllZGA7XHJcbmNvbnN0IFRPS0VOX0VORFBPSU5UID0gYGh0dHBzOi8vYWNjb3VudHMuc3BvdGlmeS5jb20vYXBpL3Rva2VuYDtcclxuXHJcbmNvbnN0IGdldEFjY2Vzc1Rva2VuID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVE9LRU5fRU5EUE9JTlQsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke2Jhc2ljfWAsXHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keTogcXVlcnlzdHJpbmcuc3RyaW5naWZ5KHtcclxuICAgICAgZ3JhbnRfdHlwZTogXCJyZWZyZXNoX3Rva2VuXCIsXHJcbiAgICAgIHJlZnJlc2hfdG9rZW4sXHJcbiAgICB9KSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXROb3dQbGF5aW5nID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHsgYWNjZXNzX3Rva2VuIH0gPSBhd2FpdCBnZXRBY2Nlc3NUb2tlbigpO1xyXG5cclxuICByZXR1cm4gZmV0Y2goTk9XX1BMQVlJTkdfRU5EUE9JTlQsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc190b2tlbn1gLFxyXG4gICAgfSxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSZWNlbnRseVBsYXllZCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB7IGFjY2Vzc190b2tlbiB9ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4oKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKFJFQ0VOVExZX1BMQVlFRF9FTkRQT0lOVCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzX3Rva2VufWAsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvcFRyYWNrcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB7IGFjY2Vzc190b2tlbiB9ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4oKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKFwiaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvdG9wL3RyYWNrc1wiLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NfdG9rZW59YCxcclxuICAgIH0sXHJcbiAgfSk7XHJcbn07XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWFub255bW91cy1kZWZhdWx0LWV4cG9ydFxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoXywgcmVzKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXROb3dQbGF5aW5nKCk7XHJcblxyXG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCB8fCByZXNwb25zZS5zdGF0dXMgPiA0MDApIHtcclxuICAgIC8vY29uc3QgcmVzcG9uc2UyID0gYXdhaXQgZ2V0UmVjZW50bHlQbGF5ZWQoKTtcclxuICAgIC8vY29uc3QgcHJldlNvbmcgPSBhd2FpdCByZXNwb25zZTIuanNvbigpO1xyXG4gICAgLy9jb25zdCBwcmV2VGl0bGUgPSBwcmV2U29uZy5pdGVtc1swXS50cmFjay5uYW1lO1xyXG4gICAgLy9jb25zdCBwcmV2QWxidW1JbWFnZVVybCA9IHByZXZTb25nLml0ZW1zWzBdLnRyYWNrLmFsYnVtLmltYWdlc1swXS51cmw7XHJcblxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgaXNQbGF5aW5nOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc29uZyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBjb25zdCBpc1BsYXlpbmcgPSBzb25nLmlzX3BsYXlpbmc7XHJcbiAgY29uc3QgdGl0bGUgPSBzb25nLml0ZW0ubmFtZTtcclxuICBjb25zdCBhcnRpc3QgPSBzb25nLml0ZW0uYXJ0aXN0cy5tYXAoKF9hcnRpc3QpID0+IF9hcnRpc3QubmFtZSkuam9pbihcIiwgXCIpO1xyXG4gIGNvbnN0IGFsYnVtID0gc29uZy5pdGVtLmFsYnVtLm5hbWU7XHJcbiAgY29uc3QgYWxidW1JbWFnZVVybCA9IHNvbmcuaXRlbS5hbGJ1bS5pbWFnZXNbMF0udXJsO1xyXG4gIGNvbnN0IHNvbmdVcmwgPSBzb25nLml0ZW0uZXh0ZXJuYWxfdXJscy5zcG90aWZ5O1xyXG5cclxuICBjb25zdCBhbGJ1bUNvdmVycyA9IFtcclxuICAgIFwiaHR0cHM6Ly93d3cuc2xhbnRtYWdhemluZS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjIvMTIvaGVyb2VzYW5kdmlsbGFpbnMuanBnXCIsXHJcbiAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9obHVlYmJlcmluZy93ZWItZGVzaWduL2Jsb2IvbWFpbi9hc3NldHMvaW1hZ2VzL21ldHJvc3BpZGVyLnBuZz9yYXc9dHJ1ZVwiLFxyXG4gIF07XHJcbiAgY29uc3QgZmF2QWxidW1zID0gW1wiSEVST0VTICYgVklMTEFJTlNcIiwgXCJNRVRSTyBCT09NSU4gUFJFU0VOVFMgU1BJREVSLU1BTjogQUNST1NTIFRIRSBTUElERVItVkVSU0UgKFNPVU5EVFJBQ0sgRlJPTSBBTkQgSU5TUElSRUQgQlkgVEhFIE1PVElPTiBQSUNUVVJFKVwiXTtcclxuICAvL2NvbnN0IGlzSXRlbUluU2V0ID0gZmF2QWxidW1zLmhhcyhhbGJ1bSlcclxuXHJcbiAgbGV0IGluZGV4ID0gZmF2QWxidW1zLmluZGV4T2YoYWxidW0pO1xyXG4gIGxldCBmYXZBbGJ1bUNvdmVyO1xyXG5cclxuICBpZiAoaW5kZXggIT0gLTEpIHtcclxuICAgIGZhdkFsYnVtQ292ZXIgPSBhbGJ1bUNvdmVyc1tpbmRleF07XHJcbiAgfSBlbHNlIHtcclxuICAgIGZhdkFsYnVtQ292ZXIgPSBhbGJ1bUltYWdlVXJsO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWxidW1IaWdoID0gYXdhaXQgYWxidW1BcnQoYXJ0aXN0LCB7IGFsYnVtOiBhbGJ1bSwgc2l6ZTogXCJsYXJnZVwiIH0pO1xyXG5cclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgYWxidW0sXHJcbiAgICBhbGJ1bUltYWdlVXJsLFxyXG4gICAgYXJ0aXN0LFxyXG4gICAgaXNQbGF5aW5nLFxyXG4gICAgc29uZ1VybCxcclxuICAgIHRpdGxlLFxyXG4gICAgYWxidW1IaWdoLFxyXG4gICAgZmF2QWxidW1Db3ZlcixcclxuICB9KTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWxidW0tYXJ0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5c3RyaW5nXCIpOyJdLCJuYW1lcyI6WyJxdWVyeXN0cmluZyIsImFsYnVtQXJ0IiwicmVxdWlyZSIsIlNQT1RJRllfQ0xJRU5UX0lEIiwiY2xpZW50X2lkIiwiU1BPVElGWV9DTElFTlRfU0VDUkVUIiwiY2xpZW50X3NlY3JldCIsIlNQT1RJRllfUkVGUkVTSF9UT0tFTiIsInJlZnJlc2hfdG9rZW4iLCJwcm9jZXNzIiwiZW52IiwiYmFzaWMiLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJOT1dfUExBWUlOR19FTkRQT0lOVCIsIlJFQ0VOVExZX1BMQVlFRF9FTkRQT0lOVCIsIlRPS0VOX0VORFBPSU5UIiwiZ2V0QWNjZXNzVG9rZW4iLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJib2R5Iiwic3RyaW5naWZ5IiwiZ3JhbnRfdHlwZSIsImpzb24iLCJnZXROb3dQbGF5aW5nIiwiYWNjZXNzX3Rva2VuIiwiZ2V0UmVjZW50bHlQbGF5ZWQiLCJ0b3BUcmFja3MiLCJfIiwicmVzIiwic3RhdHVzIiwiaXNQbGF5aW5nIiwic29uZyIsImlzX3BsYXlpbmciLCJ0aXRsZSIsIml0ZW0iLCJuYW1lIiwiYXJ0aXN0IiwiYXJ0aXN0cyIsIm1hcCIsIl9hcnRpc3QiLCJqb2luIiwiYWxidW0iLCJhbGJ1bUltYWdlVXJsIiwiaW1hZ2VzIiwidXJsIiwic29uZ1VybCIsImV4dGVybmFsX3VybHMiLCJzcG90aWZ5IiwiYWxidW1Db3ZlcnMiLCJmYXZBbGJ1bXMiLCJpbmRleCIsImluZGV4T2YiLCJmYXZBbGJ1bUNvdmVyIiwiYWxidW1IaWdoIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=