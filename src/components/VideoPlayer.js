import React from "react";
import ReactPlayer from "react-player";

import "../App.css";

function VideoPlayer() {
  return (
    <>
      <div className="player-overlay"></div>
      <div className="video-wordings text-sliding">
        <h1 className="normal-text">lorem ipsum dolor</h1>
        <span className="slide-down" />
        <p className="slide-up">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
      </div>
      <ReactPlayer
        loop={true}
        muted={true}
        playing={true}
        className="react-player"
        url="https://www.w3schools.com/html/mov_bbb.mp4"
      />
    </>
  );
}

export default VideoPlayer;
