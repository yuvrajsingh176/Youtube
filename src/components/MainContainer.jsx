import { useDispatch, useSelector } from "react-redux";
import ButtonList from "./Buttonlist";
import Sidebar from "./Sidebar";
import VideosContainer from "./VideosContainer";


const MainContainer = () => {
 
    const data = useSelector(store => store.video.videos);
    return (<div className=" flex mt-10">
    <Sidebar />
        <div>
        <ButtonList />
            <VideosContainer />
        </div>
        
    </div>)
}
export default MainContainer;