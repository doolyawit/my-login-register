export interface Picture {
  id: number;
  alt_description: string;
  url: string;
}

export interface PictureServiceAble {
  reqGetPictures(): Promise<Picture[]>;
}

export interface PictureRepositoryAble {
  getPictures: () => Promise<Picture[]>;
}
