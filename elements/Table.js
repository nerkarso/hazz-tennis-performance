import cx from 'classnames';

export default function Table({ children, className }) {
  return <div className={cx('relative', className)}>{children}</div>;
}
