export default function FormLabel({ children, className, ...props }) {
  return (
    <label className={['text-sm font-medium text-neutral-600 dark:text-neutral-400', className].join(' ').trim()} {...props}>
      {children}
    </label>
  );
}
