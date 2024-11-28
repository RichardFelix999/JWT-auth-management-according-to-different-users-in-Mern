
const MemberCom = (props) => {
    return (
        <div className="MemberCom w-full h-[80px] mt-[20px] bg-[#333333] rouded-[20px] border-0 p-[15px] text-[14px] text-[#BDBDBD] flex rounded-[10px]">
            <div className="min-w-[50px] min-h-[50px] rounded-[10px] bg-[#999999] mr-[20px]">
                {props.img}
            </div>
            <div className="flex flex-col justify-between ">
                <div className="flex items-center">
                    <h1 className=" m-0 mr-[28px]">{props.name}</h1>
                    State
                    <p className=" m-0 ml-[30px]">{props.state}</p>
                </div>
                <div className="flex items-center">
                    current/expected <p className="m-0 ml-[20px]">{props.current}/{props.expected}</p>
                </div>
            </div>
        </div>
    )
}

export default MemberCom;