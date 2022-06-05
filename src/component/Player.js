import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import { songs } from "../Context";

function Player() {
  const { song, handleSetSong } = useContext(songs);
  const handleNext = () => {
    handleSetSong(song.id + 1);
  };
  const handlePrevious = () => {
    handleSetSong(song.id - 1);
  };
  //   const handleAuto = () => {
  //     handleSetSong(song.id + 1);
  //   };
  const handleEndAction = () => {
    handleSetSong(song.id + 1);
  };
  return (
    <div className="left-0 bottom-0 fixed right-0 w-screen  bgPlay">
      <AudioPlayer
        className="play pl-0"
        src={song.url}
        showSkipControls={true}
        showJumpControls={true}
        onClickNext={handleNext}
        onClickPrevious={handlePrevious}
        onEnded={handleEndAction}
      />

      {/* <AudioPlayer
        className="play"
        src={song.url}
        onAbort={action("onAbort")}
        onCanPlay={action("onCanPlay")}
        onCanPlayThrough={action("onCanPlayThrough")}
        onEnded={action("onEnded")}
        onPlaying={action("onPlaying")}
        onSeeking={action("onSeeking")}
        onSeeked={action("onSeeked")}
        onLoadStart={action("onLoadStart")}
        onLoadedMetaData={action("onLoadedMetaData")}
        onLoadedData={action("onLoadedData")}
        onError={action("onError")}
        onListen={action("onListen")}
        onVolumeChange={action("onVolumeChange")}
        onPause={action("onPause")}
        onClickPrevious={handlePrevious("onClickPrevious")}
        onClickNext={handleNext("onClickNext")}
        volume={0.8}
        showSkipControls
        progressUpdateInterval={100}
      /> */}
    </div>
  );
}

export default Player;
