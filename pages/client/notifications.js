import ClientSidebar from '@/components/ClientSidebar';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import { EmptyStateTitle, EmptyStateView } from '@/elements';

Notifications.title = 'Notifications';

export default function Notifications() {
  return (
    <DashboardLayout sidebar={<ClientSidebar />}>
      <DashboardContent header="Notifications">
        <EmptyStateView>
          <EmptyStateTitle>Nothing here</EmptyStateTitle>
        </EmptyStateView>
      </DashboardContent>
    </DashboardLayout>
  );
}