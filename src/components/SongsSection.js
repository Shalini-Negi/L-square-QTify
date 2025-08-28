import { useState, useEffect } from "react"
import Card from "./Card"
import Carousel from "./Carousel"

export default function SongsSection() {
  const [songs, setSongs] = useState([])
  const [genres, setGenres] = useState([])
  const [selectedGenre, setSelectedGenre] = useState("All")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [songsResponse, genresResponse] = await Promise.all([
          fetch("https://qtify-backend-labs.crio.do/songs"),
          fetch("https://qtify-backend-labs.crio.do/genres"),
        ])

        const songsData = await songsResponse.json()
        const genresData = await genresResponse.json()

        setSongs(songsData)
        setGenres(["All", ...genresData.data.map((genre) => genre.label)])
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredSongs = selectedGenre === "All" ? songs : songs.filter((song) => song.genre?.label === selectedGenre)

  if (loading) {
    return (
      <section className="section">
        <div className="section-container">
          <h2 className="section-title">Songs</h2>
          <div className="section-loading">Loading...</div>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="section-container">
        <h2 className="section-title">Songs</h2>

        <div className="genre-tabs">
          <div className="genre-tabs-container">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`genre-tab ${selectedGenre === genre ? 'genre-tab-active' : ''}`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        <Carousel>
          {filteredSongs.map((song) => (
            <Card key={song.id} image={song.image} title={song.title} likes={song.likes} type="song" />
          ))}
        </Carousel>
      </div>
    </section>
  )
}
