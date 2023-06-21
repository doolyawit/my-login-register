import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  url: string | undefined;
}

export interface ProductServiceAble {
  reqGetProducts(): Observable<Product[]>;
}

export interface ProductRepositoryAble {
  getProducts: () => Observable<Product[]>;
}
