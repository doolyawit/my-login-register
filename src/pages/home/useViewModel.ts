import { useAuth } from '../../hooks/useAuth';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useEffect, useMemo, useState } from 'react';
import {
  Product,
  ProductRepositoryAble,
} from '../../services/datasources/interfaces/product';
import { ProductRepository } from '../../services/product';
import { ProductService } from '../../services/datasources/remotes/product';

const useViewModel = () => {
  const [user] = useState(useAuth().user);

  const [products, setProducts] = useState<Product[]>([]);
  const [productIndex, setProductIndex] = useState(-1);

  const { removeItem } = useLocalStorage();

  const productRepo: ProductRepositoryAble = useMemo(() => {
    return new ProductRepository(new ProductService());
  }, []);

  useEffect(() => {
    productRepo.getProducts().subscribe({
      next: (res) => {
        setProducts(res);
        console.log('res: from home ', res);
      },
      error: (err) => {
        console.log('err: ', err);
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    user,
    removeItem,
    products,
    productIndex,
    setProductIndex,
  };
};
export default useViewModel;
