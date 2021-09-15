import CoachingHourForm, { CoachingHourFormDate, CoachingHourFormDuration } from '@/components/CoachingHourForm';
import FormActions from '@/components/FormActions';
import { useAuth, useCoachingHourCreate, usePath } from '@/hooks';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

export default function CoachingHourNewForm() {
  const router = useRouter();
  const { accountId } = useAuth();
  const { basePath, resourcePath } = usePath();
  const { isLoading, mutate } = useCoachingHourCreate();

  const handleSubmit = (formData) => {
    mutate(
      {
        coach: accountId,
        ...formData,
      },
      {
        onSuccess: (data) => {
          if (data?.error) {
            toast.error(data.error);
          } else {
            toast.success('Coaching hour created');
            router.push(`/${basePath}/${resourcePath}`);
          }
        },
      },
    );
  };

  return (
    <CoachingHourForm onSubmit={handleSubmit} className="max-w-2xl">
      <CoachingHourFormDate defaultValue={format(new Date(), 'y-MM-dd')} />
      <CoachingHourFormDuration defaultValue={1} />
      <FormActions className="grid-cols-2" isLoading={isLoading} loadingText="Creating..." submitText="Create" />
    </CoachingHourForm>
  );
}
