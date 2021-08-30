import ClientSidebar from '@/components/ClientSidebar';
import DashboardLayout from '@/components/DashboardLayout';

export default function Dashboard() {
  return <DashboardLayout sidebar={<ClientSidebar />}></DashboardLayout>;
}
