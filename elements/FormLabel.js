import cx from 'classnames';

export default function FormLabel({ children, className, error, ...props }) {
  return (
    <label
      className={cx(
        'text-sm font-medium',
        {
          'text-neutral-600 dark:text-neutral-400': !error,
          'text-red-600 dark:text-red-500': error,
        },
        className,
      )}
      {...props}>
      {children}
    </label>
  );
}
