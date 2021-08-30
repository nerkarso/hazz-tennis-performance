export default function DetailsView({ children, className }) {
  return <section className={['flex-1 dark:bg-neutral-900 dark:text-white', className].join(' ').trim()}>{children}</section>;
}
