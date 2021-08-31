import { FormLabel } from '@/elements';
import cx from 'classnames';

export default function FormGroup({ children, className, error, htmlFor, inline, label }) {
  return (
    <div
      className={cx(
        'relative flex',
        {
          'flex-col gap-1': !inline,
          'items-center': inline,
        },
        className,
      )}>
      <FormLabel htmlFor={htmlFor} className={cx({ 'text-base w-1/3': inline })} error={error}>
        {label}
      </FormLabel>
      {children}
    </div>
  );
}
