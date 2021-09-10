import AdminLayout from '@/components/AdminLayout';
import ChatsMasterView from '@/components/ChatsMasterView';
import ClientSidebar from '@/components/ClientSidebar';
import { EmptyStateTitle, EmptyStateView, MasterDetailsView } from '@/elements';

Chats.title = 'Chats';

export default function Chats() {
  return (
    <AdminLayout sidebar={<ClientSidebar />}>
      <MasterDetailsView masterView={<ChatsMasterView />} detailsView={<ChatsEmptyStateView />} />
    </AdminLayout>
  );
}

function ChatsEmptyStateView() {
  return (
    <EmptyStateView fullScreen>
      <EmptyStateTitle>Select a chat</EmptyStateTitle>
    </EmptyStateView>
  );
}
