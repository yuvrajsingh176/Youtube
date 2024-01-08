const VideoCard = ({ info }) => {
    const { snippet } = info;
    const { thumbnails, channelTitle, title } = snippet;
    return (
        <div className="p-2 m-2 w-auto hover:shadow-2xl cursor-pointer">
            <img className="rounded-lg" src={thumbnails.medium.url} alt="" />
            <ul>
                <li className="font-bold py-2">{title}</li>
                <li>{ channelTitle}</li>
               
                
             </ul>
        </div>       
    )
}
export default VideoCard;