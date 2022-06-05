import React, { useContext } from "react";
import { songs } from "../Context";

function DetailSong() {
  const { song } = useContext(songs);
  return (
    <div
      className="lg:col-span-1  col-start-1 col-end-7 h-32  top-0 z-50 bg-slate-700 neons  bg1 lg:h-[100%] w-[100%]"
      id="circle"
    >
      <h2 className="text-cyan-500 font-bold  text-4xl mt-[10%] invisible lg:visible">
        Bài hát đang phát
      </h2>
      <h2 className="text-neutral-400  text-2xl font-bold pt-4 mb-10 invisible lg:visible children ">
        <em>{song.name}</em>
      </h2>
      <div className=" object-fill   mt-1 invisible lg:visible  hover:cursor-pointer image1">
        <img
          className=" w-[240px] h-[240px] overflow-hidden m-auto "
          src={song.links.images[0].url}
          alt="avatar"
        />
      </div>
      <div className="flex justify-center items-center mt-16 ">
        <img
          className=" rounded-full App-logo1 mr-8 invisible lg:visible backgroundImg  "
          src={song.links.images[1].url}
          alt="avatar"
        />

        <img
          className=" rounded-full App-logo1  absolute  top-2 visible lg:invisible backgroundImg "
          src={song.links.images[1].url}
          alt="avatar"
        />

        <h2 className="text-xl text_truncate text-neutral-400 font-bold  absolute top-[90px]   visible lg:invisible children2 ">
          {song.name}
        </h2>

        <span className="text-xl text-white invisible lg:visible animationAuthor">
          {song.author}
        </span>

        {/* <div className="runneth-over  invisible lg:visible"></div> */}
      </div>
      <div class="container12 ">
        <button className="lg:bottom-[49.2%] lg:visible invisible"></button>
        <button className="lg:bottom-[49.2%] lg:visible invisible"></button>
        <button className="lg:bottom-[49.2%] lg:visible invisible"></button>
        <button className="lg:bottom-[49.2%] lg:visible invisible"></button>
        <button className="lg:bottom-[49.2%] lg:visible invisible"></button>
      </div>
      {/* <div className="Song invisible lg:visible">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div> */}

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
