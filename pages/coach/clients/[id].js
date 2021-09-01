import CoachSidebar from '@/components/CoachSidebar';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import { EmptyStateTitle, EmptyStateView } from '@/elements';

ClientDetails.title = 'Client details';

export default function ClientDetails() {
  return (
    <DashboardLayout sidebar={<CoachSidebar />}>
      <DashboardContent header="Client details">
        <EmptyStateView>
          <EmptyStateTitle>Nothing here</EmptyStateTitle>
        </EmptyStateView>
      </DashboardContent>
    </DashboardLayout>
  );
}
