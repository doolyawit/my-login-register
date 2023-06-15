import ProductRemote from "../../productRemote";
import { Product, ProductServiceAble } from "../interfaces/product";
import { PictureService } from "./picture";

export class ProductService
  extends ProductRemote
  implements ProductServiceAble
{
  reqGetProducts(): Promise<Product[]> {
    const pictureRepo = new PictureService();
    return new Promise((resolve, reject) => {
      this.getInstance()
        .get<Product[]>("/products")
        .then(async (res) => {
          const products = res.data;
          for (let i = 0; i < products.length; i++) {
            const product = products[i];
            const resPicture = await pictureRepo.reqGetPictures();
            if (resPicture) {
              product.url = resPicture[i].url ?? "";
            }
          }
          resolve(products);
        })
        .catch((err) => reject(err));
    });
  }
}
