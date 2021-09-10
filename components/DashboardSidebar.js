import { Avatar, Button, List, ListItem, ListItemContent, ListItemStart, NavLink } from '@/elements';
import { useAuth, usePath } from '@/hooks';
import { LogoutIcon } from '@heroicons/react/outline';
import { BellIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export default function DashboardSidebar({ links }) {
  const { basePath } = usePath();
  const { signOut } = useAuth();

  return (
    <aside className="flex flex-col flex-shrink-0 border-r w-72 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
      <header className="flex items-center justify-between h-20 px-6">
        <Link href="/">
          <a className="flex items-center gap-3 transition duration-150 focus:outline-none focus:opacity-60">
            <img src="/img/icon.png" className="w-8 h-8" alt="" />
            <span className="text-xl font-bold">HTP</span>
          </a>
        </Link>
        <div className="flex items-center gap-4">
          <Link href={`/${basePath}/notifications`}>
            <a className="relative align-middle transition duration-150 text-primary-600 focus:outline-none hover:text-primary-500 focus:text-primary-700">
              <BellIcon className="w-6 h-6" />
              <span className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-neutral-900" />
            </a>
          </Link>
          <Link href={`/${basePath}/account`}>
            <a className="overflow-hidden transition duration-150 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 ring-offset-2 ring-offset-white dark:ring-offset-neutral-900">
              <Avatar initials={basePath[0]} size="md" />
            </a>
          </Link>
        </div>
      </header>
      <List className="flex-1 px-3 overflow-y-auto">
        {links.map(({ href, text, icon: Icon }, i) => (
          <ListItem className="px-3 py-2 rounded-md" component={NavLink} href={href} key={i}>
            <ListItemStart>
              <Icon className="w-6 h-6 opacity-60" />
            </ListItemStart>
            <ListItemContent>
              <span className="text-sm font-semibold opacity-75">{text}</span>
            </ListItemContent>
          </ListItem>
        ))}
      </List>
      <List className="pt-1 pb-4 mx-3">
        <ListItem className="w-full !px-3 py-2 rounded-md gap-4 hover:bg-neutral-100 focus:bg-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700" component={Button} onClick={signOut}>
          <ListItemStart>
            <LogoutIcon className="w-6 h-6 opacity-60" />
          </ListItemStart>
          <ListItemContent>
            <span className="text-sm font-semibold text-left opacity-75">Sign out</span>
          </ListItemContent>
        </ListItem>
      </List>
    </aside>
  );
}
