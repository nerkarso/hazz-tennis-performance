import ClientBookingNewForm from '@/components/ClientBookingNewForm';
import ClientSidebar from '@/components/ClientSidebar';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';

BookingNew.title = 'New booking';

export default function BookingNew() {
  return (
    <DashboardLayout sidebar={<ClientSidebar />}>
      <DashboardContent header="New booking">
        <ClientBookingNewForm />
      </DashboardContent>
    </DashboardLayout>
  );
}
