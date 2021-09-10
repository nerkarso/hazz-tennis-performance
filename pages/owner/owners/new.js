import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import OwnerSidebar from '@/components/OwnerSidebar';
import UserNewForm from '@/components/UserNewForm';

OwnerNew.title = 'New owner';

export default function OwnerNew() {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <AdminContent header="New owner">
        <UserNewForm role="owner" />
      </AdminContent>
    </AdminLayout>
  );
}
