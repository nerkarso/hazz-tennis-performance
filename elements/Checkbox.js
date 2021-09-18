import cx from 'classnames';
import { forwardRef } from 'react';

function Checkbox({ className, ...props }, ref) {
  return (
    <input
      type="checkbox"
      ref={ref}
      className={cx('transition duration-150 bg-transparent rounded text-primary-600 focus:ring-primary-400 dark:text-primary-500 dark:focus:ring-offset-neutral-900')}
      {...props}
    />
  );
}

export default forwardRef(Checkbox);
