import BookingsTable from '@/components/BookingsTable';
import BookingsTableContainer from '@/components/BookingsTableContainer';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import OwnerSidebar from '@/components/OwnerSidebar';

Bookings.title = 'Bookings';

export default function Bookings() {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="Bookings">
        <BookingsTableContainer
          query={{
            sort: { created_at: -1 },
          }}>
          {(rows) => (
            <BookingsTable
              cols={['date_time', 'client_link', 'coach_link', 'location_link', 'booking_status', 'payment_status']}
              gridTemplateColumns="10rem 1fr 1fr 1fr 6rem 10rem 6rem"
              rows={rows}
              enableEdit
              enableDelete
            />
          )}
        </BookingsTableContainer>
      </DashboardContent>
    </DashboardLayout>
  );
}
