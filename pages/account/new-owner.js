import AccountLayout from '@/components/AccountLayout';
import { Button, FormGroup, Input, SkeletonButton } from '@/elements';
import { useUserCreate } from '@/hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

CreateOwnerAccount.title = 'Create owner account';

export default function CreateOwnerAccount() {
  const router = useRouter();
  const { isLoading, mutate } = useUserCreate();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit = ({ firstName, lastName, email, password }) => {
    mutate(
      {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        role: 'owner',
      },
      {
        onSuccess: (data) => {
          if (data?.error) {
            toast.error(data.error);
          } else {
            router.replace('/owner/dashboard');
          }
        },
      },
    );
  };

  return (
    <AccountLayout title="Create owner account">
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
        {isLoading ? (
          <SkeletonButton animate>Creating account...</SkeletonButton>
        ) : (
          <Button type="submit" color="primary" variant="solid">
            Create
          </Button>
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
