import { useProductDetailModal } from "../../hooks/useProductDetailModal";
import BaseModal from "../BaseModal";
import Button from "../Button";
import { ProductDetailModalProps } from "../interfaces/product";

function ProductDetailModal({ product }: ProductDetailModalProps) {
  const { isModalOpen, closeModal, modalLabel } = useProductDetailModal();
  return (
    <BaseModal
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      modalLabel={modalLabel}
    >
      <div className="m-0 hidden h-full w-full flex-col  justify-normal  bg-green sm:flex">
        {/* TODO: fix scroll the whole page */}
        <div className="mb-4 flex justify-between border-b  border-solid  border-black px-4 py-3 sm:mb-0">
          <span className=" text-black sm:text-lg">DETAILS</span>
          <Button
            label="X"
            onClick={() => {
              closeModal();
            }}
            customizeStyle="bg-transparent border-black border  w-8 h-8   hover:bg-red text-black "
          ></Button>
        </div>

        <div className="flex justify-between gap-5 p-7 sm:gap-3  sm:px-5 sm:py-3 lg:py-3">
          <div className="w-1/2">
            {/* TODO: set size of image to equal */}
            <img
              src={product.url}
              alt=""
              className="h-96 w-screen sm:relative  sm:h-full sm:w-full"
            />
          </div>
          <div className="w-11/12">
            <div className=" relative left-80 mt-1 w-1/3 rounded-full border border-solid border-black bg-pink px-3 text-center text-2xl sm:left-0 sm:mt-0 sm:w-full sm:text-xl lg:left-72 xl:left-96">
              {product.name}
            </div>
            <div className="mr-2 mt-4 text-right text-sm sm:mr-1 sm:mt-2">
              {product.category}
            </div>
            <div className=" text-xl sm:text-base">${product.price}</div>
            <div className="description-container relative bg-green sm:mt-1 sm:text-xs">
              <p className={"no-scrollbar h-52 max-h-52 overflow-scroll"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Egestas maecenas pharetra convallis posuere morbi leo urna.
                Purus in massa tempor nec feugiat. Scelerisque eleifend donec
                pretium vulputate sapien. Lacinia quis vel eros donec ac odio
                tempor orci dapibus. Non odio euismod lacinia at quis. Mattis
                aliquam faucibus purus in massa tempor nec feugiat nisl. Id
                velit ut tortor pretium viverra suspendisse potenti nullam ac.
                Tellus pellentesque eu tincidunt tortor aliquam nulla. Euismod
                elementum nisi quis eleifend quam. Tincidunt ornare massa eget
                egestas. Malesuada nunc vel risus commodo viverra. Vel elit
                scelerisque mauris pellentesque pulvinar pellentesque. Aliquet
                enim tortor at auctor urna nunc id cursus. Sit amet volutpat
                consequat mauris nunc congue. Elementum pulvinar etiam non quam.
                Egestas sed sed risus pretium quam vulputate dignissim. Eros
                donec ac odio tempor. Ipsum consequat nisl vel pretium lectus
                quam id. Pulvinar etiam non quam lacus suspendisse faucibus.
                Quis lectus nulla at volutpat diam ut venenatis tellus. Cum
                sociis natoque penatibus et magnis. Arcu felis bibendum ut
                tristique et. Orci dapibus ultrices in iaculis nunc sed augue.
                Aliquet enim tortor at auctor. Nam at lectus urna duis convallis
                convallis. Odio eu feugiat pretium nibh. Pellentesque habitant
                morbi tristique senectus et netus. Dis parturient montes
                nascetur ridiculus mus mauris vitae ultricies. Eleifend mi in
                nulla posuere sollicitudin aliquam. Eu sem integer vitae justo
                eget magna fermentum. Nunc lobortis mattis aliquam faucibus. Eu
                mi bibendum neque egestas congue quisque. Pharetra magna ac
                placerat vestibulum lectus mauris ultrices eros. Eget gravida
                cum sociis natoque penatibus et. Volutpat consequat mauris nunc
                congue. Pretium nibh ipsum consequat nisl. llus. Cum sociis
                natoque penatibus et magnis. Arcu felis bibendum ut tristique
                et. Orci dapibus ultrices in iaculis nunc sed augue. Aliquet
                enim tortor at auctor. Nam at lectus urna duis convallis
                convallis. Odio eu feugiat pretium nibh. Pellentesque habitant
                morbi tristique senectus et netus. Dis parturient montes
                nascetur ridiculus mus mauris vitae ultricies. Eleifend mi in
                nulla posuere sollicitudin aliquam. Eu sem integer vitae justo
                eget magna fermentum. Nunc lobortis mattis aliquam faucibus. Eu
                mi bibendum neque egestas congue quisque. Pharetra magna ac
                placerat vestibulum lectus mauris ultrices eros. Eget gravida
                cum sociis natoque penatibus et. Volutpat consequat mauris nunc
                congue. Pretium nibh ipsum consequat nisl.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-10 sm:gap-5	 lg:content-stretch lg:bg-green">
          <Button
            label="Cancel"
            onClick={() => {
              closeModal();
            }}
            customizeStyle="bg-transparent border-black border  hover:bg-red sm:text-sm "
          ></Button>
          <Button
            label="Save to Bookmark"
            customizeStyle="bg-transparent border-black border  hover:bg-yellow sm:text-sm"
          ></Button>
        </div>
      </div>

      {/* Mobile - start */}
      <div className="h-11/12 m-0 flex w-full  flex-col  justify-normal bg-green sm:hidden md:hidden lg:hidden xl:hidden">
        {/* TODO: fix scroll the whole page */}
        <div className="mb-4 flex justify-between  border-b  border-solid border-black px-4 py-3">
          <span className="text-lg text-black sm:text-2xl">DETAILS</span>
          <Button
            label="X"
            onClick={() => {
              closeModal();
            }}
            customizeStyle="bg-transparent border-black border  w-8 h-8   hover:bg-red text-black"
          ></Button>
        </div>

        <div className="flex flex-col justify-between gap-5 px-5">
          {/* TODO: set size of image to equal */}
          <img src={product.url} alt="" className="h-36 w-screen rounded-xl" />

          <div className="w-11/12">
            <div className="  text-md ml-20 w-2/3 rounded-full border border-solid border-black bg-pink px-3 text-center text-black">
              {product.name}
            </div>
            <div className=" mt-2 text-right text-xs text-black">
              {product.category}
            </div>
            <div className=" text-md w-1/3 rounded-full border border-solid border-black bg-yellow text-center text-black ">
              ${product.price}
            </div>
            <div className="description-container relative mb-2 mt-2 bg-green text-xs text-black">
              <p
                className={"no-scrollbar h-44 max-h-52 w-full overflow-scroll"}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Egestas maecenas pharetra convallis posuere morbi leo urna.
                Purus in massa tempor nec feugiat. Scelerisque eleifend donec
                pretium vulputate sapien. Lacinia quis vel eros donec ac odio
                tempor orci dapibus. Non odio euismod lacinia at quis. Mattis
                aliquam faucibus purus in massa tempor nec feugiat nisl. Id
                velit ut tortor pretium viverra suspendisse potenti nullam ac.
                Tellus pellentesque eu tincidunt tortor aliquam nulla. Euismod
                elementum nisi quis eleifend quam. Tincidunt ornare massa eget
                egestas. Malesuada nunc vel risus commodo viverra. Vel elit
                scelerisque mauris pellentesque pulvinar pellentesque. Aliquet
                enim tortor at auctor urna nunc id cursus. Sit amet volutpat
                consequat mauris nunc congue. Elementum pulvinar etiam non quam.
                Egestas sed sed risus pretium quam vulputate dignissim. Eros
                donec ac odio tempor. Ipsum consequat nisl vel pretium lectus
                quam id. Pulvinar etiam non quam lacus suspendisse faucibus.
                Quis lectus nulla at volutpat diam ut venenatis tellus. Cum
                sociis natoque penatibus et magnis. Arcu felis bibendum ut
                tristique et. Orci dapibus ultrices in iaculis nunc sed augue.
                Aliquet enim tortor at auctor. Nam at lectus urna duis convallis
                convallis. Odio eu feugiat pretium nibh. Pellentesque habitant
                morbi tristique senectus et netus. Dis parturient montes
                nascetur ridiculus mus mauris vitae ultricies. Eleifend mi in
                nulla posuere sollicitudin aliquam. Eu sem integer vitae justo
                eget magna fermentum. Nunc lobortis mattis aliquam faucibus. Eu
                mi bibendum neque egestas congue quisque. Pharetra magna ac
                placerat vestibulum lectus mauris ultrices eros. Eget gravida
                cum sociis natoque penatibus et. Volutpat consequat mauris nunc
                congue. Pretium nibh ipsum consequat nisl. llus. Cum sociis
                natoque penatibus et magnis. Arcu felis bibendum ut tristique
                et. Orci dapibus ultrices in iaculis nunc sed augue. Aliquet
                enim tortor at auctor. Nam at lectus urna duis convallis
                convallis. Odio eu feugiat pretium nibh. Pellentesque habitant
                morbi tristique senectus et netus. Dis parturient montes
                nascetur ridiculus mus mauris vitae ultricies. Eleifend mi in
                nulla posuere sollicitudin aliquam. Eu sem integer vitae justo
                eget magna fermentum. Nunc lobortis mattis aliquam faucibus. Eu
                mi bibendum neque egestas congue quisque. Pharetra magna ac
                placerat vestibulum lectus mauris ultrices eros. Eget gravida
                cum sociis natoque penatibus et. Volutpat consequat mauris nunc
                congue. Pretium nibh ipsum consequat nisl.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-4 flex justify-center gap-6">
          <Button
            label="Cancel"
            onClick={() => {
              closeModal();
            }}
            customizeStyle="bg-transparent border-black border  hover:bg-red  text-black text-xs"
          ></Button>
          <Button
            label="Save to Bookmark"
            customizeStyle="bg-transparent border-black border  hover:bg-yellow  text-black text-xs"
            onClick={() => {
              console.log("save to bookmark");
            }}
          ></Button>
        </div>
      </div>
    </BaseModal>
  );
}

export default ProductDetailModal;
