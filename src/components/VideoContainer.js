import React, { useEffect, useState } from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/config";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getvideos();
  }, []);
  const getvideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
   
    const videos = await data.json();
   
    setVideos(videos.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos?.map((item) => (
        <Link key={item.id} to={"/watch?v=" + item.id}>
          {" "}
          <VideoCard info={item} />{" "}
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
