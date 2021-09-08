import { EmptyStateTitle, EmptyStateView, SkeletonForm } from '@/elements';

export default function DataFormContainer({ children, hook, id, rows }) {
  const { data, error, isError, isLoading } = hook(id);

  if (isLoading) return <SkeletonForm className="max-w-2xl" rows={rows} animate />;

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

  if (data) return children(data);

  return <SkeletonForm className="max-w-2xl" rows={rows} />;
}
