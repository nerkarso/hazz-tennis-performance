import ButtonNewResource from '@/components/ButtonNewResource';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import DataTableContainer from '@/components/DataTableContainer';
import OwnerSidebar from '@/components/OwnerSidebar';
import UsersTable from '@/components/UsersTable';
import { useUsers } from '@/hooks';

Coaches.title = 'Coaches';

export default function Coaches() {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="Coaches" toolbar={<ButtonNewResource>New coach</ButtonNewResource>}>
        <DataTableContainer
          cols={5}
          hook={useUsers}
          query={{
            filter: { role: 'coach' },
            sort: { first_name: 1 },
          }}>
          {(data) => <UsersTable rows={data} enableDelete enableEdit />}
        </DataTableContainer>
      </DashboardContent>
    </DashboardLayout>
  );
}
