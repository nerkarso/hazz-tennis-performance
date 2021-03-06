import CourtDetailsForm from '@/components/CourtDetailsForm';
import { DataFormContainer } from '@/elements';
import { useCourt } from '@/hooks';

export default function CourtDetailsView({ courtId }) {
  return (
    <DataFormContainer hook={useCourt} id={courtId} rows={4}>
      {(data) => <CourtDetailsForm data={data} />}
    </DataFormContainer>
  );
}
