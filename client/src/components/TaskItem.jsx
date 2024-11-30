import { useState, useEffect } from "react";

const TaskItem = (props) => {
  const [stateColor, setStateColor] = useState("green");

  useEffect(() => {
    switch (props.value.state) {
      case "Pending":
        setStateColor("#3F51B5");
        break;
      case "Failed":
        setStateColor("rgba(153, 51, 51, 0.4)");
        break;
      default:
        setStateColor("rgba(0, 255, 0, 0.4)");
    }
  }, [stateColor]);

  return (
    <div class="w-[100%] bg-[#424242] px-5 py-5 my-5 text-[20px] rounded-[15px] relative">
      <div class="absolute top-3 left-3 text-[25px]  px-[12px] bg-[#232323] rounded-[100%]">
        {props.id + 1}
      </div>
      <div class="w-[100%] flex justify-center">
        <u class="text-[25px] ">{props.value.taskName}</u>
      </div>
      <div class=" flex text-[20px] justify-between">
        <div class="px-5 py-2 my-2 min-w-[50%] mr-3 rounded-[10px] bg-slate-600 text-[18px]">
          Begin: {props.value.startDate}
        </div>
        <div class="px-5 py-2 my-2 min-w-[50%] rounded-[10px] bg-slate-500 text-[18px]">
          End : {props.value.endDate}
        </div>
      </div>
      <div class="flex text-[20px] justify-between">
        <div class="px-5 py-2 rounded-[10px]  bg-stone-600 text-[20px]">
          {props.value.price}$
        </div>
        <div
          class="px-5 py-2 rounded-[10px] text-[20px]"
          style={{ backgroundColor: stateColor }}
        >
          {props.value.state}
        </div>
        <div class="flex check-box text-[20px] items-center gap-3">
          Boss
          <input
            type="checkbox"
            class="h-10 w-10 cursor-pointer"
            checked={props.value.checked === true ? "Checked" : ""}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};
export default TaskItem;
