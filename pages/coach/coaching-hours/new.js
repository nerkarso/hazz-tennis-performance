import CoachingHourNewForm from '@/components/CoachingHourNewForm';
import CoachSidebar from '@/components/CoachSidebar';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';

CoachingHourNew.title = 'New coaching hours';

export default function CoachingHourNew() {
  return (
    <DashboardLayout sidebar={<CoachSidebar />}>
      <DashboardContent header="New coaching hours">
        <CoachingHourNewForm />
      </DashboardContent>
    </DashboardLayout>
  );
}
