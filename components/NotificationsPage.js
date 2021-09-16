import AdminContent from '@/components/AdminContent';
import DataTableContainer from '@/components/DataTableContainer';
import NotificationsTable from '@/components/NotificationsTable';
import { Button, SkeletonButton } from '@/elements';
import { useAuth, useNotifications, useNotificationsDelete, useNotificationsUpdate } from '@/hooks';
import { CheckIcon, TrashIcon } from '@heroicons/react/outline';

export default function NotificationsPage() {
  const { accountId } = useAuth();

  return (
    <AdminContent
      header="Notifications"
      toolbar={
        <>
          <ButtonReadAll />
          <ButtonDeleteAll />
        </>
      }>
      <DataTableContainer
        cols={1}
        hook={useNotifications}
        query={{
          filter: { user: accountId },
          sort: { created_at: -1 },
        }}>
        {(data) => <NotificationsTable rows={data} />}
      </DataTableContainer>
    </AdminContent>
  );
}

function ButtonReadAll() {
  const { accountId } = useAuth();
  const { isLoading, mutate } = useNotificationsUpdate({
    filter: { read: false, user: accountId },
  });

  if (isLoading) return <SkeletonButton>Updating...</SkeletonButton>;

  return (
    <Button onClick={() => mutate({ read: true })} color="primary" variant="solid" icon={CheckIcon}>
      Mark all read
    </Button>
  );
}

function ButtonDeleteAll() {
  const { accountId } = useAuth();
  const { isLoading, mutate } = useNotificationsDelete({
    filter: { user: accountId },
  });

  if (isLoading) return <SkeletonButton>Deleting...</SkeletonButton>;

  return (
    <Button onClick={() => mutate()} color="neutral" variant="solid" icon={TrashIcon}>
      Delete all
    </Button>
  );
}
