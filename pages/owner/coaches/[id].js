import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import DataFormContainer from '@/components/DataFormContainer';
import OwnerSidebar from '@/components/OwnerSidebar';
import UserEditForm from '@/components/UserEditForm';
import { useUser } from '@/hooks';

CoachEdit.title = 'Edit coach';

export default function CoachEdit({ userId }) {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="Edit coach">
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
