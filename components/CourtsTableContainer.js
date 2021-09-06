import CourtsTable from '@/components/CourtsTable';
import { EmptyStateTitle, EmptyStateView, SkeletonTable } from '@/elements';
import { useCourts } from '@/hooks';

export default function CourtsTableContainer() {
  const { data, error, isError, isLoading } = useCourts();

  if (isLoading) return <SkeletonTable cols={4} animate />;

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
    return <CourtsTable rows={data} />;
  }

  return <SkeletonTable cols={4} />;
}
