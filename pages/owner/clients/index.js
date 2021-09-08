import ButtonNewResource from '@/components/ButtonNewResource';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import DataTableContainer from '@/components/DataTableContainer';
import OwnerSidebar from '@/components/OwnerSidebar';
import UsersTable from '@/components/UsersTable';
import { useUsers } from '@/hooks';

Clients.title = 'Clients';

export default function Clients() {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="Clients" toolbar={<ButtonNewResource>New client</ButtonNewResource>}>
        <DataTableContainer
          cols={5}
          hook={useUsers}
          query={{
            filter: { role: 'client' },
            sort: { first_name: 1 },
          }}>
          {(data) => <UsersTable rows={data} enableDelete enableEdit />}
        </DataTableContainer>
      </DashboardContent>
    </DashboardLayout>
  );
}
