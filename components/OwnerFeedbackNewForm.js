import FeedbackForm, { FeedbackFormMessage } from '@/components/FeedbackForm';
import FormActions from '@/components/FormActions';
import { useAuth, useFeedbackReplyCreate } from '@/hooks';
import toast from 'react-hot-toast';

export default function OwnerFeedbackNewForm({ feedbackId, onCancel }) {
  const { accountId } = useAuth();
  const { isLoading, mutate } = useFeedbackReplyCreate();

  const handleSubmit = (formData) => {
    mutate(
      {
        feedbackId: feedbackId,
        user: accountId,
        ...formData,
      },
      {
        onSuccess: (data) => {
          if (data?.error) {
            toast.error(data.error);
          } else {
            toast.success('Feedback message submitted');
            onCancel();
          }
        },
      },
    );
  };

  return (
    <FeedbackForm onSubmit={handleSubmit} className="max-w-2xl">
      <FeedbackFormMessage />
      <FormActions className="grid-cols-2 mt-0" isLoading={isLoading} loadingText="Submitting..." onCancel={onCancel} submitText="Submit" />
    </FeedbackForm>
  );
}
