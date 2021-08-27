import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = "a6a422d110dec9c7fa9eeee757b6f274";

function getTrendingMovies() {
  return axios({
    method: "GET",
    url: `/trending/movie/week?api_key=${API_KEY}`,
  });
}

function getMoviesByQuery(query) {
  return axios({
    method: "GET",
    url: `/search/movie?api_key=${API_KEY}&query=${query}`,
  });
}

function getMovieById(movie_id) {
  return axios({
    method: "GET",
    url: `/movie/${movie_id}?api_key=${API_KEY}`,
  });
}

function getMovieCast(movie_id) {
  return axios({
    method: "GET",
    url: `/movie/${movie_id}/credits?api_key=${API_KEY}`,
  });
}

function getMovieReview(movie_id) {
  return axios({
    method: "GET",
    url: `/movie/${movie_id}/reviews?api_key=${API_KEY}`,
  });
}

export {
  getTrendingMovies,
  getMoviesByQuery,
  getMovieById,
  getMovieCast,
  getMovieReview,
};
