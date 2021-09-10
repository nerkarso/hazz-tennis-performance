import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import CoachSidebar from '@/components/CoachSidebar';
import { EmptyStateTitle, EmptyStateView } from '@/elements';

Clients.title = 'Clients';

export default function Clients() {
  return (
    <AdminLayout sidebar={<CoachSidebar />}>
      <AdminContent header="Clients">
        <EmptyStateView>
          <EmptyStateTitle>Nothing here</EmptyStateTitle>
        </EmptyStateView>
      </AdminContent>
    </AdminLayout>
  );
}
