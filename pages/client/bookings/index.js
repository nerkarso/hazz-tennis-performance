import ClientBookingsTable from '@/components/ClientBookingsTable';
import ClientSidebar from '@/components/ClientSidebar';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';

Bookings.title = 'Bookings';

export default function Bookings() {
  return (
    <DashboardLayout sidebar={<ClientSidebar />}>
      <DashboardContent header="Bookings">
        <ClientBookingsTable rows={Array.from(Array(10))} />
      </DashboardContent>
    </DashboardLayout>
  );
}
