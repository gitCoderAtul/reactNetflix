import React from "react";

const GptSearchBar = () => {
  return (
     
    <div className=" pt-[10%] z-[10] flex justify-center">
      <div className=" bg-black w-[60%] ">
        <input type="text" className="p-2 m-4 flex-grow-2" placeholder="What would you like to watch today?"></input>
        <button className="px-2 py-2 rounded-sm text-white bg-red-700">Search</button>
      </div>
    </div>  
   
  );
};

export default GptSearchBar;
