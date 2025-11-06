import React from "react";

const VideoComponent = ({ src, alt }) => {
  return (
    <iframe
      width="400"
      height="300"
      src={src || "https://www.youtube.com/embed/MmHCzeBeEIU"}
      title="Видео про котиков"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default VideoComponent;