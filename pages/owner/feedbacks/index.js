import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import FeedbacksTable from '@/components/FeedbacksTable';
import OwnerSidebar from '@/components/OwnerSidebar';
import { DataTableContainer } from '@/elements';
import { useFeedbacks } from '@/hooks';

Feedbacks.title = 'Feedbacks';

export default function Feedbacks() {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <AdminContent header="Feedbacks">
        <DataTableContainer
          cols={6}
          gridTemplateColumns="12rem 1fr 8rem 2fr 6rem 8rem"
          hook={useFeedbacks}
          query={{
            sort: { created_at: -1 },
          }}>
          {(data) => <FeedbacksTable cols={['date_time', 'client_link', 'rating', 'message', 'replies']} gridTemplateColumns="12rem 1fr 8rem 2fr 6rem 8rem" rows={data} enableDelete enableShow />}
        </DataTableContainer>
      </AdminContent>
    </AdminLayout>
  );
}
