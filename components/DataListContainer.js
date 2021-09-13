import { EmptyStateTitle, EmptyStateView, SkeletonList } from '@/elements';

export default function DataListContainer({ children, count, hook, query }) {
  const { data, error, isError, isLoading } = hook(query);

  if (isLoading) return <SkeletonList count={count} animate />;

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

  return <SkeletonList count={count} />;
}
