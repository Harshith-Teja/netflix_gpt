import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.nowPlayingMovies);

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await response.json();

      dispatch(addNowPlayingMovies(data.results));
    };

    if (!nowPlayingMovies) getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
