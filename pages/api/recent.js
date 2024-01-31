import { getRecentlyPlayed } from './spotify'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (_, res) => {
  const response = await getRecentlyPlayed()

  const prevSong = await response.json()
  //const isPlaying = song.is_playing;
  const prevTitle = prevSong.items[0].track.name
  const prevArtist = prevSong.items[0].track.artists
    .map(_artist => _artist.name)
    .join(', ')
  const prevAlbum = prevSong.items[0].track.album.name
  const prevAlbumImageUrl = prevSong.items[0].track.album.images[0].url
  const prevSongUrl = prevSong.items[0].track.external_urls.spotify

  return res.status(200).json({
    recentlyPlayed: true,
    prevTitle,
    prevArtist,
    prevAlbum,
    prevAlbumImageUrl,
    prevSongUrl
  })
}
