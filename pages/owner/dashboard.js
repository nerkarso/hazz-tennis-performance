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
      <BookingsTableContainer>
        {(rows) => (
          <BookingsTable
            cols={['date_time', 'client', 'coach', 'booking_status', 'location']}
            gridTemplateColumns="14rem 1fr 1fr 6rem 1fr 10rem"
            rows={rows}
            query={{
              filter: { booking_status: 0 },
              sort: { created_at: -1 },
            }}
            enableEdit
          />
        )}
      </BookingsTableContainer>
    </>
  );
}
