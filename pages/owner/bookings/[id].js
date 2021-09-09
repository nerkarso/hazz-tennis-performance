import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import DataFormContainer from '@/components/DataFormContainer';
import OwnerBookingEditForm from '@/components/OwnerBookingEditForm';
import OwnerSidebar from '@/components/OwnerSidebar';
import TotalFeesCard from '@/components/TotalFeesCard';
import UserDetailsCard from '@/components/UserDetailsCard';
import { EmptyStateTitle, EmptyStateView, SidePaneHeading, TwoPaneView } from '@/elements';
import { useBooking } from '@/hooks';

BookingEdit.title = 'Edit booking';

export default function BookingEdit({ bookingId }) {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="Edit booking">
        <DataFormContainer hook={useBooking} id={bookingId} rows={6}>
          {(data) => (
            <TwoPaneView
              leftPane={<OwnerBookingEditForm data={data} />}
              rightPane={
                <>
                  <SidePaneHeading>Total fees</SidePaneHeading>
                  <TotalFeesCard amount={data?.total_fees} className="w-full mb-6" />
                  <SidePaneHeading>Client</SidePaneHeading>
                  {data?.client ? (
                    <UserDetailsCard user={data?.client} showDetailsUrl={`/owner/clients/${data?.client?._id}`} className="w-full mb-6" />
                  ) : (
                    <EmptyStateView>
                      <EmptyStateTitle>No client available</EmptyStateTitle>
                    </EmptyStateView>
                  )}
                  <SidePaneHeading>Coach</SidePaneHeading>
                  {data?.coach ? (
                    <UserDetailsCard user={data?.coach} showDetailsUrl={`/owner/coaches/${data?.coach?._id}`} className="w-full mb-6" />
                  ) : (
                    <EmptyStateView>
                      <EmptyStateTitle>No coach available</EmptyStateTitle>
                    </EmptyStateView>
                  )}
                </>
              }
            />
          )}
        </DataFormContainer>
      </DashboardContent>
    </DashboardLayout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  return {
    props: {
      bookingId: id,
    },
  };
}
