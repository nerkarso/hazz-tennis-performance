import { FormLabel } from '@/elements';
import cx from 'classnames';

export default function FormGroup({ children, className, errors, htmlFor, label }) {
  return (
    <div className={cx('relative flex flex-col gap-1', className)}>
      <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
      {children}
      {errors && <span className="absolute right-0 text-sm text-red-600 dark:text-red-500">{errors.message}</span>}
    </div>
  );
}
