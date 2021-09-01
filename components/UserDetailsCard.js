import { Avatar, Button } from '@/elements';
import { MailIcon } from '@heroicons/react/solid';
import cx from 'classnames';
import Link from 'next/link';

export default function UserDetailsCard({ className, imageUrl, firstName, lastName, email, moreDetailsUrl }) {
  return (
    <div className={cx('p-4 border rounded-lg md:gap-4 md:inline-flex dark:border-neutral-700', className)}>
      <Avatar src={imageUrl} initials={firstName[0]} size="3xl" />
      <div className="mt-2 md:mt-0">
        <h1 className="text-xl font-bold truncate">
          {firstName} {lastName}
        </h1>
        <div className="flex items-center gap-1 mb-2 truncate text-neutral-600 dark:text-neutral-400">
          <MailIcon className="w-5 h-5" />
          <span>{email}</span>
        </div>
        <Link href={moreDetailsUrl} passHref>
          <Button component="a" color="primary" variant="solid" size="sm">
            More details
          </Button>
        </Link>
      </div>
    </div>
  );
}
