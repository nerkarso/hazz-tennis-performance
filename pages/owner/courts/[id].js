import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import CourtEditForm from '@/components/CourtEditForm';
import OwnerSidebar from '@/components/OwnerSidebar';
import { DataFormContainer } from '@/elements';
import { useCourt } from '@/hooks';

CourtEdit.title = 'Edit court';

export default function CourtEdit({ courtId }) {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <AdminContent header="Edit court">
        <DataFormContainer hook={useCourt} id={courtId} rows={4}>
          {(data) => <CourtEditForm data={data} />}
        </DataFormContainer>
      </AdminContent>
    </AdminLayout>
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
