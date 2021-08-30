import DashboardLayout from '@/components/DashboardLayout';
import OwnerSidebar from '@/components/OwnerSidebar';

Dashboard.title = 'Dashboard';

export default function Dashboard() {
  return <DashboardLayout sidebar={<OwnerSidebar />}></DashboardLayout>;
}
