import { NextLink } from '@/elements';
import { BellIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export default function BaseSidebar({ links, basePath }) {
  return (
    <aside className="flex-shrink-0 overflow-y-auto border-r w-72 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
      <header className="flex items-center justify-between h-20 px-6">
        <Link href="/">
          <a className="flex items-center gap-3 focus:outline-none">
            <img src="/img/icon.png" className="w-8 h-8" alt="" />
            <span className="text-xl font-bold">HTP</span>
          </a>
        </Link>
        <div className="flex items-center gap-4">
          <button className="relative align-middle transition duration-150 text-primary-600 focus:outline-none hover:text-primary-500 focus:text-primary-700">
            <BellIcon className="w-6 h-6" />
            <span className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-neutral-900" />
          </button>
          <Link href={`${basePath}/account`}>
            <a className="transition duration-150 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 ring-offset-2 ring-offset-white dark:ring-offset-neutral-900">
              <img src="https://avatars.dicebear.com/api/initials/nk.svg?r=50" className="object-cover w-8 h-8" alt="" />
            </a>
          </Link>
        </div>
      </header>
      <div className="flex flex-col gap-1 px-3 pb-4">
        {links.map(({ href, text, icon: Icon }, i) => (
          <NextLink
            href={href}
            activeClassName="bg-primary-100 text-primary-700 hover:bg-primary-200 focus:bg-primary-300 dark:bg-primary-900 dark:hover:bg-primary-800 dark:focus:bg-primary-700 dark:text-primary-100"
            key={i}>
            <a className="flex items-center h-10 gap-4 px-3 transition duration-150 rounded-md hover:bg-neutral-200 text-neutral-600 focus:bg-neutral-300 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
              <Icon className="w-6 h-6 opacity-75" />
              <span className="text-sm font-semibold">{text}</span>
            </a>
          </NextLink>
        ))}
      </div>
    </aside>
  );
}
