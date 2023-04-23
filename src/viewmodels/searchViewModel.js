import React from "react";

const SearchViewModel = ({ results, onMovieDetails }) => {

  return (
    <div id="result">
      {
      results.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <button onClick={() => onMovieDetails(movie.id)}>Detalls</button>
        </div>
      ))}
    </div>
  );
};

export default SearchViewModel;