import AccountLayout from '@/components/AccountLayout';
import { Button, FormGroup, Input } from '@/elements';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

SignUp.title = 'Sign up';

export default function SignUp() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {};

  return (
    <AccountLayout title="Create account">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormGroup htmlFor="firstName" label="First name" error={errors.firstName}>
          <Input
            type="text"
            id="firstName"
            error={errors.firstName}
            {...register('firstName', {
              required: true,
            })}
          />
        </FormGroup>
        <FormGroup htmlFor="lastName" label="Last name" error={errors.lastName}>
          <Input
            type="text"
            id="lastName"
            error={errors.lastName}
            {...register('lastName', {
              required: true,
            })}
          />
        </FormGroup>
        <FormGroup htmlFor="email" label="Email" error={errors.email}>
          <Input
            type="email"
            id="email"
            error={errors.email}
            {...register('email', {
              required: true,
            })}
          />
        </FormGroup>
        <FormGroup htmlFor="password" label="Password" error={errors.password}>
          <Input
            type="password"
            id="password"
            error={errors.password}
            {...register('password', {
              required: true,
            })}
          />
        </FormGroup>
        <Button type="submit" color="primary" variant="solid">
          Sign up
        </Button>
      </form>
      <hr className="my-6 dark:border-neutral-600" />
      <p>
        <Link href="/account/signin">
          <a className="text-sm link">Back to Sign in</a>
        </Link>
      </p>
    </AccountLayout>
  );
}
