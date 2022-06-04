import "./App.css";
import React, { useState } from "react";
import Navbar from "./component/Navbar";
import DetailSong from "./component/DetailSong";
import ListSong from "./component/ListSong";
import { songs } from "./Context";
import DataSongs from "./data/Song.json";
import PlaylistSong from "./component/Player";
import "react-h5-audio-player/lib/styles.css";

function App() {
  const [song, setSong] = useState(DataSongs[0]);

  const handleSetSong = (idSong) => {
    const song = DataSongs.find((song) => song.id === idSong);
    if (!song) setSong(DataSongs[0]);
    else setSong(song);
  };

  return (
    <div className="App bg-slate-700 !h-full">
      <songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />

        <div className="grid grid-cols-3 bg-slate-700 lg:h-screen-navbar-player  fixed lg:top-[6rem] top-[3rem] w-full ">
          <DetailSong />
          <ListSong />
        </div>
        <PlaylistSong />
      </songs.Provider>
    </div>
  );
}

export default App;
