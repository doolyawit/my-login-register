import BaseAxios from "./baseAxios";

class RandPicRemote extends BaseAxios {
  constructor() {
    super({
      baseURL: "https://api.unsplash.com/photos",
    });
  }
}

export default RandPicRemote;
