import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import PropTypes from "prop-types";

import styles from "./Cast.module.css";

import { getMovieCast } from "../../apiService/apiService";
import { createActorAvatar } from "../../apiService/normalizeResults";

function Cast() {
  const [cast, setCast] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getCast = async () => {
      try {
        const {
          data: { cast },
        } = await getMovieCast(location.state.id);
        setCast(
          cast.map((res) => ({ ...res, avatar: createActorAvatar(res) }))
        );
      } catch (error) {
        console.log("error :>> ", error);
      }
    };
    getCast();
  }, [location.state.id]);

  return (
    <div>
      <ul className={styles.castList}>
        {cast.length > 0 ? (
          cast.map(({ id, name, avatar }) => (
            <li key={id} className={styles.castItem}>
              <h4>{name}</h4>
              <img src={avatar} alt={name} width="80" />
            </li>
          ))
        ) : (
          <li className={styles.castItem}>
            <p>No actors list for this movie was found</p>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Cast;

Cast.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.object),
};
