import CourtEditForm from '@/components/CourtEditForm';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import DataFormContainer from '@/components/DataFormContainer';
import OwnerSidebar from '@/components/OwnerSidebar';
import { useCourt } from '@/hooks';

CourtEdit.title = 'Edit court';

export default function CourtEdit({ courtId }) {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="Edit court">
        <DataFormContainer hook={useCourt} id={courtId} rows={4}>
          {(data) => <CourtEditForm data={data} />}
        </DataFormContainer>
      </DashboardContent>
    </DashboardLayout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  return {
    props: {
      courtId: id,
    },
  };
}
