import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import BookingsTable from '@/components/BookingsTable';
import CoachSidebar from '@/components/CoachSidebar';
import DashboardGreeting from '@/components/DashboardGreeting';
import DataTableContainer from '@/components/DataTableContainer';
import { useAuth, useBookings } from '@/hooks';

Dashboard.title = 'Dashboard';

export default function Dashboard() {
  const { accountId } = useAuth();

  return (
    <AdminLayout sidebar={<CoachSidebar />}>
      <AdminContent header={<DashboardGreeting />}>
        <h1 className="mb-4 text-2xl font-bold">Schedule</h1>
        <DataTableContainer
          cols={8}
          hook={useBookings}
          query={{
            filter: { booking_status: 1, coach: accountId },
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
