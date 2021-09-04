import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import OwnerSidebar from '@/components/OwnerSidebar';
import UserEditContainer from '@/components/UserEditContainer';

OwnerEdit.title = 'Edit owner';

export default function OwnerEdit({ userId }) {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="Edit owner">
        <UserEditContainer userId={userId} />
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
