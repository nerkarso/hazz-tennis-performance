import ButtonNewResource from '@/components/ButtonNewResource';
import CourtsTableContainer from '@/components/CourtsTableContainer';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import OwnerSidebar from '@/components/OwnerSidebar';

Courts.title = 'Courts';

export default function Courts() {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="Courts" toolbar={<ButtonNewResource>New court</ButtonNewResource>}>
        <CourtsTableContainer />
      </DashboardContent>
    </DashboardLayout>
  );
}
