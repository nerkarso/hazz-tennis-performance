import React from "react";

function DayScheduleCard({i}) {
  return (
    <div
      key={i}
      className="h-32 px-4 py-2 mb-3 mr-3 text-lg text-gray-700 rounded-md shadow-md dark:text-gray-400 bg-primary-200 text-neutral-300"
    >
      <div className="flex">
        <span className="mr-3">Date:</span>
        <span>07/08/2021</span>
      </div>
      <div className="flex">
        <span className="mr-3">Time:</span>
        <span>09:00 AM</span>
      </div>
      <div className="flex">
        <span className="mr-1 ">Coach:</span>
        <span className="">Coach 1</span>
      </div>
      <div className="flex">
        <span className="mr-2 ">Court:</span>
        <span className="">Court 2</span>
      </div>
    </div>
  );
}

export default DayScheduleCard;
