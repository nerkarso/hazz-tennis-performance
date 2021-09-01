import ClientSidebar from '@/components/ClientSidebar';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import { EmptyStateTitle, EmptyStateView } from '@/elements';

CoachDetails.title = 'Coach details';

export default function CoachDetails() {
  return (
    <DashboardLayout sidebar={<ClientSidebar />}>
      <DashboardContent header="Coach details">
        <EmptyStateView>
          <EmptyStateTitle>Nothing here</EmptyStateTitle>
        </EmptyStateView>
      </DashboardContent>
    </DashboardLayout>
  );
}
