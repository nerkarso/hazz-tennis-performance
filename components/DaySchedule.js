import React from "react";
import DayScheduleCard from "./DayScheduleCard";

function DaySchedule() {
  return (
    <div className="flex-1 px-5 pl-10 overflow-y-auto max-h-[426px]">
      {Array.from(Array(20)).map((item, i) => (
        <DayScheduleCard key={i} />
      ))}
    </div>
  );
}

export default DaySchedule;
