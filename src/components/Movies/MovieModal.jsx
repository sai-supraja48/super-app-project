import "./MovieModal.css";

function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <img
          src={movie.Poster}
          alt={movie.Title}
          className="modal-poster"
        />

        <div className="modal-details">
          <h2>{movie.Title}</h2>

          <p>
            <strong>Year:</strong> {movie.Year}
          </p>

          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>

          <p>
            <strong>IMDb Rating:</strong>
            <span
              style={{
                marginLeft: "10px",
                background: "#72DB73",
                color: "#111",
                padding: "5px 12px",
                borderRadius: "20px",
                fontWeight: "600",
              }}
            >
              ⭐ {movie.imdbRating}
            </span>
          </p>

          <p>
            <strong>Runtime:</strong> {movie.Runtime}
          </p>

          <p>
            <strong>Released:</strong> {movie.Released}
          </p>

          <p>
            <strong>Language:</strong> {movie.Language}
          </p>

          <p>
            <strong>Country:</strong> {movie.Country}
          </p>

          <p>
            <strong>Director:</strong> {movie.Director}
          </p>

          <p>
            <strong>Writer:</strong> {movie.Writer}
          </p>

          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>

          <p>
            <strong>Plot:</strong>
          </p>

          <p>{movie.Plot}</p>

          <button
            className="watch-btn"
            onClick={() =>
              window.open(
                `https://www.imdb.com/title/${movie.imdbID}`,
                "_blank"
              )
            }
          >
            View on IMDb
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;