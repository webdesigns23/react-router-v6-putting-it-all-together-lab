import { useOutletContext, useParams } from "react-router-dom"

function MovieCard() {
  // Replace director and movie
  const { director } = useOutletContext();
   const { movieId } = useParams()

  if (!director) return <h2>Director not found</h2>

    const movie = directors.movies.find(m => m.id === movieId)
    if (!movie) {
        return <h2>Movie not found</h2>
    }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>⏱️ Duration: {movie.time} minutes</p>
      <p>🎬 Genres: {movie.genres.join(", ")}</p>
    </div>
  )
}

export default MovieCard



