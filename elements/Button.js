import cx from 'classnames';
import { forwardRef } from 'react';

function Button({ children, className, color, component: Component = 'button', icon: Icon, rounded, size, variant, ...props }, ref) {
  return (
    <Component
      ref={ref}
      className={cx(
        'inline-flex items-center justify-center flex-shrink-0 font-medium transition duration-150 focus:outline-none',
        {
          'focus:text-neutral-700 dark:focus:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-300 dark:text-neutral-400 text-neutral-500': color === 'neutral' && variant === undefined,
          'bg-black bg-opacity-10 hover:bg-opacity-20 focus:bg-opacity-30 dark:bg-white dark:bg-opacity-10 dark:text-white': color === 'neutral' && variant === 'solid',
          'bg-primary-600 hover:bg-primary-700 focus:bg-primary-800 text-white': color === 'primary' && variant === 'solid',
          'bg-red-600 hover:bg-red-700 focus:bg-red-800 text-white': color === 'red' && variant === 'solid',
          'bg-red-500 bg-opacity-0 text-red-600 dark:text-red-500 hover:bg-opacity-20 focus:bg-opacity-30': color === 'red' && variant === 'ghost',
          'h-8 px-2 text-sm rounded-md': size === 'sm',
          'h-10 px-3': !size,
          'rounded-full px-2': rounded,
          'rounded-lg': !rounded,
        },
        className,
      )}
      {...props}>
      {Icon && (
        <Icon
          className={cx('-ml-0.5 mr-1', {
            'w-4 h-4': size === 'sm',
            'w-5 h-5': !size,
          })}
        />
      )}
      {children}
    </Component>
  );
}

export default forwardRef(Button);
