import React from "react";
import lang from "../utils/langConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const choosenLang = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] w-1/2 mx-auto">
      <form className="bg-black grid grid-cols-12 rounded-md">
        <input
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder={lang[choosenLang].gptSearchPlaceholder}
        />
        <button className="p-4 m-4 col-span-3 bg-red-600 text-slate-100 rounded-lg">
          {lang[choosenLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
