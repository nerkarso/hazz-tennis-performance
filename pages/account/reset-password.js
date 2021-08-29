import AccountLayout from '@/components/AccountLayout';
import { Button, FormGroup, Input } from '@/elements';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

ResetPassword.title = 'Reset password';

export default function ResetPassword() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {};

  return (
    <AccountLayout title="Reset password">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormGroup htmlFor="password" label="New password" errors={errors.password}>
          <Input
            type="password"
            id="password"
            {...register('password', {
              required: 'Required',
            })}
          />
        </FormGroup>
        <Button type="submit" variant="primary">
          Update
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
