import cx from 'classnames';

export default function TableRow({ children, className, ...props }) {
  return (
    <div className={cx('grid grid-flow-col items-center', className)} {...props}>
      {children}
    </div>
  );
}
