import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import ButtonNewResource from '@/components/ButtonNewResource';
import DataTableContainer from '@/components/DataTableContainer';
import OwnerSidebar from '@/components/OwnerSidebar';
import UsersTable from '@/components/UsersTable';
import { useUsers } from '@/hooks';

Coaches.title = 'Coaches';

export default function Coaches() {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <AdminContent header="Coaches" toolbar={<ButtonNewResource>New coach</ButtonNewResource>}>
        <DataTableContainer
          cols={5}
          hook={useUsers}
          query={{
            filter: { role: 'coach' },
            sort: { first_name: 1 },
          }}>
          {(data) => <UsersTable rows={data} enableDelete enableEdit />}
        </DataTableContainer>
      </AdminContent>
    </AdminLayout>
  );
}
