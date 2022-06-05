import React, { useContext, useEffect, useState } from "react";
import { songs } from "../Context";

function ListSong() {
  const { DataSongs, handleSetSong, song } = useContext(songs);
  const [idSong, setidSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setidSong(idSong);
    handleSetSong(idSong);
    handleSetSong(idSong);
  };

  useEffect(() => {
    setidSong(song.id);
  }, [song]);
  return (
    <div className="lg:col-span-2 col-start-1 col-end-7 h-screen w-full  overflow-y-scroll z-10 ">
      <div className="relative bg-slate-800-800">
        <table className="table-auto  absolute top- m-auto  w-full  border-collapse bg-slate-900 ">
          <br />
          <thead className="text-white h-12  z-10 bg-slate-900 lg:text-2xl text-xs">
            <tr className="">
              <th className=" sticky top-0 lg:text-2xl text-xs  text-center bg-slate-900">
                STT
              </th>
              <th className=" sticky top-0 bg-slate-900">Tên bài hát</th>
              <th className="  sticky top-0 bg-slate-900">Ca sĩ</th>
              <th className=" sticky top-0 lg:pr-4 pr-3 bg-slate-900 lg:text-2xl text-xs">
                <i className="fa fa-download pl-4"></i>
              </th>
            </tr>
          </thead>
          <tbody className="">
            {DataSongs.map((song, index) => (
              <tr
                key={index}
                className={`text-center text-gray-200 bg-slate-900 hover:bg-slate-600 hover:cursor-pointer w-[56px] h-[56px]  p-0 ${
                  idSong === song.id &&
                  "bg-slate-600 text-pink-300 border-0  p-0"
                }`}
                onClick={() => handlePlaySong(song.id)}
              >
                <td
                  className={`text-center  sm:text-base text-xs  hover:bg-slate-600 hover:cursor-pointer w-[50px] h-[50px]  visible  p-0 ${
                    idSong === song.id && "bg-slate-600 text-center  p-0"
                  }`}
                  onClick={() => handlePlaySong(song.id)}
                >
                  <div className="spinner  p-0"></div>
                </td>
                <td className="text-center sm:text-base text-xs lg:text-xl  animationSong p-0">
                  {song.name}
                </td>
                <td className="text-center sm:text-base text-xs lg:text-xl  p-0">
                  {song.author}
                </td>
                <td className="text-center sm:text-base text-xs lg:text-xl p-0">
                  <a href={song.url}>
                    <i className="fa fa-download"></i>
                  </a>
                </td>
              </tr>
            ))}
            ;
          </tbody>
        </table>
        <table className="table-auto  absolute top-[0.5px] m-auto  w-full  border-collapse   ">
          <br />
          <thead className="text-white h-12  z-10 bg-slate-900 lg:text-2xl text-xs">
            <tr className="">
              <th className=" sticky top-0 lg:text-2xl text-xs  text-center bg-slate-900">
                STT
              </th>
              <th className=" sticky top-0 bg-slate-900">Tên bài hát</th>
              <th className=" sticky top-0 bg-slate-900">Ca sĩ</th>
              <th className=" sticky top-0 lg:pr-4 pr-3 bg-slate-900 lg:text-2xl text-xs">
                <i className="fa fa-download pl-4"></i>
              </th>
            </tr>
          </thead>
          <tbody className="">
            {DataSongs.map((song, index) => (
              <tr
                key={index}
                className={`text-center text-gray-200 bg-slate-900 hover:bg-slate-600 hover:cursor-pointer w-[56px] h-[56px]  p-0 ${
                  idSong === song.id &&
                  "bg-transparent text-center text-pink-300 invisible  p-0"
                }`}
                onClick={() => handlePlaySong(song.id)}
              >
                <td
                  className={` text-center sm:text-base text-xs hover:bg-slate-600 hover:cursor-pointer  w-[52px] h-[52px]  p-0  ${
                    idSong === song.id && "bg-slate-600  p-0  "
                  }`}
                  onClick={(ab) => handlePlaySong(song.id)}
                >
                  {index + 1}
                </td>
                <td className="text-center sm:text-base text-xs lg:text-xl p-0  ">
                  {song.name}
                </td>
                <td className="text-center sm:text-base text-xs lg:text-xl  p-0">
                  {song.author}
                </td>
                <td className="text-center sm:text-base text-xs lg:text-xl  p-0">
                  <a href={song.url}>
                    <i className="fa fa-download"></i>
                  </a>
                </td>
              </tr>
            ))}
            ;
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListSong;
