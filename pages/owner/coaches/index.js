import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import ButtonNewResource from '@/components/ButtonNewResource';
import OwnerSidebar from '@/components/OwnerSidebar';
import UsersTable from '@/components/UsersTable';
import { DataTableContainer } from '@/elements';
import { useUsers } from '@/hooks';

Coaches.title = 'Coaches';

export default function Coaches() {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <AdminContent header="Coaches" toolbar={<ButtonNewResource>New coach</ButtonNewResource>}>
        <DataTableContainer
          cols={5}
          gridTemplateColumns="1.5fr 1fr 1fr 12rem 9rem"
          hook={useUsers}
          query={{
            filter: { role: 'coach' },
            sort: { first_name: 1 },
          }}>
          {(data) => <UsersTable rows={data} gridTemplateColumns="1.5fr 1fr 1fr 12rem 9rem" enableDelete enableEdit />}
        </DataTableContainer>
      </AdminContent>
    </AdminLayout>
  );
}
