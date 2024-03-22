import React from 'react'
import { IMG_TMDB_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div  className='w-44 px-2'>
        <img alt='Movie Poster' 
        src={IMG_TMDB_URL + posterPath}></img>
    </div>
  )
}

export default MovieCard