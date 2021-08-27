import { useState, useEffect } from "react";
import { getTrendingMovies } from "../apiService/apiService";
import { createPoster } from "../apiService/normalizeResults";
import MoviesList from "../components/MoviesList";

function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getTrending = async () => {
      const {
        data: { results },
      } = await getTrendingMovies();
      setMovies(results.map((res) => ({ ...res, poster: createPoster(res) })));
    };
    getTrending();
  }, []);
  return <MoviesList movies={movies} />;
}

export default HomePage;
