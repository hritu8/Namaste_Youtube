import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/config";
import { CacheResults } from "../utils/searchSlice";
const Header = () => {
  const dispatch = useDispatch();

  const cacheSuggestions = useSelector((store) => store.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  useEffect(() => {
    // make an api call after every keypress
    // but if the difference between 2api calls is <200ms
    // decline the api call
    const timer = setTimeout(() => {
      if (cacheSuggestions[searchQuery]) {
        setSearchSuggestions(cacheSuggestions[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
   
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
   
    setSearchSuggestions(json[1]);
    dispatch(
      CacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-9 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="hamburger logo"
        />
        <a href="/">
          {" "}
          <img
            className="h-14 mx-2 -my-2.5"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsHa1f7bO91Miz1KKeYpRo95dW2FceKO-yAAW1CzueFQ&s"
            alt="youtube logo"
          />
        </a>
      </div>
      <div className="col-span-10 px-20">
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍 Search
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {searchSuggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="p-2 shadow-sm hover:bg-gray-100"
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-9"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPjbj7AZNfVt3_gVuHmiHHPitiZjhMaqPJWNTzAyZmtw&s"
          alt="user logo"
        />
      </div>
    </div>
  );
};

export default Header;
