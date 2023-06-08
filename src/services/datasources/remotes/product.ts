import ProductRemote from "../../productRemote";
import { Product, ProductServiceAble } from "../interfaces/product";

export class ProductService
  extends ProductRemote
  implements ProductServiceAble
{
  reqGetProducts(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      this.getInstance()
        .get<Product[]>("/products")
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  }
}
