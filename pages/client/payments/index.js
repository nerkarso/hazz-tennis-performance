import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import BookingsTable from '@/components/BookingsTable';
import ClientSidebar from '@/components/ClientSidebar';
import { DataTableContainer } from '@/elements';
import { useAuth, useBookings } from '@/hooks';

Payments.title = 'Payments';

export default function Payments() {
  const { accountId } = useAuth();

  return (
    <AdminLayout sidebar={<ClientSidebar />}>
      <AdminContent header="Payments">
        <DataTableContainer
          cols={8}
          gridTemplateColumns="12rem 1fr 6rem 6rem 6rem 8rem 8rem 6rem"
          hook={useBookings}
          query={{
            filter: { client: accountId },
            sort: { created_at: -1 },
          }}>
          {(data) => (
            <BookingsTable
              cols={['date_time', 'coach_link', 'booking_status', 'duration', 'total_fees', 'payment_type', 'payment_status']}
              gridTemplateColumns="12rem 1fr 6rem 6rem 6rem 8rem 8rem 6rem"
              rows={data}
              enableShow
            />
          )}
        </DataTableContainer>
      </AdminContent>
    </AdminLayout>
  );
}
