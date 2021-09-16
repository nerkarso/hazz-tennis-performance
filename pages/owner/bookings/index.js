import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import BookingsTable from '@/components/BookingsTable';
import DataTableContainer from '@/components/DataTableContainer';
import OwnerSidebar from '@/components/OwnerSidebar';
import { useBookings } from '@/hooks';

Bookings.title = 'Bookings';

export default function Bookings() {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <AdminContent header="Bookings">
        <DataTableContainer
          cols={7}
          gridTemplateColumns="12rem 1fr 1fr 1fr 6rem 8rem 6rem"
          hook={useBookings}
          query={{
            sort: { created_at: -1 },
          }}>
          {(data) => (
            <BookingsTable
              cols={['date_time', 'client_link', 'coach_link', 'location_link', 'booking_status', 'duration']}
              gridTemplateColumns="12rem 1fr 1fr 1fr 6rem 8rem 6rem"
              rows={data}
              enableEdit
              enableDelete
            />
          )}
        </DataTableContainer>
      </AdminContent>
    </AdminLayout>
  );
}
