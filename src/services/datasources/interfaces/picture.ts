export interface Picture {
  id: number;
  alt_description: string;
  urls: {
    full: string;
    regular: string;
  };
}

export interface PictureServiceAble {
  reqGetPictures(): Promise<Picture[]>;
}

export interface PictureRepositoryAble {
  getPictures: () => Promise<Picture[]>;
}
