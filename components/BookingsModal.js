import { useState } from "react";

function BookingsModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="fixed inset-0 z-30 bg-black/50 grid place-items-center">
      <div
        className="w-full overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-screen-md"
        role="dialog"
        id="modal"
      >
        <header className="flex justify-between p-4">
          <h1 className="text-2xl font-medium ml-4">Confirm booking</h1>
          <button className="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              role="img"
              aria-hidden="true"
            >
              <path
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </header>
        <div className="flex pl-8">
          <div className="mt-4 mb-6 w-96">
            <div className="flex items-center mb-6">
              <img
                className="object-cover w-10 h-10 rounded-full"
                src={
                  "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                }
              />
              <span className="text-xl ml-4 font-semibold text-gray-700 dark:text-gray-300">
                Client Name
              </span>
            </div>
            <div className="grid  ">
              <label className="flex items-center  mb-4">
                <p className="text-lg w-16 text-gray-700 dark:text-gray-400 mr-5 ">
                  Date
                </p>
                <input type="date" className="rounded-md flex-1" />
              </label>
              <label className="flex items-center mb-4">
                <span className="text-lg w-16 text-gray-700 dark:text-gray-400 mr-5 ">
                  Time
                </span>
                <input type="time" className="rounded-md flex-1 " />
              </label>
              <label className="flex items-center mb-4">
                <p className="text-lg w-16 text-gray-700 dark:text-gray-400 mr-5 ">
                  Coach
                </p>
                <select name="" id="" className="rounded-md flex-1">
                  <option value="">Coach 1</option>
                  <option value="">Coach 2</option>
                  <option value="">Coach 3</option>
                </select>
              </label>
              <label className="flex items-center mb-4 ">
                <p className="text-lg w-16 text-gray-700 dark:text-gray-400 mr-5 ">
                  Court
                </p>
                <select name="" id="" className="rounded-md flex-1">
                  <option value="">Court 1</option>
                  <option value="">Court 2</option>
                  <option value="">Court 3</option>
                </select>
              </label>
            </div>
          </div>
          <div className="pl-10 overflow-y-auto flex-1 px-5 pb-5 max-h-96">
            {Array.from(Array(20)).map((item, i) => (
              <div
                key={i}
                className=" px-4 py-2 shadow-md text-lg  mr-3 mb-3 text-gray-700 dark:text-gray-400 bg-primary-200 text-neutral-300 rounded-md h-32"
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
                  <span className=" mr-1">Coach:</span>
                  <span className="">Coach 1</span>
                </div>
                <div className="flex">
                  <span className=" mr-2">Court:</span>
                  <span className="">Court 2</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <footer className="flex flex-col items-center justify-end p-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800">
          <button className="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary-600 border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
            Confirm
          </button>
        </footer>
      </div>
    </div>
  );
}
export default BookingsModal;
