import BookingEditContainer from '@/components/BookingEditContainer';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import OwnerSidebar from '@/components/OwnerSidebar';

BookingEdit.title = 'Edit booking';

export default function BookingEdit({ bookingId }) {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="Edit booking">
        <BookingEditContainer bookingId={bookingId} />
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
