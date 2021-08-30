import AccountLayout from '@/components/AccountLayout';
import { Button, FormGroup, Input } from '@/elements';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

ForgotPassword.title = 'Forgot password';

export default function ForgotPassword() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {};

  return (
    <AccountLayout title="Forgot password">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormGroup htmlFor="email" label="Email" errors={errors.email}>
          <Input
            type="email"
            id="email"
            {...register('email', {
              required: 'Required',
            })}
          />
        </FormGroup>
        <Button type="submit" color="primary" variant="solid">
          Next
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
