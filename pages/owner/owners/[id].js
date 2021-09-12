import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import OwnerSidebar from '@/components/OwnerSidebar';
import UserEditView from '@/components/UserEditView';

OwnerEdit.title = 'Edit owner';

export default function OwnerEdit({ userId }) {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <AdminContent header="Edit owner">
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
