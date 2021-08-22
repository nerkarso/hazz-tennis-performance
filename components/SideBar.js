import {
  AnnotationIcon,
  ChatAlt2Icon,
  ClipboardListIcon,
  CreditCardIcon,
  HomeIcon, UserGroupIcon,
  UsersIcon
} from "@heroicons/react/outline";
import React from 'react';

function SideBar() {
  return (
    <aside className="z-0 flex-shrink-0 hidden w-64 overflow-y-auto bg-white border-r dark:bg-base-800 md:block">
    <div className="py-4 text-base-500 dark:text-base-400">
      <a
        className="ml-5 text-lg font-bold text-base-800 dark:text-base-200"
        href="/dashboard"
      >
        Hazz Tennis
      </a>
      <ul className="my-4">
        <li className="relative px-5 py-3">
          <span className="absolute inset-y-0 left-0 w-1 rounded-tr-lg rounded-br-lg bg-primary-600" />
          <a
            className="flex items-center w-full text-sm font-semibold transition-colors duration-150 text-base-800 hover:text-base-800 dark:hover:text-base-200 dark:text-base-100"
            href="/dashboard"
          >
            <HomeIcon className="w-5 h-5" />
            <span className="ml-4">Dashboard</span>
          </a>
        </li>
        <li className="relative px-5 py-3">
          <a
            className="flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-base-800 dark:hover:text-base-200"
            href="/bookings"
          >
            <ClipboardListIcon className="w-5 h-5" />
            <span className="ml-4">Bookings</span>
          </a>
        </li>
        <li className="relative px-5 py-3">
          <a
            className="flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-base-800 dark:hover:text-base-200"
            href="/coaches"
          >
            <UsersIcon className="w-5 h-5" />
            <span className="ml-4">Coaches</span>
          </a>
        </li>
        <li className="relative px-5 py-3">
          <a
            className="flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-base-800 dark:hover:text-base-200"
            href="clients"
          >
            <UserGroupIcon className="w-5 h-5" />
            <span className="ml-4">Clients</span>
          </a>
        </li>
        <li className="relative px-5 py-3">
          <a
            className="flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-base-800 dark:hover:text-base-200"
            href="/feedback"
          >
            <AnnotationIcon className="w-5 h-5" />
            <span className="ml-4">Feedback</span>
          </a>
        </li>
        <li className="relative px-5 py-3">
          <a
            className="flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-base-800 dark:hover:text-base-200"
            href="/payments"
          >
            <CreditCardIcon className="w-5 h-5" />
            <span className="ml-4">Payments</span>
          </a>
        </li>
        <li className="relative px-5 py-3">
          <a
            className="flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-base-800 dark:hover:text-base-200"
            href="/messaging"
          >
            <ChatAlt2Icon className="w-5 h-5" />
            <span className="ml-4">Messaging</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
  
  )
}

export default SideBar
