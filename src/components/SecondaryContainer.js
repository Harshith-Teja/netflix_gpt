import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  return (
    movies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-60 relative z-20">
          <MovieList title={"Now Playing"} movies={movies} />
          <MovieList title={"Trending"} movies={movies} />
          <MovieList title={"Action"} movies={movies} />
          <MovieList title={"Hindi"} movies={movies} />
          <MovieList title={"Telugu"} movies={movies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
