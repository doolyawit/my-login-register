import { useInformationModal } from "../../hooks/useInformationModal";
import { Product } from "../../services/datasources/interfaces/product";
import InformationModal from "./InformationModal";

function ProductDetailModal({
  products,
  productIndex,
}: {
  products: Product[];
  productIndex: number;
}) {
  const { closeModal } = useInformationModal();
  const mobile = () => {
    return (
      <div className="flex h-4/6 flex-col justify-between gap-5 px-5 sm:hidden md:hidden lg:hidden  xl:hidden">
        {/* img & pd name */}
        <div className="flex flex-1 gap-2">
          <img
            src={products[productIndex]?.url}
            alt={products[productIndex]?.name}
            className="h-20 w-6/12 shrink-0 rounded-xl"
          />
          <div className="relative flex flex-1 flex-col">
            <div className=" mx-auto h-2/6  w-full rounded-full border border-solid border-black bg-pink px-2 py-1  text-center text-2xs font-extrabold text-black">
              {products[productIndex]?.name}
            </div>
            <div className=" mt-1 text-right text-3xs text-black">
              {products[productIndex]?.category}
            </div>
            <div className="absolute bottom-0 right-0 w-1/2 rounded-full border border-solid border-black bg-yellow text-center text-3xs text-black">
              ${products[productIndex]?.price}
            </div>
          </div>
        </div>
        {/* description */}
        <div className="w-full">
          <div className="description-container relative mb-2 bg-green text-justify text-2xs text-black">
            <p className="h-34 max-h-40 overflow-scroll">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas maecenas pharetra convallis posuere morbi leo urna. Purus
              in massa tempor nec feugiat. Scelerisque eleifend donec pretium
              vulputate sapien. Lacinia quis vel eros donec ac odio tempor orci
              dapibus. Non odio euismod lacinia at quis. Mattis aliquam faucibus
              purus in massa tempor nec feugiat nisl. Id velit ut tortor pretium
              viverra suspendisse potenti nullam ac. Tellus pellentesque eu
              tincidunt tortor aliquam nulla. Euismod elementum nisi quis
              eleifend quam. Tincidunt ornare massa eget egestas. Malesuada nunc
              vel risus commodo viverra. Vel elit scelerisque mauris
              pellentesque pulvinar pellentesque. Aliquet enim tortor at auctor
              urna nunc id cursus. Sit amet volutpat consequat mauris nunc
              congue. Elementum pulvinar etiam non quam. Egestas sed sed risus
              pretium quam vulputate dignissim. Eros donec ac odio tempor. Ipsum
              consequat nisl vel pretium lectus quam id. Pulvinar etiam non quam
              lacus suspendisse faucibus. Quis lectus nulla at volutpat diam ut
              venenatis tellus. Cum sociis natoque penatibus et magnis. Arcu
              felis bibendum ut tristique et. Orci dapibus ultrices in iaculis
              nunc sed augue. Aliquet enim tortor at auctor. Nam at lectus urna
              duis convallis convallis. Odio eu feugiat pretium nibh.
              Pellentesque habitant morbi tristique senectus et netus. Dis
              parturient montes nascetur ridiculus mus mauris vitae ultricies.
              Eleifend mi in nulla posuere sollicitudin aliquam. Eu sem integer
              vitae justo eget magna fermentum. Nunc lobortis mattis aliquam
              faucibus. Eu mi bibendum neque egestas congue quisque. Pharetra
              magna ac placerat vestibulum lectus mauris ultrices eros. Eget
              gravida cum sociis natoque penatibus et. Volutpat consequat mauris
              nunc congue. Pretium nibh ipsum consequat nisl. llus. Cum sociis
              natoque penatibus et magnis. Arcu felis bibendum ut tristique et.
              Orci dapibus ultrices in iaculis nunc sed augue. Aliquet enim
              tortor at auctor. Nam at lectus urna duis convallis convallis.
              Odio eu feugiat pretium nibh. Pellentesque habitant morbi
              tristique senectus et netus. Dis parturient montes nascetur
              ridiculus mus mauris vitae ultricies. Eleifend mi in nulla posuere
              sollicitudin aliquam. Eu sem integer vitae justo eget magna
              fermentum. Nunc lobortis mattis aliquam faucibus. Eu mi bibendum
              neque egestas congue quisque. Pharetra magna ac placerat
              vestibulum lectus mauris ultrices eros. Eget gravida cum sociis
              natoque penatibus et. Volutpat consequat mauris nunc congue.
              Pretium nibh ipsum consequat nisl.
            </p>
          </div>

          <div className="relative"></div>
        </div>
      </div>
    );
  };

  return (
    <InformationModal
      modalLabel="Product Detail Modal"
      title="DETAILS"
      button1Label="Cancel"
      button1OnClick={() => {
        closeModal();
      }}
      button2Label="Add to Cart"
      button2OnClick={() => {
        console.log("Add to cart");
      }}
    >
      <div className=" hidden justify-between gap-5 p-7  sm:flex sm:gap-3 sm:px-5 sm:py-3 md:flex lg:flex lg:py-3 xl:flex">
        <div className="w-1/2 lg:w-1/3">
          <img
            src={products[productIndex]?.url}
            alt=""
            className="h-96 w-screen sm:relative  sm:h-full sm:w-full"
          />
        </div>
        <div className="w-11/12">
          <div className=" relative left-80 mt-1 w-1/3 rounded-full border border-solid border-black bg-pink px-3 text-center text-2xl text-black sm:left-0 sm:mt-0 sm:w-full sm:text-xl lg:left-0 xl:left-0">
            {products[productIndex]?.name}
          </div>
          <div className="mr-2 mt-4 text-right text-sm text-black sm:mr-1 sm:mt-2">
            {products[productIndex]?.category}
          </div>
          <div className=" text-xl text-black sm:text-base">
            ${products[productIndex]?.price}
          </div>
          <div className="description-container relative bg-green sm:mt-1 sm:text-xs">
            <p className={"h-52 max-h-52 overflow-scroll text-black"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas maecenas pharetra convallis posuere morbi leo urna. Purus
              in massa tempor nec feugiat. Scelerisque eleifend donec pretium
              vulputate sapien. Lacinia quis vel eros donec ac odio tempor orci
              dapibus. Non odio euismod lacinia at quis. Mattis aliquam faucibus
              purus in massa tempor nec feugiat nisl. Id velit ut tortor pretium
              viverra suspendisse potenti nullam ac. Tellus pellentesque eu
              tincidunt tortor aliquam nulla. Euismod elementum nisi quis
              eleifend quam. Tincidunt ornare massa eget egestas. Malesuada nunc
              vel risus commodo viverra. Vel elit scelerisque mauris
              pellentesque pulvinar pellentesque. Aliquet enim tortor at auctor
              urna nunc id cursus. Sit amet volutpat consequat mauris nunc
              congue. Elementum pulvinar etiam non quam. Egestas sed sed risus
              pretium quam vulputate dignissim. Eros donec ac odio tempor. Ipsum
              consequat nisl vel pretium lectus quam id. Pulvinar etiam non quam
              lacus suspendisse faucibus. Quis lectus nulla at volutpat diam ut
              venenatis tellus. Cum sociis natoque penatibus et magnis. Arcu
              felis bibendum ut tristique et. Orci dapibus ultrices in iaculis
              nunc sed augue. Aliquet enim tortor at auctor. Nam at lectus urna
              duis convallis convallis. Odio eu feugiat pretium nibh.
              Pellentesque habitant morbi tristique senectus et netus. Dis
              parturient montes nascetur ridiculus mus mauris vitae ultricies.
              Eleifend mi in nulla posuere sollicitudin aliquam. Eu sem integer
              vitae justo eget magna fermentum. Nunc lobortis mattis aliquam
              faucibus. Eu mi bibendum neque egestas congue quisque. Pharetra
              magna ac placerat vestibulum lectus mauris ultrices eros. Eget
              gravida cum sociis natoque penatibus et. Volutpat consequat mauris
              nunc congue. Pretium nibh ipsum consequat nisl. llus. Cum sociis
              natoque penatibus et magnis. Arcu felis bibendum ut tristique et.
              Orci dapibus ultrices in iaculis nunc sed augue. Aliquet enim
              tortor at auctor. Nam at lectus urna duis convallis convallis.
              Odio eu feugiat pretium nibh. Pellentesque habitant morbi
              tristique senectus et netus. Dis parturient montes nascetur
              ridiculus mus mauris vitae ultricies. Eleifend mi in nulla posuere
              sollicitudin aliquam. Eu sem integer vitae justo eget magna
              fermentum. Nunc lobortis mattis aliquam faucibus. Eu mi bibendum
              neque egestas congue quisque. Pharetra magna ac placerat
              vestibulum lectus mauris ultrices eros. Eget gravida cum sociis
              natoque penatibus et. Volutpat consequat mauris nunc congue.
              Pretium nibh ipsum consequat nisl.
            </p>
          </div>
        </div>
      </div>
      {mobile()}
    </InformationModal>
  );
}

export default ProductDetailModal;
