import { ErrorStateView, SkeletonForm } from '@/elements';

export default function DataFormContainer({ children, hook, id, rows }) {
  const { data, error, isError, isLoading } = hook(id);

  if (isLoading) return <SkeletonForm className="max-w-2xl" rows={rows} animate />;

  if (isError) return <ErrorStateView title={error.message} />;

  if (data?.error) return <ErrorStateView title={data?.error} />;

  if (data) return children(data);

  return <SkeletonForm className="max-w-2xl" rows={rows} />;
}
