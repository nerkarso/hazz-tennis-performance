import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import BookingDetailsForm from '@/components/BookingDetailsForm';
import CoachSidebar from '@/components/CoachSidebar';
import DataFormContainer from '@/components/DataFormContainer';
import FeedbackMessages from '@/components/FeedbackMessages';
import FeedbackMessagesContainer from '@/components/FeedbackMessagesContainer';
import TotalFeesCard from '@/components/TotalFeesCard';
import UserDetailsCard from '@/components/UserDetailsCard';
import { SidePaneHeading, TwoPaneView } from '@/elements';
import { useBooking } from '@/hooks';

BookingDetails.title = 'Booking details';

export default function BookingDetails({ bookingId }) {
  return (
    <AdminLayout sidebar={<CoachSidebar />}>
      <AdminContent header="Booking details">
        <DataFormContainer hook={useBooking} id={bookingId} rows={6}>
          {(data) => (
            <TwoPaneView
              leftPane={
                <>
                  <BookingDetailsForm data={data} />
                  <FeedbackSection bookingId={bookingId} />
                </>
              }
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
      </AdminContent>
    </AdminLayout>
  );
}

function FeedbackSection({ bookingId }) {
  return (
    <section className="mt-10">
      <h2 className="mb-6 text-2xl font-bold">Feedback</h2>
      <FeedbackMessagesContainer
        query={{
          filter: { booking: bookingId },
        }}>
        {({ _id, replies, ...data }) => <FeedbackMessages feedbackId={_id} items={[data, ...replies]} />}
      </FeedbackMessagesContainer>
    </section>
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
