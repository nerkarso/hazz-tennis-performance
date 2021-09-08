import BookingsTable from '@/components/BookingsTable';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import DataTableContainer from '@/components/DataTableContainer';
import OwnerSidebar from '@/components/OwnerSidebar';
import { useBookings } from '@/hooks';

Bookings.title = 'Bookings';

export default function Bookings() {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="Bookings">
        <DataTableContainer
          cols={7}
          hook={useBookings}
          query={{
            sort: { created_at: -1 },
          }}>
          {(data) => (
            <BookingsTable
              cols={['date_time', 'client_link', 'coach_link', 'location_link', 'booking_status', 'payment_status']}
              gridTemplateColumns="12rem 1fr 1fr 1fr 6rem 10rem 6rem"
              rows={data}
              enableEdit
              enableDelete
            />
          )}
        </DataTableContainer>
      </DashboardContent>
    </DashboardLayout>
  );
}
