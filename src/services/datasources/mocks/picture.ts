import { Picture, PictureServiceAble } from "../interfaces/picture";

class PictureServiceMock implements PictureServiceAble {
  reqGetPictures(): Promise<Picture[]> {
    return new Promise<Picture[]>((resolve, _reject) => {
      resolve([
        {
          id: 1,
          alt_description: "This is the description for picture 1 (mock).",
          url: "https://plus.unsplash.com/premium_photo-1685030411266-1df0345a7623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
        },
      ]);
    });
  }
}
export default PictureServiceMock;
