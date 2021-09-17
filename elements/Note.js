import { InformationCircleIcon } from '@heroicons/react/outline';
import cx from 'classnames';

export default function Note({ children, className, color }) {
  return (
    <div
      className={cx(
        'flex items-center gap-2 p-2 rounded-md bg-opacity-20',
        {
          'text-yellow-600 dark:text-yellow-400 bg-yellow-500': color === 'yellow',
          'text-neutral-600 dark:text-neutral-400 bg-neutral-500': !color,
        },
        className,
      )}>
      <InformationCircleIcon className="w-5 h-5" />
      <p>{children}</p>
    </div>
  );
}
