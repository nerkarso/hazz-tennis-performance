import BookingsTable from '@/components/BookingsTable';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import OwnerSidebar from '@/components/OwnerSidebar';

Bookings.title = 'Bookings';

export default function Bookings() {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="Bookings">
        <BookingsTable rows={Array.from(Array(12))} />
      </DashboardContent>
    </DashboardLayout>
  );
}
