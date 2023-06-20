import {
  PictureRepositoryAble,
  PictureServiceAble,
} from "../datasources/interfaces/picture";

export class PictureRepository implements PictureRepositoryAble {
  private service: PictureServiceAble;
  constructor(service: PictureServiceAble) {
    this.service = service;
  }

  getPictures = () => {
    return this.service.reqGetPictures();
  };
}
