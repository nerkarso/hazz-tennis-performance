import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import BookingsTable from '@/components/BookingsTable';
import DashboardGreeting from '@/components/DashboardGreeting';
import OwnerSidebar from '@/components/OwnerSidebar';
import { DataTableContainer } from '@/elements';
import { useBookings } from '@/hooks';

Dashboard.title = 'Dashboard';

export default function Dashboard() {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <AdminContent header={<DashboardGreeting />}>
        <h1 className="mb-4 text-2xl font-bold">Pending bookings</h1>
        <DataTableContainer
          cols={8}
          gridTemplateColumns="12rem 1fr 1fr 1fr 10rem 6rem 6rem 5rem"
          hook={useBookings}
          query={{
            filter: { booking_status: 0 },
            sort: { created_at: -1 },
          }}>
          {(data) => (
            <BookingsTable
              cols={['date_time', 'client_link', 'coach_link', 'location_link', 'payment_status', 'duration', 'total_fees']}
              gridTemplateColumns="12rem 1fr 1fr 1fr 10rem 6rem 6rem 5rem"
              rows={data}
              enableEdit
            />
          )}
        </DataTableContainer>
      </AdminContent>
    </AdminLayout>
  );
}
