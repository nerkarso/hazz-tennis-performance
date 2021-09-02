import FormActions from '@/components/FormActions';
import UserForm, { UserFormAddress, UserFormEmail, UserFormFirstName, UserFormImage, UserFormLastName, UserFormPhone } from '@/components/UserForm';
import { useUserUpdate } from '@/hooks';
import toast from 'react-hot-toast';

export default function UserEditForm({ user }) {
  const { isLoading, mutate } = useUserUpdate();

  const handleSubmit = (formData) => {
    mutate(
      {
        id: user._id,
        ...formData,
      },
      {
        onSuccess: (data) => {
          if (data?.error) {
            toast.error(data.error);
          } else {
            toast.success('User updated');
          }
        },
      },
    );
  };

  const { image_url, first_name, last_name, email, phone, address } = user;

  return (
    <UserForm onSubmit={handleSubmit} className="max-w-2xl">
      <UserFormImage defaultValue={image_url} />
      <UserFormFirstName defaultValue={first_name} />
      <UserFormLastName defaultValue={last_name} />
      <UserFormEmail defaultValue={email} />
      <UserFormPhone defaultValue={phone} />
      <UserFormAddress defaultValue={address} />
      <FormActions isLoading={isLoading} loadingText="Updating..." submitText="Update" />
    </UserForm>
  );
}
