

const ChatCom = (props) => {
    return (
        <div className="w-[650px] h-[170px] flex flex-col justify-between items-start">
            <div className="w-[100%] h-[125px] pl-[30px] bg-gray-900 flex space-x-[40px] items-center rounded-[10px]">
                {props.avatar}
                <div className="flex flex-col items-start">
                    <p className="text-white text-[35px]">{props.name}</p>
                    <p className="text-white text-[25px]">{props.msg}</p>
                </div>
            </div>
            <p className="text-lg">{props.time}</p>
        </div>
    )
}

export default ChatCom