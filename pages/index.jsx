import { NextSeo } from "next-seo";
import useSWR from "swr";
import { SiSpotify } from "react-icons/si";
import React, { useState, useEffect } from "react";

const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState(null);

  const fetchNowPlaying = async () => {
    try {
      //const fetcher = (url) => fetch(url).then((r) => r.json());
      //const { data } = useSWR("/api/spotify", fetcher);

      const response = await fetch("/api/spotify"); // Assuming your backend API endpoint is '/api/now-playing'
      const data = await response.json();
      setNowPlaying(data);
    } catch (error) {
      console.error("Error fetching now playing data:", error);
    }
  };

  useEffect(() => {
    fetchNowPlaying(); // Fetch now playing data when the component mounts

    const intervalId = setInterval(fetchNowPlaying, 5000); // Poll every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <NextSeo />
      <section className="">
        <main className="flex flex-col items-center justify-center min-h-screen space-y-3">
          <div className="w-bg">
            {nowPlaying?.isPlaying ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className="w-img"
                //src={data?.albumImageUrl}
                src={nowPlaying?.favAlbumCover}
                alt={nowPlaying?.album}
              />
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
                rel="noreferer noreferrer"
                href="https://theodorusclarence.com/blog/spotify-now-playing"
                className="underline hover:text-blue-500"
              >
                Check the blog
              </a>
            </p>
          </div>

          <a
            target="_blank"
            rel="noopener noreferer noreferrer"
            href={
              nowPlaying?.isPlaying
                ? nowPlaying.songUrl
                : "https://open.spotify.com/user/hannahluebbering?si=082d19adc54d42ca"
            }
            className="container relative flex items-center p-5 space-x-4 transition-shadow border rounded-md hover:shadow-md w-72"
          >
            <div className="w-16">
              {nowPlaying?.isPlaying ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="w-16 shadow-sm"
                  src={nowPlaying?.favAlbumCoverMain}
                  alt={nowPlaying?.album}
                />
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

// export default function Home() {
//   const fetcher = (url) => fetch(url).then((r) => r.json());
//   //const fetcher2 = (url) => fetch(url).then((r) => r.json());
//   const { data } = useSWR("/api/spotify", fetcher);
//   //const { data2 } = useSWR("/api/recent", fetcher2);
//   return (
//     <>
//       <NextSeo />
//       <section className="">
//         <main className="flex flex-col items-center justify-center min-h-screen space-y-3">
//           <div className="w-bg">
//             {data?.isPlaying ? (
//               // eslint-disable-next-line @next/next/no-img-element
//               <img
//                 className="w-img"
//                 //src={data?.albumImageUrl}
//                 src={data?.favAlbumCover}
//                 alt={data?.album}
//               />
//             ) : (
//               <SiSpotify size={64} color={"#1ED760"} />
//             )}
//           </div>

//           <div className="toptitle">
//             <h3 className="text-center">Next.js</h3>
//             <h1 className="text-center">Spotify | Now Playing</h1>
//             <p className="text-center">
//               <a
//                 target="_blank"
//                 rel="noreferer noreferrer"
//                 href="https://theodorusclarence.com/blog/spotify-now-playing"
//                 className="underline hover:text-blue-500"
//               >
//                 Check the blog
//               </a>
//             </p>
//           </div>

//           <a
//             target="_blank"
//             rel="noopener noreferer noreferrer"
//             href={
//               data?.isPlaying
//                 ? data.songUrl
//                 : "https://open.spotify.com/user/hannahluebbering?si=082d19adc54d42ca"
//             }
//             className="container relative flex items-center p-5 space-x-4 transition-shadow border rounded-md hover:shadow-md w-72"
//           >
//             <div className="w-16">
//               {data?.isPlaying ? (
//                 // eslint-disable-next-line @next/next/no-img-element
//                 <img
//                   className="w-16 shadow-sm"
//                   src={data?.albumImageUrl}
//                   alt={data?.album}
//                 />
//               ) : (
//                 <SiSpotify size={64} color={"#1ED760"} />
//               )}
//             </div>

//             <div className="flex-1">
//               <p className="font-bold album">
//                 {data?.isPlaying ? data.album : ""}
//               </p>
//               <p className="font-bold component">
//                 {data?.isPlaying ? data.title : "Not Listening"}
//               </p>
//               <p className="text-xs font-dark">
//                 {data?.isPlaying ? data.artist : "Spotify"}
//               </p>
//             </div>
//             <div className="absolute bottom-1.5 right-1.5">
//               <SiSpotify size={20} color={"#1ED760"} />
//             </div>
//           </a>
//         </main>
//       </section>
//     </>
//   );
// }
