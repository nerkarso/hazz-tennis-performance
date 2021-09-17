import cx from 'classnames';
import { forwardRef } from 'react';

function TableRow({ children, className, component: Component = 'div', ...props }, ref) {
  return (
    <Component ref={ref} className={cx('grid grid-flow-col gap-2 items-center border-b dark:border-neutral-700', className)} {...props}>
      {children}
    </Component>
  );
}

export default forwardRef(TableRow);
