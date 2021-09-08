import ButtonNewResource from '@/components/ButtonNewResource';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import DataTableContainer from '@/components/DataTableContainer';
import OwnerSidebar from '@/components/OwnerSidebar';
import UsersTable from '@/components/UsersTable';
import { useUsers } from '@/hooks';

Owners.title = 'Owners';

export default function Owners() {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="Owners" toolbar={<ButtonNewResource>New owner</ButtonNewResource>}>
        <DataTableContainer
          cols={5}
          hook={useUsers}
          query={{
            filter: { role: 'owner' },
            sort: { first_name: 1 },
          }}>
          {(data) => <UsersTable rows={data} enableDelete enableEdit />}
        </DataTableContainer>
      </DashboardContent>
    </DashboardLayout>
  );
}
