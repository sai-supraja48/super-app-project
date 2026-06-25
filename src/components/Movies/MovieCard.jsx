function MovieCard({ movie, onClick }) {
  return (
    <div
      className="movie-card"
      onClick={() => onClick(movie.imdbID)}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
      />

      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;