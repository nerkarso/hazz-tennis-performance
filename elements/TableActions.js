import cx from 'classnames';

export default function TableActions({ children, className }) {
  return <div className={cx('py-3 px-2 flex items-center justify-end gap-2', className)}>{children}</div>;
}
