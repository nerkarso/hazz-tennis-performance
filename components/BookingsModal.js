import BookingsForm from '@/components/BookingsForm';
import ClientInfo from '@/components/ClientInfo';
import DaySchedule from '@/components/DaySchedule';
import { Dialog } from '@headlessui/react';

export default function BookingsModal({ title, payment, isOpen, onClose }) {
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
        <div className="flex pl-8">
          <div className="mt-4 mb-6 w-96">
            <ClientInfo />
            <BookingsForm onClose={onClose} payment={payment} />
          </div>
          <DaySchedule />
        </div>
      </div>
    </Dialog>
  );
}
