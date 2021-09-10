import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import BookingsTable from '@/components/BookingsTable';
import ButtonNewResource from '@/components/ButtonNewResource';
import ClientSidebar from '@/components/ClientSidebar';
import DataTableContainer from '@/components/DataTableContainer';
import { useBookings } from '@/hooks';

Bookings.title = 'Bookings';

export default function Bookings() {
  return (
    <AdminLayout sidebar={<ClientSidebar />}>
      <AdminContent header="Bookings" toolbar={<ButtonNewResource>New booking</ButtonNewResource>}>
        <DataTableContainer
          cols={7}
          hook={useBookings}
          query={{
            sort: { created_at: -1 },
          }}>
          {(data) => (
            <BookingsTable
              cols={['date_time', 'coach_link', 'location_link', 'booking_status', 'payment_status', 'total_fees']}
              gridTemplateColumns="12rem 1fr 1fr 6rem 9rem 6rem 8rem"
              rows={data}
              enableDelete
              enableEdit
            />
          )}
        </DataTableContainer>
      </AdminContent>
    </AdminLayout>
  );
}
