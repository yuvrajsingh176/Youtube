import { useEffect, useState } from "react";
import Chatmessage from "./Chatmessage";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
const LiveChat = () => {
  const [chattextData, setChat] = useState("");
  const dispatch = useDispatch();
  const chatData = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addChat({
          name: generateRandomName(),
          message: "This is akshay saini live",
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);
  const chatSubmitHandler = () => {
    dispatch(
      addChat({
        name: generateRandomName(),
        message: chattextData,
      })
    );
    setChat("")
  };
  return (
    <div>
      <div className="ml-2 w-full h-[500px] p-2 border flex  flex-col-reverse border-black overflow-y-scroll bg-slate-200 rounded-lg">
        {chatData?.map((chatData, index) => (
          <Chatmessage
            key={index}
            name={chatData.name}
            message={chatData.message}
          />
        ))}
      </div>
      <form onSubmit={(e) => {
        e.preventDefault()
      }} className="w-full  bg-gray-200 border border-black p-2 m-2 rounded-lg  ">
        <input
          type="text"
          onChange={(e) => {
            setChat(e.target.value);
          }}
          value={chattextData}
          className="w-3/4 ml-4 p-2 text-black"
        />
        <button className="px-2 ml-2 bg-green-200" onClick={chatSubmitHandler}>
          ▶️
        </button>
      </form>
    </div>
  );
};
export default LiveChat;
