import { EmptyStateTitle, EmptyStateView } from '@/elements';

export default function ChatEmptyStateView() {
  return (
    <EmptyStateView fullScreen>
      <EmptyStateTitle>Select a chat</EmptyStateTitle>
    </EmptyStateView>
  );
}
