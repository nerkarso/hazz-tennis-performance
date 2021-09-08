import ButtonNewResource from '@/components/ButtonNewResource';
import CourtsTable from '@/components/CourtsTable';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import DataTableContainer from '@/components/DataTableContainer';
import OwnerSidebar from '@/components/OwnerSidebar';
import { useCourts } from '@/hooks';

Courts.title = 'Courts';

export default function Courts() {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="Courts" toolbar={<ButtonNewResource>New court</ButtonNewResource>}>
        <DataTableContainer
          cols={4}
          hook={useCourts}
          query={{
            sort: { name: 1 },
          }}>
          {(data) => <CourtsTable rows={data} />}
        </DataTableContainer>
      </DashboardContent>
    </DashboardLayout>
  );
}
