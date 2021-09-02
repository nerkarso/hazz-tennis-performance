import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import OwnerSidebar from '@/components/OwnerSidebar';
import UsersTable from '@/components/UsersTable';
import UsersTableContainer from '@/components/UsersTableContainer';

Coaches.title = 'Coaches';

export default function Coaches() {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="Coaches">
        <UsersTableContainer
          table={UsersTable}
          query={{
            filter: { role: 'coach' },
          }}
          enableDelete
          enableEdit
        />
      </DashboardContent>
    </DashboardLayout>
  );
}
