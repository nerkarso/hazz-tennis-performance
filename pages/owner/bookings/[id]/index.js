import AdminContent from '@/components/AdminContent';
import AdminLayout from '@/components/AdminLayout';
import OwnerBookingEditForm from '@/components/OwnerBookingEditForm';
import OwnerSidebar from '@/components/OwnerSidebar';
import TotalFeesCard from '@/components/TotalFeesCard';
import UserDetailsCard from '@/components/UserDetailsCard';
import { DataFormContainer, SidePaneHeading, TwoPaneView } from '@/elements';
import { useBooking } from '@/hooks';

BookingEdit.title = 'Edit booking';

export default function BookingEdit({ bookingId }) {
  return (
    <AdminLayout sidebar={<OwnerSidebar />}>
      <AdminContent header="Edit booking">
        <DataFormContainer hook={useBooking} id={bookingId} rows={6}>
          {(data) => (
            <TwoPaneView
              leftPane={<OwnerBookingEditForm data={data} />}
              rightPane={
                <>
                  <SidePaneHeading>Total fees</SidePaneHeading>
                  <TotalFeesCard amount={data?.total_fees} className="w-full mb-6" />
                  <SidePaneHeading>Client</SidePaneHeading>
                  <UserDetailsCard user={data?.client} showDetailsUrl={`/owner/clients/${data?.client?._id}`} className="w-full mb-6" />
                  <SidePaneHeading>Coach</SidePaneHeading>
                  <UserDetailsCard user={data?.coach} showDetailsUrl={`/owner/coaches/${data?.coach?._id}`} className="w-full mb-6" />
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
