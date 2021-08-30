import { forwardRef } from 'react';

function Input({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={['h-10 bg-transparent border-neutral-400 rounded-md transition duration-150 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 dark:border-neutral-600', className]
        .join(' ')
        .trim()}
      {...props}
    />
  );
}

export default forwardRef(Input);