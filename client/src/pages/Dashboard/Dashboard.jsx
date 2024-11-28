import { Progress } from "antd";
import DashCom from "./DashCom";
import DashTaskCom from "./DashTaskCom";
const Dashboard = () => {
  return (
    <div className="w-full h-[932px] bg-[#424242] px-[30px] pt-[100px] pb-[50px]">
      <div className="w-full p-[15px] bg-[#333333] rounded-[10px] flex flex-col  text-[28px] text-[#DDDDDD]">
        Members
        <div className="w-full mt-[10px] flex justify-between ">
         
            <Progress
              style={{ color: "#DDDDDD" }}
              size={90}
              percent={50}
              format={(percent) => <div className="text-[#DDDDDD]">{percent}% 
              <p className="mt-[5px] text-[12px] text-[#BDBDBD]">Working</p>
              </div>}
              type="circle"
            />

            <Progress
              style={{ color: "#DDDDDD" }}
              size={90}
              percent={30}
              format={(percent) => <div className="text-[#DDDDDD]">{percent}% 
              <p className="mt-[5px] text-[12px] text-[#BDBDBD]">Patient</p>
              </div>}
              type="circle"
            />

            <Progress
              style={{ color: "#DDDDDD" }}
              size={90}
              percent={20}
              format={(percent) => <div className="text-[#DDDDDD]">{percent}% 
              <p className="mt-[5px] text-[12px] text-[#BDBDBD]">Penalty</p>
              </div>}
              type="circle"
            />
        </div>
      </div>
      <div className="w-full h-[200px] mt-[20px] flex flex-col overflow-auto">
            <DashCom
                name="Stephen"
                state="Working"
                current="2000"
                expected="5000"
            />
            <DashCom
                name="Satoshi"
                state="Working"
                current="2000"
                expected="5000"
            />
            <DashCom
                name="Satoshi"
                state="Working"
                current="2000"
                expected="5000"
            />
            <DashCom
                name="Satoshi"
                state="Working"
                current="2000"
                expected="5000"
            />
            <DashCom
                name="Satoshi"
                state="Working"
                current="2000"
                expected="5000"
            />
      </div>
      <div className="w-full p-[15px] mt-[20px] bg-[#333333] rounded-[10px] flex flex-col  text-[28px] text-[#DDDDDD]">
        Tasks
        <div className="w-full mt-[10px] flex justify-between ">
         
            <Progress
              style={{ color: "#DDDDDD" }}
              size={90}
              percent={50}
              format={(percent) => <div className="text-[#DDDDDD]">{percent}% 
              <p className="mt-[5px] text-[12px] text-[#BDBDBD]">Completed</p>
              </div>}
              type="circle"
            />

            <Progress
              style={{ color: "#DDDDDD" }}
              size={90}
              percent={30}
              format={(percent) => <div className="text-[#DDDDDD]">{percent}% 
              <p className="mt-[5px] text-[12px] text-[#BDBDBD]">Pending</p>
              </div>}
              type="circle"
            />

            <Progress
              style={{ color: "#DDDDDD" }}
              size={90}
              percent={20}
              format={(percent) => <div className="text-[#DDDDDD]">{percent}% 
              <p className="mt-[5px] text-[12px] text-[#BDBDBD]">Failed</p>
              </div>}
              type="circle"
            />
        </div>
      </div>
      <div className="w-full h-[200px] mt-[20px] flex flex-col overflow-auto">
        <DashTaskCom
            name='Stephen'
            taskname='chat-app'
            state='Pending'
        />
        <DashTaskCom
            name='Stephen'
            taskname='chat-app'
            state='Pending'
        />
        <DashTaskCom
            name='Stephen'
            taskname='chat-app'
            state='Pending'
        />
        <DashTaskCom
            name='Stephen'
            taskname='chat-app'
            state='Pending'
        />
        <DashTaskCom
            name='Stephen'
            taskname='chat-app'
            state='Pending'
        />
      </div>
    </div>
  );
};

export default Dashboard;
