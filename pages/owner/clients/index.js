import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import ButtonNewResource from '@/components/ButtonNewResource';
import DataTableContainer from '@/components/DataTableContainer';
import OwnerSidebar from '@/components/OwnerSidebar';
import UsersTable from '@/components/UsersTable';
import { useUsers } from '@/hooks';

Clients.title = 'Clients';

export default function Clients() {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <AdminContent header="Clients" toolbar={<ButtonNewResource>New client</ButtonNewResource>}>
        <DataTableContainer
          cols={5}
          gridTemplateColumns="1.5fr 1fr 1fr 12rem 9rem"
          hook={useUsers}
          query={{
            filter: { role: 'client' },
            sort: { first_name: 1 },
          }}>
          {(data) => <UsersTable rows={data} gridTemplateColumns="1.5fr 1fr 1fr 12rem 9rem" enableDelete enableEdit />}
        </DataTableContainer>
      </AdminContent>
    </AdminLayout>
  );
}
