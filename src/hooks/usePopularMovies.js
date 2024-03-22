import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Redux/reducer/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = ()=>{
// fetch movie from tmdb api and update the store
const dispatch = useDispatch();

const getPopularMovies = async ()=>{
  const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS); 
  const json = await data.json();
  console.log( 'Popular Movie List ------ ',json, json.results );
  dispatch(addPopularMovies(json.results))
}
useEffect(()=>{
  getPopularMovies();
},[])
}
export default usePopularMovies;