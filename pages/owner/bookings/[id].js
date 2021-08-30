import DashboardLayout from '@/components/DashboardLayout';
import OwnerSidebar from '@/components/OwnerSidebar';

Booking.title = 'Booking';

export default function Booking() {
  return <DashboardLayout sidebar={<OwnerSidebar />}></DashboardLayout>;
}
