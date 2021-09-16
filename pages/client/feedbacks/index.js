import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import ClientSidebar from '@/components/ClientSidebar';
import DataTableContainer from '@/components/DataTableContainer';
import FeedbacksTable from '@/components/FeedbacksTable';
import { useAuth, useFeedbacks } from '@/hooks';

Feedbacks.title = 'Feedbacks';

export default function Feedbacks() {
  const { accountId } = useAuth();

  return (
    <AdminLayout sidebar={<ClientSidebar />}>
      <AdminContent header="Feedbacks">
        <DataTableContainer
          cols={6}
          gridTemplateColumns="12rem 8rem 1fr 6rem 12rem 8rem"
          hook={useFeedbacks}
          query={{
            filter: { user: accountId },
            sort: { created_at: -1 },
          }}>
          {(data) => <FeedbacksTable cols={['date_time', 'rating', 'message', 'replies', 'created_at']} gridTemplateColumns="12rem 8rem 1fr 6rem 12rem 8rem" rows={data} enableDelete enableShow />}
        </DataTableContainer>
      </AdminContent>
    </AdminLayout>
  );
}
