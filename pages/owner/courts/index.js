import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import ButtonNewResource from '@/components/ButtonNewResource';
import CourtsTable from '@/components/CourtsTable';
import OwnerSidebar from '@/components/OwnerSidebar';
import { DataTableContainer } from '@/elements';
import { useCourts } from '@/hooks';

Courts.title = 'Courts';

export default function Courts() {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <AdminContent header="Courts" toolbar={<ButtonNewResource>New court</ButtonNewResource>}>
        <DataTableContainer
          cols={4}
          gridTemplateColumns="1.1fr 2fr 10rem 10rem"
          hook={useCourts}
          query={{
            sort: { name: 1 },
          }}>
          {(data) => <CourtsTable gridTemplateColumns="1.1fr 2fr 10rem 10rem" rows={data} />}
        </DataTableContainer>
      </AdminContent>
    </AdminLayout>
  );
}
