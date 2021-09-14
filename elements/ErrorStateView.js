import { ExclamationCircleIcon } from '@heroicons/react/outline';
import cx from 'classnames';

export default function ErrorStateView({ children, className, fullHeight, fullScreen, inline, title }) {
  return (
    <div
      className={cx(
        'grid place-items-center',
        {
          'flex-1 h-screen': fullScreen,
          'flex-1 h-full': fullHeight,
        },
        className,
      )}>
      <div className={cx('flex items-center max-w-sm gap-3 p-4 text-center', { 'flex-col': !inline })}>
        <ExclamationCircleIcon className="w-10 h-10 text-red-600 dark:text-red-500" />
        {title && <h4 className="text-lg font-semibold leading-tight text-red-600 dark:text-red-500">{title}</h4>}
        {children && children}
      </div>
    </div>
  );
}
