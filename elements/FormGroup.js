import { FormLabel } from '@/elements';

export default function FormGroup({ children, className, errors, htmlFor, label }) {
  return (
    <div className={['relative flex flex-col gap-1', className].join(' ').trim()}>
      <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
      {children}
      {errors && <span className="absolute right-0 text-sm text-red-600 dark:text-red-400">{errors.message}</span>}
    </div>
  );
}
