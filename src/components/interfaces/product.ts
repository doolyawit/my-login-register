import { Product } from '../../services/datasources/interfaces/product';

export interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}
export interface ProductDetailModalProps {
  product: Product;
}
