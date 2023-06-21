import { Observable, from, map } from 'rxjs';
import RandPicRemote from '../../pictureRemote';
import { Picture, PictureServiceAble } from '../interfaces/picture';

export class PictureService
  extends RandPicRemote
  implements PictureServiceAble
{
  reqGetPictures(): Observable<Picture[]> {
    return from(this.getInstance().get<Picture[]>('/pictures')).pipe(
      map((res) => res.data)
    );
  }
}
