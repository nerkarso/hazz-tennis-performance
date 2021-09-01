import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import OwnerSidebar from '@/components/OwnerSidebar';
import { EmptyStateTitle, EmptyStateView } from '@/elements';

CoachingHours.title = 'Coaching hours';

export default function CoachingHours() {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="Coaching hours">
        <EmptyStateView>
          <EmptyStateTitle>Nothing here</EmptyStateTitle>
        </EmptyStateView>
      </DashboardContent>
    </DashboardLayout>
  );
}
