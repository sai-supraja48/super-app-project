import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const getMovies = async (search) => {
  const response = await axios.get(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
  );

  return response.data.Search || [];
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(
    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
  );

  return response.data;
};