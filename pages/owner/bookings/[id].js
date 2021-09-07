import BookingContainer from '@/components/BookingContainer';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import OwnerBookingEditForm from '@/components/OwnerBookingEditForm';
import OwnerSidebar from '@/components/OwnerSidebar';
import TotalFeesCard from '@/components/TotalFeesCard';
import UserDetailsCard from '@/components/UserDetailsCard';
import { SidePaneHeading, TwoPaneView } from '@/elements';

BookingEdit.title = 'Edit booking';

export default function BookingEdit({ bookingId }) {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="Edit booking">
        <BookingContainer bookingId={bookingId}>
          {(data) => (
            <TwoPaneView
              leftPane={<OwnerBookingEditForm booking={data} />}
              rightPane={
                <>
                  <SidePaneHeading>Total fees</SidePaneHeading>
                  <TotalFeesCard amount={data?.total_fees} className="w-full mb-6" />
                  <SidePaneHeading>Client</SidePaneHeading>
                  <UserDetailsCard user={data?.client} showDetailsUrl={`/owner/clients/${data?.client?._id}`} className="w-full mb-6" />
                  <SidePaneHeading>Coach</SidePaneHeading>
                  <UserDetailsCard user={data?.coach} showDetailsUrl={`/owner/coaches/${data?.coach?._id}`} className="w-full mb-6" />
                </>
              }
            />
          )}
        </BookingContainer>
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
