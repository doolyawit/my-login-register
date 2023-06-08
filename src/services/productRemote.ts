import BaseAxios from "./baseAxios";

class ProductRemote extends BaseAxios {
  constructor() {
    super({ baseURL: "http://localhost:8001/api" });
  }
}

export default ProductRemote;
