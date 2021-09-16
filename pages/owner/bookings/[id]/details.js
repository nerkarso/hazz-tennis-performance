import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import BookingDetailsForm from '@/components/BookingDetailsForm';
import FeedbackMessages from '@/components/FeedbackMessages';
import FeedbackMessagesContainer from '@/components/FeedbackMessagesContainer';
import OwnerFeedbackNewForm from '@/components/OwnerFeedbackNewForm';
import OwnerSidebar from '@/components/OwnerSidebar';
import TotalFeesCard from '@/components/TotalFeesCard';
import UserDetailsCard from '@/components/UserDetailsCard';
import { Button, DataFormContainer, SidePaneHeading, TwoPaneView } from '@/elements';
import { useBooking } from '@/hooks';
import { useState } from 'react';

BookingDetails.title = 'Booking details';

export default function BookingDetails({ bookingId }) {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
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
                  <UserDetailsCard user={data?.client} showDetailsUrl={`/owner/clients/${data?.client?._id}`} className="w-full mb-6" />
                  <SidePaneHeading>Coach</SidePaneHeading>
                  <UserDetailsCard user={data?.coach} showDetailsUrl={`/client/coaches/${data?.coach?._id}`} className="w-full mb-6" />
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
        {({ _id, replies, ...data }) => (
          <>
            <FeedbackReplyView feedbackId={_id} />
            <FeedbackMessages feedbackId={_id} items={[data, ...replies]} />
          </>
        )}
      </FeedbackMessagesContainer>
    </section>
  );
}

function FeedbackReplyView({ feedbackId }) {
  const [isFormShown, setIsFormShown] = useState(false);

  return (
    <div className="mb-6">
      {isFormShown ? (
        <OwnerFeedbackNewForm feedbackId={feedbackId} onCancel={() => setIsFormShown(false)} />
      ) : (
        <Button type="button" onClick={() => setIsFormShown(true)} color="neutral" variant="solid">
          Add reply
        </Button>
      )}
    </div>
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
