import BookingForm, {
  BookingFormCoach,
  BookingFormDate,
  BookingFormDuration,
  BookingFormLocation,
  BookingFormPaymentStatus,
  BookingFormPaymentType,
  BookingFormStatus,
  BookingFormTime,
} from '@/components/BookingForm';
import FormActions from '@/components/FormActions';
import { useBookingUpdate, usePath, useSocket } from '@/hooks';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

export default function OwnerBookingEditForm({ data }) {
  const router = useRouter();
  const { socket } = useSocket();
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
            if (formData?.notify_client) {
              toast.success('Notification sent to client');
            }
            if (formData?.notify_coach) {
              toast.success('Notification sent to coach');
            }
            if (formData?.notify_client || formData?.notify_coach) {
              socket?.emit('notification:refresh');
            }
            router.push(`/${basePath}/${resourcePath}`);
          }
        },
      },
    );
  };

  const { booking_status, coach, date_time, duration, location, payment_status, payment_type } = data;

  return (
    <BookingForm onSubmit={handleSubmit} className="max-w-2xl">
      <BookingFormStatus defaultValue={booking_status} />
      <BookingFormDate defaultValue={format(new Date(date_time), 'yyyy-MM-dd')} />
      <BookingFormTime defaultValue={format(new Date(date_time), 'HH:mm')} />
      <BookingFormDuration defaultValue={duration} />
      <BookingFormCoach booking={data} defaultValue={coach?._id} />
      <BookingFormLocation defaultValue={location?._id} />
      <BookingFormPaymentType defaultValue={payment_type} />
      <BookingFormPaymentStatus defaultValue={payment_status} />
      <FormActions className="grid-cols-2" isLoading={isLoading} loadingText="Updating..." submitText="Update" />
    </BookingForm>
  );
}
