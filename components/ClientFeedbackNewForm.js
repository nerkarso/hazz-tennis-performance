import FeedbackForm, { FeedbackFormMessage, FeedbackFormRating } from '@/components/FeedbackForm';
import FormActions from '@/components/FormActions';
import { useAuth, useFeedbackCreate } from '@/hooks';
import toast from 'react-hot-toast';

export default function ClientFeedbackNewForm({ bookingId, onCancel }) {
  const { accountId } = useAuth();
  const { isLoading, mutate } = useFeedbackCreate();

  const handleSubmit = (formData) => {
    mutate(
      {
        booking: bookingId,
        user: accountId,
        ...formData,
      },
      {
        onSuccess: (data) => {
          if (data?.error) {
            toast.error(data.error);
          } else {
            toast.success('Feedback submitted');
            onCancel();
          }
        },
      },
    );
  };

  return (
    <FeedbackForm onSubmit={handleSubmit} className="max-w-2xl" enableRating>
      <FeedbackFormRating />
      <FeedbackFormMessage />
      <FormActions className="grid-cols-2 mt-0" isLoading={isLoading} loadingText="Submitting..." onCancel={onCancel} submitText="Submit" />
    </FeedbackForm>
  );
}
