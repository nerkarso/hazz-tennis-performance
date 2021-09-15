import BookingForm, { BookingFormDate, BookingFormDuration, BookingFormLocation, BookingFormPaymentType, BookingFormTime } from '@/components/BookingForm';
import FormActions from '@/components/FormActions';
import { useAuth, useBookingCreate, usePath } from '@/hooks';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

export default function ClientBookingNewForm() {
  const router = useRouter();
  const { accountId } = useAuth();
  const { basePath, resourcePath } = usePath();
  const { isLoading, mutate } = useBookingCreate();

  const handleSubmit = (formData) => {
    mutate(
      {
        client: accountId,
        ...formData,
      },
      {
        onSuccess: (data) => {
          if (data?.error) {
            toast.error(data.error);
          } else {
            toast.success('Booking created');
            router.push(`/${basePath}/${resourcePath}`);
          }
        },
      },
    );
  };

  return (
    <BookingForm onSubmit={handleSubmit} className="max-w-2xl">
      <BookingFormDate />
      <BookingFormTime />
      <BookingFormDuration defaultValue={0} />
      <BookingFormLocation />
      <BookingFormPaymentType defaultValue="cash" />
      <FormActions className="grid-cols-2" isLoading={isLoading} loadingText="Creating..." submitText="Create" />
    </BookingForm>
  );
}
