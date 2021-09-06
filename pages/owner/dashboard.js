import BookingsTable from '@/components/BookingsTable';
import BookingsTableContainer from '@/components/BookingsTableContainer';
import DashboardContent from '@/components/DashboardContent';
import DashboardGreeting from '@/components/DashboardGreeting';
import DashboardLayout from '@/components/DashboardLayout';
import OwnerSidebar from '@/components/OwnerSidebar';

Dashboard.title = 'Dashboard';

export default function Dashboard() {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header={<DashboardGreeting imageUrl="https://www.aceshowbiz.com/images/photo/novak_djokovic.jpg" firstName="Novak" lastName="Djokovic" role="Owner" />}>
        <PendingBookingsTable />
      </DashboardContent>
    </DashboardLayout>
  );
}

function PendingBookingsTable() {
  return (
    <>
      <h1 className="mb-4 text-2xl font-bold">Pending bookings</h1>
      <BookingsTableContainer
        query={{
          filter: { booking_status: 0 },
          sort: { created_at: -1 },
        }}>
        {(rows) => (
          <BookingsTable
            cols={['date_time', 'client_link', 'coach_link', 'location_link', 'payment_status', 'total_fees']}
            gridTemplateColumns="12rem 1fr 1fr 1fr 10rem 6rem 5rem"
            rows={rows}
            enableEdit
          />
        )}
      </BookingsTableContainer>
    </>
  );
}
