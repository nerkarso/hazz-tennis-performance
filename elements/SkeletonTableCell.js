import cx from 'classnames';

export default function SkeletonTableCell({ animate, children }) {
  return (
    <div
      className={cx('w-full h-5 rounded-md bg-neutral-100 dark:bg-neutral-800', {
        'animate-pulse': animate,
      })}>
      {children}
    </div>
  );
}
