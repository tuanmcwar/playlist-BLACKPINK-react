import React, { useContext } from "react";
import { songs } from "../Context";

function DetailSong() {
  const { song } = useContext(songs);
  return (
    <div className="lg:col-span-1  sm:col-start-1 col-end-7 h-32  top-0 z-50 bg-slate-700 relative">
      <h2 className="text-cyan-500 font-bold  text-4xl mt-[10%] invisible lg:visible">
        Bài hát đang phát
      </h2>
      <h2 className="text-neutral-400 text-2xl font-bold pt-4 mb-10 invisible lg:visible">
        {song.name}
      </h2>
      <div className="w-[240px]  m-auto mt-1 invisible lg:visible">
        <img className="w-full" src={song.links.images[0].url} alt="avatar" />
      </div>
      <div className="flex justify-center items-center mt-6">
        <img
          className=" rounded-full App-logo1 mr-8 invisible lg:visible"
          src={song.links.images[1].url}
          alt="avatar"
        />
        <img
          className=" rounded-full App-logo1  absolute  top-3 visible lg:invisible  "
          src={song.links.images[1].url}
          alt="avatar"
        />
        <h2 className="text-xl text-neutral-400 font-bold  absolute top-24 left-30 visible lg:invisible">
          {song.name}
        </h2>

        <span className="text-xl text-white invisible lg:visible">
          {song.author}
        </span>
      </div>
      {/* <div className="flex justify-center items-center mt-10">
        <img
          className="w-[70px] rounded-full App-logo1 mr-20"
          src={song.links.images[0].url}
          alt="avatar"
        />
        <span className="text-xl text-white ">{song.author}</span>
      </div> */}
    </div>
  );
}

export default DetailSong;
