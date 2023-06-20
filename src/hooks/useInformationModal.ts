import { useContext } from "react";
import { InformationModalContext } from "../contexts/informationModalProvider";

export const useInformationModal = () => {
  return useContext(InformationModalContext);
};
