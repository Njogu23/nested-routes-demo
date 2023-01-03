import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const match = useRouteMatch()
  // console.log(match)

  return (
    <div style={{
      display:"flex"
    }}>
      <MoviesList movies={movies} />
      <div style={{
            margin: "10px",
            borderLeft: "1px solid",
            paddingLeft: "5px"
         }}>
      <Route exact path={match.url}>
        <h3>Choose a movie from the list!</h3>
      </Route>
      <Route path={`${match.url}/:movieId`}>
        <MovieShow movies={movies} />
      </Route>
      </div>
    </div>
  );
}
export default MoviesPage;