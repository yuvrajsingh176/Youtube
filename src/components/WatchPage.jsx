import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, toggleMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (

    <div className="flex flex-col w-full mt-11"> 
    
      <div className="px-5 flex">
        <div>
        
      <iframe
        width="900"
        height="500"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
          ></iframe>
        </div>
        <div className="w-full">
        <LiveChat/>
        </div>
      </div>
    
    <CommentsContainer/>
    </div>
      
  );
};
export default WatchPage;