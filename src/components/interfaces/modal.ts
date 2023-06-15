export interface modalProps {
  isModalOpen: boolean;
  modalLabel: string;
  children: React.ReactNode;
  closeModal: () => void;
}
