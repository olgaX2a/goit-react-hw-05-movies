import MovieListItem from "./MovieListItem";
import PropTypes from "prop-types";
import styles from "./MovieList.module.css";

const MoviesList = ({ movies, query }) => {
  return (
    <ul className={styles.cardList}>
      {movies.map((movie) => (
        <MovieListItem key={movie.id} movie={movie} query={query} />
      ))}
    </ul>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string,
};
