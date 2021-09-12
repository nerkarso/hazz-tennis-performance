import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import ClientSidebar from '@/components/ClientSidebar';
import MyAccountView from '@/components/MyAccountView';

MyAccount.title = 'My account';

export default function MyAccount() {
  return (
    <AdminLayout sidebar={<ClientSidebar />}>
      <AdminContent header="My account">
        <MyAccountView />
      </AdminContent>
    </AdminLayout>
  );
}
