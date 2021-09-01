import ChatsDetailsView from '@/components/ChatsDetailsView';
import ChatsMasterView from '@/components/ChatsMasterView';
import CoachSidebar from '@/components/CoachSidebar';
import DashboardLayout from '@/components/DashboardLayout';
import { MasterDetailsView } from '@/elements';

Chat.title = 'Chat';

export default function Chat() {
  return (
    <DashboardLayout sidebar={<CoachSidebar />}>
      <MasterDetailsView masterView={<ChatsMasterView />} detailsView={<ChatsDetailsView />} />
    </DashboardLayout>
  );
}
