import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import DataFormContainer from '@/components/DataFormContainer';
import OwnerSidebar from '@/components/OwnerSidebar';
import UserEditForm from '@/components/UserEditForm';
import { useUser } from '@/hooks';

CoachEdit.title = 'Edit coach';

export default function CoachEdit({ userId }) {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <AdminContent header="Edit coach">
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
