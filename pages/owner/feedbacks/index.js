import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import OwnerSidebar from '@/components/OwnerSidebar';
import { EmptyStateTitle, EmptyStateView } from '@/elements';

Feedbacks.title = 'Feedbacks';

export default function Feedbacks() {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <AdminContent header="Feedbacks">
        <EmptyStateView>
          <EmptyStateTitle>Nothing here</EmptyStateTitle>
        </EmptyStateView>
      </AdminContent>
    </AdminLayout>
  );
}
