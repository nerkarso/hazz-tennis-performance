import ActivitiesTable from '@/components/ActivitiesTable';
import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import DataTableContainer from '@/components/DataTableContainer';
import OwnerSidebar from '@/components/OwnerSidebar';
import { Button, SkeletonButton } from '@/elements';
import { useActivities, useActivitiesDelete } from '@/hooks';
import { TrashIcon } from '@heroicons/react/outline';

SecurityLog.title = 'Security log';

export default function SecurityLog() {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <AdminContent header="Security log" toolbar={<Toolbar />}>
        <DataTableContainer
          cols={2}
          hook={useActivities}
          query={{
            sort: { created_at: -1 },
          }}>
          {(data) => <ActivitiesTable rows={data} />}
        </DataTableContainer>
      </AdminContent>
    </AdminLayout>
  );
}

function Toolbar() {
  const { isLoading, mutate } = useActivitiesDelete();

  if (isLoading) return <SkeletonButton>Deleting...</SkeletonButton>;

  return (
    <Button onClick={() => mutate()} color="neutral" variant="solid" icon={TrashIcon}>
      Delete all
    </Button>
  );
}
