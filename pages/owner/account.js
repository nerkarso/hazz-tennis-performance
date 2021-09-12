import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import MyAccountView from '@/components/MyAccountView';
import OwnerSidebar from '@/components/OwnerSidebar';

MyAccount.title = 'My account';

export default function MyAccount() {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <AdminContent header="My account">
        <MyAccountView />
      </AdminContent>
    </AdminLayout>
  );
}
