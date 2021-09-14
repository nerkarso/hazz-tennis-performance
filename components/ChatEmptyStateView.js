import { EmptyStateTitle, EmptyStateView } from '@/elements';

export default function ChatEmptyStateView() {
  return (
    <EmptyStateView fullScreen>
      <EmptyStateTitle>Select or create a chat</EmptyStateTitle>
    </EmptyStateView>
  );
}
