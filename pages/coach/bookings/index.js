import BookingsTable from '@/components/BookingsTable';
import BookingsTableContainer from '@/components/BookingsTableContainer';
import CoachSidebar from '@/components/CoachSidebar';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';

Bookings.title = 'Bookings';

export default function Bookings() {
  return (
    <DashboardLayout sidebar={<CoachSidebar />}>
      <DashboardContent header="Bookings">
        <BookingsTableContainer
          query={{
            sort: { created_at: -1 },
          }}>
          {(rows) => (
            <BookingsTable
              cols={['date_time', 'client_link', 'location_link', 'booking_status', 'payment_status', 'total_fees']}
              gridTemplateColumns="12rem 1fr 1fr 6rem 10rem 6rem 5rem"
              rows={rows}
              enableShow
            />
          )}
        </BookingsTableContainer>
      </DashboardContent>
    </DashboardLayout>
  );
}
