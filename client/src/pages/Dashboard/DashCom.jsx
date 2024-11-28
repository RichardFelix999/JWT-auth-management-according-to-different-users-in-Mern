
const DashCom = (props) => {
    return (
        <div className="w-full m-0 mt-[5px] p-[10px] bg-[#333333] flex items-center text-[#BDBDBD] rounded-[10px]">
            <div className=" w-[20px] h-[20px] mr-[10px] bg-[#999999] rounded-[5px]">
                {props.img}
            </div>
            <h1 className="text-[16px] m-0 mr-[30px] ">
                {props.name}
            </h1>
            <p className="text-[12px] m-0 mr-[30px]">
                {props.state}
            </p>
            <p className="text-[12px]">
                {props.current}/{props.expected}
            </p>
        </div>
    )
}

export default DashCom;