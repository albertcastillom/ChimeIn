import PlaylistCard from "../components/PlaylistCard"

export default function Playlists() {
  return (
    <div className="playlist-container">
      <h1>Your playlists</h1>
      <p>Collect the tracks you love and keep your ideas together.</p>
      <button>New Playlist</button>

      <div className="playlists-title-filter">
        <h3>All playlists</h3>
        <button className="filter-button">Filter</button>
      </div>

      <PlaylistCard />
      <PlaylistCard />
      <PlaylistCard />
      <PlaylistCard />

    </div>
  )
}
