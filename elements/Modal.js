import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function Modal({ children, isOpen, onClose, ...props }) {
  return (
    <Transition as={Fragment} show={isOpen} appear>
      <Dialog className="fixed inset-0 z-10" onClose={onClose} {...props}>
        <div className="flex items-center justify-center min-h-screen">
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-5"
            enterTo="opacity-100 translate-y-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-5">
            <div className="inline-block w-full max-w-md m-4 overflow-hidden transition-all transform bg-white border border-white shadow-xl dark:border-neutral-800 dark:bg-neutral-900 rounded-xl">
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
