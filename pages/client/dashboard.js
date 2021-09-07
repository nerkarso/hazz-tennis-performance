import BookingsTable from '@/components/BookingsTable';
import BookingsTableContainer from '@/components/BookingsTableContainer';
import ClientSidebar from '@/components/ClientSidebar';
import DashboardContent from '@/components/DashboardContent';
import DashboardGreeting from '@/components/DashboardGreeting';
import DashboardLayout from '@/components/DashboardLayout';

Dashboard.title = 'Dashboard';

export default function Dashboard() {
  return (
    <DashboardLayout sidebar={<ClientSidebar />}>
      <DashboardContent header={<DashboardGreeting firstName="Maria" lastName="Sharapova" role="Client" />}>
        <h1 className="mb-4 text-2xl font-bold">Schedule</h1>
        <BookingsTableContainer
          query={{
            filter: { booking_status: 1 },
            sort: { created_at: -1 },
          }}>
          {(rows) => (
            <BookingsTable
              cols={['date_time', 'coach_link', 'location_link', 'booking_status', 'payment_status', 'total_fees']}
              gridTemplateColumns="12rem 1fr 1fr 6rem 9rem 6rem 8rem"
              rows={rows}
              enableEdit
              enableShow
            />
          )}
        </BookingsTableContainer>
      </DashboardContent>
    </DashboardLayout>
  );
}
