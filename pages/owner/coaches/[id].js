import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import OwnerSidebar from '@/components/OwnerSidebar';
import UserEditView from '@/components/UserEditView';

CoachEdit.title = 'Edit coach';

export default function CoachEdit({ userId }) {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <AdminContent header="Edit coach">
        <UserEditView userId={userId} />
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
