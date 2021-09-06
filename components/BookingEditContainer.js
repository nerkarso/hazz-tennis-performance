import BookingEditForm from '@/components/BookingEditForm';
import SideSectionHeading from '@/components/SideSectionHeading';
import TotalFeesCard from '@/components/TotalFeesCard';
import UserDetailsCard from '@/components/UserDetailsCard';
import { EmptyStateTitle, EmptyStateView, SkeletonForm, TwoPaneView } from '@/elements';
import { useBooking } from '@/hooks';

export default function BookingEditContainer({ bookingId }) {
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
    const { client, coach, total_fees } = data;

    return (
      <TwoPaneView
        leftPane={<BookingEditForm booking={data} />}
        rightPane={
          <>
            <SideSectionHeading>Total fees</SideSectionHeading>
            <TotalFeesCard amount={total_fees} className="w-full mb-6" />
            <SideSectionHeading>Client</SideSectionHeading>
            <UserDetailsCard user={client} moreDetailsUrl={`/owner/clients/${client?._id}`} className="w-full mb-6" />
            <SideSectionHeading>Coach</SideSectionHeading>
            <UserDetailsCard user={coach} moreDetailsUrl={`/owner/coaches/${coach?._id}`} className="w-full mb-6" />
          </>
        }
      />
    );
  }

  return <SkeletonForm className="max-w-2xl" rows={6} />;
}
