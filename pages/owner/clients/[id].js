import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import DataFormContainer from '@/components/DataFormContainer';
import OwnerSidebar from '@/components/OwnerSidebar';
import UserEditForm from '@/components/UserEditForm';
import { useUser } from '@/hooks';

ClientEdit.title = 'Edit client';

export default function ClientEdit({ userId }) {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="Edit client">
        <DataFormContainer hook={useUser} id={userId} rows={6}>
          {(data) => <UserEditForm data={data} />}
        </DataFormContainer>
      </DashboardContent>
    </DashboardLayout>
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
