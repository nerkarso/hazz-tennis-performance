import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import ClientBookingNewForm from '@/components/ClientBookingNewForm';
import ClientSidebar from '@/components/ClientSidebar';
import TotalFeesCard from '@/components/TotalFeesCard';
import { SidePaneHeading, TwoPaneView } from '@/elements';

BookingNew.title = 'New booking';

export default function BookingNew() {
  return (
    <AdminLayout sidebar={<ClientSidebar />}>
      <AdminContent header="New booking">
        <TwoPaneView
          leftPane={<ClientBookingNewForm />}
          rightPane={
            <>
              <SidePaneHeading>Total fees</SidePaneHeading>
              <TotalFeesCard className="w-full" />
            </>
          }
        />
      </AdminContent>
    </AdminLayout>
  );
}
