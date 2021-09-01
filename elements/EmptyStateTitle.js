import cx from 'classnames';

export default function EmptyStateTitle({ children, className }) {
  return <h1 className={cx('text-2xl font-bold', className)}>{children}</h1>;
}
