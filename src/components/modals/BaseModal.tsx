import Modal from "react-modal";
import { modalProps } from "../interfaces/modal";

const defaultStyle = {
  overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
};

function BaseModal({
  isModalOpen,
  closeModal,
  modalLabel,
  modalStyle,
  children,
}: modalProps) {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel={modalLabel}
      style={defaultStyle}
      className={modalStyle}
      appElement={document.getElementById("root") || undefined}
    >
      {children}
    </Modal>
  );
}

export default BaseModal;
