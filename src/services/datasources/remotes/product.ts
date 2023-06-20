import ProductRemote from "../../productRemote";
import { Product, ProductServiceAble } from "../interfaces/product";
import { PictureService } from "./picture";
import { mergeMap, from, of } from "rxjs";

export class ProductService
  extends ProductRemote
  implements ProductServiceAble
{
  //* for loop version
  // reqGetProducts(): Promise<Product[]> {
  //   const pictureRepo = new PictureService();
  //   return new Promise((resolve, reject) => {
  //     this.getInstance()
  //       .get<Product[]>("/products")
  //       .then(async (res) => {
  //         const products = res.data;
  //         for (let i = 0; i < products.length; i++) {
  //           const product = products[i];
  //           const resPicture = await pictureRepo.reqGetPictures();
  //           if (resPicture) {
  //             product.url = resPicture[i].url ?? "";
  //           }
  //         }
  //         resolve(products);
  //       })
  //       .catch((err) => reject(err));
  //   });
  // }

  //* rxjs version
  reqGetProducts(): Promise<Product[]> {
    const pictureRepo = new PictureService();
    return new Promise((resolve, reject) => {
      this.getInstance()
        .get<Product[]>("/products")
        .then((res) => {
          from(res.data)
            .pipe(
              mergeMap((product: Product, index: number) =>
                from(pictureRepo.reqGetPictures()).pipe(
                  mergeMap((picture) => {
                    product.url = picture[index].url ?? "";

                    return of(product);
                  })
                )
              )
            )
            .subscribe(() => resolve(res.data));
        })
        .catch((err) => reject(err));
    });
  }
}
