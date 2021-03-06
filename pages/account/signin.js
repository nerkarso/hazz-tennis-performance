import AccountLayout from '@/components/AccountLayout';
import { Button, FormGroup, Input, SkeletonButton } from '@/elements';
import { useActivityCreate, useUserAuth } from '@/hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

SignIn.title = 'Sign in';

export default function SignIn() {
  const router = useRouter();
  const activity = useActivityCreate();
  const { isLoading, mutate } = useUserAuth();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit = ({ email, password }) => {
    mutate(
      {
        email: email,
        password: password,
      },
      {
        onSuccess: (data) => {
          if (data?.error) {
            toast.error(data.error);
            // Log activity
            if (data?.status === 401) {
              activity.mutate({
                action: 'SIGN_IN',
                status: -1,
                user: data?._id,
              });
            }
          } else {
            router.replace(`/${data?.role}/dashboard`);
            // Log activity
            activity.mutate({
              action: 'SIGN_IN',
              user: data?._id,
            });
          }
        },
      },
    );
  };

  useEffect(() => {
    if (router?.query?.error === 'unauthorized') {
      toast.error('You are not authorized, please sign in');
    }
    if (router?.query?.error === 'forbidden') {
      toast.error('You are forbidden to access resource');
    }
  }, [router]);

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
        {isLoading ? (
          <SkeletonButton animate>Authenticating...</SkeletonButton>
        ) : (
          <Button type="submit" color="primary" variant="solid">
            Sign in
          </Button>
        )}
      </form>
      <hr className="my-6 dark:border-neutral-600" />
      <p className="mb-1">
        <Link href="/account/reset-password">
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
