import CourtEditForm from '@/components/CourtEditForm';
import { EmptyStateTitle, EmptyStateView, SkeletonForm, TwoPaneView } from '@/elements';
import { useCourt } from '@/hooks';

export default function CourtEditContainer({ courtId }) {
  const { data, error, isError, isLoading } = useCourt(courtId);

  if (isLoading) return <SkeletonForm className="max-w-2xl" rows={4} animate />;

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

  if (data) {
    return <TwoPaneView leftPane={<CourtEditForm court={data} />} />;
  }

  return <SkeletonForm className="max-w-2xl" rows={4} />;
}
