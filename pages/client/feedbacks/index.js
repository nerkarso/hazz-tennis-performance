import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import ClientSidebar from '@/components/ClientSidebar';
import { EmptyStateTitle, EmptyStateView } from '@/elements';

Feedbacks.title = 'Feedbacks';

export default function Feedbacks() {
  return (
    <AdminLayout sidebar={<ClientSidebar />}>
      <AdminContent header="Feedbacks">
        <EmptyStateView>
          <EmptyStateTitle>Nothing here</EmptyStateTitle>
        </EmptyStateView>
      </AdminContent>
    </AdminLayout>
  );
}
