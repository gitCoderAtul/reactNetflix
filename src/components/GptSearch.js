import React from 'react'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
    <div className='relative w-full h-screen'> 
      <div className="absolute bg-gradient-to-b from-black opacity-80 w-full h-screen -z-[9]"></div>
      <div>
        <img
          className="w-full -z-[10] absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background"
        />
      </div> 
      <GptSearchBar></GptSearchBar>
    </div>
  )
}

export default GptSearch