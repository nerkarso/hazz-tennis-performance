import FormActions from '@/components/FormActions';
import UserForm, { UserFormAddress, UserFormEmail, UserFormFirstName, UserFormImage, UserFormLastName, UserFormPhone } from '@/components/UserForm';
import { usePath, useUserUpdate } from '@/hooks';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

export default function UserEditForm({ data, onUpdate }) {
  const router = useRouter();
  const { basePath, resourcePath } = usePath();
  const { isLoading, mutate } = useUserUpdate();

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
            if (onUpdate) {
              onUpdate();
            } else {
              toast.success('User updated');
              router.push(`/${basePath}/${resourcePath}`);
            }
          }
        },
      },
    );
  };

  const { image_url, first_name, last_name, email, phone, address } = data;

  return (
    <UserForm onSubmit={handleSubmit} className="max-w-2xl">
      <UserFormImage defaultValue={image_url} />
      <UserFormFirstName defaultValue={first_name} />
      <UserFormLastName defaultValue={last_name} />
      <UserFormEmail defaultValue={email} />
      <UserFormPhone defaultValue={phone} />
      <UserFormAddress defaultValue={address} />
      <FormActions className="grid-cols-2" isLoading={isLoading} loadingText="Updating..." submitText="Update" />
    </UserForm>
  );
}
