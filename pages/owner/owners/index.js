import ButtonNewResource from '@/components/ButtonNewResource';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import OwnerSidebar from '@/components/OwnerSidebar';
import UsersTable from '@/components/UsersTable';
import UsersTableContainer from '@/components/UsersTableContainer';

Owners.title = 'Owners';

export default function Owners() {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="Owners" toolbar={<ButtonNewResource>New owner</ButtonNewResource>}>
        <UsersTableContainer
          table={UsersTable}
          query={{
            filter: { role: 'owner' },
          }}
          enableDelete
          enableEdit
        />
      </DashboardContent>
    </DashboardLayout>
  );
}
