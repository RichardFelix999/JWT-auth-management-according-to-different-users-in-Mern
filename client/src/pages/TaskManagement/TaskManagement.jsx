import { useEffect, useState } from "react";

import { getDateString } from "../../components/functions";

const TaskManagement = () => {
  const today = getDateString(new Date());
  const [showingDate, setShowingDate] = useState(today);

  useEffect(() => {
    console.log(showingDate);
  }, [showingDate]);

  const taskList = [
    {
      taskName: "Fighting with Friends",
      startDate: new Date(),
      endDate: new Date(),
      state: "Pending",
      price: 2000,
      checked: false,
    },
    {
      taskName: "Hello world!",
      startDate: new Date(),
      endDate: new Date(),
      state: "Pending",
      price: 2000,
      checked: false,
    },
  ];

  return (
    <div class="w-20">
      This is the TaskManagement page
      <input
        style={{ padding: "5px", fontSize: "15px" }}
        type="date"
        value={showingDate}
        onChange={(e) => setShowingDate(e.target.value)}
      />
    </div>
  );
};
export default TaskManagement;
