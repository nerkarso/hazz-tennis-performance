import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import OwnerSidebar from '@/components/OwnerSidebar';
import { EmptyStateTitle, EmptyStateView } from '@/elements';

Notifications.title = 'Notifications';

export default function Notifications() {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <AdminContent header="Notifications">
        <EmptyStateView>
          <EmptyStateTitle>Nothing here</EmptyStateTitle>
        </EmptyStateView>
      </AdminContent>
    </AdminLayout>
  );
}
