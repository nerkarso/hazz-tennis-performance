import cx from 'classnames';

export default function TableCell({ children, className, ...props }) {
  return (
    <div className={cx('py-3 px-2 truncate', className)} {...props}>
      {children}
    </div>
  );
}
