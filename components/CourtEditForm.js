import CourtForm, { CourtFormAddress, CourtFormCity, CourtFormName } from '@/components/CourtForm';
import FormActions from '@/components/FormActions';
import { useCourtUpdate, usePath } from '@/hooks';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

export default function CourtEditForm({ court }) {
  const router = useRouter();
  const { basePath, resourcePath } = usePath();
  const { isLoading, mutate } = useCourtUpdate();

  const handleSubmit = (formData) => {
    mutate(
      {
        id: court._id,
        ...formData,
      },
      {
        onSuccess: (data) => {
          if (data?.error) {
            toast.error(data.error);
          } else {
            toast.success('Court updated');
            router.push(`/${basePath}/${resourcePath}`);
          }
        },
      },
    );
  };

  const { address, city, name } = court;

  return (
    <CourtForm onSubmit={handleSubmit} className="max-w-2xl">
      <CourtFormName defaultValue={name} />
      <CourtFormAddress defaultValue={address} />
      <CourtFormCity defaultValue={city} />
      <FormActions className="grid-cols-2" isLoading={isLoading} loadingText="Updating..." submitText="Update" />
    </CourtForm>
  );
}
