import { Dialog } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

export default function ModalHeader({ children, onClose, title }) {
  return (
    <header className="flex items-center h-16 px-4">
      {children ? (
        children
      ) : (
        <>
          {title && (
            <Dialog.Title as="h1" className="text-2xl font-bold">
              {title}
            </Dialog.Title>
          )}
          <button
            type="button"
            className="inline-grid w-10 h-10 ml-auto transition duration-200 bg-black bg-opacity-0 rounded-full place-items-center hover:bg-opacity-10 focus:bg-opacity-20 dark:bg-white dark:bg-opacity-0 dark:text-white focus:outline-none"
            onClick={onClose}>
            <XIcon className="w-6 h-6" />
          </button>
        </>
      )}
    </header>
  );
}
