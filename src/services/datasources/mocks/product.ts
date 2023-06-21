import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product, ProductServiceAble } from '../interfaces/product';
import PictureServiceMock from './picture';

class ProductServiceMock implements ProductServiceAble {
  reqGetProducts(): Observable<Product[]> {
    const pictureRepo = new PictureServiceMock();

    return from(pictureRepo.reqGetPictures()).pipe(
      map((res) => {
        const url = res[0].url;
        return [
          {
            id: 1,
            name: 'Product 1',
            description: 'This is the description for product 1 (mock).',
            price: 9.99,
            category: 'Category 1',
            url: url,
          },
        ];
      })
    );
  }
}

export default ProductServiceMock;
