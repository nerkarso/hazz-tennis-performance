import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import OwnerSidebar from '@/components/OwnerSidebar';
import UserNewForm from '@/components/UserNewForm';

CoachNew.title = 'New coach';

export default function CoachNew() {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="New coach">
        <UserNewForm role="coach" />
      </DashboardContent>
    </DashboardLayout>
  );
}
