import UserEditForm from '@/components/UserEditForm';
import { Avatar, EmptyStateTitle, EmptyStateView, SkeletonForm, TwoPaneView } from '@/elements';
import { useUser } from '@/hooks';

export default function UserEditContainer({ userId }) {
  const { data, error, isError, isLoading } = useUser(userId);

  if (isLoading) return <SkeletonForm className="max-w-2xl" rows={6} animate />;

  if (isError) {
    return (
      <EmptyStateView>
        <EmptyStateTitle>{error.message}</EmptyStateTitle>
      </EmptyStateView>
    );
  }

  if (data?.error) {
    return (
      <EmptyStateView>
        <EmptyStateTitle>{data?.error}</EmptyStateTitle>
      </EmptyStateView>
    );
  }

  if (data) {
    return <TwoPaneView leftPane={<UserEditForm user={data} />} rightPane={<Avatar src={data?.image_url} initials={data.first_name[0]} size="5xl" />} />;
  }

  return <SkeletonForm className="max-w-2xl" rows={6} />;
}
