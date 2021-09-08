import CoachingHourEditForm from '@/components/CoachingHourEditForm';
import CoachSidebar from '@/components/CoachSidebar';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import DataFormContainer from '@/components/DataFormContainer';
import { useCoachingHour } from '@/hooks';

CoachingHourEdit.title = 'Edit coaching hours';

export default function CoachingHourEdit({ id }) {
  return (
    <DashboardLayout sidebar={<CoachSidebar />}>
      <DashboardContent header="Edit coaching hours">
        <DataFormContainer hook={useCoachingHour} id={id} rows={3}>
          {(data) => <CoachingHourEditForm data={data} />}
        </DataFormContainer>
      </DashboardContent>
    </DashboardLayout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  return {
    props: {
      id: id,
    },
  };
}
