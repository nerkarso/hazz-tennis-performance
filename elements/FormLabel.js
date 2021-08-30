import cx from 'classnames';

export default function FormLabel({ children, className, ...props }) {
  return (
    <label className={cx('text-sm font-medium text-neutral-600 dark:text-neutral-400', className)} {...props}>
      {children}
    </label>
  );
}
