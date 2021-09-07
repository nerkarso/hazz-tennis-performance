import { EmptyStateTitle, EmptyStateView, SkeletonForm } from '@/elements';
import { useBooking } from '@/hooks';

export default function BookingContainer({ bookingId, children }) {
  const { data, error, isError, isLoading } = useBooking(bookingId);

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
    return children(data);
  }

  return <SkeletonForm className="max-w-2xl" rows={6} />;
}
