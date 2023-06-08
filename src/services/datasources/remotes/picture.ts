import RandPicRemote from "../../randPicRemote";
import { Picture, PictureServiceAble } from "../interfaces/picture";

export class PictureService
  extends RandPicRemote
  implements PictureServiceAble
{
  reqGetPictures(): Promise<Picture[]> {
    return new Promise((resolve, reject) => {
      this.getInstance()
        .get<Picture[]>(
          "/random?client_id=zgz4LvwBhbie6FZ4Xmy7kgVtopH2tv_gEXtfSwBXMtU"
        )
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  }
}
