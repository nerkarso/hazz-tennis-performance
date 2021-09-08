import ButtonNewResource from '@/components/ButtonNewResource';
import CoachingHoursTable from '@/components/CoachingHoursTable';
import CoachSidebar from '@/components/CoachSidebar';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import DataTableContainer from '@/components/DataTableContainer';
import { useCoachingHours } from '@/hooks';

CoachingHours.title = 'Coaching hours';

export default function CoachingHours() {
  return (
    <DashboardLayout sidebar={<CoachSidebar />}>
      <DashboardContent header="Coaching hours" toolbar={<ButtonNewResource>New coaching hours</ButtonNewResource>}>
        <DataTableContainer
          cols={3}
          hook={useCoachingHours}
          query={{
            sort: { created_at: -1 },
          }}>
          {(data) => <CoachingHoursTable cols={['date', 'duration']} gridTemplateColumns="8rem 1fr 6rem" rows={data} enableEdit enableDelete />}
        </DataTableContainer>
      </DashboardContent>
    </DashboardLayout>
  );
}
