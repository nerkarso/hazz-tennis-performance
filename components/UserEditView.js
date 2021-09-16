import UserEditForm from '@/components/UserEditForm';
import { Avatar, DataFormContainer, TwoPaneView } from '@/elements';
import { useUser } from '@/hooks';

export default function UserEditView({ userId }) {
  return (
    <DataFormContainer hook={useUser} id={userId} rows={6}>
      {(data) => <TwoPaneView leftPane={<UserEditForm data={data} />} rightPane={<Avatar src={data?.image_url} initials={data?.first_name[0]} size="5xl" />} />}
    </DataFormContainer>
  );
}
