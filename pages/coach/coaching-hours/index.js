import CoachSidebar from '@/components/CoachSidebar';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import { EmptyStateTitle, EmptyStateView } from '@/elements';

CoachingHours.title = 'Coaching hours';

export default function CoachingHours() {
  return (
    <DashboardLayout sidebar={<CoachSidebar />}>
      <DashboardContent header="Coaching hours">
        <EmptyStateView>
          <EmptyStateTitle>Nothing here</EmptyStateTitle>
        </EmptyStateView>
      </DashboardContent>
    </DashboardLayout>
  );
}
