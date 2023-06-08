import { useAuth } from "../../hooks/useAuth";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useEffect, useMemo, useState } from "react";
import {
  Product,
  ProductRepositoryAble,
} from "../../services/datasources/interfaces/product";
import { ProductRepository } from "../../services/product";
import ProductServiceMock from "../../services/datasources/mocks/product";
import { ProductService } from "../../services/datasources/remotes/product";

export const useViewModel = () => {
  const [user] = useState(useAuth().user);
  const [products, setProducts] = useState<Product[]>([]);

  const { removeItem } = useLocalStorage();
  const productRepo: ProductRepositoryAble = useMemo(() => {
    return new ProductRepository(new ProductService());
  }, []);
  useEffect(() => {
    productRepo
      .getProducts()
      .then((res) => {
        console.log("res: ", res);
        setProducts(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return {
    user,
    removeItem,
    products,
  };
};
