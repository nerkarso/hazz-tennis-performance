import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import ClientSidebar from '@/components/ClientSidebar';
import { SkeletonTable } from '@/elements';

Courts.title = 'Courts';

export default function Courts() {
  return (
    <AdminLayout sidebar={<ClientSidebar />}>
      <AdminContent header="Courts">
        <SkeletonTable cols={4} />
      </AdminContent>
    </AdminLayout>
  );
}
