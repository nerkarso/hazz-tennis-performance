import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import CoachSidebar from '@/components/CoachSidebar';
import { EmptyStateTitle, EmptyStateView } from '@/elements';

Notifications.title = 'Notifications';

export default function Notifications() {
  return (
    <AdminLayout sidebar={<CoachSidebar />}>
      <AdminContent header="Notifications">
        <EmptyStateView>
          <EmptyStateTitle>Nothing here</EmptyStateTitle>
        </EmptyStateView>
      </AdminContent>
    </AdminLayout>
  );
}
