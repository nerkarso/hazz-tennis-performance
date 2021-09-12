import cx from 'classnames';
import { forwardRef } from 'react';

function Input({ className, component: Component = 'input', error, ...props }, ref) {
  return (
    <Component
      ref={ref}
      className={cx(
        'h-10 bg-transparent rounded-md shadow transition duration-150 placeholder-neutral-400 disabled:shadow-none disabled:text-black disabled:border-neutral-200 dark:disabled:text-white dark:disabled:border-neutral-700 focus:ring-1 dark:text-white dark:placeholder-neutral-700',
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
