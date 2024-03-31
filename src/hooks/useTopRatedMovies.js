import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../Redux/reducer/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = ()=>{
// fetch movie from tmdb api and update the store
const dispatch = useDispatch();
const topRatedMovie = useSelector(store=>store.movies.topRatedMovies)


const getTopRatedMovies = async ()=>{
  const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS); 
  const json = await data.json();
  // console.log( 'Top Rated Movie List ------ ',json, json.results );
  dispatch(addTopRatedMovies(json.results))
}
useEffect(()=>{
 !topRatedMovie && getTopRatedMovies();
},[])
}
export default useTopRatedMovies;