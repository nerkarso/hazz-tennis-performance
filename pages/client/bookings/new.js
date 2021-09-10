import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import ClientBookingNewForm from '@/components/ClientBookingNewForm';
import ClientSidebar from '@/components/ClientSidebar';

BookingNew.title = 'New booking';

export default function BookingNew() {
  return (
    <AdminLayout sidebar={<ClientSidebar />}>
      <AdminContent header="New booking">
        <ClientBookingNewForm />
      </AdminContent>
    </AdminLayout>
  );
}
