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
        <BookingsTableContainer>
          {(rows) => (
            <BookingsTable
              cols={['date_time', 'client', 'coach', 'booking_status', 'location']}
              gridTemplateColumns="14rem 1fr 1fr 6rem 1fr 10rem"
              rows={rows}
              query={{
                sort: { created_at: -1, booking_status: 0 },
              }}
              enableEdit
              enableDelete
            />
          )}
        </BookingsTableContainer>
      </DashboardContent>
    </DashboardLayout>
  );
}
