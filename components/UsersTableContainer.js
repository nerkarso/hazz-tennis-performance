import { EmptyStateTitle, EmptyStateView, SkeletonTable } from '@/elements';
import { useUsers } from '@/hooks';

export default function UsersTableContainer({ query, table: Table, ...props }) {
  const { data, error, isError, isLoading } = useUsers({
    sort: { first_name: 1 },
    ...query,
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
    return <Table rows={data} {...props} />;
  }

  return <SkeletonTable cols={5} />;
}
