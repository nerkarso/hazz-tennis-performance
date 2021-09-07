import BookingContainer from '@/components/BookingContainer';
import BookingDetailsForm from '@/components/BookingDetailsForm';
import CoachSidebar from '@/components/CoachSidebar';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import TotalFeesCard from '@/components/TotalFeesCard';
import UserDetailsCard from '@/components/UserDetailsCard';
import { SidePaneHeading, TwoPaneView } from '@/elements';

BookingDetails.title = 'Booking details';

export default function BookingDetails({ bookingId }) {
  return (
    <DashboardLayout sidebar={<CoachSidebar />}>
      <DashboardContent header="Booking details">
        <BookingContainer bookingId={bookingId}>
          {(data) => (
            <TwoPaneView
              leftPane={<BookingDetailsForm booking={data} />}
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
