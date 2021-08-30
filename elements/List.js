export default function List({ children, className }) {
  return <ul className={['flex flex-col gap-1', className].join(' ').trim()}>{children}</ul>;
}
