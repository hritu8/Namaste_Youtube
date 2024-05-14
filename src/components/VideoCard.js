import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return undefined;
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-80 shadow-lg ">
      <img className="rounded-lg w-full" src={thumbnails.medium.url} alt="thumbnail" />
      <ul className="w-76">
        <li>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({info}) =>{
  return (
    <div className="p-1 m-1 border-red-900 border ">
      <VideoCard info={info}  />
    </div>
  );
}

export default VideoCard;
