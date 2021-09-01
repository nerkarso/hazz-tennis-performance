import ClientBookingsTable from '@/components/ClientBookingsTable';
import ClientSidebar from '@/components/ClientSidebar';
import DashboardContent from '@/components/DashboardContent';
import DashboardGreeting from '@/components/DashboardGreeting';
import DashboardLayout from '@/components/DashboardLayout';

Dashboard.title = 'Dashboard';

export default function Dashboard() {
  return (
    <DashboardLayout sidebar={<ClientSidebar />}>
      <DashboardContent header={<DashboardGreeting firstName="Maria" lastName="Sharapova" role="Client" />}>
        <RecentBookingsSection />
      </DashboardContent>
    </DashboardLayout>
  );
}

function RecentBookingsSection() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold">Recent bookings</h1>
      <ClientBookingsTable rows={Array.from(Array(3))} />
    </section>
  );
}
