import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="p-4 text-white">
      {movieNames.map((movieName, ind) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[ind]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
