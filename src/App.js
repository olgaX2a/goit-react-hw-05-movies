import "./App.css";
import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));

function App() {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<h1>Loading</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:id">
            <MovieDetailsPage />
          </Route>
        </Switch>
      </Suspense>

      <Redirect to="/" />
    </div>
  );
}

export default App;
