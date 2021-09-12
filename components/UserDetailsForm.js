import UserForm, { UserFormAddress, UserFormEmail, UserFormFirstName, UserFormImage, UserFormLastName, UserFormPhone } from '@/components/UserForm';

export default function UserDetailsForm({ data }) {
  const { image_url, first_name, last_name, email, phone, address } = data;

  return (
    <UserForm className="max-w-2xl">
      <UserFormImage defaultValue={image_url} disabled />
      <UserFormFirstName defaultValue={first_name} disabled />
      <UserFormLastName defaultValue={last_name} disabled />
      <UserFormEmail defaultValue={email} disabled />
      <UserFormPhone defaultValue={phone} disabled />
      <UserFormAddress defaultValue={address} disabled />
    </UserForm>
  );
}
