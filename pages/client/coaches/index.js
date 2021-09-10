import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import ClientSidebar from '@/components/ClientSidebar';
import { EmptyStateTitle, EmptyStateView } from '@/elements';

Coaches.title = 'Coaches';

export default function Coaches() {
  return (
    <AdminLayout sidebar={<ClientSidebar />}>
      <AdminContent header="Coaches">
        <EmptyStateView>
          <EmptyStateTitle>Nothing here</EmptyStateTitle>
        </EmptyStateView>
      </AdminContent>
    </AdminLayout>
  );
}
