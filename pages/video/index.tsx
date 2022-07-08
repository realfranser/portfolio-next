import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <div>
      <iframe
        className="absolute w-full h-full"
        src="https://www.youtube.com/embed/tDVeQRwtHMw"
      />
    </div>
  );
};

export default Video;
