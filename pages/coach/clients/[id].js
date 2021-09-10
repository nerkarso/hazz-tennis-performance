import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import CoachSidebar from '@/components/CoachSidebar';
import { EmptyStateTitle, EmptyStateView } from '@/elements';

ClientDetails.title = 'Client details';

export default function ClientDetails() {
  return (
    <AdminLayout sidebar={<CoachSidebar />}>
      <AdminContent header="Client details">
        <EmptyStateView>
          <EmptyStateTitle>Nothing here</EmptyStateTitle>
        </EmptyStateView>
      </AdminContent>
    </AdminLayout>
  );
}
