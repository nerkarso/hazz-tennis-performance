import NewCoachModal from '@/components/NewCoachModal';

export default function EditCoachModal({ isOpen, onClose }) {
  return <NewCoachModal title="Edit Coach Details" isOpen={isOpen} onClose={onClose} btnText="Update" />;
}
