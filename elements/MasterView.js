export default function MasterView({ children, className, title }) {
  return (
    <section className="flex flex-col flex-grow-0 w-1/3 border-r dark:bg-neutral-900 dark:text-white dark:border-neutral-700">
      <header className="flex items-center flex-shrink-0 h-20 px-6">{title && <h1 className="text-2xl font-bold">{title}</h1>}</header>
      <div className={['flex-1 overflow-y-auto', className].join(' ').trim()}>{children}</div>
    </section>
  );
}
