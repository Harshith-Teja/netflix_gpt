import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-6 bg-black bg-opacity-50 text-white">
      <h1 className="font-bold text-xl md:text-3xl p-2">{title}</h1>

      <div className="flex gap-2 overflow-x-scroll hide-scrollbar">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} imgPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
