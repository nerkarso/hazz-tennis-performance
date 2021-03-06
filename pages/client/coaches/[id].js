import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import ClientSidebar from '@/components/ClientSidebar';
import UserDetailsView from '@/components/UserDetailsView';

CoachDetails.title = 'Coach details';

export default function CoachDetails({ userId }) {
  return (
    <AdminLayout sidebar={<ClientSidebar />}>
      <AdminContent header="Coach details">
        <UserDetailsView userId={userId} />
      </AdminContent>
    </AdminLayout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  return {
    props: {
      userId: id,
    },
  };
}
