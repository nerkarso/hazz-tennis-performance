import BookingForm, { BookingFormDate, BookingFormLocation, BookingFormPaymentStatus, BookingFormStatus, BookingFormTime } from '@/components/BookingForm';
import CoachSidebar from '@/components/CoachSidebar';
import DashboardContent from '@/components/DashboardContent';
import DashboardLayout from '@/components/DashboardLayout';
import SideSectionHeading from '@/components/SideSectionHeading';
import TotalFeesCard from '@/components/TotalFeesCard';
import UserDetailsCard from '@/components/UserDetailsCard';
import { TwoPaneView } from '@/elements';

BookingDetails.title = 'Booking details';

export default function BookingDetails() {
  return (
    <DashboardLayout sidebar={<CoachSidebar />}>
      <DashboardContent header="Booking details">
        <TwoPaneView
          leftPane={<BookingDetailsForm />}
          rightPane={
            <>
              <SideSectionHeading>Total fees</SideSectionHeading>
              <TotalFeesCard amount="100.00" className="w-full mb-6" />
              <SideSectionHeading>Client</SideSectionHeading>
              <UserDetailsCard firstName="Maria" lastName="Sharapova" email="maria.sharapova@gmail.com" moreDetailsUrl="/coach/clients/1" className="w-full mb-6" />
            </>
          }
        />
      </DashboardContent>
    </DashboardLayout>
  );
}

function BookingDetailsForm() {
  return (
    <BookingForm className="max-w-2xl">
      <BookingFormStatus defaultValue={1} />
      <BookingFormDate />
      <BookingFormTime />
      <BookingFormLocation />
      <BookingFormPaymentStatus defaultValue={true} />
    </BookingForm>
  );
}
