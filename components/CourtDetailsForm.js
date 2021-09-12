import CourtForm, { CourtFormAddress, CourtFormCity, CourtFormName } from '@/components/CourtForm';

export default function CourtDetailsForm({ data }) {
  const { address, city, name } = data;

  return (
    <CourtForm className="max-w-2xl">
      <CourtFormName defaultValue={name} disabled />
      <CourtFormAddress defaultValue={address} disabled />
      <CourtFormCity defaultValue={city} disabled />
    </CourtForm>
  );
}
