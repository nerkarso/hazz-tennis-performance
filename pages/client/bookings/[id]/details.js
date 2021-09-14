import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import BookingDetailsForm from '@/components/BookingDetailsForm';
import ClientFeedbackNewForm from '@/components/ClientFeedbackNewForm';
import ClientSidebar from '@/components/ClientSidebar';
import DataFormContainer from '@/components/DataFormContainer';
import FeedbackMessages from '@/components/FeedbackMessages';
import FeedbackMessagesContainer from '@/components/FeedbackMessagesContainer';
import TotalFeesCard from '@/components/TotalFeesCard';
import UserDetailsCard from '@/components/UserDetailsCard';
import { Button, EmptyStateTitle, EmptyStateView, SidePaneHeading, TwoPaneView } from '@/elements';
import { useBooking } from '@/hooks';
import { useState } from 'react';

BookingDetails.title = 'Booking details';

export default function BookingDetails({ bookingId }) {
  return (
    <AdminLayout sidebar={<ClientSidebar />}>
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
                  <SidePaneHeading>Coach</SidePaneHeading>
                  {data?.coach ? (
                    <UserDetailsCard user={data?.coach} showDetailsUrl={`/client/coaches/${data?.coach?._id}`} className="w-full mb-6" />
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
      </AdminContent>
    </AdminLayout>
  );
}

function FeedbackSection({ bookingId }) {
  return (
    <section className="mt-10">
      <h2 className="mb-6 text-2xl font-bold">Feedback</h2>
      <FeedbackMessagesContainer
        emptyView={<FeedbackEmptyView bookingId={bookingId} />}
        query={{
          filter: { booking: bookingId },
        }}>
        {({ _id, replies, ...data }) => <FeedbackMessages feedbackId={_id} items={[data, ...replies]} />}
      </FeedbackMessagesContainer>
    </section>
  );
}

function FeedbackEmptyView({ bookingId }) {
  const [isFormShown, setIsFormShown] = useState(false);

  if (isFormShown) return <ClientFeedbackNewForm bookingId={bookingId} onCancel={() => setIsFormShown(false)} />;

  return (
    <Button type="button" onClick={() => setIsFormShown(true)} color="neutral" variant="solid">
      Write a feedback
    </Button>
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
