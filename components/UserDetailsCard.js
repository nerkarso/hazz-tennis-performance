import { Avatar, Button } from '@/elements';
import { MailIcon } from '@heroicons/react/outline';
import cx from 'classnames';
import Link from 'next/link';

export default function UserDetailsCard({ className, showDetailsUrl, user }) {
  if (user) {
    const { email, first_name, image_url, last_name } = user;

    return (
      <div className={cx('p-4 border rounded-lg md:gap-4 md:inline-flex dark:border-neutral-700', className)}>
        <Avatar src={image_url} initials={first_name[0]} size="3xl" />
        <div className="mt-2 md:mt-0">
          <h1 className="text-xl font-bold truncate">
            {first_name} {last_name}
          </h1>
          <div className="flex items-center gap-1 mb-2 truncate text-neutral-600 dark:text-neutral-400">
            <MailIcon className="w-5 h-5" />
            <span>{email}</span>
          </div>
          {showDetailsUrl && (
            <Link href={showDetailsUrl} passHref>
              <Button component="a" color="primary" variant="solid" size="sm">
                Show details
              </Button>
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={cx('p-4 border rounded-lg md:gap-4 md:inline-flex dark:border-neutral-700', className)}>
      <div className="flex-shrink-0 w-16 h-16 rounded-full dark:bg-neutral-800 bg-neutral-100"></div>
      <div className="flex flex-col flex-1 gap-2">
        <h1 className="w-1/2 h-6 rounded-md dark:bg-neutral-800 bg-neutral-100"></h1>
        <p className="w-2/3 h-4 rounded-md dark:bg-neutral-800 bg-neutral-100"></p>
        <div className="w-24 h-8 rounded-md dark:bg-neutral-800 bg-neutral-100"></div>
      </div>
    </div>
  );
}
