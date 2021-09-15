import { FormGroup, Input } from '@/elements';
import cx from 'classnames';
import { createContext, useContext } from 'react';
import { useForm } from 'react-hook-form';

const CoachingHourFormContext = createContext();

export default function CoachingHourForm({ children, className, onSubmit }) {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  return (
    <CoachingHourFormContext.Provider value={{ errors, register }}>
      <form onSubmit={handleSubmit(onSubmit)} className={cx('flex flex-col flex-1 gap-4', className)}>
        {children}
      </form>
    </CoachingHourFormContext.Provider>
  );
}

function useCoachingHourForm() {
  return useContext(CoachingHourFormContext);
}

export function CoachingHourFormDate(props) {
  const { errors, register } = useCoachingHourForm();

  return (
    <FormGroup htmlFor="date" label="Date" error={errors.date} inline>
      <Input
        type="date"
        id="date"
        className="flex-1"
        error={errors.date}
        {...register('date', {
          required: true,
        })}
        {...props}
      />
    </FormGroup>
  );
}

export function CoachingHourFormDuration(props) {
  const { errors, register } = useCoachingHourForm();

  return (
    <FormGroup htmlFor="duration" label="Duration" error={errors.duration} inline>
      <Input
        type="number"
        id="duration"
        className="flex-1"
        error={errors.duration}
        {...register('duration', {
          min: 1,
          required: true,
        })}
        {...props}
      />
    </FormGroup>
  );
}
