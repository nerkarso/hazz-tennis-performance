import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import ButtonNewResource from '@/components/ButtonNewResource';
import CourtsTable from '@/components/CourtsTable';
import DataTableContainer from '@/components/DataTableContainer';
import OwnerSidebar from '@/components/OwnerSidebar';
import { useCourts } from '@/hooks';

Courts.title = 'Courts';

export default function Courts() {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <AdminContent header="Courts" toolbar={<ButtonNewResource>New court</ButtonNewResource>}>
        <DataTableContainer
          cols={4}
          hook={useCourts}
          query={{
            sort: { name: 1 },
          }}>
          {(data) => <CourtsTable rows={data} />}
        </DataTableContainer>
      </AdminContent>
    </AdminLayout>
  );
}
