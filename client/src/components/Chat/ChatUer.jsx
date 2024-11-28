import '../../../src/style.css'
const Gallery = (props) => {
    const display = props.display
    const setDisplay = props.setDisplay
    return (
        <div className="modal" style={{ display: display }} >
            <div className="back" onClick={() => { setDisplay("none") }}></div>
            <div className="modal-content">
                <div className="w-[550px] h-[1244px] bg-[#3F51B5] pt-[100px] pl-[78px] flex flex-col justify-between z-10">
                    <div className="flex flex-col justify-start items-start cursor-pointer w-[420px] p-4 rounded-xl hover:border-b-2 border-b-gray-400">
                        <img src="assets/users/ (3).jpg" alt="Ronaldo" className="w-[80px] h-[80px] rounded-[50%]" />
                        <p className="text-white text-[35px]">HPJ0112</p>
                        <p className="text-white text-[25px]">Developer</p>
                    </div>
                    <div className="flex flex-col justify-between items-start h-[972px] pt-[120px] pb-[120px]">
                        <button className="text-[35px] text-white pl-8 w-[90%] flex items-start pb-2 rounded-b-lg hover:border-b-2 border-b-gray-300">Profile</button>
                        <button className="text-[35px] text-white pl-8 w-[90%] flex items-start pb-2 rounded-b-lg hover:border-b-2 border-b-gray-300">Dashboard</button>
                        <button className="text-[35px] text-white pl-8 w-[90%] flex items-start pb-2 rounded-b-lg hover:border-b-2 border-b-gray-300">Tasks</button>
                        <button className="text-[35px] text-white pl-8 w-[90%] flex items-start pb-2 rounded-b-lg hover:border-b-2 border-b-gray-300">Daily Report</button>
                        <button className="text-[35px] text-white pl-8 w-[90%] flex items-start pb-2 rounded-b-lg hover:border-b-2 border-b-gray-300">Chat</button>
                        <button className="text-[35px] text-white pl-8 w-[90%] flex items-start pb-2 rounded-b-lg hover:border-b-2 border-b-gray-300">Settings</button>
                        <button className="text-[35px] text-white pl-8 w-[90%] flex items-start pb-2 rounded-b-lg hover:border-b-2 border-b-gray-300">Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery