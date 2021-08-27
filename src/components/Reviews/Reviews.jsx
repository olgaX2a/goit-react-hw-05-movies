import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import PropTypes from "prop-types";

import styles from "./Reviews.module.css";

import { getMovieReview } from "../../apiService/apiService";
import { createReviewAvatar } from "../../apiService/normalizeResults";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const {
          data: { results },
        } = await getMovieReview(location.state.id);
        console.log("reviews :>> ", results);
        setReviews(
          results.map((res) => ({ ...res, avatar: createReviewAvatar(res) }))
        );
      } catch (error) {
        console.log("error :>> ", error);
      }
    };
    getReviews();
  }, [location.state.id]);

  return (
    <div>
      <ul className={styles.reviewList}>
        {reviews.length > 0 ? (
          reviews.map(({ id, author, avatar, content }) => {
            return (
              <li key={id} className={styles.reviewItem}>
                <h4>{author}</h4> <img src={avatar} alt={author} width="80" />
                <p>{content}</p>
              </li>
            );
          })
        ) : (
          <li className={styles.reviewItem}>
            <p>No reviews</p>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
};
