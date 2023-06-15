import Modal, { Styles } from "react-modal";
import { css, cx } from "@emotion/css";
import { modalProps } from "./interfaces/modal";

const defaultStyle = {
  overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    height: "65%",
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
  modalSize,
  closeModal,
}: modalProps) {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel={modalLabel}
      style={defaultStyle}
      appElement={document.getElementById("root") || undefined}
      //TODO : use CX instead of CSS
      //TODO: research abt appElement (line 33)
      //* appElement for screen reader user
      //TODO: size of modal
      //TODO:size of img (sm)
    >
      {children}
    </Modal>
  );
}

export default BaseModal;
