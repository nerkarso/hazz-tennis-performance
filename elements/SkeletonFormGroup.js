import cx from 'classnames';

export default function SkeletonFormGroup({ animate }) {
  return (
    <div className={cx('flex items-center gap-4', { 'animate-pulse': animate })}>
      <span className="flex-shrink w-1/3 h-5 rounded bg-neutral-100 dark:bg-neutral-800"></span>
      <span className="flex-grow flex-shrink-0 w-2/3 h-10 rounded-md bg-neutral-100 dark:bg-neutral-800"></span>
    </div>
  );
}
