import NotificationsCountBadge from '@/components/NotificationsCountBadge';
import { Avatar, Button, List, ListItem, ListItemContent, ListItemStart, NavLink } from '@/elements';
import { useActivityCreate, useAuth, usePath, useUserAccount } from '@/hooks';
import { BellIcon, LogoutIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function AdminSidebar({ children, links }) {
  const router = useRouter();
  const activity = useActivityCreate();
  const { basePath } = usePath();
  const { accountId, signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
    router.replace('/account/signin');
    // Log activity
    activity.mutate({
      category: 'ACCOUNT',
      action: 'SIGN_OUT',
      status: 0,
      user: accountId,
    });
  };

  return (
    <aside className="flex flex-col flex-shrink-0 border-r w-72 dark:bg-neutral-900 dark:border-neutral-700">
      <header className="flex items-center justify-between h-20 px-6">
        <Link href="/">
          <a className="flex items-center gap-3 transition duration-150 focus:outline-none focus:opacity-60">
            <img src="/img/icon.png" className="w-8 h-8" alt="" />
            <span className="text-xl font-bold">HTP</span>
          </a>
        </Link>
        <div className="flex items-center gap-4">
          <Link href={`/${basePath}/notifications`} passHref>
            <Button className="relative" color="neutral" variant="solid" rounded>
              <BellIcon className="w-6 h-6" />
              <NotificationsCountBadge />
            </Button>
          </Link>
          <Link href={`/${basePath}/account`}>
            <a className="overflow-hidden transition duration-150 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 ring-offset-2 ring-offset-white dark:ring-offset-neutral-900">
              <SidebarAvatar />
            </a>
          </Link>
        </div>
      </header>
      {children}
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
        <ListItem
          className="w-full !px-3 py-2 rounded-md gap-4 hover:bg-neutral-100 focus:bg-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
          type="button"
          component={Button}
          onClick={handleSignOut}>
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

function SidebarAvatar() {
  const { accountId } = useAuth();
  const { data, isLoading } = useUserAccount(accountId);

  if (isLoading) return <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 animate-pulse"></div>;

  if (data?._id) return <Avatar src={data?.image_url} initials={data?.first_name[0]} size="lg" />;

  return <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800"></div>;
}
