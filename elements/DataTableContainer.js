import { ErrorStateView, SkeletonTable } from '@/elements';

export default function DataTableContainer({ children, cols, gridTemplateColumns, hook, query }) {
  const { data, error, isError, isLoading } = hook(query);

  if (isLoading) return <SkeletonTable cols={cols} gridTemplateColumns={gridTemplateColumns} animate />;

  if (isError) return <ErrorStateView title={error.message} />;

  if (data?.error) return <ErrorStateView title={data?.error} />;

  if (data?.length > 0) return children(data);

  return <SkeletonTable cols={cols} gridTemplateColumns={gridTemplateColumns} />;
}
