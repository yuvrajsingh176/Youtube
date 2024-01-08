import { useDebugValue, useEffect, useState } from "react";
import { youtubeapi } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addVideoContent} from '../utils/videosSlice'
const VideosContainer = () => {
console.log("videos")
    const dispatch = useDispatch();
    const data = useSelector(store => store.video.videos);
    // console.log(data[0])
    return (
        <div className=" grid grid-cols-3">
            {
                data?.map((video) => (
                 
                 <Link to={"/watch?v="+  (video.id )}>
                        <VideoCard key={video.id } info={video} />
                 </Link>
                        
                ))
           }
            
        </div>
    )
}
export default VideosContainer;