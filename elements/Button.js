import cx from 'classnames';

export default function Button({ children, className, color, variant, ...props }) {
  return (
    <button
      className={cx(
        'inline-flex items-center justify-center h-10 px-2 text-sm font-medium transition duration-150 rounded-md focus:outline-none',
        {
          'bg-primary-600 text-white hover:bg-primary-500 focus:bg-primary-700': color === 'primary' && variant === 'solid',
          'bg-red-500 bg-opacity-0 text-red-600 dark:text-red-500 hover:bg-opacity-20 focus:bg-opacity-30': color === 'red' && variant === 'ghost',
        },
        className,
      )}
      {...props}>
      {children}
    </button>
  );
}
