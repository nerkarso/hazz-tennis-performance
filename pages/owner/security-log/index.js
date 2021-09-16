import ActivitiesTable from '@/components/ActivitiesTable';
import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import OwnerSidebar from '@/components/OwnerSidebar';
import { Button, DataTableContainer, SkeletonButton } from '@/elements';
import { useActivities, useActivitiesDelete } from '@/hooks';
import { TrashIcon } from '@heroicons/react/outline';

SecurityLog.title = 'Security log';

export default function SecurityLog() {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <AdminContent header="Security log" toolbar={<Toolbar />}>
        <DataTableContainer
          cols={3}
          gridTemplateColumns="2rem 1fr 14rem"
          hook={useActivities}
          query={{
            sort: { created_at: -1 },
          }}>
          {(data) => <ActivitiesTable gridTemplateColumns="2rem 1fr 14rem" rows={data} />}
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
