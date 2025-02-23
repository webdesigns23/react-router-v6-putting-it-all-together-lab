
function MovieCard() {
  // Replace director and movie
  const director = null
  if (!director) return <h2>Director not found.</h2>
  
  const movie = null
  if (!movie) return <h2>Movie not found.</h2>

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>⏱️ Duration: {movie.time} minutes</p>
      <p>🎬 Genres: {movie.genres.join(", ")}</p>
    </div>
  )
}

export default MovieCard
