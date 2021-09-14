import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import ClientBookingEditForm from '@/components/ClientBookingEditForm';
import ClientSidebar from '@/components/ClientSidebar';
import DataFormContainer from '@/components/DataFormContainer';
import TotalFeesCard from '@/components/TotalFeesCard';
import UserDetailsCard from '@/components/UserDetailsCard';
import { SidePaneHeading, TwoPaneView } from '@/elements';
import { useBooking } from '@/hooks';

BookingEdit.title = 'Edit booking';

export default function BookingEdit({ bookingId }) {
  return (
    <AdminLayout sidebar={<ClientSidebar />}>
      <AdminContent header="Edit booking">
        <DataFormContainer hook={useBooking} id={bookingId} rows={6}>
          {(data) => (
            <TwoPaneView
              leftPane={<ClientBookingEditForm data={data} />}
              rightPane={
                <>
                  <SidePaneHeading>Total fees</SidePaneHeading>
                  <TotalFeesCard amount={data?.total_fees} className="w-full mb-6" />
                  <SidePaneHeading>Coach</SidePaneHeading>
                  <UserDetailsCard user={data?.coach} showDetailsUrl={`/client/coaches/${data?.coach?._id}`} className="w-full mb-6" />
                </>
              }
            />
          )}
        </DataFormContainer>
      </AdminContent>
    </AdminLayout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  return {
    props: {
      bookingId: id,
    },
  };
}
