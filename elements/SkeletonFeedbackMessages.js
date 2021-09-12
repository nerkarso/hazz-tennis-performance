import cx from 'classnames';

export default function SkeletonFeedbackMessages({ animate }) {
  return (
    <div className="relative">
      <div
        className={cx('flex flex-col gap-3', {
          'animate-pulse': animate,
        })}>
        <div className="flex gap-2">
          <div className="flex-shrink-0 rounded-full w-14 h-14 bg-neutral-100 dark:bg-neutral-800"></div>
          <div className="w-1/2 h-16 rounded-xl bg-neutral-100 dark:bg-neutral-800"></div>
        </div>
        <div className="flex gap-2">
          <div className="flex-shrink-0 rounded-full w-14 h-14 bg-neutral-100 dark:bg-neutral-800"></div>
          <div className="w-2/5 h-16 rounded-xl bg-neutral-100 dark:bg-neutral-800"></div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-white dark:from-neutral-900 to-transparent"></div>
    </div>
  );
}
