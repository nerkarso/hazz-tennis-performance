import AccountLayout from '@/components/AccountLayout';
import { Button, FormGroup, Input, SkeletonButton } from '@/elements';
import { useActivityCreate, useUserIdentify, useUserUpdate } from '@/hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

ResetPassword.title = 'Reset password';

export default function ResetPassword() {
  const router = useRouter();
  const [isIdentified, setIsIdentified] = useState(false);
  const userIdentify = useUserIdentify();
  const userUpdate = useUserUpdate();
  const activity = useActivityCreate();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit = ({ email, password }) => {
    if (isIdentified) {
      userUpdate.mutate(
        {
          id: userIdentify.data?._id,
          password: password,
        },
        {
          onSuccess: (data) => {
            if (data?.error) {
              toast.error(data.error);
            } else {
              router.replace('/account/signin');
              // Log activity
              activity.mutate({
                category: 'ACCOUNT',
                action: 'RESET_PASSWORD',
                status: 0,
                user: userIdentify.data?._id,
              });
            }
          },
        },
      );
    } else {
      userIdentify.mutate(
        { email: email },
        {
          onSuccess: (data) => {
            if (data?.error) {
              toast.error(data.error);
            } else {
              setIsIdentified(true);
              setTimeout(() => {
                document.getElementById('password').focus();
              });
            }
          },
        },
      );
    }
  };

  return (
    <AccountLayout title="Reset password">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormGroup htmlFor="email" label="Email" error={errors.email}>
          <Input
            type="email"
            id="email"
            error={errors.email}
            {...register('email', {
              disabled: isIdentified,
              required: true,
            })}
          />
        </FormGroup>
        {isIdentified ? (
          <>
            <FormGroup htmlFor="password" label="New password" error={errors.password}>
              <Input
                type="password"
                id="password"
                error={errors.password}
                {...register('password', {
                  required: true,
                })}
              />
            </FormGroup>
            {userUpdate.isLoading ? (
              <SkeletonButton animate>Updating...</SkeletonButton>
            ) : (
              <Button type="submit" color="primary" variant="solid">
                Update
              </Button>
            )}
          </>
        ) : (
          <>
            {userIdentify.isLoading ? (
              <SkeletonButton animate>Identifying...</SkeletonButton>
            ) : (
              <Button type="submit" color="primary" variant="solid">
                Next
              </Button>
            )}
          </>
        )}
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
