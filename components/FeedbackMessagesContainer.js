import { EmptyStateTitle, EmptyStateView, SkeletonFeedbackMessages } from '@/elements';
import { useFeedbacks } from '@/hooks';

export default function FeedbackMessagesContainer({ children, emptyView, query }) {
  const { data, error, isError, isLoading } = useFeedbacks(query);

  if (isLoading) return <SkeletonFeedbackMessages animate />;

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

  if (data?.length > 0) return children(data[0]);

  if (emptyView) return emptyView;

  return <SkeletonFeedbackMessages />;
}
