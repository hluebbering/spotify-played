"use strict";
(() => {
var exports = {};
exports.id = 8;
exports.ids = [8];
exports.modules = {

/***/ 957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ spotify),
  "getNowPlaying": () => (/* binding */ getNowPlaying)
});

;// CONCATENATED MODULE: external "querystring"
const external_querystring_namespaceObject = require("querystring");
var external_querystring_default = /*#__PURE__*/__webpack_require__.n(external_querystring_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/spotify.js

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
    body: external_querystring_default().stringify({
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
}; // eslint-disable-next-line import/no-anonymous-default-export

/* harmony default export */ const spotify = (async (_, res) => {
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(957));
module.exports = __webpack_exports__;

})();