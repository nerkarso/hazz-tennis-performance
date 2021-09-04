import ButtonNewResource from '@/components/ButtonNewResource';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import OwnerSidebar from '@/components/OwnerSidebar';
import UsersTable from '@/components/UsersTable';
import UsersTableContainer from '@/components/UsersTableContainer';

Coaches.title = 'Coaches';

export default function Coaches() {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="Coaches" toolbar={<ButtonNewResource>New coach</ButtonNewResource>}>
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
