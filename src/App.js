import "./App.css";

import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import DetailSong from "./component/DetailSong";
import ListSong from "./component/ListSong";
import { songs } from "./Context";
import DataSongs from "./data/Song.json";
import PlaylistSong from "./component/Player";
import "react-h5-audio-player/lib/styles.css";
import "react-clock/dist/Clock.css";
import Clock from "react-clock";
import clock from "./component/Clock";
import TimePicker from "react-time-picker";

function App() {
  const [song, setSong] = useState(DataSongs[0]);

  const handleSetSong = (idSong) => {
    const song = DataSongs.find((song) => song.id === idSong);
    if (!song) setSong(DataSongs[0]);
    else setSong(song);
  };
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const [value1, onChange] = useState(new Date());
  useEffect(() => {
    const interval1 = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval1);
    };
  }, []);

  return (
    <div className="App">
      {/* <p>Current time:</p> */}
      <songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar></Navbar>

        <div className="grid grid-cols-3 bg-slate-700 lg:h-screen-navbar-player  fixed lg:top-[6rem] top-[3rem] w-full left-0  ">
          <DetailSong />
          <ListSong />
        </div>
        <PlaylistSong />
        <div className="text-white">
          {/* <Clock value={value} /> */}
          {/* <TimePicker onChange={onChange} value={value1} /> */}
        </div>
      </songs.Provider>
    </div>
  );
}

export default App;
