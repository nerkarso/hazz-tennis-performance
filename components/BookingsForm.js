import React from "react";
import ToggleSwitch from "./ToggleSwitch";

function BookingsForm({ payment,onClose }) {
  return (
    <>
      <div className="flex flex-col">
        <label className="flex items-center mb-4">
          <p className="w-32 mr-5 text-lg text-gray-700 dark:text-gray-400 ">
            Date
          </p>
          <input type="date" className="flex-1 rounded-md" />
        </label>
        <label className="flex items-center mb-4">
          <span className="w-32 mr-5 text-lg text-gray-700 dark:text-gray-400 ">
            Time
          </span>
          <input type="time" className="flex-1 rounded-md " />
        </label>
        <label className="flex items-center mb-4">
          <p className="w-32 mr-5 text-lg text-gray-700 dark:text-gray-400 ">
            Coach
          </p>
          <select name="" id="" className="flex-1 rounded-md">
            <option value="">Coach 1</option>
            <option value="">Coach 2</option>
            <option value="">Coach 3</option>
          </select>
        </label>
        <label className="flex items-center mb-4 ">
          <p className="w-32 mr-5 text-lg text-gray-700 dark:text-gray-400 ">
            Court
          </p>
          <select name="" id="" className="flex-1 rounded-md">
            <option value="">Court 1</option>
            <option value="">Court 2</option>
            <option value="">Court 3</option>
          </select>
        </label>
        {payment && <ToggleSwitch />}
      <div className="">
        <button onClick={onClose} className="px-4 py-2 text-white transition-colors duration-150 border border-transparent rounded-lg bg-primary-600 active:bg-primary-600 hover:bg-primary-700 focus:outline-none focus:shadow-outline-primary">
          Confirm
        </button>
      </div>
      </div>
    </>
  );
}

export default BookingsForm;
