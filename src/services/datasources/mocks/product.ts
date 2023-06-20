import { Product, ProductServiceAble } from '../interfaces/product';
import PictureServiceMock from './picture';

class ProductServiceMock implements ProductServiceAble {
  reqGetProducts(): Promise<Product[]> {
    const pictureRepo = new PictureServiceMock();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise<Product[]>((resolve, _reject) => {
      pictureRepo.reqGetPictures().then((res) => {
        const url = res[0].url;
        resolve([
          {
            id: 1,
            name: 'Product 1',
            description: 'This is the description for product 1 (mock).',
            price: 9.99,
            category: 'Category 1',
            url: url,
          },
        ]);
      });
    });
  }
}

export default ProductServiceMock;
