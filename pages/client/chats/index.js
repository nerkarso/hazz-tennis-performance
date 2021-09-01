import ChatsMasterView from '@/components/ChatsMasterView';
import ClientSidebar from '@/components/ClientSidebar';
import DashboardLayout from '@/components/DashboardLayout';
import { EmptyStateTitle, EmptyStateView, MasterDetailsView } from '@/elements';

Chats.title = 'Chats';

export default function Chats() {
  return (
    <DashboardLayout sidebar={<ClientSidebar />}>
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
