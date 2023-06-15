export interface ILoginRegisterContextOption {
  title: string;
  subTitle?: string;
  message?: string;
  link?: string;
  aMessage?: string;
}
export interface IHomeContextOption {
  title: string;
}
export interface ProductDetailModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  modalLabel: string;
}
