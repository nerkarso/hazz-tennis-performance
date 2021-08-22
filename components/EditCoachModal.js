import React from "react";
import NewCoachModal from "./NewCoachModal";

function EditCoachModal({ isOpen, onClose }) {
  return (
    <NewCoachModal
      title="Edit Coach Details"
      isOpen={isOpen}
      onClose={onClose}
      btnText="Update"
    />
  );
}

export default EditCoachModal;
