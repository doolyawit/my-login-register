import React, { useState } from "react";
import { ProductDetailModalContextType } from "./interfaces";

//TODO: fix this null arrest!
export const ProductDetailModalContext =
  React.createContext<ProductDetailModalContextType>(null!);

function ProductDetailModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const modalLabel = "Product Detail Modal";
  return (
    <ProductDetailModalContext.Provider
      value={{ isModalOpen, openModal, closeModal, modalLabel }}
    >
      {children}
    </ProductDetailModalContext.Provider>
  );
}

export default ProductDetailModalProvider;
