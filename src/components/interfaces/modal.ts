import { ReactNode } from 'react';

export interface modalProps {
  isModalOpen: boolean;
  modalLabel: string;
  children: React.ReactNode;
  closeModal: () => void;
  modalStyle: string;
}
export interface InformationModalProps {
  children: ReactNode;
  modalLabel: string;
  title: string;
  button1Label: string;
  button1OnClick: () => void;
  button2Label?: string;
  button2OnClick?: () => void;
}
