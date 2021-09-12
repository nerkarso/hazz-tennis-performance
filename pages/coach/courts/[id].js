import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import CoachSidebar from '@/components/CoachSidebar';
import CourtDetailsView from '@/components/CourtDetailsView';

CourtDetails.title = 'Court details';

export default function CourtDetails({ courtId }) {
  return (
    <AdminLayout sidebar={<CoachSidebar />}>
      <AdminContent header="Court details">
        <CourtDetailsView courtId={courtId} />
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
