import DashboardLayout from '@/components/DashboardLayout';
import OwnerSidebar from '@/components/OwnerSidebar';

export default function Dashboard() {
  return <DashboardLayout sidebar={OwnerSidebar}></DashboardLayout>;
}
