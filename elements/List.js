import cx from 'classnames';

export default function List({ children, className }) {
  return <ul className={cx('flex flex-col gap-1', className)}>{children}</ul>;
}
