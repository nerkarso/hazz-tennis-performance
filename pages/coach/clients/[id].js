import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import CoachSidebar from '@/components/CoachSidebar';
import UserDetailsView from '@/components/UserDetailsView';

ClientDetails.title = 'Client details';

export default function ClientDetails({ userId }) {
  return (
    <AdminLayout sidebar={<CoachSidebar />}>
      <AdminContent header="Client details">
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
