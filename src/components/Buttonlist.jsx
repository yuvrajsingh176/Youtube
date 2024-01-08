import Button from "./Button";
const list = ["Gaming", "Songs", "Live", "Cricket", "Soccer", "News", "Valentines"];

const ButtonList = () => {
    return (
        <div className="flex">
            {
                list.map((text,index) => <Button key={index} name={text} />)
            }
            
    </div>)
}
export default ButtonList;