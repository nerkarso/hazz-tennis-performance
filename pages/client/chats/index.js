import AdminLayout from '@/components/AdminLayout';
import ChatEmptyStateView from '@/components/ChatEmptyStateView';
import ChatMasterView from '@/components/ChatMasterView';
import ClientSidebar from '@/components/ClientSidebar';
import { MasterDetailsView } from '@/elements';

Chats.title = 'Chats';

export default function Chats() {
  return (
    <AdminLayout sidebar={<ClientSidebar />}>
      <MasterDetailsView masterView={<ChatMasterView />} detailsView={<ChatEmptyStateView />} />
    </AdminLayout>
  );
}
