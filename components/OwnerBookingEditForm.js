import BookingForm, {
  BookingFormCoach,
  BookingFormDate,
  BookingFormLocation,
  BookingFormPaymentStatus,
  BookingFormPaymentType,
  BookingFormStatus,
  BookingFormTime,
  BookingFormTotalFees,
} from '@/components/BookingForm';
import FormActions from '@/components/FormActions';
import { useBookingUpdate, usePath } from '@/hooks';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

export default function OwnerBookingEditForm({ data }) {
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

  const { booking_status, coach, date_time, location, payment_status, payment_type, total_fees } = data;

  return (
    <BookingForm onSubmit={handleSubmit} className="max-w-2xl">
      <BookingFormStatus defaultValue={booking_status} />
      <BookingFormDate defaultValue={format(new Date(date_time), 'yyyy-MM-dd')} />
      <BookingFormTime defaultValue={format(new Date(date_time), 'HH:mm')} />
      <BookingFormCoach defaultValue={coach._id} />
      <BookingFormLocation defaultValue={location._id} />
      <BookingFormTotalFees defaultValue={total_fees} />
      <BookingFormPaymentType defaultValue={payment_type} />
      <BookingFormPaymentStatus defaultValue={payment_status} />
      <FormActions className="grid-cols-2" isLoading={isLoading} loadingText="Updating..." submitText="Update" />
    </BookingForm>
  );
}
