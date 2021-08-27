import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MovieList.module.css";

const MovieListItem = ({ movie, query }) => {
  const location = useLocation();

  return (
    <li className={styles.cardItem}>
      <Link
        to={{
          pathname: `/movies/${movie.id}`,
          state: {
            search: query !== undefined ? query : "",
            id: movie.id,
            from: location.pathname,
          },
        }}
      >
        <div className={styles.cardThumb}>
          <img
            className="cardPhoto"
            src={movie.poster}
            alt={movie.title}
            width="280"
            height="402"
          />
        </div>
        <div className={styles.cardInfo}>
          <h2 className="cardTitle">{movie.title}</h2>
        </div>
      </Link>
    </li>
  );
};

export default MovieListItem;

MovieListItem.propTypes = {
  movie: PropTypes.object.isRequired,
  query: PropTypes.string,
};
