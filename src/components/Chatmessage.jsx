const Chatmessage = ({name,message}) => {
    return (
        <div className="flex items-center my-2">
            <img className=" rounded-full w-8 h-8" src="https://yt4.ggpht.com/ytc/AIf8zZSyXvVGcrk0hrCXcYTsLEmr91TKbDHNiKbB2g=s64-c-k-c0x00ffffff-no-rj" alt="logo" />
            <span className="font-bold mx-2">{name}</span>
            <span>{message}</span>

        </div>
    )
}
export default Chatmessage;