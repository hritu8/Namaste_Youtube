import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-9"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPjbj7AZNfVt3_gVuHmiHHPitiZjhMaqPJWNTzAyZmtw&s"
        alt="user logo"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
