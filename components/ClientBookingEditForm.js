import BookingForm, { BookingFormDate, BookingFormDuration, BookingFormLocation, BookingFormPaymentStatus, BookingFormPaymentType, BookingFormStatus, BookingFormTime } from '@/components/BookingForm';
import FormActions from '@/components/FormActions';
import { useBookingUpdate, usePath } from '@/hooks';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

export default function ClientBookingEditForm({ data }) {
  const router = useRouter();
  const { basePath, resourcePath } = usePath();
  const { isLoading, mutate } = useBookingUpdate();

  const handleSubmit = (formData) => {
    mutate(
      {
        id: data._id,
        ...formData,
      },
      {
        onSuccess: (data) => {
          if (data?.error) {
            toast.error(data.error);
          } else {
            toast.success('Booking updated');
            router.push(`/${basePath}/${resourcePath}`);
          }
        },
      },
    );
  };

  const { booking_status, date_time, duration, location, payment_status, payment_type } = data;

  return (
    <BookingForm onSubmit={handleSubmit} className="max-w-2xl">
      <BookingFormStatus defaultValue={booking_status} disabled />
      <BookingFormDate defaultValue={format(new Date(date_time), 'yyyy-MM-dd')} />
      <BookingFormTime defaultValue={format(new Date(date_time), 'HH:mm')} />
      <BookingFormDuration defaultValue={duration} />
      <BookingFormLocation defaultValue={location._id} />
      <BookingFormPaymentType defaultValue={payment_type} disabled />
      <BookingFormPaymentStatus defaultValue={payment_status} disabled />
      <FormActions className="grid-cols-2" isLoading={isLoading} loadingText="Updating..." submitText="Update" />
    </BookingForm>
  );
}
