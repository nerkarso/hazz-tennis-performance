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
        <FormGroup htmlFor="firstName" label="First name" errors={errors.firstName}>
          <Input
            type="text"
            id="firstName"
            {...register('firstName', {
              required: 'Required',
            })}
          />
        </FormGroup>
        <FormGroup htmlFor="lastName" label="Last name" errors={errors.lastName}>
          <Input
            type="text"
            id="lastName"
            {...register('lastName', {
              required: 'Required',
            })}
          />
        </FormGroup>
        <FormGroup htmlFor="email" label="Email" errors={errors.email}>
          <Input
            type="email"
            id="email"
            {...register('email', {
              required: 'Required',
            })}
          />
        </FormGroup>
        <FormGroup htmlFor="password" label="Password" errors={errors.password}>
          <Input
            type="password"
            id="password"
            {...register('password', {
              required: 'Required',
            })}
          />
        </FormGroup>
        <Button type="submit" variant="primary">
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
