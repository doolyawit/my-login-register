import ProductRemote from '../../productRemote';
import { Product, ProductServiceAble } from '../interfaces/product';
import { PictureService } from './picture';
import { mergeMap, from, of, Observable, toArray, zip, map } from 'rxjs';

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

    const observableProduct = new Observable<Product[]>((subscribe) => {
      this.getInstance()
        .get<Product[]>('/products')
        .then((res) => subscribe.next(res.data))
        .catch((err) => subscribe.error(err));
    });

    const observablePic = from(pictureRepo.reqGetPictures());

    // solution 1
    zip(observableProduct, observablePic)
      .pipe(
        mergeMap((values) => {
          return from(values?.[0]).pipe(
            map((product, index) => {
              product.url = values?.[1]?.[index].url;
              return product;
            }),
            toArray()
          );
        })
      )
      .subscribe({
        next: (values) => {
          console.log('result1: ', values);
        },
      });

    // solution 2
    observableProduct
      .pipe(
        mergeMap((products) => {
          return from(products).pipe(
            mergeMap((product, index) => {
              return from(pictureRepo.reqGetPictures()).pipe(
                mergeMap((picture) => {
                  product.url = picture[index].url ?? '';
                  return of(product);
                })
              );
            }),
            toArray()
          );
        })
      )
      .subscribe({
        next: (values) => {
          console.log('result2: ', values);
        },
      });

    return new Promise((resolve, reject) => {
      this.getInstance()
        .get<Product[]>('/products')
        .then((res) => {
          from(res.data)
            .pipe(
              mergeMap((product: Product, index: number) =>
                from(pictureRepo.reqGetPictures()).pipe(
                  mergeMap((picture) => {
                    product.url = picture[index].url ?? '';
                    return of(product);
                  })
                )
              )
            )
            .subscribe(() => {
              resolve(res.data);
            });
        })
        .catch((err) => reject(err));
    });
  }
}
