import cx from 'classnames';

export default function TableRow({ children, className, ...props }) {
  return (
    <div className={cx('grid grid-flow-col gap-2 items-center border-b dark:border-neutral-700', className)} {...props}>
      {children}
    </div>
  );
}
