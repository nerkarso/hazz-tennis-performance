import cx from 'classnames';

export default function SkeletonList({ animate, count = 1 }) {
  const items = Array.from(Array(count));

  return (
    <div className="relative">
      <div className={cx('grid gap-3', { 'animate-pulse': animate })}>
        {items.map((_, i) => (
          <div className="flex items-center gap-2" key={i}>
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-neutral-100 dark:bg-neutral-800"></div>
            <div className="flex flex-col flex-1 gap-2">
              <span className="w-3/6 h-6 rounded-lg bg-neutral-100 dark:bg-neutral-800"></span>
              <span className="w-5/6 h-6 rounded-lg bg-neutral-100 dark:bg-neutral-800"></span>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-white dark:from-neutral-900 to-transparent"></div>
    </div>
  );
}
