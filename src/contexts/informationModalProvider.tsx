import React, { useState } from "react";
import { InformationModalContextType } from "./interfaces";

export const InformationModalContext =
  React.createContext<InformationModalContextType>(
    {} as InformationModalContextType
  );

function InformationModalProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <InformationModalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </InformationModalContext.Provider>
  );
}

export default InformationModalProvider;
