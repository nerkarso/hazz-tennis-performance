import AdminLayout from '@/components/AdminLayout';
import ChatsDetailsView from '@/components/ChatsDetailsView';
import ChatsMasterView from '@/components/ChatsMasterView';
import OwnerSidebar from '@/components/OwnerSidebar';
import { MasterDetailsView } from '@/elements';

Chat.title = 'Chat';

export default function Chat() {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <MasterDetailsView masterView={<ChatsMasterView />} detailsView={<ChatsDetailsView />} />
    </AdminLayout>
  );
}
