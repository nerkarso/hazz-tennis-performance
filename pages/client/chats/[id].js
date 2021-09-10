import AdminLayout from '@/components/AdminLayout';
import ChatsDetailsView from '@/components/ChatsDetailsView';
import ChatsMasterView from '@/components/ChatsMasterView';
import ClientSidebar from '@/components/ClientSidebar';
import { MasterDetailsView } from '@/elements';

Chat.title = 'Chat';

export default function Chat() {
  return (
    <AdminLayout sidebar={<ClientSidebar />}>
      <MasterDetailsView masterView={<ChatsMasterView />} detailsView={<ChatsDetailsView />} />
    </AdminLayout>
  );
}
