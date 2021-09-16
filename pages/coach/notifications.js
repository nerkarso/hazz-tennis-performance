import AdminLayout from '@/components/AdminLayout';
import CoachSidebar from '@/components/CoachSidebar';
import NotificationsPage from '@/components/NotificationsPage';

Notifications.title = 'Notifications';

export default function Notifications() {
  return (
    <AdminLayout sidebar={<CoachSidebar />}>
      <NotificationsPage />
    </AdminLayout>
  );
}
