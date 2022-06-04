import React, { useContext, useEffect, useState } from "react";
import { songs } from "../Context";

function ListSong() {
  const { DataSongs, handleSetSong, song } = useContext(songs);
  const [idSong, setidSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setidSong(idSong);
    handleSetSong(idSong);
  };
  useEffect(() => {
    setidSong(song.id);
  }, [song]);
  return (
    <div className="lg:col-span-2 sm:col-start-1 col-end-7  overflow-y-scroll  h-screen w-full ">
      <table className="table-auto  relative m-auto border-separate w-full">
        <thead className="text-white h-12  ">
          <tr className="">
            <th className=" sticky top-0 sm:text-base text-xs lg:pl-6 bg-slate-900">
              STT
            </th>
            <th className=" sticky top-0 bg-slate-900  ">Tên bài hát</th>
            <th className="  sticky top-0 bg-slate-900">Ca sĩ</th>
            <th className=" sticky top-0 lg:pr-4 pr-3 bg-slate-900 text-xs">
              <i className="fa fa-download pl-4"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`bg-slate-900 h-12 text-gray-200 hover:bg-slate-600 hover:cursor-pointer ${
                idSong === song.id && "bg-slate-600 text-pink-300 "
              }`}
              onClick={() => handlePlaySong(song.id)}
            >
              <td className="text-center sm:text-base text-xs">{index + 1} </td>
              <td className="text-center sm:text-base text-xs lg:text-xl">
                {song.name}
              </td>
              <td className="text-center sm:text-base text-xs lg:text-xl">
                {song.author}
              </td>
              <td className="text-right lg:pr-5 pr-3">
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
  );
}

export default ListSong;
