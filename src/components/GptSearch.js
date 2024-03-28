import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div className='relative w-full h-screen'> 
      <div className="absolute bg-gradient-to-b from-black opacity-80 w-full h-screen -z-[9]"></div>
      <div>
        <img
          className="w-full -z-[10] absolute"
          src={BG_URL}
          alt="background"
        />
      </div> 
      <GptSearchBar></GptSearchBar>
    </div>
  )
}

export default GptSearch