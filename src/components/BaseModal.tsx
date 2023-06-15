import Modal from "react-modal";
import { modalProps } from "./interfaces/modal";

const defaultStyle = {
  overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    height: "60%",
    background: "white",
    borderRadius: "0.6rem",
    border: "none",
    padding: "0",
  },
};

function BaseModal({
  isModalOpen,
  modalLabel,
  children,
  closeModal,
}: modalProps) {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel={modalLabel}
      style={defaultStyle}
      appElement={document.getElementById("root") || undefined}
      //* appElement for screen reader user
    >
      {children}
    </Modal>
  );
}

export default BaseModal;
