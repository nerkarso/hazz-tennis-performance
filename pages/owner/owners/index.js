import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import ButtonNewResource from '@/components/ButtonNewResource';
import DataTableContainer from '@/components/DataTableContainer';
import OwnerSidebar from '@/components/OwnerSidebar';
import UsersTable from '@/components/UsersTable';
import { useUsers } from '@/hooks';

Owners.title = 'Owners';

export default function Owners() {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <AdminContent header="Owners" toolbar={<ButtonNewResource>New owner</ButtonNewResource>}>
        <DataTableContainer
          cols={5}
          gridTemplateColumns="1.5fr 1fr 1fr 12rem 9rem"
          hook={useUsers}
          query={{
            filter: { role: 'owner' },
            sort: { first_name: 1 },
          }}>
          {(data) => <UsersTable rows={data} gridTemplateColumns="1.5fr 1fr 1fr 12rem 9rem" enableDelete enableEdit />}
        </DataTableContainer>
      </AdminContent>
    </AdminLayout>
  );
}
