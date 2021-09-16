import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import BookingsTable from '@/components/BookingsTable';
import DataTableContainer from '@/components/DataTableContainer';
import OwnerSidebar from '@/components/OwnerSidebar';
import { useBookings } from '@/hooks';

Payments.title = 'Payments';

export default function Payments() {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <AdminContent header="Payments">
        <DataTableContainer
          cols={7}
          gridTemplateColumns="12rem 1fr 8rem 8rem 8rem 10rem 8rem"
          hook={useBookings}
          query={{
            sort: { created_at: -1 },
          }}>
          {(data) => (
            <BookingsTable
              cols={['date_time', 'client_link', 'booking_status', 'total_fees', 'payment_type', 'payment_status']}
              gridTemplateColumns="12rem 1fr 8rem 8rem 8rem 10rem 8rem"
              rows={data}
              enableEdit
              enableShow
            />
          )}
        </DataTableContainer>
      </AdminContent>
    </AdminLayout>
  );
}
