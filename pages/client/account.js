import ClientSidebar from '@/components/ClientSidebar';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import { EmptyStateTitle, EmptyStateView } from '@/elements';

MyAccount.title = 'My account';

export default function MyAccount() {
  return (
    <DashboardLayout sidebar={<ClientSidebar />}>
      <DashboardContent header="My account">
        <EmptyStateView>
          <EmptyStateTitle>Nothing here</EmptyStateTitle>
        </EmptyStateView>
      </DashboardContent>
    </DashboardLayout>
  );
}
