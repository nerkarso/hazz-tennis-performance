import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import OwnerSidebar from '@/components/OwnerSidebar';
import UserNewForm from '@/components/UserNewForm';

OwnerNew.title = 'New owner';

export default function OwnerNew() {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="New owner">
        <UserNewForm role="owner" />
      </DashboardContent>
    </DashboardLayout>
  );
}
