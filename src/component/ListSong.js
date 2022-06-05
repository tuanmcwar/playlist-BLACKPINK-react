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
      <div className="relative bg-red-800">
        <table className="table-auto  absolute top-0 m-auto  w-full  border-collapse bg-slate-900 ">
          <thead className="text-white h-12  z-10 bg-slate-900 lg:text-2xl text-xs">
            <tr className="">
              <th className=" sticky top-0 lg:text-2xl text-xs  text-center bg-slate-900">
                STT
              </th>
              <th className=" sticky top-0 bg-slate-900">Tên bài hát</th>
              <th className="  sticky top-0 bg-slate-900">Ca sĩ</th>
              <th className=" sticky top-0 lg:pr-4 pr-3 bg-slate-900 text-xs">
                <i className="fa fa-download pl-4"></i>
              </th>
            </tr>
          </thead>
          <tbody className="Bt1">
            {DataSongs.map((song, index) => (
              <tr
                key={index}
                className={` h-12 text-gray-200 bg-slate-900 hover:bg-slate-600 hover:cursor-pointer    text-center ${
                  idSong === song.id &&
                  "!bg-slate-600 text-pink-300   text-center "
                }`}
                onClick={() => handlePlaySong(song.id)}
              >
                <td
                  className={`  text-center sm:text-base text-xs  !hover:bg-slate-600 hover:cursor-pointer  w-[52px] h-[52px] visible  ${
                    idSong === song.name && "bg-slate-600   text-left"
                  }`}
                  onClick={() => handlePlaySong(song.id)}
                >
                  <div className="spinner "></div>
                </td>
                <td className="text-center sm:text-base text-xs lg:text-xl animationSong  ">
                  {song.name}
                </td>
                <td className="text-center sm:text-base text-xs lg:text-xl ">
                  {song.author}
                </td>
                <td className="text-right lg:pr-5 pr-3 ">
                  <a href={song.url}>
                    <i className="fa fa-download"></i>
                  </a>
                </td>
              </tr>
            ))}
            ;
          </tbody>
        </table>
        <table className="table-auto  absolute top-0 m-auto left-0 w-full  border-collapse bg-transparent  ">
          <thead className="text-white h-12  z-10 bg-transparent lg:text-2xl text-xs">
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
          <tbody className="Bt1">
            {DataSongs.map((song, index) => (
              <tr
                key={index}
                className={` h-12 text-gray-200 bg-slate-900 hover:bg-slate-600 hover:cursor-pointer   ${
                  idSong === song.id &&
                  "!bg-transparent text-pink-300  invisible "
                }`}
                onClick={() => handlePlaySong(song.id)}
              >
                <td
                  className={`  text-center  !hover:bg-slate-600 hover:cursor-pointer  w-[52px] h-[52px]  ${
                    idSong === song.name &&
                    "bg-slate-600 invisible  text-center "
                  }`}
                  onClick={(ab) => handlePlaySong(song.id)}
                >
                  {index + 1}
                </td>
                <td className="text-center sm:text-base text-xs lg:text-xl  ">
                  {song.name}
                </td>
                <td className="text-center sm:text-base text-xs lg:text-xl ">
                  {song.author}
                </td>
                <td className="text-right lg:pr-5 pr-3 ">
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
