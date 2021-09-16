import cx from 'classnames';

export default function TableCellIcon({ active, icon: Icon }) {
  return (
    <div
      className={cx('grid flex-shrink-0 w-10 h-10 rounded-full place-items-center', {
        'dark:bg-green-800 bg-green-100 text-green-500 dark:text-green-400': active,
        'dark:bg-neutral-800 bg-neutral-100 text-neutral-400 dark:text-neutral-600': !active,
      })}>
      <Icon className="w-6 h-6" />
    </div>
  );
}
