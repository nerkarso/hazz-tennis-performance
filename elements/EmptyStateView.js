import cx from 'classnames';

export default function EmptyStateView({ children, className, fullHeight, fullScreen }) {
  return (
    <div
      className={cx(
        'grid place-items-center dark:bg-neutral-900 dark:text-white',
        {
          'flex-1 h-screen': fullScreen,
          'flex-1 h-full': fullHeight,
        },
        className,
      )}>
      <div className="flex flex-col items-center gap-4 p-4 text-center">{children}</div>
    </div>
  );
}
