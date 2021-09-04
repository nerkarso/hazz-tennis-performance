import { FormGroup, Input } from '@/elements';
import cx from 'classnames';
import { createContext, useContext } from 'react';
import { useForm } from 'react-hook-form';

const UserFormContext = createContext();

export default function UserForm({ children, className, onSubmit }) {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  return (
    <UserFormContext.Provider value={{ errors, register }}>
      <form onSubmit={handleSubmit(onSubmit)} className={cx('flex flex-col flex-1 gap-4', className)}>
        {children}
      </form>
    </UserFormContext.Provider>
  );
}

function useUserForm() {
  return useContext(UserFormContext);
}

export function UserFormImage(props) {
  const { errors, register } = useUserForm();

  return (
    <FormGroup htmlFor="image_url" label="Image URL" error={errors.image_url} inline>
      <Input type="url" id="image_url" className="flex-1" error={errors.image_url} {...register('image_url')} {...props} />
    </FormGroup>
  );
}

export function UserFormFirstName(props) {
  const { errors, register } = useUserForm();

  return (
    <FormGroup htmlFor="first_name" label="First name" error={errors.first_name} inline>
      <Input
        type="text"
        id="first_name"
        className="flex-1"
        error={errors.first_name}
        {...register('first_name', {
          required: true,
        })}
        {...props}
      />
    </FormGroup>
  );
}

export function UserFormLastName(props) {
  const { errors, register } = useUserForm();

  return (
    <FormGroup htmlFor="last_name" label="Last name" error={errors.last_name} inline>
      <Input
        type="text"
        id="last_name"
        className="flex-1"
        error={errors.last_name}
        {...register('last_name', {
          required: true,
        })}
        {...props}
      />
    </FormGroup>
  );
}

export function UserFormEmail(props) {
  const { errors, register } = useUserForm();

  return (
    <FormGroup htmlFor="email" label="Email" error={errors.email} inline>
      <Input
        type="email"
        id="email"
        className="flex-1"
        error={errors.email}
        {...register('email', {
          required: true,
        })}
        {...props}
      />
    </FormGroup>
  );
}

export function UserFormPassword(props) {
  const { errors, register } = useUserForm();

  return (
    <FormGroup htmlFor="password" label="Password" error={errors.password} inline>
      <Input
        type="password"
        id="password"
        className="flex-1"
        error={errors.password}
        {...register('password', {
          required: true,
        })}
        {...props}
      />
    </FormGroup>
  );
}

export function UserFormPhone(props) {
  const { errors, register } = useUserForm();

  return (
    <FormGroup htmlFor="phone" label="Phone" error={errors.phone} inline>
      <Input type="text" id="phone" className="flex-1" error={errors.phone} {...register('phone')} {...props} />
    </FormGroup>
  );
}

export function UserFormAddress(props) {
  const { errors, register } = useUserForm();

  return (
    <FormGroup htmlFor="address" label="Address" error={errors.address} inline>
      <Input type="text" id="address" className="flex-1" error={errors.address} {...register('address')} {...props} />
    </FormGroup>
  );
}
