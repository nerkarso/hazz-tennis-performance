import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import OwnerSidebar from '@/components/OwnerSidebar';
import UserEditView from '@/components/UserEditView';

ClientEdit.title = 'Edit client';

export default function ClientEdit({ userId }) {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <AdminContent header="Edit client">
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
