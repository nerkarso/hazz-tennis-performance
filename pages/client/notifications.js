import AdminLayout from '@/components/AdminLayout';
import ClientSidebar from '@/components/ClientSidebar';
import NotificationsPage from '@/components/NotificationsPage';

Notifications.title = 'Notifications';

export default function Notifications() {
  return (
    <AdminLayout sidebar={<ClientSidebar />}>
      <NotificationsPage />
    </AdminLayout>
  );
}
