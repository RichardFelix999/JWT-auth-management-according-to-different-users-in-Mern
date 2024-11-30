import { useState } from "react"
import { menu, submenu } from "../../fakeDB/icon"
import { UserDB } from "../../fakeDB/fakeDB"
import ChatCom from "../../components/Chat/ChatComp"
import Gallery from "../../components/Chat/ChatUer"

const Chat = () => {
    const [display, setDisplay] = useState("none")
    const handleMenu = () => {
        setDisplay("block")
    }

    return (
        <div className="flex items-center pb-20 flex-col bg-[#999999] w-[750px] h-[1344px]">
            <div className="flex items-start flex-col w-[750px] h-[1344px]">
                <div className="flex justify-between pl-[30px] pr-[30px] items-center w-[100%] h-[100px] bg-[#3F51B5]">
                    <button className="bg-none outline-none border-none" onClick={handleMenu}>{menu}</button>
                    <p className="text-white text-[35px]">GroupChat</p>
                    {submenu}
                </div>
            </div>
            <div className="flex flex-col justify-between items-center w-[100%] h-[934px] absolute z-1 top-[250px]">
                {UserDB.map((val, index) => (
                    <ChatCom key={index} name={val.name} msg={val.msg} time={val.time} avatar={val.avatar} />
                ))}
            </div>
            <Gallery display={display} setDisplay={setDisplay} />
        </div>
    )
}

export default Chat