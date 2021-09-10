import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import OwnerSidebar from '@/components/OwnerSidebar';
import UserNewForm from '@/components/UserNewForm';

ClientNew.title = 'New client';

export default function ClientNew() {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <AdminContent header="New client">
        <UserNewForm role="client" />
      </AdminContent>
    </AdminLayout>
  );
}
