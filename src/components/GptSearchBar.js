import React from "react";
import lang from "../utils/languageConstat";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  // console.log(typeof lang);
  const langKey = useSelector(store=>store.config.lang);
  // console.log(langKey, typeof langKey);
  return (
     
    <div className=" pt-[10%] z-[10] flex justify-center">
      <form className=" bg-black w-1/2 grid grid-cols-12">
        <input type="text" className=" col-span-9 p-2 m-4" placeholder={lang[langKey].gptSearchPlaceHolder}></input>
        <button className="col-span-3 px-4 py-2 m-4 rounded-sm text-white bg-red-700">
          {/* {lang.hindi.search} */}
          {lang[langKey].search}
          </button>
      </form>
    </div>  
   
  );
};

export default GptSearchBar;
