import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import CoachingHourEditForm from '@/components/CoachingHourEditForm';
import CoachSidebar from '@/components/CoachSidebar';
import { DataFormContainer } from '@/elements';
import { useCoachingHour } from '@/hooks';

CoachingHourEdit.title = 'Edit coaching hours';

export default function CoachingHourEdit({ id }) {
  return (
    <AdminLayout sidebar={<CoachSidebar />}>
      <AdminContent header="Edit coaching hours">
        <DataFormContainer hook={useCoachingHour} id={id} rows={3}>
          {(data) => <CoachingHourEditForm data={data} />}
        </DataFormContainer>
      </AdminContent>
    </AdminLayout>
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
