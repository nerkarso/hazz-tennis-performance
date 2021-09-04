import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import OwnerSidebar from '@/components/OwnerSidebar';
import UserNewForm from '@/components/UserNewForm';

ClientNew.title = 'New client';

export default function ClientNew() {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="New client">
        <UserNewForm role="client" />
      </DashboardContent>
    </DashboardLayout>
  );
}
