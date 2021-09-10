import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import ClientSidebar from '@/components/ClientSidebar';
import { EmptyStateTitle, EmptyStateView } from '@/elements';

CoachDetails.title = 'Coach details';

export default function CoachDetails() {
  return (
    <AdminLayout sidebar={<ClientSidebar />}>
      <AdminContent header="Coach details">
        <EmptyStateView>
          <EmptyStateTitle>Nothing here</EmptyStateTitle>
        </EmptyStateView>
      </AdminContent>
    </AdminLayout>
  );
}
