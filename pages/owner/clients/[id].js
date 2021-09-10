import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import DataFormContainer from '@/components/DataFormContainer';
import OwnerSidebar from '@/components/OwnerSidebar';
import UserEditForm from '@/components/UserEditForm';
import { useUser } from '@/hooks';

ClientEdit.title = 'Edit client';

export default function ClientEdit({ userId }) {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <AdminContent header="Edit client">
        <DataFormContainer hook={useUser} id={userId} rows={6}>
          {(data) => <UserEditForm data={data} />}
        </DataFormContainer>
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
