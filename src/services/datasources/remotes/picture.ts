import RandPicRemote from "../../pictureRemote";
import { Picture, PictureServiceAble } from "../interfaces/picture";

export class PictureService
  extends RandPicRemote
  implements PictureServiceAble
{
  reqGetPictures(): Promise<Picture[]> {
    return new Promise((resolve, reject) => {
      this.getInstance()
        .get<Picture[]>("/pictures")
        //TODO : maybe fix size here b4 resolve
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  }
}