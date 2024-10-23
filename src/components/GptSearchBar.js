import React, { useRef } from "react";
import lang from "../utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const choosenLang = useSelector((store) => store.config.lang);
  const searchTextRef = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movieName) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const jsonData = await response.json();

    return jsonData.results;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const gptMovieQuery =
      "Act as a movie recommendation system and suggest movies for the query : " +
      searchTextRef.current.value +
      ", give me only names of 5 movies and they should be comma seperated. Ex: Movie1, Movie2, Movie3, Movie4, Movie5";

    /*  const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptMovieQuery }],
      model: "gpt-3.5-turbo",
    });
    

    console.log(gptResults.choices);
*/
    // const movieNames = gptResults.choices?.[0]?.message?.content.split(",");
    const movieNames = [
      "Bahubali",
      "Inception",
      "Interstellar",
      "RRR",
      "Extraction",
    ];

    const promiseArr = movieNames.map((movieName) =>
      searchMovieTMDB(movieName)
    );

    const movieResults = await Promise.all(promiseArr);
    console.log(movieResults);

    dispatch(addGptMovies({ movieNames, movieResults }));
  };

  return (
    <div className="pt-[10%] w-1/2 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-black grid grid-cols-12 rounded-md"
      >
        <input
          ref={searchTextRef}
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
