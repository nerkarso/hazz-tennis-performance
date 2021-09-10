import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import OwnerSidebar from '@/components/OwnerSidebar';
import UserNewForm from '@/components/UserNewForm';

CoachNew.title = 'New coach';

export default function CoachNew() {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <AdminContent header="New coach">
        <UserNewForm role="coach" />
      </AdminContent>
    </AdminLayout>
  );
}
