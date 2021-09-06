import { EmptyStateTitle, EmptyStateView, SkeletonTable } from '@/elements';
import { useBookings } from '@/hooks';

export default function BookingsTableContainer({ children, query }) {
  const { data, error, isError, isLoading } = useBookings(query);

  if (isLoading) return <SkeletonTable cols={7} animate />;

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

  if (data?.length > 0) {
    return children(data);
  }

  return <SkeletonTable cols={7} />;
}
