import CoachingHourForm, { CoachingHourFormDate, CoachingHourFormDuration } from '@/components/CoachingHourForm';
import FormActions from '@/components/FormActions';
import { useCoachingHourUpdate, usePath } from '@/hooks';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

export default function CoachingHourEditForm({ data }) {
  const router = useRouter();
  const { basePath, resourcePath } = usePath();
  const { isLoading, mutate } = useCoachingHourUpdate();

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
            toast.success('Coaching hours updated');
            router.push(`/${basePath}/${resourcePath}`);
          }
        },
      },
    );
  };

  const { date, duration } = data;

  return (
    <CoachingHourForm onSubmit={handleSubmit} className="max-w-2xl">
      <CoachingHourFormDate defaultValue={format(new Date(date), 'yyyy-MM-dd')} />
      <CoachingHourFormDuration defaultValue={duration} />
      <FormActions className="grid-cols-2" isLoading={isLoading} loadingText="Updating..." submitText="Update" />
    </CoachingHourForm>
  );
}
