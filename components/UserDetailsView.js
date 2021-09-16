import UserDetailsForm from '@/components/UserDetailsForm';
import { Avatar, DataFormContainer, TwoPaneView } from '@/elements';
import { useUser } from '@/hooks';

export default function UserDetailsView({ userId }) {
  return (
    <DataFormContainer hook={useUser} id={userId} rows={6}>
      {(data) => <TwoPaneView leftPane={<UserDetailsForm data={data} />} rightPane={<Avatar src={data?.image_url} initials={data?.first_name[0]} size="5xl" />} />}
    </DataFormContainer>
  );
}
