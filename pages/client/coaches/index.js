import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import ClientSidebar from '@/components/ClientSidebar';
import { SkeletonTable } from '@/elements';

Coaches.title = 'Coaches';

export default function Coaches() {
  return (
    <AdminLayout sidebar={<ClientSidebar />}>
      <AdminContent header="Coaches">
        <SkeletonTable cols={5} />
      </AdminContent>
    </AdminLayout>
  );
}
