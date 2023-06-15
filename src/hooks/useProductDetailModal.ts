import { useContext } from "react";
import { ProductDetailModalContext } from "../contexts/ProductDetailModalProvider";

export const useProductDetailModal = () => {
  return useContext(ProductDetailModalContext);
};
