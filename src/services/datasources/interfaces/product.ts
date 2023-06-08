export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  url: string | undefined;
}

export interface ProductServiceAble {
  reqGetProducts(): Promise<Product[]>;
}

export interface ProductRepositoryAble {
  getProducts: () => Promise<Product[]>;
}
