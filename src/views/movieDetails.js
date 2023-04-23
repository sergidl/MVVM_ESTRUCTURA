import React from "react";
import { getMovie } from "../viewmodels/movieDetailsViewModel";

const MovieDetailsView = () => {
  const movie = getMovie();

  return (
      movie && (
        <div id="details">
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
        </div>
      )
  );
};

export default MovieDetailsView;