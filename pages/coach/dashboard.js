import BookingsTable from '@/components/BookingsTable';
import CoachSidebar from '@/components/CoachSidebar';
import DashboardContent from '@/components/DashboardContent';
import DashboardGreeting from '@/components/DashboardGreeting';
import DashboardLayout from '@/components/DashboardLayout';
import DataTableContainer from '@/components/DataTableContainer';
import { useBookings } from '@/hooks';

Dashboard.title = 'Dashboard';

export default function Dashboard() {
  return (
    <DashboardLayout sidebar={<CoachSidebar />}>
      <DashboardContent header={<DashboardGreeting firstName="Roger" lastName="Federer" role="Coach" />}>
        <h1 className="mb-4 text-2xl font-bold">Schedule</h1>
        <DataTableContainer
          cols={7}
          hook={useBookings}
          query={{
            filter: { booking_status: 1 },
            sort: { created_at: -1 },
          }}>
          {(data) => (
            <BookingsTable
              cols={['date_time', 'client_link', 'location_link', 'booking_status', 'payment_status', 'total_fees']}
              gridTemplateColumns="12rem 1fr 1fr 6rem 10rem 6rem 5rem"
              rows={data}
              enableShow
            />
          )}
        </DataTableContainer>
      </DashboardContent>
    </DashboardLayout>
  );
}
