import AdminLayout from '@/components/AdminLayout';
import ChatEmptyStateView from '@/components/ChatEmptyStateView';
import ChatMasterView from '@/components/ChatMasterView';
import OwnerSidebar from '@/components/OwnerSidebar';
import { MasterDetailsView } from '@/elements';

Chats.title = 'Chats';

export default function Chats() {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <MasterDetailsView masterView={<ChatMasterView />} detailsView={<ChatEmptyStateView />} />
    </AdminLayout>
  );
}
