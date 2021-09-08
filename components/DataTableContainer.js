import { EmptyStateTitle, EmptyStateView, SkeletonTable } from '@/elements';

export default function DataTableContainer({ children, cols, hook, query }) {
  const { data, error, isError, isLoading } = hook(query);

  if (isLoading) return <SkeletonTable cols={cols} animate />;

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
    return children(data);
  }

  return <SkeletonTable cols={cols} />;
}
