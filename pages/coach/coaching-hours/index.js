import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import ButtonNewResource from '@/components/ButtonNewResource';
import CoachingHoursTable from '@/components/CoachingHoursTable';
import CoachSidebar from '@/components/CoachSidebar';
import DataTableContainer from '@/components/DataTableContainer';
import { useAuth, useCoachingHours } from '@/hooks';

CoachingHours.title = 'Coaching hours';

export default function CoachingHours() {
  const { accountId } = useAuth();

  return (
    <AdminLayout sidebar={<CoachSidebar />}>
      <AdminContent header="Coaching hours" toolbar={<ButtonNewResource>New coaching hours</ButtonNewResource>}>
        <DataTableContainer
          cols={3}
          hook={useCoachingHours}
          query={{
            filter: { coach: accountId },
            sort: { created_at: -1 },
          }}>
          {(data) => <CoachingHoursTable cols={['date', 'duration']} gridTemplateColumns="8rem 1fr 6rem" rows={data} enableEdit enableDelete />}
        </DataTableContainer>
      </AdminContent>
    </AdminLayout>
  );
}
