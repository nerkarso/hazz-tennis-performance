import UserEditForm from '@/components/UserEditForm';
import { Avatar, Button, DataFormContainer, SidePaneHeading, SkeletonButton, TwoPaneView } from '@/elements';
import { useAuth, useUser, useUserUpdate } from '@/hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

export default function MyAccountView() {
  const router = useRouter();
  const { accountId, signOut } = useAuth();
  const { isLoading, mutate } = useUserUpdate();

  const handleCloseAccount = () => {
    mutate(
      {
        id: accountId,
        closed: true,
      },
      {
        onSuccess: (data) => {
          if (data?.error) {
            toast.error(data.error);
          } else {
            toast.success('Account closed');
            signOut();
            router.replace('/account/signin');
          }
        },
      },
    );
  };

  return (
    <DataFormContainer hook={useUser} id={accountId} rows={6}>
      {(data) => (
        <TwoPaneView
          leftPane={
            <UserEditForm
              data={data}
              onUpdate={() => {
                toast.success('Account updated');
              }}
            />
          }
          rightPane={
            <>
              <Avatar src={data?.image_url} initials={data?.first_name[0]} size="5xl" />
              <section className="mt-4">
                <SidePaneHeading>Password</SidePaneHeading>
                <Link href="/account/reset-password" passHref>
                  <Button component="a" color="neutral" variant="solid">
                    Reset password
                  </Button>
                </Link>
              </section>
              <section className="mt-4">
                <SidePaneHeading>Account</SidePaneHeading>
                {isLoading ? (
                  <SkeletonButton className="inline-flex" animate>
                    Closing account...
                  </SkeletonButton>
                ) : (
                  <Button type="button" onClick={handleCloseAccount} color="red" variant="solid">
                    Close account
                  </Button>
                )}
              </section>
            </>
          }
        />
      )}
    </DataFormContainer>
  );
}
