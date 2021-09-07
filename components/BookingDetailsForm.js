import BookingForm, { BookingFormDate, BookingFormLocationText, BookingFormPaymentStatus, BookingFormPaymentType, BookingFormStatus, BookingFormTime } from '@/components/BookingForm';
import { format } from 'date-fns';

export default function BookingDetailsForm({ booking }) {
  const { booking_status, date_time, location, payment_status, payment_type } = booking;

  return (
    <BookingForm className="max-w-2xl">
      <BookingFormStatus defaultValue={booking_status} disabled />
      <BookingFormDate defaultValue={format(new Date(date_time), 'yyyy-MM-dd')} disabled />
      <BookingFormTime defaultValue={format(new Date(date_time), 'HH:mm')} disabled />
      <BookingFormLocationText defaultValue={`${location.name}, ${location.address}`} disabled />
      <BookingFormPaymentType defaultValue={payment_type} disabled />
      <BookingFormPaymentStatus defaultValue={payment_status} disabled />
    </BookingForm>
  );
}
