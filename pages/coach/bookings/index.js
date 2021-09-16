import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import BookingsTable from '@/components/BookingsTable';
import CoachSidebar from '@/components/CoachSidebar';
import { DataTableContainer } from '@/elements';
import { useAuth, useBookings } from '@/hooks';

Bookings.title = 'Bookings';

export default function Bookings() {
  const { accountId } = useAuth();

  return (
    <AdminLayout sidebar={<CoachSidebar />}>
      <AdminContent header="Bookings">
        <DataTableContainer
          cols={8}
          gridTemplateColumns="12rem 1fr 1fr 6rem 9rem 6rem 6rem 5rem"
          hook={useBookings}
          query={{
            filter: { coach: accountId },
            sort: { created_at: -1 },
          }}>
          {(data) => (
            <BookingsTable
              cols={['date_time', 'client_link', 'location_link', 'booking_status', 'payment_status', 'duration', 'total_fees']}
              gridTemplateColumns="12rem 1fr 1fr 6rem 9rem 6rem 6rem 5rem"
              rows={data}
              enableShow
            />
          )}
        </DataTableContainer>
      </AdminContent>
    </AdminLayout>
  );
}
