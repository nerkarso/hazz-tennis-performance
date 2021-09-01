import BookingForm, {
  BookingFormActions,
  BookingFormCoach,
  BookingFormDate,
  BookingFormDuration,
  BookingFormLocation,
  BookingFormPaymentStatus,
  BookingFormPaymentType,
  BookingFormStatus,
  BookingFormTime,
} from '@/components/BookingForm';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import OwnerSidebar from '@/components/OwnerSidebar';
import SideSectionHeading from '@/components/SideSectionHeading';
import TotalFeesCard from '@/components/TotalFeesCard';
import UserDetailsCard from '@/components/UserDetailsCard';
import { Button, TwoPaneView } from '@/elements';

BookingEdit.title = 'Edit booking';

export default function BookingEdit() {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="Edit booking">
        <TwoPaneView
          leftPane={<BookingEditForm />}
          rightPane={
            <>
              <SideSectionHeading>Total fees</SideSectionHeading>
              <TotalFeesCard amount="100.00" className="w-full mb-6" />
              <SideSectionHeading>Client</SideSectionHeading>
              <UserDetailsCard firstName="Maria" lastName="Sharapova" email="maria.sharapova@gmail.com" moreDetailsUrl="/owner/clients/1" className="w-full mb-6" />
              <SideSectionHeading>Coach</SideSectionHeading>
              <UserDetailsCard firstName="Roger" lastName="Federer" email="roger.federer@gmail.com" moreDetailsUrl="/owner/coaches/1" className="w-full mb-6" />
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
      <BookingFormStatus defaultValue={0} />
      <BookingFormDate />
      <BookingFormTime />
      <BookingFormDuration />
      <BookingFormCoach />
      <BookingFormLocation />
      <BookingFormPaymentType defaultValue="cash" />
      <BookingFormPaymentStatus defaultValue={false} />
      <BookingFormActions>
        <Button type="submit" color="primary" variant="solid">
          Save
        </Button>
      </BookingFormActions>
    </BookingForm>
  );
}
