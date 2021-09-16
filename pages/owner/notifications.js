import AdminLayout from '@/components/AdminLayout';
import NotificationsPage from '@/components/NotificationsPage';
import OwnerSidebar from '@/components/OwnerSidebar';

Notifications.title = 'Notifications';

export default function Notifications() {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <NotificationsPage />
    </AdminLayout>
  );
}
