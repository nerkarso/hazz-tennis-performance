import { FormGroup, Input } from '@/elements';
import cx from 'classnames';
import { createContext, useContext } from 'react';
import { useForm } from 'react-hook-form';

const CourtFormContext = createContext();

export default function CourtForm({ children, className, onSubmit }) {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  return (
    <CourtFormContext.Provider value={{ errors, register }}>
      <form onSubmit={handleSubmit(onSubmit)} className={cx('flex flex-col flex-1 gap-4', className)}>
        {children}
      </form>
    </CourtFormContext.Provider>
  );
}

function useCourtForm() {
  return useContext(CourtFormContext);
}

export function CourtFormAddress(props) {
  const { errors, register } = useCourtForm();

  return (
    <FormGroup htmlFor="address" label="Address" error={errors.address} inline>
      <Input type="text" id="address" className="flex-1" error={errors.address} {...register('address')} {...props} />
    </FormGroup>
  );
}

export function CourtFormCity(props) {
  const { errors, register } = useCourtForm();

  return (
    <FormGroup htmlFor="city" label="City" error={errors.city} inline>
      <Input type="text" id="city" className="flex-1" error={errors.city} {...register('city')} {...props} />
    </FormGroup>
  );
}

export function CourtFormName(props) {
  const { errors, register } = useCourtForm();

  return (
    <FormGroup htmlFor="name" label="Name" error={errors.name} inline>
      <Input
        type="text"
        id="name"
        className="flex-1"
        error={errors.name}
        {...register('name', {
          required: true,
        })}
        {...props}
      />
    </FormGroup>
  );
}
