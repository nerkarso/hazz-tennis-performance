import AdminLayout from '@/components/AdminLayout';
import ChatsMasterView from '@/components/ChatsMasterView';
import CoachSidebar from '@/components/CoachSidebar';
import { EmptyStateTitle, EmptyStateView, MasterDetailsView } from '@/elements';

Chats.title = 'Chats';

export default function Chats() {
  return (
    <AdminLayout sidebar={<CoachSidebar />}>
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
