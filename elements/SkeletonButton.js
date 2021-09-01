import cx from 'classnames';

export default function SkeletonButton({ animate, children }) {
  return (
    <div
      className={cx('flex items-center justify-center h-10 font-medium rounded-md cursor-not-allowed bg-neutral-200 text-neutral-400 dark:bg-neutral-700 dark:text-neutral-500', {
        'animate-pulse': animate,
      })}>
      {children}
    </div>
  );
}
