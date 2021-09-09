import BookingForm, { BookingFormDate, BookingFormLocation, BookingFormPaymentType, BookingFormTime } from '@/components/BookingForm';
import FormActions from '@/components/FormActions';
import { useBookingCreate, usePath } from '@/hooks';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

export default function ClientBookingNewForm() {
  const router = useRouter();
  const { basePath, resourcePath } = usePath();
  const { isLoading, mutate } = useBookingCreate();

  const handleSubmit = (formData) => {
    mutate(formData, {
      onSuccess: (data) => {
        if (data?.error) {
          toast.error(data.error);
        } else {
          toast.success('Booking created');
          router.push(`/${basePath}/${resourcePath}`);
        }
      },
    });
  };

  return (
    <BookingForm onSubmit={handleSubmit} className="max-w-2xl">
      <BookingFormDate />
      <BookingFormTime />
      <BookingFormLocation />
      <BookingFormPaymentType defaultValue="cash" />
      <FormActions className="grid-cols-2" isLoading={isLoading} loadingText="Creating..." submitText="Create" />
    </BookingForm>
  );
}
