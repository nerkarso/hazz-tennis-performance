import { ActiveLink } from '@/elements';
import cx from 'classnames';

export default function NavLink({ className, children, exact, href, ...props }) {
  return (
    <ActiveLink
      href={href}
      exact={exact}
      activeClassName="bg-primary-100 !text-primary-700 hover:!bg-primary-200 focus:!bg-primary-200 dark:bg-primary-900 dark:hover:!bg-primary-800 dark:focus:!bg-primary-700 dark:!text-primary-100">
      <a
        className={cx(
          'flex items-center gap-4 pr-16 transition duration-150 hover:bg-neutral-100 focus:bg-neutral-200 focus:outline-none dark:hover:bg-neutral-800 dark:focus:bg-neutral-700',
          className,
        )}
        {...props}>
        {children}
      </a>
    </ActiveLink>
  );
}
