import React from "react";

const VideoTitle = (props) => {
  const { title, overview } = props;
  // console.log("title ----", title, "  ---- Movie overview ----- ", overview);
  return (
    <div className="w-full aspect-video absolute bg-gradient-to-r from-black pt-[20%] pl-24 "> 
      <div className=" w-1/4 text-white">
      <h1 className="text-4xl"> {title} </h1>
      <p className="py-6">{overview}</p>
      <div>
        <button className="px-6 py-3 bg-gray-500 bg-opacity-30 text-white mr-6 rounded-md"> Play</button>
        <button className="px-6 py-3 bg-gray-500 bg-opacity-30 text-white rounded-md">More Info</button>
      </div>
      </div>
    </div>
  );
};

export default VideoTitle;
