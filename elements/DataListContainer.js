import { ErrorStateView, SkeletonList } from '@/elements';

export default function DataListContainer({ children, count, hook, query }) {
  const { data, error, isError, isLoading } = hook(query);

  if (isLoading) return <SkeletonList count={count} animate />;

  if (isError) return <ErrorStateView title={error.message} />;

  if (data?.error) return <ErrorStateView title={data?.error} />;

  if (data?.length > 0) return children(data);

  return <SkeletonList count={count} />;
}
