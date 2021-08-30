import ChatsDetailsView from '@/components/ChatsDetailsView';
import ChatsMasterView from '@/components/ChatsMasterView';
import DashboardLayout from '@/components/DashboardLayout';
import OwnerSidebar from '@/components/OwnerSidebar';
import { MasterDetailsView } from '@/elements';

Chats.title = 'Chats';

export default function Chats() {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <MasterDetailsView masterView={<ChatsMasterView />} detailsView={<ChatsDetailsView />} />
    </DashboardLayout>
  );
}
