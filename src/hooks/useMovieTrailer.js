import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../Redux/reducer/movieSlice";

const useMovieTrailer = (movieId) => {
  //create custom hook and move this logic to that hook so it will promote seperation and moduler, readable , clearable and it will helps us testing

  const dispatch = useDispatch();
//   console.log("----trailer video", trailerVideo);
     const getMovieVideos = async () => {
    // "https://api.themoviedb.org/3/movie/1011985/videos?language=en-US",
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
       movieId + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailer =
      filterData.length == null || filterData.length == ""
        ? filterData[0]
        : json.results[0];
    // console.log(filterData);
    // console.log(trailer);

    // How to trailer key-- 2 ways to get key. 1st way is using state 2nd way is using redux store
    // setTrailerId(trailer);
    // console.log('--------trailerId', trailerId.key);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
