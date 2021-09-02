import cx from 'classnames';

export default function SkeletonForm({ animate, className, rows = 1 }) {
  return (
    <div className={cx('relative', className)}>
      <div
        className={cx('flex flex-col gap-4', {
          'animate-pulse': animate,
        })}>
        {Array.from(Array(rows)).map((_, i) => (
          <div className="flex items-center gap-4" key={i}>
            <span className="w-1/3 h-5 rounded-md bg-neutral-100 dark:bg-neutral-800"></span>
            <span className="flex-1 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800"></span>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-white dark:from-neutral-900 to-transparent"></div>
    </div>
  );
}
