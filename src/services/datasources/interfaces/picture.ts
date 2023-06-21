import { Observable } from 'rxjs';

export interface Picture {
  id: number;
  alt_description: string;
  url: string;
}

export interface PictureServiceAble {
  reqGetPictures(): Observable<Picture[]>;
}

export interface PictureRepositoryAble {
  getPictures: () => Observable<Picture[]>;
}
