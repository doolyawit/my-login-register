export interface modalProps {
  isModalOpen: boolean;
  modalLabel: string;
  children: React.ReactNode;
  modalSize?: string;
  closeModal: () => void;
}
