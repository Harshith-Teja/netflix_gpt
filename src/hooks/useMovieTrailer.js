import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieVideos = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        API_OPTIONS
      );
      const jsonData = await response.json();

      const filteredData = jsonData.results.filter(
        (video) => video.type === "Trailer"
      );

      const trailerVid = filteredData.length
        ? filteredData[0]
        : jsonData.results[0];

      dispatch(addTrailerVideo(trailerVid));
    };

    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
