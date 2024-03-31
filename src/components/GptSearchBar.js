import React, { useRef } from "react";
import lang from "../utils/languageConstat";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../Redux/reducer/gptSlice";

const GptSearchBar = () => {
  // console.log(typeof lang);
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  // console.log(langKey, typeof langKey);
  const serachText = useRef(null);

  //For each movie will search TMDB API
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log('TMDB json data----', json);
    return json.results;
  };

  const handleSearchClick = async () => {
    console.log(serachText.current.value);
    //make an api call to search movie from gpt api and get movies
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movie for the query : " +
      serachText.current.value +
      ". only give me name of 5 movies, comma seperated like the example given ahead. Example Result: Gadar, Don, Sholay, Doom, Golmaal";

    const getResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!getResults.choices) {
      //error
    }
    console.log(getResults);
    console.log(getResults.choices);
    console.log(getResults.choices?.[0]?.message?.content);
    //"Andaz Apna Apna, Chupke Chupke, Namak Halaal, Hera Pheri, Padosan"

    const gptMovie = getResults.choices?.[0]?.message?.content.split(",");
    //Array(5) [ "Andaz Apna Apna", " Chupke Chupke", " Namak Halaal", " Hera Pheri", " Padosan" ]

    const promiseArray = gptMovie.map((movie)=>searchMovieTMDB(movie));
    console.log(promiseArray);
    //Array(5) [ Promise { "pending" }, Promise { "pending" }, Promise { "pending" }, Promise { "pending" }, Promise { "pending" } ]
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    
    // dispatch(addGptMovieResult(tmdbResults))
    dispatch(addGptMovieResult({movieNames:gptMovie, movieResults:tmdbResults}))

  };
  return (
    <div className=" pt-[10%] z-[10] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" bg-black w-1/2 grid grid-cols-12"
      >
        <input
          type="text"
          ref={serachText}
          className=" col-span-9 p-2 m-4"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        ></input>
        <button
          onClick={handleSearchClick}
          className="col-span-3 px-4 py-2 m-4 rounded-sm text-white bg-red-700"
        >
          {/* {lang.hindi.search} */}
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
