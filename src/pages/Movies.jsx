import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../store/useStore";
import { getMovies, getMovieDetails } from "../services/movieApi";

import MovieCard from "../components/Movies/MovieCard";
import MovieModal from "../components/Movies/MovieModal";

import "../styles/movies.css";

const movieSearch = {
  Action: "Batman",
  Comedy: "Home Alone",
  Drama: "Titanic",
  Music: "Bohemian",
  Sports: "Rocky",
  Thriller: "Joker",
  Fantasy: "Harry Potter",
  Romance: "Notebook",
};

function Movies() {
  const categories = useStore((state) => state.categories);

  const [moviesByCategory, setMoviesByCategory] = useState({});
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadMovies() {
      try {
        const data = {};

        for (const category of categories) {
          const result = await getMovies(movieSearch[category]);

          data[category] = result.slice(0, 4);
        }

        setMoviesByCategory(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load movies.");
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, [categories]);

  const openModal = async (id) => {
    try {
      const movie = await getMovieDetails(id);
      setSelectedMovie(movie);
    } catch (err) {
      alert("Unable to fetch movie details.");
    }
  };

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return (
      <h2 style={{ color: "red", textAlign: "center" }}>
        {error}
      </h2>
    );
  }

  return (
    <div className="movies-page">

      <div className="movies-header">

        <h1>Entertainment according to your choice</h1>

        <Link to="/dashboard">
          <button className="back-btn">
            ← Dashboard
          </button>
        </Link>

      </div>

      {categories.map((category) => (
        <div
          key={category}
          className="category-section"
        >

          <h2>{category}</h2>

          <div className="movies-grid">

            {moviesByCategory[category]?.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                onClick={openModal}
              />
            ))}

          </div>

        </div>
      ))}

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />

    </div>
  );
}

export default Movies;