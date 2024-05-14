import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const ChatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(15),
        })
      );
    }, 2000);
    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <>
      <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {ChatMessages.map((chat, index) => (
            <ChatMessage name={chat.name} message={chat.message} key={index} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black flex "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Hritu raj",
              message: liveMessage,
            })
          );
          setLiveMessage("");
         
        }}
      >
        <input
          className="px-2 w-96"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="bg-green-100 px-2 mx-2">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
