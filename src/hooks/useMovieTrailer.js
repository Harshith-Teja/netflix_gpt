import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

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

    if (!trailerVideo) getMovieVideos();
  }, []);
};

export default useMovieTrailer;
