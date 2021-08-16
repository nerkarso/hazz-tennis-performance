import React from "react";

function NewCoachModal() {
  return (
    <div className="fixed inset-0 z-30 bg-black/50 grid place-items-center">
      <div
        className="w-full overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-screen-sm"
        role="dialog"
        id="modal"
      >
        <header className="flex justify-between p-4">
          <h1 className="text-2xl font-medium ml-4">Create New Coach</h1>
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
        <div className="flex px-8">
          <div className="mt-4 mb-6 w-full">
            <label className="flex items-center  mb-4">
              <p className="text-lg w-28 text-gray-700 dark:text-gray-400 mr-5 ">
                Coach Name
              </p>
              <input type="text" className="rounded-md flex-1 " />
            </label>
            <label className="flex items-center mb-4">
              <span className="text-lg w-28 text-gray-700 dark:text-gray-400 mr-5 ">
                Email
              </span>
              <input type="email" className="rounded-md flex-1 " />
            </label>
            <label className="flex items-center mb-4">
              <p className="text-lg w-28 text-gray-700 dark:text-gray-400 mr-5 ">
                Password
              </p>
              <input type="password" className="rounded-md flex-1 " />
            </label>
            <label className="flex items-center mb-4">
              <p className="text-lg w-28 text-gray-700 dark:text-gray-400 mr-5 ">
                Image Url
              </p>
              <input type="text" className="rounded-md flex-1 " />
            </label>
          </div>
        </div>
        <footer className="flex flex-col items-center justify-end p-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800">
          <button className="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary-600 border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
            Create
          </button>
        </footer>
      </div>
    </div>
  );
}

export default NewCoachModal;
