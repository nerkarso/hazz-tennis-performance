import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import CoachSidebar from '@/components/CoachSidebar';
import MyAccountView from '@/components/MyAccountView';

MyAccount.title = 'My account';

export default function MyAccount() {
  return (
    <AdminLayout sidebar={<CoachSidebar />}>
      <AdminContent header="My account">
        <MyAccountView />
      </AdminContent>
    </AdminLayout>
  );
}
