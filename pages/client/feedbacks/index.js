import ClientSidebar from '@/components/ClientSidebar';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import { EmptyStateTitle, EmptyStateView } from '@/elements';

Feedbacks.title = 'Feedbacks';

export default function Feedbacks() {
  return (
    <DashboardLayout sidebar={<ClientSidebar />}>
      <DashboardContent header="Feedbacks">
        <EmptyStateView>
          <EmptyStateTitle>Nothing here</EmptyStateTitle>
        </EmptyStateView>
      </DashboardContent>
    </DashboardLayout>
  );
}
