import { useDispatch, useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import WatchPage from './WatchPage'
import { Outlet } from "react-router-dom";
import { youtubeapi } from "../utils/constants";
import { addVideoContent } from "../utils/videosSlice";
import { useEffect } from "react";
const Body = () => {



    return (
        <div className="flex pt-10">
      <Outlet/>
    </div>)
}
export default Body;