import cx from 'classnames';

export default function TableCell({ children, className, ...props }) {
  return (
    <div className={cx('py-3 truncate', className)} {...props}>
      {children}
    </div>
  );
}
