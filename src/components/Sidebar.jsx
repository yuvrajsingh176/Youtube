import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addVideoContent } from "../utils/videosSlice";
import { youtubeapi } from "../utils/constants";

const Sidebar = () => {
    const isopen=useSelector(store=>store.app.ismenuOpen)
    if (!isopen)
        return null
    console.log("sidebar")

    const dispatch=useDispatch()
    const getVideos =  () => {
        fetch(youtubeapi)
            .then((response) => {
            return response.json()
            })
            .then(data => {
                console.log(data);
                dispatch(addVideoContent(data.items))
            })
            .catch(e => {
                console.log(e);
        })
        
  
  
    }
    useEffect(() => {
        getVideos();
    },[])
  

    
    return (
        <div className="p-5 shadow-lg w-48">
        <ul>
                <li>
                    Home 
                   </li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
                
            </ul>
            <h1 className="font-bold pt-5">Subscriptions</h1>
            <ul>
                <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
                
            </ul>
            <h1 className="font-bold pt-5">Watch later</h1>
            <ul>
                <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
                
            </ul>
    </div>)
}
export default Sidebar;