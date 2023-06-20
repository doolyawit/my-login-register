import { useAuth } from "../../hooks/useAuth";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useEffect, useMemo, useState } from "react";
import {
  Product,
  ProductRepositoryAble,
} from "../../services/datasources/interfaces/product";
import { ProductRepository } from "../../services/product";
import { ProductService } from "../../services/datasources/remotes/product";

const useViewModel = () => {
  const [user] = useState(useAuth().user);

  const [products, setProducts] = useState<Product[]>([]);
  const [productIndex, setProductIndex] = useState(-1);

  const { removeItem } = useLocalStorage();

  const productRepo: ProductRepositoryAble = useMemo(() => {
    return new ProductRepository(new ProductService());
  }, []);

  useEffect(() => {
    productRepo
      .getProducts()
      .then((res) => {
        setProducts(res);
        console.log("response ", res);
      })
      .catch((err) => {
        console.error(err);
      });
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
