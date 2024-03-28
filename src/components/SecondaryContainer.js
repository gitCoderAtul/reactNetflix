import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
//  console.log(movies);
  return (
    movies.nowPlayingMovies && (
    <div className=' bg-black'>
      <div className="-mt-56 px-10 relative z-10">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}></MovieList>
      <MovieList title={"Popular Movies"} movies={movies.popularMovies}></MovieList>
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}></MovieList> 
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}></MovieList>  
      </div>
    </div>
    
    )
  )
}

export default SecondaryContainer