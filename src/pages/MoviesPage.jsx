import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { getMoviesByQuery } from "../apiService/apiService";
import { createPoster } from "../apiService/normalizeResults";
import MoviesList from "../components/MoviesList";

function MoviesPage() {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState([]);
  const history = useHistory();

  const getMovies = async (search) => {
    try {
      const {
        data: { results },
      } = await getMoviesByQuery(search);
      console.log("results :>> ", results);
      setMovies(results.map((res) => ({ ...res, poster: createPoster(res) })));
      setInput(search);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    if (history.location.state?.search) {
      getMovies(history.location.state.search);
    }
  }, [history]);

  function handleChangeQuery(event) {
    setInput(event.target.value);
  }

  function handleSubmitQuery(event) {
    event.preventDefault();
    history.push({
      pathname: history.location.pathname,
      search: `?q=${input}`,
    });
    getMovies(input);
  }
  return (
    <>
      <form action="" onSubmit={handleSubmitQuery}>
        <input
          type="text"
          value={input}
          name="query"
          onChange={handleChangeQuery}
        />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} query={input} />
    </>
  );
}

export default MoviesPage;
