import ChatsMasterView from '@/components/ChatsMasterView';
import DashboardLayout from '@/components/DashboardLayout';
import OwnerSidebar from '@/components/OwnerSidebar';
import { EmptyView, MasterDetailsView } from '@/elements';

Chats.title = 'Chats';

export default function Chats() {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <MasterDetailsView masterView={<ChatsMasterView />} detailsView={<ChatsEmptyView />} />
    </DashboardLayout>
  );
}

function ChatsEmptyView() {
  return (
    <section className="flex-1 dark:bg-neutral-900 dark:text-white">
      <EmptyView text="Select a chat" />
    </section>
  );
}
