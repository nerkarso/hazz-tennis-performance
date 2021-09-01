import ChatsMasterView from '@/components/ChatsMasterView';
import DashboardLayout from '@/components/DashboardLayout';
import OwnerSidebar from '@/components/OwnerSidebar';
import { EmptyStateTitle, EmptyStateView, MasterDetailsView } from '@/elements';

Chats.title = 'Chats';

export default function Chats() {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <MasterDetailsView masterView={<ChatsMasterView />} detailsView={<ChatsEmptyStateView />} />
    </DashboardLayout>
  );
}

function ChatsEmptyStateView() {
  return (
    <EmptyStateView fullScreen>
      <EmptyStateTitle>Select a chat</EmptyStateTitle>
    </EmptyStateView>
  );
}
