import CourtEditContainer from '@/components/CourtEditContainer';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import OwnerSidebar from '@/components/OwnerSidebar';

CourtEdit.title = 'Edit court';

export default function CourtEdit({ courtId }) {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="Edit court">
        <CourtEditContainer courtId={courtId} />
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
