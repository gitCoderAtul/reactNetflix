import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  // const gpt = useSelector(store=>store.gpt)
  // const {movieNames, movieResults}= gpt

  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black bg-opacity-80 text-white">
      {/* {movieNames}
      <h1>{movieNames[0]}</h1>
      <MovieList title={movieNames[0]} movies={movieResults[0]}></MovieList> */}
      {movieNames.map((movieName, index) => (
        <MovieList key={movieName} title={movieName} movies={movieResults[index]}></MovieList>
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
