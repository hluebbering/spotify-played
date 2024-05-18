import querystring from "querystring";
const albumArt = require("album-art");
import React, { useState, useEffect } from "react";

//const albumArt = require('itunes-albumart');

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
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
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getRecentlyPlayed = async () => {
  const { access_token } = await getAccessToken();

  return fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const topTracks = async () => {
  const { access_token } = await getAccessToken();

  return fetch("https://api.spotify.com/v1/me/top/tracks", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};



// eslint-disable-next-line import/no-anonymous-default-export
export default async (_, res) => {
  const getData = async () => {
    const response = await getNowPlaying();

    if (response.status === 204 || response.status > 400) {
      return res.status(200).json({
        isPlaying: false,
      });
    }

    const song = await response.json();
    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    const favAlbumsMain = [
      "HEROES & VILLAINS",
      "a Gift & a Curse",
      "DC4"
    ];
    const albumCoversMain = [
      "https://github.com/hluebbering/web-design/blob/main/assets/images/metroboomin2.gif?raw=true",
      "https://github.com/hluebbering/web-design/blob/main/assets/images/gunna.gif?raw=true",
      "https://github.com/hluebbering/web-design/blob/main/assets/images/dc4.gif?raw=true"
    ];

    let indexMain = favAlbumsMain.indexOf(album);
    let favAlbumCoverMain;

    if (indexMain != -1) {
      favAlbumCoverMain = albumCoversMain[indexMain];
    } else {
      favAlbumCoverMain = albumImageUrl;
    }




    const favAlbums = [
      "HEROES & VILLAINS",
      "METRO BOOMIN PRESENTS SPIDER-MAN: ACROSS THE SPIDER-VERSE (SOUNDTRACK FROM AND INSPIRED BY THE MOTION PICTURE)",
      "WE DON'T TRUST YOU",
      "WE STILL DON'T TRUST YOU",
      "Honestly, Nevermind",
      "a Gift & a Curse",
      "Everybody Looking",
      "SAVAGE MODE II",
      "american dream"
    ];

    const albumCovers = [
      "https://github.com/hluebbering/web-design/blob/main/assets/images/HeroesVillains3.png?raw=true",
      "https://github.com/hluebbering/web-design/blob/main/assets/images/metrospider.png?raw=true",
      "https://github.com/hluebbering/web-design/blob/main/assets/images/MetroxFuture.jpg?raw=true",
      "https://github.com/hluebbering/web-design/blob/main/assets/images/MetroxFuture2.png?raw=true",
      "https://github.com/hluebbering/web-design/blob/main/assets/images/drakeNevermind.gif?raw=true",
      "https://github.com/hluebbering/web-design/blob/main/assets/images/gunna.gif?raw=true",
      "https://github.com/hluebbering/web-design/blob/main/assets/images/GucciMane9.gif?raw=true",
      "https://github.com/hluebbering/web-design/blob/main/assets/images/metrox21.gif?raw=true",
      "https://github.com/hluebbering/web-design/blob/main/assets/images/21sav.gif?raw=true"
    ];

    let index = favAlbums.indexOf(album);
    let favAlbumCover;

    if (index != -1) {
      favAlbumCover = albumCovers[index];
    } else {
      favAlbumCover = albumImageUrl;
    }

    const albumHigh = await albumArt(artist, { album: album, size: "large" });

    return res.status(200).json({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
      albumHigh,
      favAlbumCover,
      favAlbumCoverMain
    });
  };

  // Call the API immediately
  await getData();

  // Call the API every 5 seconds
  //setTimeout(getData, 500000000000);
};





