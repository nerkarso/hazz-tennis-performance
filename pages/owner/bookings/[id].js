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
import { Button } from '@/elements';

BookingEdit.title = 'Edit booking';

export default function BookingEdit() {
  return (
    <DashboardLayout sidebar={<OwnerSidebar />}>
      <DashboardContent header="Edit booking">
        <BookingEditForm />
      </DashboardContent>
    </DashboardLayout>
  );
}

function BookingEditForm() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <BookingForm onSubmit={onSubmit}>
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
