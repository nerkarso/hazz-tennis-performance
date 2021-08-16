import {
  AnnotationIcon,
  ChatAlt2Icon,
  ClipboardListIcon,
  CreditCardIcon,
  HomeIcon,
  StarIcon,
  UserGroupIcon,
  UsersIcon
} from "@heroicons/react/outline";
import React from "react";

function feedback() {
  return (
    <div className="flex h-screen bg-base-50 dark:bg-base-900">
      <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-base-800 md:block flex-shrink-0 border-r">
        <div className="py-4 text-base-500 dark:text-base-400">
          <a
            className="ml-5 text-lg font-bold text-base-800 dark:text-base-200"
            href="/dashboard"
          >
            Hazz Tennis
          </a>
          <ul className="my-4">
            <li className="relative px-5 py-3">
              <span className="absolute inset-y-0 left-0 w-1 bg-primary-600 rounded-tr-lg rounded-br-lg" />
              <a
                className="flex items-center w-full text-sm font-semibold text-base-800 transition-colors duration-150 hover:text-base-800 dark:hover:text-base-200 dark:text-base-100"
                href="/"
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
      <div className=" w-96 flex-shrink-0 border-r">
        <h2 className=" mt-4 text-center text-3xl font-bold text-base-800 dark:text-base-200">
          Feedbacks
        </h2>

        <div className="mt-10 border rounded-md px-4 py-6 mx-2">
          {Array.from(Array(5)).map((item, i) => (
            <div
              key={i}
              className="flex items-center text-sm hover:bg-primary-300 rounded-md px-1"
            >
              <div className="relative hidden w-8 h-8 my-2 mr-3 rounded-full md:block">
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
                <StarIcon className="w-6 h-6 inline" />
                <span className="font-semibold">4.5</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-full">
        <div className="flex flex-col h-full">
          <h2 className="text-2xl p-4 text-center font-bold">
            Feedback Message
          </h2>
          <div className="flex-1 overflow-y-auto px-4">
            <div className="flex">
              <div className=" mt-5 max-w-lg block bg-primary-600 text-white border rounded-xl px-4 py-2 ">
                <p>
                  Hello, I like tennis but Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Unde ducimus qui similique
                  soluta at perspiciatis expedita adipisci ullam, cumque nobis?
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className=" mt-5 max-w-lg inline-block bg-primary-600 text-white border rounded-xl px-4 py-2 ">
                <p>
                  Hello, I like tennis but Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Unde ducimus qui similique
                  soluta at perspiciatis expedita adipisci ullam, cumque nobis?
                </p>
              </div>
            </div>
            <div className="flex">
              <div className=" mt-5 max-w-lg block bg-primary-600 text-white border rounded-xl px-4 py-2 ">
                <p>
                  Hello, I like tennis but Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Unde ducimus qui similique
                  soluta at perspiciatis expedita adipisci ullam, cumque nobis?
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className=" mt-5 max-w-lg inline-block bg-primary-600 text-white border rounded-xl px-4 py-2 ">
                <p>
                  Hello, I like tennis but Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Unde ducimus qui similique
                  soluta at perspiciatis expedita adipisci ullam, cumque nobis?
                </p>
              </div>
            </div>
            <div className="flex">
              <div className=" mt-5 max-w-lg block bg-primary-600 text-white border rounded-xl px-4 py-2 ">
                <p>
                  Hello, I like tennis but Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Unde ducimus qui similique
                  soluta at perspiciatis expedita adipisci ullam, cumque nobis?
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className=" mt-5 max-w-lg inline-block bg-primary-600 text-white border rounded-xl px-4 py-2 ">
                <p>
                  Hello, I like tennis but Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Unde ducimus qui similique
                  soluta at perspiciatis expedita adipisci ullam, cumque nobis?
                </p>
              </div>
            </div>
            <div className="flex">
              <div className=" mt-5 max-w-lg block bg-primary-600 text-white border rounded-xl px-4 py-2 ">
                <p>
                  Hello, I like tennis but Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Unde ducimus qui similique
                  soluta at perspiciatis expedita adipisci ullam, cumque nobis?
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className=" mt-5 max-w-lg inline-block bg-primary-600 text-white border rounded-xl px-4 py-2 ">
                <p>
                  Hello, I like tennis but Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Unde ducimus qui similique
                  soluta at perspiciatis expedita adipisci ullam, cumque nobis?
                </p>
              </div>
            </div>
          </div>
          <div className="flex-grow-0">
            <textarea
              className="rounded-md outline-none border block"
              cols="50"
            ></textarea>
            <button className="bg-primary-400 mt-5 py-2 mr-2 px-4 rounded-md text-white focus:ring-primary-200 focus:ring-2 focus:ring-offset-2 focus:outline-none">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default feedback;
