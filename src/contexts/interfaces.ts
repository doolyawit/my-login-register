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
export interface InformationModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}
