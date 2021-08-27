import { useState, useEffect } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router";
import { NavLink, Route } from "react-router-dom";

import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";
import Button from "@material-ui/core/Button";

import { getMovieById } from "../apiService/apiService";
import { createPoster } from "../apiService/normalizeResults";

function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  useEffect(() => {
    let cleanupFunction = false;
    if (location.state?.id) {
      const getInfo = async () => {
        try {
          const response = await getMovieById(location.state.id);
          const fullInfo = {
            ...response.data,
            poster: createPoster(response.data),
          };
          if (!cleanupFunction) {
            setMovie((prevState) => ({
              ...prevState,
              info: fullInfo,
            }));
          }
        } catch (error) {
          console.log("error :>> ", error);
        }
      };
      getInfo();
    }
    return () => (cleanupFunction = true);
  }, [location.state.id]);
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          history.push(location.state.from, {
            search: location.state.search,
          });
        }}
      >
        go back
      </Button>
      <h1>{movie.info?.original_title}</h1>
      <img src={movie.info?.poster} alt={movie.info?.tagline} width="300" />
      <h3>Overview</h3>
      <p style={{ width: "600px", margin: "0 auto" }}>{movie.info?.overview}</p>
      <NavLink
        style={{
          textDecoration: "none",
        }}
        to={{
          pathname: `${match.url}/reviews`,
          state: location.state,
        }}
      >
        <Button style={{ fontSize: "28px" }} color="primary">
          Reviews
        </Button>
      </NavLink>
      <NavLink
        style={{
          textDecoration: "none",
        }}
        to={{
          pathname: `${match.url}/cast`,
          state: location.state,
        }}
      >
        <Button style={{ fontSize: "28px" }} color="primary">
          Cast
        </Button>
      </NavLink>
      <Route path={`${match.path}/reviews`} exact component={Reviews}></Route>
      <Route path={`${match.path}/cast`} exact component={Cast}></Route>
    </div>
  );
}

export default MovieDetailsPage;
