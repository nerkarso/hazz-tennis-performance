import BookingForm, { BookingFormDate, BookingFormDuration, BookingFormLocation, BookingFormPaymentType, BookingFormTime } from '@/components/BookingForm';
import FormActions from '@/components/FormActions';
import PaymentModal from '@/components/PaymentModal';
import { useAuth, useBookingCreate, usePath, useSocket } from '@/hooks';
import { useRouter } from 'next/router';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ClientBookingNewForm() {
  const router = useRouter();
  const { accountId } = useAuth();
  const { socket } = useSocket();
  const { basePath, resourcePath } = usePath();
  const { isLoading, mutate } = useBookingCreate();
  const [booking, setBooking] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const createBooking = (formData) => {
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
            socket?.emit('notification:refresh');
          }
        },
      },
    );
  };

  const handleSubmit = (formData) => {
    if (formData?.payment_type?.includes('card')) {
      if (booking?.payment_details) {
        createBooking(booking);
      } else {
        setBooking(formData);
        setIsModalOpen(true);
      }
    } else {
      createBooking(formData);
    }
  };

  return (
    <>
      <BookingForm onSubmit={handleSubmit} className="max-w-2xl">
        <BookingFormDate />
        <BookingFormTime />
        <BookingFormDuration defaultValue={0} />
        <BookingFormLocation />
        <BookingFormPaymentType defaultValue="cash" enableNote />
        <FormActions className="grid-cols-2" isLoading={isLoading} loadingText="Processing..." submitText="Submit" />
      </BookingForm>
      <PaymentModal
        isOpen={isModalOpen}
        onSubmit={(formData) =>
          setBooking({
            ...booking,
            payment_status: true,
            payment_details: formData,
          })
        }
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
