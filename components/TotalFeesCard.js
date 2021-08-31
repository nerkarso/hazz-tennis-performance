import cx from 'classnames';

export default function TotalFeesCard({ className, amount }) {
  return (
    <div className={cx('p-4 border rounded-lg md:gap-4 md:inline-flex dark:border-neutral-700', className)}>
      <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400">$ {amount}</h3>
    </div>
  );
}
