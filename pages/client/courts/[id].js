import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import ClientSidebar from '@/components/ClientSidebar';
import CourtDetailsView from '@/components/CourtDetailsView';

CourtDetails.title = 'Court details';

export default function CourtDetails({ courtId }) {
  return (
    <AdminLayout sidebar={<ClientSidebar />}>
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
