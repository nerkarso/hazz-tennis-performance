import FormActions from '@/components/FormActions';
import UserForm, { UserFormAddress, UserFormEmail, UserFormFirstName, UserFormImage, UserFormLastName, UserFormPassword, UserFormPhone } from '@/components/UserForm';
import { usePath, useUserCreate } from '@/hooks';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

export default function UserNewForm({ role }) {
  const router = useRouter();
  const { basePath, resourcePath } = usePath();
  const { isLoading, mutate } = useUserCreate();

  const handleSubmit = (formData) => {
    mutate(
      { ...formData, role },
      {
        onSuccess: (data) => {
          if (data?.error) {
            toast.error(data.error);
          } else {
            toast.success('User created');
            router.push(`/${basePath}/${resourcePath}`);
          }
        },
      },
    );
  };

  return (
    <UserForm onSubmit={handleSubmit} className="max-w-2xl">
      <UserFormImage />
      <UserFormFirstName />
      <UserFormLastName />
      <UserFormEmail />
      <UserFormPassword />
      <UserFormPhone />
      <UserFormAddress />
      <FormActions isLoading={isLoading} loadingText="Creating..." submitText="Create" />
    </UserForm>
  );
}
