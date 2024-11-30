import { useEffect, useState } from "react";

import { getDateString } from "../../components/functions";
import TaskItem from "../../components/TaskItem";
import EditTask from "./EditTask";
const TaskManagement = () => {
  const today = getDateString(new Date());
  const [showingDate, setShowingDate] = useState(today);
  const [buttonState, setButtonState] = useState(false);

  useEffect(() => {
    console.log(showingDate);
  }, [showingDate]);

  const taskList = [
    {
      taskName: "Fighting with Friends",
      startDate: "2024-2-2",
      endDate: "2024-2-2",
      state: "Pending",
      price: 2000,
      checked: false,
    },
    {
      taskName: "Hello world!",
      startDate: "2020-03-22",
      endDate: "2020-04-04",
      state: "Failed",
      price: 2000,
      checked: true,
    },
    {
      taskName: "Hello world!",
      startDate: "2020-03-22",
      endDate: "2020-04-04",
      state: "Completed",
      price: 2000,
      checked: false,
    },
    {
      taskName: "Fighting with Friends",
      startDate: "2024-2-2",
      endDate: "2024-2-2",
      state: "Pending",
      price: 2000,
      checked: false,
    },
    {
      taskName: "Hello world!",
      startDate: "2020-03-22",
      endDate: "2020-04-04",
      state: "Failed",
      price: 2000,
      checked: true,
    },
    {
      taskName: "Hello world!",
      startDate: "2020-03-22",
      endDate: "2020-04-04",
      state: "Completed",
      price: 2000,
      checked: false,
    },
    {
      taskName: "Fighting with Friends",
      startDate: "2024-2-2",
      endDate: "2024-2-2",
      state: "Pending",
      price: 2000,
      checked: false,
    },
    {
      taskName: "Hello world!",
      startDate: "2020-03-22",
      endDate: "2020-04-04",
      state: "Failed",
      price: 2000,
      checked: true,
    },
    {
      taskName: "Hello world!",
      startDate: "2020-03-22",
      endDate: "2020-04-04",
      state: "Completed",
      price: 2000,
      checked: false,
    },
  ];

  return (
    <div class="w-[100%] px-[30px] pt-[11px] text-[20px] text-white bg-[#999999]  relative">
      <div style={{ display: "none" }}>
        <div class="flex justify-between my-5">
          <button
            class="w-[120.5px] py-[10px] bg-[#3F51B5] text-[20px] rounded-[10px]"
            onClick={() => console.log("Add Task")}
            disabled={buttonState}
          >
            Add Task
          </button>
          <input
            id="calender"
            class=" bg-[#424242] max-w-[160px] h-15 rounded-[10px] px-5 py-0.5 text-[20px] "
            type="date"
            value={showingDate}
            onChange={(e) => setShowingDate(e.target.value)}
          />
          <div class="flex items-center justify-center text-[22px] h-[50px] w-[50px] rounded-[100%] block bg-[red] align-middle">
            {taskList.length}
          </div>
        </div>
        <div class="max-h-[840px] overflow-auto">
          {taskList.map((value, key) => (
            <TaskItem key={key} id={key} value={value} />
          ))}
        </div>
      </div>
      <EditTask />
    </div>
  );
};
export default TaskManagement;
