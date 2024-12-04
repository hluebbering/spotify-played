import { NextSeo } from "next-seo";
import { SiSpotify } from "react-icons/si";
import React, { useState, useEffect, useRef } from "react";

const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const videoRef = useRef(null);

  // Fetch now playing data from the API endpoint
  const fetchNowPlaying = async () => {
    try {
      const response = await fetch("/api/spotify");
      const data = await response.json();
      setNowPlaying(data);
    } catch (error) {
      console.error("Error fetching now playing data:", error);
    }
  };

  useEffect(() => {
    fetchNowPlaying();
    const intervalId = setInterval(fetchNowPlaying, 5000);
    return () => clearInterval(intervalId);
  }, []);

  // Function to check if the URL is a video
  const isVideo = (url) => {
    return url?.match(/\.(mp4|webm|ogg)$/i);
  };

  return (
    <>
      <NextSeo />
      <section className="">
        <main className="flex flex-col items-center justify-center min-h-screen space-y-3">
          <div className="w-bg">
            {nowPlaying?.isPlaying ? (
              <>
                {isVideo(nowPlaying.favAlbumCover) ? (
                  <video
                    autoPlay
                    loop
                    muted
                    className="w-img"
                    src={nowPlaying.favAlbumCover}
                    ref={videoRef}
                  >
                    <source src={nowPlaying.favAlbumCover} type="video/mp4" />
                  </video>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className="w-img"
                    src={nowPlaying.favAlbumCover}
                    alt={nowPlaying.album}
                  />
                )}
              </>
            ) : (
              <SiSpotify size={64} color={"#1ED760"} />
            )}
          </div>

          <div className="toptitle">
            <h3 className="text-center">Next.js</h3>
            <h1 className="text-center">Spotify | Now Playing</h1>
            <p className="text-center">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://theodorusclarence.com/blog/spotify-now-playing"
                className="underline hover:text-blue-500"
              >
                Check the blog
              </a>
            </p>
          </div>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href={
              nowPlaying?.isPlaying
                ? nowPlaying.songUrl
                : "https://open.spotify.com/user/hannahluebbering?si=082d19adc54d42ca"
            }
            className="container relative flex items-center p-5 space-x-4 transition-shadow border rounded-md hover:shadow-md w-72"
          >
            <div className="w-16 cont">
              {nowPlaying?.isPlaying ? (
                <>
                  {isVideo(nowPlaying.favAlbumCoverMain) ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-16 shadow-sm"
                    >
                      <source
                        src={nowPlaying.favAlbumCoverMain}
                        type="video/mp4"
                      />
                    </video>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      className="w-16 shadow-sm"
                      src={nowPlaying.favAlbumCoverMain}
                      alt={nowPlaying.album}
                    />
                  )}
                </>
              ) : (
                <SiSpotify size={64} color={"#1ED760"} />
              )}
            </div>

            <div className="flex-1">
              <p className="font-bold album">
                {nowPlaying?.isPlaying ? nowPlaying.album : ""}
              </p>
              <p className="font-bold component">
                {nowPlaying?.isPlaying ? nowPlaying.title : "Not Listening"}
              </p>
              <p className="text-xs font-dark">
                {nowPlaying?.isPlaying ? nowPlaying.artist : "Spotify"}
              </p>
            </div>
            <div className="absolute bottom-1.5 right-1.5">
              <SiSpotify size={20} color={"#1ED760"} />
            </div>
          </a>
        </main>
      </section>
    </>
  );
};

export default NowPlaying;
