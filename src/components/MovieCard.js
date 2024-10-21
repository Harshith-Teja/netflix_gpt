import React from "react";
import { IMAGE_BASE_URL } from "../utils/constants";

const MovieCard = ({ imgPath }) => {
  return (
    <div className="w-48 h-72 flex-shrink-0">
      <img
        className="w-full h-full object-cover"
        src={IMAGE_BASE_URL + imgPath}
        alt="movie card"
      />
    </div>
  );
};

export default MovieCard;
