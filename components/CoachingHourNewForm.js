import CoachingHourForm, { CoachingHourFormDate, CoachingHourFormDuration } from '@/components/CoachingHourForm';
import FormActions from '@/components/FormActions';
import { useCoachingHourCreate, usePath } from '@/hooks';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

export default function CoachingHourNewForm() {
  const router = useRouter();
  const { basePath, resourcePath } = usePath();
  const { isLoading, mutate } = useCoachingHourCreate();

  const handleSubmit = (formData) => {
    mutate(
      {
        coach: '6133d7325c988c5bd2ceff10',
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
      <CoachingHourFormDate />
      <CoachingHourFormDuration />
      <FormActions className="grid-cols-2" isLoading={isLoading} loadingText="Creating..." submitText="Create" />
    </CoachingHourForm>
  );
}
