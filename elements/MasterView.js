import cx from 'classnames';

export default function MasterView({ children, className, title, toolbar }) {
  return (
    <section className="flex flex-col flex-grow-0 border-r md:w-1/3 dark:border-neutral-700">
      <header className="flex items-center flex-shrink-0 px-6 pt-8 pb-6">
        {title && <h1 className="text-3xl font-bold">{title}</h1>}
        {toolbar && <div className="flex items-center gap-2 ml-auto">{toolbar}</div>}
      </header>
      <div className={cx('flex-1 overflow-y-auto', className)}>{children}</div>
    </section>
  );
}
