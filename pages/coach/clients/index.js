import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import CoachSidebar from '@/components/CoachSidebar';
import { SkeletonTable } from '@/elements';

Clients.title = 'Clients';

export default function Clients() {
  return (
    <AdminLayout sidebar={<CoachSidebar />}>
      <AdminContent header="Clients">
        <SkeletonTable cols={5} />
      </AdminContent>
    </AdminLayout>
  );
}
