import CoachBookingsTable from '@/components/CoachBookingsTable';
import CoachSidebar from '@/components/CoachSidebar';
import DashboardContent from '@/components/DashboardContent';
import DashboardGreeting from '@/components/DashboardGreeting';
import DashboardLayout from '@/components/DashboardLayout';

Dashboard.title = 'Dashboard';

export default function Dashboard() {
  return (
    <DashboardLayout sidebar={<CoachSidebar />}>
      <DashboardContent header={<DashboardGreeting firstName="Roger" lastName="Federer" role="Coach" />}>
        <ScheduleSection />
      </DashboardContent>
    </DashboardLayout>
  );
}

function ScheduleSection() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold">Schedule</h1>
      <CoachBookingsTable rows={Array.from(Array(6))} />
    </section>
  );
}
