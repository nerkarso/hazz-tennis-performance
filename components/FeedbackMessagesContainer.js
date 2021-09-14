import { ErrorStateView, SkeletonFeedbackMessages } from '@/elements';
import { useFeedbacks } from '@/hooks';

export default function FeedbackMessagesContainer({ children, emptyView, query }) {
  const { data, error, isError, isLoading } = useFeedbacks(query);

  if (isLoading) return <SkeletonFeedbackMessages animate />;

  if (isError) return <ErrorStateView title={error.message} />;

  if (data?.error) return <ErrorStateView title={data?.error} />;

  if (data?.length > 0) return children(data[0]);

  if (emptyView) return emptyView;

  return <SkeletonFeedbackMessages />;
}
