import CourtForm, { CourtFormAddress, CourtFormCity, CourtFormName } from '@/components/CourtForm';
import FormActions from '@/components/FormActions';
import { useCourtCreate, usePath } from '@/hooks';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

export default function CourtNewForm() {
  const router = useRouter();
  const { basePath, resourcePath } = usePath();
  const { isLoading, mutate } = useCourtCreate();

  const handleSubmit = (formData) => {
    mutate(formData, {
      onSuccess: (data) => {
        if (data?.error) {
          toast.error(data.error);
        } else {
          toast.success('Court created');
          router.push(`/${basePath}/${resourcePath}`);
        }
      },
    });
  };

  return (
    <CourtForm onSubmit={handleSubmit} className="max-w-2xl">
      <CourtFormName />
      <CourtFormAddress />
      <CourtFormCity />
      <FormActions className="grid-cols-2" isLoading={isLoading} loadingText="Creating..." submitText="Create" />
    </CourtForm>
  );
}
