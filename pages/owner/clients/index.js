import ClientsTable from '@/components/ClientsTable';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import OwnerSidebar from '@/components/OwnerSidebar';
import { EmptyStateTitle, EmptyStateView, SkeletonTable } from '@/elements';
import { useUsers } from '@/hooks';

Clients.title = 'Clients';

export default function Clients() {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="Clients">
        <ClientsTableContainer />
      </DashboardContent>
    </DashboardLayout>
  );
}

function ClientsTableContainer() {
  const { data, error, isError, isLoading } = useUsers({
    filter: { role: 'client' },
    sort: { first_name: 1 },
  });

  if (isLoading) return <SkeletonTable cols={5} animate />;

  if (isError) {
    return (
      <EmptyStateView>
        <EmptyStateTitle>{error.message}</EmptyStateTitle>
      </EmptyStateView>
    );
  }

  if (data?.error) {
    return (
      <EmptyStateView>
        <EmptyStateTitle>{data?.error}</EmptyStateTitle>
      </EmptyStateView>
    );
  }

  if (data?.length > 0) {
    return <ClientsTable rows={data} enableDelete enableEdit />;
  }

  return <SkeletonTable cols={5} />;
}
