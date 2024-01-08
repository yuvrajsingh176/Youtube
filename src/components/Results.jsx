import { Link, useSearchParams } from "react-router-dom";
import { gooleapikey, youtube_clicksearch_api } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addVideoContent } from "../utils/videosSlice";
import { useEffect } from "react";
import VideoCard from "./VideoCard";

const Results = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const data = useSelector(store => store.video.videos);
    
    const searchClickHandler = async () => {
        //resultsPage navigate karega
        const data = await fetch(youtube_clicksearch_api+searchParams.get("search_query")+"&key="+gooleapikey);
        const json = await data.json();
dispatch(addVideoContent(json.items))
    } 
    useEffect(() => {
        searchClickHandler()
    },[])
    return (
        <div className="pt-12  grid grid-cols-3"> 
        {
            data?.map((video) => (
             
             <Link to={"/watch?v="+  (video.id.videoId )}>
                    <VideoCard key={video.id.videoId  } info={video} />
             </Link>
                    
            ))
       }
        </div>
    )
}
export default Results;