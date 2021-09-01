import cx from 'classnames';

export default function MasterView({ children, className, title }) {
  return (
    <section className="flex flex-col flex-grow-0 w-1/3 border-r dark:bg-neutral-900 dark:text-white dark:border-neutral-700">
      <header className="flex items-center flex-shrink-0 px-8 pt-8 pb-6">{title && <h1 className="text-3xl font-bold">{title}</h1>}</header>
      <div className={cx('flex-1 overflow-y-auto', className)}>{children}</div>
    </section>
  );
}
