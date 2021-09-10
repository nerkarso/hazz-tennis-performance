import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import CoachingHourNewForm from '@/components/CoachingHourNewForm';
import CoachSidebar from '@/components/CoachSidebar';

CoachingHourNew.title = 'New coaching hours';

export default function CoachingHourNew() {
  return (
    <AdminLayout sidebar={<CoachSidebar />}>
      <AdminContent header="New coaching hours">
        <CoachingHourNewForm />
      </AdminContent>
    </AdminLayout>
  );
}
