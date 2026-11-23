import SearchBar from "../components/SearchBar"
import SongCard from "../components/SongCard"

export default function Home() {
  return (
    <div className="home-container">
      <h1>Find your next listen</h1>
      <p>Explore fresh tracks from independent producers</p>

      <SearchBar />

      <div className="songcards-title-filter">
        <h3>Discover songs</h3>
        <button className="filter-button">Filter</button>
      </div>

      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
    </div>
  )
}
