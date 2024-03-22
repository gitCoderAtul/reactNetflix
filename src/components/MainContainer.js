import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  // console.log(movies);
  /* 
    // concept early return
    //1st way
     if(movies == null) return;
     */
  //2nd way
  if (!movies) return;

  const mainMovie = movies[0];
  // console.log(mainMovie);

  const {original_title,overview, id} = mainMovie;
  return (
    <>
      <VideoTitle title={original_title} overview={overview}></VideoTitle>
      <VideoBackground movieId={id}></VideoBackground>
    </>
  );
};

export default MainContainer;
