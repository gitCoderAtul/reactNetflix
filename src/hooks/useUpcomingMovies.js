import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../Redux/reducer/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = ()=>{
// fetch movie from tmdb api and update the store
const dispatch = useDispatch();

const getUpcomingMovies = async ()=>{
  const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS); 
  const json = await data.json();
  // console.log( 'Upcoming Movie List ------ ',json, json.results );
  dispatch(addUpcomingMovies(json.results))
}
useEffect(()=>{
  getUpcomingMovies();
},[])
}
export default useUpcomingMovies;