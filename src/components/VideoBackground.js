import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../Redux/reducer/movieSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {
  // const [trailerId,setTrailerId] = useState(null);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  //create custom hook and move this logic to that hook so it will promote seperation and moduler, readable , clearable and it will helps us testing  
 
  useMovieTrailer(movieId)

  return (
    <div className="w-screen"> 
      {/* 
        static way ---- src="https://www.youtube.com/embed/d2OONzqh2jk?si=HUKilsya2Sa5RPce"
        state ---- src={'https://www.youtube.com/embed/' + trailerId.key }
      */}
      <iframe className="w-screen aspect-video"
        src={'https://www.youtube.com/embed/' + trailerVideo?.key + "?&autoplay=1&mute=1" }
        title="YouTube video player" 
       ></iframe>  
       
    </div>
  );
};

export default VideoBackground;
