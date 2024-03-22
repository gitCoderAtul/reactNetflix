import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(title);
  console.log(movies);
  return (
    
    <div className="px-8">
      <h1 className="text-2xl p-3 text-white">{title}</h1>
      <div className="flex overflow-x-scroll" style={{" scrollbar-width":"none",  "scrollbar-color": "#576574 #222f3e"}}>
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
            ></MovieCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
