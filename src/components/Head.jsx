import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { gooleapikey, youtube_clicksearch_api, youtube_search_api } from "../utils/constants";
import { Link } from "react-router-dom";
import { cacheResults } from "../utils/searchSlice";
import { addVideoContent } from "../utils/videosSlice";

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [searchData, setSearchData] = useState([])
    const [showSugg, setShowsug] = useState(true);
    const dispatch = useDispatch();
    const handleTog = () => {
        dispatch(toggleMenu())
    }
    const data = useSelector(store => store.search);
    useEffect(() => {
       
        const timer = setTimeout(() =>
    
        {
            if (data[searchQuery]) {
            setSearchData(data[searchQuery])
        } else {
                getQuerysuggestions();
            }
            
            }, 200)
      
    
        return () => {
            clearTimeout(timer);
    }
    }, [searchQuery]) 
   
 
    const getQuerysuggestions = async () => {
        const data =await fetch(youtube_search_api+searchQuery);
        const json = await data.json();
        setSearchData(json[1]);
        dispatch(cacheResults({
            [searchQuery]: json[1],
        }))
}

    return (
        <div className="fixed w-full bg-white grid grid-flow-col p-4 shadow-lg">
            <div className="hamburgur flex col-span-1 ">
                <img
                    onClick={() => {
                        handleTog()            }}
                    className="h-10 cursor-pointer" src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png" alt="hamburgur" />
            <a href="/">
                <img className="h-12 -m-1 mx-2" src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="youtube logo" />
                </a>


            </div>
            <div className="search col-span-4 ">
              
                <div>
                    <input
                        onChange={(e) => {
                            setSearchQuery(e.target.value)
                            setShowsug(true)
                }} type="text" className="w-1/2 border border-gray-600 p-2 rounded-l-3xl" />
                    <button  className="border border-gray-600 p-2 rounded-r-3xl bg-gray-300">
                🔍
                </button>
                </div>
                { showSugg &&
                    <div className=" fixed bg-white text-center border-gray-300  rounded-lg px-1 w-[391px]  mt-1 shadow-xl">
                    <ul >
                        {
                                searchData?.map((text) => (
                                  <a href={"results?search_query="+text}>
                                  
                                    <li key={text}  className=" hover:bg-gray-200 cursor-pointer rounded-full pb-1 mt-1 border-b-2">
                                        🔍{text}

                                    </li>
                                    </a>  
                                        
                            ))
                   }
                   
                       
                        
                    </ul>
                </div>     
}
                

            </div>
            <div className="account col-span-1 flex justify-center right-8">
                <img className="h-8" src="https://th.bing.com/th/id/OIP.HHVUf3TYqncgpJXyCMmxyAHaHa?rs=1&pid=ImgDetMain" alt="user icon" />
                
            </div>
    </div>)
}
export default Head;

