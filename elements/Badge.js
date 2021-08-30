import cx from 'classnames';

export default function Badge({ children, className, color, ...props }) {
  return (
    <span
      className={cx(
        'px-2 py-1 text-xs font-semibold leading-tight rounded-full',
        {
          'text-green-600 bg-green-500/20 dark:text-green-400': color === 'green',
          'text-red-600 bg-red-500/20 dark:text-red-400': color === 'red',
          'text-yellow-600 bg-yellow-500/20 dark:text-yellow-400': color === 'yellow',
        },
        className,
      )}
      {...props}>
      {children}
    </span>
  );
}
