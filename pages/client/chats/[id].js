import ChatsDetailsView from '@/components/ChatsDetailsView';
import ChatsMasterView from '@/components/ChatsMasterView';
import ClientSidebar from '@/components/ClientSidebar';
import DashboardLayout from '@/components/DashboardLayout';
import { MasterDetailsView } from '@/elements';

Chat.title = 'Chat';

export default function Chat() {
  return (
    <DashboardLayout sidebar={<ClientSidebar />}>
      <MasterDetailsView masterView={<ChatsMasterView />} detailsView={<ChatsDetailsView />} />
    </DashboardLayout>
  );
}
