import { useEffect, useMemo, useState } from "react";
import { PictureRepositoryAble } from "../../services/datasources/interfaces/picture";
import { Product } from "../../services/datasources/interfaces/product";
import { PictureRepository } from "../../services/picture";
import { PictureService } from "../../services/datasources/remotes/picture";
import Button from "../Button";
import ProductModal from "./productModal";

export default function ProductCard({ product }: { product: Product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const [photoUrl, setPhotoUrl] = useState("");
  // const pictureRepo: PictureRepositoryAble = useMemo(() => {
  //   return new PictureRepository(new PictureService());
  // }, []);

  // useEffect(() => {
  //   pictureRepo
  //     .getPictures()
  //     .then((res) => {
  //       console.log(res);
  //       setPhotoUrl(res.urls.regular);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  return (
    <div className="mx-5 rounded-xl  bg-gradient-to-b from-orange to-white drop-shadow-2xl backdrop-blur-lg">
      <div className=" max-w-2xl  sm:px-6 lg:max-w-7xl lg:px-6">
        <div key={product.id} className=" flex flex-col py-5 ">
          <div className=" w-full overflow-hidden rounded-md bg-gray-200">
            <img
              src={
                "https://images.unsplash.com/photo-1685902397640-04a02fde0f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              }
              alt={product.name}
              className="h-6  w-full object-cover object-center md:h-1/3  lg:h-full lg:w-full"
            />
          </div>

          <div className="mt-4 flex justify-between text-black">
            <div className="flex flex-col">
              <div className=" self-start text-black">{product.name}</div>
              <div className=" self-start text-xs font-extrabold text-blue">
                {product.category}
              </div>
            </div>
            <div className=" mt-1  h-full rounded-full border  border-solid border-black bg-yellow px-3 text-xs">
              ${product.price}
            </div>
          </div>

          <div className="mt-4 ">
            <p className="mt-1 text-left text-xs text-black">
              {product.description}
            </p>
          </div>
        </div>
      </div>
      <Button
        word="DETAILS"
        cusStyle="mx-auto mb-4 flex w-1/2	 justify-center rounded-full px-1 py-1.5 text-xs font-extrabold leading-6 text-black shadow-sm hover:bg-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange bg-transparent border border-black"
        handleClick={openModal}
      ></Button>

      <ProductModal
        product={product}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        closeModal={closeModal}
      />
    </div>
  );
}
