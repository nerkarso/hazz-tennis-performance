import AccountLayout from '@/components/AccountLayout';
import { Button, FormGroup, Input } from '@/elements';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

SignIn.title = 'Sign in';

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {};

  return (
    <AccountLayout title="Welcome back">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
          Sign in
        </Button>
      </form>
      <hr className="my-6 dark:border-neutral-600" />
      <p className="mb-1">
        <Link href="/account/forgot-password">
          <a className="text-sm link">Forgot your password?</a>
        </Link>
      </p>
      <p>
        <Link href="/account/signup">
          <a className="text-sm link">Create account</a>
        </Link>
      </p>
    </AccountLayout>
  );
}
