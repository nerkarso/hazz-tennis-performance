import CoachBookingsTable from '@/components/CoachBookingsTable';
import CoachSidebar from '@/components/CoachSidebar';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';

Bookings.title = 'Bookings';

export default function Bookings() {
  return (
    <DashboardLayout sidebar={<CoachSidebar />}>
      <DashboardContent header="Bookings">
        <CoachBookingsTable rows={Array.from(Array(10))} />
      </DashboardContent>
    </DashboardLayout>
  );
}
