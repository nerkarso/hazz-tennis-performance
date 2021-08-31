import cx from 'classnames';
import { forwardRef } from 'react';

function Input({ className, error, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={cx(
        'h-10 bg-transparent rounded-md shadow transition duration-150 placeholder-neutral-400 focus:ring-1 dark:text-white dark:placeholder-neutral-700',
        {
          'border-neutral-400 focus:ring-primary-500 focus:border-primary-500 dark:border-neutral-600': !error,
          'border-red-500 focus:ring-red-500 focus:border-red-500': error,
        },
        className,
      )}
      {...props}
    />
  );
}

export default forwardRef(Input);
