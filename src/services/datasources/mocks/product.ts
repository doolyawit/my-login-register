import { Product, ProductServiceAble } from "../interfaces/product";

class ProductServiceMock implements ProductServiceAble {
  reqGetProducts(): Promise<Product[]> {
    return new Promise<Product[]>((resolve, _reject) => {
      resolve([
        {
          id: 1,
          name: "Product 1",
          description: "This is the description for product 1 (mock).",
          price: 9.99,
          category: "Category 1",
        },
      ]);
    });
  }
}

export default ProductServiceMock;
