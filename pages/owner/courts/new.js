import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import CourtNewForm from '@/components/CourtNewForm';
import OwnerSidebar from '@/components/OwnerSidebar';

CourtNew.title = 'New court';

export default function CourtNew() {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <AdminContent header="New court">
        <CourtNewForm />
      </AdminContent>
    </AdminLayout>
  );
}
