import cx from 'classnames';
import { forwardRef } from 'react';

function Button({ children, className, color, component: Component = 'button', size, variant, ...props }, ref) {
  return (
    <Component
      ref={ref}
      className={cx(
        'inline-flex items-center justify-center px-2 text-sm font-medium transition duration-150 rounded-md focus:outline-none',
        {
          'bg-primary-600 text-white hover:bg-primary-500 focus:bg-primary-700': color === 'primary' && variant === 'solid',
          'bg-red-500 bg-opacity-0 text-red-600 dark:text-red-500 hover:bg-opacity-20 focus:bg-opacity-30': color === 'red' && variant === 'ghost',
          'h-8': size === 'sm',
          'h-10': !size,
        },
        className,
      )}
      {...props}>
      {children}
    </Component>
  );
}

export default forwardRef(Button);
