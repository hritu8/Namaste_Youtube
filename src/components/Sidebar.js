import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="w-40 shadow-lg text-center">
      <ul>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <h1 className="font-bold">You</h1>
      <ul>
        <li>Your channel</li>
        <li>History</li>
        <li>Playlist</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Liked videos</li>
      </ul>
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>Bihar Tak</li>
        <li>CodestorywithIMK</li>
        <li>Arsh Goyal</li>
      </ul>
    </div>
  );
};

export default Sidebar;
