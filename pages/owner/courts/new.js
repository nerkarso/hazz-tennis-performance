import CourtNewForm from '@/components/CourtNewForm';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import OwnerSidebar from '@/components/OwnerSidebar';

CourtNew.title = 'New court';

export default function CourtNew() {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="New court">
        <CourtNewForm role="court" />
      </DashboardContent>
    </DashboardLayout>
  );
}
