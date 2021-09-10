import AdminLayout from '@/components/AdminLayout';
import ChatsDetailsView from '@/components/ChatsDetailsView';
import ChatsMasterView from '@/components/ChatsMasterView';
import CoachSidebar from '@/components/CoachSidebar';
import { MasterDetailsView } from '@/elements';

Chat.title = 'Chat';

export default function Chat() {
  return (
    <AdminLayout sidebar={<CoachSidebar />}>
      <MasterDetailsView masterView={<ChatsMasterView />} detailsView={<ChatsDetailsView />} />
    </AdminLayout>
  );
}
