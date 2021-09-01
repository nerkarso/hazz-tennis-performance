import BookingForm, { BookingFormActions, BookingFormCoach, BookingFormDate, BookingFormLocation, BookingFormTime } from '@/components/BookingForm';
import ClientSidebar from '@/components/ClientSidebar';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import SideSectionHeading from '@/components/SideSectionHeading';
import TotalFeesCard from '@/components/TotalFeesCard';
import UserDetailsCard from '@/components/UserDetailsCard';
import { Button, TwoPaneView } from '@/elements';

BookingEdit.title = 'Edit booking';

export default function BookingEdit() {
  return (
    <DashboardLayout sidebar={<ClientSidebar />}>
      <DashboardContent header="Edit booking">
        <TwoPaneView
          leftPane={<BookingEditForm />}
          rightPane={
            <>
              <SideSectionHeading>Total fees</SideSectionHeading>
              <TotalFeesCard amount="100.00" className="w-full mb-6" />
              <SideSectionHeading>Coach</SideSectionHeading>
              <UserDetailsCard firstName="Roger" lastName="Federer" email="roger.federer@gmail.com" moreDetailsUrl="/client/coaches/1" className="w-full mb-6" />
            </>
          }
        />
      </DashboardContent>
    </DashboardLayout>
  );
}

function BookingEditForm() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <BookingForm onSubmit={onSubmit} className="max-w-2xl">
      <BookingFormDate />
      <BookingFormTime />
      <BookingFormCoach />
      <BookingFormLocation />
      <BookingFormActions>
        <Button type="submit" color="primary" variant="solid">
          Save
        </Button>
      </BookingFormActions>
    </BookingForm>
  );
}
