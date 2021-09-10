import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import ClientSidebar from '@/components/ClientSidebar';
import { EmptyStateTitle, EmptyStateView } from '@/elements';

MyAccount.title = 'My account';

export default function MyAccount() {
  return (
    <AdminLayout sidebar={<ClientSidebar />}>
      <AdminContent header="My account">
        <EmptyStateView>
          <EmptyStateTitle>Nothing here</EmptyStateTitle>
        </EmptyStateView>
      </AdminContent>
    </AdminLayout>
  );
}
