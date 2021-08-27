import { Dialog } from '@headlessui/react';

export default function MyDialog({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onClose={onClose} as="div" className="fixed inset-0 z-20 grid place-items-center">
      <Dialog.Overlay className="fixed inset-0 bg-black/50" />
      <div className="z-30 w-full overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-screen-md" role="dialog" id="modal">
        <Dialog.Title>
          <header className="flex justify-between p-4">
            <h1 className="ml-4 text-2xl font-medium">{title}</h1>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" role="img" aria-hidden="true">
                <path
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                  fillRule="evenodd"></path>
              </svg>
            </button>
          </header>
        </Dialog.Title>
        <div className="flex px-8">
          <div className="w-full mt-4 mb-6">
            <label className="flex items-center mb-4">
              <p className="mr-5 text-lg text-gray-700 w-28 dark:text-gray-400 ">Coach Name</p>
              <input type="text" className="flex-1 rounded-md " />
            </label>
            <label className="flex items-center mb-4">
              <span className="mr-5 text-lg text-gray-700 w-28 dark:text-gray-400 ">Email</span>
              <input type="email" className="flex-1 rounded-md " />
            </label>
            <label className="flex items-center mb-4">
              <p className="mr-5 text-lg text-gray-700 w-28 dark:text-gray-400 ">Password</p>
              <input type="password" className="flex-1 rounded-md " />
            </label>
            <label className="flex items-center mb-4">
              <p className="mr-5 text-lg text-gray-700 w-28 dark:text-gray-400 ">Image Url</p>
              <input type="text" className="flex-1 rounded-md " />
            </label>
          </div>
        </div>
        <footer className="flex flex-col items-center justify-end p-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800">
          <button className="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 border border-transparent rounded-lg bg-primary-600 sm:w-auto sm:px-4 sm:py-2 active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
            Create
          </button>
        </footer>
      </div>
    </Dialog>
  );
}
