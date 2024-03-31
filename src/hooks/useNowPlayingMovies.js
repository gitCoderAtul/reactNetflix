import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Redux/reducer/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = ()=>{
// fetch movie from tmdb api and update the store
const dispatch = useDispatch();
const nowPlayingMovie = useSelector(store=>store.movies.nowPlayingMovie)

const getNowPlayingMovies = async ()=>{
  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS); 
  const json = await data.json();
  // console.log( 'Now Playing Movie List ------ ',json, json.results );
  dispatch(addNowPlayingMovies(json.results))
}
useEffect(()=>{
  // if(!nowPlayingMovie) return getNowPlayingMovies();
  !nowPlayingMovie && getNowPlayingMovies();
},[])
}
export default useNowPlayingMovies;