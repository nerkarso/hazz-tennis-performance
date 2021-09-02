import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import OwnerSidebar from '@/components/OwnerSidebar';
import UsersTable from '@/components/UsersTable';
import UsersTableContainer from '@/components/UsersTableContainer';

Clients.title = 'Clients';

export default function Clients() {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="Clients">
        <UsersTableContainer
          table={UsersTable}
          query={{
            filter: { role: 'client' },
          }}
          enableDelete
          enableEdit
        />
      </DashboardContent>
    </DashboardLayout>
  );
}
