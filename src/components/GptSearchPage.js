import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_HOME_IMG } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div className="w-full">
      <img
        src={BG_HOME_IMG}
        alt="bgImage"
        className="fixed w-full h-screen object-cover -z-10"
      />

      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearchPage;
