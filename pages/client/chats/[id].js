import AdminLayout from '@/components/AdminLayout';
import ChatDetailsView from '@/components/ChatDetailsView';
import ChatMasterView from '@/components/ChatMasterView';
import ClientSidebar from '@/components/ClientSidebar';
import { MasterDetailsView } from '@/elements';

Chat.title = 'Chat';

export default function Chat() {
  return (
    <AdminLayout sidebar={<ClientSidebar />}>
      <MasterDetailsView masterView={<ChatMasterView />} detailsView={<ChatDetailsView />} />
    </AdminLayout>
  );
}
