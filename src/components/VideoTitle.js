import React from "react";

const VideoTitle = ({ title, theme }) => {
  return (
    <div className="pt-72 px-20 w-full aspect-video absolute text-slate-100 bg-gradient-to-r from-black bg-opacity-10">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="text-2xl py-6 w-1/4">{theme}</p>
      <div className="py-2 flex gap-4">
        <button className="bg-slate-100 text-black font-bold text-2xl py-2 px-8 rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-600 text-slate-100 font-bold text-2xl py-2 px-8 rounded-lg hover:bg-opacity-80">
          Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
