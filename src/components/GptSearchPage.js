import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_HOME_IMG } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <img src={BG_HOME_IMG} alt="bgImage" className="absolute -z-10" />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
