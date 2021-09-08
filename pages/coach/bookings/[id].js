import BookingDetailsForm from '@/components/BookingDetailsForm';
import CoachSidebar from '@/components/CoachSidebar';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import DataFormContainer from '@/components/DataFormContainer';
import TotalFeesCard from '@/components/TotalFeesCard';
import UserDetailsCard from '@/components/UserDetailsCard';
import { SidePaneHeading, TwoPaneView } from '@/elements';
import { useBooking } from '@/hooks';

BookingDetails.title = 'Booking details';

export default function BookingDetails({ bookingId }) {
  return (
    <DashboardLayout sidebar={<CoachSidebar />}>
      <DashboardContent header="Booking details">
        <DataFormContainer hook={useBooking} id={bookingId} rows={6}>
          {(data) => (
            <TwoPaneView
              leftPane={<BookingDetailsForm data={data} />}
              rightPane={
                <>
                  <SidePaneHeading>Total fees</SidePaneHeading>
                  <TotalFeesCard amount={data?.total_fees} className="w-full mb-6" />
                  <SidePaneHeading>Client</SidePaneHeading>
                  <UserDetailsCard user={data?.client} showDetailsUrl={`/coach/clients/${data?.client?._id}`} className="w-full mb-6" />
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
