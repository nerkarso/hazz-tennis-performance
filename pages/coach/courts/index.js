import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import CoachSidebar from '@/components/CoachSidebar';
import { SkeletonTable } from '@/elements';

Courts.title = 'Courts';

export default function Courts() {
  return (
    <AdminLayout sidebar={<CoachSidebar />}>
      <AdminContent header="Courts">
        <SkeletonTable cols={4} />
      </AdminContent>
    </AdminLayout>
  );
}
