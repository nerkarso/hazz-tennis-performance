import cx from 'classnames';

export default function TableHead({ children, className, ...props }) {
  return (
    <header className={cx('grid grid-flow-col text-sm font-medium uppercase tracking-wide border-b dark:border-neutral-700 text-neutral-600 dark:text-neutral-400', className)} {...props}>
      {children}
    </header>
  );
}
