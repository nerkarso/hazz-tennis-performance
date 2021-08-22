import { Dialog } from "@headlessui/react";

function ViewTotalHoursModal({ isOpen, onClose }) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      as="div"
      className="fixed inset-0 z-20 grid place-items-center"
    >
      <Dialog.Overlay className="fixed inset-0 bg-black/50" />

      <div
        className="z-30 w-full overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-screen-md"
        role="dialog"
        id="modal"
      >
        <div className="grid px-6 mx-auto">
          <Dialog.Title>
            <h2 className="my-6 text-2xl font-semibold text-base-700 dark:text-base-200">
              Total Coaching Hours
            </h2>
          </Dialog.Title>
          {/* New Table */}
          <div className="w-full mb-8 overflow-hidden border rounded-lg shadow-sm">
            <div className="w-full overflow-x-auto">
              <table className="w-full whitespace-no-wrap">
                <thead>
                  <tr className="text-xs font-semibold tracking-wide text-left uppercase border-b text-base-500 dark:border-base-700 bg-base-50 dark:text-base-400 dark:bg-base-800">
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Coach</th>
                    <th className="px-4 py-3">Total Hrs</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y dark:divide-base-700 dark:bg-base-800">
                  {Array.from(Array(3)).map((item, i) => (
                    <tr key={i} className="text-base-700 dark:text-base-400">
                      <td className="px-4 py-3 text-sm">12/08/2021</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          {/* Avatar with inset shadow */}
                          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                            <img
                              className="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt=""
                              loading="lazy"
                            />
                            <div className="absolute inset-0 rounded-full shadow-inner" />
                          </div>
                          <div>
                            <p className="font-semibold">Hans Burger</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">28</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <footer className="flex flex-col items-center justify-end p-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800">
          <button
            onClick={onClose}
            className="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 border border-transparent rounded-lg bg-primary-600 sm:w-auto sm:px-4 sm:py-2 active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
          >
            Close
          </button>
        </footer>
      </div>
    </Dialog>
  );
}

export default ViewTotalHoursModal;
