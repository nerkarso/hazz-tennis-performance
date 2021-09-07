import BookingsTable from '@/components/BookingsTable';
import BookingsTableContainer from '@/components/BookingsTableContainer';
import ClientSidebar from '@/components/ClientSidebar';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';

Bookings.title = 'Bookings';

export default function Bookings() {
  return (
    <DashboardLayout sidebar={<ClientSidebar />}>
      <DashboardContent header="Bookings">
        <BookingsTableContainer
          query={{
            sort: { created_at: -1 },
          }}>
          {(rows) => (
            <BookingsTable
              cols={['date_time', 'coach_link', 'location_link', 'booking_status', 'payment_status', 'total_fees']}
              gridTemplateColumns="12rem 1fr 1fr 6rem 9rem 6rem 8rem"
              rows={rows}
              enableDelete
              enableEdit
            />
          )}
        </BookingsTableContainer>
      </DashboardContent>
    </DashboardLayout>
  );
}
