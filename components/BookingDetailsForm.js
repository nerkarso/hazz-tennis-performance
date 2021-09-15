import BookingForm, {
  BookingFormDate,
  BookingFormDuration,
  BookingFormLocationText,
  BookingFormPaymentStatus,
  BookingFormPaymentType,
  BookingFormStatus,
  BookingFormTime,
} from '@/components/BookingForm';
import { format } from 'date-fns';

export default function BookingDetailsForm({ data }) {
  const { booking_status, date_time, duration, location, payment_status, payment_type } = data;

  return (
    <BookingForm className="max-w-2xl">
      <BookingFormStatus defaultValue={booking_status} disabled />
      <BookingFormDate defaultValue={format(new Date(date_time), 'yyyy-MM-dd')} disabled />
      <BookingFormTime defaultValue={format(new Date(date_time), 'HH:mm')} disabled />
      <BookingFormDuration defaultValue={duration} disabled />
      <BookingFormLocationText defaultValue={`${location.name}, ${location.address}`} disabled />
      <BookingFormPaymentType defaultValue={payment_type} disabled />
      <BookingFormPaymentStatus defaultValue={payment_status} disabled />
    </BookingForm>
  );
}
