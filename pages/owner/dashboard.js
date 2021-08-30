import BookingsTable from '@/components/BookingsTable';
import DashboardContent from '@/components/DashboardContent';
import DashboardGreeting from '@/components/DashboardGreeting';
import DashboardLayout from '@/components/DashboardLayout';
import OwnerSidebar from '@/components/OwnerSidebar';

Dashboard.title = 'Dashboard';

export default function Dashboard() {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header={<DashboardGreeting avatar="https://avatars.dicebear.com/api/initials/nd.svg" firstName="Novak" lastName="Djokovic" role="Owner" />}>
        <RecentBookingsSection />
      </DashboardContent>
    </DashboardLayout>
  );
}

function RecentBookingsSection() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold">Recent bookings</h1>
      <BookingsTable rows={Array.from(Array(6))} />
    </section>
  );
}
