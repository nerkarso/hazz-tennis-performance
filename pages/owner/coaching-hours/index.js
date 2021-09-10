import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import CoachingHoursTable from '@/components/CoachingHoursTable';
import DataTableContainer from '@/components/DataTableContainer';
import OwnerSidebar from '@/components/OwnerSidebar';
import { useCoachingHours } from '@/hooks';

CoachingHours.title = 'Coaching hours';

export default function CoachingHours() {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <AdminContent header="Coaching hours">
        <DataTableContainer
          cols={4}
          hook={useCoachingHours}
          query={{
            sort: { created_at: -1 },
          }}>
          {(data) => <CoachingHoursTable cols={['date', 'coach_link', 'duration']} gridTemplateColumns="8rem 12rem 1fr" rows={data} enableDelete />}
        </DataTableContainer>
      </AdminContent>
    </AdminLayout>
  );
}
