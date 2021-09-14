import AdminLayout from '@/components/AdminLayout';
import ChatEmptyStateView from '@/components/ChatEmptyStateView';
import ChatMasterView from '@/components/ChatMasterView';
import CoachSidebar from '@/components/CoachSidebar';
import { MasterDetailsView } from '@/elements';

Chats.title = 'Chats';

export default function Chats() {
  return (
    <AdminLayout sidebar={<CoachSidebar />}>
      <MasterDetailsView masterView={<ChatMasterView />} detailsView={<ChatEmptyStateView />} />
    </AdminLayout>
  );
}
