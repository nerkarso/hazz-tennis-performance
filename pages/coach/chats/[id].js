import AdminLayout from '@/components/AdminLayout';
import ChatDetailsView from '@/components/ChatDetailsView';
import ChatMasterView from '@/components/ChatMasterView';
import CoachSidebar from '@/components/CoachSidebar';
import { MasterDetailsView } from '@/elements';

Chat.title = 'Chat';

export default function Chat() {
  return (
    <AdminLayout sidebar={<CoachSidebar />}>
      <MasterDetailsView masterView={<ChatMasterView />} detailsView={<ChatDetailsView />} />
    </AdminLayout>
  );
}
