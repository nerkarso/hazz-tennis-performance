import cx from 'classnames';

export default function DetailsView({ children, className }) {
  return <section className={cx('flex-1 dark:bg-neutral-900 dark:text-white', className)}>{children}</section>;
}
