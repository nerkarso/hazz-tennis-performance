import AdminLayout from '@/components/AdminLayout';
import ChatDetailsView from '@/components/ChatDetailsView';
import ChatMasterView from '@/components/ChatMasterView';
import OwnerSidebar from '@/components/OwnerSidebar';
import { MasterDetailsView } from '@/elements';

Chat.title = 'Chat';

export default function Chat() {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <MasterDetailsView masterView={<ChatMasterView />} detailsView={<ChatDetailsView />} />
    </AdminLayout>
  );
}
